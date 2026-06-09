import {
  RequestMessageWithEmptyResponse,
} from '../eva-services-core';


export enum Errors
{
  /**
  * Failed make payment: '{0:string}'
  */
  Stripe_PaymentFailed = 'Stripe:PaymentFailed',
  /**
  * ApiKey is not yet configured
  */
  Stripe_MissingApiKey = 'Stripe:MissingApiKey',
  /**
  * Failed to setup webhooks: {0:string}
  */
  Stripe_WebhooksFailed = 'Stripe:WebhooksFailed',
}
export interface StripePaymentMethodRequestProperties {
  ReturnUrl?: string;
}

export interface StripePaymentMethodResultProperties {
  ClientSecret?: string;
  ReturnUrl?: string;
}

/**
* Validates current config for Stripe
*/
export interface StripeValidateConfiguration extends RequestMessageWithEmptyResponse {
}

