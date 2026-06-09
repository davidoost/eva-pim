import {
  RequestMessage,
  ResponseMessage,
  RequestMessageWithEmptyResponse,
} from '../eva-services-core';


export enum Errors
{
  /**
  * Order {0:id} has no valid EligibilityCheck yet.
  */
  GlobalBlue_NoValidEligibilityCheckDone = 'GlobalBlue:NoValidEligibilityCheckDone',
  /**
  * Order {0:id} is already issued with GlobalBlue.
  */
  GlobalBlue_OrderAlreadyIssued = 'GlobalBlue:OrderAlreadyIssued',
  /**
  * Order {0:id} is not invoiced yet, TaxFreeForm unavailable.
  */
  GlobalBlue_OrderNotInvoiced = 'GlobalBlue:OrderNotInvoiced',
  /**
  * Order {0:id} has no TaxFreeForm yet, request it first before printing.
  */
  GlobalBlue_NoTaxFreeFormAvailable = 'GlobalBlue:NoTaxFreeFormAvailable',
  /**
  * The supplier identifier is not valid, it should start with 308604.
  */
  GlobalBlue_InvalidGlobalBlueIdentifier = 'GlobalBlue:InvalidGlobalBlueIdentifier',
  /**
  * Global Blue is not enabled for the current organization unit or credentials are not configured.
  */
  GlobalBlue_Disabled = 'GlobalBlue:Disabled',
  /**
  * Cannot determine document numbers for order {0:id} based on document number mode {1:string}.
  */
  GlobalBlue_DocumentNumber = 'GlobalBlue:DocumentNumber',
}
/**
* Fetch the eligibility information for the current order.
* 
* When no BillingAddress is available on the Order, the country of residence has to be provided in the CountryCode field.
* 
* If the response TaxFreeAvailble is true, the user can proceed with calling the GlobalBlueStartTaxFree service.
* 
* If the response is false, tax free is not available. This can be due to several reasons:
* - CountryEligibility == false: the selected CountryOfResidence is not eligible for TaxFree
* - Amounts.AmountBelowMinimum: the total amount of the order is not enough to qualify for tax free, it should be at least Amounts.MinAmount
* - Amounts.AmountOverMaximum: the total amount of the order is to much to qualify for tax free, it should be lower than Amounts.MaxAmount
*/
export interface GlobalBlueGetEligibilityInformation extends RequestMessage<GlobalBlueGetEligibilityInformationResponse> {
  /**
  * Entity type: Country
  * Country of residence of the customer, overrides billingaddress CountryID
  */
  CountryCode?: string;
  /**
  * Entity type: Order
  */
  OrderID: number;
}

export interface GlobalBlueGetEligibilityInformationResponse extends ResponseMessage {
  Amounts?: ServicesGlobalBlueGetEligibilityInformationResponse_GrossAmounts;
  /**
  * Is the provided country eligible for a taxfree form
  */
  CountryEligibility: boolean;
  /**
  * Is this order eligible for a taxfree form
  */
  TaxFreeAvailable: boolean;
}

export interface ServicesGlobalBlueGetEligibilityInformationResponse_GrossAmounts {
  /**
  * Amount that should be added to the order to validate for TaxFree
  */
  AmountBelowMinimum: number;
  /**
  * Amount that should be removed from the order to validate for TaxFree
  */
  AmountOverMaximum: number;
  MaxAmount: number;
  MinAmount: number;
}

/**
* Fetch the reissue information for the current return order.
* 
* It will return the orders that will be voided, but are not fully returned, so it would make sense to reissue these orders.
*/
export interface GlobalBlueGetOrdersToReissue extends RequestMessage<GlobalBlueGetOrdersToReissueResponse> {
  /**
  * Entity type: Order
  * The return order
  */
  OrderID: number;
}

export interface GlobalBlueGetOrdersToReissueResponse extends ResponseMessage {
  Orders?: ServicesGlobalBlueGetOrdersToReissueResponse_ReturnOrder[];
}

export interface ServicesGlobalBlueGetOrdersToReissueResponse_ReturnOrder {
  /**
  * Entity type: Order
  */
  OrderID: number;
}

/**
* This service can be used to print the TaxFree form after it has been issued for an Order.
* 
* The OrderID is required, the StationID is optional when it's provided in the header.
*/
export interface GlobalBluePrintForm extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: Order
  */
  OrderID: number;
  /**
  * Entity type: Station
  */
  StationID?: number;
}

/**
* After a GlobalBlue card is scanned the number can be stored on the order to allow fast TaxFree handling.
* 
* To remove the GlobalBlueIdentifier from the Order call this service without providing the GlobalBlueIdentifier property.
*/
export interface GlobalBlueSetGlobalBlueIdentifier extends RequestMessageWithEmptyResponse {
  GlobalBlueIdentifier?: string;
  /**
  * Entity type: Order
  */
  OrderID: number;
}

/**
* Start the GlobalBlue TaxFreeForm issuing process.
* 
* This will only work for Orders that passed the Eligibility check done by the GlobalBlueGetEligibilityInformation service.
* The order should also be Invoiced.
* 
* The property PosIdentification should contain a unique identifier for the current frontend instance, device/app specific
*/
export interface GlobalBlueStartTaxFree extends RequestMessage<GlobalBlueStartTaxFreeResponse> {
  /**
  * Entity type: Order
  */
  OrderID: number;
  /**
  * Unique identifier for the current frontend instance, device/app specific
  */
  PosIdentification: string;
}

export interface GlobalBlueStartTaxFreeResponse extends ResponseMessage {
  FormData?: Record<string,string | null>;
  GroupID?: string;
  Url?: string;
}

