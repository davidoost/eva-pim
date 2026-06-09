import {
  IEvaServiceDefinition,
  EmptyResponseMessage,
  ResourceResponseMessage,
} from '../eva-services-core';

import {
  CreateOrganizationUnitShelf,
  CreateOrganizationUnitShelfResponse,
  CreateProductRestriction,
  CreateProductRestrictionResponse,
  CreateShelf,
  CreateShelfResponse,
  CreateShelfBlob,
  CreateShelfBlobResponse,
  CreateShelfLocation,
  CreateShelfLocationResponse,
  CreateShelfLocationBlob,
  CreateShelfLocationBlobResponse,
  CreateShelfLocationProduct,
  CreateShelfLocationProductResponse,
  CreateShelfLocationProducts,
  CreateShelfLocationProductsResponse,
  CreateShelfLocationTemplate,
  CreateShelfLocationTemplateResponse,
  CreateShelfLocationTemplateType,
  CreateShelfLocationTemplateTypeResponse,
  CreateShelfType,
  CreateShelfTypeResponse,
  DeleteOrganizationUnitShelf,
  DeleteProductRestriction,
  DeleteShelf,
  DeleteShelfBlob,
  DeleteShelfLocation,
  DeleteShelfLocationBlob,
  DeleteShelfLocationProduct,
  DeleteShelfLocationTemplate,
  DeleteShelfLocationTemplateType,
  DeleteShelfType,
  DownloadShelfLocationProducts,
  DuplicateShelf,
  DuplicateShelfResponse,
  ExportShelfTemplate,
  GetOrganizationUnitDistributionTree,
  GetOrganizationUnitDistributionTreeResponse,
  GetOrganizationUnitShelfByID,
  GetOrganizationUnitShelfByIDResponse,
  GetProductRestrictionByID,
  GetProductRestrictionByIDResponse,
  GetShelfBlobByID,
  GetShelfBlobByIDResponse,
  GetShelfByID,
  GetShelfByIDResponse,
  GetShelfLocationBlobByID,
  GetShelfLocationBlobByIDResponse,
  GetShelfLocationByID,
  GetShelfLocationByIDResponse,
  GetShelfLocationProductByID,
  GetShelfLocationProductByIDResponse,
  GetShelfLocationTemplateByID,
  GetShelfLocationTemplateByIDResponse,
  GetShelfLocationTemplateTypeByID,
  GetShelfLocationTemplateTypeByIDResponse,
  GetShelfLocationTemplateTypes,
  GetShelfLocationTemplateTypesResponse,
  GetShelfTypeByID,
  GetShelfTypeByIDResponse,
  GetShelfTypes,
  GetShelfTypesResponse,
  ImportShelfTemplate,
  ListOrganizationUnitShelves,
  ListOrganizationUnitShelvesResponse,
  ListProductRestrictions,
  ListProductRestrictionsResponse,
  ListShelfBlobs,
  ListShelfBlobsResponse,
  ListShelfLocationBlobs,
  ListShelfLocationBlobsResponse,
  ListShelfLocationProducts,
  ListShelfLocationProductsResponse,
  ListShelfLocations,
  ListShelfLocationsResponse,
  ListShelfLocationTemplates,
  ListShelfLocationTemplatesResponse,
  ListShelfProducts,
  ListShelfProductsResponse,
  ListShelves,
  ListShelvesResponse,
  UpdateOrganizationUnitDistributionTree,
  UpdateOrganizationUnitShelf,
  UpdateProductRestriction,
  UpdateShelf,
  UpdateShelfBlob,
  UpdateShelfLocation,
  UpdateShelfLocationBlob,
  UpdateShelfLocationProduct,
  UpdateShelfLocationTemplate,
  UpdateShelfLocationTemplateType,
  UpdateShelfType,
  UploadShelfLocationProducts,
} from './eva-services-shelf-management';


export class SvcCreateOrganizationUnitShelf implements IEvaServiceDefinition
{
  name = 'CreateOrganizationUnitShelf';
  path = '/message/CreateOrganizationUnitShelf';
  request?: CreateOrganizationUnitShelf;
  response?: CreateOrganizationUnitShelfResponse;
}

export class SvcCreateProductRestriction implements IEvaServiceDefinition
{
  name = 'CreateProductRestriction';
  path = '/message/CreateProductRestriction';
  request?: CreateProductRestriction;
  response?: CreateProductRestrictionResponse;
}

export class SvcCreateShelf implements IEvaServiceDefinition
{
  name = 'CreateShelf';
  path = '/message/CreateShelf';
  request?: CreateShelf;
  response?: CreateShelfResponse;
}

export class SvcCreateShelfBlob implements IEvaServiceDefinition
{
  name = 'CreateShelfBlob';
  path = '/message/CreateShelfBlob';
  request?: CreateShelfBlob;
  response?: CreateShelfBlobResponse;
}

export class SvcCreateShelfLocation implements IEvaServiceDefinition
{
  name = 'CreateShelfLocation';
  path = '/message/CreateShelfLocation';
  request?: CreateShelfLocation;
  response?: CreateShelfLocationResponse;
}

export class SvcCreateShelfLocationBlob implements IEvaServiceDefinition
{
  name = 'CreateShelfLocationBlob';
  path = '/message/CreateShelfLocationBlob';
  request?: CreateShelfLocationBlob;
  response?: CreateShelfLocationBlobResponse;
}

export class SvcCreateShelfLocationProduct implements IEvaServiceDefinition
{
  name = 'CreateShelfLocationProduct';
  path = '/message/CreateShelfLocationProduct';
  request?: CreateShelfLocationProduct;
  response?: CreateShelfLocationProductResponse;
}

export class SvcCreateShelfLocationProducts implements IEvaServiceDefinition
{
  name = 'CreateShelfLocationProducts';
  path = '/message/CreateShelfLocationProducts';
  request?: CreateShelfLocationProducts;
  response?: CreateShelfLocationProductsResponse;
}

export class SvcCreateShelfLocationTemplate implements IEvaServiceDefinition
{
  name = 'CreateShelfLocationTemplate';
  path = '/message/CreateShelfLocationTemplate';
  request?: CreateShelfLocationTemplate;
  response?: CreateShelfLocationTemplateResponse;
}

export class SvcCreateShelfLocationTemplateType implements IEvaServiceDefinition
{
  name = 'CreateShelfLocationTemplateType';
  path = '/message/CreateShelfLocationTemplateType';
  request?: CreateShelfLocationTemplateType;
  response?: CreateShelfLocationTemplateTypeResponse;
}

export class SvcCreateShelfType implements IEvaServiceDefinition
{
  name = 'CreateShelfType';
  path = '/message/CreateShelfType';
  request?: CreateShelfType;
  response?: CreateShelfTypeResponse;
}

export class SvcDeleteOrganizationUnitShelf implements IEvaServiceDefinition
{
  name = 'DeleteOrganizationUnitShelf';
  path = '/message/DeleteOrganizationUnitShelf';
  request?: DeleteOrganizationUnitShelf;
  response?: EmptyResponseMessage;
}

export class SvcDeleteProductRestriction implements IEvaServiceDefinition
{
  name = 'DeleteProductRestriction';
  path = '/message/DeleteProductRestriction';
  request?: DeleteProductRestriction;
  response?: EmptyResponseMessage;
}

export class SvcDeleteShelf implements IEvaServiceDefinition
{
  name = 'DeleteShelf';
  path = '/message/DeleteShelf';
  request?: DeleteShelf;
  response?: EmptyResponseMessage;
}

export class SvcDeleteShelfBlob implements IEvaServiceDefinition
{
  name = 'DeleteShelfBlob';
  path = '/message/DeleteShelfBlob';
  request?: DeleteShelfBlob;
  response?: EmptyResponseMessage;
}

export class SvcDeleteShelfLocation implements IEvaServiceDefinition
{
  name = 'DeleteShelfLocation';
  path = '/message/DeleteShelfLocation';
  request?: DeleteShelfLocation;
  response?: EmptyResponseMessage;
}

export class SvcDeleteShelfLocationBlob implements IEvaServiceDefinition
{
  name = 'DeleteShelfLocationBlob';
  path = '/message/DeleteShelfLocationBlob';
  request?: DeleteShelfLocationBlob;
  response?: EmptyResponseMessage;
}

export class SvcDeleteShelfLocationProduct implements IEvaServiceDefinition
{
  name = 'DeleteShelfLocationProduct';
  path = '/message/DeleteShelfLocationProduct';
  request?: DeleteShelfLocationProduct;
  response?: EmptyResponseMessage;
}

export class SvcDeleteShelfLocationTemplate implements IEvaServiceDefinition
{
  name = 'DeleteShelfLocationTemplate';
  path = '/message/DeleteShelfLocationTemplate';
  request?: DeleteShelfLocationTemplate;
  response?: EmptyResponseMessage;
}

export class SvcDeleteShelfLocationTemplateType implements IEvaServiceDefinition
{
  name = 'DeleteShelfLocationTemplateType';
  path = '/message/DeleteShelfLocationTemplateType';
  request?: DeleteShelfLocationTemplateType;
  response?: EmptyResponseMessage;
}

export class SvcDeleteShelfType implements IEvaServiceDefinition
{
  name = 'DeleteShelfType';
  path = '/message/DeleteShelfType';
  request?: DeleteShelfType;
  response?: EmptyResponseMessage;
}

export class SvcDownloadShelfLocationProducts implements IEvaServiceDefinition
{
  name = 'DownloadShelfLocationProducts';
  path = '/message/DownloadShelfLocationProducts';
  request?: DownloadShelfLocationProducts;
  response?: ResourceResponseMessage;
}

export class SvcDuplicateShelf implements IEvaServiceDefinition
{
  name = 'DuplicateShelf';
  path = '/message/DuplicateShelf';
  request?: DuplicateShelf;
  response?: DuplicateShelfResponse;
}

export class SvcExportShelfTemplate implements IEvaServiceDefinition
{
  name = 'ExportShelfTemplate';
  path = '/message/ExportShelfTemplate';
  request?: ExportShelfTemplate;
  response?: ResourceResponseMessage;
}

export class SvcGetOrganizationUnitDistributionTree implements IEvaServiceDefinition
{
  name = 'GetOrganizationUnitDistributionTree';
  path = '/message/GetOrganizationUnitDistributionTree';
  request?: GetOrganizationUnitDistributionTree;
  response?: GetOrganizationUnitDistributionTreeResponse;
}

export class SvcGetOrganizationUnitShelfByID implements IEvaServiceDefinition
{
  name = 'GetOrganizationUnitShelfByID';
  path = '/message/GetOrganizationUnitShelfByID';
  request?: GetOrganizationUnitShelfByID;
  response?: GetOrganizationUnitShelfByIDResponse;
}

export class SvcGetProductRestrictionByID implements IEvaServiceDefinition
{
  name = 'GetProductRestrictionByID';
  path = '/message/GetProductRestrictionByID';
  request?: GetProductRestrictionByID;
  response?: GetProductRestrictionByIDResponse;
}

export class SvcGetShelfBlobByID implements IEvaServiceDefinition
{
  name = 'GetShelfBlobByID';
  path = '/message/GetShelfBlobByID';
  request?: GetShelfBlobByID;
  response?: GetShelfBlobByIDResponse;
}

export class SvcGetShelfByID implements IEvaServiceDefinition
{
  name = 'GetShelfByID';
  path = '/message/GetShelfByID';
  request?: GetShelfByID;
  response?: GetShelfByIDResponse;
}

export class SvcGetShelfLocationBlobByID implements IEvaServiceDefinition
{
  name = 'GetShelfLocationBlobByID';
  path = '/message/GetShelfLocationBlobByID';
  request?: GetShelfLocationBlobByID;
  response?: GetShelfLocationBlobByIDResponse;
}

export class SvcGetShelfLocationByID implements IEvaServiceDefinition
{
  name = 'GetShelfLocationByID';
  path = '/message/GetShelfLocationByID';
  request?: GetShelfLocationByID;
  response?: GetShelfLocationByIDResponse;
}

export class SvcGetShelfLocationProductByID implements IEvaServiceDefinition
{
  name = 'GetShelfLocationProductByID';
  path = '/message/GetShelfLocationProductByID';
  request?: GetShelfLocationProductByID;
  response?: GetShelfLocationProductByIDResponse;
}

export class SvcGetShelfLocationTemplateByID implements IEvaServiceDefinition
{
  name = 'GetShelfLocationTemplateByID';
  path = '/message/GetShelfLocationTemplateByID';
  request?: GetShelfLocationTemplateByID;
  response?: GetShelfLocationTemplateByIDResponse;
}

export class SvcGetShelfLocationTemplateTypeByID implements IEvaServiceDefinition
{
  name = 'GetShelfLocationTemplateTypeByID';
  path = '/message/GetShelfLocationTemplateTypeByID';
  request?: GetShelfLocationTemplateTypeByID;
  response?: GetShelfLocationTemplateTypeByIDResponse;
}

export class SvcGetShelfLocationTemplateTypes implements IEvaServiceDefinition
{
  name = 'GetShelfLocationTemplateTypes';
  path = '/message/GetShelfLocationTemplateTypes';
  request?: GetShelfLocationTemplateTypes;
  response?: GetShelfLocationTemplateTypesResponse;
}

export class SvcGetShelfTypeByID implements IEvaServiceDefinition
{
  name = 'GetShelfTypeByID';
  path = '/message/GetShelfTypeByID';
  request?: GetShelfTypeByID;
  response?: GetShelfTypeByIDResponse;
}

export class SvcGetShelfTypes implements IEvaServiceDefinition
{
  name = 'GetShelfTypes';
  path = '/message/GetShelfTypes';
  request?: GetShelfTypes;
  response?: GetShelfTypesResponse;
}

export class SvcImportShelfTemplate implements IEvaServiceDefinition
{
  name = 'ImportShelfTemplate';
  path = '/message/ImportShelfTemplate';
  request?: ImportShelfTemplate;
  response?: EmptyResponseMessage;
}

export class SvcListOrganizationUnitShelves implements IEvaServiceDefinition
{
  name = 'ListOrganizationUnitShelves';
  path = '/message/ListOrganizationUnitShelves';
  request?: ListOrganizationUnitShelves;
  response?: ListOrganizationUnitShelvesResponse;
}

export class SvcListProductRestrictions implements IEvaServiceDefinition
{
  name = 'ListProductRestrictions';
  path = '/message/ListProductRestrictions';
  request?: ListProductRestrictions;
  response?: ListProductRestrictionsResponse;
}

export class SvcListShelfBlobs implements IEvaServiceDefinition
{
  name = 'ListShelfBlobs';
  path = '/message/ListShelfBlobs';
  request?: ListShelfBlobs;
  response?: ListShelfBlobsResponse;
}

export class SvcListShelfLocationBlobs implements IEvaServiceDefinition
{
  name = 'ListShelfLocationBlobs';
  path = '/message/ListShelfLocationBlobs';
  request?: ListShelfLocationBlobs;
  response?: ListShelfLocationBlobsResponse;
}

export class SvcListShelfLocationProducts implements IEvaServiceDefinition
{
  name = 'ListShelfLocationProducts';
  path = '/message/ListShelfLocationProducts';
  request?: ListShelfLocationProducts;
  response?: ListShelfLocationProductsResponse;
}

export class SvcListShelfLocations implements IEvaServiceDefinition
{
  name = 'ListShelfLocations';
  path = '/message/ListShelfLocations';
  request?: ListShelfLocations;
  response?: ListShelfLocationsResponse;
}

export class SvcListShelfLocationTemplates implements IEvaServiceDefinition
{
  name = 'ListShelfLocationTemplates';
  path = '/message/ListShelfLocationTemplates';
  request?: ListShelfLocationTemplates;
  response?: ListShelfLocationTemplatesResponse;
}

export class SvcListShelfProducts implements IEvaServiceDefinition
{
  name = 'ListShelfProducts';
  path = '/message/ListShelfProducts';
  request?: ListShelfProducts;
  response?: ListShelfProductsResponse;
}

export class SvcListShelves implements IEvaServiceDefinition
{
  name = 'ListShelves';
  path = '/message/ListShelves';
  request?: ListShelves;
  response?: ListShelvesResponse;
}

export class SvcUpdateOrganizationUnitDistributionTree implements IEvaServiceDefinition
{
  name = 'UpdateOrganizationUnitDistributionTree';
  path = '/message/UpdateOrganizationUnitDistributionTree';
  request?: UpdateOrganizationUnitDistributionTree;
  response?: EmptyResponseMessage;
}

export class SvcUpdateOrganizationUnitShelf implements IEvaServiceDefinition
{
  name = 'UpdateOrganizationUnitShelf';
  path = '/message/UpdateOrganizationUnitShelf';
  request?: UpdateOrganizationUnitShelf;
  response?: EmptyResponseMessage;
}

export class SvcUpdateProductRestriction implements IEvaServiceDefinition
{
  name = 'UpdateProductRestriction';
  path = '/message/UpdateProductRestriction';
  request?: UpdateProductRestriction;
  response?: EmptyResponseMessage;
}

export class SvcUpdateShelf implements IEvaServiceDefinition
{
  name = 'UpdateShelf';
  path = '/message/UpdateShelf';
  request?: UpdateShelf;
  response?: EmptyResponseMessage;
}

export class SvcUpdateShelfBlob implements IEvaServiceDefinition
{
  name = 'UpdateShelfBlob';
  path = '/message/UpdateShelfBlob';
  request?: UpdateShelfBlob;
  response?: EmptyResponseMessage;
}

export class SvcUpdateShelfLocation implements IEvaServiceDefinition
{
  name = 'UpdateShelfLocation';
  path = '/message/UpdateShelfLocation';
  request?: UpdateShelfLocation;
  response?: EmptyResponseMessage;
}

export class SvcUpdateShelfLocationBlob implements IEvaServiceDefinition
{
  name = 'UpdateShelfLocationBlob';
  path = '/message/UpdateShelfLocationBlob';
  request?: UpdateShelfLocationBlob;
  response?: EmptyResponseMessage;
}

export class SvcUpdateShelfLocationProduct implements IEvaServiceDefinition
{
  name = 'UpdateShelfLocationProduct';
  path = '/message/UpdateShelfLocationProduct';
  request?: UpdateShelfLocationProduct;
  response?: EmptyResponseMessage;
}

export class SvcUpdateShelfLocationTemplate implements IEvaServiceDefinition
{
  name = 'UpdateShelfLocationTemplate';
  path = '/message/UpdateShelfLocationTemplate';
  request?: UpdateShelfLocationTemplate;
  response?: EmptyResponseMessage;
}

export class SvcUpdateShelfLocationTemplateType implements IEvaServiceDefinition
{
  name = 'UpdateShelfLocationTemplateType';
  path = '/message/UpdateShelfLocationTemplateType';
  request?: UpdateShelfLocationTemplateType;
  response?: EmptyResponseMessage;
}

export class SvcUpdateShelfType implements IEvaServiceDefinition
{
  name = 'UpdateShelfType';
  path = '/message/UpdateShelfType';
  request?: UpdateShelfType;
  response?: EmptyResponseMessage;
}

export class SvcUploadShelfLocationProducts implements IEvaServiceDefinition
{
  name = 'UploadShelfLocationProducts';
  path = '/message/UploadShelfLocationProducts';
  request?: UploadShelfLocationProducts;
  response?: EmptyResponseMessage;
}
