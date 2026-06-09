import {
  IEvaServiceDefinition,
  EmptyResponseMessage,
  ResourceWithBlobIDResponseMessage,
} from '../eva-services-core';

import {
  CreateReplenishmentProduct,
  CreateReplenishmentProductResponse,
  CreateReplenishmentProposal,
  CreateReplenishmentProposalResponse,
  DeleteReplenishmentProduct,
  DownloadReplenishmentProductsExcel,
  DownloadReplenishmentProductsExcel_Async,
  DownloadReplenishmentProductsExcel_AsyncResponse,
  DownloadReplenishmentProductsExcel_AsyncResult,
  EditReplenishmentProduct,
  GetReplenishmentProposal,
  GetReplenishmentProposalResponse,
  GetReplenishmentProposalSources,
  GetReplenishmentProposalSourcesResponse,
  GetReplenishmentProposalStockLabels,
  GetReplenishmentProposalStockLabelsResponse,
  GetReplenishmentProposalTargets,
  GetReplenishmentProposalTargetsResponse,
  ImportReplenishmentProducts,
  ListReplenishmentProducts,
  ListReplenishmentProductsResponse,
  ListReplenishmentProposalResults,
  ListReplenishmentProposalResultsResponse,
  ListReplenishmentProposals,
  ListReplenishmentProposalsResponse,
  RetryReplenishmentProposal,
  UploadReplenishmentProductsExcel,
  UploadReplenishmentProductsExcel_Async,
  UploadReplenishmentProductsExcel_AsyncResponse,
  UploadReplenishmentProductsExcel_AsyncResult,
} from './eva-services-replenishment';


export class SvcCreateReplenishmentProduct implements IEvaServiceDefinition
{
  name = 'CreateReplenishmentProduct';
  path = '/message/CreateReplenishmentProduct';
  request?: CreateReplenishmentProduct;
  response?: CreateReplenishmentProductResponse;
}

export class SvcCreateReplenishmentProposal implements IEvaServiceDefinition
{
  name = 'CreateReplenishmentProposal';
  path = '/message/CreateReplenishmentProposal';
  request?: CreateReplenishmentProposal;
  response?: CreateReplenishmentProposalResponse;
}

export class SvcDeleteReplenishmentProduct implements IEvaServiceDefinition
{
  name = 'DeleteReplenishmentProduct';
  path = '/message/DeleteReplenishmentProduct';
  request?: DeleteReplenishmentProduct;
  response?: EmptyResponseMessage;
}

export class SvcDownloadReplenishmentProductsExcel implements IEvaServiceDefinition
{
  name = 'DownloadReplenishmentProductsExcel';
  path = '/message/DownloadReplenishmentProductsExcel';
  request?: DownloadReplenishmentProductsExcel;
  response?: ResourceWithBlobIDResponseMessage;
}

export class SvcDownloadReplenishmentProductsExcel_Async implements IEvaServiceDefinition
{
  name = 'DownloadReplenishmentProductsExcel_Async';
  path = '/async-message/DownloadReplenishmentProductsExcel';
  request?: DownloadReplenishmentProductsExcel_Async;
  response?: DownloadReplenishmentProductsExcel_AsyncResponse;
}

export class SvcDownloadReplenishmentProductsExcel_AsyncResult implements IEvaServiceDefinition
{
  name = 'DownloadReplenishmentProductsExcel_AsyncResult';
  path = '/async-result/DownloadReplenishmentProductsExcel';
  request?: DownloadReplenishmentProductsExcel_AsyncResult;
  response?: ResourceWithBlobIDResponseMessage;
}

export class SvcEditReplenishmentProduct implements IEvaServiceDefinition
{
  name = 'EditReplenishmentProduct';
  path = '/message/EditReplenishmentProduct';
  request?: EditReplenishmentProduct;
  response?: EmptyResponseMessage;
}

export class SvcGetReplenishmentProposal implements IEvaServiceDefinition
{
  name = 'GetReplenishmentProposal';
  path = '/message/GetReplenishmentProposal';
  request?: GetReplenishmentProposal;
  response?: GetReplenishmentProposalResponse;
}

export class SvcGetReplenishmentProposalSources implements IEvaServiceDefinition
{
  name = 'GetReplenishmentProposalSources';
  path = '/message/GetReplenishmentProposalSources';
  request?: GetReplenishmentProposalSources;
  response?: GetReplenishmentProposalSourcesResponse;
}

export class SvcGetReplenishmentProposalStockLabels implements IEvaServiceDefinition
{
  name = 'GetReplenishmentProposalStockLabels';
  path = '/message/GetReplenishmentProposalStockLabels';
  request?: GetReplenishmentProposalStockLabels;
  response?: GetReplenishmentProposalStockLabelsResponse;
}

export class SvcGetReplenishmentProposalTargets implements IEvaServiceDefinition
{
  name = 'GetReplenishmentProposalTargets';
  path = '/message/GetReplenishmentProposalTargets';
  request?: GetReplenishmentProposalTargets;
  response?: GetReplenishmentProposalTargetsResponse;
}

export class SvcImportReplenishmentProducts implements IEvaServiceDefinition
{
  name = 'ImportReplenishmentProducts';
  path = '/message/ImportReplenishmentProducts';
  request?: ImportReplenishmentProducts;
  response?: EmptyResponseMessage;
}

export class SvcListReplenishmentProducts implements IEvaServiceDefinition
{
  name = 'ListReplenishmentProducts';
  path = '/message/ListReplenishmentProducts';
  request?: ListReplenishmentProducts;
  response?: ListReplenishmentProductsResponse;
}

export class SvcListReplenishmentProposalResults implements IEvaServiceDefinition
{
  name = 'ListReplenishmentProposalResults';
  path = '/message/ListReplenishmentProposalResults';
  request?: ListReplenishmentProposalResults;
  response?: ListReplenishmentProposalResultsResponse;
}

export class SvcListReplenishmentProposals implements IEvaServiceDefinition
{
  name = 'ListReplenishmentProposals';
  path = '/message/ListReplenishmentProposals';
  request?: ListReplenishmentProposals;
  response?: ListReplenishmentProposalsResponse;
}

export class SvcRetryReplenishmentProposal implements IEvaServiceDefinition
{
  name = 'RetryReplenishmentProposal';
  path = '/message/RetryReplenishmentProposal';
  request?: RetryReplenishmentProposal;
  response?: EmptyResponseMessage;
}

export class SvcUploadReplenishmentProductsExcel implements IEvaServiceDefinition
{
  name = 'UploadReplenishmentProductsExcel';
  path = '/message/UploadReplenishmentProductsExcel';
  request?: UploadReplenishmentProductsExcel;
  response?: EmptyResponseMessage;
}

export class SvcUploadReplenishmentProductsExcel_Async implements IEvaServiceDefinition
{
  name = 'UploadReplenishmentProductsExcel_Async';
  path = '/async-message/UploadReplenishmentProductsExcel';
  request?: UploadReplenishmentProductsExcel_Async;
  response?: UploadReplenishmentProductsExcel_AsyncResponse;
}

export class SvcUploadReplenishmentProductsExcel_AsyncResult implements IEvaServiceDefinition
{
  name = 'UploadReplenishmentProductsExcel_AsyncResult';
  path = '/async-result/UploadReplenishmentProductsExcel';
  request?: UploadReplenishmentProductsExcel_AsyncResult;
  response?: EmptyResponseMessage;
}
