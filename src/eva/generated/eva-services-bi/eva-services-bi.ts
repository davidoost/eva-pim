import {
  TAnyValue,
  RequestMessage,
  ResponseMessage,
} from '../eva-services-core';


export interface ModelsChartElement {
  DataSet?: TAnyValue;
  Description?: string;
  Title?: string;
  Type: ModelsChartElementTypes;
}

export enum ModelsChartElementTypes {
  Text = 1,
  Bar = 2,
  Pie = 3,
  Table = 4,
}

export interface GetDailyStats extends RequestMessage<GetDailyStatsResponse> {
}

export interface GetDailyStatsResponse extends ResponseMessage {
  Exported: number;
  Orders: number;
  Products: number;
  Shipped: number;
}

export interface GetOrderCounts extends RequestMessage<GetOrderCountsResponse> {
  EndDate?: string;
  StartDate?: string;
}

export interface GetOrderCountsResponse extends ResponseMessage {
  Days?: ReportingServicesGetOrderCountsResponse_DayWithCount[];
}

export interface ReportingServicesGetOrderCountsResponse_DayWithCount {
  Count: number;
  Day: string;
}

export interface GetPopularProducts extends RequestMessage<GetPopularProductsResponse> {
  Amount?: number;
  EndDate?: string;
  StartDate?: string;
}

export interface GetPopularProductsResponse extends ResponseMessage {
  Products?: ReportingServicesGetPopularProductsResponse_ProductWithCount[];
}

export interface ReportingServicesGetPopularProductsResponse_ProductWithCount {
  Count: number;
  /**
  * Entity type: Product
  */
  ID: number;
  Name?: string;
}

export interface GetChartsResponse extends ResponseMessage {
  Elements?: ModelsChartElement[];
}

/**
* Returns data that can be displayed as graphs in the frontend. This data is provided by an external system. When no external system is configured, mockdata will be returned.
*/
export interface GetCustomerCharts extends RequestMessage<GetChartsResponse> {
  /**
  * Entity type: User
  */
  UserID: number;
}

