import {
  IEvaServiceDefinition,
  EmptyResponseMessage,
} from '../eva-services-core';

import {
  BuildSheet,
  BuildSheetResult,
  CreateSheet,
  CreateSheetResponse,
  DeleteSheet,
  GetNodeCompletionOptions,
  GetNodeCompletionOptionsResponse,
  GetSheetDocumentation,
  GetSheetDocumentationResponse,
  ListSheetHistory,
  ListSheetHistoryResponse,
  ListSheets,
  ListSheetsResponse,
  ParseSheet,
  ParseSheetResponse,
  PreviewOrderFulfillment,
  PreviewOrderFulfillmentResponse,
  UpdateSheet,
} from './eva-services-symphony';


export class SvcBuildSheet implements IEvaServiceDefinition
{
  name = 'BuildSheet';
  path = '/message/BuildSheet';
  request?: BuildSheet;
  response?: BuildSheetResult;
}

export class SvcCreateSheet implements IEvaServiceDefinition
{
  name = 'CreateSheet';
  path = '/message/CreateSheet';
  request?: CreateSheet;
  response?: CreateSheetResponse;
}

export class SvcDeleteSheet implements IEvaServiceDefinition
{
  name = 'DeleteSheet';
  path = '/message/DeleteSheet';
  request?: DeleteSheet;
  response?: EmptyResponseMessage;
}

export class SvcGetNodeCompletionOptions implements IEvaServiceDefinition
{
  name = 'GetNodeCompletionOptions';
  path = '/message/GetNodeCompletionOptions';
  request?: GetNodeCompletionOptions;
  response?: GetNodeCompletionOptionsResponse;
}

export class SvcGetSheetDocumentation implements IEvaServiceDefinition
{
  name = 'GetSheetDocumentation';
  path = '/message/GetSheetDocumentation';
  request?: GetSheetDocumentation;
  response?: GetSheetDocumentationResponse;
}

export class SvcListSheetHistory implements IEvaServiceDefinition
{
  name = 'ListSheetHistory';
  path = '/message/ListSheetHistory';
  request?: ListSheetHistory;
  response?: ListSheetHistoryResponse;
}

export class SvcListSheets implements IEvaServiceDefinition
{
  name = 'ListSheets';
  path = '/message/ListSheets';
  request?: ListSheets;
  response?: ListSheetsResponse;
}

export class SvcParseSheet implements IEvaServiceDefinition
{
  name = 'ParseSheet';
  path = '/message/ParseSheet';
  request?: ParseSheet;
  response?: ParseSheetResponse;
}

export class SvcPreviewOrderFulfillment implements IEvaServiceDefinition
{
  name = 'PreviewOrderFulfillment';
  path = '/message/PreviewOrderFulfillment';
  request?: PreviewOrderFulfillment;
  response?: PreviewOrderFulfillmentResponse;
}

export class SvcUpdateSheet implements IEvaServiceDefinition
{
  name = 'UpdateSheet';
  path = '/message/UpdateSheet';
  request?: UpdateSheet;
  response?: ParseSheetResponse;
}
