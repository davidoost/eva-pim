import {
  RequestMessage,
  ResponseMessage,
  RequestMessageWithEmptyResponse,
  BlobsListBlobsForDocumentationFilter,
  FilteredPagedResultRequest,
  PagedResultResponse,
  BlobsListBlobsForStencilFilter,
  ResourceWithBlobIDResponseMessage,
} from '../eva-services-core';


export enum Errors
{
  /**
  * Duplicate path '{0:string}' is not allowed
  */
  ZipBlobs_DuplicatePaths = 'ZipBlobs:DuplicatePaths',
}
/**
* Creates a new, empty blob. If you wish to store data in there directly, use the `StoreBlob` service instead.
* 
* Empty blobs are placeholders; eventually, you'll want to push data in there. This service allows you to create that placeholder, and it is expected you then use the
* multipart or raw binary `POST` call to `/blob/{Guid}` to push your data.
* 
* The combination of `Category` and `OriginalName` must be unique, as the `GetBlobInfoService` allows retrieval based on these values. Internally, a fresh and unique `Guid` is
* generated and returned from this request. The response also contains the full `Url` by which this blob can be accessed (which will contain aforementioned `Guid`). Use this
* path to POST your data, too!
* 
* - [x] The `MimeType` is required, a few suggestions would be `application/pdf`, `text/csv` or `application/json` - but you probably already know this.
* - [x] The `ExpireDate` is the date at which the given blob should expire. Leave this empty to *suggest* to keep it forever. We will bag it and get rid of it when the time is right. :hocho:
* 
* When retrieving the blob, it will be returned to you using the `MimeType` as `ContentType` header and a proper `Expires` header.
*/
export interface CreateBlob extends RequestMessage<CreateBlobResponse> {
  Category?: string;
  ExpireDate?: string;
  LifeTime?: string;
  LocationType?: string;
  MimeType: string;
  OriginalName?: string;
  Uri?: string;
}

export interface CreateBlobResponse extends ResponseMessage {
  /**
  * Entity type: Blob
  * The ID of the newly created blob.
  */
  Guid: string;
  /**
  * The URL where the newly created blob can be accessed.
  */
  Url?: string;
}

/**
* Deletes specified blob, either by `BlobID` or `BlobUrl`.
*/
export interface DeleteBlob extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: Blob
  * Can be used for standard blobs - for secure blobs, use `BlobUrl` instead.
  */
  BlobID?: string;
  /**
  * Can be used for both standard- and secured blobs - must match environment assets URL.
  */
  BlobUrl?: string;
}

/**
* Get information about a blob, either by `Guid` or by `Category` and `OriginalName`.
*/
export interface GetBlobInfo extends RequestMessage<GetBlobInfoResponse> {
  Category?: string;
  Guid?: string;
  OriginalName?: string;
}

export interface GetBlobInfoResponse extends ResponseMessage {
  Category?: string;
  ExpireDate?: string;
  Guid: string;
  LastModificationTimeUtc: string;
  MimeType?: string;
  OriginalName?: string;
  /**
  * In bytes
  */
  Size: number;
  Url?: string;
}

export interface GetPlaceholderResponse extends ResponseMessage {
  Guid: string;
  Url?: string;
}

export interface GetProductImagePlaceholder extends RequestMessage<GetPlaceholderResponse> {
}

/**
* List blobs intended for EVA user documentation.
* 
* - When not specifying `PageConfig.Filter.Category`, we will default to `Documentation`
* - When `PageConfig.Filter.Category` does not start with `Documentation`, we will prefix it with `Documentation`
*/
export interface ListBlobsForDocumentation extends FilteredPagedResultRequest<BlobsListBlobsForDocumentationFilter, ListBlobsForDocumentationResponse> {
}

export interface ListBlobsForDocumentationResponse extends PagedResultResponse<ServicesListBlobsForDocumentationResponse_DocumentationBlob> {
}

export interface ServicesListBlobsForDocumentationResponse_DocumentationBlob {
  Category?: string;
  ExpireDate?: string;
  ID: string;
  LocationType?: string;
  MimeType?: string;
  OriginalName?: string;
  Url?: string;
}

/**
* List blobs intended for stencils.
*/
export interface ListBlobsForStencil extends FilteredPagedResultRequest<BlobsListBlobsForStencilFilter, ListBlobsForStencilResponse> {
}

export interface ListBlobsForStencilResponse extends PagedResultResponse<ServicesListBlobsForStencilResponse_StencilBlob> {
}

export interface ServicesListBlobsForStencilResponse_StencilBlob {
  Category?: string;
  ExpireDate?: string;
  ID: string;
  LocationType?: string;
  MimeType?: string;
  OriginalName?: string;
  Url?: string;
}

export interface SetPlaceholderResponse extends ResponseMessage {
  Guid: string;
  Url?: string;
}

export interface SetProductImagePlaceholder extends RequestMessage<SetPlaceholderResponse> {
  Data: string;
  MimeType: string;
}

/**
* Creates a new blob and stores `Data` to it.
* 
* The combination of `Category` and `OriginalName` must be unique, as the `GetBlobInfoService` allows retrieval based on these values. Internally, a fresh and unique `Guid` is
* generated and returned from this request. The response also contains the full `Url` by which this blob can be accessed (which will contain aforementioned `Guid`).
* 
* - [x] The `MimeType` is required, a few suggestions would be `application/pdf`, `text/csv` or `application/json` - but you probably already know this.
* - [x] The `ExpireDate` is the date at which the given blob should expire. Leave this empty to *suggest* to keep it forever. We will bag it and get rid of it when the time is right. :hocho:
* 
* When retrieving the blob, it will be returned to you using the `MimeType` as `ContentType` header and a proper `Expires` header.
* 
* *NOTE*: leaving `OriginalName` empty means EVA treats this file as a temporary one and it'll be removed after a set period. Which can be manipulated through the setting `Blobs:DefaultLifeTime`
* which is the default expire time for these kinds of blobs in minutes.
*/
export interface StoreBlob extends RequestMessage<StoreBlobResponse> {
  Category?: string;
  Data: string;
  ExpireDate?: string;
  MimeType: string;
  OriginalName?: string;
}

export interface StoreBlobResponse extends ResponseMessage {
  Guid: string;
  Url?: string;
}

/**
* Returns a list of blobs as a zip file.
*/
export interface ZipBlobs extends RequestMessage<ZipBlobsResponse> {
  /**
  * List of blobs to be included in the zip file.
  */
  Blobs: ServicesZipBlobs_BlobToZip[];
  /**
  * Name of the generated zip file, will default to 'download.zip' if not specified.
  */
  ZipName?: string;
}

export interface ServicesZipBlobs_BlobToZip {
  /**
  * Entity type: Blob
  * Can be used for standard blobs - for secure blobs, use `BlobUrl` instead.
  */
  BlobID?: string;
  /**
  * Can be used for both standard- and secured blobs - must match environment assets URL.
  */
  BlobUrl?: string;
  /**
  * Path of the file in the resulting zip, including filename - when not set, files are set to root using their original blob name or else a random UUID.
  */
  Path?: string;
}

export interface ZipBlobsResponse extends ResourceWithBlobIDResponseMessage {
}

