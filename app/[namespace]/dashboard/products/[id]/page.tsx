import DeleteProductFormModal from "@/components/forms/delete-product/modal";
import UpdateProductFormModal from "@/components/forms/update-product/modal";
import DashboardCard from "@/components/layout/dashboard-card";
import DashboardPageHeader from "@/components/layout/dashboard-page-header";
import { Setting, SettingsLayout } from "@/components/layout/settings-layout";
import ProductStatusChip from "@/components/product-status-chip";
import PublicationStatusChip from "@/components/publication-status-chip";
import { core } from "@/lib/core";
import { SelectProductImage } from "@/lib/db/types";
import { Chip, Surface } from "@heroui/react";
import { Icon } from "@iconify/react";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";

function MediaCard({ images }: { images: SelectProductImage[] }) {
  if (images.length === 0) {
    return (
      <DashboardCard title="Media">
        <div className="flex flex-col items-center gap-2 py-6 text-center">
          <Icon icon="hugeicons:image-01" className="size-6 text-muted" />
          <span className="text-sm text-muted">No images</span>
        </div>
      </DashboardCard>
    );
  }

  const sorted = [...images].sort((a, b) => a.sequence - b.sequence);

  return (
    <DashboardCard title="Media">
      <div className="flex flex-wrap gap-3">
        {sorted.map((img) => {
          const url = img.externalUrl ?? img.imageUrl;
          return (
            <div key={img.id} className="relative">
              <img
                src={url}
                alt=""
                className="size-24 rounded-lg object-cover border border-separator"
              />
              {img.primaryImage && (
                <span className="absolute bottom-1 left-1">
                  <Chip size="sm" variant="soft" color="accent">
                    Primary
                  </Chip>
                </span>
              )}
            </div>
          );
        })}
      </div>
    </DashboardCard>
  );
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string; namespace: string }>;
}) {
  const { id, namespace } = await params;

  const environment = await core.getEnvironmentByNamespace(namespace);
  if (!environment) notFound();

  const [product, taxCodes, productProperties] = await Promise.all([
    environment.getProduct(id),
    environment.listTaxCodes(await cookies()),
    environment.listProductProperties(await cookies()),
  ]);
  if (!product) notFound();

  return (
    <>
      <DashboardPageHeader title={product.name} description={product.id}>
        <div className="flex">
          <UpdateProductFormModal
            product={product}
            taxCodes={taxCodes}
            productProperties={productProperties}
          />
          <DeleteProductFormModal productId={product.id} />
        </div>
      </DashboardPageHeader>

      <DashboardCard title="Synchronization Status">
        <SettingsLayout>
          <Setting label="Status">
            <ProductStatusChip product={product} />
          </Setting>
          <Setting
            label="Created"
            value={product.createdAt.toLocaleString("en-GB")}
          />
          <Setting
            label="Last Updated"
            value={product.lastUpdatedAt.toLocaleString("en-GB")}
          />
          <Setting
            label="Last Synced"
            value={product.lastSyncedAt?.toLocaleString("en-GB")}
          />
        </SettingsLayout>
      </DashboardCard>

      <DashboardCard title="Basic Information">
        <SettingsLayout>
          <Setting label="Status">
            <PublicationStatusChip product={product} />
          </Setting>
          <Setting label="Name" value={product.name}>
            {product.name}
          </Setting>
          <Setting label="Short Description" value={product.shortDescription}>
            {product.shortDescription}
          </Setting>
          <Setting label="Long Description" value={product.longDescription}>
            {product.longDescription}
          </Setting>
          <Setting label="Brand" value={product.brand}>
            {product.brand}
          </Setting>
        </SettingsLayout>
      </DashboardCard>

      <DashboardCard title="Variations">
        {product.childrenVariationProperty && product.children.length > 0 ? (
          <div className="flex flex-col gap-3">
            <Surface className="p-4 rounded-2xl" variant="secondary">
              <SettingsLayout>
                <Setting
                  label="Property"
                  value={product.childrenVariationProperty}
                />
                <Setting label="Values">
                  <div className="flex flex-wrap gap-1">
                    {product.children.map((c) => (
                      <Chip key={c.id} className="bg-surface">
                        {c.variationValue}
                      </Chip>
                    ))}
                  </div>
                </Setting>
              </SettingsLayout>
            </Surface>

            {product.children[0]?.childrenVariationProperty && (
              <Surface className="p-4 rounded-2xl" variant="secondary">
                <SettingsLayout>
                  <Setting
                    label="Property"
                    value={product.children[0].childrenVariationProperty}
                  />
                  <Setting label="Values">
                    <div className="flex flex-wrap gap-1">
                      {product.children[0].children.map((gc) => (
                        <Chip key={gc.id} className="bg-surface">
                          {gc.variationValue}
                        </Chip>
                      ))}
                    </div>
                  </Setting>
                </SettingsLayout>
              </Surface>
            )}
          </div>
        ) : (
          <div className="flex flex-col items-center gap-2 py-6 text-center">
            <Icon icon="hugeicons:layers-01" className="size-6 text-muted" />
            <span className="text-sm text-muted">No variations</span>
          </div>
        )}
      </DashboardCard>

      <MediaCard images={product.images} />
    </>
  );
}
