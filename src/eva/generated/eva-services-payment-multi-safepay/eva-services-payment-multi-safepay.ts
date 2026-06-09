import {
  RequestMessage,
  ResponseMessage,
} from '../eva-services-core';


export interface GetMultiSafepayGateways extends RequestMessage<GetMultiSafepayGatewaysResponse> {
  /**
  * Entity type: Order
  */
  OrderID: number;
}

export interface GetMultiSafepayGatewaysResponse extends ResponseMessage {
  Gateways?: Record<string,string | null>;
}

export interface MultiSafepayPaymentMethodRequestProperties {
  GatewayID?: string;
  QrSize?: number;
  ReturnUrl?: string;
}

export interface MultiSafepayPaymentMethodResultProperties {
  MSPPaymentID?: string;
  QrUrl?: string;
  RedirectUrl?: string;
  Success: boolean;
}

