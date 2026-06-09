import {
  SearchIProductSearchItem,
  FilteredPagedResultRequest,
  PagedResultResponse,
  RequestMessage,
  ResponseMessage,
  RequestMessageWithEmptyResponse,
  ResourceResponseMessage,
  PagedResultRequest,
  OrganizationUnitsDtoOrganizationUnitDto,
  EVAFrameworkAPIEnumDto,
  PageConfig,
} from '../eva-services-core';


export interface RepositoriesListShelfLocationProductsFilter {
  MaximumQuantity?: number;
  MinimumQuantity?: number;
  /**
  * Entity type: Product
  */
  ProductID?: number;
  ProductQuery?: string;
  /**
  * Entity type: ShelfLocation
  */
  ShelfLocationID?: number;
}

export interface RepositoriesListShelfProductsDto {
  BackendID?: string;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID: number;
  /**
  * Entity type: Product
  */
  ProductID: number;
  Properties?: SearchIProductSearchItem;
  /**
  * Entity type: Shelf
  */
  ShelfID: number;
  ShelfName?: string;
  /**
  * Entity type: StockLabel
  */
  StockLabelID: number;
  StockLabelName?: string;
  TotalMaximumQuantity: number;
  TotalMinimumQuantity: number;
}

export interface RepositoriesListShelfProductsFilter {
  BackendID?: string;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID?: number;
  /**
  * Entity type: Product
  */
  ProductID?: number;
  /**
  * Entity type: Product
  */
  ProductIDs?: number[];
  /**
  * Entity type: Shelf
  */
  ShelfID?: number;
  /**
  * Entity type: StockLabel
  */
  StockLabelID?: number;
}

export interface RepositoriesListShelvesFilter {
  EndDateTime?: string;
  Name?: string;
  /**
  * Entity type: Product
  */
  ProductID?: number;
  StartDateTime?: string;
  /**
  * Entity type: ShelfType
  */
  TypeID?: number;
}

/**
* List an aggregated view on shelf products, summing the min- and maximum quantities per Shelf, Organization Unit, Stock Label and Product.
*/
export interface ListShelfProducts extends FilteredPagedResultRequest<RepositoriesListShelfProductsFilter, ListShelfProductsResponse> {
  /**
  * Entity type: ProductPropertyType
  */
  IncludedProperties?: string[];
  Query?: string;
}

export interface ListShelfProductsResponse extends PagedResultResponse<RepositoriesListShelfProductsDto> {
}

export interface CreateOrganizationUnitShelf extends RequestMessage<CreateOrganizationUnitShelfResponse> {
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID?: number;
  OrganizationUnitTypeID?: number;
  /**
  * Entity type: Shelf
  */
  ShelfID: number;
}

export interface CreateOrganizationUnitShelfResponse extends ResponseMessage {
  ID: number;
}

export interface CreateProductRestriction extends RequestMessage<CreateProductRestrictionResponse> {
  MaximumReplenismentQuantity?: number;
  MaximumStockQuantity?: number;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID?: number;
  OrganizationUnitTypeID?: number;
  /**
  * Entity type: Product
  */
  ProductID: number;
}

export interface CreateProductRestrictionResponse extends ResponseMessage {
  /**
  * Entity type: ProductRestriction
  */
  ID: number;
}

/**
* Create a new Shelf
*/
export interface CreateShelf extends RequestMessage<CreateShelfResponse> {
  Depth?: number;
  Description?: string;
  EndDateTime?: string;
  Height?: number;
  Name: string;
  StartDateTime: string;
  /**
  * Entity type: StockLabel
  */
  StockLabelID?: number;
  /**
  * Entity type: ShelfType
  */
  TypeID: number;
  Width?: number;
}

export interface CreateShelfBlob extends RequestMessage<CreateShelfBlobResponse> {
  BlobID: string;
  /**
  * Entity type: Shelf
  */
  ShelfID: number;
}

export interface CreateShelfBlobResponse extends ResponseMessage {
  /**
  * Entity type: ShelfBlob
  */
  ID: number;
}

export interface CreateShelfLocation extends RequestMessage<CreateShelfLocationResponse> {
  Name: string;
  /**
  * Entity type: ShelfLocation
  */
  ParentID?: number;
  /**
  * Entity type: Shelf
  */
  ShelfID: number;
  /**
  * Entity type: ShelfLocationTemplate
  */
  TemplateID: number;
}

export interface CreateShelfLocationBlob extends RequestMessage<CreateShelfLocationBlobResponse> {
  BlobID: string;
  /**
  * Entity type: ShelfLocation
  */
  ShelfLocationID: number;
}

export interface CreateShelfLocationBlobResponse extends ResponseMessage {
  ID: number;
}

export interface CreateShelfLocationProduct extends RequestMessage<CreateShelfLocationProductResponse> {
  MaximumQuantity?: number;
  MinimumQuantity?: number;
  /**
  * Entity type: Product
  */
  ProductID: number;
  /**
  * Entity type: ShelfLocation
  */
  ShelfLocationID: number;
}

export interface CreateShelfLocationProductResponse extends ResponseMessage {
  /**
  * Entity type: ShelfLocationProduct
  */
  ID: number;
}

export interface CreateShelfLocationProducts extends RequestMessage<CreateShelfLocationProductsResponse> {
  Products?: ServicesCreateShelfLocationProducts_ProductDto[];
  /**
  * Entity type: ShelfLocation
  */
  ShelfLocationID: number;
}

export interface ServicesCreateShelfLocationProducts_ProductDto {
  MaximumQuantity?: number;
  MinimumQuantity?: number;
  /**
  * Entity type: Product
  */
  ProductID: number;
}

export interface CreateShelfLocationProductsResponse extends ResponseMessage {
  IDs?: number[];
}

export interface CreateShelfLocationResponse extends ResponseMessage {
  /**
  * Entity type: ShelfLocation
  */
  ID: number;
}

export interface CreateShelfLocationTemplate extends RequestMessage<CreateShelfLocationTemplateResponse> {
  Depth?: number;
  Height?: number;
  Name: string;
  ProductLimit?: number;
  /**
  * Entity type: ShelfLocationTemplateType
  */
  TypeID: number;
  Width?: number;
}

export interface CreateShelfLocationTemplateResponse extends ResponseMessage {
  /**
  * Entity type: ShelfLocationTemplate
  */
  ID: number;
}

export interface CreateShelfLocationTemplateType extends RequestMessage<CreateShelfLocationTemplateTypeResponse> {
  Description?: string;
  Name: string;
}

export interface CreateShelfLocationTemplateTypeResponse extends ResponseMessage {
  /**
  * Entity type: ShelfLocationTemplateType
  */
  ID: number;
}

export interface CreateShelfResponse extends ResponseMessage {
  /**
  * Entity type: Shelf
  */
  ID: number;
}

export interface CreateShelfType extends RequestMessage<CreateShelfTypeResponse> {
  Description?: string;
  Name: string;
}

export interface CreateShelfTypeResponse extends ResponseMessage {
  /**
  * Entity type: ShelfType
  */
  ID: number;
}

export interface DeleteOrganizationUnitShelf extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: OrganizationUnitShelf
  */
  ID: number;
}

export interface DeleteProductRestriction extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: ProductRestriction
  */
  ID: number;
}

/**
* Delete a Shelf
*/
export interface DeleteShelf extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: Shelf
  */
  ID: number;
}

export interface DeleteShelfBlob extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: ShelfBlob
  */
  ID: number;
}

export interface DeleteShelfLocation extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: ShelfLocation
  */
  ID: number;
}

export interface DeleteShelfLocationBlob extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: ShelfLocationBlob
  */
  ID: number;
}

export interface DeleteShelfLocationProduct extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: ShelfLocationProduct
  */
  ID: number;
}

export interface DeleteShelfLocationTemplate extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: ShelfLocationTemplate
  */
  ID: number;
}

export interface DeleteShelfLocationTemplateType extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: ShelfLocationTemplateType
  */
  ID: number;
}

export interface DeleteShelfType extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: ShelfType
  */
  ID: number;
}

export interface DownloadShelfLocationProducts extends RequestMessage<ResourceResponseMessage> {
  /**
  * Entity type: ShelfLocation
  */
  ShelfLocationID: number;
}

/**
* Duplicate a Shelf
* 
* All properties will be copied except for the Name, StartDateTime, EndDateTime
* The ShelfLocations will also be duplicated
*/
export interface DuplicateShelf extends RequestMessage<DuplicateShelfResponse> {
  EndDateTime?: string;
  Name: string;
  /**
  * Entity type: Shelf
  */
  ShelfID: number;
  StartDateTime: string;
}

export interface DuplicateShelfResponse extends ResponseMessage {
  ID: number;
}

export interface ExportShelfTemplate extends RequestMessage<ResourceResponseMessage> {
  /**
  * Entity type: Shelf
  */
  ShelfIDs: number[];
}

export interface GetOrganizationUnitDistributionTree extends RequestMessage<GetOrganizationUnitDistributionTreeResponse> {
}

export interface GetOrganizationUnitDistributionTreeResponse extends ResponseMessage {
  Tree?: ServicesTreeNode;
}

export interface GetOrganizationUnitShelfByID extends RequestMessage<GetOrganizationUnitShelfByIDResponse> {
  /**
  * Entity type: OrganizationUnitShelf
  */
  ID: number;
}

export interface GetOrganizationUnitShelfByIDResponse extends ResponseMessage {
  ID: number;
  OrganizationUnitID?: number;
  OrganizationUnitTypeID?: number;
  ShelfID: number;
}

export interface GetProductRestrictionByID extends RequestMessage<GetProductRestrictionByIDResponse> {
  /**
  * Entity type: ProductRestriction
  */
  ID: number;
}

export interface GetProductRestrictionByIDResponse extends ResponseMessage {
  /**
  * Entity type: ProductRestriction
  */
  ID: number;
  MaximumReplenismentQuantity?: number;
  MaximumStockQuantity?: number;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID?: number;
  OrganizationUnitTypeID?: number;
  /**
  * Entity type: Product
  */
  ProductID: number;
}

export interface GetShelfBlobByID extends RequestMessage<GetShelfBlobByIDResponse> {
  /**
  * Entity type: ShelfBlob
  */
  ID: number;
}

export interface GetShelfBlobByIDResponse extends ResponseMessage {
  BlobID: string;
  /**
  * Entity type: ShelfBlob
  */
  ID: number;
  /**
  * Entity type: Shelf
  */
  ShelfID: number;
}

/**
* Get a Shelf by ID
*/
export interface GetShelfByID extends RequestMessage<GetShelfByIDResponse> {
  /**
  * Entity type: Shelf
  */
  ID: number;
}

export interface GetShelfByIDResponse extends ResponseMessage {
  Depth?: number;
  Description?: string;
  EndDateTime?: string;
  Height?: number;
  ID: number;
  Name?: string;
  StartDateTime: string;
  StockLabelID?: number;
  TypeID: number;
  Width?: number;
}

export interface GetShelfLocationBlobByID extends RequestMessage<GetShelfLocationBlobByIDResponse> {
  /**
  * Entity type: ShelfLocationBlob
  */
  ID: number;
}

export interface GetShelfLocationBlobByIDResponse extends ResponseMessage {
  BlobID: string;
  ID: number;
  ShelfLocationID: number;
}

export interface GetShelfLocationByID extends RequestMessage<GetShelfLocationByIDResponse> {
  /**
  * Entity type: ShelfLocation
  */
  ID: number;
}

export interface GetShelfLocationByIDResponse extends ResponseMessage {
  ID: number;
  Name?: string;
  ParentID?: number;
  ShelfID: number;
  TemplateID: number;
}

export interface GetShelfLocationProductByID extends RequestMessage<GetShelfLocationProductByIDResponse> {
  /**
  * Entity type: ShelfLocationProduct
  */
  ID: number;
}

export interface GetShelfLocationProductByIDResponse extends ResponseMessage {
  ID: number;
  MaximumQuantity: number;
  MinimumQuantity: number;
  ProductID: number;
  ShelfLocationID: number;
}

export interface GetShelfLocationTemplateByID extends RequestMessage<GetShelfLocationTemplateByIDResponse> {
  /**
  * Entity type: ShelfLocationTemplate
  */
  ID: number;
}

export interface GetShelfLocationTemplateByIDResponse extends ResponseMessage {
  Depth?: number;
  Height?: number;
  ID: number;
  Name?: string;
  ProductLimit?: number;
  TypeID: number;
  Width?: number;
}

export interface GetShelfLocationTemplateTypeByID extends RequestMessage<GetShelfLocationTemplateTypeByIDResponse> {
  /**
  * Entity type: ShelfLocationTemplateType
  */
  ID: number;
}

export interface GetShelfLocationTemplateTypeByIDResponse extends ResponseMessage {
  Description?: string;
  ID: number;
  Name?: string;
}

export interface GetShelfLocationTemplateTypes extends RequestMessage<GetShelfLocationTemplateTypesResponse> {
}

export interface GetShelfLocationTemplateTypesResponse extends ResponseMessage {
  ShelfLocationTemplateTypes?: ServicesGetShelfLocationTemplateTypesResponse_ShelfLocationTemplateTypeDto[];
}

export interface ServicesGetShelfLocationTemplateTypesResponse_ShelfLocationTemplateTypeDto {
  Description?: string;
  /**
  * Entity type: ShelfLocationTemplateType
  */
  ID: number;
  Name?: string;
}

export interface GetShelfTypeByID extends RequestMessage<GetShelfTypeByIDResponse> {
  /**
  * Entity type: ShelfType
  */
  ID: number;
}

export interface GetShelfTypeByIDResponse extends ResponseMessage {
  Description?: string;
  ID: number;
  Name?: string;
}

export interface GetShelfTypes extends RequestMessage<GetShelfTypesResponse> {
}

export interface GetShelfTypesResponse extends ResponseMessage {
  ShelfTypes?: ServicesGetShelfTypesResponse_ShelfTypeDto[];
}

export interface ServicesGetShelfTypesResponse_ShelfTypeDto {
  Description?: string;
  /**
  * Entity type: ShelfType
  */
  ID: number;
  Name?: string;
}

export interface ImportShelfTemplate extends RequestMessageWithEmptyResponse {
  Data: string;
}

export interface ListOrganizationUnitShelves extends PagedResultRequest<ListOrganizationUnitShelvesResponse> {
}

export interface ListOrganizationUnitShelvesResponse extends PagedResultResponse<ServicesListOrganizationUnitShelvesResponse_OrganizationUnitShelfDto> {
}

export interface ServicesListOrganizationUnitShelvesResponse_OrganizationUnitShelfDto {
  ID: number;
  OrganizationUnit?: OrganizationUnitsDtoOrganizationUnitDto;
  OrganizationUnitID?: number;
  OrganizationUnitTypeID?: number;
  Shelf?: ServicesListOrganizationUnitShelvesResponse_ShelfDto;
  ShelfID: number;
}

export interface ServicesListOrganizationUnitShelvesResponse_ShelfDto {
  Depth?: number;
  Description?: string;
  EndDateTime?: string;
  Height?: number;
  /**
  * Entity type: Shelf
  */
  ID: number;
  Name?: string;
  StartDateTime: string;
  Type?: EVAFrameworkAPIEnumDto;
  /**
  * Entity type: ShelfType
  */
  TypeID: number;
  Width?: number;
}

export interface ListProductRestrictions extends PagedResultRequest<ListProductRestrictionsResponse> {
}

export interface ListProductRestrictionsResponse extends PagedResultResponse<ServicesListProductRestrictionsResponse_ProductRestrictionDto> {
}

export interface ServicesListProductRestrictionsResponse_ProductDto {
  BackendID?: string;
  DisplayValue?: string;
}

export interface ServicesListProductRestrictionsResponse_ProductRestrictionDto {
  ID: number;
  MaximumReplenismentQuantity?: number;
  MaximumStockQuantity?: number;
  OrganizationUnitID?: number;
  OrganizationUnitTypeID?: number;
  Product?: ServicesListProductRestrictionsResponse_ProductDto;
  ProductID: number;
}

export interface ListShelfBlobs extends PagedResultRequest<ListShelfBlobsResponse> {
}

export interface ListShelfBlobsResponse extends PagedResultResponse<ServicesListShelfBlobsResponse_ShelfBlobDto> {
}

export interface ServicesListShelfBlobsResponse_ShelfBlobDto {
  BlobID: string;
  ID: number;
  ShelfID: number;
}

export interface ListShelfLocationBlobs extends PagedResultRequest<ListShelfLocationBlobsResponse> {
}

export interface ListShelfLocationBlobsResponse extends PagedResultResponse<ServicesListShelfLocationBlobsResponse_ShelfLocationBlobDto> {
}

export interface ServicesListShelfLocationBlobsResponse_ShelfLocationBlobDto {
  BlobID: string;
  ID: number;
  ShelfLocationID: number;
}

export interface ListShelfLocationProducts extends RequestMessage<ListShelfLocationProductsResponse> {
  PageConfig?: PageConfig<RepositoriesListShelfLocationProductsFilter>;
}

export interface ListShelfLocationProductsResponse extends PagedResultResponse<ServicesListShelfLocationProductsResponse_ShelfLocationProductDto> {
}

export interface ServicesListShelfLocationProductsResponse_ShelfDto {
  Name?: string;
}

export interface ServicesListShelfLocationProductsResponse_ShelfLocationDto {
  Name?: string;
  Shelf?: ServicesListShelfLocationProductsResponse_ShelfDto;
  /**
  * Entity type: Shelf
  */
  ShelfID: number;
}

export interface ServicesListShelfLocationProductsResponse_ShelfLocationProductDto {
  /**
  * Entity type: ShelfLocationProduct
  */
  ID: number;
  MaximumQuantity: number;
  MinimumQuantity: number;
  Product?: ServicesListShelfLocationProductsResponse_ShelfProductDto;
  /**
  * Entity type: Product
  */
  ProductID: number;
  ShelfLocation?: ServicesListShelfLocationProductsResponse_ShelfLocationDto;
  /**
  * Entity type: ShelfLocation
  */
  ShelfLocationID: number;
}

export interface ServicesListShelfLocationProductsResponse_ShelfProductDto {
  BackendID?: string;
  CustomID?: string;
  DisplayPrice?: number;
  DisplayValue?: string;
}

export interface ListShelfLocationTemplates extends PagedResultRequest<ListShelfLocationTemplatesResponse> {
}

export interface ListShelfLocationTemplatesResponse extends PagedResultResponse<ServicesListShelfLocationTemplatesResponse_ShelfLocationTemplateDto> {
}

export interface ServicesListShelfLocationTemplatesResponse_ShelfLocationTemplateDto {
  Depth?: number;
  Height?: number;
  /**
  * Entity type: ShelfLocationTemplate
  */
  ID: number;
  Name?: string;
  ProductLimit?: number;
  /**
  * Entity type: ShelfLocationTemplateType
  */
  TypeID: number;
  Width?: number;
}

export interface ListShelfLocations extends PagedResultRequest<ListShelfLocationsResponse> {
}

export interface ListShelfLocationsResponse extends PagedResultResponse<ServicesListShelfLocationsResponse_ShelfLocationDto> {
}

export interface ServicesListShelfLocationsResponse_ShelfLocationDto {
  /**
  * Entity type: ShelfLocation
  */
  ID: number;
  Name?: string;
  /**
  * Entity type: ShelfLocation
  */
  ParentID?: number;
  /**
  * Entity type: Shelf
  */
  ShelfID: number;
  /**
  * Entity type: ShelfLocationTemplate
  */
  TemplateID: number;
}

/**
* List Shelves
*/
export interface ListShelves extends RequestMessage<ListShelvesResponse> {
  PageConfig?: PageConfig<RepositoriesListShelvesFilter>;
}

export interface ListShelvesResponse extends PagedResultResponse<ServicesListShelvesResponse_ShelfDto> {
}

export interface ServicesListShelvesResponse_ShelfDto {
  Depth?: number;
  Description?: string;
  EndDateTime?: string;
  Height?: number;
  /**
  * Entity type: Shelf
  */
  ID: number;
  Name?: string;
  StartDateTime: string;
  /**
  * Entity type: StockLabel
  */
  StockLabelID?: number;
  Type?: EVAFrameworkAPIEnumDto;
  /**
  * Entity type: ShelfType
  */
  TypeID: number;
  Width?: number;
}

export interface ServicesTreeNode {
  Fraction?: number;
  Negation?: boolean;
  Nodes?: ServicesTreeNode[];
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitIDs?: number[];
  OrganizationUnitTypeID?: number;
}

export interface UpdateOrganizationUnitDistributionTree extends RequestMessageWithEmptyResponse {
  Tree?: ServicesTreeNode;
}

export interface UpdateOrganizationUnitShelf extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: OrganizationUnitShelf
  */
  ID: number;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID?: number;
  OrganizationUnitTypeID?: number;
  /**
  * Entity type: Shelf
  */
  ShelfID: number;
}

export interface UpdateProductRestriction extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: ProductRestriction
  */
  ID: number;
  MaximumReplenismentQuantity?: number;
  MaximumStockQuantity?: number;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID?: number;
  OrganizationUnitTypeID?: number;
  /**
  * Entity type: Product
  */
  ProductID: number;
}

/**
* Update a Shelf
*/
export interface UpdateShelf extends RequestMessageWithEmptyResponse {
  Depth?: number;
  Description?: string;
  EndDateTime?: string;
  Height?: number;
  /**
  * Entity type: Shelf
  */
  ID: number;
  Name: string;
  StartDateTime: string;
  /**
  * Entity type: StockLabel
  */
  StockLabelID?: number;
  /**
  * Entity type: ShelfType
  */
  TypeID: number;
  Width?: number;
}

export interface UpdateShelfBlob extends RequestMessageWithEmptyResponse {
  BlobID: string;
  /**
  * Entity type: ShelfBlob
  */
  ID: number;
  /**
  * Entity type: Shelf
  */
  ShelfID: number;
}

export interface UpdateShelfLocation extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: ShelfLocation
  */
  ID: number;
  Name: string;
  /**
  * Entity type: ShelfLocation
  */
  ParentID?: number;
  /**
  * Entity type: ShelfLocationTemplate
  */
  TemplateID: number;
}

export interface UpdateShelfLocationBlob extends RequestMessageWithEmptyResponse {
  BlobID: string;
  /**
  * Entity type: ShelfLocationBlob
  */
  ID: number;
  /**
  * Entity type: ShelfLocation
  */
  ShelfLocationID: number;
}

export interface UpdateShelfLocationProduct extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: ShelfLocationProduct
  */
  ID: number;
  MaximumQuantity?: number;
  MinimumQuantity?: number;
}

export interface UpdateShelfLocationTemplate extends RequestMessageWithEmptyResponse {
  Depth?: number;
  Height?: number;
  /**
  * Entity type: ShelfLocationTemplate
  */
  ID: number;
  Name: string;
  ProductLimit?: number;
  /**
  * Entity type: ShelfLocationTemplateType
  */
  TypeID: number;
  Width?: number;
}

export interface UpdateShelfLocationTemplateType extends RequestMessageWithEmptyResponse {
  Description?: string;
  /**
  * Entity type: ShelfLocationTemplateType
  */
  ID: number;
}

export interface UpdateShelfType extends RequestMessageWithEmptyResponse {
  Description?: string;
  /**
  * Entity type: ShelfType
  */
  ID: number;
}

export interface UploadShelfLocationProducts extends RequestMessageWithEmptyResponse {
  Data: string;
  /**
  * Entity type: ShelfLocation
  */
  ShelfLocationID: number;
}

