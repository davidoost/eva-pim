import {
  RequestMessageWithEmptyResponse,
} from '../eva-services-core';


export interface ForterDataDto {
  ForterMobileUID?: string;
  ForterTokenCookie?: string;
}

/**
* Store Forter data for an order
*/
export interface SetForterData extends RequestMessageWithEmptyResponse {
  ForterMobileUID?: string;
  ForterTokenCookie?: string;
  /**
  * Entity type: Order
  */
  OrderID: number;
}

