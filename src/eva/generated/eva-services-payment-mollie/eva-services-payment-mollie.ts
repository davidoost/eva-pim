import {
  RequestMessage,
  ResponseMessage,
} from '../eva-services-core';


export interface ApiModelsAmount {
  Maximum: number;
  Minimum: number;
}

export interface ApiModelsImage {
  Bigger?: string;
  Normal?: string;
}

export interface ApiModelsIssuer {
  ID?: string;
  Image?: ApiModelsImage;
  Name?: string;
}

export interface ApiModelsMethod {
  Amount?: ApiModelsAmount;
  Description?: string;
  ID?: string;
  Image?: ApiModelsImage;
  Issuers?: ApiModelsIssuer[];
}

/**
* When you would like to control payment type and issuer selection yourself, you can use `ListMollieGateways` to retrieve a list of supported payment types ("gateways") from Mollie. Currently they
* support iDEAL, Bitcoin, bank transfer, credit card and a couple more, all configurable through Mollie. This response will include icons and descriptions in the supplied locale, and in case of iDEAL
* will include a list of "issuers" like ING, Rabobank, etcetera.
* 
* Then when creating a payment, include a `GatewayID` and this payment type is automatically chosen. Additionally include `Issuer` and this too is automatically selected.
* 
* Configure `Mollie:Api:BaseUrl` (although it doesn't seem you want to deviate from the default) and specify a `Mollie:Api:Token`.
* 
* EVA will require the selected payment type configured in the "MOLLIE_`GatewayID`" format, for instance "MOLLIE_BITCOIN" and "MOLLIE_IDEAL", and the "MOLLIE" payment type is no longer required.
*/
export interface ListMollieGateways extends RequestMessage<ListMollieGatewaysResponse> {
}

export interface ListMollieGatewaysResponse extends ResponseMessage {
  Gateways?: ApiModelsMethod[];
}

export interface MolliePaymentMethodRequestProperties {
  GatewayID?: string;
  Issuer?: string;
  Locale?: string;
  ReturnUrl?: string;
}

export interface MolliePaymentMethodResultProperties {
  RedirectUrl?: string;
}

