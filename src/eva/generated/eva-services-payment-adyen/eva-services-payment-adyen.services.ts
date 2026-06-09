import {
  IEvaServiceDefinition,
} from '../eva-services-core';

import {
  AdyenDonate,
  AdyenDonateResponse,
  AdyenPaymentDetails,
  AdyenPaymentDetailsResponse,
  AdyenValidateManagementConfiguration,
  AdyenValidateManagementConfigurationResponse,
  ListAdyenCheckoutGateways,
  ListAdyenCheckoutGatewaysResponse,
} from './eva-services-payment-adyen';


export class SvcAdyenDonate implements IEvaServiceDefinition
{
  name = 'AdyenDonate';
  path = '/message/AdyenDonate';
  request?: AdyenDonate;
  response?: AdyenDonateResponse;
}

export class SvcAdyenPaymentDetails implements IEvaServiceDefinition
{
  name = 'AdyenPaymentDetails';
  path = '/message/AdyenPaymentDetails';
  request?: AdyenPaymentDetails;
  response?: AdyenPaymentDetailsResponse;
}

export class SvcAdyenValidateManagementConfiguration implements IEvaServiceDefinition
{
  name = 'AdyenValidateManagementConfiguration';
  path = '/message/AdyenValidateManagementConfiguration';
  request?: AdyenValidateManagementConfiguration;
  response?: AdyenValidateManagementConfigurationResponse;
}

export class SvcListAdyenCheckoutGateways implements IEvaServiceDefinition
{
  name = 'ListAdyenCheckoutGateways';
  path = '/message/ListAdyenCheckoutGateways';
  request?: ListAdyenCheckoutGateways;
  response?: ListAdyenCheckoutGatewaysResponse;
}
