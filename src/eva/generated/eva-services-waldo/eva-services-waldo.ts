import {
  RequestMessage,
  ResponseMessage,
  TAnyValue,
} from '../eva-services-core';


/**
* Get the last orderstatus for a set of Orders
*/
export interface GetOrderStatusForOrders extends RequestMessage<GetOrderStatusForOrdersResponse> {
  /**
  * Entity type: Order
  */
  OrderIDs?: number[];
}

export interface GetOrderStatusForOrdersResponse extends ResponseMessage {
  /**
  * Entity type: Order
  */
  Results?: Record<string,ServicesGetOrderStatusForOrdersResponse_Model>;
}

export interface ServicesGetOrderStatusForOrdersResponse_Model {
  BackendID?: string;
  CreationTime?: string;
  Data?: Record<string,TAnyValue | null>;
  Description?: string;
  Sequence?: number;
  Subtitle?: string;
  Title?: string;
}

export interface GetOrderStatusHistory extends RequestMessage<GetOrderStatusHistoryResponse> {
  BackendID?: string;
  BackendSystemID?: string;
  /**
  * Entity type: Order
  */
  ID?: number;
  /**
  * Entity type: Order
  */
  OrderID?: number;
}

export interface GetOrderStatusHistoryResponse extends ResponseMessage {
  Results?: ServicesGetOrderStatusHistoryResponse_Model[];
}

export interface ServicesGetOrderStatusHistoryResponse_Model {
  BackendID?: string;
  CreationTime: string;
  Data?: Record<string,TAnyValue | null>;
  Description?: string;
  Sequence: number;
  Subtitle?: string;
  Title?: string;
}

