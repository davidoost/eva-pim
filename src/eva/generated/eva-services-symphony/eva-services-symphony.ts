import {
  TAnyValue,
  RequestMessage,
  RequestMessageWithEmptyResponse,
  ResponseMessage,
  PagedRequestMessage,
  PagedResponseMessage,
  ParsingParsingErrorType,
  DataModelsOrderLineCommitmentStatus,
  SearchIProductSearchItem,
} from '../eva-services-core';


export enum Errors
{
  /**
  * It was not possible to split OrderLine {0:id} to complete the partial cancellation of the OrderLine's fulfillment
  */
  OrderFulfillment_SplitOrderLineFailed = 'OrderFulfillment:SplitOrderLineFailed',
  /**
  * It's not currently allowed to partially cancel an OrderLine fulfillment, this is controlled by the setting `OrderFulfillment:AllowPartialCancellation`.
  */
  OrderFulfillment_PartialCancellationNotAllowed = 'OrderFulfillment:PartialCancellationNotAllowed',
  /**
  * The sheet could not be saved due to compile errors: {0:string}
  */
  Symphony_CannotSaveSheetDueToCompileErrors = 'Symphony:CannotSaveSheetDueToCompileErrors',
  /**
  * Sheet {id:id} cannot be compiled, errors: {errors:string}
  */
  Symphony_SheetNotCompiling = 'Symphony:SheetNotCompiling',
}
export enum CompilationAutocompletionCompletionSuggestionType {
  Variable = 0,
  Keyword = 1,
  Enum = 2,
}

export interface CompilationNodeCompletionResult {
  Alternatives?: CompilationNodeCompletionResult_ICompletionNode[];
  NextStatements?: CompilationNodeCompletionResult_ICompletionNode[];
  SelfCompletion?: TAnyValue;
}

export interface CompilationNodeCompletionResult_ICompletionNode {
  NodeType: 'Root' | 'Comparison' | 'Number' | 'Calculation' | 'And' | 'ReadVariable' | 'Array' | 'String' | 'DeclareVariable' | 'Switch' | 'SwitchCase' | 'Boolean' | 'Or' | 'Require' | 'Scope' | 'BoostScore' | 'NullCheck' | 'Null' | 'Fanout' | 'InterpolatedString' | 'Group' | 'Block' | 'DeclareTable' | 'ForEach' | 'If' | 'Lookup' | 'Output' | 'SetVariable' | 'FunctionCall' | 'FunctionCallParameter' | 'Exit' | 'IfBranch' | 'TableRow' | 'TableCell' | 'ArrayAccessor' | 'Identifier' | 'MemberAccess' | 'LambdaFunction' | 'Not' | 'ExtensionPoint' | 'Recipe' | 'Book' | 'BookLine' | 'BookParameter' | 'Ignore' | 'Defer';
}

export interface ListSheetHistoryFilter {
}

export interface ListSheetHistoryItem {
  Date: string;
  /**
  * Entity type: Script
  */
  ID: number;
  IsActive?: boolean;
  Name?: string;
  Revision: number;
  Source?: string;
  /**
  * Entity type: User
  */
  User: number;
  UserFullName?: string;
  /**
  * Entity type: User
  */
  UserID: number;
}

export interface ListSheetItem {
  Date: string;
  /**
  * Entity type: Script
  */
  ID: number;
  IsActive?: boolean;
  Name?: string;
  Revision: number;
  Source?: string;
  /**
  * Entity type: User
  */
  User: number;
  UserFullName?: string;
  /**
  * Entity type: User
  */
  UserID: number;
}

export interface ListSheetsFilter {
  /**
  * Entity type: Sheet
  */
  ID?: number;
  IsActive?: boolean;
  Name?: string;
  Source?: string;
}

export interface RuntimeFulfillmentScoreExplanation {
  Description?: string;
  ScoreExplanations?: RuntimeScoreExplanation[];
}

export interface RuntimeScoreExplanation {
  DeltaScore: number;
  Description?: string;
  Expression?: string;
  NewScore: number;
  PreviousScore: number;
  Variables?: Record<string,TAnyValue | null>;
}

export interface BuildSheet extends RequestMessage<BuildSheetResult> {
  AST: Record<string, TAnyValue>;
  Sheet: string;
}

export interface BuildSheetResult extends ParseSheetResponse {
  CodeSnippet?: string;
  Sheet?: string;
}

export interface ServicesCompletionSuggestion {
  Code?: string;
  Documentation?: string;
  Label?: string;
  Type: CompilationAutocompletionCompletionSuggestionType;
}

/**
* Creates a new sheet. Will return an error if the provided sheet cannot be parsed sucessfully.
*/
export interface CreateSheet extends RequestMessage<CreateSheetResponse> {
  IsActive?: boolean;
  Sheet: string;
}

export interface CreateSheetResponse extends ParseSheetResponse {
  /**
  * Entity type: Script
  */
  ID: number;
}

/**
* Deletes a sheet.
*/
export interface DeleteSheet extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: Script
  */
  ID: number;
}

/**
* Retrieves the completion options for the provided node that is part of the provided AST.
* 
* If no AST is provided this service will return the completion options that a new sheet would have.
* 
* The completion options consist of three possible values:
* 
* - Alternatives: with which nodes can the requested node be replaced?
* - NextStatements: if the node is a statement, which statements can come after it?
* - SelfCompletion: if a node contains child nodes, what are the possible node types for those children?
*/
export interface GetNodeCompletionOptions extends RequestMessage<GetNodeCompletionOptionsResponse> {
  AST?: Record<string, TAnyValue>;
  NodeID?: number;
}

export interface GetNodeCompletionOptionsResponse extends ResponseMessage {
  Result?: CompilationNodeCompletionResult;
}

/**
* Returns the available documentation at the provided position (column/line number) in the sheet.
*/
export interface GetSheetDocumentation extends RequestMessage<GetSheetDocumentationResponse> {
  /**
  * The 1-based column number of the position in the sheet that you would like documentation for.
  */
  Column?: number;
  /**
  * The 1-based line number of the position in the sheet that you would like documentation for.
  */
  Line?: number;
  /**
  * The sheet that you would like to have documentation for
  */
  Sheet: string;
}

export interface GetSheetDocumentationResponse extends ResponseMessage {
  /**
  * The documentation for the requested position. Will be null if there is no available documentation.
  */
  Documentation?: string;
}

/**
* Returns a list of revisions for a specific sheet.
*/
export interface ListSheetHistory extends PagedRequestMessage<ListSheetHistoryFilter, ListSheetHistoryResponse> {
  /**
  * Entity type: Sheet
  * ID of the sheet
  */
  ID: number;
}

export interface ListSheetHistoryResponse extends PagedResponseMessage<ListSheetHistoryItem> {
}

/**
* Returns a list of sheets, optionally filtered.
*/
export interface ListSheets extends PagedRequestMessage<ListSheetsFilter, ListSheetsResponse> {
}

export interface ListSheetsResponse extends PagedResponseMessage<ListSheetItem> {
}

/**
* Attempts to parse the provided sheet, returning whether or not it was successful, any errors and possibly autocomplete suggestions.
*/
export interface ParseSheet extends RequestMessage<ParseSheetResponse> {
  Sheet: string;
}

export interface ServicesParseSheetError {
  Message?: string;
  SourceColumn: number;
  SourceLine?: string;
  SourceLineNumber: number;
  Type: ParsingParsingErrorType;
}

export interface ParseSheetResponse extends ResponseMessage {
  AST?: Record<string, TAnyValue>;
  CompletionSuggestions?: ServicesCompletionSuggestion[];
  Errors?: ServicesParseSheetError[];
  HasErrors: boolean;
}

/**
* Provides the ability to do a what-if to see how the provided OrderID would be fulfilled.
* 
* This will use the existing sheets with the ability to specify additional new sheets (by not specifying an ID)
* or modify an existing sheet (by providing the ID of an existing sheet).
*/
export interface PreviewOrderFulfillment extends RequestMessage<PreviewOrderFulfillmentResponse> {
  CurrentTimeOverride?: string;
  /**
  * Entity type: ProductPropertyType
  */
  IncludedFields?: string[];
  Order?: ServicesPreviewOrderFulfillment_OrderModel;
  /**
  * Entity type: Order
  */
  OrderID?: number;
  /**
  * Entity type: Script
  */
  ScriptIDs?: number[];
  /**
  * If you specify sheets they will either be used as an additional sheet to consider when calculating order fulfillment, or as a replacement for an existing sheet based on whether the ID of the sheet is provided or not.
  * 
  * Specifying additional sheets can be used as a 'what-if' tool; what would happen to this order if I change this sheet to do this, etc.
  */
  Sheets?: ServicesPreviewOrderFulfillment_SheetToPreview[];
  Stock?: ServicesPreviewOrderFulfillment_StockModel;
  /**
  * Entity type: OrganizationUnit
  */
  SupplierOrganizationUnitIDs?: number[];
  /**
  * If specified as true the fulfillment preview will base its result on fulfillments that have already been created for the order. For example if the order has already been exported to a certain supplier
  * then the preview service will take that into account and not consider that supplier to be a fulfillment option anymore. If specified as false (the default) the service considers the order to be a clean slate
  * for which all options are still open.
  */
  UseCurrentFulfillments?: boolean;
}

export interface ServicesPreviewOrderFulfillment_OrderLineModel {
  CommitmentStatus?: DataModelsOrderLineCommitmentStatus;
  /**
  * Entity type: OrganizationUnit
  */
  FulfillmentOrganizationUnitID?: number;
  /**
  * Entity type: Product
  */
  ProductID: number;
  QuantityOrdered?: number;
  UnitPrice?: number;
}

export interface ServicesPreviewOrderFulfillment_OrderModel {
  /**
  * Entity type: Address
  */
  BillingAddressID?: number;
  /**
  * Entity type: User
  */
  CustomerID?: number;
  Lines?: ServicesPreviewOrderFulfillment_OrderLineModel[];
  /**
  * Entity type: Address
  */
  ShippingAddressID?: number;
  /**
  * Entity type: OrganizationUnit
  */
  SoldFromOrganizationUnitID?: number;
}

export interface ServicesPreviewOrderFulfillment_SheetToPreview {
  /**
  * Entity type: Script
  */
  ID?: number;
  Source?: string;
}

export interface ServicesPreviewOrderFulfillment_StockModel {
  OverrideIsDelta?: boolean;
  StockOverrides?: ServicesPreviewOrderFulfillment_StockOverride[];
}

export interface ServicesPreviewOrderFulfillment_StockOverride {
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID: number;
  /**
  * Entity type: Product
  */
  ProductID: number;
  QuantityAvailable?: number;
}

export interface PreviewOrderFulfillmentResponse extends ParseSheetResponse {
  Fulfillments?: ServicesPreviewOrderFulfillmentResponse_Fulfillment[];
  OrderLines?: ServicesPreviewOrderFulfillmentResponse_OrderLineResult[];
  Rejections?: ServicesPreviewOrderFulfillmentResponse_OrganizationUnitFulfllmentRejection[];
  ValidSuppliers?: ServicesPreviewOrderFulfillmentResponse_ValidSupplier[];
}

export interface ServicesPreviewOrderFulfillmentResponse_Fulfillment {
  Score: number;
  ScoreExplanation?: RuntimeFulfillmentScoreExplanation;
  Shipments?: ServicesPreviewOrderFulfillmentResponse_Shipment[];
}

export interface ServicesPreviewOrderFulfillmentResponse_OrderLine {
  /**
  * Entity type: OrderLine
  */
  ID: number;
  Quantity: number;
  Score: number;
  ScoreExplanations?: RuntimeScoreExplanation[];
}

export interface ServicesPreviewOrderFulfillmentResponse_OrderLineResult {
  GroupID?: string;
  /**
  * Entity type: OrderLine
  */
  ID: number;
  PotentialSuppliers?: ServicesPreviewOrderFulfillmentResponse_OrderLineResult_PotentialSupplier[];
  Product?: SearchIProductSearchItem;
  TotalQuantityToShip: number;
}

export interface ServicesPreviewOrderFulfillmentResponse_OrderLineResult_PotentialSupplier {
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID: number;
  Score: number;
  Sheet?: string;
}

export interface ServicesPreviewOrderFulfillmentResponse_OrganizationUnit {
  /**
  * Entity type: OrganizationUnit
  */
  BackendID?: string;
  /**
  * Entity type: OrganizationUnit
  */
  ID: number;
  Name?: string;
}

export interface ServicesPreviewOrderFulfillmentResponse_OrganizationUnitFulfllmentRejection {
  FulfillmentMethods?: ServicesPreviewOrderFulfillmentResponse_OrganizationUnitFulfllmentRejection_FulfillmentMethod[];
  /**
  * Entity type: OrganizationUnit
  */
  SupplierOrganizationUnitID?: number;
  SupplierOrganizationUnitName?: string;
}

export interface ServicesPreviewOrderFulfillmentResponse_OrganizationUnitFulfllmentRejection_FulfillmentMethod {
  Name?: string;
  Reasons?: ServicesPreviewOrderFulfillmentResponse_OrganizationUnitFulfllmentRejection_RejectionReason[];
}

export interface ServicesPreviewOrderFulfillmentResponse_OrganizationUnitFulfllmentRejection_RejectionReason {
  Description?: string;
  /**
  * Entity type: OrderLine
  */
  OrderLineIDs?: number[];
  /**
  * Entity type: Product
  */
  ProductIDs?: number[];
  Reason?: string;
}

export interface ServicesPreviewOrderFulfillmentResponse_Sheet {
  /**
  * Entity type: Sheet
  */
  ID?: number;
  Name?: string;
}

export interface ServicesPreviewOrderFulfillmentResponse_Shipment {
  Data?: Record<string,TAnyValue | null>;
  FulfillmentAction?: string;
  OrderLines?: ServicesPreviewOrderFulfillmentResponse_OrderLine[];
  Score?: number;
  ScoreExplanation?: RuntimeFulfillmentScoreExplanation;
  Sheet?: ServicesPreviewOrderFulfillmentResponse_Sheet;
  Supplier?: ServicesPreviewOrderFulfillmentResponse_OrganizationUnit;
}

export interface ServicesPreviewOrderFulfillmentResponse_ValidSupplier {
  /**
  * Entity type: OrderLine
  */
  FulfillableOrderLineIDs?: number[];
  FulfillmentMethod?: string;
  Score: number;
  ScoreExplanations?: ServicesPreviewOrderFulfillmentResponse_ValidSupplier_ScoreExplanation[];
  /**
  * Entity type: OrganizationUnit
  */
  SupplierID: number;
  SupplierName?: string;
}

export interface ServicesPreviewOrderFulfillmentResponse_ValidSupplier_ScoreExplanation {
  Description?: string;
  Expression?: string;
  /**
  * Entity type: OrderLine
  */
  OrderLineID: number;
  Score: number;
  Variables?: Record<string,TAnyValue | null>;
}

/**
* Updates an existing sheet. Will return an error if the provided sheet cannot be parsed sucessfully.
*/
export interface UpdateSheet extends RequestMessage<ParseSheetResponse> {
  /**
  * Entity type: Sheet
  */
  ID: number;
  IsActive?: boolean;
  Sheet: string;
}

