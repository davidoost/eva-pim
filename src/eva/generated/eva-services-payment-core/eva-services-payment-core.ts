import {
  RequestMessage,
  ResponseMessage,
  DevicesPaymentOpenCashDrawerResults,
  RequestMessageWithEmptyResponse,
  OrdersDtoOrderDto,
  GetResponse,
  OrdersOpenOrderAmounts,
  ResourceInfo,
  PagedRequestMessage,
  PagedResponseMessage,
  GiftCardsBusinessRules,
  TAnyValue,
  UserCardsUserCardBalance,
  UserCardsUserCardDto,
  UserCardsUserCardTypeDto,
  PagedResultRequest,
  DataModelsUserCardMutationStatuses,
  PagedResultResponse,
  UserCardsListUserCardsFilter,
  PageConfig,
} from '../eva-services-core';


export enum Errors
{
  /**
  * Redemption of card {0:string} failed
  */
  APIGiftCard_RedemptionFailed = 'APIGiftCard:RedemptionFailed',
  /**
  * Card with number {0:string} was not found.
  */
  APIGiftCard_CardNotFound = 'APIGiftCard:CardNotFound',
  /**
  * Configured endpoint is invalid.
  */
  APIGiftCard_EndpointInvalid = 'APIGiftCard:EndpointInvalid',
  /**
  * The card has currency {cardCurrency:string}, but the requested currency is {transactionCurrency:string}.
  */
  APIGiftCard_CurrencyMismatch = 'APIGiftCard:CurrencyMismatch',
  /**
  * Only configurations with handler 'APIGIFTCARD' can be migrated
  */
  APIGiftCardDataMigrationService_InvalidHandler = 'APIGiftCardDataMigrationService:InvalidHandler',
  /**
  * This data is invalid and cannot be migrated
  */
  APIGiftCardDataMigrationService_InvalidData = 'APIGiftCardDataMigrationService:InvalidData',
  /**
  * AccountHolderName is required.
  */
  BankTransfer_AccountHolderNameRequired = 'BankTransfer:AccountHolderNameRequired',
  /**
  * Bank account number is required.
  */
  BankTransfer_IBANRequired = 'BankTransfer:IBANRequired',
  /**
  * Bank account number is not valid: {0:string}
  */
  BankTransfer_IBANInvalid = 'BankTransfer:IBANInvalid',
  /**
  * Opening cash drawers requires Remark field to be set.
  */
  CashDrawer_OpeningCashDrawerRequiresRemark = 'CashDrawer:OpeningCashDrawerRequiresRemark',
  /**
  * Opening a cash drawer with a PaymentTransaction requires a recent, confirmed cash payment.
  */
  CashDrawer_InvalidPaymentTransactionProvided = 'CashDrawer:InvalidPaymentTransactionProvided',
  /**
  * There is no open financial period for the current organizationunit.
  */
  CashPayment_NoOpenFinancePeriod = 'CashPayment:NoOpenFinancePeriod',
  /**
  * Invalid amounts provided for a CashPayment.
  */
  CashPayment_InvalidAmount = 'CashPayment:InvalidAmount',
  /**
  * The amount given can never be equal to or less than 0.
  */
  CashPayment_InvalidAmountGiven = 'CashPayment:InvalidAmountGiven',
  /**
  * The amount to refund can never be equal to or less than 0.
  */
  CashPayment_InvalidRefundAmount = 'CashPayment:InvalidRefundAmount',
  /**
  * Amount to be paid can't be greater than the open amount on the order.
  */
  CashPayment_OverPaymentNotAllowed = 'CashPayment:OverPaymentNotAllowed',
  /**
  * Cash payment limit has been reached for this currency type.
  */
  CashPayment_PaidAmountAboveCashHandlerLimit = 'CashPayment:PaidAmountAboveCashHandlerLimit',
  /**
  * Cash payment limit has been reached.
  */
  CashPayment_PaidAmountAboveCashLimit = 'CashPayment:PaidAmountAboveCashLimit',
  /**
  * The given data if for a different Order.
  */
  EVAPay_InvalidOrder = 'EVAPay:InvalidOrder',
  /**
  * The given token is not valid.
  */
  EVAPay_InvalidToken = 'EVAPay:InvalidToken',
  /**
  * Customer is required.
  */
  EVAPay_CustomerRequired = 'EVAPay:CustomerRequired',
  /**
  * Invalid amount.
  */
  EVAPay_InvalidAmount = 'EVAPay:InvalidAmount',
  /**
  * EmailAddress is required.
  */
  EVAPay_EmailAddressRequired = 'EVAPay:EmailAddressRequired',
  /**
  * BaseUrl is required and should either be configured (Setting) or supplied as parameter.
  */
  EVAPay_BaseUrlRequired = 'EVAPay:BaseUrlRequired',
  /**
  * No PIN configured.
  */
  EVAPay_NoPinConfigured = 'EVAPay:NoPinConfigured',
  /**
  * Service only supports calls from users authenticated with an EVAPay token.
  */
  EVAPay_InvalidAuthenticationToken = 'EVAPay:InvalidAuthenticationToken',
  /**
  * Blob {0:guid} does not exist.
  */
  EVAPayConfiguration_BlobDoesNotExist = 'EVAPayConfiguration:BlobDoesNotExist',
  /**
  * OrganizationUnitSet {0:id} already has an EVA Pay configuration.
  */
  EVAPayConfiguration_OrganizationUnitSetAlreadyConfigured = 'EVAPayConfiguration:OrganizationUnitSetAlreadyConfigured',
  /**
  * OrganizationUnitSet {0:id} was not found.
  */
  EVAPayConfiguration_OrganizationUnitSetNotFound = 'EVAPayConfiguration:OrganizationUnitSetNotFound',
  /**
  * Customer or email address is required.
  */
  GiftCardRefundPaymentMethod_EmailRequired = 'GiftCardRefundPaymentMethod:EmailRequired',
  /**
  * A Customer is required to do a Loyalty payment
  */
  LoyaltyPayment_CustomerRequired = 'LoyaltyPayment:CustomerRequired',
  /**
  * Invalid loyalty program selected
  */
  LoyaltyPayment_InvalidLoyaltyProgram = 'LoyaltyPayment:InvalidLoyaltyProgram',
  /**
  * Failed to execute the LoyaltyPayment in the handler
  */
  LoyaltyPayment_PaymentFailed = 'LoyaltyPayment:PaymentFailed',
  /**
  * The number of allowed installments is between {minInstallments:int32} and {maxInstallments:int32}.
  */
  PinPaymentMethod_InstallmentCountInvalid = 'PinPaymentMethod:InstallmentCountInvalid',
  /**
  * The number of allowed installments is one of {0:string}.
  */
  PinPaymentMethod_InstallmentCountInvalidOptions = 'PinPaymentMethod:InstallmentCountInvalidOptions',
  /**
  * The provided UniqueKey does not match the generated UniqueKey, please initialize again by calling CreatePayment with a token.
  */
  TapToPay_UniqueKeyMismatch = 'TapToPay:UniqueKeyMismatch',
}
export interface CashCashPaymentMethodRequestProperties {
  AmountGiven?: number;
  /**
  * Entity type: Station
  */
  StationID?: number;
}

export interface CashCashPaymentMethodResultProperties {
  RawReturnAmount: number;
  ReturnAmounts?: number[];
  RoundedReturnAmount: number;
}

/**
* Open a CashDrawer on the given station
* 
* Without a PaymentTransactionID, this service requires additional OpenCashDrawer functionality and you can then specify a ReasonID why you are opening it.
*/
export interface OpenCashDrawer extends RequestMessage<OpenCashDrawerResponse> {
  /**
  * Entity type: PaymentTransaction
  */
  PaymentTransactionID?: number;
  /**
  * Entity type: OpenCashDrawerReason
  * When the opening of the drawer is non-payment related, it's possible to specify a predefined ReasonID for opening the drawer.
  */
  ReasonID?: number;
  Remark?: string;
  /**
  * Entity type: Station
  */
  StationID?: number;
}

export interface OpenCashDrawerResponse extends ResponseMessage {
  Result: DevicesPaymentOpenCashDrawerResults;
}

/**
* Create a new EVA Pay configuration.
*/
export interface CreateEVAPayConfiguration extends RequestMessage<CreateEVAPayConfigurationResponse> {
  BaseUrl: string;
  BrandName?: string;
  CustomerRedirectUrl?: string;
  MailReminderTimeInMinutes?: number;
  MailSubject: string;
  Name: string;
  /**
  * Entity type: OrganizationUnitSet
  */
  OrganizationUnitSetID: number;
  Theme?: EVAPayCreateEVAPayConfiguration_EVAPayThemeObjectDto;
  TokensExpirationTimeInMinutes?: number;
}

export interface EVAPayCreateEVAPayConfiguration_EVAPayThemeObjectDto {
  CssTheme?: string;
  HeaderLogoBlobID?: string;
  IconBlobID?: string;
  WebsiteLogoBlobID?: string;
}

export interface CreateEVAPayConfigurationResponse extends ResponseMessage {
  /**
  * Entity type: EVAPayConfiguration
  */
  ID: number;
}

/**
* Delete an EVA Pay configuration.
*/
export interface DeleteEVAPayConfiguration extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: EVAPayConfiguration
  */
  ID: number;
}

export interface EVAPayEVAPayConfigurationDto {
  BaseUrl?: string;
  BrandName?: string;
  CustomerRedirectUrl?: string;
  /**
  * Entity type: EVAPayConfiguration
  */
  ID: number;
  MailReminderTimeInMinutes?: number;
  MailSubject?: string;
  Name?: string;
  /**
  * Entity type: OrganizationUnitSet
  */
  OrganizationUnitSetID: number;
  Theme?: EVAPayEVAPayThemeResponseDto;
  TokensExpirationTimeInMinutes: number;
}

/**
* Retrieve order information based on an EVAPay generated token (that you authenticated with).
*/
export interface EVAPayGetInfo extends RequestMessage<EVAPayGetInfoResponse> {
  IncludeAllPayments?: boolean;
  ProductProperties?: string[];
  ShowOnlyShippableLines?: boolean;
}

export interface EVAPayGetInfoResponse extends GetResponse<OrdersDtoOrderDto> {
  Amounts?: OrdersOpenOrderAmounts;
  Configuration?: EVAPayEVAPayGetInfoResponse_EVAPayConfigurationDto;
  CurrencyID?: string;
  EmailAddress?: string;
  FirstName?: string;
  IsPaid: boolean;
  LastName?: string;
  OpenAmount: number;
  OpenAmountInTax: number;
  OrderID: number;
  PaidAmount: number;
  PaymentRequired: boolean;
  RequestedAmount?: number;
  ReturnUrl?: string;
  TotpData?: string;
  TotpToken?: string;
}

export interface EVAPayEVAPayGetInfoResponse_EVAPayConfigurationDto {
  BrandName?: string;
  CustomerRedirectUrl?: string;
  /**
  * Entity type: EVAPayConfiguration
  */
  ID: number;
  Theme?: EVAPayEVAPayThemeResponseDto;
}

export interface EVAPayEVAPayPaymentMethodRequestProperties {
  /**
  * If the current station terminal should be instructed to show this QR code, too.
  */
  DisplayOnTerminal?: boolean;
  /**
  * ReturnUrl where the customer should be redirected to after the payment.
  */
  ReturnUrl?: string;
  /**
  * If an email with payment information should be sent.
  */
  SendEmail?: boolean;
  /**
  * When `SendEmail` is true, but `SendEmailTo` is omitted, a fallback to the Order.Customer.EmailAddress is attempted.
  */
  SendEmailTo?: string;
  TOTPData?: EVAPayEVAPayTOTPData;
}

export interface EVAPayEVAPayPaymentMethodResultProperties {
  Url?: string;
}

export interface EVAPayEVAPayTOTPData {
  Amount?: number;
  OrderID?: string;
  Token: string;
}

export interface EVAPayEVAPayThemeResponseDto {
  CssTheme?: string;
  HeaderLogoBlob?: ResourceInfo;
  IconBlob?: ResourceInfo;
  WebsiteLogoBlob?: ResourceInfo;
}

/**
* Get blobs intended for EVA Pay configuration.
*/
export interface GetBlobsForEVAPay extends RequestMessage<GetBlobsForEVAPayResponse> {
}

export interface GetBlobsForEVAPayResponse extends ResponseMessage {
  Blobs?: EVAPayGetBlobsForEVAPayResponse_EVAPayBlob[];
}

export interface EVAPayGetBlobsForEVAPayResponse_EVAPayBlob {
  Category?: string;
  ExpireDate?: string;
  ID: string;
  LocationType?: string;
  MimeType?: string;
  OriginalName?: string;
  Url?: string;
}

/**
* Get EVA Pay configuration.
*/
export interface GetEVAPayConfiguration extends RequestMessage<GetEVAPayConfigurationResponse> {
  ID: number;
}

export interface GetEVAPayConfigurationResponse extends ResponseMessage {
  Result?: EVAPayEVAPayConfigurationDto;
}

export interface EVAPayListEVAPayConfigurationFilter {
  Name?: string;
  /**
  * Entity type: OrganizationUnitSet
  */
  OrganizationUnitSetID?: number;
}

/**
* Service for retrieving a list of `EVAPayConfigurations`
*/
export interface ListEVAPayConfigurations extends PagedRequestMessage<EVAPayListEVAPayConfigurationFilter, ListEVAPayConfigurationsResponse> {
}

export interface ListEVAPayConfigurationsResponse extends PagedResponseMessage<EVAPayEVAPayConfigurationDto> {
}

/**
* Update an existing EVA Pay configuration.
*/
export interface UpdateEVAPayConfiguration extends RequestMessageWithEmptyResponse {
  BaseUrl?: string;
  BrandName?: string | null;
  CustomerRedirectUrl?: string | null;
  /**
  * Entity type: EVAPayConfiguration
  */
  ID: number;
  MailReminderTimeInMinutes?: number | null;
  MailSubject?: string;
  Name?: string;
  /**
  * Entity type: OrganizationUnitSet
  */
  OrganizationUnitSetID?: number;
  Theme?: EVAPayUpdateEVAPayConfiguration_EVAPayThemeObjectDto;
  TokensExpirationTimeInMinutes?: number;
}

export interface EVAPayUpdateEVAPayConfiguration_EVAPayThemeObjectDto {
  CssTheme?: string | null;
  HeaderLogoBlobID?: string | null;
  IconBlobID?: string | null;
  WebsiteLogoBlobID?: string | null;
}

export interface GiftCardAPIAPIGiftCardData {
  BaseUrl?: string;
  BusinessRules?: GiftCardsBusinessRules;
  /**
  * Entity type: EndpointConfiguration
  */
  EndPointConfigurationID?: number;
  Password?: string;
  Timeout?: number;
  Username?: string;
}

export interface GiftCardAPIAPIGiftCardPaymentMethodRequestProperties {
  CardNumber?: string;
  Pin?: string;
}

export interface GiftCardGiftCardRefundPaymentMethodResultProperties {
  OrderLineCreated: boolean;
}

export interface LoyaltyLoyaltyPaymentMethodRequestProperties {
  Points?: number;
}

export interface ManualManualPaymentMethodRequestProperties {
  BankAccountNumber?: string;
  IBAN?: string;
  Reference?: string;
}

export interface PinPinPaymentRequestProperties {
  InstallmentCount?: number;
}

export enum PinPinTransactionResultStatus {
  None = 0,
  TimeoutFromPinDevice = 1,
  TransactionStillInProgressForPayment = 2,
  Success = 3,
  Aborted = 4,
  Failure = 5,
  DeviceUnavailable = 6,
  PrintLastTicket = 7,
  TimedOut = 8,
  TransactionAlreadyInProgressForUser = 9,
  UserMustScanStationToAbort = 10,
  PaymentValidationError = 11,
  InProgress = 12,
  ClientFailure = 13,
  SelectPaymentMethod = 14,
  MustRevalidate = 16,
  ConnectToTerminal = 17,
}

/**
* Abort a current pin paymenttransaction
*/
export interface AbortTransaction extends RequestMessage<AbortTransactionResponse> {
  /**
  * Entity type: PaymentTransaction
  */
  PaymentTransactionID?: number;
  /**
  * Entity type: Station
  */
  StationID?: number;
}

export interface AbortTransactionResponse extends ResponseMessage {
  ResultStatus: PinPinTransactionResultStatus;
}

/**
* Returns all `PinHandlers` available to use on `PaymentType.Options`
*/
export interface GetAvailablePinHandlers extends RequestMessage<GetAvailablePinHandlersResponse> {
}

export interface GetAvailablePinHandlersResponse extends ResponseMessage {
  Handlers?: PinServicesGetAvailablePinHandlersResponse_PinHandler[];
}

export interface PinServicesGetAvailablePinHandlersResponse_PinHandler {
  Name?: string;
}

/**
* Idle the terminal display and make it show the standby screen - this screen shows the configured branded logo as it is usually shown when no other process is going on.
*/
export interface IdlePinTerminal extends RequestMessageWithEmptyResponse {
}

export interface PrintLastReceiptCallback extends RequestMessageWithEmptyResponse {
  ReceiptLines?: string[];
  /**
  * Entity type: Station
  */
  StationID?: number;
}

export interface PrintPinReceipt extends RequestMessageWithEmptyResponse {
  ECRID?: string;
  OrderReference: string;
  ReceiptLines?: string[];
  ReceiptType: string;
  SignatureLines?: PinSignatureSignatureLine[];
  TransactionSucceeded?: boolean;
}

/**
* Start the pin transaction
* 
* This service needs to be called after creating a pin payment. It will block until the transaction is completed.
* To cancel this process the AbortTransaction service can be called.
*/
export interface StartTransaction extends RequestMessage<StartTransactionResponse> {
  /**
  * Entity type: PaymentTransaction
  */
  PaymentTransactionID: number;
  /**
  * Entity type: Station
  */
  StationID?: number;
}

export interface StartTransactionResponse extends ResponseMessage {
  CardCircuit?: string;
  CountryID?: string;
  OpenAmount: number;
  ResultStatus: PinPinTransactionResultStatus;
  ResultStatusString?: string;
}

export interface PinSignatureSignatureLine {
  X1?: number;
  X2?: number;
  Y1?: number;
  Y2?: number;
}

export interface RemboursRemboursPaymentMethodRequestProperties {
  BackendID?: string;
  Carrier?: string;
  Reference?: string;
}

export interface TapToPayServicesOutputReceiptText {
  EndOfLineFlag?: boolean;
  Text?: string;
}

/**
* Store the Tap2Pay receipt.
*/
export interface StoreTap2PayReceipt extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: PaymentTransaction
  */
  PaymentTransactionID: number;
  ReceiptOutputText: TapToPayServicesOutputReceiptText[];
}

/**
* Store the TapToPay receipt.
*/
export interface StoreTapToPayReceipt extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: PaymentTransaction
  */
  PaymentTransactionID: number;
  ReceiptOutputText: TapToPayServicesOutputReceiptText[];
}

export interface TapToPayTapToPayPaymentMethodRequestProperties {
  AdditionalData?: Record<string,TAnyValue | null>;
  /**
  * Entity type: PaymentTransaction
  */
  PaymentTransactionID?: number;
  Token?: string;
  UniqueKey?: string;
}

export interface TapToPayTapToPayPaymentMethodResultProperties {
  AdditionalData?: Record<string,TAnyValue | null>;
  PaymentReference?: string;
  Token?: string;
  UniqueKey?: string;
}

/**
* Create a new UserCard
* 
* The type is required, it can optionally be attached to an User.
* When the CurrencyID is not supplied the currency of the current session will be used.
*/
export interface CreateUserCard extends RequestMessage<CreateUserCardResponse> {
  /**
  * Entity type: Currency
  * Required for UserCards that hold normal Currencies
  */
  CurrencyID?: string;
  Description?: string;
  /**
  * Entity type: UserCardType
  */
  UserCardTypeID: number;
  /**
  * Entity type: User
  */
  UserID?: number;
}

/**
* Mutate the balance on an UserCard with the given amount.
*/
export interface CreateUserCardMutation extends RequestMessageWithEmptyResponse {
  Amount: number;
  Description?: string;
  /**
  * Entity type: UserCard
  */
  UserCardID: number;
}

export interface CreateUserCardResponse extends ResponseMessage {
  /**
  * Entity type: UserCard
  */
  ID: number;
}

/**
* Get the currenct balance of an UserCard
*/
export interface GetUserCardBalance extends RequestMessage<GetUserCardBalanceResponse> {
  /**
  * Entity type: Currency
  */
  CurrencyID?: string;
  /**
  * Entity type: UserCard
  */
  UserCardID: number;
}

export interface GetUserCardBalanceResponse extends ResponseMessage {
  CurrentBalance?: UserCardsUserCardBalance;
}

/**
* Get the UserCard including the current balance
*/
export interface GetUserCardDetails extends RequestMessage<GetUserCardDetailsResponse> {
  CardNumber?: string;
  /**
  * Entity type: Currency
  */
  CurrencyID?: string;
  /**
  * Entity type: UserCard
  */
  UserCardID?: number;
}

export interface GetUserCardDetailsResponse extends ResponseMessage {
  UserCard?: UserCardsUserCardDto;
}

/**
* Returns the available UserCardTypes
*/
export interface GetUserCardTypes extends RequestMessage<GetUserCardTypesResponse> {
}

export interface GetUserCardTypesResponse extends ResponseMessage {
  Types?: UserCardsUserCardTypeDto[];
}

/**
* Returns all the UserCard for the current or requested User.
* The currency is used to convert UserCards without a currency to their monetary value. Defaults to the session Currency.
*/
export interface GetUserCardsForUser extends RequestMessage<GetUserCardsForUserResponse> {
  /**
  * Entity type: Currency
  */
  CurrencyID?: string;
  /**
  * Entity type: User
  */
  UserID?: number;
}

export interface GetUserCardsForUserResponse extends ResponseMessage {
  UserCards?: UserCardsUserCardDto[];
}

export interface UserCardServicesListUserCardDto {
  Barcode?: string;
  /**
  * Entity type: UserCard
  */
  ID: number;
  Type?: UserCardsUserCardTypeDto;
  UserFullName?: string;
}

/**
* List the mutations for a UserCard. Customers can only view the mutations of their own usercards.
*/
export interface ListUserCardMutations extends PagedResultRequest<ListUserCardMutationsResponse> {
  /**
  * Entity type: UserCard
  */
  UserCardID: number;
}

export interface UserCardServicesListUserCardMutationsDto {
  Amount: number;
  CreationTime: string;
  Description?: string;
  OrderDisplayID?: string;
  /**
  * Entity type: Order
  */
  OrderID?: number;
  OrderLineID?: number;
  Status: DataModelsUserCardMutationStatuses;
}

export interface ListUserCardMutationsResponse extends PagedResultResponse<UserCardServicesListUserCardMutationsDto> {
}

/**
* Lists all user cards, with their number, type and linked user (full) name.
* Using the `PageConfig`, you can filter on `Barcode`, `TypeID`, `FullName` and/or `UserName`.
*/
export interface ListUserCards extends RequestMessage<ListUserCardsResponse> {
  PageConfig?: PageConfig<UserCardsListUserCardsFilter>;
}

export interface ListUserCardsResponse extends PagedResultResponse<UserCardServicesListUserCardDto> {
}

export interface UserCardUserCardPaymentMethodRequestProperties {
  CardAmount?: number;
  /**
  * Entity type: UserCard
  */
  UserCardID: number;
}

