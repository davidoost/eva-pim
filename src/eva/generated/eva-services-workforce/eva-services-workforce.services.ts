import {
  IEvaServiceDefinition,
  EmptyResponseMessage,
  ResourceResponseMessage,
} from '../eva-services-core';

import {
  DeleteRosterItem,
  ExportPayrollPeriod,
  GetPayrollPeriodReport,
  GetPayrollPeriodWorkedHoursReport,
  GetSalaryComponentTypes,
  GetSalaryComponentTypesResponse,
  ListAvailabilityForTimeslot,
  ListAvailabilityForTimeslotResponse,
  ListEmployeesForOrganizationUnit,
  ListEmployeesForOrganizationUnitResponse,
  ListLeaveBalancesForUser,
  ListLeaveBalancesForUserResponse,
  ListOccupiedPeriods,
  ListOccupiedPeriodsResponse,
  ListPayrollPeriods,
  ListPayrollPeriodsResponse,
  ListPlanning,
  ListPlanningResponse,
  ListRoster,
  ListRosterResponse,
  ListSalaryComponents,
  ListSalaryComponentsResponse,
  RecalculatePayrollPeriod,
  SaveRosterItem,
} from './eva-services-workforce';


export class SvcDeleteRosterItem implements IEvaServiceDefinition
{
  name = 'DeleteRosterItem';
  path = '/message/DeleteRosterItem';
  request?: DeleteRosterItem;
  response?: EmptyResponseMessage;
}

export class SvcExportPayrollPeriod implements IEvaServiceDefinition
{
  name = 'ExportPayrollPeriod';
  path = '/message/ExportPayrollPeriod';
  request?: ExportPayrollPeriod;
  response?: EmptyResponseMessage;
}

export class SvcGetPayrollPeriodReport implements IEvaServiceDefinition
{
  name = 'GetPayrollPeriodReport';
  path = '/message/GetPayrollPeriodReport';
  request?: GetPayrollPeriodReport;
  response?: ResourceResponseMessage;
}

export class SvcGetPayrollPeriodWorkedHoursReport implements IEvaServiceDefinition
{
  name = 'GetPayrollPeriodWorkedHoursReport';
  path = '/message/GetPayrollPeriodWorkedHoursReport';
  request?: GetPayrollPeriodWorkedHoursReport;
  response?: ResourceResponseMessage;
}

export class SvcGetSalaryComponentTypes implements IEvaServiceDefinition
{
  name = 'GetSalaryComponentTypes';
  path = '/message/GetSalaryComponentTypes';
  request?: GetSalaryComponentTypes;
  response?: GetSalaryComponentTypesResponse;
}

export class SvcListAvailabilityForTimeslot implements IEvaServiceDefinition
{
  name = 'ListAvailabilityForTimeslot';
  path = '/message/ListAvailabilityForTimeslot';
  request?: ListAvailabilityForTimeslot;
  response?: ListAvailabilityForTimeslotResponse;
}

export class SvcListEmployeesForOrganizationUnit implements IEvaServiceDefinition
{
  name = 'ListEmployeesForOrganizationUnit';
  path = '/message/ListEmployeesForOrganizationUnit';
  request?: ListEmployeesForOrganizationUnit;
  response?: ListEmployeesForOrganizationUnitResponse;
}

export class SvcListLeaveBalancesForUser implements IEvaServiceDefinition
{
  name = 'ListLeaveBalancesForUser';
  path = '/message/ListLeaveBalancesForUser';
  request?: ListLeaveBalancesForUser;
  response?: ListLeaveBalancesForUserResponse;
}

export class SvcListOccupiedPeriods implements IEvaServiceDefinition
{
  name = 'ListOccupiedPeriods';
  path = '/message/ListOccupiedPeriods';
  request?: ListOccupiedPeriods;
  response?: ListOccupiedPeriodsResponse;
}

export class SvcListPayrollPeriods implements IEvaServiceDefinition
{
  name = 'ListPayrollPeriods';
  path = '/message/ListPayrollPeriods';
  request?: ListPayrollPeriods;
  response?: ListPayrollPeriodsResponse;
}

export class SvcListPlanning implements IEvaServiceDefinition
{
  name = 'ListPlanning';
  path = '/message/ListPlanning';
  request?: ListPlanning;
  response?: ListPlanningResponse;
}

export class SvcListRoster implements IEvaServiceDefinition
{
  name = 'ListRoster';
  path = '/message/ListRoster';
  request?: ListRoster;
  response?: ListRosterResponse;
}

export class SvcListSalaryComponents implements IEvaServiceDefinition
{
  name = 'ListSalaryComponents';
  path = '/message/ListSalaryComponents';
  request?: ListSalaryComponents;
  response?: ListSalaryComponentsResponse;
}

export class SvcRecalculatePayrollPeriod implements IEvaServiceDefinition
{
  name = 'RecalculatePayrollPeriod';
  path = '/message/RecalculatePayrollPeriod';
  request?: RecalculatePayrollPeriod;
  response?: EmptyResponseMessage;
}

export class SvcSaveRosterItem implements IEvaServiceDefinition
{
  name = 'SaveRosterItem';
  path = '/message/SaveRosterItem';
  request?: SaveRosterItem;
  response?: EmptyResponseMessage;
}
