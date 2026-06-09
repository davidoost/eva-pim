import {
  IEvaServiceDefinition,
} from '../eva-services-core';

import {
  AvataxValidateConfiguration,
  AvataxValidateConfigurationResponse,
} from './eva-services-ava-tax';


export class SvcAvataxValidateConfiguration implements IEvaServiceDefinition
{
  name = 'AvataxValidateConfiguration';
  path = '/message/AvataxValidateConfiguration';
  request?: AvataxValidateConfiguration;
  response?: AvataxValidateConfigurationResponse;
}
