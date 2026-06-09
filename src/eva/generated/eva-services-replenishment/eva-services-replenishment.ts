import {
  UsersUserDto,
  ProductsDtoProductDto,
  OrganizationUnitsDtoOrganizationUnitDto,
  RequestMessage,
  ResponseMessage,
  RequestMessageWithEmptyResponse,
  ResourceWithBlobIDResponseMessage,
  SearchFilterModel,
  AsyncRequestHandlingAsyncRequestResponse,
  AsyncRequestHandlingAsyncRequestResultRequest,
  GetResponse,
  PageConfig,
  PagedResultResponse,
} from '../eva-services-core';


export enum Errors
{
  /**
  * You can't download more than 1000000 records through this service.
  */
  DownloadReplenishmentProductsExcel_TooManyRecords = 'DownloadReplenishmentProductsExcel:TooManyRecords',
  /**
  * Replenishment product with ID {0:string} does not exist.
  */
  DownloadReplenishmentProductsExcel_UnknownReplenishmentProduct = 'DownloadReplenishmentProductsExcel:UnknownReplenishmentProduct',
  /**
  * Missing product identifier for row {0:int32}.
  */
  DownloadReplenishmentProductsExcel_MissingProductIdentifier = 'DownloadReplenishmentProductsExcel:MissingProductIdentifier',
  /**
  * There was a duplicate record for OrganizationUnit/Product/StockLabel {0:string}/{1:string}/{2:string} within one time frame.
  */
  ReplenishmentProducts_DuplicateRecord = 'ReplenishmentProducts:DuplicateRecord',
  /**
  * The MaximumQuantity {0:string} must be greater than or equal to the MinimumQuantity {1:string}.
  */
  ReplenishmentProducts_InvalidQuantityRange = 'ReplenishmentProducts:InvalidQuantityRange',
  /**
  * This proposal is already running and cannot be retried at this moment.
  */
  ReplenishmentProposals_AlreadyRunning = 'ReplenishmentProposals:AlreadyRunning',
}
export enum ModelsReplenishmentProposalStatus {
  New = 0,
  Processing = 1,
  Processed = 2,
  Error = 9,
}

export interface MonitorsReplenishmentProposalsMonitorData {
  MainConditionGroup?: MonitorsReplenishmentProposalsMonitorData_ReplenishmentProposalsConditionGroup;
}

export interface MonitorsReplenishmentProposalsMonitorData_ReplenishmentProposalsCondition {
  Field?: MonitorsReplenishmentProposalsMonitorData_ReplenishmentProposalsConditionField;
  Value?: string;
  ValueOperator?: MonitorsReplenishmentProposalsMonitorData_ReplenishmentProposalsConditionValueOperator;
}

export enum MonitorsReplenishmentProposalsMonitorData_ReplenishmentProposalsConditionField {
  Source = 0,
  Target = 1,
  Status = 2,
  Results = 3,
  TotalResults = 4,
  DaysOld = 5,
}

export interface MonitorsReplenishmentProposalsMonitorData_ReplenishmentProposalsConditionGroup {
  Conditions?: MonitorsReplenishmentProposalsMonitorData_ReplenishmentProposalsCondition[];
  Groups?: MonitorsReplenishmentProposalsMonitorData_ReplenishmentProposalsConditionGroup[];
  MatchAny?: boolean;
}

export enum MonitorsReplenishmentProposalsMonitorData_ReplenishmentProposalsConditionValueOperator {
  Equals = 0,
  NotEquals = 1,
  LessThan = 2,
  LessThanOrEquals = 3,
  GreaterThan = 5,
  GreaterThanOrEquals = 6,
}

export interface MonitorsReplenishmentProposalsMonitorOrganizationUnit {
  /**
  * Entity type: OrganizationUnit
  */
  ID: number;
  Name?: string;
}

export interface MonitorsReplenishmentProposalsMonitorResult {
  CreationTime: string;
  /**
  * Entity type: ReplenishmentProposalResult
  */
  ID: number;
  Results: number;
  Source?: MonitorsReplenishmentProposalsMonitorOrganizationUnit;
  Status: ModelsReplenishmentProposalStatus;
  Target?: MonitorsReplenishmentProposalsMonitorOrganizationUnit;
  TotalResults: number;
}

export interface MonitorsReplenishmentProposalsMonitorResultData {
  ReplenishmentProposals?: MonitorsReplenishmentProposalsMonitorResult[];
}

export interface RepositoriesListReplenishmentProductsFilters {
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID?: number;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitIDs?: number[];
  /**
  * Entity type: Product
  */
  ProductID?: number;
  /**
  * Entity type: Product
  */
  ProductIDs?: number[];
  ShowInactive?: boolean;
  /**
  * Entity type: StockLabel
  */
  StockLabelID?: number;
}

export interface RepositoriesListReplenishmentProposalFilters {
  CreatedAfter?: string;
  CreatedBefore?: string;
  CreatedByName?: string;
  /**
  * Entity type: ReplenishmentProposal
  */
  ID?: number;
  /**
  * Entity type: OrganizationUnit
  */
  SourceIDs?: number[];
  /**
  * Entity type: OrganizationUnit
  */
  TargetIDs?: number[];
}

export interface RepositoriesListReplenishmentProposalResultFilters {
  BrandName?: string;
  CustomID?: string;
  /**
  * Entity type: Product
  */
  ProductIDs?: number[];
  /**
  * Entity type: OrganizationUnit
  */
  SourceIDs?: number[];
  /**
  * Entity type: OrganizationUnit
  */
  TargetIDs?: number[];
}

export interface RepositoriesReplenishmentProposalListDto {
  CreatedBy?: UsersUserDto;
  /**
  * Entity type: User
  */
  CreatedByID: number;
  CreationTime: string;
  /**
  * Entity type: ReplenishmentProposal
  */
  ID: number;
  StatusID: number;
}

export interface RepositoriesReplenishmentProposalResultListDto {
  /**
  * Entity type: Currency
  */
  CurrencyID?: string;
  /**
  * Entity type: ReplenishmentProposalResult
  */
  ID: number;
  Product?: ProductsDtoProductDto;
  /**
  * Entity type: Product
  */
  ProductID: number;
  ProductName?: string;
  Quantity: number;
  /**
  * Entity type: ReplenishmentProposal
  */
  ReplenishmentProposalID: number;
  SourceOrganizationUnit?: OrganizationUnitsDtoOrganizationUnitDto;
  /**
  * Entity type: OrganizationUnit
  */
  SourceOrganizationUnitID: number;
  /**
  * Entity type: StockLabel
  */
  StockLabelID?: number;
  TargetOrganizationUnit?: OrganizationUnitsDtoOrganizationUnitDto;
  /**
  * Entity type: OrganizationUnit
  */
  TargetOrganizationUnitID: number;
  TotalCost?: number;
  UnitCost?: number;
}

/**
* Creates a new ReplenishmentProduct.
*/
export interface CreateReplenishmentProduct extends RequestMessage<CreateReplenishmentProductResponse> {
  /**
  * Date, no time. Inclusive.
  */
  EndDate?: string;
  MaximumQuantity?: number;
  MinimumQuantity?: number;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID: number;
  /**
  * Entity type: Product
  */
  ProductID: number;
  /**
  * Date, no time. Inclusive.
  */
  StartDate?: string;
  /**
  * Entity type: StockLabel
  */
  StockLabelID: number;
}

export interface CreateReplenishmentProductResponse extends ResponseMessage {
  /**
  * Entity type: ReplenishmentProduct
  */
  ID: number;
}

/**
* Creates a new `ReplenishmentProposal`.
* 
* The new proposal is picked up and processed asynchronously and could take a while after creation to complete generating its results, depending on the
* amount of sources, targets, products and the algorithm used. Check the `Status` property in the `GetReplenishmentProposal` response to see if it's
* completed.
* 
* To allow selecting the output types for the generated proposal, the property `OutputTypes` can be set. It is a flags enum of the type
* `ReplenishmentOutputTypes`. If the `OutputTypes` is not set, it will fall back to the setting `Replenishment:Outputs`.
*/
export interface CreateReplenishmentProposal extends RequestMessage<CreateReplenishmentProposalResponse> {
  /**
  * Optional parameter to override the standard output types for created replenishment proposals
  */
  OutputTypes?: ServicesReplenishmentOutputTypes;
  /**
  * Entity type: OrganizationUnit
  * Required when `SourceOrganizationUnitSetID` is omitted
  */
  SourceOrganizationUnitIDs?: number[];
  /**
  * Entity type: OrganizationUnitSet
  * Required when `SourceOrganizationUnitIDs` is omitted
  */
  SourceOrganizationUnitSetID?: number;
  /**
  * Optional list of stock labels to generate replenishment proposal for
  */
  StockLabels?: ServicesCreateReplenishmentProposal_StockLabelDto[];
  /**
  * Entity type: OrganizationUnit
  * Required when `TargetOrganizationUnitSetID` is omitted
  */
  TargetOrganizationUnitIDs?: number[];
  /**
  * Entity type: OrganizationUnitSet
  * Required when `TargetOrganizationUnitIDs` is omitted
  */
  TargetOrganizationUnitSetID?: number;
}

export interface ServicesCreateReplenishmentProposal_StockLabelDto {
  /**
  * Ordering of the labels, to determine priority in scarcity
  */
  SequenceID?: number;
  /**
  * Entity type: StockLabel
  */
  StockLabelID: number;
}

export interface CreateReplenishmentProposalResponse extends ResponseMessage {
  /**
  * Entity type: ReplenishmentProposal
  */
  ID: number;
}

/**
* Deletes an existing ReplenishmentProduct.
*/
export interface DeleteReplenishmentProduct extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: ReplenishmentProduct
  */
  ID: number;
}

/**
* Downloads an Excel for `UploadReplenishmentProductsExcel` service, filled with all currently existing records.
* 
* Specify either OrganizationUnitIDs or OrganizationUnitSetID. OrganizationUnitSetID takes precedence over OrganizationUnitIDs.
* 
* You can't download information for more than 1.000.000 product/organizationunit combinations.
*/
export interface DownloadReplenishmentProductsExcel extends RequestMessage<ResourceWithBlobIDResponseMessage> {
  /**
  * Will add empty rows for product/organizationunit combinations that do not exist yet.
  */
  AddPlaceHolderRows?: boolean;
  /**
  * Only show products that match this filter.
  */
  Filters?: Record<string,SearchFilterModel>;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID?: number;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitIDs?: number[];
  /**
  * Entity type: OrganizationUnitSet
  */
  OrganizationUnitSetID?: number;
  ShowInactive?: boolean;
}

export interface DownloadReplenishmentProductsExcel_Async extends DownloadReplenishmentProductsExcel {
}

export interface DownloadReplenishmentProductsExcel_AsyncResponse extends AsyncRequestHandlingAsyncRequestResponse {
}

export interface DownloadReplenishmentProductsExcel_AsyncResult extends AsyncRequestHandlingAsyncRequestResultRequest {
}

/**
* Edits an existing ReplenishmentProduct.
*/
export interface EditReplenishmentProduct extends RequestMessageWithEmptyResponse {
  /**
  * Date, no time. Inclusive.
  */
  EndDate?: string;
  /**
  * Entity type: ReplenishmentProduct
  */
  ID: number;
  MaximumQuantity?: number;
  MinimumQuantity?: number;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID: number;
  /**
  * Entity type: Product
  */
  ProductID: number;
  /**
  * Date, no time. Inclusive.
  */
  StartDate?: string;
  /**
  * Entity type: StockLabel
  */
  StockLabelID: number;
}

/**
* Get a `ReplenishmentProposal`.
* 
* * To get the possible sources of this proposal, use the 'GetReplenishmentProposalSources`.
* * To get the targets of this proposal, use the 'GetReplenishmentProposalTargets`.
* * To get the stock labels of this proposal, use the 'GetReplenishmentProposalStockLabels`.
* * To get the results of this proposal, use the 'GetReplenishmentProposalResults`.
*/
export interface GetReplenishmentProposal extends RequestMessage<GetReplenishmentProposalResponse> {
  /**
  * Entity type: ReplenishmentProposal
  */
  ID: number;
}

export interface GetReplenishmentProposalResponse extends GetResponse<ServicesReplenishmentProposalDto> {
}

/**
* Get all Sources for a `ReplenishmentProposal`, identified by its `ID`. Supports filter option for `OrganizationUnitIDs`.
*/
export interface GetReplenishmentProposalSources extends RequestMessage<GetReplenishmentProposalSourcesResponse> {
  /**
  * Entity type: ReplenishmentProposal
  */
  ID: number;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitIDs?: number[];
}

export interface GetReplenishmentProposalSourcesResponse extends GetResponse<OrganizationUnitsDtoOrganizationUnitDto[] | null> {
}

/**
* Get all Stock Labels for a `ReplenishmentProposal`, identified by its `ID`.
*/
export interface GetReplenishmentProposalStockLabels extends RequestMessage<GetReplenishmentProposalStockLabelsResponse> {
  /**
  * Entity type: ReplenishmentProposal
  */
  ID: number;
}

export interface GetReplenishmentProposalStockLabelsResponse extends GetResponse<ServicesGetReplenishmentProposalStockLabelsResponse_StockLabelDto[] | null> {
}

export interface ServicesGetReplenishmentProposalStockLabelsResponse_StockLabelDto {
  SequenceID: number;
  /**
  * Entity type: StockLabel
  */
  StockLabelID: number;
}

/**
* Get all Targets for a `ReplenishmentProposal`, identified by its `ID`. Supports filter option for `OrganizationUnitIDs`.
*/
export interface GetReplenishmentProposalTargets extends RequestMessage<GetReplenishmentProposalTargetsResponse> {
  /**
  * Entity type: ReplenishmentProposal
  */
  ID: number;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitIDs?: number[];
}

export interface GetReplenishmentProposalTargetsResponse extends GetResponse<OrganizationUnitsDtoOrganizationUnitDto[] | null> {
}

/**
* Imports a simple set of ReplenishmentProducts, creating new records and updating existing records.
* 
* Does not support `StartDate` and `EndDate`, and as such will error when existing records have these set.
*/
export interface ImportReplenishmentProducts extends RequestMessageWithEmptyResponse {
  Products: ServicesImportReplenishmentProducts_ReplenishmentProduct[];
}

export interface ServicesImportReplenishmentProducts_ReplenishmentProduct {
  MaximumQuantity?: number;
  MinimumQuantity?: number;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID: number;
  /**
  * Entity type: Product
  */
  ProductID: number;
  /**
  * Entity type: StockLabel
  */
  StockLabelID: number;
}

/**
* List the ReplenishmentProducts, optionally with a `PageConfig` with a `Filter`.
*/
export interface ListReplenishmentProducts extends RequestMessage<ListReplenishmentProductsResponse> {
  PageConfig?: PageConfig<RepositoriesListReplenishmentProductsFilters>;
}

export interface ListReplenishmentProductsResponse extends PagedResultResponse<ServicesListReplenishmentProductsResponse_ReplenishmentProduct> {
  /**
  * Additional properties that are returned with each product. It is guaranteed these are present for all products, but it might be an empty string.
  */
  AdditionalProperties?: string[];
}

export interface ServicesListReplenishmentProductsResponse_ReplenishmentProduct {
  /**
  * Additional properties for the product
  */
  AdditionalProperties?: Record<string,string | null>;
  /**
  * Date, no time. Inclusive.
  */
  EndDate?: string;
  /**
  * Entity type: ReplenishmentProduct
  */
  ID: number;
  MaximumQuantity: number;
  MinimumQuantity: number;
  OrganizationUnitBackendID?: string;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID: number;
  ProductBackendID?: string;
  /**
  * Entity type: Product
  */
  ProductID: number;
  /**
  * Date, no time. Inclusive.
  */
  StartDate?: string;
  /**
  * Entity type: StockLabel
  */
  StockLabelID: number;
}

/**
* Lists all Results for a `ReplenishmentProposal`, identified by its `ID`.
* 
* Through the `PageConfig`'s `Filter` parameter, you have the following filter options available:
* 
* * `SourceIDs` and/or `TargetIDs` as `OrganizationUnit`.`ID`'s
* * `ProductIDs` as `Product`.`ID`s
* * `CustomID` as `Product`.`CustomID`
* * `BrandName` as `Product`.`Brand`.`Name`
*/
export interface ListReplenishmentProposalResults extends RequestMessage<ListReplenishmentProposalResultsResponse> {
  /**
  * Entity type: ReplenishmentProposal
  */
  ID: number;
  PageConfig?: PageConfig<RepositoriesListReplenishmentProposalResultFilters>;
}

export interface ListReplenishmentProposalResultsResponse extends PagedResultResponse<RepositoriesReplenishmentProposalResultListDto> {
}

/**
* List all `ReplenishmentProposal`'s.
* 
* Through the `PageConfig`'s `Filter` parameter, you have the following filter options available:
* 
* * `ID` for that specific `ReplenishmentProposal` you want
* * `SourceIDs` and/or `TargetIDs` as `OrganizationUnit`.`ID`'s
* * `CreatedAfter` and/or `CreatedBefore`
* * `CreatedByName` (:underage: expensive filter, supports both `FirstName` and `LastName` filtering)
*/
export interface ListReplenishmentProposals extends RequestMessage<ListReplenishmentProposalsResponse> {
  PageConfig?: PageConfig<RepositoriesListReplenishmentProposalFilters>;
}

export interface ListReplenishmentProposalsResponse extends PagedResultResponse<RepositoriesReplenishmentProposalListDto> {
}

export enum ServicesReplenishmentOutputTypes {
  None = 0,
  AutoOrder = 1,
  AutoOrderAutoConfirm = 2,
  Debug = 4,
  Info = 8,
  Order = 16,
}

export interface ServicesReplenishmentProposalBlobDto {
  /**
  * Entity type: Blob
  */
  BlobID: string;
  TypeID?: string;
  Url?: string;
}

export interface ServicesReplenishmentProposalDto {
  Blobs?: ServicesReplenishmentProposalBlobDto[];
  CreationTime: string;
  Error?: string;
  /**
  * Entity type: ReplenishmentProposal
  */
  ID: number;
  Status: ModelsReplenishmentProposalStatus;
}

/**
* Retry generating a new `ReplenishmentProposal`.
*/
export interface RetryReplenishmentProposal extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: ReplenishmentProposal
  */
  ID: number;
  /**
  * Optional parameter to override the standard output types for created replenishment proposals
  */
  OutputTypes?: ServicesReplenishmentOutputTypes;
}

/**
* Uploads an Excel retrieved from `DownloadReplenishmentProductsExcel`.
* 
* Records with `ID` will be modified, records without `ID` will be added. Omitted records will not be modified.
* 
* If you add a record that already exists, but is not in the excel due to some filtering (ou or products), it will also be updated.
*/
export interface UploadReplenishmentProductsExcel extends RequestMessageWithEmptyResponse {
  Data: string;
}

export interface UploadReplenishmentProductsExcel_Async extends UploadReplenishmentProductsExcel {
}

export interface UploadReplenishmentProductsExcel_AsyncResponse extends AsyncRequestHandlingAsyncRequestResponse {
}

export interface UploadReplenishmentProductsExcel_AsyncResult extends AsyncRequestHandlingAsyncRequestResultRequest {
}

