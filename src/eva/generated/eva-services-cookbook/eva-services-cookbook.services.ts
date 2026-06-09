import {
  IEvaServiceDefinition,
  EmptyResponseMessage,
} from '../eva-services-core';

import {
  CreateAccountingRecipe,
  CreateAccountingRecipeResponse,
  DeleteAccountingRecipe,
  GetAccountingRecipe,
  GetAccountingRecipeResponse,
  GetAccountingRecipeHistory,
  GetAccountingRecipeHistoryResponse,
  ListAccountingRecipes,
  ListAccountingRecipesResponse,
  ParseAccountingRecipe,
  ParseRecipeResponse,
  PreviewAccountingRecipe,
  PreviewAccountingRecipeResponse,
  UpdateAccountingRecipe,
  UpdateAccountingRecipeResponse,
} from './eva-services-cookbook';


export class SvcCreateAccountingRecipe implements IEvaServiceDefinition
{
  name = 'CreateAccountingRecipe';
  path = '/message/CreateAccountingRecipe';
  request?: CreateAccountingRecipe;
  response?: CreateAccountingRecipeResponse;
}

export class SvcDeleteAccountingRecipe implements IEvaServiceDefinition
{
  name = 'DeleteAccountingRecipe';
  path = '/message/DeleteAccountingRecipe';
  request?: DeleteAccountingRecipe;
  response?: EmptyResponseMessage;
}

export class SvcGetAccountingRecipe implements IEvaServiceDefinition
{
  name = 'GetAccountingRecipe';
  path = '/message/GetAccountingRecipe';
  request?: GetAccountingRecipe;
  response?: GetAccountingRecipeResponse;
}

export class SvcGetAccountingRecipeHistory implements IEvaServiceDefinition
{
  name = 'GetAccountingRecipeHistory';
  path = '/message/GetAccountingRecipeHistory';
  request?: GetAccountingRecipeHistory;
  response?: GetAccountingRecipeHistoryResponse;
}

export class SvcListAccountingRecipes implements IEvaServiceDefinition
{
  name = 'ListAccountingRecipes';
  path = '/message/ListAccountingRecipes';
  request?: ListAccountingRecipes;
  response?: ListAccountingRecipesResponse;
}

export class SvcParseAccountingRecipe implements IEvaServiceDefinition
{
  name = 'ParseAccountingRecipe';
  path = '/message/ParseAccountingRecipe';
  request?: ParseAccountingRecipe;
  response?: ParseRecipeResponse;
}

export class SvcPreviewAccountingRecipe implements IEvaServiceDefinition
{
  name = 'PreviewAccountingRecipe';
  path = '/message/PreviewAccountingRecipe';
  request?: PreviewAccountingRecipe;
  response?: PreviewAccountingRecipeResponse;
}

export class SvcUpdateAccountingRecipe implements IEvaServiceDefinition
{
  name = 'UpdateAccountingRecipe';
  path = '/message/UpdateAccountingRecipe';
  request?: UpdateAccountingRecipe;
  response?: UpdateAccountingRecipeResponse;
}
