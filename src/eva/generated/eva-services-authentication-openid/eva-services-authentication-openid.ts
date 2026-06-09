import {
  UserTypes,
  RequestMessage,
  ResponseMessage,
  RequestMessageWithEmptyResponse,
  FilteredPagedResultRequest,
  PagedResultResponse,
} from '../eva-services-core';


export interface ListOpenIDProvidersFilter {
  BaseUrl?: string;
  ClientID?: string;
  Enabled?: boolean;
  Name?: string;
  Primary?: boolean;
}

export interface OpenIDAuthenticateMessage {
  id_token?: string;
  /**
  * Entity type: Provider
  */
  provider?: number;
  /**
  * Entity type: Provider
  */
  provider_backendid?: string;
}

export interface ServicesAvailableOpenIDConfiguration {
  BaseUrl: string;
  ClientID: string;
  /**
  * Entity type: Provider
  */
  ID: number;
  Name?: string;
  Primary: boolean;
  UserType: UserTypes;
}

/**
* Create a new OpenID Provider Registration
*/
export interface CreateOpenIDProvider extends RequestMessage<CreateOpenIDProviderResponse> {
  BackendID?: string;
  BaseUrl: string;
  ClientID: string;
  CountryClaim?: string;
  CreateUsers?: boolean;
  DisallowOtherMethods?: boolean;
  /**
  * To identify the user an EmailAddress or Nickname is required, so at least one of EmailAddressClaim/NicknameClaim/UsernameClaim should be set.
  */
  EmailAddressClaim?: string;
  Enabled?: boolean;
  FirstNameClaim?: string;
  LanguageClaim?: string;
  LastNameClaim?: string;
  Name?: string;
  /**
  * To identify the user an EmailAddress or Nickname is required, so at least one of EmailAddressClaim/NicknameClaim/UsernameClaim should be set.
  */
  NicknameClaim?: string;
  UserType?: UserTypes;
  /**
  * To identify the user an EmailAddress or Nickname is required, so at least one of EmailAddressClaim/NicknameClaim/UsernameClaim should be set.
  */
  UsernameClaim?: string;
}

export interface CreateOpenIDProviderResponse extends ResponseMessage {
  /**
  * Entity type: Provider
  */
  ID: number;
}

/**
* Delete an existing OpenID Provider Registration
*/
export interface DeleteOpenIDProvider extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: Provider
  */
  ID: number;
}

/**
* Get all available openid provider configurations
*/
export interface GetAvailableOpenIDConfigurations extends RequestMessage<GetAvailableOpenIDConfigurationsResponse> {
}

export interface GetAvailableOpenIDConfigurationsResponse extends ResponseMessage {
  Providers: ServicesAvailableOpenIDConfiguration[];
}

/**
* Get all info for a Azure OpenID Provider
*/
export interface GetOpenIDProviderByID extends RequestMessage<GetOpenIDProviderByIDResponse> {
  /**
  * Entity type: Provider
  */
  ID: number;
}

export interface GetOpenIDProviderByIDResponse extends ResponseMessage {
  BackendID?: string;
  BaseUrl: string;
  ClientID: string;
  CountryClaim?: string;
  CreateUsers: boolean;
  DisallowOtherMethods: boolean;
  EmailAddressClaim?: string;
  Enabled: boolean;
  FirstNameClaim?: string;
  /**
  * Entity type: Provider
  */
  ID: number;
  LanguageClaim?: string;
  LastNameClaim?: string;
  Name?: string;
  NicknameClaim?: string;
  Primary: boolean;
  UserType: UserTypes;
  UsernameClaim?: string;
}

/**
* List OpenID Provider Registrations
*/
export interface ListOpenIDProviders extends FilteredPagedResultRequest<ListOpenIDProvidersFilter, ListOpenIDProvidersResponse> {
}

export interface ListOpenIDProvidersResponse extends PagedResultResponse<ServicesOpenIDProviderDto> {
}

export interface ServicesOpenIDProviderDto {
  BackendID?: string;
  BaseUrl: string;
  ClientID: string;
  CountryClaim?: string;
  CreateUsers: boolean;
  DisallowOtherMethods: boolean;
  /**
  * To identify the user an EmailAddress or Nickname is required, so at least one of EmailAddressClaim/NicknameClaim/UsernameClaim should be set.
  */
  EmailAddressClaim?: string;
  Enabled: boolean;
  FirstNameClaim?: string;
  /**
  * Entity type: Provider
  */
  ID: number;
  LanguageClaim?: string;
  LastNameClaim?: string;
  Name?: string;
  /**
  * To identify the user an EmailAddress or Nickname is required, so at least one of EmailAddressClaim/NicknameClaim/UsernameClaim should be set.
  */
  NicknameClaim?: string;
  Primary: boolean;
  UserType: UserTypes;
  /**
  * To identify the user an EmailAddress or Nickname is required, so at least one of EmailAddressClaim/NicknameClaim/UsernameClaim should be set.
  */
  UsernameClaim?: string;
}

/**
* Set the provider that will be the default available when logging in, non-primary providers have to be requested.
*/
export interface SetPrimaryOpenIDProvider extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: Provider
  */
  ID: number;
}

/**
* Update an existing OpenID Provider Registration
*/
export interface UpdateOpenIDProvider extends RequestMessageWithEmptyResponse {
  BackendID?: string | null;
  BaseUrl?: string;
  ClientID?: string;
  CountryClaim?: string | null;
  CreateUsers?: boolean;
  DisallowOtherMethods?: boolean;
  /**
  * To identify the user an EmailAddress or Nickname is required, so at least one of EmailAddressClaim/NicknameClaim/UsernameClaim should be set.
  */
  EmailAddressClaim?: string | null;
  Enabled?: boolean;
  FirstNameClaim?: string | null;
  /**
  * Entity type: Provider
  */
  ID: number;
  LanguageClaim?: string | null;
  LastNameClaim?: string | null;
  Name?: string | null;
  /**
  * To identify the user an EmailAddress or Nickname is required, so at least one of EmailAddressClaim/NicknameClaim/UsernameClaim should be set.
  */
  NicknameClaim?: string | null;
  UserType?: UserTypes;
  /**
  * To identify the user an EmailAddress or Nickname is required, so at least one of EmailAddressClaim/NicknameClaim/UsernameClaim should be set.
  */
  UsernameClaim?: string | null;
}

