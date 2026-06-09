import {
  IEvaServiceDefinition,
  EmptyResponseMessage,
} from '../eva-services-core';

import {
  CreateBlob,
  CreateBlobResponse,
  DeleteBlob,
  GetBlobInfo,
  GetBlobInfoResponse,
  GetProductImagePlaceholder,
  GetPlaceholderResponse,
  ListBlobsForDocumentation,
  ListBlobsForDocumentationResponse,
  ListBlobsForStencil,
  ListBlobsForStencilResponse,
  SetProductImagePlaceholder,
  SetPlaceholderResponse,
  StoreBlob,
  StoreBlobResponse,
  ZipBlobs,
  ZipBlobsResponse,
} from './eva-services-blobs';


export class SvcCreateBlob implements IEvaServiceDefinition
{
  name = 'CreateBlob';
  path = '/message/CreateBlob';
  request?: CreateBlob;
  response?: CreateBlobResponse;
}

export class SvcDeleteBlob implements IEvaServiceDefinition
{
  name = 'DeleteBlob';
  path = '/message/DeleteBlob';
  request?: DeleteBlob;
  response?: EmptyResponseMessage;
}

export class SvcGetBlobInfo implements IEvaServiceDefinition
{
  name = 'GetBlobInfo';
  path = '/message/GetBlobInfo';
  request?: GetBlobInfo;
  response?: GetBlobInfoResponse;
}

export class SvcGetProductImagePlaceholder implements IEvaServiceDefinition
{
  name = 'GetProductImagePlaceholder';
  path = '/message/GetProductImagePlaceholder';
  request?: GetProductImagePlaceholder;
  response?: GetPlaceholderResponse;
}

export class SvcListBlobsForDocumentation implements IEvaServiceDefinition
{
  name = 'ListBlobsForDocumentation';
  path = '/message/ListBlobsForDocumentation';
  request?: ListBlobsForDocumentation;
  response?: ListBlobsForDocumentationResponse;
}

export class SvcListBlobsForStencil implements IEvaServiceDefinition
{
  name = 'ListBlobsForStencil';
  path = '/message/ListBlobsForStencil';
  request?: ListBlobsForStencil;
  response?: ListBlobsForStencilResponse;
}

export class SvcSetProductImagePlaceholder implements IEvaServiceDefinition
{
  name = 'SetProductImagePlaceholder';
  path = '/message/SetProductImagePlaceholder';
  request?: SetProductImagePlaceholder;
  response?: SetPlaceholderResponse;
}

export class SvcStoreBlob implements IEvaServiceDefinition
{
  name = 'StoreBlob';
  path = '/message/StoreBlob';
  request?: StoreBlob;
  response?: StoreBlobResponse;
}

export class SvcZipBlobs implements IEvaServiceDefinition
{
  name = 'ZipBlobs';
  path = '/message/ZipBlobs';
  request?: ZipBlobs;
  response?: ZipBlobsResponse;
}
