import {
  IEvaServiceDefinition,
  EmptyResponseMessage,
} from '../eva-services-core';

import {
  DataLakeBackfill,
  DataLakeBackfillResponse,
  DataLakeBackfillCancel,
  DataLakeBackfillStatus,
  DataLakeBackfillStatusResponse,
  DataLakePreview,
  DataLakePreviewResponse,
  GetAvailableDataLakeModels,
  GetAvailableDataLakeModelsResponse,
  UpdateDataLakeConfiguration,
} from './eva-services-data-lake';


export class SvcDataLakeBackfill implements IEvaServiceDefinition
{
  name = 'DataLakeBackfill';
  path = '/message/DataLakeBackfill';
  request?: DataLakeBackfill;
  response?: DataLakeBackfillResponse;
}

export class SvcDataLakeBackfillCancel implements IEvaServiceDefinition
{
  name = 'DataLakeBackfillCancel';
  path = '/message/DataLakeBackfillCancel';
  request?: DataLakeBackfillCancel;
  response?: EmptyResponseMessage;
}

export class SvcDataLakeBackfillStatus implements IEvaServiceDefinition
{
  name = 'DataLakeBackfillStatus';
  path = '/message/DataLakeBackfillStatus';
  request?: DataLakeBackfillStatus;
  response?: DataLakeBackfillStatusResponse;
}

export class SvcDataLakePreview implements IEvaServiceDefinition
{
  name = 'DataLakePreview';
  path = '/message/DataLakePreview';
  request?: DataLakePreview;
  response?: DataLakePreviewResponse;
}

export class SvcGetAvailableDataLakeModels implements IEvaServiceDefinition
{
  name = 'GetAvailableDataLakeModels';
  path = '/message/GetAvailableDataLakeModels';
  request?: GetAvailableDataLakeModels;
  response?: GetAvailableDataLakeModelsResponse;
}

export class SvcUpdateDataLakeConfiguration implements IEvaServiceDefinition
{
  name = 'UpdateDataLakeConfiguration';
  path = '/message/UpdateDataLakeConfiguration';
  request?: UpdateDataLakeConfiguration;
  response?: EmptyResponseMessage;
}
