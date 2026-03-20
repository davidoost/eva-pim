# EVA OMS — PIM System Proposal

**Stack:** Next.js · Supabase (PostgreSQL + Storage) · EVA ImportProducts API
**Auth:** EVA authentication (gates sync; scopes data by namespace)
**Sync mode:** Always async (`/async-message/ImportProducts`)
**UI:** Web dashboard
**Languages:** Flexible / dynamic

---

## Overview

The PIM is a lightweight Next.js web app backed by Supabase. It stores the full product catalog — including hierarchy, multilingual content, images, and barcodes — and exposes a manual **Sync to EVA** button that builds the `ImportProducts` payload and pushes it via EVA's async endpoint.

Users authenticate with their EVA credentials. The authenticated EVA session is used both to gate the sync action and to scope all data by **namespace** (an EVA concept, stored as a plain string). This means a single PIM instance can serve multiple EVA environments or organisations, with full data isolation per namespace.

```
┌─────────────────────────────────────────────────────────┐
│                      Next.js PIM                        │
│                                                         │
│  EVA Login ──▶ EVA Auth token (stored in session)       │
│       │                                                 │
│       ▼                                                 │
│  Web UI  ──▶  API Routes (token verified per request)   │
│               │                                         │
│               ▼                                         │
│          Supabase DB           Supabase Storage         │
│  (all tables scoped by         (product images,         │
│   eva_namespace)                per namespace)          │
└──────────────────────────┬──────────────────────────────┘
                           │  manual sync trigger
                           ▼
               ┌──────────────────────┐
               │  EVA OMS             │
               │  POST /async-message/│
               │  ImportProducts      │
               │                      │
               │  POST /async-result/ │◀── poll / webhook
               │  ImportProducts      │
               └──────────────────────┘
```

---

## 1. Auth & Namespace

### EVA Authentication

On first load, the user is presented with an EVA login form. The app exchanges their credentials for an EVA API token, which is stored in a server-side session (e.g., via an encrypted cookie or Supabase session). Every API route verifies this token before doing anything.

The EVA token serves two purposes:
- It authenticates outbound calls to EVA (passed as the bearer token on sync requests)
- It gates access to the PIM itself — no EVA token, no access

### Namespace Scoping

The EVA **namespace** is a string tied to the authenticated user/organisation (e.g. `"brand_x_production"`). Every table that holds product or configuration data includes a `eva_namespace` column. All queries filter by the current session's namespace, providing full data isolation between tenants.

Supabase Row Level Security (RLS) can enforce this at the DB level, though application-level filtering is the primary mechanism here.

---

## 2. Database Schema

All tables below include an `eva_namespace text NOT NULL` column. Indexes on `(eva_namespace, ...)` are assumed throughout.

---

### 2.1 `config` — Per-namespace configuration

```sql
CREATE TABLE config (
  eva_namespace text NOT NULL,
  key           text NOT NULL,
  value         text,
  PRIMARY KEY (eva_namespace, key)
);

-- Default keys per namespace (seeded on first login)
-- 'eva_system_id'    → e.g. 'PIM_Integration'
-- 'eva_api_url'      → EVA base URL for this namespace
-- 'layer_name'       → e.g. 'ImportProducts-Base'
```

> **Note:** The EVA API token is never stored in the database. It lives exclusively in the server-side session, derived from the user's EVA login.

---

### 2.2 `languages` — Language reference table

```sql
CREATE TABLE languages (
  eva_namespace text NOT NULL,
  id            text NOT NULL,   -- 'en', 'nl', 'de', etc.
  name          text NOT NULL,
  created_at    timestamptz DEFAULT now(),
  PRIMARY KEY (eva_namespace, id)
);
```

---

### 2.3 `products` — All product nodes (self-referential)

A single table for all levels of the hierarchy: root products, colour variations, and size/SKU variations. Relationships are expressed via `parent_id`.

```sql
CREATE TABLE products (
  id            uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  eva_namespace text NOT NULL,

  -- EVA identity
  eva_id        text NOT NULL,   -- sent as "ID" to EVA (2–128 chars)
  UNIQUE (eva_namespace, eva_id),

  -- Hierarchy
  parent_id uuid REFERENCES products(id) ON DELETE CASCADE,

  -- How THIS product's children vary (null for leaf/SKU nodes)
  children_variation_property text,   -- e.g. "color_code"
  children_logical_level      text,   -- e.g. "color"

  -- This product's own variation value at the parent's axis (null for root)
  -- Format: [{"language_id": null, "country_id": null, "value": "BLUE"}]
  variation_values jsonb,

  -- Core fields
  name                 text,   -- required for root & colour nodes; optional for SKU
  tax_code             text,
  brand                text,
  custom_id            text,
  ledger_class_id      text,
  manufacturer_id      text,
  country_of_origin_id text,   -- ISO 2-letter code
  commodity_code       text,
  is_deleted           boolean DEFAULT false,

  -- Product type flags
  type_stock                boolean DEFAULT true,
  type_service              boolean DEFAULT false,
  type_gift_card            boolean DEFAULT false,
  type_bundle               boolean DEFAULT false,
  type_insurance            boolean DEFAULT false,
  type_subscription         boolean DEFAULT false,
  type_allow_custom_pricing boolean DEFAULT false,

  -- Status flags
  status_non_sellable       boolean DEFAULT false,
  status_disable_backorder  boolean DEFAULT false,
  status_disable_delivery   boolean DEFAULT false,
  status_disable_pickup     boolean DEFAULT false,
  status_delivery_only      boolean DEFAULT false,
  status_pre_release        boolean DEFAULT false,
  status_use_up             boolean DEFAULT false,

  -- Serial number
  require_serial_number   boolean DEFAULT false,
  serial_number_config_id int,

  -- Sync tracking
  content_hash   text,         -- SHA-256 of full product state; enables future delta sync
  last_synced_at timestamptz,

  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE INDEX ON products(eva_namespace, parent_id);
CREATE INDEX ON products(eva_namespace, last_synced_at);
```

**Hierarchy example (3 rows for one shirt + colour + size):**

| eva_id | parent_id | children_variation_property | children_logical_level | variation_values |
|---|---|---|---|---|
| `shirt_001` | null | `color_code` | `color` | null |
| `shirt_001_blue` | ↑ root | `size_code` | `size` | `[{value:"BLUE"}]` |
| `shirt_001_blue_xl` | ↑ blue | null | null | `[{value:"XL"}]` |

---

### 2.4 `product_content` — Multilingual content

```sql
CREATE TABLE product_content (
  id            uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  eva_namespace text NOT NULL,
  product_id    uuid NOT NULL REFERENCES products(id) ON DELETE CASCADE,

  language_id text,    -- null = fallback content
  country_id  text,    -- null = all countries

  name                  text,
  short_description     text,
  long_description      text,
  marketing_description text,
  tags                  text[],
  publication_statuses  text[] DEFAULT ARRAY['public'],
  custom_content        jsonb  DEFAULT '{}',

  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),

  UNIQUE(product_id, language_id, country_id)
);
```

One row per `(product, language, country)` combination. The fallback row has both `language_id` and `country_id` as null.

---

### 2.5 `product_images`

Images are stored in **Supabase Storage** under a namespaced path. The `storage_path` column holds the path within the bucket; the application derives the public URL from it at runtime. External CDN URLs can also be stored directly in `external_url` for cases where the image lives elsewhere.

```sql
CREATE TABLE product_images (
  id            uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  eva_namespace text NOT NULL,
  product_id    uuid NOT NULL REFERENCES products(id) ON DELETE CASCADE,

  -- Supabase Storage path, e.g. "brand_x_production/products/shirt_001/front.jpg"
  -- Null if image is externally hosted
  storage_path  text,

  -- External CDN URL — used as-is when storage_path is null
  external_url  text,

  name       text,
  mime_type  text,
  is_primary boolean DEFAULT false,
  sequence   int     DEFAULT 0,
  images_inherited_by_children boolean DEFAULT true,

  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),

  -- At least one of storage_path or external_url must be set (enforced at app level)
  CONSTRAINT image_has_source CHECK (storage_path IS NOT NULL OR external_url IS NOT NULL)
);

CREATE INDEX ON product_images(product_id, sequence);
```

**Supabase Storage bucket layout:**
```
bucket: pim-images/
  {eva_namespace}/
    products/
      {product_eva_id}/
        front.jpg
        detail-1.jpg
        ...
```

The image URL sent to EVA is the Supabase public URL for `storage_path`, or `external_url` when set. Because EVA won't re-download an image from the same URL, a content-hash suffix or version query param should be appended to the filename when an image is replaced.

---

### 2.6 `product_barcodes`

Handles both simple barcodes and unit barcodes (with quantity/UoM) in one table.

```sql
CREATE TABLE product_barcodes (
  id            uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  eva_namespace text NOT NULL,
  product_id    uuid NOT NULL REFERENCES products(id) ON DELETE CASCADE,

  barcode text NOT NULL,
  UNIQUE (eva_namespace, barcode),   -- barcodes must be globally unique within namespace

  -- Unit barcode fields — null means simple barcode
  quantity        decimal,
  unit_of_measure text,

  created_at timestamptz DEFAULT now()
);
```

---

### 2.7 `product_assortments`

```sql
CREATE TABLE product_assortments (
  id            uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  eva_namespace text NOT NULL,
  product_id    uuid NOT NULL REFERENCES products(id) ON DELETE CASCADE,

  assortment_code   text NOT NULL,
  start_date        timestamptz,
  end_date          timestamptz,
  announcement_date timestamptz,
  pre_sale_date     timestamptz,
  shipment_date     timestamptz,
  product_status    jsonb,   -- e.g. {"PreRelease": true}

  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),

  UNIQUE(product_id, assortment_code)
);
```

---

### 2.8 `custom_property_types`

Definitions sent in every `ImportProducts` call so EVA knows how to index custom fields.

```sql
CREATE TABLE custom_property_types (
  id               uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  eva_namespace    text NOT NULL,

  property_type_id text NOT NULL,   -- e.g. "fabric_type"
  UNIQUE (eva_namespace, property_type_id),

  category_id  text DEFAULT 'default',
  data_type    int  DEFAULT 0,   -- 0=String 1=Int 2=Double 3=Bool 4=Date
  index_type   int  DEFAULT 3,   -- 0=NotIndexed 1=IndexedNotAnalyzed 2=IndexedAnalyzed 3=Both
  is_array     boolean DEFAULT false,
  description  text,             -- internal note only; not sent to EVA

  created_at timestamptz DEFAULT now()
);
```

---

### 2.9 `sync_runs` — Audit log

```sql
CREATE TABLE sync_runs (
  id            uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  eva_namespace text NOT NULL,

  started_at   timestamptz DEFAULT now(),
  completed_at timestamptz,
  status       text DEFAULT 'pending_async',
  -- 'pending_async' | 'success' | 'failed'

  sync_type          text DEFAULT 'full',   -- 'full' | 'delta' (for future use)
  products_submitted int,
  async_token        text,     -- EVA AsyncToken from /async-message/ImportProducts
  eva_response       jsonb,    -- raw EVA response
  error              text,
  triggered_by       text DEFAULT 'manual'
);

CREATE INDEX ON sync_runs(eva_namespace, started_at DESC);
```

---

## 3. Sync Engine

### 3.1 Always async

Every sync uses EVA's async endpoint. This removes the need for a threshold decision and makes the flow uniform regardless of catalog size.

```
POST /api/sync
     │
     ▼
1. Verify EVA session token
     │
     ▼
2. Create sync_run  (status: 'pending_async')
     │
     ▼
3. Fetch all root products for this namespace (parent_id IS NULL, is_deleted = false)
   For each: fetch children recursively + content + images + barcodes + assortments
   (single recursive CTE — no N+1 queries)
     │
     ▼
4. Build ImportProducts payload
   { SystemID, LayerName, DownloadImagesInBackground: true,
     CustomPropertyTypes: [...],
     Products: [ ...recursive tree ] }
     │
     ▼
5. POST /async-message/ImportProducts
   → receive { AsyncToken: "abc123" }
   → update sync_run: async_token = "abc123"
     │
     ▼
6. Poll /async-result/ImportProducts?AsyncToken=abc123
   until IsAsyncResultAvailable = true
   (see §3.2 for polling strategy)
     │
     ▼
7. Update sync_run: status = 'success' | 'failed', completed_at = now()
   Update all products: last_synced_at = now(), content_hash = computed
```

### 3.2 Async polling strategy

Two approaches, choose one:

**Option A — Browser polling (simplest)**
The UI polls `GET /api/sync/[runId]` every few seconds. The API route calls EVA's result endpoint and returns the current status. No additional infrastructure needed.

**Option B — EVA webhook**
If EVA can push a result notification to a URL when the async job completes, a webhook endpoint (`POST /api/sync/webhook`) receives it, updates `sync_runs`, and marks products as synced. This removes any polling entirely.

Both can coexist: browser polling as the primary mechanism, webhook as an accelerator when available.

### 3.3 PIM state vs. last synced state

Each product row carries `content_hash` (SHA-256 of its full state) and `last_synced_at`. Whenever a product is saved, the application recomputes and stores the hash. This gives a clear signal at any time:

| State | Condition |
|---|---|
| **In sync** | `content_hash` matches current data hash, `last_synced_at` is set |
| **Changed since last sync** | Hash mismatch — product was edited after last sync |
| **Never synced** | `last_synced_at` IS NULL |

The dashboard and product list can surface this as a badge per product without additional queries — just a derived column or a simple app-side comparison.

**Enabling delta sync later** reduces to: before building the payload, filter to only products where the recomputed hash differs from `content_hash`. The schema already supports this.

**Deletions:** Products marked `is_deleted = true` are included in the next full sync with `"IsDeleted": true` set in the payload. They are not pushed immediately on deletion — consistent with how all other changes are handled.

### 3.4 Payload builder outline

```typescript
// lib/eva/payload-builder.ts

export function buildPayload(
  roots: ProductWithRelations[],
  customPropertyTypes: CustomPropertyType[],
  config: NamespaceConfig
): ImportProductsRequest {
  return {
    SystemID:                    config.eva_system_id,
    DownloadImagesInBackground:  true,
    LayerName:                   config.layer_name,
    CustomPropertyTypes:         customPropertyTypes.map(mapCustomPropertyType),
    Products:                    roots.map(buildNode),
  };
}

function buildNode(p: ProductWithRelations): EVAProductNode {
  const node: EVAProductNode = {
    ID: p.eva_id,
    ...(p.name       && { Name: p.name }),
    ...(p.tax_code   && { TaxCode: p.tax_code }),
    ...(p.brand      && { Brand: p.brand }),
    ...(p.is_deleted && { IsDeleted: true }),
    Type:         buildType(p),
    Status:       buildStatus(p),
    Content:      p.content.map(mapContent),
    Images:       p.images.map(mapImage),   // resolves storage_path → public URL
    Barcodes:     p.barcodes.filter(b => !b.quantity).map(b => b.barcode),
    UnitBarcodes: p.barcodes.filter(b => b.quantity).map(mapUnitBarcode),
    Assortments:  p.assortments.map(mapAssortment),
    ...(p.variation_values && { VariationValues: p.variation_values }),
  };

  if (p.children?.length) {
    node.Variations = {
      Property:     p.children_variation_property,
      LogicalLevel: p.children_logical_level,
      Products:     p.children.map(buildNode),  // recursive
    };
  }

  return node;
}
```

---

## 4. Next.js App Structure

```
app/
├── login/
│   └── page.tsx              ← EVA login form → exchanges credentials for session token
│
├── (dashboard)/
│   ├── layout.tsx            ← Shell: sidebar nav + header (shows namespace + user)
│   ├── page.tsx              ← Dashboard: product count, last sync, sync status badges
│   │
│   ├── products/
│   │   ├── page.tsx          ← Product list (root products, variation counts, sync badges)
│   │   ├── new/
│   │   │   └── page.tsx      ← Create root product
│   │   └── [id]/
│   │       └── page.tsx      ← Edit product — tabbed:
│   │                            [Basic Info] [Content] [Images]
│   │                            [Variations] [Assortments]
│   │
│   ├── sync/
│   │   └── page.tsx          ← Sync history + "Sync to EVA" button + async progress
│   │
│   └── settings/
│       └── page.tsx          ← Config: SystemID, API URL, LayerName, languages,
│                                custom property types
│
└── api/
    ├── auth/
    │   ├── login/route.ts     ← POST: exchange EVA credentials, set session
    │   └── logout/route.ts    ← POST: clear session
    │
    ├── products/
    │   ├── route.ts           ← GET list, POST create
    │   └── [id]/
    │       ├── route.ts       ← GET, PUT, DELETE
    │       └── variations/
    │           └── route.ts   ← GET, POST child variations
    │
    ├── sync/
    │   ├── route.ts           ← POST: trigger async sync
    │   ├── [runId]/
    │   │   └── route.ts       ← GET: poll async run status
    │   └── webhook/
    │       └── route.ts       ← POST: EVA webhook callback (optional)
    │
    ├── images/
    │   └── upload/route.ts    ← POST: upload to Supabase Storage, return storage_path
    │
    └── config/
        └── route.ts           ← GET, PUT namespace config

lib/
├── supabase/
│   ├── client.ts              ← Browser client
│   └── server.ts              ← Server client (for API routes)
│
└── eva/
    ├── client.ts              ← EVA HTTP client (injects session token)
    ├── payload-builder.ts     ← Builds ImportProducts payload from DB records
    └── sync.ts                ← Orchestrates the full async sync flow

components/
├── products/
│   ├── ProductTable.tsx       ← List with sync status badges
│   ├── ProductForm.tsx        ← Shared create/edit form
│   └── VariationTree.tsx      ← Visual tree of product hierarchy
├── sync/
│   ├── SyncButton.tsx         ← Triggers sync, shows loading state
│   ├── SyncRunTable.tsx       ← History of sync runs
│   └── SyncProgress.tsx       ← Polls /api/sync/[runId], shows live status
└── ui/
    └── (shadcn/ui components)
```

---

## 5. Key Screen Designs

### Dashboard (`/`)
- Total products / SKUs for this namespace
- Last sync: timestamp, status badge, products submitted
- **"Sync to EVA"** button — primary CTA
- Count of products changed since last sync

### Products list (`/products`)
- Table: Name, Brand, SKU count, Sync status badge (`In sync` / `Changed` / `Never synced`), Last synced at
- Filter by sync status
- "New Product" button

### Product editor (`/products/[id]`)

| Tab | Contents |
|---|---|
| **Basic Info** | eva_id, name, tax_code, brand, country of origin, type flags, status flags |
| **Content** | Language selector → name, descriptions, tags, publication status, custom_content key-value editor |
| **Images** | Upload to Supabase Storage or enter external URL; set is_primary / sequence |
| **Variations** | Visual tree: add colour variation → add size/SKU under each colour |
| **Assortments** | Assortment code + date range rows |

### Sync page (`/sync`)
- "Sync to EVA" button showing estimated product count
- Live progress panel (polls `/api/sync/[runId]` until resolved)
- Sync run history: started, duration, status, products submitted, EVA error detail

### Settings (`/settings`)
- `eva_system_id`, `eva_api_url`, `layer_name`
- Language table (add/remove)
- Custom property type definitions

---

## 6. Remaining Open Question

**Async polling:** browser-side polling (Option A) is the safe default to start with. If EVA supports a webhook callback URL, add the `/api/sync/webhook` endpoint as a drop-in enhancement — no schema changes needed, just update `sync_runs.status` on receipt.
