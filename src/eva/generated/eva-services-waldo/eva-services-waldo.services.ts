import {
  IEvaServiceDefinition,
} from '../eva-services-core';

import {
  GetOrderStatusForOrders,
  GetOrderStatusForOrdersResponse,
  GetOrderStatusHistory,
  GetOrderStatusHistoryResponse,
} from './eva-services-waldo';


export class SvcGetOrderStatusForOrders implements IEvaServiceDefinition
{
  name = 'GetOrderStatusForOrders';
  path = '/message/GetOrderStatusForOrders';
  request?: GetOrderStatusForOrders;
  response?: GetOrderStatusForOrdersResponse;
}

export class SvcGetOrderStatusHistory implements IEvaServiceDefinition
{
  name = 'GetOrderStatusHistory';
  path = '/message/GetOrderStatusHistory';
  request?: GetOrderStatusHistory;
  response?: GetOrderStatusHistoryResponse;
}
