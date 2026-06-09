import {
  IEvaServiceDefinition,
} from '../eva-services-core';

import {
  GetMultiSafepayGateways,
  GetMultiSafepayGatewaysResponse,
} from './eva-services-payment-multi-safepay';


export class SvcGetMultiSafepayGateways implements IEvaServiceDefinition
{
  name = 'GetMultiSafepayGateways';
  path = '/message/GetMultiSafepayGateways';
  request?: GetMultiSafepayGateways;
  response?: GetMultiSafepayGatewaysResponse;
}
