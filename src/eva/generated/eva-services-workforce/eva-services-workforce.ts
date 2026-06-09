import {
  RequestMessage,
  ResponseMessage,
  OrganizationUnitsDtoOrganizationUnitDto,
  RequestMessageWithEmptyResponse,
  ResourceResponseMessage,
  PagedResultRequest,
  PagedResultResponse,
  UsersUserDto,
} from '../eva-services-core';


export interface ListLeaveBalancesForUser extends RequestMessage<ListLeaveBalancesForUserResponse> {
  /**
  * Entity type: User
  */
  UserID: number;
}

export interface ListLeaveBalancesForUserResponse extends ResponseMessage {
  Items?: ServicesLeaveListLeaveBalancesForUserResponse_LeaveBalanceDto[];
}

export interface ServicesLeaveListLeaveBalancesForUserResponse_LeaveBalanceDto {
  Balance: number;
  LeaveType?: string;
}

export interface ListAvailabilityForTimeslot extends RequestMessage<ListAvailabilityForTimeslotResponse> {
  EndDateTime: string;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID: number;
  StartDateTime: string;
}

export interface ListAvailabilityForTimeslotResponse extends ResponseMessage {
  Availability?: SharedDtoConsecutiveTimeChunkWithUser[];
}

export interface ListPlanning extends RequestMessage<ListPlanningResponse> {
  EndDate: string;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID?: number;
  StartDate: string;
}

export interface ListPlanningResponse extends ResponseMessage {
  Items?: ServicesListPlanningResponse_Planning[];
}

export interface ServicesListPlanningResponse_Planning {
  DateTime: string;
  OrganizationUnit?: OrganizationUnitsDtoOrganizationUnitDto;
  Result: number;
}

export interface ExportPayrollPeriod extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: PayrollPeriod
  */
  PayrollPeriodID: number;
}

export interface GetPayrollPeriodReport extends RequestMessage<ResourceResponseMessage> {
  /**
  * Entity type: PayrollPeriod
  */
  PayrollPeriodID: number;
}

export interface GetPayrollPeriodWorkedHoursReport extends RequestMessage<ResourceResponseMessage> {
  /**
  * Entity type: PayrollPeriod
  */
  PayrollPeriodID: number;
}

export interface GetSalaryComponentTypes extends RequestMessage<GetSalaryComponentTypesResponse> {
}

export interface GetSalaryComponentTypesResponse extends ResponseMessage {
  Result?: ServicesPayrollPeriodGetSalaryComponentTypesResponse_SalaryComponentTypeDto[];
}

export interface ServicesPayrollPeriodGetSalaryComponentTypesResponse_SalaryComponentTypeDto {
  Code?: string;
  Description?: string;
  ExportNextPeriod: boolean;
  ID: number;
  Name?: string;
}

export interface ListPayrollPeriods extends PagedResultRequest<ListPayrollPeriodsResponse> {
}

export interface ListPayrollPeriodsResponse extends PagedResultResponse<ServicesPayrollPeriodListPayrollPeriodsResponse_PayrollPeriodDto> {
}

export interface ServicesPayrollPeriodListPayrollPeriodsResponse_PayrollPeriodDto {
  EndDate: string;
  ID: number;
  IsExported: boolean;
  PreviousPeriodID?: number;
  StartDate: string;
  Weeks: number;
}

export interface ListSalaryComponents extends PagedResultRequest<ListSalaryComponentsResponse> {
}

export interface ListSalaryComponentsResponse extends PagedResultResponse<ServicesPayrollPeriodListSalaryComponentsResponse_SalaryComponentDto> {
}

export interface ServicesPayrollPeriodListSalaryComponentsResponse_SalaryComponentDto {
  IsExported: boolean;
  Param1?: number;
  Param2?: number;
  Param3?: number;
  PayrollPeriodID: number;
  Reason?: string;
  TypeID: number;
  User?: UsersUserDto;
  UserID: number;
}

export interface RecalculatePayrollPeriod extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: PayrollPeriod
  */
  PayrollPeriodID: number;
}

export interface DeleteRosterItem extends RequestMessageWithEmptyResponse {
  ExpireDate?: string;
  /**
  * Entity type: Roster
  */
  ID: number;
}

/**
* Returns a list of employees with an active Role in the given organization unit
*/
export interface ListEmployeesForOrganizationUnit extends RequestMessage<ListEmployeesForOrganizationUnitResponse> {
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID: number;
  /**
  * Entity type: Role
  */
  RoleIDs?: number[];
}

export interface ListEmployeesForOrganizationUnitResponse extends ResponseMessage {
  Users?: UsersUserDto[];
}

export interface ListOccupiedPeriods extends RequestMessage<ListOccupiedPeriodsResponse> {
  EndDate: string;
  StartDate: string;
  /**
  * Entity type: User
  */
  UserID: number;
}

export interface ListOccupiedPeriodsResponse extends ResponseMessage {
  Absence?: ServicesRosterListOccupiedPeriodsResponse_OccupiedPeriod[];
  Leave?: ServicesRosterListOccupiedPeriodsResponse_OccupiedPeriod[];
}

export interface ServicesRosterListOccupiedPeriodsResponse_OccupiedPeriod {
  EndDate?: string;
  Reason?: string;
  StartDate: string;
  TypeDescription?: string;
}

export interface ListRoster extends RequestMessage<ListRosterResponse> {
  BadgeID?: number;
  EndDate: string;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID?: number;
  StartDate: string;
  Types?: number[];
  /**
  * Entity type: User
  */
  UserID?: number;
}

export interface ListRosterResponse extends ResponseMessage {
  Items?: ServicesRosterListRosterResponse_RosterItem[];
}

export interface ServicesRosterListRosterResponse_RosterItem {
  AllDay: boolean;
  BadgeID?: number;
  Date: string;
  DayOfWeekID?: number;
  Description?: string;
  EndDateTime?: string;
  EndTime?: string;
  FullName?: string;
  ID: number;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID?: number;
  OrganizationUnitName?: string;
  StartDateTime?: string;
  StartTime?: string;
  TypeID: number;
  /**
  * Entity type: User
  */
  UserID?: number;
}

export interface SaveRosterItem extends RequestMessageWithEmptyResponse {
  AllDay?: boolean;
  /**
  * Entity type: Roster
  */
  AvailabilityID?: number;
  Date?: string;
  DayOfWeekID?: number;
  Description?: string;
  EndDateTime?: string;
  /**
  * Entity type: Roster
  */
  ID: number;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID?: number;
  /**
  * Entity type: Roster
  */
  SlotID?: number;
  StartDateTime?: string;
  TypeID?: number;
  /**
  * Entity type: User
  */
  UserID?: number;
}

export interface SharedDtoConsecutiveTimeChunkWithUser {
  Date: string;
  Duration: string;
  EndDateTime: string;
  EndTime: string;
  FullName?: string;
  IsAvailable: boolean;
  StartDateTime: string;
  StartTime: string;
  /**
  * Entity type: User
  */
  UserID: number;
}

