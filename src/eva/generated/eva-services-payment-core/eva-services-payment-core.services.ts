import {
  IEvaServiceDefinition,
  EmptyResponseMessage,
} from '../eva-services-core';

import {
  AbortTransaction,
  AbortTransactionResponse,
  CreateEVAPayConfiguration,
  CreateEVAPayConfigurationResponse,
  CreateUserCard,
  CreateUserCardResponse,
  CreateUserCardMutation,
  DeleteEVAPayConfiguration,
  EVAPayGetInfo,
  EVAPayGetInfoResponse,
  GetAvailablePinHandlers,
  GetAvailablePinHandlersResponse,
  GetBlobsForEVAPay,
  GetBlobsForEVAPayResponse,
  GetEVAPayConfiguration,
  GetEVAPayConfigurationResponse,
  GetUserCardBalance,
  GetUserCardBalanceResponse,
  GetUserCardDetails,
  GetUserCardDetailsResponse,
  GetUserCardsForUser,
  GetUserCardsForUserResponse,
  GetUserCardTypes,
  GetUserCardTypesResponse,
  IdlePinTerminal,
  ListEVAPayConfigurations,
  ListEVAPayConfigurationsResponse,
  ListUserCardMutations,
  ListUserCardMutationsResponse,
  ListUserCards,
  ListUserCardsResponse,
  OpenCashDrawer,
  OpenCashDrawerResponse,
  PrintLastReceiptCallback,
  PrintPinReceipt,
  StartTransaction,
  StartTransactionResponse,
  StoreTap2PayReceipt,
  StoreTapToPayReceipt,
  UpdateEVAPayConfiguration,
} from './eva-services-payment-core';


export class SvcAbortTransaction implements IEvaServiceDefinition
{
  name = 'AbortTransaction';
  path = '/message/AbortTransaction';
  request?: AbortTransaction;
  response?: AbortTransactionResponse;
}

export class SvcCreateEVAPayConfiguration implements IEvaServiceDefinition
{
  name = 'CreateEVAPayConfiguration';
  path = '/message/CreateEVAPayConfiguration';
  request?: CreateEVAPayConfiguration;
  response?: CreateEVAPayConfigurationResponse;
}

export class SvcCreateUserCard implements IEvaServiceDefinition
{
  name = 'CreateUserCard';
  path = '/message/CreateUserCard';
  request?: CreateUserCard;
  response?: CreateUserCardResponse;
}

export class SvcCreateUserCardMutation implements IEvaServiceDefinition
{
  name = 'CreateUserCardMutation';
  path = '/message/CreateUserCardMutation';
  request?: CreateUserCardMutation;
  response?: EmptyResponseMessage;
}

export class SvcDeleteEVAPayConfiguration implements IEvaServiceDefinition
{
  name = 'DeleteEVAPayConfiguration';
  path = '/message/DeleteEVAPayConfiguration';
  request?: DeleteEVAPayConfiguration;
  response?: EmptyResponseMessage;
}

export class SvcEVAPayGetInfo implements IEvaServiceDefinition
{
  name = 'EVAPayGetInfo';
  path = '/message/EVAPayGetInfo';
  request?: EVAPayGetInfo;
  response?: EVAPayGetInfoResponse;
}

export class SvcGetAvailablePinHandlers implements IEvaServiceDefinition
{
  name = 'GetAvailablePinHandlers';
  path = '/message/GetAvailablePinHandlers';
  request?: GetAvailablePinHandlers;
  response?: GetAvailablePinHandlersResponse;
}

export class SvcGetBlobsForEVAPay implements IEvaServiceDefinition
{
  name = 'GetBlobsForEVAPay';
  path = '/message/GetBlobsForEVAPay';
  request?: GetBlobsForEVAPay;
  response?: GetBlobsForEVAPayResponse;
}

export class SvcGetEVAPayConfiguration implements IEvaServiceDefinition
{
  name = 'GetEVAPayConfiguration';
  path = '/message/GetEVAPayConfiguration';
  request?: GetEVAPayConfiguration;
  response?: GetEVAPayConfigurationResponse;
}

export class SvcGetUserCardBalance implements IEvaServiceDefinition
{
  name = 'GetUserCardBalance';
  path = '/message/GetUserCardBalance';
  request?: GetUserCardBalance;
  response?: GetUserCardBalanceResponse;
}

export class SvcGetUserCardDetails implements IEvaServiceDefinition
{
  name = 'GetUserCardDetails';
  path = '/message/GetUserCardDetails';
  request?: GetUserCardDetails;
  response?: GetUserCardDetailsResponse;
}

export class SvcGetUserCardsForUser implements IEvaServiceDefinition
{
  name = 'GetUserCardsForUser';
  path = '/message/GetUserCardsForUser';
  request?: GetUserCardsForUser;
  response?: GetUserCardsForUserResponse;
}

export class SvcGetUserCardTypes implements IEvaServiceDefinition
{
  name = 'GetUserCardTypes';
  path = '/message/GetUserCardTypes';
  request?: GetUserCardTypes;
  response?: GetUserCardTypesResponse;
}

export class SvcIdlePinTerminal implements IEvaServiceDefinition
{
  name = 'IdlePinTerminal';
  path = '/message/IdlePinTerminal';
  request?: IdlePinTerminal;
  response?: EmptyResponseMessage;
}

export class SvcListEVAPayConfigurations implements IEvaServiceDefinition
{
  name = 'ListEVAPayConfigurations';
  path = '/message/ListEVAPayConfigurations';
  request?: ListEVAPayConfigurations;
  response?: ListEVAPayConfigurationsResponse;
}

export class SvcListUserCardMutations implements IEvaServiceDefinition
{
  name = 'ListUserCardMutations';
  path = '/message/ListUserCardMutations';
  request?: ListUserCardMutations;
  response?: ListUserCardMutationsResponse;
}

export class SvcListUserCards implements IEvaServiceDefinition
{
  name = 'ListUserCards';
  path = '/message/ListUserCards';
  request?: ListUserCards;
  response?: ListUserCardsResponse;
}

export class SvcOpenCashDrawer implements IEvaServiceDefinition
{
  name = 'OpenCashDrawer';
  path = '/message/OpenCashDrawer';
  request?: OpenCashDrawer;
  response?: OpenCashDrawerResponse;
}

export class SvcPrintLastReceiptCallback implements IEvaServiceDefinition
{
  name = 'PrintLastReceiptCallback';
  path = '/message/PrintLastReceiptCallback';
  request?: PrintLastReceiptCallback;
  response?: EmptyResponseMessage;
}

export class SvcPrintPinReceipt implements IEvaServiceDefinition
{
  name = 'PrintPinReceipt';
  path = '/message/PrintPinReceipt';
  request?: PrintPinReceipt;
  response?: EmptyResponseMessage;
}

export class SvcStartTransaction implements IEvaServiceDefinition
{
  name = 'StartTransaction';
  path = '/message/StartTransaction';
  request?: StartTransaction;
  response?: StartTransactionResponse;
}

export class SvcStoreTap2PayReceipt implements IEvaServiceDefinition
{
  name = 'StoreTap2PayReceipt';
  path = '/message/StoreTap2PayReceipt';
  request?: StoreTap2PayReceipt;
  response?: EmptyResponseMessage;
}

export class SvcStoreTapToPayReceipt implements IEvaServiceDefinition
{
  name = 'StoreTapToPayReceipt';
  path = '/message/StoreTapToPayReceipt';
  request?: StoreTapToPayReceipt;
  response?: EmptyResponseMessage;
}

export class SvcUpdateEVAPayConfiguration implements IEvaServiceDefinition
{
  name = 'UpdateEVAPayConfiguration';
  path = '/message/UpdateEVAPayConfiguration';
  request?: UpdateEVAPayConfiguration;
  response?: EmptyResponseMessage;
}
