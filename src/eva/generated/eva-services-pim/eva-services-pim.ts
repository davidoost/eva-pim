import {
  RequestMessage,
  ResponseMessage,
  DataModelsProductTypes,
  TAnyValue,
  RequestMessageWithEmptyResponse,
  PagedRequestMessage,
  PagedResponseMessage,
  OrganizationUnitTypes,
  PagedResultRequest,
  PagedResultResponse,
  PageConfig,
  FilteredPagedResultRequest,
  DataModelsProductCapacityTimeFrame,
  SearchFilterModel,
  DataModelsProductRelationDirection,
  DataModelsStockRelationType,
  DayOfWeek,
  ResourceResponseMessage,
  AsyncRequestHandlingAsyncRequestResponse,
  AsyncRequestHandlingAsyncRequestResultRequest,
  DataModelsProductRequirementDataTypes,
  DataModelsOrderTypes,
  ProductsProductCapacityPlanFilter,
  ProductsProductRelationTypesFilter,
} from '../eva-services-core';


export enum Errors
{
  /**
  * Assortment is missing content culture.
  */
  Assortment_MissingContentCulture = 'Assortment:MissingContentCulture',
  /**
  * Error converting property {0:string}: {1:string}
  */
  CustomContent_DataTypeError = 'CustomContent:DataTypeError',
  /**
  * Product {productID:string} uses unknown TaxCode {taxCode:string}
  */
  ImportProducts_UnknownTaxCode = 'ImportProducts:UnknownTaxCode',
  /**
  * The provided request did not pass validation. Failures: {0:string}
  */
  ImportProducts_ValidationFailures = 'ImportProducts:ValidationFailures',
  /**
  * The assortment '{0:string}' is not known.
  */
  ImportProducts_UnknownAssortment = 'ImportProducts:UnknownAssortment',
  /**
  * Invalid data for property {0:string}. Expected {1:string}.
  */
  PimErrors_InvalidDataForProperty = 'PimErrors:InvalidDataForProperty',
  /**
  * Either a ProductSearchTemplateID or ProductSearchFilters are required for a dynamic ProductCapacityPlan.
  */
  ProductCapacityPlans_FiltersAreRequiredForADynamicCapacityPlan = 'ProductCapacityPlans:FiltersAreRequiredForADynamicCapacityPlan',
  /**
  * Cannot add or remove products on a dynamic ProductCapacityPlan.
  */
  ProductCapacityPlans_CannotAddOrRemoveProductsOnADynamicCapacityPlan = 'ProductCapacityPlans:CannotAddOrRemoveProductsOnADynamicCapacityPlan',
  /**
  * Products already linked to a static ProductCapacityPlan.
  */
  ProductCapacityPlans_ProductsAlreadyHaveAStaticProductCapacityPlan = 'ProductCapacityPlans:ProductsAlreadyHaveAStaticProductCapacityPlan',
  /**
  * Cannot convert ProductCapacityPlan from static to dynamic.
  */
  ProductCapacityPlans_CannotConvertProductCapacityPlanFromStaticToDynamic = 'ProductCapacityPlans:CannotConvertProductCapacityPlanFromStaticToDynamic',
  /**
  * Exception requires `DayOfWeek` or `Date` to be given.
  */
  ProductCapacityPlans_ExceptionRequiresDayOfWeekOrDate = 'ProductCapacityPlans:ExceptionRequiresDayOfWeekOrDate',
  /**
  * Property {0:string} has not been defined, a property must be defined before the content for that property can be stored.
  */
  ProductContent_UnknownProductPropertyType = 'ProductContent:UnknownProductPropertyType',
  /**
  * Cannot find header row
  */
  ProductExcelServices_MissingHeaderRow = 'ProductExcelServices:MissingHeaderRow',
  /**
  * Unit Of Measure {0:string} does not exist
  */
  ProductExcelServices_UnitOfMeasureNotFound = 'ProductExcelServices:UnitOfMeasureNotFound',
  /**
  * Product with CustomID {0:string} cannot be found
  */
  ProductExcelServices_ProductNotFound = 'ProductExcelServices:ProductNotFound',
  /**
  * Invalid quantity {quantity:int32} for Unit of Measure {unitOfMeasure:string} for product {productCustomID:string}
  */
  ProductExcelServices_InvalidUnitOfMeasureQuantity = 'ProductExcelServices:InvalidUnitOfMeasureQuantity',
  /**
  * Duplicate barcode {0:string} found
  */
  ProductExcelServices_DuplicateBarcode = 'ProductExcelServices:DuplicateBarcode',
  /**
  * The value {0:string} cannot be converted to a data type of {1:EVA.PIM.Enumerations.ProductPropertyTypeDataTypes}
  */
  ProductPropertyType_CannotConvertValueToDataType = 'ProductPropertyType:CannotConvertValueToDataType',
  /**
  * The line {0:string} is not a valid synonym rule.
  */
  ProductSearchSynonyms_InvalidRule = 'ProductSearchSynonyms:InvalidRule',
  /**
  * MimeType {MimeType:string} for BlobID {BlobID:guid} is an invalid MimeType for an image
  */
  SecondChanceProductRegistration_InvalidMimeTypeForImage = 'SecondChanceProductRegistration:InvalidMimeTypeForImage',
  /**
  * The specified serial number {serialNumber:string} must either be new or it must belong to the original product {productID:id}.
  */
  SecondChanceProductRegistration_InvalidSerialNumber = 'SecondChanceProductRegistration:InvalidSerialNumber',
  /**
  * The specified serial number {serialNumber:string} must match the regex of configuration {configurationID:id}.
  */
  SecondChanceProductRegistration_InvalidSerialNumberForConfiguration = 'SecondChanceProductRegistration:InvalidSerialNumberForConfiguration',
  /**
  * No sales price list could be determined for organization unit {0:id}.
  */
  SecondChanceProductRegistration_MissingSalesPriceList = 'SecondChanceProductRegistration:MissingSalesPriceList',
}
/**
* Composes the given set of products
*/
export interface ComposeProducts extends RequestMessage<ComposeResponse> {
  /**
  * Entity type: Language
  */
  LanguageIDs?: string[];
  /**
  * Entity type: Product
  * The products to compose, will compose all products if not specified
  */
  ProductIDs?: number[];
  /**
  * WARNING: This will remove all existing indices and create new ones with ONLY the specified products, effectivly removing all other products!
  */
  UseNewIndices?: boolean;
  /**
  * Wait until the composition is finished, otherwise it will be started in the background. Will only work if <100 product IDs are specified.
  */
  WaitForCompletion?: boolean;
}

export interface ComposeResponse extends ResponseMessage {
  CompositionID?: string;
  UID?: string;
}

export interface CompositionListProductContentEditsFilter {
  /**
  * Entity type: ContentLayer
  */
  LayerID?: number;
  /**
  * Entity type: Product
  */
  ProductID?: number;
  /**
  * Entity type: Product
  */
  ProductIDs?: number[];
  /**
  * Entity type: Revision
  */
  RevisionID?: number;
}

export interface CompositionListProductContentEditsItem {
  Content?: CompositionProductEditItem;
  /**
  * Entity type: User
  */
  CreatedByID: number;
  CreationTime: string;
  /**
  * Entity type: ProductContentEdit
  */
  ID: number;
  LastModificationTime?: string;
  /**
  * Entity type: User
  */
  LastModifiedByID?: number;
  /**
  * Entity type: Country
  */
  LayerCountryID?: string;
  /**
  * Entity type: ContentLayer
  */
  LayerID: number;
  /**
  * Entity type: Language
  */
  LayerLanguageID?: string;
  LayerLevel: number;
  LayerName?: string;
  /**
  * Entity type: Product
  */
  ProductID: number;
  ProductLogicalLevel?: string;
  ProductName?: string;
  ProductType: DataModelsProductTypes;
  /**
  * Entity type: Revision
  */
  RevisionID?: number;
  RevisionName?: string;
}

export interface CompositionProductEditItem {
  MediaAdd?: CompositionProductEditItem_ProductMedia[];
  MediaRemove?: CompositionProductEditItem_ProductMedia[];
  Properties?: Record<string,CompositionProductEditItem_ProductProperty>;
}

export interface CompositionProductEditItem_ProductMedia {
  BlobID: string;
  ID?: string;
  Inherit?: boolean;
  IsPrimaryImage?: boolean;
  LocationType?: string;
  MediaType: CompositionProductMediaTypes;
  Name?: string;
  Sequence?: number;
  Type?: string;
  Url?: string;
}

export interface CompositionProductEditItem_ProductProperty {
  AddValues?: CompositionProductEditItem_PropertyValue[];
  IsDeleted?: boolean;
  RemoveValues?: CompositionProductEditItem_PropertyValue[];
  Value?: CompositionProductEditItem_PropertyValue;
}

export interface CompositionProductEditItem_PropertyValue {
  Type: CompositionPropertyValueType;
  Value?: TAnyValue;
}

export enum CompositionProductMediaTypes {
  Default = 0,
  Swatch = 1,
}

export enum CompositionPropertyValueType {
  None = 0,
  Int = 1,
  String = 2,
  Bool = 3,
  DateTime = 4,
  Float = 5,
}

export interface CancelComposeProducts extends RequestMessageWithEmptyResponse {
  CompositionID: string;
}

export interface GetProductCompositionState extends RequestMessage<GetProductCompositionStateResponse> {
  CompositionID: string;
}

export interface GetProductCompositionStateResponse extends ResponseMessage {
  BytesReadFromDatabase: number;
  BytesReadFromDatabasePerSecond: number;
  BytesWrittenToDatabase: number;
  BytesWrittenToDatabasePerSecond: number;
  BytesWrittenToElasticsearch: number;
  BytesWrittenToElasticsearchPerSecond: number;
  CompletionTime?: string;
  CompositionCount: number;
  CompositionsPerSecond: number;
  CreationTime: string;
  DocumentsCopiedToDatabase: number;
  DocumentsCopiedToDatabasePerSecond: number;
  DocumentsCopiedToElasticsearch: number;
  DocumentsCopiedToElasticsearchPerSecond: number;
  ElapsedTimeInSeconds: number;
  ExpectedCompletionTime?: string;
  ExpectedTimeRemainingInSeconds?: number;
  ExpectedTotalTimeInSeconds?: number;
  ProductsComposed: number;
  ProductsComposedPerSecond: number;
  Progress: number;
  RemainingBatchCount: number;
  RemainingCopyBatchCount: number;
  Status?: string;
  TotalComposeCount: number;
  TotalProductCount: number;
  WaitingOnCompositionTimeInSeconds: number;
  WaitingOnConsumerTimeInSeconds: number;
  WaitingOnDatabaseTimeInSeconds: number;
  WaitingOnDatabaseWriteTimeInSeconds: number;
  WaitingOnElasticsearchTimeInSeconds: number;
  WaitingOnProducerTimeInSeconds: number;
  WaitingOnSerializationTimeInSeconds: number;
}

/**
* Lists ProductContentEdits, optionally filtered by ProductID/RevisionID/LayerID
*/
export interface ListProductContentEdits extends PagedRequestMessage<CompositionListProductContentEditsFilter, ListProductContentEditsResponse> {
}

export interface ListProductContentEditsResponse extends PagedResponseMessage<CompositionListProductContentEditsItem> {
}

export enum DataModelsProductPropertyTypeOptions {
  None = 0,
  AlphabeticallySortable = 1,
}

export interface DataModelsProductSearchStrategyModel {
  Aggregation?: DataModelsProductSearchStrategyModel_AggregationStrategy;
  Condition?: DataModelsProductSearchStrategyModel_StrategyCondition;
  Query?: DataModelsProductSearchStrategyModel_QueryStrategy;
  Scoring?: DataModelsProductSearchStrategyModel_ScoringStrategy;
  Sorting?: DataModelsProductSearchStrategyModel_SortingStrategy;
}

export interface DataModelsProductSearchStrategyModel_AggregationStrategy {
  StockFilterType?: DataModelsProductSearchStrategyModel_StockFilterTypes;
}

export enum DataModelsProductSearchStrategyModel_BoostMode {
  Multiply = 0,
  Replace = 1,
  Sum = 2,
  Average = 3,
  Max = 4,
  Min = 5,
}

export interface DataModelsProductSearchStrategyModel_FilterCondition {
  FilterValue?: string;
  ProductPropertyTypeID?: string;
}

export enum DataModelsProductSearchStrategyModel_MatchOperator {
  And = 0,
  Or = 1,
}

export interface DataModelsProductSearchStrategyModel_MultiMatchFuzziness {
  EditDistance?: number;
  MaxExpansions?: number;
  PrefixLength?: number;
}

export interface DataModelsProductSearchStrategyModel_MultiMatchQuery {
  Analyzer?: string;
  Boost?: number;
  Fuzziness?: DataModelsProductSearchStrategyModel_MultiMatchFuzziness;
  MinimumShouldMatch?: string;
  Operator?: DataModelsProductSearchStrategyModel_MatchOperator;
  PropertiesToSearch?: DataModelsProductSearchStrategyModel_ProductPropertyTypeToSearch[];
  RequirementType?: DataModelsProductSearchStrategyModel_QueryRequirementType;
  Slop?: number;
  Type?: DataModelsProductSearchStrategyModel_MultiMatchType;
}

export enum DataModelsProductSearchStrategyModel_MultiMatchType {
  BestFields = 0,
  MostFields = 1,
  CrossFields = 2,
  Phrase = 3,
  PhrasePrefix = 4,
}

export interface DataModelsProductSearchStrategyModel_ProductPropertyTypeToSearch {
  Boost?: number;
  ID?: string;
}

export interface DataModelsProductSearchStrategyModel_QueryCondition {
  Texts?: string[];
  Type?: DataModelsProductSearchStrategyModel_QueryConditionTypes;
}

export enum DataModelsProductSearchStrategyModel_QueryConditionTypes {
  Equals = 0,
  Contains = 1,
  StartsWith = 2,
}

export enum DataModelsProductSearchStrategyModel_QueryRequirementType {
  Must = 0,
  Should = 1,
}

export interface DataModelsProductSearchStrategyModel_QueryStrategy {
  MinimumShouldMatch?: string;
  Queries?: DataModelsProductSearchStrategyModel_MultiMatchQuery[];
  StockFilter?: DataModelsProductSearchStrategyModel_StockFilterStrategy;
}

export enum DataModelsProductSearchStrategyModel_ScoreModes {
  Multiply = 0,
  Sum = 1,
  Average = 2,
  First = 3,
  Max = 4,
  Min = 5,
}

export interface DataModelsProductSearchStrategyModel_ScoringFunction {
  Options?: Record<string, TAnyValue>;
  Type?: DataModelsProductSearchStrategyModel_ScoringFunctionTypes;
  Weight?: number;
}

export enum DataModelsProductSearchStrategyModel_ScoringFunctionTypes {
  FieldValueFactor = 0,
  Script = 1,
}

export interface DataModelsProductSearchStrategyModel_ScoringStrategy {
  BoostMode?: DataModelsProductSearchStrategyModel_BoostMode;
  MaxBoost?: number;
  MinScore?: number;
  ScoreMode?: DataModelsProductSearchStrategyModel_ScoreModes;
  ScoringFunctions?: DataModelsProductSearchStrategyModel_ScoringFunction[];
  StockScoring?: DataModelsProductSearchStrategyModel_StockScoringStrategy;
}

export enum DataModelsProductSearchStrategyModel_SortingScriptType {
  Number = 0,
  String = 1,
}

export interface DataModelsProductSearchStrategyModel_SortingStrategy {
  Sort?: DataModelsProductSearchStrategyModel_SortingStrategySort[];
  StockSorting?: DataModelsProductSearchStrategyModel_StockSortingStrategy;
}

export enum DataModelsProductSearchStrategyModel_SortingStrategyOrder {
  Ascending = 0,
  Descending = 1,
}

export interface DataModelsProductSearchStrategyModel_SortingStrategySort {
  Field?: string;
  MissingValue?: TAnyValue;
  Order?: DataModelsProductSearchStrategyModel_SortingStrategyOrder;
  Script?: DataModelsProductSearchStrategyModel_SortingStrategySortScript;
}

export interface DataModelsProductSearchStrategyModel_SortingStrategySortScript {
  Language?: string;
  Source?: string;
  Type?: DataModelsProductSearchStrategyModel_SortingScriptType;
}

export interface DataModelsProductSearchStrategyModel_StockFilterStrategy {
  FilterByStock?: boolean;
  Type?: DataModelsProductSearchStrategyModel_StockFilterTypes;
}

export enum DataModelsProductSearchStrategyModel_StockFilterTypes {
  CurrentOrganizationUnit = 0,
  Suppliers = 1,
}

export interface DataModelsProductSearchStrategyModel_StockScoringStrategy {
  AdjustScoreByStock?: boolean;
  BoostAmount?: number;
  Type?: DataModelsProductSearchStrategyModel_StockFilterTypes;
}

export interface DataModelsProductSearchStrategyModel_StockSortingStrategy {
  SortByStock?: boolean;
  Type?: DataModelsProductSearchStrategyModel_StockFilterTypes;
}

export interface DataModelsProductSearchStrategyModel_StrategyCondition {
  Filters?: DataModelsProductSearchStrategyModel_FilterCondition[];
  Query?: DataModelsProductSearchStrategyModel_QueryCondition;
}

export enum DataModelsProductSearchStrategyTypes {
  Full = 0,
  Partial = 1,
}

export enum DataModelsRevisionStatus {
  Open = 1,
  Applied = 2,
  Inactive = 4,
}

export enum EnumerationsContentLayerArrayHandling {
  Merge = 0,
  Overwrite = 1,
}

export enum EnumerationsContentLayerTypes {
  UserLayer = 0,
  SystemLayer = 1,
}

export enum EnumerationsProductPropertyTypeDataTypes {
  None = 0,
  Integer = 1,
  Double = 2,
  Boolean = 3,
  String = 4,
  Blob = 5,
  Date = 6,
  RichText = 7,
}

export enum EnumerationsProductPropertyTypeInheritanceTypes {
  NormalInheritance = 0,
  NoInheritance = 1,
}

export enum EnumerationsProductPropertyTypeIntents {
  RichAttribute = 0,
  SimpleField = 1,
  RootLevelOnly = 2,
}

export enum EnumerationsProductPropertyTypeSearchTypeMatchingMethod {
  MatchesAll = 0,
  MatchesAtLeastOne = 1,
}

export enum EnumerationsProductPropertyTypeSearchTypes {
  None = 0,
  Keyword = 1,
  Text = 2,
  IsHidden = 4,
}

export interface ImportProductMapItem {
  /**
  * Entity type: Product
  */
  BackendID?: string;
  /**
  * Entity type: Product
  */
  ID: number;
}

export interface ProductSearchConfigurationModel {
  Analyzers?: ProductSearchConfigurationModel_Analyzer[];
  CharFilters?: ProductSearchConfigurationModel_CharFilter[];
  DisableSynonyms?: boolean;
  IndexPipelineScript?: string;
  ProductPropertyTypes?: ProductSearchConfigurationModel_ProductPropertyTypeConfiguration[];
  TokenFilters?: ProductSearchConfigurationModel_TokenFilter[];
}

export interface ProductSearchConfigurationModel_Analyzer {
  CharFilters?: string[];
  Filters?: string[];
  LanguageID?: string;
  Name?: string;
  Tokenizer?: string;
  Type?: string;
}

export interface ProductSearchConfigurationModel_CharFilter {
  LanguageID?: string;
  Name?: string;
  Options?: Record<string, TAnyValue>;
  Type?: string;
}

export interface ProductSearchConfigurationModel_ProductPropertyTypeConfiguration {
  Analyzer?: string;
  CopyTo?: string;
  LanguageID?: string;
  Name?: string;
  SearchAnalyzer?: string;
}

export interface ProductSearchConfigurationModel_TokenFilter {
  LanguageID?: string;
  Name?: string;
  Options?: Record<string, TAnyValue>;
  Type?: string;
}

export interface RepositoriesContentCultureMappingFilter {
  /**
  * Entity type: Assortment
  */
  ContentAssortmentID?: number;
  /**
  * Entity type: Country
  */
  ContentCountryID?: string;
  /**
  * Entity type: Language
  */
  ContentLanguageID?: string;
  /**
  * Entity type: Country
  */
  SourceCountryID?: string;
  /**
  * Entity type: Language
  */
  SourceLanguageID?: string;
}

export interface RepositoriesListProductPropertyTypesFilter {
  /**
  * Entity type: ProductPropertyCategory
  */
  CategoryID?: string;
  DataType?: EnumerationsProductPropertyTypeDataTypes;
  DataTypeID?: EnumerationsProductPropertyTypeDataTypes;
  /**
  * Entity type: ProductPropertyType
  * Fuzzy search for ID of the property
  */
  ID?: string;
  /**
  * Entity type: ProductPropertyType
  * Non-fuzzy search for properties for the given ID's
  */
  IDs?: string[];
  InheritanceType?: EnumerationsProductPropertyTypeInheritanceTypes;
  Intent?: EnumerationsProductPropertyTypeIntents;
  IsArray?: boolean;
  IsEnum?: boolean;
  Options?: DataModelsProductPropertyTypeOptions;
  SearchType?: EnumerationsProductPropertyTypeSearchTypes;
  SearchTypeMatchingMethod?: EnumerationsProductPropertyTypeSearchTypeMatchingMethod;
}

export interface RepositoriesListProductSearchStrategiesFilter {
  /**
  * Entity type: Country
  */
  CountryID?: string;
  /**
  * Entity type: Language
  */
  LanguageID?: string;
}

export interface RepositoriesListProductSearchStrategyItem {
  /**
  * Entity type: Catalog
  */
  CatalogID?: number;
  Code?: string;
  /**
  * Entity type: Country
  */
  CountryID?: string;
  /**
  * Entity type: ProductSearchStrategy
  */
  ID: number;
  /**
  * Entity type: Language
  */
  LanguageID?: string;
  Name?: string;
  OrganizationUnitType?: OrganizationUnitTypes;
  OrganizationUnitTypeID?: number;
  SerializedStrategy?: string;
  Strategy?: DataModelsProductSearchStrategyModel;
  Type: DataModelsProductSearchStrategyTypes;
  TypeID: number;
}

export interface RepositoriesListRevisionsFilter {
  IncludeSystemRevisions?: boolean;
  Name?: string;
  /**
  * Entity type: Product
  */
  ProductID?: number;
  Status?: DataModelsRevisionStatus;
  StatusID?: number;
}

export interface ServicesBrandsBrandDto {
  /**
  * Entity type: Brand
  */
  BackendID?: string;
  /**
  * Entity type: Brand
  */
  ID: number;
  Name?: string;
}

export interface CreateBrand extends RequestMessageWithEmptyResponse {
  BackendID?: string;
  Name?: string;
}

export interface GetBrand extends RequestMessage<GetBrandResponse> {
  /**
  * Entity type: Brand
  */
  ID: number;
}

export interface GetBrandResponse extends ResponseMessage {
  Result?: ServicesBrandsBrandDto;
}

export interface UpdateBrand extends RequestMessageWithEmptyResponse {
  ToUpdate: ServicesBrandsBrandDto;
}

export interface ServicesCommonLayerWithContentDto {
  /**
  * Entity type: Application
  */
  ApplicationID?: number;
  ArrayHandling: EnumerationsContentLayerArrayHandling;
  Content?: Record<string, TAnyValue>;
  /**
  * Entity type: Country
  */
  CountryID?: string;
  Description?: string;
  DisplayValue?: string;
  /**
  * Entity type: ContentLayer
  */
  ID: number;
  /**
  * Entity type: Language
  */
  LanguageID?: string;
  Level: number;
  Name?: string;
}

/**
* Creates a ProductSearchConfiguration for your current Catalog if it doesn't exist, or replaces the existing one.
* All properties on the configuration are optional.
*/
export interface CreateOrReplaceProductSearchConfiguration extends RequestMessageWithEmptyResponse {
  Configuration?: ProductSearchConfigurationModel;
}

/**
* Retrieves the ProductSearchConfiguration for your current Catalog, or an empty one if it doesn't exist.
*/
export interface GetProductSearchConfiguration extends RequestMessage<GetProductSearchConfigurationResponse> {
}

export interface GetProductSearchConfigurationResponse extends ResponseMessage {
  Configuration?: ProductSearchConfigurationModel;
}

export interface CreateLayer extends RequestMessage<CreateLayerResponse> {
  /**
  * Entity type: Application
  */
  ApplicationID?: number;
  ArrayHandling?: EnumerationsContentLayerArrayHandling;
  /**
  * Entity type: Country
  */
  CountryID?: string;
  Description?: string;
  /**
  * Entity type: Language
  */
  LanguageID?: string;
  Level?: number;
  Name?: string;
}

export interface CreateLayerResponse extends ResponseMessage {
  Result?: ServicesContentLayersCreatedLayer;
}

export interface ServicesContentLayersCreatedLayer {
  /**
  * Entity type: Application
  */
  ApplicationID?: number;
  ArrayHandling: EnumerationsContentLayerArrayHandling;
  /**
  * Entity type: Country
  */
  CountryID?: string;
  Description?: string;
  /**
  * Entity type: ContentLayer
  */
  ID: number;
  Level: number;
  Name?: string;
}

export interface GetLayerByID extends RequestMessage<GetLayerByIDResponse> {
  /**
  * Entity type: ContentLayer
  */
  ID: number;
}

export interface GetLayerByIDResponse extends ResponseMessage {
  Layer?: ServicesContentLayersLayerDto;
}

export interface ServicesContentLayersLayerDto {
  /**
  * Entity type: Application
  */
  ApplicationID?: number;
  ArrayHandling: EnumerationsContentLayerArrayHandling;
  /**
  * Entity type: Catalog
  */
  CatalogID?: number;
  /**
  * Entity type: Country
  */
  CountryID?: string;
  Description?: string;
  /**
  * Entity type: ContentLayer
  */
  ID: number;
  /**
  * Entity type: Language
  */
  LanguageID?: string;
  Level: number;
  Name?: string;
  Type: EnumerationsContentLayerTypes;
}

export interface ListLayers extends PagedResultRequest<ListLayersResponse> {
}

export interface ListLayersResponse extends PagedResultResponse<ServicesContentLayersLayerDto> {
}

export interface UpdateLayer extends RequestMessageWithEmptyResponse {
  ArrayHandling?: EnumerationsContentLayerArrayHandling;
  Description?: string;
  /**
  * Entity type: ContentLayer
  */
  ID: number;
  Level?: number;
  Name?: string;
}

/**
* Creates a new AssortmentContentCulture.
* If it already exists, nothing will be done.
*/
export interface CreateAssortmentContentCulture extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: Assortment
  */
  AssortmentID: number;
  /**
  * Entity type: Country
  */
  CountryID?: string;
  /**
  * Entity type: Language
  */
  LanguageID?: string;
}

/**
* Creates a new ContentCultureMapping for the current application.
*/
export interface CreateContentCultureMapping extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: Assortment
  */
  AssortmentID: number;
  ContentCountryID: string;
  ContentLanguageID: string;
  SourceCountryID?: string;
  SourceLanguageID?: string;
}

/**
* Deletes an existing AssortmentContentCulture. If there are any existing mappings to this ContentCulture, they will also be deleted.
*/
export interface DeleteAssortmentContentCulture extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: Assortment
  */
  AssortmentID: number;
  /**
  * Entity type: Country
  */
  CountryID?: string;
  /**
  * Entity type: Language
  */
  LanguageID?: string;
}

/**
* Deletes an existing ContentCultureMapping.
*/
export interface DeleteContentCultureMapping extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: ContentCultureMapping
  */
  ID: number;
}

/**
* Returns the AssortmentContentCultures
*/
export interface GetAssortmentContentCultures extends RequestMessage<GetAssortmentContentCulturesResponse> {
}

export interface GetAssortmentContentCulturesResponse extends ResponseMessage {
  ContentCultures?: ServicesCulturesGetAssortmentContentCulturesResponse_AssortmentContentCulture[];
}

export interface ServicesCulturesGetAssortmentContentCulturesResponse_AssortmentContentCulture {
  /**
  * Entity type: Assortment
  */
  AssortmentID: number;
  AssortmentName?: string;
  /**
  * Entity type: Country
  */
  CountryID?: string;
  /**
  * Entity type: Culture
  */
  CultureID?: string;
  /**
  * Entity type: Language
  */
  LanguageID?: string;
}

export interface ServicesCulturesListApplicationContentCulture {
  /**
  * Entity type: Application
  */
  ApplicationID: number;
  /**
  * Entity type: Country
  */
  CountryID?: string;
  Culture?: string;
  /**
  * Entity type: Language
  */
  LanguageID?: string;
}

export interface ListApplicationCultures extends RequestMessage<ListApplicationCulturesResponse> {
}

export interface ListApplicationCulturesResponse extends ResponseMessage {
  Result?: ServicesCulturesListApplicationContentCulture[];
}

/**
* Returns the current ContentCultureMapping.
*/
export interface ListContentCultureMapping extends RequestMessage<ListContentCultureMappingResponse> {
  PageConfig?: PageConfig<RepositoriesContentCultureMappingFilter>;
}

export interface ListContentCultureMappingResponse extends PagedResultResponse<ServicesCulturesListContentCultureMappingResponse_ContentCultureMappingDto> {
}

export interface ServicesCulturesListContentCultureMappingResponse_ContentCultureMappingDto {
  /**
  * Entity type: Assortment
  */
  ContentAssortmentID: number;
  /**
  * Entity type: Country
  */
  ContentCountryID?: string;
  /**
  * Entity type: Culture
  */
  ContentCultureID?: string;
  /**
  * Entity type: Language
  */
  ContentLanguageID?: string;
  /**
  * Entity type: ContentCultureMapping
  */
  ID: number;
  /**
  * Entity type: Country
  */
  SourceCountryID?: string;
  /**
  * Entity type: Language
  */
  SourceLanguageID?: string;
}

/**
* Get the current DB values for a product, used to update these properties with the UpdateProduct service.
*/
export interface GetProductByID extends RequestMessage<GetProductByIDResponse> {
  /**
  * Entity type: Product
  */
  ID: number;
}

export interface GetProductByIDResponse extends ResponseMessage {
  /**
  * Entity type: Product
  */
  BackendID?: string;
  CustomID?: string;
  /**
  * Entity type: Product
  */
  ID: number;
  /**
  * Entity type: LedgerClass
  */
  LedgerClassID?: string;
  PrimitiveName?: string;
  /**
  * Entity type: TaxCode
  */
  TaxCodeID: number;
  TypeID: number;
}

export interface CreateProductPropertyCategory extends RequestMessage<CreateProductPropertyCategoryResponse> {
  CategoryID?: string;
  EditFunctionality?: string;
}

export interface CreateProductPropertyCategoryResponse extends ResponseMessage {
}

export interface EditProductPropertyCategory extends RequestMessage<EditProductPropertyCategoryResponse> {
  Edits?: ServicesProductPropertyCategoriesProductPropertyCategoryEdit[];
  ID?: string;
  /**
  * Entity type: Revision
  */
  RevisionID: number;
}

export interface EditProductPropertyCategoryResponse extends ResponseMessage {
}

export interface GetProductPropertyCategoryByID extends RequestMessage<GetProductPropertyCategoryByIDResponse> {
  ID?: string;
  /**
  * Entity type: Revision
  */
  RevisionID: number;
}

export interface GetProductPropertyCategoryByIDResponse extends ResponseMessage {
  /**
  * Entity type: Catalog
  */
  CatalogID?: number;
  ID?: string;
  LayersWithContent?: ServicesCommonLayerWithContentDto[];
}

export interface ListProductPropertyCategories extends PagedResultRequest<ListProductPropertyCategoriesResponse> {
}

export interface ServicesProductPropertyCategoriesListProductPropertyCategoriesDto {
  DisplayName?: string;
  ID?: string;
  Name?: string;
}

export interface ListProductPropertyCategoriesResponse extends PagedResultResponse<ServicesProductPropertyCategoriesListProductPropertyCategoriesDto> {
}

export interface ServicesProductPropertyCategoriesProductPropertyCategoryEdit {
  Content?: Record<string, TAnyValue>;
  /**
  * Entity type: ContentLayer
  */
  LayerID: number;
}

export interface ServicesProductPropertyTypeModel {
  Category?: ServicesProductPropertyTypeModel_CategoryModel;
  /**
  * Entity type: Country
  */
  CountryID?: string;
  DataType: EnumerationsProductPropertyTypeDataTypes;
  EditFunctionality?: string;
  ID?: string;
  Intent: EnumerationsProductPropertyTypeIntents;
  IsArray: boolean;
  /**
  * Entity type: Language
  */
  LanguageID?: string;
  SearchType: EnumerationsProductPropertyTypeSearchTypes;
  /**
  * Entity type: Application
  */
  application_id: number;
  array: boolean;
  category?: ServicesProductPropertyTypeModel_CategoryModel;
  category_id?: string;
  country_id?: string;
  data_type: EnumerationsProductPropertyTypeDataTypes;
  functionality?: string;
  intent: EnumerationsProductPropertyTypeIntents;
  language_id?: string;
  search_type: EnumerationsProductPropertyTypeSearchTypes;
  type_id?: string;
}

export interface ServicesProductPropertyTypeModel_CategoryModel {
  EditFunctionality?: string;
  ID?: string;
  category_id?: string;
  functionality?: string;
}

/**
* Create a new ProductPropertyType
*/
export interface CreateProductPropertyType extends RequestMessageWithEmptyResponse {
  CategoryID: string;
  CopyToParentProductPropertyTypeID?: string;
  DataType?: EnumerationsProductPropertyTypeDataTypes;
  EditFunctionality?: string;
  IsArray?: boolean;
  IsEnum?: boolean;
  Options?: DataModelsProductPropertyTypeOptions;
  SearchType?: EnumerationsProductPropertyTypeSearchTypes;
  TypeID: string;
}

/**
* Create product property type enum value
*/
export interface CreateProductPropertyTypeEnumValue extends RequestMessage<CreateProductPropertyTypeEnumValueResponse> {
  /**
  * Entity type: Country
  */
  CountryID?: string;
  Identifier?: number;
  /**
  * Entity type: Language
  */
  LanguageID?: string;
  ProductPropertyTypeID: string;
  Value?: string;
}

export interface CreateProductPropertyTypeEnumValueResponse extends ResponseMessage {
  /**
  * Entity type: ProductPropertyTypeEnumValue
  */
  ID: number;
}

/**
* Deletes the given product property type based on its identifier. This is irreversible and will cause products that are composed after this action to no longer have the property.
*/
export interface DeleteProductPropertyType extends RequestMessageWithEmptyResponse {
  ID?: string;
}

/**
* Delete product property type enum value
*/
export interface DeleteProductPropertyTypeEnumValue extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: ProductPropertyTypeEnumValue
  */
  ID: number;
}

/**
* Update a ProductPropertyType
* 
* The SearchType or Options can be changed
* 
* For the Edits there is a specific set of properties that can be set:
* - display_name
* - name
* - unit_of_measure
*/
export interface EditProductPropertyType extends RequestMessage<EditProductPropertyTypeResponse> {
  CopyToParentProductPropertyTypeID?: string | null;
  Edits?: ServicesProductPropertyTypesProductPropertyTypeEdit[];
  /**
  * Entity type: ProductPropertyType
  */
  ID?: string;
  Options?: DataModelsProductPropertyTypeOptions;
  SearchType?: EnumerationsProductPropertyTypeSearchTypes;
}

export interface EditProductPropertyTypeResponse extends ResponseMessage {
}

/**
* Get available enum values for product property type
*/
export interface GetAvailableEnumValuesForProductPropertyType extends RequestMessage<GetAvailableEnumValuesForProductPropertyTypeResponse> {
  TypeID?: string;
}

export interface GetAvailableEnumValuesForProductPropertyTypeResponse extends ResponseMessage {
  /**
  * Entity type: ProductPropertyType
  */
  Values?: Record<string,string | null>;
}

/**
* Get product property type
*/
export interface GetProductPropertyTypeByID extends RequestMessage<GetProductPropertyTypeByIDResponse> {
  ID: string;
  /**
  * Entity type: Revision
  */
  RevisionID?: number;
}

export interface GetProductPropertyTypeByIDResponse extends ResponseMessage {
  /**
  * Entity type: Catalog
  */
  CatalogID?: number;
  /**
  * Entity type: ProductPropertyCategory
  */
  CategoryID?: string;
  /**
  * Entity type: ProductPropertyType
  */
  ID?: string;
  LayersWithContent?: ServicesCommonLayerWithContentDto[];
}

/**
* Get product property type enum value
*/
export interface GetProductPropertyTypeEnumValueByID extends RequestMessage<GetProductPropertyTypeEnumValueByIDResponse> {
  /**
  * Entity type: ProductPropertyTypeEnumValue
  */
  ID: number;
}

export interface GetProductPropertyTypeEnumValueByIDResponse extends ResponseMessage {
  /**
  * Entity type: Country
  */
  CountryID?: string;
  /**
  * Entity type: ProductPropertyTypeEnumValue
  */
  ID: number;
  Identifier: number;
  /**
  * Entity type: Language
  */
  LanguageID?: string;
  ProductPropertyTypeID?: string;
  Value?: string;
}

/**
* List product property type enum values
*/
export interface ListProductPropertyTypeEnumValues extends PagedResultRequest<ListProductPropertyTypeEnumValuesResponse> {
}

export interface ListProductPropertyTypeEnumValuesResponse extends PagedResultResponse<ServicesProductPropertyTypesListProductPropertyTypeEnumValuesResponse_ProductPropertyTypeEnumValueDto> {
}

export interface ServicesProductPropertyTypesListProductPropertyTypeEnumValuesResponse_ProductPropertyTypeEnumValueDto {
  CountryID?: string;
  /**
  * Entity type: ProductPropertyTypeEnumValue
  */
  ID: number;
  Identifier: number;
  LanguageID?: string;
  ProductPropertyTypeID?: string;
  Value?: string;
}

/**
* List product property types
*/
export interface ListProductPropertyTypes extends FilteredPagedResultRequest<RepositoriesListProductPropertyTypesFilter, ListProductPropertyTypesResponse> {
}

export interface ServicesProductPropertyTypesListProductPropertyTypesDto {
  CategoryDisplayName?: string;
  /**
  * Entity type: ProductPropertyCategory
  */
  CategoryID?: string;
  DataType: EnumerationsProductPropertyTypeDataTypes;
  DisplayName?: string;
  /**
  * Entity type: ProductPropertyType
  */
  ID?: string;
  InheritanceType: EnumerationsProductPropertyTypeInheritanceTypes;
  Intent: EnumerationsProductPropertyTypeIntents;
  IsAggregatable: boolean;
  Options: DataModelsProductPropertyTypeOptions;
  SearchType: EnumerationsProductPropertyTypeSearchTypes;
}

export interface ListProductPropertyTypesResponse extends PagedResultResponse<ServicesProductPropertyTypesListProductPropertyTypesDto> {
}

export interface ServicesProductPropertyTypesProductPropertyTypeEdit {
  Content?: Record<string, TAnyValue>;
  /**
  * Entity type: ContentLayer
  */
  LayerID: number;
}

/**
* Search product property types
*/
export interface SearchProductPropertyTypes extends PagedResultRequest<SearchProductPropertyTypesResponse> {
  Query?: string;
}

export interface SearchProductPropertyTypesResponse extends PagedResultResponse<ServicesProductPropertyTypeModel> {
}

/**
* Update product property type enum value
*/
export interface UpdateProductPropertyTypeEnumValue extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: Country
  */
  CountryID?: string;
  /**
  * Entity type: ProductPropertyTypeEnumValue
  */
  ID: number;
  Identifier?: number;
  /**
  * Entity type: Language
  */
  LanguageID?: string;
  Value?: string;
}

/**
* Create a relation of the given ProductRelationType for the given ProductRelations
*/
export interface AddProductRelations extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: ProductRelationType
  */
  ID: number;
  Relations?: ServicesProductsAddProductRelations_ProductRelation[];
}

export interface ServicesProductsAddProductRelations_ProductRelation {
  /**
  * Entity type: Product
  */
  PrimaryProductID: number;
  /**
  * Entity type: Product
  */
  RelatedProductID?: number;
  Sequence?: number;
}

/**
* Add a product to product capacity plan. This is only allowed on static product capacity plans. A product can not be in more then one static product capacity plan per supplier.
*/
export interface AddProductsToProductCapacityPlan extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: ProductCapacityPlan
  */
  ID: number;
  OverwriteExistingProductCapacityPlans?: boolean;
  /**
  * Entity type: Product
  */
  ProductIDs: number[];
}

export interface AddReferenceDataToProduct extends RequestMessageWithEmptyResponse {
  Data?: TAnyValue;
  Name?: string;
  /**
  * Entity type: Product
  */
  ProductID: number;
}

/**
* Creates a new Product, given at least your `PrimitiveName` and `ProductType`.
* 
* - [x]  Given `PrimitiveName` is a name for the product to help you recognise it, but is rarely exposed to users or customers. This property does not support localization or translations!
* - [x]  `TaxCodeID` is an integer value indicating one of the configured TaxCodes.
* - [x]  The `ProductType` is a flag enumeration value with one or more of the following possible values;
* 
*   * `0` None
*   * `1` Stock
*   * `2` Insurance
*   * `4` Marketing
*   * `8` Gift Card
*   * `16` Service
*   * `64` Custom Pricing
*   * `128` External
*   * `256` Order Costs
*   * `512` System Generated
*   * `1024` Product Set
*   * `2048` Bundle Product
*   * `16384` Configurable
*   * `32768` Supplier Product
*   * `65536` Template
*   * `131072` Second Chance
*   * `262144` Not Returnable
*   * `524288` + `1` Stock Aggregate
*   * `1048576` Subscription Product
*   * `2097152` Event
* 
* Optionally, you can supply some additional information;
* 
* - [] `BackendID` is a number to help you identify this product. **Unique per `OrganizationUnitID` and `BackendSystemID`.**
* - [] `BackendSystemID` is a string value to idenfity the source this product originated from - can be anything.
* - [] `OrganizationUnitID` is the Organization Unit this product is linked to, or `null` when this is a generic EVA product.
* - [] `CustomID` is a string value to help you identify this product, without any constraints, but indexed for optimal performance.
* - [] `BrandID` to link it to any `Brand` entity.
*/
export interface CreateProduct extends RequestMessage<CreateProductResponse> {
  BackendID?: string;
  BackendSystemID?: string;
  /**
  * Entity type: Brand
  */
  BrandID?: number;
  CommodityCode?: string;
  CountryOfOriginID?: string;
  CustomID?: string;
  LedgerClassID?: string;
  LogicalLevel?: string;
  ManufacturerID?: string;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID?: number;
  PrimitiveName: string;
  ProductType?: DataModelsProductTypes;
  /**
  * Entity type: TaxCode
  */
  TaxCodeID?: number;
}

/**
* Create a new product capacity plan, which limits the stock of a product based on the capacity of production.
*/
export interface CreateProductCapacityPlan extends RequestMessage<CreateProductCapacityPlanResponse> {
  AvailabilityCalculationCutOffInDays?: number;
  Capacity?: number;
  Description?: string;
  Name: string;
  OverwriteExistingProductCapacityPlans?: boolean;
  ProductCapacityTimeFrame?: DataModelsProductCapacityTimeFrame;
  /**
  * Entity type: Product
  */
  ProductIDs?: number[];
  ProductSearchFilters?: Record<string,SearchFilterModel>;
  /**
  * Entity type: ProductSearchTemplate
  */
  ProductSearchTemplateID?: number;
  /**
  * Entity type: OrganizationUnit
  */
  SupplierOrganizationUnitID: number;
}

export interface CreateProductCapacityPlanResponse extends ResponseMessage {
  /**
  * Entity type: ProductCapacityPlan
  */
  ID: number;
}

/**
* Create a new ProductRelationType.
*/
export interface CreateProductRelationType extends RequestMessage<CreateProductRelationTypeResponse> {
  BackendID?: string;
  /**
  * The direction of the relation. This can either be;
  * Unidirectional; one-way relation. For example 'parent-child' or 'replaced by'
  * Bidirectional; two-way relation. For example 'maybe your also intrested in' or 'others also bought'
  * Group; collective relation which allows for many products as part of a group. For example 'all products that are blue' or 'all products from summer-2022'. This type does not accept a StockRelationType.
  */
  Direction?: DataModelsProductRelationDirection;
  /**
  * Entity type: Product
  * You can create dynamic bi- or uni directional relations by defining a `DynamicRelationProductID` in combination with a `ProductSearchTemplateID` or `ProductSearchFilters`.
  * By setting the `UseDynamicRelationProductAsRelatedProduct` to false (default), the `DynamicRelationProductID` will be considered as the primary product and the result from the `ProductSearchTemplateID` or `ProductSearchFilters` will be considered as related products
  * By setting the `UseDynamicRelationProductAsRelatedProduct` to true , the result from the `ProductSearchTemplateID` or `ProductSearchFilters` will be considered as primary products and the `DynamicRelationProductID` will be considered as the related product
  */
  DynamicRelationProductID?: number;
  /**
  * This is the primary name the relation. For example; if primary name is 'Blocks', the secondary name could be something in the lines of 'Blocked by'.
  */
  PrimaryName: string;
  /**
  * Only available when Direction is set to `Group`.
  */
  ProductSearchFilters?: Record<string,SearchFilterModel>;
  /**
  * Entity type: ProductSearchTemplate
  * Only available when Direction is set to `Group`.
  */
  ProductSearchTemplateID?: number;
  Relations?: ServicesProductsCreateProductRelationType_Relation[];
  /**
  * This is the secondary name the relation. For example; if primary name is 'Blocks', the secondary name could be something in the lines of 'Blocked by'.
  */
  SecondaryName?: string;
  /**
  * Indicates which stock relation type the relation has. In most cases this will be 'None'. The following options are available:
  * None; No stock relation
  * Replacing; When the PrimaryProduct is no longer in stock, the system can automaticly use the RelatedProduct as it's replacement (or vice versa if `Direction` is set to `Bidirectional`).
  */
  StockRelationType?: DataModelsStockRelationType;
  UseDynamicRelationProductAsRelatedProduct?: boolean;
}

export interface ServicesProductsCreateProductRelationType_Relation {
  /**
  * Entity type: Product
  */
  PrimaryProductID: number;
  /**
  * Entity type: Product
  */
  RelatedProductID?: number;
  Sequence?: number;
}

export interface CreateProductRelationTypeResponse extends ResponseMessage {
  /**
  * Entity type: ProductRelationType
  */
  ID: number;
}

export interface CreateProductResponse extends ResponseMessage {
  /**
  * Entity type: Product
  */
  ID: number;
}

/**
* Create a second chance product.
*/
export interface CreateSecondChanceProduct extends RequestMessage<CreateSecondChanceProductResponse> {
  BlobImageUrls?: string[];
  /**
  * Please ensure the key is a valid ProductPropertyTypes.
  */
  CustomContent?: Record<string,TAnyValue | null>;
  Description: string;
  /**
  * Entity type: StockLabel
  * The stock label of the second chance product. If unspecified, defaults to `Sellable`.
  */
  DestinationStockLabelID?: number;
  /**
  * Moves stock from the original product to the second chance product.
  */
  MoveStock?: boolean;
  NotReturnable?: boolean;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID?: number;
  Price: number;
  /**
  * Entity type: Product
  */
  ProductID: number;
  ProductName: string;
  /**
  * Specify a serial number.
  */
  SerialNumber?: string;
  /**
  * Entity type: StockLabel
  * The stock label of the original product. If unspecified, defaults to `Damaged`.
  */
  SourceStockLabelID?: number;
  /**
  * Entity type: StockLabel
  * The stock label of the original product. If unspecified, defaults to `Damaged`.
  */
  StockLabelID?: number;
}

export interface CreateSecondChanceProductResponse extends ResponseMessage {
  Barcode?: string;
  /**
  * Entity type: Product
  */
  ProductID: number;
}

/**
* Deletes a product capacity plan.
*/
export interface DeleteProductCapacityPlan extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: ProductCapacityPlan
  */
  ID: number;
}

/**
* Deletes a product capacity plan exception
*/
export interface DeleteProductCapacityPlanException extends RequestMessageWithEmptyResponse {
  Date?: string;
  DayOfWeek?: DayOfWeek;
  /**
  * Entity type: ProductCapacityPlan
  */
  ID: number;
}

/**
* Deletes the ProductRelationType.
*/
export interface DeleteProductRelationType extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: ProductRelationType
  */
  ID: number;
}

/**
* Modifies given product by its `ID` for a specific `RevisionID`.
* 
* The `Edits` is a list of `ProductEdit` objects, that defines some `Content` and the `LanguageID`, `CountryID` and  `LayerID` it applies to. The `Content` is a Json object with key-value pairs that holds
* product information. The keys are simple strings, but the value can be a scalar value (like an int or string), an array of scalar values or an array of objects.
* 
* A `Revision` is a versioning container in which one or more product modifications are buffered. The changes to the product do not apply directly, but instead are stored in this `Revision` until it is
* ready to be published. Also see the `CreateRevision` and `ApplyRevision` services. When omitted, a new 'quick' `Revision` is created and used here.
* 
* A `Layer` is a hierarchical solution to building product data. Every layer has its own `Level`, where the bottom layers will be overwritten by higher layers for colliding properties. A `Layer` has a
* `Revision`. Also see the `CreateLayer` service. When omitted, a new 'quick' `Layer` is created and used here.
*/
export interface EditProduct extends RequestMessageWithEmptyResponse {
  Edits?: ServicesProductsProductEdit[];
  /**
  * Entity type: Product
  */
  ID: number;
  /**
  * Entity type: Revision
  */
  RevisionID?: number;
}

export interface ExportProductBaseExcel extends RequestMessage<ResourceResponseMessage> {
  Filters?: Record<string,SearchFilterModel>;
}

export interface ExportProductBaseExcel_Async extends ExportProductBaseExcel {
}

export interface ExportProductBaseExcel_AsyncResponse extends AsyncRequestHandlingAsyncRequestResponse {
}

export interface ExportProductBaseExcel_AsyncResult extends AsyncRequestHandlingAsyncRequestResultRequest {
}

export interface ExportProductContentExcel extends RequestMessage<ResourceResponseMessage> {
  Filters?: Record<string,SearchFilterModel>;
  /**
  * Entity type: ProductPropertyType
  */
  IncludedFields?: string[];
  Query?: string;
}

export interface ExportProductContentExcel_Async extends ExportProductContentExcel {
}

export interface ExportProductContentExcel_AsyncResponse extends AsyncRequestHandlingAsyncRequestResponse {
}

export interface ExportProductContentExcel_AsyncResult extends AsyncRequestHandlingAsyncRequestResultRequest {
}

export interface GenerateProductBarcodeExcelSample extends RequestMessage<ResourceResponseMessage> {
}

export interface GenerateProductContentExcelSample extends RequestMessage<ResourceResponseMessage> {
}

export interface GenerateProductExcelSample extends RequestMessage<ResourceResponseMessage> {
}

/**
* Get ProductCapacityPlan by the given ID
*/
export interface GetProductCapacityPlanByID extends RequestMessage<GetProductCapacityPlanByIDResponse> {
  /**
  * Entity type: ProductCapacityPlan
  */
  ID: number;
}

export interface GetProductCapacityPlanByIDResponse extends ResponseMessage {
  AvailabilityCalculationCutOffInDays?: number;
  Capacity: number;
  Description?: string;
  Exceptions?: ServicesProductsGetProductCapacityPlanByIDResponse_ProductCapacityPlanException[];
  /**
  * Entity type: ProductCapacityPlan
  */
  ID: number;
  IsDynamic: boolean;
  Name?: string;
  ProductCapacityTimeFrame: DataModelsProductCapacityTimeFrame;
  /**
  * Entity type: Product
  */
  ProductIDs?: number[];
  ProductSearchFilters?: Record<string,SearchFilterModel>;
  /**
  * Entity type: ProductSearchTemplate
  */
  ProductSearchTemplateID?: number;
  /**
  * Entity type: OrganizationUnit
  */
  SupplierOrganizationUnitID: number;
  SupplierOrganizationUnitName?: string;
}

export interface ServicesProductsGetProductCapacityPlanByIDResponse_ProductCapacityPlanException {
  Capacity: number;
  Date?: string;
  DayOfWeek?: DayOfWeek;
}

/**
* Get ProductCapacityPlans by the given ProductID
*/
export interface GetProductCapacityPlansByProductID extends RequestMessage<GetProductCapacityPlansByProductIDResponse> {
  /**
  * Entity type: Product
  */
  ProductID: number;
}

export interface GetProductCapacityPlansByProductIDResponse extends ResponseMessage {
  ProductCapacityPlans?: ServicesProductsGetProductCapacityPlansByProductIDResponse_Plan[];
}

export interface ServicesProductsGetProductCapacityPlansByProductIDResponse_Plan {
  AvailabilityCalculationCutOffInDays?: number;
  Capacity: number;
  Description?: string;
  /**
  * Entity type: ProductCapacityPlan
  */
  ID: number;
  IsActive: boolean;
  IsDynamic: boolean;
  Name?: string;
  ProductCapacityTimeFrame: DataModelsProductCapacityTimeFrame;
  /**
  * Entity type: OrganizationUnit
  */
  SupplierOrganizationUnitID: number;
}

/**
* Retrieves a `Product` with detailed information per `Layer`, from the given `ID` and `RevisionID` parameter.
* 
* In the response, `Content` is a Json formatted object containing key-value pair data, where the keys are simple strings and the value can be a scalar value (like an int or string), an array of scalar
* values or an array of objects.
* 
* The `Types` property in the response data holds meta-data information about the property keys used in the `Content` object like property name, group and (of course) data type.
* 
* :point_right: Use the `GetProductForQuickEditByID` service when you want to apply all published `Revision`'s and only need the compressed `Layer` version of `Content`.
*/
export interface GetProductForEditByID extends RequestMessage<GetProductForEditByIDResponse> {
  /**
  * Entity type: Product
  */
  ID: number;
  /**
  * Entity type: Revision
  */
  RevisionID: number;
}

export interface GetProductForEditByIDResponse extends ResponseMessage {
  /**
  * Entity type: Catalog
  */
  CatalogID?: number;
  DisplayValue?: string;
  /**
  * Entity type: Product
  */
  ID: number;
  LayersWithContent?: ServicesCommonLayerWithContentDto[];
  Types?: Record<string,ServicesProductPropertyTypeModel>;
}

/**
* Retrieves a `Product` with detailed information, based on all currently applied `Revision`'s and the `Layer` data compressed into a single truth, from the given `ID` parameter.
* 
* In the response, `Content` is a Json formatted object containing key-value pair data, where the keys are simple strings and the value can be a scalar value (like an int or string), an array of scalar
* values or an array of objects.
* 
* The `Types` property in the response data holds meta-data information about the property keys used in the `Content` object like property name, group and (of course) data type.
* 
* :point_right: Use the `GetProductForEditByID` service when you want to specify the `Revision` to apply and receive per-layer `Content`.
*/
export interface GetProductForQuickEditByID extends RequestMessage<GetProductForQuickEditByIDResponse> {
  /**
  * Entity type: Product
  */
  ID: number;
}

export interface GetProductForQuickEditByIDResponse extends ResponseMessage {
  /**
  * Entity type: Catalog
  */
  CatalogID?: number;
  Content?: Record<string, TAnyValue>;
  DisplayValue?: string;
  /**
  * Entity type: Product
  */
  ID: number;
  Types?: Record<string,ServicesProductPropertyTypeModel>;
}

/**
* Get ProductRelationType by ID
*/
export interface GetProductRelationTypeByID extends RequestMessage<GetProductRelationTypeByIDResponse> {
  /**
  * Entity type: ProductRelationType
  */
  ID: number;
}

export interface GetProductRelationTypeByIDResponse extends ResponseMessage {
  /**
  * Entity type: ProductRelationType
  */
  BackendID?: string;
  Direction: DataModelsProductRelationDirection;
  /**
  * Entity type: Product
  */
  DynamicRelationProductID?: number;
  /**
  * Entity type: ProductRelationType
  */
  ID: number;
  IsDynamic: boolean;
  PrimaryName?: string;
  ProductSearchFilters?: Record<string,SearchFilterModel>;
  /**
  * Entity type: ProductSearchTemplate
  */
  ProductSearchTemplateID?: number;
  Relations?: ServicesProductsGetProductRelationTypeByIDResponse_Relation[];
  SecondaryName?: string;
  StockRelationType: DataModelsStockRelationType;
  UseDynamicRelationProductAsRelatedProduct: boolean;
}

export interface ServicesProductsGetProductRelationTypeByIDResponse_Relation {
  /**
  * Entity type: ProductRelation
  */
  ID?: number;
  /**
  * Entity type: Product
  */
  PrimaryProductID?: number;
  /**
  * Entity type: Product
  */
  PrimaryProductIDs?: number[];
  /**
  * Entity type: Product
  */
  RelatedProductID?: number;
  /**
  * Entity type: Product
  */
  RelatedProductIDs?: number[];
  Sequence?: number;
}

export interface GetReferenceDataForProduct extends RequestMessage<GetReferenceDataForProductResponse> {
  /**
  * Entity type: Product
  */
  ProductID: number;
}

export interface GetReferenceDataForProductResponse extends ResponseMessage {
  Data?: Record<string,TAnyValue | null>;
}

/**
* This service lets you create and update a set of products and their content.
* 
* The set of products is typically hierarchical. For example, if a shirt comes in 3 colors and 5 sizes per color, you might define a root product, then 3 color products, and then the size SKUs beneath each color.
* The hierarchy is flexible: you can place color products at the root and only nest SKUs, or skip hierarchy entirely and just import SKUs. Still, providing root and color products is useful for search,
* merchandising, and frontend navigation.
* 
* An example request of a hierarchy:
* 
* ```
* {
*   "ID": "special_shirt",
*   "Name": "Special Shirt",
*   "TaxCode": "High",
*   "Variations": {
*     "Property": "color_code",
*     "LogicalLevel": "color",
*     "Products": [
*       {
*         "ID": "special_shirt_blue",
*         "Name": "Special Shirt - Blue",
*         "VariationValues": [
*           {
*             "LanguageID": null,
*             "Value": "BLUE"
*           }
*         ],
*         "Variations": {
*           "Property": "size_code",
*           "LogicalLevel": "size",
*           "Products": [
*             {
*               "ID": "sku_special_shirt_blue_xl",
*               "VariationValues": [
*                 {
*                   "LanguageID": null,
*                   "Value": "XL"
*                 }
*               ]
*             }
*           ]
*         }
*       }
*     ]
*   }
* }
* ```
*/
export interface ImportProducts extends RequestMessage<ImportProductsResponse> {
  /**
  * When true, and no media is supplied in the request, existing media on the product will be cleared.
  */
  AllowEmptyMedia?: boolean;
  /**
  * Optional definitions for custom properties referenced in product content. Use this to create or configure properties on-the-fly.
  */
  CustomPropertyTypes?: ServicesProductsImportProducts_ProductPropertyConfiguration[];
  /**
  * Deprecated. When not specified or explicitly false, images are downloaded during the request and may extend execution time. Defaults to true.
  */
  DownloadImagesInBackground?: boolean;
  /**
  * When not specified or explicitly false, media is downloaded during the request and may extend execution time. Defaults to true.
  */
  DownloadMediaInBackground?: boolean;
  /**
  * A string that identifies the storage category for product images. Optional; when omitted the SystemID is used instead.
  */
  ImageBlobCategory?: string;
  /**
  * The layer on which the content will be stored. Defaults to 'ImportProducts-Base'. If you want to store the content on a different layer, you can specify it here. If the content also
  * specifies a language/country this will be combined with the provided layer name to create a layer name like '<name> <language> <country>', so the provided LayerName is not necessarily the absolute
  * value that is used for the layer, only if you leave LanguageID/CountryID as null on the content.
  */
  LayerName?: string;
  /**
  * A string that identifies the storage category for product media. Optional; when omitted the SystemID is used instead.
  */
  MediaBlobCategory?: string;
  /**
  * The list of products to create or update. If a product does not exist it is created; if a product with the same ID and SystemID exists it is updated.
  */
  Products: ServicesProductsImportProducts_Product[];
  /**
  * The LogicalLevel that will be assigned to root products in the hierarchy. If not specified, a default value is used.
  * 
  * See ProductVariation.LogicalLevel for more information.
  */
  RootLogicalLevel?: string;
  /**
  * A string that identifies the upstream system calling this service. Together with a product's ID, this uniquely identifies the product in EVA.
  * The SystemID must remain consistent across calls; changing it will cause new products to be created instead of updated.
  */
  SystemID: string;
  /**
  * Controls how the import is executed (normal, content-only, or preview-only).
  */
  Type?: ServicesProductsImportProducts_ImportType;
  /**
  * By default the service only blocks long enough to store the requested modifications; additional processing continues asynchronously.
  * When set to true, the service blocks until the full product composition process is complete.
  */
  WaitForProductComposition?: boolean;
}

export interface ServicesProductsImportProducts_ImportProductMedia {
  /**
  * The unique identifier for the media item. Optional; when null an ID is generated from the MediaUrl hash.
  */
  ID?: string;
  /**
  * When true, marks this media item as the primary image for the product. If multiple items are marked, the last one wins. Ignored for non-image/video media types.
  */
  IsPrimaryImage?: boolean;
  /**
  * Storage location type override. Usually left empty to use defaults.
  */
  LocationType?: string;
  /**
  * Raw media bytes. Required only if MediaUrl is not provided.
  */
  MediaData?: string;
  /**
  * Where the media can be downloaded from. Required unless MediaData is provided.
  */
  MediaUrl?: string;
  /**
  * The media MIME type. Optional; when null it will be inferred from the MediaUrl.
  */
  MimeType?: string;
  /**
  * Human-readable display name for the media item. Optional; defaults to the media ID.
  */
  Name?: string;
  /**
  * Sequence number used for ordering media and determining the primary image.
  * Smaller numbers mean higher priority. If null, ordering follows the Media array.
  * Only relative order matters: sequences 1, 2, 4, 7 will be stored as 0, 1, 2, 3.
  */
  Sequence?: number;
}

export enum ServicesProductsImportProducts_ImportType {
  Normal = 0,
  ContentOnly = 1,
  PreviewOnly = 2,
}

export interface ServicesProductsImportProducts_Product extends ServicesProductsImportProducts_ProductBase {
  /**
  * The CommodityCode is used for customs declarations and product tariffs. Can be used to store the HS code of the product.
  */
  CommodityCode?: string;
  /**
  * Entity type: GiftCardConfiguration
  * In case a type GiftCard product is uploaded, its `GiftCardType` or `GiftCardConfigurationID` is mandatory to connect to its provider.
  */
  GiftCardConfigurationID?: number;
  /**
  * In case a type GiftCard product is uploaded, this defines the optional data for configuration.
  */
  GiftCardData?: TAnyValue;
  /**
  * In case a type GiftCard product is uploaded, this defines if the product is digital, so it will not require a serialnumber during checkout.
  */
  GiftCardIsDigital?: boolean;
  /**
  * In case a type GiftCard product is uploaded, its `GiftCardType` or `GiftCardConfigurationID` is mandatory to connect to its provider.
  */
  GiftCardType?: string;
  /**
  * Determines whether or not any images set on a parent product will inherit down to its children. This defaults to true.
  * Can be useful to give the root product of a hierarchy an ensemble of the available colors, without inheriting these images to the children.
  */
  ImagesWillBeInheritedByChildren?: boolean;
  /**
  * Controls hierarchy mutation behavior during import.
  * 
  * When true (default): Performs a full hierarchy sync. Products that are children of this product in the database but not included in this import request will be detached (their parent relationship is removed).
  * 
  * When false: Preserves existing parent-child relationships. Only explicitly included products have their hierarchy updated. Use this when doing partial updates to avoid accidentally breaking existing hierarchies.
  * 
  * Example: If you have a shirt with 3 color variations and you re-import just one color to update its price, set IsFullHierarchy=false to prevent the other 2 colors from being detached.
  */
  IsFullHierarchy?: boolean;
  /**
  * Determines whether or not any media set on a parent product will inherit down to its children. This defaults to true.
  * Can be useful to give the root product of a hierarchy an ensemble of the available colors, without inheriting the media items to the children.
  */
  MediaWillBeInheritedByChildren?: boolean;
  /**
  * Optional field to set up the product requirements on a product.
  */
  ProductRequirements?: ServicesProductsImportProducts_ProductRequirement[];
  /**
  * Optional field to indicate a serialnumber will be required when selling this product.
  * 
  * - Will set the serial number configuration of the product to the default configuration, but only if not already set
  * - Use `SerialNumberConfigurationID` for more control
  * - Omitting both this field and `SerialNumberConfigurationID` will remove any serial number configuration from the product
  */
  RequireSerialNumberForSale?: boolean;
  /**
  * Entity type: SerialNumberConfiguration
  * Optional field to indicate what kind of serial number requirements apply to this product.
  * 
  * - Will overwrite the serial number configuration of the product with this specified value, taking precedence over `RequireSerialNumberForSale`
  * - Omitting both this field AND `RequireSerialNumberForSale` will remove any serial number configuration from the product
  */
  SerialNumberConfigurationID?: number;
  StockProducts?: ServicesProductsImportProducts_ProductBase[];
  /**
  * The TaxCode determines how sales tax applies to this product. This must refer to an existing TaxCode in EVA, if it doesn't exist yet an error is returned.
  * 
  * Required unless Type = ContentOnly.
  * 
  * The string expected here is the Name property of the tax code, so 'High' for TaxCode High.
  * 
  * EVA defines the following default tax codes:
  * 
  * - High
  * - Intermediate
  * - Low
  * - Zero
  * - Exempt
  * 
  * In a hierarchy, the TaxCode only has to be specified for the root level; all products part of the hierarchy will always have the same TaxCode.
  */
  TaxCode?: string;
  /**
  * Defines the per-language value of the variation property for this product. For example, if the variation property is `color` then the value could be 'red' or 'blue'.
  * 
  * If the variation value isn't language sensitive then the LanguageID should be left null. If there isn't an item where LanguageID is null, all languages for which this product has content must have
  * a value for the variation property.
  */
  VariationValues?: ServicesProductsImportProducts_ProductVariationValue[];
  /**
  * Defines the variations hierarchy of the product.
  */
  Variations?: ServicesProductsImportProducts_ProductVariation;
}

export interface ServicesProductsImportProducts_ProductAssortment {
  /**
  * Optional date when the product is announced for this assortment.
  */
  AnnouncementDate?: string;
  /**
  * The backend code of the assortment this product should belong to.
  */
  AssortmentCode?: string;
  /**
  * Optional date when the product stops being active in this assortment.
  */
  EndDate?: string;
  /**
  * Optional date when the product becomes available for pre-sale.
  */
  PreSaleDate?: string;
  /**
  * Status flags to apply for this product within the assortment.
  */
  ProductStatus?: ServicesProductsImportProducts_ProductStatus;
  /**
  * Optional date when the product is expected to ship.
  */
  ShipmentDate?: string;
  /**
  * Optional date when the product becomes active in this assortment.
  */
  StartDate?: string;
}

export interface ServicesProductsImportProducts_ProductBase {
  /**
  * If specified this will add the product to those assortments.
  */
  Assortments?: ServicesProductsImportProducts_ProductAssortment[];
  /**
  * An (optional) list of barcodes for this product. A barcode should be globally unique and any duplicate barcodes will result in an error.
  */
  Barcodes?: string[];
  /**
  * The (optional) brand of the product. Only has to be specified on the root level of a hierarchy.
  */
  Brand?: string;
  /**
  * The per-language content of the product.
  * 
  * A small set of default properties has been defined, such as Name and MarketingDescription. Additional content can be defined inside `CustomContent`, which is a key-value container
  * where the key is the name of a property and value should be a single scalar value (string, number, boolean or null) or an array of values.
  * 
  * If LanguageID is left null, this will be the fallback content for languages that have no content of their own.
  * For example, you may offer a French website but you only have English product content, if you specify your English content with LanguageID = null
  * then products on the French website will have the English content.
  * 
  * In general, it's a good idea to choose a language that will serve as the default fallback language and to not specify LanguageID for that language's content so it will function as the fallback content.
  */
  Content?: ServicesProductsImportProducts_ProductContent[];
  /**
  * The country of origin for the product. Value must conform to the 2-letter country code as defined by ISO 3166-1.
  */
  CountryOfOriginID?: string;
  /**
  * The custom identifier for the product.
  */
  CustomID?: string;
  /**
  * The unique identifier for the product.
  */
  ID: string;
  /**
  * Set to `True` to delete the product.
  */
  IsDeleted?: boolean;
  /**
  * The (optional) ledger class ID of the product. Only has to be specified on the root level of a hierarchy.
  */
  LedgerClassID?: string;
  /**
  * Optional field that can be used to store the manufacturer's identifier for this product.
  */
  ManufacturerID?: string;
  /**
  * The culture independent name of the product by which it can be recognized even if it otherwise does not have any content. Required unless Type = ContentOnly.
  */
  Name?: string;
  /**
  * Defines the status of a product.
  */
  Status?: ServicesProductsImportProducts_ProductStatus;
  /**
  * Defines what kind of product it is. If the product is part of a hierarchy, this is only relevant for the SKU level, all other levels will have type Configurable.
  */
  Type?: ServicesProductsImportProducts_ProductType;
  /**
  * An (optional) list of barcodes with the associated quantity and unit of measure for this product. A barcode should be globally unique and any duplicate barcodes will result in an error.
  */
  UnitBarcodes?: ServicesProductsImportProducts_UnitBarcode[];
}

export interface ServicesProductsImportProducts_ProductContent {
  /**
  * Entity type: Country
  * Optional country for this content block. Leave null for country-agnostic content.
  */
  CountryID?: string;
  /**
  * Custom content values keyed by property ID, used for arbitrary content data.
  */
  CustomContent?: Record<string,TAnyValue | null>;
  /**
  * Deprecated list of product images. Use Media instead.
  */
  Images?: ServicesProductsImportProducts_ProductImage[];
  /**
  * Entity type: Language
  * Optional language for this content block. Leave null for language-agnostic content.
  */
  LanguageID?: string;
  /**
  * Long-form description, typically used on the product detail page.
  */
  LongDescription?: string;
  /**
  * Marketing-focused description used in merchandising contexts.
  */
  MarketingDescription?: string;
  /**
  * List of product media items (images, videos, etc.).
  */
  Media?: ServicesProductsImportProducts_ImportProductMedia[];
  /**
  * Display name of the product for this language/country.
  */
  Name?: string;
  /**
  * Publication statuses that determine visibility. A product is generally not visible to non-employee users unless it includes a 'public' status.
  */
  PublicationStatuses?: string[];
  /**
  * Short description, typically used in listings or quick views.
  */
  ShortDescription?: string;
  /**
  * Tags used for filtering or merchandising.
  */
  Tags?: string[];
  /**
  * Blob IDs for unique selling point assets (images, icons, etc.).
  */
  UniqueSellingPointBlobIDs?: string[];
  /**
  * Unique selling point text entries for this content block.
  */
  UniqueSellingPointTexts?: string[];
  /**
  * Optional X-dimension metadata for the product (e.g., width).
  */
  XDimension?: ServicesProductsImportProducts_ProductDimension;
  /**
  * Optional Y-dimension metadata for the product (e.g., height).
  */
  YDimension?: ServicesProductsImportProducts_ProductDimension;
}

export interface ServicesProductsImportProducts_ProductDimension {
  /**
  * The name of the dimension property (e.g., 'Width', 'Height').
  */
  PropertyName?: string;
  /**
  * The dimension value, expressed as a string to preserve formatting or units.
  */
  Value?: string;
}

export interface ServicesProductsImportProducts_ProductImage {
  /**
  * The unique identifier for the image. Optional; when null an ID is generated from the ImageUrl hash.
  */
  ID?: string;
  /**
  * Raw image bytes. Required only if ImageUrl is not provided.
  */
  ImageData?: string;
  /**
  * Where the image can be downloaded from. Required unless ImageData is provided.
  */
  ImageUrl?: string;
  /**
  * When true, marks this image as the primary image for the product. If multiple images are marked, the last one wins.
  */
  IsPrimaryImage?: boolean;
  /**
  * Storage location type override. Usually left empty to use defaults.
  */
  LocationType?: string;
  /**
  * The image MIME type. Optional; when null it will be inferred from the ImageUrl.
  */
  MimeType?: string;
  /**
  * Human-readable display name for the image. Optional; defaults to the image ID.
  */
  Name?: string;
  /**
  * Sequence number used for ordering images and determining the primary image.
  * Smaller numbers mean higher priority. If null, ordering follows the Images array.
  * Only relative order matters: sequences 1, 2, 4, 7 will be stored as 0, 1, 2, 3.
  */
  Sequence?: number;
}

export interface ServicesProductsImportProducts_ProductPropertyConfiguration {
  /**
  * The ID of the category the property belongs to. Defaults to `default`.
  */
  CategoryID?: string;
  /**
  * If provided, the values of this property will be copied to the provided property on the parent products.
  * This can be useful if you have a `clothing_color` property on the `color` logical level and would like to have an `available_colors` property on the root level that contains all the colors that are available for the product.
  * In that example the value of the CopyToParentProductPropertyTypeID on the `clothing_color` property would be `available_colors` and the value of the CopyToParentProductPropertyTypeID on the `available_colors` property would be null.
  * If there is no property yet with this name, it will be automatically created with the same data type as the source property.
  * 
  * If there already exists a property with this name, the data type must match the data type of the source property and the IsArray property must be true as the parent products will be given multiple values from their children.
  */
  CopyToParentProductPropertyTypeID?: string;
  /**
  * Defines the data type of the property value.
  */
  DataType?: ServicesProductsImportProducts_ProductPropertyDataTypes;
  /**
  * Defines whether and how the property is indexed for search. This is a flags enum, so you can combine IndexedNotAnalyzed and IndexedAnalyzed to index both exact and analyzed variants.
  */
  IndexType?: ServicesProductsImportProducts_ProductPropertyIndexTypes;
  /**
  * Determines whether the property accepts multiple values (array) or a single value.
  */
  IsArray?: boolean;
  /**
  * The ID of the custom property, typically in snake_case.
  */
  ProductPropertyTypeID?: string;
}

export enum ServicesProductsImportProducts_ProductPropertyDataTypes {
  String = 0,
  Int = 1,
  Double = 2,
  Bool = 3,
  Date = 4,
}

export enum ServicesProductsImportProducts_ProductPropertyIndexTypes {
  NotIndexed = 0,
  IndexedNotAnalyzed = 1,
  IndexedAnalyzed = 2,
}

export interface ServicesProductsImportProducts_ProductRequirement {
  /**
  * Optional backend identifier for external systems.
  */
  BackendID?: string;
  /**
  * The data type expected for this requirement.
  */
  DataType?: DataModelsProductRequirementDataTypes;
  /**
  * Optional enumeration values keyed by value with display text as the value.
  */
  EnumValues?: Record<string,string | null>;
  /**
  * Optional handler name that processes the requirement value.
  */
  Handler?: string;
  /**
  * When true, the requirement accepts multiple values.
  */
  IsArray?: boolean;
  /**
  * When true, the requirement must be provided to complete the order.
  */
  IsRequired?: boolean;
  /**
  * The display name of the requirement presented to the customer.
  */
  Name: string;
  /**
  * Optional order type this requirement applies to.
  */
  OrderType?: DataModelsOrderTypes;
}

export interface ServicesProductsImportProducts_ProductStatus {
  /**
  * Product is only available for carry-out.
  */
  CarryOutOnly?: boolean;
  /**
  * Product is only available for delivery, not store pickup.
  */
  DeliveryOnly?: boolean;
  /**
  * Product cannot be backordered when out of stock.
  */
  DisableBackorder?: boolean;
  /**
  * Product cannot be delivered.
  */
  DisableDelivery?: boolean;
  /**
  * Product cannot be picked up from a shop.
  */
  DisablePickup?: boolean;
  /**
  * Indicates the product is not sellable.
  */
  NonSellable?: boolean;
  /**
  * Product is unavailable until the pre-order date.
  */
  PreRelease?: boolean;
  /**
  * Indicates the product is end-of-life; remaining stock is final.
  */
  UseUp?: boolean;
}

export interface ServicesProductsImportProducts_ProductType {
  /**
  * Indicates whether custom pricing is allowed.
  */
  AllowCustomPricing?: boolean;
  /**
  * Indicates the product is a bundle.
  */
  BundleProduct?: boolean;
  /**
  * An event product intended for scheduling appointments.
  */
  Event?: boolean;
  /**
  * A gift card product.
  */
  GiftCard?: boolean;
  /**
  * A greeting card product.
  */
  GreetingCard?: boolean;
  /**
  * Indicates the product is an insurance product.
  */
  Insurance?: boolean;
  /**
  * A marketing-only product.
  */
  Marketing?: boolean;
  /**
  * A product that cannot be returned.
  */
  NotReturnable?: boolean;
  /**
  * A non-physical product that represents a service.
  */
  Service?: boolean;
  /**
  * A normal stock-keeping product. This is the default when no type is specified.
  */
  Stock?: boolean;
  /**
  * Indicates the product is a subscription.
  */
  SubscriptionProduct?: boolean;
  /**
  * Indicates the product is virtual and has no physical form.
  */
  VirtualProduct?: boolean;
}

export interface ServicesProductsImportProducts_ProductVariation {
  /**
  * The LogicalLevel of a product defines the 'level' on which the product can be thought to sit in the hierarchy.
  * 
  * For example, the various different colors of a shirt can be thought to have LogicalLevel = 'color' and the actual SKU might have LogicalLevel = 'size' or 'sku'.
  * 
  * You are free to use any value, but keep it consistent within a product family. This helps frontends group levels (e.g., filter on color and then show sizes on the detail page).
  */
  LogicalLevel: string;
  /**
  * The collection of products that represent the variations at the specified LogicalLevel.
  */
  Products: ServicesProductsImportProducts_Product[];
  /**
  * The property on which the product hierarchy varies, e.g. 'size' or 'color'.
  */
  Property?: string;
}

export interface ServicesProductsImportProducts_ProductVariationValue {
  /**
  * Entity type: Country
  * Optional. Leave null if the variation value is not country-specific.
  */
  CountryID?: string;
  /**
  * Entity type: Language
  * Optional. Leave null if the variation value is not language-specific.
  */
  LanguageID?: string;
  /**
  * The actual value for the variation (e.g., 'XL', 'BLUE').
  */
  Value?: string;
}

export interface ServicesProductsImportProducts_UnitBarcode {
  /**
  * The barcode value. Must be unique.
  */
  Barcode?: string;
  /**
  * The quantity of product (in the specified unit of measure) represented by this barcode.
  */
  Quantity?: number;
  /**
  * Entity type: UnitOfMeasure
  * The unit of measure ID for this barcode. If not specified, 'Each' is used. Must exist beforehand.
  */
  UnitOfMeasureID?: number;
  /**
  * The unit of measure name for this barcode. If not specified, 'Each' is used. Must exist beforehand.
  */
  UnitOfMeasureName?: string;
}

export interface ImportProductsResponse extends ResponseMessage {
  /**
  * Entity type: Product
  * The EVA IDs of products that were newly created by this call.
  */
  CreatedProductIDs?: number[];
  /**
  * If the request Type was PreviewOnly, this contains the generated product structure preview.
  */
  PreviewResult?: string;
  /**
  * Mapping entries from each input product ID to its internal EVA integer ID.
  */
  ProductMap?: ImportProductMapItem[];
  /**
  * Entity type: Product
  * The EVA IDs of products that were updated by this call.
  */
  UpdatedProductIDs?: number[];
}

export interface ImportProducts_Async extends ImportProducts {
}

export interface ImportProducts_AsyncResponse extends AsyncRequestHandlingAsyncRequestResponse {
}

export interface ImportProducts_AsyncResult extends AsyncRequestHandlingAsyncRequestResultRequest {
}

export interface ListProductCapacityPlans extends FilteredPagedResultRequest<ProductsProductCapacityPlanFilter, ListProductCapacityPlansResponse> {
}

export interface ListProductCapacityPlansResponse extends PagedResultResponse<ServicesProductsListProductCapacityPlansResponse_Data> {
}

export interface ServicesProductsListProductCapacityPlansResponse_Data {
  AvailabilityCalculationCutOffInDays?: number;
  Capacity: number;
  Description?: string;
  /**
  * Entity type: ProductCapacityPlan
  */
  ID: number;
  IsDynamic: boolean;
  Name?: string;
  ProductCapacityTimeFrame: DataModelsProductCapacityTimeFrame;
  /**
  * Entity type: OrganizationUnit
  */
  SupplierOrganizationUnitID: number;
  SupplierOrganizationUnitName?: string;
}

/**
* List the ProductRelationTypes.
*/
export interface ListProductRelationTypes extends FilteredPagedResultRequest<ProductsProductRelationTypesFilter, ListProductRelationTypesResponse> {
}

export interface ListProductRelationTypesResponse extends PagedResultResponse<ServicesProductsListProductRelationTypesResponse_Data> {
}

export interface ServicesProductsListProductRelationTypesResponse_Data {
  BackendID?: string;
  Direction: DataModelsProductRelationDirection;
  /**
  * Entity type: Product
  */
  DynamicRelationProductID?: number;
  /**
  * Entity type: ProductRelationType
  */
  ID: number;
  IsDynamic: boolean;
  PrimaryName?: string;
  SecondaryName?: string;
  StockRelationType: DataModelsStockRelationType;
  UseDynamicRelationProductAsRelatedProduct: boolean;
}

/**
* List all product relations for the given Product and (optional) ProductRelationType
*/
export interface ListProductRelations extends RequestMessage<ListProductRelationsResponse> {
  /**
  * Entity type: Product
  */
  ProductID: number;
  /**
  * Entity type: ProductRelationType
  */
  ProductRelationTypeID?: number;
}

export interface ListProductRelationsResponse extends ResponseMessage {
  RelationTypeCollections?: ServicesProductsListProductRelationsResponse_RelationTypeCollection[];
}

export interface ServicesProductsListProductRelationsResponse_Relation {
  /**
  * Entity type: ProductRelation
  */
  ID?: number;
  /**
  * Entity type: Product
  */
  PrimaryProductID?: number;
  /**
  * Entity type: Product
  */
  PrimaryProductIDs?: number[];
  /**
  * Entity type: Product
  */
  RelatedProductID?: number;
  /**
  * Entity type: Product
  */
  RelatedProductIDs?: number[];
  Sequence?: number;
}

export interface ServicesProductsListProductRelationsResponse_RelationTypeCollection {
  /**
  * Entity type: ProductRelationType
  */
  BackendID?: string;
  Direction: DataModelsProductRelationDirection;
  /**
  * Entity type: Product
  */
  DynamicRelationProductID?: number;
  /**
  * Entity type: ProductRelationType
  */
  ID: number;
  IsDynamic: boolean;
  PrimaryName?: string;
  Relations?: ServicesProductsListProductRelationsResponse_Relation[];
  SecondaryName?: string;
  StockRelationType: DataModelsStockRelationType;
  UseDynamicRelationProductAsRelatedProduct: boolean;
}

export interface ServicesProductsProductEdit {
  Content?: Record<string, TAnyValue>;
  CountryID?: string;
  LanguageID?: string;
  /**
  * Entity type: ContentLayer
  */
  LayerID?: number;
}

/**
* Remove the given ProductRelations by the ProductRelationID
*/
export interface RemoveProductRelationsByID extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: ProductRelation
  */
  IDs: number[];
}

/**
* Remove the given ProductRelations by the ProductRelationID
*/
export interface RemoveProductRelationsByProductID extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: Product
  */
  IDs: number[];
  /**
  * Entity type: ProductRelationType
  */
  ProductRelationTypeID?: number;
}

/**
* Remove a product to product capacity plan. This is only allowed on static product capacity plans.
*/
export interface RemoveProductsFromProductCapacityPlan extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: ProductCapacityPlan
  */
  ID: number;
  /**
  * Entity type: Product
  */
  ProductIDs: number[];
}

/**
* Set a product capacity plan exception. The capacity is prioritized as follows;
* - Exception based on date (time is stripped from the given datetime).
* - Exception based on day of week.
* - Default product capacity plan capacity
*/
export interface SetProductCapacityPlanException extends RequestMessageWithEmptyResponse {
  Capacity?: number;
  Date?: string;
  DayOfWeek?: DayOfWeek;
  /**
  * Entity type: ProductCapacityPlan
  */
  ID: number;
}

/**
* Update a product capacity plan.
* When the product capacity plan is changed from static to dynamic, and this is as requested, the service requires the `AllowStaticToDynamicTypeChange` to be set to true.
* If `AllowStaticToDynamicTypeChange` is false, the service will return an error when the product capacity plan switches from static to dynamic.
*/
export interface UpdateProductCapacityPlan extends RequestMessageWithEmptyResponse {
  AllowStaticToDynamicTypeChange?: boolean;
  AvailabilityCalculationCutOffInDays?: number;
  Capacity?: number;
  Description?: string;
  /**
  * Entity type: ProductCapacityPlan
  */
  ID: number;
  Name: string;
  ProductCapacityTimeFrame?: DataModelsProductCapacityTimeFrame;
  ProductSearchFilters?: Record<string,SearchFilterModel>;
  /**
  * Entity type: ProductSearchTemplate
  */
  ProductSearchTemplateID?: number;
  /**
  * Entity type: OrganizationUnit
  */
  SupplierOrganizationUnitID: number;
}

/**
* Update the the ProductRelationType.
*/
export interface UpdateProductRelationType extends RequestMessageWithEmptyResponse {
  AllowTypeChange?: boolean;
  /**
  * Entity type: ProductRelationType
  */
  BackendID?: string;
  /**
  * Entity type: Product
  */
  DynamicRelationProductID?: number;
  /**
  * Entity type: ProductRelationType
  */
  ID: number;
  /**
  * This is the primary name the relation. For example; if primary name is 'Blocks', the secondary name could be something in the lines of 'Blocked by'.
  */
  PrimaryName: string;
  ProductSearchFilters?: Record<string,SearchFilterModel>;
  /**
  * Entity type: ProductSearchTemplate
  */
  ProductSearchTemplateID?: number;
  /**
  * This is the secondary name the relation. For example; if primary name is 'Blocks', the secondary name could be something in the lines of 'Blocked by'.
  */
  SecondaryName?: string;
  UseDynamicRelationProductAsRelatedProduct?: boolean;
}

/**
* Update a relation of the given ProductRelationType for the given ProductRelations
*/
export interface UpdateProductRelations extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: ProductRelationType
  */
  ID: number;
  Relations?: ServicesProductsUpdateProductRelations_ProductRelation[];
}

export interface ServicesProductsUpdateProductRelations_ProductRelation {
  /**
  * Entity type: Product
  */
  PrimaryProductID: number;
  /**
  * Entity type: Product
  */
  RelatedProductID?: number;
  Sequence?: number;
}

export interface UploadProductBarcodeExcel extends RequestMessage<UploadProductBarcodeExcelResponse> {
  Data: string;
}

export interface UploadProductBarcodeExcelResponse extends ResponseMessage {
}

export interface UploadProductBarcodeExcel_Async extends UploadProductBarcodeExcel {
}

export interface UploadProductBarcodeExcel_AsyncResponse extends AsyncRequestHandlingAsyncRequestResponse {
}

export interface UploadProductBarcodeExcel_AsyncResult extends AsyncRequestHandlingAsyncRequestResultRequest {
}

export interface UploadProductContentExcel extends RequestMessage<UploadProductContentExcelResponse> {
  /**
  * If this is set to true and no media is imported, existing media will be removed (unset).
  */
  AllowEmptyMedia?: boolean;
  Data: string;
  LanguageID?: string;
}

export interface UploadProductContentExcelResponse extends ResponseMessage {
}

export interface UploadProductContentExcel_Async extends UploadProductContentExcel {
}

export interface UploadProductContentExcel_AsyncResponse extends AsyncRequestHandlingAsyncRequestResponse {
}

export interface UploadProductContentExcel_AsyncResult extends AsyncRequestHandlingAsyncRequestResultRequest {
}

export interface UploadProductExcel extends RequestMessage<UploadProductExcelResponse> {
  Data: string;
}

export interface UploadProductExcelResponse extends ResponseMessage {
}

export interface UploadProductExcel_Async extends UploadProductExcel {
}

export interface UploadProductExcel_AsyncResponse extends AsyncRequestHandlingAsyncRequestResponse {
}

export interface UploadProductExcel_AsyncResult extends AsyncRequestHandlingAsyncRequestResultRequest {
}

export interface CreateNewSearchDataIndex extends RequestMessageWithEmptyResponse {
  DeleteOldIndex?: boolean;
}

/**
* Recreate aliases on all productsearch indices. Use to recover from a state where the aliases exist, but without filters.
*/
export interface RecreateAliases extends RequestMessageWithEmptyResponse {
}

export interface RequestReindexSearchData extends RequestMessage<RequestReindexSearchDataResponse> {
  ApplyProductSearchConfiguration?: boolean;
  CountryID?: string;
  LanguageID?: string;
  Script?: string;
}

export interface RequestReindexSearchDataResponse extends ResponseMessage {
}

export interface ApplyRevision extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: Revision
  */
  RevisionID: number;
}

export interface CreateRevision extends RequestMessage<CreateRevisionResponse> {
  Name?: string;
}

export interface CreateRevisionResponse extends ResponseMessage {
  Result?: ServicesRevisionsCreatedRevision;
}

export interface ServicesRevisionsCreatedRevision {
  /**
  * Entity type: Revision
  */
  ID: number;
  Name?: string;
}

/**
* Delete a revision
* 
* All Edits in this revision will be deleted
*/
export interface DeleteRevision extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: Revision
  */
  ID: number;
}

export interface GetRevisionStatus extends RequestMessage<GetRevisionStatusResponse> {
  /**
  * Entity type: Revision
  */
  RevisionID: number;
}

export interface GetRevisionStatusResponse extends ResponseMessage {
  Status?: ServicesRevisionsRevisionProgress;
}

export interface ServicesRevisionsListRevisionUser {
  FullName: string;
}

export interface ListRevisions extends FilteredPagedResultRequest<RepositoriesListRevisionsFilter, ListRevisionsResponse> {
}

export interface ListRevisionsResponse extends PagedResultResponse<ServicesRevisionsRevisionDto> {
}

export enum ServicesRevisionsProductCompositionProgressState {
  None = 0,
  Composing = 1,
  PostProcessing = 2,
  Publishing = 3,
  Complete = 4,
}

export interface ServicesRevisionsRevisionDto {
  /**
  * Entity type: Application
  */
  ApplicationID?: number;
  AppliedOn?: string;
  CreatedBy?: ServicesRevisionsListRevisionUser;
  CreationTime: string;
  /**
  * Entity type: Revision
  */
  ID: number;
  Name: string;
  Status: DataModelsRevisionStatus;
}

export interface ServicesRevisionsRevisionProgress {
  HandledItems: number;
  Progress: number;
  State: ServicesRevisionsProductCompositionProgressState;
  TotalItems: number;
  ValidationErrors: number;
}

/**
* Creates a search strategy for the provided LanguageID and CountryID (both are optional).
* 
* All parts of the `Strategy` field are optional.
*/
export interface CreateProductSearchStrategy extends RequestMessage<CreateProductSearchStrategyResponse> {
  Code?: string;
  /**
  * Entity type: Country
  */
  CountryID?: string;
  /**
  * Entity type: Language
  */
  LanguageID?: string;
  Name: string;
  Strategy: DataModelsProductSearchStrategyModel;
  Type?: DataModelsProductSearchStrategyTypes;
}

export interface CreateProductSearchStrategyResponse extends ResponseMessage {
  /**
  * Entity type: ProductSearchStrategy
  */
  ID: number;
}

/**
* Deletes a search strategy by the provided ID.
*/
export interface DeleteProductSearchStrategy extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: ProductSearchStrategy
  */
  ID: number;
}

/**
* Gets the default product search strategy, which can then be used as the basis to create a new strategy.
*/
export interface GetDefaultProductSearchStrategy extends RequestMessage<GetDefaultProductSearchStrategyResponse> {
}

export interface GetDefaultProductSearchStrategyResponse extends ResponseMessage {
  Strategy?: DataModelsProductSearchStrategyModel;
}

/**
* Retrieves a paged list of search strategies, optionally filtered by a CountryID or LanguageID.
*/
export interface ListProductSearchStrategies extends RequestMessage<ListProductSearchStrategiesResponse> {
  PageConfig?: PageConfig<RepositoriesListProductSearchStrategiesFilter>;
}

export interface ListProductSearchStrategiesResponse extends PagedResultResponse<RepositoriesListProductSearchStrategyItem> {
}

/**
* Updates a search strategy, replacing the current strategy with the one provided and setting the LanguageID/CountryID
* to the provided ones (both are optional).
* 
* All parts of the `Strategy` field are optional.
*/
export interface UpdateProductSearchStrategy extends RequestMessageWithEmptyResponse {
  Code?: string;
  /**
  * Entity type: Country
  */
  CountryID?: string;
  /**
  * Entity type: ProductSearchStrategy
  */
  ID: number;
  /**
  * Entity type: Language
  */
  LanguageID?: string;
  Name?: string;
  Strategy: DataModelsProductSearchStrategyModel;
}

/**
* Gets all currently created search synonyms for the provided LanguageID (required) and CountryID (optional).
*/
export interface GetProductSearchSynonyms extends RequestMessage<GetProductSearchSynonymsResponse> {
  /**
  * Entity type: Language
  */
  LanguageID: string;
}

export interface GetProductSearchSynonymsResponse extends ResponseMessage {
  Result?: ServicesSynonymsGetProductSearchSynonymsResponse_ProductSearchSynonym[];
}

export interface ServicesSynonymsGetProductSearchSynonymsResponse_ProductSearchSynonym {
  ID: number;
  LanguageID?: string;
  Rule?: string;
}

/**
* Replaces all search synonyms for a given LanguageID/CountryID with the provided ones.
* Any synonyms not present in the request but that currently exist will be deleted.
* 
* ## Rules
* The `Rule` must be formatted according to [what Elasticsearch accepts](https://www.elastic.co/guide/en/elasticsearch/reference/current/analysis-synonym-tokenfilter.html#_solr_synonyms):
* 
* - Comma-separated values: `jump, leap, hop` causes any of the matched terms to be replaced by all of the terms.
* - Arrow notation: `britain=>england` causes the left side to be replaced by the right side.
* 
* To create a synonym, a `LanguageID` is required.
*/
export interface ReplaceProductSearchSynonyms extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: Language
  */
  LanguageID: string;
  Rules: string[];
}

/**
* Update the core properties of a Product
*/
export interface UpdateProduct extends RequestMessageWithEmptyResponse {
  BackendID?: string | null;
  CommodityCode?: string | null;
  CountryOfOriginID?: string | null;
  CustomID?: string | null;
  /**
  * Entity type: Product
  */
  ID: number;
  LedgerClassID?: string | null;
  ManufacturerID?: string | null;
  PrimitiveName?: string | null;
  /**
  * Entity type: TaxCode
  */
  TaxCodeID?: number;
  Type?: DataModelsProductTypes;
  TypeID?: number;
}

