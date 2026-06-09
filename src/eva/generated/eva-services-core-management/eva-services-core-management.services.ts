import {
  IEvaServiceDefinition,
  EmptyResponseMessage,
  ResourceResponseMessage,
  ResourceWithBlobIDResponseMessage,
} from '../eva-services-core';

import {
  AddBlobToCaseInteraction,
  AddLoyaltyProgramPriceList,
  AddLoyaltyProgramRequiredCustomField,
  AddPackageToCarrier,
  AddPersonalizedPromotionsProducts,
  AddProductsToAssortment,
  AddRequiredCustomFieldsToManualDiscount,
  AddRolesToManualDiscount,
  AddUserBoughtProductDetail,
  UserBoughtProductResponse,
  AnswerSurveyQuestion,
  QuestionResponse,
  ArchiveCase,
  ArchiveDiscount,
  ArchivePersonalizedPromotion,
  ArchivePointAwardingRule,
  ArchiveUserBoughtProduct,
  AssignLoyaltyProgramBadge,
  AttachAssortmentToOrganizationUnit,
  AttachBlobToCase,
  AttachFunctionalitiesToRole,
  AttachLoyaltyProgramToOrder,
  AuditingResetFinancialPeriods,
  AuditingConfigurationResponse,
  AuditingSetPrivateKey,
  AuditingUploadKeySet,
  AuditingValidateConfiguration,
  BlockUserSubscription,
  CalculateUserTier,
  CancelSurveyResponse,
  CheckProductSearchTemplate,
  CheckProductSearchTemplateResponse,
  ClaimLoyaltyProgramTierBenefit,
  CleanupSettings,
  CleanupSettingsResponse,
  CleanupUntypedSettings,
  CleanupUntypedSettingsResponse,
  CopySurvey,
  CopySurveyResponse,
  CorrectProductCostPriceLedgers,
  CreateAccount,
  CreateAccountResponse,
  CreateAppointmentCancellationReason,
  CreateAppointmentCancellationReasonResponse,
  CreateAssortment,
  CreateAssortmentResponse,
  CreateCarrier,
  CreateCarrierResponse,
  CreateCase,
  CreateCaseResponse,
  CreateCaseInteraction,
  CreateCaseInteractionResponse,
  CreateCaseStatus,
  CreateCaseStatusResponse,
  CreateCaseTopic,
  CreateCaseTopicResponse,
  CreateCashExpenseType,
  CreateCashExpenseTypeResponse,
  CreateCashHandler,
  CreateCashHandlerResponse,
  CreateCDNConfiguration,
  CreateCDNConfigurationResponse,
  CreateCheckoutOption,
  CreateCheckoutOptionResponse,
  CreateCheckoutOptionCategory,
  CreateCheckoutOptionCategoryResponse,
  CreateClientApplication,
  CreateClientApplicationResponse,
  CreateCompany,
  CreateCompanyResponse,
  CreateCompanyRequirement,
  CreateCompanyRequirementResponse,
  CreateCostPriceCalculation,
  CreateCostPriceCalculationResponse,
  CreateCulture,
  CreateCultureResponse,
  CreateCustomField,
  CreateCustomFieldResponse,
  CreateDevice,
  CreateDeviceResponse,
  CreateDiscount,
  CreateDiscountResponse,
  CreateDiscountCampaign,
  CreateDiscountCampaignResponse,
  CreateDiscountCoupon,
  CreateDiscountCouponResponse,
  CreateDiscountFromTemplate,
  CreateDiscountLayer,
  CreateDiscountLayerResponse,
  CreateDiscountTemplate,
  CreateDiscountTemplateResponse,
  CreateElevationSkipReason,
  CreateElevationSkipReasonResponse,
  CreateEmployeeUser,
  CreateEmployeeUserResponse,
  CreateEndpointConfiguration,
  CreateEndpointConfigurationResponse,
  CreateEntityFieldValidator,
  CreateEntityFieldValidatorResponse,
  CreateEvent,
  CreateEventResponse,
  CreateEventLocation,
  CreateEventLocationResponse,
  CreateEventType,
  CreateEventTypeResponse,
  CreateFraudItem,
  CreateFraudItemResponse,
  CreateGiftCardConfiguration,
  CreateGiftCardConfigurationResponse,
  CreateIdentificationPinForEmployee,
  CreateIdentificationPinForEmployeeResponse,
  CreateInquiry,
  CreateInquiryResponse,
  CreateInquiryItem,
  CreateInquiryItemResponse,
  CreateLoyaltyProgram,
  CreateLoyaltyProgramResponse,
  CreateLoyaltyProgramBadge,
  CreateLoyaltyProgramBadgeResponse,
  CreateLoyaltyProgramBadgeCategory,
  CreateLoyaltyProgramBadgeCategoryResponse,
  CreateLoyaltyProgramBadgeCondition,
  CreateLoyaltyProgramBadgeConditionResponse,
  CreateLoyaltyProgramBenefit,
  CreateLoyaltyProgramBenefitResponse,
  CreateLoyaltyProgramCondition,
  CreateLoyaltyProgramConditionResponse,
  CreateLoyaltyProgramGroup,
  CreateLoyaltyProgramGroupResponse,
  CreateLoyaltyProgramPass,
  CreateLoyaltyProgramPassResponse,
  CreateLoyaltyProgramPaymentType,
  CreateLoyaltyProgramPaymentTypeResponse,
  CreateLoyaltyProgramProductLimitation,
  CreateLoyaltyProgramProductLimitationResponse,
  CreateLoyaltyProgramTier,
  CreateLoyaltyProgramTierResponse,
  CreateLoyaltyProgramTierBenefit,
  CreateLoyaltyProgramTierBenefitResponse,
  CreateMessageTemplate,
  CreateMessageTemplateResponse,
  CreateOpenCashDrawerReason,
  CreateOpenCashDrawerReasonResponse,
  CreateOpeningHoursType,
  CreateOpeningHoursTypeResponse,
  CreateOrderLedgerType,
  CreateOrderLedgerTypeResponse,
  CreateOrganizationUnitCompany,
  CreateOrganizationUnitCompanyResponse,
  CreateOrganizationUnitCountry,
  CreateOrganizationUnitCountryResponse,
  CreateOrganizationUnitCurrency,
  CreateOrganizationUnitCurrencyResponse,
  CreateOrganizationUnitLanguage,
  CreateOrganizationUnitLanguageResponse,
  CreateOrganizationUnitOpeningHours,
  CreateOrganizationUnitSet,
  CreateOrganizationUnitSetResponse,
  CreateOrganizationUnitSetScope,
  CreateOrganizationUnitSetScopeResponse,
  CreateOrganizationUnitShippingMethod,
  CreateOrganizationUnitShippingMethodResponse,
  CreateOrUpdateAMLConfiguration,
  CreateOrUpdateEmployeeData,
  CreateOrUpdateOrganizationUnitSetPaymentType,
  CreateOrUpdateOrganizationUnitSubset,
  CreateOrUpdateVisibilityGroupConfiguration,
  CreatePackage,
  CreatePackageResponse,
  CreatePaymentMethod,
  CreatePaymentMethodResponse,
  CreatePaymentTransactionLedgerType,
  CreatePaymentTransactionLedgerTypeResponse,
  CreatePaymentType,
  CreatePaymentTypeResponse,
  CreatePersonalizedPromotion,
  CreatePersonalizedPromotionResponse,
  CreatePointAwardingRule,
  CreatePointAwardingRuleResponse,
  CreatePriceList,
  CreatePriceListResponse,
  CreatePriceListAdjustment,
  CreatePriceListAdjustmentResponse,
  CreatePriceListManualInputAdjustment,
  CreatePriceListManualInputAdjustmentResponse,
  CreatePriceListOrganizationUnit,
  CreatePriceListOrganizationUnitResponse,
  CreatePriceListUsageType,
  CreatePriceListUsageTypeResponse,
  CreatePrinterType,
  CreatePrinterTypeResponse,
  CreateProductBarcode,
  CreateProductGiftCard,
  CreateProductGiftCardResponse,
  CreateProductRequirement,
  CreateProductRequirementResponse,
  CreateProductSearchTemplate,
  CreateProductSearchTemplateResponse,
  CreateProductSubscription,
  CreateProductSubscriptionResponse,
  CreateProductUnitOfMeasure,
  CreateProductUnitOfMeasureResponse,
  CreateRefundCorrectionReason,
  CreateRefundCorrectionReasonResponse,
  CreateResendReason,
  CreateResendReasonResponse,
  CreateReturnReason,
  CreateReturnReasonResponse,
  CreateRole,
  CreateRoleResponse,
  CreateRoleSet,
  CreateRoleSetResponse,
  CreateShippingCost,
  CreateShippingCostResponse,
  CreateShippingMethod,
  CreateShippingMethodResponse,
  CreateShippingMethodTransportationTime,
  CreateShippingMethodTransportationTimeResponse,
  CreateShippingRestriction,
  CreateShippingRestrictionResponse,
  CreateStation,
  CreateStationResponse,
  CreateStockAllocationRule,
  CreateStockAllocationRuleResponse,
  CreateStockLabel,
  CreateStockLabelResponse,
  CreateStockMutationReason,
  CreateStockMutationReasonResponse,
  CreateSubscription,
  CreateSubscriptionResponse,
  CreateSubscriptionOrganizationUnitSet,
  CreateSubscriptionOrganizationUnitSetResponse,
  CreateSupplierProduct,
  CreateSupplierProductResponse,
  CreateSurvey,
  CreateSurveyResponse,
  CreateSurveyCategory,
  CreateSurveyCategoryResponse,
  CreateSurveyQuestion,
  CreateSurveyQuestionResponse,
  CreateSurveyQuestionRoute,
  CreateSurveyQuestionRouteResponse,
  CreateUnitOfMeasure,
  CreateUnitOfMeasureResponse,
  CreateUnitPriceCorrectionReason,
  CreateUnitPriceCorrectionReasonResponse,
  CreateUserAgreement,
  CreateUserAgreementResponse,
  CreateUserOrigin,
  CreateUserOriginResponse,
  CreateUserRequirement,
  CreateUserRequirementResponse,
  CreateUserRequirementSet,
  CreateUserRequirementSetResponse,
  CreateVisibilityGroup,
  CreateVisibilityGroupResponse,
  CreateWidget,
  CreateWidgetResponse,
  CreateWidgetConfiguration,
  CreateWidgetConfigurationResponse,
  DeactivateSurvey,
  DeleteAccount,
  DeleteAppointmentCancellationReason,
  DeleteAssortment,
  DeleteCaseBlob,
  DeleteCaseInteraction,
  DeleteCaseStatus,
  DeleteCaseTopic,
  DeleteCashExpenseType,
  DeleteCashHandler,
  DeleteCDNConfiguration,
  DeleteCheckoutOption,
  DeleteCheckoutOptionCategory,
  DeleteClientApplication,
  DeleteCompany,
  DeleteCompanyRequirement,
  DeleteCostPriceCalculation,
  DeleteCulture,
  DeleteCustomField,
  DeleteDevice,
  DeleteDiscountCampaign,
  DeleteDiscountLayer,
  DeleteDiscountTemplate,
  DeleteElevationSkipReason,
  DeleteEmployeeData,
  DeleteEndpointConfiguration,
  DeleteEntityFieldValidator,
  DeleteEvent,
  DeleteEventLocation,
  DeleteEventType,
  DeleteFraudItem,
  DeleteGiftCardConfiguration,
  DeleteInquiry,
  DeleteInquiryItem,
  DeleteLoyaltyProgram,
  DeleteLoyaltyProgramBadge,
  DeleteLoyaltyProgramBadgeCategory,
  DeleteLoyaltyProgramBadgeCondition,
  DeleteLoyaltyProgramBenefit,
  DeleteLoyaltyProgramCondition,
  DeleteLoyaltyProgramGroup,
  DeleteLoyaltyProgramPass,
  DeleteLoyaltyProgramPaymentType,
  DeleteLoyaltyProgramProductLimitation,
  DeleteLoyaltyProgramTier,
  DeleteMessageTemplate,
  DeleteOpenCashDrawerReason,
  DeleteOpeningHoursType,
  DeleteOrderLedgerType,
  DeleteOrganizationUnitCompany,
  DeleteOrganizationUnitCountry,
  DeleteOrganizationUnitCurrency,
  DeleteOrganizationUnitLanguage,
  DeleteOrganizationUnitOpeningHours,
  DeleteOrganizationUnitSet,
  DeleteOrganizationUnitSetPaymentType,
  DeleteOrganizationUnitSetScope,
  DeleteOrganizationUnitShippingMethod,
  DeleteOrganizationUnitSubset,
  DeletePackage,
  DeletePaymentMethod,
  DeletePaymentTransactionLedgerType,
  DeletePaymentType,
  DeletePriceList,
  DeletePriceListAdjustment,
  DeletePriceListManualInputAdjustment,
  DeletePriceListOrganizationUnit,
  DeletePriceListUsageType,
  DeletePrinterType,
  DeleteProductBarcode,
  DeleteProductGiftCard,
  DeleteProductRequirement,
  DeleteProductSearchTemplate,
  DeleteProductSubscription,
  DeleteProductUnitOfMeasure,
  DeleteRefundCorrectionReason,
  DeleteResendReason,
  DeleteReturnReason,
  DeleteRole,
  DeleteRoleSet,
  DeleteShippingCost,
  DeleteShippingMethod,
  DeleteShippingMethodTransportationTime,
  DeleteShippingRestriction,
  DeleteStation,
  DeleteStationResponse,
  DeleteStockAllocationRule,
  DeleteStockMutationReason,
  DeleteSubscription,
  DeleteSubscriptionOrganizationUnitSet,
  DeleteSupplierProduct,
  DeleteSurvey,
  DeleteSurveyCategory,
  DeleteSurveyQuestion,
  DeleteSurveyQuestionRoute,
  DeleteUnitOfMeasure,
  DeleteUnitPriceCorrectionReason,
  DeleteUnprocessedPaymentSettlementFile,
  DeleteUserAgreement,
  DeleteUserBoughtProductDetail,
  DeleteUserOrigin,
  DeleteUserRequirement,
  DeleteUserRequirementSet,
  DeleteVisibilityGroup,
  DeleteVisibilityGroupConfiguration,
  DeleteWidget,
  DeleteWidgetConfiguration,
  DepositLoyaltyPoints,
  DepositLoyaltyPointsResponse,
  DetachFunctionalitiesFromRole,
  DetachLoyaltyProgramFromOrder,
  DisableDiscounts,
  DisablePointAwardingRule,
  DownloadAssortmentProducts,
  DownloadAssortmentProducts_Async,
  DownloadAssortmentProducts_AsyncResponse,
  DownloadAssortmentProducts_AsyncResult,
  DownloadCouponExcel_Async,
  DownloadCouponExcel_AsyncResponse,
  DownloadCouponExcel_AsyncResult,
  DownloadCouponExcelResponse,
  DownloadCouponExcelTemplate,
  DownloadCustomersSample,
  DownloadEmployeesSample,
  DownloadFraudItems,
  DownloadInitialInventorySample,
  DownloadPaymentSettlementFileResult,
  DownloadPriceListManualInputAdjustments,
  DownloadPriceListManualInputAdjustmentsSample,
  DownloadShippingRestrictions,
  DownloadStockAllocationRulesExcel,
  DownloadStockOverview_Async,
  DownloadStockOverview_AsyncResponse,
  DownloadStockOverview_AsyncResult,
  DownloadSupplierProducts,
  DownloadSupplierProductsBarcodes,
  DownloadSupplierProductsBarcodesSample,
  DownloadSupplierProductsPricing,
  DownloadSupplierProductsPricingSample,
  DownloadSupplierProductsSample,
  DownloadSupplierProductsStock,
  DownloadSupplierProductsStockSample,
  DownloadTaxCodesExcel,
  DownloadTaxRateExcel,
  DuplicateDiscount,
  DuplicateDiscountResponse,
  DuplicateDiscountTemplate,
  DuplicateMessageTemplate,
  DuplicateMessageTemplateResponse,
  DuplicateUserRequirementSet,
  DuplicateUserRequirementSetResponse,
  EnableDiscounts,
  EnablePointAwardingRule,
  ExportEmployeeRoles,
  ExportGeneralLedgerSummaryToExcel,
  ExportProductCostPriceLedgerSummary,
  ExportSettings,
  ExportStockMutationSummary,
  ExportUnshippedPurchaseOrdersToExcel,
  ExportUnshippedPurchaseOrdersToExcelResponse,
  ExportUserSubscriptions,
  GenerateDiscountCoupons,
  GenerateDiscountCoupons_Async,
  GenerateDiscountCoupons_AsyncResponse,
  GenerateDiscountCoupons_AsyncResult,
  GenerateIdentificationCodeForEmployee,
  GenerateIdentificationCodeForEmployeeResponse,
  GenerateIdentificationPinForEmployee,
  GenerateIdentificationPinForEmployeeResponse,
  GeneratePurchaseOrderExcelSample,
  GenerateSalesOrderExcelSample,
  GetAccount,
  GetAccountResponse,
  GetAppointmentCancellationReason,
  GetAppointmentCancellationReasonResponse,
  GetAppSettingsAutocompleteInfo,
  GetAppSettingsAutocompleteInfoResponse,
  GetAppSettingsForOrganizationUnit,
  GetAppSettingsForOrganizationUnitResponse,
  GetAssortmentByID,
  GetAssortmentByIDResponse,
  GetAssortmentOrganizationUnits,
  GetAssortmentOrganizationUnitsResponse,
  GetAssortmentProductTree,
  GetAssortmentProductTreeResponse,
  GetAssortmentRootProducts,
  GetAssortmentRootProductsResponse,
  GetAuditingSettings,
  GetAuditingSettingsResponse,
  GetAvailableCompanyRequirementProperties,
  GetAvailableCompanyRequirementPropertiesResponse,
  GetAvailablePaymentSettlementFileHandlers,
  GetAvailablePaymentSettlementFileHandlersResponse,
  GetAvailableRoles,
  GetAvailableRolesResponse,
  GetAvailableSettings,
  GetAvailableSettingsResponse,
  GetAvailableShippingMethodHandlers,
  GetAvailableShippingMethodHandlersResponse,
  GetAvailableSurveyAfterEffectTypes,
  GetAvailableSurveyAfterEffectTypesResponse,
  GetAvailableSurveyDistributionHandlers,
  GetAvailableSurveyDistributionHandlersResponse,
  GetAvailableSurveys,
  GetAvailableSurveysResponse,
  GetAvailableSurveysForContext,
  GetAvailableSurveyTriggers,
  GetAvailableSurveyTriggersResponse,
  GetAvailableUserRequirementsProperties,
  GetAvailableUserRequirementsPropertiesResponse,
  GetAvailableWidgetTypes,
  GetAvailableWidgetTypesResponse,
  GetCarrierByID,
  GetCarrierByIDResponse,
  GetCaseByID,
  GetCaseByIDResponse,
  GetCaseInteraction,
  GetCaseInteractionResponse,
  GetCaseStatus,
  GetCaseStatusResponse,
  GetCaseTopic,
  GetCaseTopicResponse,
  GetCashExpenseTypeByID,
  GetCashExpenseTypeByIDResponse,
  GetCashHandlerByID,
  GetCashHandlerByIDResponse,
  GetCDNConfiguration,
  GetCDNConfigurationResponse,
  GetCFDConfiguration,
  GetCFDConfigurationResponse,
  GetCheckoutOptionHandlers,
  GetCheckoutOptionHandlersResponse,
  GetClientApplicationByID,
  GetClientApplicationByIDResponse,
  GetCompany,
  GetCompanyResponse,
  GetCompanyRequirements,
  GetCompanyRequirementsResponse,
  GetConfigurationQrForDevice,
  GetConfigurationQrForDeviceResponse,
  GetCostPriceCalculation,
  GetCostPriceCalculationResponse,
  GetCostPriceCalculations,
  GetCostPriceCalculationsResponse,
  GetCouponByToken,
  GetCouponByTokenResponse,
  GetCustomFieldByID,
  GetCustomFieldByIDResponse,
  GetCustomFieldMetadata,
  GetCustomFieldMetadataResponse,
  GetCustomFields,
  GetCustomFieldsResponse,
  GetCustomFieldTypes,
  GetCustomFieldTypesResponse,
  GetDataModelForTemplateHandler,
  GetDataModelForTemplateHandlerResponse,
  GetDiscountByID,
  GetDiscountByIDResponse,
  GetDiscountCampaignByID,
  GetDiscountCampaignByIDResponse,
  GetDiscountCouponByID,
  GetDiscountCouponByIDResponse,
  GetDiscountLayerByID,
  GetDiscountLayerByIDResponse,
  GetDiscountTemplateByID,
  GetDiscountTemplateByIDResponse,
  GetElevationSkipReason,
  GetElevationSkipReasonResponse,
  GetEmployeeData,
  GetEmployeeDataResponse,
  GetEndpointConfiguration,
  GetEndpointConfigurationResponse,
  GetEndpointConfigurations,
  GetEndpointConfigurationsResponse,
  GetEntityFieldValidator,
  GetEntityFieldValidatorResponse,
  GetEvent,
  GetEventResponse,
  GetEventLocation,
  GetEventLocationResponse,
  GetEventLocationOpeningHours,
  GetEventLocationOpeningHoursResponse,
  GetEventType,
  GetEventTypeResponse,
  GetFieldValidatorsForEntity,
  GetFieldValidatorsForEntityResponse,
  GetFlattenedFunctionalityByUserID,
  GetFlattenedFunctionalityByUserIDResponse,
  GetFraudItem,
  GetFraudItemResponse,
  GetFunctionalityCategories,
  GetFunctionalityCategoriesResponse,
  GetGiftCardConfiguration,
  GetGiftCardConfigurationResponse,
  GetGiftCardHandlers,
  GetGiftCardHandlersResponse,
  GetIpFilterList,
  GetIpFilterListResponse,
  GetLanguages,
  GetLanguagesResponse,
  GetLayerGroupedDiscountsByQuery,
  GetLayerGroupedDiscountsByQueryResponse,
  GetLedgerClasses,
  GetLedgerClassesResponse,
  GetLoyaltyPointPolicies,
  GetLoyaltyPointPoliciesResponse,
  GetLoyaltyProgram,
  GetLoyaltyProgramResponse,
  GetLoyaltyProgramBadge,
  GetLoyaltyProgramBadgeResponse,
  GetLoyaltyProgramBadgeCategory,
  GetLoyaltyProgramBadgeCategoryResponse,
  GetLoyaltyProgramBadges,
  GetLoyaltyProgramBadgesResponse,
  GetLoyaltyProgramBenefitTypes,
  GetLoyaltyProgramBenefitTypesResponse,
  GetLoyaltyProgramCondition,
  GetLoyaltyProgramConditionResponse,
  GetLoyaltyProgramGroup,
  GetLoyaltyProgramGroupResponse,
  GetLoyaltyProgramHandlers,
  GetLoyaltyProgramHandlersResponse,
  GetLoyaltyProgramPass,
  GetLoyaltyProgramPassResponse,
  GetLoyaltyProgramPaymentType,
  GetLoyaltyProgramPaymentTypeResponse,
  GetLoyaltyProgramProductLimitation,
  GetLoyaltyProgramProductLimitationResponse,
  GetLoyaltyProgramTier,
  GetLoyaltyProgramTierResponse,
  GetLoyaltyProgramTiers,
  GetLoyaltyProgramTiersResponse,
  GetLoyaltyProgramUserUsage,
  GetLoyaltyProgramUserUsageResponse,
  GetMessageTemplateByID,
  GetMessageTemplateByIDResponse,
  GetMessageTemplateCustomIntegrationProviders,
  GetMessageTemplateCustomIntegrationProvidersResponse,
  GetMessageTemplateHistoryByID,
  GetMessageTemplateHistoryByIDResponse,
  GetOpeningHoursTypes,
  GetOpeningHoursTypesResponse,
  GetOrderLoyaltyProgramPaymentTypes,
  GetOrderLoyaltyProgramPaymentTypesResponse,
  GetOrganizationUnitCompany,
  GetOrganizationUnitCompanyResponse,
  GetOrganizationUnitSet,
  GetOrganizationUnitSetResponse,
  GetOrganizationUnitSetDetails,
  GetOrganizationUnitSetDetailsResponse,
  GetOrganizationUnitSetScopes,
  GetOrganizationUnitSetScopesResponse,
  GetOrganizationUnitShippingMethodByID,
  GetOrganizationUnitShippingMethodByIDResponse,
  GetOrganizationUnitSupplierDataByOrganizationUnitID,
  GetOrganizationUnitSupplierDataByOrganizationUnitIDResponse,
  GetPackages,
  GetPackagesResponse,
  GetPackagesForCarrier,
  GetPaymentMethodByID,
  GetPaymentMethodByIDResponse,
  GetPaymentMethods,
  GetPaymentMethodsResponse,
  GetPaymentTypeByID,
  GetPaymentTypeByIDResponse,
  GetPaymentTypeCustomFields,
  GetPaymentTypeCustomFieldsResponse,
  GetPaymentTypesForFilter,
  GetPaymentTypesForFilterResponse,
  GetPersonalizedPromotionByID,
  GetPersonalizedPromotionByIDResponse,
  GetPointAwardingRule,
  GetPointAwardingRuleResponse,
  GetPriceListAdjustmentByID,
  GetPriceListAdjustmentByIDResponse,
  GetPriceListByID,
  GetPriceListByIDResponse,
  GetPriceListManualInputAdjustmentByID,
  GetPriceListManualInputAdjustmentByIDResponse,
  GetPriceListOrganizationUnitByID,
  GetPriceListOrganizationUnitByIDResponse,
  GetPriceListUsageTypeByID,
  GetPriceListUsageTypeByIDResponse,
  GetPriceListUsageTypes,
  GetPriceListUsageTypesResponse,
  GetPrinterTypeByID,
  GetPrinterTypeByIDResponse,
  GetPrinterTypes,
  GetPrinterTypesResponse,
  GetProductRequirementByID,
  GetProductRequirementByIDResponse,
  GetProductRequirementHandlers,
  GetProductRequirementHandlersResponse,
  GetProductSearchTemplateByID,
  GetProductSearchTemplateByIDResponse,
  GetProductSubscription,
  GetProductSubscriptionResponse,
  GetRecentlyUsedStockMutationReasons,
  GetRecentlyUsedStockMutationReasonsResponse,
  GetRefundCorrectionReason,
  GetRefundCorrectionReasonResponse,
  GetResendReason,
  GetResendReasonResponse,
  GetResendReasons,
  GetResendReasonsResponse,
  GetReturnReasons,
  GetReturnReasonsResponse,
  GetReturnReasonsByType,
  GetReturnReasonsByTypeResponse,
  GetRole,
  GetRoleResponse,
  GetRoleSetByID,
  GetRoleSetByIDResponse,
  GetRolesForOrganizationUnit,
  GetRolesForOrganizationUnitResponse,
  GetRolesForOrganizationUnitSet,
  GetRolesForOrganizationUnitSetResponse,
  GetSetting,
  GetSettingResponse,
  GetSettingHistory,
  GetSettingHistoryResponse,
  GetSettingImpact,
  GetSettingImpactResponse,
  GetShippingCostByID,
  GetShippingCostByIDResponse,
  GetShippingMethodByID,
  GetShippingMethodByIDResponse,
  GetShippingRestrictionByID,
  GetShippingRestrictionByIDResponse,
  GetSubscriptionByID,
  GetSubscriptionByIDResponse,
  GetSubscriptionHandlers,
  GetSubscriptionHandlersResponse,
  GetSubscriptionOrganizationUnitSets,
  GetSubscriptionOrganizationUnitSetsResponse,
  GetSupplierProductByID,
  GetSupplierProductByIDResponse,
  GetSuppliersForProduct,
  GetSupplierForProductResponse,
  GetSupportedFunctionalities,
  GetSupportedFunctionalitiesResponse,
  GetSurveyByID,
  GetSurveyByIDResponse,
  GetSurveyCategory,
  GetSurveyCategoryResponse,
  GetSurveyQuestionAnswer,
  GetSurveyQuestionAnswerResponse,
  GetSurveyQuestions,
  GetSurveyQuestionsResponse,
  GetSurveyResponseDetails,
  GetSurveyResponseDetailsResponse,
  GetSurveyTranslatableItems,
  GetSurveyTranslatableItemsResponse,
  GetSurveyTranslationStatus,
  GetSurveyTranslationStatusResponse,
  GetUnitOfMeasures,
  GetUnitOfMeasuresResponse,
  GetUserAgreementByID,
  GetUserAgreementByIDResponse,
  GetUserBenefits,
  GetUserBenefitsResponse,
  GetUserBoughtProduct,
  GetUserBoughtProductResponse,
  GetUserBoughtProductBySerialNumber,
  GetUserCoupons,
  GetUserCouponsResponse,
  GetUserLoyaltyBadgeDetails,
  GetUserLoyaltyBadgeDetailsResponse,
  GetUserLoyaltyBadges,
  GetUserLoyaltyBadgesResponse,
  GetUserLoyaltyTierDetails,
  GetUserLoyaltyTierDetailsResponse,
  GetUserOrigins,
  GetUserOriginsResponse,
  GetUserPaymentTokens,
  GetUserPaymentTokensResponse,
  GetUserPersonalizedPromotionProducts,
  GetUserPersonalizedPromotionProductsResponse,
  GetUserRequirement,
  GetUserRequirementResponse,
  GetUserRequirements,
  GetUserRequirementsResponse,
  GetUserRequirementSet,
  GetUserRequirementSetResponse,
  GetUserRequirementsForSubscriptions,
  GetUserRequirementsForSubscriptionsResponse,
  GetUserRoles,
  GetUserRolesResponse,
  GetUserRolesByUserID,
  GetUserRolesByUserIDResponse,
  GetUserSubscriptionBarcode,
  GetUserSubscriptionBarcodeResponse,
  GetVisibilityGroupByID,
  GetVisibilityGroupByIDResponse,
  GetVisibilityGroupConfiguration,
  GetVisibilityGroupConfigurationResponse,
  GetWidget,
  GetWidgetResponse,
  GetWidgetConfiguration,
  GetWidgetConfigurationResponse,
  GetWishlist,
  GetWishlistResponse,
  ImportSettings,
  ImportSettingsResponse,
  InitialReplenishment,
  InitialReplenishmentResponse,
  ListAccounts,
  ListAccountsResponse,
  ListAMLConfigurations,
  ListAMLConfigurationsResponse,
  ListAppointmentCancellationReasons,
  ListAppointmentCancellationReasonsResponse,
  ListAppSettingHistory,
  ListAppSettingHistoryResponse,
  ListAppSettings,
  ListAppSettingsResponse,
  ListAssortmentProducts,
  ListAssortmentProductsResponse,
  ListAssortments,
  ListAssortmentsResponse,
  ListAvailableDiscountActionsAndConditions,
  ListAvailableDiscountActionsAndConditionsResponse,
  ListAvailableSettings,
  ListAvailableSettingsResponse,
  ListBenefitUserUsageHistory,
  ListBenefitUserUsageHistoryResponse,
  ListBlobsForCase,
  ListBlobsForCaseResponse,
  ListCarriers,
  ListCarriersResponse,
  ListCaseInteractions,
  ListCaseInteractionsResponse,
  ListCases,
  ListCasesResponse,
  ListCaseStatuses,
  ListCaseStatusesResponse,
  ListCaseTopics,
  ListCaseTopicsResponse,
  ListCashCorrectionReasons,
  ListCashCorrectionReasonsResponse,
  ListCashExpenseTypes,
  ListCashExpenseTypesResponse,
  ListCashHandlers,
  ListCashHandlersResponse,
  ListCDNConfigurations,
  ListCDNConfigurationsResponse,
  ListCheckoutOptionCategories,
  ListCheckoutOptionCategoriesResponse,
  ListClientApplications,
  ListClientApplicationsResponse,
  ListCompanies,
  ListCompaniesResponse,
  ListCompanyRequirements,
  ListCompanyRequirementsResponse,
  ListCouponsByQuery,
  ListCouponsByQueryResponse,
  ListCultures,
  ListCulturesResponse,
  ListCumulativeStock,
  ListCumulativeStockResponse,
  ListCustomFieldDataTypesOperators,
  ListCustomFieldDataTypeOperatorsResponse,
  ListCustomFieldEligibilityScripts,
  ListCustomFieldEligibilityScriptsResponse,
  ListCustomFieldOptions,
  ListCustomFieldOptionsResponse,
  ListCustomFields,
  ListCustomFieldsResponse,
  ListCustomFieldsForSurvey,
  ListCustomFieldsForSurveyResponse,
  ListDiscountCampaigns,
  ListDiscountCampaignsResponse,
  ListDiscountLayers,
  ListDiscountLayersResponse,
  ListDiscountTemplates,
  ListDiscountTemplatesResponse,
  ListDiscountUserUsageReloadStrategies,
  ListDiscountUserUsageReloadStrategiesResponse,
  ListElevationSkipReasons,
  ListElevationSkipReasonsResponse,
  ListEmployeeDatas,
  ListEmployeeDatasResponse,
  ListEntityFieldValidatorEntityFieldNames,
  ListEntityFieldValidatorEntityFieldNamesResponse,
  ListEntityFieldValidators,
  ListEntityFieldValidatorsResponse,
  ListEventLocationOpeningHoursTemplates,
  ListEventLocationOpeningHoursTemplatesResponse,
  ListEventLocations,
  ListEventLocationsResponse,
  ListEvents,
  ListEventsResponse,
  ListEventTypes,
  ListEventTypesResponse,
  ListExchangeRates,
  ListExchangeRatesResponse,
  ListFraudItems,
  ListFraudItemsResponse,
  ListGiftCardConfigurations,
  ListGiftCardConfigurationsResponse,
  ListInquiries,
  ListInquiriesResponse,
  ListKnowledgeBaseSurveys,
  ListKnowledgeBaseSurveysResponse,
  ListLoyaltyPaymentMethodTypes,
  ListLoyaltyPaymentMethodTypesResponse,
  ListLoyaltyProgramBadgeCategories,
  ListLoyaltyProgramBadgeCategoriesResponse,
  ListLoyaltyProgramBadges,
  ListLoyaltyProgramBadgesResponse,
  ListLoyaltyProgramConditions,
  ListLoyaltyProgramConditionsResponse,
  ListLoyaltyProgramGroups,
  ListLoyaltyProgramGroupsResponse,
  ListLoyaltyProgramPasses,
  ListLoyaltyProgramPassesResponse,
  ListLoyaltyProgramPassProviders,
  ListLoyaltyProgramPassProvidersResponse,
  ListLoyaltyProgramPaymentTypes,
  ListLoyaltyProgramPaymentTypesResponse,
  ListLoyaltyProgramPriceLists,
  ListLoyaltyProgramPriceListsResponse,
  ListLoyaltyProgramProductLimitations,
  ListLoyaltyProgramProductLimitationsResponse,
  ListLoyaltyProgramRequiredCustomFields,
  ListLoyaltyProgramRequiredCustomFieldsResponse,
  ListLoyaltyPrograms,
  ListLoyaltyProgramsResponse,
  ListLoyaltyProgramTiers,
  ListLoyaltyProgramTiersResponse,
  ListManagementShippingMethods,
  ListManagementShippingMethodsResponse,
  ListMessageTemplateLayouts,
  ListMessageTemplateLayoutsResponse,
  ListMessageTemplates,
  ListMessageTemplatesResponse,
  ListOpeningHours,
  ListOpeningHoursResponse,
  ListOrderGeneratedCoupons,
  ListOrderGeneratedCouponsResponse,
  ListOrderLedgerTypes,
  ListOrderLedgerTypesResponse,
  ListOrganizationUnitCompanies,
  ListOrganizationUnitCompaniesResponse,
  ListOrganizationUnitCountries,
  ListOrganizationUnitCountriesResponse,
  ListOrganizationUnitCurrencies,
  ListOrganizationUnitCurrenciesResponse,
  ListOrganizationUnitLanguages,
  ListOrganizationUnitLanguagesResponse,
  ListOrganizationUnitSetPaymentTypes,
  ListOrganizationUnitSetPaymentTypesResponse,
  ListOrganizationUnitSets,
  ListOrganizationUnitSetsResponse,
  ListOrganizationUnitShippingMethods,
  ListOrganizationUnitShippingMethodsResponse,
  ListPaymentMethods,
  ListPaymentMethodsResponse,
  ListPaymentSettlementFiles,
  ListPaymentSettlementFilesResponse,
  ListPaymentSettlements,
  ListPaymentSettlementsResponse,
  ListPaymentTransactionCaptures,
  ListPaymentTransactionCapturesResponse,
  ListPaymentTransactions,
  ListPaymentTransactionsResponse,
  ListPaymentTransactionSettlements,
  ListPaymentTransactionsSettlementsResponse,
  ListPaymentTypes,
  ListPaymentTypesResponse,
  ListPersonalizedPromotions,
  ListPersonalizedPromotionsResponse,
  ListPointAwardingRules,
  ListPointAwardingRulesResponse,
  ListPriceListAdjustments,
  ListPriceListAdjustmentsResponse,
  ListPriceListManualInputAdjustments,
  ListPriceListManualInputAdjustmentsResponse,
  ListPriceListOrganizationUnits,
  ListPriceListOrganizationUnitsResponse,
  ListPriceLists,
  ListPriceListsResponse,
  ListPriceListsForOrganizationUnit,
  ListPriceListsForOrganizationUnitResponse,
  ListProductBarcodes,
  ListProductBarcodesResponse,
  ListProductCostPriceLedger,
  ListProductCostPriceLedgerResponse,
  ListProductGiftCards,
  ListProductGiftCardsResponse,
  ListProductPriceLedger,
  ListProductPriceLedgerResponse,
  ListProductRequirements,
  ListProductRequirementsResponse,
  ListProductSearchTemplates,
  ListProductSearchTemplatesResponse,
  ListProductSubscriptions,
  ListProductSubscriptionsResponse,
  ListProductUnitOfMeasures,
  ListProductUnitOfMeasuresResponse,
  ListRefundCorrectionReasons,
  ListRefundCorrectionReasonsResponse,
  ListResendReasons,
  ListResendReasonsResponse,
  ListRestockedProducts,
  ListRestockedProductsResponse,
  ListReturnReasons,
  ListReturnReasonsResponse,
  ListRoleFunctionalities,
  ListRoleFunctionalitiesResponse,
  ListRoles,
  ListRolesResponse,
  ListRoleSets,
  ListRoleSetsResponse,
  ListSettingHistory,
  ListSettingHistoryResponse,
  ListSettings,
  ListSettingsResponse,
  ListSettingsPerOrganizationUnit,
  ListSettingsPerOrganizationUnitResponse,
  ListShippingCosts,
  ListShippingCostsResponse,
  ListShippingMethods,
  ListShippingMethodsResponse,
  ListShippingMethodTransportationTimes,
  ListShippingMethodTransportationTimesResponse,
  ListShippingRestrictions,
  ListShippingRestrictionsResponse,
  ListStockAllocationRules,
  ListStockAllocationRulesResponse,
  ListStockForOrganizationUnits,
  ListStockForOrganizationUnitsResponse,
  ListStockMutationReasons,
  ListStockMutationReasonsResponse,
  ListStockMutationUnitCostSourceLedger,
  ListStockMutationUnitCostSourceLedgerResponse,
  ListSubscriptionOrganizationUnitSets,
  ListSubscriptionOrganizationUnitSetsResponse,
  ListSubscriptions,
  ListSubscriptionsResponse,
  ListSubscriptionUsers,
  ListSubscriptionUsersResponse,
  ListSupplierProducts,
  ListSupplierProductsResponse,
  ListSurveyCategories,
  ListSurveyCategoriesResponse,
  ListSurveyResponses,
  ListSurveyResponsesResponse,
  ListSurveys,
  ListSurveysResponse,
  ListTemplateHandlers,
  ListTemplateHandlersResponse,
  ListUnitPriceCorrectionReasons,
  ListUnitPriceCorrectionReasonsResponse,
  ListUserAgreements,
  ListUserAgreementsResponse,
  ListUserBoughtProducts,
  ListUserBoughtProductsResponse,
  ListUserOrganizationUnitRoles,
  ListUserOrganizationUnitRolesResponse,
  ListUserPersonalizedPromotions,
  ListUserPersonalizedPromotionsResponse,
  ListUserRequirements,
  ListUserRequirementsResponse,
  ListUserRequirementSets,
  ListUserRequirementSetsResponse,
  ListVisibilityGroupConfigurations,
  ListVisibilityGroupConfigurationsResponse,
  ListVisibilityGroups,
  ListVisibilityGroupsResponse,
  ListWidgetConfigurations,
  ListWidgetConfigurationsResponse,
  ListWishlists,
  ListWishlistsResponse,
  LocalizeOpenCashDrawerReason,
  MigratePaymentTypeOrganizationUnitSetting,
  MigratePaymentTypeOrganizationUnitSettingResponse,
  MoveDiscountLayer,
  PreviewCDNConfigurationUrl,
  PreviewCDNConfigurationUrlResponse,
  PreviewMessageTemplate,
  PreviewMessageTemplateResponse,
  PreviewOrganizationUnitSet,
  PreviewOrganizationUnitSetResponse,
  PreviewPriceListRoundingAdjustment,
  PreviewPriceListRoundingAdjustmentResponse,
  PrintCaseReceipt,
  PrintQRCode,
  ProcessUnshippedPurchaseOrdersFromExcel,
  PublishSurvey,
  PushBoughtProductsForUsers_Async,
  PushBoughtProductsForUsers_AsyncResponse,
  PushBoughtProductsForUsers_AsyncResult,
  PushBoughtProductsForUsersResponse,
  PushCase,
  PushCaseResponse,
  PushCompanies_Async,
  PushCompanies_AsyncResponse,
  PushCompanies_AsyncResult,
  PushCompaniesResponse,
  PushCompany_Async,
  PushCompany_AsyncResponse,
  PushCompany_AsyncResult,
  PushCompanyResponse,
  PushDiscountCoupons,
  PushDiscountCouponsResponse,
  PushLoyaltyProgram_Async,
  PushLoyaltyProgram_AsyncResponse,
  PushLoyaltyProgram_AsyncResult,
  PushLoyaltyProgramResponse,
  PushLoyaltyProgramGroup_Async,
  PushLoyaltyProgramGroup_AsyncResponse,
  PushLoyaltyProgramGroup_AsyncResult,
  PushLoyaltyProgramGroupResponse,
  PushLoyaltyPrograms_Async,
  PushLoyaltyPrograms_AsyncResponse,
  PushLoyaltyPrograms_AsyncResult,
  PushLoyaltyProgramsResponse,
  PushUserBoughtProduct,
  PushUserPersonalizedPromotionProducts,
  PushUserSubscription,
  RebalanceLoyaltyPoints,
  RebalanceLoyaltyPointsForUsers_Async,
  RebalanceLoyaltyPointsForUsers_AsyncResponse,
  RebalanceLoyaltyPointsForUsers_AsyncResult,
  RebalanceLoyaltyPointsForUsersResponse,
  RefillStockAllocation,
  RegisterUserBoughtProduct,
  ReloadLoyaltyProgramTierBenefit,
  RemoveBenefitsFromLoyaltyProgramTier,
  RemoveCaseInteractionBlob,
  RemoveCaseRelatedItems,
  RemoveLoyaltyProgramPriceList,
  RemoveLoyaltyProgramRequiredCustomField,
  RemovePackageFromCarrier,
  RemovePersonalizedPromotionProducts,
  RemoveProductsFromAssortment,
  RemoveRequiredCustomFieldsFromManualDiscount,
  RemoveRolesFromManualDiscount,
  RestartSurveyResponse,
  RevokeLoyaltyPoints,
  RotateEndpointConfigurationKey,
  RotateEndpointConfigurationKeyResponse,
  SearchDiscountsByQuery,
  SearchDiscountsByQueryResponse,
  SearchOrganizationUnitCompany,
  SearchOrganizationUnitCompanyResponse,
  SearchStockMutations,
  SearchStockMutationsResponse,
  SearchSurveys,
  SearchSurveysResponse,
  SelectUserPersonalizedPromotionProducts,
  SendSampleMailMessageTemplate,
  SetAppSetting,
  SetAppSettings,
  SetAuditingSettings,
  SetCaseRelatedData,
  SetCustomFieldOptions,
  SetDefaultLoyaltyProgramTier,
  SetDiscountLayerSequences,
  SetEventLocationOpeningHours,
  SetIpFilterList,
  SetLoyaltyProgramBadgeSequences,
  SetOrderLoyaltyProgramPaymentTypes,
  SetOrganizationUnitSubsetSequences,
  SetOrganizationUnitSupplierData,
  SetPaymentTypeRoles,
  SetRolesForRoleSet,
  SetSetting,
  SetSettings,
  SetSurveyQuestionRoutingSequences,
  SetSurveyQuestionSequences,
  SetSurveyTranslatableItems,
  SetUserRoles,
  SetWidgetSequences,
  StartSurvey,
  StartSurveyResponse,
  StartSurveyPreview,
  StartSurveyPreviewResponse,
  TestEndpointConfiguration,
  TestEndpointConfigurationResponse,
  UnblockUserSubscription,
  UnsetAppSetting,
  UnsetCustomFieldOptions,
  UnsetSetting,
  UpdateAccount,
  UpdateAppointmentCancellationReason,
  UpdateAssortment,
  UpdateCarrier,
  UpdateCase,
  UpdateCaseInteraction,
  UpdateCaseState,
  UpdateCaseStateResponse,
  UpdateCaseStatus,
  UpdateCaseSummary,
  UpdateCaseTopic,
  UpdateCashExpenseType,
  UpdateCashHandler,
  UpdateCDNConfiguration,
  UpdateCheckoutOption,
  UpdateCheckoutOptionCategory,
  UpdateCheckoutOptionSequences,
  UpdateClientApplication,
  UpdateCompany,
  UpdateCompanyRequirement,
  UpdateCostPriceCalculation,
  UpdateCustomField,
  UpdateDevice,
  UpdateDiscount,
  UpdateDiscountCampaign,
  UpdateDiscountCampaignBudget,
  UpdateDiscountCoupon,
  UpdateDiscountCouponResponse,
  UpdateDiscountLayer,
  UpdateDiscountTemplate,
  UpdateElevationSkipReason,
  UpdateEndpointConfiguration,
  UpdateEntityFieldValidator,
  UpdateEvent,
  UpdateEventLocation,
  UpdateEventType,
  UpdateFraudItem,
  UpdateGiftCardConfiguration,
  UpdateInquiry,
  UpdateInquiryItem,
  UpdateLoyaltyProgram,
  UpdateLoyaltyProgramBadge,
  UpdateLoyaltyProgramBadgeCategory,
  UpdateLoyaltyProgramBadgeCondition,
  UpdateLoyaltyProgramBenefit,
  UpdateLoyaltyProgramBudget,
  UpdateLoyaltyProgramCondition,
  UpdateLoyaltyProgramGroup,
  UpdateLoyaltyProgramGroupBudget,
  UpdateLoyaltyProgramPass,
  UpdateLoyaltyProgramPaymentType,
  UpdateLoyaltyProgramProductLimitation,
  UpdateLoyaltyProgramTier,
  UpdateLoyaltyProgramTierBenefit,
  UpdateMessageTemplate,
  UpdateOpenCashDrawerReason,
  UpdateOpeningHoursType,
  UpdateOrderLedgerType,
  UpdateOrderLedgerTypeResponse,
  UpdateOrganizationUnitCompany,
  UpdateOrganizationUnitCurrency,
  UpdateOrganizationUnitOpeningHours,
  UpdateOrganizationUnitRegularOpeningHours,
  UpdateOrganizationUnitSet,
  UpdateOrganizationUnitSetScope,
  UpdateOrganizationUnitShippingMethod,
  UpdatePackage,
  UpdatePaymentMethod,
  UpdatePaymentTransactionLedgerType,
  UpdatePaymentType,
  UpdatePersonalizedPromotion,
  UpdatePointAwardingRule,
  UpdatePriceList,
  UpdatePriceListAdjustment,
  UpdatePriceListManualInputAdjustment,
  UpdatePriceListOrganizationUnit,
  UpdatePriceListUsageType,
  UpdatePrinterType,
  UpdateProductGiftCard,
  UpdateProductRequirement,
  UpdateProductSearchTemplate,
  UpdateProductSubscription,
  UpdateProductUnitOfMeasure,
  UpdateRefundCorrectionReason,
  UpdateResendReason,
  UpdateReturnReason,
  UpdateRole,
  UpdateRoleFunctionalities,
  UpdateRoleSet,
  UpdateShippingCost,
  UpdateShippingMethod,
  UpdateShippingMethodTransportationTime,
  UpdateShippingRestriction,
  UpdateStation,
  UpdateStockAllocationRule,
  UpdateStockLabel,
  UpdateStockMutationReason,
  UpdateSubscription,
  UpdateSubscriptionOrganizationUnitSet,
  UpdateSubscriptionUserRequirements,
  UpdateSupplierProduct,
  UpdateSupplierProductPrices,
  UpdateSupplierProductStock,
  UpdateSurvey,
  UpdateSurveyCategory,
  UpdateSurveyQuestion,
  UpdateSurveyQuestionRoute,
  UpdateUnitOfMeasure,
  UpdateUnitPriceCorrectionReason,
  UpdateUserAgreement,
  UpdateUserBoughtProductDetail,
  UpdateUserBoughtProductWarranty,
  UpdateUserOrigin,
  UpdateUserRequirement,
  UpdateUserRequirementSet,
  UpdateUserRequirementSetRequirements,
  UpdateUserRoles,
  UpdateVisibilityGroup,
  UpdateWidget,
  UploadAssortmentProducts,
  UploadAssortmentProductsResponse,
  UploadCouponExcel,
  UploadCouponExcelResponse,
  UploadCouponExcel_Async,
  UploadCouponExcel_AsyncResponse,
  UploadCouponExcel_AsyncResult,
  UploadCustomers,
  UploadEmployees,
  UploadFraudItems,
  UploadInitialInventory,
  UploadInitialInventoryResponse,
  UploadPaymentSettlementFile,
  UploadPriceListManualInputAdjustments,
  UploadPriceListManualInputAdjustmentsResponse,
  UploadPurchaseOrderExcel,
  UploadSalesOrderExcel,
  UploadShippingRestrictions,
  UploadShippingRestrictionsResponse,
  UploadStockAllocationRulesExcel,
  UploadSupplierProducts,
  UploadSupplierProductsResponse,
  UploadSupplierProductsBarcodes,
  UploadSupplierProductsPricing,
  UploadSupplierProductsStock,
  UploadTaxCodesExcel,
  UploadTaxRateExcel,
  ValidateCompany,
  ValidateCompanyResponse,
  ValidateDiscount,
  ValidateDiscountResponse,
  ValidateDiscountTemplate,
  ValidateDiscountTemplateResponse,
  VerifyDiscount,
  WithdrawLoyaltyPoints,
} from './eva-services-core-management';


export class SvcAddBlobToCaseInteraction implements IEvaServiceDefinition
{
  name = 'AddBlobToCaseInteraction';
  path = '/message/AddBlobToCaseInteraction';
  request?: AddBlobToCaseInteraction;
  response?: EmptyResponseMessage;
}

export class SvcAddLoyaltyProgramPriceList implements IEvaServiceDefinition
{
  name = 'AddLoyaltyProgramPriceList';
  path = '/message/AddLoyaltyProgramPriceList';
  request?: AddLoyaltyProgramPriceList;
  response?: EmptyResponseMessage;
}

export class SvcAddLoyaltyProgramRequiredCustomField implements IEvaServiceDefinition
{
  name = 'AddLoyaltyProgramRequiredCustomField';
  path = '/message/AddLoyaltyProgramRequiredCustomField';
  request?: AddLoyaltyProgramRequiredCustomField;
  response?: EmptyResponseMessage;
}

export class SvcAddPackageToCarrier implements IEvaServiceDefinition
{
  name = 'AddPackageToCarrier';
  path = '/message/AddPackageToCarrier';
  request?: AddPackageToCarrier;
  response?: EmptyResponseMessage;
}

export class SvcAddPersonalizedPromotionsProducts implements IEvaServiceDefinition
{
  name = 'AddPersonalizedPromotionsProducts';
  path = '/message/AddPersonalizedPromotionsProducts';
  request?: AddPersonalizedPromotionsProducts;
  response?: EmptyResponseMessage;
}

export class SvcAddProductsToAssortment implements IEvaServiceDefinition
{
  name = 'AddProductsToAssortment';
  path = '/message/AddProductsToAssortment';
  request?: AddProductsToAssortment;
  response?: EmptyResponseMessage;
}

export class SvcAddRequiredCustomFieldsToManualDiscount implements IEvaServiceDefinition
{
  name = 'AddRequiredCustomFieldsToManualDiscount';
  path = '/message/AddRequiredCustomFieldsToManualDiscount';
  request?: AddRequiredCustomFieldsToManualDiscount;
  response?: EmptyResponseMessage;
}

export class SvcAddRolesToManualDiscount implements IEvaServiceDefinition
{
  name = 'AddRolesToManualDiscount';
  path = '/message/AddRolesToManualDiscount';
  request?: AddRolesToManualDiscount;
  response?: EmptyResponseMessage;
}

export class SvcAddUserBoughtProductDetail implements IEvaServiceDefinition
{
  name = 'AddUserBoughtProductDetail';
  path = '/message/AddUserBoughtProductDetail';
  request?: AddUserBoughtProductDetail;
  response?: UserBoughtProductResponse;
}

export class SvcAnswerSurveyQuestion implements IEvaServiceDefinition
{
  name = 'AnswerSurveyQuestion';
  path = '/message/AnswerSurveyQuestion';
  request?: AnswerSurveyQuestion;
  response?: QuestionResponse;
}

export class SvcArchiveCase implements IEvaServiceDefinition
{
  name = 'ArchiveCase';
  path = '/message/ArchiveCase';
  request?: ArchiveCase;
  response?: EmptyResponseMessage;
}

export class SvcArchiveDiscount implements IEvaServiceDefinition
{
  name = 'ArchiveDiscount';
  path = '/message/ArchiveDiscount';
  request?: ArchiveDiscount;
  response?: EmptyResponseMessage;
}

export class SvcArchivePersonalizedPromotion implements IEvaServiceDefinition
{
  name = 'ArchivePersonalizedPromotion';
  path = '/message/ArchivePersonalizedPromotion';
  request?: ArchivePersonalizedPromotion;
  response?: EmptyResponseMessage;
}

export class SvcArchivePointAwardingRule implements IEvaServiceDefinition
{
  name = 'ArchivePointAwardingRule';
  path = '/message/ArchivePointAwardingRule';
  request?: ArchivePointAwardingRule;
  response?: EmptyResponseMessage;
}

export class SvcArchiveUserBoughtProduct implements IEvaServiceDefinition
{
  name = 'ArchiveUserBoughtProduct';
  path = '/message/ArchiveUserBoughtProduct';
  request?: ArchiveUserBoughtProduct;
  response?: EmptyResponseMessage;
}

export class SvcAssignLoyaltyProgramBadge implements IEvaServiceDefinition
{
  name = 'AssignLoyaltyProgramBadge';
  path = '/message/AssignLoyaltyProgramBadge';
  request?: AssignLoyaltyProgramBadge;
  response?: EmptyResponseMessage;
}

export class SvcAttachAssortmentToOrganizationUnit implements IEvaServiceDefinition
{
  name = 'AttachAssortmentToOrganizationUnit';
  path = '/message/AttachAssortmentToOrganizationUnit';
  request?: AttachAssortmentToOrganizationUnit;
  response?: EmptyResponseMessage;
}

export class SvcAttachBlobToCase implements IEvaServiceDefinition
{
  name = 'AttachBlobToCase';
  path = '/message/AttachBlobToCase';
  request?: AttachBlobToCase;
  response?: EmptyResponseMessage;
}

export class SvcAttachFunctionalitiesToRole implements IEvaServiceDefinition
{
  name = 'AttachFunctionalitiesToRole';
  path = '/message/AttachFunctionalitiesToRole';
  request?: AttachFunctionalitiesToRole;
  response?: EmptyResponseMessage;
}

export class SvcAttachLoyaltyProgramToOrder implements IEvaServiceDefinition
{
  name = 'AttachLoyaltyProgramToOrder';
  path = '/message/AttachLoyaltyProgramToOrder';
  request?: AttachLoyaltyProgramToOrder;
  response?: EmptyResponseMessage;
}

export class SvcAuditingResetFinancialPeriods implements IEvaServiceDefinition
{
  name = 'AuditingResetFinancialPeriods';
  path = '/message/AuditingResetFinancialPeriods';
  request?: AuditingResetFinancialPeriods;
  response?: AuditingConfigurationResponse;
}

export class SvcAuditingSetPrivateKey implements IEvaServiceDefinition
{
  name = 'AuditingSetPrivateKey';
  path = '/message/AuditingSetPrivateKey';
  request?: AuditingSetPrivateKey;
  response?: EmptyResponseMessage;
}

export class SvcAuditingUploadKeySet implements IEvaServiceDefinition
{
  name = 'AuditingUploadKeySet';
  path = '/message/AuditingUploadKeySet';
  request?: AuditingUploadKeySet;
  response?: EmptyResponseMessage;
}

export class SvcAuditingValidateConfiguration implements IEvaServiceDefinition
{
  name = 'AuditingValidateConfiguration';
  path = '/message/AuditingValidateConfiguration';
  request?: AuditingValidateConfiguration;
  response?: AuditingConfigurationResponse;
}

export class SvcBlockUserSubscription implements IEvaServiceDefinition
{
  name = 'BlockUserSubscription';
  path = '/message/BlockUserSubscription';
  request?: BlockUserSubscription;
  response?: EmptyResponseMessage;
}

export class SvcCalculateUserTier implements IEvaServiceDefinition
{
  name = 'CalculateUserTier';
  path = '/message/CalculateUserTier';
  request?: CalculateUserTier;
  response?: EmptyResponseMessage;
}

export class SvcCancelSurveyResponse implements IEvaServiceDefinition
{
  name = 'CancelSurveyResponse';
  path = '/message/CancelSurveyResponse';
  request?: CancelSurveyResponse;
  response?: EmptyResponseMessage;
}

export class SvcCheckProductSearchTemplate implements IEvaServiceDefinition
{
  name = 'CheckProductSearchTemplate';
  path = '/message/CheckProductSearchTemplate';
  request?: CheckProductSearchTemplate;
  response?: CheckProductSearchTemplateResponse;
}

export class SvcClaimLoyaltyProgramTierBenefit implements IEvaServiceDefinition
{
  name = 'ClaimLoyaltyProgramTierBenefit';
  path = '/message/ClaimLoyaltyProgramTierBenefit';
  request?: ClaimLoyaltyProgramTierBenefit;
  response?: EmptyResponseMessage;
}

export class SvcCleanupSettings implements IEvaServiceDefinition
{
  name = 'CleanupSettings';
  path = '/message/CleanupSettings';
  request?: CleanupSettings;
  response?: CleanupSettingsResponse;
}

export class SvcCleanupUntypedSettings implements IEvaServiceDefinition
{
  name = 'CleanupUntypedSettings';
  path = '/message/CleanupUntypedSettings';
  request?: CleanupUntypedSettings;
  response?: CleanupUntypedSettingsResponse;
}

export class SvcCopySurvey implements IEvaServiceDefinition
{
  name = 'CopySurvey';
  path = '/message/CopySurvey';
  request?: CopySurvey;
  response?: CopySurveyResponse;
}

export class SvcCorrectProductCostPriceLedgers implements IEvaServiceDefinition
{
  name = 'CorrectProductCostPriceLedgers';
  path = '/message/CorrectProductCostPriceLedgers';
  request?: CorrectProductCostPriceLedgers;
  response?: EmptyResponseMessage;
}

export class SvcCreateAccount implements IEvaServiceDefinition
{
  name = 'CreateAccount';
  path = '/message/CreateAccount';
  request?: CreateAccount;
  response?: CreateAccountResponse;
}

export class SvcCreateAppointmentCancellationReason implements IEvaServiceDefinition
{
  name = 'CreateAppointmentCancellationReason';
  path = '/message/CreateAppointmentCancellationReason';
  request?: CreateAppointmentCancellationReason;
  response?: CreateAppointmentCancellationReasonResponse;
}

export class SvcCreateAssortment implements IEvaServiceDefinition
{
  name = 'CreateAssortment';
  path = '/message/CreateAssortment';
  request?: CreateAssortment;
  response?: CreateAssortmentResponse;
}

export class SvcCreateCarrier implements IEvaServiceDefinition
{
  name = 'CreateCarrier';
  path = '/message/CreateCarrier';
  request?: CreateCarrier;
  response?: CreateCarrierResponse;
}

export class SvcCreateCase implements IEvaServiceDefinition
{
  name = 'CreateCase';
  path = '/message/CreateCase';
  request?: CreateCase;
  response?: CreateCaseResponse;
}

export class SvcCreateCaseInteraction implements IEvaServiceDefinition
{
  name = 'CreateCaseInteraction';
  path = '/message/CreateCaseInteraction';
  request?: CreateCaseInteraction;
  response?: CreateCaseInteractionResponse;
}

export class SvcCreateCaseStatus implements IEvaServiceDefinition
{
  name = 'CreateCaseStatus';
  path = '/message/CreateCaseStatus';
  request?: CreateCaseStatus;
  response?: CreateCaseStatusResponse;
}

export class SvcCreateCaseTopic implements IEvaServiceDefinition
{
  name = 'CreateCaseTopic';
  path = '/message/CreateCaseTopic';
  request?: CreateCaseTopic;
  response?: CreateCaseTopicResponse;
}

export class SvcCreateCashExpenseType implements IEvaServiceDefinition
{
  name = 'CreateCashExpenseType';
  path = '/message/CreateCashExpenseType';
  request?: CreateCashExpenseType;
  response?: CreateCashExpenseTypeResponse;
}

export class SvcCreateCashHandler implements IEvaServiceDefinition
{
  name = 'CreateCashHandler';
  path = '/message/CreateCashHandler';
  request?: CreateCashHandler;
  response?: CreateCashHandlerResponse;
}

export class SvcCreateCDNConfiguration implements IEvaServiceDefinition
{
  name = 'CreateCDNConfiguration';
  path = '/message/CreateCDNConfiguration';
  request?: CreateCDNConfiguration;
  response?: CreateCDNConfigurationResponse;
}

export class SvcCreateCheckoutOption implements IEvaServiceDefinition
{
  name = 'CreateCheckoutOption';
  path = '/message/CreateCheckoutOption';
  request?: CreateCheckoutOption;
  response?: CreateCheckoutOptionResponse;
}

export class SvcCreateCheckoutOptionCategory implements IEvaServiceDefinition
{
  name = 'CreateCheckoutOptionCategory';
  path = '/message/CreateCheckoutOptionCategory';
  request?: CreateCheckoutOptionCategory;
  response?: CreateCheckoutOptionCategoryResponse;
}

export class SvcCreateClientApplication implements IEvaServiceDefinition
{
  name = 'CreateClientApplication';
  path = '/message/CreateClientApplication';
  request?: CreateClientApplication;
  response?: CreateClientApplicationResponse;
}

export class SvcCreateCompany implements IEvaServiceDefinition
{
  name = 'CreateCompany';
  path = '/message/CreateCompany';
  request?: CreateCompany;
  response?: CreateCompanyResponse;
}

export class SvcCreateCompanyRequirement implements IEvaServiceDefinition
{
  name = 'CreateCompanyRequirement';
  path = '/message/CreateCompanyRequirement';
  request?: CreateCompanyRequirement;
  response?: CreateCompanyRequirementResponse;
}

export class SvcCreateCostPriceCalculation implements IEvaServiceDefinition
{
  name = 'CreateCostPriceCalculation';
  path = '/message/CreateCostPriceCalculation';
  request?: CreateCostPriceCalculation;
  response?: CreateCostPriceCalculationResponse;
}

export class SvcCreateCulture implements IEvaServiceDefinition
{
  name = 'CreateCulture';
  path = '/message/CreateCulture';
  request?: CreateCulture;
  response?: CreateCultureResponse;
}

export class SvcCreateCustomField implements IEvaServiceDefinition
{
  name = 'CreateCustomField';
  path = '/message/CreateCustomField';
  request?: CreateCustomField;
  response?: CreateCustomFieldResponse;
}

export class SvcCreateDevice implements IEvaServiceDefinition
{
  name = 'CreateDevice';
  path = '/message/CreateDevice';
  request?: CreateDevice;
  response?: CreateDeviceResponse;
}

export class SvcCreateDiscount implements IEvaServiceDefinition
{
  name = 'CreateDiscount';
  path = '/message/CreateDiscount';
  request?: CreateDiscount;
  response?: CreateDiscountResponse;
}

export class SvcCreateDiscountCampaign implements IEvaServiceDefinition
{
  name = 'CreateDiscountCampaign';
  path = '/message/CreateDiscountCampaign';
  request?: CreateDiscountCampaign;
  response?: CreateDiscountCampaignResponse;
}

export class SvcCreateDiscountCoupon implements IEvaServiceDefinition
{
  name = 'CreateDiscountCoupon';
  path = '/message/CreateDiscountCoupon';
  request?: CreateDiscountCoupon;
  response?: CreateDiscountCouponResponse;
}

export class SvcCreateDiscountFromTemplate implements IEvaServiceDefinition
{
  name = 'CreateDiscountFromTemplate';
  path = '/message/CreateDiscountFromTemplate';
  request?: CreateDiscountFromTemplate;
  response?: CreateDiscountResponse;
}

export class SvcCreateDiscountLayer implements IEvaServiceDefinition
{
  name = 'CreateDiscountLayer';
  path = '/message/CreateDiscountLayer';
  request?: CreateDiscountLayer;
  response?: CreateDiscountLayerResponse;
}

export class SvcCreateDiscountTemplate implements IEvaServiceDefinition
{
  name = 'CreateDiscountTemplate';
  path = '/message/CreateDiscountTemplate';
  request?: CreateDiscountTemplate;
  response?: CreateDiscountTemplateResponse;
}

export class SvcCreateElevationSkipReason implements IEvaServiceDefinition
{
  name = 'CreateElevationSkipReason';
  path = '/message/CreateElevationSkipReason';
  request?: CreateElevationSkipReason;
  response?: CreateElevationSkipReasonResponse;
}

export class SvcCreateEmployeeUser implements IEvaServiceDefinition
{
  name = 'CreateEmployeeUser';
  path = '/message/CreateEmployeeUser';
  request?: CreateEmployeeUser;
  response?: CreateEmployeeUserResponse;
}

export class SvcCreateEndpointConfiguration implements IEvaServiceDefinition
{
  name = 'CreateEndpointConfiguration';
  path = '/message/CreateEndpointConfiguration';
  request?: CreateEndpointConfiguration;
  response?: CreateEndpointConfigurationResponse;
}

export class SvcCreateEntityFieldValidator implements IEvaServiceDefinition
{
  name = 'CreateEntityFieldValidator';
  path = '/message/CreateEntityFieldValidator';
  request?: CreateEntityFieldValidator;
  response?: CreateEntityFieldValidatorResponse;
}

export class SvcCreateEvent implements IEvaServiceDefinition
{
  name = 'CreateEvent';
  path = '/message/CreateEvent';
  request?: CreateEvent;
  response?: CreateEventResponse;
}

export class SvcCreateEventLocation implements IEvaServiceDefinition
{
  name = 'CreateEventLocation';
  path = '/message/CreateEventLocation';
  request?: CreateEventLocation;
  response?: CreateEventLocationResponse;
}

export class SvcCreateEventType implements IEvaServiceDefinition
{
  name = 'CreateEventType';
  path = '/message/CreateEventType';
  request?: CreateEventType;
  response?: CreateEventTypeResponse;
}

export class SvcCreateFraudItem implements IEvaServiceDefinition
{
  name = 'CreateFraudItem';
  path = '/message/CreateFraudItem';
  request?: CreateFraudItem;
  response?: CreateFraudItemResponse;
}

export class SvcCreateGiftCardConfiguration implements IEvaServiceDefinition
{
  name = 'CreateGiftCardConfiguration';
  path = '/message/CreateGiftCardConfiguration';
  request?: CreateGiftCardConfiguration;
  response?: CreateGiftCardConfigurationResponse;
}

export class SvcCreateIdentificationPinForEmployee implements IEvaServiceDefinition
{
  name = 'CreateIdentificationPinForEmployee';
  path = '/message/CreateIdentificationPinForEmployee';
  request?: CreateIdentificationPinForEmployee;
  response?: CreateIdentificationPinForEmployeeResponse;
}

export class SvcCreateInquiry implements IEvaServiceDefinition
{
  name = 'CreateInquiry';
  path = '/message/CreateInquiry';
  request?: CreateInquiry;
  response?: CreateInquiryResponse;
}

export class SvcCreateInquiryItem implements IEvaServiceDefinition
{
  name = 'CreateInquiryItem';
  path = '/message/CreateInquiryItem';
  request?: CreateInquiryItem;
  response?: CreateInquiryItemResponse;
}

export class SvcCreateLoyaltyProgram implements IEvaServiceDefinition
{
  name = 'CreateLoyaltyProgram';
  path = '/message/CreateLoyaltyProgram';
  request?: CreateLoyaltyProgram;
  response?: CreateLoyaltyProgramResponse;
}

export class SvcCreateLoyaltyProgramBadge implements IEvaServiceDefinition
{
  name = 'CreateLoyaltyProgramBadge';
  path = '/message/CreateLoyaltyProgramBadge';
  request?: CreateLoyaltyProgramBadge;
  response?: CreateLoyaltyProgramBadgeResponse;
}

export class SvcCreateLoyaltyProgramBadgeCategory implements IEvaServiceDefinition
{
  name = 'CreateLoyaltyProgramBadgeCategory';
  path = '/message/CreateLoyaltyProgramBadgeCategory';
  request?: CreateLoyaltyProgramBadgeCategory;
  response?: CreateLoyaltyProgramBadgeCategoryResponse;
}

export class SvcCreateLoyaltyProgramBadgeCondition implements IEvaServiceDefinition
{
  name = 'CreateLoyaltyProgramBadgeCondition';
  path = '/message/CreateLoyaltyProgramBadgeCondition';
  request?: CreateLoyaltyProgramBadgeCondition;
  response?: CreateLoyaltyProgramBadgeConditionResponse;
}

export class SvcCreateLoyaltyProgramBenefit implements IEvaServiceDefinition
{
  name = 'CreateLoyaltyProgramBenefit';
  path = '/message/CreateLoyaltyProgramBenefit';
  request?: CreateLoyaltyProgramBenefit;
  response?: CreateLoyaltyProgramBenefitResponse;
}

export class SvcCreateLoyaltyProgramCondition implements IEvaServiceDefinition
{
  name = 'CreateLoyaltyProgramCondition';
  path = '/message/CreateLoyaltyProgramCondition';
  request?: CreateLoyaltyProgramCondition;
  response?: CreateLoyaltyProgramConditionResponse;
}

export class SvcCreateLoyaltyProgramGroup implements IEvaServiceDefinition
{
  name = 'CreateLoyaltyProgramGroup';
  path = '/message/CreateLoyaltyProgramGroup';
  request?: CreateLoyaltyProgramGroup;
  response?: CreateLoyaltyProgramGroupResponse;
}

export class SvcCreateLoyaltyProgramPass implements IEvaServiceDefinition
{
  name = 'CreateLoyaltyProgramPass';
  path = '/message/CreateLoyaltyProgramPass';
  request?: CreateLoyaltyProgramPass;
  response?: CreateLoyaltyProgramPassResponse;
}

export class SvcCreateLoyaltyProgramPaymentType implements IEvaServiceDefinition
{
  name = 'CreateLoyaltyProgramPaymentType';
  path = '/message/CreateLoyaltyProgramPaymentType';
  request?: CreateLoyaltyProgramPaymentType;
  response?: CreateLoyaltyProgramPaymentTypeResponse;
}

export class SvcCreateLoyaltyProgramProductLimitation implements IEvaServiceDefinition
{
  name = 'CreateLoyaltyProgramProductLimitation';
  path = '/message/CreateLoyaltyProgramProductLimitation';
  request?: CreateLoyaltyProgramProductLimitation;
  response?: CreateLoyaltyProgramProductLimitationResponse;
}

export class SvcCreateLoyaltyProgramTier implements IEvaServiceDefinition
{
  name = 'CreateLoyaltyProgramTier';
  path = '/message/CreateLoyaltyProgramTier';
  request?: CreateLoyaltyProgramTier;
  response?: CreateLoyaltyProgramTierResponse;
}

export class SvcCreateLoyaltyProgramTierBenefit implements IEvaServiceDefinition
{
  name = 'CreateLoyaltyProgramTierBenefit';
  path = '/message/CreateLoyaltyProgramTierBenefit';
  request?: CreateLoyaltyProgramTierBenefit;
  response?: CreateLoyaltyProgramTierBenefitResponse;
}

export class SvcCreateMessageTemplate implements IEvaServiceDefinition
{
  name = 'CreateMessageTemplate';
  path = '/message/CreateMessageTemplate';
  request?: CreateMessageTemplate;
  response?: CreateMessageTemplateResponse;
}

export class SvcCreateOpenCashDrawerReason implements IEvaServiceDefinition
{
  name = 'CreateOpenCashDrawerReason';
  path = '/message/CreateOpenCashDrawerReason';
  request?: CreateOpenCashDrawerReason;
  response?: CreateOpenCashDrawerReasonResponse;
}

export class SvcCreateOpeningHoursType implements IEvaServiceDefinition
{
  name = 'CreateOpeningHoursType';
  path = '/message/CreateOpeningHoursType';
  request?: CreateOpeningHoursType;
  response?: CreateOpeningHoursTypeResponse;
}

export class SvcCreateOrderLedgerType implements IEvaServiceDefinition
{
  name = 'CreateOrderLedgerType';
  path = '/message/CreateOrderLedgerType';
  request?: CreateOrderLedgerType;
  response?: CreateOrderLedgerTypeResponse;
}

export class SvcCreateOrganizationUnitCompany implements IEvaServiceDefinition
{
  name = 'CreateOrganizationUnitCompany';
  path = '/message/CreateOrganizationUnitCompany';
  request?: CreateOrganizationUnitCompany;
  response?: CreateOrganizationUnitCompanyResponse;
}

export class SvcCreateOrganizationUnitCountry implements IEvaServiceDefinition
{
  name = 'CreateOrganizationUnitCountry';
  path = '/message/CreateOrganizationUnitCountry';
  request?: CreateOrganizationUnitCountry;
  response?: CreateOrganizationUnitCountryResponse;
}

export class SvcCreateOrganizationUnitCurrency implements IEvaServiceDefinition
{
  name = 'CreateOrganizationUnitCurrency';
  path = '/message/CreateOrganizationUnitCurrency';
  request?: CreateOrganizationUnitCurrency;
  response?: CreateOrganizationUnitCurrencyResponse;
}

export class SvcCreateOrganizationUnitLanguage implements IEvaServiceDefinition
{
  name = 'CreateOrganizationUnitLanguage';
  path = '/message/CreateOrganizationUnitLanguage';
  request?: CreateOrganizationUnitLanguage;
  response?: CreateOrganizationUnitLanguageResponse;
}

export class SvcCreateOrganizationUnitOpeningHours implements IEvaServiceDefinition
{
  name = 'CreateOrganizationUnitOpeningHours';
  path = '/message/CreateOrganizationUnitOpeningHours';
  request?: CreateOrganizationUnitOpeningHours;
  response?: EmptyResponseMessage;
}

export class SvcCreateOrganizationUnitSet implements IEvaServiceDefinition
{
  name = 'CreateOrganizationUnitSet';
  path = '/message/CreateOrganizationUnitSet';
  request?: CreateOrganizationUnitSet;
  response?: CreateOrganizationUnitSetResponse;
}

export class SvcCreateOrganizationUnitSetScope implements IEvaServiceDefinition
{
  name = 'CreateOrganizationUnitSetScope';
  path = '/message/CreateOrganizationUnitSetScope';
  request?: CreateOrganizationUnitSetScope;
  response?: CreateOrganizationUnitSetScopeResponse;
}

export class SvcCreateOrganizationUnitShippingMethod implements IEvaServiceDefinition
{
  name = 'CreateOrganizationUnitShippingMethod';
  path = '/message/CreateOrganizationUnitShippingMethod';
  request?: CreateOrganizationUnitShippingMethod;
  response?: CreateOrganizationUnitShippingMethodResponse;
}

export class SvcCreateOrUpdateAMLConfiguration implements IEvaServiceDefinition
{
  name = 'CreateOrUpdateAMLConfiguration';
  path = '/message/CreateOrUpdateAMLConfiguration';
  request?: CreateOrUpdateAMLConfiguration;
  response?: EmptyResponseMessage;
}

export class SvcCreateOrUpdateEmployeeData implements IEvaServiceDefinition
{
  name = 'CreateOrUpdateEmployeeData';
  path = '/message/CreateOrUpdateEmployeeData';
  request?: CreateOrUpdateEmployeeData;
  response?: EmptyResponseMessage;
}

export class SvcCreateOrUpdateOrganizationUnitSetPaymentType implements IEvaServiceDefinition
{
  name = 'CreateOrUpdateOrganizationUnitSetPaymentType';
  path = '/message/CreateOrUpdateOrganizationUnitSetPaymentType';
  request?: CreateOrUpdateOrganizationUnitSetPaymentType;
  response?: EmptyResponseMessage;
}

export class SvcCreateOrUpdateOrganizationUnitSubset implements IEvaServiceDefinition
{
  name = 'CreateOrUpdateOrganizationUnitSubset';
  path = '/message/CreateOrUpdateOrganizationUnitSubset';
  request?: CreateOrUpdateOrganizationUnitSubset;
  response?: EmptyResponseMessage;
}

export class SvcCreateOrUpdateVisibilityGroupConfiguration implements IEvaServiceDefinition
{
  name = 'CreateOrUpdateVisibilityGroupConfiguration';
  path = '/message/CreateOrUpdateVisibilityGroupConfiguration';
  request?: CreateOrUpdateVisibilityGroupConfiguration;
  response?: EmptyResponseMessage;
}

export class SvcCreatePackage implements IEvaServiceDefinition
{
  name = 'CreatePackage';
  path = '/message/CreatePackage';
  request?: CreatePackage;
  response?: CreatePackageResponse;
}

export class SvcCreatePaymentMethod implements IEvaServiceDefinition
{
  name = 'CreatePaymentMethod';
  path = '/message/CreatePaymentMethod';
  request?: CreatePaymentMethod;
  response?: CreatePaymentMethodResponse;
}

export class SvcCreatePaymentTransactionLedgerType implements IEvaServiceDefinition
{
  name = 'CreatePaymentTransactionLedgerType';
  path = '/message/CreatePaymentTransactionLedgerType';
  request?: CreatePaymentTransactionLedgerType;
  response?: CreatePaymentTransactionLedgerTypeResponse;
}

export class SvcCreatePaymentType implements IEvaServiceDefinition
{
  name = 'CreatePaymentType';
  path = '/message/CreatePaymentType';
  request?: CreatePaymentType;
  response?: CreatePaymentTypeResponse;
}

export class SvcCreatePersonalizedPromotion implements IEvaServiceDefinition
{
  name = 'CreatePersonalizedPromotion';
  path = '/message/CreatePersonalizedPromotion';
  request?: CreatePersonalizedPromotion;
  response?: CreatePersonalizedPromotionResponse;
}

export class SvcCreatePointAwardingRule implements IEvaServiceDefinition
{
  name = 'CreatePointAwardingRule';
  path = '/message/CreatePointAwardingRule';
  request?: CreatePointAwardingRule;
  response?: CreatePointAwardingRuleResponse;
}

export class SvcCreatePriceList implements IEvaServiceDefinition
{
  name = 'CreatePriceList';
  path = '/message/CreatePriceList';
  request?: CreatePriceList;
  response?: CreatePriceListResponse;
}

export class SvcCreatePriceListAdjustment implements IEvaServiceDefinition
{
  name = 'CreatePriceListAdjustment';
  path = '/message/CreatePriceListAdjustment';
  request?: CreatePriceListAdjustment;
  response?: CreatePriceListAdjustmentResponse;
}

export class SvcCreatePriceListManualInputAdjustment implements IEvaServiceDefinition
{
  name = 'CreatePriceListManualInputAdjustment';
  path = '/message/CreatePriceListManualInputAdjustment';
  request?: CreatePriceListManualInputAdjustment;
  response?: CreatePriceListManualInputAdjustmentResponse;
}

export class SvcCreatePriceListOrganizationUnit implements IEvaServiceDefinition
{
  name = 'CreatePriceListOrganizationUnit';
  path = '/message/CreatePriceListOrganizationUnit';
  request?: CreatePriceListOrganizationUnit;
  response?: CreatePriceListOrganizationUnitResponse;
}

export class SvcCreatePriceListUsageType implements IEvaServiceDefinition
{
  name = 'CreatePriceListUsageType';
  path = '/message/CreatePriceListUsageType';
  request?: CreatePriceListUsageType;
  response?: CreatePriceListUsageTypeResponse;
}

export class SvcCreatePrinterType implements IEvaServiceDefinition
{
  name = 'CreatePrinterType';
  path = '/message/CreatePrinterType';
  request?: CreatePrinterType;
  response?: CreatePrinterTypeResponse;
}

export class SvcCreateProductBarcode implements IEvaServiceDefinition
{
  name = 'CreateProductBarcode';
  path = '/message/CreateProductBarcode';
  request?: CreateProductBarcode;
  response?: EmptyResponseMessage;
}

export class SvcCreateProductGiftCard implements IEvaServiceDefinition
{
  name = 'CreateProductGiftCard';
  path = '/message/CreateProductGiftCard';
  request?: CreateProductGiftCard;
  response?: CreateProductGiftCardResponse;
}

export class SvcCreateProductRequirement implements IEvaServiceDefinition
{
  name = 'CreateProductRequirement';
  path = '/message/CreateProductRequirement';
  request?: CreateProductRequirement;
  response?: CreateProductRequirementResponse;
}

export class SvcCreateProductSearchTemplate implements IEvaServiceDefinition
{
  name = 'CreateProductSearchTemplate';
  path = '/message/CreateProductSearchTemplate';
  request?: CreateProductSearchTemplate;
  response?: CreateProductSearchTemplateResponse;
}

export class SvcCreateProductSubscription implements IEvaServiceDefinition
{
  name = 'CreateProductSubscription';
  path = '/message/CreateProductSubscription';
  request?: CreateProductSubscription;
  response?: CreateProductSubscriptionResponse;
}

export class SvcCreateProductUnitOfMeasure implements IEvaServiceDefinition
{
  name = 'CreateProductUnitOfMeasure';
  path = '/message/CreateProductUnitOfMeasure';
  request?: CreateProductUnitOfMeasure;
  response?: CreateProductUnitOfMeasureResponse;
}

export class SvcCreateRefundCorrectionReason implements IEvaServiceDefinition
{
  name = 'CreateRefundCorrectionReason';
  path = '/message/CreateRefundCorrectionReason';
  request?: CreateRefundCorrectionReason;
  response?: CreateRefundCorrectionReasonResponse;
}

export class SvcCreateResendReason implements IEvaServiceDefinition
{
  name = 'CreateResendReason';
  path = '/message/CreateResendReason';
  request?: CreateResendReason;
  response?: CreateResendReasonResponse;
}

export class SvcCreateReturnReason implements IEvaServiceDefinition
{
  name = 'CreateReturnReason';
  path = '/message/CreateReturnReason';
  request?: CreateReturnReason;
  response?: CreateReturnReasonResponse;
}

export class SvcCreateRole implements IEvaServiceDefinition
{
  name = 'CreateRole';
  path = '/message/CreateRole';
  request?: CreateRole;
  response?: CreateRoleResponse;
}

export class SvcCreateRoleSet implements IEvaServiceDefinition
{
  name = 'CreateRoleSet';
  path = '/message/CreateRoleSet';
  request?: CreateRoleSet;
  response?: CreateRoleSetResponse;
}

export class SvcCreateShippingCost implements IEvaServiceDefinition
{
  name = 'CreateShippingCost';
  path = '/message/CreateShippingCost';
  request?: CreateShippingCost;
  response?: CreateShippingCostResponse;
}

export class SvcCreateShippingMethod implements IEvaServiceDefinition
{
  name = 'CreateShippingMethod';
  path = '/message/CreateShippingMethod';
  request?: CreateShippingMethod;
  response?: CreateShippingMethodResponse;
}

export class SvcCreateShippingMethodTransportationTime implements IEvaServiceDefinition
{
  name = 'CreateShippingMethodTransportationTime';
  path = '/message/CreateShippingMethodTransportationTime';
  request?: CreateShippingMethodTransportationTime;
  response?: CreateShippingMethodTransportationTimeResponse;
}

export class SvcCreateShippingRestriction implements IEvaServiceDefinition
{
  name = 'CreateShippingRestriction';
  path = '/message/CreateShippingRestriction';
  request?: CreateShippingRestriction;
  response?: CreateShippingRestrictionResponse;
}

export class SvcCreateStation implements IEvaServiceDefinition
{
  name = 'CreateStation';
  path = '/message/CreateStation';
  request?: CreateStation;
  response?: CreateStationResponse;
}

export class SvcCreateStockAllocationRule implements IEvaServiceDefinition
{
  name = 'CreateStockAllocationRule';
  path = '/message/CreateStockAllocationRule';
  request?: CreateStockAllocationRule;
  response?: CreateStockAllocationRuleResponse;
}

export class SvcCreateStockLabel implements IEvaServiceDefinition
{
  name = 'CreateStockLabel';
  path = '/message/CreateStockLabel';
  request?: CreateStockLabel;
  response?: CreateStockLabelResponse;
}

export class SvcCreateStockMutationReason implements IEvaServiceDefinition
{
  name = 'CreateStockMutationReason';
  path = '/message/CreateStockMutationReason';
  request?: CreateStockMutationReason;
  response?: CreateStockMutationReasonResponse;
}

export class SvcCreateSubscription implements IEvaServiceDefinition
{
  name = 'CreateSubscription';
  path = '/message/CreateSubscription';
  request?: CreateSubscription;
  response?: CreateSubscriptionResponse;
}

export class SvcCreateSubscriptionOrganizationUnitSet implements IEvaServiceDefinition
{
  name = 'CreateSubscriptionOrganizationUnitSet';
  path = '/message/CreateSubscriptionOrganizationUnitSet';
  request?: CreateSubscriptionOrganizationUnitSet;
  response?: CreateSubscriptionOrganizationUnitSetResponse;
}

export class SvcCreateSupplierProduct implements IEvaServiceDefinition
{
  name = 'CreateSupplierProduct';
  path = '/message/CreateSupplierProduct';
  request?: CreateSupplierProduct;
  response?: CreateSupplierProductResponse;
}

export class SvcCreateSurvey implements IEvaServiceDefinition
{
  name = 'CreateSurvey';
  path = '/message/CreateSurvey';
  request?: CreateSurvey;
  response?: CreateSurveyResponse;
}

export class SvcCreateSurveyCategory implements IEvaServiceDefinition
{
  name = 'CreateSurveyCategory';
  path = '/message/CreateSurveyCategory';
  request?: CreateSurveyCategory;
  response?: CreateSurveyCategoryResponse;
}

export class SvcCreateSurveyQuestion implements IEvaServiceDefinition
{
  name = 'CreateSurveyQuestion';
  path = '/message/CreateSurveyQuestion';
  request?: CreateSurveyQuestion;
  response?: CreateSurveyQuestionResponse;
}

export class SvcCreateSurveyQuestionRoute implements IEvaServiceDefinition
{
  name = 'CreateSurveyQuestionRoute';
  path = '/message/CreateSurveyQuestionRoute';
  request?: CreateSurveyQuestionRoute;
  response?: CreateSurveyQuestionRouteResponse;
}

export class SvcCreateUnitOfMeasure implements IEvaServiceDefinition
{
  name = 'CreateUnitOfMeasure';
  path = '/message/CreateUnitOfMeasure';
  request?: CreateUnitOfMeasure;
  response?: CreateUnitOfMeasureResponse;
}

export class SvcCreateUnitPriceCorrectionReason implements IEvaServiceDefinition
{
  name = 'CreateUnitPriceCorrectionReason';
  path = '/message/CreateUnitPriceCorrectionReason';
  request?: CreateUnitPriceCorrectionReason;
  response?: CreateUnitPriceCorrectionReasonResponse;
}

export class SvcCreateUserAgreement implements IEvaServiceDefinition
{
  name = 'CreateUserAgreement';
  path = '/message/CreateUserAgreement';
  request?: CreateUserAgreement;
  response?: CreateUserAgreementResponse;
}

export class SvcCreateUserOrigin implements IEvaServiceDefinition
{
  name = 'CreateUserOrigin';
  path = '/message/CreateUserOrigin';
  request?: CreateUserOrigin;
  response?: CreateUserOriginResponse;
}

export class SvcCreateUserRequirement implements IEvaServiceDefinition
{
  name = 'CreateUserRequirement';
  path = '/message/CreateUserRequirement';
  request?: CreateUserRequirement;
  response?: CreateUserRequirementResponse;
}

export class SvcCreateUserRequirementSet implements IEvaServiceDefinition
{
  name = 'CreateUserRequirementSet';
  path = '/message/CreateUserRequirementSet';
  request?: CreateUserRequirementSet;
  response?: CreateUserRequirementSetResponse;
}

export class SvcCreateVisibilityGroup implements IEvaServiceDefinition
{
  name = 'CreateVisibilityGroup';
  path = '/message/CreateVisibilityGroup';
  request?: CreateVisibilityGroup;
  response?: CreateVisibilityGroupResponse;
}

export class SvcCreateWidget implements IEvaServiceDefinition
{
  name = 'CreateWidget';
  path = '/message/CreateWidget';
  request?: CreateWidget;
  response?: CreateWidgetResponse;
}

export class SvcCreateWidgetConfiguration implements IEvaServiceDefinition
{
  name = 'CreateWidgetConfiguration';
  path = '/message/CreateWidgetConfiguration';
  request?: CreateWidgetConfiguration;
  response?: CreateWidgetConfigurationResponse;
}

export class SvcDeactivateSurvey implements IEvaServiceDefinition
{
  name = 'DeactivateSurvey';
  path = '/message/DeactivateSurvey';
  request?: DeactivateSurvey;
  response?: EmptyResponseMessage;
}

export class SvcDeleteAccount implements IEvaServiceDefinition
{
  name = 'DeleteAccount';
  path = '/message/DeleteAccount';
  request?: DeleteAccount;
  response?: EmptyResponseMessage;
}

export class SvcDeleteAppointmentCancellationReason implements IEvaServiceDefinition
{
  name = 'DeleteAppointmentCancellationReason';
  path = '/message/DeleteAppointmentCancellationReason';
  request?: DeleteAppointmentCancellationReason;
  response?: EmptyResponseMessage;
}

export class SvcDeleteAssortment implements IEvaServiceDefinition
{
  name = 'DeleteAssortment';
  path = '/message/DeleteAssortment';
  request?: DeleteAssortment;
  response?: EmptyResponseMessage;
}

export class SvcDeleteCaseBlob implements IEvaServiceDefinition
{
  name = 'DeleteCaseBlob';
  path = '/message/DeleteCaseBlob';
  request?: DeleteCaseBlob;
  response?: EmptyResponseMessage;
}

export class SvcDeleteCaseInteraction implements IEvaServiceDefinition
{
  name = 'DeleteCaseInteraction';
  path = '/message/DeleteCaseInteraction';
  request?: DeleteCaseInteraction;
  response?: EmptyResponseMessage;
}

export class SvcDeleteCaseStatus implements IEvaServiceDefinition
{
  name = 'DeleteCaseStatus';
  path = '/message/DeleteCaseStatus';
  request?: DeleteCaseStatus;
  response?: EmptyResponseMessage;
}

export class SvcDeleteCaseTopic implements IEvaServiceDefinition
{
  name = 'DeleteCaseTopic';
  path = '/message/DeleteCaseTopic';
  request?: DeleteCaseTopic;
  response?: EmptyResponseMessage;
}

export class SvcDeleteCashExpenseType implements IEvaServiceDefinition
{
  name = 'DeleteCashExpenseType';
  path = '/message/DeleteCashExpenseType';
  request?: DeleteCashExpenseType;
  response?: EmptyResponseMessage;
}

export class SvcDeleteCashHandler implements IEvaServiceDefinition
{
  name = 'DeleteCashHandler';
  path = '/message/DeleteCashHandler';
  request?: DeleteCashHandler;
  response?: EmptyResponseMessage;
}

export class SvcDeleteCDNConfiguration implements IEvaServiceDefinition
{
  name = 'DeleteCDNConfiguration';
  path = '/message/DeleteCDNConfiguration';
  request?: DeleteCDNConfiguration;
  response?: EmptyResponseMessage;
}

export class SvcDeleteCheckoutOption implements IEvaServiceDefinition
{
  name = 'DeleteCheckoutOption';
  path = '/message/DeleteCheckoutOption';
  request?: DeleteCheckoutOption;
  response?: EmptyResponseMessage;
}

export class SvcDeleteCheckoutOptionCategory implements IEvaServiceDefinition
{
  name = 'DeleteCheckoutOptionCategory';
  path = '/message/DeleteCheckoutOptionCategory';
  request?: DeleteCheckoutOptionCategory;
  response?: EmptyResponseMessage;
}

export class SvcDeleteClientApplication implements IEvaServiceDefinition
{
  name = 'DeleteClientApplication';
  path = '/message/DeleteClientApplication';
  request?: DeleteClientApplication;
  response?: EmptyResponseMessage;
}

export class SvcDeleteCompany implements IEvaServiceDefinition
{
  name = 'DeleteCompany';
  path = '/message/DeleteCompany';
  request?: DeleteCompany;
  response?: EmptyResponseMessage;
}

export class SvcDeleteCompanyRequirement implements IEvaServiceDefinition
{
  name = 'DeleteCompanyRequirement';
  path = '/message/DeleteCompanyRequirement';
  request?: DeleteCompanyRequirement;
  response?: EmptyResponseMessage;
}

export class SvcDeleteCostPriceCalculation implements IEvaServiceDefinition
{
  name = 'DeleteCostPriceCalculation';
  path = '/message/DeleteCostPriceCalculation';
  request?: DeleteCostPriceCalculation;
  response?: EmptyResponseMessage;
}

export class SvcDeleteCulture implements IEvaServiceDefinition
{
  name = 'DeleteCulture';
  path = '/message/DeleteCulture';
  request?: DeleteCulture;
  response?: EmptyResponseMessage;
}

export class SvcDeleteCustomField implements IEvaServiceDefinition
{
  name = 'DeleteCustomField';
  path = '/message/DeleteCustomField';
  request?: DeleteCustomField;
  response?: EmptyResponseMessage;
}

export class SvcDeleteDevice implements IEvaServiceDefinition
{
  name = 'DeleteDevice';
  path = '/message/DeleteDevice';
  request?: DeleteDevice;
  response?: EmptyResponseMessage;
}

export class SvcDeleteDiscountCampaign implements IEvaServiceDefinition
{
  name = 'DeleteDiscountCampaign';
  path = '/message/DeleteDiscountCampaign';
  request?: DeleteDiscountCampaign;
  response?: EmptyResponseMessage;
}

export class SvcDeleteDiscountLayer implements IEvaServiceDefinition
{
  name = 'DeleteDiscountLayer';
  path = '/message/DeleteDiscountLayer';
  request?: DeleteDiscountLayer;
  response?: EmptyResponseMessage;
}

export class SvcDeleteDiscountTemplate implements IEvaServiceDefinition
{
  name = 'DeleteDiscountTemplate';
  path = '/message/DeleteDiscountTemplate';
  request?: DeleteDiscountTemplate;
  response?: EmptyResponseMessage;
}

export class SvcDeleteElevationSkipReason implements IEvaServiceDefinition
{
  name = 'DeleteElevationSkipReason';
  path = '/message/DeleteElevationSkipReason';
  request?: DeleteElevationSkipReason;
  response?: EmptyResponseMessage;
}

export class SvcDeleteEmployeeData implements IEvaServiceDefinition
{
  name = 'DeleteEmployeeData';
  path = '/message/DeleteEmployeeData';
  request?: DeleteEmployeeData;
  response?: EmptyResponseMessage;
}

export class SvcDeleteEndpointConfiguration implements IEvaServiceDefinition
{
  name = 'DeleteEndpointConfiguration';
  path = '/message/DeleteEndpointConfiguration';
  request?: DeleteEndpointConfiguration;
  response?: EmptyResponseMessage;
}

export class SvcDeleteEntityFieldValidator implements IEvaServiceDefinition
{
  name = 'DeleteEntityFieldValidator';
  path = '/message/DeleteEntityFieldValidator';
  request?: DeleteEntityFieldValidator;
  response?: EmptyResponseMessage;
}

export class SvcDeleteEvent implements IEvaServiceDefinition
{
  name = 'DeleteEvent';
  path = '/message/DeleteEvent';
  request?: DeleteEvent;
  response?: EmptyResponseMessage;
}

export class SvcDeleteEventLocation implements IEvaServiceDefinition
{
  name = 'DeleteEventLocation';
  path = '/message/DeleteEventLocation';
  request?: DeleteEventLocation;
  response?: EmptyResponseMessage;
}

export class SvcDeleteEventType implements IEvaServiceDefinition
{
  name = 'DeleteEventType';
  path = '/message/DeleteEventType';
  request?: DeleteEventType;
  response?: EmptyResponseMessage;
}

export class SvcDeleteFraudItem implements IEvaServiceDefinition
{
  name = 'DeleteFraudItem';
  path = '/message/DeleteFraudItem';
  request?: DeleteFraudItem;
  response?: EmptyResponseMessage;
}

export class SvcDeleteGiftCardConfiguration implements IEvaServiceDefinition
{
  name = 'DeleteGiftCardConfiguration';
  path = '/message/DeleteGiftCardConfiguration';
  request?: DeleteGiftCardConfiguration;
  response?: EmptyResponseMessage;
}

export class SvcDeleteInquiry implements IEvaServiceDefinition
{
  name = 'DeleteInquiry';
  path = '/message/DeleteInquiry';
  request?: DeleteInquiry;
  response?: EmptyResponseMessage;
}

export class SvcDeleteInquiryItem implements IEvaServiceDefinition
{
  name = 'DeleteInquiryItem';
  path = '/message/DeleteInquiryItem';
  request?: DeleteInquiryItem;
  response?: EmptyResponseMessage;
}

export class SvcDeleteLoyaltyProgram implements IEvaServiceDefinition
{
  name = 'DeleteLoyaltyProgram';
  path = '/message/DeleteLoyaltyProgram';
  request?: DeleteLoyaltyProgram;
  response?: EmptyResponseMessage;
}

export class SvcDeleteLoyaltyProgramBadge implements IEvaServiceDefinition
{
  name = 'DeleteLoyaltyProgramBadge';
  path = '/message/DeleteLoyaltyProgramBadge';
  request?: DeleteLoyaltyProgramBadge;
  response?: EmptyResponseMessage;
}

export class SvcDeleteLoyaltyProgramBadgeCategory implements IEvaServiceDefinition
{
  name = 'DeleteLoyaltyProgramBadgeCategory';
  path = '/message/DeleteLoyaltyProgramBadgeCategory';
  request?: DeleteLoyaltyProgramBadgeCategory;
  response?: EmptyResponseMessage;
}

export class SvcDeleteLoyaltyProgramBadgeCondition implements IEvaServiceDefinition
{
  name = 'DeleteLoyaltyProgramBadgeCondition';
  path = '/message/DeleteLoyaltyProgramBadgeCondition';
  request?: DeleteLoyaltyProgramBadgeCondition;
  response?: EmptyResponseMessage;
}

export class SvcDeleteLoyaltyProgramBenefit implements IEvaServiceDefinition
{
  name = 'DeleteLoyaltyProgramBenefit';
  path = '/message/DeleteLoyaltyProgramBenefit';
  request?: DeleteLoyaltyProgramBenefit;
  response?: EmptyResponseMessage;
}

export class SvcDeleteLoyaltyProgramCondition implements IEvaServiceDefinition
{
  name = 'DeleteLoyaltyProgramCondition';
  path = '/message/DeleteLoyaltyProgramCondition';
  request?: DeleteLoyaltyProgramCondition;
  response?: EmptyResponseMessage;
}

export class SvcDeleteLoyaltyProgramGroup implements IEvaServiceDefinition
{
  name = 'DeleteLoyaltyProgramGroup';
  path = '/message/DeleteLoyaltyProgramGroup';
  request?: DeleteLoyaltyProgramGroup;
  response?: EmptyResponseMessage;
}

export class SvcDeleteLoyaltyProgramPass implements IEvaServiceDefinition
{
  name = 'DeleteLoyaltyProgramPass';
  path = '/message/DeleteLoyaltyProgramPass';
  request?: DeleteLoyaltyProgramPass;
  response?: EmptyResponseMessage;
}

export class SvcDeleteLoyaltyProgramPaymentType implements IEvaServiceDefinition
{
  name = 'DeleteLoyaltyProgramPaymentType';
  path = '/message/DeleteLoyaltyProgramPaymentType';
  request?: DeleteLoyaltyProgramPaymentType;
  response?: EmptyResponseMessage;
}

export class SvcDeleteLoyaltyProgramProductLimitation implements IEvaServiceDefinition
{
  name = 'DeleteLoyaltyProgramProductLimitation';
  path = '/message/DeleteLoyaltyProgramProductLimitation';
  request?: DeleteLoyaltyProgramProductLimitation;
  response?: EmptyResponseMessage;
}

export class SvcDeleteLoyaltyProgramTier implements IEvaServiceDefinition
{
  name = 'DeleteLoyaltyProgramTier';
  path = '/message/DeleteLoyaltyProgramTier';
  request?: DeleteLoyaltyProgramTier;
  response?: EmptyResponseMessage;
}

export class SvcDeleteMessageTemplate implements IEvaServiceDefinition
{
  name = 'DeleteMessageTemplate';
  path = '/message/DeleteMessageTemplate';
  request?: DeleteMessageTemplate;
  response?: EmptyResponseMessage;
}

export class SvcDeleteOpenCashDrawerReason implements IEvaServiceDefinition
{
  name = 'DeleteOpenCashDrawerReason';
  path = '/message/DeleteOpenCashDrawerReason';
  request?: DeleteOpenCashDrawerReason;
  response?: EmptyResponseMessage;
}

export class SvcDeleteOpeningHoursType implements IEvaServiceDefinition
{
  name = 'DeleteOpeningHoursType';
  path = '/message/DeleteOpeningHoursType';
  request?: DeleteOpeningHoursType;
  response?: EmptyResponseMessage;
}

export class SvcDeleteOrderLedgerType implements IEvaServiceDefinition
{
  name = 'DeleteOrderLedgerType';
  path = '/message/DeleteOrderLedgerType';
  request?: DeleteOrderLedgerType;
  response?: EmptyResponseMessage;
}

export class SvcDeleteOrganizationUnitCompany implements IEvaServiceDefinition
{
  name = 'DeleteOrganizationUnitCompany';
  path = '/message/DeleteOrganizationUnitCompany';
  request?: DeleteOrganizationUnitCompany;
  response?: EmptyResponseMessage;
}

export class SvcDeleteOrganizationUnitCountry implements IEvaServiceDefinition
{
  name = 'DeleteOrganizationUnitCountry';
  path = '/message/DeleteOrganizationUnitCountry';
  request?: DeleteOrganizationUnitCountry;
  response?: EmptyResponseMessage;
}

export class SvcDeleteOrganizationUnitCurrency implements IEvaServiceDefinition
{
  name = 'DeleteOrganizationUnitCurrency';
  path = '/message/DeleteOrganizationUnitCurrency';
  request?: DeleteOrganizationUnitCurrency;
  response?: EmptyResponseMessage;
}

export class SvcDeleteOrganizationUnitLanguage implements IEvaServiceDefinition
{
  name = 'DeleteOrganizationUnitLanguage';
  path = '/message/DeleteOrganizationUnitLanguage';
  request?: DeleteOrganizationUnitLanguage;
  response?: EmptyResponseMessage;
}

export class SvcDeleteOrganizationUnitOpeningHours implements IEvaServiceDefinition
{
  name = 'DeleteOrganizationUnitOpeningHours';
  path = '/message/DeleteOrganizationUnitOpeningHours';
  request?: DeleteOrganizationUnitOpeningHours;
  response?: EmptyResponseMessage;
}

export class SvcDeleteOrganizationUnitSet implements IEvaServiceDefinition
{
  name = 'DeleteOrganizationUnitSet';
  path = '/message/DeleteOrganizationUnitSet';
  request?: DeleteOrganizationUnitSet;
  response?: EmptyResponseMessage;
}

export class SvcDeleteOrganizationUnitSetPaymentType implements IEvaServiceDefinition
{
  name = 'DeleteOrganizationUnitSetPaymentType';
  path = '/message/DeleteOrganizationUnitSetPaymentType';
  request?: DeleteOrganizationUnitSetPaymentType;
  response?: EmptyResponseMessage;
}

export class SvcDeleteOrganizationUnitSetScope implements IEvaServiceDefinition
{
  name = 'DeleteOrganizationUnitSetScope';
  path = '/message/DeleteOrganizationUnitSetScope';
  request?: DeleteOrganizationUnitSetScope;
  response?: EmptyResponseMessage;
}

export class SvcDeleteOrganizationUnitShippingMethod implements IEvaServiceDefinition
{
  name = 'DeleteOrganizationUnitShippingMethod';
  path = '/message/DeleteOrganizationUnitShippingMethod';
  request?: DeleteOrganizationUnitShippingMethod;
  response?: EmptyResponseMessage;
}

export class SvcDeleteOrganizationUnitSubset implements IEvaServiceDefinition
{
  name = 'DeleteOrganizationUnitSubset';
  path = '/message/DeleteOrganizationUnitSubset';
  request?: DeleteOrganizationUnitSubset;
  response?: EmptyResponseMessage;
}

export class SvcDeletePackage implements IEvaServiceDefinition
{
  name = 'DeletePackage';
  path = '/message/DeletePackage';
  request?: DeletePackage;
  response?: EmptyResponseMessage;
}

export class SvcDeletePaymentMethod implements IEvaServiceDefinition
{
  name = 'DeletePaymentMethod';
  path = '/message/DeletePaymentMethod';
  request?: DeletePaymentMethod;
  response?: EmptyResponseMessage;
}

export class SvcDeletePaymentTransactionLedgerType implements IEvaServiceDefinition
{
  name = 'DeletePaymentTransactionLedgerType';
  path = '/message/DeletePaymentTransactionLedgerType';
  request?: DeletePaymentTransactionLedgerType;
  response?: EmptyResponseMessage;
}

export class SvcDeletePaymentType implements IEvaServiceDefinition
{
  name = 'DeletePaymentType';
  path = '/message/DeletePaymentType';
  request?: DeletePaymentType;
  response?: EmptyResponseMessage;
}

export class SvcDeletePriceList implements IEvaServiceDefinition
{
  name = 'DeletePriceList';
  path = '/message/DeletePriceList';
  request?: DeletePriceList;
  response?: EmptyResponseMessage;
}

export class SvcDeletePriceListAdjustment implements IEvaServiceDefinition
{
  name = 'DeletePriceListAdjustment';
  path = '/message/DeletePriceListAdjustment';
  request?: DeletePriceListAdjustment;
  response?: EmptyResponseMessage;
}

export class SvcDeletePriceListManualInputAdjustment implements IEvaServiceDefinition
{
  name = 'DeletePriceListManualInputAdjustment';
  path = '/message/DeletePriceListManualInputAdjustment';
  request?: DeletePriceListManualInputAdjustment;
  response?: EmptyResponseMessage;
}

export class SvcDeletePriceListOrganizationUnit implements IEvaServiceDefinition
{
  name = 'DeletePriceListOrganizationUnit';
  path = '/message/DeletePriceListOrganizationUnit';
  request?: DeletePriceListOrganizationUnit;
  response?: EmptyResponseMessage;
}

export class SvcDeletePriceListUsageType implements IEvaServiceDefinition
{
  name = 'DeletePriceListUsageType';
  path = '/message/DeletePriceListUsageType';
  request?: DeletePriceListUsageType;
  response?: EmptyResponseMessage;
}

export class SvcDeletePrinterType implements IEvaServiceDefinition
{
  name = 'DeletePrinterType';
  path = '/message/DeletePrinterType';
  request?: DeletePrinterType;
  response?: EmptyResponseMessage;
}

export class SvcDeleteProductBarcode implements IEvaServiceDefinition
{
  name = 'DeleteProductBarcode';
  path = '/message/DeleteProductBarcode';
  request?: DeleteProductBarcode;
  response?: EmptyResponseMessage;
}

export class SvcDeleteProductGiftCard implements IEvaServiceDefinition
{
  name = 'DeleteProductGiftCard';
  path = '/message/DeleteProductGiftCard';
  request?: DeleteProductGiftCard;
  response?: EmptyResponseMessage;
}

export class SvcDeleteProductRequirement implements IEvaServiceDefinition
{
  name = 'DeleteProductRequirement';
  path = '/message/DeleteProductRequirement';
  request?: DeleteProductRequirement;
  response?: EmptyResponseMessage;
}

export class SvcDeleteProductSearchTemplate implements IEvaServiceDefinition
{
  name = 'DeleteProductSearchTemplate';
  path = '/message/DeleteProductSearchTemplate';
  request?: DeleteProductSearchTemplate;
  response?: EmptyResponseMessage;
}

export class SvcDeleteProductSubscription implements IEvaServiceDefinition
{
  name = 'DeleteProductSubscription';
  path = '/message/DeleteProductSubscription';
  request?: DeleteProductSubscription;
  response?: EmptyResponseMessage;
}

export class SvcDeleteProductUnitOfMeasure implements IEvaServiceDefinition
{
  name = 'DeleteProductUnitOfMeasure';
  path = '/message/DeleteProductUnitOfMeasure';
  request?: DeleteProductUnitOfMeasure;
  response?: EmptyResponseMessage;
}

export class SvcDeleteRefundCorrectionReason implements IEvaServiceDefinition
{
  name = 'DeleteRefundCorrectionReason';
  path = '/message/DeleteRefundCorrectionReason';
  request?: DeleteRefundCorrectionReason;
  response?: EmptyResponseMessage;
}

export class SvcDeleteResendReason implements IEvaServiceDefinition
{
  name = 'DeleteResendReason';
  path = '/message/DeleteResendReason';
  request?: DeleteResendReason;
  response?: EmptyResponseMessage;
}

export class SvcDeleteReturnReason implements IEvaServiceDefinition
{
  name = 'DeleteReturnReason';
  path = '/message/DeleteReturnReason';
  request?: DeleteReturnReason;
  response?: EmptyResponseMessage;
}

export class SvcDeleteRole implements IEvaServiceDefinition
{
  name = 'DeleteRole';
  path = '/message/DeleteRole';
  request?: DeleteRole;
  response?: EmptyResponseMessage;
}

export class SvcDeleteRoleSet implements IEvaServiceDefinition
{
  name = 'DeleteRoleSet';
  path = '/message/DeleteRoleSet';
  request?: DeleteRoleSet;
  response?: EmptyResponseMessage;
}

export class SvcDeleteShippingCost implements IEvaServiceDefinition
{
  name = 'DeleteShippingCost';
  path = '/message/DeleteShippingCost';
  request?: DeleteShippingCost;
  response?: EmptyResponseMessage;
}

export class SvcDeleteShippingMethod implements IEvaServiceDefinition
{
  name = 'DeleteShippingMethod';
  path = '/message/DeleteShippingMethod';
  request?: DeleteShippingMethod;
  response?: EmptyResponseMessage;
}

export class SvcDeleteShippingMethodTransportationTime implements IEvaServiceDefinition
{
  name = 'DeleteShippingMethodTransportationTime';
  path = '/message/DeleteShippingMethodTransportationTime';
  request?: DeleteShippingMethodTransportationTime;
  response?: EmptyResponseMessage;
}

export class SvcDeleteShippingRestriction implements IEvaServiceDefinition
{
  name = 'DeleteShippingRestriction';
  path = '/message/DeleteShippingRestriction';
  request?: DeleteShippingRestriction;
  response?: EmptyResponseMessage;
}

export class SvcDeleteStation implements IEvaServiceDefinition
{
  name = 'DeleteStation';
  path = '/message/DeleteStation';
  request?: DeleteStation;
  response?: DeleteStationResponse;
}

export class SvcDeleteStockAllocationRule implements IEvaServiceDefinition
{
  name = 'DeleteStockAllocationRule';
  path = '/message/DeleteStockAllocationRule';
  request?: DeleteStockAllocationRule;
  response?: EmptyResponseMessage;
}

export class SvcDeleteStockMutationReason implements IEvaServiceDefinition
{
  name = 'DeleteStockMutationReason';
  path = '/message/DeleteStockMutationReason';
  request?: DeleteStockMutationReason;
  response?: EmptyResponseMessage;
}

export class SvcDeleteSubscription implements IEvaServiceDefinition
{
  name = 'DeleteSubscription';
  path = '/message/DeleteSubscription';
  request?: DeleteSubscription;
  response?: EmptyResponseMessage;
}

export class SvcDeleteSubscriptionOrganizationUnitSet implements IEvaServiceDefinition
{
  name = 'DeleteSubscriptionOrganizationUnitSet';
  path = '/message/DeleteSubscriptionOrganizationUnitSet';
  request?: DeleteSubscriptionOrganizationUnitSet;
  response?: EmptyResponseMessage;
}

export class SvcDeleteSupplierProduct implements IEvaServiceDefinition
{
  name = 'DeleteSupplierProduct';
  path = '/message/DeleteSupplierProduct';
  request?: DeleteSupplierProduct;
  response?: EmptyResponseMessage;
}

export class SvcDeleteSurvey implements IEvaServiceDefinition
{
  name = 'DeleteSurvey';
  path = '/message/DeleteSurvey';
  request?: DeleteSurvey;
  response?: EmptyResponseMessage;
}

export class SvcDeleteSurveyCategory implements IEvaServiceDefinition
{
  name = 'DeleteSurveyCategory';
  path = '/message/DeleteSurveyCategory';
  request?: DeleteSurveyCategory;
  response?: EmptyResponseMessage;
}

export class SvcDeleteSurveyQuestion implements IEvaServiceDefinition
{
  name = 'DeleteSurveyQuestion';
  path = '/message/DeleteSurveyQuestion';
  request?: DeleteSurveyQuestion;
  response?: EmptyResponseMessage;
}

export class SvcDeleteSurveyQuestionRoute implements IEvaServiceDefinition
{
  name = 'DeleteSurveyQuestionRoute';
  path = '/message/DeleteSurveyQuestionRoute';
  request?: DeleteSurveyQuestionRoute;
  response?: EmptyResponseMessage;
}

export class SvcDeleteUnitOfMeasure implements IEvaServiceDefinition
{
  name = 'DeleteUnitOfMeasure';
  path = '/message/DeleteUnitOfMeasure';
  request?: DeleteUnitOfMeasure;
  response?: EmptyResponseMessage;
}

export class SvcDeleteUnitPriceCorrectionReason implements IEvaServiceDefinition
{
  name = 'DeleteUnitPriceCorrectionReason';
  path = '/message/DeleteUnitPriceCorrectionReason';
  request?: DeleteUnitPriceCorrectionReason;
  response?: EmptyResponseMessage;
}

export class SvcDeleteUnprocessedPaymentSettlementFile implements IEvaServiceDefinition
{
  name = 'DeleteUnprocessedPaymentSettlementFile';
  path = '/message/DeleteUnprocessedPaymentSettlementFile';
  request?: DeleteUnprocessedPaymentSettlementFile;
  response?: EmptyResponseMessage;
}

export class SvcDeleteUserAgreement implements IEvaServiceDefinition
{
  name = 'DeleteUserAgreement';
  path = '/message/DeleteUserAgreement';
  request?: DeleteUserAgreement;
  response?: EmptyResponseMessage;
}

export class SvcDeleteUserBoughtProductDetail implements IEvaServiceDefinition
{
  name = 'DeleteUserBoughtProductDetail';
  path = '/message/DeleteUserBoughtProductDetail';
  request?: DeleteUserBoughtProductDetail;
  response?: EmptyResponseMessage;
}

export class SvcDeleteUserOrigin implements IEvaServiceDefinition
{
  name = 'DeleteUserOrigin';
  path = '/message/DeleteUserOrigin';
  request?: DeleteUserOrigin;
  response?: EmptyResponseMessage;
}

export class SvcDeleteUserRequirement implements IEvaServiceDefinition
{
  name = 'DeleteUserRequirement';
  path = '/message/DeleteUserRequirement';
  request?: DeleteUserRequirement;
  response?: EmptyResponseMessage;
}

export class SvcDeleteUserRequirementSet implements IEvaServiceDefinition
{
  name = 'DeleteUserRequirementSet';
  path = '/message/DeleteUserRequirementSet';
  request?: DeleteUserRequirementSet;
  response?: EmptyResponseMessage;
}

export class SvcDeleteVisibilityGroup implements IEvaServiceDefinition
{
  name = 'DeleteVisibilityGroup';
  path = '/message/DeleteVisibilityGroup';
  request?: DeleteVisibilityGroup;
  response?: EmptyResponseMessage;
}

export class SvcDeleteVisibilityGroupConfiguration implements IEvaServiceDefinition
{
  name = 'DeleteVisibilityGroupConfiguration';
  path = '/message/DeleteVisibilityGroupConfiguration';
  request?: DeleteVisibilityGroupConfiguration;
  response?: EmptyResponseMessage;
}

export class SvcDeleteWidget implements IEvaServiceDefinition
{
  name = 'DeleteWidget';
  path = '/message/DeleteWidget';
  request?: DeleteWidget;
  response?: EmptyResponseMessage;
}

export class SvcDeleteWidgetConfiguration implements IEvaServiceDefinition
{
  name = 'DeleteWidgetConfiguration';
  path = '/message/DeleteWidgetConfiguration';
  request?: DeleteWidgetConfiguration;
  response?: EmptyResponseMessage;
}

export class SvcDepositLoyaltyPoints implements IEvaServiceDefinition
{
  name = 'DepositLoyaltyPoints';
  path = '/message/DepositLoyaltyPoints';
  request?: DepositLoyaltyPoints;
  response?: DepositLoyaltyPointsResponse;
}

export class SvcDetachFunctionalitiesFromRole implements IEvaServiceDefinition
{
  name = 'DetachFunctionalitiesFromRole';
  path = '/message/DetachFunctionalitiesFromRole';
  request?: DetachFunctionalitiesFromRole;
  response?: EmptyResponseMessage;
}

export class SvcDetachLoyaltyProgramFromOrder implements IEvaServiceDefinition
{
  name = 'DetachLoyaltyProgramFromOrder';
  path = '/message/DetachLoyaltyProgramFromOrder';
  request?: DetachLoyaltyProgramFromOrder;
  response?: EmptyResponseMessage;
}

export class SvcDisableDiscounts implements IEvaServiceDefinition
{
  name = 'DisableDiscounts';
  path = '/message/DisableDiscounts';
  request?: DisableDiscounts;
  response?: EmptyResponseMessage;
}

export class SvcDisablePointAwardingRule implements IEvaServiceDefinition
{
  name = 'DisablePointAwardingRule';
  path = '/message/DisablePointAwardingRule';
  request?: DisablePointAwardingRule;
  response?: EmptyResponseMessage;
}

export class SvcDownloadAssortmentProducts implements IEvaServiceDefinition
{
  name = 'DownloadAssortmentProducts';
  path = '/message/DownloadAssortmentProducts';
  request?: DownloadAssortmentProducts;
  response?: ResourceResponseMessage;
}

export class SvcDownloadAssortmentProducts_Async implements IEvaServiceDefinition
{
  name = 'DownloadAssortmentProducts_Async';
  path = '/async-message/DownloadAssortmentProducts';
  request?: DownloadAssortmentProducts_Async;
  response?: DownloadAssortmentProducts_AsyncResponse;
}

export class SvcDownloadAssortmentProducts_AsyncResult implements IEvaServiceDefinition
{
  name = 'DownloadAssortmentProducts_AsyncResult';
  path = '/async-result/DownloadAssortmentProducts';
  request?: DownloadAssortmentProducts_AsyncResult;
  response?: ResourceResponseMessage;
}

export class SvcDownloadCouponExcel_Async implements IEvaServiceDefinition
{
  name = 'DownloadCouponExcel_Async';
  path = '/async-message/DownloadCouponExcel';
  request?: DownloadCouponExcel_Async;
  response?: DownloadCouponExcel_AsyncResponse;
}

export class SvcDownloadCouponExcel_AsyncResult implements IEvaServiceDefinition
{
  name = 'DownloadCouponExcel_AsyncResult';
  path = '/async-result/DownloadCouponExcel';
  request?: DownloadCouponExcel_AsyncResult;
  response?: DownloadCouponExcelResponse;
}

export class SvcDownloadCouponExcelTemplate implements IEvaServiceDefinition
{
  name = 'DownloadCouponExcelTemplate';
  path = '/message/DownloadCouponExcelTemplate';
  request?: DownloadCouponExcelTemplate;
  response?: ResourceWithBlobIDResponseMessage;
}

export class SvcDownloadCustomersSample implements IEvaServiceDefinition
{
  name = 'DownloadCustomersSample';
  path = '/message/DownloadCustomersSample';
  request?: DownloadCustomersSample;
  response?: ResourceResponseMessage;
}

export class SvcDownloadEmployeesSample implements IEvaServiceDefinition
{
  name = 'DownloadEmployeesSample';
  path = '/message/DownloadEmployeesSample';
  request?: DownloadEmployeesSample;
  response?: ResourceResponseMessage;
}

export class SvcDownloadFraudItems implements IEvaServiceDefinition
{
  name = 'DownloadFraudItems';
  path = '/message/DownloadFraudItems';
  request?: DownloadFraudItems;
  response?: ResourceResponseMessage;
}

export class SvcDownloadInitialInventorySample implements IEvaServiceDefinition
{
  name = 'DownloadInitialInventorySample';
  path = '/message/DownloadInitialInventorySample';
  request?: DownloadInitialInventorySample;
  response?: ResourceResponseMessage;
}

export class SvcDownloadPaymentSettlementFileResult implements IEvaServiceDefinition
{
  name = 'DownloadPaymentSettlementFileResult';
  path = '/message/DownloadPaymentSettlementFileResult';
  request?: DownloadPaymentSettlementFileResult;
  response?: ResourceResponseMessage;
}

export class SvcDownloadPriceListManualInputAdjustments implements IEvaServiceDefinition
{
  name = 'DownloadPriceListManualInputAdjustments';
  path = '/message/DownloadPriceListManualInputAdjustments';
  request?: DownloadPriceListManualInputAdjustments;
  response?: ResourceResponseMessage;
}

export class SvcDownloadPriceListManualInputAdjustmentsSample implements IEvaServiceDefinition
{
  name = 'DownloadPriceListManualInputAdjustmentsSample';
  path = '/message/DownloadPriceListManualInputAdjustmentsSample';
  request?: DownloadPriceListManualInputAdjustmentsSample;
  response?: ResourceResponseMessage;
}

export class SvcDownloadShippingRestrictions implements IEvaServiceDefinition
{
  name = 'DownloadShippingRestrictions';
  path = '/message/DownloadShippingRestrictions';
  request?: DownloadShippingRestrictions;
  response?: ResourceResponseMessage;
}

export class SvcDownloadStockAllocationRulesExcel implements IEvaServiceDefinition
{
  name = 'DownloadStockAllocationRulesExcel';
  path = '/message/DownloadStockAllocationRulesExcel';
  request?: DownloadStockAllocationRulesExcel;
  response?: ResourceResponseMessage;
}

export class SvcDownloadStockOverview_Async implements IEvaServiceDefinition
{
  name = 'DownloadStockOverview_Async';
  path = '/async-message/DownloadStockOverview';
  request?: DownloadStockOverview_Async;
  response?: DownloadStockOverview_AsyncResponse;
}

export class SvcDownloadStockOverview_AsyncResult implements IEvaServiceDefinition
{
  name = 'DownloadStockOverview_AsyncResult';
  path = '/async-result/DownloadStockOverview';
  request?: DownloadStockOverview_AsyncResult;
  response?: ResourceWithBlobIDResponseMessage;
}

export class SvcDownloadSupplierProducts implements IEvaServiceDefinition
{
  name = 'DownloadSupplierProducts';
  path = '/message/DownloadSupplierProducts';
  request?: DownloadSupplierProducts;
  response?: ResourceResponseMessage;
}

export class SvcDownloadSupplierProductsBarcodes implements IEvaServiceDefinition
{
  name = 'DownloadSupplierProductsBarcodes';
  path = '/message/DownloadSupplierProductsBarcodes';
  request?: DownloadSupplierProductsBarcodes;
  response?: ResourceResponseMessage;
}

export class SvcDownloadSupplierProductsBarcodesSample implements IEvaServiceDefinition
{
  name = 'DownloadSupplierProductsBarcodesSample';
  path = '/message/DownloadSupplierProductsBarcodesSample';
  request?: DownloadSupplierProductsBarcodesSample;
  response?: ResourceResponseMessage;
}

export class SvcDownloadSupplierProductsPricing implements IEvaServiceDefinition
{
  name = 'DownloadSupplierProductsPricing';
  path = '/message/DownloadSupplierProductsPricing';
  request?: DownloadSupplierProductsPricing;
  response?: ResourceResponseMessage;
}

export class SvcDownloadSupplierProductsPricingSample implements IEvaServiceDefinition
{
  name = 'DownloadSupplierProductsPricingSample';
  path = '/message/DownloadSupplierProductsPricingSample';
  request?: DownloadSupplierProductsPricingSample;
  response?: ResourceResponseMessage;
}

export class SvcDownloadSupplierProductsSample implements IEvaServiceDefinition
{
  name = 'DownloadSupplierProductsSample';
  path = '/message/DownloadSupplierProductsSample';
  request?: DownloadSupplierProductsSample;
  response?: ResourceResponseMessage;
}

export class SvcDownloadSupplierProductsStock implements IEvaServiceDefinition
{
  name = 'DownloadSupplierProductsStock';
  path = '/message/DownloadSupplierProductsStock';
  request?: DownloadSupplierProductsStock;
  response?: ResourceResponseMessage;
}

export class SvcDownloadSupplierProductsStockSample implements IEvaServiceDefinition
{
  name = 'DownloadSupplierProductsStockSample';
  path = '/message/DownloadSupplierProductsStockSample';
  request?: DownloadSupplierProductsStockSample;
  response?: ResourceResponseMessage;
}

export class SvcDownloadTaxCodesExcel implements IEvaServiceDefinition
{
  name = 'DownloadTaxCodesExcel';
  path = '/message/DownloadTaxCodesExcel';
  request?: DownloadTaxCodesExcel;
  response?: ResourceResponseMessage;
}

export class SvcDownloadTaxRateExcel implements IEvaServiceDefinition
{
  name = 'DownloadTaxRateExcel';
  path = '/message/DownloadTaxRateExcel';
  request?: DownloadTaxRateExcel;
  response?: ResourceResponseMessage;
}

export class SvcDuplicateDiscount implements IEvaServiceDefinition
{
  name = 'DuplicateDiscount';
  path = '/message/DuplicateDiscount';
  request?: DuplicateDiscount;
  response?: DuplicateDiscountResponse;
}

export class SvcDuplicateDiscountTemplate implements IEvaServiceDefinition
{
  name = 'DuplicateDiscountTemplate';
  path = '/message/DuplicateDiscountTemplate';
  request?: DuplicateDiscountTemplate;
  response?: CreateDiscountTemplateResponse;
}

export class SvcDuplicateMessageTemplate implements IEvaServiceDefinition
{
  name = 'DuplicateMessageTemplate';
  path = '/message/DuplicateMessageTemplate';
  request?: DuplicateMessageTemplate;
  response?: DuplicateMessageTemplateResponse;
}

export class SvcDuplicateUserRequirementSet implements IEvaServiceDefinition
{
  name = 'DuplicateUserRequirementSet';
  path = '/message/DuplicateUserRequirementSet';
  request?: DuplicateUserRequirementSet;
  response?: DuplicateUserRequirementSetResponse;
}

export class SvcEnableDiscounts implements IEvaServiceDefinition
{
  name = 'EnableDiscounts';
  path = '/message/EnableDiscounts';
  request?: EnableDiscounts;
  response?: EmptyResponseMessage;
}

export class SvcEnablePointAwardingRule implements IEvaServiceDefinition
{
  name = 'EnablePointAwardingRule';
  path = '/message/EnablePointAwardingRule';
  request?: EnablePointAwardingRule;
  response?: EmptyResponseMessage;
}

export class SvcExportEmployeeRoles implements IEvaServiceDefinition
{
  name = 'ExportEmployeeRoles';
  path = '/message/ExportEmployeeRoles';
  request?: ExportEmployeeRoles;
  response?: ResourceWithBlobIDResponseMessage;
}

export class SvcExportGeneralLedgerSummaryToExcel implements IEvaServiceDefinition
{
  name = 'ExportGeneralLedgerSummaryToExcel';
  path = '/message/ExportGeneralLedgerSummaryToExcel';
  request?: ExportGeneralLedgerSummaryToExcel;
  response?: EmptyResponseMessage;
}

export class SvcExportProductCostPriceLedgerSummary implements IEvaServiceDefinition
{
  name = 'ExportProductCostPriceLedgerSummary';
  path = '/message/ExportProductCostPriceLedgerSummary';
  request?: ExportProductCostPriceLedgerSummary;
  response?: EmptyResponseMessage;
}

export class SvcExportSettings implements IEvaServiceDefinition
{
  name = 'ExportSettings';
  path = '/message/ExportSettings';
  request?: ExportSettings;
  response?: ResourceResponseMessage;
}

export class SvcExportStockMutationSummary implements IEvaServiceDefinition
{
  name = 'ExportStockMutationSummary';
  path = '/message/ExportStockMutationSummary';
  request?: ExportStockMutationSummary;
  response?: EmptyResponseMessage;
}

export class SvcExportUnshippedPurchaseOrdersToExcel implements IEvaServiceDefinition
{
  name = 'ExportUnshippedPurchaseOrdersToExcel';
  path = '/message/ExportUnshippedPurchaseOrdersToExcel';
  request?: ExportUnshippedPurchaseOrdersToExcel;
  response?: ExportUnshippedPurchaseOrdersToExcelResponse;
}

export class SvcExportUserSubscriptions implements IEvaServiceDefinition
{
  name = 'ExportUserSubscriptions';
  path = '/message/ExportUserSubscriptions';
  request?: ExportUserSubscriptions;
  response?: ResourceResponseMessage;
}

export class SvcGenerateDiscountCoupons implements IEvaServiceDefinition
{
  name = 'GenerateDiscountCoupons';
  path = '/message/GenerateDiscountCoupons';
  request?: GenerateDiscountCoupons;
  response?: EmptyResponseMessage;
}

export class SvcGenerateDiscountCoupons_Async implements IEvaServiceDefinition
{
  name = 'GenerateDiscountCoupons_Async';
  path = '/async-message/GenerateDiscountCoupons';
  request?: GenerateDiscountCoupons_Async;
  response?: GenerateDiscountCoupons_AsyncResponse;
}

export class SvcGenerateDiscountCoupons_AsyncResult implements IEvaServiceDefinition
{
  name = 'GenerateDiscountCoupons_AsyncResult';
  path = '/async-result/GenerateDiscountCoupons';
  request?: GenerateDiscountCoupons_AsyncResult;
  response?: EmptyResponseMessage;
}

export class SvcGenerateIdentificationCodeForEmployee implements IEvaServiceDefinition
{
  name = 'GenerateIdentificationCodeForEmployee';
  path = '/message/GenerateIdentificationCodeForEmployee';
  request?: GenerateIdentificationCodeForEmployee;
  response?: GenerateIdentificationCodeForEmployeeResponse;
}

export class SvcGenerateIdentificationPinForEmployee implements IEvaServiceDefinition
{
  name = 'GenerateIdentificationPinForEmployee';
  path = '/message/GenerateIdentificationPinForEmployee';
  request?: GenerateIdentificationPinForEmployee;
  response?: GenerateIdentificationPinForEmployeeResponse;
}

export class SvcGeneratePurchaseOrderExcelSample implements IEvaServiceDefinition
{
  name = 'GeneratePurchaseOrderExcelSample';
  path = '/message/GeneratePurchaseOrderExcelSample';
  request?: GeneratePurchaseOrderExcelSample;
  response?: ResourceResponseMessage;
}

export class SvcGenerateSalesOrderExcelSample implements IEvaServiceDefinition
{
  name = 'GenerateSalesOrderExcelSample';
  path = '/message/GenerateSalesOrderExcelSample';
  request?: GenerateSalesOrderExcelSample;
  response?: ResourceResponseMessage;
}

export class SvcGetAccount implements IEvaServiceDefinition
{
  name = 'GetAccount';
  path = '/message/GetAccount';
  request?: GetAccount;
  response?: GetAccountResponse;
}

export class SvcGetAppointmentCancellationReason implements IEvaServiceDefinition
{
  name = 'GetAppointmentCancellationReason';
  path = '/message/GetAppointmentCancellationReason';
  request?: GetAppointmentCancellationReason;
  response?: GetAppointmentCancellationReasonResponse;
}

export class SvcGetAppSettingsAutocompleteInfo implements IEvaServiceDefinition
{
  name = 'GetAppSettingsAutocompleteInfo';
  path = '/message/GetAppSettingsAutocompleteInfo';
  request?: GetAppSettingsAutocompleteInfo;
  response?: GetAppSettingsAutocompleteInfoResponse;
}

export class SvcGetAppSettingsForOrganizationUnit implements IEvaServiceDefinition
{
  name = 'GetAppSettingsForOrganizationUnit';
  path = '/message/GetAppSettingsForOrganizationUnit';
  request?: GetAppSettingsForOrganizationUnit;
  response?: GetAppSettingsForOrganizationUnitResponse;
}

export class SvcGetAssortmentByID implements IEvaServiceDefinition
{
  name = 'GetAssortmentByID';
  path = '/message/GetAssortmentByID';
  request?: GetAssortmentByID;
  response?: GetAssortmentByIDResponse;
}

export class SvcGetAssortmentOrganizationUnits implements IEvaServiceDefinition
{
  name = 'GetAssortmentOrganizationUnits';
  path = '/message/GetAssortmentOrganizationUnits';
  request?: GetAssortmentOrganizationUnits;
  response?: GetAssortmentOrganizationUnitsResponse;
}

export class SvcGetAssortmentProductTree implements IEvaServiceDefinition
{
  name = 'GetAssortmentProductTree';
  path = '/message/GetAssortmentProductTree';
  request?: GetAssortmentProductTree;
  response?: GetAssortmentProductTreeResponse;
}

export class SvcGetAssortmentRootProducts implements IEvaServiceDefinition
{
  name = 'GetAssortmentRootProducts';
  path = '/message/GetAssortmentRootProducts';
  request?: GetAssortmentRootProducts;
  response?: GetAssortmentRootProductsResponse;
}

export class SvcGetAuditingSettings implements IEvaServiceDefinition
{
  name = 'GetAuditingSettings';
  path = '/message/GetAuditingSettings';
  request?: GetAuditingSettings;
  response?: GetAuditingSettingsResponse;
}

export class SvcGetAvailableCompanyRequirementProperties implements IEvaServiceDefinition
{
  name = 'GetAvailableCompanyRequirementProperties';
  path = '/message/GetAvailableCompanyRequirementProperties';
  request?: GetAvailableCompanyRequirementProperties;
  response?: GetAvailableCompanyRequirementPropertiesResponse;
}

export class SvcGetAvailablePaymentSettlementFileHandlers implements IEvaServiceDefinition
{
  name = 'GetAvailablePaymentSettlementFileHandlers';
  path = '/message/GetAvailablePaymentSettlementFileHandlers';
  request?: GetAvailablePaymentSettlementFileHandlers;
  response?: GetAvailablePaymentSettlementFileHandlersResponse;
}

export class SvcGetAvailableRoles implements IEvaServiceDefinition
{
  name = 'GetAvailableRoles';
  path = '/message/GetAvailableRoles';
  request?: GetAvailableRoles;
  response?: GetAvailableRolesResponse;
}

export class SvcGetAvailableSettings implements IEvaServiceDefinition
{
  name = 'GetAvailableSettings';
  path = '/message/GetAvailableSettings';
  request?: GetAvailableSettings;
  response?: GetAvailableSettingsResponse;
}

export class SvcGetAvailableShippingMethodHandlers implements IEvaServiceDefinition
{
  name = 'GetAvailableShippingMethodHandlers';
  path = '/message/GetAvailableShippingMethodHandlers';
  request?: GetAvailableShippingMethodHandlers;
  response?: GetAvailableShippingMethodHandlersResponse;
}

export class SvcGetAvailableSurveyAfterEffectTypes implements IEvaServiceDefinition
{
  name = 'GetAvailableSurveyAfterEffectTypes';
  path = '/message/GetAvailableSurveyAfterEffectTypes';
  request?: GetAvailableSurveyAfterEffectTypes;
  response?: GetAvailableSurveyAfterEffectTypesResponse;
}

export class SvcGetAvailableSurveyDistributionHandlers implements IEvaServiceDefinition
{
  name = 'GetAvailableSurveyDistributionHandlers';
  path = '/message/GetAvailableSurveyDistributionHandlers';
  request?: GetAvailableSurveyDistributionHandlers;
  response?: GetAvailableSurveyDistributionHandlersResponse;
}

export class SvcGetAvailableSurveys implements IEvaServiceDefinition
{
  name = 'GetAvailableSurveys';
  path = '/message/GetAvailableSurveys';
  request?: GetAvailableSurveys;
  response?: GetAvailableSurveysResponse;
}

export class SvcGetAvailableSurveysForContext implements IEvaServiceDefinition
{
  name = 'GetAvailableSurveysForContext';
  path = '/message/GetAvailableSurveysForContext';
  request?: GetAvailableSurveysForContext;
  response?: GetAvailableSurveysResponse;
}

export class SvcGetAvailableSurveyTriggers implements IEvaServiceDefinition
{
  name = 'GetAvailableSurveyTriggers';
  path = '/message/GetAvailableSurveyTriggers';
  request?: GetAvailableSurveyTriggers;
  response?: GetAvailableSurveyTriggersResponse;
}

export class SvcGetAvailableUserRequirementsProperties implements IEvaServiceDefinition
{
  name = 'GetAvailableUserRequirementsProperties';
  path = '/message/GetAvailableUserRequirementsProperties';
  request?: GetAvailableUserRequirementsProperties;
  response?: GetAvailableUserRequirementsPropertiesResponse;
}

export class SvcGetAvailableWidgetTypes implements IEvaServiceDefinition
{
  name = 'GetAvailableWidgetTypes';
  path = '/message/GetAvailableWidgetTypes';
  request?: GetAvailableWidgetTypes;
  response?: GetAvailableWidgetTypesResponse;
}

export class SvcGetCarrierByID implements IEvaServiceDefinition
{
  name = 'GetCarrierByID';
  path = '/message/GetCarrierByID';
  request?: GetCarrierByID;
  response?: GetCarrierByIDResponse;
}

export class SvcGetCaseByID implements IEvaServiceDefinition
{
  name = 'GetCaseByID';
  path = '/message/GetCaseByID';
  request?: GetCaseByID;
  response?: GetCaseByIDResponse;
}

export class SvcGetCaseInteraction implements IEvaServiceDefinition
{
  name = 'GetCaseInteraction';
  path = '/message/GetCaseInteraction';
  request?: GetCaseInteraction;
  response?: GetCaseInteractionResponse;
}

export class SvcGetCaseStatus implements IEvaServiceDefinition
{
  name = 'GetCaseStatus';
  path = '/message/GetCaseStatus';
  request?: GetCaseStatus;
  response?: GetCaseStatusResponse;
}

export class SvcGetCaseTopic implements IEvaServiceDefinition
{
  name = 'GetCaseTopic';
  path = '/message/GetCaseTopic';
  request?: GetCaseTopic;
  response?: GetCaseTopicResponse;
}

export class SvcGetCashExpenseTypeByID implements IEvaServiceDefinition
{
  name = 'GetCashExpenseTypeByID';
  path = '/message/GetCashExpenseTypeByID';
  request?: GetCashExpenseTypeByID;
  response?: GetCashExpenseTypeByIDResponse;
}

export class SvcGetCashHandlerByID implements IEvaServiceDefinition
{
  name = 'GetCashHandlerByID';
  path = '/message/GetCashHandlerByID';
  request?: GetCashHandlerByID;
  response?: GetCashHandlerByIDResponse;
}

export class SvcGetCDNConfiguration implements IEvaServiceDefinition
{
  name = 'GetCDNConfiguration';
  path = '/message/GetCDNConfiguration';
  request?: GetCDNConfiguration;
  response?: GetCDNConfigurationResponse;
}

export class SvcGetCFDConfiguration implements IEvaServiceDefinition
{
  name = 'GetCFDConfiguration';
  path = '/message/GetCFDConfiguration';
  request?: GetCFDConfiguration;
  response?: GetCFDConfigurationResponse;
}

export class SvcGetCheckoutOptionHandlers implements IEvaServiceDefinition
{
  name = 'GetCheckoutOptionHandlers';
  path = '/message/GetCheckoutOptionHandlers';
  request?: GetCheckoutOptionHandlers;
  response?: GetCheckoutOptionHandlersResponse;
}

export class SvcGetClientApplicationByID implements IEvaServiceDefinition
{
  name = 'GetClientApplicationByID';
  path = '/message/GetClientApplicationByID';
  request?: GetClientApplicationByID;
  response?: GetClientApplicationByIDResponse;
}

export class SvcGetCompany implements IEvaServiceDefinition
{
  name = 'GetCompany';
  path = '/message/GetCompany';
  request?: GetCompany;
  response?: GetCompanyResponse;
}

export class SvcGetCompanyRequirements implements IEvaServiceDefinition
{
  name = 'GetCompanyRequirements';
  path = '/message/GetCompanyRequirements';
  request?: GetCompanyRequirements;
  response?: GetCompanyRequirementsResponse;
}

export class SvcGetConfigurationQrForDevice implements IEvaServiceDefinition
{
  name = 'GetConfigurationQrForDevice';
  path = '/message/GetConfigurationQrForDevice';
  request?: GetConfigurationQrForDevice;
  response?: GetConfigurationQrForDeviceResponse;
}

export class SvcGetCostPriceCalculation implements IEvaServiceDefinition
{
  name = 'GetCostPriceCalculation';
  path = '/message/GetCostPriceCalculation';
  request?: GetCostPriceCalculation;
  response?: GetCostPriceCalculationResponse;
}

export class SvcGetCostPriceCalculations implements IEvaServiceDefinition
{
  name = 'GetCostPriceCalculations';
  path = '/message/GetCostPriceCalculations';
  request?: GetCostPriceCalculations;
  response?: GetCostPriceCalculationsResponse;
}

export class SvcGetCouponByToken implements IEvaServiceDefinition
{
  name = 'GetCouponByToken';
  path = '/message/GetCouponByToken';
  request?: GetCouponByToken;
  response?: GetCouponByTokenResponse;
}

export class SvcGetCustomFieldByID implements IEvaServiceDefinition
{
  name = 'GetCustomFieldByID';
  path = '/message/GetCustomFieldByID';
  request?: GetCustomFieldByID;
  response?: GetCustomFieldByIDResponse;
}

export class SvcGetCustomFieldMetadata implements IEvaServiceDefinition
{
  name = 'GetCustomFieldMetadata';
  path = '/message/GetCustomFieldMetadata';
  request?: GetCustomFieldMetadata;
  response?: GetCustomFieldMetadataResponse;
}

export class SvcGetCustomFields implements IEvaServiceDefinition
{
  name = 'GetCustomFields';
  path = '/message/GetCustomFields';
  request?: GetCustomFields;
  response?: GetCustomFieldsResponse;
}

export class SvcGetCustomFieldTypes implements IEvaServiceDefinition
{
  name = 'GetCustomFieldTypes';
  path = '/message/GetCustomFieldTypes';
  request?: GetCustomFieldTypes;
  response?: GetCustomFieldTypesResponse;
}

export class SvcGetDataModelForTemplateHandler implements IEvaServiceDefinition
{
  name = 'GetDataModelForTemplateHandler';
  path = '/message/GetDataModelForTemplateHandler';
  request?: GetDataModelForTemplateHandler;
  response?: GetDataModelForTemplateHandlerResponse;
}

export class SvcGetDiscountByID implements IEvaServiceDefinition
{
  name = 'GetDiscountByID';
  path = '/message/GetDiscountByID';
  request?: GetDiscountByID;
  response?: GetDiscountByIDResponse;
}

export class SvcGetDiscountCampaignByID implements IEvaServiceDefinition
{
  name = 'GetDiscountCampaignByID';
  path = '/message/GetDiscountCampaignByID';
  request?: GetDiscountCampaignByID;
  response?: GetDiscountCampaignByIDResponse;
}

export class SvcGetDiscountCouponByID implements IEvaServiceDefinition
{
  name = 'GetDiscountCouponByID';
  path = '/message/GetDiscountCouponByID';
  request?: GetDiscountCouponByID;
  response?: GetDiscountCouponByIDResponse;
}

export class SvcGetDiscountLayerByID implements IEvaServiceDefinition
{
  name = 'GetDiscountLayerByID';
  path = '/message/GetDiscountLayerByID';
  request?: GetDiscountLayerByID;
  response?: GetDiscountLayerByIDResponse;
}

export class SvcGetDiscountTemplateByID implements IEvaServiceDefinition
{
  name = 'GetDiscountTemplateByID';
  path = '/message/GetDiscountTemplateByID';
  request?: GetDiscountTemplateByID;
  response?: GetDiscountTemplateByIDResponse;
}

export class SvcGetElevationSkipReason implements IEvaServiceDefinition
{
  name = 'GetElevationSkipReason';
  path = '/message/GetElevationSkipReason';
  request?: GetElevationSkipReason;
  response?: GetElevationSkipReasonResponse;
}

export class SvcGetEmployeeData implements IEvaServiceDefinition
{
  name = 'GetEmployeeData';
  path = '/message/GetEmployeeData';
  request?: GetEmployeeData;
  response?: GetEmployeeDataResponse;
}

export class SvcGetEndpointConfiguration implements IEvaServiceDefinition
{
  name = 'GetEndpointConfiguration';
  path = '/message/GetEndpointConfiguration';
  request?: GetEndpointConfiguration;
  response?: GetEndpointConfigurationResponse;
}

export class SvcGetEndpointConfigurations implements IEvaServiceDefinition
{
  name = 'GetEndpointConfigurations';
  path = '/message/GetEndpointConfigurations';
  request?: GetEndpointConfigurations;
  response?: GetEndpointConfigurationsResponse;
}

export class SvcGetEntityFieldValidator implements IEvaServiceDefinition
{
  name = 'GetEntityFieldValidator';
  path = '/message/GetEntityFieldValidator';
  request?: GetEntityFieldValidator;
  response?: GetEntityFieldValidatorResponse;
}

export class SvcGetEvent implements IEvaServiceDefinition
{
  name = 'GetEvent';
  path = '/message/GetEvent';
  request?: GetEvent;
  response?: GetEventResponse;
}

export class SvcGetEventLocation implements IEvaServiceDefinition
{
  name = 'GetEventLocation';
  path = '/message/GetEventLocation';
  request?: GetEventLocation;
  response?: GetEventLocationResponse;
}

export class SvcGetEventLocationOpeningHours implements IEvaServiceDefinition
{
  name = 'GetEventLocationOpeningHours';
  path = '/message/GetEventLocationOpeningHours';
  request?: GetEventLocationOpeningHours;
  response?: GetEventLocationOpeningHoursResponse;
}

export class SvcGetEventType implements IEvaServiceDefinition
{
  name = 'GetEventType';
  path = '/message/GetEventType';
  request?: GetEventType;
  response?: GetEventTypeResponse;
}

export class SvcGetFieldValidatorsForEntity implements IEvaServiceDefinition
{
  name = 'GetFieldValidatorsForEntity';
  path = '/message/GetFieldValidatorsForEntity';
  request?: GetFieldValidatorsForEntity;
  response?: GetFieldValidatorsForEntityResponse;
}

export class SvcGetFlattenedFunctionalityByUserID implements IEvaServiceDefinition
{
  name = 'GetFlattenedFunctionalityByUserID';
  path = '/message/GetFlattenedFunctionalityByUserID';
  request?: GetFlattenedFunctionalityByUserID;
  response?: GetFlattenedFunctionalityByUserIDResponse;
}

export class SvcGetFraudItem implements IEvaServiceDefinition
{
  name = 'GetFraudItem';
  path = '/message/GetFraudItem';
  request?: GetFraudItem;
  response?: GetFraudItemResponse;
}

export class SvcGetFunctionalityCategories implements IEvaServiceDefinition
{
  name = 'GetFunctionalityCategories';
  path = '/message/GetFunctionalityCategories';
  request?: GetFunctionalityCategories;
  response?: GetFunctionalityCategoriesResponse;
}

export class SvcGetGiftCardConfiguration implements IEvaServiceDefinition
{
  name = 'GetGiftCardConfiguration';
  path = '/message/GetGiftCardConfiguration';
  request?: GetGiftCardConfiguration;
  response?: GetGiftCardConfigurationResponse;
}

export class SvcGetGiftCardHandlers implements IEvaServiceDefinition
{
  name = 'GetGiftCardHandlers';
  path = '/message/GetGiftCardHandlers';
  request?: GetGiftCardHandlers;
  response?: GetGiftCardHandlersResponse;
}

export class SvcGetIpFilterList implements IEvaServiceDefinition
{
  name = 'GetIpFilterList';
  path = '/message/GetIpFilterList';
  request?: GetIpFilterList;
  response?: GetIpFilterListResponse;
}

export class SvcGetLanguages implements IEvaServiceDefinition
{
  name = 'GetLanguages';
  path = '/message/GetLanguages';
  request?: GetLanguages;
  response?: GetLanguagesResponse;
}

export class SvcGetLayerGroupedDiscountsByQuery implements IEvaServiceDefinition
{
  name = 'GetLayerGroupedDiscountsByQuery';
  path = '/message/GetLayerGroupedDiscountsByQuery';
  request?: GetLayerGroupedDiscountsByQuery;
  response?: GetLayerGroupedDiscountsByQueryResponse;
}

export class SvcGetLedgerClasses implements IEvaServiceDefinition
{
  name = 'GetLedgerClasses';
  path = '/message/GetLedgerClasses';
  request?: GetLedgerClasses;
  response?: GetLedgerClassesResponse;
}

export class SvcGetLoyaltyPointPolicies implements IEvaServiceDefinition
{
  name = 'GetLoyaltyPointPolicies';
  path = '/message/GetLoyaltyPointPolicies';
  request?: GetLoyaltyPointPolicies;
  response?: GetLoyaltyPointPoliciesResponse;
}

export class SvcGetLoyaltyProgram implements IEvaServiceDefinition
{
  name = 'GetLoyaltyProgram';
  path = '/message/GetLoyaltyProgram';
  request?: GetLoyaltyProgram;
  response?: GetLoyaltyProgramResponse;
}

export class SvcGetLoyaltyProgramBadge implements IEvaServiceDefinition
{
  name = 'GetLoyaltyProgramBadge';
  path = '/message/GetLoyaltyProgramBadge';
  request?: GetLoyaltyProgramBadge;
  response?: GetLoyaltyProgramBadgeResponse;
}

export class SvcGetLoyaltyProgramBadgeCategory implements IEvaServiceDefinition
{
  name = 'GetLoyaltyProgramBadgeCategory';
  path = '/message/GetLoyaltyProgramBadgeCategory';
  request?: GetLoyaltyProgramBadgeCategory;
  response?: GetLoyaltyProgramBadgeCategoryResponse;
}

export class SvcGetLoyaltyProgramBadges implements IEvaServiceDefinition
{
  name = 'GetLoyaltyProgramBadges';
  path = '/message/GetLoyaltyProgramBadges';
  request?: GetLoyaltyProgramBadges;
  response?: GetLoyaltyProgramBadgesResponse;
}

export class SvcGetLoyaltyProgramBenefitTypes implements IEvaServiceDefinition
{
  name = 'GetLoyaltyProgramBenefitTypes';
  path = '/message/GetLoyaltyProgramBenefitTypes';
  request?: GetLoyaltyProgramBenefitTypes;
  response?: GetLoyaltyProgramBenefitTypesResponse;
}

export class SvcGetLoyaltyProgramCondition implements IEvaServiceDefinition
{
  name = 'GetLoyaltyProgramCondition';
  path = '/message/GetLoyaltyProgramCondition';
  request?: GetLoyaltyProgramCondition;
  response?: GetLoyaltyProgramConditionResponse;
}

export class SvcGetLoyaltyProgramGroup implements IEvaServiceDefinition
{
  name = 'GetLoyaltyProgramGroup';
  path = '/message/GetLoyaltyProgramGroup';
  request?: GetLoyaltyProgramGroup;
  response?: GetLoyaltyProgramGroupResponse;
}

export class SvcGetLoyaltyProgramHandlers implements IEvaServiceDefinition
{
  name = 'GetLoyaltyProgramHandlers';
  path = '/message/GetLoyaltyProgramHandlers';
  request?: GetLoyaltyProgramHandlers;
  response?: GetLoyaltyProgramHandlersResponse;
}

export class SvcGetLoyaltyProgramPass implements IEvaServiceDefinition
{
  name = 'GetLoyaltyProgramPass';
  path = '/message/GetLoyaltyProgramPass';
  request?: GetLoyaltyProgramPass;
  response?: GetLoyaltyProgramPassResponse;
}

export class SvcGetLoyaltyProgramPaymentType implements IEvaServiceDefinition
{
  name = 'GetLoyaltyProgramPaymentType';
  path = '/message/GetLoyaltyProgramPaymentType';
  request?: GetLoyaltyProgramPaymentType;
  response?: GetLoyaltyProgramPaymentTypeResponse;
}

export class SvcGetLoyaltyProgramProductLimitation implements IEvaServiceDefinition
{
  name = 'GetLoyaltyProgramProductLimitation';
  path = '/message/GetLoyaltyProgramProductLimitation';
  request?: GetLoyaltyProgramProductLimitation;
  response?: GetLoyaltyProgramProductLimitationResponse;
}

export class SvcGetLoyaltyProgramTier implements IEvaServiceDefinition
{
  name = 'GetLoyaltyProgramTier';
  path = '/message/GetLoyaltyProgramTier';
  request?: GetLoyaltyProgramTier;
  response?: GetLoyaltyProgramTierResponse;
}

export class SvcGetLoyaltyProgramTiers implements IEvaServiceDefinition
{
  name = 'GetLoyaltyProgramTiers';
  path = '/message/GetLoyaltyProgramTiers';
  request?: GetLoyaltyProgramTiers;
  response?: GetLoyaltyProgramTiersResponse;
}

export class SvcGetLoyaltyProgramUserUsage implements IEvaServiceDefinition
{
  name = 'GetLoyaltyProgramUserUsage';
  path = '/message/GetLoyaltyProgramUserUsage';
  request?: GetLoyaltyProgramUserUsage;
  response?: GetLoyaltyProgramUserUsageResponse;
}

export class SvcGetMessageTemplateByID implements IEvaServiceDefinition
{
  name = 'GetMessageTemplateByID';
  path = '/message/GetMessageTemplateByID';
  request?: GetMessageTemplateByID;
  response?: GetMessageTemplateByIDResponse;
}

export class SvcGetMessageTemplateCustomIntegrationProviders implements IEvaServiceDefinition
{
  name = 'GetMessageTemplateCustomIntegrationProviders';
  path = '/message/GetMessageTemplateCustomIntegrationProviders';
  request?: GetMessageTemplateCustomIntegrationProviders;
  response?: GetMessageTemplateCustomIntegrationProvidersResponse;
}

export class SvcGetMessageTemplateHistoryByID implements IEvaServiceDefinition
{
  name = 'GetMessageTemplateHistoryByID';
  path = '/message/GetMessageTemplateHistoryByID';
  request?: GetMessageTemplateHistoryByID;
  response?: GetMessageTemplateHistoryByIDResponse;
}

export class SvcGetOpeningHoursTypes implements IEvaServiceDefinition
{
  name = 'GetOpeningHoursTypes';
  path = '/message/GetOpeningHoursTypes';
  request?: GetOpeningHoursTypes;
  response?: GetOpeningHoursTypesResponse;
}

export class SvcGetOrderLoyaltyProgramPaymentTypes implements IEvaServiceDefinition
{
  name = 'GetOrderLoyaltyProgramPaymentTypes';
  path = '/message/GetOrderLoyaltyProgramPaymentTypes';
  request?: GetOrderLoyaltyProgramPaymentTypes;
  response?: GetOrderLoyaltyProgramPaymentTypesResponse;
}

export class SvcGetOrganizationUnitCompany implements IEvaServiceDefinition
{
  name = 'GetOrganizationUnitCompany';
  path = '/message/GetOrganizationUnitCompany';
  request?: GetOrganizationUnitCompany;
  response?: GetOrganizationUnitCompanyResponse;
}

export class SvcGetOrganizationUnitSet implements IEvaServiceDefinition
{
  name = 'GetOrganizationUnitSet';
  path = '/message/GetOrganizationUnitSet';
  request?: GetOrganizationUnitSet;
  response?: GetOrganizationUnitSetResponse;
}

export class SvcGetOrganizationUnitSetDetails implements IEvaServiceDefinition
{
  name = 'GetOrganizationUnitSetDetails';
  path = '/message/GetOrganizationUnitSetDetails';
  request?: GetOrganizationUnitSetDetails;
  response?: GetOrganizationUnitSetDetailsResponse;
}

export class SvcGetOrganizationUnitSetScopes implements IEvaServiceDefinition
{
  name = 'GetOrganizationUnitSetScopes';
  path = '/message/GetOrganizationUnitSetScopes';
  request?: GetOrganizationUnitSetScopes;
  response?: GetOrganizationUnitSetScopesResponse;
}

export class SvcGetOrganizationUnitShippingMethodByID implements IEvaServiceDefinition
{
  name = 'GetOrganizationUnitShippingMethodByID';
  path = '/message/GetOrganizationUnitShippingMethodByID';
  request?: GetOrganizationUnitShippingMethodByID;
  response?: GetOrganizationUnitShippingMethodByIDResponse;
}

export class SvcGetOrganizationUnitSupplierDataByOrganizationUnitID implements IEvaServiceDefinition
{
  name = 'GetOrganizationUnitSupplierDataByOrganizationUnitID';
  path = '/message/GetOrganizationUnitSupplierDataByOrganizationUnitID';
  request?: GetOrganizationUnitSupplierDataByOrganizationUnitID;
  response?: GetOrganizationUnitSupplierDataByOrganizationUnitIDResponse;
}

export class SvcGetPackages implements IEvaServiceDefinition
{
  name = 'GetPackages';
  path = '/message/GetPackages';
  request?: GetPackages;
  response?: GetPackagesResponse;
}

export class SvcGetPackagesForCarrier implements IEvaServiceDefinition
{
  name = 'GetPackagesForCarrier';
  path = '/message/GetPackagesForCarrier';
  request?: GetPackagesForCarrier;
  response?: GetPackagesResponse;
}

export class SvcGetPaymentMethodByID implements IEvaServiceDefinition
{
  name = 'GetPaymentMethodByID';
  path = '/message/GetPaymentMethodByID';
  request?: GetPaymentMethodByID;
  response?: GetPaymentMethodByIDResponse;
}

export class SvcGetPaymentMethods implements IEvaServiceDefinition
{
  name = 'GetPaymentMethods';
  path = '/message/GetPaymentMethods';
  request?: GetPaymentMethods;
  response?: GetPaymentMethodsResponse;
}

export class SvcGetPaymentTypeByID implements IEvaServiceDefinition
{
  name = 'GetPaymentTypeByID';
  path = '/message/GetPaymentTypeByID';
  request?: GetPaymentTypeByID;
  response?: GetPaymentTypeByIDResponse;
}

export class SvcGetPaymentTypeCustomFields implements IEvaServiceDefinition
{
  name = 'GetPaymentTypeCustomFields';
  path = '/message/GetPaymentTypeCustomFields';
  request?: GetPaymentTypeCustomFields;
  response?: GetPaymentTypeCustomFieldsResponse;
}

export class SvcGetPaymentTypesForFilter implements IEvaServiceDefinition
{
  name = 'GetPaymentTypesForFilter';
  path = '/message/GetPaymentTypesForFilter';
  request?: GetPaymentTypesForFilter;
  response?: GetPaymentTypesForFilterResponse;
}

export class SvcGetPersonalizedPromotionByID implements IEvaServiceDefinition
{
  name = 'GetPersonalizedPromotionByID';
  path = '/message/GetPersonalizedPromotionByID';
  request?: GetPersonalizedPromotionByID;
  response?: GetPersonalizedPromotionByIDResponse;
}

export class SvcGetPointAwardingRule implements IEvaServiceDefinition
{
  name = 'GetPointAwardingRule';
  path = '/message/GetPointAwardingRule';
  request?: GetPointAwardingRule;
  response?: GetPointAwardingRuleResponse;
}

export class SvcGetPriceListAdjustmentByID implements IEvaServiceDefinition
{
  name = 'GetPriceListAdjustmentByID';
  path = '/message/GetPriceListAdjustmentByID';
  request?: GetPriceListAdjustmentByID;
  response?: GetPriceListAdjustmentByIDResponse;
}

export class SvcGetPriceListByID implements IEvaServiceDefinition
{
  name = 'GetPriceListByID';
  path = '/message/GetPriceListByID';
  request?: GetPriceListByID;
  response?: GetPriceListByIDResponse;
}

export class SvcGetPriceListManualInputAdjustmentByID implements IEvaServiceDefinition
{
  name = 'GetPriceListManualInputAdjustmentByID';
  path = '/message/GetPriceListManualInputAdjustmentByID';
  request?: GetPriceListManualInputAdjustmentByID;
  response?: GetPriceListManualInputAdjustmentByIDResponse;
}

export class SvcGetPriceListOrganizationUnitByID implements IEvaServiceDefinition
{
  name = 'GetPriceListOrganizationUnitByID';
  path = '/message/GetPriceListOrganizationUnitByID';
  request?: GetPriceListOrganizationUnitByID;
  response?: GetPriceListOrganizationUnitByIDResponse;
}

export class SvcGetPriceListUsageTypeByID implements IEvaServiceDefinition
{
  name = 'GetPriceListUsageTypeByID';
  path = '/message/GetPriceListUsageTypeByID';
  request?: GetPriceListUsageTypeByID;
  response?: GetPriceListUsageTypeByIDResponse;
}

export class SvcGetPriceListUsageTypes implements IEvaServiceDefinition
{
  name = 'GetPriceListUsageTypes';
  path = '/message/GetPriceListUsageTypes';
  request?: GetPriceListUsageTypes;
  response?: GetPriceListUsageTypesResponse;
}

export class SvcGetPrinterTypeByID implements IEvaServiceDefinition
{
  name = 'GetPrinterTypeByID';
  path = '/message/GetPrinterTypeByID';
  request?: GetPrinterTypeByID;
  response?: GetPrinterTypeByIDResponse;
}

export class SvcGetPrinterTypes implements IEvaServiceDefinition
{
  name = 'GetPrinterTypes';
  path = '/message/GetPrinterTypes';
  request?: GetPrinterTypes;
  response?: GetPrinterTypesResponse;
}

export class SvcGetProductRequirementByID implements IEvaServiceDefinition
{
  name = 'GetProductRequirementByID';
  path = '/message/GetProductRequirementByID';
  request?: GetProductRequirementByID;
  response?: GetProductRequirementByIDResponse;
}

export class SvcGetProductRequirementHandlers implements IEvaServiceDefinition
{
  name = 'GetProductRequirementHandlers';
  path = '/message/GetProductRequirementHandlers';
  request?: GetProductRequirementHandlers;
  response?: GetProductRequirementHandlersResponse;
}

export class SvcGetProductSearchTemplateByID implements IEvaServiceDefinition
{
  name = 'GetProductSearchTemplateByID';
  path = '/message/GetProductSearchTemplateByID';
  request?: GetProductSearchTemplateByID;
  response?: GetProductSearchTemplateByIDResponse;
}

export class SvcGetProductSubscription implements IEvaServiceDefinition
{
  name = 'GetProductSubscription';
  path = '/message/GetProductSubscription';
  request?: GetProductSubscription;
  response?: GetProductSubscriptionResponse;
}

export class SvcGetRecentlyUsedStockMutationReasons implements IEvaServiceDefinition
{
  name = 'GetRecentlyUsedStockMutationReasons';
  path = '/message/GetRecentlyUsedStockMutationReasons';
  request?: GetRecentlyUsedStockMutationReasons;
  response?: GetRecentlyUsedStockMutationReasonsResponse;
}

export class SvcGetRefundCorrectionReason implements IEvaServiceDefinition
{
  name = 'GetRefundCorrectionReason';
  path = '/message/GetRefundCorrectionReason';
  request?: GetRefundCorrectionReason;
  response?: GetRefundCorrectionReasonResponse;
}

export class SvcGetResendReason implements IEvaServiceDefinition
{
  name = 'GetResendReason';
  path = '/message/GetResendReason';
  request?: GetResendReason;
  response?: GetResendReasonResponse;
}

export class SvcGetResendReasons implements IEvaServiceDefinition
{
  name = 'GetResendReasons';
  path = '/message/GetResendReasons';
  request?: GetResendReasons;
  response?: GetResendReasonsResponse;
}

export class SvcGetReturnReasons implements IEvaServiceDefinition
{
  name = 'GetReturnReasons';
  path = '/message/GetReturnReasons';
  request?: GetReturnReasons;
  response?: GetReturnReasonsResponse;
}

export class SvcGetReturnReasonsByType implements IEvaServiceDefinition
{
  name = 'GetReturnReasonsByType';
  path = '/message/GetReturnReasonsByType';
  request?: GetReturnReasonsByType;
  response?: GetReturnReasonsByTypeResponse;
}

export class SvcGetRole implements IEvaServiceDefinition
{
  name = 'GetRole';
  path = '/message/GetRole';
  request?: GetRole;
  response?: GetRoleResponse;
}

export class SvcGetRoleSetByID implements IEvaServiceDefinition
{
  name = 'GetRoleSetByID';
  path = '/message/GetRoleSetByID';
  request?: GetRoleSetByID;
  response?: GetRoleSetByIDResponse;
}

export class SvcGetRolesForOrganizationUnit implements IEvaServiceDefinition
{
  name = 'GetRolesForOrganizationUnit';
  path = '/message/GetRolesForOrganizationUnit';
  request?: GetRolesForOrganizationUnit;
  response?: GetRolesForOrganizationUnitResponse;
}

export class SvcGetRolesForOrganizationUnitSet implements IEvaServiceDefinition
{
  name = 'GetRolesForOrganizationUnitSet';
  path = '/message/GetRolesForOrganizationUnitSet';
  request?: GetRolesForOrganizationUnitSet;
  response?: GetRolesForOrganizationUnitSetResponse;
}

export class SvcGetSetting implements IEvaServiceDefinition
{
  name = 'GetSetting';
  path = '/message/GetSetting';
  request?: GetSetting;
  response?: GetSettingResponse;
}

export class SvcGetSettingHistory implements IEvaServiceDefinition
{
  name = 'GetSettingHistory';
  path = '/message/GetSettingHistory';
  request?: GetSettingHistory;
  response?: GetSettingHistoryResponse;
}

export class SvcGetSettingImpact implements IEvaServiceDefinition
{
  name = 'GetSettingImpact';
  path = '/message/GetSettingImpact';
  request?: GetSettingImpact;
  response?: GetSettingImpactResponse;
}

export class SvcGetShippingCostByID implements IEvaServiceDefinition
{
  name = 'GetShippingCostByID';
  path = '/message/GetShippingCostByID';
  request?: GetShippingCostByID;
  response?: GetShippingCostByIDResponse;
}

export class SvcGetShippingMethodByID implements IEvaServiceDefinition
{
  name = 'GetShippingMethodByID';
  path = '/message/GetShippingMethodByID';
  request?: GetShippingMethodByID;
  response?: GetShippingMethodByIDResponse;
}

export class SvcGetShippingRestrictionByID implements IEvaServiceDefinition
{
  name = 'GetShippingRestrictionByID';
  path = '/message/GetShippingRestrictionByID';
  request?: GetShippingRestrictionByID;
  response?: GetShippingRestrictionByIDResponse;
}

export class SvcGetSubscriptionByID implements IEvaServiceDefinition
{
  name = 'GetSubscriptionByID';
  path = '/message/GetSubscriptionByID';
  request?: GetSubscriptionByID;
  response?: GetSubscriptionByIDResponse;
}

export class SvcGetSubscriptionHandlers implements IEvaServiceDefinition
{
  name = 'GetSubscriptionHandlers';
  path = '/message/GetSubscriptionHandlers';
  request?: GetSubscriptionHandlers;
  response?: GetSubscriptionHandlersResponse;
}

export class SvcGetSubscriptionOrganizationUnitSets implements IEvaServiceDefinition
{
  name = 'GetSubscriptionOrganizationUnitSets';
  path = '/message/GetSubscriptionOrganizationUnitSets';
  request?: GetSubscriptionOrganizationUnitSets;
  response?: GetSubscriptionOrganizationUnitSetsResponse;
}

export class SvcGetSupplierProductByID implements IEvaServiceDefinition
{
  name = 'GetSupplierProductByID';
  path = '/message/GetSupplierProductByID';
  request?: GetSupplierProductByID;
  response?: GetSupplierProductByIDResponse;
}

export class SvcGetSuppliersForProduct implements IEvaServiceDefinition
{
  name = 'GetSuppliersForProduct';
  path = '/message/GetSuppliersForProduct';
  request?: GetSuppliersForProduct;
  response?: GetSupplierForProductResponse;
}

export class SvcGetSupportedFunctionalities implements IEvaServiceDefinition
{
  name = 'GetSupportedFunctionalities';
  path = '/message/GetSupportedFunctionalities';
  request?: GetSupportedFunctionalities;
  response?: GetSupportedFunctionalitiesResponse;
}

export class SvcGetSurveyByID implements IEvaServiceDefinition
{
  name = 'GetSurveyByID';
  path = '/message/GetSurveyByID';
  request?: GetSurveyByID;
  response?: GetSurveyByIDResponse;
}

export class SvcGetSurveyCategory implements IEvaServiceDefinition
{
  name = 'GetSurveyCategory';
  path = '/message/GetSurveyCategory';
  request?: GetSurveyCategory;
  response?: GetSurveyCategoryResponse;
}

export class SvcGetSurveyQuestionAnswer implements IEvaServiceDefinition
{
  name = 'GetSurveyQuestionAnswer';
  path = '/message/GetSurveyQuestionAnswer';
  request?: GetSurveyQuestionAnswer;
  response?: GetSurveyQuestionAnswerResponse;
}

export class SvcGetSurveyQuestions implements IEvaServiceDefinition
{
  name = 'GetSurveyQuestions';
  path = '/message/GetSurveyQuestions';
  request?: GetSurveyQuestions;
  response?: GetSurveyQuestionsResponse;
}

export class SvcGetSurveyResponseDetails implements IEvaServiceDefinition
{
  name = 'GetSurveyResponseDetails';
  path = '/message/GetSurveyResponseDetails';
  request?: GetSurveyResponseDetails;
  response?: GetSurveyResponseDetailsResponse;
}

export class SvcGetSurveyTranslatableItems implements IEvaServiceDefinition
{
  name = 'GetSurveyTranslatableItems';
  path = '/message/GetSurveyTranslatableItems';
  request?: GetSurveyTranslatableItems;
  response?: GetSurveyTranslatableItemsResponse;
}

export class SvcGetSurveyTranslationStatus implements IEvaServiceDefinition
{
  name = 'GetSurveyTranslationStatus';
  path = '/message/GetSurveyTranslationStatus';
  request?: GetSurveyTranslationStatus;
  response?: GetSurveyTranslationStatusResponse;
}

export class SvcGetUnitOfMeasures implements IEvaServiceDefinition
{
  name = 'GetUnitOfMeasures';
  path = '/message/GetUnitOfMeasures';
  request?: GetUnitOfMeasures;
  response?: GetUnitOfMeasuresResponse;
}

export class SvcGetUserAgreementByID implements IEvaServiceDefinition
{
  name = 'GetUserAgreementByID';
  path = '/message/GetUserAgreementByID';
  request?: GetUserAgreementByID;
  response?: GetUserAgreementByIDResponse;
}

export class SvcGetUserBenefits implements IEvaServiceDefinition
{
  name = 'GetUserBenefits';
  path = '/message/GetUserBenefits';
  request?: GetUserBenefits;
  response?: GetUserBenefitsResponse;
}

export class SvcGetUserBoughtProduct implements IEvaServiceDefinition
{
  name = 'GetUserBoughtProduct';
  path = '/message/GetUserBoughtProduct';
  request?: GetUserBoughtProduct;
  response?: GetUserBoughtProductResponse;
}

export class SvcGetUserBoughtProductBySerialNumber implements IEvaServiceDefinition
{
  name = 'GetUserBoughtProductBySerialNumber';
  path = '/message/GetUserBoughtProductBySerialNumber';
  request?: GetUserBoughtProductBySerialNumber;
  response?: GetUserBoughtProductResponse;
}

export class SvcGetUserCoupons implements IEvaServiceDefinition
{
  name = 'GetUserCoupons';
  path = '/message/GetUserCoupons';
  request?: GetUserCoupons;
  response?: GetUserCouponsResponse;
}

export class SvcGetUserLoyaltyBadgeDetails implements IEvaServiceDefinition
{
  name = 'GetUserLoyaltyBadgeDetails';
  path = '/message/GetUserLoyaltyBadgeDetails';
  request?: GetUserLoyaltyBadgeDetails;
  response?: GetUserLoyaltyBadgeDetailsResponse;
}

export class SvcGetUserLoyaltyBadges implements IEvaServiceDefinition
{
  name = 'GetUserLoyaltyBadges';
  path = '/message/GetUserLoyaltyBadges';
  request?: GetUserLoyaltyBadges;
  response?: GetUserLoyaltyBadgesResponse;
}

export class SvcGetUserLoyaltyTierDetails implements IEvaServiceDefinition
{
  name = 'GetUserLoyaltyTierDetails';
  path = '/message/GetUserLoyaltyTierDetails';
  request?: GetUserLoyaltyTierDetails;
  response?: GetUserLoyaltyTierDetailsResponse;
}

export class SvcGetUserOrigins implements IEvaServiceDefinition
{
  name = 'GetUserOrigins';
  path = '/message/GetUserOrigins';
  request?: GetUserOrigins;
  response?: GetUserOriginsResponse;
}

export class SvcGetUserPaymentTokens implements IEvaServiceDefinition
{
  name = 'GetUserPaymentTokens';
  path = '/message/GetUserPaymentTokens';
  request?: GetUserPaymentTokens;
  response?: GetUserPaymentTokensResponse;
}

export class SvcGetUserPersonalizedPromotionProducts implements IEvaServiceDefinition
{
  name = 'GetUserPersonalizedPromotionProducts';
  path = '/message/GetUserPersonalizedPromotionProducts';
  request?: GetUserPersonalizedPromotionProducts;
  response?: GetUserPersonalizedPromotionProductsResponse;
}

export class SvcGetUserRequirement implements IEvaServiceDefinition
{
  name = 'GetUserRequirement';
  path = '/message/GetUserRequirement';
  request?: GetUserRequirement;
  response?: GetUserRequirementResponse;
}

export class SvcGetUserRequirements implements IEvaServiceDefinition
{
  name = 'GetUserRequirements';
  path = '/message/GetUserRequirements';
  request?: GetUserRequirements;
  response?: GetUserRequirementsResponse;
}

export class SvcGetUserRequirementSet implements IEvaServiceDefinition
{
  name = 'GetUserRequirementSet';
  path = '/message/GetUserRequirementSet';
  request?: GetUserRequirementSet;
  response?: GetUserRequirementSetResponse;
}

export class SvcGetUserRequirementsForSubscriptions implements IEvaServiceDefinition
{
  name = 'GetUserRequirementsForSubscriptions';
  path = '/message/GetUserRequirementsForSubscriptions';
  request?: GetUserRequirementsForSubscriptions;
  response?: GetUserRequirementsForSubscriptionsResponse;
}

export class SvcGetUserRoles implements IEvaServiceDefinition
{
  name = 'GetUserRoles';
  path = '/message/GetUserRoles';
  request?: GetUserRoles;
  response?: GetUserRolesResponse;
}

export class SvcGetUserRolesByUserID implements IEvaServiceDefinition
{
  name = 'GetUserRolesByUserID';
  path = '/message/GetUserRolesByUserID';
  request?: GetUserRolesByUserID;
  response?: GetUserRolesByUserIDResponse;
}

export class SvcGetUserSubscriptionBarcode implements IEvaServiceDefinition
{
  name = 'GetUserSubscriptionBarcode';
  path = '/message/GetUserSubscriptionBarcode';
  request?: GetUserSubscriptionBarcode;
  response?: GetUserSubscriptionBarcodeResponse;
}

export class SvcGetVisibilityGroupByID implements IEvaServiceDefinition
{
  name = 'GetVisibilityGroupByID';
  path = '/message/GetVisibilityGroupByID';
  request?: GetVisibilityGroupByID;
  response?: GetVisibilityGroupByIDResponse;
}

export class SvcGetVisibilityGroupConfiguration implements IEvaServiceDefinition
{
  name = 'GetVisibilityGroupConfiguration';
  path = '/message/GetVisibilityGroupConfiguration';
  request?: GetVisibilityGroupConfiguration;
  response?: GetVisibilityGroupConfigurationResponse;
}

export class SvcGetWidget implements IEvaServiceDefinition
{
  name = 'GetWidget';
  path = '/message/GetWidget';
  request?: GetWidget;
  response?: GetWidgetResponse;
}

export class SvcGetWidgetConfiguration implements IEvaServiceDefinition
{
  name = 'GetWidgetConfiguration';
  path = '/message/GetWidgetConfiguration';
  request?: GetWidgetConfiguration;
  response?: GetWidgetConfigurationResponse;
}

export class SvcGetWishlist implements IEvaServiceDefinition
{
  name = 'GetWishlist';
  path = '/message/GetWishlist';
  request?: GetWishlist;
  response?: GetWishlistResponse;
}

export class SvcImportSettings implements IEvaServiceDefinition
{
  name = 'ImportSettings';
  path = '/message/ImportSettings';
  request?: ImportSettings;
  response?: ImportSettingsResponse;
}

export class SvcInitialReplenishment implements IEvaServiceDefinition
{
  name = 'InitialReplenishment';
  path = '/message/InitialReplenishment';
  request?: InitialReplenishment;
  response?: InitialReplenishmentResponse;
}

export class SvcListAccounts implements IEvaServiceDefinition
{
  name = 'ListAccounts';
  path = '/message/ListAccounts';
  request?: ListAccounts;
  response?: ListAccountsResponse;
}

export class SvcListAMLConfigurations implements IEvaServiceDefinition
{
  name = 'ListAMLConfigurations';
  path = '/message/ListAMLConfigurations';
  request?: ListAMLConfigurations;
  response?: ListAMLConfigurationsResponse;
}

export class SvcListAppointmentCancellationReasons implements IEvaServiceDefinition
{
  name = 'ListAppointmentCancellationReasons';
  path = '/message/ListAppointmentCancellationReasons';
  request?: ListAppointmentCancellationReasons;
  response?: ListAppointmentCancellationReasonsResponse;
}

export class SvcListAppSettingHistory implements IEvaServiceDefinition
{
  name = 'ListAppSettingHistory';
  path = '/message/ListAppSettingHistory';
  request?: ListAppSettingHistory;
  response?: ListAppSettingHistoryResponse;
}

export class SvcListAppSettings implements IEvaServiceDefinition
{
  name = 'ListAppSettings';
  path = '/message/ListAppSettings';
  request?: ListAppSettings;
  response?: ListAppSettingsResponse;
}

export class SvcListAssortmentProducts implements IEvaServiceDefinition
{
  name = 'ListAssortmentProducts';
  path = '/message/ListAssortmentProducts';
  request?: ListAssortmentProducts;
  response?: ListAssortmentProductsResponse;
}

export class SvcListAssortments implements IEvaServiceDefinition
{
  name = 'ListAssortments';
  path = '/message/ListAssortments';
  request?: ListAssortments;
  response?: ListAssortmentsResponse;
}

export class SvcListAvailableDiscountActionsAndConditions implements IEvaServiceDefinition
{
  name = 'ListAvailableDiscountActionsAndConditions';
  path = '/message/ListAvailableDiscountActionsAndConditions';
  request?: ListAvailableDiscountActionsAndConditions;
  response?: ListAvailableDiscountActionsAndConditionsResponse;
}

export class SvcListAvailableSettings implements IEvaServiceDefinition
{
  name = 'ListAvailableSettings';
  path = '/message/ListAvailableSettings';
  request?: ListAvailableSettings;
  response?: ListAvailableSettingsResponse;
}

export class SvcListBenefitUserUsageHistory implements IEvaServiceDefinition
{
  name = 'ListBenefitUserUsageHistory';
  path = '/message/ListBenefitUserUsageHistory';
  request?: ListBenefitUserUsageHistory;
  response?: ListBenefitUserUsageHistoryResponse;
}

export class SvcListBlobsForCase implements IEvaServiceDefinition
{
  name = 'ListBlobsForCase';
  path = '/message/ListBlobsForCase';
  request?: ListBlobsForCase;
  response?: ListBlobsForCaseResponse;
}

export class SvcListCarriers implements IEvaServiceDefinition
{
  name = 'ListCarriers';
  path = '/message/ListCarriers';
  request?: ListCarriers;
  response?: ListCarriersResponse;
}

export class SvcListCaseInteractions implements IEvaServiceDefinition
{
  name = 'ListCaseInteractions';
  path = '/message/ListCaseInteractions';
  request?: ListCaseInteractions;
  response?: ListCaseInteractionsResponse;
}

export class SvcListCases implements IEvaServiceDefinition
{
  name = 'ListCases';
  path = '/message/ListCases';
  request?: ListCases;
  response?: ListCasesResponse;
}

export class SvcListCaseStatuses implements IEvaServiceDefinition
{
  name = 'ListCaseStatuses';
  path = '/message/ListCaseStatuses';
  request?: ListCaseStatuses;
  response?: ListCaseStatusesResponse;
}

export class SvcListCaseTopics implements IEvaServiceDefinition
{
  name = 'ListCaseTopics';
  path = '/message/ListCaseTopics';
  request?: ListCaseTopics;
  response?: ListCaseTopicsResponse;
}

export class SvcListCashCorrectionReasons implements IEvaServiceDefinition
{
  name = 'ListCashCorrectionReasons';
  path = '/message/ListCashCorrectionReasons';
  request?: ListCashCorrectionReasons;
  response?: ListCashCorrectionReasonsResponse;
}

export class SvcListCashExpenseTypes implements IEvaServiceDefinition
{
  name = 'ListCashExpenseTypes';
  path = '/message/ListCashExpenseTypes';
  request?: ListCashExpenseTypes;
  response?: ListCashExpenseTypesResponse;
}

export class SvcListCashHandlers implements IEvaServiceDefinition
{
  name = 'ListCashHandlers';
  path = '/message/ListCashHandlers';
  request?: ListCashHandlers;
  response?: ListCashHandlersResponse;
}

export class SvcListCDNConfigurations implements IEvaServiceDefinition
{
  name = 'ListCDNConfigurations';
  path = '/message/ListCDNConfigurations';
  request?: ListCDNConfigurations;
  response?: ListCDNConfigurationsResponse;
}

export class SvcListCheckoutOptionCategories implements IEvaServiceDefinition
{
  name = 'ListCheckoutOptionCategories';
  path = '/message/ListCheckoutOptionCategories';
  request?: ListCheckoutOptionCategories;
  response?: ListCheckoutOptionCategoriesResponse;
}

export class SvcListClientApplications implements IEvaServiceDefinition
{
  name = 'ListClientApplications';
  path = '/message/ListClientApplications';
  request?: ListClientApplications;
  response?: ListClientApplicationsResponse;
}

export class SvcListCompanies implements IEvaServiceDefinition
{
  name = 'ListCompanies';
  path = '/message/ListCompanies';
  request?: ListCompanies;
  response?: ListCompaniesResponse;
}

export class SvcListCompanyRequirements implements IEvaServiceDefinition
{
  name = 'ListCompanyRequirements';
  path = '/message/ListCompanyRequirements';
  request?: ListCompanyRequirements;
  response?: ListCompanyRequirementsResponse;
}

export class SvcListCouponsByQuery implements IEvaServiceDefinition
{
  name = 'ListCouponsByQuery';
  path = '/message/ListCouponsByQuery';
  request?: ListCouponsByQuery;
  response?: ListCouponsByQueryResponse;
}

export class SvcListCultures implements IEvaServiceDefinition
{
  name = 'ListCultures';
  path = '/message/ListCultures';
  request?: ListCultures;
  response?: ListCulturesResponse;
}

export class SvcListCumulativeStock implements IEvaServiceDefinition
{
  name = 'ListCumulativeStock';
  path = '/message/ListCumulativeStock';
  request?: ListCumulativeStock;
  response?: ListCumulativeStockResponse;
}

export class SvcListCustomFieldDataTypesOperators implements IEvaServiceDefinition
{
  name = 'ListCustomFieldDataTypesOperators';
  path = '/message/ListCustomFieldDataTypesOperators';
  request?: ListCustomFieldDataTypesOperators;
  response?: ListCustomFieldDataTypeOperatorsResponse;
}

export class SvcListCustomFieldEligibilityScripts implements IEvaServiceDefinition
{
  name = 'ListCustomFieldEligibilityScripts';
  path = '/message/ListCustomFieldEligibilityScripts';
  request?: ListCustomFieldEligibilityScripts;
  response?: ListCustomFieldEligibilityScriptsResponse;
}

export class SvcListCustomFieldOptions implements IEvaServiceDefinition
{
  name = 'ListCustomFieldOptions';
  path = '/message/ListCustomFieldOptions';
  request?: ListCustomFieldOptions;
  response?: ListCustomFieldOptionsResponse;
}

export class SvcListCustomFields implements IEvaServiceDefinition
{
  name = 'ListCustomFields';
  path = '/message/ListCustomFields';
  request?: ListCustomFields;
  response?: ListCustomFieldsResponse;
}

export class SvcListCustomFieldsForSurvey implements IEvaServiceDefinition
{
  name = 'ListCustomFieldsForSurvey';
  path = '/message/ListCustomFieldsForSurvey';
  request?: ListCustomFieldsForSurvey;
  response?: ListCustomFieldsForSurveyResponse;
}

export class SvcListDiscountCampaigns implements IEvaServiceDefinition
{
  name = 'ListDiscountCampaigns';
  path = '/message/ListDiscountCampaigns';
  request?: ListDiscountCampaigns;
  response?: ListDiscountCampaignsResponse;
}

export class SvcListDiscountLayers implements IEvaServiceDefinition
{
  name = 'ListDiscountLayers';
  path = '/message/ListDiscountLayers';
  request?: ListDiscountLayers;
  response?: ListDiscountLayersResponse;
}

export class SvcListDiscountTemplates implements IEvaServiceDefinition
{
  name = 'ListDiscountTemplates';
  path = '/message/ListDiscountTemplates';
  request?: ListDiscountTemplates;
  response?: ListDiscountTemplatesResponse;
}

export class SvcListDiscountUserUsageReloadStrategies implements IEvaServiceDefinition
{
  name = 'ListDiscountUserUsageReloadStrategies';
  path = '/message/ListDiscountUserUsageReloadStrategies';
  request?: ListDiscountUserUsageReloadStrategies;
  response?: ListDiscountUserUsageReloadStrategiesResponse;
}

export class SvcListElevationSkipReasons implements IEvaServiceDefinition
{
  name = 'ListElevationSkipReasons';
  path = '/message/ListElevationSkipReasons';
  request?: ListElevationSkipReasons;
  response?: ListElevationSkipReasonsResponse;
}

export class SvcListEmployeeDatas implements IEvaServiceDefinition
{
  name = 'ListEmployeeDatas';
  path = '/message/ListEmployeeDatas';
  request?: ListEmployeeDatas;
  response?: ListEmployeeDatasResponse;
}

export class SvcListEntityFieldValidatorEntityFieldNames implements IEvaServiceDefinition
{
  name = 'ListEntityFieldValidatorEntityFieldNames';
  path = '/message/ListEntityFieldValidatorEntityFieldNames';
  request?: ListEntityFieldValidatorEntityFieldNames;
  response?: ListEntityFieldValidatorEntityFieldNamesResponse;
}

export class SvcListEntityFieldValidators implements IEvaServiceDefinition
{
  name = 'ListEntityFieldValidators';
  path = '/message/ListEntityFieldValidators';
  request?: ListEntityFieldValidators;
  response?: ListEntityFieldValidatorsResponse;
}

export class SvcListEventLocationOpeningHoursTemplates implements IEvaServiceDefinition
{
  name = 'ListEventLocationOpeningHoursTemplates';
  path = '/message/ListEventLocationOpeningHoursTemplates';
  request?: ListEventLocationOpeningHoursTemplates;
  response?: ListEventLocationOpeningHoursTemplatesResponse;
}

export class SvcListEventLocations implements IEvaServiceDefinition
{
  name = 'ListEventLocations';
  path = '/message/ListEventLocations';
  request?: ListEventLocations;
  response?: ListEventLocationsResponse;
}

export class SvcListEvents implements IEvaServiceDefinition
{
  name = 'ListEvents';
  path = '/message/ListEvents';
  request?: ListEvents;
  response?: ListEventsResponse;
}

export class SvcListEventTypes implements IEvaServiceDefinition
{
  name = 'ListEventTypes';
  path = '/message/ListEventTypes';
  request?: ListEventTypes;
  response?: ListEventTypesResponse;
}

export class SvcListExchangeRates implements IEvaServiceDefinition
{
  name = 'ListExchangeRates';
  path = '/message/ListExchangeRates';
  request?: ListExchangeRates;
  response?: ListExchangeRatesResponse;
}

export class SvcListFraudItems implements IEvaServiceDefinition
{
  name = 'ListFraudItems';
  path = '/message/ListFraudItems';
  request?: ListFraudItems;
  response?: ListFraudItemsResponse;
}

export class SvcListGiftCardConfigurations implements IEvaServiceDefinition
{
  name = 'ListGiftCardConfigurations';
  path = '/message/ListGiftCardConfigurations';
  request?: ListGiftCardConfigurations;
  response?: ListGiftCardConfigurationsResponse;
}

export class SvcListInquiries implements IEvaServiceDefinition
{
  name = 'ListInquiries';
  path = '/message/ListInquiries';
  request?: ListInquiries;
  response?: ListInquiriesResponse;
}

export class SvcListKnowledgeBaseSurveys implements IEvaServiceDefinition
{
  name = 'ListKnowledgeBaseSurveys';
  path = '/message/ListKnowledgeBaseSurveys';
  request?: ListKnowledgeBaseSurveys;
  response?: ListKnowledgeBaseSurveysResponse;
}

export class SvcListLoyaltyPaymentMethodTypes implements IEvaServiceDefinition
{
  name = 'ListLoyaltyPaymentMethodTypes';
  path = '/message/ListLoyaltyPaymentMethodTypes';
  request?: ListLoyaltyPaymentMethodTypes;
  response?: ListLoyaltyPaymentMethodTypesResponse;
}

export class SvcListLoyaltyProgramBadgeCategories implements IEvaServiceDefinition
{
  name = 'ListLoyaltyProgramBadgeCategories';
  path = '/message/ListLoyaltyProgramBadgeCategories';
  request?: ListLoyaltyProgramBadgeCategories;
  response?: ListLoyaltyProgramBadgeCategoriesResponse;
}

export class SvcListLoyaltyProgramBadges implements IEvaServiceDefinition
{
  name = 'ListLoyaltyProgramBadges';
  path = '/message/ListLoyaltyProgramBadges';
  request?: ListLoyaltyProgramBadges;
  response?: ListLoyaltyProgramBadgesResponse;
}

export class SvcListLoyaltyProgramConditions implements IEvaServiceDefinition
{
  name = 'ListLoyaltyProgramConditions';
  path = '/message/ListLoyaltyProgramConditions';
  request?: ListLoyaltyProgramConditions;
  response?: ListLoyaltyProgramConditionsResponse;
}

export class SvcListLoyaltyProgramGroups implements IEvaServiceDefinition
{
  name = 'ListLoyaltyProgramGroups';
  path = '/message/ListLoyaltyProgramGroups';
  request?: ListLoyaltyProgramGroups;
  response?: ListLoyaltyProgramGroupsResponse;
}

export class SvcListLoyaltyProgramPasses implements IEvaServiceDefinition
{
  name = 'ListLoyaltyProgramPasses';
  path = '/message/ListLoyaltyProgramPasses';
  request?: ListLoyaltyProgramPasses;
  response?: ListLoyaltyProgramPassesResponse;
}

export class SvcListLoyaltyProgramPassProviders implements IEvaServiceDefinition
{
  name = 'ListLoyaltyProgramPassProviders';
  path = '/message/ListLoyaltyProgramPassProviders';
  request?: ListLoyaltyProgramPassProviders;
  response?: ListLoyaltyProgramPassProvidersResponse;
}

export class SvcListLoyaltyProgramPaymentTypes implements IEvaServiceDefinition
{
  name = 'ListLoyaltyProgramPaymentTypes';
  path = '/message/ListLoyaltyProgramPaymentTypes';
  request?: ListLoyaltyProgramPaymentTypes;
  response?: ListLoyaltyProgramPaymentTypesResponse;
}

export class SvcListLoyaltyProgramPriceLists implements IEvaServiceDefinition
{
  name = 'ListLoyaltyProgramPriceLists';
  path = '/message/ListLoyaltyProgramPriceLists';
  request?: ListLoyaltyProgramPriceLists;
  response?: ListLoyaltyProgramPriceListsResponse;
}

export class SvcListLoyaltyProgramProductLimitations implements IEvaServiceDefinition
{
  name = 'ListLoyaltyProgramProductLimitations';
  path = '/message/ListLoyaltyProgramProductLimitations';
  request?: ListLoyaltyProgramProductLimitations;
  response?: ListLoyaltyProgramProductLimitationsResponse;
}

export class SvcListLoyaltyProgramRequiredCustomFields implements IEvaServiceDefinition
{
  name = 'ListLoyaltyProgramRequiredCustomFields';
  path = '/message/ListLoyaltyProgramRequiredCustomFields';
  request?: ListLoyaltyProgramRequiredCustomFields;
  response?: ListLoyaltyProgramRequiredCustomFieldsResponse;
}

export class SvcListLoyaltyPrograms implements IEvaServiceDefinition
{
  name = 'ListLoyaltyPrograms';
  path = '/message/ListLoyaltyPrograms';
  request?: ListLoyaltyPrograms;
  response?: ListLoyaltyProgramsResponse;
}

export class SvcListLoyaltyProgramTiers implements IEvaServiceDefinition
{
  name = 'ListLoyaltyProgramTiers';
  path = '/message/ListLoyaltyProgramTiers';
  request?: ListLoyaltyProgramTiers;
  response?: ListLoyaltyProgramTiersResponse;
}

export class SvcListManagementShippingMethods implements IEvaServiceDefinition
{
  name = 'ListManagementShippingMethods';
  path = '/message/ListManagementShippingMethods';
  request?: ListManagementShippingMethods;
  response?: ListManagementShippingMethodsResponse;
}

export class SvcListMessageTemplateLayouts implements IEvaServiceDefinition
{
  name = 'ListMessageTemplateLayouts';
  path = '/message/ListMessageTemplateLayouts';
  request?: ListMessageTemplateLayouts;
  response?: ListMessageTemplateLayoutsResponse;
}

export class SvcListMessageTemplates implements IEvaServiceDefinition
{
  name = 'ListMessageTemplates';
  path = '/message/ListMessageTemplates';
  request?: ListMessageTemplates;
  response?: ListMessageTemplatesResponse;
}

export class SvcListOpeningHours implements IEvaServiceDefinition
{
  name = 'ListOpeningHours';
  path = '/message/ListOpeningHours';
  request?: ListOpeningHours;
  response?: ListOpeningHoursResponse;
}

export class SvcListOrderGeneratedCoupons implements IEvaServiceDefinition
{
  name = 'ListOrderGeneratedCoupons';
  path = '/message/ListOrderGeneratedCoupons';
  request?: ListOrderGeneratedCoupons;
  response?: ListOrderGeneratedCouponsResponse;
}

export class SvcListOrderLedgerTypes implements IEvaServiceDefinition
{
  name = 'ListOrderLedgerTypes';
  path = '/message/ListOrderLedgerTypes';
  request?: ListOrderLedgerTypes;
  response?: ListOrderLedgerTypesResponse;
}

export class SvcListOrganizationUnitCompanies implements IEvaServiceDefinition
{
  name = 'ListOrganizationUnitCompanies';
  path = '/message/ListOrganizationUnitCompanies';
  request?: ListOrganizationUnitCompanies;
  response?: ListOrganizationUnitCompaniesResponse;
}

export class SvcListOrganizationUnitCountries implements IEvaServiceDefinition
{
  name = 'ListOrganizationUnitCountries';
  path = '/message/ListOrganizationUnitCountries';
  request?: ListOrganizationUnitCountries;
  response?: ListOrganizationUnitCountriesResponse;
}

export class SvcListOrganizationUnitCurrencies implements IEvaServiceDefinition
{
  name = 'ListOrganizationUnitCurrencies';
  path = '/message/ListOrganizationUnitCurrencies';
  request?: ListOrganizationUnitCurrencies;
  response?: ListOrganizationUnitCurrenciesResponse;
}

export class SvcListOrganizationUnitLanguages implements IEvaServiceDefinition
{
  name = 'ListOrganizationUnitLanguages';
  path = '/message/ListOrganizationUnitLanguages';
  request?: ListOrganizationUnitLanguages;
  response?: ListOrganizationUnitLanguagesResponse;
}

export class SvcListOrganizationUnitSetPaymentTypes implements IEvaServiceDefinition
{
  name = 'ListOrganizationUnitSetPaymentTypes';
  path = '/message/ListOrganizationUnitSetPaymentTypes';
  request?: ListOrganizationUnitSetPaymentTypes;
  response?: ListOrganizationUnitSetPaymentTypesResponse;
}

export class SvcListOrganizationUnitSets implements IEvaServiceDefinition
{
  name = 'ListOrganizationUnitSets';
  path = '/message/ListOrganizationUnitSets';
  request?: ListOrganizationUnitSets;
  response?: ListOrganizationUnitSetsResponse;
}

export class SvcListOrganizationUnitShippingMethods implements IEvaServiceDefinition
{
  name = 'ListOrganizationUnitShippingMethods';
  path = '/message/ListOrganizationUnitShippingMethods';
  request?: ListOrganizationUnitShippingMethods;
  response?: ListOrganizationUnitShippingMethodsResponse;
}

export class SvcListPaymentMethods implements IEvaServiceDefinition
{
  name = 'ListPaymentMethods';
  path = '/message/ListPaymentMethods';
  request?: ListPaymentMethods;
  response?: ListPaymentMethodsResponse;
}

export class SvcListPaymentSettlementFiles implements IEvaServiceDefinition
{
  name = 'ListPaymentSettlementFiles';
  path = '/message/ListPaymentSettlementFiles';
  request?: ListPaymentSettlementFiles;
  response?: ListPaymentSettlementFilesResponse;
}

export class SvcListPaymentSettlements implements IEvaServiceDefinition
{
  name = 'ListPaymentSettlements';
  path = '/message/ListPaymentSettlements';
  request?: ListPaymentSettlements;
  response?: ListPaymentSettlementsResponse;
}

export class SvcListPaymentTransactionCaptures implements IEvaServiceDefinition
{
  name = 'ListPaymentTransactionCaptures';
  path = '/message/ListPaymentTransactionCaptures';
  request?: ListPaymentTransactionCaptures;
  response?: ListPaymentTransactionCapturesResponse;
}

export class SvcListPaymentTransactions implements IEvaServiceDefinition
{
  name = 'ListPaymentTransactions';
  path = '/message/ListPaymentTransactions';
  request?: ListPaymentTransactions;
  response?: ListPaymentTransactionsResponse;
}

export class SvcListPaymentTransactionSettlements implements IEvaServiceDefinition
{
  name = 'ListPaymentTransactionSettlements';
  path = '/message/ListPaymentTransactionSettlements';
  request?: ListPaymentTransactionSettlements;
  response?: ListPaymentTransactionsSettlementsResponse;
}

export class SvcListPaymentTypes implements IEvaServiceDefinition
{
  name = 'ListPaymentTypes';
  path = '/message/ListPaymentTypes';
  request?: ListPaymentTypes;
  response?: ListPaymentTypesResponse;
}

export class SvcListPersonalizedPromotions implements IEvaServiceDefinition
{
  name = 'ListPersonalizedPromotions';
  path = '/message/ListPersonalizedPromotions';
  request?: ListPersonalizedPromotions;
  response?: ListPersonalizedPromotionsResponse;
}

export class SvcListPointAwardingRules implements IEvaServiceDefinition
{
  name = 'ListPointAwardingRules';
  path = '/message/ListPointAwardingRules';
  request?: ListPointAwardingRules;
  response?: ListPointAwardingRulesResponse;
}

export class SvcListPriceListAdjustments implements IEvaServiceDefinition
{
  name = 'ListPriceListAdjustments';
  path = '/message/ListPriceListAdjustments';
  request?: ListPriceListAdjustments;
  response?: ListPriceListAdjustmentsResponse;
}

export class SvcListPriceListManualInputAdjustments implements IEvaServiceDefinition
{
  name = 'ListPriceListManualInputAdjustments';
  path = '/message/ListPriceListManualInputAdjustments';
  request?: ListPriceListManualInputAdjustments;
  response?: ListPriceListManualInputAdjustmentsResponse;
}

export class SvcListPriceListOrganizationUnits implements IEvaServiceDefinition
{
  name = 'ListPriceListOrganizationUnits';
  path = '/message/ListPriceListOrganizationUnits';
  request?: ListPriceListOrganizationUnits;
  response?: ListPriceListOrganizationUnitsResponse;
}

export class SvcListPriceLists implements IEvaServiceDefinition
{
  name = 'ListPriceLists';
  path = '/message/ListPriceLists';
  request?: ListPriceLists;
  response?: ListPriceListsResponse;
}

export class SvcListPriceListsForOrganizationUnit implements IEvaServiceDefinition
{
  name = 'ListPriceListsForOrganizationUnit';
  path = '/message/ListPriceListsForOrganizationUnit';
  request?: ListPriceListsForOrganizationUnit;
  response?: ListPriceListsForOrganizationUnitResponse;
}

export class SvcListProductBarcodes implements IEvaServiceDefinition
{
  name = 'ListProductBarcodes';
  path = '/message/ListProductBarcodes';
  request?: ListProductBarcodes;
  response?: ListProductBarcodesResponse;
}

export class SvcListProductCostPriceLedger implements IEvaServiceDefinition
{
  name = 'ListProductCostPriceLedger';
  path = '/message/ListProductCostPriceLedger';
  request?: ListProductCostPriceLedger;
  response?: ListProductCostPriceLedgerResponse;
}

export class SvcListProductGiftCards implements IEvaServiceDefinition
{
  name = 'ListProductGiftCards';
  path = '/message/ListProductGiftCards';
  request?: ListProductGiftCards;
  response?: ListProductGiftCardsResponse;
}

export class SvcListProductPriceLedger implements IEvaServiceDefinition
{
  name = 'ListProductPriceLedger';
  path = '/message/ListProductPriceLedger';
  request?: ListProductPriceLedger;
  response?: ListProductPriceLedgerResponse;
}

export class SvcListProductRequirements implements IEvaServiceDefinition
{
  name = 'ListProductRequirements';
  path = '/message/ListProductRequirements';
  request?: ListProductRequirements;
  response?: ListProductRequirementsResponse;
}

export class SvcListProductSearchTemplates implements IEvaServiceDefinition
{
  name = 'ListProductSearchTemplates';
  path = '/message/ListProductSearchTemplates';
  request?: ListProductSearchTemplates;
  response?: ListProductSearchTemplatesResponse;
}

export class SvcListProductSubscriptions implements IEvaServiceDefinition
{
  name = 'ListProductSubscriptions';
  path = '/message/ListProductSubscriptions';
  request?: ListProductSubscriptions;
  response?: ListProductSubscriptionsResponse;
}

export class SvcListProductUnitOfMeasures implements IEvaServiceDefinition
{
  name = 'ListProductUnitOfMeasures';
  path = '/message/ListProductUnitOfMeasures';
  request?: ListProductUnitOfMeasures;
  response?: ListProductUnitOfMeasuresResponse;
}

export class SvcListRefundCorrectionReasons implements IEvaServiceDefinition
{
  name = 'ListRefundCorrectionReasons';
  path = '/message/ListRefundCorrectionReasons';
  request?: ListRefundCorrectionReasons;
  response?: ListRefundCorrectionReasonsResponse;
}

export class SvcListResendReasons implements IEvaServiceDefinition
{
  name = 'ListResendReasons';
  path = '/message/ListResendReasons';
  request?: ListResendReasons;
  response?: ListResendReasonsResponse;
}

export class SvcListRestockedProducts implements IEvaServiceDefinition
{
  name = 'ListRestockedProducts';
  path = '/message/ListRestockedProducts';
  request?: ListRestockedProducts;
  response?: ListRestockedProductsResponse;
}

export class SvcListReturnReasons implements IEvaServiceDefinition
{
  name = 'ListReturnReasons';
  path = '/message/ListReturnReasons';
  request?: ListReturnReasons;
  response?: ListReturnReasonsResponse;
}

export class SvcListRoleFunctionalities implements IEvaServiceDefinition
{
  name = 'ListRoleFunctionalities';
  path = '/message/ListRoleFunctionalities';
  request?: ListRoleFunctionalities;
  response?: ListRoleFunctionalitiesResponse;
}

export class SvcListRoles implements IEvaServiceDefinition
{
  name = 'ListRoles';
  path = '/message/ListRoles';
  request?: ListRoles;
  response?: ListRolesResponse;
}

export class SvcListRoleSets implements IEvaServiceDefinition
{
  name = 'ListRoleSets';
  path = '/message/ListRoleSets';
  request?: ListRoleSets;
  response?: ListRoleSetsResponse;
}

export class SvcListSettingHistory implements IEvaServiceDefinition
{
  name = 'ListSettingHistory';
  path = '/message/ListSettingHistory';
  request?: ListSettingHistory;
  response?: ListSettingHistoryResponse;
}

export class SvcListSettings implements IEvaServiceDefinition
{
  name = 'ListSettings';
  path = '/message/ListSettings';
  request?: ListSettings;
  response?: ListSettingsResponse;
}

export class SvcListSettingsPerOrganizationUnit implements IEvaServiceDefinition
{
  name = 'ListSettingsPerOrganizationUnit';
  path = '/message/ListSettingsPerOrganizationUnit';
  request?: ListSettingsPerOrganizationUnit;
  response?: ListSettingsPerOrganizationUnitResponse;
}

export class SvcListShippingCosts implements IEvaServiceDefinition
{
  name = 'ListShippingCosts';
  path = '/message/ListShippingCosts';
  request?: ListShippingCosts;
  response?: ListShippingCostsResponse;
}

export class SvcListShippingMethods implements IEvaServiceDefinition
{
  name = 'ListShippingMethods';
  path = '/message/ListShippingMethods';
  request?: ListShippingMethods;
  response?: ListShippingMethodsResponse;
}

export class SvcListShippingMethodTransportationTimes implements IEvaServiceDefinition
{
  name = 'ListShippingMethodTransportationTimes';
  path = '/message/ListShippingMethodTransportationTimes';
  request?: ListShippingMethodTransportationTimes;
  response?: ListShippingMethodTransportationTimesResponse;
}

export class SvcListShippingRestrictions implements IEvaServiceDefinition
{
  name = 'ListShippingRestrictions';
  path = '/message/ListShippingRestrictions';
  request?: ListShippingRestrictions;
  response?: ListShippingRestrictionsResponse;
}

export class SvcListStockAllocationRules implements IEvaServiceDefinition
{
  name = 'ListStockAllocationRules';
  path = '/message/ListStockAllocationRules';
  request?: ListStockAllocationRules;
  response?: ListStockAllocationRulesResponse;
}

export class SvcListStockForOrganizationUnits implements IEvaServiceDefinition
{
  name = 'ListStockForOrganizationUnits';
  path = '/message/ListStockForOrganizationUnits';
  request?: ListStockForOrganizationUnits;
  response?: ListStockForOrganizationUnitsResponse;
}

export class SvcListStockMutationReasons implements IEvaServiceDefinition
{
  name = 'ListStockMutationReasons';
  path = '/message/ListStockMutationReasons';
  request?: ListStockMutationReasons;
  response?: ListStockMutationReasonsResponse;
}

export class SvcListStockMutationUnitCostSourceLedger implements IEvaServiceDefinition
{
  name = 'ListStockMutationUnitCostSourceLedger';
  path = '/message/ListStockMutationUnitCostSourceLedger';
  request?: ListStockMutationUnitCostSourceLedger;
  response?: ListStockMutationUnitCostSourceLedgerResponse;
}

export class SvcListSubscriptionOrganizationUnitSets implements IEvaServiceDefinition
{
  name = 'ListSubscriptionOrganizationUnitSets';
  path = '/message/ListSubscriptionOrganizationUnitSets';
  request?: ListSubscriptionOrganizationUnitSets;
  response?: ListSubscriptionOrganizationUnitSetsResponse;
}

export class SvcListSubscriptions implements IEvaServiceDefinition
{
  name = 'ListSubscriptions';
  path = '/message/ListSubscriptions';
  request?: ListSubscriptions;
  response?: ListSubscriptionsResponse;
}

export class SvcListSubscriptionUsers implements IEvaServiceDefinition
{
  name = 'ListSubscriptionUsers';
  path = '/message/ListSubscriptionUsers';
  request?: ListSubscriptionUsers;
  response?: ListSubscriptionUsersResponse;
}

export class SvcListSupplierProducts implements IEvaServiceDefinition
{
  name = 'ListSupplierProducts';
  path = '/message/ListSupplierProducts';
  request?: ListSupplierProducts;
  response?: ListSupplierProductsResponse;
}

export class SvcListSurveyCategories implements IEvaServiceDefinition
{
  name = 'ListSurveyCategories';
  path = '/message/ListSurveyCategories';
  request?: ListSurveyCategories;
  response?: ListSurveyCategoriesResponse;
}

export class SvcListSurveyResponses implements IEvaServiceDefinition
{
  name = 'ListSurveyResponses';
  path = '/message/ListSurveyResponses';
  request?: ListSurveyResponses;
  response?: ListSurveyResponsesResponse;
}

export class SvcListSurveys implements IEvaServiceDefinition
{
  name = 'ListSurveys';
  path = '/message/ListSurveys';
  request?: ListSurveys;
  response?: ListSurveysResponse;
}

export class SvcListTemplateHandlers implements IEvaServiceDefinition
{
  name = 'ListTemplateHandlers';
  path = '/message/ListTemplateHandlers';
  request?: ListTemplateHandlers;
  response?: ListTemplateHandlersResponse;
}

export class SvcListUnitPriceCorrectionReasons implements IEvaServiceDefinition
{
  name = 'ListUnitPriceCorrectionReasons';
  path = '/message/ListUnitPriceCorrectionReasons';
  request?: ListUnitPriceCorrectionReasons;
  response?: ListUnitPriceCorrectionReasonsResponse;
}

export class SvcListUserAgreements implements IEvaServiceDefinition
{
  name = 'ListUserAgreements';
  path = '/message/ListUserAgreements';
  request?: ListUserAgreements;
  response?: ListUserAgreementsResponse;
}

export class SvcListUserBoughtProducts implements IEvaServiceDefinition
{
  name = 'ListUserBoughtProducts';
  path = '/message/ListUserBoughtProducts';
  request?: ListUserBoughtProducts;
  response?: ListUserBoughtProductsResponse;
}

export class SvcListUserOrganizationUnitRoles implements IEvaServiceDefinition
{
  name = 'ListUserOrganizationUnitRoles';
  path = '/message/ListUserOrganizationUnitRoles';
  request?: ListUserOrganizationUnitRoles;
  response?: ListUserOrganizationUnitRolesResponse;
}

export class SvcListUserPersonalizedPromotions implements IEvaServiceDefinition
{
  name = 'ListUserPersonalizedPromotions';
  path = '/message/ListUserPersonalizedPromotions';
  request?: ListUserPersonalizedPromotions;
  response?: ListUserPersonalizedPromotionsResponse;
}

export class SvcListUserRequirements implements IEvaServiceDefinition
{
  name = 'ListUserRequirements';
  path = '/message/ListUserRequirements';
  request?: ListUserRequirements;
  response?: ListUserRequirementsResponse;
}

export class SvcListUserRequirementSets implements IEvaServiceDefinition
{
  name = 'ListUserRequirementSets';
  path = '/message/ListUserRequirementSets';
  request?: ListUserRequirementSets;
  response?: ListUserRequirementSetsResponse;
}

export class SvcListVisibilityGroupConfigurations implements IEvaServiceDefinition
{
  name = 'ListVisibilityGroupConfigurations';
  path = '/message/ListVisibilityGroupConfigurations';
  request?: ListVisibilityGroupConfigurations;
  response?: ListVisibilityGroupConfigurationsResponse;
}

export class SvcListVisibilityGroups implements IEvaServiceDefinition
{
  name = 'ListVisibilityGroups';
  path = '/message/ListVisibilityGroups';
  request?: ListVisibilityGroups;
  response?: ListVisibilityGroupsResponse;
}

export class SvcListWidgetConfigurations implements IEvaServiceDefinition
{
  name = 'ListWidgetConfigurations';
  path = '/message/ListWidgetConfigurations';
  request?: ListWidgetConfigurations;
  response?: ListWidgetConfigurationsResponse;
}

export class SvcListWishlists implements IEvaServiceDefinition
{
  name = 'ListWishlists';
  path = '/message/ListWishlists';
  request?: ListWishlists;
  response?: ListWishlistsResponse;
}

export class SvcLocalizeOpenCashDrawerReason implements IEvaServiceDefinition
{
  name = 'LocalizeOpenCashDrawerReason';
  path = '/message/LocalizeOpenCashDrawerReason';
  request?: LocalizeOpenCashDrawerReason;
  response?: EmptyResponseMessage;
}

export class SvcMigratePaymentTypeOrganizationUnitSetting implements IEvaServiceDefinition
{
  name = 'MigratePaymentTypeOrganizationUnitSetting';
  path = '/message/MigratePaymentTypeOrganizationUnitSetting';
  request?: MigratePaymentTypeOrganizationUnitSetting;
  response?: MigratePaymentTypeOrganizationUnitSettingResponse;
}

export class SvcMoveDiscountLayer implements IEvaServiceDefinition
{
  name = 'MoveDiscountLayer';
  path = '/message/MoveDiscountLayer';
  request?: MoveDiscountLayer;
  response?: EmptyResponseMessage;
}

export class SvcPreviewCDNConfigurationUrl implements IEvaServiceDefinition
{
  name = 'PreviewCDNConfigurationUrl';
  path = '/message/PreviewCDNConfigurationUrl';
  request?: PreviewCDNConfigurationUrl;
  response?: PreviewCDNConfigurationUrlResponse;
}

export class SvcPreviewMessageTemplate implements IEvaServiceDefinition
{
  name = 'PreviewMessageTemplate';
  path = '/message/PreviewMessageTemplate';
  request?: PreviewMessageTemplate;
  response?: PreviewMessageTemplateResponse;
}

export class SvcPreviewOrganizationUnitSet implements IEvaServiceDefinition
{
  name = 'PreviewOrganizationUnitSet';
  path = '/message/PreviewOrganizationUnitSet';
  request?: PreviewOrganizationUnitSet;
  response?: PreviewOrganizationUnitSetResponse;
}

export class SvcPreviewPriceListRoundingAdjustment implements IEvaServiceDefinition
{
  name = 'PreviewPriceListRoundingAdjustment';
  path = '/message/PreviewPriceListRoundingAdjustment';
  request?: PreviewPriceListRoundingAdjustment;
  response?: PreviewPriceListRoundingAdjustmentResponse;
}

export class SvcPrintCaseReceipt implements IEvaServiceDefinition
{
  name = 'PrintCaseReceipt';
  path = '/message/PrintCaseReceipt';
  request?: PrintCaseReceipt;
  response?: EmptyResponseMessage;
}

export class SvcPrintQRCode implements IEvaServiceDefinition
{
  name = 'PrintQRCode';
  path = '/message/PrintQRCode';
  request?: PrintQRCode;
  response?: EmptyResponseMessage;
}

export class SvcProcessUnshippedPurchaseOrdersFromExcel implements IEvaServiceDefinition
{
  name = 'ProcessUnshippedPurchaseOrdersFromExcel';
  path = '/message/ProcessUnshippedPurchaseOrdersFromExcel';
  request?: ProcessUnshippedPurchaseOrdersFromExcel;
  response?: EmptyResponseMessage;
}

export class SvcPublishSurvey implements IEvaServiceDefinition
{
  name = 'PublishSurvey';
  path = '/message/PublishSurvey';
  request?: PublishSurvey;
  response?: EmptyResponseMessage;
}

export class SvcPushBoughtProductsForUsers_Async implements IEvaServiceDefinition
{
  name = 'PushBoughtProductsForUsers_Async';
  path = '/async-message/PushBoughtProductsForUsers';
  request?: PushBoughtProductsForUsers_Async;
  response?: PushBoughtProductsForUsers_AsyncResponse;
}

export class SvcPushBoughtProductsForUsers_AsyncResult implements IEvaServiceDefinition
{
  name = 'PushBoughtProductsForUsers_AsyncResult';
  path = '/async-result/PushBoughtProductsForUsers';
  request?: PushBoughtProductsForUsers_AsyncResult;
  response?: PushBoughtProductsForUsersResponse;
}

export class SvcPushCase implements IEvaServiceDefinition
{
  name = 'PushCase';
  path = '/message/PushCase';
  request?: PushCase;
  response?: PushCaseResponse;
}

export class SvcPushCompanies_Async implements IEvaServiceDefinition
{
  name = 'PushCompanies_Async';
  path = '/async-message/PushCompanies';
  request?: PushCompanies_Async;
  response?: PushCompanies_AsyncResponse;
}

export class SvcPushCompanies_AsyncResult implements IEvaServiceDefinition
{
  name = 'PushCompanies_AsyncResult';
  path = '/async-result/PushCompanies';
  request?: PushCompanies_AsyncResult;
  response?: PushCompaniesResponse;
}

export class SvcPushCompany_Async implements IEvaServiceDefinition
{
  name = 'PushCompany_Async';
  path = '/async-message/PushCompany';
  request?: PushCompany_Async;
  response?: PushCompany_AsyncResponse;
}

export class SvcPushCompany_AsyncResult implements IEvaServiceDefinition
{
  name = 'PushCompany_AsyncResult';
  path = '/async-result/PushCompany';
  request?: PushCompany_AsyncResult;
  response?: PushCompanyResponse;
}

export class SvcPushDiscountCoupons implements IEvaServiceDefinition
{
  name = 'PushDiscountCoupons';
  path = '/message/PushDiscountCoupons';
  request?: PushDiscountCoupons;
  response?: PushDiscountCouponsResponse;
}

export class SvcPushLoyaltyProgram_Async implements IEvaServiceDefinition
{
  name = 'PushLoyaltyProgram_Async';
  path = '/async-message/PushLoyaltyProgram';
  request?: PushLoyaltyProgram_Async;
  response?: PushLoyaltyProgram_AsyncResponse;
}

export class SvcPushLoyaltyProgram_AsyncResult implements IEvaServiceDefinition
{
  name = 'PushLoyaltyProgram_AsyncResult';
  path = '/async-result/PushLoyaltyProgram';
  request?: PushLoyaltyProgram_AsyncResult;
  response?: PushLoyaltyProgramResponse;
}

export class SvcPushLoyaltyProgramGroup_Async implements IEvaServiceDefinition
{
  name = 'PushLoyaltyProgramGroup_Async';
  path = '/async-message/PushLoyaltyProgramGroup';
  request?: PushLoyaltyProgramGroup_Async;
  response?: PushLoyaltyProgramGroup_AsyncResponse;
}

export class SvcPushLoyaltyProgramGroup_AsyncResult implements IEvaServiceDefinition
{
  name = 'PushLoyaltyProgramGroup_AsyncResult';
  path = '/async-result/PushLoyaltyProgramGroup';
  request?: PushLoyaltyProgramGroup_AsyncResult;
  response?: PushLoyaltyProgramGroupResponse;
}

export class SvcPushLoyaltyPrograms_Async implements IEvaServiceDefinition
{
  name = 'PushLoyaltyPrograms_Async';
  path = '/async-message/PushLoyaltyPrograms';
  request?: PushLoyaltyPrograms_Async;
  response?: PushLoyaltyPrograms_AsyncResponse;
}

export class SvcPushLoyaltyPrograms_AsyncResult implements IEvaServiceDefinition
{
  name = 'PushLoyaltyPrograms_AsyncResult';
  path = '/async-result/PushLoyaltyPrograms';
  request?: PushLoyaltyPrograms_AsyncResult;
  response?: PushLoyaltyProgramsResponse;
}

export class SvcPushUserBoughtProduct implements IEvaServiceDefinition
{
  name = 'PushUserBoughtProduct';
  path = '/message/PushUserBoughtProduct';
  request?: PushUserBoughtProduct;
  response?: EmptyResponseMessage;
}

export class SvcPushUserPersonalizedPromotionProducts implements IEvaServiceDefinition
{
  name = 'PushUserPersonalizedPromotionProducts';
  path = '/message/PushUserPersonalizedPromotionProducts';
  request?: PushUserPersonalizedPromotionProducts;
  response?: EmptyResponseMessage;
}

export class SvcPushUserSubscription implements IEvaServiceDefinition
{
  name = 'PushUserSubscription';
  path = '/message/PushUserSubscription';
  request?: PushUserSubscription;
  response?: EmptyResponseMessage;
}

export class SvcRebalanceLoyaltyPoints implements IEvaServiceDefinition
{
  name = 'RebalanceLoyaltyPoints';
  path = '/message/RebalanceLoyaltyPoints';
  request?: RebalanceLoyaltyPoints;
  response?: EmptyResponseMessage;
}

export class SvcRebalanceLoyaltyPointsForUsers_Async implements IEvaServiceDefinition
{
  name = 'RebalanceLoyaltyPointsForUsers_Async';
  path = '/async-message/RebalanceLoyaltyPointsForUsers';
  request?: RebalanceLoyaltyPointsForUsers_Async;
  response?: RebalanceLoyaltyPointsForUsers_AsyncResponse;
}

export class SvcRebalanceLoyaltyPointsForUsers_AsyncResult implements IEvaServiceDefinition
{
  name = 'RebalanceLoyaltyPointsForUsers_AsyncResult';
  path = '/async-result/RebalanceLoyaltyPointsForUsers';
  request?: RebalanceLoyaltyPointsForUsers_AsyncResult;
  response?: RebalanceLoyaltyPointsForUsersResponse;
}

export class SvcRefillStockAllocation implements IEvaServiceDefinition
{
  name = 'RefillStockAllocation';
  path = '/message/RefillStockAllocation';
  request?: RefillStockAllocation;
  response?: EmptyResponseMessage;
}

export class SvcRegisterUserBoughtProduct implements IEvaServiceDefinition
{
  name = 'RegisterUserBoughtProduct';
  path = '/message/RegisterUserBoughtProduct';
  request?: RegisterUserBoughtProduct;
  response?: UserBoughtProductResponse;
}

export class SvcReloadLoyaltyProgramTierBenefit implements IEvaServiceDefinition
{
  name = 'ReloadLoyaltyProgramTierBenefit';
  path = '/message/ReloadLoyaltyProgramTierBenefit';
  request?: ReloadLoyaltyProgramTierBenefit;
  response?: EmptyResponseMessage;
}

export class SvcRemoveBenefitsFromLoyaltyProgramTier implements IEvaServiceDefinition
{
  name = 'RemoveBenefitsFromLoyaltyProgramTier';
  path = '/message/RemoveBenefitsFromLoyaltyProgramTier';
  request?: RemoveBenefitsFromLoyaltyProgramTier;
  response?: EmptyResponseMessage;
}

export class SvcRemoveCaseInteractionBlob implements IEvaServiceDefinition
{
  name = 'RemoveCaseInteractionBlob';
  path = '/message/RemoveCaseInteractionBlob';
  request?: RemoveCaseInteractionBlob;
  response?: EmptyResponseMessage;
}

export class SvcRemoveCaseRelatedItems implements IEvaServiceDefinition
{
  name = 'RemoveCaseRelatedItems';
  path = '/message/RemoveCaseRelatedItems';
  request?: RemoveCaseRelatedItems;
  response?: EmptyResponseMessage;
}

export class SvcRemoveLoyaltyProgramPriceList implements IEvaServiceDefinition
{
  name = 'RemoveLoyaltyProgramPriceList';
  path = '/message/RemoveLoyaltyProgramPriceList';
  request?: RemoveLoyaltyProgramPriceList;
  response?: EmptyResponseMessage;
}

export class SvcRemoveLoyaltyProgramRequiredCustomField implements IEvaServiceDefinition
{
  name = 'RemoveLoyaltyProgramRequiredCustomField';
  path = '/message/RemoveLoyaltyProgramRequiredCustomField';
  request?: RemoveLoyaltyProgramRequiredCustomField;
  response?: EmptyResponseMessage;
}

export class SvcRemovePackageFromCarrier implements IEvaServiceDefinition
{
  name = 'RemovePackageFromCarrier';
  path = '/message/RemovePackageFromCarrier';
  request?: RemovePackageFromCarrier;
  response?: EmptyResponseMessage;
}

export class SvcRemovePersonalizedPromotionProducts implements IEvaServiceDefinition
{
  name = 'RemovePersonalizedPromotionProducts';
  path = '/message/RemovePersonalizedPromotionProducts';
  request?: RemovePersonalizedPromotionProducts;
  response?: EmptyResponseMessage;
}

export class SvcRemoveProductsFromAssortment implements IEvaServiceDefinition
{
  name = 'RemoveProductsFromAssortment';
  path = '/message/RemoveProductsFromAssortment';
  request?: RemoveProductsFromAssortment;
  response?: EmptyResponseMessage;
}

export class SvcRemoveRequiredCustomFieldsFromManualDiscount implements IEvaServiceDefinition
{
  name = 'RemoveRequiredCustomFieldsFromManualDiscount';
  path = '/message/RemoveRequiredCustomFieldsFromManualDiscount';
  request?: RemoveRequiredCustomFieldsFromManualDiscount;
  response?: EmptyResponseMessage;
}

export class SvcRemoveRolesFromManualDiscount implements IEvaServiceDefinition
{
  name = 'RemoveRolesFromManualDiscount';
  path = '/message/RemoveRolesFromManualDiscount';
  request?: RemoveRolesFromManualDiscount;
  response?: EmptyResponseMessage;
}

export class SvcRestartSurveyResponse implements IEvaServiceDefinition
{
  name = 'RestartSurveyResponse';
  path = '/message/RestartSurveyResponse';
  request?: RestartSurveyResponse;
  response?: QuestionResponse;
}

export class SvcRevokeLoyaltyPoints implements IEvaServiceDefinition
{
  name = 'RevokeLoyaltyPoints';
  path = '/message/RevokeLoyaltyPoints';
  request?: RevokeLoyaltyPoints;
  response?: EmptyResponseMessage;
}

export class SvcRotateEndpointConfigurationKey implements IEvaServiceDefinition
{
  name = 'RotateEndpointConfigurationKey';
  path = '/message/RotateEndpointConfigurationKey';
  request?: RotateEndpointConfigurationKey;
  response?: RotateEndpointConfigurationKeyResponse;
}

export class SvcSearchDiscountsByQuery implements IEvaServiceDefinition
{
  name = 'SearchDiscountsByQuery';
  path = '/message/SearchDiscountsByQuery';
  request?: SearchDiscountsByQuery;
  response?: SearchDiscountsByQueryResponse;
}

export class SvcSearchOrganizationUnitCompany implements IEvaServiceDefinition
{
  name = 'SearchOrganizationUnitCompany';
  path = '/message/SearchOrganizationUnitCompany';
  request?: SearchOrganizationUnitCompany;
  response?: SearchOrganizationUnitCompanyResponse;
}

export class SvcSearchStockMutations implements IEvaServiceDefinition
{
  name = 'SearchStockMutations';
  path = '/message/SearchStockMutations';
  request?: SearchStockMutations;
  response?: SearchStockMutationsResponse;
}

export class SvcSearchSurveys implements IEvaServiceDefinition
{
  name = 'SearchSurveys';
  path = '/message/SearchSurveys';
  request?: SearchSurveys;
  response?: SearchSurveysResponse;
}

export class SvcSelectUserPersonalizedPromotionProducts implements IEvaServiceDefinition
{
  name = 'SelectUserPersonalizedPromotionProducts';
  path = '/message/SelectUserPersonalizedPromotionProducts';
  request?: SelectUserPersonalizedPromotionProducts;
  response?: EmptyResponseMessage;
}

export class SvcSendSampleMailMessageTemplate implements IEvaServiceDefinition
{
  name = 'SendSampleMailMessageTemplate';
  path = '/message/SendSampleMailMessageTemplate';
  request?: SendSampleMailMessageTemplate;
  response?: EmptyResponseMessage;
}

export class SvcSetAppSetting implements IEvaServiceDefinition
{
  name = 'SetAppSetting';
  path = '/message/SetAppSetting';
  request?: SetAppSetting;
  response?: EmptyResponseMessage;
}

export class SvcSetAppSettings implements IEvaServiceDefinition
{
  name = 'SetAppSettings';
  path = '/message/SetAppSettings';
  request?: SetAppSettings;
  response?: EmptyResponseMessage;
}

export class SvcSetAuditingSettings implements IEvaServiceDefinition
{
  name = 'SetAuditingSettings';
  path = '/message/SetAuditingSettings';
  request?: SetAuditingSettings;
  response?: EmptyResponseMessage;
}

export class SvcSetCaseRelatedData implements IEvaServiceDefinition
{
  name = 'SetCaseRelatedData';
  path = '/message/SetCaseRelatedData';
  request?: SetCaseRelatedData;
  response?: EmptyResponseMessage;
}

export class SvcSetCustomFieldOptions implements IEvaServiceDefinition
{
  name = 'SetCustomFieldOptions';
  path = '/message/SetCustomFieldOptions';
  request?: SetCustomFieldOptions;
  response?: EmptyResponseMessage;
}

export class SvcSetDefaultLoyaltyProgramTier implements IEvaServiceDefinition
{
  name = 'SetDefaultLoyaltyProgramTier';
  path = '/message/SetDefaultLoyaltyProgramTier';
  request?: SetDefaultLoyaltyProgramTier;
  response?: EmptyResponseMessage;
}

export class SvcSetDiscountLayerSequences implements IEvaServiceDefinition
{
  name = 'SetDiscountLayerSequences';
  path = '/message/SetDiscountLayerSequences';
  request?: SetDiscountLayerSequences;
  response?: EmptyResponseMessage;
}

export class SvcSetEventLocationOpeningHours implements IEvaServiceDefinition
{
  name = 'SetEventLocationOpeningHours';
  path = '/message/SetEventLocationOpeningHours';
  request?: SetEventLocationOpeningHours;
  response?: EmptyResponseMessage;
}

export class SvcSetIpFilterList implements IEvaServiceDefinition
{
  name = 'SetIpFilterList';
  path = '/message/SetIpFilterList';
  request?: SetIpFilterList;
  response?: EmptyResponseMessage;
}

export class SvcSetLoyaltyProgramBadgeSequences implements IEvaServiceDefinition
{
  name = 'SetLoyaltyProgramBadgeSequences';
  path = '/message/SetLoyaltyProgramBadgeSequences';
  request?: SetLoyaltyProgramBadgeSequences;
  response?: EmptyResponseMessage;
}

export class SvcSetOrderLoyaltyProgramPaymentTypes implements IEvaServiceDefinition
{
  name = 'SetOrderLoyaltyProgramPaymentTypes';
  path = '/message/SetOrderLoyaltyProgramPaymentTypes';
  request?: SetOrderLoyaltyProgramPaymentTypes;
  response?: EmptyResponseMessage;
}

export class SvcSetOrganizationUnitSubsetSequences implements IEvaServiceDefinition
{
  name = 'SetOrganizationUnitSubsetSequences';
  path = '/message/SetOrganizationUnitSubsetSequences';
  request?: SetOrganizationUnitSubsetSequences;
  response?: EmptyResponseMessage;
}

export class SvcSetOrganizationUnitSupplierData implements IEvaServiceDefinition
{
  name = 'SetOrganizationUnitSupplierData';
  path = '/message/SetOrganizationUnitSupplierData';
  request?: SetOrganizationUnitSupplierData;
  response?: EmptyResponseMessage;
}

export class SvcSetPaymentTypeRoles implements IEvaServiceDefinition
{
  name = 'SetPaymentTypeRoles';
  path = '/message/SetPaymentTypeRoles';
  request?: SetPaymentTypeRoles;
  response?: EmptyResponseMessage;
}

export class SvcSetRolesForRoleSet implements IEvaServiceDefinition
{
  name = 'SetRolesForRoleSet';
  path = '/message/SetRolesForRoleSet';
  request?: SetRolesForRoleSet;
  response?: EmptyResponseMessage;
}

export class SvcSetSetting implements IEvaServiceDefinition
{
  name = 'SetSetting';
  path = '/message/SetSetting';
  request?: SetSetting;
  response?: EmptyResponseMessage;
}

export class SvcSetSettings implements IEvaServiceDefinition
{
  name = 'SetSettings';
  path = '/message/SetSettings';
  request?: SetSettings;
  response?: EmptyResponseMessage;
}

export class SvcSetSurveyQuestionRoutingSequences implements IEvaServiceDefinition
{
  name = 'SetSurveyQuestionRoutingSequences';
  path = '/message/SetSurveyQuestionRoutingSequences';
  request?: SetSurveyQuestionRoutingSequences;
  response?: EmptyResponseMessage;
}

export class SvcSetSurveyQuestionSequences implements IEvaServiceDefinition
{
  name = 'SetSurveyQuestionSequences';
  path = '/message/SetSurveyQuestionSequences';
  request?: SetSurveyQuestionSequences;
  response?: EmptyResponseMessage;
}

export class SvcSetSurveyTranslatableItems implements IEvaServiceDefinition
{
  name = 'SetSurveyTranslatableItems';
  path = '/message/SetSurveyTranslatableItems';
  request?: SetSurveyTranslatableItems;
  response?: EmptyResponseMessage;
}

export class SvcSetUserRoles implements IEvaServiceDefinition
{
  name = 'SetUserRoles';
  path = '/message/SetUserRoles';
  request?: SetUserRoles;
  response?: EmptyResponseMessage;
}

export class SvcSetWidgetSequences implements IEvaServiceDefinition
{
  name = 'SetWidgetSequences';
  path = '/message/SetWidgetSequences';
  request?: SetWidgetSequences;
  response?: EmptyResponseMessage;
}

export class SvcStartSurvey implements IEvaServiceDefinition
{
  name = 'StartSurvey';
  path = '/message/StartSurvey';
  request?: StartSurvey;
  response?: StartSurveyResponse;
}

export class SvcStartSurveyPreview implements IEvaServiceDefinition
{
  name = 'StartSurveyPreview';
  path = '/message/StartSurveyPreview';
  request?: StartSurveyPreview;
  response?: StartSurveyPreviewResponse;
}

export class SvcTestEndpointConfiguration implements IEvaServiceDefinition
{
  name = 'TestEndpointConfiguration';
  path = '/message/TestEndpointConfiguration';
  request?: TestEndpointConfiguration;
  response?: TestEndpointConfigurationResponse;
}

export class SvcUnblockUserSubscription implements IEvaServiceDefinition
{
  name = 'UnblockUserSubscription';
  path = '/message/UnblockUserSubscription';
  request?: UnblockUserSubscription;
  response?: EmptyResponseMessage;
}

export class SvcUnsetAppSetting implements IEvaServiceDefinition
{
  name = 'UnsetAppSetting';
  path = '/message/UnsetAppSetting';
  request?: UnsetAppSetting;
  response?: EmptyResponseMessage;
}

export class SvcUnsetCustomFieldOptions implements IEvaServiceDefinition
{
  name = 'UnsetCustomFieldOptions';
  path = '/message/UnsetCustomFieldOptions';
  request?: UnsetCustomFieldOptions;
  response?: EmptyResponseMessage;
}

export class SvcUnsetSetting implements IEvaServiceDefinition
{
  name = 'UnsetSetting';
  path = '/message/UnsetSetting';
  request?: UnsetSetting;
  response?: EmptyResponseMessage;
}

export class SvcUpdateAccount implements IEvaServiceDefinition
{
  name = 'UpdateAccount';
  path = '/message/UpdateAccount';
  request?: UpdateAccount;
  response?: EmptyResponseMessage;
}

export class SvcUpdateAppointmentCancellationReason implements IEvaServiceDefinition
{
  name = 'UpdateAppointmentCancellationReason';
  path = '/message/UpdateAppointmentCancellationReason';
  request?: UpdateAppointmentCancellationReason;
  response?: EmptyResponseMessage;
}

export class SvcUpdateAssortment implements IEvaServiceDefinition
{
  name = 'UpdateAssortment';
  path = '/message/UpdateAssortment';
  request?: UpdateAssortment;
  response?: EmptyResponseMessage;
}

export class SvcUpdateCarrier implements IEvaServiceDefinition
{
  name = 'UpdateCarrier';
  path = '/message/UpdateCarrier';
  request?: UpdateCarrier;
  response?: EmptyResponseMessage;
}

export class SvcUpdateCase implements IEvaServiceDefinition
{
  name = 'UpdateCase';
  path = '/message/UpdateCase';
  request?: UpdateCase;
  response?: EmptyResponseMessage;
}

export class SvcUpdateCaseInteraction implements IEvaServiceDefinition
{
  name = 'UpdateCaseInteraction';
  path = '/message/UpdateCaseInteraction';
  request?: UpdateCaseInteraction;
  response?: EmptyResponseMessage;
}

export class SvcUpdateCaseState implements IEvaServiceDefinition
{
  name = 'UpdateCaseState';
  path = '/message/UpdateCaseState';
  request?: UpdateCaseState;
  response?: UpdateCaseStateResponse;
}

export class SvcUpdateCaseStatus implements IEvaServiceDefinition
{
  name = 'UpdateCaseStatus';
  path = '/message/UpdateCaseStatus';
  request?: UpdateCaseStatus;
  response?: EmptyResponseMessage;
}

export class SvcUpdateCaseSummary implements IEvaServiceDefinition
{
  name = 'UpdateCaseSummary';
  path = '/message/UpdateCaseSummary';
  request?: UpdateCaseSummary;
  response?: EmptyResponseMessage;
}

export class SvcUpdateCaseTopic implements IEvaServiceDefinition
{
  name = 'UpdateCaseTopic';
  path = '/message/UpdateCaseTopic';
  request?: UpdateCaseTopic;
  response?: EmptyResponseMessage;
}

export class SvcUpdateCashExpenseType implements IEvaServiceDefinition
{
  name = 'UpdateCashExpenseType';
  path = '/message/UpdateCashExpenseType';
  request?: UpdateCashExpenseType;
  response?: EmptyResponseMessage;
}

export class SvcUpdateCashHandler implements IEvaServiceDefinition
{
  name = 'UpdateCashHandler';
  path = '/message/UpdateCashHandler';
  request?: UpdateCashHandler;
  response?: EmptyResponseMessage;
}

export class SvcUpdateCDNConfiguration implements IEvaServiceDefinition
{
  name = 'UpdateCDNConfiguration';
  path = '/message/UpdateCDNConfiguration';
  request?: UpdateCDNConfiguration;
  response?: EmptyResponseMessage;
}

export class SvcUpdateCheckoutOption implements IEvaServiceDefinition
{
  name = 'UpdateCheckoutOption';
  path = '/message/UpdateCheckoutOption';
  request?: UpdateCheckoutOption;
  response?: EmptyResponseMessage;
}

export class SvcUpdateCheckoutOptionCategory implements IEvaServiceDefinition
{
  name = 'UpdateCheckoutOptionCategory';
  path = '/message/UpdateCheckoutOptionCategory';
  request?: UpdateCheckoutOptionCategory;
  response?: EmptyResponseMessage;
}

export class SvcUpdateCheckoutOptionSequences implements IEvaServiceDefinition
{
  name = 'UpdateCheckoutOptionSequences';
  path = '/message/UpdateCheckoutOptionSequences';
  request?: UpdateCheckoutOptionSequences;
  response?: EmptyResponseMessage;
}

export class SvcUpdateClientApplication implements IEvaServiceDefinition
{
  name = 'UpdateClientApplication';
  path = '/message/UpdateClientApplication';
  request?: UpdateClientApplication;
  response?: EmptyResponseMessage;
}

export class SvcUpdateCompany implements IEvaServiceDefinition
{
  name = 'UpdateCompany';
  path = '/message/UpdateCompany';
  request?: UpdateCompany;
  response?: EmptyResponseMessage;
}

export class SvcUpdateCompanyRequirement implements IEvaServiceDefinition
{
  name = 'UpdateCompanyRequirement';
  path = '/message/UpdateCompanyRequirement';
  request?: UpdateCompanyRequirement;
  response?: EmptyResponseMessage;
}

export class SvcUpdateCostPriceCalculation implements IEvaServiceDefinition
{
  name = 'UpdateCostPriceCalculation';
  path = '/message/UpdateCostPriceCalculation';
  request?: UpdateCostPriceCalculation;
  response?: EmptyResponseMessage;
}

export class SvcUpdateCustomField implements IEvaServiceDefinition
{
  name = 'UpdateCustomField';
  path = '/message/UpdateCustomField';
  request?: UpdateCustomField;
  response?: EmptyResponseMessage;
}

export class SvcUpdateDevice implements IEvaServiceDefinition
{
  name = 'UpdateDevice';
  path = '/message/UpdateDevice';
  request?: UpdateDevice;
  response?: EmptyResponseMessage;
}

export class SvcUpdateDiscount implements IEvaServiceDefinition
{
  name = 'UpdateDiscount';
  path = '/message/UpdateDiscount';
  request?: UpdateDiscount;
  response?: EmptyResponseMessage;
}

export class SvcUpdateDiscountCampaign implements IEvaServiceDefinition
{
  name = 'UpdateDiscountCampaign';
  path = '/message/UpdateDiscountCampaign';
  request?: UpdateDiscountCampaign;
  response?: EmptyResponseMessage;
}

export class SvcUpdateDiscountCampaignBudget implements IEvaServiceDefinition
{
  name = 'UpdateDiscountCampaignBudget';
  path = '/message/UpdateDiscountCampaignBudget';
  request?: UpdateDiscountCampaignBudget;
  response?: EmptyResponseMessage;
}

export class SvcUpdateDiscountCoupon implements IEvaServiceDefinition
{
  name = 'UpdateDiscountCoupon';
  path = '/message/UpdateDiscountCoupon';
  request?: UpdateDiscountCoupon;
  response?: UpdateDiscountCouponResponse;
}

export class SvcUpdateDiscountLayer implements IEvaServiceDefinition
{
  name = 'UpdateDiscountLayer';
  path = '/message/UpdateDiscountLayer';
  request?: UpdateDiscountLayer;
  response?: EmptyResponseMessage;
}

export class SvcUpdateDiscountTemplate implements IEvaServiceDefinition
{
  name = 'UpdateDiscountTemplate';
  path = '/message/UpdateDiscountTemplate';
  request?: UpdateDiscountTemplate;
  response?: EmptyResponseMessage;
}

export class SvcUpdateElevationSkipReason implements IEvaServiceDefinition
{
  name = 'UpdateElevationSkipReason';
  path = '/message/UpdateElevationSkipReason';
  request?: UpdateElevationSkipReason;
  response?: EmptyResponseMessage;
}

export class SvcUpdateEndpointConfiguration implements IEvaServiceDefinition
{
  name = 'UpdateEndpointConfiguration';
  path = '/message/UpdateEndpointConfiguration';
  request?: UpdateEndpointConfiguration;
  response?: EmptyResponseMessage;
}

export class SvcUpdateEntityFieldValidator implements IEvaServiceDefinition
{
  name = 'UpdateEntityFieldValidator';
  path = '/message/UpdateEntityFieldValidator';
  request?: UpdateEntityFieldValidator;
  response?: EmptyResponseMessage;
}

export class SvcUpdateEvent implements IEvaServiceDefinition
{
  name = 'UpdateEvent';
  path = '/message/UpdateEvent';
  request?: UpdateEvent;
  response?: EmptyResponseMessage;
}

export class SvcUpdateEventLocation implements IEvaServiceDefinition
{
  name = 'UpdateEventLocation';
  path = '/message/UpdateEventLocation';
  request?: UpdateEventLocation;
  response?: EmptyResponseMessage;
}

export class SvcUpdateEventType implements IEvaServiceDefinition
{
  name = 'UpdateEventType';
  path = '/message/UpdateEventType';
  request?: UpdateEventType;
  response?: EmptyResponseMessage;
}

export class SvcUpdateFraudItem implements IEvaServiceDefinition
{
  name = 'UpdateFraudItem';
  path = '/message/UpdateFraudItem';
  request?: UpdateFraudItem;
  response?: EmptyResponseMessage;
}

export class SvcUpdateGiftCardConfiguration implements IEvaServiceDefinition
{
  name = 'UpdateGiftCardConfiguration';
  path = '/message/UpdateGiftCardConfiguration';
  request?: UpdateGiftCardConfiguration;
  response?: EmptyResponseMessage;
}

export class SvcUpdateInquiry implements IEvaServiceDefinition
{
  name = 'UpdateInquiry';
  path = '/message/UpdateInquiry';
  request?: UpdateInquiry;
  response?: EmptyResponseMessage;
}

export class SvcUpdateInquiryItem implements IEvaServiceDefinition
{
  name = 'UpdateInquiryItem';
  path = '/message/UpdateInquiryItem';
  request?: UpdateInquiryItem;
  response?: EmptyResponseMessage;
}

export class SvcUpdateLoyaltyProgram implements IEvaServiceDefinition
{
  name = 'UpdateLoyaltyProgram';
  path = '/message/UpdateLoyaltyProgram';
  request?: UpdateLoyaltyProgram;
  response?: EmptyResponseMessage;
}

export class SvcUpdateLoyaltyProgramBadge implements IEvaServiceDefinition
{
  name = 'UpdateLoyaltyProgramBadge';
  path = '/message/UpdateLoyaltyProgramBadge';
  request?: UpdateLoyaltyProgramBadge;
  response?: EmptyResponseMessage;
}

export class SvcUpdateLoyaltyProgramBadgeCategory implements IEvaServiceDefinition
{
  name = 'UpdateLoyaltyProgramBadgeCategory';
  path = '/message/UpdateLoyaltyProgramBadgeCategory';
  request?: UpdateLoyaltyProgramBadgeCategory;
  response?: EmptyResponseMessage;
}

export class SvcUpdateLoyaltyProgramBadgeCondition implements IEvaServiceDefinition
{
  name = 'UpdateLoyaltyProgramBadgeCondition';
  path = '/message/UpdateLoyaltyProgramBadgeCondition';
  request?: UpdateLoyaltyProgramBadgeCondition;
  response?: EmptyResponseMessage;
}

export class SvcUpdateLoyaltyProgramBenefit implements IEvaServiceDefinition
{
  name = 'UpdateLoyaltyProgramBenefit';
  path = '/message/UpdateLoyaltyProgramBenefit';
  request?: UpdateLoyaltyProgramBenefit;
  response?: EmptyResponseMessage;
}

export class SvcUpdateLoyaltyProgramBudget implements IEvaServiceDefinition
{
  name = 'UpdateLoyaltyProgramBudget';
  path = '/message/UpdateLoyaltyProgramBudget';
  request?: UpdateLoyaltyProgramBudget;
  response?: EmptyResponseMessage;
}

export class SvcUpdateLoyaltyProgramCondition implements IEvaServiceDefinition
{
  name = 'UpdateLoyaltyProgramCondition';
  path = '/message/UpdateLoyaltyProgramCondition';
  request?: UpdateLoyaltyProgramCondition;
  response?: EmptyResponseMessage;
}

export class SvcUpdateLoyaltyProgramGroup implements IEvaServiceDefinition
{
  name = 'UpdateLoyaltyProgramGroup';
  path = '/message/UpdateLoyaltyProgramGroup';
  request?: UpdateLoyaltyProgramGroup;
  response?: EmptyResponseMessage;
}

export class SvcUpdateLoyaltyProgramGroupBudget implements IEvaServiceDefinition
{
  name = 'UpdateLoyaltyProgramGroupBudget';
  path = '/message/UpdateLoyaltyProgramGroupBudget';
  request?: UpdateLoyaltyProgramGroupBudget;
  response?: EmptyResponseMessage;
}

export class SvcUpdateLoyaltyProgramPass implements IEvaServiceDefinition
{
  name = 'UpdateLoyaltyProgramPass';
  path = '/message/UpdateLoyaltyProgramPass';
  request?: UpdateLoyaltyProgramPass;
  response?: EmptyResponseMessage;
}

export class SvcUpdateLoyaltyProgramPaymentType implements IEvaServiceDefinition
{
  name = 'UpdateLoyaltyProgramPaymentType';
  path = '/message/UpdateLoyaltyProgramPaymentType';
  request?: UpdateLoyaltyProgramPaymentType;
  response?: EmptyResponseMessage;
}

export class SvcUpdateLoyaltyProgramProductLimitation implements IEvaServiceDefinition
{
  name = 'UpdateLoyaltyProgramProductLimitation';
  path = '/message/UpdateLoyaltyProgramProductLimitation';
  request?: UpdateLoyaltyProgramProductLimitation;
  response?: EmptyResponseMessage;
}

export class SvcUpdateLoyaltyProgramTier implements IEvaServiceDefinition
{
  name = 'UpdateLoyaltyProgramTier';
  path = '/message/UpdateLoyaltyProgramTier';
  request?: UpdateLoyaltyProgramTier;
  response?: EmptyResponseMessage;
}

export class SvcUpdateLoyaltyProgramTierBenefit implements IEvaServiceDefinition
{
  name = 'UpdateLoyaltyProgramTierBenefit';
  path = '/message/UpdateLoyaltyProgramTierBenefit';
  request?: UpdateLoyaltyProgramTierBenefit;
  response?: EmptyResponseMessage;
}

export class SvcUpdateMessageTemplate implements IEvaServiceDefinition
{
  name = 'UpdateMessageTemplate';
  path = '/message/UpdateMessageTemplate';
  request?: UpdateMessageTemplate;
  response?: EmptyResponseMessage;
}

export class SvcUpdateOpenCashDrawerReason implements IEvaServiceDefinition
{
  name = 'UpdateOpenCashDrawerReason';
  path = '/message/UpdateOpenCashDrawerReason';
  request?: UpdateOpenCashDrawerReason;
  response?: EmptyResponseMessage;
}

export class SvcUpdateOpeningHoursType implements IEvaServiceDefinition
{
  name = 'UpdateOpeningHoursType';
  path = '/message/UpdateOpeningHoursType';
  request?: UpdateOpeningHoursType;
  response?: EmptyResponseMessage;
}

export class SvcUpdateOrderLedgerType implements IEvaServiceDefinition
{
  name = 'UpdateOrderLedgerType';
  path = '/message/UpdateOrderLedgerType';
  request?: UpdateOrderLedgerType;
  response?: UpdateOrderLedgerTypeResponse;
}

export class SvcUpdateOrganizationUnitCompany implements IEvaServiceDefinition
{
  name = 'UpdateOrganizationUnitCompany';
  path = '/message/UpdateOrganizationUnitCompany';
  request?: UpdateOrganizationUnitCompany;
  response?: EmptyResponseMessage;
}

export class SvcUpdateOrganizationUnitCurrency implements IEvaServiceDefinition
{
  name = 'UpdateOrganizationUnitCurrency';
  path = '/message/UpdateOrganizationUnitCurrency';
  request?: UpdateOrganizationUnitCurrency;
  response?: EmptyResponseMessage;
}

export class SvcUpdateOrganizationUnitOpeningHours implements IEvaServiceDefinition
{
  name = 'UpdateOrganizationUnitOpeningHours';
  path = '/message/UpdateOrganizationUnitOpeningHours';
  request?: UpdateOrganizationUnitOpeningHours;
  response?: EmptyResponseMessage;
}

export class SvcUpdateOrganizationUnitRegularOpeningHours implements IEvaServiceDefinition
{
  name = 'UpdateOrganizationUnitRegularOpeningHours';
  path = '/message/UpdateOrganizationUnitRegularOpeningHours';
  request?: UpdateOrganizationUnitRegularOpeningHours;
  response?: EmptyResponseMessage;
}

export class SvcUpdateOrganizationUnitSet implements IEvaServiceDefinition
{
  name = 'UpdateOrganizationUnitSet';
  path = '/message/UpdateOrganizationUnitSet';
  request?: UpdateOrganizationUnitSet;
  response?: EmptyResponseMessage;
}

export class SvcUpdateOrganizationUnitSetScope implements IEvaServiceDefinition
{
  name = 'UpdateOrganizationUnitSetScope';
  path = '/message/UpdateOrganizationUnitSetScope';
  request?: UpdateOrganizationUnitSetScope;
  response?: EmptyResponseMessage;
}

export class SvcUpdateOrganizationUnitShippingMethod implements IEvaServiceDefinition
{
  name = 'UpdateOrganizationUnitShippingMethod';
  path = '/message/UpdateOrganizationUnitShippingMethod';
  request?: UpdateOrganizationUnitShippingMethod;
  response?: EmptyResponseMessage;
}

export class SvcUpdatePackage implements IEvaServiceDefinition
{
  name = 'UpdatePackage';
  path = '/message/UpdatePackage';
  request?: UpdatePackage;
  response?: EmptyResponseMessage;
}

export class SvcUpdatePaymentMethod implements IEvaServiceDefinition
{
  name = 'UpdatePaymentMethod';
  path = '/message/UpdatePaymentMethod';
  request?: UpdatePaymentMethod;
  response?: EmptyResponseMessage;
}

export class SvcUpdatePaymentTransactionLedgerType implements IEvaServiceDefinition
{
  name = 'UpdatePaymentTransactionLedgerType';
  path = '/message/UpdatePaymentTransactionLedgerType';
  request?: UpdatePaymentTransactionLedgerType;
  response?: EmptyResponseMessage;
}

export class SvcUpdatePaymentType implements IEvaServiceDefinition
{
  name = 'UpdatePaymentType';
  path = '/message/UpdatePaymentType';
  request?: UpdatePaymentType;
  response?: EmptyResponseMessage;
}

export class SvcUpdatePersonalizedPromotion implements IEvaServiceDefinition
{
  name = 'UpdatePersonalizedPromotion';
  path = '/message/UpdatePersonalizedPromotion';
  request?: UpdatePersonalizedPromotion;
  response?: EmptyResponseMessage;
}

export class SvcUpdatePointAwardingRule implements IEvaServiceDefinition
{
  name = 'UpdatePointAwardingRule';
  path = '/message/UpdatePointAwardingRule';
  request?: UpdatePointAwardingRule;
  response?: EmptyResponseMessage;
}

export class SvcUpdatePriceList implements IEvaServiceDefinition
{
  name = 'UpdatePriceList';
  path = '/message/UpdatePriceList';
  request?: UpdatePriceList;
  response?: EmptyResponseMessage;
}

export class SvcUpdatePriceListAdjustment implements IEvaServiceDefinition
{
  name = 'UpdatePriceListAdjustment';
  path = '/message/UpdatePriceListAdjustment';
  request?: UpdatePriceListAdjustment;
  response?: EmptyResponseMessage;
}

export class SvcUpdatePriceListManualInputAdjustment implements IEvaServiceDefinition
{
  name = 'UpdatePriceListManualInputAdjustment';
  path = '/message/UpdatePriceListManualInputAdjustment';
  request?: UpdatePriceListManualInputAdjustment;
  response?: EmptyResponseMessage;
}

export class SvcUpdatePriceListOrganizationUnit implements IEvaServiceDefinition
{
  name = 'UpdatePriceListOrganizationUnit';
  path = '/message/UpdatePriceListOrganizationUnit';
  request?: UpdatePriceListOrganizationUnit;
  response?: EmptyResponseMessage;
}

export class SvcUpdatePriceListUsageType implements IEvaServiceDefinition
{
  name = 'UpdatePriceListUsageType';
  path = '/message/UpdatePriceListUsageType';
  request?: UpdatePriceListUsageType;
  response?: EmptyResponseMessage;
}

export class SvcUpdatePrinterType implements IEvaServiceDefinition
{
  name = 'UpdatePrinterType';
  path = '/message/UpdatePrinterType';
  request?: UpdatePrinterType;
  response?: EmptyResponseMessage;
}

export class SvcUpdateProductGiftCard implements IEvaServiceDefinition
{
  name = 'UpdateProductGiftCard';
  path = '/message/UpdateProductGiftCard';
  request?: UpdateProductGiftCard;
  response?: EmptyResponseMessage;
}

export class SvcUpdateProductRequirement implements IEvaServiceDefinition
{
  name = 'UpdateProductRequirement';
  path = '/message/UpdateProductRequirement';
  request?: UpdateProductRequirement;
  response?: EmptyResponseMessage;
}

export class SvcUpdateProductSearchTemplate implements IEvaServiceDefinition
{
  name = 'UpdateProductSearchTemplate';
  path = '/message/UpdateProductSearchTemplate';
  request?: UpdateProductSearchTemplate;
  response?: EmptyResponseMessage;
}

export class SvcUpdateProductSubscription implements IEvaServiceDefinition
{
  name = 'UpdateProductSubscription';
  path = '/message/UpdateProductSubscription';
  request?: UpdateProductSubscription;
  response?: EmptyResponseMessage;
}

export class SvcUpdateProductUnitOfMeasure implements IEvaServiceDefinition
{
  name = 'UpdateProductUnitOfMeasure';
  path = '/message/UpdateProductUnitOfMeasure';
  request?: UpdateProductUnitOfMeasure;
  response?: EmptyResponseMessage;
}

export class SvcUpdateRefundCorrectionReason implements IEvaServiceDefinition
{
  name = 'UpdateRefundCorrectionReason';
  path = '/message/UpdateRefundCorrectionReason';
  request?: UpdateRefundCorrectionReason;
  response?: EmptyResponseMessage;
}

export class SvcUpdateResendReason implements IEvaServiceDefinition
{
  name = 'UpdateResendReason';
  path = '/message/UpdateResendReason';
  request?: UpdateResendReason;
  response?: EmptyResponseMessage;
}

export class SvcUpdateReturnReason implements IEvaServiceDefinition
{
  name = 'UpdateReturnReason';
  path = '/message/UpdateReturnReason';
  request?: UpdateReturnReason;
  response?: EmptyResponseMessage;
}

export class SvcUpdateRole implements IEvaServiceDefinition
{
  name = 'UpdateRole';
  path = '/message/UpdateRole';
  request?: UpdateRole;
  response?: EmptyResponseMessage;
}

export class SvcUpdateRoleFunctionalities implements IEvaServiceDefinition
{
  name = 'UpdateRoleFunctionalities';
  path = '/message/UpdateRoleFunctionalities';
  request?: UpdateRoleFunctionalities;
  response?: EmptyResponseMessage;
}

export class SvcUpdateRoleSet implements IEvaServiceDefinition
{
  name = 'UpdateRoleSet';
  path = '/message/UpdateRoleSet';
  request?: UpdateRoleSet;
  response?: EmptyResponseMessage;
}

export class SvcUpdateShippingCost implements IEvaServiceDefinition
{
  name = 'UpdateShippingCost';
  path = '/message/UpdateShippingCost';
  request?: UpdateShippingCost;
  response?: EmptyResponseMessage;
}

export class SvcUpdateShippingMethod implements IEvaServiceDefinition
{
  name = 'UpdateShippingMethod';
  path = '/message/UpdateShippingMethod';
  request?: UpdateShippingMethod;
  response?: EmptyResponseMessage;
}

export class SvcUpdateShippingMethodTransportationTime implements IEvaServiceDefinition
{
  name = 'UpdateShippingMethodTransportationTime';
  path = '/message/UpdateShippingMethodTransportationTime';
  request?: UpdateShippingMethodTransportationTime;
  response?: EmptyResponseMessage;
}

export class SvcUpdateShippingRestriction implements IEvaServiceDefinition
{
  name = 'UpdateShippingRestriction';
  path = '/message/UpdateShippingRestriction';
  request?: UpdateShippingRestriction;
  response?: EmptyResponseMessage;
}

export class SvcUpdateStation implements IEvaServiceDefinition
{
  name = 'UpdateStation';
  path = '/message/UpdateStation';
  request?: UpdateStation;
  response?: EmptyResponseMessage;
}

export class SvcUpdateStockAllocationRule implements IEvaServiceDefinition
{
  name = 'UpdateStockAllocationRule';
  path = '/message/UpdateStockAllocationRule';
  request?: UpdateStockAllocationRule;
  response?: EmptyResponseMessage;
}

export class SvcUpdateStockLabel implements IEvaServiceDefinition
{
  name = 'UpdateStockLabel';
  path = '/message/UpdateStockLabel';
  request?: UpdateStockLabel;
  response?: EmptyResponseMessage;
}

export class SvcUpdateStockMutationReason implements IEvaServiceDefinition
{
  name = 'UpdateStockMutationReason';
  path = '/message/UpdateStockMutationReason';
  request?: UpdateStockMutationReason;
  response?: EmptyResponseMessage;
}

export class SvcUpdateSubscription implements IEvaServiceDefinition
{
  name = 'UpdateSubscription';
  path = '/message/UpdateSubscription';
  request?: UpdateSubscription;
  response?: EmptyResponseMessage;
}

export class SvcUpdateSubscriptionOrganizationUnitSet implements IEvaServiceDefinition
{
  name = 'UpdateSubscriptionOrganizationUnitSet';
  path = '/message/UpdateSubscriptionOrganizationUnitSet';
  request?: UpdateSubscriptionOrganizationUnitSet;
  response?: EmptyResponseMessage;
}

export class SvcUpdateSubscriptionUserRequirements implements IEvaServiceDefinition
{
  name = 'UpdateSubscriptionUserRequirements';
  path = '/message/UpdateSubscriptionUserRequirements';
  request?: UpdateSubscriptionUserRequirements;
  response?: EmptyResponseMessage;
}

export class SvcUpdateSupplierProduct implements IEvaServiceDefinition
{
  name = 'UpdateSupplierProduct';
  path = '/message/UpdateSupplierProduct';
  request?: UpdateSupplierProduct;
  response?: EmptyResponseMessage;
}

export class SvcUpdateSupplierProductPrices implements IEvaServiceDefinition
{
  name = 'UpdateSupplierProductPrices';
  path = '/message/UpdateSupplierProductPrices';
  request?: UpdateSupplierProductPrices;
  response?: EmptyResponseMessage;
}

export class SvcUpdateSupplierProductStock implements IEvaServiceDefinition
{
  name = 'UpdateSupplierProductStock';
  path = '/message/UpdateSupplierProductStock';
  request?: UpdateSupplierProductStock;
  response?: EmptyResponseMessage;
}

export class SvcUpdateSurvey implements IEvaServiceDefinition
{
  name = 'UpdateSurvey';
  path = '/message/UpdateSurvey';
  request?: UpdateSurvey;
  response?: EmptyResponseMessage;
}

export class SvcUpdateSurveyCategory implements IEvaServiceDefinition
{
  name = 'UpdateSurveyCategory';
  path = '/message/UpdateSurveyCategory';
  request?: UpdateSurveyCategory;
  response?: EmptyResponseMessage;
}

export class SvcUpdateSurveyQuestion implements IEvaServiceDefinition
{
  name = 'UpdateSurveyQuestion';
  path = '/message/UpdateSurveyQuestion';
  request?: UpdateSurveyQuestion;
  response?: EmptyResponseMessage;
}

export class SvcUpdateSurveyQuestionRoute implements IEvaServiceDefinition
{
  name = 'UpdateSurveyQuestionRoute';
  path = '/message/UpdateSurveyQuestionRoute';
  request?: UpdateSurveyQuestionRoute;
  response?: EmptyResponseMessage;
}

export class SvcUpdateUnitOfMeasure implements IEvaServiceDefinition
{
  name = 'UpdateUnitOfMeasure';
  path = '/message/UpdateUnitOfMeasure';
  request?: UpdateUnitOfMeasure;
  response?: EmptyResponseMessage;
}

export class SvcUpdateUnitPriceCorrectionReason implements IEvaServiceDefinition
{
  name = 'UpdateUnitPriceCorrectionReason';
  path = '/message/UpdateUnitPriceCorrectionReason';
  request?: UpdateUnitPriceCorrectionReason;
  response?: EmptyResponseMessage;
}

export class SvcUpdateUserAgreement implements IEvaServiceDefinition
{
  name = 'UpdateUserAgreement';
  path = '/message/UpdateUserAgreement';
  request?: UpdateUserAgreement;
  response?: EmptyResponseMessage;
}

export class SvcUpdateUserBoughtProductDetail implements IEvaServiceDefinition
{
  name = 'UpdateUserBoughtProductDetail';
  path = '/message/UpdateUserBoughtProductDetail';
  request?: UpdateUserBoughtProductDetail;
  response?: EmptyResponseMessage;
}

export class SvcUpdateUserBoughtProductWarranty implements IEvaServiceDefinition
{
  name = 'UpdateUserBoughtProductWarranty';
  path = '/message/UpdateUserBoughtProductWarranty';
  request?: UpdateUserBoughtProductWarranty;
  response?: EmptyResponseMessage;
}

export class SvcUpdateUserOrigin implements IEvaServiceDefinition
{
  name = 'UpdateUserOrigin';
  path = '/message/UpdateUserOrigin';
  request?: UpdateUserOrigin;
  response?: EmptyResponseMessage;
}

export class SvcUpdateUserRequirement implements IEvaServiceDefinition
{
  name = 'UpdateUserRequirement';
  path = '/message/UpdateUserRequirement';
  request?: UpdateUserRequirement;
  response?: EmptyResponseMessage;
}

export class SvcUpdateUserRequirementSet implements IEvaServiceDefinition
{
  name = 'UpdateUserRequirementSet';
  path = '/message/UpdateUserRequirementSet';
  request?: UpdateUserRequirementSet;
  response?: EmptyResponseMessage;
}

export class SvcUpdateUserRequirementSetRequirements implements IEvaServiceDefinition
{
  name = 'UpdateUserRequirementSetRequirements';
  path = '/message/UpdateUserRequirementSetRequirements';
  request?: UpdateUserRequirementSetRequirements;
  response?: EmptyResponseMessage;
}

export class SvcUpdateUserRoles implements IEvaServiceDefinition
{
  name = 'UpdateUserRoles';
  path = '/message/UpdateUserRoles';
  request?: UpdateUserRoles;
  response?: EmptyResponseMessage;
}

export class SvcUpdateVisibilityGroup implements IEvaServiceDefinition
{
  name = 'UpdateVisibilityGroup';
  path = '/message/UpdateVisibilityGroup';
  request?: UpdateVisibilityGroup;
  response?: EmptyResponseMessage;
}

export class SvcUpdateWidget implements IEvaServiceDefinition
{
  name = 'UpdateWidget';
  path = '/message/UpdateWidget';
  request?: UpdateWidget;
  response?: EmptyResponseMessage;
}

export class SvcUploadAssortmentProducts implements IEvaServiceDefinition
{
  name = 'UploadAssortmentProducts';
  path = '/message/UploadAssortmentProducts';
  request?: UploadAssortmentProducts;
  response?: UploadAssortmentProductsResponse;
}

export class SvcUploadCouponExcel implements IEvaServiceDefinition
{
  name = 'UploadCouponExcel';
  path = '/message/UploadCouponExcel';
  request?: UploadCouponExcel;
  response?: UploadCouponExcelResponse;
}

export class SvcUploadCouponExcel_Async implements IEvaServiceDefinition
{
  name = 'UploadCouponExcel_Async';
  path = '/async-message/UploadCouponExcel';
  request?: UploadCouponExcel_Async;
  response?: UploadCouponExcel_AsyncResponse;
}

export class SvcUploadCouponExcel_AsyncResult implements IEvaServiceDefinition
{
  name = 'UploadCouponExcel_AsyncResult';
  path = '/async-result/UploadCouponExcel';
  request?: UploadCouponExcel_AsyncResult;
  response?: UploadCouponExcelResponse;
}

export class SvcUploadCustomers implements IEvaServiceDefinition
{
  name = 'UploadCustomers';
  path = '/message/UploadCustomers';
  request?: UploadCustomers;
  response?: EmptyResponseMessage;
}

export class SvcUploadEmployees implements IEvaServiceDefinition
{
  name = 'UploadEmployees';
  path = '/message/UploadEmployees';
  request?: UploadEmployees;
  response?: EmptyResponseMessage;
}

export class SvcUploadFraudItems implements IEvaServiceDefinition
{
  name = 'UploadFraudItems';
  path = '/message/UploadFraudItems';
  request?: UploadFraudItems;
  response?: EmptyResponseMessage;
}

export class SvcUploadInitialInventory implements IEvaServiceDefinition
{
  name = 'UploadInitialInventory';
  path = '/message/UploadInitialInventory';
  request?: UploadInitialInventory;
  response?: UploadInitialInventoryResponse;
}

export class SvcUploadPaymentSettlementFile implements IEvaServiceDefinition
{
  name = 'UploadPaymentSettlementFile';
  path = '/message/UploadPaymentSettlementFile';
  request?: UploadPaymentSettlementFile;
  response?: EmptyResponseMessage;
}

export class SvcUploadPriceListManualInputAdjustments implements IEvaServiceDefinition
{
  name = 'UploadPriceListManualInputAdjustments';
  path = '/message/UploadPriceListManualInputAdjustments';
  request?: UploadPriceListManualInputAdjustments;
  response?: UploadPriceListManualInputAdjustmentsResponse;
}

export class SvcUploadPurchaseOrderExcel implements IEvaServiceDefinition
{
  name = 'UploadPurchaseOrderExcel';
  path = '/message/UploadPurchaseOrderExcel';
  request?: UploadPurchaseOrderExcel;
  response?: EmptyResponseMessage;
}

export class SvcUploadSalesOrderExcel implements IEvaServiceDefinition
{
  name = 'UploadSalesOrderExcel';
  path = '/message/UploadSalesOrderExcel';
  request?: UploadSalesOrderExcel;
  response?: EmptyResponseMessage;
}

export class SvcUploadShippingRestrictions implements IEvaServiceDefinition
{
  name = 'UploadShippingRestrictions';
  path = '/message/UploadShippingRestrictions';
  request?: UploadShippingRestrictions;
  response?: UploadShippingRestrictionsResponse;
}

export class SvcUploadStockAllocationRulesExcel implements IEvaServiceDefinition
{
  name = 'UploadStockAllocationRulesExcel';
  path = '/message/UploadStockAllocationRulesExcel';
  request?: UploadStockAllocationRulesExcel;
  response?: EmptyResponseMessage;
}

export class SvcUploadSupplierProducts implements IEvaServiceDefinition
{
  name = 'UploadSupplierProducts';
  path = '/message/UploadSupplierProducts';
  request?: UploadSupplierProducts;
  response?: UploadSupplierProductsResponse;
}

export class SvcUploadSupplierProductsBarcodes implements IEvaServiceDefinition
{
  name = 'UploadSupplierProductsBarcodes';
  path = '/message/UploadSupplierProductsBarcodes';
  request?: UploadSupplierProductsBarcodes;
  response?: UploadSupplierProductsResponse;
}

export class SvcUploadSupplierProductsPricing implements IEvaServiceDefinition
{
  name = 'UploadSupplierProductsPricing';
  path = '/message/UploadSupplierProductsPricing';
  request?: UploadSupplierProductsPricing;
  response?: UploadSupplierProductsResponse;
}

export class SvcUploadSupplierProductsStock implements IEvaServiceDefinition
{
  name = 'UploadSupplierProductsStock';
  path = '/message/UploadSupplierProductsStock';
  request?: UploadSupplierProductsStock;
  response?: UploadSupplierProductsResponse;
}

export class SvcUploadTaxCodesExcel implements IEvaServiceDefinition
{
  name = 'UploadTaxCodesExcel';
  path = '/message/UploadTaxCodesExcel';
  request?: UploadTaxCodesExcel;
  response?: EmptyResponseMessage;
}

export class SvcUploadTaxRateExcel implements IEvaServiceDefinition
{
  name = 'UploadTaxRateExcel';
  path = '/message/UploadTaxRateExcel';
  request?: UploadTaxRateExcel;
  response?: EmptyResponseMessage;
}

export class SvcValidateCompany implements IEvaServiceDefinition
{
  name = 'ValidateCompany';
  path = '/message/ValidateCompany';
  request?: ValidateCompany;
  response?: ValidateCompanyResponse;
}

export class SvcValidateDiscount implements IEvaServiceDefinition
{
  name = 'ValidateDiscount';
  path = '/message/ValidateDiscount';
  request?: ValidateDiscount;
  response?: ValidateDiscountResponse;
}

export class SvcValidateDiscountTemplate implements IEvaServiceDefinition
{
  name = 'ValidateDiscountTemplate';
  path = '/message/ValidateDiscountTemplate';
  request?: ValidateDiscountTemplate;
  response?: ValidateDiscountTemplateResponse;
}

export class SvcVerifyDiscount implements IEvaServiceDefinition
{
  name = 'VerifyDiscount';
  path = '/message/VerifyDiscount';
  request?: VerifyDiscount;
  response?: EmptyResponseMessage;
}

export class SvcWithdrawLoyaltyPoints implements IEvaServiceDefinition
{
  name = 'WithdrawLoyaltyPoints';
  path = '/message/WithdrawLoyaltyPoints';
  request?: WithdrawLoyaltyPoints;
  response?: EmptyResponseMessage;
}
