import {
  IEvaServiceDefinition,
  EmptyResponseMessage,
  ResourceResponseMessage,
} from '../eva-services-core';

import {
  AddProductRelations,
  AddProductsToProductCapacityPlan,
  AddReferenceDataToProduct,
  ApplyRevision,
  CancelComposeProducts,
  ComposeProducts,
  ComposeResponse,
  CreateAssortmentContentCulture,
  CreateBrand,
  CreateContentCultureMapping,
  CreateLayer,
  CreateLayerResponse,
  CreateNewSearchDataIndex,
  CreateOrReplaceProductSearchConfiguration,
  CreateProduct,
  CreateProductResponse,
  CreateProductCapacityPlan,
  CreateProductCapacityPlanResponse,
  CreateProductPropertyCategory,
  CreateProductPropertyCategoryResponse,
  CreateProductPropertyType,
  CreateProductPropertyTypeEnumValue,
  CreateProductPropertyTypeEnumValueResponse,
  CreateProductRelationType,
  CreateProductRelationTypeResponse,
  CreateProductSearchStrategy,
  CreateProductSearchStrategyResponse,
  CreateRevision,
  CreateRevisionResponse,
  CreateSecondChanceProduct,
  CreateSecondChanceProductResponse,
  DeleteAssortmentContentCulture,
  DeleteContentCultureMapping,
  DeleteProductCapacityPlan,
  DeleteProductCapacityPlanException,
  DeleteProductPropertyType,
  DeleteProductPropertyTypeEnumValue,
  DeleteProductRelationType,
  DeleteProductSearchStrategy,
  DeleteRevision,
  EditProduct,
  EditProductPropertyCategory,
  EditProductPropertyCategoryResponse,
  EditProductPropertyType,
  EditProductPropertyTypeResponse,
  ExportProductBaseExcel,
  ExportProductBaseExcel_Async,
  ExportProductBaseExcel_AsyncResponse,
  ExportProductBaseExcel_AsyncResult,
  ExportProductContentExcel,
  ExportProductContentExcel_Async,
  ExportProductContentExcel_AsyncResponse,
  ExportProductContentExcel_AsyncResult,
  GenerateProductBarcodeExcelSample,
  GenerateProductContentExcelSample,
  GenerateProductExcelSample,
  GetAssortmentContentCultures,
  GetAssortmentContentCulturesResponse,
  GetAvailableEnumValuesForProductPropertyType,
  GetAvailableEnumValuesForProductPropertyTypeResponse,
  GetBrand,
  GetBrandResponse,
  GetDefaultProductSearchStrategy,
  GetDefaultProductSearchStrategyResponse,
  GetLayerByID,
  GetLayerByIDResponse,
  GetProductByID,
  GetProductByIDResponse,
  GetProductCapacityPlanByID,
  GetProductCapacityPlanByIDResponse,
  GetProductCapacityPlansByProductID,
  GetProductCapacityPlansByProductIDResponse,
  GetProductCompositionState,
  GetProductCompositionStateResponse,
  GetProductForEditByID,
  GetProductForEditByIDResponse,
  GetProductForQuickEditByID,
  GetProductForQuickEditByIDResponse,
  GetProductPropertyCategoryByID,
  GetProductPropertyCategoryByIDResponse,
  GetProductPropertyTypeByID,
  GetProductPropertyTypeByIDResponse,
  GetProductPropertyTypeEnumValueByID,
  GetProductPropertyTypeEnumValueByIDResponse,
  GetProductRelationTypeByID,
  GetProductRelationTypeByIDResponse,
  GetProductSearchConfiguration,
  GetProductSearchConfigurationResponse,
  GetProductSearchSynonyms,
  GetProductSearchSynonymsResponse,
  GetReferenceDataForProduct,
  GetReferenceDataForProductResponse,
  GetRevisionStatus,
  GetRevisionStatusResponse,
  ImportProducts,
  ImportProductsResponse,
  ImportProducts_Async,
  ImportProducts_AsyncResponse,
  ImportProducts_AsyncResult,
  ListApplicationCultures,
  ListApplicationCulturesResponse,
  ListContentCultureMapping,
  ListContentCultureMappingResponse,
  ListLayers,
  ListLayersResponse,
  ListProductCapacityPlans,
  ListProductCapacityPlansResponse,
  ListProductContentEdits,
  ListProductContentEditsResponse,
  ListProductPropertyCategories,
  ListProductPropertyCategoriesResponse,
  ListProductPropertyTypeEnumValues,
  ListProductPropertyTypeEnumValuesResponse,
  ListProductPropertyTypes,
  ListProductPropertyTypesResponse,
  ListProductRelations,
  ListProductRelationsResponse,
  ListProductRelationTypes,
  ListProductRelationTypesResponse,
  ListProductSearchStrategies,
  ListProductSearchStrategiesResponse,
  ListRevisions,
  ListRevisionsResponse,
  RecreateAliases,
  RemoveProductRelationsByID,
  RemoveProductRelationsByProductID,
  RemoveProductsFromProductCapacityPlan,
  ReplaceProductSearchSynonyms,
  RequestReindexSearchData,
  RequestReindexSearchDataResponse,
  SearchProductPropertyTypes,
  SearchProductPropertyTypesResponse,
  SetProductCapacityPlanException,
  UpdateBrand,
  UpdateLayer,
  UpdateProduct,
  UpdateProductCapacityPlan,
  UpdateProductPropertyTypeEnumValue,
  UpdateProductRelations,
  UpdateProductRelationType,
  UpdateProductSearchStrategy,
  UploadProductBarcodeExcel,
  UploadProductBarcodeExcelResponse,
  UploadProductBarcodeExcel_Async,
  UploadProductBarcodeExcel_AsyncResponse,
  UploadProductBarcodeExcel_AsyncResult,
  UploadProductContentExcel,
  UploadProductContentExcelResponse,
  UploadProductContentExcel_Async,
  UploadProductContentExcel_AsyncResponse,
  UploadProductContentExcel_AsyncResult,
  UploadProductExcel,
  UploadProductExcelResponse,
  UploadProductExcel_Async,
  UploadProductExcel_AsyncResponse,
  UploadProductExcel_AsyncResult,
} from './eva-services-pim';


export class SvcAddProductRelations implements IEvaServiceDefinition
{
  name = 'AddProductRelations';
  path = '/message/AddProductRelations';
  request?: AddProductRelations;
  response?: EmptyResponseMessage;
}

export class SvcAddProductsToProductCapacityPlan implements IEvaServiceDefinition
{
  name = 'AddProductsToProductCapacityPlan';
  path = '/message/AddProductsToProductCapacityPlan';
  request?: AddProductsToProductCapacityPlan;
  response?: EmptyResponseMessage;
}

export class SvcAddReferenceDataToProduct implements IEvaServiceDefinition
{
  name = 'AddReferenceDataToProduct';
  path = '/message/AddReferenceDataToProduct';
  request?: AddReferenceDataToProduct;
  response?: EmptyResponseMessage;
}

export class SvcApplyRevision implements IEvaServiceDefinition
{
  name = 'ApplyRevision';
  path = '/message/ApplyRevision';
  request?: ApplyRevision;
  response?: EmptyResponseMessage;
}

export class SvcCancelComposeProducts implements IEvaServiceDefinition
{
  name = 'CancelComposeProducts';
  path = '/message/CancelComposeProducts';
  request?: CancelComposeProducts;
  response?: EmptyResponseMessage;
}

export class SvcComposeProducts implements IEvaServiceDefinition
{
  name = 'ComposeProducts';
  path = '/message/ComposeProducts';
  request?: ComposeProducts;
  response?: ComposeResponse;
}

export class SvcCreateAssortmentContentCulture implements IEvaServiceDefinition
{
  name = 'CreateAssortmentContentCulture';
  path = '/message/CreateAssortmentContentCulture';
  request?: CreateAssortmentContentCulture;
  response?: EmptyResponseMessage;
}

export class SvcCreateBrand implements IEvaServiceDefinition
{
  name = 'CreateBrand';
  path = '/message/CreateBrand';
  request?: CreateBrand;
  response?: EmptyResponseMessage;
}

export class SvcCreateContentCultureMapping implements IEvaServiceDefinition
{
  name = 'CreateContentCultureMapping';
  path = '/message/CreateContentCultureMapping';
  request?: CreateContentCultureMapping;
  response?: EmptyResponseMessage;
}

export class SvcCreateLayer implements IEvaServiceDefinition
{
  name = 'CreateLayer';
  path = '/message/CreateLayer';
  request?: CreateLayer;
  response?: CreateLayerResponse;
}

export class SvcCreateNewSearchDataIndex implements IEvaServiceDefinition
{
  name = 'CreateNewSearchDataIndex';
  path = '/message/CreateNewSearchDataIndex';
  request?: CreateNewSearchDataIndex;
  response?: EmptyResponseMessage;
}

export class SvcCreateOrReplaceProductSearchConfiguration implements IEvaServiceDefinition
{
  name = 'CreateOrReplaceProductSearchConfiguration';
  path = '/message/CreateOrReplaceProductSearchConfiguration';
  request?: CreateOrReplaceProductSearchConfiguration;
  response?: EmptyResponseMessage;
}

export class SvcCreateProduct implements IEvaServiceDefinition
{
  name = 'CreateProduct';
  path = '/message/CreateProduct';
  request?: CreateProduct;
  response?: CreateProductResponse;
}

export class SvcCreateProductCapacityPlan implements IEvaServiceDefinition
{
  name = 'CreateProductCapacityPlan';
  path = '/message/CreateProductCapacityPlan';
  request?: CreateProductCapacityPlan;
  response?: CreateProductCapacityPlanResponse;
}

export class SvcCreateProductPropertyCategory implements IEvaServiceDefinition
{
  name = 'CreateProductPropertyCategory';
  path = '/message/CreateProductPropertyCategory';
  request?: CreateProductPropertyCategory;
  response?: CreateProductPropertyCategoryResponse;
}

export class SvcCreateProductPropertyType implements IEvaServiceDefinition
{
  name = 'CreateProductPropertyType';
  path = '/message/CreateProductPropertyType';
  request?: CreateProductPropertyType;
  response?: EmptyResponseMessage;
}

export class SvcCreateProductPropertyTypeEnumValue implements IEvaServiceDefinition
{
  name = 'CreateProductPropertyTypeEnumValue';
  path = '/message/CreateProductPropertyTypeEnumValue';
  request?: CreateProductPropertyTypeEnumValue;
  response?: CreateProductPropertyTypeEnumValueResponse;
}

export class SvcCreateProductRelationType implements IEvaServiceDefinition
{
  name = 'CreateProductRelationType';
  path = '/message/CreateProductRelationType';
  request?: CreateProductRelationType;
  response?: CreateProductRelationTypeResponse;
}

export class SvcCreateProductSearchStrategy implements IEvaServiceDefinition
{
  name = 'CreateProductSearchStrategy';
  path = '/message/CreateProductSearchStrategy';
  request?: CreateProductSearchStrategy;
  response?: CreateProductSearchStrategyResponse;
}

export class SvcCreateRevision implements IEvaServiceDefinition
{
  name = 'CreateRevision';
  path = '/message/CreateRevision';
  request?: CreateRevision;
  response?: CreateRevisionResponse;
}

export class SvcCreateSecondChanceProduct implements IEvaServiceDefinition
{
  name = 'CreateSecondChanceProduct';
  path = '/message/CreateSecondChanceProduct';
  request?: CreateSecondChanceProduct;
  response?: CreateSecondChanceProductResponse;
}

export class SvcDeleteAssortmentContentCulture implements IEvaServiceDefinition
{
  name = 'DeleteAssortmentContentCulture';
  path = '/message/DeleteAssortmentContentCulture';
  request?: DeleteAssortmentContentCulture;
  response?: EmptyResponseMessage;
}

export class SvcDeleteContentCultureMapping implements IEvaServiceDefinition
{
  name = 'DeleteContentCultureMapping';
  path = '/message/DeleteContentCultureMapping';
  request?: DeleteContentCultureMapping;
  response?: EmptyResponseMessage;
}

export class SvcDeleteProductCapacityPlan implements IEvaServiceDefinition
{
  name = 'DeleteProductCapacityPlan';
  path = '/message/DeleteProductCapacityPlan';
  request?: DeleteProductCapacityPlan;
  response?: EmptyResponseMessage;
}

export class SvcDeleteProductCapacityPlanException implements IEvaServiceDefinition
{
  name = 'DeleteProductCapacityPlanException';
  path = '/message/DeleteProductCapacityPlanException';
  request?: DeleteProductCapacityPlanException;
  response?: EmptyResponseMessage;
}

export class SvcDeleteProductPropertyType implements IEvaServiceDefinition
{
  name = 'DeleteProductPropertyType';
  path = '/message/DeleteProductPropertyType';
  request?: DeleteProductPropertyType;
  response?: EmptyResponseMessage;
}

export class SvcDeleteProductPropertyTypeEnumValue implements IEvaServiceDefinition
{
  name = 'DeleteProductPropertyTypeEnumValue';
  path = '/message/DeleteProductPropertyTypeEnumValue';
  request?: DeleteProductPropertyTypeEnumValue;
  response?: EmptyResponseMessage;
}

export class SvcDeleteProductRelationType implements IEvaServiceDefinition
{
  name = 'DeleteProductRelationType';
  path = '/message/DeleteProductRelationType';
  request?: DeleteProductRelationType;
  response?: EmptyResponseMessage;
}

export class SvcDeleteProductSearchStrategy implements IEvaServiceDefinition
{
  name = 'DeleteProductSearchStrategy';
  path = '/message/DeleteProductSearchStrategy';
  request?: DeleteProductSearchStrategy;
  response?: EmptyResponseMessage;
}

export class SvcDeleteRevision implements IEvaServiceDefinition
{
  name = 'DeleteRevision';
  path = '/message/DeleteRevision';
  request?: DeleteRevision;
  response?: EmptyResponseMessage;
}

export class SvcEditProduct implements IEvaServiceDefinition
{
  name = 'EditProduct';
  path = '/message/EditProduct';
  request?: EditProduct;
  response?: EmptyResponseMessage;
}

export class SvcEditProductPropertyCategory implements IEvaServiceDefinition
{
  name = 'EditProductPropertyCategory';
  path = '/message/EditProductPropertyCategory';
  request?: EditProductPropertyCategory;
  response?: EditProductPropertyCategoryResponse;
}

export class SvcEditProductPropertyType implements IEvaServiceDefinition
{
  name = 'EditProductPropertyType';
  path = '/message/EditProductPropertyType';
  request?: EditProductPropertyType;
  response?: EditProductPropertyTypeResponse;
}

export class SvcExportProductBaseExcel implements IEvaServiceDefinition
{
  name = 'ExportProductBaseExcel';
  path = '/message/ExportProductBaseExcel';
  request?: ExportProductBaseExcel;
  response?: ResourceResponseMessage;
}

export class SvcExportProductBaseExcel_Async implements IEvaServiceDefinition
{
  name = 'ExportProductBaseExcel_Async';
  path = '/async-message/ExportProductBaseExcel';
  request?: ExportProductBaseExcel_Async;
  response?: ExportProductBaseExcel_AsyncResponse;
}

export class SvcExportProductBaseExcel_AsyncResult implements IEvaServiceDefinition
{
  name = 'ExportProductBaseExcel_AsyncResult';
  path = '/async-result/ExportProductBaseExcel';
  request?: ExportProductBaseExcel_AsyncResult;
  response?: ResourceResponseMessage;
}

export class SvcExportProductContentExcel implements IEvaServiceDefinition
{
  name = 'ExportProductContentExcel';
  path = '/message/ExportProductContentExcel';
  request?: ExportProductContentExcel;
  response?: ResourceResponseMessage;
}

export class SvcExportProductContentExcel_Async implements IEvaServiceDefinition
{
  name = 'ExportProductContentExcel_Async';
  path = '/async-message/ExportProductContentExcel';
  request?: ExportProductContentExcel_Async;
  response?: ExportProductContentExcel_AsyncResponse;
}

export class SvcExportProductContentExcel_AsyncResult implements IEvaServiceDefinition
{
  name = 'ExportProductContentExcel_AsyncResult';
  path = '/async-result/ExportProductContentExcel';
  request?: ExportProductContentExcel_AsyncResult;
  response?: ResourceResponseMessage;
}

export class SvcGenerateProductBarcodeExcelSample implements IEvaServiceDefinition
{
  name = 'GenerateProductBarcodeExcelSample';
  path = '/message/GenerateProductBarcodeExcelSample';
  request?: GenerateProductBarcodeExcelSample;
  response?: ResourceResponseMessage;
}

export class SvcGenerateProductContentExcelSample implements IEvaServiceDefinition
{
  name = 'GenerateProductContentExcelSample';
  path = '/message/GenerateProductContentExcelSample';
  request?: GenerateProductContentExcelSample;
  response?: ResourceResponseMessage;
}

export class SvcGenerateProductExcelSample implements IEvaServiceDefinition
{
  name = 'GenerateProductExcelSample';
  path = '/message/GenerateProductExcelSample';
  request?: GenerateProductExcelSample;
  response?: ResourceResponseMessage;
}

export class SvcGetAssortmentContentCultures implements IEvaServiceDefinition
{
  name = 'GetAssortmentContentCultures';
  path = '/message/GetAssortmentContentCultures';
  request?: GetAssortmentContentCultures;
  response?: GetAssortmentContentCulturesResponse;
}

export class SvcGetAvailableEnumValuesForProductPropertyType implements IEvaServiceDefinition
{
  name = 'GetAvailableEnumValuesForProductPropertyType';
  path = '/message/GetAvailableEnumValuesForProductPropertyType';
  request?: GetAvailableEnumValuesForProductPropertyType;
  response?: GetAvailableEnumValuesForProductPropertyTypeResponse;
}

export class SvcGetBrand implements IEvaServiceDefinition
{
  name = 'GetBrand';
  path = '/message/GetBrand';
  request?: GetBrand;
  response?: GetBrandResponse;
}

export class SvcGetDefaultProductSearchStrategy implements IEvaServiceDefinition
{
  name = 'GetDefaultProductSearchStrategy';
  path = '/message/GetDefaultProductSearchStrategy';
  request?: GetDefaultProductSearchStrategy;
  response?: GetDefaultProductSearchStrategyResponse;
}

export class SvcGetLayerByID implements IEvaServiceDefinition
{
  name = 'GetLayerByID';
  path = '/message/GetLayerByID';
  request?: GetLayerByID;
  response?: GetLayerByIDResponse;
}

export class SvcGetProductByID implements IEvaServiceDefinition
{
  name = 'GetProductByID';
  path = '/message/GetProductByID';
  request?: GetProductByID;
  response?: GetProductByIDResponse;
}

export class SvcGetProductCapacityPlanByID implements IEvaServiceDefinition
{
  name = 'GetProductCapacityPlanByID';
  path = '/message/GetProductCapacityPlanByID';
  request?: GetProductCapacityPlanByID;
  response?: GetProductCapacityPlanByIDResponse;
}

export class SvcGetProductCapacityPlansByProductID implements IEvaServiceDefinition
{
  name = 'GetProductCapacityPlansByProductID';
  path = '/message/GetProductCapacityPlansByProductID';
  request?: GetProductCapacityPlansByProductID;
  response?: GetProductCapacityPlansByProductIDResponse;
}

export class SvcGetProductCompositionState implements IEvaServiceDefinition
{
  name = 'GetProductCompositionState';
  path = '/message/GetProductCompositionState';
  request?: GetProductCompositionState;
  response?: GetProductCompositionStateResponse;
}

export class SvcGetProductForEditByID implements IEvaServiceDefinition
{
  name = 'GetProductForEditByID';
  path = '/message/GetProductForEditByID';
  request?: GetProductForEditByID;
  response?: GetProductForEditByIDResponse;
}

export class SvcGetProductForQuickEditByID implements IEvaServiceDefinition
{
  name = 'GetProductForQuickEditByID';
  path = '/message/GetProductForQuickEditByID';
  request?: GetProductForQuickEditByID;
  response?: GetProductForQuickEditByIDResponse;
}

export class SvcGetProductPropertyCategoryByID implements IEvaServiceDefinition
{
  name = 'GetProductPropertyCategoryByID';
  path = '/message/GetProductPropertyCategoryByID';
  request?: GetProductPropertyCategoryByID;
  response?: GetProductPropertyCategoryByIDResponse;
}

export class SvcGetProductPropertyTypeByID implements IEvaServiceDefinition
{
  name = 'GetProductPropertyTypeByID';
  path = '/message/GetProductPropertyTypeByID';
  request?: GetProductPropertyTypeByID;
  response?: GetProductPropertyTypeByIDResponse;
}

export class SvcGetProductPropertyTypeEnumValueByID implements IEvaServiceDefinition
{
  name = 'GetProductPropertyTypeEnumValueByID';
  path = '/message/GetProductPropertyTypeEnumValueByID';
  request?: GetProductPropertyTypeEnumValueByID;
  response?: GetProductPropertyTypeEnumValueByIDResponse;
}

export class SvcGetProductRelationTypeByID implements IEvaServiceDefinition
{
  name = 'GetProductRelationTypeByID';
  path = '/message/GetProductRelationTypeByID';
  request?: GetProductRelationTypeByID;
  response?: GetProductRelationTypeByIDResponse;
}

export class SvcGetProductSearchConfiguration implements IEvaServiceDefinition
{
  name = 'GetProductSearchConfiguration';
  path = '/message/GetProductSearchConfiguration';
  request?: GetProductSearchConfiguration;
  response?: GetProductSearchConfigurationResponse;
}

export class SvcGetProductSearchSynonyms implements IEvaServiceDefinition
{
  name = 'GetProductSearchSynonyms';
  path = '/message/GetProductSearchSynonyms';
  request?: GetProductSearchSynonyms;
  response?: GetProductSearchSynonymsResponse;
}

export class SvcGetReferenceDataForProduct implements IEvaServiceDefinition
{
  name = 'GetReferenceDataForProduct';
  path = '/message/GetReferenceDataForProduct';
  request?: GetReferenceDataForProduct;
  response?: GetReferenceDataForProductResponse;
}

export class SvcGetRevisionStatus implements IEvaServiceDefinition
{
  name = 'GetRevisionStatus';
  path = '/message/GetRevisionStatus';
  request?: GetRevisionStatus;
  response?: GetRevisionStatusResponse;
}

export class SvcImportProducts implements IEvaServiceDefinition
{
  name = 'ImportProducts';
  path = '/message/ImportProducts';
  request?: ImportProducts;
  response?: ImportProductsResponse;
}

export class SvcImportProducts_Async implements IEvaServiceDefinition
{
  name = 'ImportProducts_Async';
  path = '/async-message/ImportProducts';
  request?: ImportProducts_Async;
  response?: ImportProducts_AsyncResponse;
}

export class SvcImportProducts_AsyncResult implements IEvaServiceDefinition
{
  name = 'ImportProducts_AsyncResult';
  path = '/async-result/ImportProducts';
  request?: ImportProducts_AsyncResult;
  response?: ImportProductsResponse;
}

export class SvcListApplicationCultures implements IEvaServiceDefinition
{
  name = 'ListApplicationCultures';
  path = '/message/ListApplicationCultures';
  request?: ListApplicationCultures;
  response?: ListApplicationCulturesResponse;
}

export class SvcListContentCultureMapping implements IEvaServiceDefinition
{
  name = 'ListContentCultureMapping';
  path = '/message/ListContentCultureMapping';
  request?: ListContentCultureMapping;
  response?: ListContentCultureMappingResponse;
}

export class SvcListLayers implements IEvaServiceDefinition
{
  name = 'ListLayers';
  path = '/message/ListLayers';
  request?: ListLayers;
  response?: ListLayersResponse;
}

export class SvcListProductCapacityPlans implements IEvaServiceDefinition
{
  name = 'ListProductCapacityPlans';
  path = '/message/ListProductCapacityPlans';
  request?: ListProductCapacityPlans;
  response?: ListProductCapacityPlansResponse;
}

export class SvcListProductContentEdits implements IEvaServiceDefinition
{
  name = 'ListProductContentEdits';
  path = '/message/ListProductContentEdits';
  request?: ListProductContentEdits;
  response?: ListProductContentEditsResponse;
}

export class SvcListProductPropertyCategories implements IEvaServiceDefinition
{
  name = 'ListProductPropertyCategories';
  path = '/message/ListProductPropertyCategories';
  request?: ListProductPropertyCategories;
  response?: ListProductPropertyCategoriesResponse;
}

export class SvcListProductPropertyTypeEnumValues implements IEvaServiceDefinition
{
  name = 'ListProductPropertyTypeEnumValues';
  path = '/message/ListProductPropertyTypeEnumValues';
  request?: ListProductPropertyTypeEnumValues;
  response?: ListProductPropertyTypeEnumValuesResponse;
}

export class SvcListProductPropertyTypes implements IEvaServiceDefinition
{
  name = 'ListProductPropertyTypes';
  path = '/message/ListProductPropertyTypes';
  request?: ListProductPropertyTypes;
  response?: ListProductPropertyTypesResponse;
}

export class SvcListProductRelations implements IEvaServiceDefinition
{
  name = 'ListProductRelations';
  path = '/message/ListProductRelations';
  request?: ListProductRelations;
  response?: ListProductRelationsResponse;
}

export class SvcListProductRelationTypes implements IEvaServiceDefinition
{
  name = 'ListProductRelationTypes';
  path = '/message/ListProductRelationTypes';
  request?: ListProductRelationTypes;
  response?: ListProductRelationTypesResponse;
}

export class SvcListProductSearchStrategies implements IEvaServiceDefinition
{
  name = 'ListProductSearchStrategies';
  path = '/message/ListProductSearchStrategies';
  request?: ListProductSearchStrategies;
  response?: ListProductSearchStrategiesResponse;
}

export class SvcListRevisions implements IEvaServiceDefinition
{
  name = 'ListRevisions';
  path = '/message/ListRevisions';
  request?: ListRevisions;
  response?: ListRevisionsResponse;
}

export class SvcRecreateAliases implements IEvaServiceDefinition
{
  name = 'RecreateAliases';
  path = '/message/RecreateAliases';
  request?: RecreateAliases;
  response?: EmptyResponseMessage;
}

export class SvcRemoveProductRelationsByID implements IEvaServiceDefinition
{
  name = 'RemoveProductRelationsByID';
  path = '/message/RemoveProductRelationsByID';
  request?: RemoveProductRelationsByID;
  response?: EmptyResponseMessage;
}

export class SvcRemoveProductRelationsByProductID implements IEvaServiceDefinition
{
  name = 'RemoveProductRelationsByProductID';
  path = '/message/RemoveProductRelationsByProductID';
  request?: RemoveProductRelationsByProductID;
  response?: EmptyResponseMessage;
}

export class SvcRemoveProductsFromProductCapacityPlan implements IEvaServiceDefinition
{
  name = 'RemoveProductsFromProductCapacityPlan';
  path = '/message/RemoveProductsFromProductCapacityPlan';
  request?: RemoveProductsFromProductCapacityPlan;
  response?: EmptyResponseMessage;
}

export class SvcReplaceProductSearchSynonyms implements IEvaServiceDefinition
{
  name = 'ReplaceProductSearchSynonyms';
  path = '/message/ReplaceProductSearchSynonyms';
  request?: ReplaceProductSearchSynonyms;
  response?: EmptyResponseMessage;
}

export class SvcRequestReindexSearchData implements IEvaServiceDefinition
{
  name = 'RequestReindexSearchData';
  path = '/message/RequestReindexSearchData';
  request?: RequestReindexSearchData;
  response?: RequestReindexSearchDataResponse;
}

export class SvcSearchProductPropertyTypes implements IEvaServiceDefinition
{
  name = 'SearchProductPropertyTypes';
  path = '/message/SearchProductPropertyTypes';
  request?: SearchProductPropertyTypes;
  response?: SearchProductPropertyTypesResponse;
}

export class SvcSetProductCapacityPlanException implements IEvaServiceDefinition
{
  name = 'SetProductCapacityPlanException';
  path = '/message/SetProductCapacityPlanException';
  request?: SetProductCapacityPlanException;
  response?: EmptyResponseMessage;
}

export class SvcUpdateBrand implements IEvaServiceDefinition
{
  name = 'UpdateBrand';
  path = '/message/UpdateBrand';
  request?: UpdateBrand;
  response?: EmptyResponseMessage;
}

export class SvcUpdateLayer implements IEvaServiceDefinition
{
  name = 'UpdateLayer';
  path = '/message/UpdateLayer';
  request?: UpdateLayer;
  response?: EmptyResponseMessage;
}

export class SvcUpdateProduct implements IEvaServiceDefinition
{
  name = 'UpdateProduct';
  path = '/message/UpdateProduct';
  request?: UpdateProduct;
  response?: EmptyResponseMessage;
}

export class SvcUpdateProductCapacityPlan implements IEvaServiceDefinition
{
  name = 'UpdateProductCapacityPlan';
  path = '/message/UpdateProductCapacityPlan';
  request?: UpdateProductCapacityPlan;
  response?: EmptyResponseMessage;
}

export class SvcUpdateProductPropertyTypeEnumValue implements IEvaServiceDefinition
{
  name = 'UpdateProductPropertyTypeEnumValue';
  path = '/message/UpdateProductPropertyTypeEnumValue';
  request?: UpdateProductPropertyTypeEnumValue;
  response?: EmptyResponseMessage;
}

export class SvcUpdateProductRelations implements IEvaServiceDefinition
{
  name = 'UpdateProductRelations';
  path = '/message/UpdateProductRelations';
  request?: UpdateProductRelations;
  response?: EmptyResponseMessage;
}

export class SvcUpdateProductRelationType implements IEvaServiceDefinition
{
  name = 'UpdateProductRelationType';
  path = '/message/UpdateProductRelationType';
  request?: UpdateProductRelationType;
  response?: EmptyResponseMessage;
}

export class SvcUpdateProductSearchStrategy implements IEvaServiceDefinition
{
  name = 'UpdateProductSearchStrategy';
  path = '/message/UpdateProductSearchStrategy';
  request?: UpdateProductSearchStrategy;
  response?: EmptyResponseMessage;
}

export class SvcUploadProductBarcodeExcel implements IEvaServiceDefinition
{
  name = 'UploadProductBarcodeExcel';
  path = '/message/UploadProductBarcodeExcel';
  request?: UploadProductBarcodeExcel;
  response?: UploadProductBarcodeExcelResponse;
}

export class SvcUploadProductBarcodeExcel_Async implements IEvaServiceDefinition
{
  name = 'UploadProductBarcodeExcel_Async';
  path = '/async-message/UploadProductBarcodeExcel';
  request?: UploadProductBarcodeExcel_Async;
  response?: UploadProductBarcodeExcel_AsyncResponse;
}

export class SvcUploadProductBarcodeExcel_AsyncResult implements IEvaServiceDefinition
{
  name = 'UploadProductBarcodeExcel_AsyncResult';
  path = '/async-result/UploadProductBarcodeExcel';
  request?: UploadProductBarcodeExcel_AsyncResult;
  response?: UploadProductBarcodeExcelResponse;
}

export class SvcUploadProductContentExcel implements IEvaServiceDefinition
{
  name = 'UploadProductContentExcel';
  path = '/message/UploadProductContentExcel';
  request?: UploadProductContentExcel;
  response?: UploadProductContentExcelResponse;
}

export class SvcUploadProductContentExcel_Async implements IEvaServiceDefinition
{
  name = 'UploadProductContentExcel_Async';
  path = '/async-message/UploadProductContentExcel';
  request?: UploadProductContentExcel_Async;
  response?: UploadProductContentExcel_AsyncResponse;
}

export class SvcUploadProductContentExcel_AsyncResult implements IEvaServiceDefinition
{
  name = 'UploadProductContentExcel_AsyncResult';
  path = '/async-result/UploadProductContentExcel';
  request?: UploadProductContentExcel_AsyncResult;
  response?: UploadProductContentExcelResponse;
}

export class SvcUploadProductExcel implements IEvaServiceDefinition
{
  name = 'UploadProductExcel';
  path = '/message/UploadProductExcel';
  request?: UploadProductExcel;
  response?: UploadProductExcelResponse;
}

export class SvcUploadProductExcel_Async implements IEvaServiceDefinition
{
  name = 'UploadProductExcel_Async';
  path = '/async-message/UploadProductExcel';
  request?: UploadProductExcel_Async;
  response?: UploadProductExcel_AsyncResponse;
}

export class SvcUploadProductExcel_AsyncResult implements IEvaServiceDefinition
{
  name = 'UploadProductExcel_AsyncResult';
  path = '/async-result/UploadProductExcel';
  request?: UploadProductExcel_AsyncResult;
  response?: UploadProductExcelResponse;
}
