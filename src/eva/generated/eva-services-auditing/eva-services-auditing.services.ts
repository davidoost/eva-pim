import {
  IEvaServiceDefinition,
  EmptyResponseMessage,
  ResourceResponseMessage,
} from '../eva-services-core';

import {
  CancelSeries,
  CancelSeriesResponse,
  CreateFinancialPeriodAudit,
  CreateFinancialPeriodAuditResponse,
  CreateFinancialPeriodAuditForOrganizationUnitSet,
  CreateFinancialPeriodAuditForOrganizationUnitSetResponse,
  CreateMonthlyPeriodicReport,
  DecommissionStation,
  GenerateFinancialPeriodAuditExport,
  GetAuditingFieldsForCompany,
  GetAuditingFieldsForCompanyResponse,
  GetAuditingFieldsForOrganizationUnit,
  GetAuditingFieldsForOrganizationUnitResponse,
  GetAuditingSummary,
  GetAuditingSummaryResponse,
  GetFinancialPeriodAuditBlobs,
  GetFinancialPeriodAuditBlobsResponse,
  GetFinancialPeriodAuditOutputTypes,
  GetFinancialPeriodAuditOutputTypesResponse,
  ListSeries,
  ListSeriesResponse,
  PrintControlDocument,
  PrintTerminalReport,
  PrintTerminalReportResponse,
  ProduceReturnReport,
  ReprocessFinancialPeriodAudit,
  SetAuditingFieldsForCompany,
  SetAuditingFieldsForOrganizationUnit,
  SetSeriesSettings,
  ValidateFiscalID,
  ValidateFiscalIDResponse,
} from './eva-services-auditing';


export class SvcCancelSeries implements IEvaServiceDefinition
{
  name = 'CancelSeries';
  path = '/message/CancelSeries';
  request?: CancelSeries;
  response?: CancelSeriesResponse;
}

export class SvcCreateFinancialPeriodAudit implements IEvaServiceDefinition
{
  name = 'CreateFinancialPeriodAudit';
  path = '/message/CreateFinancialPeriodAudit';
  request?: CreateFinancialPeriodAudit;
  response?: CreateFinancialPeriodAuditResponse;
}

export class SvcCreateFinancialPeriodAuditForOrganizationUnitSet implements IEvaServiceDefinition
{
  name = 'CreateFinancialPeriodAuditForOrganizationUnitSet';
  path = '/message/CreateFinancialPeriodAuditForOrganizationUnitSet';
  request?: CreateFinancialPeriodAuditForOrganizationUnitSet;
  response?: CreateFinancialPeriodAuditForOrganizationUnitSetResponse;
}

export class SvcCreateMonthlyPeriodicReport implements IEvaServiceDefinition
{
  name = 'CreateMonthlyPeriodicReport';
  path = '/message/CreateMonthlyPeriodicReport';
  request?: CreateMonthlyPeriodicReport;
  response?: EmptyResponseMessage;
}

export class SvcDecommissionStation implements IEvaServiceDefinition
{
  name = 'DecommissionStation';
  path = '/message/DecommissionStation';
  request?: DecommissionStation;
  response?: EmptyResponseMessage;
}

export class SvcGenerateFinancialPeriodAuditExport implements IEvaServiceDefinition
{
  name = 'GenerateFinancialPeriodAuditExport';
  path = '/message/GenerateFinancialPeriodAuditExport';
  request?: GenerateFinancialPeriodAuditExport;
  response?: EmptyResponseMessage;
}

export class SvcGetAuditingFieldsForCompany implements IEvaServiceDefinition
{
  name = 'GetAuditingFieldsForCompany';
  path = '/message/GetAuditingFieldsForCompany';
  request?: GetAuditingFieldsForCompany;
  response?: GetAuditingFieldsForCompanyResponse;
}

export class SvcGetAuditingFieldsForOrganizationUnit implements IEvaServiceDefinition
{
  name = 'GetAuditingFieldsForOrganizationUnit';
  path = '/message/GetAuditingFieldsForOrganizationUnit';
  request?: GetAuditingFieldsForOrganizationUnit;
  response?: GetAuditingFieldsForOrganizationUnitResponse;
}

export class SvcGetAuditingSummary implements IEvaServiceDefinition
{
  name = 'GetAuditingSummary';
  path = '/message/GetAuditingSummary';
  request?: GetAuditingSummary;
  response?: GetAuditingSummaryResponse;
}

export class SvcGetFinancialPeriodAuditBlobs implements IEvaServiceDefinition
{
  name = 'GetFinancialPeriodAuditBlobs';
  path = '/message/GetFinancialPeriodAuditBlobs';
  request?: GetFinancialPeriodAuditBlobs;
  response?: GetFinancialPeriodAuditBlobsResponse;
}

export class SvcGetFinancialPeriodAuditOutputTypes implements IEvaServiceDefinition
{
  name = 'GetFinancialPeriodAuditOutputTypes';
  path = '/message/GetFinancialPeriodAuditOutputTypes';
  request?: GetFinancialPeriodAuditOutputTypes;
  response?: GetFinancialPeriodAuditOutputTypesResponse;
}

export class SvcListSeries implements IEvaServiceDefinition
{
  name = 'ListSeries';
  path = '/message/ListSeries';
  request?: ListSeries;
  response?: ListSeriesResponse;
}

export class SvcPrintControlDocument implements IEvaServiceDefinition
{
  name = 'PrintControlDocument';
  path = '/message/PrintControlDocument';
  request?: PrintControlDocument;
  response?: EmptyResponseMessage;
}

export class SvcPrintTerminalReport implements IEvaServiceDefinition
{
  name = 'PrintTerminalReport';
  path = '/message/PrintTerminalReport';
  request?: PrintTerminalReport;
  response?: PrintTerminalReportResponse;
}

export class SvcProduceReturnReport implements IEvaServiceDefinition
{
  name = 'ProduceReturnReport';
  path = '/message/ProduceReturnReport';
  request?: ProduceReturnReport;
  response?: ResourceResponseMessage;
}

export class SvcReprocessFinancialPeriodAudit implements IEvaServiceDefinition
{
  name = 'ReprocessFinancialPeriodAudit';
  path = '/message/ReprocessFinancialPeriodAudit';
  request?: ReprocessFinancialPeriodAudit;
  response?: EmptyResponseMessage;
}

export class SvcSetAuditingFieldsForCompany implements IEvaServiceDefinition
{
  name = 'SetAuditingFieldsForCompany';
  path = '/message/SetAuditingFieldsForCompany';
  request?: SetAuditingFieldsForCompany;
  response?: EmptyResponseMessage;
}

export class SvcSetAuditingFieldsForOrganizationUnit implements IEvaServiceDefinition
{
  name = 'SetAuditingFieldsForOrganizationUnit';
  path = '/message/SetAuditingFieldsForOrganizationUnit';
  request?: SetAuditingFieldsForOrganizationUnit;
  response?: EmptyResponseMessage;
}

export class SvcSetSeriesSettings implements IEvaServiceDefinition
{
  name = 'SetSeriesSettings';
  path = '/message/SetSeriesSettings';
  request?: SetSeriesSettings;
  response?: EmptyResponseMessage;
}

export class SvcValidateFiscalID implements IEvaServiceDefinition
{
  name = 'ValidateFiscalID';
  path = '/message/ValidateFiscalID';
  request?: ValidateFiscalID;
  response?: ValidateFiscalIDResponse;
}
