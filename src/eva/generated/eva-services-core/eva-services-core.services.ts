import {
  IEvaServiceDefinition,
  AcceptUserAgreement,
  EmptyResponseMessage,
  ActivateUserProductSubscription,
  AddBenefitDiscountToOrder,
  AddDiscountToOrderResponse,
  AddBoardingPassToOrder,
  AddBundleProductToOrder,
  AddBundleProductToOrderResponse,
  AddDigitalGiftCardToOrder,
  AddDiscountCouponToOrder,
  AddDiscountToOrder,
  SimpleShoppingCartResponse,
  AddLabelToFullStockCount,
  AddLabelToFullStockCountResponse,
  AddLoyaltyDiscountToOrder,
  AddManualDiscountToOrder,
  AddProductsToAnonymousWishlist,
  AddProductsToUserWishlist,
  AddProductToFullStockCountLabel,
  AddProductToFullStockCountLabelResponse,
  AddProductToOrder,
  AddProductToOrderResponse,
  AddPurchaseOrderLines,
  AddPurchaseOrderLinesResponse,
  AddServiceProductToOrder,
  AddServiceProductToOrderResponse,
  AddSubscriptionProductToOrder,
  AddSubscriptionProductToOrderResponse,
  AddTrackingCodeToReturnToSupplierShipment,
  AddUserBorrowedProductToOrder,
  AddUserBorrowedProductToOrderResponse,
  AddUserToGroup,
  AdjustStock,
  ApplyBundleProductSelection,
  ApplySalesTaxEstimateForOrder,
  SalesTaxEstimateForOrderResponse,
  ApplyScriptEdits,
  UpdateScriptResponse,
  ApproveCapture,
  ApprovePayment,
  ApprovePaymentResponse,
  ArchiveOrganizationUnit,
  AttachAddressToOrder,
  AttachAddressToOrderResponse,
  AttachAnonymousWishlistToUser,
  AttachAppointmentToOrder,
  AttachBlobToInvoice,
  AttachBlobToOrder,
  AttachConsumerCompanyToOrder,
  AttachConsumerCompanyToOrderResponse,
  AttachCustomerToOrder,
  AttachIdentificationToOrder,
  AttachOpeningHoursTemplateToOrganizationUnitSets,
  AttachUserToConsumerCompany,
  AutocompleteAddress,
  AutocompleteAddressResponse,
  AutocompleteOrder,
  AutocompleteOrderResponse,
  AutoTransferInterbranchOrder,
  Barcode,
  BarcodeResponse,
  BookInvoice,
  BulkMoveStock,
  BulkUpdateOrganizationUnitSettings,
  CancelAMLChecksOnOrder,
  CancelAppointment,
  CancelAppointments,
  CancelDiscountOrderLine,
  CancelFullStockCount,
  CancelFullStockCountLabel,
  CancelOrder,
  CancelOrderResponse,
  CancelOrderLineFulfillments,
  CancelPayment,
  CancelProductSubscriptionForUser,
  CancelProductSubscriptionUpgradeForUser,
  CancelSecondChanceProductRegistration,
  CancelShipments,
  CancelShipmentsResponse,
  CanProcessInitialCycleCount,
  CanProcessInitialCycleCountResponse,
  CapturePayment,
  CapturePaymentResponse,
  CaptureShipment,
  CaptureShipmentResponse,
  CardBalanceCheck,
  CardBalanceCheckResponse,
  ChangeOrderLinesToCarryOut,
  ChangeOrderLinesToDelivery,
  ChangeOrderLinesToPickup,
  ChangeUserPassword,
  CheckEmailAddressAvailability,
  CheckUsernameAvailabilityResponse,
  CheckMagicLink,
  CheckMagicLinkResponse,
  CheckNicknameAvailability,
  CheckOrderAddressFraud,
  CheckOrderAddressFraudResponse,
  CheckOrderBackendIDExists,
  BackendIDExistsResponse,
  CheckShipmentBackendIDExists,
  CloseFinancialPeriod,
  CommitOrderLines,
  CommitOrderLinesResponse,
  CompleteAppointment,
  CompleteAppointments,
  CompleteCloseCashJournal,
  CompleteConsolidatedPickTask,
  CompleteConsolidatedZonePickTask,
  CompleteCustomerInteractionTask,
  CompleteCustomUserTask,
  CompleteFullStockCount,
  CompleteFullStockCountLabel,
  CompleteMultipleShipFromStoreTasks,
  CompleteOpenCashJournal,
  CompleteOperationalTask,
  CompleteOrderInterventionTask,
  CompletePrintPriceLabelTask,
  CompletePrintTask,
  CompleteReceiveShipment,
  CompleteReservationCleanup,
  CompleteReservationDeviationTask,
  CompleteReservationDeviationTaskResponse,
  CompleteReservationPickupTask,
  CompleteReturnToSupplierTask,
  CompleteSecondChanceProductRegistration,
  CompleteSecondChanceProductRegistrationResponse,
  CompleteShipFromStoreTask,
  CompleteShipFromStoreTaskResponse,
  CompleteStockMovementFollowUp,
  CompleteStockReplenishment,
  CompleteStockReservationTask,
  CompleteZonedCycleCountPreCount,
  CompleteZonedCycleCounts,
  ConfirmMagicLink,
  ConfirmMagicLinkResponse,
  ConfirmPurchaseOrder,
  ConfirmSubscription,
  ConfirmSubscriptionResponse,
  ConfirmUserEmailAddressValidation,
  CopyEntityTranslations,
  CountProductForInitialCycleCount,
  CountStockLabelForZonedCycleCount,
  CountStockLabelForZonedCycleCountResponse,
  CreateAddressBookItem,
  CreateAddressBookItemResponse,
  CreateAnonymousToken,
  CreateAnonymousTokenResponse,
  CreateAnonymousWishlist,
  CreateAnonymousWishlistResponse,
  CreateApiKey,
  CreateApiKeyResponse,
  CreateApiUser,
  CreateApiUserResponse,
  CreateAppointment,
  CreateAppointmentResponse,
  CreateAppRule,
  CreateAppRuleResponse,
  CreateAuditChainConfiguration,
  CreateAuditChainConfigurationResponse,
  CreateCashCorrectionReason,
  CreateCashCorrectionReasonResponse,
  CreateCashDeposit,
  CreateCashDepositResponse,
  CreateCashExpense,
  CreateCompanyForUser,
  CreateConsolidatedPickTask_Async,
  CreateConsolidatedPickTask_AsyncResponse,
  CreateConsolidatedPickTask_AsyncResult,
  CreateConsolidatedPickTaskResponse,
  CreateConsumerCompany,
  CreateConsumerCompanyResponse,
  CreateCustomer,
  CreateCustomerResponse,
  CreateCustomerInteractionTask,
  CreateCustomerInteractionTaskResponse,
  CreateCustomerInteractionTaskType,
  CreateCustomerInteractionTaskTypeResponse,
  CreateCustomerReturn,
  CreateCustomerReturnWithoutOrder,
  CreateCustomOrderStatus,
  CreateCustomOrderStatusResponse,
  CreateCustomUserTask,
  CreateCustomUserTaskResponse,
  CreateCustomUserTaskTemplate,
  CreateCustomUserTaskTemplateResponse,
  CreateCustomUserTaskType,
  CreateCustomUserTaskTypeResponse,
  CreateCycleCountZone,
  CreateCycleCountZoneResponse,
  CreateCycleCountZoneGroup,
  CreateCycleCountZoneGroupResponse,
  CreateDiagnosticsBlob,
  CreateDiagnosticsBlobResponse,
  CreateEntityBlobTranslation,
  CreateEventExportConfiguration,
  CreateEventExportConfigurationResponse,
  CreateFlight,
  CreateFlightResponse,
  CreateFullStockCount,
  CreateFullStockCountResponse,
  CreateInitialCycleCount,
  CreateInitialCycleCountResponse,
  CreateInStoreReturn,
  CreateInStoreReturnResponse,
  CreateInterbranchOrder,
  CreateInvoice,
  CreateInvoiceResponse,
  CreateInvoiceAdditionalAmount,
  CreateInvoiceAdditionalAmountResponse,
  CreateInvoiceAdditionalAmountType,
  CreateInvoiceAdditionalAmountTypeResponse,
  CreateInvoiceDispute,
  CreateInvoiceDisputeResponse,
  CreateInvoiceDisputeReason,
  CreateInvoiceDisputeReasonResponse,
  CreateInvoiceDisputeResolveAction,
  CreateInvoiceDisputeResolveActionResponse,
  CreateInvoicedOrderLineCorrection,
  CreateInvoiceLines,
  CreateInvoicePayment,
  CreateInvoicesForOrder,
  CreateInvoicesForOrderResponse,
  CreateManualInvoice,
  CreateManualInvoiceResponse,
  CreateManualTaxExemptionReason,
  CreateManualTaxExemptionReasonResponse,
  CreateOfferFromOrder,
  CreateOpeningHoursTemplate,
  CreateOpeningHoursTemplateResponse,
  CreateOperationalTaskConfig,
  CreateOperationalTaskConfigResponse,
  CreateOrder,
  CreateOrderResponse,
  CreateOrderAppToken,
  CreateOrderAppTokenResponse,
  CreateOrderCustomStatus,
  CreateOrderCustomStatusResponse,
  CreateOrderCustomType,
  CreateOrderCustomTypeResponse,
  CreateOrderFromAppointment,
  CreateOrderFromAppointmentResponse,
  CreateOrderFromOffer,
  CreateOrderFromOfferResponse,
  CreateOrderLedger,
  CreateOrderLineUnitPriceCorrection,
  CreateOrderLink,
  CreateOrderLinkResponse,
  CreateOrderLinkType,
  CreateOrderLinkTypeResponse,
  CreateOrderVerificationReason,
  CreateOrderVerificationReasonResponse,
  CreateOrganizationUnit,
  CreateOrganizationUnitResponse,
  CreateOrganizationUnitSupplier,
  CreateOrganizationUnitSupplierResponse,
  CreateOrUpdateInvoiceCompanyMapping,
  CreateOrUpdateInvoiceCompanyMappingResponse,
  CreatePasskey,
  CreatePayment,
  CreatePaymentResponse,
  CreatePaymentTransactionLedger,
  CreatePrintPriceLabelTask,
  CreatePrintPriceLabelTaskResponse,
  CreatePrintTask,
  CreatePrintTaskResponse,
  CreateProductBundle,
  CreateProductBundleResponse,
  CreateProductRecommendation,
  CreateProductRecommendationResponse,
  CreateProductStructure,
  CreateProductStructureResponse,
  CreateProductZone,
  CreateProductZoneResponse,
  CreateProductZoneGroup,
  CreateProductZoneGroupResponse,
  CreatePurchaseOrder,
  CreatePurchaseOrderResponse,
  CreatePurchaseOrderLineUnitPriceCorrection,
  CreatePurchaseOrderLineUnitPriceCorrectionResponse,
  CreateQuickBuy,
  CreateQuickBuyResponse,
  CreateRecurringTask,
  CreateRefund,
  CreateRefundResponse,
  CreateRepair,
  CreateRepairResponse,
  CreateRepairInteraction,
  CreateRepairInteractionResponse,
  CreateReturnToSupplierOrder,
  CreateReturnToSupplierRequest,
  CreateReturnToSupplierRequestResponse,
  CreateScript,
  CreateScriptResponse,
  CreateSerialNumber,
  CreateSerialNumberResponse,
  CreateSerialNumberConfiguration,
  CreateSerialNumberConfigurationResponse,
  CreateSerialNumberProduct,
  CreateSerialNumberRegistrationReason,
  CreateSerialNumberRegistrationReasonResponse,
  CreateShipment,
  CreateShipmentResponse,
  CreateShipmentIdentifier,
  CreateShipmentIdentifierResponse,
  CreateShipmentReceipt,
  CreateShipmentReceiptResponse,
  CreateStockMutations,
  CreateStockNotification,
  StockNotificationResponse,
  CreateStockNotificationForCurrentUser,
  CreateStockReplenishmentTask,
  CreateStockReplenishmentTasks,
  CreateTaxCode,
  CreateTaxCodeResponse,
  CreateTaxCodeMapping,
  CreateTaxCodeMappingResponse,
  CreateTaxProvider,
  CreateTaxProviderResponse,
  CreateTaxRate,
  CreateTaxRateResponse,
  CreateUserAssociation,
  CreateUserAssociationResponse,
  CreateUserAssociationType,
  CreateUserAssociationTypeResponse,
  CreateUserGroup,
  CreateUserGroupResponse,
  CreateUserInteraction,
  CreateUserInteractionResponse,
  CreateUserPhoneNumber,
  CreateUserPhoneNumberResponse,
  CreateUserTaskNotCompletedReason,
  CreateUserTaskNotCompletedReasonResponse,
  CreateUserTaskPriority,
  CreateUserTaskPriorityResponse,
  CreateUserTaskTypeOrganizationUnitSet,
  UserTaskTypeOrganizationUnitSetResponse,
  CreateUserWishlist,
  CreateUserWishlistResponse,
  CreateZonedCycleCount,
  CreateZonedCycleCountResponse,
  CreateZonedCycleCounts,
  CreateZonedCycleCountsResponse,
  CreateZonedCycleCounts_Async,
  CreateZonedCycleCounts_AsyncResponse,
  CreateZonedCycleCounts_AsyncResult,
  CreateZonedCycleCountsByQuery,
  CreateZonedCycleCountsByQueryResponse,
  CreateZonedCycleCountsByQuery_Async,
  CreateZonedCycleCountsByQuery_AsyncResponse,
  CreateZonedCycleCountsByQuery_AsyncResult,
  CreateZonedCycleCountSchedule,
  CreateZonedCycleCountScheduleResponse,
  CustomerAddBlobToCase,
  CustomerAddBlobToCaseInteraction,
  CustomerCreateCase,
  CustomerCreateCaseResponse,
  CustomerCreateCaseInteraction,
  CustomerCreateCaseInteractionResponse,
  CustomerDeleteCaseInteraction,
  CustomerGetCaseByID,
  CustomerGetCaseByIDResponse,
  CustomerGetCaseInteraction,
  CustomerGetCaseInteractionResponse,
  CustomerListCaseInteractions,
  CustomerListCaseInteractionsResponse,
  CustomerListCases,
  CustomerListCasesResponse,
  CustomerRemoveCaseBlob,
  CustomerRemoveCaseInteractionBlob,
  CustomerUpdateCase,
  CustomerUpdateCaseInteraction,
  DeactivateAllUserTasks,
  DeactivateUserTask,
  DeactivateZonedCycleCount,
  DeleteAddressBookItem,
  DeleteAnonymousToken,
  DeleteAnonymousWishlist,
  DeleteApiKey,
  DeleteAppointment,
  DeleteAppRule,
  DeleteAuditChainConfiguration,
  DeleteCashCorrectionReason,
  DeleteCashDeposit,
  DeleteCashExpense,
  DeleteConsumerCompany,
  DeleteCustomerInteractionTask,
  DeleteCustomerInteractionTaskType,
  DeleteCustomOrderStatus,
  DeleteCustomUserTaskTemplate,
  DeleteCycleCountZone,
  DeleteCycleCountZoneGroup,
  DeleteEntityBlobTranslation,
  DeleteEntityTranslation,
  DeleteEventExportConfiguration,
  DeleteFlight,
  DeleteInitialCycleCountResult,
  DeleteInvoice,
  DeleteInvoiceAdditionalAmount,
  DeleteInvoiceAdditionalAmountType,
  DeleteInvoiceBlob,
  DeleteInvoiceCompanyMapping,
  DeleteInvoiceDispute,
  DeleteInvoiceDisputeReason,
  DeleteInvoiceDisputeResolveAction,
  DeleteManualTaxExemptionReason,
  DeleteManualTaxExemptionReasonLine,
  DeleteOpeningHoursTemplate,
  DeleteOperationalTaskConfig,
  DeleteOrderCustomStatus,
  DeleteOrderCustomType,
  DeleteOrderLink,
  DeleteOrderLinkType,
  DeleteOrderVerificationReason,
  DeleteOrganizationUnit,
  DeleteOrganizationUnitSupplier,
  DeletePasskey,
  DeletePasskeyForUser,
  DeleteProductBundle,
  DeleteProductRecommendation,
  DeleteProductStructure,
  DeleteProductZone,
  DeleteProductZoneGroup,
  DeleteQuickBuy,
  DeleteRecurringTask,
  DeleteReturnToSupplierRequest,
  DeleteScript,
  DeleteScriptResponse,
  DeleteSerialNumberConfiguration,
  DeleteSerialNumberProduct,
  DeleteShipment,
  DeleteShipmentIdentifier,
  DeleteStockNotification,
  DeleteStringTranslation,
  DeleteTaxCode,
  DeleteTaxCodeMapping,
  DeleteTaxProvider,
  DeleteTaxRate,
  DeleteUser,
  DeleteUserAssociation,
  DeleteUserAssociationType,
  DeleteUserGroup,
  DeleteUserInteraction,
  DeleteUserPhoneNumber,
  DeleteUsers_Async,
  DeleteUsers_AsyncResponse,
  DeleteUsers_AsyncResult,
  DeleteUsersResponse,
  DeleteUserTaskNotCompletedReason,
  DeleteUserTaskPriority,
  DeleteUserTaskTypeOrganizationUnitSet,
  DeleteUserWishlist,
  DeleteZonedCycleCountSchedule,
  DeliverShipment,
  DetachCompanyFromUser,
  DetachConsumerCompanyFromOrder,
  DetachCustomerFromOrder,
  DetachFromCustomerInteractionTask,
  DetachFromRepairUserTask,
  DetachIdentificationFromOrder,
  DetachOpeningHoursTemplateToOrganizationUnitSets,
  DetachOrder,
  DetachOrderResponse,
  DetachUserFromConsumerCompany,
  DisableAllTwoFactorAuthentication,
  DisableAllTwoFactorAuthenticationResponse,
  DisableDiscountOnOrder,
  DisableDiscountTriggersOnOrder,
  DisableTwoFactorAuthentication,
  DisableTwoFactorAuthenticationResponse,
  DismissOrder,
  DownloadAppointment,
  ResourceWithBlobIDResponseMessage,
  DownloadCycleCountSample,
  DownloadDigitalGiftCard,
  ResourceResponseMessage,
  DownloadExternalFullStockCountResultTemplate,
  DownloadFinancialPeriodAudits,
  DownloadFinancialPeriodDeposit,
  DownloadFlightsFileTemplate,
  DownloadFullStockCountLabelUploadTemplate,
  DownloadFullStockCountSummaryExcel,
  DownloadFullStockCountSummaryExcel_Async,
  DownloadFullStockCountSummaryExcel_AsyncResponse,
  DownloadFullStockCountSummaryExcel_AsyncResult,
  DownloadFullStockCountSummaryPDF,
  DownloadIntegrationData,
  DownloadIntegrationDataResponse,
  DownloadInvoice,
  DownloadOffer,
  DownloadOrderConfirmation,
  DownloadOrderConfirmationResponse,
  DownloadSpecialOpeningHoursExcelTemplate,
  DownloadStockExcelFileTemplate,
  DownloadUserInteractionCommunicationAttachment,
  DropOffCashDeposit,
  DuplicateOrder,
  DuplicateOrderResponse,
  EditProductStructure,
  EditProductStructureResponse,
  EmailInvoice,
  EmailInvoices,
  EmailOffer,
  EmailOrderConfirmation,
  EmailOrderSummary,
  EmailOrderTaxFreeForm,
  EmailThermalInvoice,
  EmailThermalInvoices,
  EmptyGiftCard,
  EmptyGiftCardResponse,
  EnableDisabledDiscountOnOrder,
  EnableDiscountTriggersOnOrder,
  EnableTwoFactorAuthentication,
  EnableTwoFactorAuthenticationResponse,
  EnqueueTask,
  ExecuteBarcode,
  ExecuteBarcodeResponse,
  ExemptOrderFromTax,
  ExplainProductPrices,
  ExplainProductPricesResponse,
  ExplainScript,
  ExplainScriptResponse,
  FetchUserFromExternalProvider,
  FetchUserFromExternalProviderResponse,
  FinalizeAMLChecksOnOrder,
  FinalizeAMLChecksOnOrderResponse,
  FinishRepair,
  FinishRepairUserTask,
  FlushCache,
  ForcePlaceOrder,
  ForcePlaceOrderResponse,
  ForceVerifyCustomer,
  FullyReceiveShipment,
  FullyReceiveShipmentResponse,
  FullyShipPurchaseOrder,
  GenerateDeviceHubBarcode,
  GenerateDeviceHubBarcodeResponse,
  GenerateElevationBarcode,
  GenerateElevationBarcodeResponse,
  GenerateElevationSkipToken,
  GenerateElevationSkipTokenResponse,
  GenerateScanModeBarcode,
  GenerateScanModeBarcodeResponse,
  GenerateSessionBarcode,
  GenerateSessionBarcodeResponse,
  GenerateTemporaryElevationCode,
  GenerateTemporaryElevationCodeResponse,
  GenerateTemporaryPasswordForUser,
  GenerateTemporaryPasswordForUserResponse,
  GenerateUserCoupon,
  GenerateUserCouponResponse,
  GetActiveDiscounts,
  GetActiveDiscountsResponse,
  GetActivePaymentTypes,
  GetActivePaymentTypesResponse,
  GetActiveShoppingCart,
  GetActiveShoppingCartResponse,
  GetAddressForZipCode,
  GetAddressForZipCodeResponse,
  GetAddressRequirements,
  GetAddressRequirementsResponse,
  GetAllSubscriptionsByUserID,
  GetUserSubscriptionsResponse,
  GetAnonymousToken,
  GetAnonymousTokenResponse,
  GetAnonymousWishlist,
  GetAnonymousWishlistResponse,
  GetApiDefinition,
  GetApiDefinitionResponse,
  GetApplicationConfiguration,
  GetApplicationConfigurationResponse,
  GetAppointment,
  GetAppointmentResponse,
  GetAppointmentCancellationReasons,
  GetAppointmentCancellationReasonsResponse,
  GetAppRules,
  GetAppRulesResponse,
  GetAssemblyNamesForDeviceTypes,
  GetAssemblyNamesForDeviceTypesResponse,
  GetAsyncRequestForUser,
  GetAsyncRequestForUserResponse,
  GetAsyncRequestsForUser,
  GetAsyncRequestsForUserResponse,
  GetAuditChainConfigurations,
  GetAuditChainConfigurationsResponse,
  GetAuthorizationStructure,
  GetAuthorizationStructureResponse,
  GetAutocompleteAddressByReference,
  GetAutocompleteAddressByReferenceResponse,
  GetAvailabilityIndication,
  GetAvailabilityIndicationResponse,
  GetAvailableCashAmountForDevice,
  GetAvailableCashAmountForDeviceResponse,
  GetAvailableCashHandlers,
  GetAvailableCashHandlersResponse,
  GetAvailableCurrencies,
  GetAvailableCurrenciesResponse,
  GetAvailableDocumentsForOrder,
  GetAvailableDocumentsForOrderResponse,
  GetAvailableGiftCardConfigurations,
  GetAvailableGiftCardConfigurationsResponse,
  GetAvailableGiftWrappingLinesForOrder,
  GetAvailableGiftWrappingLinesForOrderResponse,
  GetAvailablePaymentMethods,
  GetAvailablePaymentMethodsResponse,
  GetAvailableRefundPaymentMethodsForOrder,
  GetAvailableRefundPaymentMethodsResponse,
  GetAvailableServiceDetails,
  GetAvailableServiceDetailsResponse,
  GetAvailableServices,
  GetAvailableServicesResponse,
  GetAvailableSubscriptions,
  GetAvailableSubscriptionsResponse,
  GetAvailableTwoFactorAuthenticators,
  GetAvailableTwoFactorAuthenticatorsResponse,
  GetAvailableVisibilityGroups,
  GetAvailableVisibilityGroupsResponse,
  GetBoardingPass,
  GetBoardingPassResponse,
  GetBundleProductDetails,
  GetBundleProductDetailResponse,
  GetBundleProductsForProduct,
  GetBundleProductsForProductResponse,
  GetCashCorrection,
  GetCashCorrectionResponse,
  GetCashCorrectionReason,
  GetCashCorrectionReasonResponse,
  GetCashCorrectionReasons,
  GetCashCorrectionReasonsResponse,
  GetCashDeposit,
  GetCashDepositResponse,
  GetCashExpense,
  GetCashExpenseResponse,
  GetCashExpenseTypes,
  GetCashExpenseTypesResponse,
  GetCashJournalDenominations,
  GetCashJournalDenominationsResponse,
  GetCashMovement,
  GetCashMovementResponse,
  GetCheckoutOptions,
  GetCheckoutOptionsResponse,
  GetCompanyForUser,
  GetCompanyForUserResponse,
  GetConfigurableOrderView,
  GetConfigurableOrderViewResponse,
  GetConfigurableProductDetail,
  GetConfigurableProductDetailResponse,
  GetConfigurableProductsDetail,
  GetConfigurableProductsDetailResponse,
  GetConsolidatedPickTask,
  GetConsolidatedPickTaskResponse,
  GetConsumerCompany,
  GetConsumerCompanyResponse,
  GetContractNumber,
  GetContractNumberResponse,
  GetCountrySubdivisions,
  GetCountrySubdivisionsResponse,
  GetCurrency,
  GetCurrencyResponse,
  GetCurrentApplication,
  GetCurrentApplicationResponse,
  GetCurrentCashJournals,
  GetCurrentCashJournalsResponse,
  GetCurrentFinancialPeriodSummary,
  GetCurrentFinancialPeriodSummaryResponse,
  GetCurrentInitialCycleCount,
  GetCurrentInitialCycleCountResponse,
  GetCurrentUser,
  GetCurrentUserResponse,
  GetCurrentUserIdentificationInfo,
  GetCurrentUserIdentificationInfoResponse,
  GetCurrentVersion,
  GetCurrentVersionResponse,
  GetCustomerInteractionTaskByID,
  GetCustomerInteractionTaskByIDResponse,
  GetCustomerInteractionTaskTypeByID,
  GetCustomerInteractionTaskTypeByIDResponse,
  GetCustomerInteractionTaskTypes,
  GetCustomerInteractionTaskTypesResponse,
  GetCustomerOrderVerificationCode,
  GetVerificationCodeResponse,
  GetCustomerReturn,
  GetCustomerReturnResponse,
  GetCustomOrderTypes,
  GetCustomOrderTypesResponse,
  GetCustomUserTaskData,
  GetCustomUserTaskDataResponse,
  GetCycleCountOriginTypes,
  GetCycleCountOriginTypesResponse,
  GetCycleCountSettings,
  GetCycleCountSettingsResponse,
  GetCycleCountZones,
  GetCycleCountZonesResponse,
  GetDeliveryOrderData,
  GetDeliveryOrderDataResponse,
  GetDetailedOrganizationUnitOpeningHours,
  GetDetailedOrganizationUnitOpeningHoursResponse,
  GetDevice,
  GetDeviceResponse,
  GetDeviceTypes,
  GetDeviceTypesResponse,
  GetDigitalGiftCardMailOptions,
  GetDigitalGiftCardOptionsResponse,
  GetDigitalGiftCardOptions,
  GetDigitalGiftCardsForOrder,
  GetDigitalGiftCardsForOrderResponse,
  GetDiscountProductOptionsForOrder,
  GetDiscountProductOptionsForOrderResponse,
  GetDiscountProductOptionsForOrderLine,
  GetDiscountProductOptionsForOrderLineResponse,
  GetElectronicInvoiceData,
  GetElectronicInvoiceDataResponse,
  GetElevationSkipReasons,
  GetElevationSkipReasonsResponse,
  GetEmailAddressDomainSuggestions,
  GetEmailAddressDomainSuggestionsResponse,
  GetEmployeeOrderVerificationCode,
  GetEntityBlobTranslation,
  GetEntityBlobTranslationResponse,
  GetEntityTranslation,
  GetEntityTranslationResponse,
  GetEnumValues,
  GetEnumValuesResponse,
  GetEventAvailability,
  GetEventAvailabilityResponse,
  GetEventExportConfiguration,
  GetEventExportConfigurationResponse,
  GetEventExportConfigurations,
  GetEventExportConfigurationsResponse,
  GetEventExportTargetTypes,
  GetEventExportTargetTypesResponse,
  GetEventLedgerTypes,
  GetEventLedgerTypesResponse,
  GetEventOrganizationUnits,
  GetEventOrganizationUnitsResponse,
  GetEventTypes,
  GetEventTypesResponse,
  GetFinancialPeriodAccountsSummary,
  GetFinancialPeriodAccountsSummaryResponse,
  GetFinancialPeriodCashJournalDeviceSummary,
  GetFinancialPeriodCashJournalDeviceSummaryResponse,
  GetFinancialPeriodClosingImpediments,
  GetFinancialPeriodClosingImpedimentsResponse,
  GetFinancialPeriodClosingStockInformation,
  GetFinancialPeriodClosingStockInformationResponse,
  GetFinancialPeriodDetails,
  GetFinancialPeriodDetailsResponse,
  GetFinancialPeriodExportDocuments,
  GetFinancialPeriodExportDocumentsResponse,
  GetFinancialPeriodInformation,
  GetFinancialPeriodInformationResponse,
  GetFinancialPeriodOpeningImpediments,
  GetFinancialPeriodOpeningImpedimentsResponse,
  GetFiscalOrderData,
  GetFiscalOrderDataResponse,
  GetFlight,
  GetFlightResponse,
  GetFullStockCount,
  GetFullStockCountResponse,
  GetFullStockCountLabelProduct,
  GetFullStockCountLabelProductResponse,
  GetFuturePrices,
  GetFuturePricesResponse,
  GetGiftCardOptions,
  GetGiftCardOptionsResponse,
  GetGiftWrappingOptionsForOrder,
  GetGiftWrappingOptionsForOrderResponse,
  GetGreetingCards,
  GetGreetingCardsResponse,
  GetInitialCycleCountLabel,
  GetInitialCycleCountLabelResponse,
  GetInitializationState,
  InitializationStateResponse,
  GetInquiry,
  GetInquiryResponse,
  GetInvoice,
  GetInvoiceResponse,
  GetInvoiceAdditionalAmountsForInvoice,
  GetInvoiceAdditionalAmountsForInvoiceResponse,
  GetInvoiceAdditionalAmountTypeByID,
  GetInvoiceAdditionalAmountTypeByIDResponse,
  GetInvoiceAdditionalAmountTypes,
  GetInvoiceAdditionalAmountTypesResponse,
  GetInvoiceDisputeReasonByID,
  GetInvoiceDisputeReasonByIDResponse,
  GetInvoiceDisputeReasons,
  GetInvoiceDisputeReasonsResponse,
  GetInvoiceDisputesForInvoice,
  GetInvoiceDisputesForInvoiceResponse,
  GetInvoiceExport,
  GetInvoiceExportResponse,
  GetInvoiceExportByID,
  GetInvoiceExportByIDResponse,
  GetInvoiceExportDocuments,
  GetInvoiceExportDocumentsResponse,
  GetInvoiceOutputTypes,
  GetInvoiceOutputTypesResponse,
  GetInvoicePayments,
  GetInvoicePaymentsResponse,
  GetLoginOrganizationUnitsForUser,
  GetLoginOrganizationUnitsForUserResponse,
  GetLotteryNumber,
  GetLotteryNumberResponse,
  GetMessageQueueError,
  GetMessageQueueErrorResponse,
  GetOpenCashDrawerReasons,
  GetOpenCashDrawerReasonsResponse,
  GetOpeningHoursTemplateByID,
  GetOpeningHoursTemplateResponseByID,
  GetOpeningHoursTemplatesTranslationKeys,
  GetOpeningHoursTemplatesTranslationKeysResponse,
  GetOperationalTaskConfig,
  GetOperationalTaskConfigResponse,
  GetOrder,
  GetOrderResponse,
  GetOrderCustomStatusLedger,
  GetOrderCustomStatusLedgerResponse,
  GetOrderDiscountInfo,
  GetOrderDiscountInfoResponse,
  GetOrderExportByID,
  GetOrderExportByIDResponse,
  GetOrderExportDocuments,
  GetOrderExportDocumentsResponse,
  GetOrderFulfillment,
  GetOrderFulfillmentResponse,
  GetOrderFulfillmentOptions,
  GetOrderFulfillmentOptionsResponse,
  GetOrderFulfillmentSupplierPerformance,
  GetOrderFulfillmentSupplierPerformanceResponse,
  GetOrderLinks,
  GetOrderLinksResponse,
  GetOrderLinkTypeByID,
  GetOrderLinkTypeByIDResponse,
  GetOrderLinkTypes,
  GetOrderLinkTypesResponse,
  GetOrderLoyaltyData,
  GetOrderLoyaltyDataResponse,
  GetOrdersForReturnOrder,
  GetOrdersForReturnOrderResponse,
  GetOrderSignature,
  GetOrderSignatures,
  GetOrderSignaturesResponse,
  GetOrderStatistics,
  GetOrderStatisticsResponse,
  GetOrderSummary,
  GetOrderSummaryResponse,
  GetOrderSummaryForShipping,
  GetOrderSummaryForShippingResponse,
  GetOrderTaxDetails,
  GetOrderTaxDetailsResponse,
  GetOrderVerificationReason,
  GetOrderVerificationReasonResponse,
  GetOrganizationUnit,
  GetOrganizationUnitResponse,
  GetOrganizationUnitCreditBalance,
  GetOrganizationUnitCreditBalanceResponse,
  GetOrganizationUnitDetailed,
  GetOrganizationUnitDetailedResponse,
  GetOrganizationUnitNotes,
  GetOrganizationUnitNotesResponse,
  GetOrganizationUnitOpeningHours,
  GetOrganizationUnitOpeningHoursResponse,
  GetOrganizationUnitOpeningHoursForPeriod,
  GetOrganizationUnitOpeningHoursForPeriodResponse,
  GetOrganizationUnitSettings,
  GetOrganizationUnitSettingsResponse,
  GetOrganizationUnitsForUser,
  GetOrganizationUnitsForUserResponse,
  GetOrganizationUnitsHierarchy,
  GetOrganizationUnitsHierarchyResponse,
  GetOrganizationUnitsStructure,
  GetOrganizationUnitsStructureResponse,
  GetOrganizationUnitSummary,
  GetOrganizationUnitSummaryResponse,
  GetOverdueAppointmentsCount,
  GetOverdueAppointmentsCountResponse,
  GetPasskeyChallenge,
  GetPasskeyChallengeResponse,
  GetPasskeyInfo,
  GetPasskeyInfoResponse,
  GetPaymentTransaction,
  GetPaymentTransactionResponse,
  GetPaymentTransactionsForInvoice,
  GetPaymentTransactionsResponse,
  GetPaymentTransactionsForOrder,
  GetPendingShipmentInformationForOrderLines,
  GetPendingShipmentInformationForOrderLinesResponse,
  GetPeppolData,
  GetPeppolDataResponse,
  GetPickProductDiscountOptionsForOrder,
  GetPickProductDiscountOptionsForOrderResponse,
  GetPickProductDiscountOptionsForOrderLine,
  GetPickProductDiscountOptionsForOrderLineResponse,
  GetPotentialBundleProductsForOrder,
  GetPotentialBundleProductsForOrderResponse,
  GetPotentialDiscountsForOrder,
  GetPotentialDiscountsResponse,
  GetPotentialDiscountsForProductSearch,
  GetPotentialProductPricing,
  GetPotentialProductPricingResponse,
  GetPotentialSubscriptionProductsForOrder,
  GetPotentialSubscriptionProductsForOrderResponse,
  GetPreferredRefundMethod,
  GetPreferredRefundMethodResponse,
  GetPrePickedShipFromStoreTask,
  GetPrePickedShipFromStoreTaskResponse,
  GetProductAvailability,
  GetProductAvailabilityResponse,
  GetProductBundle,
  GetProductBundleResponse,
  GetProductDetail,
  GetProductDetailResponse,
  GetProductPrices,
  GetProductPricesResponse,
  GetProductPricing,
  GetProductPricingResponse,
  GetProductRecommendation,
  GetProductRecommendationResponse,
  GetProductRelations,
  GetProductRelationsResponse,
  GetProductRequirementValuesForOrder,
  GetProductRequirementValuesForOrderResponse,
  GetProductRequirementValuesForOrderLine,
  GetProductRequirementValuesForOrderLineResponse,
  GetProductRunRates,
  GetProductRunRatesResponse,
  GetProducts,
  GetProductsResponse,
  GetProductSearchSuggestions,
  GetProductSearchSuggestionsResponse,
  GetProductStructure,
  GetProductStructureResponse,
  GetProductSubscriptionsForUser,
  GetProductSubscriptionsForUserResponse,
  GetProductSupplierInfoForProducts,
  GetProductSupplierInfoForProductsResponse,
  GetProductUnitOfMeasureQuantities,
  GetProductUnitOfMeasureQuantitiesResponse,
  GetProductWarranty,
  GetProductWarrantyResponse,
  GetProductZone,
  ProductZoneDto,
  GetProductZoneGroup,
  ProductZoneGroupDto,
  GetPurchaseOrderShipment,
  GetPurchaseOrderShipmentResponse,
  GetQuantityOnHandForProducts,
  GetQuantityOnHandForProductsResponse,
  GetQuickBuy,
  GetQuickBuyResponse,
  GetQuickBuyOptions,
  GetQuickBuyOptionsResponse,
  GetQuickBuys,
  GetQuickBuysResponse,
  GetRecurringScheduledTask,
  GetRecurringScheduledTaskResponse,
  GetRecurringTaskLogging,
  GetRecurringTaskLoggingResponse,
  GetRecurringTaskRuns,
  GetRecurringTaskRunsResponse,
  GetRefundCorrectionReasons,
  GetRefundCorrectionReasonsResponse,
  GetRelatedOrderLines,
  GetRelatedOrderLinesResponse,
  GetRelatedOrders,
  GetRelatedOrdersResponse,
  GetRepair,
  GetRepairResponse,
  GetRequiredDataForOrder,
  GetRequiredDataForOrderResponse,
  GetRequiredOrganizationUnitFields,
  GetRequiredOrganizationUnitFieldsResponse,
  GetReturnableStatusForOrder,
  GetReturnableStatusForOrderResponse,
  GetReturnableStatusForProduct,
  GetReturnableStatusForProductResponse,
  GetReturnOrdersForOrder,
  GetReturnOrdersForOrderResponse,
  GetReturnToSupplierData,
  GetReturnToSupplierDataResponse,
  GetReturnToSupplierRequestByID,
  GetReturnToSupplierRequestByIDResponse,
  GetSalesTaxEstimateForOrder,
  GetScript,
  GetScriptResponse,
  GetScriptDialects,
  GetScriptDialectsResponse,
  GetScriptExtensionPoints,
  GetScriptExtensionPointsResponse,
  GetSearchUserFields,
  GetSearchUserFieldsResponse,
  GetSerialNumber,
  GetSerialNumberResponse,
  GetSerialNumberConfigurations,
  GetSerialNumberConfigurationsResponse,
  GetSerialNumberRegistrationReasons,
  GetSerialNumberRegistrationReasonsResponse,
  GetSetsByOrganizationUnit,
  GetSetsByOrganizationUnitResponse,
  GetSharedWishlist,
  GetSharedWishlistResponse,
  GetShipFromStoreTaskByBarcode,
  GetShipFromStoreTaskByBarcodeResponse,
  GetShipment,
  GetShipmentResponse,
  GetShipmentDetails,
  GetShipmentDetailsResponse,
  GetShipmentExportByID,
  GetShipmentExportByIDResponse,
  GetShipmentExportDocuments,
  GetShipmentExportDocumentsResponse,
  GetShipmentIdentifier,
  GetShipmentIdentifierResponse,
  GetShipmentReceipt,
  GetShipmentReceiptResponse,
  GetShipmentSettings,
  GetShipmentSettingsResponse,
  GetShippingMethodsForOrder,
  GetShippingMethodsForOrderResponse,
  GetShoppingCart,
  ShoppingCartResponse,
  GetShoppingCartInfo,
  GetShoppingCartInfoResponse,
  GetShopsByProximity,
  GetShopsByProximityResponse,
  GetStation,
  GetStationResponse,
  GetStationsForOrganizationUnit,
  GetStationsForOrganizationUnitResponse,
  GetStatusForZonedCycleCountPreCounts,
  GetStatusForZonedCycleCountPreCountsResponse,
  GetStockAvailabilityEstimateForOrder,
  GetStockAvailabilityEstimateForOrderResponse,
  GetStockAvailabilityEstimateForProducts,
  GetStockAvailabilityEstimateForProductsResponse,
  GetStockAvailabilityTimeline,
  GetStockAvailabilityTimelineResponse,
  GetStockByStockLabelForProducts,
  GetStockByStockLabelForProductsResponse,
  GetStockDetailsForProduct,
  GetStockDetailsForProductResponse,
  GetStockLabels,
  GetStockLabelsResponse,
  GetStockLabelSettings,
  GetStockLabelSettingsResponse,
  GetStockLabelSettingsForLabel,
  GetStockLabelSettingsForLabelResponse,
  GetStockLabelsForFeature,
  GetStockLabelsForFeatureResponse,
  GetStockLabelsForFeatures,
  GetStockLabelsForFeaturesResponse,
  GetStockNotification,
  GetStockNotificationForCurrentUser,
  GetStockReplenishmentTaskData,
  GetStockReplenishmentTaskDataResponse,
  GetStockReplenishmentTaskZones,
  GetStockReplenishmentTaskZonesResponse,
  GetStockReservationTask,
  GetStockReservationTaskResponse,
  GetStringTranslation,
  GetStringTranslationResponse,
  GetSubscriptionProductDetails,
  GetSubscriptionProductDetailResponse,
  GetSuppliersForOrganizationUnit,
  GetSuppliersForOrganizationUnitResponse,
  GetSupplierStockForProduct,
  GetSupplierStockForProductResponse,
  GetTaxExemptionReasons,
  GetTaxExemptionReasonsResponse,
  GetTaxFreeOrdersToReissue,
  GetTaxFreeOrdersToReissueResponse,
  GetTaxProvider,
  GetTaxProviderResponse,
  GetTaxProviderTypes,
  GetTaxProviderTypesResponse,
  GetTaxRate,
  GetTaxRateResponse,
  GetTemporaryRedirectToken,
  GetTemporaryRedirectTokenResponse,
  GetTokenInfo,
  GetTokenInfoResponse,
  GetTransportOrderLineData,
  GetTransportOrderLineDataResponse,
  GetTransputJobTypes,
  GetTransputJobTypesResponse,
  GetTriggeredSubscriptionProductsForProduct,
  GetTriggeredSubscriptionProductsForProductResponse,
  GetUnitPriceCorrectionReasons,
  GetUnitPriceCorrectionReasonsResponse,
  GetUnprocessedFinancialEventsCount,
  GetUnprocessedFinancialEventsCountResponse,
  GetUser,
  GetUserResponse,
  GetUserAssociations,
  GetUserAssociationsResponse,
  GetUserAssociationTypeByID,
  GetUserAssociationTypeByIDResponse,
  GetUserAssociationTypes,
  GetUserAssociationTypesResponse,
  GetUserBySocialSecurityNumber,
  GetUserBySocialSecurityNumberResponse,
  GetUserConsignment,
  GetUserConsignmentResponse,
  GetUserDebtorData,
  GetUserDebtorDataResponse,
  GetUserGroupByID,
  GetUserGroupByIDResponse,
  GetUserInfoByPhoneNumber,
  GetUserInfoResponse,
  GetUserInfoBySocialSecurityNumber,
  GetUserInquiries,
  GetUserInquiriesResponse,
  GetUserInquiry,
  GetUserInquiryResponse,
  GetUserInteractionByID,
  GetUserInteractionByIDResponse,
  GetUserLoyaltyBalance,
  GetUserLoyaltyBalanceResponse,
  GetUserLoyaltyData,
  GetUserLoyaltyDataResponse,
  GetUserLoyaltySubscriptions,
  GetUserLoyaltySubscriptionsResponse,
  GetUserPhoneNumbers,
  GetUserPhoneNumbersResponse,
  GetUserProductSubscriptionDetails,
  GetUserProductSubscriptionDetailsResponse,
  GetUserSubscriptions,
  GetUserTaskCounts,
  GetUserTaskCountsResponse,
  GetUserTaskDetails,
  GetUserTaskDetailsResponse,
  GetUserTaskNotCompletedReasons,
  GetUserTaskNotCompletedReasonsResponse,
  GetUserTaskPriorities,
  GetUserTaskPrioritiesResponse,
  GetUserTaskTypeOrganizationUnitSet,
  GetUserTaskTypes,
  GetUserTaskTypesResponse,
  GetUserWhoDeletedCycleCountZoneAndMakeItGreatAgain,
  GetUserWhoDeletedCycleCountZoneAndMakeItGreatAgainResponse,
  GetUserWidgets,
  GetUserWidgetsResponse,
  GetUserWishlist,
  GetUserWishlistResponse,
  GetWarehouseOrderData,
  GetWarehouseOrderDataResponse,
  GetWebshops,
  GetWebshopsResponse,
  GetZonedCycleCount,
  GetZonedCycleCountResponse,
  GetZonedCycleCountPreCount,
  GetZonedCycleCountPreCountResponse,
  GetZonedCycleCountSchedule,
  GetZonedCycleCountScheduleResponse,
  GetZonedCycleCountsEstimateByQuery,
  GetZonedCycleCountsEstimateByQueryResponse,
  GetZonedCycleCountsEstimateByQuery_Async,
  GetZonedCycleCountsEstimateByQuery_AsyncResponse,
  GetZonedCycleCountsEstimateByQuery_AsyncResult,
  HandlePaymentTransactionDispute,
  ImportFlights,
  ImportOrganizationUnits,
  ImportOrganizationUnitsResponse,
  InitializePaymentType,
  InitializePaymentTypeResponse,
  IssueTaxFreeForm,
  IssueTaxFreeFormResponse,
  LinkSharedWishlist,
  ListAddressBook,
  ListAddressBookResponse,
  ListApiKeys,
  ListApiKeysResponse,
  ListApplications,
  ListApplicationsResponse,
  ListAppointmentGroups,
  ListAppointmentGroupsResponse,
  ListAppointments,
  ListAppointmentsResponse,
  ListAvailableRecurringTasks,
  ListAvailableRecurringTasksResponse,
  ListAvailableShippingMethods,
  ListAvailableShippingMethodsResponse,
  ListAvailableTimeZones,
  ListAvailableTimeZonesResponse,
  ListAvailableUserTasks,
  ListAvailableUserTasksResponse,
  ListBlobsForFinancialPeriod,
  ListBlobsForFinancialPeriodResponse,
  ListBlobsForInvoice,
  ListBlobsForInvoiceResponse,
  ListBlobsForOrder,
  ListBlobsForOrderResponse,
  ListBookings,
  ListBookingsResponse,
  ListBrands,
  ListBrandsResponse,
  ListCashDeposits,
  ListCashDepositsResponse,
  ListCashExpenses,
  ListCashExpensesResponse,
  ListCashTransactionLedger,
  ListCashTransactionLedgerResponse,
  ListCashTransactionLedgerGroups,
  ListCashTransactionLedgerGroupsResponse,
  ListCommittedOrderLines,
  ListCommittedOrderLinesResponse,
  ListConsolidatedPickTasks,
  ListConsolidatedPickTasksResponse,
  ListConsolidatedZonePickTasks,
  ListConsolidatedZonePickTasksResponse,
  ListConsumerCompanies,
  ListConsumerCompaniesResponse,
  ListControlDocuments,
  ListControlDocumentsResponse,
  ListCountries,
  ListCountriesResponse,
  ListCouponDiscounts,
  ListCouponDiscountsResponse,
  ListCurrencies,
  ListCurrenciesResponse,
  ListCustomerInteractionTasks,
  ListCustomerInteractionTasksResponse,
  ListCustomOrderStatus,
  ListCustomOrderStatusResponse,
  ListCustomUserTaskTemplate,
  ListCustomUserTaskTemplateResponse,
  ListCustomUserTaskTypes,
  ListCustomUserTaskTypesResponse,
  ListCycleCountZoneGroups,
  ListCycleCountZoneGroupsResponse,
  ListCycleZonesForOrganizationUnits,
  ListCycleZonesForOrganizationUnitsResponse,
  ListDevices,
  ListDevicesResponse,
  ListDiagnosticsBlobs,
  ListDiagnosticsBlobsResponse,
  ListDisabledDiscountsOnOrder,
  ListDisabledDiscountsOnOrderResponse,
  ListDisabledDiscountTriggersOnOrder,
  ListDisabledDiscountTriggersOnOrderResponse,
  ListDiscountCouponHandlers,
  ListDiscountCouponHandlersResponse,
  ListEntityBlobTranslations,
  ListEntityBlobTranslationsResponse,
  ListEntityTranslations,
  ListEntityTranslationsResponse,
  ListEventLedger,
  ListEventLedgerResponse,
  ListExternalOrderStatusForOrder,
  ListExternalOrderStatusForOrderResponse,
  ListFeedSubscriptions,
  ListFeedSubscriptionsResponse,
  ListFinancialEvents,
  ListFinancialEventsResponse,
  ListFinancialPeriodAudits,
  ListFinancialPeriodAuditsResponse,
  ListFinancialPeriodExports2,
  ListFinancialPeriodExports2Response,
  ListFinancialPeriods,
  ListFinancialPeriodsResponse,
  ListFlights,
  ListFlightsResponse,
  ListFullStockCountLabelProducts,
  ListFullStockCountLabelProductsResponse,
  ListFullStockCountLabels,
  ListFullStockCountLabelsResponse,
  ListFullStockCountLabelSummary,
  ListFullStockCountLabelSummaryResponse,
  ListFullStockCountLabelTasks,
  ListFullStockCountLabelTasksResponse,
  ListFullStockCountResult,
  ListFullStockCountResultResponse,
  ListFullStockCounts,
  ListFullStockCountsResponse,
  ListFullStockCountSerialNumbersStatus,
  ListFullStockCountSerialNumbersStatusResponse,
  ListFullStockCountSummary,
  ListFullStockCountSummaryResponse,
  ListFullStockCountTasks,
  ListFullStockCountTasksResponse,
  ListGeneralLedgers,
  ListGeneralLedgersResponse,
  ListInitialCycleCountLabels,
  ListInitialCycleCountLabelsResponse,
  ListInitialCycleCountResults,
  ListInitialCycleCountResultsResponse,
  ListInterbranchOrganizationUnitForOrder,
  ListInterbranchOrganizationUnitForOrderResponse,
  ListInvoiceCompanyMapping,
  ListInvoiceCompanyMappingResponse,
  ListInvoiceExports,
  ListInvoiceExportResponse,
  ListInvoiceExportsForInvoice,
  ListInvoiceExportsForInvoiceResponse,
  ListInvoiceLedger,
  ListInvoiceLedgerResponse,
  ListInvoices,
  ListInvoicesResponse,
  ListInvoicesForOrder,
  ListInvoicesForOrderResponse,
  ListManualDiscounts,
  ListManualDiscountsResponse,
  ListManualInvoices,
  ListManualInvoicesResponse,
  ListManualTaxExemptionReasons,
  ListManualTaxExemptionReasonsResponse,
  ListMessageQueueErrors,
  ListMessageQueueErrorsResponse,
  ListMyUserTasks,
  ListMyUserTasksResponse,
  ListOpeningHoursTemplates,
  ListOpeningHoursTemplatesResponse,
  ListOpeningHoursTemplatesOrganizationUnitSets,
  ListOpeningHoursTemplatesOrganizationUnitSetsResponse,
  ListOperationalTaskConfig,
  ListOperationalTaskConfigResponse,
  ListOperationalTasks,
  ListOperationalTasksResponse,
  ListOrderCustomStatus,
  ListOrderCustomStatusResponse,
  ListOrderCustomTypes,
  ListOrderCustomTypesResponse,
  ListOrderExports,
  ListOrderExportsResponse,
  ListOrderExportsForOrder,
  ListOrderExportsForOrderResponse,
  ListOrderFulfillmentLines,
  ListOrderFulfillmentLinesResponse,
  ListOrderFulfillmentRejections,
  ListOrderFulfillmentRejectionsResponse,
  ListOrderFulfillments,
  ListOrderFulfillmentsResponse,
  ListOrderInterventionTasks,
  ListOrderInterventionTasksResponse,
  ListOrderLedgerForOrder,
  ListOrderLedgerForOrderResponse,
  ListOrderLines,
  ListOrderLinesResponse,
  ListOrderLinesInvoiceSummary,
  ListOrderLinesInvoiceSummaryResponse,
  ListOrdersForCustomer,
  ListOrdersForCustomerResponse,
  ListOrderShipments,
  ListOrderShipmentsResponse,
  ListOrdersWithCustomerReferences,
  ListOrdersWithCustomerReferencesResponse,
  ListOrderVerificationReasons,
  ListOrderVerificationReasonsResponse,
  ListOrganizationUnits,
  ListOrganizationUnitsResponse,
  ListOrganizationUnitsDetailed,
  ListOrganizationUnitsDetailedResponse,
  ListOrganizationUnitSummaries,
  ListOrganizationUnitSummariesResponse,
  ListOrganizationUnitSuppliers,
  ListOrganizationUnitSuppliersResponse,
  ListPaymentTransactionLedger,
  ListPaymentTransactionLedgerResponse,
  ListPrintPriceLabelTasks,
  ListPrintPriceLabelTasksResponse,
  ListPrintTasks,
  ListPrintTasksResponse,
  ListProductBundles,
  ListProductBundlesResponse,
  ListProductPrices,
  ListProductPricesResponse,
  ListProductRecommendations,
  ListProductRecommendationsResponse,
  ListProductStructures,
  ListProductStructuresResponse,
  ListProductZoneGroups,
  ListProductZoneGroupsResponse,
  ListProductZones,
  ListProductZonesResponse,
  ListPurchaseOrderShipments,
  ListPurchaseOrderShipmentsResponse,
  ListReceiveShipmentTasks,
  ListReceiveShipmentTasksResponse,
  ListRecurringScheduledTasks,
  ListRecurringScheduledTasksResponse,
  ListRecurringTasks,
  ListRecurringTasksResponse,
  ListRecurringTasks2,
  ListRecurringTasks2Response,
  ListRelatedOrderFulfillmentLines,
  ListRelatedOrderFulfillmentLinesResponse,
  ListRepairInteractions,
  ListRepairInteractionsResponse,
  ListRepairs,
  ListRepairsResponse,
  ListRepairTasks,
  ListRepairTasksResponse,
  ListReservationCleanupTasks,
  ListReservationCleanupTasksResponse,
  ListReservationDeviationTasks,
  ListReservationDeviationTasksResponse,
  ListReservationPickupTasks,
  ListReservationPickupTasksResponse,
  ListReturnableSuppliersForOrder,
  ListReturnableSuppliersForOrderResponse,
  ListReturnToSupplierRequests,
  ListReturnToSupplierRequestsResponse,
  ListReturnToSupplierTaskOrderLines,
  ListReturnToSupplierTaskOrderLinesResponse,
  ListReturnToSupplierTasks,
  ListReturnToSupplierTasksResponse,
  ListReturnToSupplierTaskShipmentLines,
  ListReturnToSupplierTaskShipmentLinesResponse,
  ListScriptHistory,
  ListScriptHistoryResponse,
  ListScripts,
  ListScriptsResponse,
  ListSecondChanceProductRegistrationTasks,
  ListSecondChanceProductRegistrationTasksResponse,
  ListSerialNumberProducts,
  ListSerialNumberProductsResponse,
  ListSerialNumberRegistrations,
  ListSerialNumberRegistrationsResponse,
  ListSerialNumbers,
  ListSerialNumbersResponse,
  ListShipFromStoreTasks,
  ListShipFromStoreTasksResponse,
  ListShipmentExportsForShipment,
  ListShipmentExportsForShipmentResponse,
  ListShipmentIdentifiers,
  ListShipmentIdentifiersResponse,
  ListShipmentLedgerForShipment,
  ListShipmentLedgerForShipmentResponse,
  ListShipmentLines,
  ListShipmentLinesResponse,
  ListShipmentLineSerialNumbers,
  ListShipmentLineSerialNumbersResponse,
  ListShipmentLinesToInvoice,
  ListShipmentLinesToInvoiceResponse,
  ListShipmentPackages,
  ListShipmentPackagesResponse,
  ListShipmentsToInvoice,
  ListShipmentsToInvoiceResponse,
  ListShopsByProximity,
  ListShopsByProximityResponse,
  ListShopsInArea,
  ListShopsInAreaResponse,
  ListStations,
  ListStationsResponse,
  ListStationsForOrganizationUnit,
  ListStationsForOrganizationUnitResponse,
  ListStock,
  ListStockResponse,
  ListStockMovementFollowUpTasks,
  ListStockMovementFollowUpTasksResponse,
  ListStockMutations,
  ListStockMutationsResponse,
  ListStockReplenishmentTaskData,
  ListStockReplenishmentTaskDataResponse,
  ListStockReplenishmentTasks,
  ListStockReplenishmentTasksResponse,
  ListStockReservationTasks,
  ListStockReservationTasksResponse,
  ListStringTranslations,
  ListStringTranslationsResponse,
  ListSuspendedOrders,
  ListSuspendedOrdersResponse,
  ListTasksThatBlockPeriodClosing,
  ListTasksThatBlockPeriodClosingResponse,
  ListTaxCodeMappings,
  ListTaxCodeMappingsResponse,
  ListTaxCodes,
  ListTaxCodesResponse,
  ListTaxProviders,
  ListTaxProvidersResponse,
  ListTaxRates,
  ListTaxRatesResponse,
  ListTransputJobs,
  ListTransputJobsResponse,
  ListUrgentTasks,
  ListUrgentTasksResponse,
  ListUserApiKeys,
  ListUserApiKeysResponse,
  ListUserBorrowedProducts,
  ListUserBorrowedProductsResponse,
  ListUserGroups,
  ListUserGroupsResponse,
  ListUserInteractions,
  ListUserInteractionsResponse,
  ListUserLoyaltyTransactions,
  ListUserLoyaltyTransactionsResponse,
  ListUsersForUserGroup,
  ListUsersForUserGroupResponse,
  ListUserTasks,
  ListUserTasksResponse,
  ListUserTaskTypeOrganizationUnitSets,
  ListUserTaskTypeOrganizationUnitSetsResponse,
  ListUserWishlists,
  ListUserWishlistsResponse,
  ListZonedCycleCountPreCountResult,
  ListZonedCycleCountPreCountResultResponse,
  ListZonedCycleCountPreCountTasks,
  ListZonedCycleCountPreCountTasksResponse,
  ListZonedCycleCounts,
  ListZonedCycleCountsResponse,
  ListZonedCycleCountSchedules,
  ListZonedCycleCountSchedulesResponse,
  ListZonedCycleCountSerialNumbersStatus,
  ListZonedCycleCountSerialNumbersStatusResponse,
  ListZonedCycleCountTasks,
  ListZonedCycleCountTasksResponse,
  LockOrder,
  Login,
  LoginResponse,
  Logout,
  LogoutResponse,
  MakeUserPhoneNumberPrimary,
  MigrateOrdersToUnified,
  MigrateOrdersToUnifiedResponse,
  MissingProductForInitialCycleCount,
  ModifyOrderLinePrice,
  ModifyPurchaseOrderLine,
  ModifyQuantityOrdered,
  ModifyQuantityOrderedResponse,
  ModifyQuantityShipped,
  MoveCash,
  MoveCommitments,
  MoveStock,
  OpenFinancialPeriod,
  OrderAISummary,
  OrderAISummaryResponse,
  ParseBarcode,
  ParseBarcodeResponse,
  ParseScript,
  ParseScriptResponse,
  PauseConsolidatedPickTask,
  PauseProductSubscriptionForUser,
  Ping,
  PlaceOrder,
  PlaceOrderResponse,
  PollExternalOrderStatus,
  PreCountInitialCycleCountLabel,
  PrefigureDiscounts,
  PrefigureDiscountsResponse,
  PrepareOrderForCheckout,
  PreviewUserInteractionCommunication,
  PreviewUserInteractionCommunicationResponse,
  Print,
  PrintCouponsForOrder,
  PrintFullStockCountLabels,
  PrintInterbranchOrderReceipt,
  PrintOrderPackingSlip,
  PrintOrderPackingSlipResponse,
  PrintPaperInvoice,
  PrintPaperInvoices,
  PrintPaperOffer,
  PrintPaperOrderConfirmation,
  PrintPriceLabel,
  PrintPriceLabelResponse,
  PrintProductPriceLabel,
  PrintProductPriceLabelResponse,
  PrintRepairThermalReceipt,
  PrintReturnToSupplierOrderTicket,
  PrintReturnToSupplierReceipt,
  PrintReturnToSupplierTaskShipment,
  PrintSecondChanceProductPriceLabel,
  PrintShipFromStoreTasks,
  PrintStockReservationReceipt,
  PrintTaxFreeForm,
  PrintThermalGiftReceipt,
  PrintThermalInvoice,
  PrintThermalInvoices,
  PrintThermalOrderConfirmation,
  PrintThermalOrderSummary,
  ProcessInitialCycleCountResults,
  ProcessPrintTasks,
  ProcessPrintTasksResponse,
  ProcessReturnToSupplierRequest,
  ProcessStockMutationFile,
  ProcessUnprocessedFinancialEvents,
  ProduceCashDepositDocument,
  ProduceCashExpenseDocument,
  ProduceDocuments,
  ProduceDocumentsResponse,
  ProduceInitialCycleCountLabels,
  ProduceInvoice,
  ProducePackingSlip,
  ProducePackingSlipResponse,
  ProducePickSlip,
  ProducePickSlipResponse,
  ProducePurchaseOrderDocument,
  ProduceReceipt,
  ProduceReceiptResponse,
  ProduceShipmentDocuments,
  ProduceShipmentDocumentsResponse,
  ProduceTrackingInformation,
  ProduceTrackingInformationResponse,
  ProduceZonedCycleCountHandout,
  ProduceZonedCycleCountHandoutResponse,
  PushPriceList,
  PushPriceListResponse,
  PushPriceList_Async,
  PushPriceList_AsyncResponse,
  PushPriceList_AsyncResult,
  PushPriceLists_Async,
  PushPriceLists_AsyncResponse,
  PushPriceLists_AsyncResult,
  PushPriceListsResponse,
  PushReturnOrder,
  PushReturnOrderResponse,
  PushSalesOrder,
  PushSalesOrderResponse,
  PushSerialNumbers,
  PushSerialNumbersResponse,
  PushSerialNumbers_Async,
  PushSerialNumbers_AsyncResponse,
  PushSerialNumbers_AsyncResult,
  PushUser,
  PushUserResponse,
  PushUserInteractionContent,
  PushUsers_Async,
  PushUsers_AsyncResponse,
  PushUsers_AsyncResult,
  PushUsersResponse,
  RaisePurchaseOrderImportedEvent,
  ReactivateUser,
  ReceivePurchaseOrderShipment,
  ReceivePurchaseOrderShipmentResponse,
  ReceiveReturnOrder,
  ReceiveShipment,
  RecountFullStockCountLabel,
  RecountFullStockCountLabelResponse,
  RecountFullStockCountProduct,
  RecoverEmployeeAccount,
  RecoverEmployeeAccountResponse,
  RefreshToken,
  RefreshTokenResponse,
  RefundOrder,
  RefundOrderResponse,
  RegisterAppForNotifications,
  RegisterUserBorrowedProducts,
  RemoveOfferStatusFromOrder,
  RemoveOrderLineUnitPriceCorrection,
  RemoveOrganizationUnitOpeningHoursException,
  RemoveProductsFromAnonymousWishlist,
  RemoveProductsFromUserWishlist,
  RemoveSpecialDateFromOpeningHoursTemplate,
  RemoveUserFromGroup,
  RenderThermalPrintResult,
  RenderThermalPrintResultResponse,
  RenewProductSubscription,
  ReplaceCycleCountZonesForOrganizationUnit,
  ReplaceEntityTranslation,
  ReplaceInvoice,
  ReplaceStringTranslation,
  ReplayEvents,
  ReplayEventsResponse,
  RepostFinancialPeriod,
  ReprintThermalPrintResult,
  RequestPasswordResetToken,
  RequestPaymentUpdate,
  RequestPaymentUpdateResponse,
  RequestReindexOrderSearchData,
  RequestReindexUserSearchData,
  RequeueErrorMessage,
  ResendOrder,
  ResendOrderResponse,
  ResendUserInteractionCommunication,
  ReserveOrder,
  ResetFinancialEvents,
  ResetUserPassword,
  ResetUserPasswordResponse,
  ResolveProductBackendIDs,
  ResolveProductBackendIDsResponse,
  ResumeProductSubscriptionForUser,
  ResumeSuspendedOrder,
  RetryFinancialPeriodExport,
  RetryFinancialPeriodExports,
  RetryInvoiceExport,
  RetryOrderExport,
  RetryShipmentExport,
  ReturnOrderLines,
  ReturnUserBorrowedProducts,
  ReviewScriptProposal,
  RevokeUserAgreement,
  RevokeWishlistShare,
  SearchConsumerCompany,
  SearchConsumerCompanyResponse,
  SearchLoyaltyPass,
  SearchLoyaltyPassResponse,
  SearchOrders,
  SearchOrdersResponse,
  SearchOrdersForCustomer,
  SearchOrdersForCustomerResponse,
  SearchProducts,
  SearchProductsResponse,
  SearchUsers,
  SearchUsersResponse,
  SendConfigurationPage,
  SendContactForm,
  SendMagicLink,
  SendMagicLinkResponse,
  SendReturnMail,
  SetCustomerIdentifiersOnOrder,
  SetCustomerReferencesOnOrder,
  SetCustomUserData,
  SetDefaultBillingAddress,
  SetDefaultPickupAddress,
  SetDefaultShippingAddress,
  SetDeliveryOrderData,
  SetDiscountProductOption,
  SetElectronicInvoiceData,
  SetEmployeesForFinancialPeriod,
  SetExternalFullStockCountResult,
  SetFiscalOrderData,
  SetFraudHandlerData,
  SetGiftWrappingOptionsOnOrder,
  SetLineForReturnToSupplierShipment,
  SetLotteryNumber,
  SetLoyaltyProgramForFinancialPeriod,
  SetOrderBackendIdentifier,
  SetOrderFulfillmentOptions,
  SetOrderSoldBy,
  SetOrganizationUnitNotes,
  SetOrganizationUnitOpeningHoursException,
  ValidateOpeningHoursTemplateResponse,
  SetOrganizationUnitOpeningHoursExceptions,
  SetPCIQuestionAnswerForFinancialPeriod,
  SetPeppolData,
  SetPickProductDiscountOptionsForOrderLine,
  SetPickupOrganizationUnit,
  SetPreferredRefundMethod,
  SetRemarkOnOrder,
  SetRequestedDate,
  SetReturnOrderRefundCorrection,
  SetSerialNumbers,
  SetShipmentSettings,
  SetShippingMethod,
  SetSpecialDateOnOpeningHoursTemplate,
  SetStockLabelSettings,
  SetStockProductForOrderLine,
  SetSuppliersForReturnToSupplierRequest,
  SetTaxFreeCustomerIdentifier,
  SetTransportOrderLineData,
  SetUserConsignment,
  SetUserToSingleSignOnOnly,
  SetWarehouseOrderData,
  ShareWishlist,
  ShareWishlistResponse,
  ShipExternalOrder,
  ShipExternalOrderResponse,
  ShipOrder,
  ShipOrderResponse,
  ShipOrderFulfillment,
  ShipOrderFulfillmentResponse,
  ShipOrderLines,
  ShipOrderLinesResponse,
  ShipPurchaseOrder,
  ShipPurchaseOrderResponse,
  ShipShipment,
  SignOrder,
  SplitOrderLine,
  SplitOrderLineResponse,
  StartAppointment,
  StartAppointments,
  StartCloseCashJournal,
  StartCloseCashJournalResponse,
  StartCompositeUserTask,
  StartCompositeUserTaskResponse,
  StartConsolidatedZonePickTask,
  StartConsolidatedZonePickTaskResponse,
  StartCustomerInteractionTask,
  StartCustomerInteractionTaskResponse,
  StartCustomUserTask,
  StartCustomUserTaskResponse,
  StartFullStockCount,
  StartFullStockCountResponse,
  StartFullStockCountLabel,
  StartFullStockCountLabelResponse,
  StartOpenCashJournal,
  StartOpenCashJournalResponse,
  StartOperationalTask,
  StartOperationalTaskResponse,
  StartOrderInterventionTask,
  StartOrderInterventionTaskResponse,
  StartPrintPriceLabelTask,
  StartPrintPriceLabelTaskResponse,
  StartPrintTask,
  StartPrintTaskResponse,
  StartReceiveShipment,
  StartReceiveShipmentResponse,
  StartRepairUserTask,
  StartRepairUserTaskResponse,
  StartReservationCleanup,
  StartReservationCleanupResponse,
  StartReservationDeviationTask,
  StartReservationDeviationTaskResponse,
  StartReservationPickupTask,
  StartReservationPickupTaskResponse,
  StartReturnToSupplierTask,
  StartReturnToSupplierResponse,
  StartSecondChanceProductRegistration,
  StartSecondChanceProductRegistrationResponse,
  StartShipFromStoreTask,
  StartShipFromStoreTaskResponse,
  StartStockMovementFollowUp,
  StartStockMovementFollowUpResponse,
  StartStockReplenishment,
  StartStockReplenishmentResponse,
  StartStockReservation2,
  StartStockReservationResponse2,
  StartZonedCycleCount,
  StartZonedCycleCountResponse,
  StartZonedCycleCountPreCount,
  StartZonedCycleCountPreCountResponse,
  StoreAndAttachBlobToOrder,
  StoreAndAttachBlobToOrderResponse,
  SubmitInquiry,
  SubscribeToFeed,
  SubscribeToFeedResponse,
  SubscribeUser,
  SubscribeUserResponse,
  SupplierCreateOrUpdatePurchaseOrder,
  CreatePurchaseOrderResponseWithUpdateIndicator,
  SupplierCreatePurchaseOrder,
  SupplierShipPurchaseOrder,
  SupplierUpdatePurchaseOrder,
  SuspendOrder,
  TestEventExportConfiguration,
  TestEventExportConfigurationResponse,
  ToggleTaxFreeFormRequest,
  TransferOrderToOrganizationUnit,
  TriggerAMLChecksOnOrder,
  TriggerOperationalTaskConfig,
  TriggerRecurringTask,
  TriggerRecurringTaskResponse,
  UnarchiveOrganizationUnit,
  UncommitOrderLines,
  UndoShipment,
  UndoShipmentReceipt,
  UnlinkSharedWishlist,
  UnlockOrder,
  UnsubscribeFromFeed,
  UnsubscribeUser,
  UnsubscribeUserResponse,
  UpdateAddress,
  UpdateAddressBookItem,
  UpdateAddressRequirement,
  UpdateAnonymousWishlist,
  UpdateApiKey,
  UpdateAppointment,
  UpdateAppRule,
  UpdateAuditChainConfiguration,
  UpdateCashCorrectionReason,
  UpdateCompanyForUser,
  UpdateConsolidatedZonePickTask,
  UpdateConsumerCompany,
  UpdateConsumerCompanyResponse,
  UpdateContractNumber,
  UpdateCustomerInteractionTaskType,
  UpdateCustomFieldsForOrganizationUnits,
  UpdateCustomUserTaskTemplate,
  UpdateCycleCountOriginType,
  UpdateCycleCountZone,
  UpdateCycleCountZoneGroup,
  UpdateDigitalGiftCardMailOptions,
  UpdateDigitalGiftCardOptions,
  UpdateDigitalGiftCardOrderLine,
  UpdateEventExportConfiguration,
  UpdateFlight,
  UpdateInterbranchOrder,
  UpdateInvoice,
  UpdateInvoiceAdditionalAmount,
  UpdateInvoiceAdditionalAmountType,
  UpdateInvoiceDispute,
  UpdateInvoiceDisputeReason,
  UpdateInvoiceDisputeResolveAction,
  UpdateInvoiceHoldStatus,
  UpdateInvoiceLines,
  UpdateInvoiceUserData,
  UpdateManualTaxExemptionReason,
  UpdateOpeningHoursTemplate,
  UpdateOperationalTaskConfig,
  UpdateOperationalTaskConfigResponse,
  UpdateOrder,
  UpdateOrderAddresses,
  UpdateOrderAddressesResponse,
  UpdateOrderBillingAddress,
  UpdateOrderAddressResponse,
  UpdateOrderCheckoutOptions,
  UpdateOrderCurrency,
  UpdateOrderCustomFields,
  UpdateOrderCustomOrderStatus,
  UpdateOrderCustomOrderStatusResponse,
  UpdateOrderCustomStatus,
  UpdateOrderCustomType,
  UpdateOrderFulfillmentLine,
  UpdateOrderLineCustomFields,
  UpdateOrderLineStockLabel,
  UpdateOrderLink,
  UpdateOrderLinkType,
  UpdateOrderOptions,
  UpdateOrderPickupAddress,
  UpdateOrderShippingAddress,
  UpdateOrderShippingStatus,
  UpdateOrderVerificationReason,
  UpdateOrganizationUnit,
  UpdateOrganizationUnitSettings,
  UpdateOrganizationUnitSupplier,
  UpdatePasskey,
  UpdateProductBundle,
  UpdateProductRecommendation,
  UpdateProductRequirementValuesForOrderLine,
  UpdateProductZone,
  UpdateProductZoneGroup,
  UpdateQuickBuy,
  UpdateRecurringTask,
  UpdateRepair,
  UpdateReservationPickupTaskDeadline,
  UpdateReturnToSupplierOrder,
  UpdateReturnToSupplierRequest,
  UpdateScript,
  UpdateSerialNumber,
  UpdateSerialNumberConfiguration,
  UpdateSerialNumberRegistrationReason,
  UpdateShipment,
  UpdateShipmentIdentifier,
  UpdateShipmentStatus,
  UpdateSimplePrices,
  UpdateStock,
  UpdateStockReplenishmentTaskData,
  UpdateSubscriptionUserIdentifier,
  UpdateTaxCode,
  UpdateTaxCodeMapping,
  UpdateTaxProvider,
  UpdateTaxRate,
  UpdateUser,
  UpdateUserAccountType,
  UpdateUserAccountTypeResponse,
  UpdateUserAssociation,
  UpdateUserAssociationType,
  UpdateUserDebtorData,
  UpdateUserGroup,
  UpdateUserInteraction,
  UpdateUserPhoneNumber,
  UpdateUserProductSubscriptionAddresses,
  UpdateUserProductSubscriptionPayment,
  UpdateUserProductSubscriptionPaymentResponse,
  UpdateUserTaskNotCompletedReason,
  UpdateUserTaskPriority,
  UpdateUserTaskType,
  UpdateUserTaskTypeOrganizationUnitSet,
  UpdateUserVisibilityGroup,
  UpdateUserWishlist,
  UpdateZonedCycleCountSchedule,
  UpgradeInvoice,
  UpgradeInvoiceResponse,
  UpgradeProductSubscriptionForUser,
  UploadAndProcessStockExcelFile,
  UploadAndProcessStockJSONFile,
  UploadCycleCountExcel_Async,
  UploadCycleCountExcel_AsyncResponse,
  UploadCycleCountExcel_AsyncResult,
  UploadExternalFullStockCountResult,
  UploadFullStockCountLabels,
  UploadFullStockCountLabelsResponse,
  UploadSpecialOpeningHoursExcel,
  ValidateCycleCountZoneGroup,
  ValidateCycleCountZoneGroupResponse,
  ValidateExportSchedule,
  ValidateExportScheduleResponse,
  ValidateIdentificationPin,
  ValidateIdentificationPinResponse,
  ValidateInvoiceNumber,
  ValidateInvoiceNumberResponse,
  ValidateOpeningHoursTemplate,
  ValidateOrderShipment,
  ValidateOrderShipmentResponse,
  ValidatePreCount,
  ValidatePreCountResponse,
  ValidateRequiredDataForOrder,
  ValidateRequiredDataForOrderResponse,
  ValidateReturnToSupplierRequest,
  ValidateReturnToSupplierRequestResponse,
  ValidateShipment,
  ValidateShipmentResponse,
  ValidateTaxFreeStatus,
  ValidateTaxFreeStatusResponse,
  ValidateToken,
  ValidateUser,
  ValidateUserResponse,
  ValidateUserEmailAddress,
  ValidateVatNumber,
  ValidateVatNumberResponse,
  VerifyCustomer,
  VerifyCustomerOnOrder,
  VerifyOrder,
  VerifySerialNumber,
  VoidTaxFreeForm,
  VoidTaxFreeFormResponse,
} from './eva-services-core';


export class SvcAcceptUserAgreement implements IEvaServiceDefinition
{
  name = 'AcceptUserAgreement';
  path = '/message/AcceptUserAgreement';
  request?: AcceptUserAgreement;
  response?: EmptyResponseMessage;
}

export class SvcActivateUserProductSubscription implements IEvaServiceDefinition
{
  name = 'ActivateUserProductSubscription';
  path = '/message/ActivateUserProductSubscription';
  request?: ActivateUserProductSubscription;
  response?: EmptyResponseMessage;
}

export class SvcAddBenefitDiscountToOrder implements IEvaServiceDefinition
{
  name = 'AddBenefitDiscountToOrder';
  path = '/message/AddBenefitDiscountToOrder';
  request?: AddBenefitDiscountToOrder;
  response?: AddDiscountToOrderResponse;
}

export class SvcAddBoardingPassToOrder implements IEvaServiceDefinition
{
  name = 'AddBoardingPassToOrder';
  path = '/message/AddBoardingPassToOrder';
  request?: AddBoardingPassToOrder;
  response?: EmptyResponseMessage;
}

export class SvcAddBundleProductToOrder implements IEvaServiceDefinition
{
  name = 'AddBundleProductToOrder';
  path = '/message/AddBundleProductToOrder';
  request?: AddBundleProductToOrder;
  response?: AddBundleProductToOrderResponse;
}

export class SvcAddDigitalGiftCardToOrder implements IEvaServiceDefinition
{
  name = 'AddDigitalGiftCardToOrder';
  path = '/message/AddDigitalGiftCardToOrder';
  request?: AddDigitalGiftCardToOrder;
  response?: EmptyResponseMessage;
}

export class SvcAddDiscountCouponToOrder implements IEvaServiceDefinition
{
  name = 'AddDiscountCouponToOrder';
  path = '/message/AddDiscountCouponToOrder';
  request?: AddDiscountCouponToOrder;
  response?: AddDiscountToOrderResponse;
}

export class SvcAddDiscountToOrder implements IEvaServiceDefinition
{
  name = 'AddDiscountToOrder';
  path = '/message/AddDiscountToOrder';
  request?: AddDiscountToOrder;
  response?: SimpleShoppingCartResponse;
}

export class SvcAddLabelToFullStockCount implements IEvaServiceDefinition
{
  name = 'AddLabelToFullStockCount';
  path = '/message/AddLabelToFullStockCount';
  request?: AddLabelToFullStockCount;
  response?: AddLabelToFullStockCountResponse;
}

export class SvcAddLoyaltyDiscountToOrder implements IEvaServiceDefinition
{
  name = 'AddLoyaltyDiscountToOrder';
  path = '/message/AddLoyaltyDiscountToOrder';
  request?: AddLoyaltyDiscountToOrder;
  response?: AddDiscountToOrderResponse;
}

export class SvcAddManualDiscountToOrder implements IEvaServiceDefinition
{
  name = 'AddManualDiscountToOrder';
  path = '/message/AddManualDiscountToOrder';
  request?: AddManualDiscountToOrder;
  response?: AddDiscountToOrderResponse;
}

export class SvcAddProductsToAnonymousWishlist implements IEvaServiceDefinition
{
  name = 'AddProductsToAnonymousWishlist';
  path = '/message/AddProductsToAnonymousWishlist';
  request?: AddProductsToAnonymousWishlist;
  response?: EmptyResponseMessage;
}

export class SvcAddProductsToUserWishlist implements IEvaServiceDefinition
{
  name = 'AddProductsToUserWishlist';
  path = '/message/AddProductsToUserWishlist';
  request?: AddProductsToUserWishlist;
  response?: EmptyResponseMessage;
}

export class SvcAddProductToFullStockCountLabel implements IEvaServiceDefinition
{
  name = 'AddProductToFullStockCountLabel';
  path = '/message/AddProductToFullStockCountLabel';
  request?: AddProductToFullStockCountLabel;
  response?: AddProductToFullStockCountLabelResponse;
}

export class SvcAddProductToOrder implements IEvaServiceDefinition
{
  name = 'AddProductToOrder';
  path = '/message/AddProductToOrder';
  request?: AddProductToOrder;
  response?: AddProductToOrderResponse;
}

export class SvcAddPurchaseOrderLines implements IEvaServiceDefinition
{
  name = 'AddPurchaseOrderLines';
  path = '/message/AddPurchaseOrderLines';
  request?: AddPurchaseOrderLines;
  response?: AddPurchaseOrderLinesResponse;
}

export class SvcAddServiceProductToOrder implements IEvaServiceDefinition
{
  name = 'AddServiceProductToOrder';
  path = '/message/AddServiceProductToOrder';
  request?: AddServiceProductToOrder;
  response?: AddServiceProductToOrderResponse;
}

export class SvcAddSubscriptionProductToOrder implements IEvaServiceDefinition
{
  name = 'AddSubscriptionProductToOrder';
  path = '/message/AddSubscriptionProductToOrder';
  request?: AddSubscriptionProductToOrder;
  response?: AddSubscriptionProductToOrderResponse;
}

export class SvcAddTrackingCodeToReturnToSupplierShipment implements IEvaServiceDefinition
{
  name = 'AddTrackingCodeToReturnToSupplierShipment';
  path = '/message/AddTrackingCodeToReturnToSupplierShipment';
  request?: AddTrackingCodeToReturnToSupplierShipment;
  response?: EmptyResponseMessage;
}

export class SvcAddUserBorrowedProductToOrder implements IEvaServiceDefinition
{
  name = 'AddUserBorrowedProductToOrder';
  path = '/message/AddUserBorrowedProductToOrder';
  request?: AddUserBorrowedProductToOrder;
  response?: AddUserBorrowedProductToOrderResponse;
}

export class SvcAddUserToGroup implements IEvaServiceDefinition
{
  name = 'AddUserToGroup';
  path = '/message/AddUserToGroup';
  request?: AddUserToGroup;
  response?: EmptyResponseMessage;
}

export class SvcAdjustStock implements IEvaServiceDefinition
{
  name = 'AdjustStock';
  path = '/message/AdjustStock';
  request?: AdjustStock;
  response?: EmptyResponseMessage;
}

export class SvcApplyBundleProductSelection implements IEvaServiceDefinition
{
  name = 'ApplyBundleProductSelection';
  path = '/message/ApplyBundleProductSelection';
  request?: ApplyBundleProductSelection;
  response?: SimpleShoppingCartResponse;
}

export class SvcApplySalesTaxEstimateForOrder implements IEvaServiceDefinition
{
  name = 'ApplySalesTaxEstimateForOrder';
  path = '/message/ApplySalesTaxEstimateForOrder';
  request?: ApplySalesTaxEstimateForOrder;
  response?: SalesTaxEstimateForOrderResponse;
}

export class SvcApplyScriptEdits implements IEvaServiceDefinition
{
  name = 'ApplyScriptEdits';
  path = '/message/ApplyScriptEdits';
  request?: ApplyScriptEdits;
  response?: UpdateScriptResponse;
}

export class SvcApproveCapture implements IEvaServiceDefinition
{
  name = 'ApproveCapture';
  path = '/message/ApproveCapture';
  request?: ApproveCapture;
  response?: EmptyResponseMessage;
}

export class SvcApprovePayment implements IEvaServiceDefinition
{
  name = 'ApprovePayment';
  path = '/message/ApprovePayment';
  request?: ApprovePayment;
  response?: ApprovePaymentResponse;
}

export class SvcArchiveOrganizationUnit implements IEvaServiceDefinition
{
  name = 'ArchiveOrganizationUnit';
  path = '/message/ArchiveOrganizationUnit';
  request?: ArchiveOrganizationUnit;
  response?: EmptyResponseMessage;
}

export class SvcAttachAddressToOrder implements IEvaServiceDefinition
{
  name = 'AttachAddressToOrder';
  path = '/message/AttachAddressToOrder';
  request?: AttachAddressToOrder;
  response?: AttachAddressToOrderResponse;
}

export class SvcAttachAnonymousWishlistToUser implements IEvaServiceDefinition
{
  name = 'AttachAnonymousWishlistToUser';
  path = '/message/AttachAnonymousWishlistToUser';
  request?: AttachAnonymousWishlistToUser;
  response?: EmptyResponseMessage;
}

export class SvcAttachAppointmentToOrder implements IEvaServiceDefinition
{
  name = 'AttachAppointmentToOrder';
  path = '/message/AttachAppointmentToOrder';
  request?: AttachAppointmentToOrder;
  response?: EmptyResponseMessage;
}

export class SvcAttachBlobToInvoice implements IEvaServiceDefinition
{
  name = 'AttachBlobToInvoice';
  path = '/message/AttachBlobToInvoice';
  request?: AttachBlobToInvoice;
  response?: EmptyResponseMessage;
}

export class SvcAttachBlobToOrder implements IEvaServiceDefinition
{
  name = 'AttachBlobToOrder';
  path = '/message/AttachBlobToOrder';
  request?: AttachBlobToOrder;
  response?: EmptyResponseMessage;
}

export class SvcAttachConsumerCompanyToOrder implements IEvaServiceDefinition
{
  name = 'AttachConsumerCompanyToOrder';
  path = '/message/AttachConsumerCompanyToOrder';
  request?: AttachConsumerCompanyToOrder;
  response?: AttachConsumerCompanyToOrderResponse;
}

export class SvcAttachCustomerToOrder implements IEvaServiceDefinition
{
  name = 'AttachCustomerToOrder';
  path = '/message/AttachCustomerToOrder';
  request?: AttachCustomerToOrder;
  response?: EmptyResponseMessage;
}

export class SvcAttachIdentificationToOrder implements IEvaServiceDefinition
{
  name = 'AttachIdentificationToOrder';
  path = '/message/AttachIdentificationToOrder';
  request?: AttachIdentificationToOrder;
  response?: EmptyResponseMessage;
}

export class SvcAttachOpeningHoursTemplateToOrganizationUnitSets implements IEvaServiceDefinition
{
  name = 'AttachOpeningHoursTemplateToOrganizationUnitSets';
  path = '/message/AttachOpeningHoursTemplateToOrganizationUnitSets';
  request?: AttachOpeningHoursTemplateToOrganizationUnitSets;
  response?: EmptyResponseMessage;
}

export class SvcAttachUserToConsumerCompany implements IEvaServiceDefinition
{
  name = 'AttachUserToConsumerCompany';
  path = '/message/AttachUserToConsumerCompany';
  request?: AttachUserToConsumerCompany;
  response?: EmptyResponseMessage;
}

export class SvcAutocompleteAddress implements IEvaServiceDefinition
{
  name = 'AutocompleteAddress';
  path = '/message/AutocompleteAddress';
  request?: AutocompleteAddress;
  response?: AutocompleteAddressResponse;
}

export class SvcAutocompleteOrder implements IEvaServiceDefinition
{
  name = 'AutocompleteOrder';
  path = '/message/AutocompleteOrder';
  request?: AutocompleteOrder;
  response?: AutocompleteOrderResponse;
}

export class SvcAutoTransferInterbranchOrder implements IEvaServiceDefinition
{
  name = 'AutoTransferInterbranchOrder';
  path = '/message/AutoTransferInterbranchOrder';
  request?: AutoTransferInterbranchOrder;
  response?: EmptyResponseMessage;
}

export class SvcBarcode implements IEvaServiceDefinition
{
  name = 'Barcode';
  path = '/message/Barcode';
  request?: Barcode;
  response?: BarcodeResponse;
}

export class SvcBookInvoice implements IEvaServiceDefinition
{
  name = 'BookInvoice';
  path = '/message/BookInvoice';
  request?: BookInvoice;
  response?: EmptyResponseMessage;
}

export class SvcBulkMoveStock implements IEvaServiceDefinition
{
  name = 'BulkMoveStock';
  path = '/message/BulkMoveStock';
  request?: BulkMoveStock;
  response?: EmptyResponseMessage;
}

export class SvcBulkUpdateOrganizationUnitSettings implements IEvaServiceDefinition
{
  name = 'BulkUpdateOrganizationUnitSettings';
  path = '/message/BulkUpdateOrganizationUnitSettings';
  request?: BulkUpdateOrganizationUnitSettings;
  response?: EmptyResponseMessage;
}

export class SvcCancelAMLChecksOnOrder implements IEvaServiceDefinition
{
  name = 'CancelAMLChecksOnOrder';
  path = '/message/CancelAMLChecksOnOrder';
  request?: CancelAMLChecksOnOrder;
  response?: EmptyResponseMessage;
}

export class SvcCancelAppointment implements IEvaServiceDefinition
{
  name = 'CancelAppointment';
  path = '/message/CancelAppointment';
  request?: CancelAppointment;
  response?: EmptyResponseMessage;
}

export class SvcCancelAppointments implements IEvaServiceDefinition
{
  name = 'CancelAppointments';
  path = '/message/CancelAppointments';
  request?: CancelAppointments;
  response?: EmptyResponseMessage;
}

export class SvcCancelDiscountOrderLine implements IEvaServiceDefinition
{
  name = 'CancelDiscountOrderLine';
  path = '/message/CancelDiscountOrderLine';
  request?: CancelDiscountOrderLine;
  response?: SimpleShoppingCartResponse;
}

export class SvcCancelFullStockCount implements IEvaServiceDefinition
{
  name = 'CancelFullStockCount';
  path = '/message/CancelFullStockCount';
  request?: CancelFullStockCount;
  response?: EmptyResponseMessage;
}

export class SvcCancelFullStockCountLabel implements IEvaServiceDefinition
{
  name = 'CancelFullStockCountLabel';
  path = '/message/CancelFullStockCountLabel';
  request?: CancelFullStockCountLabel;
  response?: EmptyResponseMessage;
}

export class SvcCancelOrder implements IEvaServiceDefinition
{
  name = 'CancelOrder';
  path = '/message/CancelOrder';
  request?: CancelOrder;
  response?: CancelOrderResponse;
}

export class SvcCancelOrderLineFulfillments implements IEvaServiceDefinition
{
  name = 'CancelOrderLineFulfillments';
  path = '/message/CancelOrderLineFulfillments';
  request?: CancelOrderLineFulfillments;
  response?: EmptyResponseMessage;
}

export class SvcCancelPayment implements IEvaServiceDefinition
{
  name = 'CancelPayment';
  path = '/message/CancelPayment';
  request?: CancelPayment;
  response?: EmptyResponseMessage;
}

export class SvcCancelProductSubscriptionForUser implements IEvaServiceDefinition
{
  name = 'CancelProductSubscriptionForUser';
  path = '/message/CancelProductSubscriptionForUser';
  request?: CancelProductSubscriptionForUser;
  response?: EmptyResponseMessage;
}

export class SvcCancelProductSubscriptionUpgradeForUser implements IEvaServiceDefinition
{
  name = 'CancelProductSubscriptionUpgradeForUser';
  path = '/message/CancelProductSubscriptionUpgradeForUser';
  request?: CancelProductSubscriptionUpgradeForUser;
  response?: EmptyResponseMessage;
}

export class SvcCancelSecondChanceProductRegistration implements IEvaServiceDefinition
{
  name = 'CancelSecondChanceProductRegistration';
  path = '/message/CancelSecondChanceProductRegistration';
  request?: CancelSecondChanceProductRegistration;
  response?: EmptyResponseMessage;
}

export class SvcCancelShipments implements IEvaServiceDefinition
{
  name = 'CancelShipments';
  path = '/message/CancelShipments';
  request?: CancelShipments;
  response?: CancelShipmentsResponse;
}

export class SvcCanProcessInitialCycleCount implements IEvaServiceDefinition
{
  name = 'CanProcessInitialCycleCount';
  path = '/message/CanProcessInitialCycleCount';
  request?: CanProcessInitialCycleCount;
  response?: CanProcessInitialCycleCountResponse;
}

export class SvcCapturePayment implements IEvaServiceDefinition
{
  name = 'CapturePayment';
  path = '/message/CapturePayment';
  request?: CapturePayment;
  response?: CapturePaymentResponse;
}

export class SvcCaptureShipment implements IEvaServiceDefinition
{
  name = 'CaptureShipment';
  path = '/message/CaptureShipment';
  request?: CaptureShipment;
  response?: CaptureShipmentResponse;
}

export class SvcCardBalanceCheck implements IEvaServiceDefinition
{
  name = 'CardBalanceCheck';
  path = '/message/CardBalanceCheck';
  request?: CardBalanceCheck;
  response?: CardBalanceCheckResponse;
}

export class SvcChangeOrderLinesToCarryOut implements IEvaServiceDefinition
{
  name = 'ChangeOrderLinesToCarryOut';
  path = '/message/ChangeOrderLinesToCarryOut';
  request?: ChangeOrderLinesToCarryOut;
  response?: EmptyResponseMessage;
}

export class SvcChangeOrderLinesToDelivery implements IEvaServiceDefinition
{
  name = 'ChangeOrderLinesToDelivery';
  path = '/message/ChangeOrderLinesToDelivery';
  request?: ChangeOrderLinesToDelivery;
  response?: EmptyResponseMessage;
}

export class SvcChangeOrderLinesToPickup implements IEvaServiceDefinition
{
  name = 'ChangeOrderLinesToPickup';
  path = '/message/ChangeOrderLinesToPickup';
  request?: ChangeOrderLinesToPickup;
  response?: EmptyResponseMessage;
}

export class SvcChangeUserPassword implements IEvaServiceDefinition
{
  name = 'ChangeUserPassword';
  path = '/message/ChangeUserPassword';
  request?: ChangeUserPassword;
  response?: EmptyResponseMessage;
}

export class SvcCheckEmailAddressAvailability implements IEvaServiceDefinition
{
  name = 'CheckEmailAddressAvailability';
  path = '/message/CheckEmailAddressAvailability';
  request?: CheckEmailAddressAvailability;
  response?: CheckUsernameAvailabilityResponse;
}

export class SvcCheckMagicLink implements IEvaServiceDefinition
{
  name = 'CheckMagicLink';
  path = '/message/CheckMagicLink';
  request?: CheckMagicLink;
  response?: CheckMagicLinkResponse;
}

export class SvcCheckNicknameAvailability implements IEvaServiceDefinition
{
  name = 'CheckNicknameAvailability';
  path = '/message/CheckNicknameAvailability';
  request?: CheckNicknameAvailability;
  response?: CheckUsernameAvailabilityResponse;
}

export class SvcCheckOrderAddressFraud implements IEvaServiceDefinition
{
  name = 'CheckOrderAddressFraud';
  path = '/message/CheckOrderAddressFraud';
  request?: CheckOrderAddressFraud;
  response?: CheckOrderAddressFraudResponse;
}

export class SvcCheckOrderBackendIDExists implements IEvaServiceDefinition
{
  name = 'CheckOrderBackendIDExists';
  path = '/message/CheckOrderBackendIDExists';
  request?: CheckOrderBackendIDExists;
  response?: BackendIDExistsResponse;
}

export class SvcCheckShipmentBackendIDExists implements IEvaServiceDefinition
{
  name = 'CheckShipmentBackendIDExists';
  path = '/message/CheckShipmentBackendIDExists';
  request?: CheckShipmentBackendIDExists;
  response?: BackendIDExistsResponse;
}

export class SvcCloseFinancialPeriod implements IEvaServiceDefinition
{
  name = 'CloseFinancialPeriod';
  path = '/message/CloseFinancialPeriod';
  request?: CloseFinancialPeriod;
  response?: EmptyResponseMessage;
}

export class SvcCommitOrderLines implements IEvaServiceDefinition
{
  name = 'CommitOrderLines';
  path = '/message/CommitOrderLines';
  request?: CommitOrderLines;
  response?: CommitOrderLinesResponse;
}

export class SvcCompleteAppointment implements IEvaServiceDefinition
{
  name = 'CompleteAppointment';
  path = '/message/CompleteAppointment';
  request?: CompleteAppointment;
  response?: EmptyResponseMessage;
}

export class SvcCompleteAppointments implements IEvaServiceDefinition
{
  name = 'CompleteAppointments';
  path = '/message/CompleteAppointments';
  request?: CompleteAppointments;
  response?: EmptyResponseMessage;
}

export class SvcCompleteCloseCashJournal implements IEvaServiceDefinition
{
  name = 'CompleteCloseCashJournal';
  path = '/message/CompleteCloseCashJournal';
  request?: CompleteCloseCashJournal;
  response?: EmptyResponseMessage;
}

export class SvcCompleteConsolidatedPickTask implements IEvaServiceDefinition
{
  name = 'CompleteConsolidatedPickTask';
  path = '/message/CompleteConsolidatedPickTask';
  request?: CompleteConsolidatedPickTask;
  response?: EmptyResponseMessage;
}

export class SvcCompleteConsolidatedZonePickTask implements IEvaServiceDefinition
{
  name = 'CompleteConsolidatedZonePickTask';
  path = '/message/CompleteConsolidatedZonePickTask';
  request?: CompleteConsolidatedZonePickTask;
  response?: EmptyResponseMessage;
}

export class SvcCompleteCustomerInteractionTask implements IEvaServiceDefinition
{
  name = 'CompleteCustomerInteractionTask';
  path = '/message/CompleteCustomerInteractionTask';
  request?: CompleteCustomerInteractionTask;
  response?: EmptyResponseMessage;
}

export class SvcCompleteCustomUserTask implements IEvaServiceDefinition
{
  name = 'CompleteCustomUserTask';
  path = '/message/CompleteCustomUserTask';
  request?: CompleteCustomUserTask;
  response?: EmptyResponseMessage;
}

export class SvcCompleteFullStockCount implements IEvaServiceDefinition
{
  name = 'CompleteFullStockCount';
  path = '/message/CompleteFullStockCount';
  request?: CompleteFullStockCount;
  response?: EmptyResponseMessage;
}

export class SvcCompleteFullStockCountLabel implements IEvaServiceDefinition
{
  name = 'CompleteFullStockCountLabel';
  path = '/message/CompleteFullStockCountLabel';
  request?: CompleteFullStockCountLabel;
  response?: EmptyResponseMessage;
}

export class SvcCompleteMultipleShipFromStoreTasks implements IEvaServiceDefinition
{
  name = 'CompleteMultipleShipFromStoreTasks';
  path = '/message/CompleteMultipleShipFromStoreTasks';
  request?: CompleteMultipleShipFromStoreTasks;
  response?: EmptyResponseMessage;
}

export class SvcCompleteOpenCashJournal implements IEvaServiceDefinition
{
  name = 'CompleteOpenCashJournal';
  path = '/message/CompleteOpenCashJournal';
  request?: CompleteOpenCashJournal;
  response?: EmptyResponseMessage;
}

export class SvcCompleteOperationalTask implements IEvaServiceDefinition
{
  name = 'CompleteOperationalTask';
  path = '/message/CompleteOperationalTask';
  request?: CompleteOperationalTask;
  response?: EmptyResponseMessage;
}

export class SvcCompleteOrderInterventionTask implements IEvaServiceDefinition
{
  name = 'CompleteOrderInterventionTask';
  path = '/message/CompleteOrderInterventionTask';
  request?: CompleteOrderInterventionTask;
  response?: EmptyResponseMessage;
}

export class SvcCompletePrintPriceLabelTask implements IEvaServiceDefinition
{
  name = 'CompletePrintPriceLabelTask';
  path = '/message/CompletePrintPriceLabelTask';
  request?: CompletePrintPriceLabelTask;
  response?: EmptyResponseMessage;
}

export class SvcCompletePrintTask implements IEvaServiceDefinition
{
  name = 'CompletePrintTask';
  path = '/message/CompletePrintTask';
  request?: CompletePrintTask;
  response?: EmptyResponseMessage;
}

export class SvcCompleteReceiveShipment implements IEvaServiceDefinition
{
  name = 'CompleteReceiveShipment';
  path = '/message/CompleteReceiveShipment';
  request?: CompleteReceiveShipment;
  response?: EmptyResponseMessage;
}

export class SvcCompleteReservationCleanup implements IEvaServiceDefinition
{
  name = 'CompleteReservationCleanup';
  path = '/message/CompleteReservationCleanup';
  request?: CompleteReservationCleanup;
  response?: EmptyResponseMessage;
}

export class SvcCompleteReservationDeviationTask implements IEvaServiceDefinition
{
  name = 'CompleteReservationDeviationTask';
  path = '/message/CompleteReservationDeviationTask';
  request?: CompleteReservationDeviationTask;
  response?: CompleteReservationDeviationTaskResponse;
}

export class SvcCompleteReservationPickupTask implements IEvaServiceDefinition
{
  name = 'CompleteReservationPickupTask';
  path = '/message/CompleteReservationPickupTask';
  request?: CompleteReservationPickupTask;
  response?: EmptyResponseMessage;
}

export class SvcCompleteReturnToSupplierTask implements IEvaServiceDefinition
{
  name = 'CompleteReturnToSupplierTask';
  path = '/message/CompleteReturnToSupplierTask';
  request?: CompleteReturnToSupplierTask;
  response?: EmptyResponseMessage;
}

export class SvcCompleteSecondChanceProductRegistration implements IEvaServiceDefinition
{
  name = 'CompleteSecondChanceProductRegistration';
  path = '/message/CompleteSecondChanceProductRegistration';
  request?: CompleteSecondChanceProductRegistration;
  response?: CompleteSecondChanceProductRegistrationResponse;
}

export class SvcCompleteShipFromStoreTask implements IEvaServiceDefinition
{
  name = 'CompleteShipFromStoreTask';
  path = '/message/CompleteShipFromStoreTask';
  request?: CompleteShipFromStoreTask;
  response?: CompleteShipFromStoreTaskResponse;
}

export class SvcCompleteStockMovementFollowUp implements IEvaServiceDefinition
{
  name = 'CompleteStockMovementFollowUp';
  path = '/message/CompleteStockMovementFollowUp';
  request?: CompleteStockMovementFollowUp;
  response?: EmptyResponseMessage;
}

export class SvcCompleteStockReplenishment implements IEvaServiceDefinition
{
  name = 'CompleteStockReplenishment';
  path = '/message/CompleteStockReplenishment';
  request?: CompleteStockReplenishment;
  response?: EmptyResponseMessage;
}

export class SvcCompleteStockReservationTask implements IEvaServiceDefinition
{
  name = 'CompleteStockReservationTask';
  path = '/message/CompleteStockReservationTask';
  request?: CompleteStockReservationTask;
  response?: EmptyResponseMessage;
}

export class SvcCompleteZonedCycleCountPreCount implements IEvaServiceDefinition
{
  name = 'CompleteZonedCycleCountPreCount';
  path = '/message/CompleteZonedCycleCountPreCount';
  request?: CompleteZonedCycleCountPreCount;
  response?: EmptyResponseMessage;
}

export class SvcCompleteZonedCycleCounts implements IEvaServiceDefinition
{
  name = 'CompleteZonedCycleCounts';
  path = '/message/CompleteZonedCycleCounts';
  request?: CompleteZonedCycleCounts;
  response?: EmptyResponseMessage;
}

export class SvcConfirmMagicLink implements IEvaServiceDefinition
{
  name = 'ConfirmMagicLink';
  path = '/message/ConfirmMagicLink';
  request?: ConfirmMagicLink;
  response?: ConfirmMagicLinkResponse;
}

export class SvcConfirmPurchaseOrder implements IEvaServiceDefinition
{
  name = 'ConfirmPurchaseOrder';
  path = '/message/ConfirmPurchaseOrder';
  request?: ConfirmPurchaseOrder;
  response?: EmptyResponseMessage;
}

export class SvcConfirmSubscription implements IEvaServiceDefinition
{
  name = 'ConfirmSubscription';
  path = '/message/ConfirmSubscription';
  request?: ConfirmSubscription;
  response?: ConfirmSubscriptionResponse;
}

export class SvcConfirmUserEmailAddressValidation implements IEvaServiceDefinition
{
  name = 'ConfirmUserEmailAddressValidation';
  path = '/message/ConfirmUserEmailAddressValidation';
  request?: ConfirmUserEmailAddressValidation;
  response?: EmptyResponseMessage;
}

export class SvcCopyEntityTranslations implements IEvaServiceDefinition
{
  name = 'CopyEntityTranslations';
  path = '/message/CopyEntityTranslations';
  request?: CopyEntityTranslations;
  response?: EmptyResponseMessage;
}

export class SvcCountProductForInitialCycleCount implements IEvaServiceDefinition
{
  name = 'CountProductForInitialCycleCount';
  path = '/message/CountProductForInitialCycleCount';
  request?: CountProductForInitialCycleCount;
  response?: EmptyResponseMessage;
}

export class SvcCountStockLabelForZonedCycleCount implements IEvaServiceDefinition
{
  name = 'CountStockLabelForZonedCycleCount';
  path = '/message/CountStockLabelForZonedCycleCount';
  request?: CountStockLabelForZonedCycleCount;
  response?: CountStockLabelForZonedCycleCountResponse;
}

export class SvcCreateAddressBookItem implements IEvaServiceDefinition
{
  name = 'CreateAddressBookItem';
  path = '/message/CreateAddressBookItem';
  request?: CreateAddressBookItem;
  response?: CreateAddressBookItemResponse;
}

export class SvcCreateAnonymousToken implements IEvaServiceDefinition
{
  name = 'CreateAnonymousToken';
  path = '/message/CreateAnonymousToken';
  request?: CreateAnonymousToken;
  response?: CreateAnonymousTokenResponse;
}

export class SvcCreateAnonymousWishlist implements IEvaServiceDefinition
{
  name = 'CreateAnonymousWishlist';
  path = '/message/CreateAnonymousWishlist';
  request?: CreateAnonymousWishlist;
  response?: CreateAnonymousWishlistResponse;
}

export class SvcCreateApiKey implements IEvaServiceDefinition
{
  name = 'CreateApiKey';
  path = '/message/CreateApiKey';
  request?: CreateApiKey;
  response?: CreateApiKeyResponse;
}

export class SvcCreateApiUser implements IEvaServiceDefinition
{
  name = 'CreateApiUser';
  path = '/message/CreateApiUser';
  request?: CreateApiUser;
  response?: CreateApiUserResponse;
}

export class SvcCreateAppointment implements IEvaServiceDefinition
{
  name = 'CreateAppointment';
  path = '/message/CreateAppointment';
  request?: CreateAppointment;
  response?: CreateAppointmentResponse;
}

export class SvcCreateAppRule implements IEvaServiceDefinition
{
  name = 'CreateAppRule';
  path = '/message/CreateAppRule';
  request?: CreateAppRule;
  response?: CreateAppRuleResponse;
}

export class SvcCreateAuditChainConfiguration implements IEvaServiceDefinition
{
  name = 'CreateAuditChainConfiguration';
  path = '/message/CreateAuditChainConfiguration';
  request?: CreateAuditChainConfiguration;
  response?: CreateAuditChainConfigurationResponse;
}

export class SvcCreateCashCorrectionReason implements IEvaServiceDefinition
{
  name = 'CreateCashCorrectionReason';
  path = '/message/CreateCashCorrectionReason';
  request?: CreateCashCorrectionReason;
  response?: CreateCashCorrectionReasonResponse;
}

export class SvcCreateCashDeposit implements IEvaServiceDefinition
{
  name = 'CreateCashDeposit';
  path = '/message/CreateCashDeposit';
  request?: CreateCashDeposit;
  response?: CreateCashDepositResponse;
}

export class SvcCreateCashExpense implements IEvaServiceDefinition
{
  name = 'CreateCashExpense';
  path = '/message/CreateCashExpense';
  request?: CreateCashExpense;
  response?: EmptyResponseMessage;
}

export class SvcCreateCompanyForUser implements IEvaServiceDefinition
{
  name = 'CreateCompanyForUser';
  path = '/message/CreateCompanyForUser';
  request?: CreateCompanyForUser;
  response?: EmptyResponseMessage;
}

export class SvcCreateConsolidatedPickTask_Async implements IEvaServiceDefinition
{
  name = 'CreateConsolidatedPickTask_Async';
  path = '/async-message/CreateConsolidatedPickTask';
  request?: CreateConsolidatedPickTask_Async;
  response?: CreateConsolidatedPickTask_AsyncResponse;
}

export class SvcCreateConsolidatedPickTask_AsyncResult implements IEvaServiceDefinition
{
  name = 'CreateConsolidatedPickTask_AsyncResult';
  path = '/async-result/CreateConsolidatedPickTask';
  request?: CreateConsolidatedPickTask_AsyncResult;
  response?: CreateConsolidatedPickTaskResponse;
}

export class SvcCreateConsumerCompany implements IEvaServiceDefinition
{
  name = 'CreateConsumerCompany';
  path = '/message/CreateConsumerCompany';
  request?: CreateConsumerCompany;
  response?: CreateConsumerCompanyResponse;
}

export class SvcCreateCustomer implements IEvaServiceDefinition
{
  name = 'CreateCustomer';
  path = '/message/CreateCustomer';
  request?: CreateCustomer;
  response?: CreateCustomerResponse;
}

export class SvcCreateCustomerInteractionTask implements IEvaServiceDefinition
{
  name = 'CreateCustomerInteractionTask';
  path = '/message/CreateCustomerInteractionTask';
  request?: CreateCustomerInteractionTask;
  response?: CreateCustomerInteractionTaskResponse;
}

export class SvcCreateCustomerInteractionTaskType implements IEvaServiceDefinition
{
  name = 'CreateCustomerInteractionTaskType';
  path = '/message/CreateCustomerInteractionTaskType';
  request?: CreateCustomerInteractionTaskType;
  response?: CreateCustomerInteractionTaskTypeResponse;
}

export class SvcCreateCustomerReturn implements IEvaServiceDefinition
{
  name = 'CreateCustomerReturn';
  path = '/message/CreateCustomerReturn';
  request?: CreateCustomerReturn;
  response?: SimpleShoppingCartResponse;
}

export class SvcCreateCustomerReturnWithoutOrder implements IEvaServiceDefinition
{
  name = 'CreateCustomerReturnWithoutOrder';
  path = '/message/CreateCustomerReturnWithoutOrder';
  request?: CreateCustomerReturnWithoutOrder;
  response?: SimpleShoppingCartResponse;
}

export class SvcCreateCustomOrderStatus implements IEvaServiceDefinition
{
  name = 'CreateCustomOrderStatus';
  path = '/message/CreateCustomOrderStatus';
  request?: CreateCustomOrderStatus;
  response?: CreateCustomOrderStatusResponse;
}

export class SvcCreateCustomUserTask implements IEvaServiceDefinition
{
  name = 'CreateCustomUserTask';
  path = '/message/CreateCustomUserTask';
  request?: CreateCustomUserTask;
  response?: CreateCustomUserTaskResponse;
}

export class SvcCreateCustomUserTaskTemplate implements IEvaServiceDefinition
{
  name = 'CreateCustomUserTaskTemplate';
  path = '/message/CreateCustomUserTaskTemplate';
  request?: CreateCustomUserTaskTemplate;
  response?: CreateCustomUserTaskTemplateResponse;
}

export class SvcCreateCustomUserTaskType implements IEvaServiceDefinition
{
  name = 'CreateCustomUserTaskType';
  path = '/message/CreateCustomUserTaskType';
  request?: CreateCustomUserTaskType;
  response?: CreateCustomUserTaskTypeResponse;
}

export class SvcCreateCycleCountZone implements IEvaServiceDefinition
{
  name = 'CreateCycleCountZone';
  path = '/message/CreateCycleCountZone';
  request?: CreateCycleCountZone;
  response?: CreateCycleCountZoneResponse;
}

export class SvcCreateCycleCountZoneGroup implements IEvaServiceDefinition
{
  name = 'CreateCycleCountZoneGroup';
  path = '/message/CreateCycleCountZoneGroup';
  request?: CreateCycleCountZoneGroup;
  response?: CreateCycleCountZoneGroupResponse;
}

export class SvcCreateDiagnosticsBlob implements IEvaServiceDefinition
{
  name = 'CreateDiagnosticsBlob';
  path = '/message/CreateDiagnosticsBlob';
  request?: CreateDiagnosticsBlob;
  response?: CreateDiagnosticsBlobResponse;
}

export class SvcCreateEntityBlobTranslation implements IEvaServiceDefinition
{
  name = 'CreateEntityBlobTranslation';
  path = '/message/CreateEntityBlobTranslation';
  request?: CreateEntityBlobTranslation;
  response?: EmptyResponseMessage;
}

export class SvcCreateEventExportConfiguration implements IEvaServiceDefinition
{
  name = 'CreateEventExportConfiguration';
  path = '/message/CreateEventExportConfiguration';
  request?: CreateEventExportConfiguration;
  response?: CreateEventExportConfigurationResponse;
}

export class SvcCreateFlight implements IEvaServiceDefinition
{
  name = 'CreateFlight';
  path = '/message/CreateFlight';
  request?: CreateFlight;
  response?: CreateFlightResponse;
}

export class SvcCreateFullStockCount implements IEvaServiceDefinition
{
  name = 'CreateFullStockCount';
  path = '/message/CreateFullStockCount';
  request?: CreateFullStockCount;
  response?: CreateFullStockCountResponse;
}

export class SvcCreateInitialCycleCount implements IEvaServiceDefinition
{
  name = 'CreateInitialCycleCount';
  path = '/message/CreateInitialCycleCount';
  request?: CreateInitialCycleCount;
  response?: CreateInitialCycleCountResponse;
}

export class SvcCreateInStoreReturn implements IEvaServiceDefinition
{
  name = 'CreateInStoreReturn';
  path = '/message/CreateInStoreReturn';
  request?: CreateInStoreReturn;
  response?: CreateInStoreReturnResponse;
}

export class SvcCreateInterbranchOrder implements IEvaServiceDefinition
{
  name = 'CreateInterbranchOrder';
  path = '/message/CreateInterbranchOrder';
  request?: CreateInterbranchOrder;
  response?: EmptyResponseMessage;
}

export class SvcCreateInvoice implements IEvaServiceDefinition
{
  name = 'CreateInvoice';
  path = '/message/CreateInvoice';
  request?: CreateInvoice;
  response?: CreateInvoiceResponse;
}

export class SvcCreateInvoiceAdditionalAmount implements IEvaServiceDefinition
{
  name = 'CreateInvoiceAdditionalAmount';
  path = '/message/CreateInvoiceAdditionalAmount';
  request?: CreateInvoiceAdditionalAmount;
  response?: CreateInvoiceAdditionalAmountResponse;
}

export class SvcCreateInvoiceAdditionalAmountType implements IEvaServiceDefinition
{
  name = 'CreateInvoiceAdditionalAmountType';
  path = '/message/CreateInvoiceAdditionalAmountType';
  request?: CreateInvoiceAdditionalAmountType;
  response?: CreateInvoiceAdditionalAmountTypeResponse;
}

export class SvcCreateInvoiceDispute implements IEvaServiceDefinition
{
  name = 'CreateInvoiceDispute';
  path = '/message/CreateInvoiceDispute';
  request?: CreateInvoiceDispute;
  response?: CreateInvoiceDisputeResponse;
}

export class SvcCreateInvoiceDisputeReason implements IEvaServiceDefinition
{
  name = 'CreateInvoiceDisputeReason';
  path = '/message/CreateInvoiceDisputeReason';
  request?: CreateInvoiceDisputeReason;
  response?: CreateInvoiceDisputeReasonResponse;
}

export class SvcCreateInvoiceDisputeResolveAction implements IEvaServiceDefinition
{
  name = 'CreateInvoiceDisputeResolveAction';
  path = '/message/CreateInvoiceDisputeResolveAction';
  request?: CreateInvoiceDisputeResolveAction;
  response?: CreateInvoiceDisputeResolveActionResponse;
}

export class SvcCreateInvoicedOrderLineCorrection implements IEvaServiceDefinition
{
  name = 'CreateInvoicedOrderLineCorrection';
  path = '/message/CreateInvoicedOrderLineCorrection';
  request?: CreateInvoicedOrderLineCorrection;
  response?: EmptyResponseMessage;
}

export class SvcCreateInvoiceLines implements IEvaServiceDefinition
{
  name = 'CreateInvoiceLines';
  path = '/message/CreateInvoiceLines';
  request?: CreateInvoiceLines;
  response?: EmptyResponseMessage;
}

export class SvcCreateInvoicePayment implements IEvaServiceDefinition
{
  name = 'CreateInvoicePayment';
  path = '/message/CreateInvoicePayment';
  request?: CreateInvoicePayment;
  response?: EmptyResponseMessage;
}

export class SvcCreateInvoicesForOrder implements IEvaServiceDefinition
{
  name = 'CreateInvoicesForOrder';
  path = '/message/CreateInvoicesForOrder';
  request?: CreateInvoicesForOrder;
  response?: CreateInvoicesForOrderResponse;
}

export class SvcCreateManualInvoice implements IEvaServiceDefinition
{
  name = 'CreateManualInvoice';
  path = '/message/CreateManualInvoice';
  request?: CreateManualInvoice;
  response?: CreateManualInvoiceResponse;
}

export class SvcCreateManualTaxExemptionReason implements IEvaServiceDefinition
{
  name = 'CreateManualTaxExemptionReason';
  path = '/message/CreateManualTaxExemptionReason';
  request?: CreateManualTaxExemptionReason;
  response?: CreateManualTaxExemptionReasonResponse;
}

export class SvcCreateOfferFromOrder implements IEvaServiceDefinition
{
  name = 'CreateOfferFromOrder';
  path = '/message/CreateOfferFromOrder';
  request?: CreateOfferFromOrder;
  response?: EmptyResponseMessage;
}

export class SvcCreateOpeningHoursTemplate implements IEvaServiceDefinition
{
  name = 'CreateOpeningHoursTemplate';
  path = '/message/CreateOpeningHoursTemplate';
  request?: CreateOpeningHoursTemplate;
  response?: CreateOpeningHoursTemplateResponse;
}

export class SvcCreateOperationalTaskConfig implements IEvaServiceDefinition
{
  name = 'CreateOperationalTaskConfig';
  path = '/message/CreateOperationalTaskConfig';
  request?: CreateOperationalTaskConfig;
  response?: CreateOperationalTaskConfigResponse;
}

export class SvcCreateOrder implements IEvaServiceDefinition
{
  name = 'CreateOrder';
  path = '/message/CreateOrder';
  request?: CreateOrder;
  response?: CreateOrderResponse;
}

export class SvcCreateOrderAppToken implements IEvaServiceDefinition
{
  name = 'CreateOrderAppToken';
  path = '/message/CreateOrderAppToken';
  request?: CreateOrderAppToken;
  response?: CreateOrderAppTokenResponse;
}

export class SvcCreateOrderCustomStatus implements IEvaServiceDefinition
{
  name = 'CreateOrderCustomStatus';
  path = '/message/CreateOrderCustomStatus';
  request?: CreateOrderCustomStatus;
  response?: CreateOrderCustomStatusResponse;
}

export class SvcCreateOrderCustomType implements IEvaServiceDefinition
{
  name = 'CreateOrderCustomType';
  path = '/message/CreateOrderCustomType';
  request?: CreateOrderCustomType;
  response?: CreateOrderCustomTypeResponse;
}

export class SvcCreateOrderFromAppointment implements IEvaServiceDefinition
{
  name = 'CreateOrderFromAppointment';
  path = '/message/CreateOrderFromAppointment';
  request?: CreateOrderFromAppointment;
  response?: CreateOrderFromAppointmentResponse;
}

export class SvcCreateOrderFromOffer implements IEvaServiceDefinition
{
  name = 'CreateOrderFromOffer';
  path = '/message/CreateOrderFromOffer';
  request?: CreateOrderFromOffer;
  response?: CreateOrderFromOfferResponse;
}

export class SvcCreateOrderLedger implements IEvaServiceDefinition
{
  name = 'CreateOrderLedger';
  path = '/message/CreateOrderLedger';
  request?: CreateOrderLedger;
  response?: EmptyResponseMessage;
}

export class SvcCreateOrderLineUnitPriceCorrection implements IEvaServiceDefinition
{
  name = 'CreateOrderLineUnitPriceCorrection';
  path = '/message/CreateOrderLineUnitPriceCorrection';
  request?: CreateOrderLineUnitPriceCorrection;
  response?: EmptyResponseMessage;
}

export class SvcCreateOrderLink implements IEvaServiceDefinition
{
  name = 'CreateOrderLink';
  path = '/message/CreateOrderLink';
  request?: CreateOrderLink;
  response?: CreateOrderLinkResponse;
}

export class SvcCreateOrderLinkType implements IEvaServiceDefinition
{
  name = 'CreateOrderLinkType';
  path = '/message/CreateOrderLinkType';
  request?: CreateOrderLinkType;
  response?: CreateOrderLinkTypeResponse;
}

export class SvcCreateOrderVerificationReason implements IEvaServiceDefinition
{
  name = 'CreateOrderVerificationReason';
  path = '/message/CreateOrderVerificationReason';
  request?: CreateOrderVerificationReason;
  response?: CreateOrderVerificationReasonResponse;
}

export class SvcCreateOrganizationUnit implements IEvaServiceDefinition
{
  name = 'CreateOrganizationUnit';
  path = '/message/CreateOrganizationUnit';
  request?: CreateOrganizationUnit;
  response?: CreateOrganizationUnitResponse;
}

export class SvcCreateOrganizationUnitSupplier implements IEvaServiceDefinition
{
  name = 'CreateOrganizationUnitSupplier';
  path = '/message/CreateOrganizationUnitSupplier';
  request?: CreateOrganizationUnitSupplier;
  response?: CreateOrganizationUnitSupplierResponse;
}

export class SvcCreateOrUpdateInvoiceCompanyMapping implements IEvaServiceDefinition
{
  name = 'CreateOrUpdateInvoiceCompanyMapping';
  path = '/message/CreateOrUpdateInvoiceCompanyMapping';
  request?: CreateOrUpdateInvoiceCompanyMapping;
  response?: CreateOrUpdateInvoiceCompanyMappingResponse;
}

export class SvcCreatePasskey implements IEvaServiceDefinition
{
  name = 'CreatePasskey';
  path = '/message/CreatePasskey';
  request?: CreatePasskey;
  response?: EmptyResponseMessage;
}

export class SvcCreatePayment implements IEvaServiceDefinition
{
  name = 'CreatePayment';
  path = '/message/CreatePayment';
  request?: CreatePayment;
  response?: CreatePaymentResponse;
}

export class SvcCreatePaymentTransactionLedger implements IEvaServiceDefinition
{
  name = 'CreatePaymentTransactionLedger';
  path = '/message/CreatePaymentTransactionLedger';
  request?: CreatePaymentTransactionLedger;
  response?: EmptyResponseMessage;
}

export class SvcCreatePrintPriceLabelTask implements IEvaServiceDefinition
{
  name = 'CreatePrintPriceLabelTask';
  path = '/message/CreatePrintPriceLabelTask';
  request?: CreatePrintPriceLabelTask;
  response?: CreatePrintPriceLabelTaskResponse;
}

export class SvcCreatePrintTask implements IEvaServiceDefinition
{
  name = 'CreatePrintTask';
  path = '/message/CreatePrintTask';
  request?: CreatePrintTask;
  response?: CreatePrintTaskResponse;
}

export class SvcCreateProductBundle implements IEvaServiceDefinition
{
  name = 'CreateProductBundle';
  path = '/message/CreateProductBundle';
  request?: CreateProductBundle;
  response?: CreateProductBundleResponse;
}

export class SvcCreateProductRecommendation implements IEvaServiceDefinition
{
  name = 'CreateProductRecommendation';
  path = '/message/CreateProductRecommendation';
  request?: CreateProductRecommendation;
  response?: CreateProductRecommendationResponse;
}

export class SvcCreateProductStructure implements IEvaServiceDefinition
{
  name = 'CreateProductStructure';
  path = '/message/CreateProductStructure';
  request?: CreateProductStructure;
  response?: CreateProductStructureResponse;
}

export class SvcCreateProductZone implements IEvaServiceDefinition
{
  name = 'CreateProductZone';
  path = '/message/CreateProductZone';
  request?: CreateProductZone;
  response?: CreateProductZoneResponse;
}

export class SvcCreateProductZoneGroup implements IEvaServiceDefinition
{
  name = 'CreateProductZoneGroup';
  path = '/message/CreateProductZoneGroup';
  request?: CreateProductZoneGroup;
  response?: CreateProductZoneGroupResponse;
}

export class SvcCreatePurchaseOrder implements IEvaServiceDefinition
{
  name = 'CreatePurchaseOrder';
  path = '/message/CreatePurchaseOrder';
  request?: CreatePurchaseOrder;
  response?: CreatePurchaseOrderResponse;
}

export class SvcCreatePurchaseOrderLineUnitPriceCorrection implements IEvaServiceDefinition
{
  name = 'CreatePurchaseOrderLineUnitPriceCorrection';
  path = '/message/CreatePurchaseOrderLineUnitPriceCorrection';
  request?: CreatePurchaseOrderLineUnitPriceCorrection;
  response?: CreatePurchaseOrderLineUnitPriceCorrectionResponse;
}

export class SvcCreateQuickBuy implements IEvaServiceDefinition
{
  name = 'CreateQuickBuy';
  path = '/message/CreateQuickBuy';
  request?: CreateQuickBuy;
  response?: CreateQuickBuyResponse;
}

export class SvcCreateRecurringTask implements IEvaServiceDefinition
{
  name = 'CreateRecurringTask';
  path = '/message/CreateRecurringTask';
  request?: CreateRecurringTask;
  response?: EmptyResponseMessage;
}

export class SvcCreateRefund implements IEvaServiceDefinition
{
  name = 'CreateRefund';
  path = '/message/CreateRefund';
  request?: CreateRefund;
  response?: CreateRefundResponse;
}

export class SvcCreateRepair implements IEvaServiceDefinition
{
  name = 'CreateRepair';
  path = '/message/CreateRepair';
  request?: CreateRepair;
  response?: CreateRepairResponse;
}

export class SvcCreateRepairInteraction implements IEvaServiceDefinition
{
  name = 'CreateRepairInteraction';
  path = '/message/CreateRepairInteraction';
  request?: CreateRepairInteraction;
  response?: CreateRepairInteractionResponse;
}

export class SvcCreateReturnToSupplierOrder implements IEvaServiceDefinition
{
  name = 'CreateReturnToSupplierOrder';
  path = '/message/CreateReturnToSupplierOrder';
  request?: CreateReturnToSupplierOrder;
  response?: EmptyResponseMessage;
}

export class SvcCreateReturnToSupplierRequest implements IEvaServiceDefinition
{
  name = 'CreateReturnToSupplierRequest';
  path = '/message/CreateReturnToSupplierRequest';
  request?: CreateReturnToSupplierRequest;
  response?: CreateReturnToSupplierRequestResponse;
}

export class SvcCreateScript implements IEvaServiceDefinition
{
  name = 'CreateScript';
  path = '/message/CreateScript';
  request?: CreateScript;
  response?: CreateScriptResponse;
}

export class SvcCreateSerialNumber implements IEvaServiceDefinition
{
  name = 'CreateSerialNumber';
  path = '/message/CreateSerialNumber';
  request?: CreateSerialNumber;
  response?: CreateSerialNumberResponse;
}

export class SvcCreateSerialNumberConfiguration implements IEvaServiceDefinition
{
  name = 'CreateSerialNumberConfiguration';
  path = '/message/CreateSerialNumberConfiguration';
  request?: CreateSerialNumberConfiguration;
  response?: CreateSerialNumberConfigurationResponse;
}

export class SvcCreateSerialNumberProduct implements IEvaServiceDefinition
{
  name = 'CreateSerialNumberProduct';
  path = '/message/CreateSerialNumberProduct';
  request?: CreateSerialNumberProduct;
  response?: EmptyResponseMessage;
}

export class SvcCreateSerialNumberRegistrationReason implements IEvaServiceDefinition
{
  name = 'CreateSerialNumberRegistrationReason';
  path = '/message/CreateSerialNumberRegistrationReason';
  request?: CreateSerialNumberRegistrationReason;
  response?: CreateSerialNumberRegistrationReasonResponse;
}

export class SvcCreateShipment implements IEvaServiceDefinition
{
  name = 'CreateShipment';
  path = '/message/CreateShipment';
  request?: CreateShipment;
  response?: CreateShipmentResponse;
}

export class SvcCreateShipmentIdentifier implements IEvaServiceDefinition
{
  name = 'CreateShipmentIdentifier';
  path = '/message/CreateShipmentIdentifier';
  request?: CreateShipmentIdentifier;
  response?: CreateShipmentIdentifierResponse;
}

export class SvcCreateShipmentReceipt implements IEvaServiceDefinition
{
  name = 'CreateShipmentReceipt';
  path = '/message/CreateShipmentReceipt';
  request?: CreateShipmentReceipt;
  response?: CreateShipmentReceiptResponse;
}

export class SvcCreateStockMutations implements IEvaServiceDefinition
{
  name = 'CreateStockMutations';
  path = '/message/CreateStockMutations';
  request?: CreateStockMutations;
  response?: EmptyResponseMessage;
}

export class SvcCreateStockNotification implements IEvaServiceDefinition
{
  name = 'CreateStockNotification';
  path = '/message/CreateStockNotification';
  request?: CreateStockNotification;
  response?: StockNotificationResponse;
}

export class SvcCreateStockNotificationForCurrentUser implements IEvaServiceDefinition
{
  name = 'CreateStockNotificationForCurrentUser';
  path = '/message/CreateStockNotificationForCurrentUser';
  request?: CreateStockNotificationForCurrentUser;
  response?: StockNotificationResponse;
}

export class SvcCreateStockReplenishmentTask implements IEvaServiceDefinition
{
  name = 'CreateStockReplenishmentTask';
  path = '/message/CreateStockReplenishmentTask';
  request?: CreateStockReplenishmentTask;
  response?: EmptyResponseMessage;
}

export class SvcCreateStockReplenishmentTasks implements IEvaServiceDefinition
{
  name = 'CreateStockReplenishmentTasks';
  path = '/message/CreateStockReplenishmentTasks';
  request?: CreateStockReplenishmentTasks;
  response?: EmptyResponseMessage;
}

export class SvcCreateTaxCode implements IEvaServiceDefinition
{
  name = 'CreateTaxCode';
  path = '/message/CreateTaxCode';
  request?: CreateTaxCode;
  response?: CreateTaxCodeResponse;
}

export class SvcCreateTaxCodeMapping implements IEvaServiceDefinition
{
  name = 'CreateTaxCodeMapping';
  path = '/message/CreateTaxCodeMapping';
  request?: CreateTaxCodeMapping;
  response?: CreateTaxCodeMappingResponse;
}

export class SvcCreateTaxProvider implements IEvaServiceDefinition
{
  name = 'CreateTaxProvider';
  path = '/message/CreateTaxProvider';
  request?: CreateTaxProvider;
  response?: CreateTaxProviderResponse;
}

export class SvcCreateTaxRate implements IEvaServiceDefinition
{
  name = 'CreateTaxRate';
  path = '/message/CreateTaxRate';
  request?: CreateTaxRate;
  response?: CreateTaxRateResponse;
}

export class SvcCreateUserAssociation implements IEvaServiceDefinition
{
  name = 'CreateUserAssociation';
  path = '/message/CreateUserAssociation';
  request?: CreateUserAssociation;
  response?: CreateUserAssociationResponse;
}

export class SvcCreateUserAssociationType implements IEvaServiceDefinition
{
  name = 'CreateUserAssociationType';
  path = '/message/CreateUserAssociationType';
  request?: CreateUserAssociationType;
  response?: CreateUserAssociationTypeResponse;
}

export class SvcCreateUserGroup implements IEvaServiceDefinition
{
  name = 'CreateUserGroup';
  path = '/message/CreateUserGroup';
  request?: CreateUserGroup;
  response?: CreateUserGroupResponse;
}

export class SvcCreateUserInteraction implements IEvaServiceDefinition
{
  name = 'CreateUserInteraction';
  path = '/message/CreateUserInteraction';
  request?: CreateUserInteraction;
  response?: CreateUserInteractionResponse;
}

export class SvcCreateUserPhoneNumber implements IEvaServiceDefinition
{
  name = 'CreateUserPhoneNumber';
  path = '/message/CreateUserPhoneNumber';
  request?: CreateUserPhoneNumber;
  response?: CreateUserPhoneNumberResponse;
}

export class SvcCreateUserTaskNotCompletedReason implements IEvaServiceDefinition
{
  name = 'CreateUserTaskNotCompletedReason';
  path = '/message/CreateUserTaskNotCompletedReason';
  request?: CreateUserTaskNotCompletedReason;
  response?: CreateUserTaskNotCompletedReasonResponse;
}

export class SvcCreateUserTaskPriority implements IEvaServiceDefinition
{
  name = 'CreateUserTaskPriority';
  path = '/message/CreateUserTaskPriority';
  request?: CreateUserTaskPriority;
  response?: CreateUserTaskPriorityResponse;
}

export class SvcCreateUserTaskTypeOrganizationUnitSet implements IEvaServiceDefinition
{
  name = 'CreateUserTaskTypeOrganizationUnitSet';
  path = '/message/CreateUserTaskTypeOrganizationUnitSet';
  request?: CreateUserTaskTypeOrganizationUnitSet;
  response?: UserTaskTypeOrganizationUnitSetResponse;
}

export class SvcCreateUserWishlist implements IEvaServiceDefinition
{
  name = 'CreateUserWishlist';
  path = '/message/CreateUserWishlist';
  request?: CreateUserWishlist;
  response?: CreateUserWishlistResponse;
}

export class SvcCreateZonedCycleCount implements IEvaServiceDefinition
{
  name = 'CreateZonedCycleCount';
  path = '/message/CreateZonedCycleCount';
  request?: CreateZonedCycleCount;
  response?: CreateZonedCycleCountResponse;
}

export class SvcCreateZonedCycleCounts implements IEvaServiceDefinition
{
  name = 'CreateZonedCycleCounts';
  path = '/message/CreateZonedCycleCounts';
  request?: CreateZonedCycleCounts;
  response?: CreateZonedCycleCountsResponse;
}

export class SvcCreateZonedCycleCounts_Async implements IEvaServiceDefinition
{
  name = 'CreateZonedCycleCounts_Async';
  path = '/async-message/CreateZonedCycleCounts';
  request?: CreateZonedCycleCounts_Async;
  response?: CreateZonedCycleCounts_AsyncResponse;
}

export class SvcCreateZonedCycleCounts_AsyncResult implements IEvaServiceDefinition
{
  name = 'CreateZonedCycleCounts_AsyncResult';
  path = '/async-result/CreateZonedCycleCounts';
  request?: CreateZonedCycleCounts_AsyncResult;
  response?: CreateZonedCycleCountsResponse;
}

export class SvcCreateZonedCycleCountsByQuery implements IEvaServiceDefinition
{
  name = 'CreateZonedCycleCountsByQuery';
  path = '/message/CreateZonedCycleCountsByQuery';
  request?: CreateZonedCycleCountsByQuery;
  response?: CreateZonedCycleCountsByQueryResponse;
}

export class SvcCreateZonedCycleCountsByQuery_Async implements IEvaServiceDefinition
{
  name = 'CreateZonedCycleCountsByQuery_Async';
  path = '/async-message/CreateZonedCycleCountsByQuery';
  request?: CreateZonedCycleCountsByQuery_Async;
  response?: CreateZonedCycleCountsByQuery_AsyncResponse;
}

export class SvcCreateZonedCycleCountsByQuery_AsyncResult implements IEvaServiceDefinition
{
  name = 'CreateZonedCycleCountsByQuery_AsyncResult';
  path = '/async-result/CreateZonedCycleCountsByQuery';
  request?: CreateZonedCycleCountsByQuery_AsyncResult;
  response?: CreateZonedCycleCountsByQueryResponse;
}

export class SvcCreateZonedCycleCountSchedule implements IEvaServiceDefinition
{
  name = 'CreateZonedCycleCountSchedule';
  path = '/message/CreateZonedCycleCountSchedule';
  request?: CreateZonedCycleCountSchedule;
  response?: CreateZonedCycleCountScheduleResponse;
}

export class SvcCustomerAddBlobToCase implements IEvaServiceDefinition
{
  name = 'CustomerAddBlobToCase';
  path = '/message/CustomerAddBlobToCase';
  request?: CustomerAddBlobToCase;
  response?: EmptyResponseMessage;
}

export class SvcCustomerAddBlobToCaseInteraction implements IEvaServiceDefinition
{
  name = 'CustomerAddBlobToCaseInteraction';
  path = '/message/CustomerAddBlobToCaseInteraction';
  request?: CustomerAddBlobToCaseInteraction;
  response?: EmptyResponseMessage;
}

export class SvcCustomerCreateCase implements IEvaServiceDefinition
{
  name = 'CustomerCreateCase';
  path = '/message/CustomerCreateCase';
  request?: CustomerCreateCase;
  response?: CustomerCreateCaseResponse;
}

export class SvcCustomerCreateCaseInteraction implements IEvaServiceDefinition
{
  name = 'CustomerCreateCaseInteraction';
  path = '/message/CustomerCreateCaseInteraction';
  request?: CustomerCreateCaseInteraction;
  response?: CustomerCreateCaseInteractionResponse;
}

export class SvcCustomerDeleteCaseInteraction implements IEvaServiceDefinition
{
  name = 'CustomerDeleteCaseInteraction';
  path = '/message/CustomerDeleteCaseInteraction';
  request?: CustomerDeleteCaseInteraction;
  response?: EmptyResponseMessage;
}

export class SvcCustomerGetCaseByID implements IEvaServiceDefinition
{
  name = 'CustomerGetCaseByID';
  path = '/message/CustomerGetCaseByID';
  request?: CustomerGetCaseByID;
  response?: CustomerGetCaseByIDResponse;
}

export class SvcCustomerGetCaseInteraction implements IEvaServiceDefinition
{
  name = 'CustomerGetCaseInteraction';
  path = '/message/CustomerGetCaseInteraction';
  request?: CustomerGetCaseInteraction;
  response?: CustomerGetCaseInteractionResponse;
}

export class SvcCustomerListCaseInteractions implements IEvaServiceDefinition
{
  name = 'CustomerListCaseInteractions';
  path = '/message/CustomerListCaseInteractions';
  request?: CustomerListCaseInteractions;
  response?: CustomerListCaseInteractionsResponse;
}

export class SvcCustomerListCases implements IEvaServiceDefinition
{
  name = 'CustomerListCases';
  path = '/message/CustomerListCases';
  request?: CustomerListCases;
  response?: CustomerListCasesResponse;
}

export class SvcCustomerRemoveCaseBlob implements IEvaServiceDefinition
{
  name = 'CustomerRemoveCaseBlob';
  path = '/message/CustomerRemoveCaseBlob';
  request?: CustomerRemoveCaseBlob;
  response?: EmptyResponseMessage;
}

export class SvcCustomerRemoveCaseInteractionBlob implements IEvaServiceDefinition
{
  name = 'CustomerRemoveCaseInteractionBlob';
  path = '/message/CustomerRemoveCaseInteractionBlob';
  request?: CustomerRemoveCaseInteractionBlob;
  response?: EmptyResponseMessage;
}

export class SvcCustomerUpdateCase implements IEvaServiceDefinition
{
  name = 'CustomerUpdateCase';
  path = '/message/CustomerUpdateCase';
  request?: CustomerUpdateCase;
  response?: EmptyResponseMessage;
}

export class SvcCustomerUpdateCaseInteraction implements IEvaServiceDefinition
{
  name = 'CustomerUpdateCaseInteraction';
  path = '/message/CustomerUpdateCaseInteraction';
  request?: CustomerUpdateCaseInteraction;
  response?: EmptyResponseMessage;
}

export class SvcDeactivateAllUserTasks implements IEvaServiceDefinition
{
  name = 'DeactivateAllUserTasks';
  path = '/message/DeactivateAllUserTasks';
  request?: DeactivateAllUserTasks;
  response?: EmptyResponseMessage;
}

export class SvcDeactivateUserTask implements IEvaServiceDefinition
{
  name = 'DeactivateUserTask';
  path = '/message/DeactivateUserTask';
  request?: DeactivateUserTask;
  response?: EmptyResponseMessage;
}

export class SvcDeactivateZonedCycleCount implements IEvaServiceDefinition
{
  name = 'DeactivateZonedCycleCount';
  path = '/message/DeactivateZonedCycleCount';
  request?: DeactivateZonedCycleCount;
  response?: EmptyResponseMessage;
}

export class SvcDeleteAddressBookItem implements IEvaServiceDefinition
{
  name = 'DeleteAddressBookItem';
  path = '/message/DeleteAddressBookItem';
  request?: DeleteAddressBookItem;
  response?: EmptyResponseMessage;
}

export class SvcDeleteAnonymousToken implements IEvaServiceDefinition
{
  name = 'DeleteAnonymousToken';
  path = '/message/DeleteAnonymousToken';
  request?: DeleteAnonymousToken;
  response?: EmptyResponseMessage;
}

export class SvcDeleteAnonymousWishlist implements IEvaServiceDefinition
{
  name = 'DeleteAnonymousWishlist';
  path = '/message/DeleteAnonymousWishlist';
  request?: DeleteAnonymousWishlist;
  response?: EmptyResponseMessage;
}

export class SvcDeleteApiKey implements IEvaServiceDefinition
{
  name = 'DeleteApiKey';
  path = '/message/DeleteApiKey';
  request?: DeleteApiKey;
  response?: EmptyResponseMessage;
}

export class SvcDeleteAppointment implements IEvaServiceDefinition
{
  name = 'DeleteAppointment';
  path = '/message/DeleteAppointment';
  request?: DeleteAppointment;
  response?: EmptyResponseMessage;
}

export class SvcDeleteAppRule implements IEvaServiceDefinition
{
  name = 'DeleteAppRule';
  path = '/message/DeleteAppRule';
  request?: DeleteAppRule;
  response?: EmptyResponseMessage;
}

export class SvcDeleteAuditChainConfiguration implements IEvaServiceDefinition
{
  name = 'DeleteAuditChainConfiguration';
  path = '/message/DeleteAuditChainConfiguration';
  request?: DeleteAuditChainConfiguration;
  response?: EmptyResponseMessage;
}

export class SvcDeleteCashCorrectionReason implements IEvaServiceDefinition
{
  name = 'DeleteCashCorrectionReason';
  path = '/message/DeleteCashCorrectionReason';
  request?: DeleteCashCorrectionReason;
  response?: EmptyResponseMessage;
}

export class SvcDeleteCashDeposit implements IEvaServiceDefinition
{
  name = 'DeleteCashDeposit';
  path = '/message/DeleteCashDeposit';
  request?: DeleteCashDeposit;
  response?: EmptyResponseMessage;
}

export class SvcDeleteCashExpense implements IEvaServiceDefinition
{
  name = 'DeleteCashExpense';
  path = '/message/DeleteCashExpense';
  request?: DeleteCashExpense;
  response?: EmptyResponseMessage;
}

export class SvcDeleteConsumerCompany implements IEvaServiceDefinition
{
  name = 'DeleteConsumerCompany';
  path = '/message/DeleteConsumerCompany';
  request?: DeleteConsumerCompany;
  response?: EmptyResponseMessage;
}

export class SvcDeleteCustomerInteractionTask implements IEvaServiceDefinition
{
  name = 'DeleteCustomerInteractionTask';
  path = '/message/DeleteCustomerInteractionTask';
  request?: DeleteCustomerInteractionTask;
  response?: EmptyResponseMessage;
}

export class SvcDeleteCustomerInteractionTaskType implements IEvaServiceDefinition
{
  name = 'DeleteCustomerInteractionTaskType';
  path = '/message/DeleteCustomerInteractionTaskType';
  request?: DeleteCustomerInteractionTaskType;
  response?: EmptyResponseMessage;
}

export class SvcDeleteCustomOrderStatus implements IEvaServiceDefinition
{
  name = 'DeleteCustomOrderStatus';
  path = '/message/DeleteCustomOrderStatus';
  request?: DeleteCustomOrderStatus;
  response?: EmptyResponseMessage;
}

export class SvcDeleteCustomUserTaskTemplate implements IEvaServiceDefinition
{
  name = 'DeleteCustomUserTaskTemplate';
  path = '/message/DeleteCustomUserTaskTemplate';
  request?: DeleteCustomUserTaskTemplate;
  response?: EmptyResponseMessage;
}

export class SvcDeleteCycleCountZone implements IEvaServiceDefinition
{
  name = 'DeleteCycleCountZone';
  path = '/message/DeleteCycleCountZone';
  request?: DeleteCycleCountZone;
  response?: EmptyResponseMessage;
}

export class SvcDeleteCycleCountZoneGroup implements IEvaServiceDefinition
{
  name = 'DeleteCycleCountZoneGroup';
  path = '/message/DeleteCycleCountZoneGroup';
  request?: DeleteCycleCountZoneGroup;
  response?: EmptyResponseMessage;
}

export class SvcDeleteEntityBlobTranslation implements IEvaServiceDefinition
{
  name = 'DeleteEntityBlobTranslation';
  path = '/message/DeleteEntityBlobTranslation';
  request?: DeleteEntityBlobTranslation;
  response?: EmptyResponseMessage;
}

export class SvcDeleteEntityTranslation implements IEvaServiceDefinition
{
  name = 'DeleteEntityTranslation';
  path = '/message/DeleteEntityTranslation';
  request?: DeleteEntityTranslation;
  response?: EmptyResponseMessage;
}

export class SvcDeleteEventExportConfiguration implements IEvaServiceDefinition
{
  name = 'DeleteEventExportConfiguration';
  path = '/message/DeleteEventExportConfiguration';
  request?: DeleteEventExportConfiguration;
  response?: EmptyResponseMessage;
}

export class SvcDeleteFlight implements IEvaServiceDefinition
{
  name = 'DeleteFlight';
  path = '/message/DeleteFlight';
  request?: DeleteFlight;
  response?: EmptyResponseMessage;
}

export class SvcDeleteInitialCycleCountResult implements IEvaServiceDefinition
{
  name = 'DeleteInitialCycleCountResult';
  path = '/message/DeleteInitialCycleCountResult';
  request?: DeleteInitialCycleCountResult;
  response?: EmptyResponseMessage;
}

export class SvcDeleteInvoice implements IEvaServiceDefinition
{
  name = 'DeleteInvoice';
  path = '/message/DeleteInvoice';
  request?: DeleteInvoice;
  response?: EmptyResponseMessage;
}

export class SvcDeleteInvoiceAdditionalAmount implements IEvaServiceDefinition
{
  name = 'DeleteInvoiceAdditionalAmount';
  path = '/message/DeleteInvoiceAdditionalAmount';
  request?: DeleteInvoiceAdditionalAmount;
  response?: EmptyResponseMessage;
}

export class SvcDeleteInvoiceAdditionalAmountType implements IEvaServiceDefinition
{
  name = 'DeleteInvoiceAdditionalAmountType';
  path = '/message/DeleteInvoiceAdditionalAmountType';
  request?: DeleteInvoiceAdditionalAmountType;
  response?: EmptyResponseMessage;
}

export class SvcDeleteInvoiceBlob implements IEvaServiceDefinition
{
  name = 'DeleteInvoiceBlob';
  path = '/message/DeleteInvoiceBlob';
  request?: DeleteInvoiceBlob;
  response?: EmptyResponseMessage;
}

export class SvcDeleteInvoiceCompanyMapping implements IEvaServiceDefinition
{
  name = 'DeleteInvoiceCompanyMapping';
  path = '/message/DeleteInvoiceCompanyMapping';
  request?: DeleteInvoiceCompanyMapping;
  response?: EmptyResponseMessage;
}

export class SvcDeleteInvoiceDispute implements IEvaServiceDefinition
{
  name = 'DeleteInvoiceDispute';
  path = '/message/DeleteInvoiceDispute';
  request?: DeleteInvoiceDispute;
  response?: EmptyResponseMessage;
}

export class SvcDeleteInvoiceDisputeReason implements IEvaServiceDefinition
{
  name = 'DeleteInvoiceDisputeReason';
  path = '/message/DeleteInvoiceDisputeReason';
  request?: DeleteInvoiceDisputeReason;
  response?: EmptyResponseMessage;
}

export class SvcDeleteInvoiceDisputeResolveAction implements IEvaServiceDefinition
{
  name = 'DeleteInvoiceDisputeResolveAction';
  path = '/message/DeleteInvoiceDisputeResolveAction';
  request?: DeleteInvoiceDisputeResolveAction;
  response?: EmptyResponseMessage;
}

export class SvcDeleteManualTaxExemptionReason implements IEvaServiceDefinition
{
  name = 'DeleteManualTaxExemptionReason';
  path = '/message/DeleteManualTaxExemptionReason';
  request?: DeleteManualTaxExemptionReason;
  response?: EmptyResponseMessage;
}

export class SvcDeleteManualTaxExemptionReasonLine implements IEvaServiceDefinition
{
  name = 'DeleteManualTaxExemptionReasonLine';
  path = '/message/DeleteManualTaxExemptionReasonLine';
  request?: DeleteManualTaxExemptionReasonLine;
  response?: EmptyResponseMessage;
}

export class SvcDeleteOpeningHoursTemplate implements IEvaServiceDefinition
{
  name = 'DeleteOpeningHoursTemplate';
  path = '/message/DeleteOpeningHoursTemplate';
  request?: DeleteOpeningHoursTemplate;
  response?: EmptyResponseMessage;
}

export class SvcDeleteOperationalTaskConfig implements IEvaServiceDefinition
{
  name = 'DeleteOperationalTaskConfig';
  path = '/message/DeleteOperationalTaskConfig';
  request?: DeleteOperationalTaskConfig;
  response?: EmptyResponseMessage;
}

export class SvcDeleteOrderCustomStatus implements IEvaServiceDefinition
{
  name = 'DeleteOrderCustomStatus';
  path = '/message/DeleteOrderCustomStatus';
  request?: DeleteOrderCustomStatus;
  response?: EmptyResponseMessage;
}

export class SvcDeleteOrderCustomType implements IEvaServiceDefinition
{
  name = 'DeleteOrderCustomType';
  path = '/message/DeleteOrderCustomType';
  request?: DeleteOrderCustomType;
  response?: EmptyResponseMessage;
}

export class SvcDeleteOrderLink implements IEvaServiceDefinition
{
  name = 'DeleteOrderLink';
  path = '/message/DeleteOrderLink';
  request?: DeleteOrderLink;
  response?: EmptyResponseMessage;
}

export class SvcDeleteOrderLinkType implements IEvaServiceDefinition
{
  name = 'DeleteOrderLinkType';
  path = '/message/DeleteOrderLinkType';
  request?: DeleteOrderLinkType;
  response?: EmptyResponseMessage;
}

export class SvcDeleteOrderVerificationReason implements IEvaServiceDefinition
{
  name = 'DeleteOrderVerificationReason';
  path = '/message/DeleteOrderVerificationReason';
  request?: DeleteOrderVerificationReason;
  response?: EmptyResponseMessage;
}

export class SvcDeleteOrganizationUnit implements IEvaServiceDefinition
{
  name = 'DeleteOrganizationUnit';
  path = '/message/DeleteOrganizationUnit';
  request?: DeleteOrganizationUnit;
  response?: EmptyResponseMessage;
}

export class SvcDeleteOrganizationUnitSupplier implements IEvaServiceDefinition
{
  name = 'DeleteOrganizationUnitSupplier';
  path = '/message/DeleteOrganizationUnitSupplier';
  request?: DeleteOrganizationUnitSupplier;
  response?: EmptyResponseMessage;
}

export class SvcDeletePasskey implements IEvaServiceDefinition
{
  name = 'DeletePasskey';
  path = '/message/DeletePasskey';
  request?: DeletePasskey;
  response?: EmptyResponseMessage;
}

export class SvcDeletePasskeyForUser implements IEvaServiceDefinition
{
  name = 'DeletePasskeyForUser';
  path = '/message/DeletePasskeyForUser';
  request?: DeletePasskeyForUser;
  response?: EmptyResponseMessage;
}

export class SvcDeleteProductBundle implements IEvaServiceDefinition
{
  name = 'DeleteProductBundle';
  path = '/message/DeleteProductBundle';
  request?: DeleteProductBundle;
  response?: EmptyResponseMessage;
}

export class SvcDeleteProductRecommendation implements IEvaServiceDefinition
{
  name = 'DeleteProductRecommendation';
  path = '/message/DeleteProductRecommendation';
  request?: DeleteProductRecommendation;
  response?: EmptyResponseMessage;
}

export class SvcDeleteProductStructure implements IEvaServiceDefinition
{
  name = 'DeleteProductStructure';
  path = '/message/DeleteProductStructure';
  request?: DeleteProductStructure;
  response?: EmptyResponseMessage;
}

export class SvcDeleteProductZone implements IEvaServiceDefinition
{
  name = 'DeleteProductZone';
  path = '/message/DeleteProductZone';
  request?: DeleteProductZone;
  response?: EmptyResponseMessage;
}

export class SvcDeleteProductZoneGroup implements IEvaServiceDefinition
{
  name = 'DeleteProductZoneGroup';
  path = '/message/DeleteProductZoneGroup';
  request?: DeleteProductZoneGroup;
  response?: EmptyResponseMessage;
}

export class SvcDeleteQuickBuy implements IEvaServiceDefinition
{
  name = 'DeleteQuickBuy';
  path = '/message/DeleteQuickBuy';
  request?: DeleteQuickBuy;
  response?: EmptyResponseMessage;
}

export class SvcDeleteRecurringTask implements IEvaServiceDefinition
{
  name = 'DeleteRecurringTask';
  path = '/message/DeleteRecurringTask';
  request?: DeleteRecurringTask;
  response?: EmptyResponseMessage;
}

export class SvcDeleteReturnToSupplierRequest implements IEvaServiceDefinition
{
  name = 'DeleteReturnToSupplierRequest';
  path = '/message/DeleteReturnToSupplierRequest';
  request?: DeleteReturnToSupplierRequest;
  response?: EmptyResponseMessage;
}

export class SvcDeleteScript implements IEvaServiceDefinition
{
  name = 'DeleteScript';
  path = '/message/DeleteScript';
  request?: DeleteScript;
  response?: DeleteScriptResponse;
}

export class SvcDeleteSerialNumberConfiguration implements IEvaServiceDefinition
{
  name = 'DeleteSerialNumberConfiguration';
  path = '/message/DeleteSerialNumberConfiguration';
  request?: DeleteSerialNumberConfiguration;
  response?: EmptyResponseMessage;
}

export class SvcDeleteSerialNumberProduct implements IEvaServiceDefinition
{
  name = 'DeleteSerialNumberProduct';
  path = '/message/DeleteSerialNumberProduct';
  request?: DeleteSerialNumberProduct;
  response?: EmptyResponseMessage;
}

export class SvcDeleteShipment implements IEvaServiceDefinition
{
  name = 'DeleteShipment';
  path = '/message/DeleteShipment';
  request?: DeleteShipment;
  response?: EmptyResponseMessage;
}

export class SvcDeleteShipmentIdentifier implements IEvaServiceDefinition
{
  name = 'DeleteShipmentIdentifier';
  path = '/message/DeleteShipmentIdentifier';
  request?: DeleteShipmentIdentifier;
  response?: EmptyResponseMessage;
}

export class SvcDeleteStockNotification implements IEvaServiceDefinition
{
  name = 'DeleteStockNotification';
  path = '/message/DeleteStockNotification';
  request?: DeleteStockNotification;
  response?: EmptyResponseMessage;
}

export class SvcDeleteStringTranslation implements IEvaServiceDefinition
{
  name = 'DeleteStringTranslation';
  path = '/message/DeleteStringTranslation';
  request?: DeleteStringTranslation;
  response?: EmptyResponseMessage;
}

export class SvcDeleteTaxCode implements IEvaServiceDefinition
{
  name = 'DeleteTaxCode';
  path = '/message/DeleteTaxCode';
  request?: DeleteTaxCode;
  response?: EmptyResponseMessage;
}

export class SvcDeleteTaxCodeMapping implements IEvaServiceDefinition
{
  name = 'DeleteTaxCodeMapping';
  path = '/message/DeleteTaxCodeMapping';
  request?: DeleteTaxCodeMapping;
  response?: EmptyResponseMessage;
}

export class SvcDeleteTaxProvider implements IEvaServiceDefinition
{
  name = 'DeleteTaxProvider';
  path = '/message/DeleteTaxProvider';
  request?: DeleteTaxProvider;
  response?: EmptyResponseMessage;
}

export class SvcDeleteTaxRate implements IEvaServiceDefinition
{
  name = 'DeleteTaxRate';
  path = '/message/DeleteTaxRate';
  request?: DeleteTaxRate;
  response?: EmptyResponseMessage;
}

export class SvcDeleteUser implements IEvaServiceDefinition
{
  name = 'DeleteUser';
  path = '/message/DeleteUser';
  request?: DeleteUser;
  response?: EmptyResponseMessage;
}

export class SvcDeleteUserAssociation implements IEvaServiceDefinition
{
  name = 'DeleteUserAssociation';
  path = '/message/DeleteUserAssociation';
  request?: DeleteUserAssociation;
  response?: EmptyResponseMessage;
}

export class SvcDeleteUserAssociationType implements IEvaServiceDefinition
{
  name = 'DeleteUserAssociationType';
  path = '/message/DeleteUserAssociationType';
  request?: DeleteUserAssociationType;
  response?: EmptyResponseMessage;
}

export class SvcDeleteUserGroup implements IEvaServiceDefinition
{
  name = 'DeleteUserGroup';
  path = '/message/DeleteUserGroup';
  request?: DeleteUserGroup;
  response?: EmptyResponseMessage;
}

export class SvcDeleteUserInteraction implements IEvaServiceDefinition
{
  name = 'DeleteUserInteraction';
  path = '/message/DeleteUserInteraction';
  request?: DeleteUserInteraction;
  response?: EmptyResponseMessage;
}

export class SvcDeleteUserPhoneNumber implements IEvaServiceDefinition
{
  name = 'DeleteUserPhoneNumber';
  path = '/message/DeleteUserPhoneNumber';
  request?: DeleteUserPhoneNumber;
  response?: EmptyResponseMessage;
}

export class SvcDeleteUsers_Async implements IEvaServiceDefinition
{
  name = 'DeleteUsers_Async';
  path = '/async-message/DeleteUsers';
  request?: DeleteUsers_Async;
  response?: DeleteUsers_AsyncResponse;
}

export class SvcDeleteUsers_AsyncResult implements IEvaServiceDefinition
{
  name = 'DeleteUsers_AsyncResult';
  path = '/async-result/DeleteUsers';
  request?: DeleteUsers_AsyncResult;
  response?: DeleteUsersResponse;
}

export class SvcDeleteUserTaskNotCompletedReason implements IEvaServiceDefinition
{
  name = 'DeleteUserTaskNotCompletedReason';
  path = '/message/DeleteUserTaskNotCompletedReason';
  request?: DeleteUserTaskNotCompletedReason;
  response?: EmptyResponseMessage;
}

export class SvcDeleteUserTaskPriority implements IEvaServiceDefinition
{
  name = 'DeleteUserTaskPriority';
  path = '/message/DeleteUserTaskPriority';
  request?: DeleteUserTaskPriority;
  response?: EmptyResponseMessage;
}

export class SvcDeleteUserTaskTypeOrganizationUnitSet implements IEvaServiceDefinition
{
  name = 'DeleteUserTaskTypeOrganizationUnitSet';
  path = '/message/DeleteUserTaskTypeOrganizationUnitSet';
  request?: DeleteUserTaskTypeOrganizationUnitSet;
  response?: EmptyResponseMessage;
}

export class SvcDeleteUserWishlist implements IEvaServiceDefinition
{
  name = 'DeleteUserWishlist';
  path = '/message/DeleteUserWishlist';
  request?: DeleteUserWishlist;
  response?: EmptyResponseMessage;
}

export class SvcDeleteZonedCycleCountSchedule implements IEvaServiceDefinition
{
  name = 'DeleteZonedCycleCountSchedule';
  path = '/message/DeleteZonedCycleCountSchedule';
  request?: DeleteZonedCycleCountSchedule;
  response?: EmptyResponseMessage;
}

export class SvcDeliverShipment implements IEvaServiceDefinition
{
  name = 'DeliverShipment';
  path = '/message/DeliverShipment';
  request?: DeliverShipment;
  response?: EmptyResponseMessage;
}

export class SvcDetachCompanyFromUser implements IEvaServiceDefinition
{
  name = 'DetachCompanyFromUser';
  path = '/message/DetachCompanyFromUser';
  request?: DetachCompanyFromUser;
  response?: EmptyResponseMessage;
}

export class SvcDetachConsumerCompanyFromOrder implements IEvaServiceDefinition
{
  name = 'DetachConsumerCompanyFromOrder';
  path = '/message/DetachConsumerCompanyFromOrder';
  request?: DetachConsumerCompanyFromOrder;
  response?: EmptyResponseMessage;
}

export class SvcDetachCustomerFromOrder implements IEvaServiceDefinition
{
  name = 'DetachCustomerFromOrder';
  path = '/message/DetachCustomerFromOrder';
  request?: DetachCustomerFromOrder;
  response?: EmptyResponseMessage;
}

export class SvcDetachFromCustomerInteractionTask implements IEvaServiceDefinition
{
  name = 'DetachFromCustomerInteractionTask';
  path = '/message/DetachFromCustomerInteractionTask';
  request?: DetachFromCustomerInteractionTask;
  response?: EmptyResponseMessage;
}

export class SvcDetachFromRepairUserTask implements IEvaServiceDefinition
{
  name = 'DetachFromRepairUserTask';
  path = '/message/DetachFromRepairUserTask';
  request?: DetachFromRepairUserTask;
  response?: EmptyResponseMessage;
}

export class SvcDetachIdentificationFromOrder implements IEvaServiceDefinition
{
  name = 'DetachIdentificationFromOrder';
  path = '/message/DetachIdentificationFromOrder';
  request?: DetachIdentificationFromOrder;
  response?: EmptyResponseMessage;
}

export class SvcDetachOpeningHoursTemplateToOrganizationUnitSets implements IEvaServiceDefinition
{
  name = 'DetachOpeningHoursTemplateToOrganizationUnitSets';
  path = '/message/DetachOpeningHoursTemplateToOrganizationUnitSets';
  request?: DetachOpeningHoursTemplateToOrganizationUnitSets;
  response?: EmptyResponseMessage;
}

export class SvcDetachOrder implements IEvaServiceDefinition
{
  name = 'DetachOrder';
  path = '/message/DetachOrder';
  request?: DetachOrder;
  response?: DetachOrderResponse;
}

export class SvcDetachUserFromConsumerCompany implements IEvaServiceDefinition
{
  name = 'DetachUserFromConsumerCompany';
  path = '/message/DetachUserFromConsumerCompany';
  request?: DetachUserFromConsumerCompany;
  response?: EmptyResponseMessage;
}

export class SvcDisableAllTwoFactorAuthentication implements IEvaServiceDefinition
{
  name = 'DisableAllTwoFactorAuthentication';
  path = '/message/DisableAllTwoFactorAuthentication';
  request?: DisableAllTwoFactorAuthentication;
  response?: DisableAllTwoFactorAuthenticationResponse;
}

export class SvcDisableDiscountOnOrder implements IEvaServiceDefinition
{
  name = 'DisableDiscountOnOrder';
  path = '/message/DisableDiscountOnOrder';
  request?: DisableDiscountOnOrder;
  response?: EmptyResponseMessage;
}

export class SvcDisableDiscountTriggersOnOrder implements IEvaServiceDefinition
{
  name = 'DisableDiscountTriggersOnOrder';
  path = '/message/DisableDiscountTriggersOnOrder';
  request?: DisableDiscountTriggersOnOrder;
  response?: EmptyResponseMessage;
}

export class SvcDisableTwoFactorAuthentication implements IEvaServiceDefinition
{
  name = 'DisableTwoFactorAuthentication';
  path = '/message/DisableTwoFactorAuthentication';
  request?: DisableTwoFactorAuthentication;
  response?: DisableTwoFactorAuthenticationResponse;
}

export class SvcDismissOrder implements IEvaServiceDefinition
{
  name = 'DismissOrder';
  path = '/message/DismissOrder';
  request?: DismissOrder;
  response?: EmptyResponseMessage;
}

export class SvcDownloadAppointment implements IEvaServiceDefinition
{
  name = 'DownloadAppointment';
  path = '/message/DownloadAppointment';
  request?: DownloadAppointment;
  response?: ResourceWithBlobIDResponseMessage;
}

export class SvcDownloadCycleCountSample implements IEvaServiceDefinition
{
  name = 'DownloadCycleCountSample';
  path = '/message/DownloadCycleCountSample';
  request?: DownloadCycleCountSample;
  response?: ResourceWithBlobIDResponseMessage;
}

export class SvcDownloadDigitalGiftCard implements IEvaServiceDefinition
{
  name = 'DownloadDigitalGiftCard';
  path = '/message/DownloadDigitalGiftCard';
  request?: DownloadDigitalGiftCard;
  response?: ResourceResponseMessage;
}

export class SvcDownloadExternalFullStockCountResultTemplate implements IEvaServiceDefinition
{
  name = 'DownloadExternalFullStockCountResultTemplate';
  path = '/message/DownloadExternalFullStockCountResultTemplate';
  request?: DownloadExternalFullStockCountResultTemplate;
  response?: ResourceResponseMessage;
}

export class SvcDownloadFinancialPeriodAudits implements IEvaServiceDefinition
{
  name = 'DownloadFinancialPeriodAudits';
  path = '/message/DownloadFinancialPeriodAudits';
  request?: DownloadFinancialPeriodAudits;
  response?: ResourceResponseMessage;
}

export class SvcDownloadFinancialPeriodDeposit implements IEvaServiceDefinition
{
  name = 'DownloadFinancialPeriodDeposit';
  path = '/message/DownloadFinancialPeriodDeposit';
  request?: DownloadFinancialPeriodDeposit;
  response?: ResourceResponseMessage;
}

export class SvcDownloadFlightsFileTemplate implements IEvaServiceDefinition
{
  name = 'DownloadFlightsFileTemplate';
  path = '/message/DownloadFlightsFileTemplate';
  request?: DownloadFlightsFileTemplate;
  response?: ResourceResponseMessage;
}

export class SvcDownloadFullStockCountLabelUploadTemplate implements IEvaServiceDefinition
{
  name = 'DownloadFullStockCountLabelUploadTemplate';
  path = '/message/DownloadFullStockCountLabelUploadTemplate';
  request?: DownloadFullStockCountLabelUploadTemplate;
  response?: ResourceResponseMessage;
}

export class SvcDownloadFullStockCountSummaryExcel implements IEvaServiceDefinition
{
  name = 'DownloadFullStockCountSummaryExcel';
  path = '/message/DownloadFullStockCountSummaryExcel';
  request?: DownloadFullStockCountSummaryExcel;
  response?: ResourceWithBlobIDResponseMessage;
}

export class SvcDownloadFullStockCountSummaryExcel_Async implements IEvaServiceDefinition
{
  name = 'DownloadFullStockCountSummaryExcel_Async';
  path = '/async-message/DownloadFullStockCountSummaryExcel';
  request?: DownloadFullStockCountSummaryExcel_Async;
  response?: DownloadFullStockCountSummaryExcel_AsyncResponse;
}

export class SvcDownloadFullStockCountSummaryExcel_AsyncResult implements IEvaServiceDefinition
{
  name = 'DownloadFullStockCountSummaryExcel_AsyncResult';
  path = '/async-result/DownloadFullStockCountSummaryExcel';
  request?: DownloadFullStockCountSummaryExcel_AsyncResult;
  response?: ResourceWithBlobIDResponseMessage;
}

export class SvcDownloadFullStockCountSummaryPDF implements IEvaServiceDefinition
{
  name = 'DownloadFullStockCountSummaryPDF';
  path = '/message/DownloadFullStockCountSummaryPDF';
  request?: DownloadFullStockCountSummaryPDF;
  response?: ResourceWithBlobIDResponseMessage;
}

export class SvcDownloadIntegrationData implements IEvaServiceDefinition
{
  name = 'DownloadIntegrationData';
  path = '/message/DownloadIntegrationData';
  request?: DownloadIntegrationData;
  response?: DownloadIntegrationDataResponse;
}

export class SvcDownloadInvoice implements IEvaServiceDefinition
{
  name = 'DownloadInvoice';
  path = '/message/DownloadInvoice';
  request?: DownloadInvoice;
  response?: ResourceResponseMessage;
}

export class SvcDownloadOffer implements IEvaServiceDefinition
{
  name = 'DownloadOffer';
  path = '/message/DownloadOffer';
  request?: DownloadOffer;
  response?: ResourceWithBlobIDResponseMessage;
}

export class SvcDownloadOrderConfirmation implements IEvaServiceDefinition
{
  name = 'DownloadOrderConfirmation';
  path = '/message/DownloadOrderConfirmation';
  request?: DownloadOrderConfirmation;
  response?: DownloadOrderConfirmationResponse;
}

export class SvcDownloadSpecialOpeningHoursExcelTemplate implements IEvaServiceDefinition
{
  name = 'DownloadSpecialOpeningHoursExcelTemplate';
  path = '/message/DownloadSpecialOpeningHoursExcelTemplate';
  request?: DownloadSpecialOpeningHoursExcelTemplate;
  response?: ResourceWithBlobIDResponseMessage;
}

export class SvcDownloadStockExcelFileTemplate implements IEvaServiceDefinition
{
  name = 'DownloadStockExcelFileTemplate';
  path = '/message/DownloadStockExcelFileTemplate';
  request?: DownloadStockExcelFileTemplate;
  response?: ResourceResponseMessage;
}

export class SvcDownloadUserInteractionCommunicationAttachment implements IEvaServiceDefinition
{
  name = 'DownloadUserInteractionCommunicationAttachment';
  path = '/message/DownloadUserInteractionCommunicationAttachment';
  request?: DownloadUserInteractionCommunicationAttachment;
  response?: ResourceWithBlobIDResponseMessage;
}

export class SvcDropOffCashDeposit implements IEvaServiceDefinition
{
  name = 'DropOffCashDeposit';
  path = '/message/DropOffCashDeposit';
  request?: DropOffCashDeposit;
  response?: EmptyResponseMessage;
}

export class SvcDuplicateOrder implements IEvaServiceDefinition
{
  name = 'DuplicateOrder';
  path = '/message/DuplicateOrder';
  request?: DuplicateOrder;
  response?: DuplicateOrderResponse;
}

export class SvcEditProductStructure implements IEvaServiceDefinition
{
  name = 'EditProductStructure';
  path = '/message/EditProductStructure';
  request?: EditProductStructure;
  response?: EditProductStructureResponse;
}

export class SvcEmailInvoice implements IEvaServiceDefinition
{
  name = 'EmailInvoice';
  path = '/message/EmailInvoice';
  request?: EmailInvoice;
  response?: EmptyResponseMessage;
}

export class SvcEmailInvoices implements IEvaServiceDefinition
{
  name = 'EmailInvoices';
  path = '/message/EmailInvoices';
  request?: EmailInvoices;
  response?: EmptyResponseMessage;
}

export class SvcEmailOffer implements IEvaServiceDefinition
{
  name = 'EmailOffer';
  path = '/message/EmailOffer';
  request?: EmailOffer;
  response?: EmptyResponseMessage;
}

export class SvcEmailOrderConfirmation implements IEvaServiceDefinition
{
  name = 'EmailOrderConfirmation';
  path = '/message/EmailOrderConfirmation';
  request?: EmailOrderConfirmation;
  response?: EmptyResponseMessage;
}

export class SvcEmailOrderSummary implements IEvaServiceDefinition
{
  name = 'EmailOrderSummary';
  path = '/message/EmailOrderSummary';
  request?: EmailOrderSummary;
  response?: EmptyResponseMessage;
}

export class SvcEmailOrderTaxFreeForm implements IEvaServiceDefinition
{
  name = 'EmailOrderTaxFreeForm';
  path = '/message/EmailOrderTaxFreeForm';
  request?: EmailOrderTaxFreeForm;
  response?: EmptyResponseMessage;
}

export class SvcEmailThermalInvoice implements IEvaServiceDefinition
{
  name = 'EmailThermalInvoice';
  path = '/message/EmailThermalInvoice';
  request?: EmailThermalInvoice;
  response?: EmptyResponseMessage;
}

export class SvcEmailThermalInvoices implements IEvaServiceDefinition
{
  name = 'EmailThermalInvoices';
  path = '/message/EmailThermalInvoices';
  request?: EmailThermalInvoices;
  response?: EmptyResponseMessage;
}

export class SvcEmptyGiftCard implements IEvaServiceDefinition
{
  name = 'EmptyGiftCard';
  path = '/message/EmptyGiftCard';
  request?: EmptyGiftCard;
  response?: EmptyGiftCardResponse;
}

export class SvcEnableDisabledDiscountOnOrder implements IEvaServiceDefinition
{
  name = 'EnableDisabledDiscountOnOrder';
  path = '/message/EnableDisabledDiscountOnOrder';
  request?: EnableDisabledDiscountOnOrder;
  response?: EmptyResponseMessage;
}

export class SvcEnableDiscountTriggersOnOrder implements IEvaServiceDefinition
{
  name = 'EnableDiscountTriggersOnOrder';
  path = '/message/EnableDiscountTriggersOnOrder';
  request?: EnableDiscountTriggersOnOrder;
  response?: EmptyResponseMessage;
}

export class SvcEnableTwoFactorAuthentication implements IEvaServiceDefinition
{
  name = 'EnableTwoFactorAuthentication';
  path = '/message/EnableTwoFactorAuthentication';
  request?: EnableTwoFactorAuthentication;
  response?: EnableTwoFactorAuthenticationResponse;
}

export class SvcEnqueueTask implements IEvaServiceDefinition
{
  name = 'EnqueueTask';
  path = '/message/EnqueueTask';
  request?: EnqueueTask;
  response?: EmptyResponseMessage;
}

export class SvcExecuteBarcode implements IEvaServiceDefinition
{
  name = 'ExecuteBarcode';
  path = '/message/ExecuteBarcode';
  request?: ExecuteBarcode;
  response?: ExecuteBarcodeResponse;
}

export class SvcExemptOrderFromTax implements IEvaServiceDefinition
{
  name = 'ExemptOrderFromTax';
  path = '/message/ExemptOrderFromTax';
  request?: ExemptOrderFromTax;
  response?: EmptyResponseMessage;
}

export class SvcExplainProductPrices implements IEvaServiceDefinition
{
  name = 'ExplainProductPrices';
  path = '/message/ExplainProductPrices';
  request?: ExplainProductPrices;
  response?: ExplainProductPricesResponse;
}

export class SvcExplainScript implements IEvaServiceDefinition
{
  name = 'ExplainScript';
  path = '/message/ExplainScript';
  request?: ExplainScript;
  response?: ExplainScriptResponse;
}

export class SvcFetchUserFromExternalProvider implements IEvaServiceDefinition
{
  name = 'FetchUserFromExternalProvider';
  path = '/message/FetchUserFromExternalProvider';
  request?: FetchUserFromExternalProvider;
  response?: FetchUserFromExternalProviderResponse;
}

export class SvcFinalizeAMLChecksOnOrder implements IEvaServiceDefinition
{
  name = 'FinalizeAMLChecksOnOrder';
  path = '/message/FinalizeAMLChecksOnOrder';
  request?: FinalizeAMLChecksOnOrder;
  response?: FinalizeAMLChecksOnOrderResponse;
}

export class SvcFinishRepair implements IEvaServiceDefinition
{
  name = 'FinishRepair';
  path = '/message/FinishRepair';
  request?: FinishRepair;
  response?: EmptyResponseMessage;
}

export class SvcFinishRepairUserTask implements IEvaServiceDefinition
{
  name = 'FinishRepairUserTask';
  path = '/message/FinishRepairUserTask';
  request?: FinishRepairUserTask;
  response?: EmptyResponseMessage;
}

export class SvcFlushCache implements IEvaServiceDefinition
{
  name = 'FlushCache';
  path = '/message/FlushCache';
  request?: FlushCache;
  response?: EmptyResponseMessage;
}

export class SvcForcePlaceOrder implements IEvaServiceDefinition
{
  name = 'ForcePlaceOrder';
  path = '/message/ForcePlaceOrder';
  request?: ForcePlaceOrder;
  response?: ForcePlaceOrderResponse;
}

export class SvcForceVerifyCustomer implements IEvaServiceDefinition
{
  name = 'ForceVerifyCustomer';
  path = '/message/ForceVerifyCustomer';
  request?: ForceVerifyCustomer;
  response?: EmptyResponseMessage;
}

export class SvcFullyReceiveShipment implements IEvaServiceDefinition
{
  name = 'FullyReceiveShipment';
  path = '/message/FullyReceiveShipment';
  request?: FullyReceiveShipment;
  response?: FullyReceiveShipmentResponse;
}

export class SvcFullyShipPurchaseOrder implements IEvaServiceDefinition
{
  name = 'FullyShipPurchaseOrder';
  path = '/message/FullyShipPurchaseOrder';
  request?: FullyShipPurchaseOrder;
  response?: EmptyResponseMessage;
}

export class SvcGenerateDeviceHubBarcode implements IEvaServiceDefinition
{
  name = 'GenerateDeviceHubBarcode';
  path = '/message/GenerateDeviceHubBarcode';
  request?: GenerateDeviceHubBarcode;
  response?: GenerateDeviceHubBarcodeResponse;
}

export class SvcGenerateElevationBarcode implements IEvaServiceDefinition
{
  name = 'GenerateElevationBarcode';
  path = '/message/GenerateElevationBarcode';
  request?: GenerateElevationBarcode;
  response?: GenerateElevationBarcodeResponse;
}

export class SvcGenerateElevationSkipToken implements IEvaServiceDefinition
{
  name = 'GenerateElevationSkipToken';
  path = '/message/GenerateElevationSkipToken';
  request?: GenerateElevationSkipToken;
  response?: GenerateElevationSkipTokenResponse;
}

export class SvcGenerateScanModeBarcode implements IEvaServiceDefinition
{
  name = 'GenerateScanModeBarcode';
  path = '/message/GenerateScanModeBarcode';
  request?: GenerateScanModeBarcode;
  response?: GenerateScanModeBarcodeResponse;
}

export class SvcGenerateSessionBarcode implements IEvaServiceDefinition
{
  name = 'GenerateSessionBarcode';
  path = '/message/GenerateSessionBarcode';
  request?: GenerateSessionBarcode;
  response?: GenerateSessionBarcodeResponse;
}

export class SvcGenerateTemporaryElevationCode implements IEvaServiceDefinition
{
  name = 'GenerateTemporaryElevationCode';
  path = '/message/GenerateTemporaryElevationCode';
  request?: GenerateTemporaryElevationCode;
  response?: GenerateTemporaryElevationCodeResponse;
}

export class SvcGenerateTemporaryPasswordForUser implements IEvaServiceDefinition
{
  name = 'GenerateTemporaryPasswordForUser';
  path = '/message/GenerateTemporaryPasswordForUser';
  request?: GenerateTemporaryPasswordForUser;
  response?: GenerateTemporaryPasswordForUserResponse;
}

export class SvcGenerateUserCoupon implements IEvaServiceDefinition
{
  name = 'GenerateUserCoupon';
  path = '/message/GenerateUserCoupon';
  request?: GenerateUserCoupon;
  response?: GenerateUserCouponResponse;
}

export class SvcGetActiveDiscounts implements IEvaServiceDefinition
{
  name = 'GetActiveDiscounts';
  path = '/message/GetActiveDiscounts';
  request?: GetActiveDiscounts;
  response?: GetActiveDiscountsResponse;
}

export class SvcGetActivePaymentTypes implements IEvaServiceDefinition
{
  name = 'GetActivePaymentTypes';
  path = '/message/GetActivePaymentTypes';
  request?: GetActivePaymentTypes;
  response?: GetActivePaymentTypesResponse;
}

export class SvcGetActiveShoppingCart implements IEvaServiceDefinition
{
  name = 'GetActiveShoppingCart';
  path = '/message/GetActiveShoppingCart';
  request?: GetActiveShoppingCart;
  response?: GetActiveShoppingCartResponse;
}

export class SvcGetAddressForZipCode implements IEvaServiceDefinition
{
  name = 'GetAddressForZipCode';
  path = '/message/GetAddressForZipCode';
  request?: GetAddressForZipCode;
  response?: GetAddressForZipCodeResponse;
}

export class SvcGetAddressRequirements implements IEvaServiceDefinition
{
  name = 'GetAddressRequirements';
  path = '/message/GetAddressRequirements';
  request?: GetAddressRequirements;
  response?: GetAddressRequirementsResponse;
}

export class SvcGetAllSubscriptionsByUserID implements IEvaServiceDefinition
{
  name = 'GetAllSubscriptionsByUserID';
  path = '/message/GetAllSubscriptionsByUserID';
  request?: GetAllSubscriptionsByUserID;
  response?: GetUserSubscriptionsResponse;
}

export class SvcGetAnonymousToken implements IEvaServiceDefinition
{
  name = 'GetAnonymousToken';
  path = '/message/GetAnonymousToken';
  request?: GetAnonymousToken;
  response?: GetAnonymousTokenResponse;
}

export class SvcGetAnonymousWishlist implements IEvaServiceDefinition
{
  name = 'GetAnonymousWishlist';
  path = '/message/GetAnonymousWishlist';
  request?: GetAnonymousWishlist;
  response?: GetAnonymousWishlistResponse;
}

export class SvcGetApiDefinition implements IEvaServiceDefinition
{
  name = 'GetApiDefinition';
  path = '/message/GetApiDefinition';
  request?: GetApiDefinition;
  response?: GetApiDefinitionResponse;
}

export class SvcGetApplicationConfiguration implements IEvaServiceDefinition
{
  name = 'GetApplicationConfiguration';
  path = '/message/GetApplicationConfiguration';
  request?: GetApplicationConfiguration;
  response?: GetApplicationConfigurationResponse;
}

export class SvcGetAppointment implements IEvaServiceDefinition
{
  name = 'GetAppointment';
  path = '/message/GetAppointment';
  request?: GetAppointment;
  response?: GetAppointmentResponse;
}

export class SvcGetAppointmentCancellationReasons implements IEvaServiceDefinition
{
  name = 'GetAppointmentCancellationReasons';
  path = '/message/GetAppointmentCancellationReasons';
  request?: GetAppointmentCancellationReasons;
  response?: GetAppointmentCancellationReasonsResponse;
}

export class SvcGetAppRules implements IEvaServiceDefinition
{
  name = 'GetAppRules';
  path = '/message/GetAppRules';
  request?: GetAppRules;
  response?: GetAppRulesResponse;
}

export class SvcGetAssemblyNamesForDeviceTypes implements IEvaServiceDefinition
{
  name = 'GetAssemblyNamesForDeviceTypes';
  path = '/message/GetAssemblyNamesForDeviceTypes';
  request?: GetAssemblyNamesForDeviceTypes;
  response?: GetAssemblyNamesForDeviceTypesResponse;
}

export class SvcGetAsyncRequestForUser implements IEvaServiceDefinition
{
  name = 'GetAsyncRequestForUser';
  path = '/message/GetAsyncRequestForUser';
  request?: GetAsyncRequestForUser;
  response?: GetAsyncRequestForUserResponse;
}

export class SvcGetAsyncRequestsForUser implements IEvaServiceDefinition
{
  name = 'GetAsyncRequestsForUser';
  path = '/message/GetAsyncRequestsForUser';
  request?: GetAsyncRequestsForUser;
  response?: GetAsyncRequestsForUserResponse;
}

export class SvcGetAuditChainConfigurations implements IEvaServiceDefinition
{
  name = 'GetAuditChainConfigurations';
  path = '/message/GetAuditChainConfigurations';
  request?: GetAuditChainConfigurations;
  response?: GetAuditChainConfigurationsResponse;
}

export class SvcGetAuthorizationStructure implements IEvaServiceDefinition
{
  name = 'GetAuthorizationStructure';
  path = '/message/GetAuthorizationStructure';
  request?: GetAuthorizationStructure;
  response?: GetAuthorizationStructureResponse;
}

export class SvcGetAutocompleteAddressByReference implements IEvaServiceDefinition
{
  name = 'GetAutocompleteAddressByReference';
  path = '/message/GetAutocompleteAddressByReference';
  request?: GetAutocompleteAddressByReference;
  response?: GetAutocompleteAddressByReferenceResponse;
}

export class SvcGetAvailabilityIndication implements IEvaServiceDefinition
{
  name = 'GetAvailabilityIndication';
  path = '/message/GetAvailabilityIndication';
  request?: GetAvailabilityIndication;
  response?: GetAvailabilityIndicationResponse;
}

export class SvcGetAvailableCashAmountForDevice implements IEvaServiceDefinition
{
  name = 'GetAvailableCashAmountForDevice';
  path = '/message/GetAvailableCashAmountForDevice';
  request?: GetAvailableCashAmountForDevice;
  response?: GetAvailableCashAmountForDeviceResponse;
}

export class SvcGetAvailableCashHandlers implements IEvaServiceDefinition
{
  name = 'GetAvailableCashHandlers';
  path = '/message/GetAvailableCashHandlers';
  request?: GetAvailableCashHandlers;
  response?: GetAvailableCashHandlersResponse;
}

export class SvcGetAvailableCurrencies implements IEvaServiceDefinition
{
  name = 'GetAvailableCurrencies';
  path = '/message/GetAvailableCurrencies';
  request?: GetAvailableCurrencies;
  response?: GetAvailableCurrenciesResponse;
}

export class SvcGetAvailableDocumentsForOrder implements IEvaServiceDefinition
{
  name = 'GetAvailableDocumentsForOrder';
  path = '/message/GetAvailableDocumentsForOrder';
  request?: GetAvailableDocumentsForOrder;
  response?: GetAvailableDocumentsForOrderResponse;
}

export class SvcGetAvailableGiftCardConfigurations implements IEvaServiceDefinition
{
  name = 'GetAvailableGiftCardConfigurations';
  path = '/message/GetAvailableGiftCardConfigurations';
  request?: GetAvailableGiftCardConfigurations;
  response?: GetAvailableGiftCardConfigurationsResponse;
}

export class SvcGetAvailableGiftWrappingLinesForOrder implements IEvaServiceDefinition
{
  name = 'GetAvailableGiftWrappingLinesForOrder';
  path = '/message/GetAvailableGiftWrappingLinesForOrder';
  request?: GetAvailableGiftWrappingLinesForOrder;
  response?: GetAvailableGiftWrappingLinesForOrderResponse;
}

export class SvcGetAvailablePaymentMethods implements IEvaServiceDefinition
{
  name = 'GetAvailablePaymentMethods';
  path = '/message/GetAvailablePaymentMethods';
  request?: GetAvailablePaymentMethods;
  response?: GetAvailablePaymentMethodsResponse;
}

export class SvcGetAvailableRefundPaymentMethodsForOrder implements IEvaServiceDefinition
{
  name = 'GetAvailableRefundPaymentMethodsForOrder';
  path = '/message/GetAvailableRefundPaymentMethodsForOrder';
  request?: GetAvailableRefundPaymentMethodsForOrder;
  response?: GetAvailableRefundPaymentMethodsResponse;
}

export class SvcGetAvailableServiceDetails implements IEvaServiceDefinition
{
  name = 'GetAvailableServiceDetails';
  path = '/message/GetAvailableServiceDetails';
  request?: GetAvailableServiceDetails;
  response?: GetAvailableServiceDetailsResponse;
}

export class SvcGetAvailableServices implements IEvaServiceDefinition
{
  name = 'GetAvailableServices';
  path = '/message/GetAvailableServices';
  request?: GetAvailableServices;
  response?: GetAvailableServicesResponse;
}

export class SvcGetAvailableSubscriptions implements IEvaServiceDefinition
{
  name = 'GetAvailableSubscriptions';
  path = '/message/GetAvailableSubscriptions';
  request?: GetAvailableSubscriptions;
  response?: GetAvailableSubscriptionsResponse;
}

export class SvcGetAvailableTwoFactorAuthenticators implements IEvaServiceDefinition
{
  name = 'GetAvailableTwoFactorAuthenticators';
  path = '/message/GetAvailableTwoFactorAuthenticators';
  request?: GetAvailableTwoFactorAuthenticators;
  response?: GetAvailableTwoFactorAuthenticatorsResponse;
}

export class SvcGetAvailableVisibilityGroups implements IEvaServiceDefinition
{
  name = 'GetAvailableVisibilityGroups';
  path = '/message/GetAvailableVisibilityGroups';
  request?: GetAvailableVisibilityGroups;
  response?: GetAvailableVisibilityGroupsResponse;
}

export class SvcGetBoardingPass implements IEvaServiceDefinition
{
  name = 'GetBoardingPass';
  path = '/message/GetBoardingPass';
  request?: GetBoardingPass;
  response?: GetBoardingPassResponse;
}

export class SvcGetBundleProductDetails implements IEvaServiceDefinition
{
  name = 'GetBundleProductDetails';
  path = '/message/GetBundleProductDetails';
  request?: GetBundleProductDetails;
  response?: GetBundleProductDetailResponse;
}

export class SvcGetBundleProductsForProduct implements IEvaServiceDefinition
{
  name = 'GetBundleProductsForProduct';
  path = '/message/GetBundleProductsForProduct';
  request?: GetBundleProductsForProduct;
  response?: GetBundleProductsForProductResponse;
}

export class SvcGetCashCorrection implements IEvaServiceDefinition
{
  name = 'GetCashCorrection';
  path = '/message/GetCashCorrection';
  request?: GetCashCorrection;
  response?: GetCashCorrectionResponse;
}

export class SvcGetCashCorrectionReason implements IEvaServiceDefinition
{
  name = 'GetCashCorrectionReason';
  path = '/message/GetCashCorrectionReason';
  request?: GetCashCorrectionReason;
  response?: GetCashCorrectionReasonResponse;
}

export class SvcGetCashCorrectionReasons implements IEvaServiceDefinition
{
  name = 'GetCashCorrectionReasons';
  path = '/message/GetCashCorrectionReasons';
  request?: GetCashCorrectionReasons;
  response?: GetCashCorrectionReasonsResponse;
}

export class SvcGetCashDeposit implements IEvaServiceDefinition
{
  name = 'GetCashDeposit';
  path = '/message/GetCashDeposit';
  request?: GetCashDeposit;
  response?: GetCashDepositResponse;
}

export class SvcGetCashExpense implements IEvaServiceDefinition
{
  name = 'GetCashExpense';
  path = '/message/GetCashExpense';
  request?: GetCashExpense;
  response?: GetCashExpenseResponse;
}

export class SvcGetCashExpenseTypes implements IEvaServiceDefinition
{
  name = 'GetCashExpenseTypes';
  path = '/message/GetCashExpenseTypes';
  request?: GetCashExpenseTypes;
  response?: GetCashExpenseTypesResponse;
}

export class SvcGetCashJournalDenominations implements IEvaServiceDefinition
{
  name = 'GetCashJournalDenominations';
  path = '/message/GetCashJournalDenominations';
  request?: GetCashJournalDenominations;
  response?: GetCashJournalDenominationsResponse;
}

export class SvcGetCashMovement implements IEvaServiceDefinition
{
  name = 'GetCashMovement';
  path = '/message/GetCashMovement';
  request?: GetCashMovement;
  response?: GetCashMovementResponse;
}

export class SvcGetCheckoutOptions implements IEvaServiceDefinition
{
  name = 'GetCheckoutOptions';
  path = '/message/GetCheckoutOptions';
  request?: GetCheckoutOptions;
  response?: GetCheckoutOptionsResponse;
}

export class SvcGetCompanyForUser implements IEvaServiceDefinition
{
  name = 'GetCompanyForUser';
  path = '/message/GetCompanyForUser';
  request?: GetCompanyForUser;
  response?: GetCompanyForUserResponse;
}

export class SvcGetConfigurableOrderView implements IEvaServiceDefinition
{
  name = 'GetConfigurableOrderView';
  path = '/message/GetConfigurableOrderView';
  request?: GetConfigurableOrderView;
  response?: GetConfigurableOrderViewResponse;
}

export class SvcGetConfigurableProductDetail implements IEvaServiceDefinition
{
  name = 'GetConfigurableProductDetail';
  path = '/message/GetConfigurableProductDetail';
  request?: GetConfigurableProductDetail;
  response?: GetConfigurableProductDetailResponse;
}

export class SvcGetConfigurableProductsDetail implements IEvaServiceDefinition
{
  name = 'GetConfigurableProductsDetail';
  path = '/message/GetConfigurableProductsDetail';
  request?: GetConfigurableProductsDetail;
  response?: GetConfigurableProductsDetailResponse;
}

export class SvcGetConsolidatedPickTask implements IEvaServiceDefinition
{
  name = 'GetConsolidatedPickTask';
  path = '/message/GetConsolidatedPickTask';
  request?: GetConsolidatedPickTask;
  response?: GetConsolidatedPickTaskResponse;
}

export class SvcGetConsumerCompany implements IEvaServiceDefinition
{
  name = 'GetConsumerCompany';
  path = '/message/GetConsumerCompany';
  request?: GetConsumerCompany;
  response?: GetConsumerCompanyResponse;
}

export class SvcGetContractNumber implements IEvaServiceDefinition
{
  name = 'GetContractNumber';
  path = '/message/GetContractNumber';
  request?: GetContractNumber;
  response?: GetContractNumberResponse;
}

export class SvcGetCountrySubdivisions implements IEvaServiceDefinition
{
  name = 'GetCountrySubdivisions';
  path = '/message/GetCountrySubdivisions';
  request?: GetCountrySubdivisions;
  response?: GetCountrySubdivisionsResponse;
}

export class SvcGetCurrency implements IEvaServiceDefinition
{
  name = 'GetCurrency';
  path = '/message/GetCurrency';
  request?: GetCurrency;
  response?: GetCurrencyResponse;
}

export class SvcGetCurrentApplication implements IEvaServiceDefinition
{
  name = 'GetCurrentApplication';
  path = '/message/GetCurrentApplication';
  request?: GetCurrentApplication;
  response?: GetCurrentApplicationResponse;
}

export class SvcGetCurrentCashJournals implements IEvaServiceDefinition
{
  name = 'GetCurrentCashJournals';
  path = '/message/GetCurrentCashJournals';
  request?: GetCurrentCashJournals;
  response?: GetCurrentCashJournalsResponse;
}

export class SvcGetCurrentFinancialPeriodSummary implements IEvaServiceDefinition
{
  name = 'GetCurrentFinancialPeriodSummary';
  path = '/message/GetCurrentFinancialPeriodSummary';
  request?: GetCurrentFinancialPeriodSummary;
  response?: GetCurrentFinancialPeriodSummaryResponse;
}

export class SvcGetCurrentInitialCycleCount implements IEvaServiceDefinition
{
  name = 'GetCurrentInitialCycleCount';
  path = '/message/GetCurrentInitialCycleCount';
  request?: GetCurrentInitialCycleCount;
  response?: GetCurrentInitialCycleCountResponse;
}

export class SvcGetCurrentUser implements IEvaServiceDefinition
{
  name = 'GetCurrentUser';
  path = '/message/GetCurrentUser';
  request?: GetCurrentUser;
  response?: GetCurrentUserResponse;
}

export class SvcGetCurrentUserIdentificationInfo implements IEvaServiceDefinition
{
  name = 'GetCurrentUserIdentificationInfo';
  path = '/message/GetCurrentUserIdentificationInfo';
  request?: GetCurrentUserIdentificationInfo;
  response?: GetCurrentUserIdentificationInfoResponse;
}

export class SvcGetCurrentVersion implements IEvaServiceDefinition
{
  name = 'GetCurrentVersion';
  path = '/message/GetCurrentVersion';
  request?: GetCurrentVersion;
  response?: GetCurrentVersionResponse;
}

export class SvcGetCustomerInteractionTaskByID implements IEvaServiceDefinition
{
  name = 'GetCustomerInteractionTaskByID';
  path = '/message/GetCustomerInteractionTaskByID';
  request?: GetCustomerInteractionTaskByID;
  response?: GetCustomerInteractionTaskByIDResponse;
}

export class SvcGetCustomerInteractionTaskTypeByID implements IEvaServiceDefinition
{
  name = 'GetCustomerInteractionTaskTypeByID';
  path = '/message/GetCustomerInteractionTaskTypeByID';
  request?: GetCustomerInteractionTaskTypeByID;
  response?: GetCustomerInteractionTaskTypeByIDResponse;
}

export class SvcGetCustomerInteractionTaskTypes implements IEvaServiceDefinition
{
  name = 'GetCustomerInteractionTaskTypes';
  path = '/message/GetCustomerInteractionTaskTypes';
  request?: GetCustomerInteractionTaskTypes;
  response?: GetCustomerInteractionTaskTypesResponse;
}

export class SvcGetCustomerOrderVerificationCode implements IEvaServiceDefinition
{
  name = 'GetCustomerOrderVerificationCode';
  path = '/message/GetCustomerOrderVerificationCode';
  request?: GetCustomerOrderVerificationCode;
  response?: GetVerificationCodeResponse;
}

export class SvcGetCustomerReturn implements IEvaServiceDefinition
{
  name = 'GetCustomerReturn';
  path = '/message/GetCustomerReturn';
  request?: GetCustomerReturn;
  response?: GetCustomerReturnResponse;
}

export class SvcGetCustomOrderTypes implements IEvaServiceDefinition
{
  name = 'GetCustomOrderTypes';
  path = '/message/GetCustomOrderTypes';
  request?: GetCustomOrderTypes;
  response?: GetCustomOrderTypesResponse;
}

export class SvcGetCustomUserTaskData implements IEvaServiceDefinition
{
  name = 'GetCustomUserTaskData';
  path = '/message/GetCustomUserTaskData';
  request?: GetCustomUserTaskData;
  response?: GetCustomUserTaskDataResponse;
}

export class SvcGetCycleCountOriginTypes implements IEvaServiceDefinition
{
  name = 'GetCycleCountOriginTypes';
  path = '/message/GetCycleCountOriginTypes';
  request?: GetCycleCountOriginTypes;
  response?: GetCycleCountOriginTypesResponse;
}

export class SvcGetCycleCountSettings implements IEvaServiceDefinition
{
  name = 'GetCycleCountSettings';
  path = '/message/GetCycleCountSettings';
  request?: GetCycleCountSettings;
  response?: GetCycleCountSettingsResponse;
}

export class SvcGetCycleCountZones implements IEvaServiceDefinition
{
  name = 'GetCycleCountZones';
  path = '/message/GetCycleCountZones';
  request?: GetCycleCountZones;
  response?: GetCycleCountZonesResponse;
}

export class SvcGetDeliveryOrderData implements IEvaServiceDefinition
{
  name = 'GetDeliveryOrderData';
  path = '/message/GetDeliveryOrderData';
  request?: GetDeliveryOrderData;
  response?: GetDeliveryOrderDataResponse;
}

export class SvcGetDetailedOrganizationUnitOpeningHours implements IEvaServiceDefinition
{
  name = 'GetDetailedOrganizationUnitOpeningHours';
  path = '/message/GetDetailedOrganizationUnitOpeningHours';
  request?: GetDetailedOrganizationUnitOpeningHours;
  response?: GetDetailedOrganizationUnitOpeningHoursResponse;
}

export class SvcGetDevice implements IEvaServiceDefinition
{
  name = 'GetDevice';
  path = '/message/GetDevice';
  request?: GetDevice;
  response?: GetDeviceResponse;
}

export class SvcGetDeviceTypes implements IEvaServiceDefinition
{
  name = 'GetDeviceTypes';
  path = '/message/GetDeviceTypes';
  request?: GetDeviceTypes;
  response?: GetDeviceTypesResponse;
}

export class SvcGetDigitalGiftCardMailOptions implements IEvaServiceDefinition
{
  name = 'GetDigitalGiftCardMailOptions';
  path = '/message/GetDigitalGiftCardMailOptions';
  request?: GetDigitalGiftCardMailOptions;
  response?: GetDigitalGiftCardOptionsResponse;
}

export class SvcGetDigitalGiftCardOptions implements IEvaServiceDefinition
{
  name = 'GetDigitalGiftCardOptions';
  path = '/message/GetDigitalGiftCardOptions';
  request?: GetDigitalGiftCardOptions;
  response?: GetDigitalGiftCardOptionsResponse;
}

export class SvcGetDigitalGiftCardsForOrder implements IEvaServiceDefinition
{
  name = 'GetDigitalGiftCardsForOrder';
  path = '/message/GetDigitalGiftCardsForOrder';
  request?: GetDigitalGiftCardsForOrder;
  response?: GetDigitalGiftCardsForOrderResponse;
}

export class SvcGetDiscountProductOptionsForOrder implements IEvaServiceDefinition
{
  name = 'GetDiscountProductOptionsForOrder';
  path = '/message/GetDiscountProductOptionsForOrder';
  request?: GetDiscountProductOptionsForOrder;
  response?: GetDiscountProductOptionsForOrderResponse;
}

export class SvcGetDiscountProductOptionsForOrderLine implements IEvaServiceDefinition
{
  name = 'GetDiscountProductOptionsForOrderLine';
  path = '/message/GetDiscountProductOptionsForOrderLine';
  request?: GetDiscountProductOptionsForOrderLine;
  response?: GetDiscountProductOptionsForOrderLineResponse;
}

export class SvcGetElectronicInvoiceData implements IEvaServiceDefinition
{
  name = 'GetElectronicInvoiceData';
  path = '/message/GetElectronicInvoiceData';
  request?: GetElectronicInvoiceData;
  response?: GetElectronicInvoiceDataResponse;
}

export class SvcGetElevationSkipReasons implements IEvaServiceDefinition
{
  name = 'GetElevationSkipReasons';
  path = '/message/GetElevationSkipReasons';
  request?: GetElevationSkipReasons;
  response?: GetElevationSkipReasonsResponse;
}

export class SvcGetEmailAddressDomainSuggestions implements IEvaServiceDefinition
{
  name = 'GetEmailAddressDomainSuggestions';
  path = '/message/GetEmailAddressDomainSuggestions';
  request?: GetEmailAddressDomainSuggestions;
  response?: GetEmailAddressDomainSuggestionsResponse;
}

export class SvcGetEmployeeOrderVerificationCode implements IEvaServiceDefinition
{
  name = 'GetEmployeeOrderVerificationCode';
  path = '/message/GetEmployeeOrderVerificationCode';
  request?: GetEmployeeOrderVerificationCode;
  response?: GetVerificationCodeResponse;
}

export class SvcGetEntityBlobTranslation implements IEvaServiceDefinition
{
  name = 'GetEntityBlobTranslation';
  path = '/message/GetEntityBlobTranslation';
  request?: GetEntityBlobTranslation;
  response?: GetEntityBlobTranslationResponse;
}

export class SvcGetEntityTranslation implements IEvaServiceDefinition
{
  name = 'GetEntityTranslation';
  path = '/message/GetEntityTranslation';
  request?: GetEntityTranslation;
  response?: GetEntityTranslationResponse;
}

export class SvcGetEnumValues implements IEvaServiceDefinition
{
  name = 'GetEnumValues';
  path = '/message/GetEnumValues';
  request?: GetEnumValues;
  response?: GetEnumValuesResponse;
}

export class SvcGetEventAvailability implements IEvaServiceDefinition
{
  name = 'GetEventAvailability';
  path = '/message/GetEventAvailability';
  request?: GetEventAvailability;
  response?: GetEventAvailabilityResponse;
}

export class SvcGetEventExportConfiguration implements IEvaServiceDefinition
{
  name = 'GetEventExportConfiguration';
  path = '/message/GetEventExportConfiguration';
  request?: GetEventExportConfiguration;
  response?: GetEventExportConfigurationResponse;
}

export class SvcGetEventExportConfigurations implements IEvaServiceDefinition
{
  name = 'GetEventExportConfigurations';
  path = '/message/GetEventExportConfigurations';
  request?: GetEventExportConfigurations;
  response?: GetEventExportConfigurationsResponse;
}

export class SvcGetEventExportTargetTypes implements IEvaServiceDefinition
{
  name = 'GetEventExportTargetTypes';
  path = '/message/GetEventExportTargetTypes';
  request?: GetEventExportTargetTypes;
  response?: GetEventExportTargetTypesResponse;
}

export class SvcGetEventLedgerTypes implements IEvaServiceDefinition
{
  name = 'GetEventLedgerTypes';
  path = '/message/GetEventLedgerTypes';
  request?: GetEventLedgerTypes;
  response?: GetEventLedgerTypesResponse;
}

export class SvcGetEventOrganizationUnits implements IEvaServiceDefinition
{
  name = 'GetEventOrganizationUnits';
  path = '/message/GetEventOrganizationUnits';
  request?: GetEventOrganizationUnits;
  response?: GetEventOrganizationUnitsResponse;
}

export class SvcGetEventTypes implements IEvaServiceDefinition
{
  name = 'GetEventTypes';
  path = '/message/GetEventTypes';
  request?: GetEventTypes;
  response?: GetEventTypesResponse;
}

export class SvcGetFinancialPeriodAccountsSummary implements IEvaServiceDefinition
{
  name = 'GetFinancialPeriodAccountsSummary';
  path = '/message/GetFinancialPeriodAccountsSummary';
  request?: GetFinancialPeriodAccountsSummary;
  response?: GetFinancialPeriodAccountsSummaryResponse;
}

export class SvcGetFinancialPeriodCashJournalDeviceSummary implements IEvaServiceDefinition
{
  name = 'GetFinancialPeriodCashJournalDeviceSummary';
  path = '/message/GetFinancialPeriodCashJournalDeviceSummary';
  request?: GetFinancialPeriodCashJournalDeviceSummary;
  response?: GetFinancialPeriodCashJournalDeviceSummaryResponse;
}

export class SvcGetFinancialPeriodClosingImpediments implements IEvaServiceDefinition
{
  name = 'GetFinancialPeriodClosingImpediments';
  path = '/message/GetFinancialPeriodClosingImpediments';
  request?: GetFinancialPeriodClosingImpediments;
  response?: GetFinancialPeriodClosingImpedimentsResponse;
}

export class SvcGetFinancialPeriodClosingStockInformation implements IEvaServiceDefinition
{
  name = 'GetFinancialPeriodClosingStockInformation';
  path = '/message/GetFinancialPeriodClosingStockInformation';
  request?: GetFinancialPeriodClosingStockInformation;
  response?: GetFinancialPeriodClosingStockInformationResponse;
}

export class SvcGetFinancialPeriodDetails implements IEvaServiceDefinition
{
  name = 'GetFinancialPeriodDetails';
  path = '/message/GetFinancialPeriodDetails';
  request?: GetFinancialPeriodDetails;
  response?: GetFinancialPeriodDetailsResponse;
}

export class SvcGetFinancialPeriodExportDocuments implements IEvaServiceDefinition
{
  name = 'GetFinancialPeriodExportDocuments';
  path = '/message/GetFinancialPeriodExportDocuments';
  request?: GetFinancialPeriodExportDocuments;
  response?: GetFinancialPeriodExportDocumentsResponse;
}

export class SvcGetFinancialPeriodInformation implements IEvaServiceDefinition
{
  name = 'GetFinancialPeriodInformation';
  path = '/message/GetFinancialPeriodInformation';
  request?: GetFinancialPeriodInformation;
  response?: GetFinancialPeriodInformationResponse;
}

export class SvcGetFinancialPeriodOpeningImpediments implements IEvaServiceDefinition
{
  name = 'GetFinancialPeriodOpeningImpediments';
  path = '/message/GetFinancialPeriodOpeningImpediments';
  request?: GetFinancialPeriodOpeningImpediments;
  response?: GetFinancialPeriodOpeningImpedimentsResponse;
}

export class SvcGetFiscalOrderData implements IEvaServiceDefinition
{
  name = 'GetFiscalOrderData';
  path = '/message/GetFiscalOrderData';
  request?: GetFiscalOrderData;
  response?: GetFiscalOrderDataResponse;
}

export class SvcGetFlight implements IEvaServiceDefinition
{
  name = 'GetFlight';
  path = '/message/GetFlight';
  request?: GetFlight;
  response?: GetFlightResponse;
}

export class SvcGetFullStockCount implements IEvaServiceDefinition
{
  name = 'GetFullStockCount';
  path = '/message/GetFullStockCount';
  request?: GetFullStockCount;
  response?: GetFullStockCountResponse;
}

export class SvcGetFullStockCountLabelProduct implements IEvaServiceDefinition
{
  name = 'GetFullStockCountLabelProduct';
  path = '/message/GetFullStockCountLabelProduct';
  request?: GetFullStockCountLabelProduct;
  response?: GetFullStockCountLabelProductResponse;
}

export class SvcGetFuturePrices implements IEvaServiceDefinition
{
  name = 'GetFuturePrices';
  path = '/message/GetFuturePrices';
  request?: GetFuturePrices;
  response?: GetFuturePricesResponse;
}

export class SvcGetGiftCardOptions implements IEvaServiceDefinition
{
  name = 'GetGiftCardOptions';
  path = '/message/GetGiftCardOptions';
  request?: GetGiftCardOptions;
  response?: GetGiftCardOptionsResponse;
}

export class SvcGetGiftWrappingOptionsForOrder implements IEvaServiceDefinition
{
  name = 'GetGiftWrappingOptionsForOrder';
  path = '/message/GetGiftWrappingOptionsForOrder';
  request?: GetGiftWrappingOptionsForOrder;
  response?: GetGiftWrappingOptionsForOrderResponse;
}

export class SvcGetGreetingCards implements IEvaServiceDefinition
{
  name = 'GetGreetingCards';
  path = '/message/GetGreetingCards';
  request?: GetGreetingCards;
  response?: GetGreetingCardsResponse;
}

export class SvcGetInitialCycleCountLabel implements IEvaServiceDefinition
{
  name = 'GetInitialCycleCountLabel';
  path = '/message/GetInitialCycleCountLabel';
  request?: GetInitialCycleCountLabel;
  response?: GetInitialCycleCountLabelResponse;
}

export class SvcGetInitializationState implements IEvaServiceDefinition
{
  name = 'GetInitializationState';
  path = '/message/GetInitializationState';
  request?: GetInitializationState;
  response?: InitializationStateResponse;
}

export class SvcGetInquiry implements IEvaServiceDefinition
{
  name = 'GetInquiry';
  path = '/message/GetInquiry';
  request?: GetInquiry;
  response?: GetInquiryResponse;
}

export class SvcGetInvoice implements IEvaServiceDefinition
{
  name = 'GetInvoice';
  path = '/message/GetInvoice';
  request?: GetInvoice;
  response?: GetInvoiceResponse;
}

export class SvcGetInvoiceAdditionalAmountsForInvoice implements IEvaServiceDefinition
{
  name = 'GetInvoiceAdditionalAmountsForInvoice';
  path = '/message/GetInvoiceAdditionalAmountsForInvoice';
  request?: GetInvoiceAdditionalAmountsForInvoice;
  response?: GetInvoiceAdditionalAmountsForInvoiceResponse;
}

export class SvcGetInvoiceAdditionalAmountTypeByID implements IEvaServiceDefinition
{
  name = 'GetInvoiceAdditionalAmountTypeByID';
  path = '/message/GetInvoiceAdditionalAmountTypeByID';
  request?: GetInvoiceAdditionalAmountTypeByID;
  response?: GetInvoiceAdditionalAmountTypeByIDResponse;
}

export class SvcGetInvoiceAdditionalAmountTypes implements IEvaServiceDefinition
{
  name = 'GetInvoiceAdditionalAmountTypes';
  path = '/message/GetInvoiceAdditionalAmountTypes';
  request?: GetInvoiceAdditionalAmountTypes;
  response?: GetInvoiceAdditionalAmountTypesResponse;
}

export class SvcGetInvoiceDisputeReasonByID implements IEvaServiceDefinition
{
  name = 'GetInvoiceDisputeReasonByID';
  path = '/message/GetInvoiceDisputeReasonByID';
  request?: GetInvoiceDisputeReasonByID;
  response?: GetInvoiceDisputeReasonByIDResponse;
}

export class SvcGetInvoiceDisputeReasons implements IEvaServiceDefinition
{
  name = 'GetInvoiceDisputeReasons';
  path = '/message/GetInvoiceDisputeReasons';
  request?: GetInvoiceDisputeReasons;
  response?: GetInvoiceDisputeReasonsResponse;
}

export class SvcGetInvoiceDisputesForInvoice implements IEvaServiceDefinition
{
  name = 'GetInvoiceDisputesForInvoice';
  path = '/message/GetInvoiceDisputesForInvoice';
  request?: GetInvoiceDisputesForInvoice;
  response?: GetInvoiceDisputesForInvoiceResponse;
}

export class SvcGetInvoiceExport implements IEvaServiceDefinition
{
  name = 'GetInvoiceExport';
  path = '/message/GetInvoiceExport';
  request?: GetInvoiceExport;
  response?: GetInvoiceExportResponse;
}

export class SvcGetInvoiceExportByID implements IEvaServiceDefinition
{
  name = 'GetInvoiceExportByID';
  path = '/message/GetInvoiceExportByID';
  request?: GetInvoiceExportByID;
  response?: GetInvoiceExportByIDResponse;
}

export class SvcGetInvoiceExportDocuments implements IEvaServiceDefinition
{
  name = 'GetInvoiceExportDocuments';
  path = '/message/GetInvoiceExportDocuments';
  request?: GetInvoiceExportDocuments;
  response?: GetInvoiceExportDocumentsResponse;
}

export class SvcGetInvoiceOutputTypes implements IEvaServiceDefinition
{
  name = 'GetInvoiceOutputTypes';
  path = '/message/GetInvoiceOutputTypes';
  request?: GetInvoiceOutputTypes;
  response?: GetInvoiceOutputTypesResponse;
}

export class SvcGetInvoicePayments implements IEvaServiceDefinition
{
  name = 'GetInvoicePayments';
  path = '/message/GetInvoicePayments';
  request?: GetInvoicePayments;
  response?: GetInvoicePaymentsResponse;
}

export class SvcGetLoginOrganizationUnitsForUser implements IEvaServiceDefinition
{
  name = 'GetLoginOrganizationUnitsForUser';
  path = '/message/GetLoginOrganizationUnitsForUser';
  request?: GetLoginOrganizationUnitsForUser;
  response?: GetLoginOrganizationUnitsForUserResponse;
}

export class SvcGetLotteryNumber implements IEvaServiceDefinition
{
  name = 'GetLotteryNumber';
  path = '/message/GetLotteryNumber';
  request?: GetLotteryNumber;
  response?: GetLotteryNumberResponse;
}

export class SvcGetMessageQueueError implements IEvaServiceDefinition
{
  name = 'GetMessageQueueError';
  path = '/message/GetMessageQueueError';
  request?: GetMessageQueueError;
  response?: GetMessageQueueErrorResponse;
}

export class SvcGetOpenCashDrawerReasons implements IEvaServiceDefinition
{
  name = 'GetOpenCashDrawerReasons';
  path = '/message/GetOpenCashDrawerReasons';
  request?: GetOpenCashDrawerReasons;
  response?: GetOpenCashDrawerReasonsResponse;
}

export class SvcGetOpeningHoursTemplateByID implements IEvaServiceDefinition
{
  name = 'GetOpeningHoursTemplateByID';
  path = '/message/GetOpeningHoursTemplateByID';
  request?: GetOpeningHoursTemplateByID;
  response?: GetOpeningHoursTemplateResponseByID;
}

export class SvcGetOpeningHoursTemplatesTranslationKeys implements IEvaServiceDefinition
{
  name = 'GetOpeningHoursTemplatesTranslationKeys';
  path = '/message/GetOpeningHoursTemplatesTranslationKeys';
  request?: GetOpeningHoursTemplatesTranslationKeys;
  response?: GetOpeningHoursTemplatesTranslationKeysResponse;
}

export class SvcGetOperationalTaskConfig implements IEvaServiceDefinition
{
  name = 'GetOperationalTaskConfig';
  path = '/message/GetOperationalTaskConfig';
  request?: GetOperationalTaskConfig;
  response?: GetOperationalTaskConfigResponse;
}

export class SvcGetOrder implements IEvaServiceDefinition
{
  name = 'GetOrder';
  path = '/message/GetOrder';
  request?: GetOrder;
  response?: GetOrderResponse;
}

export class SvcGetOrderCustomStatusLedger implements IEvaServiceDefinition
{
  name = 'GetOrderCustomStatusLedger';
  path = '/message/GetOrderCustomStatusLedger';
  request?: GetOrderCustomStatusLedger;
  response?: GetOrderCustomStatusLedgerResponse;
}

export class SvcGetOrderDiscountInfo implements IEvaServiceDefinition
{
  name = 'GetOrderDiscountInfo';
  path = '/message/GetOrderDiscountInfo';
  request?: GetOrderDiscountInfo;
  response?: GetOrderDiscountInfoResponse;
}

export class SvcGetOrderExportByID implements IEvaServiceDefinition
{
  name = 'GetOrderExportByID';
  path = '/message/GetOrderExportByID';
  request?: GetOrderExportByID;
  response?: GetOrderExportByIDResponse;
}

export class SvcGetOrderExportDocuments implements IEvaServiceDefinition
{
  name = 'GetOrderExportDocuments';
  path = '/message/GetOrderExportDocuments';
  request?: GetOrderExportDocuments;
  response?: GetOrderExportDocumentsResponse;
}

export class SvcGetOrderFulfillment implements IEvaServiceDefinition
{
  name = 'GetOrderFulfillment';
  path = '/message/GetOrderFulfillment';
  request?: GetOrderFulfillment;
  response?: GetOrderFulfillmentResponse;
}

export class SvcGetOrderFulfillmentOptions implements IEvaServiceDefinition
{
  name = 'GetOrderFulfillmentOptions';
  path = '/message/GetOrderFulfillmentOptions';
  request?: GetOrderFulfillmentOptions;
  response?: GetOrderFulfillmentOptionsResponse;
}

export class SvcGetOrderFulfillmentSupplierPerformance implements IEvaServiceDefinition
{
  name = 'GetOrderFulfillmentSupplierPerformance';
  path = '/message/GetOrderFulfillmentSupplierPerformance';
  request?: GetOrderFulfillmentSupplierPerformance;
  response?: GetOrderFulfillmentSupplierPerformanceResponse;
}

export class SvcGetOrderLinks implements IEvaServiceDefinition
{
  name = 'GetOrderLinks';
  path = '/message/GetOrderLinks';
  request?: GetOrderLinks;
  response?: GetOrderLinksResponse;
}

export class SvcGetOrderLinkTypeByID implements IEvaServiceDefinition
{
  name = 'GetOrderLinkTypeByID';
  path = '/message/GetOrderLinkTypeByID';
  request?: GetOrderLinkTypeByID;
  response?: GetOrderLinkTypeByIDResponse;
}

export class SvcGetOrderLinkTypes implements IEvaServiceDefinition
{
  name = 'GetOrderLinkTypes';
  path = '/message/GetOrderLinkTypes';
  request?: GetOrderLinkTypes;
  response?: GetOrderLinkTypesResponse;
}

export class SvcGetOrderLoyaltyData implements IEvaServiceDefinition
{
  name = 'GetOrderLoyaltyData';
  path = '/message/GetOrderLoyaltyData';
  request?: GetOrderLoyaltyData;
  response?: GetOrderLoyaltyDataResponse;
}

export class SvcGetOrdersForReturnOrder implements IEvaServiceDefinition
{
  name = 'GetOrdersForReturnOrder';
  path = '/message/GetOrdersForReturnOrder';
  request?: GetOrdersForReturnOrder;
  response?: GetOrdersForReturnOrderResponse;
}

export class SvcGetOrderSignature implements IEvaServiceDefinition
{
  name = 'GetOrderSignature';
  path = '/message/GetOrderSignature';
  request?: GetOrderSignature;
  response?: ResourceResponseMessage;
}

export class SvcGetOrderSignatures implements IEvaServiceDefinition
{
  name = 'GetOrderSignatures';
  path = '/message/GetOrderSignatures';
  request?: GetOrderSignatures;
  response?: GetOrderSignaturesResponse;
}

export class SvcGetOrderStatistics implements IEvaServiceDefinition
{
  name = 'GetOrderStatistics';
  path = '/message/GetOrderStatistics';
  request?: GetOrderStatistics;
  response?: GetOrderStatisticsResponse;
}

export class SvcGetOrderSummary implements IEvaServiceDefinition
{
  name = 'GetOrderSummary';
  path = '/message/GetOrderSummary';
  request?: GetOrderSummary;
  response?: GetOrderSummaryResponse;
}

export class SvcGetOrderSummaryForShipping implements IEvaServiceDefinition
{
  name = 'GetOrderSummaryForShipping';
  path = '/message/GetOrderSummaryForShipping';
  request?: GetOrderSummaryForShipping;
  response?: GetOrderSummaryForShippingResponse;
}

export class SvcGetOrderTaxDetails implements IEvaServiceDefinition
{
  name = 'GetOrderTaxDetails';
  path = '/message/GetOrderTaxDetails';
  request?: GetOrderTaxDetails;
  response?: GetOrderTaxDetailsResponse;
}

export class SvcGetOrderVerificationReason implements IEvaServiceDefinition
{
  name = 'GetOrderVerificationReason';
  path = '/message/GetOrderVerificationReason';
  request?: GetOrderVerificationReason;
  response?: GetOrderVerificationReasonResponse;
}

export class SvcGetOrganizationUnit implements IEvaServiceDefinition
{
  name = 'GetOrganizationUnit';
  path = '/message/GetOrganizationUnit';
  request?: GetOrganizationUnit;
  response?: GetOrganizationUnitResponse;
}

export class SvcGetOrganizationUnitCreditBalance implements IEvaServiceDefinition
{
  name = 'GetOrganizationUnitCreditBalance';
  path = '/message/GetOrganizationUnitCreditBalance';
  request?: GetOrganizationUnitCreditBalance;
  response?: GetOrganizationUnitCreditBalanceResponse;
}

export class SvcGetOrganizationUnitDetailed implements IEvaServiceDefinition
{
  name = 'GetOrganizationUnitDetailed';
  path = '/message/GetOrganizationUnitDetailed';
  request?: GetOrganizationUnitDetailed;
  response?: GetOrganizationUnitDetailedResponse;
}

export class SvcGetOrganizationUnitNotes implements IEvaServiceDefinition
{
  name = 'GetOrganizationUnitNotes';
  path = '/message/GetOrganizationUnitNotes';
  request?: GetOrganizationUnitNotes;
  response?: GetOrganizationUnitNotesResponse;
}

export class SvcGetOrganizationUnitOpeningHours implements IEvaServiceDefinition
{
  name = 'GetOrganizationUnitOpeningHours';
  path = '/message/GetOrganizationUnitOpeningHours';
  request?: GetOrganizationUnitOpeningHours;
  response?: GetOrganizationUnitOpeningHoursResponse;
}

export class SvcGetOrganizationUnitOpeningHoursForPeriod implements IEvaServiceDefinition
{
  name = 'GetOrganizationUnitOpeningHoursForPeriod';
  path = '/message/GetOrganizationUnitOpeningHoursForPeriod';
  request?: GetOrganizationUnitOpeningHoursForPeriod;
  response?: GetOrganizationUnitOpeningHoursForPeriodResponse;
}

export class SvcGetOrganizationUnitSettings implements IEvaServiceDefinition
{
  name = 'GetOrganizationUnitSettings';
  path = '/message/GetOrganizationUnitSettings';
  request?: GetOrganizationUnitSettings;
  response?: GetOrganizationUnitSettingsResponse;
}

export class SvcGetOrganizationUnitsForUser implements IEvaServiceDefinition
{
  name = 'GetOrganizationUnitsForUser';
  path = '/message/GetOrganizationUnitsForUser';
  request?: GetOrganizationUnitsForUser;
  response?: GetOrganizationUnitsForUserResponse;
}

export class SvcGetOrganizationUnitsHierarchy implements IEvaServiceDefinition
{
  name = 'GetOrganizationUnitsHierarchy';
  path = '/message/GetOrganizationUnitsHierarchy';
  request?: GetOrganizationUnitsHierarchy;
  response?: GetOrganizationUnitsHierarchyResponse;
}

export class SvcGetOrganizationUnitsStructure implements IEvaServiceDefinition
{
  name = 'GetOrganizationUnitsStructure';
  path = '/message/GetOrganizationUnitsStructure';
  request?: GetOrganizationUnitsStructure;
  response?: GetOrganizationUnitsStructureResponse;
}

export class SvcGetOrganizationUnitSummary implements IEvaServiceDefinition
{
  name = 'GetOrganizationUnitSummary';
  path = '/message/GetOrganizationUnitSummary';
  request?: GetOrganizationUnitSummary;
  response?: GetOrganizationUnitSummaryResponse;
}

export class SvcGetOverdueAppointmentsCount implements IEvaServiceDefinition
{
  name = 'GetOverdueAppointmentsCount';
  path = '/message/GetOverdueAppointmentsCount';
  request?: GetOverdueAppointmentsCount;
  response?: GetOverdueAppointmentsCountResponse;
}

export class SvcGetPasskeyChallenge implements IEvaServiceDefinition
{
  name = 'GetPasskeyChallenge';
  path = '/message/GetPasskeyChallenge';
  request?: GetPasskeyChallenge;
  response?: GetPasskeyChallengeResponse;
}

export class SvcGetPasskeyInfo implements IEvaServiceDefinition
{
  name = 'GetPasskeyInfo';
  path = '/message/GetPasskeyInfo';
  request?: GetPasskeyInfo;
  response?: GetPasskeyInfoResponse;
}

export class SvcGetPaymentTransaction implements IEvaServiceDefinition
{
  name = 'GetPaymentTransaction';
  path = '/message/GetPaymentTransaction';
  request?: GetPaymentTransaction;
  response?: GetPaymentTransactionResponse;
}

export class SvcGetPaymentTransactionsForInvoice implements IEvaServiceDefinition
{
  name = 'GetPaymentTransactionsForInvoice';
  path = '/message/GetPaymentTransactionsForInvoice';
  request?: GetPaymentTransactionsForInvoice;
  response?: GetPaymentTransactionsResponse;
}

export class SvcGetPaymentTransactionsForOrder implements IEvaServiceDefinition
{
  name = 'GetPaymentTransactionsForOrder';
  path = '/message/GetPaymentTransactionsForOrder';
  request?: GetPaymentTransactionsForOrder;
  response?: GetPaymentTransactionsResponse;
}

export class SvcGetPendingShipmentInformationForOrderLines implements IEvaServiceDefinition
{
  name = 'GetPendingShipmentInformationForOrderLines';
  path = '/message/GetPendingShipmentInformationForOrderLines';
  request?: GetPendingShipmentInformationForOrderLines;
  response?: GetPendingShipmentInformationForOrderLinesResponse;
}

export class SvcGetPeppolData implements IEvaServiceDefinition
{
  name = 'GetPeppolData';
  path = '/message/GetPeppolData';
  request?: GetPeppolData;
  response?: GetPeppolDataResponse;
}

export class SvcGetPickProductDiscountOptionsForOrder implements IEvaServiceDefinition
{
  name = 'GetPickProductDiscountOptionsForOrder';
  path = '/message/GetPickProductDiscountOptionsForOrder';
  request?: GetPickProductDiscountOptionsForOrder;
  response?: GetPickProductDiscountOptionsForOrderResponse;
}

export class SvcGetPickProductDiscountOptionsForOrderLine implements IEvaServiceDefinition
{
  name = 'GetPickProductDiscountOptionsForOrderLine';
  path = '/message/GetPickProductDiscountOptionsForOrderLine';
  request?: GetPickProductDiscountOptionsForOrderLine;
  response?: GetPickProductDiscountOptionsForOrderLineResponse;
}

export class SvcGetPotentialBundleProductsForOrder implements IEvaServiceDefinition
{
  name = 'GetPotentialBundleProductsForOrder';
  path = '/message/GetPotentialBundleProductsForOrder';
  request?: GetPotentialBundleProductsForOrder;
  response?: GetPotentialBundleProductsForOrderResponse;
}

export class SvcGetPotentialDiscountsForOrder implements IEvaServiceDefinition
{
  name = 'GetPotentialDiscountsForOrder';
  path = '/message/GetPotentialDiscountsForOrder';
  request?: GetPotentialDiscountsForOrder;
  response?: GetPotentialDiscountsResponse;
}

export class SvcGetPotentialDiscountsForProductSearch implements IEvaServiceDefinition
{
  name = 'GetPotentialDiscountsForProductSearch';
  path = '/message/GetPotentialDiscountsForProductSearch';
  request?: GetPotentialDiscountsForProductSearch;
  response?: GetPotentialDiscountsResponse;
}

export class SvcGetPotentialProductPricing implements IEvaServiceDefinition
{
  name = 'GetPotentialProductPricing';
  path = '/message/GetPotentialProductPricing';
  request?: GetPotentialProductPricing;
  response?: GetPotentialProductPricingResponse;
}

export class SvcGetPotentialSubscriptionProductsForOrder implements IEvaServiceDefinition
{
  name = 'GetPotentialSubscriptionProductsForOrder';
  path = '/message/GetPotentialSubscriptionProductsForOrder';
  request?: GetPotentialSubscriptionProductsForOrder;
  response?: GetPotentialSubscriptionProductsForOrderResponse;
}

export class SvcGetPreferredRefundMethod implements IEvaServiceDefinition
{
  name = 'GetPreferredRefundMethod';
  path = '/message/GetPreferredRefundMethod';
  request?: GetPreferredRefundMethod;
  response?: GetPreferredRefundMethodResponse;
}

export class SvcGetPrePickedShipFromStoreTask implements IEvaServiceDefinition
{
  name = 'GetPrePickedShipFromStoreTask';
  path = '/message/GetPrePickedShipFromStoreTask';
  request?: GetPrePickedShipFromStoreTask;
  response?: GetPrePickedShipFromStoreTaskResponse;
}

export class SvcGetProductAvailability implements IEvaServiceDefinition
{
  name = 'GetProductAvailability';
  path = '/message/GetProductAvailability';
  request?: GetProductAvailability;
  response?: GetProductAvailabilityResponse;
}

export class SvcGetProductBundle implements IEvaServiceDefinition
{
  name = 'GetProductBundle';
  path = '/message/GetProductBundle';
  request?: GetProductBundle;
  response?: GetProductBundleResponse;
}

export class SvcGetProductDetail implements IEvaServiceDefinition
{
  name = 'GetProductDetail';
  path = '/message/GetProductDetail';
  request?: GetProductDetail;
  response?: GetProductDetailResponse;
}

export class SvcGetProductPrices implements IEvaServiceDefinition
{
  name = 'GetProductPrices';
  path = '/message/GetProductPrices';
  request?: GetProductPrices;
  response?: GetProductPricesResponse;
}

export class SvcGetProductPricing implements IEvaServiceDefinition
{
  name = 'GetProductPricing';
  path = '/message/GetProductPricing';
  request?: GetProductPricing;
  response?: GetProductPricingResponse;
}

export class SvcGetProductRecommendation implements IEvaServiceDefinition
{
  name = 'GetProductRecommendation';
  path = '/message/GetProductRecommendation';
  request?: GetProductRecommendation;
  response?: GetProductRecommendationResponse;
}

export class SvcGetProductRelations implements IEvaServiceDefinition
{
  name = 'GetProductRelations';
  path = '/message/GetProductRelations';
  request?: GetProductRelations;
  response?: GetProductRelationsResponse;
}

export class SvcGetProductRequirementValuesForOrder implements IEvaServiceDefinition
{
  name = 'GetProductRequirementValuesForOrder';
  path = '/message/GetProductRequirementValuesForOrder';
  request?: GetProductRequirementValuesForOrder;
  response?: GetProductRequirementValuesForOrderResponse;
}

export class SvcGetProductRequirementValuesForOrderLine implements IEvaServiceDefinition
{
  name = 'GetProductRequirementValuesForOrderLine';
  path = '/message/GetProductRequirementValuesForOrderLine';
  request?: GetProductRequirementValuesForOrderLine;
  response?: GetProductRequirementValuesForOrderLineResponse;
}

export class SvcGetProductRunRates implements IEvaServiceDefinition
{
  name = 'GetProductRunRates';
  path = '/message/GetProductRunRates';
  request?: GetProductRunRates;
  response?: GetProductRunRatesResponse;
}

export class SvcGetProducts implements IEvaServiceDefinition
{
  name = 'GetProducts';
  path = '/message/GetProducts';
  request?: GetProducts;
  response?: GetProductsResponse;
}

export class SvcGetProductSearchSuggestions implements IEvaServiceDefinition
{
  name = 'GetProductSearchSuggestions';
  path = '/message/GetProductSearchSuggestions';
  request?: GetProductSearchSuggestions;
  response?: GetProductSearchSuggestionsResponse;
}

export class SvcGetProductStructure implements IEvaServiceDefinition
{
  name = 'GetProductStructure';
  path = '/message/GetProductStructure';
  request?: GetProductStructure;
  response?: GetProductStructureResponse;
}

export class SvcGetProductSubscriptionsForUser implements IEvaServiceDefinition
{
  name = 'GetProductSubscriptionsForUser';
  path = '/message/GetProductSubscriptionsForUser';
  request?: GetProductSubscriptionsForUser;
  response?: GetProductSubscriptionsForUserResponse;
}

export class SvcGetProductSupplierInfoForProducts implements IEvaServiceDefinition
{
  name = 'GetProductSupplierInfoForProducts';
  path = '/message/GetProductSupplierInfoForProducts';
  request?: GetProductSupplierInfoForProducts;
  response?: GetProductSupplierInfoForProductsResponse;
}

export class SvcGetProductUnitOfMeasureQuantities implements IEvaServiceDefinition
{
  name = 'GetProductUnitOfMeasureQuantities';
  path = '/message/GetProductUnitOfMeasureQuantities';
  request?: GetProductUnitOfMeasureQuantities;
  response?: GetProductUnitOfMeasureQuantitiesResponse;
}

export class SvcGetProductWarranty implements IEvaServiceDefinition
{
  name = 'GetProductWarranty';
  path = '/message/GetProductWarranty';
  request?: GetProductWarranty;
  response?: GetProductWarrantyResponse;
}

export class SvcGetProductZone implements IEvaServiceDefinition
{
  name = 'GetProductZone';
  path = '/message/GetProductZone';
  request?: GetProductZone;
  response?: ProductZoneDto;
}

export class SvcGetProductZoneGroup implements IEvaServiceDefinition
{
  name = 'GetProductZoneGroup';
  path = '/message/GetProductZoneGroup';
  request?: GetProductZoneGroup;
  response?: ProductZoneGroupDto;
}

export class SvcGetPurchaseOrderShipment implements IEvaServiceDefinition
{
  name = 'GetPurchaseOrderShipment';
  path = '/message/GetPurchaseOrderShipment';
  request?: GetPurchaseOrderShipment;
  response?: GetPurchaseOrderShipmentResponse;
}

export class SvcGetQuantityOnHandForProducts implements IEvaServiceDefinition
{
  name = 'GetQuantityOnHandForProducts';
  path = '/message/GetQuantityOnHandForProducts';
  request?: GetQuantityOnHandForProducts;
  response?: GetQuantityOnHandForProductsResponse;
}

export class SvcGetQuickBuy implements IEvaServiceDefinition
{
  name = 'GetQuickBuy';
  path = '/message/GetQuickBuy';
  request?: GetQuickBuy;
  response?: GetQuickBuyResponse;
}

export class SvcGetQuickBuyOptions implements IEvaServiceDefinition
{
  name = 'GetQuickBuyOptions';
  path = '/message/GetQuickBuyOptions';
  request?: GetQuickBuyOptions;
  response?: GetQuickBuyOptionsResponse;
}

export class SvcGetQuickBuys implements IEvaServiceDefinition
{
  name = 'GetQuickBuys';
  path = '/message/GetQuickBuys';
  request?: GetQuickBuys;
  response?: GetQuickBuysResponse;
}

export class SvcGetRecurringScheduledTask implements IEvaServiceDefinition
{
  name = 'GetRecurringScheduledTask';
  path = '/message/GetRecurringScheduledTask';
  request?: GetRecurringScheduledTask;
  response?: GetRecurringScheduledTaskResponse;
}

export class SvcGetRecurringTaskLogging implements IEvaServiceDefinition
{
  name = 'GetRecurringTaskLogging';
  path = '/message/GetRecurringTaskLogging';
  request?: GetRecurringTaskLogging;
  response?: GetRecurringTaskLoggingResponse;
}

export class SvcGetRecurringTaskRuns implements IEvaServiceDefinition
{
  name = 'GetRecurringTaskRuns';
  path = '/message/GetRecurringTaskRuns';
  request?: GetRecurringTaskRuns;
  response?: GetRecurringTaskRunsResponse;
}

export class SvcGetRefundCorrectionReasons implements IEvaServiceDefinition
{
  name = 'GetRefundCorrectionReasons';
  path = '/message/GetRefundCorrectionReasons';
  request?: GetRefundCorrectionReasons;
  response?: GetRefundCorrectionReasonsResponse;
}

export class SvcGetRelatedOrderLines implements IEvaServiceDefinition
{
  name = 'GetRelatedOrderLines';
  path = '/message/GetRelatedOrderLines';
  request?: GetRelatedOrderLines;
  response?: GetRelatedOrderLinesResponse;
}

export class SvcGetRelatedOrders implements IEvaServiceDefinition
{
  name = 'GetRelatedOrders';
  path = '/message/GetRelatedOrders';
  request?: GetRelatedOrders;
  response?: GetRelatedOrdersResponse;
}

export class SvcGetRepair implements IEvaServiceDefinition
{
  name = 'GetRepair';
  path = '/message/GetRepair';
  request?: GetRepair;
  response?: GetRepairResponse;
}

export class SvcGetRequiredDataForOrder implements IEvaServiceDefinition
{
  name = 'GetRequiredDataForOrder';
  path = '/message/GetRequiredDataForOrder';
  request?: GetRequiredDataForOrder;
  response?: GetRequiredDataForOrderResponse;
}

export class SvcGetRequiredOrganizationUnitFields implements IEvaServiceDefinition
{
  name = 'GetRequiredOrganizationUnitFields';
  path = '/message/GetRequiredOrganizationUnitFields';
  request?: GetRequiredOrganizationUnitFields;
  response?: GetRequiredOrganizationUnitFieldsResponse;
}

export class SvcGetReturnableStatusForOrder implements IEvaServiceDefinition
{
  name = 'GetReturnableStatusForOrder';
  path = '/message/GetReturnableStatusForOrder';
  request?: GetReturnableStatusForOrder;
  response?: GetReturnableStatusForOrderResponse;
}

export class SvcGetReturnableStatusForProduct implements IEvaServiceDefinition
{
  name = 'GetReturnableStatusForProduct';
  path = '/message/GetReturnableStatusForProduct';
  request?: GetReturnableStatusForProduct;
  response?: GetReturnableStatusForProductResponse;
}

export class SvcGetReturnOrdersForOrder implements IEvaServiceDefinition
{
  name = 'GetReturnOrdersForOrder';
  path = '/message/GetReturnOrdersForOrder';
  request?: GetReturnOrdersForOrder;
  response?: GetReturnOrdersForOrderResponse;
}

export class SvcGetReturnToSupplierData implements IEvaServiceDefinition
{
  name = 'GetReturnToSupplierData';
  path = '/message/GetReturnToSupplierData';
  request?: GetReturnToSupplierData;
  response?: GetReturnToSupplierDataResponse;
}

export class SvcGetReturnToSupplierRequestByID implements IEvaServiceDefinition
{
  name = 'GetReturnToSupplierRequestByID';
  path = '/message/GetReturnToSupplierRequestByID';
  request?: GetReturnToSupplierRequestByID;
  response?: GetReturnToSupplierRequestByIDResponse;
}

export class SvcGetSalesTaxEstimateForOrder implements IEvaServiceDefinition
{
  name = 'GetSalesTaxEstimateForOrder';
  path = '/message/GetSalesTaxEstimateForOrder';
  request?: GetSalesTaxEstimateForOrder;
  response?: SalesTaxEstimateForOrderResponse;
}

export class SvcGetScript implements IEvaServiceDefinition
{
  name = 'GetScript';
  path = '/message/GetScript';
  request?: GetScript;
  response?: GetScriptResponse;
}

export class SvcGetScriptDialects implements IEvaServiceDefinition
{
  name = 'GetScriptDialects';
  path = '/message/GetScriptDialects';
  request?: GetScriptDialects;
  response?: GetScriptDialectsResponse;
}

export class SvcGetScriptExtensionPoints implements IEvaServiceDefinition
{
  name = 'GetScriptExtensionPoints';
  path = '/message/GetScriptExtensionPoints';
  request?: GetScriptExtensionPoints;
  response?: GetScriptExtensionPointsResponse;
}

export class SvcGetSearchUserFields implements IEvaServiceDefinition
{
  name = 'GetSearchUserFields';
  path = '/message/GetSearchUserFields';
  request?: GetSearchUserFields;
  response?: GetSearchUserFieldsResponse;
}

export class SvcGetSerialNumber implements IEvaServiceDefinition
{
  name = 'GetSerialNumber';
  path = '/message/GetSerialNumber';
  request?: GetSerialNumber;
  response?: GetSerialNumberResponse;
}

export class SvcGetSerialNumberConfigurations implements IEvaServiceDefinition
{
  name = 'GetSerialNumberConfigurations';
  path = '/message/GetSerialNumberConfigurations';
  request?: GetSerialNumberConfigurations;
  response?: GetSerialNumberConfigurationsResponse;
}

export class SvcGetSerialNumberRegistrationReasons implements IEvaServiceDefinition
{
  name = 'GetSerialNumberRegistrationReasons';
  path = '/message/GetSerialNumberRegistrationReasons';
  request?: GetSerialNumberRegistrationReasons;
  response?: GetSerialNumberRegistrationReasonsResponse;
}

export class SvcGetSetsByOrganizationUnit implements IEvaServiceDefinition
{
  name = 'GetSetsByOrganizationUnit';
  path = '/message/GetSetsByOrganizationUnit';
  request?: GetSetsByOrganizationUnit;
  response?: GetSetsByOrganizationUnitResponse;
}

export class SvcGetSharedWishlist implements IEvaServiceDefinition
{
  name = 'GetSharedWishlist';
  path = '/message/GetSharedWishlist';
  request?: GetSharedWishlist;
  response?: GetSharedWishlistResponse;
}

export class SvcGetShipFromStoreTaskByBarcode implements IEvaServiceDefinition
{
  name = 'GetShipFromStoreTaskByBarcode';
  path = '/message/GetShipFromStoreTaskByBarcode';
  request?: GetShipFromStoreTaskByBarcode;
  response?: GetShipFromStoreTaskByBarcodeResponse;
}

export class SvcGetShipment implements IEvaServiceDefinition
{
  name = 'GetShipment';
  path = '/message/GetShipment';
  request?: GetShipment;
  response?: GetShipmentResponse;
}

export class SvcGetShipmentDetails implements IEvaServiceDefinition
{
  name = 'GetShipmentDetails';
  path = '/message/GetShipmentDetails';
  request?: GetShipmentDetails;
  response?: GetShipmentDetailsResponse;
}

export class SvcGetShipmentExportByID implements IEvaServiceDefinition
{
  name = 'GetShipmentExportByID';
  path = '/message/GetShipmentExportByID';
  request?: GetShipmentExportByID;
  response?: GetShipmentExportByIDResponse;
}

export class SvcGetShipmentExportDocuments implements IEvaServiceDefinition
{
  name = 'GetShipmentExportDocuments';
  path = '/message/GetShipmentExportDocuments';
  request?: GetShipmentExportDocuments;
  response?: GetShipmentExportDocumentsResponse;
}

export class SvcGetShipmentIdentifier implements IEvaServiceDefinition
{
  name = 'GetShipmentIdentifier';
  path = '/message/GetShipmentIdentifier';
  request?: GetShipmentIdentifier;
  response?: GetShipmentIdentifierResponse;
}

export class SvcGetShipmentReceipt implements IEvaServiceDefinition
{
  name = 'GetShipmentReceipt';
  path = '/message/GetShipmentReceipt';
  request?: GetShipmentReceipt;
  response?: GetShipmentReceiptResponse;
}

export class SvcGetShipmentSettings implements IEvaServiceDefinition
{
  name = 'GetShipmentSettings';
  path = '/message/GetShipmentSettings';
  request?: GetShipmentSettings;
  response?: GetShipmentSettingsResponse;
}

export class SvcGetShippingMethodsForOrder implements IEvaServiceDefinition
{
  name = 'GetShippingMethodsForOrder';
  path = '/message/GetShippingMethodsForOrder';
  request?: GetShippingMethodsForOrder;
  response?: GetShippingMethodsForOrderResponse;
}

export class SvcGetShoppingCart implements IEvaServiceDefinition
{
  name = 'GetShoppingCart';
  path = '/message/GetShoppingCart';
  request?: GetShoppingCart;
  response?: ShoppingCartResponse;
}

export class SvcGetShoppingCartInfo implements IEvaServiceDefinition
{
  name = 'GetShoppingCartInfo';
  path = '/message/GetShoppingCartInfo';
  request?: GetShoppingCartInfo;
  response?: GetShoppingCartInfoResponse;
}

export class SvcGetShopsByProximity implements IEvaServiceDefinition
{
  name = 'GetShopsByProximity';
  path = '/message/GetShopsByProximity';
  request?: GetShopsByProximity;
  response?: GetShopsByProximityResponse;
}

export class SvcGetStation implements IEvaServiceDefinition
{
  name = 'GetStation';
  path = '/message/GetStation';
  request?: GetStation;
  response?: GetStationResponse;
}

export class SvcGetStationsForOrganizationUnit implements IEvaServiceDefinition
{
  name = 'GetStationsForOrganizationUnit';
  path = '/message/GetStationsForOrganizationUnit';
  request?: GetStationsForOrganizationUnit;
  response?: GetStationsForOrganizationUnitResponse;
}

export class SvcGetStatusForZonedCycleCountPreCounts implements IEvaServiceDefinition
{
  name = 'GetStatusForZonedCycleCountPreCounts';
  path = '/message/GetStatusForZonedCycleCountPreCounts';
  request?: GetStatusForZonedCycleCountPreCounts;
  response?: GetStatusForZonedCycleCountPreCountsResponse;
}

export class SvcGetStockAvailabilityEstimateForOrder implements IEvaServiceDefinition
{
  name = 'GetStockAvailabilityEstimateForOrder';
  path = '/message/GetStockAvailabilityEstimateForOrder';
  request?: GetStockAvailabilityEstimateForOrder;
  response?: GetStockAvailabilityEstimateForOrderResponse;
}

export class SvcGetStockAvailabilityEstimateForProducts implements IEvaServiceDefinition
{
  name = 'GetStockAvailabilityEstimateForProducts';
  path = '/message/GetStockAvailabilityEstimateForProducts';
  request?: GetStockAvailabilityEstimateForProducts;
  response?: GetStockAvailabilityEstimateForProductsResponse;
}

export class SvcGetStockAvailabilityTimeline implements IEvaServiceDefinition
{
  name = 'GetStockAvailabilityTimeline';
  path = '/message/GetStockAvailabilityTimeline';
  request?: GetStockAvailabilityTimeline;
  response?: GetStockAvailabilityTimelineResponse;
}

export class SvcGetStockByStockLabelForProducts implements IEvaServiceDefinition
{
  name = 'GetStockByStockLabelForProducts';
  path = '/message/GetStockByStockLabelForProducts';
  request?: GetStockByStockLabelForProducts;
  response?: GetStockByStockLabelForProductsResponse;
}

export class SvcGetStockDetailsForProduct implements IEvaServiceDefinition
{
  name = 'GetStockDetailsForProduct';
  path = '/message/GetStockDetailsForProduct';
  request?: GetStockDetailsForProduct;
  response?: GetStockDetailsForProductResponse;
}

export class SvcGetStockLabels implements IEvaServiceDefinition
{
  name = 'GetStockLabels';
  path = '/message/GetStockLabels';
  request?: GetStockLabels;
  response?: GetStockLabelsResponse;
}

export class SvcGetStockLabelSettings implements IEvaServiceDefinition
{
  name = 'GetStockLabelSettings';
  path = '/message/GetStockLabelSettings';
  request?: GetStockLabelSettings;
  response?: GetStockLabelSettingsResponse;
}

export class SvcGetStockLabelSettingsForLabel implements IEvaServiceDefinition
{
  name = 'GetStockLabelSettingsForLabel';
  path = '/message/GetStockLabelSettingsForLabel';
  request?: GetStockLabelSettingsForLabel;
  response?: GetStockLabelSettingsForLabelResponse;
}

export class SvcGetStockLabelsForFeature implements IEvaServiceDefinition
{
  name = 'GetStockLabelsForFeature';
  path = '/message/GetStockLabelsForFeature';
  request?: GetStockLabelsForFeature;
  response?: GetStockLabelsForFeatureResponse;
}

export class SvcGetStockLabelsForFeatures implements IEvaServiceDefinition
{
  name = 'GetStockLabelsForFeatures';
  path = '/message/GetStockLabelsForFeatures';
  request?: GetStockLabelsForFeatures;
  response?: GetStockLabelsForFeaturesResponse;
}

export class SvcGetStockNotification implements IEvaServiceDefinition
{
  name = 'GetStockNotification';
  path = '/message/GetStockNotification';
  request?: GetStockNotification;
  response?: StockNotificationResponse;
}

export class SvcGetStockNotificationForCurrentUser implements IEvaServiceDefinition
{
  name = 'GetStockNotificationForCurrentUser';
  path = '/message/GetStockNotificationForCurrentUser';
  request?: GetStockNotificationForCurrentUser;
  response?: StockNotificationResponse;
}

export class SvcGetStockReplenishmentTaskData implements IEvaServiceDefinition
{
  name = 'GetStockReplenishmentTaskData';
  path = '/message/GetStockReplenishmentTaskData';
  request?: GetStockReplenishmentTaskData;
  response?: GetStockReplenishmentTaskDataResponse;
}

export class SvcGetStockReplenishmentTaskZones implements IEvaServiceDefinition
{
  name = 'GetStockReplenishmentTaskZones';
  path = '/message/GetStockReplenishmentTaskZones';
  request?: GetStockReplenishmentTaskZones;
  response?: GetStockReplenishmentTaskZonesResponse;
}

export class SvcGetStockReservationTask implements IEvaServiceDefinition
{
  name = 'GetStockReservationTask';
  path = '/message/GetStockReservationTask';
  request?: GetStockReservationTask;
  response?: GetStockReservationTaskResponse;
}

export class SvcGetStringTranslation implements IEvaServiceDefinition
{
  name = 'GetStringTranslation';
  path = '/message/GetStringTranslation';
  request?: GetStringTranslation;
  response?: GetStringTranslationResponse;
}

export class SvcGetSubscriptionProductDetails implements IEvaServiceDefinition
{
  name = 'GetSubscriptionProductDetails';
  path = '/message/GetSubscriptionProductDetails';
  request?: GetSubscriptionProductDetails;
  response?: GetSubscriptionProductDetailResponse;
}

export class SvcGetSuppliersForOrganizationUnit implements IEvaServiceDefinition
{
  name = 'GetSuppliersForOrganizationUnit';
  path = '/message/GetSuppliersForOrganizationUnit';
  request?: GetSuppliersForOrganizationUnit;
  response?: GetSuppliersForOrganizationUnitResponse;
}

export class SvcGetSupplierStockForProduct implements IEvaServiceDefinition
{
  name = 'GetSupplierStockForProduct';
  path = '/message/GetSupplierStockForProduct';
  request?: GetSupplierStockForProduct;
  response?: GetSupplierStockForProductResponse;
}

export class SvcGetTaxExemptionReasons implements IEvaServiceDefinition
{
  name = 'GetTaxExemptionReasons';
  path = '/message/GetTaxExemptionReasons';
  request?: GetTaxExemptionReasons;
  response?: GetTaxExemptionReasonsResponse;
}

export class SvcGetTaxFreeOrdersToReissue implements IEvaServiceDefinition
{
  name = 'GetTaxFreeOrdersToReissue';
  path = '/message/GetTaxFreeOrdersToReissue';
  request?: GetTaxFreeOrdersToReissue;
  response?: GetTaxFreeOrdersToReissueResponse;
}

export class SvcGetTaxProvider implements IEvaServiceDefinition
{
  name = 'GetTaxProvider';
  path = '/message/GetTaxProvider';
  request?: GetTaxProvider;
  response?: GetTaxProviderResponse;
}

export class SvcGetTaxProviderTypes implements IEvaServiceDefinition
{
  name = 'GetTaxProviderTypes';
  path = '/message/GetTaxProviderTypes';
  request?: GetTaxProviderTypes;
  response?: GetTaxProviderTypesResponse;
}

export class SvcGetTaxRate implements IEvaServiceDefinition
{
  name = 'GetTaxRate';
  path = '/message/GetTaxRate';
  request?: GetTaxRate;
  response?: GetTaxRateResponse;
}

export class SvcGetTemporaryRedirectToken implements IEvaServiceDefinition
{
  name = 'GetTemporaryRedirectToken';
  path = '/message/GetTemporaryRedirectToken';
  request?: GetTemporaryRedirectToken;
  response?: GetTemporaryRedirectTokenResponse;
}

export class SvcGetTokenInfo implements IEvaServiceDefinition
{
  name = 'GetTokenInfo';
  path = '/message/GetTokenInfo';
  request?: GetTokenInfo;
  response?: GetTokenInfoResponse;
}

export class SvcGetTransportOrderLineData implements IEvaServiceDefinition
{
  name = 'GetTransportOrderLineData';
  path = '/message/GetTransportOrderLineData';
  request?: GetTransportOrderLineData;
  response?: GetTransportOrderLineDataResponse;
}

export class SvcGetTransputJobTypes implements IEvaServiceDefinition
{
  name = 'GetTransputJobTypes';
  path = '/message/GetTransputJobTypes';
  request?: GetTransputJobTypes;
  response?: GetTransputJobTypesResponse;
}

export class SvcGetTriggeredSubscriptionProductsForProduct implements IEvaServiceDefinition
{
  name = 'GetTriggeredSubscriptionProductsForProduct';
  path = '/message/GetTriggeredSubscriptionProductsForProduct';
  request?: GetTriggeredSubscriptionProductsForProduct;
  response?: GetTriggeredSubscriptionProductsForProductResponse;
}

export class SvcGetUnitPriceCorrectionReasons implements IEvaServiceDefinition
{
  name = 'GetUnitPriceCorrectionReasons';
  path = '/message/GetUnitPriceCorrectionReasons';
  request?: GetUnitPriceCorrectionReasons;
  response?: GetUnitPriceCorrectionReasonsResponse;
}

export class SvcGetUnprocessedFinancialEventsCount implements IEvaServiceDefinition
{
  name = 'GetUnprocessedFinancialEventsCount';
  path = '/message/GetUnprocessedFinancialEventsCount';
  request?: GetUnprocessedFinancialEventsCount;
  response?: GetUnprocessedFinancialEventsCountResponse;
}

export class SvcGetUser implements IEvaServiceDefinition
{
  name = 'GetUser';
  path = '/message/GetUser';
  request?: GetUser;
  response?: GetUserResponse;
}

export class SvcGetUserAssociations implements IEvaServiceDefinition
{
  name = 'GetUserAssociations';
  path = '/message/GetUserAssociations';
  request?: GetUserAssociations;
  response?: GetUserAssociationsResponse;
}

export class SvcGetUserAssociationTypeByID implements IEvaServiceDefinition
{
  name = 'GetUserAssociationTypeByID';
  path = '/message/GetUserAssociationTypeByID';
  request?: GetUserAssociationTypeByID;
  response?: GetUserAssociationTypeByIDResponse;
}

export class SvcGetUserAssociationTypes implements IEvaServiceDefinition
{
  name = 'GetUserAssociationTypes';
  path = '/message/GetUserAssociationTypes';
  request?: GetUserAssociationTypes;
  response?: GetUserAssociationTypesResponse;
}

export class SvcGetUserBySocialSecurityNumber implements IEvaServiceDefinition
{
  name = 'GetUserBySocialSecurityNumber';
  path = '/message/GetUserBySocialSecurityNumber';
  request?: GetUserBySocialSecurityNumber;
  response?: GetUserBySocialSecurityNumberResponse;
}

export class SvcGetUserConsignment implements IEvaServiceDefinition
{
  name = 'GetUserConsignment';
  path = '/message/GetUserConsignment';
  request?: GetUserConsignment;
  response?: GetUserConsignmentResponse;
}

export class SvcGetUserDebtorData implements IEvaServiceDefinition
{
  name = 'GetUserDebtorData';
  path = '/message/GetUserDebtorData';
  request?: GetUserDebtorData;
  response?: GetUserDebtorDataResponse;
}

export class SvcGetUserGroupByID implements IEvaServiceDefinition
{
  name = 'GetUserGroupByID';
  path = '/message/GetUserGroupByID';
  request?: GetUserGroupByID;
  response?: GetUserGroupByIDResponse;
}

export class SvcGetUserInfoByPhoneNumber implements IEvaServiceDefinition
{
  name = 'GetUserInfoByPhoneNumber';
  path = '/message/GetUserInfoByPhoneNumber';
  request?: GetUserInfoByPhoneNumber;
  response?: GetUserInfoResponse;
}

export class SvcGetUserInfoBySocialSecurityNumber implements IEvaServiceDefinition
{
  name = 'GetUserInfoBySocialSecurityNumber';
  path = '/message/GetUserInfoBySocialSecurityNumber';
  request?: GetUserInfoBySocialSecurityNumber;
  response?: GetUserInfoResponse;
}

export class SvcGetUserInquiries implements IEvaServiceDefinition
{
  name = 'GetUserInquiries';
  path = '/message/GetUserInquiries';
  request?: GetUserInquiries;
  response?: GetUserInquiriesResponse;
}

export class SvcGetUserInquiry implements IEvaServiceDefinition
{
  name = 'GetUserInquiry';
  path = '/message/GetUserInquiry';
  request?: GetUserInquiry;
  response?: GetUserInquiryResponse;
}

export class SvcGetUserInteractionByID implements IEvaServiceDefinition
{
  name = 'GetUserInteractionByID';
  path = '/message/GetUserInteractionByID';
  request?: GetUserInteractionByID;
  response?: GetUserInteractionByIDResponse;
}

export class SvcGetUserLoyaltyBalance implements IEvaServiceDefinition
{
  name = 'GetUserLoyaltyBalance';
  path = '/message/GetUserLoyaltyBalance';
  request?: GetUserLoyaltyBalance;
  response?: GetUserLoyaltyBalanceResponse;
}

export class SvcGetUserLoyaltyData implements IEvaServiceDefinition
{
  name = 'GetUserLoyaltyData';
  path = '/message/GetUserLoyaltyData';
  request?: GetUserLoyaltyData;
  response?: GetUserLoyaltyDataResponse;
}

export class SvcGetUserLoyaltySubscriptions implements IEvaServiceDefinition
{
  name = 'GetUserLoyaltySubscriptions';
  path = '/message/GetUserLoyaltySubscriptions';
  request?: GetUserLoyaltySubscriptions;
  response?: GetUserLoyaltySubscriptionsResponse;
}

export class SvcGetUserPhoneNumbers implements IEvaServiceDefinition
{
  name = 'GetUserPhoneNumbers';
  path = '/message/GetUserPhoneNumbers';
  request?: GetUserPhoneNumbers;
  response?: GetUserPhoneNumbersResponse;
}

export class SvcGetUserProductSubscriptionDetails implements IEvaServiceDefinition
{
  name = 'GetUserProductSubscriptionDetails';
  path = '/message/GetUserProductSubscriptionDetails';
  request?: GetUserProductSubscriptionDetails;
  response?: GetUserProductSubscriptionDetailsResponse;
}

export class SvcGetUserSubscriptions implements IEvaServiceDefinition
{
  name = 'GetUserSubscriptions';
  path = '/message/GetUserSubscriptions';
  request?: GetUserSubscriptions;
  response?: GetUserSubscriptionsResponse;
}

export class SvcGetUserTaskCounts implements IEvaServiceDefinition
{
  name = 'GetUserTaskCounts';
  path = '/message/GetUserTaskCounts';
  request?: GetUserTaskCounts;
  response?: GetUserTaskCountsResponse;
}

export class SvcGetUserTaskDetails implements IEvaServiceDefinition
{
  name = 'GetUserTaskDetails';
  path = '/message/GetUserTaskDetails';
  request?: GetUserTaskDetails;
  response?: GetUserTaskDetailsResponse;
}

export class SvcGetUserTaskNotCompletedReasons implements IEvaServiceDefinition
{
  name = 'GetUserTaskNotCompletedReasons';
  path = '/message/GetUserTaskNotCompletedReasons';
  request?: GetUserTaskNotCompletedReasons;
  response?: GetUserTaskNotCompletedReasonsResponse;
}

export class SvcGetUserTaskPriorities implements IEvaServiceDefinition
{
  name = 'GetUserTaskPriorities';
  path = '/message/GetUserTaskPriorities';
  request?: GetUserTaskPriorities;
  response?: GetUserTaskPrioritiesResponse;
}

export class SvcGetUserTaskTypeOrganizationUnitSet implements IEvaServiceDefinition
{
  name = 'GetUserTaskTypeOrganizationUnitSet';
  path = '/message/GetUserTaskTypeOrganizationUnitSet';
  request?: GetUserTaskTypeOrganizationUnitSet;
  response?: UserTaskTypeOrganizationUnitSetResponse;
}

export class SvcGetUserTaskTypes implements IEvaServiceDefinition
{
  name = 'GetUserTaskTypes';
  path = '/message/GetUserTaskTypes';
  request?: GetUserTaskTypes;
  response?: GetUserTaskTypesResponse;
}

export class SvcGetUserWhoDeletedCycleCountZoneAndMakeItGreatAgain implements IEvaServiceDefinition
{
  name = 'GetUserWhoDeletedCycleCountZoneAndMakeItGreatAgain';
  path = '/message/GetUserWhoDeletedCycleCountZoneAndMakeItGreatAgain';
  request?: GetUserWhoDeletedCycleCountZoneAndMakeItGreatAgain;
  response?: GetUserWhoDeletedCycleCountZoneAndMakeItGreatAgainResponse;
}

export class SvcGetUserWidgets implements IEvaServiceDefinition
{
  name = 'GetUserWidgets';
  path = '/message/GetUserWidgets';
  request?: GetUserWidgets;
  response?: GetUserWidgetsResponse;
}

export class SvcGetUserWishlist implements IEvaServiceDefinition
{
  name = 'GetUserWishlist';
  path = '/message/GetUserWishlist';
  request?: GetUserWishlist;
  response?: GetUserWishlistResponse;
}

export class SvcGetWarehouseOrderData implements IEvaServiceDefinition
{
  name = 'GetWarehouseOrderData';
  path = '/message/GetWarehouseOrderData';
  request?: GetWarehouseOrderData;
  response?: GetWarehouseOrderDataResponse;
}

export class SvcGetWebshops implements IEvaServiceDefinition
{
  name = 'GetWebshops';
  path = '/message/GetWebshops';
  request?: GetWebshops;
  response?: GetWebshopsResponse;
}

export class SvcGetZonedCycleCount implements IEvaServiceDefinition
{
  name = 'GetZonedCycleCount';
  path = '/message/GetZonedCycleCount';
  request?: GetZonedCycleCount;
  response?: GetZonedCycleCountResponse;
}

export class SvcGetZonedCycleCountPreCount implements IEvaServiceDefinition
{
  name = 'GetZonedCycleCountPreCount';
  path = '/message/GetZonedCycleCountPreCount';
  request?: GetZonedCycleCountPreCount;
  response?: GetZonedCycleCountPreCountResponse;
}

export class SvcGetZonedCycleCountSchedule implements IEvaServiceDefinition
{
  name = 'GetZonedCycleCountSchedule';
  path = '/message/GetZonedCycleCountSchedule';
  request?: GetZonedCycleCountSchedule;
  response?: GetZonedCycleCountScheduleResponse;
}

export class SvcGetZonedCycleCountsEstimateByQuery implements IEvaServiceDefinition
{
  name = 'GetZonedCycleCountsEstimateByQuery';
  path = '/message/GetZonedCycleCountsEstimateByQuery';
  request?: GetZonedCycleCountsEstimateByQuery;
  response?: GetZonedCycleCountsEstimateByQueryResponse;
}

export class SvcGetZonedCycleCountsEstimateByQuery_Async implements IEvaServiceDefinition
{
  name = 'GetZonedCycleCountsEstimateByQuery_Async';
  path = '/async-message/GetZonedCycleCountsEstimateByQuery';
  request?: GetZonedCycleCountsEstimateByQuery_Async;
  response?: GetZonedCycleCountsEstimateByQuery_AsyncResponse;
}

export class SvcGetZonedCycleCountsEstimateByQuery_AsyncResult implements IEvaServiceDefinition
{
  name = 'GetZonedCycleCountsEstimateByQuery_AsyncResult';
  path = '/async-result/GetZonedCycleCountsEstimateByQuery';
  request?: GetZonedCycleCountsEstimateByQuery_AsyncResult;
  response?: GetZonedCycleCountsEstimateByQueryResponse;
}

export class SvcHandlePaymentTransactionDispute implements IEvaServiceDefinition
{
  name = 'HandlePaymentTransactionDispute';
  path = '/message/HandlePaymentTransactionDispute';
  request?: HandlePaymentTransactionDispute;
  response?: EmptyResponseMessage;
}

export class SvcImportFlights implements IEvaServiceDefinition
{
  name = 'ImportFlights';
  path = '/message/ImportFlights';
  request?: ImportFlights;
  response?: EmptyResponseMessage;
}

export class SvcImportOrganizationUnits implements IEvaServiceDefinition
{
  name = 'ImportOrganizationUnits';
  path = '/message/ImportOrganizationUnits';
  request?: ImportOrganizationUnits;
  response?: ImportOrganizationUnitsResponse;
}

export class SvcInitializePaymentType implements IEvaServiceDefinition
{
  name = 'InitializePaymentType';
  path = '/message/InitializePaymentType';
  request?: InitializePaymentType;
  response?: InitializePaymentTypeResponse;
}

export class SvcIssueTaxFreeForm implements IEvaServiceDefinition
{
  name = 'IssueTaxFreeForm';
  path = '/message/IssueTaxFreeForm';
  request?: IssueTaxFreeForm;
  response?: IssueTaxFreeFormResponse;
}

export class SvcLinkSharedWishlist implements IEvaServiceDefinition
{
  name = 'LinkSharedWishlist';
  path = '/message/LinkSharedWishlist';
  request?: LinkSharedWishlist;
  response?: EmptyResponseMessage;
}

export class SvcListAddressBook implements IEvaServiceDefinition
{
  name = 'ListAddressBook';
  path = '/message/ListAddressBook';
  request?: ListAddressBook;
  response?: ListAddressBookResponse;
}

export class SvcListApiKeys implements IEvaServiceDefinition
{
  name = 'ListApiKeys';
  path = '/message/ListApiKeys';
  request?: ListApiKeys;
  response?: ListApiKeysResponse;
}

export class SvcListApplications implements IEvaServiceDefinition
{
  name = 'ListApplications';
  path = '/message/ListApplications';
  request?: ListApplications;
  response?: ListApplicationsResponse;
}

export class SvcListAppointmentGroups implements IEvaServiceDefinition
{
  name = 'ListAppointmentGroups';
  path = '/message/ListAppointmentGroups';
  request?: ListAppointmentGroups;
  response?: ListAppointmentGroupsResponse;
}

export class SvcListAppointments implements IEvaServiceDefinition
{
  name = 'ListAppointments';
  path = '/message/ListAppointments';
  request?: ListAppointments;
  response?: ListAppointmentsResponse;
}

export class SvcListAvailableRecurringTasks implements IEvaServiceDefinition
{
  name = 'ListAvailableRecurringTasks';
  path = '/message/ListAvailableRecurringTasks';
  request?: ListAvailableRecurringTasks;
  response?: ListAvailableRecurringTasksResponse;
}

export class SvcListAvailableShippingMethods implements IEvaServiceDefinition
{
  name = 'ListAvailableShippingMethods';
  path = '/message/ListAvailableShippingMethods';
  request?: ListAvailableShippingMethods;
  response?: ListAvailableShippingMethodsResponse;
}

export class SvcListAvailableTimeZones implements IEvaServiceDefinition
{
  name = 'ListAvailableTimeZones';
  path = '/message/ListAvailableTimeZones';
  request?: ListAvailableTimeZones;
  response?: ListAvailableTimeZonesResponse;
}

export class SvcListAvailableUserTasks implements IEvaServiceDefinition
{
  name = 'ListAvailableUserTasks';
  path = '/message/ListAvailableUserTasks';
  request?: ListAvailableUserTasks;
  response?: ListAvailableUserTasksResponse;
}

export class SvcListBlobsForFinancialPeriod implements IEvaServiceDefinition
{
  name = 'ListBlobsForFinancialPeriod';
  path = '/message/ListBlobsForFinancialPeriod';
  request?: ListBlobsForFinancialPeriod;
  response?: ListBlobsForFinancialPeriodResponse;
}

export class SvcListBlobsForInvoice implements IEvaServiceDefinition
{
  name = 'ListBlobsForInvoice';
  path = '/message/ListBlobsForInvoice';
  request?: ListBlobsForInvoice;
  response?: ListBlobsForInvoiceResponse;
}

export class SvcListBlobsForOrder implements IEvaServiceDefinition
{
  name = 'ListBlobsForOrder';
  path = '/message/ListBlobsForOrder';
  request?: ListBlobsForOrder;
  response?: ListBlobsForOrderResponse;
}

export class SvcListBookings implements IEvaServiceDefinition
{
  name = 'ListBookings';
  path = '/message/ListBookings';
  request?: ListBookings;
  response?: ListBookingsResponse;
}

export class SvcListBrands implements IEvaServiceDefinition
{
  name = 'ListBrands';
  path = '/message/ListBrands';
  request?: ListBrands;
  response?: ListBrandsResponse;
}

export class SvcListCashDeposits implements IEvaServiceDefinition
{
  name = 'ListCashDeposits';
  path = '/message/ListCashDeposits';
  request?: ListCashDeposits;
  response?: ListCashDepositsResponse;
}

export class SvcListCashExpenses implements IEvaServiceDefinition
{
  name = 'ListCashExpenses';
  path = '/message/ListCashExpenses';
  request?: ListCashExpenses;
  response?: ListCashExpensesResponse;
}

export class SvcListCashTransactionLedger implements IEvaServiceDefinition
{
  name = 'ListCashTransactionLedger';
  path = '/message/ListCashTransactionLedger';
  request?: ListCashTransactionLedger;
  response?: ListCashTransactionLedgerResponse;
}

export class SvcListCashTransactionLedgerGroups implements IEvaServiceDefinition
{
  name = 'ListCashTransactionLedgerGroups';
  path = '/message/ListCashTransactionLedgerGroups';
  request?: ListCashTransactionLedgerGroups;
  response?: ListCashTransactionLedgerGroupsResponse;
}

export class SvcListCommittedOrderLines implements IEvaServiceDefinition
{
  name = 'ListCommittedOrderLines';
  path = '/message/ListCommittedOrderLines';
  request?: ListCommittedOrderLines;
  response?: ListCommittedOrderLinesResponse;
}

export class SvcListConsolidatedPickTasks implements IEvaServiceDefinition
{
  name = 'ListConsolidatedPickTasks';
  path = '/message/ListConsolidatedPickTasks';
  request?: ListConsolidatedPickTasks;
  response?: ListConsolidatedPickTasksResponse;
}

export class SvcListConsolidatedZonePickTasks implements IEvaServiceDefinition
{
  name = 'ListConsolidatedZonePickTasks';
  path = '/message/ListConsolidatedZonePickTasks';
  request?: ListConsolidatedZonePickTasks;
  response?: ListConsolidatedZonePickTasksResponse;
}

export class SvcListConsumerCompanies implements IEvaServiceDefinition
{
  name = 'ListConsumerCompanies';
  path = '/message/ListConsumerCompanies';
  request?: ListConsumerCompanies;
  response?: ListConsumerCompaniesResponse;
}

export class SvcListControlDocuments implements IEvaServiceDefinition
{
  name = 'ListControlDocuments';
  path = '/message/ListControlDocuments';
  request?: ListControlDocuments;
  response?: ListControlDocumentsResponse;
}

export class SvcListCountries implements IEvaServiceDefinition
{
  name = 'ListCountries';
  path = '/message/ListCountries';
  request?: ListCountries;
  response?: ListCountriesResponse;
}

export class SvcListCouponDiscounts implements IEvaServiceDefinition
{
  name = 'ListCouponDiscounts';
  path = '/message/ListCouponDiscounts';
  request?: ListCouponDiscounts;
  response?: ListCouponDiscountsResponse;
}

export class SvcListCurrencies implements IEvaServiceDefinition
{
  name = 'ListCurrencies';
  path = '/message/ListCurrencies';
  request?: ListCurrencies;
  response?: ListCurrenciesResponse;
}

export class SvcListCustomerInteractionTasks implements IEvaServiceDefinition
{
  name = 'ListCustomerInteractionTasks';
  path = '/message/ListCustomerInteractionTasks';
  request?: ListCustomerInteractionTasks;
  response?: ListCustomerInteractionTasksResponse;
}

export class SvcListCustomOrderStatus implements IEvaServiceDefinition
{
  name = 'ListCustomOrderStatus';
  path = '/message/ListCustomOrderStatus';
  request?: ListCustomOrderStatus;
  response?: ListCustomOrderStatusResponse;
}

export class SvcListCustomUserTaskTemplate implements IEvaServiceDefinition
{
  name = 'ListCustomUserTaskTemplate';
  path = '/message/ListCustomUserTaskTemplate';
  request?: ListCustomUserTaskTemplate;
  response?: ListCustomUserTaskTemplateResponse;
}

export class SvcListCustomUserTaskTypes implements IEvaServiceDefinition
{
  name = 'ListCustomUserTaskTypes';
  path = '/message/ListCustomUserTaskTypes';
  request?: ListCustomUserTaskTypes;
  response?: ListCustomUserTaskTypesResponse;
}

export class SvcListCycleCountZoneGroups implements IEvaServiceDefinition
{
  name = 'ListCycleCountZoneGroups';
  path = '/message/ListCycleCountZoneGroups';
  request?: ListCycleCountZoneGroups;
  response?: ListCycleCountZoneGroupsResponse;
}

export class SvcListCycleZonesForOrganizationUnits implements IEvaServiceDefinition
{
  name = 'ListCycleZonesForOrganizationUnits';
  path = '/message/ListCycleZonesForOrganizationUnits';
  request?: ListCycleZonesForOrganizationUnits;
  response?: ListCycleZonesForOrganizationUnitsResponse;
}

export class SvcListDevices implements IEvaServiceDefinition
{
  name = 'ListDevices';
  path = '/message/ListDevices';
  request?: ListDevices;
  response?: ListDevicesResponse;
}

export class SvcListDiagnosticsBlobs implements IEvaServiceDefinition
{
  name = 'ListDiagnosticsBlobs';
  path = '/message/ListDiagnosticsBlobs';
  request?: ListDiagnosticsBlobs;
  response?: ListDiagnosticsBlobsResponse;
}

export class SvcListDisabledDiscountsOnOrder implements IEvaServiceDefinition
{
  name = 'ListDisabledDiscountsOnOrder';
  path = '/message/ListDisabledDiscountsOnOrder';
  request?: ListDisabledDiscountsOnOrder;
  response?: ListDisabledDiscountsOnOrderResponse;
}

export class SvcListDisabledDiscountTriggersOnOrder implements IEvaServiceDefinition
{
  name = 'ListDisabledDiscountTriggersOnOrder';
  path = '/message/ListDisabledDiscountTriggersOnOrder';
  request?: ListDisabledDiscountTriggersOnOrder;
  response?: ListDisabledDiscountTriggersOnOrderResponse;
}

export class SvcListDiscountCouponHandlers implements IEvaServiceDefinition
{
  name = 'ListDiscountCouponHandlers';
  path = '/message/ListDiscountCouponHandlers';
  request?: ListDiscountCouponHandlers;
  response?: ListDiscountCouponHandlersResponse;
}

export class SvcListEntityBlobTranslations implements IEvaServiceDefinition
{
  name = 'ListEntityBlobTranslations';
  path = '/message/ListEntityBlobTranslations';
  request?: ListEntityBlobTranslations;
  response?: ListEntityBlobTranslationsResponse;
}

export class SvcListEntityTranslations implements IEvaServiceDefinition
{
  name = 'ListEntityTranslations';
  path = '/message/ListEntityTranslations';
  request?: ListEntityTranslations;
  response?: ListEntityTranslationsResponse;
}

export class SvcListEventLedger implements IEvaServiceDefinition
{
  name = 'ListEventLedger';
  path = '/message/ListEventLedger';
  request?: ListEventLedger;
  response?: ListEventLedgerResponse;
}

export class SvcListExternalOrderStatusForOrder implements IEvaServiceDefinition
{
  name = 'ListExternalOrderStatusForOrder';
  path = '/message/ListExternalOrderStatusForOrder';
  request?: ListExternalOrderStatusForOrder;
  response?: ListExternalOrderStatusForOrderResponse;
}

export class SvcListFeedSubscriptions implements IEvaServiceDefinition
{
  name = 'ListFeedSubscriptions';
  path = '/message/ListFeedSubscriptions';
  request?: ListFeedSubscriptions;
  response?: ListFeedSubscriptionsResponse;
}

export class SvcListFinancialEvents implements IEvaServiceDefinition
{
  name = 'ListFinancialEvents';
  path = '/message/ListFinancialEvents';
  request?: ListFinancialEvents;
  response?: ListFinancialEventsResponse;
}

export class SvcListFinancialPeriodAudits implements IEvaServiceDefinition
{
  name = 'ListFinancialPeriodAudits';
  path = '/message/ListFinancialPeriodAudits';
  request?: ListFinancialPeriodAudits;
  response?: ListFinancialPeriodAuditsResponse;
}

export class SvcListFinancialPeriodExports2 implements IEvaServiceDefinition
{
  name = 'ListFinancialPeriodExports2';
  path = '/message/ListFinancialPeriodExports2';
  request?: ListFinancialPeriodExports2;
  response?: ListFinancialPeriodExports2Response;
}

export class SvcListFinancialPeriods implements IEvaServiceDefinition
{
  name = 'ListFinancialPeriods';
  path = '/message/ListFinancialPeriods';
  request?: ListFinancialPeriods;
  response?: ListFinancialPeriodsResponse;
}

export class SvcListFlights implements IEvaServiceDefinition
{
  name = 'ListFlights';
  path = '/message/ListFlights';
  request?: ListFlights;
  response?: ListFlightsResponse;
}

export class SvcListFullStockCountLabelProducts implements IEvaServiceDefinition
{
  name = 'ListFullStockCountLabelProducts';
  path = '/message/ListFullStockCountLabelProducts';
  request?: ListFullStockCountLabelProducts;
  response?: ListFullStockCountLabelProductsResponse;
}

export class SvcListFullStockCountLabels implements IEvaServiceDefinition
{
  name = 'ListFullStockCountLabels';
  path = '/message/ListFullStockCountLabels';
  request?: ListFullStockCountLabels;
  response?: ListFullStockCountLabelsResponse;
}

export class SvcListFullStockCountLabelSummary implements IEvaServiceDefinition
{
  name = 'ListFullStockCountLabelSummary';
  path = '/message/ListFullStockCountLabelSummary';
  request?: ListFullStockCountLabelSummary;
  response?: ListFullStockCountLabelSummaryResponse;
}

export class SvcListFullStockCountLabelTasks implements IEvaServiceDefinition
{
  name = 'ListFullStockCountLabelTasks';
  path = '/message/ListFullStockCountLabelTasks';
  request?: ListFullStockCountLabelTasks;
  response?: ListFullStockCountLabelTasksResponse;
}

export class SvcListFullStockCountResult implements IEvaServiceDefinition
{
  name = 'ListFullStockCountResult';
  path = '/message/ListFullStockCountResult';
  request?: ListFullStockCountResult;
  response?: ListFullStockCountResultResponse;
}

export class SvcListFullStockCounts implements IEvaServiceDefinition
{
  name = 'ListFullStockCounts';
  path = '/message/ListFullStockCounts';
  request?: ListFullStockCounts;
  response?: ListFullStockCountsResponse;
}

export class SvcListFullStockCountSerialNumbersStatus implements IEvaServiceDefinition
{
  name = 'ListFullStockCountSerialNumbersStatus';
  path = '/message/ListFullStockCountSerialNumbersStatus';
  request?: ListFullStockCountSerialNumbersStatus;
  response?: ListFullStockCountSerialNumbersStatusResponse;
}

export class SvcListFullStockCountSummary implements IEvaServiceDefinition
{
  name = 'ListFullStockCountSummary';
  path = '/message/ListFullStockCountSummary';
  request?: ListFullStockCountSummary;
  response?: ListFullStockCountSummaryResponse;
}

export class SvcListFullStockCountTasks implements IEvaServiceDefinition
{
  name = 'ListFullStockCountTasks';
  path = '/message/ListFullStockCountTasks';
  request?: ListFullStockCountTasks;
  response?: ListFullStockCountTasksResponse;
}

export class SvcListGeneralLedgers implements IEvaServiceDefinition
{
  name = 'ListGeneralLedgers';
  path = '/message/ListGeneralLedgers';
  request?: ListGeneralLedgers;
  response?: ListGeneralLedgersResponse;
}

export class SvcListInitialCycleCountLabels implements IEvaServiceDefinition
{
  name = 'ListInitialCycleCountLabels';
  path = '/message/ListInitialCycleCountLabels';
  request?: ListInitialCycleCountLabels;
  response?: ListInitialCycleCountLabelsResponse;
}

export class SvcListInitialCycleCountResults implements IEvaServiceDefinition
{
  name = 'ListInitialCycleCountResults';
  path = '/message/ListInitialCycleCountResults';
  request?: ListInitialCycleCountResults;
  response?: ListInitialCycleCountResultsResponse;
}

export class SvcListInterbranchOrganizationUnitForOrder implements IEvaServiceDefinition
{
  name = 'ListInterbranchOrganizationUnitForOrder';
  path = '/message/ListInterbranchOrganizationUnitForOrder';
  request?: ListInterbranchOrganizationUnitForOrder;
  response?: ListInterbranchOrganizationUnitForOrderResponse;
}

export class SvcListInvoiceCompanyMapping implements IEvaServiceDefinition
{
  name = 'ListInvoiceCompanyMapping';
  path = '/message/ListInvoiceCompanyMapping';
  request?: ListInvoiceCompanyMapping;
  response?: ListInvoiceCompanyMappingResponse;
}

export class SvcListInvoiceExports implements IEvaServiceDefinition
{
  name = 'ListInvoiceExports';
  path = '/message/ListInvoiceExports';
  request?: ListInvoiceExports;
  response?: ListInvoiceExportResponse;
}

export class SvcListInvoiceExportsForInvoice implements IEvaServiceDefinition
{
  name = 'ListInvoiceExportsForInvoice';
  path = '/message/ListInvoiceExportsForInvoice';
  request?: ListInvoiceExportsForInvoice;
  response?: ListInvoiceExportsForInvoiceResponse;
}

export class SvcListInvoiceLedger implements IEvaServiceDefinition
{
  name = 'ListInvoiceLedger';
  path = '/message/ListInvoiceLedger';
  request?: ListInvoiceLedger;
  response?: ListInvoiceLedgerResponse;
}

export class SvcListInvoices implements IEvaServiceDefinition
{
  name = 'ListInvoices';
  path = '/message/ListInvoices';
  request?: ListInvoices;
  response?: ListInvoicesResponse;
}

export class SvcListInvoicesForOrder implements IEvaServiceDefinition
{
  name = 'ListInvoicesForOrder';
  path = '/message/ListInvoicesForOrder';
  request?: ListInvoicesForOrder;
  response?: ListInvoicesForOrderResponse;
}

export class SvcListManualDiscounts implements IEvaServiceDefinition
{
  name = 'ListManualDiscounts';
  path = '/message/ListManualDiscounts';
  request?: ListManualDiscounts;
  response?: ListManualDiscountsResponse;
}

export class SvcListManualInvoices implements IEvaServiceDefinition
{
  name = 'ListManualInvoices';
  path = '/message/ListManualInvoices';
  request?: ListManualInvoices;
  response?: ListManualInvoicesResponse;
}

export class SvcListManualTaxExemptionReasons implements IEvaServiceDefinition
{
  name = 'ListManualTaxExemptionReasons';
  path = '/message/ListManualTaxExemptionReasons';
  request?: ListManualTaxExemptionReasons;
  response?: ListManualTaxExemptionReasonsResponse;
}

export class SvcListMessageQueueErrors implements IEvaServiceDefinition
{
  name = 'ListMessageQueueErrors';
  path = '/message/ListMessageQueueErrors';
  request?: ListMessageQueueErrors;
  response?: ListMessageQueueErrorsResponse;
}

export class SvcListMyUserTasks implements IEvaServiceDefinition
{
  name = 'ListMyUserTasks';
  path = '/message/ListMyUserTasks';
  request?: ListMyUserTasks;
  response?: ListMyUserTasksResponse;
}

export class SvcListOpeningHoursTemplates implements IEvaServiceDefinition
{
  name = 'ListOpeningHoursTemplates';
  path = '/message/ListOpeningHoursTemplates';
  request?: ListOpeningHoursTemplates;
  response?: ListOpeningHoursTemplatesResponse;
}

export class SvcListOpeningHoursTemplatesOrganizationUnitSets implements IEvaServiceDefinition
{
  name = 'ListOpeningHoursTemplatesOrganizationUnitSets';
  path = '/message/ListOpeningHoursTemplatesOrganizationUnitSets';
  request?: ListOpeningHoursTemplatesOrganizationUnitSets;
  response?: ListOpeningHoursTemplatesOrganizationUnitSetsResponse;
}

export class SvcListOperationalTaskConfig implements IEvaServiceDefinition
{
  name = 'ListOperationalTaskConfig';
  path = '/message/ListOperationalTaskConfig';
  request?: ListOperationalTaskConfig;
  response?: ListOperationalTaskConfigResponse;
}

export class SvcListOperationalTasks implements IEvaServiceDefinition
{
  name = 'ListOperationalTasks';
  path = '/message/ListOperationalTasks';
  request?: ListOperationalTasks;
  response?: ListOperationalTasksResponse;
}

export class SvcListOrderCustomStatus implements IEvaServiceDefinition
{
  name = 'ListOrderCustomStatus';
  path = '/message/ListOrderCustomStatus';
  request?: ListOrderCustomStatus;
  response?: ListOrderCustomStatusResponse;
}

export class SvcListOrderCustomTypes implements IEvaServiceDefinition
{
  name = 'ListOrderCustomTypes';
  path = '/message/ListOrderCustomTypes';
  request?: ListOrderCustomTypes;
  response?: ListOrderCustomTypesResponse;
}

export class SvcListOrderExports implements IEvaServiceDefinition
{
  name = 'ListOrderExports';
  path = '/message/ListOrderExports';
  request?: ListOrderExports;
  response?: ListOrderExportsResponse;
}

export class SvcListOrderExportsForOrder implements IEvaServiceDefinition
{
  name = 'ListOrderExportsForOrder';
  path = '/message/ListOrderExportsForOrder';
  request?: ListOrderExportsForOrder;
  response?: ListOrderExportsForOrderResponse;
}

export class SvcListOrderFulfillmentLines implements IEvaServiceDefinition
{
  name = 'ListOrderFulfillmentLines';
  path = '/message/ListOrderFulfillmentLines';
  request?: ListOrderFulfillmentLines;
  response?: ListOrderFulfillmentLinesResponse;
}

export class SvcListOrderFulfillmentRejections implements IEvaServiceDefinition
{
  name = 'ListOrderFulfillmentRejections';
  path = '/message/ListOrderFulfillmentRejections';
  request?: ListOrderFulfillmentRejections;
  response?: ListOrderFulfillmentRejectionsResponse;
}

export class SvcListOrderFulfillments implements IEvaServiceDefinition
{
  name = 'ListOrderFulfillments';
  path = '/message/ListOrderFulfillments';
  request?: ListOrderFulfillments;
  response?: ListOrderFulfillmentsResponse;
}

export class SvcListOrderInterventionTasks implements IEvaServiceDefinition
{
  name = 'ListOrderInterventionTasks';
  path = '/message/ListOrderInterventionTasks';
  request?: ListOrderInterventionTasks;
  response?: ListOrderInterventionTasksResponse;
}

export class SvcListOrderLedgerForOrder implements IEvaServiceDefinition
{
  name = 'ListOrderLedgerForOrder';
  path = '/message/ListOrderLedgerForOrder';
  request?: ListOrderLedgerForOrder;
  response?: ListOrderLedgerForOrderResponse;
}

export class SvcListOrderLines implements IEvaServiceDefinition
{
  name = 'ListOrderLines';
  path = '/message/ListOrderLines';
  request?: ListOrderLines;
  response?: ListOrderLinesResponse;
}

export class SvcListOrderLinesInvoiceSummary implements IEvaServiceDefinition
{
  name = 'ListOrderLinesInvoiceSummary';
  path = '/message/ListOrderLinesInvoiceSummary';
  request?: ListOrderLinesInvoiceSummary;
  response?: ListOrderLinesInvoiceSummaryResponse;
}

export class SvcListOrdersForCustomer implements IEvaServiceDefinition
{
  name = 'ListOrdersForCustomer';
  path = '/message/ListOrdersForCustomer';
  request?: ListOrdersForCustomer;
  response?: ListOrdersForCustomerResponse;
}

export class SvcListOrderShipments implements IEvaServiceDefinition
{
  name = 'ListOrderShipments';
  path = '/message/ListOrderShipments';
  request?: ListOrderShipments;
  response?: ListOrderShipmentsResponse;
}

export class SvcListOrdersWithCustomerReferences implements IEvaServiceDefinition
{
  name = 'ListOrdersWithCustomerReferences';
  path = '/message/ListOrdersWithCustomerReferences';
  request?: ListOrdersWithCustomerReferences;
  response?: ListOrdersWithCustomerReferencesResponse;
}

export class SvcListOrderVerificationReasons implements IEvaServiceDefinition
{
  name = 'ListOrderVerificationReasons';
  path = '/message/ListOrderVerificationReasons';
  request?: ListOrderVerificationReasons;
  response?: ListOrderVerificationReasonsResponse;
}

export class SvcListOrganizationUnits implements IEvaServiceDefinition
{
  name = 'ListOrganizationUnits';
  path = '/message/ListOrganizationUnits';
  request?: ListOrganizationUnits;
  response?: ListOrganizationUnitsResponse;
}

export class SvcListOrganizationUnitsDetailed implements IEvaServiceDefinition
{
  name = 'ListOrganizationUnitsDetailed';
  path = '/message/ListOrganizationUnitsDetailed';
  request?: ListOrganizationUnitsDetailed;
  response?: ListOrganizationUnitsDetailedResponse;
}

export class SvcListOrganizationUnitSummaries implements IEvaServiceDefinition
{
  name = 'ListOrganizationUnitSummaries';
  path = '/message/ListOrganizationUnitSummaries';
  request?: ListOrganizationUnitSummaries;
  response?: ListOrganizationUnitSummariesResponse;
}

export class SvcListOrganizationUnitSuppliers implements IEvaServiceDefinition
{
  name = 'ListOrganizationUnitSuppliers';
  path = '/message/ListOrganizationUnitSuppliers';
  request?: ListOrganizationUnitSuppliers;
  response?: ListOrganizationUnitSuppliersResponse;
}

export class SvcListPaymentTransactionLedger implements IEvaServiceDefinition
{
  name = 'ListPaymentTransactionLedger';
  path = '/message/ListPaymentTransactionLedger';
  request?: ListPaymentTransactionLedger;
  response?: ListPaymentTransactionLedgerResponse;
}

export class SvcListPrintPriceLabelTasks implements IEvaServiceDefinition
{
  name = 'ListPrintPriceLabelTasks';
  path = '/message/ListPrintPriceLabelTasks';
  request?: ListPrintPriceLabelTasks;
  response?: ListPrintPriceLabelTasksResponse;
}

export class SvcListPrintTasks implements IEvaServiceDefinition
{
  name = 'ListPrintTasks';
  path = '/message/ListPrintTasks';
  request?: ListPrintTasks;
  response?: ListPrintTasksResponse;
}

export class SvcListProductBundles implements IEvaServiceDefinition
{
  name = 'ListProductBundles';
  path = '/message/ListProductBundles';
  request?: ListProductBundles;
  response?: ListProductBundlesResponse;
}

export class SvcListProductPrices implements IEvaServiceDefinition
{
  name = 'ListProductPrices';
  path = '/message/ListProductPrices';
  request?: ListProductPrices;
  response?: ListProductPricesResponse;
}

export class SvcListProductRecommendations implements IEvaServiceDefinition
{
  name = 'ListProductRecommendations';
  path = '/message/ListProductRecommendations';
  request?: ListProductRecommendations;
  response?: ListProductRecommendationsResponse;
}

export class SvcListProductStructures implements IEvaServiceDefinition
{
  name = 'ListProductStructures';
  path = '/message/ListProductStructures';
  request?: ListProductStructures;
  response?: ListProductStructuresResponse;
}

export class SvcListProductZoneGroups implements IEvaServiceDefinition
{
  name = 'ListProductZoneGroups';
  path = '/message/ListProductZoneGroups';
  request?: ListProductZoneGroups;
  response?: ListProductZoneGroupsResponse;
}

export class SvcListProductZones implements IEvaServiceDefinition
{
  name = 'ListProductZones';
  path = '/message/ListProductZones';
  request?: ListProductZones;
  response?: ListProductZonesResponse;
}

export class SvcListPurchaseOrderShipments implements IEvaServiceDefinition
{
  name = 'ListPurchaseOrderShipments';
  path = '/message/ListPurchaseOrderShipments';
  request?: ListPurchaseOrderShipments;
  response?: ListPurchaseOrderShipmentsResponse;
}

export class SvcListReceiveShipmentTasks implements IEvaServiceDefinition
{
  name = 'ListReceiveShipmentTasks';
  path = '/message/ListReceiveShipmentTasks';
  request?: ListReceiveShipmentTasks;
  response?: ListReceiveShipmentTasksResponse;
}

export class SvcListRecurringScheduledTasks implements IEvaServiceDefinition
{
  name = 'ListRecurringScheduledTasks';
  path = '/message/ListRecurringScheduledTasks';
  request?: ListRecurringScheduledTasks;
  response?: ListRecurringScheduledTasksResponse;
}

export class SvcListRecurringTasks implements IEvaServiceDefinition
{
  name = 'ListRecurringTasks';
  path = '/message/ListRecurringTasks';
  request?: ListRecurringTasks;
  response?: ListRecurringTasksResponse;
}

export class SvcListRecurringTasks2 implements IEvaServiceDefinition
{
  name = 'ListRecurringTasks2';
  path = '/message/ListRecurringTasks2';
  request?: ListRecurringTasks2;
  response?: ListRecurringTasks2Response;
}

export class SvcListRelatedOrderFulfillmentLines implements IEvaServiceDefinition
{
  name = 'ListRelatedOrderFulfillmentLines';
  path = '/message/ListRelatedOrderFulfillmentLines';
  request?: ListRelatedOrderFulfillmentLines;
  response?: ListRelatedOrderFulfillmentLinesResponse;
}

export class SvcListRepairInteractions implements IEvaServiceDefinition
{
  name = 'ListRepairInteractions';
  path = '/message/ListRepairInteractions';
  request?: ListRepairInteractions;
  response?: ListRepairInteractionsResponse;
}

export class SvcListRepairs implements IEvaServiceDefinition
{
  name = 'ListRepairs';
  path = '/message/ListRepairs';
  request?: ListRepairs;
  response?: ListRepairsResponse;
}

export class SvcListRepairTasks implements IEvaServiceDefinition
{
  name = 'ListRepairTasks';
  path = '/message/ListRepairTasks';
  request?: ListRepairTasks;
  response?: ListRepairTasksResponse;
}

export class SvcListReservationCleanupTasks implements IEvaServiceDefinition
{
  name = 'ListReservationCleanupTasks';
  path = '/message/ListReservationCleanupTasks';
  request?: ListReservationCleanupTasks;
  response?: ListReservationCleanupTasksResponse;
}

export class SvcListReservationDeviationTasks implements IEvaServiceDefinition
{
  name = 'ListReservationDeviationTasks';
  path = '/message/ListReservationDeviationTasks';
  request?: ListReservationDeviationTasks;
  response?: ListReservationDeviationTasksResponse;
}

export class SvcListReservationPickupTasks implements IEvaServiceDefinition
{
  name = 'ListReservationPickupTasks';
  path = '/message/ListReservationPickupTasks';
  request?: ListReservationPickupTasks;
  response?: ListReservationPickupTasksResponse;
}

export class SvcListReturnableSuppliersForOrder implements IEvaServiceDefinition
{
  name = 'ListReturnableSuppliersForOrder';
  path = '/message/ListReturnableSuppliersForOrder';
  request?: ListReturnableSuppliersForOrder;
  response?: ListReturnableSuppliersForOrderResponse;
}

export class SvcListReturnToSupplierRequests implements IEvaServiceDefinition
{
  name = 'ListReturnToSupplierRequests';
  path = '/message/ListReturnToSupplierRequests';
  request?: ListReturnToSupplierRequests;
  response?: ListReturnToSupplierRequestsResponse;
}

export class SvcListReturnToSupplierTaskOrderLines implements IEvaServiceDefinition
{
  name = 'ListReturnToSupplierTaskOrderLines';
  path = '/message/ListReturnToSupplierTaskOrderLines';
  request?: ListReturnToSupplierTaskOrderLines;
  response?: ListReturnToSupplierTaskOrderLinesResponse;
}

export class SvcListReturnToSupplierTasks implements IEvaServiceDefinition
{
  name = 'ListReturnToSupplierTasks';
  path = '/message/ListReturnToSupplierTasks';
  request?: ListReturnToSupplierTasks;
  response?: ListReturnToSupplierTasksResponse;
}

export class SvcListReturnToSupplierTaskShipmentLines implements IEvaServiceDefinition
{
  name = 'ListReturnToSupplierTaskShipmentLines';
  path = '/message/ListReturnToSupplierTaskShipmentLines';
  request?: ListReturnToSupplierTaskShipmentLines;
  response?: ListReturnToSupplierTaskShipmentLinesResponse;
}

export class SvcListScriptHistory implements IEvaServiceDefinition
{
  name = 'ListScriptHistory';
  path = '/message/ListScriptHistory';
  request?: ListScriptHistory;
  response?: ListScriptHistoryResponse;
}

export class SvcListScripts implements IEvaServiceDefinition
{
  name = 'ListScripts';
  path = '/message/ListScripts';
  request?: ListScripts;
  response?: ListScriptsResponse;
}

export class SvcListSecondChanceProductRegistrationTasks implements IEvaServiceDefinition
{
  name = 'ListSecondChanceProductRegistrationTasks';
  path = '/message/ListSecondChanceProductRegistrationTasks';
  request?: ListSecondChanceProductRegistrationTasks;
  response?: ListSecondChanceProductRegistrationTasksResponse;
}

export class SvcListSerialNumberProducts implements IEvaServiceDefinition
{
  name = 'ListSerialNumberProducts';
  path = '/message/ListSerialNumberProducts';
  request?: ListSerialNumberProducts;
  response?: ListSerialNumberProductsResponse;
}

export class SvcListSerialNumberRegistrations implements IEvaServiceDefinition
{
  name = 'ListSerialNumberRegistrations';
  path = '/message/ListSerialNumberRegistrations';
  request?: ListSerialNumberRegistrations;
  response?: ListSerialNumberRegistrationsResponse;
}

export class SvcListSerialNumbers implements IEvaServiceDefinition
{
  name = 'ListSerialNumbers';
  path = '/message/ListSerialNumbers';
  request?: ListSerialNumbers;
  response?: ListSerialNumbersResponse;
}

export class SvcListShipFromStoreTasks implements IEvaServiceDefinition
{
  name = 'ListShipFromStoreTasks';
  path = '/message/ListShipFromStoreTasks';
  request?: ListShipFromStoreTasks;
  response?: ListShipFromStoreTasksResponse;
}

export class SvcListShipmentExportsForShipment implements IEvaServiceDefinition
{
  name = 'ListShipmentExportsForShipment';
  path = '/message/ListShipmentExportsForShipment';
  request?: ListShipmentExportsForShipment;
  response?: ListShipmentExportsForShipmentResponse;
}

export class SvcListShipmentIdentifiers implements IEvaServiceDefinition
{
  name = 'ListShipmentIdentifiers';
  path = '/message/ListShipmentIdentifiers';
  request?: ListShipmentIdentifiers;
  response?: ListShipmentIdentifiersResponse;
}

export class SvcListShipmentLedgerForShipment implements IEvaServiceDefinition
{
  name = 'ListShipmentLedgerForShipment';
  path = '/message/ListShipmentLedgerForShipment';
  request?: ListShipmentLedgerForShipment;
  response?: ListShipmentLedgerForShipmentResponse;
}

export class SvcListShipmentLines implements IEvaServiceDefinition
{
  name = 'ListShipmentLines';
  path = '/message/ListShipmentLines';
  request?: ListShipmentLines;
  response?: ListShipmentLinesResponse;
}

export class SvcListShipmentLineSerialNumbers implements IEvaServiceDefinition
{
  name = 'ListShipmentLineSerialNumbers';
  path = '/message/ListShipmentLineSerialNumbers';
  request?: ListShipmentLineSerialNumbers;
  response?: ListShipmentLineSerialNumbersResponse;
}

export class SvcListShipmentLinesToInvoice implements IEvaServiceDefinition
{
  name = 'ListShipmentLinesToInvoice';
  path = '/message/ListShipmentLinesToInvoice';
  request?: ListShipmentLinesToInvoice;
  response?: ListShipmentLinesToInvoiceResponse;
}

export class SvcListShipmentPackages implements IEvaServiceDefinition
{
  name = 'ListShipmentPackages';
  path = '/message/ListShipmentPackages';
  request?: ListShipmentPackages;
  response?: ListShipmentPackagesResponse;
}

export class SvcListShipmentsToInvoice implements IEvaServiceDefinition
{
  name = 'ListShipmentsToInvoice';
  path = '/message/ListShipmentsToInvoice';
  request?: ListShipmentsToInvoice;
  response?: ListShipmentsToInvoiceResponse;
}

export class SvcListShopsByProximity implements IEvaServiceDefinition
{
  name = 'ListShopsByProximity';
  path = '/message/ListShopsByProximity';
  request?: ListShopsByProximity;
  response?: ListShopsByProximityResponse;
}

export class SvcListShopsInArea implements IEvaServiceDefinition
{
  name = 'ListShopsInArea';
  path = '/message/ListShopsInArea';
  request?: ListShopsInArea;
  response?: ListShopsInAreaResponse;
}

export class SvcListStations implements IEvaServiceDefinition
{
  name = 'ListStations';
  path = '/message/ListStations';
  request?: ListStations;
  response?: ListStationsResponse;
}

export class SvcListStationsForOrganizationUnit implements IEvaServiceDefinition
{
  name = 'ListStationsForOrganizationUnit';
  path = '/message/ListStationsForOrganizationUnit';
  request?: ListStationsForOrganizationUnit;
  response?: ListStationsForOrganizationUnitResponse;
}

export class SvcListStock implements IEvaServiceDefinition
{
  name = 'ListStock';
  path = '/message/ListStock';
  request?: ListStock;
  response?: ListStockResponse;
}

export class SvcListStockMovementFollowUpTasks implements IEvaServiceDefinition
{
  name = 'ListStockMovementFollowUpTasks';
  path = '/message/ListStockMovementFollowUpTasks';
  request?: ListStockMovementFollowUpTasks;
  response?: ListStockMovementFollowUpTasksResponse;
}

export class SvcListStockMutations implements IEvaServiceDefinition
{
  name = 'ListStockMutations';
  path = '/message/ListStockMutations';
  request?: ListStockMutations;
  response?: ListStockMutationsResponse;
}

export class SvcListStockReplenishmentTaskData implements IEvaServiceDefinition
{
  name = 'ListStockReplenishmentTaskData';
  path = '/message/ListStockReplenishmentTaskData';
  request?: ListStockReplenishmentTaskData;
  response?: ListStockReplenishmentTaskDataResponse;
}

export class SvcListStockReplenishmentTasks implements IEvaServiceDefinition
{
  name = 'ListStockReplenishmentTasks';
  path = '/message/ListStockReplenishmentTasks';
  request?: ListStockReplenishmentTasks;
  response?: ListStockReplenishmentTasksResponse;
}

export class SvcListStockReservationTasks implements IEvaServiceDefinition
{
  name = 'ListStockReservationTasks';
  path = '/message/ListStockReservationTasks';
  request?: ListStockReservationTasks;
  response?: ListStockReservationTasksResponse;
}

export class SvcListStringTranslations implements IEvaServiceDefinition
{
  name = 'ListStringTranslations';
  path = '/message/ListStringTranslations';
  request?: ListStringTranslations;
  response?: ListStringTranslationsResponse;
}

export class SvcListSuspendedOrders implements IEvaServiceDefinition
{
  name = 'ListSuspendedOrders';
  path = '/message/ListSuspendedOrders';
  request?: ListSuspendedOrders;
  response?: ListSuspendedOrdersResponse;
}

export class SvcListTasksThatBlockPeriodClosing implements IEvaServiceDefinition
{
  name = 'ListTasksThatBlockPeriodClosing';
  path = '/message/ListTasksThatBlockPeriodClosing';
  request?: ListTasksThatBlockPeriodClosing;
  response?: ListTasksThatBlockPeriodClosingResponse;
}

export class SvcListTaxCodeMappings implements IEvaServiceDefinition
{
  name = 'ListTaxCodeMappings';
  path = '/message/ListTaxCodeMappings';
  request?: ListTaxCodeMappings;
  response?: ListTaxCodeMappingsResponse;
}

export class SvcListTaxCodes implements IEvaServiceDefinition
{
  name = 'ListTaxCodes';
  path = '/message/ListTaxCodes';
  request?: ListTaxCodes;
  response?: ListTaxCodesResponse;
}

export class SvcListTaxProviders implements IEvaServiceDefinition
{
  name = 'ListTaxProviders';
  path = '/message/ListTaxProviders';
  request?: ListTaxProviders;
  response?: ListTaxProvidersResponse;
}

export class SvcListTaxRates implements IEvaServiceDefinition
{
  name = 'ListTaxRates';
  path = '/message/ListTaxRates';
  request?: ListTaxRates;
  response?: ListTaxRatesResponse;
}

export class SvcListTransputJobs implements IEvaServiceDefinition
{
  name = 'ListTransputJobs';
  path = '/message/ListTransputJobs';
  request?: ListTransputJobs;
  response?: ListTransputJobsResponse;
}

export class SvcListUrgentTasks implements IEvaServiceDefinition
{
  name = 'ListUrgentTasks';
  path = '/message/ListUrgentTasks';
  request?: ListUrgentTasks;
  response?: ListUrgentTasksResponse;
}

export class SvcListUserApiKeys implements IEvaServiceDefinition
{
  name = 'ListUserApiKeys';
  path = '/message/ListUserApiKeys';
  request?: ListUserApiKeys;
  response?: ListUserApiKeysResponse;
}

export class SvcListUserBorrowedProducts implements IEvaServiceDefinition
{
  name = 'ListUserBorrowedProducts';
  path = '/message/ListUserBorrowedProducts';
  request?: ListUserBorrowedProducts;
  response?: ListUserBorrowedProductsResponse;
}

export class SvcListUserGroups implements IEvaServiceDefinition
{
  name = 'ListUserGroups';
  path = '/message/ListUserGroups';
  request?: ListUserGroups;
  response?: ListUserGroupsResponse;
}

export class SvcListUserInteractions implements IEvaServiceDefinition
{
  name = 'ListUserInteractions';
  path = '/message/ListUserInteractions';
  request?: ListUserInteractions;
  response?: ListUserInteractionsResponse;
}

export class SvcListUserLoyaltyTransactions implements IEvaServiceDefinition
{
  name = 'ListUserLoyaltyTransactions';
  path = '/message/ListUserLoyaltyTransactions';
  request?: ListUserLoyaltyTransactions;
  response?: ListUserLoyaltyTransactionsResponse;
}

export class SvcListUsersForUserGroup implements IEvaServiceDefinition
{
  name = 'ListUsersForUserGroup';
  path = '/message/ListUsersForUserGroup';
  request?: ListUsersForUserGroup;
  response?: ListUsersForUserGroupResponse;
}

export class SvcListUserTasks implements IEvaServiceDefinition
{
  name = 'ListUserTasks';
  path = '/message/ListUserTasks';
  request?: ListUserTasks;
  response?: ListUserTasksResponse;
}

export class SvcListUserTaskTypeOrganizationUnitSets implements IEvaServiceDefinition
{
  name = 'ListUserTaskTypeOrganizationUnitSets';
  path = '/message/ListUserTaskTypeOrganizationUnitSets';
  request?: ListUserTaskTypeOrganizationUnitSets;
  response?: ListUserTaskTypeOrganizationUnitSetsResponse;
}

export class SvcListUserWishlists implements IEvaServiceDefinition
{
  name = 'ListUserWishlists';
  path = '/message/ListUserWishlists';
  request?: ListUserWishlists;
  response?: ListUserWishlistsResponse;
}

export class SvcListZonedCycleCountPreCountResult implements IEvaServiceDefinition
{
  name = 'ListZonedCycleCountPreCountResult';
  path = '/message/ListZonedCycleCountPreCountResult';
  request?: ListZonedCycleCountPreCountResult;
  response?: ListZonedCycleCountPreCountResultResponse;
}

export class SvcListZonedCycleCountPreCountTasks implements IEvaServiceDefinition
{
  name = 'ListZonedCycleCountPreCountTasks';
  path = '/message/ListZonedCycleCountPreCountTasks';
  request?: ListZonedCycleCountPreCountTasks;
  response?: ListZonedCycleCountPreCountTasksResponse;
}

export class SvcListZonedCycleCounts implements IEvaServiceDefinition
{
  name = 'ListZonedCycleCounts';
  path = '/message/ListZonedCycleCounts';
  request?: ListZonedCycleCounts;
  response?: ListZonedCycleCountsResponse;
}

export class SvcListZonedCycleCountSchedules implements IEvaServiceDefinition
{
  name = 'ListZonedCycleCountSchedules';
  path = '/message/ListZonedCycleCountSchedules';
  request?: ListZonedCycleCountSchedules;
  response?: ListZonedCycleCountSchedulesResponse;
}

export class SvcListZonedCycleCountSerialNumbersStatus implements IEvaServiceDefinition
{
  name = 'ListZonedCycleCountSerialNumbersStatus';
  path = '/message/ListZonedCycleCountSerialNumbersStatus';
  request?: ListZonedCycleCountSerialNumbersStatus;
  response?: ListZonedCycleCountSerialNumbersStatusResponse;
}

export class SvcListZonedCycleCountTasks implements IEvaServiceDefinition
{
  name = 'ListZonedCycleCountTasks';
  path = '/message/ListZonedCycleCountTasks';
  request?: ListZonedCycleCountTasks;
  response?: ListZonedCycleCountTasksResponse;
}

export class SvcLockOrder implements IEvaServiceDefinition
{
  name = 'LockOrder';
  path = '/message/LockOrder';
  request?: LockOrder;
  response?: EmptyResponseMessage;
}

export class SvcLogin implements IEvaServiceDefinition
{
  name = 'Login';
  path = '/message/Login';
  request?: Login;
  response?: LoginResponse;
}

export class SvcLogout implements IEvaServiceDefinition
{
  name = 'Logout';
  path = '/message/Logout';
  request?: Logout;
  response?: LogoutResponse;
}

export class SvcMakeUserPhoneNumberPrimary implements IEvaServiceDefinition
{
  name = 'MakeUserPhoneNumberPrimary';
  path = '/message/MakeUserPhoneNumberPrimary';
  request?: MakeUserPhoneNumberPrimary;
  response?: EmptyResponseMessage;
}

export class SvcMigrateOrdersToUnified implements IEvaServiceDefinition
{
  name = 'MigrateOrdersToUnified';
  path = '/message/MigrateOrdersToUnified';
  request?: MigrateOrdersToUnified;
  response?: MigrateOrdersToUnifiedResponse;
}

export class SvcMissingProductForInitialCycleCount implements IEvaServiceDefinition
{
  name = 'MissingProductForInitialCycleCount';
  path = '/message/MissingProductForInitialCycleCount';
  request?: MissingProductForInitialCycleCount;
  response?: EmptyResponseMessage;
}

export class SvcModifyOrderLinePrice implements IEvaServiceDefinition
{
  name = 'ModifyOrderLinePrice';
  path = '/message/ModifyOrderLinePrice';
  request?: ModifyOrderLinePrice;
  response?: SimpleShoppingCartResponse;
}

export class SvcModifyPurchaseOrderLine implements IEvaServiceDefinition
{
  name = 'ModifyPurchaseOrderLine';
  path = '/message/ModifyPurchaseOrderLine';
  request?: ModifyPurchaseOrderLine;
  response?: EmptyResponseMessage;
}

export class SvcModifyQuantityOrdered implements IEvaServiceDefinition
{
  name = 'ModifyQuantityOrdered';
  path = '/message/ModifyQuantityOrdered';
  request?: ModifyQuantityOrdered;
  response?: ModifyQuantityOrderedResponse;
}

export class SvcModifyQuantityShipped implements IEvaServiceDefinition
{
  name = 'ModifyQuantityShipped';
  path = '/message/ModifyQuantityShipped';
  request?: ModifyQuantityShipped;
  response?: EmptyResponseMessage;
}

export class SvcMoveCash implements IEvaServiceDefinition
{
  name = 'MoveCash';
  path = '/message/MoveCash';
  request?: MoveCash;
  response?: EmptyResponseMessage;
}

export class SvcMoveCommitments implements IEvaServiceDefinition
{
  name = 'MoveCommitments';
  path = '/message/MoveCommitments';
  request?: MoveCommitments;
  response?: EmptyResponseMessage;
}

export class SvcMoveStock implements IEvaServiceDefinition
{
  name = 'MoveStock';
  path = '/message/MoveStock';
  request?: MoveStock;
  response?: EmptyResponseMessage;
}

export class SvcOpenFinancialPeriod implements IEvaServiceDefinition
{
  name = 'OpenFinancialPeriod';
  path = '/message/OpenFinancialPeriod';
  request?: OpenFinancialPeriod;
  response?: EmptyResponseMessage;
}

export class SvcOrderAISummary implements IEvaServiceDefinition
{
  name = 'OrderAISummary';
  path = '/message/OrderAISummary';
  request?: OrderAISummary;
  response?: OrderAISummaryResponse;
}

export class SvcParseBarcode implements IEvaServiceDefinition
{
  name = 'ParseBarcode';
  path = '/message/ParseBarcode';
  request?: ParseBarcode;
  response?: ParseBarcodeResponse;
}

export class SvcParseScript implements IEvaServiceDefinition
{
  name = 'ParseScript';
  path = '/message/ParseScript';
  request?: ParseScript;
  response?: ParseScriptResponse;
}

export class SvcPauseConsolidatedPickTask implements IEvaServiceDefinition
{
  name = 'PauseConsolidatedPickTask';
  path = '/message/PauseConsolidatedPickTask';
  request?: PauseConsolidatedPickTask;
  response?: EmptyResponseMessage;
}

export class SvcPauseProductSubscriptionForUser implements IEvaServiceDefinition
{
  name = 'PauseProductSubscriptionForUser';
  path = '/message/PauseProductSubscriptionForUser';
  request?: PauseProductSubscriptionForUser;
  response?: EmptyResponseMessage;
}

export class SvcPing implements IEvaServiceDefinition
{
  name = 'Ping';
  path = '/message/Ping';
  request?: Ping;
  response?: EmptyResponseMessage;
}

export class SvcPlaceOrder implements IEvaServiceDefinition
{
  name = 'PlaceOrder';
  path = '/message/PlaceOrder';
  request?: PlaceOrder;
  response?: PlaceOrderResponse;
}

export class SvcPollExternalOrderStatus implements IEvaServiceDefinition
{
  name = 'PollExternalOrderStatus';
  path = '/message/PollExternalOrderStatus';
  request?: PollExternalOrderStatus;
  response?: EmptyResponseMessage;
}

export class SvcPreCountInitialCycleCountLabel implements IEvaServiceDefinition
{
  name = 'PreCountInitialCycleCountLabel';
  path = '/message/PreCountInitialCycleCountLabel';
  request?: PreCountInitialCycleCountLabel;
  response?: EmptyResponseMessage;
}

export class SvcPrefigureDiscounts implements IEvaServiceDefinition
{
  name = 'PrefigureDiscounts';
  path = '/message/PrefigureDiscounts';
  request?: PrefigureDiscounts;
  response?: PrefigureDiscountsResponse;
}

export class SvcPrepareOrderForCheckout implements IEvaServiceDefinition
{
  name = 'PrepareOrderForCheckout';
  path = '/message/PrepareOrderForCheckout';
  request?: PrepareOrderForCheckout;
  response?: EmptyResponseMessage;
}

export class SvcPreviewUserInteractionCommunication implements IEvaServiceDefinition
{
  name = 'PreviewUserInteractionCommunication';
  path = '/message/PreviewUserInteractionCommunication';
  request?: PreviewUserInteractionCommunication;
  response?: PreviewUserInteractionCommunicationResponse;
}

export class SvcPrint implements IEvaServiceDefinition
{
  name = 'Print';
  path = '/message/Print';
  request?: Print;
  response?: EmptyResponseMessage;
}

export class SvcPrintCouponsForOrder implements IEvaServiceDefinition
{
  name = 'PrintCouponsForOrder';
  path = '/message/PrintCouponsForOrder';
  request?: PrintCouponsForOrder;
  response?: EmptyResponseMessage;
}

export class SvcPrintFullStockCountLabels implements IEvaServiceDefinition
{
  name = 'PrintFullStockCountLabels';
  path = '/message/PrintFullStockCountLabels';
  request?: PrintFullStockCountLabels;
  response?: EmptyResponseMessage;
}

export class SvcPrintInterbranchOrderReceipt implements IEvaServiceDefinition
{
  name = 'PrintInterbranchOrderReceipt';
  path = '/message/PrintInterbranchOrderReceipt';
  request?: PrintInterbranchOrderReceipt;
  response?: EmptyResponseMessage;
}

export class SvcPrintOrderPackingSlip implements IEvaServiceDefinition
{
  name = 'PrintOrderPackingSlip';
  path = '/message/PrintOrderPackingSlip';
  request?: PrintOrderPackingSlip;
  response?: PrintOrderPackingSlipResponse;
}

export class SvcPrintPaperInvoice implements IEvaServiceDefinition
{
  name = 'PrintPaperInvoice';
  path = '/message/PrintPaperInvoice';
  request?: PrintPaperInvoice;
  response?: EmptyResponseMessage;
}

export class SvcPrintPaperInvoices implements IEvaServiceDefinition
{
  name = 'PrintPaperInvoices';
  path = '/message/PrintPaperInvoices';
  request?: PrintPaperInvoices;
  response?: EmptyResponseMessage;
}

export class SvcPrintPaperOffer implements IEvaServiceDefinition
{
  name = 'PrintPaperOffer';
  path = '/message/PrintPaperOffer';
  request?: PrintPaperOffer;
  response?: EmptyResponseMessage;
}

export class SvcPrintPaperOrderConfirmation implements IEvaServiceDefinition
{
  name = 'PrintPaperOrderConfirmation';
  path = '/message/PrintPaperOrderConfirmation';
  request?: PrintPaperOrderConfirmation;
  response?: EmptyResponseMessage;
}

export class SvcPrintPriceLabel implements IEvaServiceDefinition
{
  name = 'PrintPriceLabel';
  path = '/message/PrintPriceLabel';
  request?: PrintPriceLabel;
  response?: PrintPriceLabelResponse;
}

export class SvcPrintProductPriceLabel implements IEvaServiceDefinition
{
  name = 'PrintProductPriceLabel';
  path = '/message/PrintProductPriceLabel';
  request?: PrintProductPriceLabel;
  response?: PrintProductPriceLabelResponse;
}

export class SvcPrintRepairThermalReceipt implements IEvaServiceDefinition
{
  name = 'PrintRepairThermalReceipt';
  path = '/message/PrintRepairThermalReceipt';
  request?: PrintRepairThermalReceipt;
  response?: EmptyResponseMessage;
}

export class SvcPrintReturnToSupplierOrderTicket implements IEvaServiceDefinition
{
  name = 'PrintReturnToSupplierOrderTicket';
  path = '/message/PrintReturnToSupplierOrderTicket';
  request?: PrintReturnToSupplierOrderTicket;
  response?: EmptyResponseMessage;
}

export class SvcPrintReturnToSupplierReceipt implements IEvaServiceDefinition
{
  name = 'PrintReturnToSupplierReceipt';
  path = '/message/PrintReturnToSupplierReceipt';
  request?: PrintReturnToSupplierReceipt;
  response?: EmptyResponseMessage;
}

export class SvcPrintReturnToSupplierTaskShipment implements IEvaServiceDefinition
{
  name = 'PrintReturnToSupplierTaskShipment';
  path = '/message/PrintReturnToSupplierTaskShipment';
  request?: PrintReturnToSupplierTaskShipment;
  response?: EmptyResponseMessage;
}

export class SvcPrintSecondChanceProductPriceLabel implements IEvaServiceDefinition
{
  name = 'PrintSecondChanceProductPriceLabel';
  path = '/message/PrintSecondChanceProductPriceLabel';
  request?: PrintSecondChanceProductPriceLabel;
  response?: EmptyResponseMessage;
}

export class SvcPrintShipFromStoreTasks implements IEvaServiceDefinition
{
  name = 'PrintShipFromStoreTasks';
  path = '/message/PrintShipFromStoreTasks';
  request?: PrintShipFromStoreTasks;
  response?: ResourceResponseMessage;
}

export class SvcPrintStockReservationReceipt implements IEvaServiceDefinition
{
  name = 'PrintStockReservationReceipt';
  path = '/message/PrintStockReservationReceipt';
  request?: PrintStockReservationReceipt;
  response?: EmptyResponseMessage;
}

export class SvcPrintTaxFreeForm implements IEvaServiceDefinition
{
  name = 'PrintTaxFreeForm';
  path = '/message/PrintTaxFreeForm';
  request?: PrintTaxFreeForm;
  response?: EmptyResponseMessage;
}

export class SvcPrintThermalGiftReceipt implements IEvaServiceDefinition
{
  name = 'PrintThermalGiftReceipt';
  path = '/message/PrintThermalGiftReceipt';
  request?: PrintThermalGiftReceipt;
  response?: EmptyResponseMessage;
}

export class SvcPrintThermalInvoice implements IEvaServiceDefinition
{
  name = 'PrintThermalInvoice';
  path = '/message/PrintThermalInvoice';
  request?: PrintThermalInvoice;
  response?: EmptyResponseMessage;
}

export class SvcPrintThermalInvoices implements IEvaServiceDefinition
{
  name = 'PrintThermalInvoices';
  path = '/message/PrintThermalInvoices';
  request?: PrintThermalInvoices;
  response?: EmptyResponseMessage;
}

export class SvcPrintThermalOrderConfirmation implements IEvaServiceDefinition
{
  name = 'PrintThermalOrderConfirmation';
  path = '/message/PrintThermalOrderConfirmation';
  request?: PrintThermalOrderConfirmation;
  response?: EmptyResponseMessage;
}

export class SvcPrintThermalOrderSummary implements IEvaServiceDefinition
{
  name = 'PrintThermalOrderSummary';
  path = '/message/PrintThermalOrderSummary';
  request?: PrintThermalOrderSummary;
  response?: EmptyResponseMessage;
}

export class SvcProcessInitialCycleCountResults implements IEvaServiceDefinition
{
  name = 'ProcessInitialCycleCountResults';
  path = '/message/ProcessInitialCycleCountResults';
  request?: ProcessInitialCycleCountResults;
  response?: EmptyResponseMessage;
}

export class SvcProcessPrintTasks implements IEvaServiceDefinition
{
  name = 'ProcessPrintTasks';
  path = '/message/ProcessPrintTasks';
  request?: ProcessPrintTasks;
  response?: ProcessPrintTasksResponse;
}

export class SvcProcessReturnToSupplierRequest implements IEvaServiceDefinition
{
  name = 'ProcessReturnToSupplierRequest';
  path = '/message/ProcessReturnToSupplierRequest';
  request?: ProcessReturnToSupplierRequest;
  response?: EmptyResponseMessage;
}

export class SvcProcessStockMutationFile implements IEvaServiceDefinition
{
  name = 'ProcessStockMutationFile';
  path = '/message/ProcessStockMutationFile';
  request?: ProcessStockMutationFile;
  response?: EmptyResponseMessage;
}

export class SvcProcessUnprocessedFinancialEvents implements IEvaServiceDefinition
{
  name = 'ProcessUnprocessedFinancialEvents';
  path = '/message/ProcessUnprocessedFinancialEvents';
  request?: ProcessUnprocessedFinancialEvents;
  response?: EmptyResponseMessage;
}

export class SvcProduceCashDepositDocument implements IEvaServiceDefinition
{
  name = 'ProduceCashDepositDocument';
  path = '/message/ProduceCashDepositDocument';
  request?: ProduceCashDepositDocument;
  response?: EmptyResponseMessage;
}

export class SvcProduceCashExpenseDocument implements IEvaServiceDefinition
{
  name = 'ProduceCashExpenseDocument';
  path = '/message/ProduceCashExpenseDocument';
  request?: ProduceCashExpenseDocument;
  response?: EmptyResponseMessage;
}

export class SvcProduceDocuments implements IEvaServiceDefinition
{
  name = 'ProduceDocuments';
  path = '/message/ProduceDocuments';
  request?: ProduceDocuments;
  response?: ProduceDocumentsResponse;
}

export class SvcProduceInitialCycleCountLabels implements IEvaServiceDefinition
{
  name = 'ProduceInitialCycleCountLabels';
  path = '/message/ProduceInitialCycleCountLabels';
  request?: ProduceInitialCycleCountLabels;
  response?: ResourceResponseMessage;
}

export class SvcProduceInvoice implements IEvaServiceDefinition
{
  name = 'ProduceInvoice';
  path = '/message/ProduceInvoice';
  request?: ProduceInvoice;
  response?: ResourceResponseMessage;
}

export class SvcProducePackingSlip implements IEvaServiceDefinition
{
  name = 'ProducePackingSlip';
  path = '/message/ProducePackingSlip';
  request?: ProducePackingSlip;
  response?: ProducePackingSlipResponse;
}

export class SvcProducePickSlip implements IEvaServiceDefinition
{
  name = 'ProducePickSlip';
  path = '/message/ProducePickSlip';
  request?: ProducePickSlip;
  response?: ProducePickSlipResponse;
}

export class SvcProducePurchaseOrderDocument implements IEvaServiceDefinition
{
  name = 'ProducePurchaseOrderDocument';
  path = '/message/ProducePurchaseOrderDocument';
  request?: ProducePurchaseOrderDocument;
  response?: ResourceResponseMessage;
}

export class SvcProduceReceipt implements IEvaServiceDefinition
{
  name = 'ProduceReceipt';
  path = '/message/ProduceReceipt';
  request?: ProduceReceipt;
  response?: ProduceReceiptResponse;
}

export class SvcProduceShipmentDocuments implements IEvaServiceDefinition
{
  name = 'ProduceShipmentDocuments';
  path = '/message/ProduceShipmentDocuments';
  request?: ProduceShipmentDocuments;
  response?: ProduceShipmentDocumentsResponse;
}

export class SvcProduceTrackingInformation implements IEvaServiceDefinition
{
  name = 'ProduceTrackingInformation';
  path = '/message/ProduceTrackingInformation';
  request?: ProduceTrackingInformation;
  response?: ProduceTrackingInformationResponse;
}

export class SvcProduceZonedCycleCountHandout implements IEvaServiceDefinition
{
  name = 'ProduceZonedCycleCountHandout';
  path = '/message/ProduceZonedCycleCountHandout';
  request?: ProduceZonedCycleCountHandout;
  response?: ProduceZonedCycleCountHandoutResponse;
}

export class SvcPushPriceList implements IEvaServiceDefinition
{
  name = 'PushPriceList';
  path = '/message/PushPriceList';
  request?: PushPriceList;
  response?: PushPriceListResponse;
}

export class SvcPushPriceList_Async implements IEvaServiceDefinition
{
  name = 'PushPriceList_Async';
  path = '/async-message/PushPriceList';
  request?: PushPriceList_Async;
  response?: PushPriceList_AsyncResponse;
}

export class SvcPushPriceList_AsyncResult implements IEvaServiceDefinition
{
  name = 'PushPriceList_AsyncResult';
  path = '/async-result/PushPriceList';
  request?: PushPriceList_AsyncResult;
  response?: PushPriceListResponse;
}

export class SvcPushPriceLists_Async implements IEvaServiceDefinition
{
  name = 'PushPriceLists_Async';
  path = '/async-message/PushPriceLists';
  request?: PushPriceLists_Async;
  response?: PushPriceLists_AsyncResponse;
}

export class SvcPushPriceLists_AsyncResult implements IEvaServiceDefinition
{
  name = 'PushPriceLists_AsyncResult';
  path = '/async-result/PushPriceLists';
  request?: PushPriceLists_AsyncResult;
  response?: PushPriceListsResponse;
}

export class SvcPushReturnOrder implements IEvaServiceDefinition
{
  name = 'PushReturnOrder';
  path = '/message/PushReturnOrder';
  request?: PushReturnOrder;
  response?: PushReturnOrderResponse;
}

export class SvcPushSalesOrder implements IEvaServiceDefinition
{
  name = 'PushSalesOrder';
  path = '/message/PushSalesOrder';
  request?: PushSalesOrder;
  response?: PushSalesOrderResponse;
}

export class SvcPushSerialNumbers implements IEvaServiceDefinition
{
  name = 'PushSerialNumbers';
  path = '/message/PushSerialNumbers';
  request?: PushSerialNumbers;
  response?: PushSerialNumbersResponse;
}

export class SvcPushSerialNumbers_Async implements IEvaServiceDefinition
{
  name = 'PushSerialNumbers_Async';
  path = '/async-message/PushSerialNumbers';
  request?: PushSerialNumbers_Async;
  response?: PushSerialNumbers_AsyncResponse;
}

export class SvcPushSerialNumbers_AsyncResult implements IEvaServiceDefinition
{
  name = 'PushSerialNumbers_AsyncResult';
  path = '/async-result/PushSerialNumbers';
  request?: PushSerialNumbers_AsyncResult;
  response?: PushSerialNumbersResponse;
}

export class SvcPushUser implements IEvaServiceDefinition
{
  name = 'PushUser';
  path = '/message/PushUser';
  request?: PushUser;
  response?: PushUserResponse;
}

export class SvcPushUserInteractionContent implements IEvaServiceDefinition
{
  name = 'PushUserInteractionContent';
  path = '/message/PushUserInteractionContent';
  request?: PushUserInteractionContent;
  response?: EmptyResponseMessage;
}

export class SvcPushUsers_Async implements IEvaServiceDefinition
{
  name = 'PushUsers_Async';
  path = '/async-message/PushUsers';
  request?: PushUsers_Async;
  response?: PushUsers_AsyncResponse;
}

export class SvcPushUsers_AsyncResult implements IEvaServiceDefinition
{
  name = 'PushUsers_AsyncResult';
  path = '/async-result/PushUsers';
  request?: PushUsers_AsyncResult;
  response?: PushUsersResponse;
}

export class SvcRaisePurchaseOrderImportedEvent implements IEvaServiceDefinition
{
  name = 'RaisePurchaseOrderImportedEvent';
  path = '/message/RaisePurchaseOrderImportedEvent';
  request?: RaisePurchaseOrderImportedEvent;
  response?: EmptyResponseMessage;
}

export class SvcReactivateUser implements IEvaServiceDefinition
{
  name = 'ReactivateUser';
  path = '/message/ReactivateUser';
  request?: ReactivateUser;
  response?: EmptyResponseMessage;
}

export class SvcReceivePurchaseOrderShipment implements IEvaServiceDefinition
{
  name = 'ReceivePurchaseOrderShipment';
  path = '/message/ReceivePurchaseOrderShipment';
  request?: ReceivePurchaseOrderShipment;
  response?: ReceivePurchaseOrderShipmentResponse;
}

export class SvcReceiveReturnOrder implements IEvaServiceDefinition
{
  name = 'ReceiveReturnOrder';
  path = '/message/ReceiveReturnOrder';
  request?: ReceiveReturnOrder;
  response?: EmptyResponseMessage;
}

export class SvcReceiveShipment implements IEvaServiceDefinition
{
  name = 'ReceiveShipment';
  path = '/message/ReceiveShipment';
  request?: ReceiveShipment;
  response?: EmptyResponseMessage;
}

export class SvcRecountFullStockCountLabel implements IEvaServiceDefinition
{
  name = 'RecountFullStockCountLabel';
  path = '/message/RecountFullStockCountLabel';
  request?: RecountFullStockCountLabel;
  response?: RecountFullStockCountLabelResponse;
}

export class SvcRecountFullStockCountProduct implements IEvaServiceDefinition
{
  name = 'RecountFullStockCountProduct';
  path = '/message/RecountFullStockCountProduct';
  request?: RecountFullStockCountProduct;
  response?: EmptyResponseMessage;
}

export class SvcRecoverEmployeeAccount implements IEvaServiceDefinition
{
  name = 'RecoverEmployeeAccount';
  path = '/message/RecoverEmployeeAccount';
  request?: RecoverEmployeeAccount;
  response?: RecoverEmployeeAccountResponse;
}

export class SvcRefreshToken implements IEvaServiceDefinition
{
  name = 'RefreshToken';
  path = '/message/RefreshToken';
  request?: RefreshToken;
  response?: RefreshTokenResponse;
}

export class SvcRefundOrder implements IEvaServiceDefinition
{
  name = 'RefundOrder';
  path = '/message/RefundOrder';
  request?: RefundOrder;
  response?: RefundOrderResponse;
}

export class SvcRegisterAppForNotifications implements IEvaServiceDefinition
{
  name = 'RegisterAppForNotifications';
  path = '/message/RegisterAppForNotifications';
  request?: RegisterAppForNotifications;
  response?: EmptyResponseMessage;
}

export class SvcRegisterUserBorrowedProducts implements IEvaServiceDefinition
{
  name = 'RegisterUserBorrowedProducts';
  path = '/message/RegisterUserBorrowedProducts';
  request?: RegisterUserBorrowedProducts;
  response?: EmptyResponseMessage;
}

export class SvcRemoveOfferStatusFromOrder implements IEvaServiceDefinition
{
  name = 'RemoveOfferStatusFromOrder';
  path = '/message/RemoveOfferStatusFromOrder';
  request?: RemoveOfferStatusFromOrder;
  response?: EmptyResponseMessage;
}

export class SvcRemoveOrderLineUnitPriceCorrection implements IEvaServiceDefinition
{
  name = 'RemoveOrderLineUnitPriceCorrection';
  path = '/message/RemoveOrderLineUnitPriceCorrection';
  request?: RemoveOrderLineUnitPriceCorrection;
  response?: EmptyResponseMessage;
}

export class SvcRemoveOrganizationUnitOpeningHoursException implements IEvaServiceDefinition
{
  name = 'RemoveOrganizationUnitOpeningHoursException';
  path = '/message/RemoveOrganizationUnitOpeningHoursException';
  request?: RemoveOrganizationUnitOpeningHoursException;
  response?: EmptyResponseMessage;
}

export class SvcRemoveProductsFromAnonymousWishlist implements IEvaServiceDefinition
{
  name = 'RemoveProductsFromAnonymousWishlist';
  path = '/message/RemoveProductsFromAnonymousWishlist';
  request?: RemoveProductsFromAnonymousWishlist;
  response?: EmptyResponseMessage;
}

export class SvcRemoveProductsFromUserWishlist implements IEvaServiceDefinition
{
  name = 'RemoveProductsFromUserWishlist';
  path = '/message/RemoveProductsFromUserWishlist';
  request?: RemoveProductsFromUserWishlist;
  response?: EmptyResponseMessage;
}

export class SvcRemoveSpecialDateFromOpeningHoursTemplate implements IEvaServiceDefinition
{
  name = 'RemoveSpecialDateFromOpeningHoursTemplate';
  path = '/message/RemoveSpecialDateFromOpeningHoursTemplate';
  request?: RemoveSpecialDateFromOpeningHoursTemplate;
  response?: EmptyResponseMessage;
}

export class SvcRemoveUserFromGroup implements IEvaServiceDefinition
{
  name = 'RemoveUserFromGroup';
  path = '/message/RemoveUserFromGroup';
  request?: RemoveUserFromGroup;
  response?: EmptyResponseMessage;
}

export class SvcRenderThermalPrintResult implements IEvaServiceDefinition
{
  name = 'RenderThermalPrintResult';
  path = '/message/RenderThermalPrintResult';
  request?: RenderThermalPrintResult;
  response?: RenderThermalPrintResultResponse;
}

export class SvcRenewProductSubscription implements IEvaServiceDefinition
{
  name = 'RenewProductSubscription';
  path = '/message/RenewProductSubscription';
  request?: RenewProductSubscription;
  response?: EmptyResponseMessage;
}

export class SvcReplaceCycleCountZonesForOrganizationUnit implements IEvaServiceDefinition
{
  name = 'ReplaceCycleCountZonesForOrganizationUnit';
  path = '/message/ReplaceCycleCountZonesForOrganizationUnit';
  request?: ReplaceCycleCountZonesForOrganizationUnit;
  response?: EmptyResponseMessage;
}

export class SvcReplaceEntityTranslation implements IEvaServiceDefinition
{
  name = 'ReplaceEntityTranslation';
  path = '/message/ReplaceEntityTranslation';
  request?: ReplaceEntityTranslation;
  response?: EmptyResponseMessage;
}

export class SvcReplaceInvoice implements IEvaServiceDefinition
{
  name = 'ReplaceInvoice';
  path = '/message/ReplaceInvoice';
  request?: ReplaceInvoice;
  response?: EmptyResponseMessage;
}

export class SvcReplaceStringTranslation implements IEvaServiceDefinition
{
  name = 'ReplaceStringTranslation';
  path = '/message/ReplaceStringTranslation';
  request?: ReplaceStringTranslation;
  response?: EmptyResponseMessage;
}

export class SvcReplayEvents implements IEvaServiceDefinition
{
  name = 'ReplayEvents';
  path = '/message/ReplayEvents';
  request?: ReplayEvents;
  response?: ReplayEventsResponse;
}

export class SvcRepostFinancialPeriod implements IEvaServiceDefinition
{
  name = 'RepostFinancialPeriod';
  path = '/message/RepostFinancialPeriod';
  request?: RepostFinancialPeriod;
  response?: EmptyResponseMessage;
}

export class SvcReprintThermalPrintResult implements IEvaServiceDefinition
{
  name = 'ReprintThermalPrintResult';
  path = '/message/ReprintThermalPrintResult';
  request?: ReprintThermalPrintResult;
  response?: EmptyResponseMessage;
}

export class SvcRequestPasswordResetToken implements IEvaServiceDefinition
{
  name = 'RequestPasswordResetToken';
  path = '/message/RequestPasswordResetToken';
  request?: RequestPasswordResetToken;
  response?: EmptyResponseMessage;
}

export class SvcRequestPaymentUpdate implements IEvaServiceDefinition
{
  name = 'RequestPaymentUpdate';
  path = '/message/RequestPaymentUpdate';
  request?: RequestPaymentUpdate;
  response?: RequestPaymentUpdateResponse;
}

export class SvcRequestReindexOrderSearchData implements IEvaServiceDefinition
{
  name = 'RequestReindexOrderSearchData';
  path = '/message/RequestReindexOrderSearchData';
  request?: RequestReindexOrderSearchData;
  response?: EmptyResponseMessage;
}

export class SvcRequestReindexUserSearchData implements IEvaServiceDefinition
{
  name = 'RequestReindexUserSearchData';
  path = '/message/RequestReindexUserSearchData';
  request?: RequestReindexUserSearchData;
  response?: EmptyResponseMessage;
}

export class SvcRequeueErrorMessage implements IEvaServiceDefinition
{
  name = 'RequeueErrorMessage';
  path = '/message/RequeueErrorMessage';
  request?: RequeueErrorMessage;
  response?: EmptyResponseMessage;
}

export class SvcResendOrder implements IEvaServiceDefinition
{
  name = 'ResendOrder';
  path = '/message/ResendOrder';
  request?: ResendOrder;
  response?: ResendOrderResponse;
}

export class SvcResendUserInteractionCommunication implements IEvaServiceDefinition
{
  name = 'ResendUserInteractionCommunication';
  path = '/message/ResendUserInteractionCommunication';
  request?: ResendUserInteractionCommunication;
  response?: EmptyResponseMessage;
}

export class SvcReserveOrder implements IEvaServiceDefinition
{
  name = 'ReserveOrder';
  path = '/message/ReserveOrder';
  request?: ReserveOrder;
  response?: EmptyResponseMessage;
}

export class SvcResetFinancialEvents implements IEvaServiceDefinition
{
  name = 'ResetFinancialEvents';
  path = '/message/ResetFinancialEvents';
  request?: ResetFinancialEvents;
  response?: EmptyResponseMessage;
}

export class SvcResetUserPassword implements IEvaServiceDefinition
{
  name = 'ResetUserPassword';
  path = '/message/ResetUserPassword';
  request?: ResetUserPassword;
  response?: ResetUserPasswordResponse;
}

export class SvcResolveProductBackendIDs implements IEvaServiceDefinition
{
  name = 'ResolveProductBackendIDs';
  path = '/message/ResolveProductBackendIDs';
  request?: ResolveProductBackendIDs;
  response?: ResolveProductBackendIDsResponse;
}

export class SvcResumeProductSubscriptionForUser implements IEvaServiceDefinition
{
  name = 'ResumeProductSubscriptionForUser';
  path = '/message/ResumeProductSubscriptionForUser';
  request?: ResumeProductSubscriptionForUser;
  response?: EmptyResponseMessage;
}

export class SvcResumeSuspendedOrder implements IEvaServiceDefinition
{
  name = 'ResumeSuspendedOrder';
  path = '/message/ResumeSuspendedOrder';
  request?: ResumeSuspendedOrder;
  response?: EmptyResponseMessage;
}

export class SvcRetryFinancialPeriodExport implements IEvaServiceDefinition
{
  name = 'RetryFinancialPeriodExport';
  path = '/message/RetryFinancialPeriodExport';
  request?: RetryFinancialPeriodExport;
  response?: EmptyResponseMessage;
}

export class SvcRetryFinancialPeriodExports implements IEvaServiceDefinition
{
  name = 'RetryFinancialPeriodExports';
  path = '/message/RetryFinancialPeriodExports';
  request?: RetryFinancialPeriodExports;
  response?: EmptyResponseMessage;
}

export class SvcRetryInvoiceExport implements IEvaServiceDefinition
{
  name = 'RetryInvoiceExport';
  path = '/message/RetryInvoiceExport';
  request?: RetryInvoiceExport;
  response?: EmptyResponseMessage;
}

export class SvcRetryOrderExport implements IEvaServiceDefinition
{
  name = 'RetryOrderExport';
  path = '/message/RetryOrderExport';
  request?: RetryOrderExport;
  response?: EmptyResponseMessage;
}

export class SvcRetryShipmentExport implements IEvaServiceDefinition
{
  name = 'RetryShipmentExport';
  path = '/message/RetryShipmentExport';
  request?: RetryShipmentExport;
  response?: EmptyResponseMessage;
}

export class SvcReturnOrderLines implements IEvaServiceDefinition
{
  name = 'ReturnOrderLines';
  path = '/message/ReturnOrderLines';
  request?: ReturnOrderLines;
  response?: SimpleShoppingCartResponse;
}

export class SvcReturnUserBorrowedProducts implements IEvaServiceDefinition
{
  name = 'ReturnUserBorrowedProducts';
  path = '/message/ReturnUserBorrowedProducts';
  request?: ReturnUserBorrowedProducts;
  response?: EmptyResponseMessage;
}

export class SvcReviewScriptProposal implements IEvaServiceDefinition
{
  name = 'ReviewScriptProposal';
  path = '/message/ReviewScriptProposal';
  request?: ReviewScriptProposal;
  response?: EmptyResponseMessage;
}

export class SvcRevokeUserAgreement implements IEvaServiceDefinition
{
  name = 'RevokeUserAgreement';
  path = '/message/RevokeUserAgreement';
  request?: RevokeUserAgreement;
  response?: EmptyResponseMessage;
}

export class SvcRevokeWishlistShare implements IEvaServiceDefinition
{
  name = 'RevokeWishlistShare';
  path = '/message/RevokeWishlistShare';
  request?: RevokeWishlistShare;
  response?: EmptyResponseMessage;
}

export class SvcSearchConsumerCompany implements IEvaServiceDefinition
{
  name = 'SearchConsumerCompany';
  path = '/message/SearchConsumerCompany';
  request?: SearchConsumerCompany;
  response?: SearchConsumerCompanyResponse;
}

export class SvcSearchLoyaltyPass implements IEvaServiceDefinition
{
  name = 'SearchLoyaltyPass';
  path = '/message/SearchLoyaltyPass';
  request?: SearchLoyaltyPass;
  response?: SearchLoyaltyPassResponse;
}

export class SvcSearchOrders implements IEvaServiceDefinition
{
  name = 'SearchOrders';
  path = '/message/SearchOrders';
  request?: SearchOrders;
  response?: SearchOrdersResponse;
}

export class SvcSearchOrdersForCustomer implements IEvaServiceDefinition
{
  name = 'SearchOrdersForCustomer';
  path = '/message/SearchOrdersForCustomer';
  request?: SearchOrdersForCustomer;
  response?: SearchOrdersForCustomerResponse;
}

export class SvcSearchProducts implements IEvaServiceDefinition
{
  name = 'SearchProducts';
  path = '/message/SearchProducts';
  request?: SearchProducts;
  response?: SearchProductsResponse;
}

export class SvcSearchUsers implements IEvaServiceDefinition
{
  name = 'SearchUsers';
  path = '/message/SearchUsers';
  request?: SearchUsers;
  response?: SearchUsersResponse;
}

export class SvcSendConfigurationPage implements IEvaServiceDefinition
{
  name = 'SendConfigurationPage';
  path = '/message/SendConfigurationPage';
  request?: SendConfigurationPage;
  response?: EmptyResponseMessage;
}

export class SvcSendContactForm implements IEvaServiceDefinition
{
  name = 'SendContactForm';
  path = '/message/SendContactForm';
  request?: SendContactForm;
  response?: EmptyResponseMessage;
}

export class SvcSendMagicLink implements IEvaServiceDefinition
{
  name = 'SendMagicLink';
  path = '/message/SendMagicLink';
  request?: SendMagicLink;
  response?: SendMagicLinkResponse;
}

export class SvcSendReturnMail implements IEvaServiceDefinition
{
  name = 'SendReturnMail';
  path = '/message/SendReturnMail';
  request?: SendReturnMail;
  response?: EmptyResponseMessage;
}

export class SvcSetCustomerIdentifiersOnOrder implements IEvaServiceDefinition
{
  name = 'SetCustomerIdentifiersOnOrder';
  path = '/message/SetCustomerIdentifiersOnOrder';
  request?: SetCustomerIdentifiersOnOrder;
  response?: EmptyResponseMessage;
}

export class SvcSetCustomerReferencesOnOrder implements IEvaServiceDefinition
{
  name = 'SetCustomerReferencesOnOrder';
  path = '/message/SetCustomerReferencesOnOrder';
  request?: SetCustomerReferencesOnOrder;
  response?: EmptyResponseMessage;
}

export class SvcSetCustomUserData implements IEvaServiceDefinition
{
  name = 'SetCustomUserData';
  path = '/message/SetCustomUserData';
  request?: SetCustomUserData;
  response?: EmptyResponseMessage;
}

export class SvcSetDefaultBillingAddress implements IEvaServiceDefinition
{
  name = 'SetDefaultBillingAddress';
  path = '/message/SetDefaultBillingAddress';
  request?: SetDefaultBillingAddress;
  response?: EmptyResponseMessage;
}

export class SvcSetDefaultPickupAddress implements IEvaServiceDefinition
{
  name = 'SetDefaultPickupAddress';
  path = '/message/SetDefaultPickupAddress';
  request?: SetDefaultPickupAddress;
  response?: EmptyResponseMessage;
}

export class SvcSetDefaultShippingAddress implements IEvaServiceDefinition
{
  name = 'SetDefaultShippingAddress';
  path = '/message/SetDefaultShippingAddress';
  request?: SetDefaultShippingAddress;
  response?: EmptyResponseMessage;
}

export class SvcSetDeliveryOrderData implements IEvaServiceDefinition
{
  name = 'SetDeliveryOrderData';
  path = '/message/SetDeliveryOrderData';
  request?: SetDeliveryOrderData;
  response?: EmptyResponseMessage;
}

export class SvcSetDiscountProductOption implements IEvaServiceDefinition
{
  name = 'SetDiscountProductOption';
  path = '/message/SetDiscountProductOption';
  request?: SetDiscountProductOption;
  response?: EmptyResponseMessage;
}

export class SvcSetElectronicInvoiceData implements IEvaServiceDefinition
{
  name = 'SetElectronicInvoiceData';
  path = '/message/SetElectronicInvoiceData';
  request?: SetElectronicInvoiceData;
  response?: EmptyResponseMessage;
}

export class SvcSetEmployeesForFinancialPeriod implements IEvaServiceDefinition
{
  name = 'SetEmployeesForFinancialPeriod';
  path = '/message/SetEmployeesForFinancialPeriod';
  request?: SetEmployeesForFinancialPeriod;
  response?: EmptyResponseMessage;
}

export class SvcSetExternalFullStockCountResult implements IEvaServiceDefinition
{
  name = 'SetExternalFullStockCountResult';
  path = '/message/SetExternalFullStockCountResult';
  request?: SetExternalFullStockCountResult;
  response?: EmptyResponseMessage;
}

export class SvcSetFiscalOrderData implements IEvaServiceDefinition
{
  name = 'SetFiscalOrderData';
  path = '/message/SetFiscalOrderData';
  request?: SetFiscalOrderData;
  response?: EmptyResponseMessage;
}

export class SvcSetFraudHandlerData implements IEvaServiceDefinition
{
  name = 'SetFraudHandlerData';
  path = '/message/SetFraudHandlerData';
  request?: SetFraudHandlerData;
  response?: EmptyResponseMessage;
}

export class SvcSetGiftWrappingOptionsOnOrder implements IEvaServiceDefinition
{
  name = 'SetGiftWrappingOptionsOnOrder';
  path = '/message/SetGiftWrappingOptionsOnOrder';
  request?: SetGiftWrappingOptionsOnOrder;
  response?: EmptyResponseMessage;
}

export class SvcSetLineForReturnToSupplierShipment implements IEvaServiceDefinition
{
  name = 'SetLineForReturnToSupplierShipment';
  path = '/message/SetLineForReturnToSupplierShipment';
  request?: SetLineForReturnToSupplierShipment;
  response?: EmptyResponseMessage;
}

export class SvcSetLotteryNumber implements IEvaServiceDefinition
{
  name = 'SetLotteryNumber';
  path = '/message/SetLotteryNumber';
  request?: SetLotteryNumber;
  response?: EmptyResponseMessage;
}

export class SvcSetLoyaltyProgramForFinancialPeriod implements IEvaServiceDefinition
{
  name = 'SetLoyaltyProgramForFinancialPeriod';
  path = '/message/SetLoyaltyProgramForFinancialPeriod';
  request?: SetLoyaltyProgramForFinancialPeriod;
  response?: EmptyResponseMessage;
}

export class SvcSetOrderBackendIdentifier implements IEvaServiceDefinition
{
  name = 'SetOrderBackendIdentifier';
  path = '/message/SetOrderBackendIdentifier';
  request?: SetOrderBackendIdentifier;
  response?: EmptyResponseMessage;
}

export class SvcSetOrderFulfillmentOptions implements IEvaServiceDefinition
{
  name = 'SetOrderFulfillmentOptions';
  path = '/message/SetOrderFulfillmentOptions';
  request?: SetOrderFulfillmentOptions;
  response?: EmptyResponseMessage;
}

export class SvcSetOrderSoldBy implements IEvaServiceDefinition
{
  name = 'SetOrderSoldBy';
  path = '/message/SetOrderSoldBy';
  request?: SetOrderSoldBy;
  response?: EmptyResponseMessage;
}

export class SvcSetOrganizationUnitNotes implements IEvaServiceDefinition
{
  name = 'SetOrganizationUnitNotes';
  path = '/message/SetOrganizationUnitNotes';
  request?: SetOrganizationUnitNotes;
  response?: EmptyResponseMessage;
}

export class SvcSetOrganizationUnitOpeningHoursException implements IEvaServiceDefinition
{
  name = 'SetOrganizationUnitOpeningHoursException';
  path = '/message/SetOrganizationUnitOpeningHoursException';
  request?: SetOrganizationUnitOpeningHoursException;
  response?: ValidateOpeningHoursTemplateResponse;
}

export class SvcSetOrganizationUnitOpeningHoursExceptions implements IEvaServiceDefinition
{
  name = 'SetOrganizationUnitOpeningHoursExceptions';
  path = '/message/SetOrganizationUnitOpeningHoursExceptions';
  request?: SetOrganizationUnitOpeningHoursExceptions;
  response?: EmptyResponseMessage;
}

export class SvcSetPCIQuestionAnswerForFinancialPeriod implements IEvaServiceDefinition
{
  name = 'SetPCIQuestionAnswerForFinancialPeriod';
  path = '/message/SetPCIQuestionAnswerForFinancialPeriod';
  request?: SetPCIQuestionAnswerForFinancialPeriod;
  response?: EmptyResponseMessage;
}

export class SvcSetPeppolData implements IEvaServiceDefinition
{
  name = 'SetPeppolData';
  path = '/message/SetPeppolData';
  request?: SetPeppolData;
  response?: EmptyResponseMessage;
}

export class SvcSetPickProductDiscountOptionsForOrderLine implements IEvaServiceDefinition
{
  name = 'SetPickProductDiscountOptionsForOrderLine';
  path = '/message/SetPickProductDiscountOptionsForOrderLine';
  request?: SetPickProductDiscountOptionsForOrderLine;
  response?: EmptyResponseMessage;
}

export class SvcSetPickupOrganizationUnit implements IEvaServiceDefinition
{
  name = 'SetPickupOrganizationUnit';
  path = '/message/SetPickupOrganizationUnit';
  request?: SetPickupOrganizationUnit;
  response?: SimpleShoppingCartResponse;
}

export class SvcSetPreferredRefundMethod implements IEvaServiceDefinition
{
  name = 'SetPreferredRefundMethod';
  path = '/message/SetPreferredRefundMethod';
  request?: SetPreferredRefundMethod;
  response?: EmptyResponseMessage;
}

export class SvcSetRemarkOnOrder implements IEvaServiceDefinition
{
  name = 'SetRemarkOnOrder';
  path = '/message/SetRemarkOnOrder';
  request?: SetRemarkOnOrder;
  response?: EmptyResponseMessage;
}

export class SvcSetRequestedDate implements IEvaServiceDefinition
{
  name = 'SetRequestedDate';
  path = '/message/SetRequestedDate';
  request?: SetRequestedDate;
  response?: EmptyResponseMessage;
}

export class SvcSetReturnOrderRefundCorrection implements IEvaServiceDefinition
{
  name = 'SetReturnOrderRefundCorrection';
  path = '/message/SetReturnOrderRefundCorrection';
  request?: SetReturnOrderRefundCorrection;
  response?: EmptyResponseMessage;
}

export class SvcSetSerialNumbers implements IEvaServiceDefinition
{
  name = 'SetSerialNumbers';
  path = '/message/SetSerialNumbers';
  request?: SetSerialNumbers;
  response?: EmptyResponseMessage;
}

export class SvcSetShipmentSettings implements IEvaServiceDefinition
{
  name = 'SetShipmentSettings';
  path = '/message/SetShipmentSettings';
  request?: SetShipmentSettings;
  response?: EmptyResponseMessage;
}

export class SvcSetShippingMethod implements IEvaServiceDefinition
{
  name = 'SetShippingMethod';
  path = '/message/SetShippingMethod';
  request?: SetShippingMethod;
  response?: SimpleShoppingCartResponse;
}

export class SvcSetSpecialDateOnOpeningHoursTemplate implements IEvaServiceDefinition
{
  name = 'SetSpecialDateOnOpeningHoursTemplate';
  path = '/message/SetSpecialDateOnOpeningHoursTemplate';
  request?: SetSpecialDateOnOpeningHoursTemplate;
  response?: EmptyResponseMessage;
}

export class SvcSetStockLabelSettings implements IEvaServiceDefinition
{
  name = 'SetStockLabelSettings';
  path = '/message/SetStockLabelSettings';
  request?: SetStockLabelSettings;
  response?: EmptyResponseMessage;
}

export class SvcSetStockProductForOrderLine implements IEvaServiceDefinition
{
  name = 'SetStockProductForOrderLine';
  path = '/message/SetStockProductForOrderLine';
  request?: SetStockProductForOrderLine;
  response?: EmptyResponseMessage;
}

export class SvcSetSuppliersForReturnToSupplierRequest implements IEvaServiceDefinition
{
  name = 'SetSuppliersForReturnToSupplierRequest';
  path = '/message/SetSuppliersForReturnToSupplierRequest';
  request?: SetSuppliersForReturnToSupplierRequest;
  response?: EmptyResponseMessage;
}

export class SvcSetTaxFreeCustomerIdentifier implements IEvaServiceDefinition
{
  name = 'SetTaxFreeCustomerIdentifier';
  path = '/message/SetTaxFreeCustomerIdentifier';
  request?: SetTaxFreeCustomerIdentifier;
  response?: EmptyResponseMessage;
}

export class SvcSetTransportOrderLineData implements IEvaServiceDefinition
{
  name = 'SetTransportOrderLineData';
  path = '/message/SetTransportOrderLineData';
  request?: SetTransportOrderLineData;
  response?: EmptyResponseMessage;
}

export class SvcSetUserConsignment implements IEvaServiceDefinition
{
  name = 'SetUserConsignment';
  path = '/message/SetUserConsignment';
  request?: SetUserConsignment;
  response?: EmptyResponseMessage;
}

export class SvcSetUserToSingleSignOnOnly implements IEvaServiceDefinition
{
  name = 'SetUserToSingleSignOnOnly';
  path = '/message/SetUserToSingleSignOnOnly';
  request?: SetUserToSingleSignOnOnly;
  response?: EmptyResponseMessage;
}

export class SvcSetWarehouseOrderData implements IEvaServiceDefinition
{
  name = 'SetWarehouseOrderData';
  path = '/message/SetWarehouseOrderData';
  request?: SetWarehouseOrderData;
  response?: EmptyResponseMessage;
}

export class SvcShareWishlist implements IEvaServiceDefinition
{
  name = 'ShareWishlist';
  path = '/message/ShareWishlist';
  request?: ShareWishlist;
  response?: ShareWishlistResponse;
}

export class SvcShipExternalOrder implements IEvaServiceDefinition
{
  name = 'ShipExternalOrder';
  path = '/message/ShipExternalOrder';
  request?: ShipExternalOrder;
  response?: ShipExternalOrderResponse;
}

export class SvcShipOrder implements IEvaServiceDefinition
{
  name = 'ShipOrder';
  path = '/message/ShipOrder';
  request?: ShipOrder;
  response?: ShipOrderResponse;
}

export class SvcShipOrderFulfillment implements IEvaServiceDefinition
{
  name = 'ShipOrderFulfillment';
  path = '/message/ShipOrderFulfillment';
  request?: ShipOrderFulfillment;
  response?: ShipOrderFulfillmentResponse;
}

export class SvcShipOrderLines implements IEvaServiceDefinition
{
  name = 'ShipOrderLines';
  path = '/message/ShipOrderLines';
  request?: ShipOrderLines;
  response?: ShipOrderLinesResponse;
}

export class SvcShipPurchaseOrder implements IEvaServiceDefinition
{
  name = 'ShipPurchaseOrder';
  path = '/message/ShipPurchaseOrder';
  request?: ShipPurchaseOrder;
  response?: ShipPurchaseOrderResponse;
}

export class SvcShipShipment implements IEvaServiceDefinition
{
  name = 'ShipShipment';
  path = '/message/ShipShipment';
  request?: ShipShipment;
  response?: EmptyResponseMessage;
}

export class SvcSignOrder implements IEvaServiceDefinition
{
  name = 'SignOrder';
  path = '/message/SignOrder';
  request?: SignOrder;
  response?: EmptyResponseMessage;
}

export class SvcSplitOrderLine implements IEvaServiceDefinition
{
  name = 'SplitOrderLine';
  path = '/message/SplitOrderLine';
  request?: SplitOrderLine;
  response?: SplitOrderLineResponse;
}

export class SvcStartAppointment implements IEvaServiceDefinition
{
  name = 'StartAppointment';
  path = '/message/StartAppointment';
  request?: StartAppointment;
  response?: EmptyResponseMessage;
}

export class SvcStartAppointments implements IEvaServiceDefinition
{
  name = 'StartAppointments';
  path = '/message/StartAppointments';
  request?: StartAppointments;
  response?: EmptyResponseMessage;
}

export class SvcStartCloseCashJournal implements IEvaServiceDefinition
{
  name = 'StartCloseCashJournal';
  path = '/message/StartCloseCashJournal';
  request?: StartCloseCashJournal;
  response?: StartCloseCashJournalResponse;
}

export class SvcStartCompositeUserTask implements IEvaServiceDefinition
{
  name = 'StartCompositeUserTask';
  path = '/message/StartCompositeUserTask';
  request?: StartCompositeUserTask;
  response?: StartCompositeUserTaskResponse;
}

export class SvcStartConsolidatedZonePickTask implements IEvaServiceDefinition
{
  name = 'StartConsolidatedZonePickTask';
  path = '/message/StartConsolidatedZonePickTask';
  request?: StartConsolidatedZonePickTask;
  response?: StartConsolidatedZonePickTaskResponse;
}

export class SvcStartCustomerInteractionTask implements IEvaServiceDefinition
{
  name = 'StartCustomerInteractionTask';
  path = '/message/StartCustomerInteractionTask';
  request?: StartCustomerInteractionTask;
  response?: StartCustomerInteractionTaskResponse;
}

export class SvcStartCustomUserTask implements IEvaServiceDefinition
{
  name = 'StartCustomUserTask';
  path = '/message/StartCustomUserTask';
  request?: StartCustomUserTask;
  response?: StartCustomUserTaskResponse;
}

export class SvcStartFullStockCount implements IEvaServiceDefinition
{
  name = 'StartFullStockCount';
  path = '/message/StartFullStockCount';
  request?: StartFullStockCount;
  response?: StartFullStockCountResponse;
}

export class SvcStartFullStockCountLabel implements IEvaServiceDefinition
{
  name = 'StartFullStockCountLabel';
  path = '/message/StartFullStockCountLabel';
  request?: StartFullStockCountLabel;
  response?: StartFullStockCountLabelResponse;
}

export class SvcStartOpenCashJournal implements IEvaServiceDefinition
{
  name = 'StartOpenCashJournal';
  path = '/message/StartOpenCashJournal';
  request?: StartOpenCashJournal;
  response?: StartOpenCashJournalResponse;
}

export class SvcStartOperationalTask implements IEvaServiceDefinition
{
  name = 'StartOperationalTask';
  path = '/message/StartOperationalTask';
  request?: StartOperationalTask;
  response?: StartOperationalTaskResponse;
}

export class SvcStartOrderInterventionTask implements IEvaServiceDefinition
{
  name = 'StartOrderInterventionTask';
  path = '/message/StartOrderInterventionTask';
  request?: StartOrderInterventionTask;
  response?: StartOrderInterventionTaskResponse;
}

export class SvcStartPrintPriceLabelTask implements IEvaServiceDefinition
{
  name = 'StartPrintPriceLabelTask';
  path = '/message/StartPrintPriceLabelTask';
  request?: StartPrintPriceLabelTask;
  response?: StartPrintPriceLabelTaskResponse;
}

export class SvcStartPrintTask implements IEvaServiceDefinition
{
  name = 'StartPrintTask';
  path = '/message/StartPrintTask';
  request?: StartPrintTask;
  response?: StartPrintTaskResponse;
}

export class SvcStartReceiveShipment implements IEvaServiceDefinition
{
  name = 'StartReceiveShipment';
  path = '/message/StartReceiveShipment';
  request?: StartReceiveShipment;
  response?: StartReceiveShipmentResponse;
}

export class SvcStartRepairUserTask implements IEvaServiceDefinition
{
  name = 'StartRepairUserTask';
  path = '/message/StartRepairUserTask';
  request?: StartRepairUserTask;
  response?: StartRepairUserTaskResponse;
}

export class SvcStartReservationCleanup implements IEvaServiceDefinition
{
  name = 'StartReservationCleanup';
  path = '/message/StartReservationCleanup';
  request?: StartReservationCleanup;
  response?: StartReservationCleanupResponse;
}

export class SvcStartReservationDeviationTask implements IEvaServiceDefinition
{
  name = 'StartReservationDeviationTask';
  path = '/message/StartReservationDeviationTask';
  request?: StartReservationDeviationTask;
  response?: StartReservationDeviationTaskResponse;
}

export class SvcStartReservationPickupTask implements IEvaServiceDefinition
{
  name = 'StartReservationPickupTask';
  path = '/message/StartReservationPickupTask';
  request?: StartReservationPickupTask;
  response?: StartReservationPickupTaskResponse;
}

export class SvcStartReturnToSupplierTask implements IEvaServiceDefinition
{
  name = 'StartReturnToSupplierTask';
  path = '/message/StartReturnToSupplierTask';
  request?: StartReturnToSupplierTask;
  response?: StartReturnToSupplierResponse;
}

export class SvcStartSecondChanceProductRegistration implements IEvaServiceDefinition
{
  name = 'StartSecondChanceProductRegistration';
  path = '/message/StartSecondChanceProductRegistration';
  request?: StartSecondChanceProductRegistration;
  response?: StartSecondChanceProductRegistrationResponse;
}

export class SvcStartShipFromStoreTask implements IEvaServiceDefinition
{
  name = 'StartShipFromStoreTask';
  path = '/message/StartShipFromStoreTask';
  request?: StartShipFromStoreTask;
  response?: StartShipFromStoreTaskResponse;
}

export class SvcStartStockMovementFollowUp implements IEvaServiceDefinition
{
  name = 'StartStockMovementFollowUp';
  path = '/message/StartStockMovementFollowUp';
  request?: StartStockMovementFollowUp;
  response?: StartStockMovementFollowUpResponse;
}

export class SvcStartStockReplenishment implements IEvaServiceDefinition
{
  name = 'StartStockReplenishment';
  path = '/message/StartStockReplenishment';
  request?: StartStockReplenishment;
  response?: StartStockReplenishmentResponse;
}

export class SvcStartStockReservation2 implements IEvaServiceDefinition
{
  name = 'StartStockReservation2';
  path = '/message/StartStockReservation2';
  request?: StartStockReservation2;
  response?: StartStockReservationResponse2;
}

export class SvcStartZonedCycleCount implements IEvaServiceDefinition
{
  name = 'StartZonedCycleCount';
  path = '/message/StartZonedCycleCount';
  request?: StartZonedCycleCount;
  response?: StartZonedCycleCountResponse;
}

export class SvcStartZonedCycleCountPreCount implements IEvaServiceDefinition
{
  name = 'StartZonedCycleCountPreCount';
  path = '/message/StartZonedCycleCountPreCount';
  request?: StartZonedCycleCountPreCount;
  response?: StartZonedCycleCountPreCountResponse;
}

export class SvcStoreAndAttachBlobToOrder implements IEvaServiceDefinition
{
  name = 'StoreAndAttachBlobToOrder';
  path = '/message/StoreAndAttachBlobToOrder';
  request?: StoreAndAttachBlobToOrder;
  response?: StoreAndAttachBlobToOrderResponse;
}

export class SvcSubmitInquiry implements IEvaServiceDefinition
{
  name = 'SubmitInquiry';
  path = '/message/SubmitInquiry';
  request?: SubmitInquiry;
  response?: EmptyResponseMessage;
}

export class SvcSubscribeToFeed implements IEvaServiceDefinition
{
  name = 'SubscribeToFeed';
  path = '/message/SubscribeToFeed';
  request?: SubscribeToFeed;
  response?: SubscribeToFeedResponse;
}

export class SvcSubscribeUser implements IEvaServiceDefinition
{
  name = 'SubscribeUser';
  path = '/message/SubscribeUser';
  request?: SubscribeUser;
  response?: SubscribeUserResponse;
}

export class SvcSupplierCreateOrUpdatePurchaseOrder implements IEvaServiceDefinition
{
  name = 'SupplierCreateOrUpdatePurchaseOrder';
  path = '/message/SupplierCreateOrUpdatePurchaseOrder';
  request?: SupplierCreateOrUpdatePurchaseOrder;
  response?: CreatePurchaseOrderResponseWithUpdateIndicator;
}

export class SvcSupplierCreatePurchaseOrder implements IEvaServiceDefinition
{
  name = 'SupplierCreatePurchaseOrder';
  path = '/message/SupplierCreatePurchaseOrder';
  request?: SupplierCreatePurchaseOrder;
  response?: CreatePurchaseOrderResponse;
}

export class SvcSupplierShipPurchaseOrder implements IEvaServiceDefinition
{
  name = 'SupplierShipPurchaseOrder';
  path = '/message/SupplierShipPurchaseOrder';
  request?: SupplierShipPurchaseOrder;
  response?: EmptyResponseMessage;
}

export class SvcSupplierUpdatePurchaseOrder implements IEvaServiceDefinition
{
  name = 'SupplierUpdatePurchaseOrder';
  path = '/message/SupplierUpdatePurchaseOrder';
  request?: SupplierUpdatePurchaseOrder;
  response?: EmptyResponseMessage;
}

export class SvcSuspendOrder implements IEvaServiceDefinition
{
  name = 'SuspendOrder';
  path = '/message/SuspendOrder';
  request?: SuspendOrder;
  response?: EmptyResponseMessage;
}

export class SvcTestEventExportConfiguration implements IEvaServiceDefinition
{
  name = 'TestEventExportConfiguration';
  path = '/message/TestEventExportConfiguration';
  request?: TestEventExportConfiguration;
  response?: TestEventExportConfigurationResponse;
}

export class SvcToggleTaxFreeFormRequest implements IEvaServiceDefinition
{
  name = 'ToggleTaxFreeFormRequest';
  path = '/message/ToggleTaxFreeFormRequest';
  request?: ToggleTaxFreeFormRequest;
  response?: EmptyResponseMessage;
}

export class SvcTransferOrderToOrganizationUnit implements IEvaServiceDefinition
{
  name = 'TransferOrderToOrganizationUnit';
  path = '/message/TransferOrderToOrganizationUnit';
  request?: TransferOrderToOrganizationUnit;
  response?: EmptyResponseMessage;
}

export class SvcTriggerAMLChecksOnOrder implements IEvaServiceDefinition
{
  name = 'TriggerAMLChecksOnOrder';
  path = '/message/TriggerAMLChecksOnOrder';
  request?: TriggerAMLChecksOnOrder;
  response?: EmptyResponseMessage;
}

export class SvcTriggerOperationalTaskConfig implements IEvaServiceDefinition
{
  name = 'TriggerOperationalTaskConfig';
  path = '/message/TriggerOperationalTaskConfig';
  request?: TriggerOperationalTaskConfig;
  response?: EmptyResponseMessage;
}

export class SvcTriggerRecurringTask implements IEvaServiceDefinition
{
  name = 'TriggerRecurringTask';
  path = '/message/TriggerRecurringTask';
  request?: TriggerRecurringTask;
  response?: TriggerRecurringTaskResponse;
}

export class SvcUnarchiveOrganizationUnit implements IEvaServiceDefinition
{
  name = 'UnarchiveOrganizationUnit';
  path = '/message/UnarchiveOrganizationUnit';
  request?: UnarchiveOrganizationUnit;
  response?: EmptyResponseMessage;
}

export class SvcUncommitOrderLines implements IEvaServiceDefinition
{
  name = 'UncommitOrderLines';
  path = '/message/UncommitOrderLines';
  request?: UncommitOrderLines;
  response?: EmptyResponseMessage;
}

export class SvcUndoShipment implements IEvaServiceDefinition
{
  name = 'UndoShipment';
  path = '/message/UndoShipment';
  request?: UndoShipment;
  response?: EmptyResponseMessage;
}

export class SvcUndoShipmentReceipt implements IEvaServiceDefinition
{
  name = 'UndoShipmentReceipt';
  path = '/message/UndoShipmentReceipt';
  request?: UndoShipmentReceipt;
  response?: EmptyResponseMessage;
}

export class SvcUnlinkSharedWishlist implements IEvaServiceDefinition
{
  name = 'UnlinkSharedWishlist';
  path = '/message/UnlinkSharedWishlist';
  request?: UnlinkSharedWishlist;
  response?: EmptyResponseMessage;
}

export class SvcUnlockOrder implements IEvaServiceDefinition
{
  name = 'UnlockOrder';
  path = '/message/UnlockOrder';
  request?: UnlockOrder;
  response?: EmptyResponseMessage;
}

export class SvcUnsubscribeFromFeed implements IEvaServiceDefinition
{
  name = 'UnsubscribeFromFeed';
  path = '/message/UnsubscribeFromFeed';
  request?: UnsubscribeFromFeed;
  response?: EmptyResponseMessage;
}

export class SvcUnsubscribeUser implements IEvaServiceDefinition
{
  name = 'UnsubscribeUser';
  path = '/message/UnsubscribeUser';
  request?: UnsubscribeUser;
  response?: UnsubscribeUserResponse;
}

export class SvcUpdateAddress implements IEvaServiceDefinition
{
  name = 'UpdateAddress';
  path = '/message/UpdateAddress';
  request?: UpdateAddress;
  response?: EmptyResponseMessage;
}

export class SvcUpdateAddressBookItem implements IEvaServiceDefinition
{
  name = 'UpdateAddressBookItem';
  path = '/message/UpdateAddressBookItem';
  request?: UpdateAddressBookItem;
  response?: EmptyResponseMessage;
}

export class SvcUpdateAddressRequirement implements IEvaServiceDefinition
{
  name = 'UpdateAddressRequirement';
  path = '/message/UpdateAddressRequirement';
  request?: UpdateAddressRequirement;
  response?: EmptyResponseMessage;
}

export class SvcUpdateAnonymousWishlist implements IEvaServiceDefinition
{
  name = 'UpdateAnonymousWishlist';
  path = '/message/UpdateAnonymousWishlist';
  request?: UpdateAnonymousWishlist;
  response?: EmptyResponseMessage;
}

export class SvcUpdateApiKey implements IEvaServiceDefinition
{
  name = 'UpdateApiKey';
  path = '/message/UpdateApiKey';
  request?: UpdateApiKey;
  response?: EmptyResponseMessage;
}

export class SvcUpdateAppointment implements IEvaServiceDefinition
{
  name = 'UpdateAppointment';
  path = '/message/UpdateAppointment';
  request?: UpdateAppointment;
  response?: EmptyResponseMessage;
}

export class SvcUpdateAppRule implements IEvaServiceDefinition
{
  name = 'UpdateAppRule';
  path = '/message/UpdateAppRule';
  request?: UpdateAppRule;
  response?: EmptyResponseMessage;
}

export class SvcUpdateAuditChainConfiguration implements IEvaServiceDefinition
{
  name = 'UpdateAuditChainConfiguration';
  path = '/message/UpdateAuditChainConfiguration';
  request?: UpdateAuditChainConfiguration;
  response?: EmptyResponseMessage;
}

export class SvcUpdateCashCorrectionReason implements IEvaServiceDefinition
{
  name = 'UpdateCashCorrectionReason';
  path = '/message/UpdateCashCorrectionReason';
  request?: UpdateCashCorrectionReason;
  response?: EmptyResponseMessage;
}

export class SvcUpdateCompanyForUser implements IEvaServiceDefinition
{
  name = 'UpdateCompanyForUser';
  path = '/message/UpdateCompanyForUser';
  request?: UpdateCompanyForUser;
  response?: EmptyResponseMessage;
}

export class SvcUpdateConsolidatedZonePickTask implements IEvaServiceDefinition
{
  name = 'UpdateConsolidatedZonePickTask';
  path = '/message/UpdateConsolidatedZonePickTask';
  request?: UpdateConsolidatedZonePickTask;
  response?: EmptyResponseMessage;
}

export class SvcUpdateConsumerCompany implements IEvaServiceDefinition
{
  name = 'UpdateConsumerCompany';
  path = '/message/UpdateConsumerCompany';
  request?: UpdateConsumerCompany;
  response?: UpdateConsumerCompanyResponse;
}

export class SvcUpdateContractNumber implements IEvaServiceDefinition
{
  name = 'UpdateContractNumber';
  path = '/message/UpdateContractNumber';
  request?: UpdateContractNumber;
  response?: EmptyResponseMessage;
}

export class SvcUpdateCustomerInteractionTaskType implements IEvaServiceDefinition
{
  name = 'UpdateCustomerInteractionTaskType';
  path = '/message/UpdateCustomerInteractionTaskType';
  request?: UpdateCustomerInteractionTaskType;
  response?: EmptyResponseMessage;
}

export class SvcUpdateCustomFieldsForOrganizationUnits implements IEvaServiceDefinition
{
  name = 'UpdateCustomFieldsForOrganizationUnits';
  path = '/message/UpdateCustomFieldsForOrganizationUnits';
  request?: UpdateCustomFieldsForOrganizationUnits;
  response?: EmptyResponseMessage;
}

export class SvcUpdateCustomUserTaskTemplate implements IEvaServiceDefinition
{
  name = 'UpdateCustomUserTaskTemplate';
  path = '/message/UpdateCustomUserTaskTemplate';
  request?: UpdateCustomUserTaskTemplate;
  response?: EmptyResponseMessage;
}

export class SvcUpdateCycleCountOriginType implements IEvaServiceDefinition
{
  name = 'UpdateCycleCountOriginType';
  path = '/message/UpdateCycleCountOriginType';
  request?: UpdateCycleCountOriginType;
  response?: EmptyResponseMessage;
}

export class SvcUpdateCycleCountZone implements IEvaServiceDefinition
{
  name = 'UpdateCycleCountZone';
  path = '/message/UpdateCycleCountZone';
  request?: UpdateCycleCountZone;
  response?: EmptyResponseMessage;
}

export class SvcUpdateCycleCountZoneGroup implements IEvaServiceDefinition
{
  name = 'UpdateCycleCountZoneGroup';
  path = '/message/UpdateCycleCountZoneGroup';
  request?: UpdateCycleCountZoneGroup;
  response?: EmptyResponseMessage;
}

export class SvcUpdateDigitalGiftCardMailOptions implements IEvaServiceDefinition
{
  name = 'UpdateDigitalGiftCardMailOptions';
  path = '/message/UpdateDigitalGiftCardMailOptions';
  request?: UpdateDigitalGiftCardMailOptions;
  response?: EmptyResponseMessage;
}

export class SvcUpdateDigitalGiftCardOptions implements IEvaServiceDefinition
{
  name = 'UpdateDigitalGiftCardOptions';
  path = '/message/UpdateDigitalGiftCardOptions';
  request?: UpdateDigitalGiftCardOptions;
  response?: EmptyResponseMessage;
}

export class SvcUpdateDigitalGiftCardOrderLine implements IEvaServiceDefinition
{
  name = 'UpdateDigitalGiftCardOrderLine';
  path = '/message/UpdateDigitalGiftCardOrderLine';
  request?: UpdateDigitalGiftCardOrderLine;
  response?: EmptyResponseMessage;
}

export class SvcUpdateEventExportConfiguration implements IEvaServiceDefinition
{
  name = 'UpdateEventExportConfiguration';
  path = '/message/UpdateEventExportConfiguration';
  request?: UpdateEventExportConfiguration;
  response?: EmptyResponseMessage;
}

export class SvcUpdateFlight implements IEvaServiceDefinition
{
  name = 'UpdateFlight';
  path = '/message/UpdateFlight';
  request?: UpdateFlight;
  response?: EmptyResponseMessage;
}

export class SvcUpdateInterbranchOrder implements IEvaServiceDefinition
{
  name = 'UpdateInterbranchOrder';
  path = '/message/UpdateInterbranchOrder';
  request?: UpdateInterbranchOrder;
  response?: EmptyResponseMessage;
}

export class SvcUpdateInvoice implements IEvaServiceDefinition
{
  name = 'UpdateInvoice';
  path = '/message/UpdateInvoice';
  request?: UpdateInvoice;
  response?: EmptyResponseMessage;
}

export class SvcUpdateInvoiceAdditionalAmount implements IEvaServiceDefinition
{
  name = 'UpdateInvoiceAdditionalAmount';
  path = '/message/UpdateInvoiceAdditionalAmount';
  request?: UpdateInvoiceAdditionalAmount;
  response?: EmptyResponseMessage;
}

export class SvcUpdateInvoiceAdditionalAmountType implements IEvaServiceDefinition
{
  name = 'UpdateInvoiceAdditionalAmountType';
  path = '/message/UpdateInvoiceAdditionalAmountType';
  request?: UpdateInvoiceAdditionalAmountType;
  response?: EmptyResponseMessage;
}

export class SvcUpdateInvoiceDispute implements IEvaServiceDefinition
{
  name = 'UpdateInvoiceDispute';
  path = '/message/UpdateInvoiceDispute';
  request?: UpdateInvoiceDispute;
  response?: EmptyResponseMessage;
}

export class SvcUpdateInvoiceDisputeReason implements IEvaServiceDefinition
{
  name = 'UpdateInvoiceDisputeReason';
  path = '/message/UpdateInvoiceDisputeReason';
  request?: UpdateInvoiceDisputeReason;
  response?: EmptyResponseMessage;
}

export class SvcUpdateInvoiceDisputeResolveAction implements IEvaServiceDefinition
{
  name = 'UpdateInvoiceDisputeResolveAction';
  path = '/message/UpdateInvoiceDisputeResolveAction';
  request?: UpdateInvoiceDisputeResolveAction;
  response?: EmptyResponseMessage;
}

export class SvcUpdateInvoiceHoldStatus implements IEvaServiceDefinition
{
  name = 'UpdateInvoiceHoldStatus';
  path = '/message/UpdateInvoiceHoldStatus';
  request?: UpdateInvoiceHoldStatus;
  response?: EmptyResponseMessage;
}

export class SvcUpdateInvoiceLines implements IEvaServiceDefinition
{
  name = 'UpdateInvoiceLines';
  path = '/message/UpdateInvoiceLines';
  request?: UpdateInvoiceLines;
  response?: EmptyResponseMessage;
}

export class SvcUpdateInvoiceUserData implements IEvaServiceDefinition
{
  name = 'UpdateInvoiceUserData';
  path = '/message/UpdateInvoiceUserData';
  request?: UpdateInvoiceUserData;
  response?: EmptyResponseMessage;
}

export class SvcUpdateManualTaxExemptionReason implements IEvaServiceDefinition
{
  name = 'UpdateManualTaxExemptionReason';
  path = '/message/UpdateManualTaxExemptionReason';
  request?: UpdateManualTaxExemptionReason;
  response?: EmptyResponseMessage;
}

export class SvcUpdateOpeningHoursTemplate implements IEvaServiceDefinition
{
  name = 'UpdateOpeningHoursTemplate';
  path = '/message/UpdateOpeningHoursTemplate';
  request?: UpdateOpeningHoursTemplate;
  response?: ValidateOpeningHoursTemplateResponse;
}

export class SvcUpdateOperationalTaskConfig implements IEvaServiceDefinition
{
  name = 'UpdateOperationalTaskConfig';
  path = '/message/UpdateOperationalTaskConfig';
  request?: UpdateOperationalTaskConfig;
  response?: UpdateOperationalTaskConfigResponse;
}

export class SvcUpdateOrder implements IEvaServiceDefinition
{
  name = 'UpdateOrder';
  path = '/message/UpdateOrder';
  request?: UpdateOrder;
  response?: EmptyResponseMessage;
}

export class SvcUpdateOrderAddresses implements IEvaServiceDefinition
{
  name = 'UpdateOrderAddresses';
  path = '/message/UpdateOrderAddresses';
  request?: UpdateOrderAddresses;
  response?: UpdateOrderAddressesResponse;
}

export class SvcUpdateOrderBillingAddress implements IEvaServiceDefinition
{
  name = 'UpdateOrderBillingAddress';
  path = '/message/UpdateOrderBillingAddress';
  request?: UpdateOrderBillingAddress;
  response?: UpdateOrderAddressResponse;
}

export class SvcUpdateOrderCheckoutOptions implements IEvaServiceDefinition
{
  name = 'UpdateOrderCheckoutOptions';
  path = '/message/UpdateOrderCheckoutOptions';
  request?: UpdateOrderCheckoutOptions;
  response?: EmptyResponseMessage;
}

export class SvcUpdateOrderCurrency implements IEvaServiceDefinition
{
  name = 'UpdateOrderCurrency';
  path = '/message/UpdateOrderCurrency';
  request?: UpdateOrderCurrency;
  response?: EmptyResponseMessage;
}

export class SvcUpdateOrderCustomFields implements IEvaServiceDefinition
{
  name = 'UpdateOrderCustomFields';
  path = '/message/UpdateOrderCustomFields';
  request?: UpdateOrderCustomFields;
  response?: EmptyResponseMessage;
}

export class SvcUpdateOrderCustomOrderStatus implements IEvaServiceDefinition
{
  name = 'UpdateOrderCustomOrderStatus';
  path = '/message/UpdateOrderCustomOrderStatus';
  request?: UpdateOrderCustomOrderStatus;
  response?: UpdateOrderCustomOrderStatusResponse;
}

export class SvcUpdateOrderCustomStatus implements IEvaServiceDefinition
{
  name = 'UpdateOrderCustomStatus';
  path = '/message/UpdateOrderCustomStatus';
  request?: UpdateOrderCustomStatus;
  response?: EmptyResponseMessage;
}

export class SvcUpdateOrderCustomType implements IEvaServiceDefinition
{
  name = 'UpdateOrderCustomType';
  path = '/message/UpdateOrderCustomType';
  request?: UpdateOrderCustomType;
  response?: EmptyResponseMessage;
}

export class SvcUpdateOrderFulfillmentLine implements IEvaServiceDefinition
{
  name = 'UpdateOrderFulfillmentLine';
  path = '/message/UpdateOrderFulfillmentLine';
  request?: UpdateOrderFulfillmentLine;
  response?: EmptyResponseMessage;
}

export class SvcUpdateOrderLineCustomFields implements IEvaServiceDefinition
{
  name = 'UpdateOrderLineCustomFields';
  path = '/message/UpdateOrderLineCustomFields';
  request?: UpdateOrderLineCustomFields;
  response?: EmptyResponseMessage;
}

export class SvcUpdateOrderLineStockLabel implements IEvaServiceDefinition
{
  name = 'UpdateOrderLineStockLabel';
  path = '/message/UpdateOrderLineStockLabel';
  request?: UpdateOrderLineStockLabel;
  response?: EmptyResponseMessage;
}

export class SvcUpdateOrderLink implements IEvaServiceDefinition
{
  name = 'UpdateOrderLink';
  path = '/message/UpdateOrderLink';
  request?: UpdateOrderLink;
  response?: EmptyResponseMessage;
}

export class SvcUpdateOrderLinkType implements IEvaServiceDefinition
{
  name = 'UpdateOrderLinkType';
  path = '/message/UpdateOrderLinkType';
  request?: UpdateOrderLinkType;
  response?: EmptyResponseMessage;
}

export class SvcUpdateOrderOptions implements IEvaServiceDefinition
{
  name = 'UpdateOrderOptions';
  path = '/message/UpdateOrderOptions';
  request?: UpdateOrderOptions;
  response?: EmptyResponseMessage;
}

export class SvcUpdateOrderPickupAddress implements IEvaServiceDefinition
{
  name = 'UpdateOrderPickupAddress';
  path = '/message/UpdateOrderPickupAddress';
  request?: UpdateOrderPickupAddress;
  response?: UpdateOrderAddressResponse;
}

export class SvcUpdateOrderShippingAddress implements IEvaServiceDefinition
{
  name = 'UpdateOrderShippingAddress';
  path = '/message/UpdateOrderShippingAddress';
  request?: UpdateOrderShippingAddress;
  response?: UpdateOrderAddressResponse;
}

export class SvcUpdateOrderShippingStatus implements IEvaServiceDefinition
{
  name = 'UpdateOrderShippingStatus';
  path = '/message/UpdateOrderShippingStatus';
  request?: UpdateOrderShippingStatus;
  response?: EmptyResponseMessage;
}

export class SvcUpdateOrderVerificationReason implements IEvaServiceDefinition
{
  name = 'UpdateOrderVerificationReason';
  path = '/message/UpdateOrderVerificationReason';
  request?: UpdateOrderVerificationReason;
  response?: EmptyResponseMessage;
}

export class SvcUpdateOrganizationUnit implements IEvaServiceDefinition
{
  name = 'UpdateOrganizationUnit';
  path = '/message/UpdateOrganizationUnit';
  request?: UpdateOrganizationUnit;
  response?: EmptyResponseMessage;
}

export class SvcUpdateOrganizationUnitSettings implements IEvaServiceDefinition
{
  name = 'UpdateOrganizationUnitSettings';
  path = '/message/UpdateOrganizationUnitSettings';
  request?: UpdateOrganizationUnitSettings;
  response?: EmptyResponseMessage;
}

export class SvcUpdateOrganizationUnitSupplier implements IEvaServiceDefinition
{
  name = 'UpdateOrganizationUnitSupplier';
  path = '/message/UpdateOrganizationUnitSupplier';
  request?: UpdateOrganizationUnitSupplier;
  response?: EmptyResponseMessage;
}

export class SvcUpdatePasskey implements IEvaServiceDefinition
{
  name = 'UpdatePasskey';
  path = '/message/UpdatePasskey';
  request?: UpdatePasskey;
  response?: EmptyResponseMessage;
}

export class SvcUpdateProductBundle implements IEvaServiceDefinition
{
  name = 'UpdateProductBundle';
  path = '/message/UpdateProductBundle';
  request?: UpdateProductBundle;
  response?: EmptyResponseMessage;
}

export class SvcUpdateProductRecommendation implements IEvaServiceDefinition
{
  name = 'UpdateProductRecommendation';
  path = '/message/UpdateProductRecommendation';
  request?: UpdateProductRecommendation;
  response?: EmptyResponseMessage;
}

export class SvcUpdateProductRequirementValuesForOrderLine implements IEvaServiceDefinition
{
  name = 'UpdateProductRequirementValuesForOrderLine';
  path = '/message/UpdateProductRequirementValuesForOrderLine';
  request?: UpdateProductRequirementValuesForOrderLine;
  response?: EmptyResponseMessage;
}

export class SvcUpdateProductZone implements IEvaServiceDefinition
{
  name = 'UpdateProductZone';
  path = '/message/UpdateProductZone';
  request?: UpdateProductZone;
  response?: EmptyResponseMessage;
}

export class SvcUpdateProductZoneGroup implements IEvaServiceDefinition
{
  name = 'UpdateProductZoneGroup';
  path = '/message/UpdateProductZoneGroup';
  request?: UpdateProductZoneGroup;
  response?: EmptyResponseMessage;
}

export class SvcUpdateQuickBuy implements IEvaServiceDefinition
{
  name = 'UpdateQuickBuy';
  path = '/message/UpdateQuickBuy';
  request?: UpdateQuickBuy;
  response?: EmptyResponseMessage;
}

export class SvcUpdateRecurringTask implements IEvaServiceDefinition
{
  name = 'UpdateRecurringTask';
  path = '/message/UpdateRecurringTask';
  request?: UpdateRecurringTask;
  response?: EmptyResponseMessage;
}

export class SvcUpdateRepair implements IEvaServiceDefinition
{
  name = 'UpdateRepair';
  path = '/message/UpdateRepair';
  request?: UpdateRepair;
  response?: EmptyResponseMessage;
}

export class SvcUpdateReservationPickupTaskDeadline implements IEvaServiceDefinition
{
  name = 'UpdateReservationPickupTaskDeadline';
  path = '/message/UpdateReservationPickupTaskDeadline';
  request?: UpdateReservationPickupTaskDeadline;
  response?: EmptyResponseMessage;
}

export class SvcUpdateReturnToSupplierOrder implements IEvaServiceDefinition
{
  name = 'UpdateReturnToSupplierOrder';
  path = '/message/UpdateReturnToSupplierOrder';
  request?: UpdateReturnToSupplierOrder;
  response?: EmptyResponseMessage;
}

export class SvcUpdateReturnToSupplierRequest implements IEvaServiceDefinition
{
  name = 'UpdateReturnToSupplierRequest';
  path = '/message/UpdateReturnToSupplierRequest';
  request?: UpdateReturnToSupplierRequest;
  response?: EmptyResponseMessage;
}

export class SvcUpdateScript implements IEvaServiceDefinition
{
  name = 'UpdateScript';
  path = '/message/UpdateScript';
  request?: UpdateScript;
  response?: UpdateScriptResponse;
}

export class SvcUpdateSerialNumber implements IEvaServiceDefinition
{
  name = 'UpdateSerialNumber';
  path = '/message/UpdateSerialNumber';
  request?: UpdateSerialNumber;
  response?: EmptyResponseMessage;
}

export class SvcUpdateSerialNumberConfiguration implements IEvaServiceDefinition
{
  name = 'UpdateSerialNumberConfiguration';
  path = '/message/UpdateSerialNumberConfiguration';
  request?: UpdateSerialNumberConfiguration;
  response?: EmptyResponseMessage;
}

export class SvcUpdateSerialNumberRegistrationReason implements IEvaServiceDefinition
{
  name = 'UpdateSerialNumberRegistrationReason';
  path = '/message/UpdateSerialNumberRegistrationReason';
  request?: UpdateSerialNumberRegistrationReason;
  response?: EmptyResponseMessage;
}

export class SvcUpdateShipment implements IEvaServiceDefinition
{
  name = 'UpdateShipment';
  path = '/message/UpdateShipment';
  request?: UpdateShipment;
  response?: EmptyResponseMessage;
}

export class SvcUpdateShipmentIdentifier implements IEvaServiceDefinition
{
  name = 'UpdateShipmentIdentifier';
  path = '/message/UpdateShipmentIdentifier';
  request?: UpdateShipmentIdentifier;
  response?: EmptyResponseMessage;
}

export class SvcUpdateShipmentStatus implements IEvaServiceDefinition
{
  name = 'UpdateShipmentStatus';
  path = '/message/UpdateShipmentStatus';
  request?: UpdateShipmentStatus;
  response?: EmptyResponseMessage;
}

export class SvcUpdateSimplePrices implements IEvaServiceDefinition
{
  name = 'UpdateSimplePrices';
  path = '/message/UpdateSimplePrices';
  request?: UpdateSimplePrices;
  response?: EmptyResponseMessage;
}

export class SvcUpdateStock implements IEvaServiceDefinition
{
  name = 'UpdateStock';
  path = '/message/UpdateStock';
  request?: UpdateStock;
  response?: EmptyResponseMessage;
}

export class SvcUpdateStockReplenishmentTaskData implements IEvaServiceDefinition
{
  name = 'UpdateStockReplenishmentTaskData';
  path = '/message/UpdateStockReplenishmentTaskData';
  request?: UpdateStockReplenishmentTaskData;
  response?: EmptyResponseMessage;
}

export class SvcUpdateSubscriptionUserIdentifier implements IEvaServiceDefinition
{
  name = 'UpdateSubscriptionUserIdentifier';
  path = '/message/UpdateSubscriptionUserIdentifier';
  request?: UpdateSubscriptionUserIdentifier;
  response?: EmptyResponseMessage;
}

export class SvcUpdateTaxCode implements IEvaServiceDefinition
{
  name = 'UpdateTaxCode';
  path = '/message/UpdateTaxCode';
  request?: UpdateTaxCode;
  response?: EmptyResponseMessage;
}

export class SvcUpdateTaxCodeMapping implements IEvaServiceDefinition
{
  name = 'UpdateTaxCodeMapping';
  path = '/message/UpdateTaxCodeMapping';
  request?: UpdateTaxCodeMapping;
  response?: EmptyResponseMessage;
}

export class SvcUpdateTaxProvider implements IEvaServiceDefinition
{
  name = 'UpdateTaxProvider';
  path = '/message/UpdateTaxProvider';
  request?: UpdateTaxProvider;
  response?: EmptyResponseMessage;
}

export class SvcUpdateTaxRate implements IEvaServiceDefinition
{
  name = 'UpdateTaxRate';
  path = '/message/UpdateTaxRate';
  request?: UpdateTaxRate;
  response?: EmptyResponseMessage;
}

export class SvcUpdateUser implements IEvaServiceDefinition
{
  name = 'UpdateUser';
  path = '/message/UpdateUser';
  request?: UpdateUser;
  response?: EmptyResponseMessage;
}

export class SvcUpdateUserAccountType implements IEvaServiceDefinition
{
  name = 'UpdateUserAccountType';
  path = '/message/UpdateUserAccountType';
  request?: UpdateUserAccountType;
  response?: UpdateUserAccountTypeResponse;
}

export class SvcUpdateUserAssociation implements IEvaServiceDefinition
{
  name = 'UpdateUserAssociation';
  path = '/message/UpdateUserAssociation';
  request?: UpdateUserAssociation;
  response?: EmptyResponseMessage;
}

export class SvcUpdateUserAssociationType implements IEvaServiceDefinition
{
  name = 'UpdateUserAssociationType';
  path = '/message/UpdateUserAssociationType';
  request?: UpdateUserAssociationType;
  response?: EmptyResponseMessage;
}

export class SvcUpdateUserDebtorData implements IEvaServiceDefinition
{
  name = 'UpdateUserDebtorData';
  path = '/message/UpdateUserDebtorData';
  request?: UpdateUserDebtorData;
  response?: EmptyResponseMessage;
}

export class SvcUpdateUserGroup implements IEvaServiceDefinition
{
  name = 'UpdateUserGroup';
  path = '/message/UpdateUserGroup';
  request?: UpdateUserGroup;
  response?: EmptyResponseMessage;
}

export class SvcUpdateUserInteraction implements IEvaServiceDefinition
{
  name = 'UpdateUserInteraction';
  path = '/message/UpdateUserInteraction';
  request?: UpdateUserInteraction;
  response?: EmptyResponseMessage;
}

export class SvcUpdateUserPhoneNumber implements IEvaServiceDefinition
{
  name = 'UpdateUserPhoneNumber';
  path = '/message/UpdateUserPhoneNumber';
  request?: UpdateUserPhoneNumber;
  response?: EmptyResponseMessage;
}

export class SvcUpdateUserProductSubscriptionAddresses implements IEvaServiceDefinition
{
  name = 'UpdateUserProductSubscriptionAddresses';
  path = '/message/UpdateUserProductSubscriptionAddresses';
  request?: UpdateUserProductSubscriptionAddresses;
  response?: EmptyResponseMessage;
}

export class SvcUpdateUserProductSubscriptionPayment implements IEvaServiceDefinition
{
  name = 'UpdateUserProductSubscriptionPayment';
  path = '/message/UpdateUserProductSubscriptionPayment';
  request?: UpdateUserProductSubscriptionPayment;
  response?: UpdateUserProductSubscriptionPaymentResponse;
}

export class SvcUpdateUserTaskNotCompletedReason implements IEvaServiceDefinition
{
  name = 'UpdateUserTaskNotCompletedReason';
  path = '/message/UpdateUserTaskNotCompletedReason';
  request?: UpdateUserTaskNotCompletedReason;
  response?: EmptyResponseMessage;
}

export class SvcUpdateUserTaskPriority implements IEvaServiceDefinition
{
  name = 'UpdateUserTaskPriority';
  path = '/message/UpdateUserTaskPriority';
  request?: UpdateUserTaskPriority;
  response?: EmptyResponseMessage;
}

export class SvcUpdateUserTaskType implements IEvaServiceDefinition
{
  name = 'UpdateUserTaskType';
  path = '/message/UpdateUserTaskType';
  request?: UpdateUserTaskType;
  response?: EmptyResponseMessage;
}

export class SvcUpdateUserTaskTypeOrganizationUnitSet implements IEvaServiceDefinition
{
  name = 'UpdateUserTaskTypeOrganizationUnitSet';
  path = '/message/UpdateUserTaskTypeOrganizationUnitSet';
  request?: UpdateUserTaskTypeOrganizationUnitSet;
  response?: UserTaskTypeOrganizationUnitSetResponse;
}

export class SvcUpdateUserVisibilityGroup implements IEvaServiceDefinition
{
  name = 'UpdateUserVisibilityGroup';
  path = '/message/UpdateUserVisibilityGroup';
  request?: UpdateUserVisibilityGroup;
  response?: EmptyResponseMessage;
}

export class SvcUpdateUserWishlist implements IEvaServiceDefinition
{
  name = 'UpdateUserWishlist';
  path = '/message/UpdateUserWishlist';
  request?: UpdateUserWishlist;
  response?: EmptyResponseMessage;
}

export class SvcUpdateZonedCycleCountSchedule implements IEvaServiceDefinition
{
  name = 'UpdateZonedCycleCountSchedule';
  path = '/message/UpdateZonedCycleCountSchedule';
  request?: UpdateZonedCycleCountSchedule;
  response?: EmptyResponseMessage;
}

export class SvcUpgradeInvoice implements IEvaServiceDefinition
{
  name = 'UpgradeInvoice';
  path = '/message/UpgradeInvoice';
  request?: UpgradeInvoice;
  response?: UpgradeInvoiceResponse;
}

export class SvcUpgradeProductSubscriptionForUser implements IEvaServiceDefinition
{
  name = 'UpgradeProductSubscriptionForUser';
  path = '/message/UpgradeProductSubscriptionForUser';
  request?: UpgradeProductSubscriptionForUser;
  response?: EmptyResponseMessage;
}

export class SvcUploadAndProcessStockExcelFile implements IEvaServiceDefinition
{
  name = 'UploadAndProcessStockExcelFile';
  path = '/message/UploadAndProcessStockExcelFile';
  request?: UploadAndProcessStockExcelFile;
  response?: EmptyResponseMessage;
}

export class SvcUploadAndProcessStockJSONFile implements IEvaServiceDefinition
{
  name = 'UploadAndProcessStockJSONFile';
  path = '/message/UploadAndProcessStockJSONFile';
  request?: UploadAndProcessStockJSONFile;
  response?: EmptyResponseMessage;
}

export class SvcUploadCycleCountExcel_Async implements IEvaServiceDefinition
{
  name = 'UploadCycleCountExcel_Async';
  path = '/async-message/UploadCycleCountExcel';
  request?: UploadCycleCountExcel_Async;
  response?: UploadCycleCountExcel_AsyncResponse;
}

export class SvcUploadCycleCountExcel_AsyncResult implements IEvaServiceDefinition
{
  name = 'UploadCycleCountExcel_AsyncResult';
  path = '/async-result/UploadCycleCountExcel';
  request?: UploadCycleCountExcel_AsyncResult;
  response?: EmptyResponseMessage;
}

export class SvcUploadExternalFullStockCountResult implements IEvaServiceDefinition
{
  name = 'UploadExternalFullStockCountResult';
  path = '/message/UploadExternalFullStockCountResult';
  request?: UploadExternalFullStockCountResult;
  response?: EmptyResponseMessage;
}

export class SvcUploadFullStockCountLabels implements IEvaServiceDefinition
{
  name = 'UploadFullStockCountLabels';
  path = '/message/UploadFullStockCountLabels';
  request?: UploadFullStockCountLabels;
  response?: UploadFullStockCountLabelsResponse;
}

export class SvcUploadSpecialOpeningHoursExcel implements IEvaServiceDefinition
{
  name = 'UploadSpecialOpeningHoursExcel';
  path = '/message/UploadSpecialOpeningHoursExcel';
  request?: UploadSpecialOpeningHoursExcel;
  response?: EmptyResponseMessage;
}

export class SvcValidateCycleCountZoneGroup implements IEvaServiceDefinition
{
  name = 'ValidateCycleCountZoneGroup';
  path = '/message/ValidateCycleCountZoneGroup';
  request?: ValidateCycleCountZoneGroup;
  response?: ValidateCycleCountZoneGroupResponse;
}

export class SvcValidateExportSchedule implements IEvaServiceDefinition
{
  name = 'ValidateExportSchedule';
  path = '/message/ValidateExportSchedule';
  request?: ValidateExportSchedule;
  response?: ValidateExportScheduleResponse;
}

export class SvcValidateIdentificationPin implements IEvaServiceDefinition
{
  name = 'ValidateIdentificationPin';
  path = '/message/ValidateIdentificationPin';
  request?: ValidateIdentificationPin;
  response?: ValidateIdentificationPinResponse;
}

export class SvcValidateInvoiceNumber implements IEvaServiceDefinition
{
  name = 'ValidateInvoiceNumber';
  path = '/message/ValidateInvoiceNumber';
  request?: ValidateInvoiceNumber;
  response?: ValidateInvoiceNumberResponse;
}

export class SvcValidateOpeningHoursTemplate implements IEvaServiceDefinition
{
  name = 'ValidateOpeningHoursTemplate';
  path = '/message/ValidateOpeningHoursTemplate';
  request?: ValidateOpeningHoursTemplate;
  response?: ValidateOpeningHoursTemplateResponse;
}

export class SvcValidateOrderShipment implements IEvaServiceDefinition
{
  name = 'ValidateOrderShipment';
  path = '/message/ValidateOrderShipment';
  request?: ValidateOrderShipment;
  response?: ValidateOrderShipmentResponse;
}

export class SvcValidatePreCount implements IEvaServiceDefinition
{
  name = 'ValidatePreCount';
  path = '/message/ValidatePreCount';
  request?: ValidatePreCount;
  response?: ValidatePreCountResponse;
}

export class SvcValidateRequiredDataForOrder implements IEvaServiceDefinition
{
  name = 'ValidateRequiredDataForOrder';
  path = '/message/ValidateRequiredDataForOrder';
  request?: ValidateRequiredDataForOrder;
  response?: ValidateRequiredDataForOrderResponse;
}

export class SvcValidateReturnToSupplierRequest implements IEvaServiceDefinition
{
  name = 'ValidateReturnToSupplierRequest';
  path = '/message/ValidateReturnToSupplierRequest';
  request?: ValidateReturnToSupplierRequest;
  response?: ValidateReturnToSupplierRequestResponse;
}

export class SvcValidateShipment implements IEvaServiceDefinition
{
  name = 'ValidateShipment';
  path = '/message/ValidateShipment';
  request?: ValidateShipment;
  response?: ValidateShipmentResponse;
}

export class SvcValidateTaxFreeStatus implements IEvaServiceDefinition
{
  name = 'ValidateTaxFreeStatus';
  path = '/message/ValidateTaxFreeStatus';
  request?: ValidateTaxFreeStatus;
  response?: ValidateTaxFreeStatusResponse;
}

export class SvcValidateToken implements IEvaServiceDefinition
{
  name = 'ValidateToken';
  path = '/message/ValidateToken';
  request?: ValidateToken;
  response?: EmptyResponseMessage;
}

export class SvcValidateUser implements IEvaServiceDefinition
{
  name = 'ValidateUser';
  path = '/message/ValidateUser';
  request?: ValidateUser;
  response?: ValidateUserResponse;
}

export class SvcValidateUserEmailAddress implements IEvaServiceDefinition
{
  name = 'ValidateUserEmailAddress';
  path = '/message/ValidateUserEmailAddress';
  request?: ValidateUserEmailAddress;
  response?: EmptyResponseMessage;
}

export class SvcValidateVatNumber implements IEvaServiceDefinition
{
  name = 'ValidateVatNumber';
  path = '/message/ValidateVatNumber';
  request?: ValidateVatNumber;
  response?: ValidateVatNumberResponse;
}

export class SvcVerifyCustomer implements IEvaServiceDefinition
{
  name = 'VerifyCustomer';
  path = '/message/VerifyCustomer';
  request?: VerifyCustomer;
  response?: EmptyResponseMessage;
}

export class SvcVerifyCustomerOnOrder implements IEvaServiceDefinition
{
  name = 'VerifyCustomerOnOrder';
  path = '/message/VerifyCustomerOnOrder';
  request?: VerifyCustomerOnOrder;
  response?: EmptyResponseMessage;
}

export class SvcVerifyOrder implements IEvaServiceDefinition
{
  name = 'VerifyOrder';
  path = '/message/VerifyOrder';
  request?: VerifyOrder;
  response?: EmptyResponseMessage;
}

export class SvcVerifySerialNumber implements IEvaServiceDefinition
{
  name = 'VerifySerialNumber';
  path = '/message/VerifySerialNumber';
  request?: VerifySerialNumber;
  response?: EmptyResponseMessage;
}

export class SvcVoidTaxFreeForm implements IEvaServiceDefinition
{
  name = 'VoidTaxFreeForm';
  path = '/message/VoidTaxFreeForm';
  request?: VoidTaxFreeForm;
  response?: VoidTaxFreeFormResponse;
}
