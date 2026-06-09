import {
  IEvaServiceDefinition,
  EmptyResponseMessage,
} from '../eva-services-core';

import {
  CreateOpenIDProvider,
  CreateOpenIDProviderResponse,
  DeleteOpenIDProvider,
  GetAvailableOpenIDConfigurations,
  GetAvailableOpenIDConfigurationsResponse,
  GetOpenIDProviderByID,
  GetOpenIDProviderByIDResponse,
  ListOpenIDProviders,
  ListOpenIDProvidersResponse,
  SetPrimaryOpenIDProvider,
  UpdateOpenIDProvider,
} from './eva-services-authentication-openid';


export class SvcCreateOpenIDProvider implements IEvaServiceDefinition
{
  name = 'CreateOpenIDProvider';
  path = '/message/CreateOpenIDProvider';
  request?: CreateOpenIDProvider;
  response?: CreateOpenIDProviderResponse;
}

export class SvcDeleteOpenIDProvider implements IEvaServiceDefinition
{
  name = 'DeleteOpenIDProvider';
  path = '/message/DeleteOpenIDProvider';
  request?: DeleteOpenIDProvider;
  response?: EmptyResponseMessage;
}

export class SvcGetAvailableOpenIDConfigurations implements IEvaServiceDefinition
{
  name = 'GetAvailableOpenIDConfigurations';
  path = '/message/GetAvailableOpenIDConfigurations';
  request?: GetAvailableOpenIDConfigurations;
  response?: GetAvailableOpenIDConfigurationsResponse;
}

export class SvcGetOpenIDProviderByID implements IEvaServiceDefinition
{
  name = 'GetOpenIDProviderByID';
  path = '/message/GetOpenIDProviderByID';
  request?: GetOpenIDProviderByID;
  response?: GetOpenIDProviderByIDResponse;
}

export class SvcListOpenIDProviders implements IEvaServiceDefinition
{
  name = 'ListOpenIDProviders';
  path = '/message/ListOpenIDProviders';
  request?: ListOpenIDProviders;
  response?: ListOpenIDProvidersResponse;
}

export class SvcSetPrimaryOpenIDProvider implements IEvaServiceDefinition
{
  name = 'SetPrimaryOpenIDProvider';
  path = '/message/SetPrimaryOpenIDProvider';
  request?: SetPrimaryOpenIDProvider;
  response?: EmptyResponseMessage;
}

export class SvcUpdateOpenIDProvider implements IEvaServiceDefinition
{
  name = 'UpdateOpenIDProvider';
  path = '/message/UpdateOpenIDProvider';
  request?: UpdateOpenIDProvider;
  response?: EmptyResponseMessage;
}
