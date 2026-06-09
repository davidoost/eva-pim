import {
  IEvaServiceDefinition,
} from '../eva-services-core';

import {
  CompareSynchronization,
  CompareSynchronizationResponse,
  CreateSynchronization,
  CreateSynchronizationResponse,
  GetAvailableSynchronizationManagers,
  GetAvailableSynchronizationManagersResponse,
  UploadSynchronization,
  UploadSynchronizationResponse,
} from './eva-services-sync';


export class SvcCompareSynchronization implements IEvaServiceDefinition
{
  name = 'CompareSynchronization';
  path = '/message/CompareSynchronization';
  request?: CompareSynchronization;
  response?: CompareSynchronizationResponse;
}

export class SvcCreateSynchronization implements IEvaServiceDefinition
{
  name = 'CreateSynchronization';
  path = '/message/CreateSynchronization';
  request?: CreateSynchronization;
  response?: CreateSynchronizationResponse;
}

export class SvcGetAvailableSynchronizationManagers implements IEvaServiceDefinition
{
  name = 'GetAvailableSynchronizationManagers';
  path = '/message/GetAvailableSynchronizationManagers';
  request?: GetAvailableSynchronizationManagers;
  response?: GetAvailableSynchronizationManagersResponse;
}

export class SvcUploadSynchronization implements IEvaServiceDefinition
{
  name = 'UploadSynchronization';
  path = '/message/UploadSynchronization';
  request?: UploadSynchronization;
  response?: UploadSynchronizationResponse;
}
