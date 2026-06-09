import {
  IEvaServiceDefinition,
} from '../eva-services-core';

import {
  GetSmartSuggestionsForOrder,
  GetSmartSuggestionsForOrderResponse,
  GetSmartSuggestionsForProduct,
  GetSmartSuggestionsForProductResponse,
  GetSmartSuggestionsForUser,
  GetSmartSuggestionsForUserResponse,
} from './eva-services-smart-suggestions';


export class SvcGetSmartSuggestionsForOrder implements IEvaServiceDefinition
{
  name = 'GetSmartSuggestionsForOrder';
  path = '/message/GetSmartSuggestionsForOrder';
  request?: GetSmartSuggestionsForOrder;
  response?: GetSmartSuggestionsForOrderResponse;
}

export class SvcGetSmartSuggestionsForProduct implements IEvaServiceDefinition
{
  name = 'GetSmartSuggestionsForProduct';
  path = '/message/GetSmartSuggestionsForProduct';
  request?: GetSmartSuggestionsForProduct;
  response?: GetSmartSuggestionsForProductResponse;
}

export class SvcGetSmartSuggestionsForUser implements IEvaServiceDefinition
{
  name = 'GetSmartSuggestionsForUser';
  path = '/message/GetSmartSuggestionsForUser';
  request?: GetSmartSuggestionsForUser;
  response?: GetSmartSuggestionsForUserResponse;
}
