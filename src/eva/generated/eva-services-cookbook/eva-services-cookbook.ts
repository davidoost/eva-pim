import {
  DataModelsFinancialEventTypes,
  RequestMessage,
  RequestMessageWithEmptyResponse,
  ResponseMessage,
  PagedResultRequest,
  PagedResultResponse,
} from '../eva-services-core';


export enum FinanceCompletionSuggestionType {
  Variable = 0,
  Keyword = 1,
  Enum = 2,
  Account = 3,
}

export enum FinanceParsingErrorType {
  InvalidSyntax = 0,
  UnknownVariable = 1,
  InvalidComparison = 2,
  InvalidOperator = 3,
  MissingCredit = 4,
  MissingDebit = 5,
  AmountMustBeNumerical = 6,
  InvalidBookOnOrganizationUnit = 7,
  InvalidEventType = 8,
  DuplicateVariable = 9,
  InvalidVariable = 10,
}

export interface ServicesAccountBookingDetails {
  /**
  * Entity type: AccountingRecipe
  */
  AccountingRecipeID: number;
  Amount: number;
  /**
  * Entity type: Account
  */
  BookedOnAccountID: number;
  BookedOnAccountName?: string;
  BookedOnAccountNumber?: string;
  /**
  * Entity type: OrganizationUnit
  */
  BookedOnOrganizationUnitID: number;
  BookedOnOrganizationUnitName?: string;
  /**
  * Entity type: Currency
  */
  CurrencyID?: string;
  Date: string;
  Description?: string;
  Offset1?: string;
  Offset2?: string;
  Offset3?: string;
  Offset4?: string;
  Offset5?: string;
  Offset6?: string;
  Offset7?: string;
  Offset8?: string;
  Offset9?: string;
}

export interface ServicesAccountBookingPreview {
  Amount: number;
  /**
  * Entity type: Account
  */
  BookedOnAccountID: number;
  BookedOnAccountName?: string;
  BookedOnAccountNumber?: string;
  /**
  * Entity type: OrganizationUnit
  */
  BookedOnOrganizationUnitID: number;
  BookedOnOrganizationUnitName?: string;
  /**
  * Entity type: Currency
  */
  CurrencyID?: string;
  Date: string;
  Offset1?: string;
  Offset2?: string;
  Offset3?: string;
  Offset4?: string;
  Offset5?: string;
  Offset6?: string;
  Offset7?: string;
  Offset8?: string;
  Offset9?: string;
}

export interface ServicesAccountingRecipeDto {
  EventType: DataModelsFinancialEventTypes;
  /**
  * Entity type: AccountingRecipe
  */
  ID: number;
  IsActive: boolean;
  Name?: string;
  Recipe?: string;
}

export interface ServicesAccountingRecipeToPreview {
  /**
  * Entity type: AccountingRecipe
  */
  ID?: number;
  Recipe?: string;
}

export enum ServicesAccountingRecipeToPreviewType {
  V1 = 0,
  V2 = 1,
}

export interface ServicesCompletionSuggestion {
  Code?: string;
  Documentation?: string;
  Label?: string;
  Type: FinanceCompletionSuggestionType;
}

export interface CreateAccountingRecipe extends RequestMessage<CreateAccountingRecipeResponse> {
  IsActive?: boolean;
  Name?: string;
  Recipe?: string;
}

export interface CreateAccountingRecipeResponse extends ParseRecipeResponse {
  /**
  * Entity type: AccountingRecipe
  */
  ID: number;
}

export interface DeleteAccountingRecipe extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: AccountingRecipe
  */
  ID: number;
}

export interface GetAccountingRecipe extends RequestMessage<GetAccountingRecipeResponse> {
  /**
  * Entity type: AccountingRecipe
  */
  ID: number;
}

export interface GetAccountingRecipeHistory extends RequestMessage<GetAccountingRecipeHistoryResponse> {
  /**
  * Entity type: AccountingRecipe
  */
  ID: number;
}

export interface GetAccountingRecipeHistoryResponse extends ResponseMessage {
  Entries?: ServicesGetAccountingRecipeHistoryResponse_AccountingRecipeEntry[];
}

export interface ServicesGetAccountingRecipeHistoryResponse_AccountingRecipeEntry {
  EventType: DataModelsFinancialEventTypes;
  ExistedFrom: string;
  ExistedTill: string;
  /**
  * Entity type: AccountingRecipe
  */
  ID: number;
  IsActive: boolean;
  ModifiedAt?: string;
  ModifiedByEmail?: string;
  /**
  * Entity type: User
  */
  ModifiedByUserID?: number;
  Name?: string;
  Recipe?: string;
  Revision: number;
}

export interface GetAccountingRecipeResponse extends ResponseMessage {
  Recipe?: ServicesAccountingRecipeDto;
}

export interface ListAccountingRecipes extends PagedResultRequest<ListAccountingRecipesResponse> {
  IsActive?: boolean;
  Type?: DataModelsFinancialEventTypes;
}

export interface ListAccountingRecipesResponse extends PagedResultResponse<ServicesAccountingRecipeDto> {
}

export interface ParseAccountingRecipe extends RequestMessage<ParseRecipeResponse> {
  CursorPosition?: number;
  Recipe: string;
}

export interface ServicesParseRecipeError {
  Message?: string;
  SourceColumn: number;
  SourceLine?: string;
  SourceLineNumber: number;
  Type: FinanceParsingErrorType;
}

export interface ParseRecipeResponse extends ResponseMessage {
  CompletionSuggestions?: ServicesCompletionSuggestion[];
  Errors?: ServicesParseRecipeError[];
  HasErrors: boolean;
}

export interface PreviewAccountingRecipe extends RequestMessage<PreviewAccountingRecipeResponse> {
  /**
  * Entity type: FinancialEvent
  */
  FinancialEventIDs?: number[];
  /**
  * Entity type: Order
  */
  OrderID?: number;
  RecipeType?: ServicesAccountingRecipeToPreviewType;
  Recipes?: ServicesAccountingRecipeToPreview[];
  Type?: DataModelsFinancialEventTypes;
}

export interface PreviewAccountingRecipeResponse extends ParseRecipeResponse {
  BookingPreviewDetails?: ServicesAccountBookingDetails[];
  BookingPreviewSummaries?: ServicesAccountBookingPreview[];
  Warnings?: string[];
}

export interface UpdateAccountingRecipe extends RequestMessage<UpdateAccountingRecipeResponse> {
  /**
  * Entity type: AccountingRecipe
  */
  ID: number;
  IsActive?: boolean;
  Name?: string;
  Recipe?: string;
}

export interface UpdateAccountingRecipeResponse extends ParseRecipeResponse {
}

