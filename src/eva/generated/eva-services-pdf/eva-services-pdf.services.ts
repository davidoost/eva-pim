import {
  IEvaServiceDefinition,
  ResourceResponseMessage,
} from '../eva-services-core';

import {
  MergePdfBlobs,
} from './eva-services-pdf';


export class SvcMergePdfBlobs implements IEvaServiceDefinition
{
  name = 'MergePdfBlobs';
  path = '/message/MergePdfBlobs';
  request?: MergePdfBlobs;
  response?: ResourceResponseMessage;
}
