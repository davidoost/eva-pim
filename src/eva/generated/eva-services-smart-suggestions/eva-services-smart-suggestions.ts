import {
  RequestMessage,
  ResponseMessage,
  SearchIProductSearchItem,
} from '../eva-services-core';


/**
* Get smart suggestions for an order
*/
export interface GetSmartSuggestionsForOrder extends RequestMessage<GetSmartSuggestionsForOrderResponse> {
  /**
  * Entity type: ProductPropertyType
  */
  IncludedFields: string[];
  /**
  * Entity type: Order
  */
  OrderID?: number;
}

export interface GetSmartSuggestionsForOrderResponse extends ResponseMessage {
  DisplayProperties?: ServicesGetSmartSuggestionsForOrderResponse_SmartSuggestionDisplayProperties;
  Suggestions?: ServicesGetSmartSuggestionsForOrderResponse_SmartSuggestion[];
}

export interface ServicesGetSmartSuggestionsForOrderResponse_SmartSuggestion {
  ProductContent?: SearchIProductSearchItem;
  /**
  * Entity type: Product
  */
  ProductID: number;
  Source?: string;
}

export interface ServicesGetSmartSuggestionsForOrderResponse_SmartSuggestionDisplayProperties {
  CustomerFirstName?: string;
}

/**
* Get smart suggestions for a product
*/
export interface GetSmartSuggestionsForProduct extends RequestMessage<GetSmartSuggestionsForProductResponse> {
  /**
  * Entity type: ProductPropertyType
  */
  IncludedFields: string[];
  /**
  * Entity type: Product
  */
  ProductID: number;
}

export interface GetSmartSuggestionsForProductResponse extends ResponseMessage {
  Suggestions?: ServicesGetSmartSuggestionsForProductResponse_SmartSuggestion[];
}

export interface ServicesGetSmartSuggestionsForProductResponse_SmartSuggestion {
  ProductContent?: SearchIProductSearchItem;
  /**
  * Entity type: Product
  */
  ProductID: number;
  Source?: string;
}

/**
* Get smart suggestions for a user
*/
export interface GetSmartSuggestionsForUser extends RequestMessage<GetSmartSuggestionsForUserResponse> {
  /**
  * Entity type: ProductPropertyType
  */
  IncludedFields: string[];
  /**
  * Entity type: User
  */
  UserID: number;
}

export interface GetSmartSuggestionsForUserResponse extends ResponseMessage {
  DisplayProperties?: ServicesGetSmartSuggestionsForUserResponse_SmartSuggestionDisplayProperties;
  Suggestions?: ServicesGetSmartSuggestionsForUserResponse_SmartSuggestion[];
}

export interface ServicesGetSmartSuggestionsForUserResponse_SmartSuggestion {
  ProductContent?: SearchIProductSearchItem;
  /**
  * Entity type: Product
  */
  ProductID: number;
  Source?: string;
}

export interface ServicesGetSmartSuggestionsForUserResponse_SmartSuggestionDisplayProperties {
  FirstName?: string;
}

