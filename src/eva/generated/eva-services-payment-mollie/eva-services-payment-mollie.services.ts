import {
  IEvaServiceDefinition,
} from '../eva-services-core';

import {
  ListMollieGateways,
  ListMollieGatewaysResponse,
} from './eva-services-payment-mollie';


export class SvcListMollieGateways implements IEvaServiceDefinition
{
  name = 'ListMollieGateways';
  path = '/message/ListMollieGateways';
  request?: ListMollieGateways;
  response?: ListMollieGatewaysResponse;
}
