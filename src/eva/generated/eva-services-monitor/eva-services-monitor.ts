import {
  TAnyValue,
  ConfigurationSecurityRecommendationLevel,
  DataModelsPaymentTransactionSettlementFileStatus,
  RequestMessage,
  ResponseMessage,
  RequestMessageWithEmptyResponse,
  RequestMessageWithResourceWithBlobIDResponse,
  PagedRequestMessage,
  PagedResponseMessage,
} from '../eva-services-core';


export enum Errors
{
  /**
  * You are not allowed to edit this monitor.
  */
  Monitors_NotAllowedToEditMonitor = 'Monitors:NotAllowedToEditMonitor',
  /**
  * This handler does not support conditions.
  */
  Monitors_HandlerDoesNotSupportConditions = 'Monitors:HandlerDoesNotSupportConditions',
  /**
  * The handler with name {0:string} does not exist
  */
  Monitors_InvalidHandler = 'Monitors:InvalidHandler',
  /**
  * An unknown error occurred while executing this monitor
  */
  Monitors_UnknownError = 'Monitors:UnknownError',
  /**
  * You are not authorized to view monitor results for this organization unit.
  */
  Monitors_NotAuthorizedForOrganizationUnit = 'Monitors:NotAuthorizedForOrganizationUnit',
}
export enum DataModelsMonitorLevel {
  Info = 0,
  Warning = 1,
  Error = 2,
  Fatal = 3,
}

export interface MonitorHandlersEventExportsEventExportsMonitorData {
  MainConditionGroup?: MonitorHandlersEventExportsEventExportsMonitorData_EventExportConditionGroup;
}

export interface MonitorHandlersEventExportsEventExportsMonitorData_EventExportCondition {
  Field?: MonitorHandlersEventExportsEventExportsMonitorData_EventExportField;
  Value?: string;
  ValueOperator?: MonitorHandlersEventExportsEventExportsMonitorData_EventExportValueOperator;
}

export interface MonitorHandlersEventExportsEventExportsMonitorData_EventExportConditionGroup {
  Conditions?: MonitorHandlersEventExportsEventExportsMonitorData_EventExportCondition[];
  Groups?: MonitorHandlersEventExportsEventExportsMonitorData_EventExportConditionGroup[];
  MatchAny?: boolean;
}

export enum MonitorHandlersEventExportsEventExportsMonitorData_EventExportField {
  Type = 0,
  EventTargetID = 1,
  ResultID = 2,
  DaysOld = 3,
}

export enum MonitorHandlersEventExportsEventExportsMonitorData_EventExportValueOperator {
  Equals = 0,
  NotEquals = 1,
  LessThan = 2,
  GreaterThan = 3,
  Contains = 7,
  DoesNotContain = 8,
}

export interface MonitorHandlersEventExportsEventExportsMonitorResultData {
  Events?: MonitorHandlersEventExportsEventExportsMonitorResultData_EventDetails[];
}

export interface MonitorHandlersEventExportsEventExportsMonitorResultData_EventDetails {
  AdditionalData?: string;
  EventTargetID: number;
  EventType?: string;
  /**
  * Entity type: EventExport
  */
  ID: number;
  /**
  * Entity type: Order
  */
  OrderID: number;
  ResultID: number;
}

export interface MonitorHandlersFinancialPeriodsFinancialPeriodMonitorResultData {
  Count: number;
}

export interface MonitorHandlersIMonitorData {
}

export interface MonitorHandlersIMonitorResultData {
}

export interface MonitorHandlersKSeFKSeFMonitorData {
  LookbackDays?: number;
}

export interface MonitorHandlersKSeFKSeFMonitorResultData {
  Failures?: MonitorHandlersKSeFKSeFMonitorResultData_KSeFExportFailure[];
}

export interface MonitorHandlersKSeFKSeFMonitorResultData_KSeFExportFailure {
  CreationTime: string;
  ExternalStatus?: string;
  /**
  * Entity type: InvoiceExport
  */
  InvoiceExportID: number;
  /**
  * Entity type: Invoice
  */
  InvoiceID: number;
  LastErrorCode?: string;
  LastErrorDescription?: string;
  LastErrorTimestamp?: string;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID: number;
}

export interface MonitorHandlersOrdersOrdersMonitorData {
  MainConditionGroup?: MonitorHandlersOrdersOrdersMonitorData_OrderConditionGroup;
}

export interface MonitorHandlersOrdersOrdersMonitorData_OrderCondition {
  Field?: MonitorHandlersOrdersOrdersMonitorData_OrderConditionField;
  Value?: string;
  ValueOperator?: MonitorHandlersOrdersOrdersMonitorData_OrderConditionValueOperator;
}

export enum MonitorHandlersOrdersOrdersMonitorData_OrderConditionField {
  CreatedDaysAgo = 0,
  OpenAmountInTax = 1,
  IsShipped = 2,
  IsPlaced = 3,
  IsConfirmed = 4,
  IsCompleted = 5,
  IsCaptured = 6,
  IsSuspended = 7,
  HasShipLines = 8,
  HasDeliveryLines = 9,
  HasReserveLines = 10,
  HasOrderLines = 11,
  ShipToOrganizationUnitID = 12,
  ShipToOrganizationUnitIDOrChildOf = 13,
  SoldFromOrganizationUnitID = 14,
  SoldFromOrganizationUnitIDOrChildOf = 15,
  SoldToOrganizationUnitID = 16,
  SoldToOrganizationUnitIDOrChildOf = 17,
  OriginatingOrganizationUnitID = 18,
  OriginatingOrganizationUnitIDOrChildOf = 19,
  LastModificationTime = 20,
  CreationTime = 21,
  RequestedDate = 22,
  ShipmentDate = 23,
  ConfirmationDate = 24,
  MinExpectedAvailabilityDate = 25,
  MaxExpectedAvailabilityDate = 26,
  LastModifiedDaysAgo = 27,
  RequestedDaysAgo = 28,
  ShipmentDateDaysAgo = 29,
  ConfirmationDateDaysAgo = 30,
  MinExpectedAvailabilityDateDaysAgo = 31,
  MaxExpectedAvailabilityDateDaysAgo = 32,
  IsPaid = 33,
  Properties = 34,
  PendingOpenAmountInTax = 35,
  ID = 36,
  HasPreSaleLines = 37,
}

export interface MonitorHandlersOrdersOrdersMonitorData_OrderConditionGroup {
  Conditions?: MonitorHandlersOrdersOrdersMonitorData_OrderCondition[];
  Groups?: MonitorHandlersOrdersOrdersMonitorData_OrderConditionGroup[];
  MatchAny?: boolean;
}

export enum MonitorHandlersOrdersOrdersMonitorData_OrderConditionValueOperator {
  Equals = 0,
  NotEquals = 1,
  LessThan = 2,
  GreaterThan = 3,
  GreaterThanOrEqualTo = 4,
  LessThanOrEqualTo = 5,
  Contains = 6,
  DoesNotContain = 7,
  StartsWith = 8,
  DoesNotStartWith = 9,
  EndsWith = 10,
  DoesNotEndWith = 11,
  HasValue = 12,
  DoesntHaveValue = 13,
}

export interface MonitorHandlersOrdersOrdersMonitorResultData {
  Orders?: MonitorHandlersOrdersOrdersMonitorResultData_OrderDetails[];
}

export interface MonitorHandlersOrdersOrdersMonitorResultData_OrderDetails {
  CreationTime: string;
  /**
  * Entity type: Currency
  */
  CurrencyID?: string;
  DisplayID?: string;
  /**
  * Entity type: Order
  */
  ID: number;
  SoldFromOrganizationUnit?: MonitorHandlersOrdersOrdersMonitorResultData_OrderDetails_OrganizationUnitData;
  TotalAmountInTax: number;
  Type?: string;
}

export interface MonitorHandlersOrdersOrdersMonitorResultData_OrderDetails_OrganizationUnitData {
  /**
  * Entity type: OrganizationUnit
  */
  ID: number;
  Name?: string;
}

export interface MonitorHandlersOrganizationUnitsOrganizationUnitsMonitorData {
  MainConditionGroup?: MonitorHandlersOrganizationUnitsOrganizationUnitsMonitorData_OrganizationUnitConditionGroup;
}

export interface MonitorHandlersOrganizationUnitsOrganizationUnitsMonitorData_OrganizationUnitCondition {
  Field?: MonitorHandlersOrganizationUnitsOrganizationUnitsMonitorData_OrganizationUnitConditionField;
  Value?: string;
  ValueOperator?: MonitorHandlersOrganizationUnitsOrganizationUnitsMonitorData_OrganizationUnitConditionValueOperator;
}

export enum MonitorHandlersOrganizationUnitsOrganizationUnitsMonitorData_OrganizationUnitConditionField {
  Name = 0,
  StatusID = 1,
  AssortmentID = 2,
  CompanyID = 3,
  TypeID = 4,
}

export interface MonitorHandlersOrganizationUnitsOrganizationUnitsMonitorData_OrganizationUnitConditionGroup {
  Conditions?: MonitorHandlersOrganizationUnitsOrganizationUnitsMonitorData_OrganizationUnitCondition[];
  Groups?: MonitorHandlersOrganizationUnitsOrganizationUnitsMonitorData_OrganizationUnitConditionGroup[];
  MatchAny?: boolean;
}

export enum MonitorHandlersOrganizationUnitsOrganizationUnitsMonitorData_OrganizationUnitConditionValueOperator {
  Equals = 0,
  NotEquals = 1,
  LessThan = 2,
  GreaterThan = 5,
  Contains = 7,
  DoesNotContain = 8,
  StartsWith = 9,
  DoesNotStartWith = 10,
  EndsWith = 11,
  DoesNotEndWith = 12,
  EqualsNull = 13,
  NotEqualsNull = 14,
}

export interface MonitorHandlersOrganizationUnitsOrganizationUnitsMonitorResultData {
  OrganizationUnits?: MonitorHandlersOrganizationUnitsOrganizationUnitsMonitorResultData_OrganizationUnitDetails[];
}

export interface MonitorHandlersOrganizationUnitsOrganizationUnitsMonitorResultData_OrganizationUnitDetails {
  /**
  * Entity type: OrganizationUnit
  */
  ID: number;
  Name?: string;
}

export interface MonitorHandlersProductSearchesProductSearchMonitorData {
  /**
  * Entity type: ProductSearchTemplate
  */
  ProductSearchTemplateID: number;
}

export interface MonitorHandlersProductSearchesProductSearchMonitorResultData {
  CurrentCount: number;
  Deviation: number;
  /**
  * Entity type: ProductSearchTemplate
  */
  ID: number;
  LastCount: number;
  LastRefreshTime?: string;
  Name?: string;
}

export interface MonitorHandlersScriptedOrdersScriptedOrdersMonitorResultData {
  Count: number;
}

export interface MonitorHandlersSettingDeprecationsSettingDeprecationsMonitorResultData {
  Deprecations?: MonitorHandlersSettingDeprecationsSettingDeprecationsMonitorResultData_DeprecatedSettingInfo[];
}

export interface MonitorHandlersSettingDeprecationsSettingDeprecationsMonitorResultData_DeprecatedSettingInfo {
  Description?: string;
  DesiredValue?: string;
  Key?: string;
  OrganizationUnit?: MonitorHandlersSettingDeprecationsSettingDeprecationsMonitorResultData_DeprecatedSettingInfo_OrganizationUnitData;
  Value?: TAnyValue;
}

export interface MonitorHandlersSettingDeprecationsSettingDeprecationsMonitorResultData_DeprecatedSettingInfo_OrganizationUnitData {
  /**
  * Entity type: OrganizationUnit
  */
  ID: number;
  Name?: string;
}

export interface MonitorHandlersSettingVulnerabilitiesSettingVulnerabilitiesMonitorResultData {
  Vulnerabilities?: MonitorHandlersSettingVulnerabilitiesSettingVulnerabilitiesMonitorResultData_VulnerableSettingInfo[];
}

export interface MonitorHandlersSettingVulnerabilitiesSettingVulnerabilitiesMonitorResultData_VulnerableSettingInfo {
  CheckValue?: TAnyValue;
  CheckWhen?: string;
  Key?: string;
  Level: ConfigurationSecurityRecommendationLevel;
  OrganizationUnit?: MonitorHandlersSettingVulnerabilitiesSettingVulnerabilitiesMonitorResultData_VulnerableSettingInfo_OrganizationUnitData;
  Value?: TAnyValue;
}

export interface MonitorHandlersSettingVulnerabilitiesSettingVulnerabilitiesMonitorResultData_VulnerableSettingInfo_OrganizationUnitData {
  /**
  * Entity type: OrganizationUnit
  */
  ID: number;
  Name?: string;
}

export interface MonitorHandlersSettlementFilesSettlementFilesMonitorData {
  MainConditionGroup?: MonitorHandlersSettlementFilesSettlementFilesMonitorData_FileConditionGroup;
}

export interface MonitorHandlersSettlementFilesSettlementFilesMonitorData_FileCondition {
  Field?: MonitorHandlersSettlementFilesSettlementFilesMonitorData_FileConditionField;
  Value?: string;
  ValueOperator?: MonitorHandlersSettlementFilesSettlementFilesMonitorData_FileConditionValueOperator;
}

export enum MonitorHandlersSettlementFilesSettlementFilesMonitorData_FileConditionField {
  Handler = 1,
  Status = 2,
  DaysOld = 3,
}

export interface MonitorHandlersSettlementFilesSettlementFilesMonitorData_FileConditionGroup {
  Conditions?: MonitorHandlersSettlementFilesSettlementFilesMonitorData_FileCondition[];
  Groups?: MonitorHandlersSettlementFilesSettlementFilesMonitorData_FileConditionGroup[];
  MatchAny?: boolean;
}

export enum MonitorHandlersSettlementFilesSettlementFilesMonitorData_FileConditionValueOperator {
  Equals = 0,
  NotEquals = 1,
  LessThan = 2,
  GreaterThan = 5,
}

export interface MonitorHandlersSettlementFilesSettlementFilesMonitorResultData {
  Files?: MonitorHandlersSettlementFilesSettlementFilesMonitorResultData_FileDetails[];
}

export interface MonitorHandlersSettlementFilesSettlementFilesMonitorResultData_FileDetails {
  Handler?: string;
  /**
  * Entity type: PaymentTransactionSettlementFile
  */
  ID: number;
  Name?: string;
  Status: DataModelsPaymentTransactionSettlementFileStatus;
  Timestamp: string;
}

export interface MonitorHandlersTransputJobsTransputJobsMonitorData {
  MainConditionGroup?: MonitorHandlersTransputJobsTransputJobsMonitorData_JobConditionGroup;
}

export interface MonitorHandlersTransputJobsTransputJobsMonitorData_JobCondition {
  Field?: MonitorHandlersTransputJobsTransputJobsMonitorData_JobConditionField;
  Value?: string;
  ValueOperator?: MonitorHandlersTransputJobsTransputJobsMonitorData_JobConditionValueOperator;
}

export enum MonitorHandlersTransputJobsTransputJobsMonitorData_JobConditionField {
  Name = 0,
  TypeID = 1,
  StatusID = 2,
  DaysOld = 3,
}

export interface MonitorHandlersTransputJobsTransputJobsMonitorData_JobConditionGroup {
  Conditions?: MonitorHandlersTransputJobsTransputJobsMonitorData_JobCondition[];
  Groups?: MonitorHandlersTransputJobsTransputJobsMonitorData_JobConditionGroup[];
  MatchAny?: boolean;
}

export enum MonitorHandlersTransputJobsTransputJobsMonitorData_JobConditionValueOperator {
  Equals = 0,
  NotEquals = 1,
  LessThan = 2,
  GreaterThan = 5,
  Contains = 7,
  DoesNotContain = 8,
  StartsWith = 9,
  DoesNotStartWith = 10,
  EndsWith = 11,
  DoesNotEndWith = 12,
  EqualsNull = 13,
  NotEqualsNull = 14,
}

export interface MonitorHandlersTransputJobsTransputJobsMonitorResultData {
  Jobs?: MonitorHandlersTransputJobsTransputJobsMonitorResultData_JobDetails[];
}

export interface MonitorHandlersTransputJobsTransputJobsMonitorResultData_JobDetails {
  FinancialPeriodExport?: MonitorHandlersTransputJobsTransputJobsMonitorResultData_JobDetails_ExportDetails;
  /**
  * Entity type: TransputJob
  */
  ID: number;
  Identifier?: string;
  InvoiceExport?: MonitorHandlersTransputJobsTransputJobsMonitorResultData_JobDetails_ExportDetails;
  Name?: string;
  OrderExport?: MonitorHandlersTransputJobsTransputJobsMonitorResultData_JobDetails_ExportDetails;
  ShipmentExport?: MonitorHandlersTransputJobsTransputJobsMonitorResultData_JobDetails_ExportDetails;
  StatusID: number;
  /**
  * Entity type: TransputJobType
  */
  TypeID: number;
}

export interface MonitorHandlersTransputJobsTransputJobsMonitorResultData_JobDetails_ExportDetails {
  ID: number;
  Name?: string;
}

export interface MonitorHandlersValidateAuditingConfigurationValidateAuditingConfigurationMonitorResultData {
  Results?: MonitorHandlersValidateAuditingConfigurationValidateAuditingConfigurationMonitorResultData_OrganizationUnitResults[];
}

export interface MonitorHandlersValidateAuditingConfigurationValidateAuditingConfigurationMonitorResultData_OrganizationUnitResults {
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID: number;
  OrganizationUnitName?: string;
  Results?: string[];
}

export interface MonitorHandlersWatchtowersWatchtowersMonitorResultData {
  Count: number;
}

export interface RepositoriesListScriptedMonitorResultFilter {
  /**
  * Entity type: Monitor
  */
  MonitorID: number;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitIDs?: number[];
}

/**
* Creates a monitor. See documentation for handler arguments.
*/
export interface CreateMonitor extends RequestMessage<CreateMonitorResponse> {
  Cron?: string;
  Data?: MonitorHandlersTransputJobsTransputJobsMonitorData | MonitorHandlersSettlementFilesSettlementFilesMonitorData | MonitorHandlersProductSearchesProductSearchMonitorData | MonitorHandlersOrganizationUnitsOrganizationUnitsMonitorData | MonitorHandlersOrdersOrdersMonitorData | MonitorHandlersKSeFKSeFMonitorData | MonitorHandlersEventExportsEventExportsMonitorData;
  DefaultLevel?: DataModelsMonitorLevel;
  Description?: string;
  Handler: 'Watchtowers' | 'ValidateAuditingConfiguration' | 'TransputJobs' | 'PaymentSettlementFiles' | 'SettingVulnerabilities' | 'SettingDeprecations' | 'ScriptedOrders' | 'ProductSearch' | 'OrganizationUnits' | 'Orders' | 'KSeF' | 'FinancialPeriod' | 'EventExports' | 'ReplenishmentProposals';
  Name: string;
  /**
  * Entity type: Script
  */
  ScriptID?: number;
}

export interface CreateMonitorResponse extends ResponseMessage {
  /**
  * Entity type: Monitor
  */
  ID: number;
}

export interface ServicesDataNotificationDetails {
  Description?: string;
  /**
  * Entity type: MonitorNotification
  */
  ID: number;
  Inverse: boolean;
  Level: DataModelsMonitorLevel;
  Threshold: number;
}

/**
* Deletes a monitor.
*/
export interface DeleteMonitor extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: Monitor
  */
  ID: number;
}

/**
* Download the last monitor results as excel
*/
export interface DownloadMonitorResult extends RequestMessageWithResourceWithBlobIDResponse {
  /**
  * Entity type: Monitor
  */
  MonitorID: number;
}

/**
* Get available conditions for monitors.
*/
export interface GetAvailableConditionsForMonitorHandler extends RequestMessage<GetAvailableConditionsForMonitorHandlerResponse> {
  Handler: 'Watchtowers' | 'ValidateAuditingConfiguration' | 'TransputJobs' | 'PaymentSettlementFiles' | 'SettingVulnerabilities' | 'SettingDeprecations' | 'ScriptedOrders' | 'ProductSearch' | 'OrganizationUnits' | 'Orders' | 'KSeF' | 'FinancialPeriod' | 'EventExports' | 'ReplenishmentProposals';
}

export interface GetAvailableConditionsForMonitorHandlerResponse extends ResponseMessage {
  AvailableConditions?: ServicesGetAvailableConditionsForMonitorHandlerResponse_AvailableCondition[];
}

export interface ServicesGetAvailableConditionsForMonitorHandlerResponse_AvailableCondition {
  Name: string;
  ValueOperators?: string[];
}

/**
* Returns available monitor handlers.
*/
export interface GetAvailableMonitorHandlers extends RequestMessage<GetAvailableMonitorHandlersResponse> {
}

export interface GetAvailableMonitorHandlersResponse extends ResponseMessage {
  Handlers: ServicesGetAvailableMonitorHandlersResponse_AvailableHandler[];
}

export interface ServicesGetAvailableMonitorHandlersResponse_AvailableHandler {
  Name: string;
  ScriptingExtensionType?: string;
  SupportsConditions: boolean;
}

/**
* Gets Monitor by ID and returns basic information
*/
export interface GetMonitor extends RequestMessage<GetMonitorResponse> {
  /**
  * Entity type: Monitor
  */
  ID: number;
}

export interface GetMonitorResponse extends ResponseMessage {
  ConfiguredNotifications?: ServicesDataNotificationDetails[];
  CreationTime: string;
  Data?: MonitorHandlersTransputJobsTransputJobsMonitorData | MonitorHandlersSettlementFilesSettlementFilesMonitorData | MonitorHandlersProductSearchesProductSearchMonitorData | MonitorHandlersOrganizationUnitsOrganizationUnitsMonitorData | MonitorHandlersOrdersOrdersMonitorData | MonitorHandlersKSeFKSeFMonitorData | MonitorHandlersEventExportsEventExportsMonitorData;
  DefaultLevel: DataModelsMonitorLevel;
  Description?: string;
  Handler: string;
  /**
  * Entity type: Monitor
  */
  ID: number;
  IsAllowedToEdit: boolean;
  IsDefaultMonitor: boolean;
  LastNotification?: ServicesDataNotificationDetails;
  LastNotificationDate?: string;
  Name: string;
  RoleOwners?: ServicesGetMonitorResponse_RoleOwnerData[];
  /**
  * Entity type: Script
  */
  ScriptID?: number;
  ScriptingExtensionType?: string;
  UserOwners?: ServicesGetMonitorResponse_UserOwnerData[];
}

export interface ServicesGetMonitorResponse_RoleOwnerData {
  IsAllowedToEdit: boolean;
  Name?: string;
  /**
  * Entity type: Role
  */
  RoleID: number;
}

export interface ServicesGetMonitorResponse_UserOwnerData {
  IsAllowedToEdit: boolean;
  Name?: string;
  /**
  * Entity type: User
  */
  UserID: number;
}

/**
* Gets the last result of a monitor.
*/
export interface GetMonitorResult extends RequestMessage<GetMonitorResultResponse> {
  /**
  * Entity type: Monitor
  */
  ID: number;
}

export interface GetMonitorResultResponse extends ResponseMessage {
  DefaultLevel: DataModelsMonitorLevel;
  Description?: string;
  Handler: string;
  /**
  * Entity type: Monitor
  */
  ID: number;
  IsDefaultMonitor: boolean;
  LastNotification?: ServicesDataNotificationDetails;
  LastNotificationDate?: string;
  LastResult?: MonitorHandlersWatchtowersWatchtowersMonitorResultData | MonitorHandlersValidateAuditingConfigurationValidateAuditingConfigurationMonitorResultData | MonitorHandlersTransputJobsTransputJobsMonitorResultData | MonitorHandlersSettlementFilesSettlementFilesMonitorResultData | MonitorHandlersSettingVulnerabilitiesSettingVulnerabilitiesMonitorResultData | MonitorHandlersSettingDeprecationsSettingDeprecationsMonitorResultData | MonitorHandlersScriptedOrdersScriptedOrdersMonitorResultData | MonitorHandlersProductSearchesProductSearchMonitorResultData | MonitorHandlersOrganizationUnitsOrganizationUnitsMonitorResultData | MonitorHandlersOrdersOrdersMonitorResultData | MonitorHandlersKSeFKSeFMonitorResultData | MonitorHandlersFinancialPeriodsFinancialPeriodMonitorResultData | MonitorHandlersEventExportsEventExportsMonitorResultData;
  LastResultCount?: number;
  LastRun?: string;
  Name: string;
}

/**
* Gets all visible monitors by current user.
*/
export interface GetUserMonitors extends RequestMessage<GetUserMonitorsResponse> {
  Handler?: string;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitIDs?: number[];
}

export interface GetUserMonitorsResponse extends ResponseMessage {
  Monitors: ServicesGetUserMonitorsResponse_UserMonitor[];
}

export interface ServicesGetUserMonitorsResponse_UserMonitor {
  DefaultLevel: DataModelsMonitorLevel;
  Description?: string;
  Handler: string;
  /**
  * Entity type: Monitor
  */
  ID: number;
  IsAllowedToEdit: boolean;
  IsDefaultMonitor: boolean;
  LastNotification?: ServicesDataNotificationDetails;
  LastNotificationDate?: string;
  LastResultCount?: number;
  LastRun?: string;
  Name: string;
}

/**
* Gets the last result of a monitor.
*/
export interface ListScriptedMonitorResults extends PagedRequestMessage<RepositoriesListScriptedMonitorResultFilter, ListScriptedMonitorResultsResponse> {
}

export interface ListScriptedMonitorResultsResponse extends PagedResponseMessage<ServicesListScriptedMonitorResultsResponse_ResultItem> {
}

export interface ServicesListScriptedMonitorResultsResponse_ResultItem {
  Data: TAnyValue;
  DataModelID: string;
}

/**
* Creates a monitor Notification.
*/
export interface CreateMonitorNotification extends RequestMessage<CreateMonitorNotificationResponse> {
  Description?: string;
  EmailRecipients?: ServicesNotificationsCreateMonitorNotification_EmailRecipientData[];
  EmailSubject?: string;
  Inverse?: boolean;
  Level?: DataModelsMonitorLevel;
  /**
  * Entity type: Monitor
  */
  MonitorID: number;
  Threshold?: number;
}

export interface ServicesNotificationsCreateMonitorNotification_EmailRecipientData {
  EmailAddress?: string;
}

/**
* Creates a email recipient for a Notification.
*/
export interface CreateMonitorNotificationEmailRecipient extends RequestMessage<CreateMonitorNotificationEmailRecipientResponse> {
  EmailAddress: string;
  /**
  * Entity type: MonitorNotification
  */
  NotificationID: number;
}

export interface CreateMonitorNotificationEmailRecipientResponse extends ResponseMessage {
  /**
  * Entity type: MonitorNotificationEmailRecipient
  */
  ID: number;
}

export interface CreateMonitorNotificationResponse extends ResponseMessage {
  /**
  * Entity type: MonitorNotification
  */
  ID: number;
}

/**
* Deletes a monitor Notification.
*/
export interface DeleteMonitorNotification extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: MonitorNotification
  */
  ID: number;
}

/**
* Deletes email recipient for given monitor Notification.
*/
export interface DeleteMonitorNotificationEmailRecipient extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: MonitorNotificationEmailRecipient
  */
  ID: number;
}

/**
* Returns information about given monitor Notification.
*/
export interface GetMonitorNotification extends RequestMessage<GetMonitorNotificationResponse> {
  /**
  * Entity type: MonitorNotification
  */
  ID: number;
}

/**
* Returns information about given recipient.
*/
export interface GetMonitorNotificationEmailRecipient extends RequestMessage<GetMonitorNotificationEmailRecipientResponse> {
  /**
  * Entity type: MonitorNotificationEmailRecipient
  */
  ID: number;
}

export interface GetMonitorNotificationEmailRecipientResponse extends ResponseMessage {
  EmailAddress: string;
  /**
  * Entity type: MonitorNotificationEmailRecipient
  */
  ID: number;
}

/**
* Gets all email recipients for given monitor Notification.
*/
export interface GetMonitorNotificationEmailRecipients extends RequestMessage<GetMonitorNotificationEmailRecipientsResponse> {
  /**
  * Entity type: MonitorNotification
  */
  NotificationID: number;
}

export interface GetMonitorNotificationEmailRecipientsResponse extends ResponseMessage {
  Recipients: ServicesNotificationsGetMonitorNotificationEmailRecipientsResponse_EmailRecipient[];
}

export interface ServicesNotificationsGetMonitorNotificationEmailRecipientsResponse_EmailRecipient {
  EmailAddress: string;
  /**
  * Entity type: MonitorNotificationEmailRecipient
  */
  ID: number;
}

export interface GetMonitorNotificationResponse extends ResponseMessage {
  Description?: string;
  EmailRecipients?: ServicesNotificationsGetMonitorNotificationResponse_EmailRecipientData[];
  EmailSubject?: string;
  /**
  * Entity type: MonitorNotification
  */
  ID: number;
  Inverse: boolean;
  Level: DataModelsMonitorLevel;
  Threshold: number;
}

export interface ServicesNotificationsGetMonitorNotificationResponse_EmailRecipientData {
  EmailAddress: string;
}

/**
* Returns all Notifications for given monitor.
*/
export interface GetMonitorNotifications extends RequestMessage<GetMonitorNotificationsResponse> {
  /**
  * Entity type: Monitor
  */
  MonitorID: number;
}

export interface GetMonitorNotificationsResponse extends ResponseMessage {
  Notifications: ServicesNotificationsGetMonitorNotificationsResponse_MonitorNotification[];
}

export interface ServicesNotificationsGetMonitorNotificationsResponse_MonitorNotification {
  Description?: string;
  EmailRecipients?: ServicesNotificationsGetMonitorNotificationsResponse_MonitorNotification_EmailRecipientData[];
  EmailSubject?: string;
  /**
  * Entity type: MonitorNotification
  */
  ID: number;
  Inverse: boolean;
  Level: DataModelsMonitorLevel;
  Threshold: number;
}

export interface ServicesNotificationsGetMonitorNotificationsResponse_MonitorNotification_EmailRecipientData {
  EmailAddress?: string;
}

/**
* Updates monitor Notification details.
*/
export interface UpdateMonitorNotification extends RequestMessageWithEmptyResponse {
  Description?: string | null;
  EmailRecipients?: ServicesNotificationsUpdateMonitorNotification_EmailRecipientData[] | null;
  EmailSubject?: string | null;
  /**
  * Entity type: MonitorNotification
  */
  ID: number;
  Inverse?: boolean;
  Level?: DataModelsMonitorLevel;
  Threshold?: number;
}

export interface ServicesNotificationsUpdateMonitorNotification_EmailRecipientData {
  EmailAddress: string;
}

export interface UpdateMonitorNotificationEmailRecipient extends RequestMessageWithEmptyResponse {
  EmailAddress: string;
  /**
  * Entity type: MonitorNotification
  */
  ID: number;
}

/**
* Creates a role owner for a monitor.
*/
export interface CreateMonitorRoleOwner extends RequestMessage<CreateMonitorRoleOwnerResponse> {
  IsAllowedToEdit?: boolean;
  /**
  * Entity type: Monitor
  */
  MonitorID: number;
  /**
  * Entity type: Role
  */
  RoleID: number;
}

export interface CreateMonitorRoleOwnerResponse extends ResponseMessage {
  Result: ServicesOwnersCreateMonitorRoleOwnerResult;
}

export enum ServicesOwnersCreateMonitorRoleOwnerResult {
  Created = 0,
  Updated = 1,
}

/**
* Deletes a monitor role owner.
*/
export interface DeleteMonitorRoleOwner extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: Monitor
  */
  MonitorID: number;
  /**
  * Entity type: Role
  */
  RoleID: number;
}

/**
* This service can be called to manually trigger a monitor.
*/
export interface RunMonitor extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: Monitor
  */
  ID: number;
}

/**
* Set permissions for a monitor.
*/
export interface SetMonitorPermissions extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: Monitor
  */
  ID: number;
  RoleOwners: ServicesSetMonitorPermissions_RoleOwnerData[];
  UserOwners?: ServicesSetMonitorPermissions_UserOwnerData[];
}

export interface ServicesSetMonitorPermissions_RoleOwnerData {
  IsAllowedToEdit?: boolean;
  /**
  * Entity type: Role
  */
  RoleID: number;
}

export interface ServicesSetMonitorPermissions_UserOwnerData {
  IsAllowedToEdit?: boolean;
  /**
  * Entity type: User
  */
  UserID: number;
}

/**
* Updates a monitor.
*/
export interface UpdateMonitor extends RequestMessageWithEmptyResponse {
  Cron?: string | null;
  Data?: MonitorHandlersTransputJobsTransputJobsMonitorData | MonitorHandlersSettlementFilesSettlementFilesMonitorData | MonitorHandlersProductSearchesProductSearchMonitorData | MonitorHandlersOrganizationUnitsOrganizationUnitsMonitorData | MonitorHandlersOrdersOrdersMonitorData | MonitorHandlersKSeFKSeFMonitorData | MonitorHandlersEventExportsEventExportsMonitorData | null;
  DefaultLevel?: DataModelsMonitorLevel;
  Description?: string | null;
  /**
  * Entity type: Monitor
  */
  ID: number;
  Name?: string;
  /**
  * Entity type: Script
  */
  ScriptID?: number | null;
}

