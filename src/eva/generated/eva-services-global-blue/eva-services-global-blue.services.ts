import {
  IEvaServiceDefinition,
  EmptyResponseMessage,
} from '../eva-services-core';

import {
  GlobalBlueGetEligibilityInformation,
  GlobalBlueGetEligibilityInformationResponse,
  GlobalBlueGetOrdersToReissue,
  GlobalBlueGetOrdersToReissueResponse,
  GlobalBluePrintForm,
  GlobalBlueSetGlobalBlueIdentifier,
  GlobalBlueStartTaxFree,
  GlobalBlueStartTaxFreeResponse,
} from './eva-services-global-blue';


export class SvcGlobalBlueGetEligibilityInformation implements IEvaServiceDefinition
{
  name = 'GlobalBlueGetEligibilityInformation';
  path = '/message/GlobalBlueGetEligibilityInformation';
  request?: GlobalBlueGetEligibilityInformation;
  response?: GlobalBlueGetEligibilityInformationResponse;
}

export class SvcGlobalBlueGetOrdersToReissue implements IEvaServiceDefinition
{
  name = 'GlobalBlueGetOrdersToReissue';
  path = '/message/GlobalBlueGetOrdersToReissue';
  request?: GlobalBlueGetOrdersToReissue;
  response?: GlobalBlueGetOrdersToReissueResponse;
}

export class SvcGlobalBluePrintForm implements IEvaServiceDefinition
{
  name = 'GlobalBluePrintForm';
  path = '/message/GlobalBluePrintForm';
  request?: GlobalBluePrintForm;
  response?: EmptyResponseMessage;
}

export class SvcGlobalBlueSetGlobalBlueIdentifier implements IEvaServiceDefinition
{
  name = 'GlobalBlueSetGlobalBlueIdentifier';
  path = '/message/GlobalBlueSetGlobalBlueIdentifier';
  request?: GlobalBlueSetGlobalBlueIdentifier;
  response?: EmptyResponseMessage;
}

export class SvcGlobalBlueStartTaxFree implements IEvaServiceDefinition
{
  name = 'GlobalBlueStartTaxFree';
  path = '/message/GlobalBlueStartTaxFree';
  request?: GlobalBlueStartTaxFree;
  response?: GlobalBlueStartTaxFreeResponse;
}
