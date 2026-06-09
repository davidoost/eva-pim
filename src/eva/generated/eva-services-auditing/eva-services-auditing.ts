import {
  RequestMessageWithEmptyResponse,
  RequestMessage,
  ResponseMessage,
  EmptyResponseMessage,
  AuditingModelsAuditingFieldDataType,
  ResourceResponseMessage,
  AuditingComponentsAuditingFiscalIDValidationResult,
} from '../eva-services-core';


export enum Errors
{
  /**
  * {0:string}
  */
  Auditing_EInvoicing_TransientError = 'Auditing:EInvoicing:TransientError',
  /**
  * Invoice {0:id} does not have a customer
  */
  Auditing_Italy_SDI_MissingCustomer = 'Auditing:Italy:SDI:MissingCustomer',
  /**
  * Invoice {0:id} does not have a billing address
  */
  Auditing_Italy_SDI_MissingBillingAddress = 'Auditing:Italy:SDI:MissingBillingAddress',
  /**
  * OrganizationUnit {0:id} for Invoice {1:id} does not have a Company attached to it
  */
  Auditing_Italy_SDI_MissingParentCompany = 'Auditing:Italy:SDI:MissingParentCompany',
  /**
  * Missing 'codice fiscale' to export invoice {0:id} to the SDI
  */
  Auditing_Italy_SDI_MissingFiscalID = 'Auditing:Italy:SDI:MissingFiscalID',
  /**
  * OrganizationUnit {0:id} has not SDI url configured
  */
  Auditing_Italy_SDI_MissingSDIServiceUrl = 'Auditing:Italy:SDI:MissingSDIServiceUrl',
  /**
  * OrganizationUnit {0:id} is missing the SDI transmitter country code
  */
  Auditing_Italy_SDI_MissingSDITransmitterCountryCode = 'Auditing:Italy:SDI:MissingSDITransmitterCountryCode',
  /**
  * OrganizationUnit {0:id} is missing the SDI transmitter VAT number
  */
  Auditing_Italy_SDI_MissingSDITransmitterVatNumber = 'Auditing:Italy:SDI:MissingSDITransmitterVatNumber',
  /**
  * Invalid value for tax exemption code, {0:string}
  */
  Auditing_Pagero_InvalidTaxExemptionCode = 'Auditing:Pagero:InvalidTaxExemptionCode',
  /**
  * The report is empty.
  */
  Auditing_ReturnReport_InvalidReport = 'Auditing:ReturnReport:InvalidReport',
  /**
  * Invalid value for cashier code '{0:string}'
  */
  Auditing_Romania_FiscalPrinter_InvalidCashierCode = 'Auditing:Romania:FiscalPrinter:InvalidCashierCode',
  /**
  * The device '{0:id}' must have the OrganizationUnitID set
  */
  Auditing_Romania_FiscalPrinter_MissingDeviceOrganizationUnit = 'Auditing:Romania:FiscalPrinter:MissingDeviceOrganizationUnit',
  /**
  * Cannot find organization unit with ID {0:id}
  */
  Auditing_Romania_FiscalPrinter_MissingOrganizationUnit = 'Auditing:Romania:FiscalPrinter:MissingOrganizationUnit',
  /**
  * Cannot find country ID for organization unit with ID {0:id}
  */
  Auditing_Romania_FiscalPrinter_MissingCountryID = 'Auditing:Romania:FiscalPrinter:MissingCountryID',
  /**
  * Sale receipts require a fiscal receipt number
  */
  Auditing_Romania_FiscalPrinter_MissingFiscalReceipt = 'Auditing:Romania:FiscalPrinter:MissingFiscalReceipt',
  /**
  * Missing tax information, line '{0:string}'
  */
  Auditing_Romania_FiscalPrinter_MissingTaxInfo = 'Auditing:Romania:FiscalPrinter:MissingTaxInfo',
  /**
  * Incorrect VAT rate on the product, please check the configuration of the tax rates. Invalid value for category '{0:string}'
  */
  Auditing_Romania_FiscalPrinter_InvalidTaxCategory = 'Auditing:Romania:FiscalPrinter:InvalidTaxCategory',
  /**
  * Command '{0:string}', execution failure, error: {1:string}
  */
  Auditing_Romania_FiscalPrinter_FiscalPrinterExecutionError = 'Auditing:Romania:FiscalPrinter:FiscalPrinterExecutionError',
  /**
  * Did not expect to print an invoice {0:id} with a fiscal receipt number set {1:string}
  */
  Auditing_Romania_FiscalPrinter_FiscalReceiptNumberIndicatesReprint = 'Auditing:Romania:FiscalPrinter:FiscalReceiptNumberIndicatesReprint',
  /**
  * Payment '{0:string}' was not configured in the fiscal printer
  */
  Auditing_Romania_FiscalPrinter_InvalidPaymentConfiguration = 'Auditing:Romania:FiscalPrinter:InvalidPaymentConfiguration',
  /**
  * Additional fiscal configuration is required
  */
  AuditingPaymentCreationValidator_FiscalConfigurationRequired = 'AuditingPaymentCreationValidator:FiscalConfigurationRequired',
  /**
  * Fiskaly is unresponsive
  */
  AustriaFiskalyErrors_FiskalyUnresponsive = 'AustriaFiskalyErrors:FiskalyUnresponsive',
  /**
  * The station {0:id} is not a fiscal station.
  */
  AustriaPaymentCreationValidator_NotAFicalStation = 'AustriaPaymentCreationValidator:NotAFicalStation',
  /**
  * Invoice data not found for invoice {0:id}. Cannot proceed with confirmation.
  */
  BelgiumAuditing_InvoiceDataNotFound = 'BelgiumAuditing:InvoiceDataNotFound',
  /**
  * Invalid response received for invoice file parts with ID: {0:id}. The response could not be read or was null.
  */
  BelgiumAuditing_InvalidInvoiceFilePartsResponse = 'BelgiumAuditing:InvalidInvoiceFilePartsResponse',
  /**
  * Invoice {0:id} is missing a backend type. Cannot determine invoice number sequence.
  */
  BelgiumAuditing_InvoiceBackendTypeMissing = 'BelgiumAuditing:InvoiceBackendTypeMissing',
  /**
  * The 'From' {0:date} is greater than the 'To' {1:date} date
  */
  FinancialPeriodAudit_FromGreaterThanTo = 'FinancialPeriodAudit:FromGreaterThanTo',
  /**
  * The maximum period is {0:int32} days
  */
  FinancialPeriodAudit_PeriodExceeded = 'FinancialPeriodAudit:PeriodExceeded',
  /**
  * Got a 'From' date but missing the 'To' date
  */
  FinancialPeriodAudit_MissingToDate = 'FinancialPeriodAudit:MissingToDate',
  /**
  * 'From' is in the future
  */
  FinancialPeriodAudit_DateIsInTheFuture = 'FinancialPeriodAudit:DateIsInTheFuture',
  /**
  * Invoice {0:id} is missing a backend type. Cannot determine invoice number sequence.
  */
  FinlandAuditing_InvoiceBackendTypeMissing = 'FinlandAuditing:InvoiceBackendTypeMissing',
  /**
  * Printing {typeOfReport:string} failed on station {stationID:id}
  */
  FiscalPrinting_FailureToPrintPeriodicReport = 'FiscalPrinting:FailureToPrintPeriodicReport',
  /**
  * Fiskaly is unresponsive
  */
  FiskalyKassenSichVErrors_FiskalyUnresponsive = 'FiskalyKassenSichVErrors:FiskalyUnresponsive',
  /**
  * Invalid Fiskaly Request
  */
  FiskalyKassenSichVErrors_InvalidRequest = 'FiskalyKassenSichVErrors:InvalidRequest',
  /**
  * {0:string}
  */
  FiskalyKassenSichVErrors_InvalidAcquisitionDate = 'FiskalyKassenSichVErrors:InvalidAcquisitionDate',
  /**
  * Establishment not synced with Fiskaly
  */
  FiskalyKassenSichVErrors_EstablishmentIDNotSet = 'FiskalyKassenSichVErrors:EstablishmentIDNotSet',
  /**
  * Submission was not created on Fiskaly
  */
  FiskalyKassenSichVErrors_SubmissionIDNotSet = 'FiskalyKassenSichVErrors:SubmissionIDNotSet',
  /**
  * Submission transmission failed. {0}
  */
  FiskalyKassenSichVErrors_SubmissionTransmissionFailed = 'FiskalyKassenSichVErrors:SubmissionTransmissionFailed',
  /**
  * Submission creation failed. {0}
  */
  FiskalyKassenSichVErrors_SubmissionCreationFailed = 'FiskalyKassenSichVErrors:SubmissionCreationFailed',
  /**
  * Submission api organization unit decommission failed. {0}
  */
  FiskalyKassenSichVErrors_OrganizationUnitDecommissionFailed = 'FiskalyKassenSichVErrors:OrganizationUnitDecommissionFailed',
  /**
  * Fiskaly is unresponsive
  */
  FiskalySignEsErrors_FiskalyUnresponsive = 'FiskalySignEsErrors:FiskalyUnresponsive',
  /**
  * Station FiscalSystemID cannot be empty. The FiscalSystemID must be set to the value of the SignES associated ClientID
  */
  FiskalySignEsErrors_MissingFiscalSystemID = 'FiskalySignEsErrors:MissingFiscalSystemID',
  /**
  * Station must exist. The FiscalSystemID of the station must be set to the value of the SignES associated ClientID
  */
  FiskalySignEsErrors_MissingStation = 'FiskalySignEsErrors:MissingStation',
  /**
  * Setting EVA.Framework.Configuration.Setting`1[System.String] cannot be empty. The setting must be a UUIDv4 set to the value of the SignES associated ClientID
  */
  FiskalySignEsErrors_MissingWebShopClientID = 'FiskalySignEsErrors:MissingWebShopClientID',
  /**
  * The original invoice ID cannot be empty. The ReferenceInvoiceID should contain the associated Fiskaly SignES Invoice ID as a UUIDv4 format.
  */
  FiskalySignEsErrors_MissingReferenceInvoiceID = 'FiskalySignEsErrors:MissingReferenceInvoiceID',
  /**
  * The specified audit file type is not handled.
  */
  GenerateFinancialPeriodAuditExportService_AuditTypeCannotBeProcessed = 'GenerateFinancialPeriodAuditExportService:AuditTypeCannotBeProcessed',
  /**
  * The payment surpasses the maximum amount of {amount:float128} {curency:string} in cash.
  */
  GenericPaymentCreationValidator_PaymentForbidden = 'GenericPaymentCreationValidator:PaymentForbidden',
  /**
  * The station {0:id} is not a fiscal station.
  */
  GermanPaymentCreationValidator_NotAFicalStation = 'GermanPaymentCreationValidator:NotAFicalStation',
  /**
  * The station {0:id} is not a fiscal station.
  */
  GermanPaymentCreationValidator_NotSyncedToTheExternalSystem = 'GermanPaymentCreationValidator:NotSyncedToTheExternalSystem',
  /**
  * The station fiscal system ID cannot be null. Station details: {0:string}
  */
  GermanyIntegrationErrors_FiscalSystemIDCannotBeNull = 'GermanyIntegrationErrors:FiscalSystemIDCannotBeNull',
  /**
  * The station with ID '{0:id}' is not a point of sale
  */
  InfrasecErrors_StationNotPointOfSale = 'InfrasecErrors:StationNotPointOfSale',
  /**
  * The FiscalID/RegisterID for station with ID '{0:id}' is null or whitespace.
  */
  InfrasecErrors_StationFiscalIDNotSet = 'InfrasecErrors:StationFiscalIDNotSet',
  /**
  * {0:string}
  */
  InfrasecErrors_EnrollmentFailed = 'InfrasecErrors:EnrollmentFailed',
  /**
  * {0:string}
  */
  InfrasecErrors_RegisterEnrolledUnderDifferentOrg = 'InfrasecErrors:RegisterEnrolledUnderDifferentOrg',
  /**
  * Infrasec register '{0:string}' is already enrolled but not active; cannot reuse it as the station FiscalSystemID.
  */
  InfrasecErrors_RegisterNotActiveForReuse = 'InfrasecErrors:RegisterNotActiveForReuse',
  /**
  * {0:string}
  */
  InfrasecErrors_RegisterEnrollmentStatusUnavailable = 'InfrasecErrors:RegisterEnrollmentStatusUnavailable',
  /**
  * {0:string}
  */
  InfrasecErrors_ReceiptError = 'InfrasecErrors:ReceiptError',
  /**
  * Auth Error Code 189. RequestID: {0:string}. Check the Organization Number (Organization RegistrationNumber) and the RegisterID from the request, the station from where the order was paid must belong to the same OU.
  */
  InfrasecErrors_ReceiptAuthError = 'InfrasecErrors:ReceiptAuthError',
  /**
  * The Infrasec API is offline, should proceed with Offline Cash invoice fallback flow{0:string}
  */
  InfrasecErrors_InfrasecCCUApiOffline = 'InfrasecErrors:InfrasecCCUApiOffline',
  /**
  * Sweden RegisterStatus call to Infrasec failed for RequestID {0:string}; fiscalization is blocked until it succeeds.
  */
  InfrasecErrors_RegisterStatusFailed = 'InfrasecErrors:RegisterStatusFailed',
  /**
  * EXCEPTION_IN_RT_RELATED_FLOW 
  * The station (till) fiscal system ID must be exactly 8 characters, but it was null. Station details: {0:string}
  */
  ItalyIntegrationErrors_FiscalSystemIDCannotBeNull = 'ItalyIntegrationErrors:FiscalSystemIDCannotBeNull',
  /**
  * {0}
  */
  JoFotaraErrors_InvoiceFiscalizationError = 'JoFotaraErrors:InvoiceFiscalizationError',
  /**
  * {0}
  */
  JoFotaraErrors_StationNotFound = 'JoFotaraErrors:StationNotFound',
  /**
  * {0}
  */
  JoFotaraErrors_StationNotAPointOfSale = 'JoFotaraErrors:StationNotAPointOfSale',
  /**
  * {0}
  */
  JoFotaraErrors_JoFotaraCredentialsAlreadyExist = 'JoFotaraErrors:JoFotaraCredentialsAlreadyExist',
  /**
  * {0}
  */
  JoFotaraErrors_StationJoFotaraCredentialsAreInvalid = 'JoFotaraErrors:StationJoFotaraCredentialsAreInvalid',
  /**
  * {0}
  */
  JoFotaraErrors_NotSupported = 'JoFotaraErrors:NotSupported',
  /**
  * {0}
  */
  JoFotaraErrors_OperationFailed = 'JoFotaraErrors:OperationFailed',
  /**
  * The original invoice ID cannot be empty. The ReferenceInvoiceID should contain the associated Jordan JoFotara Invoice ID as a UUIDv4 format.
  */
  JoFotaraErrors_MissingReferenceInvoiceID = 'JoFotaraErrors:MissingReferenceInvoiceID',
  /**
  * {0}
  */
  JoFotaraErrors_MissingReferenceInvoiceProperty = 'JoFotaraErrors:MissingReferenceInvoiceProperty',
  /**
  * {0}
  */
  JoFotaraErrors_JoFotaraApiException = 'JoFotaraErrors:JoFotaraApiException',
  /**
  * {0}
  */
  JoFotaraErrors_MixedInvoiceWithGiftCardsNotSupported = 'JoFotaraErrors:MixedInvoiceWithGiftCardsNotSupported',
  /**
  * KSeF endpoint did not return a successful response: {0:string}
  */
  KSeF_ClientError = 'KSeF:ClientError',
  /**
  * Could not authenticate successfully with KSeF: {0:string}
  */
  KSeF_ClientAuthenticationError = 'KSeF:ClientAuthenticationError',
  /**
  * EXCEPTION_IN_RT_RELATED_FLOW 
  * Expected lottery number to be exactly 8 characters, but was: {0:string}
  */
  LotteryErrors_InvalidLotteryNumberProvided = 'LotteryErrors:InvalidLotteryNumberProvided',
  /**
  * EXCEPTION_IN_RT_RELATED_FLOW
  * {0:string}
  */
  LotteryErrors_InvalidInstantLotteryComputedVerificationCode = 'LotteryErrors:InvalidInstantLotteryComputedVerificationCode',
  /**
  * EXCEPTION_IN_RT_RELATED_FLOW
  * {0:string}
  */
  LotteryErrors_RtServerNotInActiveState = 'LotteryErrors:RtServerNotInActiveState',
  /**
  * EXCEPTION_IN_RT_RELATED_FLOW 
  * Expected lottery number to be exactly 8 characters, but was: {0:string}
  */
  LotteryNumber_InvalidLotteryNumberProvided = 'LotteryNumber:InvalidLotteryNumberProvided',
  /**
  * The payment surpasses the maximum amount of {amount:float128} {currency:string} in cash.
  */
  NF525PaymentCreationValidator_PaymentForbidden = 'NF525PaymentCreationValidator:PaymentForbidden',
  /**
  * The maximum duration of {0:int32} day(s) in the offline financial period has been exceeded. Please close and reopen the period.
  */
  NF525PaymentCreationValidator_OfflinePeriodDurationExceeded = 'NF525PaymentCreationValidator:OfflinePeriodDurationExceeded',
  /**
  * Cannot create credit note for order {0:id} without sale invoice details.
  */
  Pagero_SaleInvoiceDetailsMissing = 'Pagero:SaleInvoiceDetailsMissing',
  /**
  * Sale invoice data not yet available for invoice {0:id}. The sale invoice export may still be in progress.
  */
  Pagero_SaleInvoiceDataNotFound = 'Pagero:SaleInvoiceDataNotFound',
  /**
  * Pagero endpoint did not return a successful response: {0:string}
  */
  PageroResponse_ResponseError = 'PageroResponse:ResponseError',
  /**
  * Peppol API did not return a successful response: {0:string}
  */
  PeppolApiResponse_ResponseError = 'PeppolApiResponse:ResponseError',
  /**
  * Invoice {0:id} does not have an invoice number assigned.
  */
  PeppolAuditing_InvoiceNumberMissing = 'PeppolAuditing:InvoiceNumberMissing',
  /**
  * Sale order is not available for invoice {0:id}.
  */
  PeppolAuditing_SaleOrderNotAvailable = 'PeppolAuditing:SaleOrderNotAvailable',
  /**
  * Original sale invoice payload not found for invoice {0:id}.
  */
  PeppolAuditing_SaleInvoicePayloadNotFound = 'PeppolAuditing:SaleInvoicePayloadNotFound',
  /**
  * Cannot create credit note for order {0:id} without sale invoice details.
  */
  PeppolAuditing_SaleInvoiceDetailsMissing = 'PeppolAuditing:SaleInvoiceDetailsMissing',
  /**
  * Finnish Supplier SchemeID number must be 10 characters long (including 'FI' prefix). Current value: {0:string}
  */
  PeppolAuditing_InvalidFinlandSupplierSchemeID = 'PeppolAuditing:InvalidFinlandSupplierSchemeID',
  /**
  * Finnish Buyer SchemeID must be 12 digits long (including '0037' prefix). Current value: {0:string}
  */
  PeppolAuditing_InvalidFinlandBuyerSchemeID = 'PeppolAuditing:InvalidFinlandBuyerSchemeID',
  /**
  * No Peppol strategy found for country: {0:string}
  */
  PeppolAuditing_PeppolStrategyNotFound = 'PeppolAuditing:PeppolStrategyNotFound',
  /**
  * Credit note for invoice {0:id} requires a Note when BillingReference is not set.
  */
  PeppolAuditing_CreditNoteNoteMandatory = 'PeppolAuditing:CreditNoteNoteMandatory',
  /**
  * Customer company or billing address is missing, which is required for Peppol B2B invoices.
  */
  PeppolAuditing_CustomerDataMissing = 'PeppolAuditing:CustomerDataMissing',
  /**
  * No registration number or VAT number available to build a Belgian Peppol endpoint.
  */
  PeppolAuditing_MissingBelgiumEndpointIdentifier = 'PeppolAuditing:MissingBelgiumEndpointIdentifier',
  /**
  * Customer company '{0:string}' does not have a VAT number, which is required for Peppol B2B invoices.
  */
  PeppolAuditing_CustomerVatNumberMissing = 'PeppolAuditing:CustomerVatNumberMissing',
  /**
  * Supplier '{0:string}' does not have a VAT number, which is required for Peppol invoices.
  */
  PeppolAuditing_SupplierVatNumberMissing = 'PeppolAuditing:SupplierVatNumberMissing',
  /**
  * Invoice {0:id} is not a B2B transaction and cannot be processed by the Peppol document factory.
  */
  PeppolAuditing_InvoiceNotB2B = 'PeppolAuditing:InvoiceNotB2B',
  /**
  * Station required on the fiscal printer device
  */
  PolandFiscalPosPrinter_StationNotSetOnDevice = 'PolandFiscalPosPrinter:StationNotSetOnDevice',
  /**
  * Fiscal system ID required on the station
  */
  PolandFiscalPosPrinter_NoFiscalSystemID = 'PolandFiscalPosPrinter:NoFiscalSystemID',
  /**
  * You cannot create a sale containing gift cards and normal products.
  */
  PolandPaymentCreationValidator_MixedOrder = 'PolandPaymentCreationValidator:MixedOrder',
  /**
  * No thermal printer configured on the station.
  */
  PolandPaymentCreationValidator_NoThermalPrinter = 'PolandPaymentCreationValidator:NoThermalPrinter',
  /**
  * No fiscal thermal printer configured on the station.
  */
  PolandPaymentCreationValidator_NoFiscalThermalPrinter = 'PolandPaymentCreationValidator:NoFiscalThermalPrinter',
  /**
  * Thermal printer not reachable.
  */
  PolandPaymentCreationValidator_ThermalPrinterNotReachable = 'PolandPaymentCreationValidator:ThermalPrinterNotReachable',
  /**
  * Thermal Printer is in autonomous mode, please exit this mode or restart your printer to continue.
  */
  PolandPaymentCreationValidator_ThermalPrinterAutonomous = 'PolandPaymentCreationValidator:ThermalPrinterAutonomous',
  /**
  * Check printer paper.
  */
  PolandPaymentCreationValidator_ThermalPrinterPaper = 'PolandPaymentCreationValidator:ThermalPrinterPaper',
  /**
  * Printer memory is full.
  */
  PolandPaymentCreationValidator_ThermalPrinterMemory = 'PolandPaymentCreationValidator:ThermalPrinterMemory',
  /**
  * Protel order creation failed.
  */
  Protel_OrderCreationFailed = 'Protel:OrderCreationFailed',
  /**
  * Protel payment creation failed.
  */
  Protel_PaymentCreationFailed = 'Protel:PaymentCreationFailed',
  /**
  * Protel refund failed, not eligible for Voiding or no Reference provided.
  */
  Protel_RefundNotAvailable = 'Protel:RefundNotAvailable',
  /**
  * Protel refund failed, can only be done in the original store.
  */
  Protel_RefundNotAvailableInOtherStore = 'Protel:RefundNotAvailableInOtherStore',
  /**
  * Protel refund failed, serialnumber of the form is required.
  */
  Protel_RefundRequiresSerialNumber = 'Protel:RefundRequiresSerialNumber',
  /**
  * EXCEPTION_IN_RT_RELATED_FLOW 
  * No matching RT Server Vat Rate found for this Product. Check the Tax Rates from the Organization Unit that the product belongs to. Details: {0:string}
  */
  ReceiptError_RtServerVatRateMismatch = 'ReceiptError:RtServerVatRateMismatch',
  /**
  * The specified audit cannot be reprocessed.
  */
  ReprocessFinancialPeriodAuditService_AuditCannotBeReprocessed = 'ReprocessFinancialPeriodAuditService:AuditCannotBeReprocessed',
  /**
  * You cannot create a sale containing gift cards and normal products.
  */
  RomaniaPaymentCreationValidator_MixedOrder = 'RomaniaPaymentCreationValidator:MixedOrder',
  /**
  * No thermal printer configured on the station.
  */
  RomaniaPaymentCreationValidator_NoThermalPrinter = 'RomaniaPaymentCreationValidator:NoThermalPrinter',
  /**
  * No fiscal thermal printer configured on the station.
  */
  RomaniaPaymentCreationValidator_NoFiscalThermalPrinter = 'RomaniaPaymentCreationValidator:NoFiscalThermalPrinter',
  /**
  * Thermal printer not reachable.
  */
  RomaniaPaymentCreationValidator_ThermalPrinterNotReachable = 'RomaniaPaymentCreationValidator:ThermalPrinterNotReachable',
  /**
  * Printer memory is full.
  */
  RomaniaPaymentCreationValidator_ThermalPrinterMemory = 'RomaniaPaymentCreationValidator:ThermalPrinterMemory',
  /**
  * Unable to complete the transaction. The financial period is open for longer than 24 hours. Please close the financial period and re-open the period in order to continue.
  */
  RomaniaPaymentCreationValidator_ThermalPrinterNeedToPrintZReport = 'RomaniaPaymentCreationValidator:ThermalPrinterNeedToPrintZReport',
  /**
  * Unable to complete the transaction. Printer in error state: {0:string}
  */
  RomaniaPaymentCreationValidator_ThermalPrinterError = 'RomaniaPaymentCreationValidator:ThermalPrinterError',
  /**
  * EXCEPTION_IN_RT_RELATED_FLOW 
  * RT Server did not return a successful response: 
  * {0:string}
  */
  RtServerResponse_ResponseError = 'RtServerResponse:ResponseError',
  /**
  * EXCEPTION_IN_RT_RELATED_FLOW 
  * Received 'Server Closure To Do' response from RT Server. This should indicate that there is at least one station which is open. All stations have to be closed if you want to remove a station from the RT Server. 
  * {0:string}
  */
  RtServerResponse_ServerClosureToDo = 'RtServerResponse:ServerClosureToDo',
  /**
  * InvalidClientConfiguration
  */
  SAFT_Series = 'SAFT:Series',
  /**
  * Failed to list series (one or more settings are invalid)
  */
  SAFT_InvalidConfiguration = 'SAFT:InvalidConfiguration',
  /**
  * The payment surpasses the maximum amount of {amount:float128} {currency:string} in cash.
  */
  SAFTPaymentCreationValidator_PaymentForbidden = 'SAFTPaymentCreationValidator:PaymentForbidden',
  /**
  * Invoice {InvoiceID:id} is not eligible for Peppol export ({Reason:string}).
  */
  SingaporeAuditing_InvoiceNotPeppolEligible = 'SingaporeAuditing:InvoiceNotPeppolEligible',
  /**
  * ShopID exceeds maximum length of 4 characters, it was: {0:string}.
  */
  ValidationError_ShopNumberExceedsMaximumLength = 'ValidationError:ShopNumberExceedsMaximumLength',
  /**
  * TenantCode exceeds maximum length of 5 characters, it was: {0:string}.
  */
  ValidationError_TenantCodeExceedsMaximumLength = 'ValidationError:TenantCodeExceedsMaximumLength',
  /**
  * Register (counter) number exceeds maximum length of 3 characters, it was: {0:string}.
  */
  ValidationError_RegisterNumberExceedsMaximumLength = 'ValidationError:RegisterNumberExceedsMaximumLength',
  /**
  * The Infrasec RegisterID / FiscalSystemID of the station cannot be null or whitespace.
  */
  ValidationError_InfrasecRegisterIDNullOrWhitespace = 'ValidationError:InfrasecRegisterIDNullOrWhitespace',
  /**
  * The Infrasec Organization Number (taken from the Company RegistrationNumber) must be exactly 10 characters, but it was {0:string}.
  */
  ValidationError_CompanyRegistrationNumberNotWithinRange = 'ValidationError:CompanyRegistrationNumberNotWithinRange',
  /**
  * {0:string}
  */
  ValidationError_ExceptionInNTHRelatedFlow = 'ValidationError:ExceptionInNTHRelatedFlow',
  /**
  * EXCEPTION_IN_RT_RELATED_FLOW 
  * An exception occured in a flow involving the RT Server!
  * The RT Server might not be the culprit, see the full error message for more details: 
  * {0:string}
  */
  ValidationError_ExceptionInRTServerRelatedFlow = 'ValidationError:ExceptionInRTServerRelatedFlow',
  /**
  * EXCEPTION_IN_RT_RELATED_FLOW 
  * The station (till) fiscal system ID must be exactly 8 characters, but it was: {0:string}
  */
  ValidationError_StationFiscalSystemIdOutOfRangeError = 'ValidationError:StationFiscalSystemIdOutOfRangeError',
  /**
  * EXCEPTION_IN_RT_RELATED_FLOW 
  * RT Server did not return a valid content: 
  * {0:string}
  */
  ValidationError_RtServerInvalidResponseContent = 'ValidationError:RtServerInvalidResponseContent',
  /**
  * EXCEPTION_IN_RT_RELATED_FLOW 
  * More than one station (till) with this {0:string} FiscalSystemID found in EVA! The FiscalSystemID of the newly created station will be set to null and the station cannot be used further for operations.
  */
  ValidationError_StationWithThisFiscalSystemIdAlreadyCreatedInEva = 'ValidationError:StationWithThisFiscalSystemIdAlreadyCreatedInEva',
}
export interface PrintControlDocument extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: Station
  */
  StationID?: number;
}

export interface CancelSeries extends RequestMessage<CancelSeriesResponse> {
  Classification?: string;
  DocumentType?: string;
  Identifier?: string;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID: number;
  ValidationCode?: string;
}

export interface CancelSeriesResponse extends ResponseMessage {
  Code?: string;
  Message?: string;
  Success: boolean;
}

export interface ListSeries extends RequestMessage<ListSeriesResponse> {
  From: string;
  Identifier?: string;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID: number;
  To: string;
  Type?: string;
}

export interface ListSeriesResponse extends ResponseMessage {
  Result?: SAFTServicesListSeriesResponse_Model[];
}

export interface SAFTServicesListSeriesResponse_Model {
  CertificateNumber?: string;
  Classification?: string;
  DocumentType?: string;
  Identifier?: string;
  LastChangeDate: string;
  ProcessingMediumCode?: string;
  RegistrationDate: string;
  SerialType?: string;
  StartDate: string;
  StartSequence: number;
  State?: string;
  StatusChangeReasonCode?: string;
  TaxRegistrationNumber?: string;
  ValidationCode?: string;
}

/**
* Utility service to easily set all of the settings required for enabling ATCUD in Portugal (SAFT)
*/
export interface SetSeriesSettings extends RequestMessageWithEmptyResponse {
  /**
  * Certificate that was generated by combining the private key with the key received from AT
  */
  ClientCertificate?: string;
  /**
  * Recommended, password to the client certificate
  */
  ClientCertificatePassword?: string;
  /**
  * Endpoint to connect to when registering series. Use https://servicos.portaldasfinancas.gov.pt:722/SeriesWSService for TEST and https://servicos.portaldasfinancas.gov.pt:422/SeriesWSService for PRODUCTION
  */
  Endpoint?: string;
  /**
  * Entity type: OrganizationUnit
  * Organization unit to which the settings should be applied
  */
  OrganizationUnitID: number;
  /**
  * Password of the web service user
  */
  Password?: string;
  /**
  * Certificate that was handed out by the AT after completing the CSR steps (.cer file)
  */
  SigningCertificate?: string;
  /**
  * Username of the web service user created in the AT portal with at least WSE rights
  */
  Username?: string;
}

/**
* Creates a new audit collection of all currently open `Financial Period`s for the given `OrganizationUnitID`. The `OrganizationUnitID` act as root
* selector and will cascade for all 'child' organizations as well.
* 
* Supply a `To` parameter to only collect `Financial Period`s from before that moment for audit.
* Supply the `Type` to specify which or what kind of output you want to have. If none is passed the first available one is used. See the
* `GetFinancialPeriodAuditOutputTypes` service to fetch all of the available types.
*/
export interface CreateFinancialPeriodAudit extends RequestMessage<CreateFinancialPeriodAuditResponse> {
  /**
  * Start of the date range to create an audit for
  */
  From?: string;
  IsPreview?: boolean;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID: number;
  Till?: string;
  /**
  * End of the date range to create an audit for
  */
  To?: string;
  /**
  * Use `GetFinancialPeriodAuditOutputTypes` to fetch the available types
  */
  Type?: string;
}

/**
* Creates financial period audits based on the given organization unit set.
*/
export interface CreateFinancialPeriodAuditForOrganizationUnitSet extends RequestMessage<CreateFinancialPeriodAuditForOrganizationUnitSetResponse> {
  /**
  * Start of the date range to create an audit for
  */
  From: string;
  /**
  * Entity type: OrganizationUnitSet
  */
  OrganizationUnitSetID: number;
  /**
  * End of the date range to create an audit for
  */
  To: string;
}

export interface CreateFinancialPeriodAuditForOrganizationUnitSetResponse extends ResponseMessage {
  /**
  * Entity type: FinancialPeriodAudit
  */
  IDs?: number[];
}

export interface CreateFinancialPeriodAuditResponse extends ResponseMessage {
  ID: number;
  /**
  * Entity type: FinancialPeriodAudit
  */
  IDs?: number[];
}

/**
* Generates and prints the periodic monthly report that can be printed on-demand at the given station over the given period.
* 
* - `StationID` is where the periodic report should be printed
* - `Year` is the year of the period
* - `Month` is the month of the period (1=january, 12=december)
*/
export interface CreateMonthlyPeriodicReport extends RequestMessageWithEmptyResponse {
  Month?: number;
  /**
  * Entity type: Station
  */
  StationID: number;
  Year?: number;
}

/**
* Helper service to decommission a station
*/
export interface DecommissionStation extends RequestMessage<EmptyResponseMessage> {
  /**
  * Entity type: Station
  */
  StationID: number;
}

/**
* Generates the audit file for the given audit and optionally its type, if there's one or more to choose from. Get these via the `GetFinancialPeriodAuditOutputTypes`
*/
export interface GenerateFinancialPeriodAuditExport extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: FinancialPeriodAudit
  * Financial period audit to generate the document for
  */
  FinancialPeriodAuditID: number;
  /**
  * Type of audit document to generate
  */
  Type?: string;
}

/**
* Used to get the required fields for the company.
*/
export interface GetAuditingFieldsForCompany extends RequestMessage<GetAuditingFieldsForCompanyResponse> {
  /**
  * Entity type: Company
  */
  CompanyID: number;
}

export interface GetAuditingFieldsForCompanyResponse extends ResponseMessage {
  Fields?: Record<string,ServicesGetAuditingFieldsForCompanyResponse_FieldModel>;
}

export interface ServicesGetAuditingFieldsForCompanyResponse_FieldModel {
  Label?: string;
  MaxLength: number;
  MinLength: number;
  Type: AuditingModelsAuditingFieldDataType;
  Value?: string;
}

/**
* Used to get the required fields for the organization unit.
*/
export interface GetAuditingFieldsForOrganizationUnit extends RequestMessage<GetAuditingFieldsForOrganizationUnitResponse> {
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID: number;
}

export interface GetAuditingFieldsForOrganizationUnitResponse extends ResponseMessage {
  Fields?: Record<string,ServicesGetAuditingFieldsForOrganizationUnitResponse_FieldModel>;
}

export interface ServicesGetAuditingFieldsForOrganizationUnitResponse_FieldModel {
  Label?: string;
  MaxLength: number;
  MinLength: number;
  Type: AuditingModelsAuditingFieldDataType;
  Value?: string;
}

/**
* Used to get the auditing summary.
*/
export interface GetAuditingSummary extends RequestMessage<GetAuditingSummaryResponse> {
}

export interface GetAuditingSummaryResponse extends ResponseMessage {
  ControlDocuments: boolean;
  Documents?: Record<string,string | null>;
  Summary?: Record<string,string | null>;
}

/**
* Service for retrieving a list of blobs by the given `FinancialPeriodAudit` ID
*/
export interface GetFinancialPeriodAuditBlobs extends RequestMessage<GetFinancialPeriodAuditBlobsResponse> {
  /**
  * Entity type: FinancialPeriodAudit
  */
  ID: number;
}

export interface GetFinancialPeriodAuditBlobsResponse extends ResponseMessage {
  Items?: ServicesGetFinancialPeriodAuditBlobsResponse_BlobItem[];
}

export interface ServicesGetFinancialPeriodAuditBlobsResponse_BlobItem {
  BlobID: string;
  BlobUrl?: string;
  Type?: string;
}

/**
* Returns all of the available outputs that are available for the financial period audits for the given organization unit
*/
export interface GetFinancialPeriodAuditOutputTypes extends RequestMessage<GetFinancialPeriodAuditOutputTypesResponse> {
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID: number;
}

export interface GetFinancialPeriodAuditOutputTypesResponse extends ResponseMessage {
  Types?: string[];
}

/**
* Generate and print a terminal report. This is a report for a terminal, p/a a X- or Z-report. It is required to supply the StationID where to print the report.
*/
export interface PrintTerminalReport extends RequestMessage<PrintTerminalReportResponse> {
  DocumentID?: string;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID: number;
  /**
  * Entity type: Station
  */
  StationID?: number;
}

export interface PrintTerminalReportResponse extends ResponseMessage {
  CashDepositsTotalAmount: number;
  CashDrawerOpenings: number;
  Change: number;
  ClosingAmount: number;
  CopyReceiptsPrinted: number;
  CreditTaxes?: ServicesPrintTerminalReportResponse_Tax[];
  DebitTaxes?: ServicesPrintTerminalReportResponse_Tax[];
  DiscountAmount: number;
  DiscountCount: number;
  OpeningAmount: number;
  Payments?: ServicesPrintTerminalReportResponse_Payment[];
  PaymentsPerUser?: ServicesPrintTerminalReportResponse_PaymentPerUser[];
  ProductGroups?: ServicesPrintTerminalReportResponse_ProductGroup[];
  ReceiptsPrinted: number;
  ReturnAmount: number;
  ReturnCount: number;
  Taxes?: ServicesPrintTerminalReportResponse_Tax[];
  TotalAmount: number;
  TotalCopyReceiptsAmount: number;
  TotalPayments: number;
  TotalTaxes: number;
}

export interface ServicesPrintTerminalReportResponse_Payment {
  Amount: number;
  Description?: string;
}

export interface ServicesPrintTerminalReportResponse_PaymentPerUser {
  Amount: number;
  Description?: string;
  EmployeeNumber?: string;
  /**
  * Entity type: User
  */
  UserID: number;
}

export interface ServicesPrintTerminalReportResponse_ProductGroup {
  Amount: number;
  Code?: string;
  Count: number;
}

export interface ServicesPrintTerminalReportResponse_Tax {
  Amount: number;
  Code?: string;
  Rate: number;
}

/**
* Generates a monthly report on returned orders.
*/
export interface ProduceReturnReport extends RequestMessage<ResourceResponseMessage> {
  Month?: number;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID: number;
  Year?: number;
}

/**
* Retry processing of a FinancialPeriodAudit, in case it is stuck or had an issue processing earlier.
*/
export interface ReprocessFinancialPeriodAudit extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: FinancialPeriodAudit
  */
  ID: number;
}

/**
* Used to set the required fields for the company.
*/
export interface SetAuditingFieldsForCompany extends RequestMessageWithEmptyResponse {
  AuditingFields?: Record<string,string | null>;
  /**
  * Entity type: Company
  */
  CompanyID: number;
}

/**
* Used to set the required fields for the organization unit.
*/
export interface SetAuditingFieldsForOrganizationUnit extends RequestMessageWithEmptyResponse {
  AuditingFields?: Record<string,string | null>;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID: number;
}

/**
* Validates the given Fiscal ID by the current organization unit auditing provider or by providing a country in the request
*/
export interface ValidateFiscalID extends RequestMessage<ValidateFiscalIDResponse> {
  /**
  * Entity type: Country
  */
  CountryID?: string;
  FiscalID: string;
}

export interface ValidateFiscalIDResponse extends ResponseMessage {
  IsValid: boolean;
  Success: AuditingComponentsAuditingFiscalIDValidationResult;
}

