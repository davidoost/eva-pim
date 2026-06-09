
export interface BuckarooArticle {
  ArticleDescription?: string;
  ArticleId?: string;
  ArticleQuantity: number;
  ArticleUnitprice: number;
  ArticleVatcategory?: BuckarooArticleVatcategory;
}

export enum BuckarooArticleVatcategory {
  HighRate = 1,
  LowRate = 2,
  ZeroRate = 3,
  NullRate = 4,
  MiddleRate = 5,
}

export enum BuckarooCustomerGender {
  Unknown = 0,
  Male = 1,
  Female = 2,
  NotApplicable = 9,
}

export enum BuckarooGender {
  Male = 1,
  Female = 2,
}

export interface BuckarooPaymentMethodPayData {
  Accept?: boolean;
  AddressesDiffer?: boolean;
  Articles?: BuckarooArticle[];
  B2B?: boolean;
  BillingBirthDate: string;
  BillingCity?: string;
  BillingCountry?: string;
  BillingEmail?: string;
  BillingGender?: BuckarooGender;
  BillingHouseNumber?: number;
  BillingInitials?: string;
  BillingLanguage?: string;
  BillingLastName?: string;
  BillingPhoneNumber?: string;
  BillingPostalCode?: string;
  BillingStreet?: string;
  BillingTitle?: string;
  BuyerEmail?: string;
  CompanyCOCRegistration?: string;
  CompanyName?: string;
  CostCentre?: string;
  CustomerCountry?: string;
  CustomerEmail?: string;
  CustomerFirstName?: string;
  CustomerGender?: BuckarooCustomerGender;
  CustomerLastName?: string;
  DateDue: string;
  Department?: string;
  EstablishmentNumber?: string;
  ExpirationDate?: string;
  FashionChequeCardNumber?: string;
  GatewayID?: string;
  IntersolveCardnumber?: string;
  IntersolvePIN?: string;
  Issuer?: string;
  MerchantSendsEmail?: boolean;
  PageStyle?: string;
  PaymentMethodsAllowed?: string;
  ProductName?: string;
  ReturnUrl?: string;
  SendMail?: boolean;
  ShippingBirthDate: string;
  ShippingCity?: string;
  ShippingCosts: number;
  ShippingCountryCode?: string;
  ShippingEmail?: string;
  ShippingGender?: BuckarooGender;
  ShippingHouseNumber?: number;
  ShippingInitials?: string;
  ShippingLanguage?: string;
  ShippingLastName?: string;
  ShippingPhoneNumber?: string;
  ShippingPostalCode?: string;
  ShippingStreet?: string;
  ShippingTitle?: string;
  VatNumber?: string;
}

export interface BuckarooPaymentMethodPayResult {
  AccountHolderCity?: string;
  AccountHolderCountry?: string;
  AccountHolderName?: string;
  BIC?: string;
  BankAccount?: string;
  IBAN?: string;
  PayLink?: string;
  PaymentReference?: string;
  RedirectUrl?: string;
}

