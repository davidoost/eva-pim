import { ProductWithRelations, SelectProductImage } from "../db/types";

type EvaImage = {
  ImageUrl: string;
  IsPrimaryImage?: boolean;
};

type EvaProductNode = {
  ID: string;
  Name?: string;
  TaxCode?: string;
  Brand?: string;
  IsDeleted?: boolean;
  VariationValues?: Array<{ Value: string }>;
  Content?: Array<{
    PublicationStatuses: string[];
    Name?: string;
    Images?: EvaImage[];
  }>;
  Variations?: {
    Property: string;
    LogicalLevel?: string;
    Products: EvaProductNode[];
  };
};

function mapImage(img: SelectProductImage): EvaImage {
  const url = img.externalUrl ?? img.imageUrl;
  const mapped: EvaImage = { ImageUrl: url };
  if (img.primaryImage) mapped.IsPrimaryImage = true;
  return mapped;
}

function collectDeleted(
  products: ProductWithRelations[],
): ProductWithRelations[] {
  const deleted: ProductWithRelations[] = [];
  for (const p of products) {
    if (p.isDeleted) {
      deleted.push(p);
    }
    deleted.push(...collectDeleted(p.children));
  }
  return deleted;
}

function stripDeleted(
  products: ProductWithRelations[],
): ProductWithRelations[] {
  return products
    .filter((p) => !p.isDeleted)
    .map((p) => ({ ...p, children: stripDeleted(p.children) }));
}

function buildNode(product: ProductWithRelations): EvaProductNode {
  const id = product.id;

  const node: EvaProductNode = {
    ID: id,
    Name: product.name,
  };

  if (product.taxCode) node.TaxCode = product.taxCode;
  if (product.brand) node.Brand = product.brand;

  if (product.variationValue) {
    node.VariationValues = [{ Value: product.variationValue }];
  }

  const images = [...product.images]
    .sort((a, b) => a.sequence - b.sequence)
    .map(mapImage);

  node.Content = [
    {
      PublicationStatuses: product.published ? ["public"] : [],
      Name: product.name,
      ...(images.length > 0 ? { Images: images } : {}),
    },
  ];

  if (product.children.length > 0) {
    node.Variations = {
      Property: product.childrenVariationProperty ?? "Variation",
      ...(product.childrenLogicalLevel
        ? { LogicalLevel: product.childrenLogicalLevel }
        : {}),
      Products: product.children.map(buildNode),
    };
  }

  return node;
}

export function buildPayload(
  roots: ProductWithRelations[],
): Record<string, unknown> {
  const deleted = collectDeleted(roots);
  const activeRoots = stripDeleted(roots);

  const deletedNodes: EvaProductNode[] = deleted.map((p) => ({
    ID: p.id,
    IsDeleted: true,
  }));

  return {
    SystemID: "eva-pim-app",
    DownloadImagesInBackground: true,
    LayerName: "eva-pim-app-base",
    AllowEmptyMedia: true,
    Products: [...activeRoots.map(buildNode), ...deletedNodes],
  };
}
