import {
  RequestMessageWithEmptyResponse,
  RequestMessage,
  ResponseMessage,
  AsyncRequestHandlingAsyncRequestResponse,
  AsyncRequestHandlingAsyncRequestResultRequest,
  PagedResultRequest,
  PagedResultResponse,
  FilteredPagedResultRequest,
} from '../eva-services-core';


export enum Errors
{
  /**
  * Privacy removal already requested.
  */
  PrivacyRemovalRequest_AlreadyRequested = 'PrivacyRemovalRequest:AlreadyRequested',
  /**
  * Cannot request privacy removal for this user type.
  */
  PrivacyRemovalRequest_InvalidUserType = 'PrivacyRemovalRequest:InvalidUserType',
  /**
  * Can no longer request cancellation of this privacy removal request.
  */
  PrivacyRemovalRequest_CannotBeCancelled = 'PrivacyRemovalRequest:CannotBeCancelled',
  /**
  * Only the user themselves can cancel the privacy removal request.
  */
  PrivacyRemovalRequest_SelfCancelOnly = 'PrivacyRemovalRequest:SelfCancelOnly',
  /**
  * The maximum time the processing of a privacy removal request can be delayed is 24 hours.
  */
  PrivacyRemovalRequest_InvalidDelay = 'PrivacyRemovalRequest:InvalidDelay',
  /**
  * Some invoices are missing for removal request {0:id}, requesting generation.
  */
  RemovalRequestProcessor_InvoicesMissingForRemovalRequest = 'RemovalRequestProcessor:InvoicesMissingForRemovalRequest',
}
export enum DataModelsDataRequestStatus {
  Requested = 0,
  Processing = 1,
  Ready = 2,
  Expired = 3,
}

export enum DataModelsRemovalRequestStatus {
  Requested = 0,
  Processing = 1,
  Done = 2,
  Failed = 3,
  Cancelled = 4,
}

export interface RepositoriesListPrivacyRemovalRequestsFilter {
  CreationDateRange?: RepositoriesListPrivacyRemovalRequestsFilter_DateRange;
  Hash?: string;
  Hashes?: string[];
  /**
  * Entity type: RemovalRequest
  */
  IDs?: number[];
  Status?: DataModelsRemovalRequestStatus;
  /**
  * Entity type: User
  */
  UserID?: number;
  /**
  * Entity type: User
  */
  UserIDs?: number[];
}

export interface RepositoriesListPrivacyRemovalRequestsFilter_DateRange {
  EndDate?: string;
  StartDate?: string;
}

/**
* Cancels a pending removal request. Can only be called by the user of the removal request themselves.
*/
export interface CancelRemovalRequest extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: RemovalRequest
  */
  ID: number;
}

export interface CreatePrivacyDataRequest extends RequestMessage<CreatePrivacyDataRequestResponse> {
  /**
  * Entity type: User
  */
  UserID?: number;
}

export interface CreatePrivacyDataRequestResponse extends ResponseMessage {
  /**
  * Entity type: DataRequest
  */
  ID: number;
}

export interface CreatePrivacyOrderDataRemovalRequest extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: Order
  */
  OrderID: number;
  /**
  * Entity type: OrderLine
  */
  OrderLineID?: number;
  Type?: string;
}

/**
* Create and schedule a privacy removal request.
*/
export interface CreatePrivacyRemovalRequest extends RequestMessage<CreatePrivacyRemovalRequestResponse> {
  /**
  * The delay before the removal request is processed. During this period the user themselves can cancel the request.
  */
  ProcessDelay?: string;
  /**
  * Entity type: User
  */
  UserID?: number;
}

export interface CreatePrivacyRemovalRequestResponse extends ResponseMessage {
  Hash?: string;
  /**
  * Entity type: RemovalRequest
  */
  ID: number;
}

export interface DeletePrivacyDataRequest extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: DataRequest
  */
  ID: number;
}

/**
* Async service to re-process a failed privacy removal request.
*/
export interface ServicesExecuteRemovalRequest extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: RemovalRequest
  */
  ID: number;
}

export interface ExecuteRemovalRequest_Async extends ServicesExecuteRemovalRequest {
}

export interface ExecuteRemovalRequest_AsyncResponse extends AsyncRequestHandlingAsyncRequestResponse {
}

export interface ExecuteRemovalRequest_AsyncResult extends AsyncRequestHandlingAsyncRequestResultRequest {
}

export interface GetPrivacyDataRequestByID extends RequestMessage<GetPrivacyDataRequestByIDResponse> {
  /**
  * Entity type: DataRequest
  */
  ID: number;
}

export interface GetPrivacyDataRequestByIDResponse extends ResponseMessage {
  /**
  * Entity type: Blob
  */
  BlobID?: string;
  GenerationTime?: string;
  /**
  * Entity type: DataRequest
  */
  ID: number;
  Status: DataModelsDataRequestStatus;
  Url?: string;
  UserFullName?: string;
  /**
  * Entity type: User
  */
  UserID: number;
}

export interface GetPrivacyOrderDataRemovals extends RequestMessage<GetPrivacyOrderDataRemovalsResponse> {
  /**
  * Entity type: Order
  */
  OrderID: number;
}

export interface GetPrivacyOrderDataRemovalsResponse extends ResponseMessage {
  Results?: ServicesGetPrivacyOrderDataRemovalsResponse_Model[];
}

export interface ServicesGetPrivacyOrderDataRemovalsResponse_Model {
  /**
  * Entity type: Order
  */
  OrderID: number;
  /**
  * Entity type: OrderLine
  */
  OrderLineID?: number;
  Type?: string;
}

/**
* Get a privacy removal request by ID
*/
export interface GetPrivacyRemovalRequestByID extends RequestMessage<GetPrivacyRemovalRequestByIDResponse> {
  /**
  * Entity type: RemovalRequest
  */
  ID: number;
}

export interface GetPrivacyRemovalRequestByIDResponse extends ResponseMessage {
  Hash?: string;
  /**
  * Entity type: RemovalRequest
  */
  ID: number;
  RemovalTime?: string;
  Status: DataModelsRemovalRequestStatus;
  UserFullName?: string;
  /**
  * Entity type: User
  */
  UserID: number;
}

export interface ListPrivacyDataRequests extends PagedResultRequest<ListPrivacyDataRequestsResponse> {
  /**
  * Entity type: User
  */
  UserID?: number;
}

export interface ListPrivacyDataRequestsResponse extends PagedResultResponse<ServicesListPrivacyDataRequestsResponse_PrivacyDataRequest> {
}

export interface ServicesListPrivacyDataRequestsResponse_PrivacyDataRequest {
  /**
  * Entity type: Blob
  */
  BlobID?: string;
  GenerationTime?: string;
  /**
  * Entity type: DataRequest
  */
  ID: number;
  Status: DataModelsDataRequestStatus;
  Url?: string;
  UserFullName?: string;
  /**
  * Entity type: User
  */
  UserID: number;
}

/**
* List privacy removal requests.
*/
export interface ListPrivacyRemovalRequests extends FilteredPagedResultRequest<RepositoriesListPrivacyRemovalRequestsFilter, ListPrivacyRemovalRequestsResponse> {
}

export interface ListPrivacyRemovalRequestsResponse extends PagedResultResponse<ServicesListPrivacyRemovalRequestsResponse_PrivacyRemovalRequest> {
}

export interface ServicesListPrivacyRemovalRequestsResponse_PrivacyRemovalRequest {
  Hash?: string;
  /**
  * Entity type: RemovalRequest
  */
  ID: number;
  RemovalTime?: string;
  Status: DataModelsRemovalRequestStatus;
  UserFullName?: string;
  /**
  * Entity type: User
  */
  UserID: number;
}

/**
* Service where failed privacy removal requests can be reschuled for processing.
*/
export interface ScheduleRemovalRequests extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: RemovalRequest
  */
  IDs?: number[];
}

