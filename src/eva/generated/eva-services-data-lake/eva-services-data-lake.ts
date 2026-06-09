import {
  RequestMessage,
  RequestMessageWithEmptyResponse,
  ResponseMessage,
  TAnyValue,
  EventLedgerEventLedgerDocument,
  OrdersDiscountAmounts,
  OrdersOpenOrderAmount,
  OrdersPaidOrderAmount,
  FinanceDtoTaxAmount,
  OrdersOrderAmount,
  DataModelsOpeningHoursType,
  SecurityFunctionalityScope,
  DataModelsCustomFieldValue,
} from '../eva-services-core';


export enum Errors
{
  /**
  * Provide either an id, a list of ids or a from/to range.
  */
  DataLakeBackfill_BatchInformationRequired = 'DataLakeBackfill:BatchInformationRequired',
  /**
  * Failed to start DataLake backfill process.
  */
  DataLakeBackfill_DataLakeBackfillProcessingFailed = 'DataLakeBackfill:DataLakeBackfillProcessingFailed',
  /**
  * You requested {requested:int32} documents, but your max was set to {limit:int32}.
  */
  DataLakeBackfill_RequestedQuantityExceedsLimit = 'DataLakeBackfill:RequestedQuantityExceedsLimit',
  /**
  * UserBatches backfill only allows from/to range.
  */
  DataLakeBackfill_UserBatchesBackfillOnlyAllowsFromTo = 'DataLakeBackfill:UserBatchesBackfillOnlyAllowsFromTo',
  /**
  * Backfill of type '{0:EVA.DataLake.Backfill.DataLakeBackfillType}' only accepts IDs.
  */
  DataLakeBackfill_BackfillTypeOnlyAcceptsIDs = 'DataLakeBackfill:BackfillTypeOnlyAcceptsIDs',
}
/**
* Manually re-export specific DataLake documents.
* 
* These types are currently supported;
* 
* * `FinancialPeriods` = 1
* * `Orders` = 2
* * `Invoices` = 3
* * `Users` = 4
* * `Discounts` = 5
* * `UserBatches` = 6 (can only be used with `From` and `To`)
* * `Cases` = 7
* * `Shipments` = 8
* * `ZonedCycleCounts` = 9
* * `UserTasks` = 10
* * `StockMutations` = 11
* * `UserLoyaltyPointMutations` = 12 (can only be used with the `ID` or `IDs`. These need to be the user ID's of which the loyalty point mutation will be exported.)
* * `LoyaltyProgramGroups` = 13 (can only be used with the `ID` or `IDs`.)
* * `LoyaltyPrograms` = 14 (can only be used with the `ID` or `IDs`.)
* * `FullStockCounts` = 15 (can only be used with the `ID` or `IDs`.)
* * `StockNotifications` = 16 (can only be used with the `ID` or `IDs`.)
* * `ProductSubscriptions` = 17 (can only be used with `From` and `To`)
* * `TransputJobs` = 18
* 
* Specify either a single `ID`, a list of `IDs`, or a datetime range `From` and `To` (inclusive).
* 
* For the following types, you can optionally specify an `OrganizationUnitID` to filter results within a datetime range:
* `FinancialPeriods`, `Orders`, `Invoices`, `Discounts`, `Cases`, `Shipments`, `ZonedCycleCounts`, `UserTasks`, `StockMutations`, `StockNotifications`.
* 
* For the following types: `Discounts`, the `OrganizationUnitID` must be a setID
* 
* As mandatory safety feature, specify the `MaxNumberOfDocuments` you'd like to run this for. When the amount of documents through above
* selection exceeds this number, this service will export NOTHING and return to you an error with the amount of documents it prevented you
* from exporting, so you can adjust your selection or expand your max.
* 
* :warning: Triggering large amounts of data may impact system performance!
* 
* :point_right: The `ID` you are returned can be used in subsequent services `DataLakeBackfillStatus` and `DataLakeBackfillCancel`.
*/
export interface DataLakeBackfill extends RequestMessage<DataLakeBackfillResponse> {
  From?: string;
  /**
  * Entity type: DataModel
  */
  ID?: number;
  /**
  * Entity type: DataModel
  */
  IDs?: number[];
  MaxNumberOfDocuments?: number;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID?: number;
  To?: string;
  Type?: BackfillDataLakeBackfillType;
}

/**
* Cancel a previous `DataLakeBackfill` request.
*/
export interface DataLakeBackfillCancel extends RequestMessageWithEmptyResponse {
  ID: string;
}

export interface DataLakeBackfillResponse extends ResponseMessage {
  ID: string;
}

/**
* Retrieve the status from a previous `DataLakeBackfill` request.
*/
export interface DataLakeBackfillStatus extends RequestMessage<DataLakeBackfillStatusResponse> {
  ID: string;
}

export interface DataLakeBackfillStatusResponse extends ResponseMessage {
  Done?: number;
  Progress?: number;
  Total?: number;
}

export enum BackfillDataLakeBackfillType {
  FinancialPeriods = 1,
  Orders = 2,
  Invoices = 3,
  Users = 4,
  Discounts = 5,
  UserBatches = 6,
  Cases = 7,
  Shipments = 8,
  ZonedCycleCounts = 9,
  UserTasks = 10,
  StockMutations = 11,
  UserLoyaltyPointMutations = 12,
  LoyaltyProgramGroups = 13,
  LoyaltyPrograms = 14,
  FullStockCounts = 15,
  StockNotifications = 16,
  ProductSubscriptions = 17,
  TransputJobs = 18,
}

/**
* Preview a datalake export. Use this service sparingly. Not all models can be previewed. This is only for testing purposes. Only a single ID can be specified at a time
*/
export interface DataLakePreview extends RequestMessage<DataLakePreviewResponse> {
  /**
  * Entity type: FinancialPeriod
  */
  FinancialPeriodID?: number;
  /**
  * Entity type: Order
  */
  OrderID?: number;
  /**
  * Entity type: StockMutation
  */
  StockMutationID?: number;
  /**
  * Entity type: Survey
  */
  SurveyID?: number;
  /**
  * Entity type: User
  */
  UserID?: number;
}

export interface DataLakePreviewResponse extends ResponseMessage {
  FinancialPeriod?: ModelsDataLakeFinancialPeriod;
  Order?: ModelsDataLakeOrder;
  StockMutation?: ModelsDataLakeStockMutation;
  Survey?: ModelsDataLakeSurvey;
  User?: ModelsDataLakeUser;
}

export interface ModelsDataLakeAccount {
  BackendCode?: string;
  BookingFlags?: string[];
  ID?: string;
  Name?: string;
  ObjectAccount?: string;
  Subsidiary?: string;
  Type?: string;
}

export interface ModelsDataLakeAddress {
  Address1?: string;
  Address2?: string;
  AddressedTo?: string;
  City?: string;
  CountryID?: string;
  CountrySubdivisionID?: string;
  District?: string;
  FirstName?: string;
  HouseNumber?: string;
  ID?: string;
  LastName?: string;
  Region?: string;
  State?: string;
  Street?: string;
  Subdistrict?: string;
  ZipCode?: string;
}

export interface ModelsDataLakeAppointment {
  CancellationReason?: string;
  CustomerID?: string;
  DataLakeType?: string;
  Date: string;
  Description?: string;
  Duration: number;
  DurationAfter?: number;
  DurationBefore?: number;
  EmployeeCompletionTime?: string;
  EmployeeID?: string;
  EmployeeStartTime?: string;
  Event?: ModelsDataLakeEvent;
  EventLocationID?: string;
  GenerationTime: string;
  ID?: string;
  OrderID?: string;
  OrderLineID?: string;
  OrganizationUnitID?: string;
  ProductID?: string;
  Remark?: string;
  Status?: string;
}

export interface ModelsDataLakeAssortment {
  Code?: string;
  DataLakeType?: string;
  GenerationTime: string;
  ID?: string;
  Name?: string;
  OrganizationUnits?: ModelsDataLakeSimpleOrganizationUnit[];
  Products?: ModelsDataLakeAssortmentProduct[];
}

export interface ModelsDataLakeAssortmentProduct {
  AnnouncementDate?: string;
  End?: string;
  PreSaleDate?: string;
  /**
  * Entity type: Product
  */
  ProductBackendID?: string;
  /**
  * Entity type: Product
  */
  ProductID: number;
  /**
  * One or more states. `PreRelease`, `UseUp`, `DisableBackorder`, `DeliveryOnly`, `CarryOutOnly`, `DisableDelivery`, `DisablePickup`, `DisableBackorder` or `NonSellable`
  */
  ProductStatus?: string[];
  ShipmentDate?: string;
  Start?: string;
}

export interface ModelsDataLakeCalculatedPrice {
  Date?: string;
  Label?: string;
  Price?: number;
  ProductID?: string;
}

export interface ModelsDataLakeCase {
  AssignedOrganizationUnitID?: string;
  AssigneeID?: string;
  BackendID?: string;
  ClosingTime?: string;
  CreationTime: string;
  CustomFields?: ModelsDataLakeSimpleCustomField[];
  CustomerBackendID?: string;
  CustomerCountryID?: string;
  CustomerID?: string;
  DataLakeType?: string;
  Description?: string;
  GenerationTime: string;
  ID?: string;
  Interactions?: ModelsDataLakeInteraction[];
  LastInteractionTime?: string;
  LastModificationTime?: string;
  OrderID?: string;
  OriginatingOrganizationUnitID?: string;
  Priority?: ModelsDataLakeEnum;
  ReportingTime?: string;
  Status?: ModelsDataLakeEnum;
  Summary?: string;
  Title?: string;
  Topic?: ModelsDataLakeCaseTopic;
}

export interface ModelsDataLakeCaseTopic {
  BackendID?: string;
  Description?: string;
  ID?: string;
  Name?: string;
  ParentID?: number;
}

export interface ModelsDataLakeCashCorrection {
  Amount: number;
  CashTransactionLedger?: ModelsDataLakeCashTransactionLedger;
  CashTransactionLedgerID?: string;
  FinancialPeriodID?: string;
  ID?: string;
  Remark?: string;
  Type?: string;
}

export interface ModelsDataLakeCashDeposit {
  Amount: number;
  CashTransactionLedger?: ModelsDataLakeCashTransactionLedger;
  CashTransactionLedgerID?: string;
  CreationTime: string;
  CurrencyID?: string;
  Details?: ModelsDataLakeCashDepositDetail;
  DeviceID?: string;
  Number?: string;
  PaymentType?: ModelsDataLakePaymentType;
  PaymentTypeID?: string;
  Status?: string;
}

export interface ModelsDataLakeCashDepositDetail {
  BankNotes?: Record<string,number>;
  Coins?: Record<string,number>;
}

export interface ModelsDataLakeCashExpense {
  Amount: number;
  BlobID?: string;
  CashTransactionLedgerID?: string;
  Description?: string;
  FinancialPeriodID?: string;
  TaxCodeID?: string;
  TaxRate: number;
  Type?: ModelsDataLakeCashExpenseType;
  TypeID?: string;
}

export interface ModelsDataLakeCashExpenseType {
  BackendID?: string;
  ID?: string;
  Name?: string;
}

export interface ModelsDataLakeCashJournal {
  ClosingAmount?: number;
  ClosingDetailsObject?: ModelsDataLakeCashJournalClosingDetails;
  ClosingDeviation?: number;
  ClosingTime?: string;
  CurrencyID?: string;
  DeviceID?: string;
  DeviceName?: string;
  DeviceTypeID?: string;
  FinancialPeriodID?: string;
  ID?: string;
  OpeningAmount: number;
  OpeningDetailsObject?: ModelsDataLakeCashJournalOpeningDetails;
  OpeningDeviation?: number;
  OpeningTime: string;
  PaymentType?: ModelsDataLakePaymentType;
  PaymentTypeID?: string;
  PreviousCashJournalID?: string;
  StationID?: string;
  Type?: string;
}

export interface ModelsDataLakeCashJournalClosingDetails {
  BankNotes?: Record<string,number>;
  CashDeposits?: Record<string,number>;
  Coins?: Record<string,number>;
  Data?: TAnyValue;
}

export interface ModelsDataLakeCashJournalOpeningDetails {
  BankNotes?: Record<string,number>;
  CashDeposits?: Record<string,number>;
  Coins?: Record<string,number>;
}

export interface ModelsDataLakeCashTransactionLedger {
  Amount: number;
  CashJournalID?: string;
  CreatedByID?: string;
  CreationTime: string;
  CurrencyID?: string;
  Description?: string;
  Details?: ModelsDataLakeCashTransactionLedgerDetail;
  GroupID?: string;
  ID?: string;
  PaymentTransactionID?: string;
  Type?: string;
}

export interface ModelsDataLakeCashTransactionLedgerDetail {
  BankNotes?: Record<string,number>;
  CashDeposits?: Record<string,number>;
  Coins?: Record<string,number>;
}

export interface ModelsDataLakeCompany {
  BackendID?: string;
  BillingAddress?: ModelsDataLakeAddress;
  CustomFields?: ModelsDataLakeSimpleCustomField[];
  EmailAddress?: string;
  EntityType?: string;
  EstablishmentNumber?: string;
  FiscalID?: string;
  ID?: string;
  IsDeleted: boolean;
  IsInvoicing: boolean;
  Name?: string;
  PhoneNumber?: string;
  RegistrationAddress?: ModelsDataLakeAddress;
  RegistrationCountryID?: string;
  RegistrationCountrySubdivisionID?: string;
  RegistrationNumber?: string;
  ShippingAddress?: ModelsDataLakeAddress;
  SingleUse: boolean;
  TaxOfficeNumber?: string;
  TaxRecipientCode?: string;
  TaxRecipientEmail?: string;
  TaxRegistrationNumber?: string;
  Type?: string;
}

export interface ModelsDataLakeCompanyExport extends ModelsDataLakeCompany {
  DataLakeType?: string;
  GenerationTime: string;
}

export interface ModelsDataLakeDeliveryOrderData {
  DeliveryService?: string;
  DeliveryTimeFrom?: string;
  DeliveryTimeTo?: string;
  PickUpPointID?: string;
  PickUpPointName?: string;
}

export interface ModelsDataLakeDigitalGiftCardDetails {
  AccessToken?: string;
  From?: string;
  GiftCardID?: string;
  PIN?: string;
  ScheduledSendingDateTimeOffset?: string;
  Text?: string;
  Theme?: string;
  To?: string;
  ToEmailAddress?: string;
  UpdateURL?: string;
}

export interface ModelsDataLakeDiscount {
  ActionData?: string;
  ActionType?: string;
  BackendID?: string;
  Budget?: number;
  CompliancyRule?: string;
  ConditionType?: string;
  ConditionTypes?: string[];
  Conditions?: ModelsDataLakeDiscountCondition[];
  CreationTime: string;
  CurrencyConstraint?: string;
  CurrencyID?: string;
  DataLakeType?: string;
  DaysApplicable?: string;
  DeactivateWhenBudgetReached: boolean;
  DeactivationReasons?: string;
  Description?: string;
  DiscountCampaignID?: string;
  DiscountLayerID?: string;
  DiscountOrderType?: string;
  Enabled: boolean;
  EndDate?: string;
  GenerationTime: string;
  ID?: string;
  IsArchived: boolean;
  LastModificationTime?: string;
  LedgerClassID?: string;
  MarketingDescription?: string;
  MaximumUsage?: number;
  MaximumUsagePerOrder?: number;
  MaximumUsagePerUser?: number;
  OrderTypeID?: string;
  OrganizationUnitSetID?: string;
  PromotionLabel?: string;
  StartDate?: string;
  TotalDiscountGiven: number;
  Trigger?: string;
  TriggerID?: string;
  UsageCount: number;
}

export interface ModelsDataLakeDiscountCampaign {
  BackendID?: string;
  BackendSystemID?: string;
  Budget?: number;
  CurrencyID?: string;
  DataLakeType?: string;
  DeactivateDiscountsWhenBudgetIsReached: boolean;
  Description?: string;
  EndDate?: string;
  GenerationTime: string;
  ID?: string;
  IsDeleted: boolean;
  KeepDiscountsWithinCampaignTimespan: boolean;
  Name?: string;
  StartDate?: string;
  TotalDiscountGiven: number;
}

export interface ModelsDataLakeDiscountCondition {
  Data?: string;
  ID?: string;
  Type?: string;
}

export interface ModelsDataLakeDiscountDetail {
  Amount: number;
  CompliancyRule?: string;
  DiscountBackendID?: string;
  DiscountID?: string;
  DiscountOrderLineID?: string;
}

export interface ModelsDataLakeDiscountLayer {
  DataLakeType?: string;
  Description?: string;
  GenerationTime: string;
  ID?: string;
  IsDeleted: boolean;
  IsExclusive: boolean;
  Name?: string;
  Sequence: number;
}

export interface ModelsDataLakeEnum {
  Description?: string;
  ID?: string;
  Name?: string;
}

export interface ModelsDataLakeEnum_WithBackendID extends ModelsDataLakeEnum {
  BackendID?: string;
}

export interface ModelsDataLakeEvent {
  EventTypeID?: string;
  ID?: string;
  Name?: string;
}

export interface ModelsDataLakeEventLedger extends EventLedgerEventLedgerDocument {
  DataLakeType?: string;
  GenerationTime: string;
}

export interface ModelsDataLakeFinancialEvent {
  Amount: number;
  CashJournalID?: string;
  CurrencyID?: string;
  DiscountID?: string;
  FinancialPeriodID?: string;
  ID?: string;
  InvoiceDisputeID?: string;
  InvoiceDisputeResolveActionID?: string;
  InvoiceID?: string;
  InvoiceLine?: ModelsDataLakeFinancialEvent_InvoiceLineInfo;
  InvoiceLineID?: string;
  LedgerClassID?: string;
  Order?: ModelsDataLakeFinancialEvent_OrderInfo;
  OrderID?: string;
  OrderLine?: ModelsDataLakeFinancialEvent_OrderLineInfo;
  OrderLineID?: string;
  OrganizationUnit?: ModelsDataLakeSimpleOrganizationUnit;
  PaymentTransaction?: ModelsDataLakeFinancialEvent_PaymentTransactionInfo;
  PaymentTransactionID?: string;
  ProcessingError?: string;
  Product?: ModelsDataLakeFinancialEvent_ProductInfo;
  ProductID?: string;
  Reference?: string;
  Remark?: string;
  Shipment?: ModelsDataLakeFinancialEvent_ShipmentInfo;
  ShipmentID?: string;
  ShipmentLine?: ModelsDataLakeFinancialEvent_ShipmentLineInfo;
  ShipmentLineID?: string;
  Status?: string;
  StockMutation?: ModelsDataLakeFinancialEvent_StockMutationInfo;
  StockMutationID?: string;
  SubType?: string;
  TaxCode?: string;
  TaxRate?: number;
  TaxRateCategory?: string;
  Type?: string;
}

export interface ModelsDataLakeFinancialEvent_InvoiceLineInfo {
  ID?: string;
  QuantityInvoiced: number;
  UnitPrice?: number;
  UnitPriceInTax: number;
}

export interface ModelsDataLakeFinancialEvent_OrderInfo {
  ID?: string;
  SoldToOrganizationUnitID?: string;
  TotalAmount: number;
  TotalAmountInTax: number;
}

export interface ModelsDataLakeFinancialEvent_OrderLineInfo {
  Amount: number;
  AmountInTax: number;
  ID?: string;
  QuantityOrdered: number;
  TaxRate: number;
}

export interface ModelsDataLakeFinancialEvent_PaymentTransactionInfo {
  ID?: string;
  PaymentType?: string;
  PaymentTypeCode?: string;
}

export interface ModelsDataLakeFinancialEvent_ProductInfo {
  ID?: string;
  LedgerClassID?: string;
}

export interface ModelsDataLakeFinancialEvent_ShipmentInfo {
  ID?: string;
  ShipmentDate?: string;
  TotalQuantityShipped: number;
}

export interface ModelsDataLakeFinancialEvent_ShipmentLineInfo {
  ID?: string;
  QuantityShipped: number;
}

export interface ModelsDataLakeFinancialEvent_StockMutationInfo {
  ID?: string;
  Reason?: string;
  Remark?: string;
  UnitCost?: number;
}

export interface ModelsDataLakeFinancialEvents {
  DataLakeType?: string;
  Events?: ModelsDataLakeFinancialEvent[];
  GenerationTime: string;
}

export interface ModelsDataLakeFinancialPeriod {
  AutoClosed: boolean;
  AutoOpened: boolean;
  CashCorrections?: ModelsDataLakeCashCorrection[];
  CashDeposits?: ModelsDataLakeCashDeposit[];
  CashJournals?: ModelsDataLakeCashJournal[];
  ClosingTime?: string;
  CostPriceCurrencyID?: string;
  CurrencyID?: string;
  DataLakeType?: string;
  Employees?: ModelsDataLakeFinancialPeriodEmployee[];
  Expenses?: ModelsDataLakeCashExpense[];
  FinancialPeriodAuditID?: string;
  FinancialPeriodNumber?: string;
  GenerationTime: string;
  ID?: string;
  LoyaltyProgram?: ModelsDataLakeFinancialPeriodLoyaltyProgram;
  /**
  * User who opened the period
  */
  OpenedByUser?: ModelsDataLakeSimpleUser;
  OpeningTime?: string;
  OrganizationUnitID?: string;
  PreviousFinancialPeriodID?: string;
  Status?: string;
  /**
  * User who closed the period
  */
  User?: ModelsDataLakeSimpleUser;
}

export interface ModelsDataLakeFinancialPeriodEmployee {
  CommissionShare?: number;
  UserID?: string;
}

export interface ModelsDataLakeFinancialPeriodExport {
  CreationTime: string;
  Data?: string;
  DataLakeType?: string;
  FinancialPeriodID?: string;
  GenerationTime: string;
  ID?: string;
  LastModificationTime?: string;
  Name?: string;
  TransputJobStatus?: string;
  Trigger?: string;
}

export interface ModelsDataLakeFinancialPeriodLoyaltyProgram {
  ID?: string;
}

export interface ModelsDataLakeFlight {
  AirlineCompanyCode?: string;
  DestinationAirportCode?: string;
  DestinationCode: number;
  FlightNumber?: string;
  FromDate: string;
  ID?: string;
  OrganizationUnitID?: string;
  ToDate: string;
}

export interface ModelsDataLakeFullProduct {
  BackendID?: string;
  BackendStatus?: string;
  BackendSystemID?: string;
  Barcodes?: string[];
  BrandID?: string;
  BrandName?: string;
  CommodityCode?: string;
  CountryOfOriginID?: string;
  CustomID?: string;
  ID?: string;
  LedgerClassID?: string;
  LogicalLevel?: string;
  ManufacturerID?: string;
  Name?: string;
  OrganizationUnit?: ModelsDataLakeSimpleOrganizationUnit;
  ParentProductID?: string;
  Requirements?: ModelsDataLakeProductRequirement[];
  TaxCode?: string;
  Type?: string[];
}

export interface ModelsDataLakeFullStockCount {
  AllowStockMutationsDuringCount: boolean;
  CompletionTime?: string;
  CreatedByID?: string;
  CreationTime: string;
  CurrencyID?: string;
  DataLakeType?: string;
  GenerationTime: string;
  ID?: string;
  IsCompleted: boolean;
  IsExternal: boolean;
  Labels?: ModelsDataLakeFullStockCount_DataLakeFullStockCountLabel[];
  OrganizationUnitID?: string;
  Products?: ModelsDataLakeFullStockCount_DataLakeFullStockCountLabelProduct[];
  StartTime?: string;
  TotalCounted: number;
  TotalDeviations: number;
  TotalNegativeDeviationAmount: number;
  TotalPositiveDeviationAmount: number;
  TotalProducts: number;
  Type?: string;
}

export interface ModelsDataLakeFullStockCount_DataLakeFullStockCountLabel {
  ID?: string;
  Name?: string;
  State?: string;
  StockLabel?: string;
}

export interface ModelsDataLakeFullStockCount_DataLakeFullStockCountLabelProduct {
  AbsoluteDeviationAmount: number;
  AbsoluteDeviationQuantity: number;
  CountQuantity: number;
  CurrentQuantity: number;
  CycleCountCreated: boolean;
  DeviationAmount: number;
  DeviationQuantity: number;
  ProductBackendID?: string;
  ProductID?: string;
  SerialNumberRequired: boolean;
  StockLabelID?: string;
  StockLabelName?: string;
  StockMutationQuantity: number;
}

export interface ModelsDataLakeGeneralLedger {
  Account?: ModelsDataLakeAccount;
  Amount: number;
  CurrencyID?: string;
  Description?: string;
  FinancialEventID?: string;
  FinancialPeriodID?: string;
  ID?: string;
  InvoiceID?: string;
  IsProcessed: boolean;
  Offset1?: string;
  Offset2?: string;
  Offset3?: string;
  Offset4?: string;
  Offset5?: string;
  Offset6?: string;
  Offset7?: string;
  Offset8?: string;
  Offset9?: string;
  OrderID?: string;
  OrderLineID?: string;
  OrganizationUnit?: ModelsDataLakeSimpleOrganizationUnit;
  PaymentTransactionID?: string;
  Reference?: string;
  Remark?: string;
  ShipmentID?: string;
  Source?: string;
  StockMutationID?: string;
  TaxAmount?: number;
  TaxBookingsCode?: string;
  TaxCode?: string;
  TaxRate?: number;
}

export interface ModelsDataLakeGeneralLedgers {
  DataLakeType?: string;
  GenerationTime: string;
  Ledgers?: ModelsDataLakeGeneralLedger[];
}

export interface ModelsDataLakeGiftCardPaymentDetails {
  ActionType?: string;
  CardID?: string;
  CardNumber?: string;
  CurrencyID?: string;
  Description?: string;
  ExchangeRate?: number;
  IsSuccessful: boolean;
  NewBalance?: number;
  OldBalance?: number;
  Reference?: string;
  SubType?: string;
  TransactionID?: string;
}

export interface ModelsDataLakeGiftWrappingOptions {
  GreetingCardProductID?: string;
  Message?: string;
  WrapIndividually: boolean;
  WrapOrder: boolean;
  Wraps?: ModelsDataLakeGiftWrappingOptionsWrap[];
}

export interface ModelsDataLakeGiftWrappingOptionsWrap {
  GreetingCardProductID?: string;
  Lines?: ModelsDataLakeGiftWrappingOptionsWrapLine[];
  Message?: string;
}

export interface ModelsDataLakeGiftWrappingOptionsWrapLine {
  OrderLineID?: string;
  Quantity: number;
}

export interface ModelsDataLakeInteraction {
  BackendID?: string;
  ID?: string;
  Text?: string;
  Type?: ModelsDataLakeEnum;
}

export interface ModelsDataLakeInvoiceExport {
  ActionType?: string;
  CreationTime: string;
  DataLakeType?: string;
  ErrorData?: string;
  ExternalStatus?: string;
  ExternalStatusTime?: string;
  FinancialPeriodID?: string;
  GenerationTime: string;
  ID?: string;
  InvoiceID?: string;
  LastModificationTime?: string;
  Name?: string;
  OrganizationUnitID?: string;
  StationID?: string;
  Status?: string;
  TransputJobStatus?: string;
}

export interface ModelsDataLakeLoyaltyProgram {
  AllowPointAwarding: boolean;
  AllowPointsAsPaymentMethod: boolean;
  AllowPointsToBeWithdrawn: boolean;
  AutoSubscribeCustomer: boolean;
  BackendID?: string;
  Budget?: number;
  BudgetCurrencyID?: string;
  Conditions?: ModelsDataLakeLoyaltyProgramCondition[];
  DataLakeType?: string;
  DeactivateWhenBudgetIsReached: boolean;
  Description?: string;
  DiscountsEnabled: boolean;
  EndDate?: string;
  GenerationTime: string;
  Handler?: string;
  ID?: string;
  IsActive: boolean;
  IsDeleted: boolean;
  LoyaltyPointsEnabled: boolean;
  LoyaltyProgramGroupID?: string;
  Name?: string;
  PaymentMethodsEnabled: boolean;
  PaymentTypes?: ModelsDataLakeLoyaltyProgramPaymentType[];
  PointAwardingRules?: ModelsDataLakeLoyaltyProgramPointAwardingRule[];
  PointExpirationPolicyData?: string;
  PointExpirationPolicyType?: string;
  PointNamePlural?: string;
  PointNameSingular?: string;
  PointPendingPolicyData?: string;
  PointPendingPolicyType?: string;
  PriceLists?: string[];
  ProductLimitations?: ModelsDataLakeLoyaltyProgramProductLimitation[];
  ReloadPolicy?: string;
  RequireCustomer: boolean;
  RequiredCustomFields?: string[];
  RequiresSubscribedCustomer: boolean;
  RequiresSubscriptionValidation: boolean;
  StartDate?: string;
  Status?: string;
  Type?: string;
  UsedBudget: number;
  UserBudget?: number;
  UserMaximumUsage?: number;
}

export interface ModelsDataLakeLoyaltyProgramBadge {
  BackendID?: string;
  Category?: string;
  Conditions?: ModelsDataLakeLoyaltyProgramBadge_DataLakeLoyaltyProgramBadgeCondition[];
  CustomFieldFilterData?: string;
  DataLakeType?: string;
  Description?: string;
  GenerationTime: string;
  ID?: string;
  IsManual: boolean;
  LoyaltyProgramID?: string;
  Name?: string;
  PointsToAward?: number;
  PointsToReach?: number;
  ProductSearchTemplateID?: number;
  Sequence: number;
  TargetQuantity?: number;
  UniqueProductsOnly: boolean;
}

export interface ModelsDataLakeLoyaltyProgramBadge_DataLakeLoyaltyProgramBadgeCondition {
  Data?: string;
  ID?: string;
  RequireForVisibility: boolean;
  Type?: string;
}

export interface ModelsDataLakeLoyaltyProgramBenefit {
  Description?: string;
  DiscountID?: string;
  ID?: string;
  PointThreshold?: number;
  Title?: string;
}

export interface ModelsDataLakeLoyaltyProgramCondition {
  BackendID?: string;
  ID?: string;
  Type?: string;
}

export interface ModelsDataLakeLoyaltyProgramGroup {
  BackendID?: string;
  Budget?: number;
  BudgetCurrencyID?: string;
  DataLakeType?: string;
  DeactivateWhenBudgetIsReached: boolean;
  EndDate?: string;
  GenerationTime: string;
  ID?: string;
  IsActive: boolean;
  IsDeleted: boolean;
  Name?: string;
  StartDate?: string;
  Status?: string;
  TaxExemptionCode?: string;
  UsedBudget: number;
}

export interface ModelsDataLakeLoyaltyProgramPaymentType {
  AllowPartialPayment: boolean;
  BackendID?: string;
  Budget?: number;
  DeductFromPaymentTypeUserBudget: boolean;
  DeductFromProgramUserBudget: boolean;
  ExcludeFromProgramBudget: boolean;
  ID?: string;
  MaximumAmountPerOrder?: number;
  MaximumPercentageOfUserBudgetPerOrder?: number;
  OverallQuantityLimitPerOrder?: number;
  OverallQuantityLimitPerUser?: number;
  PaymentTypeID?: string;
  QuantityLimitPerOrder?: number;
  QuantityLimitPerUser?: number;
  Required: boolean;
  Sequence: number;
  TaxHandling?: string;
  UsedBudget?: number;
  UserBudget?: number;
  UserMaximumUsage?: number;
}

export interface ModelsDataLakeLoyaltyProgramPointAwardingRule {
  ApplyRecursive: boolean;
  BackendID?: string;
  BackendSystemID?: string;
  Conditions?: ModelsDataLakeLoyaltyProgramPointAwardingRuleCondition[];
  Description?: string;
  DurationInterval?: number;
  DurationType?: string;
  Enabled: boolean;
  EndDate?: string;
  ID?: string;
  MarketingDescription?: string;
  Name?: string;
  OrganizationUnitSetID?: string;
  PointExpirationPolicyData?: string;
  PointExpirationPolicyType?: string;
  PointPendingPolicyData?: string;
  PointPendingPolicyType?: string;
  PointsToAward: number;
  StartDate: string;
}

export interface ModelsDataLakeLoyaltyProgramPointAwardingRuleCondition {
  BackendID?: string;
  Data?: string;
  ID?: string;
  Type?: string;
}

export interface ModelsDataLakeLoyaltyProgramProductLimitation {
  ApplyToPriceList: boolean;
  BackendID?: string;
  ID?: string;
  Name?: string;
  OverallQuantityLimitPerOrder?: number;
  OverallQuantityLimitPerUser?: number;
  QuantityLimitPerOrder?: number;
  QuantityLimitPerUser?: number;
}

export interface ModelsDataLakeLoyaltyProgramTier {
  BackendID?: string;
  Benefits?: ModelsDataLakeLoyaltyProgramBenefit[];
  DataLakeType?: string;
  GenerationTime: string;
  ID?: string;
  ImageBlobID?: string;
  IsDefault: boolean;
  LoyaltyProgramID?: string;
  Name?: string;
  PointThreshold: number;
  SendMailOnAssign: boolean;
}

export interface ModelsDataLakeOpenOrderAmounts {
  CurrencyID?: string;
  Discounts?: OrdersDiscountAmounts;
  Open?: OrdersOpenOrderAmount;
  OpenAmountIsZero: boolean;
  Paid?: OrdersPaidOrderAmount;
  SubtotalExDiscount: number;
  Taxes?: FinanceDtoTaxAmount[];
  Total?: OrdersOrderAmount;
  Types?: ModelsDataLakeOrderAmountsByType;
  UnroundedTotal?: OrdersOrderAmount;
}

export interface ModelsDataLakeOrder {
  Amounts?: ModelsDataLakeOpenOrderAmounts;
  BackendID?: string;
  BackendSystemID?: string;
  BillingAddress?: ModelsDataLakeAddress;
  Blobs?: ModelsDataLakeOrderBlob[];
  BoardingPass?: ModelsDataLakeOrderFlightData;
  CaptureDate?: string;
  Company?: ModelsDataLakeCompany;
  CompletionDate?: string;
  CreatedByID?: string;
  CreationTime: string;
  CurrencyID?: string;
  CustomFields?: ModelsDataLakeSimpleCustomField[];
  CustomStatus?: string[];
  Customer?: ModelsDataLakeSimpleUser;
  CustomerOrderID?: string;
  CustomerReference?: string;
  DataLakeType?: string;
  DeliveryDate?: string;
  DeliveryOrderData?: ModelsDataLakeDeliveryOrderData;
  Description?: string;
  FiscalID?: string;
  GenerationTime: string;
  GiftWrapping?: ModelsDataLakeGiftWrappingOptions;
  GroupID?: string;
  HasConfirmedPayments: boolean;
  HasProductSubscriptions: boolean;
  HasReturns: boolean;
  ID?: string;
  InvoiceDate?: string;
  IsCompleted: boolean;
  IsDelivered: boolean;
  IsInvoiced: boolean;
  IsPaid: boolean;
  IsShipped: boolean;
  IsTaxExempt: boolean;
  LastModificationTime?: string;
  Lines?: ModelsDataLakeOrderLine[];
  LoyaltyProgramID?: string;
  OrderCustomStatus?: ModelsDataLakeEnum_WithBackendID;
  OrderCustomType?: ModelsDataLakeEnum_WithBackendID;
  OrderLedgers?: ModelsDataLakeOrderLedger[];
  OrderProperties?: string[];
  OriginatingOrderID?: string;
  OriginatingOrganizationUnit?: ModelsDataLakeSimpleOrganizationUnit;
  PaymentDate?: string;
  Payments?: ModelsDataLakePayment[];
  PickupOrganizationUnit?: ModelsDataLakeSimpleOrganizationUnit;
  PlacementDate?: string;
  Properties: number;
  Remark?: string;
  RepairID?: string;
  ShipFromOrganizationUnit?: ModelsDataLakeSimpleOrganizationUnit;
  ShipToOrganizationUnit?: ModelsDataLakeSimpleOrganizationUnit;
  ShipmentDate?: string;
  ShippingAddress?: ModelsDataLakeAddress;
  SoldFromOrganizationUnit?: ModelsDataLakeSimpleOrganizationUnit;
  SoldToOrganizationUnit?: ModelsDataLakeSimpleOrganizationUnit;
  StationID?: string;
  Status?: string;
  TotalAmount: number;
  TotalAmountIncludingTaxes: number;
  TotalAmountInvoiced: number;
  TotalItems: number;
  TotalLineCount: number;
  TotalTaxAmount: number;
  Type?: string;
  UserAgent?: string;
  VatNumber?: string;
}

export interface ModelsDataLakeOrderAmountsByType {
  Discount?: OrdersOrderAmount;
  DownPayment?: OrdersOrderAmount;
  ExtraCosts?: OrdersOrderAmount;
  GiftWrappingCosts?: OrdersOrderAmount;
  NormalProduct?: OrdersOrderAmount;
  PriceCorrection?: OrdersOrderAmount;
  ReturnCosts?: OrdersOrderAmount;
  Service?: OrdersOrderAmount;
  ShippingCosts?: OrdersOrderAmount;
}

export interface ModelsDataLakeOrderBlob {
  BlobID: string;
  InvoiceID?: string;
  Name?: string;
  OrderLineID?: string;
  ShipmentID?: string;
  Type?: string;
}

export interface ModelsDataLakeOrderExport extends ModelsDataLakeOrderExportBase {
  DataLakeType?: string;
  IsDelivery: boolean;
}

export interface ModelsDataLakeOrderExportBase {
  CreationTime: string;
  Data?: string;
  DataLakeType?: string;
  ExportType?: string;
  GenerationTime: string;
  ID?: string;
  LastModificationTime?: string;
  Lines?: ModelsDataLakeOrderExportLine[];
  Name?: string;
  OrderFulfillmentID?: string;
  OrderID?: string;
  ShipFromOrganizationUnitID?: string;
  ShipToOrganizationUnitID?: string;
  TransputJobStatus?: string;
}

export interface ModelsDataLakeOrderExportLine {
  BackendReference?: string;
  OrderLineID?: string;
  QuantityCancelled: number;
  QuantityExported: number;
}

export interface ModelsDataLakeOrderFlightData {
  AirlineCompanyCode?: string;
  Cabin?: string;
  CheckinSequence: number;
  Data?: string;
  DataLength?: string;
  DepartingAirportCode?: string;
  DestinationAirportCode?: string;
  Flight?: ModelsDataLakeFlight;
  FlightNumber: number;
  Format?: string;
  JulianDate: number;
  Name?: string;
  NumberOfLegs: number;
  OperatingCarrierPNRCode?: string;
  Seat?: string;
  Status: number;
  Success: boolean;
  Type?: string;
}

export interface ModelsDataLakeOrderFulfillment {
  CreationTime: string;
  Data?: string;
  DataLakeType?: string;
  FulfillmentMethod?: string;
  GenerationTime: string;
  ID?: string;
  IsDelivery: boolean;
  LastModificationTime?: string;
  Lines?: ModelsDataLakeOrderFulfillmentLine[];
  OrderID?: string;
  OrderSoldFromOrganizationUnit?: ModelsDataLakeSimpleOrganizationUnit;
  ReceivingOrganizationUnit?: ModelsDataLakeSimpleOrganizationUnit;
  ReferenceNumber?: string;
  ShippingOption?: string;
  Source?: string;
  SupplierOrganizationUnit?: ModelsDataLakeSimpleOrganizationUnit;
}

export interface ModelsDataLakeOrderFulfillmentLine {
  CancellationReason?: string;
  CreationTime: string;
  ID?: string;
  LastModificationTime?: string;
  OrderLineID?: string;
  Status?: string;
}

export interface ModelsDataLakeOrderLedger {
  CreatedBy?: ModelsDataLakeSimpleUser;
  CreationTime: string;
  Description?: string;
  ID: number;
  NewValue?: string;
  OldValue?: string;
  OrderLineID?: string;
  Type?: string;
}

export interface ModelsDataLakeOrderLine {
  AdditionalData?: Record<string,string | null>;
  Amounts?: ModelsDataLakeOrderLineAmounts;
  AvailabilityStatus?: string;
  BackendReference?: string;
  CancellationReason?: string;
  CostPriceCurrencyID?: string;
  CreatedByID?: string;
  CreationTime: string;
  CurrencyID?: string;
  CustomFields?: ModelsDataLakeSimpleCustomField[];
  CustomOrderLineType?: string;
  Description?: string;
  DigitalGiftCardDetails?: ModelsDataLakeDigitalGiftCardDetails;
  DiscountAmount: number;
  DiscountCouponCode?: string;
  DiscountCouponID?: string;
  DiscountID?: string;
  Discounts?: ModelsDataLakeDiscountDetail[];
  ExpectedAvailabilityDate?: string;
  FulfillmentOrganizationUnitID?: string;
  FulfillmentStatus?: string;
  ID?: string;
  IsCancelled: boolean;
  IsCarryOut: boolean;
  IsCompleted: boolean;
  IsDelivery: boolean;
  IsExported: boolean;
  IsInvoiced: boolean;
  /**
  * Don't use this, rely on `IsCarryOut` and `IsDelivery` instead
  */
  IsOrdered: boolean;
  /**
  * Don't use this, rely on `IsCarryOut` and `IsDelivery` instead
  */
  IsReservation: boolean;
  IsShipped: boolean;
  LastModificationTime?: string;
  OriginalAmountInTax?: number;
  OriginalUnitPrice?: number;
  OriginalUnitPriceInTax?: number;
  ParentID?: string;
  PreSaleDate?: string;
  Product?: ModelsDataLakeProduct;
  ProductRequirements?: ModelsDataLakeProductRequirementValue[];
  ProductVariationLines?: ModelsDataLakeProductVariationLine[];
  QuantityCancelled: number;
  QuantityCommitted: number;
  QuantityDelivered: number;
  QuantityExported: number;
  QuantityInvoiced: number;
  QuantityOrdered: number;
  QuantityReserved: number;
  QuantityReturned: number;
  QuantityShipped: number;
  Reference?: string;
  RelatedOrderLineID?: string;
  Remark?: string;
  RequestedDate?: string;
  ReturnReason?: ModelsDataLakeReturnReason;
  ReturnedOrderID?: string;
  ReturnedOrderLineID?: string;
  SerialNumber?: string;
  ShippingMethod?: string;
  SoldBy?: ModelsDataLakeSimpleUser;
  TaxCodeID?: string;
  TaxDetails?: ModelsDataLakeTaxDetails[];
  TaxRate: number;
  TotalQuantityToShip: number;
  Type?: string;
  UnitCost?: number;
  UnitPrice: number;
  UnitPriceBeforeCorrection?: number;
  UnitPriceBeforeCorrectionInTax?: number;
  UnitPriceCorrectionReason?: ModelsDataLakeEnum;
  UnitPriceInTax: number;
  UnitPricePriceListID?: string;
}

export interface ModelsDataLakeOrderLineAmounts {
  DiscountAmount: number;
  NetTotalAmount: number;
  NetTotalAmountInTax: number;
  NetTotalTaxAmount: number;
  TotalAmount: number;
  TotalAmountInTax: number;
  TotalTaxAmount: number;
}

export interface ModelsDataLakeOrganizationUnit {
  Address?: ModelsDataLakeAddress;
  BIC?: string;
  BackendCompanyID?: string;
  BackendID?: string;
  BackendRelationID?: string;
  BankAccount?: string;
  BranchNumber?: string;
  CashFloat?: number;
  CompanyID?: string;
  CompanyName?: string;
  CostPriceCalculationMethod?: string;
  CostPriceCurrencyID?: string;
  CountryID?: string;
  CountrySubdivisionID?: string;
  CurrencyID?: string;
  CustomFields?: ModelsDataLakeSimpleCustomField[];
  Description?: string;
  Devices?: ModelsDataLakeOrganizationUnit_DataLakeOrganizationUnitDevice[];
  EmailAddress?: string;
  EstablishmentNumber?: string;
  EvaID?: string;
  GlobalLocationNumber?: string;
  ID?: string;
  IpAddress?: string;
  IsArchived: boolean;
  IsDeleted: boolean;
  LanguageID?: string;
  LastArchivedOn?: string;
  Latitude?: number;
  Longitude?: number;
  Name?: string;
  Notes?: string;
  OpeningHours?: ModelsDataLakeOrganizationUnit_DataLakeOrganizationUnitOpeningHours[];
  ParentID?: string;
  PhoneNumber?: string;
  Region?: string;
  RegisterCashLimit?: number;
  RegistrationNumber?: string;
  SafeCashLimit?: number;
  Status?: string;
  Subnet?: string;
  TimeZone?: string;
  Type?: string[];
  UseForAccounting: boolean;
  VatNumber?: string;
  Website?: string;
}

export interface ModelsDataLakeOrganizationUnit_DataLakeOrganizationUnitDevice {
  Address?: string;
  BackendID?: string;
  CreationTime: string;
  DeviceType?: string;
  Handler?: string;
  ID?: string;
  IsDeleted: boolean;
  LastModificationTime?: string;
  Name?: string;
  PrinterType?: string;
  ProxyAddress?: string;
  Station?: ModelsDataLakeOrganizationUnit_DataLakeOrganizationUnitDevice_DataLakeOrganizationUnitStation;
}

export interface ModelsDataLakeOrganizationUnit_DataLakeOrganizationUnitDevice_DataLakeOrganizationUnitStation {
  BackendID?: string;
  Barcode?: string;
  CreationTime: string;
  CustomFields?: ModelsDataLakeSimpleCustomField[];
  FiscalSystemID?: string;
  ID?: string;
  IsDeleted: boolean;
  IsPointOfSale: boolean;
  LastModificationTime?: string;
  Name?: string;
}

export interface ModelsDataLakeOrganizationUnit_DataLakeOrganizationUnitOpeningHours {
  OpeningHoursType?: DataModelsOpeningHoursType;
  RegularDays?: ModelsDataLakeOrganizationUnit_DataLakeOrganizationUnitOpeningHours_RegularDay[];
  SpecialDays?: ModelsDataLakeOrganizationUnit_DataLakeOrganizationUnitOpeningHours_SpecialDay[];
}

export interface ModelsDataLakeOrganizationUnit_DataLakeOrganizationUnitOpeningHours_Day {
  DayEndTime?: string;
  DayStartTime?: string;
  Description?: string;
  IsClosed: boolean;
  TimeSlots?: ModelsDataLakeOrganizationUnit_DataLakeOrganizationUnitOpeningHours_Day_OpeningHourSlot[];
}

export interface ModelsDataLakeOrganizationUnit_DataLakeOrganizationUnitOpeningHours_Day_OpeningHourSlot {
  EndTime: string;
  StartTime: string;
}

export interface ModelsDataLakeOrganizationUnit_DataLakeOrganizationUnitOpeningHours_RegularDay extends ModelsDataLakeOrganizationUnit_DataLakeOrganizationUnitOpeningHours_Day {
  DayOfWeekName?: string;
}

export interface ModelsDataLakeOrganizationUnit_DataLakeOrganizationUnitOpeningHours_SpecialDay extends ModelsDataLakeOrganizationUnit_DataLakeOrganizationUnitOpeningHours_Day {
  Date: string;
}

export interface ModelsDataLakeOrganizationUnitSet {
  BackendID?: string;
  Description?: string;
  ID?: string;
  Name?: string;
  OrganizationUnitID?: string;
  OrganizationUnits?: ModelsDataLakeSimpleOrganizationUnit[];
  Type?: string;
}

export interface ModelsDataLakeOrganizationUnitSetSnapshot {
  DataLakeType?: string;
  GenerationTime: string;
  OrganizationUnitSets?: ModelsDataLakeOrganizationUnitSet[];
}

export interface ModelsDataLakeOrganizationUnitSnapshot {
  DataLakeType?: string;
  GenerationTime: string;
  OrganizationUnits?: ModelsDataLakeOrganizationUnit[];
}

export interface ModelsDataLakePayment {
  AdditionalData?: Record<string,TAnyValue | null>;
  Amount: number;
  BackendID?: string;
  BackendRelationID?: string;
  BackendSystemID?: string;
  CardID?: string;
  CardNumber?: string;
  Code?: string;
  CurrencyID?: string;
  CustomFields?: ModelsDataLakeSimpleCustomField[];
  Description?: string;
  DeviceID?: string;
  ExchangeRate?: number;
  HasDispute: boolean;
  HasUnresolvedDispute: boolean;
  ID?: string;
  IsConfirmed: boolean;
  IsRefund: boolean;
  PaidAmount: number;
  PaymentDate?: string;
  PaymentMethod?: string;
  ReturnedPaymentTransactionID?: string;
  Status?: string;
}

export interface ModelsDataLakePaymentTransaction {
  AdditionalData?: Record<string,TAnyValue | null>;
  Amount: number;
  AmountPendingAuthorizationAdjustment: number;
  AmountPendingCapture: number;
  AmountToRefund?: number;
  ApprovedByID?: string;
  AuthorizationAdjustmentAmount: number;
  AuthorizationExpirationDate?: string;
  BackendID?: string;
  BackendRelationID?: string;
  BackendSystemID?: string;
  CapturableAmount: number;
  CaptureMoment?: string;
  CapturedAmount: number;
  Captures?: ModelsDataLakePaymentTransactionCapture[];
  Change: number;
  CreatedByID?: string;
  CurrencyID?: string;
  CustomFields?: ModelsDataLakeSimpleCustomField[];
  DataLakeType?: string;
  Description?: string;
  DeviceID?: string;
  ExchangeRate?: number;
  FinancialPeriodID?: string;
  ForeignAmount?: number;
  ForeignCurrencyID?: string;
  ForeignPaidAmount?: number;
  GenerationTime: string;
  GiftCardPaymentDetails?: ModelsDataLakeGiftCardPaymentDetails;
  HasDispute: boolean;
  HasUnresolvedDispute: boolean;
  ID?: string;
  IsAuthorizationAdjustment: boolean;
  IsRefund: boolean;
  Ledgers?: ModelsDataLakePaymentTransactionLedger[];
  OrderID?: string;
  OrganizationUnitID?: string;
  PaidAmount: number;
  PaymentDate?: string;
  PaymentMethod?: string;
  Properties?: string[];
  RefundableAmount: number;
  RefundedAmount?: number;
  ReturnedPaymentTransactionID?: string;
  SettledAmount: number;
  Status?: string;
  TotalCapturableAmount: number;
  TypeID?: string;
}

export interface ModelsDataLakePaymentTransactionCapture {
  Amount: number;
  BackendID?: string;
  ConfirmationDate?: string;
  SettledAmount: number;
  Status?: string;
}

export interface ModelsDataLakePaymentTransactionLedger {
  Description?: string;
  NewValue?: string;
  OldValue?: string;
  Type?: string;
}

export interface ModelsDataLakePaymentTransactionType {
  AllowMultiCurrency: boolean;
  BackendID?: string;
  BackendRelationID?: string;
  CaptureMoment?: string;
  CashJournalMethod?: string;
  Category?: string;
  Code?: string;
  ID?: string;
  IsActive: boolean;
  IsCustom: boolean;
  IsRoundingType: boolean;
  LedgerClassID?: string;
  Name?: string;
  PaymentMethodCode?: string;
  PaymentMethodID?: string;
  PaymentMethodName?: string;
  PrintOnDocuments: boolean;
}

export interface ModelsDataLakePaymentType {
  BackendRelationID?: string;
  CashJournalMethod?: string;
  Category?: string;
  Code?: string;
  LedgerClassID?: string;
  Name?: string;
  PaymentMethodID?: string;
}

export interface ModelsDataLakePaymentTypeSnapshot {
  DataLakeType?: string;
  GenerationTime: string;
  PaymentTypes?: ModelsDataLakePaymentTransactionType[];
}

export interface ModelsDataLakePriceList {
  Adjustments?: ModelsDataLakePriceListAdjustment[];
  BackendID?: string;
  BackendSystemID?: string;
  CurrencyID?: string;
  DataLakeType?: string;
  FlatOrganizationUnits?: ModelsDataLakePriceListOrganizationUnit[];
  GenerationTime: string;
  ID?: string;
  IncludingVat: boolean;
  IsActive: boolean;
  IsSpecialPricesPriceList: boolean;
  Name?: string;
  OrganizationUnits?: ModelsDataLakePriceListOrganizationUnit[];
  Prices?: ModelsDataLakeCalculatedPrice[];
  SpecialPricesPriceListID?: string;
  TimeZone?: string;
}

export interface ModelsDataLakePriceListAdjustment {
  EffectiveDate: string;
  ExpireDate?: string;
  Label?: ModelsDataLakePriceListAdjustmentLabel;
  Name?: string;
  Type?: string;
}

export interface ModelsDataLakePriceListAdjustmentLabel {
  ID?: string;
  Name?: string;
}

export interface ModelsDataLakePriceListOrganizationUnit {
  OrganizationUnit?: ModelsDataLakeSimpleOrganizationUnit;
  PriceListUsageType?: string;
  TargetOrganizationUnit?: ModelsDataLakeSimpleOrganizationUnit;
}

export interface ModelsDataLakeProduct {
  BackendID?: string;
  BackendSystemID?: string;
  ID?: string;
  LedgerClassID?: string;
  ManufacturerID?: string;
  Name?: string;
  Type?: string[];
}

export interface ModelsDataLakeProductLedger {
  Quantity: number;
  StockLabel?: string;
}

export interface ModelsDataLakeProductRecommendation {
  CreationTime: string;
  DataLakeType?: string;
  EndDate?: string;
  GenerationTime: string;
  ID?: string;
  LastModificationTime?: string;
  Name?: string;
  OrganizationUnitSetID?: string;
  ProductIDs?: string[];
  StartDate?: string;
  Type?: string;
}

export interface ModelsDataLakeProductRequirement {
  DataType?: string;
  ID?: string;
  IsArray: boolean;
  IsRequired: boolean;
  Name?: string;
  Options?: string[];
  OrderType?: string;
}

export interface ModelsDataLakeProductRequirementValue {
  ID?: string;
  Name?: string;
  Value?: TAnyValue;
}

export interface ModelsDataLakeProductStock {
  OriginalUnitPriceInTax?: number;
  ProductBackendID?: string;
  ProductID?: string;
  Quantity: number;
  QuantityCommitted: number;
  SerialNumbers?: string[];
  StockLabelID?: string;
  StockLabelName?: string;
  UnitPriceInTax?: number;
}

export interface ModelsDataLakeProductSubscription {
  BackendID?: string;
  DataLakeType?: string;
  Description?: string;
  GenerationTime: string;
  ID?: string;
  Interval?: string;
  IsActive: boolean;
  IsDeleted: boolean;
  Name?: string;
  ShipmentTrigger?: string;
  ShowModal: boolean;
  SubscriptionProductBackendID?: string;
  SubscriptionProductID?: string;
  TriggerProductIDs?: string[];
}

export interface ModelsDataLakeProductVariationLine {
  ID?: string;
  Label?: string;
  Value?: string;
}

export interface ModelsDataLakeProducts {
  DataLakeType?: string;
  GenerationTime: string;
  Products?: ModelsDataLakeFullProduct[];
}

export interface ModelsDataLakeRepair {
  AssignedUserID?: string;
  CancellationTime?: string;
  CancelledByID?: string;
  CaseID?: string;
  CompletedByID?: string;
  CompletionTime?: string;
  CustomFields?: ModelsDataLakeSimpleCustomField[];
  CustomerID?: string;
  DataLakeType?: string;
  ExpectedArrivalDate?: string;
  GenerationTime: string;
  ID?: string;
  IsQuickRepair: boolean;
  IsWarranty: boolean;
  OrderLineID?: string;
  OrganizationUnitID?: string;
  OriginalOrderID?: string;
  ProductID?: string;
  ReceiveMethodID?: string;
  RepairOrderID?: string;
  SerialNumber?: string;
  ShippingOptionID?: string;
  StatusHistory?: ModelsDataLakeRepair_RepairStatusHistory[];
  StatusID?: string;
}

export interface ModelsDataLakeRepair_RepairStatusHistory {
  CreationTime: string;
  ID?: string;
  StatusID?: string;
}

export interface ModelsDataLakeReplenishmentProduct {
  EndDate?: string;
  MaximumQuantity: number;
  MinimumQuantity: number;
  ProductID?: string;
  StartDate?: string;
  StockLabel?: string;
}

export interface ModelsDataLakeReplenishmentProducts {
  DataLakeType?: string;
  GenerationTime: string;
  OrganizationUnit?: ModelsDataLakeSimpleOrganizationUnit;
  Products?: ModelsDataLakeReplenishmentProduct[];
}

export interface ModelsDataLakeReturnOrderExport extends ModelsDataLakeOrderExportBase {
  DataLakeType?: string;
}

export interface ModelsDataLakeReturnReason {
  BackendID?: string;
  ID?: string;
  Name?: string;
}

export interface ModelsDataLakeRole {
  Code?: string;
  Functionalities?: ModelsDataLakeRoleFunctionalities;
  /**
  * Entity type: Role
  */
  ID?: string;
  IsSystemDefined: boolean;
  Name?: string;
  UserType?: string;
}

export interface ModelsDataLakeRoleFunctionalities {
  Elevation?: Record<string,SecurityFunctionalityScope>;
  None?: Record<string,SecurityFunctionalityScope>;
  Verification?: Record<string,SecurityFunctionalityScope>;
}

export interface ModelsDataLakeRoles {
  DataLakeType?: string;
  GenerationTime: string;
  Roles?: ModelsDataLakeRole[];
}

export interface ModelsDataLakeShipment {
  BackendID?: string;
  BackendSystemID?: string;
  CarrierName?: string;
  CompletionTime?: string;
  CustomFields?: ModelsDataLakeSimpleCustomField[];
  DataLakeType?: string;
  ExchangeRate?: number;
  ExpectedDeliveryDate?: string;
  GenerationTime: string;
  ID?: string;
  IsCompleted: boolean;
  IsDelivered: boolean;
  IsExported: boolean;
  LastDeliveryDate?: string;
  Lines?: ModelsDataLakeShipmentLine[];
  NetTotalQuantityDelivered: number;
  NetTotalQuantityShipped: number;
  OptionsID: number;
  OrderType?: string;
  OriginalDeliveryDate?: string;
  Packages?: ModelsDataLakeShipmentPackage[];
  PaymentHandledByCarrier: boolean;
  Receipts?: ModelsDataLakeShipmentReceipt[];
  ReceiveMethod?: string;
  Remark?: string;
  ShipmentDate?: string;
  ShipmentIdentifiers?: ModelsDataLakeShipmentIdentifier[];
  ShippedFromOrganizationUnit?: ModelsDataLakeSimpleOrganizationUnit;
  ShippedToOrganizationUnit?: ModelsDataLakeSimpleOrganizationUnit;
  ShippingMethod?: string;
  ShippingMethodCode?: string;
  ShippingMethodCustomFields?: Record<string,DataModelsCustomFieldValue>;
  ShippingMethodSimpleCustomFields?: ModelsDataLakeSimpleCustomField[];
  Status?: string;
  TotalQuantityDelivered: number;
  TotalQuantityShipped: number;
  TrackingCode?: string;
  TrackingLink?: string;
}

export interface ModelsDataLakeShipmentExport {
  CreationTime: string;
  DataLakeType?: string;
  GenerationTime: string;
  ID?: string;
  LastModificationTime?: string;
  Name?: string;
  ShipmentID?: string;
  TransputJobStatus?: string;
}

export interface ModelsDataLakeShipmentIdentifier {
  Name?: string;
  Type?: string;
  Value?: string;
}

export interface ModelsDataLakeShipmentLine {
  BackendReference?: string;
  DeliveryType?: string;
  ID?: string;
  IsCompleted: boolean;
  LastDeliveryDate?: string;
  OrderID?: string;
  OrderLineID?: string;
  ParentLineID?: string;
  ProductID?: string;
  QuantityDelivered: number;
  QuantityShipped: number;
  ReceivedSerialNumbers?: string[];
  ShipmentDate?: string;
  ShippedSerialNumbers?: string[];
}

export interface ModelsDataLakeShipmentPackage {
  Description?: string;
  Height: number;
  Length: number;
  PackageID?: string;
  ShipmentLineIDs?: string[];
  Weight: number;
  Width: number;
}

export interface ModelsDataLakeShipmentReceipt {
  BackendID?: string;
  BackendSystemID?: string;
  CreationTime: string;
  ID?: string;
  Lines?: ModelsDataLakeShipmentReceiptLine[];
  TotalQuantityReceived: number;
}

export interface ModelsDataLakeShipmentReceiptLine {
  ID?: string;
  ProductID?: string;
  QuantityReceived: number;
  ShipmentLineID?: string;
  StockLabel?: string;
}

export interface ModelsDataLakeSimpleCustomField {
  BackendID?: string;
  CustomFieldID: number;
  Name?: string;
  Value?: TAnyValue;
}

export interface ModelsDataLakeSimpleOrganizationUnit {
  BackendID?: string;
  ID?: string;
  Name?: string;
}

export interface ModelsDataLakeSimpleProduct {
  BackendID?: string;
  CustomID?: string;
  ID?: string;
}

export interface ModelsDataLakeSimpleUser {
  BackendID?: string;
  BackendSystemID?: string;
  CountryID?: string;
  CustomFields?: ModelsDataLakeSimpleCustomField[];
  DateOfBirth?: string;
  EmailAddress?: string;
  FirstName?: string;
  FiscalID?: string;
  FullName?: string;
  Gender?: string;
  ID?: string;
  LanguageID?: string;
  LastName?: string;
  Nickname?: string;
  PhoneNumber?: string;
  PlaceOfBirth?: string;
  Salutation?: string;
}

export interface ModelsDataLakeStockMutation {
  AutomaticCorrectionQuantity: number;
  BackendID?: string;
  BackendSystemID?: string;
  CreatedByID?: string;
  CreationTime: string;
  CurrencyID?: string;
  DataLakeType?: string;
  DestinationStockLabel?: string;
  GenerationTime: string;
  ID?: string;
  Ledgers?: ModelsDataLakeProductLedger[];
  OrderLineID?: string;
  OrganizationUnit?: ModelsDataLakeSimpleOrganizationUnit;
  Product?: ModelsDataLakeProduct;
  Quantity: number;
  Reason?: string;
  ReasonBackendID?: string;
  Remark?: string;
  SerialNumber?: string;
  SourceStockLabel?: string;
  Type?: string;
  UnitCost: number;
}

export interface ModelsDataLakeStockNotification {
  CountryID?: string;
  CreationTime: string;
  DataLakeType?: string;
  EmailAddress?: string;
  GenerationTime: string;
  IsCompleted: boolean;
  IsDeleted: boolean;
  LanguageID?: string;
  LastModificationTime?: string;
  OrganizationUnit?: ModelsDataLakeSimpleOrganizationUnit;
  Product?: ModelsDataLakeProduct;
  UserID?: string;
}

export interface ModelsDataLakeStockSnapshot {
  DataLakeType?: string;
  GenerationTime: string;
  OrganizationUnit?: ModelsDataLakeSimpleOrganizationUnit;
  Stock?: Record<string,ModelsDataLakeProductStock[] | null>;
}

export interface ModelsDataLakeSubscription {
  BackendID?: string;
  ID?: string;
  LoyaltyProgramID?: string;
  Name?: string;
}

export interface ModelsDataLakeSurvey {
  BackendID?: string;
  ClosingRemarkBlobID?: string;
  ClosingRemarkMessage?: string;
  ClosingRemarkTitle?: string;
  DataLakeType?: string;
  Description?: string;
  EndDate?: string;
  FirstQuestionID?: string;
  GenerationTime: string;
  ID?: string;
  IntroductionBlobID?: string;
  IntroductionMessage?: string;
  IntroductionTitle?: string;
  IsDeactivated: boolean;
  IsSystem: boolean;
  LastDeactivatedByID?: string;
  LastDeactivatedOn?: string;
  LastPublishedByID?: string;
  LastPublishedOn?: string;
  Name?: string;
  OrganizationUnitSetID?: string;
  Questions?: ModelsDataLakeSurvey_DataLakeSurveyQuestion[];
  StartDate: string;
  SurveyContext?: ModelsDataLakeEnum;
  SurveyDistributionHandler?: string;
  SurveyTrigger?: string;
  Version: number;
}

export interface ModelsDataLakeSurvey_DataLakeSurveyQuestion {
  AllowMultipleAnswers: boolean;
  BackendID?: string;
  BlobID?: string;
  DataType?: ModelsDataLakeEnum;
  Description?: string;
  DisplayType?: string;
  ID?: string;
  InputHint?: string;
  MaximumDate?: string;
  MaximumLength?: number;
  MaximumValue?: number;
  MinimumDate?: string;
  MinimumLength?: number;
  MinimumValue?: number;
  OptionalAnswers?: Record<string,string | null>;
  Remark?: string;
  Required: boolean;
  Sequence: number;
  StoreAnswerOnContextCustomField: boolean;
  SurveyContextCustomFieldID?: string;
  Text?: string;
  Type?: ModelsDataLakeEnum;
  UseContextCustomFieldDataAsPrefill: boolean;
}

export interface ModelsDataLakeSurveyResponse {
  Answers?: ModelsDataLakeSurveyResponseAnswer[];
  DataLakeType?: string;
  GenerationTime: string;
  ID?: string;
  OrganizationUnitID?: string;
  Status?: string;
  SurveyContext?: ModelsDataLakeEnum;
  SurveyContextSourceID?: string;
  SurveyID?: string;
  UserID?: string;
  Version: number;
}

export interface ModelsDataLakeSurveyResponseAnswer {
  AnswerData?: string;
  QuestionID?: string;
  RoutedFromQuestionID?: string;
  RoutedToQuestionID?: string;
  Sequence: number;
}

export interface ModelsDataLakeTaxDetails {
  Amount: number;
  Name?: string;
  Rate: number;
  Type?: string;
}

export interface ModelsDataLakeUser {
  AcceptedUserAgreements?: ModelsDataLakeUserAgreement[];
  AccountType?: string;
  AllowPasswordLogin: boolean;
  BackendID?: string;
  BackendRelationID?: string;
  BackendSystemID?: string;
  BankAccount?: string;
  BillingAddress?: ModelsDataLakeAddress;
  CompanyID?: string;
  CountryID?: string;
  CreationTime: string;
  CustomFields?: ModelsDataLakeSimpleCustomField[];
  CustomID?: string;
  DataLakeType?: string;
  DateOfBirth?: string;
  DeactivationDate?: string;
  EmailAddress?: string;
  EmailAddressValidated: boolean;
  FirstName?: string;
  FiscalID?: string;
  Gender?: string;
  GenerationTime: string;
  GlobalID?: string;
  ID?: string;
  Initials?: string;
  IsDeactivated: boolean;
  IsDeleted: boolean;
  LanguageID?: string;
  LastModificationTime: string;
  LastName?: string;
  LastSuccessfulLogin?: string;
  Nickname?: string;
  OriginatingOrganizationUnitID?: string;
  PhoneNumber?: string;
  PlaceOfBirth?: string;
  PreferredStoreID?: string;
  PricingGroupID?: string;
  Salutation?: string;
  ShippingAddress?: ModelsDataLakeAddress;
  SingleSignOnID?: string;
  SingleSignOnOnly: boolean;
  TimeZone?: string;
  Title?: string;
  TypeID: number;
  Types?: string[];
  UserAgent?: string;
  UserProductSubscriptions?: ModelsDataLakeUserProductSubscription[];
  UserSubscriptions?: ModelsDataLakeUserSubscription[];
  VisibilityGroupID?: string;
}

export interface ModelsDataLakeUserAgreement {
  AcceptedOn: string;
  Description?: string;
  ID?: string;
  IsRequired: boolean;
  Name?: string;
  RequiresSignature: boolean;
  UsedForDataProcessing: boolean;
}

export interface ModelsDataLakeUserBatch {
  /**
  * This will be exported as the individual lines in the .ndjson file.
  */
  Data?: ModelsDataLakeUser[];
  DataLakeType?: string;
}

export interface ModelsDataLakeUserBoughtProduct {
  AdditionalWarrantyInfo?: string;
  DataLakeType?: string;
  Details?: ModelsDataLakeUserBoughtProduct_BoughtProductDetails[];
  GenerationTime: string;
  ID?: string;
  IsDeleted: boolean;
  IsUnderWarranty: boolean;
  LastPurchaseDate?: string;
  LastPurchasedQuantity?: number;
  ManufacturerWarrantyExpiryDate?: string;
  ProductID?: string;
  ProductName?: string;
  SerialNumber?: string;
  TotalPurchasedQuantity?: number;
  UserBackendID?: string;
  UserCountryID?: string;
  UserID?: string;
  WarrantyExpiryDate?: string;
}

export interface ModelsDataLakeUserBoughtProduct_BoughtProductDetails {
  BackendID?: string;
  OrderID?: string;
  OrderLineID?: string;
  OrganizationUnitID?: string;
  PurchaseDate?: string;
  PurchasedQuantity?: number;
}

export interface ModelsDataLakeUserCards {
  Cards?: ModelsDataLakeUserCards_UserCard[];
  DataLakeType?: string;
  GenerationTime: string;
}

export interface ModelsDataLakeUserCards_UserCard {
  Barcode?: string;
  CardBalance: number;
  CreationTime: string;
  /**
  * Entity type: Currency
  */
  CurrencyID?: string;
  Description?: string;
  /**
  * Entity type: Discount
  */
  DiscountID?: number;
  /**
  * Entity type: UserCard
  */
  ID: number;
  IsActive: boolean;
  LoyaltyProgramID?: string;
  Mutations?: ModelsDataLakeUserCards_UserCardMutation[];
  Type?: ModelsDataLakeEnum;
  /**
  * Entity type: User
  */
  UserID: number;
}

export interface ModelsDataLakeUserCards_UserCardMutation {
  Amount: number;
  Description?: string;
  /**
  * Entity type: UserCardMutation
  */
  ID: number;
  /**
  * Entity type: Order
  */
  OrderID?: number;
  /**
  * Entity type: Order
  */
  ReturnOrderID?: number;
  Status?: string;
  Timestamp: string;
}

export interface ModelsDataLakeUserLoginActivity extends ProvidersNewBlackModelsDataLakeUserLoginActivityBase {
  DataLakeType?: string;
}

export interface ModelsDataLakeUserLoyaltyMutation {
  CreationTime: string;
  DataLakeType?: string;
  ExpireAfter?: string;
  GenerationTime: string;
  ID?: string;
  LoyaltyProgramID?: string;
  PendingTill?: string;
  Points: number;
  Type?: string;
  UserID?: string;
}

export interface ModelsDataLakeUserOURelation {
  EmailAddress?: string;
  FirstName?: string;
  LastName?: string;
  OUSetID?: string;
  OUSetName?: string;
  RoleCode?: string;
  RoleID?: string;
  RoleName?: string;
  UserID?: string;
}

export interface ModelsDataLakeUserOURelations {
  DataLakeType?: string;
  GenerationTime: string;
  UserOURelations?: ModelsDataLakeUserOURelation[];
}

export interface ModelsDataLakeUserProductSubscription {
  ContractEndDate?: string;
  ContractPeriod?: number;
  ContractRepeatsOnRenewal: boolean;
  ContractStartRenewalCount?: number;
  CurrencyID?: string;
  DiscountID?: string;
  EndOfContractAction?: string;
  ID?: string;
  IsInTrial: boolean;
  NextSubscriptionID?: string;
  NextSubscriptionPrice?: number;
  Price: number;
  RenewalDate?: string;
  Status?: string;
  SubscriptionID?: string;
  TrialEndDate?: string;
}

export interface ModelsDataLakeUserSubscription {
  AssignedTierID?: string;
  Badges?: ModelsDataLakeUserSubscriptionBadge[];
  IsBlocked: boolean;
  OriginatingOrganizationUnit?: ModelsDataLakeSimpleOrganizationUnit;
  Status?: string;
  SubscribeFromSourceIdentifier?: string;
  SubscribeFromSourceOrganizationUnit?: ModelsDataLakeSimpleOrganizationUnit;
  SubscribeFromSourceUserAgent?: string;
  Subscription?: ModelsDataLakeSubscription;
  SubscriptionID?: string;
  UnsubscribeFromSourceIdentifier?: string;
  UnsubscribeFromSourceOrganizationUnit?: ModelsDataLakeSimpleOrganizationUnit;
  UnsubscribeFromSourceReason?: string;
  UnsubscribeFromSourceUserAgent?: string;
  UserAgent?: string;
}

export interface ModelsDataLakeUserSubscriptionBadge {
  AssignedOn?: string;
  BadgeID?: string;
  ID?: string;
  IsAssigned: boolean;
}

export interface ModelsDataLakeUserTask {
  CompletionTime?: string;
  CreationTime: string;
  Data?: Record<string, TAnyValue>;
  DataLakeType?: string;
  DeactivationReasonID?: string;
  Deadline?: string;
  Description?: string;
  ExpectedCompletionTime?: string;
  ExpectedStartTime?: string;
  ExpectedTimeToComplete?: string;
  FinancialPeriodID?: string;
  GenerationTime: string;
  ID?: string;
  IsActive: boolean;
  IsCompleted: boolean;
  IsIgnored: boolean;
  Labels?: string[];
  OrganizationUnit?: ModelsDataLakeSimpleOrganizationUnit;
  ParentID?: string;
  Priority: number;
  StartTime?: string;
  SubTypeID?: string;
  TypeID?: string;
  UserID?: string;
}

export interface ModelsDataLakeWishlist {
  BackendID?: string;
  CreatedByEmployee: boolean;
  CreationTime: string;
  CustomFields?: ModelsDataLakeSimpleCustomField[];
  DataLakeType?: string;
  Description?: string;
  GenerationTime: string;
  HideFromUser: boolean;
  ID?: string;
  IsShared: boolean;
  LastModificationTime?: string;
  LastReadTime?: string;
  Name?: string;
  Products?: string[];
  UserID?: string;
}

export interface ModelsDataLakeWishlistLink {
  CanEdit: boolean;
  DataLakeType?: string;
  GenerationTime: string;
  ID?: string;
  Linked: boolean;
  UserID?: string;
  WishlistID?: string;
}

export interface ModelsDataLakeZonedCycleCount {
  CompletionTime?: string;
  CreatedByID?: string;
  CreationTime: string;
  DataLakeType?: string;
  ExpectedPreCountedQuantity?: number;
  FinishedPreCountTasks: number;
  GenerationTime: string;
  ID?: string;
  IsActive: boolean;
  IsCompleted: boolean;
  OrganizationUnitID?: string;
  OriginID?: string;
  OriginTypeID?: ModelsDataLakeEnum;
  PreCountedQuantity?: number;
  PreCounts?: ModelsDataLakeZonedCycleCountPreCount[];
  ProductBackendID?: string;
  ProductID?: string;
  ResultStatus?: ModelsDataLakeEnum;
  Results?: ModelsDataLakeZonedCycleCountResult[];
  StartTime?: string;
  StockLabels?: ModelsDataLakeZonedCycleCountStockLabel[];
  TotalPreCountTasks: number;
  UserTaskID?: string;
}

export interface ModelsDataLakeZonedCycleCountPreCount {
  CycleCountZone?: ModelsDataLakeEnum;
  ID?: string;
  Results?: ModelsDataLakeZonedCycleCountPreCountResult[];
  UserTaskID?: string;
}

export interface ModelsDataLakeZonedCycleCountPreCountResult {
  CountedQuantity: number;
  CurrentStock?: number;
  ID?: string;
  StockLabel?: ModelsDataLakeEnum;
}

export interface ModelsDataLakeZonedCycleCountResult {
  CountedQuantity: number;
  ExpectedQuantity: number;
  ID?: string;
  ModifiedQuantity?: number;
  ProductID?: string;
  StockLabel?: ModelsDataLakeEnum;
  ZonedCycleCountResultType?: ModelsDataLakeEnum;
}

export interface ModelsDataLakeZonedCycleCountStockLabel {
  ID?: string;
  StockLabel?: ModelsDataLakeEnum;
}

export interface ModelsInvoiceDataLakeInvoice {
  AuditingInvoiceType?: string;
  AuditingProvider?: string;
  BackendID?: string;
  BackendSystemID?: string;
  CreditorOrganizationUnit?: ModelsDataLakeSimpleOrganizationUnit;
  CurrencyID?: string;
  Customer?: ModelsInvoiceDataLakeInvoiceCustomer;
  DataLakeType?: string;
  DebtorOrganizationUnit?: ModelsDataLakeSimpleOrganizationUnit;
  Description?: string;
  DocumentSequenceNumber?: string;
  ExpectedTotalAmount?: number;
  ExportStatus?: string;
  ExternalFiscalDeviceID?: string;
  FiscalDocumentDate?: string;
  FiscalDocumentID?: string;
  FiscalDocumentType?: string;
  FiscalID?: string;
  GenerationTime: string;
  HoldStatus?: ModelsDataLakeEnum;
  ID?: string;
  InvoiceDate?: string;
  InvoiceNumber?: string;
  IsInterCompany: boolean;
  IsIntraCompany: boolean;
  Lines?: ModelsInvoiceDataLakeInvoiceLine[];
  OrderID?: string;
  OriginalTotalAmount?: number;
  PaidAmount: number;
  PaymentTermDueDate?: string;
  PaymentTermStartDate?: string;
  ReferencedInvoiceID?: string;
  StationID?: string;
  Status?: string;
  TaxReverseCharge: boolean;
  TotalAmount: number;
  TotalLineAmountInvoicedInTax: number;
  Type?: string;
  VatNumber?: string;
}

export interface ModelsInvoiceDataLakeInvoiceCustomer {
  BillingAddress?: ModelsDataLakeAddress;
  CompanyName?: string;
  EmailAddress?: string;
  FirstName?: string;
  FiscalID?: string;
  LastName?: string;
  Name?: string;
  PhoneNumber?: string;
  ShippingAddress?: ModelsDataLakeAddress;
  VatNumber?: string;
}

export interface ModelsInvoiceDataLakeInvoiceLine {
  Description?: string;
  DiscountAmount: number;
  ID?: string;
  OrderID: number;
  OrderLineID: number;
  OrderLineType?: string;
  Product?: ModelsDataLakeSimpleProduct;
  ProductBackendID?: string;
  Quantity: number;
  TaxRate: number;
  TotalAmount: number;
  TotalAmountInTax: number;
  TotalAmountInvoicedInTax: number;
  Type?: string;
  UnitPrice?: number;
}

export interface ProvidersNewBlackModelsDataLakeInsightsOrganizationUnit {
  BackendID?: string;
  ID?: string;
  Name?: string;
}

export interface ProvidersNewBlackModelsDataLakeInsightsUserAgent {
  Details?: string;
  Family?: string;
  Stage?: string;
  Version?: string;
}

export interface ProvidersNewBlackModelsDataLakeUserLoginActivityBase {
  CreationTime: string;
  GenerationTime: string;
  ID?: string;
  Method?: string;
  Namespace?: string;
  OrganizationUnit?: ProvidersNewBlackModelsDataLakeInsightsOrganizationUnit;
  Reason?: string;
  Region?: string;
  Stage?: string;
  Success: boolean;
  Tenant?: string;
  UserAgent?: ProvidersNewBlackModelsDataLakeInsightsUserAgent;
  UserID?: string;
}

/**
* Returns a list of all available Data Lake models.
*/
export interface GetAvailableDataLakeModels extends RequestMessage<GetAvailableDataLakeModelsResponse> {
}

export interface GetAvailableDataLakeModelsResponse extends ResponseMessage {
  Models?: ServicesGetAvailableDataLakeModelsResponse_Model[];
}

export interface ServicesGetAvailableDataLakeModelsResponse_Model {
  IsIgnored: boolean;
  Name?: string;
}

/**
* Define which DataLake models should be ignored when exporting to the configured DataLake.
*/
export interface UpdateDataLakeConfiguration extends RequestMessageWithEmptyResponse {
  IgnoredModels?: string[];
}

