import {
  IEvaServiceDefinition,
  EmptyResponseMessage,
} from '../eva-services-core';

import {
  CancelRemovalRequest,
  CreatePrivacyDataRequest,
  CreatePrivacyDataRequestResponse,
  CreatePrivacyOrderDataRemovalRequest,
  CreatePrivacyRemovalRequest,
  CreatePrivacyRemovalRequestResponse,
  DeletePrivacyDataRequest,
  ExecuteRemovalRequest_Async,
  ExecuteRemovalRequest_AsyncResponse,
  ExecuteRemovalRequest_AsyncResult,
  GetPrivacyDataRequestByID,
  GetPrivacyDataRequestByIDResponse,
  GetPrivacyOrderDataRemovals,
  GetPrivacyOrderDataRemovalsResponse,
  GetPrivacyRemovalRequestByID,
  GetPrivacyRemovalRequestByIDResponse,
  ListPrivacyDataRequests,
  ListPrivacyDataRequestsResponse,
  ListPrivacyRemovalRequests,
  ListPrivacyRemovalRequestsResponse,
  ScheduleRemovalRequests,
} from './eva-services-privacy';


export class SvcCancelRemovalRequest implements IEvaServiceDefinition
{
  name = 'CancelRemovalRequest';
  path = '/message/CancelRemovalRequest';
  request?: CancelRemovalRequest;
  response?: EmptyResponseMessage;
}

export class SvcCreatePrivacyDataRequest implements IEvaServiceDefinition
{
  name = 'CreatePrivacyDataRequest';
  path = '/message/CreatePrivacyDataRequest';
  request?: CreatePrivacyDataRequest;
  response?: CreatePrivacyDataRequestResponse;
}

export class SvcCreatePrivacyOrderDataRemovalRequest implements IEvaServiceDefinition
{
  name = 'CreatePrivacyOrderDataRemovalRequest';
  path = '/message/CreatePrivacyOrderDataRemovalRequest';
  request?: CreatePrivacyOrderDataRemovalRequest;
  response?: EmptyResponseMessage;
}

export class SvcCreatePrivacyRemovalRequest implements IEvaServiceDefinition
{
  name = 'CreatePrivacyRemovalRequest';
  path = '/message/CreatePrivacyRemovalRequest';
  request?: CreatePrivacyRemovalRequest;
  response?: CreatePrivacyRemovalRequestResponse;
}

export class SvcDeletePrivacyDataRequest implements IEvaServiceDefinition
{
  name = 'DeletePrivacyDataRequest';
  path = '/message/DeletePrivacyDataRequest';
  request?: DeletePrivacyDataRequest;
  response?: EmptyResponseMessage;
}

export class SvcExecuteRemovalRequest_Async implements IEvaServiceDefinition
{
  name = 'ExecuteRemovalRequest_Async';
  path = '/async-message/ExecuteRemovalRequest';
  request?: ExecuteRemovalRequest_Async;
  response?: ExecuteRemovalRequest_AsyncResponse;
}

export class SvcExecuteRemovalRequest_AsyncResult implements IEvaServiceDefinition
{
  name = 'ExecuteRemovalRequest_AsyncResult';
  path = '/async-result/ExecuteRemovalRequest';
  request?: ExecuteRemovalRequest_AsyncResult;
  response?: EmptyResponseMessage;
}

export class SvcGetPrivacyDataRequestByID implements IEvaServiceDefinition
{
  name = 'GetPrivacyDataRequestByID';
  path = '/message/GetPrivacyDataRequestByID';
  request?: GetPrivacyDataRequestByID;
  response?: GetPrivacyDataRequestByIDResponse;
}

export class SvcGetPrivacyOrderDataRemovals implements IEvaServiceDefinition
{
  name = 'GetPrivacyOrderDataRemovals';
  path = '/message/GetPrivacyOrderDataRemovals';
  request?: GetPrivacyOrderDataRemovals;
  response?: GetPrivacyOrderDataRemovalsResponse;
}

export class SvcGetPrivacyRemovalRequestByID implements IEvaServiceDefinition
{
  name = 'GetPrivacyRemovalRequestByID';
  path = '/message/GetPrivacyRemovalRequestByID';
  request?: GetPrivacyRemovalRequestByID;
  response?: GetPrivacyRemovalRequestByIDResponse;
}

export class SvcListPrivacyDataRequests implements IEvaServiceDefinition
{
  name = 'ListPrivacyDataRequests';
  path = '/message/ListPrivacyDataRequests';
  request?: ListPrivacyDataRequests;
  response?: ListPrivacyDataRequestsResponse;
}

export class SvcListPrivacyRemovalRequests implements IEvaServiceDefinition
{
  name = 'ListPrivacyRemovalRequests';
  path = '/message/ListPrivacyRemovalRequests';
  request?: ListPrivacyRemovalRequests;
  response?: ListPrivacyRemovalRequestsResponse;
}

export class SvcScheduleRemovalRequests implements IEvaServiceDefinition
{
  name = 'ScheduleRemovalRequests';
  path = '/message/ScheduleRemovalRequests';
  request?: ScheduleRemovalRequests;
  response?: EmptyResponseMessage;
}
