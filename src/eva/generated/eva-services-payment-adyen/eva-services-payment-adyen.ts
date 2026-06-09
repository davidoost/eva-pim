import {
  TAnyValue,
  RequestMessage,
  ResponseMessage,
} from '../eva-services-core';


export enum Errors
{
  /**
  * Received Adyen error: {0:string}
  */
  Adyen_Error = 'Adyen:Error',
  /**
  * Failed to create refund: {0:string}
  */
  Adyen_RefundFailed = 'Adyen:RefundFailed',
  /**
  * Failed to create capture
  */
  Adyen_CaptureFailed = 'Adyen:CaptureFailed',
  /**
  * Adyen environment mismatch: {0:string}
  */
  Adyen_EnvironmentMismatch = 'Adyen:EnvironmentMismatch',
  /**
  * A CardNumber is required to activate a giftcard
  */
  AdyenStoredValue_MissingCardNumber = 'AdyenStoredValue:MissingCardNumber',
  /**
  * Invalid gift card - card not found
  */
  AdyenStoredValue_GiftCardNotFound = 'AdyenStoredValue:GiftCardNotFound',
  /**
  * Invalid gift card - product not found
  */
  AdyenStoredValue_MissingProduct = 'AdyenStoredValue:MissingProduct',
  /**
  * Invalid gift card - missing PIN/SSC
  */
  AdyenStoredValue_MissingPinSsc = 'AdyenStoredValue:MissingPinSsc',
  /**
  * A CardNumber should have a length of {validLength:int32} or {validLength2:int32}, current length is {invalidLength:int32}
  */
  AdyenStoredValue_InvalidCardNumberLength = 'AdyenStoredValue:InvalidCardNumberLength',
}
export enum CheckoutAPIAdyenChannel {
  Web = 1,
  iOS = 2,
  Android = 3,
}

export interface CheckoutAPIAdyenCheckoutAPIPaymentMethodRequestProperties {
  AllowStorePaymentMethod?: boolean;
  ApplePayData?: CheckoutAPIApplePayAnonymousData;
  Channel?: CheckoutAPIAdyenChannel;
  Data?: CheckoutAPIAdyenCheckoutAPIPaymentMethodRequestProperties_AdyenCheckoutAPIPaymentMethodRequestAdditionalProperties;
  GatewayID?: string;
  ReturnUrl?: string;
}

export interface CheckoutAPIAdyenCheckoutAPIPaymentMethodRequestProperties_AdyenCheckoutAPIPaymentMethodRequestAdditionalProperties {
  AdditionalData?: Record<string,string | null>;
  BrowserInfo?: CheckoutAPIAdyenCheckoutAPIPaymentMethodRequestProperties_AdyenCheckoutAPIPaymentMethodRequestAdditionalProperties_AdyenCheckoutAPIPaymentMethodRequestBrowserInfo;
  PaymentMethod?: Record<string,string | null>;
  ShopperEmail?: string;
  ShopperIP?: string;
  ShopperLocale?: string;
}

export interface CheckoutAPIAdyenCheckoutAPIPaymentMethodRequestProperties_AdyenCheckoutAPIPaymentMethodRequestAdditionalProperties_AdyenCheckoutAPIPaymentMethodRequestBrowserInfo {
  AcceptHeader?: string;
  ColorDepth?: number;
  JavaEnabled?: boolean;
  JavaScriptEnabled?: boolean;
  Language?: string;
  ScreenHeight?: number;
  ScreenWidth?: number;
  TimeZoneOffset?: number;
  UserAgent?: string;
}

export interface CheckoutAPIAdyenCheckoutAPIPaymentMethodResultProperties {
  ApplePayData?: CheckoutAPIApplePayResultProperties;
  Data?: Record<string, TAnyValue>;
  DonationAvailable: boolean;
  QrCode?: string;
  RedirectUrl?: string;
}

/**
* Create a donation with the Adyen Giving program. This service can be called when the CreatePayment returned DonationAvailable.
* 
* The PaymentTransactionID and Amount are required. Amount is in the same currency as the PaymentTransaction.
* 
* Optionally a specific DonationAccount can be specified, this will fallback to the configured DonationAccount.
*/
export interface AdyenDonate extends RequestMessage<AdyenDonateResponse> {
  Amount: number;
  DonationAccount?: string;
  /**
  * Entity type: PaymentTransaction
  */
  PaymentTransactionID: number;
}

export interface AdyenDonateResponse extends ResponseMessage {
  Success: boolean;
}

/**
* Submits details for an Adyen payment created using `CreatePayment`. This step is only needed when no final state has been reached on the
* `CreatePayment` request (for example for 3D Secure, or when getting redirected back directly from a payment method using an app switch).
* 
* The exact details, which need to be sent to this endpoint, are always specified in the `Properties.Data` parameter in the response of the
* associated `CreatePayment` request.
*/
export interface AdyenPaymentDetails extends RequestMessage<AdyenPaymentDetailsResponse> {
  Details: Record<string,string | null>;
  /**
  * Entity type: Order
  */
  OrderID: number;
  PaymentData?: string;
  /**
  * Entity type: PaymentTransaction
  */
  PaymentTransactionID: number;
  ThreeDSAuthenticationOnly?: boolean;
}

export interface AdyenPaymentDetailsResponse extends ResponseMessage {
  Data?: Record<string, TAnyValue>;
  QrCode?: string;
  RedirectUrl?: string;
}

export interface CheckoutAPIApplePayAnonymousData {
  BillingAddress?: CheckoutAPIApplePayAnonymousData_AddressComponents;
  ShippingAddress?: CheckoutAPIApplePayAnonymousData_AddressComponents;
}

export interface CheckoutAPIApplePayAnonymousData_AddressComponents {
  AddressLines?: string[];
  AdministrativeArea?: string;
  CountryID?: string;
  EmailAddress?: string;
  FamilyName?: string;
  GivenName?: string;
  Locality?: string;
  PhoneNumber?: string;
  PostalCode?: string;
  SubAdministrativeArea?: string;
  SubLocality?: string;
}

export interface CheckoutAPIApplePayResultProperties {
  AuthenticationToken?: string;
  /**
  * Entity type: Order
  */
  OrderID?: number;
  Success: boolean;
}

export interface CheckoutAPIDropInAdyenDropInPaymentMethodRequestProperties {
  AllowStorePaymentMethod?: boolean;
  Channel?: CheckoutAPIAdyenChannel;
  EmailAddress?: string;
  ReturnUrl?: string;
  ShopperLocale?: string;
}

export interface CheckoutAPIDropInAdyenDropInPaymentMethodResultProperties {
  SessionData?: string;
  SessionID?: string;
}

/**
* Retrieve all gateways supported by the current configuration of Adyen, matched with the existing payment types in EVA. `ID` is it's unique
* identifier, `Name` is something that you can show the customer.
* 
* It is required to supply an `OrderID` or, the `CurrencyID` and `Amount`.
* When no amount is given, the open amount of the order we be used.
* It is recommended to specify the `Channel`:
* - Web: 1
* - iOS: 2
* - Android: 3
* 
* Recommended way of calling this service is with only an `OrderID` and `Channel`.
* 
* * If present, the `Details` list will show a list of properties that this gateway supports. Every detail is identied with the `Key`, and to support
* typed inputs, the `Type` is also given. If the `Type` is `select`, one of the items inside the `Items` list needs to be chosen. Here, again, the
* `ID` is it's unique identifier, and the `Name` is something you can show the customer.
* * If present, the `Brands` list will show a list of supported brands within this payment method, e.g. to list creditcards (mc, visa, amex, ...).
* 
* When creating the payment, use the `ID` of the gateway as `GatewayID`. Fill the payment properties `Details` with the properties specific to the
* gateway, as indicated by this response's `Details` list.
*/
export interface ListAdyenCheckoutGateways extends RequestMessage<ListAdyenCheckoutGatewaysResponse> {
  Amount?: number;
  Channel?: CheckoutAPIAdyenChannel;
  /**
  * Entity type: Currency
  */
  CurrencyID?: string;
  /**
  * Entity type: Order
  */
  OrderID?: number;
}

export interface ListAdyenCheckoutGatewaysResponse extends ResponseMessage {
  Gateways?: CheckoutAPIListAdyenCheckoutGatewaysResponse_Gateway[];
}

export interface CheckoutAPIListAdyenCheckoutGatewaysResponse_Detail {
  ID?: string;
  Items?: CheckoutAPIListAdyenCheckoutGatewaysResponse_Item[];
  Type?: string;
}

export interface CheckoutAPIListAdyenCheckoutGatewaysResponse_Gateway {
  Brands?: string[];
  Details?: CheckoutAPIListAdyenCheckoutGatewaysResponse_Detail[];
  ID?: string;
  /**
  * Requires at least v68 of the adyen integration
  */
  Issuers?: CheckoutAPIListAdyenCheckoutGatewaysResponse_Item[];
  Name?: string;
  /**
  * Entity type: PaymentType
  */
  PaymentTypeID: number;
}

export interface CheckoutAPIListAdyenCheckoutGatewaysResponse_Item {
  ID?: string;
  Name?: string;
}

export interface CheckoutAPIPayByLinkAdyenPayByLinkPaymentMethodRequestProperties {
  AllowStorePaymentMethod?: boolean;
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
  /**
  * The locale used to render the payment page. Falls back to the customer's locale when omitted.
  */
  ShopperLocale?: string;
}

export interface CheckoutAPIPayByLinkAdyenPayByLinkPaymentMethodResultProperties {
  Url?: string;
}

/**
* Validate the Adyen management api configuration.
* 
* Returns a list of messages that contains information about the configuration.
*/
export interface AdyenValidateManagementConfiguration extends RequestMessage<AdyenValidateManagementConfigurationResponse> {
}

export interface AdyenValidateManagementConfigurationResponse extends ResponseMessage {
  IsValid: boolean;
  Messages: ManagementAdyenValidateManagementConfigurationResponse_ValidationMessage[];
}

export interface ManagementAdyenValidateManagementConfigurationResponse_ValidationMessage {
  Error: boolean;
  Message: string;
}

export interface PosSdkAdyenPosSdkPaymentMethodRequestProperties {
  SetupToken?: string;
}

export interface PosSdkAdyenPosSdkPaymentMethodResultProperties {
  InstallationID?: string;
  PaymentReference?: string;
  SdkData?: string;
  SessionUniqueKey?: string;
}

