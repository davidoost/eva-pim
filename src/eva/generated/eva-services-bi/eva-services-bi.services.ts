import {
  IEvaServiceDefinition,
} from '../eva-services-core';

import {
  GetCustomerCharts,
  GetChartsResponse,
  GetDailyStats,
  GetDailyStatsResponse,
  GetOrderCounts,
  GetOrderCountsResponse,
  GetPopularProducts,
  GetPopularProductsResponse,
} from './eva-services-bi';


export class SvcGetCustomerCharts implements IEvaServiceDefinition
{
  name = 'GetCustomerCharts';
  path = '/message/GetCustomerCharts';
  request?: GetCustomerCharts;
  response?: GetChartsResponse;
}

export class SvcGetDailyStats implements IEvaServiceDefinition
{
  name = 'GetDailyStats';
  path = '/message/GetDailyStats';
  request?: GetDailyStats;
  response?: GetDailyStatsResponse;
}

export class SvcGetOrderCounts implements IEvaServiceDefinition
{
  name = 'GetOrderCounts';
  path = '/message/GetOrderCounts';
  request?: GetOrderCounts;
  response?: GetOrderCountsResponse;
}

export class SvcGetPopularProducts implements IEvaServiceDefinition
{
  name = 'GetPopularProducts';
  path = '/message/GetPopularProducts';
  request?: GetPopularProducts;
  response?: GetPopularProductsResponse;
}
