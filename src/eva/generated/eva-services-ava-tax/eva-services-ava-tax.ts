import {
  RequestMessage,
  ResponseMessage,
} from '../eva-services-core';


/**
* Validate the Avatax configuration for the current OrganizationUnit.
* 
* Returns a list of messages that contains information about the configuration.
*/
export interface AvataxValidateConfiguration extends RequestMessage<AvataxValidateConfigurationResponse> {
}

export interface AvataxValidateConfigurationResponse extends ResponseMessage {
  IsValid: boolean;
  Messages: ServicesAvataxValidateConfigurationResponse_ValidationMessage[];
}

export interface ServicesAvataxValidateConfigurationResponse_ValidationMessage {
  Error: boolean;
  Message: string;
}

export interface EVACoreTaxProvidersAvataxTaxProviderConfiguration {
  CompanyCode?: string;
  InvoiceAction?: EVACoreTaxProvidersInvoiceActionAvatax;
  Password?: string;
  Production?: boolean;
  ShippingCostsTaxCode?: string;
  Username?: string;
}

export interface EVACoreTaxProvidersAvataxTaxProviderConfigurationUpdateModel {
  CompanyCode?: string | null;
  InvoiceAction?: EVACoreTaxProvidersInvoiceActionAvatax;
  Password?: string;
  Production?: boolean;
  ShippingCostsTaxCode?: string;
  Username?: string;
}

export enum EVACoreTaxProvidersInvoiceActionAvatax {
  None = 0,
  Save = 1,
  SaveAndCommit = 2,
}

