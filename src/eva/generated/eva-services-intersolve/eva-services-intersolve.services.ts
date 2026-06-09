import {
  IEvaServiceDefinition,
  SimpleShoppingCartResponse,
} from '../eva-services-core';

import {
  AddVoucherToShoppingCart,
  ListVoucherConfigurations,
  ListVoucherConfigurationsResponse,
} from './eva-services-intersolve';


export class SvcAddVoucherToShoppingCart implements IEvaServiceDefinition
{
  name = 'AddVoucherToShoppingCart';
  path = '/message/AddVoucherToShoppingCart';
  request?: AddVoucherToShoppingCart;
  response?: SimpleShoppingCartResponse;
}

export class SvcListVoucherConfigurations implements IEvaServiceDefinition
{
  name = 'ListVoucherConfigurations';
  path = '/message/ListVoucherConfigurations';
  request?: ListVoucherConfigurations;
  response?: ListVoucherConfigurationsResponse;
}
