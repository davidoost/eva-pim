import {
  IEvaServiceDefinition,
  EmptyResponseMessage,
} from '../eva-services-core';

import {
  SetForterData,
} from './eva-services-forter';


export class SvcSetForterData implements IEvaServiceDefinition
{
  name = 'SetForterData';
  path = '/message/SetForterData';
  request?: SetForterData;
  response?: EmptyResponseMessage;
}
