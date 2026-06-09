
export interface VertexContainerImage {
  Password?: string;
  Registry?: string;
  Repository?: string;
  Tag?: string;
  Username?: string;
}

export interface VertexContainerImageUpdateModel {
  Password?: string | null;
  Registry?: string | null;
  Repository?: string | null;
  Tag?: string | null;
  Username?: string | null;
}

export interface VertexTaxProviderConfiguration {
  CleanseAddress?: boolean;
  ContainerImage?: VertexContainerImage;
  Host?: string;
  Password?: string;
  SellerCompany?: string;
  SellerDivision?: string;
  UseMappingHack?: boolean;
  UseOriginalTaxCodeWhenExempt?: boolean;
  UseProductGroup?: boolean;
  Username?: string;
}

export interface VertexTaxProviderConfigurationUpdateModel {
  CleanseAddress?: boolean;
  ContainerImage?: VertexContainerImageUpdateModel;
  Host?: string | null;
  Password?: string | null;
  SellerCompany?: string | null;
  SellerDivision?: string | null;
  UseMappingHack?: boolean;
  UseOriginalTaxCodeWhenExempt?: boolean;
  UseProductGroup?: boolean;
  Username?: string | null;
}

