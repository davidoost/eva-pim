import {
  SimpleShoppingCartResponse,
  RequestMessage,
  ResponseMessage,
} from '../eva-services-core';


export enum Errors
{
  /**
  * A CardNumber is required to activate a giftcard
  */
  Intersolve_MissingCardNumber = 'Intersolve:MissingCardNumber',
  /**
  * A PaymentTransaction can only be refunded for the full amount
  */
  Intersolve_RefundsCanOnlyBeDoneForTheFullAmount = 'Intersolve:RefundsCanOnlyBeDoneForTheFullAmount',
  /**
  * No CardActionLedger could be found for the PaymentTransaction
  */
  Intersolve_NoCardActionLedgerFound = 'Intersolve:NoCardActionLedgerFound',
  /**
  * Card with SerialNumber {0:string} was not found
  */
  Intersolve_CardNotFound = 'Intersolve:CardNotFound',
  /**
  * Trying to pay with '{currencyID:string}' but the card is in '{cardCurrencyID:string}'
  */
  Intersolve_CurrencyMismatch = 'Intersolve:CurrencyMismatch',
  /**
  * Failed to create a payment: {0:string}
  */
  Intersolve_CardActivationFailed = 'Intersolve:CardActivationFailed',
  /**
  * Failed to cancel the transaction: {0:string}
  */
  Intersolve_CardTransactionCancellationFailed = 'Intersolve:CardTransactionCancellationFailed',
  /**
  * Code {Code:int32}: {Message:string}
  */
  Intersolve_UnknownResultCode = 'Intersolve:UnknownResultCode',
  /**
  * Error in the configuration at the Intersolve side. Please contact Intersolve.
  */
  Intersolve_ConfigurationError = 'Intersolve:ConfigurationError',
  /**
  * Service failed. This can be a typo in the command.
  */
  Intersolve_ServiceFailed = 'Intersolve:ServiceFailed',
  /**
  * Invalid operation.
  */
  Intersolve_Error_1 = 'Intersolve:Error_1',
  /**
  * XML Syntax error
  */
  Intersolve_Error_2 = 'Intersolve:Error_2',
  /**
  * Authorization failed, not logged in.
  */
  Intersolve_Error_3 = 'Intersolve:Error_3',
  /**
  * Login failed (Reason not specified).
  */
  Intersolve_Error_4 = 'Intersolve:Error_4',
  /**
  * Invalid parameters (e.g. no CardId specified).
  */
  Intersolve_Error_5 = 'Intersolve:Error_5',
  /**
  * Not allowed to import this card holder.
  */
  Intersolve_Error_6 = 'Intersolve:Error_6',
  /**
  * Retailer not in Group.
  */
  Intersolve_Error_7 = 'Intersolve:Error_7',
  /**
  * Invalid Identifier.
  */
  Intersolve_Error_8 = 'Intersolve:Error_8',
  /**
  * Invalid/unknown Retailer.
  */
  Intersolve_Error_9 = 'Intersolve:Error_9',
  /**
  * Invalid/unknown Terminal.
  */
  Intersolve_Error_10 = 'Intersolve:Error_10',
  /**
  * Invalid Terminal/password does not match. Not authorized.
  */
  Intersolve_Error_11 = 'Intersolve:Error_11',
  /**
  * Invalid Terminal originating address.
  */
  Intersolve_Error_12 = 'Intersolve:Error_12',
  /**
  * No configuration available.
  */
  Intersolve_Error_13 = 'Intersolve:Error_13',
  /**
  * Origination address not authorized.
  */
  Intersolve_Error_14 = 'Intersolve:Error_14',
  /**
  * No transaction available to confirm or cancel.
  */
  Intersolve_Error_15 = 'Intersolve:Error_15',
  /**
  * RetailerId/TerminalId combination does not exist.
  */
  Intersolve_Error_16 = 'Intersolve:Error_16',
  /**
  * Unable to cancel. Pos cannot cancel transaction.
  */
  Intersolve_Error_18 = 'Intersolve:Error_18',
  /**
  * Transaction can not be cancelled at this moment, please try again later.
  */
  Intersolve_Error_19 = 'Intersolve:Error_19',
  /**
  * Add card failed.
  */
  Intersolve_Error_20 = 'Intersolve:Error_20',
  /**
  * Card already exists.
  */
  Intersolve_Error_21 = 'Intersolve:Error_21',
  /**
  * Unknown brand type.
  */
  Intersolve_Error_22 = 'Intersolve:Error_22',
  /**
  * Login failed: Device blocked due to license agreement violation.
  */
  Intersolve_Error_23 = 'Intersolve:Error_23',
  /**
  * Login failed: Device usage exceeds license agreement.
  */
  Intersolve_Error_24 = 'Intersolve:Error_24',
  /**
  * Post issue failed.
  */
  Intersolve_Error_100 = 'Intersolve:Error_100',
  /**
  * Card or Customer does not exist.
  */
  Intersolve_Error_101 = 'Intersolve:Error_101',
  /**
  * Card is expired.
  */
  Intersolve_Error_102 = 'Intersolve:Error_102',
  /**
  * Card is blocked.
  */
  Intersolve_Error_103 = 'Intersolve:Error_103',
  /**
  * Insufficient balance to perform transaction.
  */
  Intersolve_Error_104 = 'Intersolve:Error_104',
  /**
  * Usr/pwd does not match with cardholder.
  */
  Intersolve_Error_105 = 'Intersolve:Error_105',
  /**
  * Cardholder not registered.
  */
  Intersolve_Error_106 = 'Intersolve:Error_106',
  /**
  * Invalid sequence number.
  */
  Intersolve_Error_107 = 'Intersolve:Error_107',
  /**
  * Card not related to a Group.
  */
  Intersolve_Error_108 = 'Intersolve:Error_108',
  /**
  * Invalid CardId. Invalid EAN.
  */
  Intersolve_Error_109 = 'Intersolve:Error_109',
  /**
  * Invalid Email address.
  */
  Intersolve_Error_110 = 'Intersolve:Error_110',
  /**
  * Invalid Country.
  */
  Intersolve_Error_111 = 'Intersolve:Error_111',
  /**
  * Invalid ObjectId/ObjectType.
  */
  Intersolve_Error_112 = 'Intersolve:Error_112',
  /**
  * Invalid CardCode in CustomerId.
  */
  Intersolve_Error_113 = 'Intersolve:Error_113',
  /**
  * Card is already active.
  */
  Intersolve_Error_114 = 'Intersolve:Error_114',
  /**
  * Invalid GroupId.
  */
  Intersolve_Error_115 = 'Intersolve:Error_115',
  /**
  * Invalid Card Format.
  */
  Intersolve_Error_116 = 'Intersolve:Error_116',
  /**
  * Invalid Scheme.
  */
  Intersolve_Error_117 = 'Intersolve:Error_117',
  /**
  * Card is transferred.
  */
  Intersolve_Error_118 = 'Intersolve:Error_118',
  /**
  * Card is not active / Inactive Brand Type.
  */
  Intersolve_Error_119 = 'Intersolve:Error_119',
  /**
  * Incorrect activation or purchase value / Pre dominated rule violated / Minimum balance rule violated.
  */
  Intersolve_Error_120 = 'Intersolve:Error_120',
  /**
  * Customer already exists.
  */
  Intersolve_Error_121 = 'Intersolve:Error_121',
  /**
  * Card already exists.
  */
  Intersolve_Error_122 = 'Intersolve:Error_122',
  /**
  * Customer does not exist.
  */
  Intersolve_Error_123 = 'Intersolve:Error_123',
  /**
  * Maximum number of transactions per day reached.
  */
  Intersolve_Error_124 = 'Intersolve:Error_124',
  /**
  * Maximum number of transactions per day per retailer reached.
  */
  Intersolve_Error_125 = 'Intersolve:Error_125',
  /**
  * Maximum issue points per day is reached.
  */
  Intersolve_Error_126 = 'Intersolve:Error_126',
  /**
  * Card not available. / Out of cards stock.
  */
  Intersolve_Error_127 = 'Intersolve:Error_127',
  /**
  * Not allowed to redeem on date of first transaction (business rule 107 indicates that you are only allowed to perform a redeem one day after the first issue transaction).
  */
  Intersolve_Error_128 = 'Intersolve:Error_128',
  /**
  * Number of points for issue or redeem transaction is too high (MaxPointsPerIssue or MaxPointsPerRedeem).
  */
  Intersolve_Error_129 = 'Intersolve:Error_129',
  /**
  * The service is not available on the card.
  */
  Intersolve_Error_130 = 'Intersolve:Error_130',
  /**
  * The service cannot be verified.
  */
  Intersolve_Error_131 = 'Intersolve:Error_131',
  /**
  * Receipt not found.
  */
  Intersolve_Error_132 = 'Intersolve:Error_132',
  /**
  * Receipt already claimed.
  */
  Intersolve_Error_133 = 'Intersolve:Error_133',
  /**
  * Invalid block date.
  */
  Intersolve_Error_134 = 'Intersolve:Error_134',
  /**
  * SchemeId already exists.
  */
  Intersolve_Error_135 = 'Intersolve:Error_135',
  /**
  * Balance not available.
  */
  Intersolve_Error_136 = 'Intersolve:Error_136',
  /**
  * Invalid Brand.
  */
  Intersolve_Error_140 = 'Intersolve:Error_140',
  /**
  * Invalid BrandType.
  */
  Intersolve_Error_141 = 'Intersolve:Error_141',
  /**
  * Maximum card balance is reached.
  */
  Intersolve_Error_161 = 'Intersolve:Error_161',
  /**
  * Card is not reloadable. / Too many reload transactions. / Wrong balance on Reload.
  */
  Intersolve_Error_162 = 'Intersolve:Error_162',
  /**
  * Card is already assigned to a customer.
  */
  Intersolve_Error_163 = 'Intersolve:Error_163',
  /**
  * Wrong currency.
  */
  Intersolve_Error_164 = 'Intersolve:Error_164',
  /**
  * Transaction would exceed configured limits.
  */
  Intersolve_Error_165 = 'Intersolve:Error_165',
  /**
  * Login failed: Unknown user.
  */
  Intersolve_Error_201 = 'Intersolve:Error_201',
  /**
  * Maximum simultaneous logins reached.
  */
  Intersolve_Error_202 = 'Intersolve:Error_202',
  /**
  * User is already logged in.
  */
  Intersolve_Error_203 = 'Intersolve:Error_203',
  /**
  * Login account is set inactive.
  */
  Intersolve_Error_204 = 'Intersolve:Error_204',
  /**
  * Database is locked.
  */
  Intersolve_Error_205 = 'Intersolve:Error_205',
  /**
  * Database is expired and now set to locked.
  */
  Intersolve_Error_206 = 'Intersolve:Error_206',
  /**
  * Login failed: Invalid password.
  */
  Intersolve_Error_207 = 'Intersolve:Error_207',
  /**
  * Invalid Username.
  */
  Intersolve_Error_208 = 'Intersolve:Error_208',
  /**
  * Invalid SecretAnswer.
  */
  Intersolve_Error_209 = 'Intersolve:Error_209',
  /**
  * Invalid SecretQuestion.
  */
  Intersolve_Error_210 = 'Intersolve:Error_210',
  /**
  * Invalid PIN.
  */
  Intersolve_Error_211 = 'Intersolve:Error_211',
  /**
  * Invalid EAN code.
  */
  Intersolve_Error_212 = 'Intersolve:Error_212',
  /**
  * Invalid E-mail address.
  */
  Intersolve_Error_250 = 'Intersolve:Error_250',
  /**
  * E-mail or customer information is missing.
  */
  Intersolve_Error_251 = 'Intersolve:Error_251',
  /**
  * E-mail address already in use.
  */
  Intersolve_Error_252 = 'Intersolve:Error_252',
  /**
  * Invalid ConfigurationId.
  */
  Intersolve_Error_300 = 'Intersolve:Error_300',
  /**
  * Invalid VoucherId.
  */
  Intersolve_Error_301 = 'Intersolve:Error_301',
  /**
  * Invalid IssuedVoucherId. The specified issued voucher does not exist or does not have the correct status.
  */
  Intersolve_Error_302 = 'Intersolve:Error_302',
  /**
  * Voucher not found.
  */
  Intersolve_Error_303 = 'Intersolve:Error_303',
  /**
  * Voucher not available.
  */
  Intersolve_Error_304 = 'Intersolve:Error_304',
  /**
  * Invalid Voucher/Owner combination.
  */
  Intersolve_Error_305 = 'Intersolve:Error_305',
  /**
  * Invalid MediaId/MediaType.
  */
  Intersolve_Error_306 = 'Intersolve:Error_306',
  /**
  * Voucher has been redeemed already.
  */
  Intersolve_Error_307 = 'Intersolve:Error_307',
  /**
  * Refund not supported for this voucher.
  */
  Intersolve_Error_308 = 'Intersolve:Error_308',
  /**
  * Voucher redeem currently denied for this voucher.
  */
  Intersolve_Error_309 = 'Intersolve:Error_309',
  /**
  * Invalid redeem currently denied for this voucher.
  */
  Intersolve_Error_310 = 'Intersolve:Error_310',
  /**
  * Maximum number of voucher issues exceeded for this voucher.
  */
  Intersolve_Error_311 = 'Intersolve:Error_311',
  /**
  * Invalid Brand Type ID. / Voucher has been purchased already.
  */
  Intersolve_Error_312 = 'Intersolve:Error_312',
  /**
  * Voucher Reservation Expired.
  */
  Intersolve_Error_313 = 'Intersolve:Error_313',
  /**
  * Invalid Delivery Method.
  */
  Intersolve_Error_314 = 'Intersolve:Error_314',
  /**
  * CardId/InitialAccessCode mismatch.
  */
  Intersolve_Error_401 = 'Intersolve:Error_401',
  /**
  * Scheme not found.
  */
  Intersolve_Error_402 = 'Intersolve:Error_402',
  /**
  * Invalid RegisterCode.
  */
  Intersolve_Error_403 = 'Intersolve:Error_403',
  /**
  * Card does not belong to the customer.
  */
  Intersolve_Error_404 = 'Intersolve:Error_404',
  /**
  * The source and destination card must be specified.
  */
  Intersolve_Error_405 = 'Intersolve:Error_405',
  /**
  * May not transfer to the same card.
  */
  Intersolve_Error_406 = 'Intersolve:Error_406',
  /**
  * Transfer customer failed.
  */
  Intersolve_Error_407 = 'Intersolve:Error_407',
  /**
  * Customer not found.
  */
  Intersolve_Error_408 = 'Intersolve:Error_408',
  /**
  * Invalid CustomerId format.
  */
  Intersolve_Error_409 = 'Intersolve:Error_409',
  /**
  * No active draw.
  */
  Intersolve_Error_500 = 'Intersolve:Error_500',
  /**
  * Draw is closed. New sales starts tomorrow.
  */
  Intersolve_Error_501 = 'Intersolve:Error_501',
  /**
  * No lottery tickets available.
  */
  Intersolve_Error_502 = 'Intersolve:Error_502',
  /**
  * No active draw for this product.
  */
  Intersolve_Error_503 = 'Intersolve:Error_503',
  /**
  * Sold out. Select a different day.
  */
  Intersolve_Error_504 = 'Intersolve:Error_504',
  /**
  * Customer does not exist.
  */
  Intersolve_Error_550 = 'Intersolve:Error_550',
  /**
  * Validation field 1 not valid.
  */
  Intersolve_Error_551 = 'Intersolve:Error_551',
  /**
  * Validation field 2 not valid.
  */
  Intersolve_Error_552 = 'Intersolve:Error_552',
  /**
  * Validation field 3 not valid.
  */
  Intersolve_Error_553 = 'Intersolve:Error_553',
  /**
  * Delivery type is not supported.
  */
  Intersolve_Error_554 = 'Intersolve:Error_554',
  /**
  * Card already has a PIN.
  */
  Intersolve_Error_555 = 'Intersolve:Error_555',
  /**
  * Card does have a PIN.
  */
  Intersolve_Error_556 = 'Intersolve:Error_556',
  /**
  * Invalid PIN.
  */
  Intersolve_Error_557 = 'Intersolve:Error_557',
  /**
  * Could not encrypt PIN.
  */
  Intersolve_Error_558 = 'Intersolve:Error_558',
  /**
  * Payment Ok.
  */
  Intersolve_Error_700 = 'Intersolve:Error_700',
  /**
  * Payment failed.
  */
  Intersolve_Error_701 = 'Intersolve:Error_701',
  /**
  * Payment declined.
  */
  Intersolve_Error_702 = 'Intersolve:Error_702',
  /**
  * Payment pending.
  */
  Intersolve_Error_703 = 'Intersolve:Error_703',
  /**
  * Payment revoked.
  */
  Intersolve_Error_704 = 'Intersolve:Error_704',
  /**
  * Transaction not found.
  */
  Intersolve_Error_705 = 'Intersolve:Error_705',
  /**
  * Payment needs to be cancelled.
  */
  Intersolve_Error_706 = 'Intersolve:Error_706',
  /**
  * Special fixed value activation already done.
  */
  Intersolve_Error_914 = 'Intersolve:Error_914',
  /**
  * Special fixed value activation.
  */
  Intersolve_Error_919 = 'Intersolve:Error_919',
  /**
  * No bueno.
  */
  Intersolve_NoBueno = 'Intersolve:NoBueno',
}
export interface IntersolvePaymentMethodRequestProperties {
  CardNumber?: string;
  Pin?: string;
}

export interface IntersolvePaymentMethodResultProperties {
  Success: boolean;
}

export interface MessagesVoucherOption {
  EAN?: string;
  Layout?: string;
  LayoutID?: string;
  Name?: string;
  UnitCost: number;
  Value: number;
  VoucherID: number;
}

export interface MessagesVoucherProvider {
  Name?: string;
  Options?: MessagesVoucherOption[];
}

export interface AddVoucherToShoppingCart extends RequestMessage<SimpleShoppingCartResponse> {
  /**
  * Entity type: Order
  */
  OrderID: number;
  VoucherID?: number;
}

export interface ListVoucherConfigurations extends RequestMessage<ListVoucherConfigurationsResponse> {
}

export interface ListVoucherConfigurationsResponse extends ResponseMessage {
  VoucherProviders?: MessagesVoucherProvider[];
}

