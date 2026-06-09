import {
  RequestMessage,
  ResponseMessage,
  RequestMessageWithResourceWithBlobIDResponse,
  FilteredPagedResultRequest,
  DataModelsOrganizationUnitStatus,
  PagedResultResponse,
  RequestMessageWithEmptyResponse,
  SchedulingTaskState,
  DevicesWatchtowerLog,
  UserTypes,
  SecurityElevationType,
  SecurityFunctionalityScope,
  LiveGuardTOTPSecretWrapper,
  AddressesAddressDataDto,
  DataModelsInvoiceDocumentLedgerFormats,
  DataModelsInvoiceDocumentLedgerData,
  DataModelsInvoiceDocumentLedgerTypes,
  DataModelsInvoiceCalculationMethod,
  DataModelsInvoiceStatuses,
  DataModelsInvoiceTypes,
  DataModelsTaxRateCategory,
  DataModelsInvoiceLineTypes,
  CompaniesCompanyDto,
  DataModelsOrderBlobTypes,
  DataModelsReturnReasonType,
  DataModelsPaymentStatuses,
  AuditingAuditChainTypes,
} from '../eva-services-core';


export enum Errors
{
  /**
  * The uploaded file is not a valid .p7m token.
  */
  ABMEnrollment_InvalidABMTokenFile = 'ABMEnrollment:InvalidABMTokenFile',
  /**
  * Failed to upload the ABM token to JAMF. Please verify the token file and try again.
  */
  ABMEnrollment_ABMTokenUploadFailed = 'ABMEnrollment:ABMTokenUploadFailed',
  /**
  * An ABM token already exists in JAMF. Use renewal instead of uploading a new token.
  */
  ABMEnrollment_ABMTokenAlreadyExists = 'ABMEnrollment:ABMTokenAlreadyExists',
  /**
  * Could not determine a matching FleetManager.
  */
  FleetManager_UnableToDetermineFleetManager = 'FleetManager:UnableToDetermineFleetManager',
  /**
  * The FleetManager {0:string} is not available.
  */
  FleetManager_FleetManagerNotAvailable = 'FleetManager:FleetManagerNotAvailable',
  /**
  * Device with HardwareID {hardwareID:string} was not found in FleetManager {fleetManager:string}. Make sure it's online and try again
  */
  FleetManager_DeviceNotInFleetManager = 'FleetManager:DeviceNotInFleetManager',
  /**
  * Device is not valid for this FleetManager.
  */
  FleetManager_InvalidDevice = 'FleetManager:InvalidDevice',
  /**
  * Device was already boarded.
  */
  FleetManager_DeviceAlreadyBoarded = 'FleetManager:DeviceAlreadyBoarded',
  /**
  * Error while boarding the device: {0:string}
  */
  FleetManager_BoardingFailed = 'FleetManager:BoardingFailed',
  /**
  * After 2026-04-01 it's not allowed to board new legacy devices in EVA.
  */
  FleetManager_BoardingDisabled = 'FleetManager:BoardingDisabled',
  /**
  * This operation is not supported because NewBlack manages the ABM token for this deployment.
  */
  FleetManager_NotSupportedForNewBlackManagedABM = 'FleetManager:NotSupportedForNewBlackManagedABM',
  /**
  * Device with HardwareID {hardwareID:string} already exists with ID {deviceID:id}.
  */
  FleetManagerErrors_DeviceAlreadyExists = 'FleetManagerErrors:DeviceAlreadyExists',
  /**
  * OrganizationUnit {organizationUnitID:id} already has a watchtower with ID {deviceID:id}.
  */
  FleetManagerErrors_DuplicateOrganizationUnit = 'FleetManagerErrors:DuplicateOrganizationUnit',
  /**
  * You're not allowed to generate this liveguard api key.
  */
  LiveGuard_NotAllowedToGenerateApiKey = 'LiveGuard:NotAllowedToGenerateApiKey',
  /**
  * You're not allowed to generate this liveguard secret.
  */
  LiveGuard_NotAllowedToGenerateSecret = 'LiveGuard:NotAllowedToGenerateSecret',
  /**
  * This is a stub order for offline evapay payments, no mutations allowed.
  */
  LiveGuard_UnableToMutateEVAPayStub = 'LiveGuard:UnableToMutateEVAPayStub',
  /**
  * The configuration is invalid.
  */
  LiveGuardCertificate_InvalidConfiguration = 'LiveGuardCertificate:InvalidConfiguration',
  /**
  * No valid Watchtower for this request.
  */
  LiveGuardCertificate_NoValidWatchtower = 'LiveGuardCertificate:NoValidWatchtower',
  /**
  * CSR could not be parsed.
  */
  LiveGuardCertificate_CsrInvalid = 'LiveGuardCertificate:CsrInvalid',
  /**
  * Failed to generate the certificate.
  */
  LiveGuardCertificate_CertificateGenerationFailed = 'LiveGuardCertificate:CertificateGenerationFailed',
  /**
  * Hostname for this Watchtower does not match the hostname in the CSR.
  */
  LiveGuardCertificate_HostnameMismatch = 'LiveGuardCertificate:HostnameMismatch',
  /**
  * There is no current connection to the selected device.
  */
  LiveGuardExecuteTask_NoConnection = 'LiveGuardExecuteTask:NoConnection',
  /**
  * This watchtower is not connected.
  */
  LiveGuardLockStatus_NotConnected = 'LiveGuardLockStatus:NotConnected',
  /**
  * Failed to lock the device.
  */
  LiveGuardLockStatus_LockFailed = 'LiveGuardLockStatus:LockFailed',
  /**
  * Failed to unlock the device.
  */
  LiveGuardLockStatus_UnlockFailed = 'LiveGuardLockStatus:UnlockFailed',
  /**
  * The configuration is invalid.
  */
  LiveGuardVPN_InvalidConfiguration = 'LiveGuardVPN:InvalidConfiguration',
  /**
  * No valid Watchtower for this request.
  */
  LiveGuardVPN_NoValidWatchtower = 'LiveGuardVPN:NoValidWatchtower',
  /**
  * Failed to check for existing config.
  */
  LiveGuardVPN_ExistsCheckFailed = 'LiveGuardVPN:ExistsCheckFailed',
  /**
  * Failed to create new config.
  */
  LiveGuardVPN_CreateFailed = 'LiveGuardVPN:CreateFailed',
  /**
  * You can only force local mode on shops.
  */
  LocalModeManager_CanForceLocalModeOnlyOnShop = 'LocalModeManager:CanForceLocalModeOnlyOnShop',
  /**
  * No registration request found for this device. (Please reboot the device and try again)
  */
  MenderClient_NoRegistrationRequest = 'MenderClient:NoRegistrationRequest',
  /**
  * There is no current connection to the selected device.
  */
  WatchtowerExecuteCommand_NoConnection = 'WatchtowerExecuteCommand:NoConnection',
  /**
  * Failed to connect to the device.
  */
  WatchtowerIO_ConnectionFailed = 'WatchtowerIO:ConnectionFailed',
}
export enum ManagersFleetManagerDeviceStatus {
  Accepted = 1,
  Pending = 2,
  Rejected = 3,
  Preauthorized = 4,
  Noauth = 5,
}

/**
* Get an authentication token that's valid in the cloud for the current user
*/
export interface LiveGuardGetCloudToken extends RequestMessage<LiveGuardGetCloudTokenResponse> {
  UseJwtTokens?: boolean;
}

export interface LiveGuardGetCloudTokenResponse extends ResponseMessage {
  AuthenticationToken: string;
  RefreshToken?: string;
}

/**
* Returns the blob url where the LiveGuard data can be downloaded from.
*/
export interface LiveGuardGetData extends RequestMessageWithResourceWithBlobIDResponse {
}

/**
* Returns id mapping for cloud vs liveguard entities
*/
export interface LiveGuardGetMapping extends RequestMessage<LiveGuardGetMappingResponse> {
}

export interface LiveGuardGetMappingResponse extends ResponseMessage {
  /**
  * For each datatype a mapping from CloudID -> LiveGuardID
  */
  Mapping?: Record<string,Record<string,number> | null>;
}

/**
* Get a trust token that needs to be provided in the Login call to the cloud to verify local presence
*/
export interface LiveGuardGetTrustToken extends RequestMessage<LiveGuardGetTrustTokenResponse> {
}

export interface LiveGuardGetTrustTokenResponse extends ResponseMessage {
  TrustToken: string;
}

export enum ServicesManagementABMConnectionStatus {
  NotConnected = 0,
  Connected = 1,
  Expiring = 2,
  Expired = 3,
}

/**
* Create a new SSL certificate for a Watchtower device.
*/
export interface CreateWatchtowerCertificate extends RequestMessage<CreateWatchtowerCertificateResponse> {
  CertificateSigningRequest: string;
}

export interface CreateWatchtowerCertificateResponse extends ResponseMessage {
  Certificate: string;
}

/**
* Create a new watchtower device
* 
* To create a device for fallback IO, leave the HardwareID null
* When a HardwareID is set, the device will be boarded and prepared for use.
*/
export interface CreateWatchtowerDevice extends RequestMessage<CreateWatchtowerDeviceResponse> {
  HardwareID?: string;
  Name: string;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID: number;
}

export interface CreateWatchtowerDeviceResponse extends ResponseMessage {
  ApiKey?: string;
  /**
  * Entity type: Device
  */
  ID: number;
}

/**
* Create a new VPN Configuration for a Watchtower device.
*/
export interface CreateWatchtowerVPNConfiguration extends RequestMessage<CreateWatchtowerVPNConfigurationResponse> {
}

export interface CreateWatchtowerVPNConfigurationResponse extends ResponseMessage {
  Config?: string;
}

/**
* Returns the current ABM device enrollment status, including organization details and token expiration.
*/
export interface GetABMEnrollmentDetails extends RequestMessage<GetABMEnrollmentDetailsResponse> {
}

export interface GetABMEnrollmentDetailsResponse extends ResponseMessage {
  HasUploadedTokenBefore: boolean;
  Name?: string;
  OrganizationEmail?: string;
  OrganizationName?: string;
  OrganizationPhone?: string;
  Status: ServicesManagementABMConnectionStatus;
  TokenExpirationDate?: string;
}

/**
* Downloads the JAMF device enrollment public key (PEM). Upload this key to Apple Business Manager to obtain a .p7m token.
*/
export interface GetABMPublicKey extends RequestMessage<GetABMPublicKeyResponse> {
}

export interface GetABMPublicKeyResponse extends ResponseMessage {
  PublicKey?: string;
}

/**
* List the configured watchtower devices with their status
* 
* Sorting is supported on the following properties:
* - ID
* - Name
* - HardwareID
* - OrganizationUnitID
* - OrganizationUnitBackendID
* - OrganizationUnitName
* - OrganizationUnitCountryID
* - OrganizationUnitStatus
* - WatchtowerIOConnected
* - WatchtowerIOLastSeen
* - ForceLocalMode
*/
export interface ListWatchtowerDevices extends FilteredPagedResultRequest<ServicesManagementListWatchtowerDevicesFilter, ListWatchtowerDevicesResponse> {
}

export interface ServicesManagementListWatchtowerDevicesFilter {
  /**
  * Entity type: Country
  */
  CountryID?: string;
  /**
  * Entity type: Device
  */
  DeviceID?: number;
  FleetManagerID?: string;
  ForceLocalMode?: boolean;
  HardwareID?: string;
  IncludeChildOrganizationUnits?: boolean;
  IsLocked?: boolean;
  IsWatchtowerConnected?: boolean;
  IsWatchtowerIOConnected?: boolean;
  IsWatchtowerOnline?: boolean;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID?: number;
  OrganizationUnitStatus?: DataModelsOrganizationUnitStatus;
}

export interface ListWatchtowerDevicesResponse extends PagedResultResponse<ServicesManagementListWatchtowerDevicesResponse_Watchtower> {
}

export interface ServicesManagementListWatchtowerDevicesResponse_Watchtower {
  ForceLocalMode: boolean;
  HardwareID?: string;
  /**
  * Entity type: Device
  */
  ID: number;
  LastSeen?: string;
  Locked: boolean;
  Name?: string;
  Online: boolean;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitBackendID?: string;
  /**
  * Entity type: Country
  */
  OrganizationUnitCountryID?: string;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID: number;
  OrganizationUnitName?: string;
  OrganizationUnitStatus: DataModelsOrganizationUnitStatus;
  WatchtowerConnected: boolean;
  WatchtowerIOConnected: boolean;
  WatchtowerIOLastSeen?: string;
  WatchtowerLastSeen?: string;
}

/**
* Execute a command on a device
*/
export interface LiveGuardExecuteTask extends RequestMessageWithEmptyResponse {
  Catalog?: boolean;
  /**
  * Entity type: Device
  */
  DeviceID: number;
  General?: boolean;
  Users?: boolean;
}

/**
* Push the current configuration for the given device to mender
*/
export interface PushWatchtowerConfigurationToDevice extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: Device
  */
  DeviceID: number;
}

/**
* Update the lock status of a watchtower device.
* 
* This can only be done when the device is online
*/
export interface ToggleLockStatusForWatchtowerDevice extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: Device
  */
  DeviceID: number;
  IsLocked?: boolean;
}

/**
* Uploads a .p7m token file from Apple Business Manager to JAMF. Creates a new enrollment or renews an existing one.
*/
export interface UploadABMToken extends RequestMessage<UploadABMTokenResponse> {
  Data: string;
}

export interface UploadABMTokenResponse extends ResponseMessage {
  Status: ServicesManagementABMConnectionStatus;
}

/**
* Execute a command on a device
*/
export interface WatchtowerExecuteCommand extends RequestMessage<WatchtowerExecuteCommandResponse> {
  Address?: string;
  /**
  * Entity type: Device
  */
  DeviceID: number;
  Port?: number;
  Type: string;
}

export interface WatchtowerExecuteCommandResponse extends ResponseMessage {
  Output?: string;
  Success: boolean;
}

/**
* Get details about the given device.
*/
export interface WatchtowerGetDeviceDetails extends RequestMessage<WatchtowerGetDeviceDetailsResponse> {
  /**
  * Entity type: Device
  */
  DeviceID: number;
}

export interface WatchtowerGetDeviceDetailsResponse extends ResponseMessage {
  CatalogTaskState?: SchedulingTaskState;
  CatalogTaskStateLastRunTime?: string;
  EVAVersion?: string;
  EVAVersionLastCheckinTime?: string;
  FleetManagerID?: string;
  FleetManagerLastCheckIn?: string;
  FleetManagerStatus?: ManagersFleetManagerDeviceStatus;
  ForceLocalMode: boolean;
  GeneralTaskState?: SchedulingTaskState;
  GeneralTaskStateLastRunTime?: string;
  HardwareID?: string;
  ID: number;
  IOVersion?: string;
  IOVersionLastCheckinTime?: string;
  LastSeen?: string;
  LiveGuardStateLastCheckinTime?: string;
  Locked: boolean;
  Logs?: DevicesWatchtowerLog[];
  NetworkInterfaces?: ServicesManagementWatchtowerGetDeviceDetailsResponse_NetworkInterface[];
  OSVersion?: string;
  OSVersionLastCheckinTime?: string;
  Online: boolean;
  OrganizationUnitBackendID?: string;
  /**
  * Entity type: Country
  */
  OrganizationUnitCountryID?: string;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID: number;
  OrganizationUnitName?: string;
  OrganizationUnitStatus: DataModelsOrganizationUnitStatus;
  PendingOrderExports?: number;
  ProductsCount?: number;
  SettingsCount?: number;
  State?: string;
  StateLastCheckinTime?: string;
  UserTaskState?: SchedulingTaskState;
  UserTaskStateLastRunTime?: string;
  UsersCount?: number;
  Virtual: boolean;
  WatchtowerConnected: boolean;
  WatchtowerIOConnected: boolean;
  WatchtowerIOLastSeen?: string;
  WatchtowerLastSeen?: string;
}

export interface ServicesManagementWatchtowerGetDeviceDetailsResponse_NetworkInterface {
  IPV4?: string;
  IPV6?: string;
  MacAddress?: string;
  Name?: string;
}

export interface EVAStatus extends RequestMessage<EVAStatusResponse> {
}

export interface EVAStatusResponse extends ResponseMessage {
  Ready: boolean;
}

/**
* Returns some basic information about the current state of the liveGuard
*/
export interface LiveGuardGetInformation extends RequestMessage<LiveGuardGetInformationResponse> {
}

export interface LiveGuardGetInformationResponse extends ResponseMessage {
  CatalogTaskLastRun?: string;
  CatalogTaskState?: SchedulingTaskState;
  GeneralTaskLastRun?: string;
  GeneralTaskState?: SchedulingTaskState;
  HardwareID?: string;
  LastCatalogSync?: string;
  LastGeneralSync?: string;
  LastUserSync?: string;
  OrganizationUnitBackendID?: string;
  OrganizationUnitName?: string;
  PendingOrderExports: number;
  ProductsCount: number;
  SettingsCount: number;
  UserTaskLastRun?: string;
  UserTaskState?: SchedulingTaskState;
  UsersCount: number;
  Version?: string;
}

/**
* This service returns the operational flags for a liveguard instance.
*/
export interface LiveGuardGetStatus extends RequestMessage<LiveGuardGetStatusResponse> {
}

export interface LiveGuardGetStatusResponse extends ResponseMessage {
  DisableCheckTask: boolean;
  EVACloudAvailable: boolean;
  InternetAvailable: boolean;
  RunningOnWatchtower: boolean;
}

/**
* Push metrics of the watchtower device to the cloud.
*/
export interface LiveGuardPushMetrics extends RequestMessageWithEmptyResponse {
  AvgLatency?: number;
  CPUUsage?: number;
  DNSLatency?: number;
  DiskUsage?: number;
  EVAVersion?: string;
  HardwareID: string;
  IOVersion?: string;
  LastBootTime?: string;
  Latency?: number;
  Logs?: DevicesWatchtowerLog[];
  OSVersion?: string;
  RAMUsage?: number;
  State?: string;
  Temperature?: number;
}

/**
* Get user information to sync to LiveGuard
*/
export interface GetUserForLiveGuard extends RequestMessage<GetUserForLiveGuardResponse> {
  EmailAddress?: string;
  NickName?: string;
  /**
  * Entity type: User
  */
  UserID?: number;
}

export interface GetUserForLiveGuardResponse extends ResponseMessage {
  AuthenticationData?: ServicesSyncGetUserForLiveGuardResponse_AuthenticationDataDto[];
  BackendID?: string;
  BackendSystemID?: string;
  /**
  * Entity type: User
  */
  CloudIDs?: number[];
  /**
  * Entity type: Country
  */
  CountryID?: string;
  EmailAddress?: string;
  FirstName?: string;
  /**
  * Entity type: Language
  */
  LanguageID?: string;
  LastName?: string;
  Nickname?: string;
  Roles?: ServicesSyncGetUserForLiveGuardResponse_RoleDto[];
  TimeZone?: string;
  Type: UserTypes;
}

export interface ServicesSyncGetUserForLiveGuardResponse_AuthenticationDataDto {
  Data?: string;
  SearchKey?: string;
  Type?: string;
}

export interface ServicesSyncGetUserForLiveGuardResponse_FunctionalityDto {
  ElevationType: SecurityElevationType;
  Functionality: string;
  FunctionalityScope: SecurityFunctionalityScope;
}

export interface ServicesSyncGetUserForLiveGuardResponse_RoleDto {
  Code?: string;
  DeactivateUserAfterInactiveDays?: number;
  Functionalities: ServicesSyncGetUserForLiveGuardResponse_FunctionalityDto[];
  GlobalID?: string;
  Name?: string;
  UserType: UserTypes;
}

export interface LiveGuardGenerateApiKey extends RequestMessage<LiveGuardGenerateApiKeyResponse> {
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID: number;
}

export interface LiveGuardGenerateApiKeyResponse extends ResponseMessage {
  ApiKey: string;
}

/**
* Generate a trust token that needs to be provided in the Login call to the cloud to verify local presence
*/
export interface LiveGuardGenerateTrustToken extends RequestMessage<LiveGuardGenerateTrustTokenResponse> {
}

export interface LiveGuardGenerateTrustTokenResponse extends ResponseMessage {
  TrustToken: string;
}

/**
* Retreive current chain status for the connected watchtower
*/
export interface LiveGuardGetAuditChains extends RequestMessage<LiveGuardGetAuditChainsResponse> {
}

export interface LiveGuardGetAuditChainsResponse extends ResponseMessage {
  Chains?: TasksChainDto[];
}

/**
* Retreive current secret for TOTP token usage
*/
export interface LiveGuardGetTOTPSecret extends RequestMessage<LiveGuardGetTOTPSecretResponse> {
}

export interface LiveGuardGetTOTPSecretResponse extends ResponseMessage {
  Secret: LiveGuardTOTPSecretWrapper;
}

/**
* Service called by a liveguard instance to generate an authentication token for an authorized user on the liveguard
* 
* Can only be called by the liveguard user
*/
export interface LiveGuardGetTokenForUser extends RequestMessage<LiveGuardGetTokenForUserResponse> {
  UseJwtTokens?: boolean;
  Username: string;
}

export interface LiveGuardGetTokenForUserResponse extends ResponseMessage {
  AuthenticationToken: string;
  RefreshToken?: string;
}

/**
* Accepts an Order pushed from a LiveGuard instance
*/
export interface LiveGuardPushOrder extends RequestMessage<LiveGuardPushOrderResponse> {
  BillingAddress?: AddressesAddressDataDto;
  BlobID: string;
  Blobs?: ServicesSyncLiveGuardPushOrder_OrderBlobDto[];
  BoardingPass?: ServicesSyncLiveGuardPushOrder_BoardingPassDto;
  Chains?: TasksChainDto[];
  ClientOrderID?: string;
  CreationTime?: string;
  Customer?: ServicesSyncLiveGuardPushOrder_CustomerDto;
  CustomerIdentifiers?: ServicesSyncLiveGuardPushOrder_OrderCustomerIdentifiersDto;
  DisplayID?: string;
  Invoices?: ServicesSyncLiveGuardPushOrder_InvoiceDto[];
  IsPaid?: boolean;
  IsShipped?: boolean;
  Lines?: ServicesSyncLiveGuardPushOrder_OrderLineDto[];
  LiveGuardOrderID?: string;
  Payments?: ServicesSyncLiveGuardPushOrder_PaymentDto[];
  PickupAddress?: AddressesAddressDataDto;
  Remark?: string;
  ShippingAddress?: AddressesAddressDataDto;
  SoldBy?: string;
}

export interface ServicesSyncLiveGuardPushOrder_BoardingPassDto {
  AirlineCompanyCode?: string;
  Cabin?: string;
  CheckinSequence?: number;
  Data?: string;
  DepartingAirportCode?: string;
  DestinationAirportCode?: string;
  FlightNumber?: number;
  Format?: string;
  JulianDate?: number;
  Name?: string;
  NumberOfLegs?: number;
  OperatingCarrierPNRCode?: string;
  Seat?: string;
  Status?: number;
  Type?: string;
}

export interface ServicesSyncLiveGuardPushOrder_ChainLedgerDto {
  CreationTime: string;
  NewSequenceNumber?: number;
  NewSignature?: string;
  PreviousSequenceNumber?: number;
  PreviousSignature?: string;
}

export interface ServicesSyncLiveGuardPushOrder_CustomerDto {
  CountryID?: string;
  EmailAddress?: string;
  FirstName?: string;
  Gender?: string;
  LanguageID?: string;
  LastName?: string;
  /**
  * Entity type: User
  */
  LiveGuardID: number;
  PhoneNumber?: string;
}

export interface ServicesSyncLiveGuardPushOrder_InvoiceBlobDto {
  BackendID?: string;
  BlobID: string;
  Category?: string;
  MimeType?: string;
  OriginalName?: string;
}

export interface ServicesSyncLiveGuardPushOrder_InvoiceDataDto {
  Data?: string;
  SearchKey?: string;
  Type?: string;
}

export interface ServicesSyncLiveGuardPushOrder_InvoiceDocumentLedgerDto {
  /**
  * Entity type: AuditChain
  */
  ChainID?: number;
  FailureReason?: string;
  Format?: DataModelsInvoiceDocumentLedgerFormats;
  InvoiceDocumentLedgerData?: DataModelsInvoiceDocumentLedgerData;
  IsSuccess?: boolean;
  /**
  * Entity type: Device
  */
  OriginalDeviceID?: number;
  PreviousSequenceNumber?: number;
  PreviousSignature?: string;
  ReportContentBlobID?: string;
  ReprintNumber?: number;
  SequenceNumber?: number;
  Signature?: string;
  Type?: DataModelsInvoiceDocumentLedgerTypes;
}

export interface ServicesSyncLiveGuardPushOrder_InvoiceDto {
  AuditingProvider?: string;
  BackendID?: string;
  BackendSystemID?: string;
  BackendTypeID?: number;
  Blobs?: ServicesSyncLiveGuardPushOrder_InvoiceBlobDto[];
  CalculationMethod?: DataModelsInvoiceCalculationMethod;
  /**
  * Entity type: AuditChain
  */
  ChainID?: number;
  CurrencyID?: string;
  Description?: string;
  DocumentLedger?: ServicesSyncLiveGuardPushOrder_InvoiceDocumentLedgerDto[];
  ExpirationDate?: string;
  FiscalID?: string;
  /**
  * Entity type: Invoice
  */
  ID: number;
  InvoiceData?: ServicesSyncLiveGuardPushOrder_InvoiceDataDto[];
  InvoiceDate?: string;
  InvoiceNumber?: string;
  Lines?: ServicesSyncLiveGuardPushOrder_InvoiceLineDto[];
  PreviousSignature?: string;
  PrintCount?: number;
  ReferencedInvoice?: string;
  SequenceNumber?: number;
  Signature?: string;
  /**
  * Entity type: Station
  */
  StationID?: string;
  Status?: DataModelsInvoiceStatuses;
  TaxReverseCharge?: boolean;
  TotalAmount: number;
  Type?: DataModelsInvoiceTypes;
  UserData?: ServicesSyncLiveGuardPushOrder_InvoiceUserDataDto;
  VatNumber?: string;
}

export interface ServicesSyncLiveGuardPushOrder_InvoiceLineDiscountDetailDto {
  Amount: number;
  BackendID?: string;
  CloudID?: number;
  Description?: string;
}

export interface ServicesSyncLiveGuardPushOrder_InvoiceLineDto {
  Description?: string;
  DiscountAmount: number;
  DiscountDetails?: ServicesSyncLiveGuardPushOrder_InvoiceLineDiscountDetailDto[];
  InvoiceData?: ServicesSyncLiveGuardPushOrder_InvoiceDataDto[];
  InvoicedBy?: string;
  NetTaxAmount: number;
  /**
  * Entity type: OrderLine
  */
  OrderLineID: number;
  Quantity?: number;
  TaxAmount?: number;
  TaxCode?: string;
  TaxDetails?: ServicesSyncLiveGuardPushOrder_InvoiceLineTaxDetailDto[];
  TaxRate: number;
  TaxRateCategory?: DataModelsTaxRateCategory;
  TotalAmountInvoiced: number;
  TotalAmountInvoicedInTax: number;
  TotalTaxAmount: number;
  Type?: DataModelsInvoiceLineTypes;
  UnitCost?: number;
  UnitPrice?: number;
  UnitPriceInTax: number;
}

export interface ServicesSyncLiveGuardPushOrder_InvoiceLineTaxDetailDto {
  TaxAmount: number;
  TaxName?: string;
  TaxRate: number;
  TaxSubType?: string;
  TaxSubTypeName?: string;
  TaxType?: string;
}

export interface ServicesSyncLiveGuardPushOrder_InvoiceUserDataDto {
  BackendRelationID?: string;
  BankAccount?: string;
  BillingAddress?: AddressesAddressDataDto;
  Company?: CompaniesCompanyDto;
  CountryID?: string;
  EmailAddress?: string;
  FirstName?: string;
  FiscalID?: string;
  Gender?: string;
  Initials?: string;
  LanguageID?: string;
  LastName?: string;
  OrganizationUnitAddress1?: string;
  OrganizationUnitAddress2?: string;
  OrganizationUnitBIC?: string;
  OrganizationUnitBackendID?: string;
  OrganizationUnitBranchNumber?: string;
  OrganizationUnitCity?: string;
  OrganizationUnitCompany?: CompaniesCompanyDto;
  OrganizationUnitCompanyVatNumber?: string;
  OrganizationUnitCountryID?: string;
  OrganizationUnitDistrict?: string;
  OrganizationUnitEmailAddress?: string;
  OrganizationUnitEstablishmentNumber?: string;
  OrganizationUnitHouseNumber?: string;
  OrganizationUnitName?: string;
  OrganizationUnitPhoneNumber?: string;
  OrganizationUnitState?: string;
  OrganizationUnitSubDistrict?: string;
  OrganizationUnitWebsite?: string;
  OrganizationUnitZipCode?: string;
  PhoneNumber?: string;
  ShippingAddress?: AddressesAddressDataDto;
}

export interface ServicesSyncLiveGuardPushOrder_OrderBlobDto {
  BlobID: string;
  /**
  * Entity type: Invoice
  */
  InvoiceID?: number;
  Name?: string;
  /**
  * Entity type: OrderLine
  */
  OrderLineID?: number;
  Type?: DataModelsOrderBlobTypes;
}

export interface ServicesSyncLiveGuardPushOrder_OrderCustomerIdentifiersDto {
  EmailAddress?: string;
  UserBackendID?: string;
  UserCustomID?: string;
  UserID?: string;
  UserSubscriptionID?: string;
}

export interface ServicesSyncLiveGuardPushOrder_OrderLineDiscount {
  Amount: number;
  BackendID?: string;
  CloudID?: number;
  Description?: string;
  /**
  * Entity type: OrderLine
  */
  OrderLineID: number;
}

export interface ServicesSyncLiveGuardPushOrder_OrderLineDto {
  Amount: number;
  BackendID?: string;
  BackendReference?: string;
  CloudID?: string;
  CustomID?: string;
  Description?: string;
  Discounts?: ServicesSyncLiveGuardPushOrder_OrderLineDiscount[];
  /**
  * Entity type: OrderLine
  */
  ID: number;
  LocalID?: string;
  Quantity?: number;
  ReturnReason?: string;
  ReturnReasonType?: DataModelsReturnReasonType;
  SerialNumber?: string;
  StockProductBackendID?: string;
  TaxDetails?: ServicesSyncLiveGuardPushOrder_OrderLineTaxDetail[];
  TaxRate: number;
  TaxRateCategory?: DataModelsTaxRateCategory;
  UnitPriceBeforeCorrection?: number;
  UnitPriceBeforeCorrectionInTax?: number;
  UnitPriceCorrectionReason?: string;
}

export interface ServicesSyncLiveGuardPushOrder_OrderLineTaxDetail {
  TaxAmount: number;
  TaxName?: string;
  TaxRate: number;
  TaxSubType?: string;
  TaxSubTypeName?: string;
  TaxType?: string;
}

export interface ServicesSyncLiveGuardPushOrder_PaymentDto {
  Amount: number;
  BackendID?: string;
  Data?: string;
  DataObjects?: string;
  /**
  * Entity type: PaymentTransaction
  */
  ID: number;
  Method?: string;
  /**
  * Entity type: Device
  */
  OriginalDeviceID?: number;
  Status?: DataModelsPaymentStatuses;
  Type?: string;
}

export interface LiveGuardPushOrderResponse extends ResponseMessage {
  AlreadyExists: boolean;
  /**
  * Entity type: Order
  */
  ID: number;
}

export interface LiveGuardSyncCatalogByBlob extends RequestMessage<LiveGuardSyncCatalogByBlobResponse> {
}

export interface LiveGuardSyncCatalogByBlobResponse extends ResponseMessage {
  Bundles?: string;
  EcoTaxPriceList?: string;
  PriceList?: string;
  Products?: string;
  PromotionPriceList?: string;
}

export interface LiveGuardSyncGeneralByBlob extends RequestMessage<LiveGuardSyncGeneralByBlobResponse> {
}

export interface LiveGuardSyncGeneralByBlobResponse extends ResponseMessage {
  ID?: string;
  Url?: string;
}

export interface LiveGuardSyncUsersByBlob extends RequestMessage<LiveGuardSyncUsersByBlobResponse> {
}

export interface LiveGuardSyncUsersByBlobResponse extends ResponseMessage {
  Url?: string;
}

/**
* Trigger a full sync on a liveguard instance, this has major performance impact for a while
*/
export interface LiveGuardTriggerSync extends RequestMessageWithEmptyResponse {
}

/**
* Accepts an Order pushed from a local device
*/
export interface LiveGuardUpsertOrder extends RequestMessage<LiveGuardUpsertOrderResponse> {
  ClientOrderID: string;
  CreationTime: string;
  Lines: ServicesSyncLiveGuardUpsertOrder_OrderLineDto[];
}

export interface ServicesSyncLiveGuardUpsertOrder_ActionDto {
  CreationTime: string;
  NewValue?: string;
  OldValue?: string;
  Type?: ServicesSyncLiveGuardUpsertOrder_ActionType;
}

export enum ServicesSyncLiveGuardUpsertOrder_ActionType {
  Created = 1,
  ModifyQuantity = 2,
}

export interface ServicesSyncLiveGuardUpsertOrder_OrderLineDto {
  Actions?: ServicesSyncLiveGuardUpsertOrder_ActionDto[];
  CloudID?: string;
  Identifier?: string;
  LocalID?: string;
  /**
  * Entity type: Product
  */
  ProductID: number;
  Quantity?: number;
  SerialNumber?: string;
}

export interface LiveGuardUpsertOrderResponse extends ResponseMessage {
  /**
  * Entity type: Order
  */
  ID: number;
}

/**
* Validate the given token with the cloud, and if valid, trust the chain.
*/
export interface LiveGuardValidateToken extends RequestMessage<LiveGuardValidateTokenResponse> {
  AuthenticationToken?: string;
  CloudChainID?: string;
  LocalChainID?: string;
}

export interface LiveGuardValidateTokenResponse extends ResponseMessage {
  ChainID?: string;
  EmailAddress?: string;
  Nickname?: string;
  /**
  * Entity type: User
  */
  UserID?: number;
}

export interface TasksChainDto {
  CurrentSequenceNumber?: number;
  CurrentSignature?: string;
  Discriminator: number;
  /**
  * Entity type: AuditChain
  */
  ID: number;
  Identifier?: string;
  PreviousSequenceNumber?: number;
  PreviousSignature?: string;
  RecentLedgers?: ServicesSyncLiveGuardPushOrder_ChainLedgerDto[];
  Type?: AuditingAuditChainTypes;
  Version?: number;
}

