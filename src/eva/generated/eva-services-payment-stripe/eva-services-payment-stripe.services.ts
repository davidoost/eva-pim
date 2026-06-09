import {
  IEvaServiceDefinition,
  EmptyResponseMessage,
} from '../eva-services-core';

import {
  StripeValidateConfiguration,
} from './eva-services-payment-stripe';


export class SvcStripeValidateConfiguration implements IEvaServiceDefinition
{
  name = 'StripeValidateConfiguration';
  path = '/message/StripeValidateConfiguration';
  request?: StripeValidateConfiguration;
  response?: EmptyResponseMessage;
}
