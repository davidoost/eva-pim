export type FormState<T extends Record<string, unknown>> = {
  status: FormStateStatus;
  fieldValues?: Partial<T>;
  fieldErrors?: FieldErrors<T>;
  formErrors?: string[];
};

export type FieldErrors<T extends Record<string, unknown>> = Partial<
  Record<keyof T, { errors: string[] }>
>;

export type FormStateStatus = "default" | "error" | "success";

export type MigrationFile = {
  SystemID: string;
  DownloadImagesInBackground: boolean;
  LayerName: string;
  AllowEmptyMedia: boolean;
  Products: [];
};

export type MigrationProduct = {
  ID: string;
  Name: string;
  TaxCode: string;
};

export type ImportProducts = {
  AllowEmptyMedia: boolean; // always true (delete images if not included in the request)
  DownloadMediaInBackground: boolean; // always true (download images asynchronously)
  Products: Product; // TODO
  SystemID: string; // "eva-simple-pim"
  Type: number; // 0
  WaitForProductComposition: boolean; // always false
};

export type Product = {
  Barcodes?: string[]; // barcodes for this product
  Content: ProductContent[];
  ID: string; // product identifier (we should generate this)
  IsDeleted?: boolean; // set to true to delete product
  LedgerClassID?: string;
  Name: string;
  TaxCode: string;
  Type: ProductTypes;
  VariationValues?: ProductVariationValue[];
  Variations: ProductVariation[];
  GiftCardConfigurationID?: string;
  GiftCardIsDigital?: boolean;
};

export type ProductTypes = {
  AllowCustomPricing: boolean;
  BundleProduct: boolean;
  GiftCard: boolean;
  NotReturnable: boolean;
  Service: boolean;
  Stock: boolean;
  SubscriptionProduct: boolean;
  VirtualProduct: boolean;
};

export type ProductContent = {
  LanguageID?: string; // 2 letter iso code
  LongDescription: string;
  Media: ProductMedia[];
  Name: string;
  PublicationStatuses: PublicationStatus[];
  ShortDescription?: string;
  XDimension?: Dimension;
  YDimension?: Dimension;
};

export type ProductMedia = {
  ID: string;
  IsPrimaryImage: boolean;
  MediaUrl: string;
  Sequence: number;
};

export type Dimension = {
  property: string;
  value: string;
};

export type PublicationStatus = "public";

export type ProductVariationValue = {
  LanguageID?: string; // 2 letter iso code
  Value: string;
};

export type ProductVariation = {
  LogicalLevel: string;
  Property: string;
  Products: string; // todo
};

// Onboarding flow:
// - Do you have a default language for content?
// - Do you have a default Brand name?
