import {
  AMLAMLSystemSurveys,
  AMLAMLTriggerType,
  RequestMessageWithEmptyResponse,
  AMLListConfigurationsFilter,
  PagedRequestMessage,
  PagedResponseMessage,
  RequestMessage,
  DataModelsBookingFlags,
  DataModelsAccountType,
  ResponseMessage,
  FinanceListAccountsFilter,
  FilteredPagedResultRequest,
  FinanceListAccountsItem,
  PagedResultResponse,
  AppointmentsAppointmentType,
  AppointmentsEventWishlistType,
  AppointmentsEventLocationStatus,
  EVAFrameworkAPIEnumDto,
  OrganizationUnitsOpeningHoursTemplateDay,
  AppointmentsListAppointmentCancellationReasonsFilter,
  AppointmentsListEventLocationOpeningHoursTemplatesFilter,
  AppointmentsListEventLocationsFilter,
  AppointmentsListEventTypesFilter,
  AppointmentsListEventsFilter,
  EmptyResponseMessage,
  BlobsCDNCDNResolutionStrategy,
  BlobsCDNListCDNConfigurationsFilter,
  DataModelsCustomFieldKeyValue,
  DataModelsCasePriority,
  DataModelsInteractionType,
  DataModelsCaseStatusAction,
  DataModelsCustomFieldValueWithOptions,
  DataModelsCustomFieldResponse,
  DataModelsSerialNumberRegistrationStatus,
  DataModelsRepairStatus,
  SearchIProductSearchItem,
  InteractionsListCaseInteractionsFilter,
  CasesListCaseStatusesFilter,
  CasesListCaseTopicsFilter,
  CasesListCasesFilter,
  TAnyValue,
  DataModelsUserAccountType,
  AddressesAddressDataDto,
  DataModelsApplyToCompanyType,
  DataModelsCompanyRequirementPropertyType,
  DataModelsCompanyRequirementVisibilityType,
  AddressesAddressDto,
  DataModelsCompanyType,
  AuditingComponentsAuditingVatNumberValidationResult,
  CompaniesListCompaniesFilter,
  CompaniesListCompaniesItem,
  CompaniesListCompanyRequirementFilter,
  CompaniesListOrganizationUnitCompaniesFilter,
  PageTokenConfig,
  CompaniesListOrganizationUnitCompaniesItem,
  PageTokenResponse,
  AsyncRequestHandlingAsyncRequestResponse,
  AsyncRequestHandlingAsyncRequestResultRequest,
  CompaniesSearchCompanyFilter,
  ScrollablePageConfig,
  CompaniesSearchCompanyResult,
  ScrollablePagedResult,
  ConfigurationSettingRemovalReason,
  ConfigurationSettingModel,
  RequestMessageWithResourceResponse,
  ConfigurationAppSettingsAppSettingAutocompleteInfo,
  SortDirection,
  ConfigurationSettingValueEntityTypes,
  ConfigurationSettingSensitivityTypes,
  SecurityFunctionalityScope,
  ConfigurationAppSettingsListAppSettingsHistoryFilter,
  ConfigurationAppSettingsListAppSettingsFilter,
  ConfigurationSettingsListSettingsHistoryFilter,
  InternationalizationCultureFilter,
  PageConfig,
  InternationalizationOrganizationUnitCountryFilter,
  InternationalizationOrganizationUnitLanguageFilter,
  DataModelsCustomFieldDataTypes,
  DataModelsCustomFieldOptions,
  UserTypes,
  DataModelsCustomFieldMetadata,
  DataModelsCustomFieldValueOperator,
  CustomFieldsListCustomFieldOptionsFilter,
  DataModelsCustomFieldValue,
  CustomFieldsListCustomFieldsFilter,
  DiscountsAmountDiscountActionData,
  DiscountsCustomerAgeDiscountActionData,
  DiscountsCustomerAgeTieredDiscountActionData,
  DiscountsGenerateDiscountCouponActionData,
  DiscountsGetAProductDiscountActionData,
  DiscountsLoyaltyTieredAmountDiscountActionData,
  DiscountsLoyaltyTieredPercentageDiscountActionData,
  DiscountsOrderTieredAmountDiscountActionData,
  DiscountsOrderTieredPercentageDiscountActionData,
  DiscountsOriginatingAppointmentActionData,
  DiscountsOriginatingOrderDiscountActionData,
  DiscountsOtherCostsDiscountActionData,
  DiscountsPercentageDiscountActionData,
  DiscountsPickAProductTieredDiscountActionData,
  DiscountsProductAmountTieredAmountDiscountActionData,
  DiscountsProductAmountTieredPercentageDiscountActionData,
  DiscountsProductQuantityTieredAmountDiscountActionData,
  DiscountsProductQuantityTieredPercentageDiscountActionData,
  DiscountsProductSetAmountDiscountActionData,
  DiscountsProductSetFixedPriceDiscountActionData,
  DiscountsProductSetFreeProductActionData,
  DiscountsProductSetPercentageDiscountActionData,
  DiscountsCustomFieldValueDeterminedDiscountActionData,
  DiscountsEmptyDiscountActionData,
  DataModelsDiscountAppliesTo,
  DataModelsDiscountCompliancyRule,
  DataModelsDiscountConditionTypes,
  DataModelsCurrencyConstraint,
  DaysOfWeek,
  DataModelsDiscountOrderTypes,
  DataModelsFinancialDespersionType,
  DataModelsDiscountTriggers,
  DataModelsDiscountUserUsagePeriodType,
  LoyaltyBadgesConditionsBadgeConditionData,
  LoyaltyBadgesConditionsCustomFieldConditionData,
  LoyaltyBadgesConditionsPointThresholdConditionData,
  LoyaltyBadgesConditionsBadgeProductConditionData,
  LoyaltyBadgesConditionsTierConditionData,
  MiscConditionsCouponOriginatingOrderOrganizationUnitConditionData,
  MiscConditionsCouponValidityConditionData,
  MiscConditionsCustomerAgeConditionData,
  MiscConditionsCustomerConditionData,
  MiscConditionsLoyaltyBadgeConditionData,
  MiscConditionsLoyaltyPointsConditionData,
  MiscConditionsLoyaltyTierConditionData,
  MiscConditionsMaximumUsePerUserConditionData,
  MiscConditionsMinimumProductSubscriptionRenewalsConditionData,
  MiscConditionsOldUserFieldConditionData,
  MiscConditionsOrderAmountConditionData,
  MiscConditionsOrderCustomFieldConditionData,
  MiscConditionsOrderLineCustomFieldConditionData,
  MiscConditionsOrderPropertiesConditionData,
  MiscConditionsOrderTypeConditionData,
  MiscConditionsOrganizationUnitConditionData,
  MiscConditionsOrganizationUnitTypeConditionData,
  MiscConditionsProductConditionData,
  MiscConditionsProductRequirementConditionData,
  MiscConditionsStockLabelConditionData,
  MiscConditionsUserCustomFieldConditionData,
  MiscConditionsUserRoleConditionData,
  MiscConditionsUserTypeConditionData,
  EmptyConditionData,
  ResourceWithBlobIDResponseMessage,
  RequestMessageWithResourceWithBlobIDResponse,
  DataModelsDiscountDeactivationReasons,
  DataModelsOrganizationUnitSetTypes,
  DiscountsSearchDiscountsByQueryFilter,
  DiscountsGetUserCouponsSortBy,
  BlobsBlobDto,
  DiscountsListDiscountCouponsFilter,
  DataModelsListDiscountCampaignsFilter,
  DiscountsListDiscountLayerFilter,
  DataModelsListDiscountTemplatesFilter,
  DataModelsOrderTypes,
  CustomFieldsCustomFieldValidationErrorData,
  DataModelsEndpointConfigurationStatus,
  DataModelsEntityFieldValidatorUserTypes,
  DataModelsEntityFieldValidatorEntityTypes,
  EntityFieldValidatorsValidatorsDefaultEntityFieldValidator,
  EntityFieldValidatorsValidatorsStringEntityFieldValidator,
  DataModelsEntityFieldValidatorType,
  EntityFieldValidatorsListEntityFieldValidatorsFilter,
  SearchFilterModel,
  StockMutationsListProductCostPriceLedgerFilter,
  StockMutationsListProductCostPriceLedgerItem,
  StockMutationsListStockMutationUnitCostSourceLedgerFilter,
  StockMutationsListStockMutationUnitCostSourceLedgerItem,
  DataModelsCashExpenseAmountTypes,
  EVAFrameworkAPIFlagsEnumDto,
  FinanceCashListCashCorrectionReasonsFilter,
  FinanceCashListCashExpenseTypesFilter,
  ExchangeRatesListExchangeRatesFilter,
  GiftCardsNoGiftCardData,
  DiscountsDiscountGiftCardData,
  GiftCardsConfigurationGiftCardPinRequirement,
  GiftCardsConfigurationGiftCardConfigurationUsageTypes,
  GiftCardsConfigurationProductGiftCardCommunicationOptions,
  GiftCardsListGiftCardConfigurationsFilter,
  GiftCardsListProductGiftCardsFilter,
  DataModelsClientApplicationType,
  DevicesThermalPrinterDeviceTypeData,
  DevicesFiscalThermalPrinterDeviceTypeData,
  DevicesPinDeviceTypeData,
  DevicesSafeDeviceTypeData,
  DevicesWatchtowerDeviceTypeData,
  NotificationsListClientApplicationsFilter,
  InquiriesListInquiriesFilter,
  DataModelsAllowUnsubscribeByType,
  DataModelsBenefitReloadPolicy,
  DataModelsLoyaltyPointUsageOptions,
  DataModelsLoyaltyProgramOptions,
  LoyaltyEmptyPointPolicyData,
  LoyaltyCustomPointPolicyData,
  LoyaltyExpireEndOfYearPointPolicyData,
  LoyaltyExpireEndOfMonthPointPolicyData,
  LoyaltyExpireSetDatePointPolicyData,
  DataModelsResubscribeHandlingType,
  DataModelsLoyaltyProgramStatus,
  LoyaltyEmptyTierPolicyData,
  LoyaltyCustomTierPolicyData,
  LoyaltyFixedDateTierPolicyData,
  DataModelsProgramType,
  DataModelsLoyaltyProgramUsageTypes,
  DataModelsCustomFieldFilter,
  DataModelsLoyaltyPaymentTaxHandlingType,
  DataModelsUserBudgetDeduction,
  LoyaltyEmptyBenefitData,
  LoyaltyAppointmentBenefitData,
  LoyaltyDurationType,
  LoyaltyRulesEmptyPointAwardingConditionData,
  LoyaltyRulesLoyaltyBadgePointAwardingConditionData,
  LoyaltyRulesLoyaltyTierPointAwardingConditionData,
  LoyaltyRulesOrderAmountPointAwardingConditionData,
  LoyaltyRulesOrderQuantityPointAwardingConditionData,
  LoyaltyRulesProductPointAwardingConditionData,
  LoyaltyRulesUserCustomFieldPointAwardingConditionData,
  DataModelsLoyaltyProgramGroupDeactivationReasons,
  DataModelsLoyaltyProgramDeactivationReasons,
  SearchIProductSearchItemPrimaryImage,
  LoyaltyListBenefitUserUsageHistoryFilter,
  LoyaltyListLoyaltyProgramBadgeCategoriesFilter,
  LoyaltyListLoyaltyProgramBadgeFilter,
  LoyaltyListLoyaltyProgramGroupFilter,
  LoyaltyListLoyaltyProgramPassFilter,
  LoyaltyListLoyaltyProgramTierSort,
  LoyaltyListLoyaltyProgramTierFilter,
  SortablePagedRequestMessage,
  LoyaltyListLoyaltyProgramsFilter,
  LoyaltyListPointAwardingRuleFilter,
  DataModelsSubscriptionConfirmation,
  CommunicationsNoCustomIntegrationData,
  DataModelsMessageTemplateDestinations,
  DataModelsPaperProperties,
  DataModelsMessageTemplateTypes,
  MessageTemplatesMessageTemplateFilter,
  MessageTemplatesMessageTargetContentTypes,
  OrdersCheckoutOptionsNoCheckoutOptionConfigData,
  OrdersCheckoutOptionsOptionsCertificationOptionConfigData,
  OrdersCheckoutOptionsOptionsCustomFieldLineOptionConfigData,
  OrdersCheckoutOptionsOptionsCustomFieldOptionConfigData,
  OrdersCheckoutOptionsOptionsProductSearchTemplateOptionConfig,
  OrdersCheckoutOptionsOptionsQuickBuyOptionConfigData,
  OrdersCheckoutOptionsCheckoutOptionOrderType,
  OrdersCheckoutOptionsListCheckoutOptionCategoriesFilter,
  OrdersReturnsListRefundCorrectionReasonsFilter,
  ResendReasonsListResendReasonsFilter,
  OrdersCorrectionsListUnitPriceCorrectionReasonsFilter,
  DataModelsReturnReasonRemarkType,
  DataModelsReturnReasonType,
  DataModelsOrganizationUnitSetOperatorTypes,
  DataModelsOrganizationUnitSetDefinition,
  OrganizationUnitsListOrganizationUnitSetsFilter,
  OrganizationUnitsListOrganizationUnitSetsItem,
  OrganizationUnitsDtoOpeningHoursDataDto,
  FinanceCashListCashHandlersFilter,
  OrganizationUnitsListOldOpeningHoursFilter,
  OrganizationUnitsDtoOpeningHoursDto,
  OrganizationUnitsOrganizationUnitCurrencyFilter,
  OrganizationUnitsDtoDayOpeningHours,
  DataModelsPaymentTypeCaptureMoment,
  DataModelsPaymentDisableFor,
  DataModelsPaymentCashJournalMethod,
  DataModelsPaymentTypeCategory,
  DataModelsPaymentTypeOptions,
  DataModelsPaymentReturnActions,
  PaymentsListOrganizationUnitSetPaymentTypesFilter,
  PaymentsListPaymentMethodsFilter,
  PaymentsListPaymentTransactionCapturesFilter,
  DataModelsPaymentTransactionCaptureStatuses,
  PaymentsListPaymentTransactionsFilter,
  DataModelsPaymentStatuses,
  PaymentsListPaymentTypesFilter,
  DataModelsInstallmentPaymentFrequency,
  PaymentsSettlementsListSettlementFilesFilter,
  DataModelsPaymentTransactionSettlementFileStatus,
  PaymentsSettlementsListSettlementsFilter,
  PersonalizedPromotionsListPersonalizedPromotionsFilter,
  PricingRoundingData,
  PricingPriceListCalculationNode_PriceListData,
  PricingMarkupCalculationNode_MarkupData,
  PricingSupplierPricingCalculationNode_SupplierPricingData,
  DataModelsPriceListAdjustmentSystemType,
  PricingListPriceListAdjustmentsFilter,
  PricingListManualInputAdjustmentsFilter,
  PricingListPriceListOrganizationUnitsFilter,
  PricingListPriceListsFilter,
  PricingListPriceListsForOrganizationUnitFilter,
  PricingListProductPriceLedgerFilter,
  ProductSubscriptionsDataModelsProductSubscriptionActivationMethod,
  ProductSubscriptionsDataModelsProductSubscriptionInterval,
  ProductSubscriptionsDataModelsProductSubscriptionShipmentTrigger,
  ProductSubscriptionsSubscriptionProductPriceInfo,
  ProductSubscriptionsProductSubscriptionProductInfo,
  ProductSubscriptionsListProductSubscriptionsFilter,
  DataModelsProductRequirementDataTypes,
  DataModelsProductRequirementOptions,
  SearchAggregationFilterModel,
  DataModelsProductSearchTemplateTypes,
  DataModelsProductStatus,
  GetListResponse,
  ProductsListProductBarcodesFilter,
  DataModelsProductBarcodeOrigin,
  ProductsListProductRequirementsFilter,
  SearchProductSearchTemplateFilters,
  ProductsListProductUnitOfMeasuresFilter,
  ProductsListSupplierProductsFilter,
  SecurityElevationType,
  SecurityFunctionalityImpact,
  UsersListRoleSetsFilter,
  UsersListRolesFilter,
  OrganizationUnitsListUserOrganizationUnitRolesFilter,
  SecurityIpFilterListType,
  ElevationSkipReasonsListElevationSkipReasonsFilter,
  DataModelsShippingMethodDeliveryTypes,
  DataModelsShippingRestrictionType,
  ShippingListCarriersFilter,
  ShippingListShippingMethodsFilter,
  ShippingListOrganizationUnitShippingMethodsFilter,
  ShippingListShippingCostsFilter,
  ShippingListTransportationTimesFilter,
  ShippingShippingMethodTransportationTimeItem,
  PagedResult,
  ShippingListShippingRestrictionsFilter,
  DataModelsStockAllocationRuleTypes,
  DataModelsStockAllocationRuleValueTypes,
  ResourceResponseMessage,
  SuppliersListStockAllocationRulesFilter,
  StockMutationsListCumulativeStockFilter,
  SuppliersListStockAllocationRulesItem,
  StockMutationsListStockMutationReasonsModelFilters,
  StockMutationsStockMutationFilters,
  StockMutationsSearchStockMutationResult,
  SurveysSurveyAfterEffectDto,
  DataModelsSurveyContext,
  SurveysEmptySurveyDistributionHandlerData,
  SurveysTriggersAppointmentSurveyTriggerData,
  SurveysTriggersCaseCreatedSurveyTriggerData,
  SurveysTriggersCaseClosedSurveyTriggerData,
  SurveysTriggersEmptySurveyTriggerData,
  SurveysTriggersOrderPaidSurveyTriggerData,
  SurveysTriggersOrderReturnSurveyTriggerData,
  SurveysTriggersOrderShippedSurveyTriggerData,
  SurveysTriggersRepairCreatedSurveyTriggerData,
  SurveysTriggersRepairFinishedSurveyTriggerData,
  SurveysTriggersUserCreatedSurveyTriggerData,
  SurveysTriggersUserUpdatedSurveyTriggerData,
  SurveysTriggersUserSubscribedSurveyTriggerData,
  SurveysTriggersUserUnsubscribedSurveyTriggerData,
  DataModelsSurveyType,
  DataModelsSurveyQuestionType,
  DataModelsSurveyQuestionRouteFilter,
  DataModelsSurveyResponseStatus,
  DataModelsSurveyDeactivationReasons,
  PagedResultRequest,
  SurveysListSurveyCategoriesFilter,
  SurveysListSurveyResponsesFilter,
  SurveysListSurveyFilter,
  SurveysSearchSurveyFilter,
  PricingListTaxRateModelFilters,
  UsersUserRequirementsUserRequirementFor,
  UsersUserRequirementsUserRequirementProperties,
  DataModelsSubscriptionType,
  UsersUserRequirementsUserRequirementForSubscriptionResponse,
  UsersUserRequirementsUserRequirementResponse,
  ValidationRequiredFor,
  UsersSubscriptionsListSubscriptionOrganizationUnitSetsFilter,
  UsersSubscriptionsListSubscriptionUsersFilter,
  DataModelsSubscriptionStatus,
  UsersListUserAgreementsFilter,
  UsersUserRequirementsListUserRequirementSetsFilter,
  UsersUserRequirementsListUserRequirementsFilter,
  WishlistsListWishlistsFilter,
  VisibilityGroupsListVisibilityGroupConfigurationsFilter,
  VisibilityGroupsListVisibilityGroupsFilter,
  WidgetsEmptyWidgetData,
  WidgetsHandlersBusinessProgramsWidgetData,
  WidgetsHandlersCustomFieldWidgetData,
  WidgetsHandlersLoyaltyProgramWidgetData,
  WidgetsListWidgetConfigurationsFilter,
  SearchSimpleProductSearchModel,
  DataModelsProductTypes,
  ProductsListAssortmentProductsFilter,
  ProductsListAssortmentsFilter,
  FinanceListGeneralLedgersFilter,
  DataModelsFraudDataType,
  AddressesListFraudItemsFilter,
  UserBoughtProductsListUserBoughtProductsFilter,
} from '../eva-services-core';


export enum Errors
{
  /**
  * Name is required.
  */
  CDNConfigurations_NameRequired = 'CDNConfigurations:NameRequired',
  /**
  * BackendID is required.
  */
  CDNConfigurations_BackendIDRequired = 'CDNConfigurations:BackendIDRequired',
  /**
  * A CDN configuration with BackendID '{0:string}' already exists.
  */
  CDNConfigurations_BackendIDAlreadyExists = 'CDNConfigurations:BackendIDAlreadyExists',
  /**
  * BackendID is reserved for internal use and cannot be used.
  */
  CDNConfigurations_ReservedBackendID = 'CDNConfigurations:ReservedBackendID',
  /**
  * BackendID '{0:string}' is already handled by a built-in image backend and cannot be used; a configuration with this BackendID would never take effect.
  */
  CDNConfigurations_InvalidBackendID = 'CDNConfigurations:InvalidBackendID',
  /**
  * UrlTemplate is required when ResolutionStrategy is Template.
  */
  CDNConfigurations_UrlTemplateRequiredForTemplate = 'CDNConfigurations:UrlTemplateRequiredForTemplate',
  /**
  * At least one preset is required when ResolutionStrategy is PathPreset.
  */
  CDNConfigurations_PresetsRequiredForPathPreset = 'CDNConfigurations:PresetsRequiredForPathPreset',
  /**
  * UrlTemplate must contain the '{preset}' placeholder when ResolutionStrategy is PathPreset.
  */
  CDNConfigurations_UrlTemplateMustContainPresetPlaceholder = 'CDNConfigurations:UrlTemplateMustContainPresetPlaceholder',
  /**
  * Preset name is required.
  */
  CDNConfigurations_PresetNameRequired = 'CDNConfigurations:PresetNameRequired',
  /**
  * Preset name '{0:string}' is invalid. Use only letters, digits, hyphens and underscores.
  */
  CDNConfigurations_InvalidPresetName = 'CDNConfigurations:InvalidPresetName',
  /**
  * Preset name '{0:string}' is duplicated. Preset names must be unique within a configuration.
  */
  CDNConfigurations_DuplicatePresetName = 'CDNConfigurations:DuplicatePresetName',
  /**
  * Preset '{0:string}' has invalid dimensions. Width and Height must be greater than zero.
  */
  CDNConfigurations_InvalidPresetDimensions = 'CDNConfigurations:InvalidPresetDimensions',
  /**
  * CashExpenseType {0:string} already exists.
  */
  CashExpenseTypes_AlreadyExists = 'CashExpenseTypes:AlreadyExists',
  /**
  * Cannot delete CheckoutOptionCategory because it has active CheckoutOptions associated with it.
  */
  CheckoutOptionCategory_CannotDeleteCheckoutOptionCategoryWithActiveCheckoutOptions = 'CheckoutOptionCategory:CannotDeleteCheckoutOptionCategoryWithActiveCheckoutOptions',
  /**
  * This user already exists, use the UpdateUser service.
  */
  CreateEmployee_UserAlreadyExists = 'CreateEmployee:UserAlreadyExists',
  /**
  * There is already an existing customer.
  */
  CreateEmployee_ExistingCustomer = 'CreateEmployee:ExistingCustomer',
  /**
  * Can't create OrderLedgerType because its name already exists
  */
  CreateOrderLedgerType_OrderLedgerTypeAlreadyExists = 'CreateOrderLedgerType:OrderLedgerTypeAlreadyExists',
  /**
  * Culture for country {language:string} and language {country:string} already exists.
  */
  Culture_CultureAlreadyExists = 'Culture:CultureAlreadyExists',
  /**
  * This currency already exists for this OrganizationUnit
  */
  Cultures_CurrencyAlreadyExists = 'Cultures:CurrencyAlreadyExists',
  /**
  * Additional currency must differ from main currency.
  */
  Cultures_AdditionalCurrencyMustDifferFromMainCurrency = 'Cultures:AdditionalCurrencyMustDifferFromMainCurrency',
  /**
  * The selected cashhandler is not available for the given currency
  */
  Cultures_CashHandlerCurrencyMismatch = 'Cultures:CashHandlerCurrencyMismatch',
  /**
  * This language already exists for this organization unit
  */
  Cultures_LanguageAlreadyExists = 'Cultures:LanguageAlreadyExists',
  /**
  * The organization unit must have at least one (inherited) language. Add a new language before removing this language.
  */
  Cultures_MustHaveAtLeastOneLanguage = 'Cultures:MustHaveAtLeastOneLanguage',
  /**
  * Can't delete OrderLedgerType because it's not custom
  */
  DeleteOrderLedgerType_OrderLedgerTypeNotCustom = 'DeleteOrderLedgerType:OrderLedgerTypeNotCustom',
  /**
  * UserID is required when logged in user is a Employee or API user.
  */
  DiscountCouponServices_UserIDRequired = 'DiscountCouponServices:UserIDRequired',
  /**
  * An elevation skip reason with this name already exists
  */
  ElevationSkipReason_AlreadyExists = 'ElevationSkipReason:AlreadyExists',
  /**
  * An elevation skip reason with this backend ID already exists
  */
  ElevationSkipReason_BackendIDAlreadyExists = 'ElevationSkipReason:BackendIDAlreadyExists',
  /**
  * You can only export up to 100 products at a time.
  */
  ExportProductCostPriceLedgerSummary_TooManyProductsSelected = 'ExportProductCostPriceLedgerSummary:TooManyProductsSelected',
  /**
  * Cannot generate identification codes for Single Sign-On users.
  */
  GenerateIdentificationCode_CannotGenerateIdentificationCodeForSingleSignOn = 'GenerateIdentificationCode:CannotGenerateIdentificationCodeForSingleSignOn',
  /**
  * Handler is required
  */
  GiftCardConfigurations_MissingHandler = 'GiftCardConfigurations:MissingHandler',
  /**
  * The given handler doesn't exist
  */
  GiftCardConfigurations_UnknownHandler = 'GiftCardConfigurations:UnknownHandler',
  /**
  * The data is not in a valid format for the selected type
  */
  GiftCardConfigurations_InvalidData = 'GiftCardConfigurations:InvalidData',
  /**
  * Usage type needs at least Sale or Payment, never None
  */
  GiftCardConfigurations_InvalidUsageType = 'GiftCardConfigurations:InvalidUsageType',
  /**
  * The selected usage type is not supported for the selected handler
  */
  GiftCardConfigurations_InvalidUsageTypeForHandler = 'GiftCardConfigurations:InvalidUsageTypeForHandler',
  /**
  * This product already has a giftcard product
  */
  GiftCards_ProductAlreadyExists = 'GiftCards:ProductAlreadyExists',
  /**
  * Handler is required
  */
  GiftCards_MissingHandler = 'GiftCards:MissingHandler',
  /**
  * The given type doesn't exist
  */
  GiftCards_UnknownType = 'GiftCards:UnknownType',
  /**
  * The data is not in a valid format for the selected type
  */
  GiftCards_InvalidData = 'GiftCards:InvalidData',
  /**
  * The given product isn't a giftcard
  */
  GiftCards_InvalidProductType = 'GiftCards:InvalidProductType',
  /**
  * Invalid IP address or CIDR range: {0}
  */
  IpFilter_InvalidIpAddress = 'IpFilter:InvalidIpAddress',
  /**
  * This configuration would block your own IP address ({0}) from accessing the API.
  */
  IpFilter_SelfLockout = 'IpFilter:SelfLockout',
  /**
  * Field '{0:string}' is required for the creation of a new Loyalty Program.
  */
  LoyaltyProgram_MissingFieldOnLoyaltyProgramCreation = 'LoyaltyProgram:MissingFieldOnLoyaltyProgramCreation',
  /**
  * A loyalty program badge category with this name already exists in this loyalty program
  */
  LoyaltyProgramBadgeCategory_AlreadyExists = 'LoyaltyProgramBadgeCategory:AlreadyExists',
  /**
  * A loyalty program badge category with this backend ID already exists
  */
  LoyaltyProgramBadgeCategory_BackendIDAlreadyExists = 'LoyaltyProgramBadgeCategory:BackendIDAlreadyExists',
  /**
  * SampleData must be a JSON object
  */
  MessageTemplates_SampleDataMustBeJsonObject = 'MessageTemplates:SampleDataMustBeJsonObject',
  /**
  * There already exists opening hours for organization {organizationUnitName:string} and day {dayOfWeek:EVA.Core.DayOfWeek}
  */
  OpeningHours_DuplicateOpeningHoursDayOfWeek = 'OpeningHours:DuplicateOpeningHoursDayOfWeek',
  /**
  * There already exists opening hours for organization {organizationUnitName:string} and date {date:date}
  */
  OpeningHours_DuplicateOpeningHoursDate = 'OpeningHours:DuplicateOpeningHoursDate',
  /**
  * This OpeningHoursType already exists
  */
  OpeningHoursTypes_AlreadyExists = 'OpeningHoursTypes:AlreadyExists',
  /**
  * The name of an internal OpeningHoursType cannot be modified.
  */
  OpeningHoursTypes_NameOfInternalOpeningHourTypeCannotBeModified = 'OpeningHoursTypes:NameOfInternalOpeningHourTypeCannotBeModified',
  /**
  * This OpeningHoursType is internal and cannot be deleted
  */
  OpeningHoursTypes_InternalTypesCannotBeDeleted = 'OpeningHoursTypes:InternalTypesCannotBeDeleted',
  /**
  * This OpeningHoursType has (exception)templates attached and cannot be deleted
  */
  OpeningHoursTypes_TypeHasTemplatesAndCannotBeDeleted = 'OpeningHoursTypes:TypeHasTemplatesAndCannotBeDeleted',
  /**
  * The OrganizationUnitSetScope is still being used, cannot delete.
  */
  OrganizationUnitSets_CannotDeleteScopeInUse = 'OrganizationUnitSets:CannotDeleteScopeInUse',
  /**
  * The OrganizationUnitSet is still being used, cannot delete.
  */
  OrganizationUnitSets_CannotDeleteInUse = 'OrganizationUnitSets:CannotDeleteInUse',
  /**
  * Set {0:string} is a set managed by EVA and cannot be modified.
  */
  OrganizationUnitSets_CannotModifySystemSet = 'OrganizationUnitSets:CannotModifySystemSet',
  /**
  * It's not possible to use OrganizationUnitSetTypes.System to create new sets.
  */
  OrganizationUnitSets_CannotCreateSystemSet = 'OrganizationUnitSets:CannotCreateSystemSet',
  /**
  * It's not possible to use an AdHoc set as a subset of another set.
  */
  OrganizationUnitSets_CannotUseAdHocSetsAsSubset = 'OrganizationUnitSets:CannotUseAdHocSetsAsSubset',
  /**
  * Name is required when creating a non-AdHoc set.
  */
  OrganizationUnitSets_NameIsRequired = 'OrganizationUnitSets:NameIsRequired',
  /**
  * OrganizationUnitShippingMethod already exists
  */
  OrganizationUnitShippingMethod_OrganizationUnitShippingMethodAlreadyExists = 'OrganizationUnitShippingMethod:OrganizationUnitShippingMethodAlreadyExists',
  /**
  * This PaymentTransactionLedgerType already exists
  */
  PaymentTransactionLedgerTypes_AlreadyExists = 'PaymentTransactionLedgerTypes:AlreadyExists',
  /**
  * This PaymentTransactionLedgerType is internal and can't be modified
  */
  PaymentTransactionLedgerTypes_IsInternal = 'PaymentTransactionLedgerTypes:IsInternal',
  /**
  * The payment type category can be only `credit` for installments.
  */
  PaymentType_InstallmentsShouldBeCredit = 'PaymentType:InstallmentsShouldBeCredit',
  /**
  * The minimum number of installments should be lower than the maximum number of installments.
  */
  PaymentType_InstallmentAmounts = 'PaymentType:InstallmentAmounts',
  /**
  * It's possible to configure either an interval of installments, or specific installment options.
  */
  PaymentType_InstallmentDataOptions = 'PaymentType:InstallmentDataOptions',
  /**
  * Installment data is required.
  */
  PaymentType_InstallmentDataRequired = 'PaymentType:InstallmentDataRequired',
  /**
  * Cannot create relation to historical price list
  */
  PriceLists_CannotCreateRelationToHistoricalPriceList = 'PriceLists:CannotCreateRelationToHistoricalPriceList',
  /**
  * The given pricelist has a SpecialPriceListID, which is already attached to the given OU. SpecialPriceList is deprecated and should be remove from the pricelist.
  */
  PriceLists_SpecialPriceListIsAlreadyAttachedToOrganizationUnit = 'PriceLists:SpecialPriceListIsAlreadyAttachedToOrganizationUnit',
  /**
  * A BackendID cannot be defined without a BackendSystemID and vice versa.
  */
  Pricing_BackendIdentifiersRequired = 'Pricing:BackendIdentifiersRequired',
  /**
  * PriceList {0:id} has the same BackendID.
  */
  Pricing_DuplicateBackendID = 'Pricing:DuplicateBackendID',
  /**
  * You do not have access to pricelist {0:id}.
  */
  Pricing_CannotViewPriceList = 'Pricing:CannotViewPriceList',
  /**
  * Barcode {barcode:string} already exists for ProductID {productID:id}
  */
  ProductBarcodes_BarcodeAlreadyExists = 'ProductBarcodes:BarcodeAlreadyExists',
  /**
  * UnitOfMeasure not found
  */
  ProductBarcodes_UnitOfMeasureNotFound = 'ProductBarcodes:UnitOfMeasureNotFound',
  /**
  * The supplied backendid already exists.
  */
  ProductRequirements_DuplicateBackendID = 'ProductRequirements:DuplicateBackendID',
  /**
  * The product requirement regex is not valid.
  */
  ProductRequirements_InvalidRegex = 'ProductRequirements:InvalidRegex',
  /**
  * The data type of the product requirement does not support regex validation.
  */
  ProductRequirements_DataTypeNotCompatibleWithRegex = 'ProductRequirements:DataTypeNotCompatibleWithRegex',
  /**
  * Product not found
  */
  ProductUnitOfMeasures_ProductNotFound = 'ProductUnitOfMeasures:ProductNotFound',
  /**
  * UnitOfMeasure not found
  */
  ProductUnitOfMeasures_UnitOfMeasureNotFound = 'ProductUnitOfMeasures:UnitOfMeasureNotFound',
  /**
  * The Quantity should be greather than 0
  */
  ProductUnitOfMeasures_InvalidQuantity = 'ProductUnitOfMeasures:InvalidQuantity',
  /**
  * RefundCorrectionReason with BackendID '{0:string}' already exists.
  */
  RefundCorrectionReasons_AlreadyExists = 'RefundCorrectionReasons:AlreadyExists',
  /**
  * A resend reason with this name already exists
  */
  ResendReason_AlreadyExists = 'ResendReason:AlreadyExists',
  /**
  * This return reason already exists.
  */
  ReturnReasons_AlreadyExists = 'ReturnReasons:AlreadyExists',
  /**
  * Remark is required for this return reason.
  */
  ReturnReasons_RemarkIsRequired = 'ReturnReasons:RemarkIsRequired',
  /**
  * A role set with BackendID '{0:string}' already exists
  */
  RoleSets_RoleSetWithBackendIDAlreadyExists = 'RoleSets:RoleSetWithBackendIDAlreadyExists',
  /**
  * Role set '{0:string}' is still attached to organization units
  */
  RoleSets_RoleSetIsStillAttached = 'RoleSets:RoleSetIsStillAttached',
  /**
  * The code `{0:string}` is preserved for system roles.
  */
  Roles_CodeIsPreservedForSystemRoles = 'Roles:CodeIsPreservedForSystemRoles',
  /**
  * Cannot modify or delete New Black system roles.
  */
  Roles_CannotModifyOrDeleteNewBlackRole = 'Roles:CannotModifyOrDeleteNewBlackRole',
  /**
  * OrganizationUnit with ID {0:string} not found on row {1:int32}
  */
  SettingsExcelImporter_OrganizationUnitByIDNotFound = 'SettingsExcelImporter:OrganizationUnitByIDNotFound',
  /**
  * OrganizationUnit with BackendID {0:string} not found on row {1:int32}
  */
  SettingsExcelImporter_OrganizationUnitByBackendIDNotFound = 'SettingsExcelImporter:OrganizationUnitByBackendIDNotFound',
  /**
  * No BackendID or OrganizationUnitID provided for row {0:id}
  */
  SettingsExcelImporter_NoOrganizationUnitIdentifier = 'SettingsExcelImporter:NoOrganizationUnitIdentifier',
  /**
  * Value on row {0:id} looks like a masked value
  */
  SettingsExcelImporter_MaskedValueImport = 'SettingsExcelImporter:MaskedValueImport',
  /**
  * Validation of the Excel file failed: {0:string}
  */
  StockAllocationRules_UploadStockAllocationRuleValidationError = 'StockAllocationRules:UploadStockAllocationRuleValidationError',
  /**
  * It's required to specify an OrganizationUnit to create this StockAllocationRule.
  */
  StockAllocations_OrganizationUnitRequired = 'StockAllocations:OrganizationUnitRequired',
  /**
  * OrganizationUnit {0:id} is not directly supplied by OrganizationUnit {1:id}.
  */
  StockAllocations_InvalidOrganizationUnit = 'StockAllocations:InvalidOrganizationUnit',
  /**
  * A stock allocation refill is already in progress. Please retry shortly.
  */
  StockAllocations_RefillAlreadyInProgress = 'StockAllocations:RefillAlreadyInProgress',
  /**
  * StockLabel with name '{0:string}' already exists
  */
  StockLabels_AlreadyExists = 'StockLabels:AlreadyExists',
  /**
  * Validation of the Excel file failed: {0:string}
  */
  TaxService_InvalidExcelFile = 'TaxService:InvalidExcelFile',
  /**
  * This UnitOfMeasure already exists
  */
  UnitOfMeasures_AlreadyExists = 'UnitOfMeasures:AlreadyExists',
  /**
  * UnitPriceCorrectionReason with BackendID '{0:string}' already exists.
  */
  UnitPriceCorrectionReasons_AlreadyExists = 'UnitPriceCorrectionReasons:AlreadyExists',
  /**
  * Can't update OrderLedgerType because it's not custom
  */
  UpdateOrderLedgerType_OrderLedgerTypeNotCustom = 'UpdateOrderLedgerType:OrderLedgerTypeNotCustom',
  /**
  * Can't update OrderLedgerType because its name already exists
  */
  UpdateOrderLedgerType_OrderLedgerTypeAlreadyExists = 'UpdateOrderLedgerType:OrderLedgerTypeAlreadyExists',
  /**
  * This UserOrigin already exists
  */
  UserOrigins_AlreadyExists = 'UserOrigins:AlreadyExists',
  /**
  * UserID is required when logged in user is an Employee or API user.
  */
  UserPaymentTokenServices_UserIDRequired = 'UserPaymentTokenServices:UserIDRequired',
}
export interface AMLAMLConfigurationDto {
  /**
  * Entity type: Country
  */
  CountryID: string;
  /**
  * Entity type: CountrySubdivision
  */
  CountrySubdivisionID?: string;
  Rules: AMLAMLRuleDto[];
}

export interface AMLAMLRuleDto {
  Blocked?: boolean;
  Business?: boolean;
  Foreigner?: boolean;
  RequireCustomer?: boolean;
  RequireCustomerSignature?: boolean;
  RequireCustomerVerification?: boolean;
  RequireEmployeeSignature?: boolean;
  RequireIdentification?: boolean;
  RequireIdentificationBlob?: boolean;
  RequireSurvey?: boolean;
  /**
  * Entity type: Script
  */
  ScriptID?: number;
  SlidingWindowDays?: number;
  /**
  * Entity type: Survey
  */
  SurveyID?: number;
  SystemSurvey?: AMLAMLSystemSurveys;
  Threshold?: number;
  TriggerType?: AMLAMLTriggerType;
}

/**
* Set the AML rules for a specific country. When no rules are provided, the configuration will be deleted.
*/
export interface CreateOrUpdateAMLConfiguration extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: Country
  */
  CountryID: string;
  /**
  * Entity type: CountrySubdivision
  */
  CountrySubdivisionID?: string;
  Rules: AMLAMLRuleDto[];
}

/**
* List all AML configurations.
*/
export interface ListAMLConfigurations extends PagedRequestMessage<AMLListConfigurationsFilter, ListAMLConfigurationsResponse> {
}

export interface ListAMLConfigurationsResponse extends PagedResponseMessage<AMLAMLConfigurationDto> {
}

/**
* Create a new Account to be used in Cookbook. Name and ObjectAccount are required.
*/
export interface CreateAccount extends RequestMessage<CreateAccountResponse> {
  BackendCode?: string;
  BookingFlags?: DataModelsBookingFlags;
  Name: string;
  ObjectAccount: string;
  Subsidiary?: string;
  Type?: DataModelsAccountType;
}

export interface CreateAccountResponse extends ResponseMessage {
  /**
  * Entity type: Account
  */
  ID: number;
}

/**
* Delete an existing Account
*/
export interface DeleteAccount extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: Account
  */
  ID: number;
}

/**
* Get all the properties of an existing Account
*/
export interface GetAccount extends RequestMessage<GetAccountResponse> {
  /**
  * Entity type: Account
  */
  ID: number;
}

export interface GetAccountResponse extends ResponseMessage {
  BackendCode?: string;
  BookingFlags: DataModelsBookingFlags;
  /**
  * Entity type: Account
  */
  ID: number;
  Name: string;
  ObjectAccount: string;
  Subsidiary?: string;
  Type: DataModelsAccountType;
}

/**
* List the active accounts
* 
* Available filters:
* - Name
* - ObjectAccount
*/
export interface ListAccounts extends FilteredPagedResultRequest<FinanceListAccountsFilter, ListAccountsResponse> {
}

export interface ListAccountsResponse extends PagedResultResponse<FinanceListAccountsItem> {
}

/**
* Update an existing Account. Make sure all properties are filled.
*/
export interface UpdateAccount extends RequestMessageWithEmptyResponse {
  BackendCode?: string | null;
  BookingFlags?: DataModelsBookingFlags;
  /**
  * Entity type: Account
  */
  ID: number;
  Name?: string;
  ObjectAccount?: string;
  Subsidiary?: string | null;
  Type?: DataModelsAccountType;
}

/**
* Create a new AppointmentCancellationReason.
*/
export interface CreateAppointmentCancellationReason extends RequestMessage<CreateAppointmentCancellationReasonResponse> {
  Description?: string;
  Name: string;
  /**
  * Entity type: OrganizationUnitSet
  */
  OrganizationUnitSetID?: number;
  Refund?: boolean;
}

export interface CreateAppointmentCancellationReasonResponse extends ResponseMessage {
  /**
  * Entity type: AppointmentCancellationReason
  */
  ID: number;
}

/**
* Create a new Event.
*/
export interface CreateEvent extends RequestMessage<CreateEventResponse> {
  AppointmentType?: AppointmentsAppointmentType;
  CouponPrefix?: string;
  CouponSuffix?: string;
  /**
  * Entity type: Discount
  */
  DiscountID?: number;
  Duration?: number;
  DurationAfter?: number;
  DurationBefore?: number;
  /**
  * Entity type: EventType
  */
  EventTypeID?: number;
  Name: string;
  /**
  * Entity type: Product
  */
  ProductID: number;
  /**
  * Entity type: Survey
  */
  SurveyID?: number;
  WishlistType?: AppointmentsEventWishlistType;
}

/**
* Create a new EventLocation.
*/
export interface CreateEventLocation extends RequestMessage<CreateEventLocationResponse> {
  Capacity?: number;
  /**
  * Entity type: EventType
  */
  EventTypeID?: number;
  IgnoreOrganizationUnitOpeningHours?: boolean;
  Name: string;
  /**
  * Entity type: OpeningHoursTemplate
  */
  OpeningHoursTemplateID?: number;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID: number;
  /**
  * Entity type: Station
  */
  StationID?: number;
  Status?: AppointmentsEventLocationStatus;
}

export interface CreateEventLocationResponse extends ResponseMessage {
  /**
  * Entity type: EventLocation
  */
  ID: number;
}

export interface CreateEventResponse extends ResponseMessage {
  /**
  * Entity type: Event
  */
  ID: number;
}

/**
* Create a new EventType.
*/
export interface CreateEventType extends RequestMessage<CreateEventTypeResponse> {
  Description?: string;
  Name: string;
}

export interface CreateEventTypeResponse extends ResponseMessage {
  /**
  * Entity type: EventType
  */
  ID: number;
}

/**
* Delete an AppointmentCancellationReason.
*/
export interface DeleteAppointmentCancellationReason extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: AppointmentCancellationReason
  */
  ID: number;
}

/**
* Delete an Event.
*/
export interface DeleteEvent extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: Event
  */
  ID: number;
}

/**
* Delete an EventLocation.
*/
export interface DeleteEventLocation extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: EventLocation
  */
  ID: number;
}

/**
* Delete an EventType.
*/
export interface DeleteEventType extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: EventType
  */
  ID: number;
}

/**
* Get an AppointmentCancellationReason.
*/
export interface GetAppointmentCancellationReason extends RequestMessage<GetAppointmentCancellationReasonResponse> {
  /**
  * Entity type: AppointmentCancellationReason
  */
  ID: number;
}

export interface GetAppointmentCancellationReasonResponse extends ResponseMessage {
  AppointmentCancellationReason: AppointmentsGetAppointmentCancellationReasonResponse_AppointmentCancellationReasonDto;
}

export interface AppointmentsGetAppointmentCancellationReasonResponse_AppointmentCancellationReasonDto extends EVAFrameworkAPIEnumDto {
  /**
  * Entity type: OrganizationUnitSet
  */
  OrganizationUnitSetID?: number;
  Refund: boolean;
}

/**
* Get an Event.
*/
export interface GetEvent extends RequestMessage<GetEventResponse> {
  /**
  * Entity type: Event
  */
  ID: number;
}

/**
* Get an EventLocation.
*/
export interface GetEventLocation extends RequestMessage<GetEventLocationResponse> {
  /**
  * Entity type: EventLocation
  */
  ID: number;
}

/**
* Get an EventLocation's opening hours.
*/
export interface GetEventLocationOpeningHours extends RequestMessage<GetEventLocationOpeningHoursResponse> {
  /**
  * Entity type: EventLocation
  */
  ID: number;
}

export interface GetEventLocationOpeningHoursResponse extends ResponseMessage {
  ExceptionOpeningHours?: AppointmentsGetEventLocationOpeningHoursResponse_EventLocationOpeningHours;
  OpeningHours?: AppointmentsGetEventLocationOpeningHoursResponse_EventLocationOpeningHours;
}

export interface AppointmentsGetEventLocationOpeningHoursResponse_EventLocationOpeningHours {
  Description?: string;
  Friday?: OrganizationUnitsOpeningHoursTemplateDay;
  /**
  * Entity type: OpeningHoursTemplate
  */
  ID: number;
  Monday?: OrganizationUnitsOpeningHoursTemplateDay;
  Saturday?: OrganizationUnitsOpeningHoursTemplateDay;
  SpecialDays?: Record<string,OrganizationUnitsOpeningHoursTemplateDay>;
  Sunday?: OrganizationUnitsOpeningHoursTemplateDay;
  Thursday?: OrganizationUnitsOpeningHoursTemplateDay;
  Tuesday?: OrganizationUnitsOpeningHoursTemplateDay;
  Wednesday?: OrganizationUnitsOpeningHoursTemplateDay;
}

export interface GetEventLocationResponse extends ResponseMessage {
  Capacity: number;
  EventType?: EVAFrameworkAPIEnumDto;
  IgnoreOrganizationUnitOpeningHours: boolean;
  Name: string;
  /**
  * Entity type: OpeningHoursTemplate
  */
  OpeningHoursTemplateID?: number;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID: number;
  OrganizationUnitName: string;
  /**
  * Entity type: Station
  */
  StationID?: number;
  Status: AppointmentsEventLocationStatus;
}

export interface GetEventResponse extends ResponseMessage {
  AppointmentType: AppointmentsAppointmentType;
  CouponPrefix?: string;
  CouponSuffix?: string;
  /**
  * Entity type: Discount
  */
  DiscountID?: number;
  DiscountName?: string;
  Duration: number;
  DurationAfter?: number;
  DurationBefore?: number;
  EventType?: EVAFrameworkAPIEnumDto;
  Name: string;
  /**
  * Entity type: Product
  */
  ProductID: number;
  /**
  * Entity type: Survey
  */
  SurveyID?: number;
  SurveyName?: string;
  WishlistType: AppointmentsEventWishlistType;
}

/**
* Get an EventType.
*/
export interface GetEventType extends RequestMessage<GetEventTypeResponse> {
  /**
  * Entity type: EventType
  */
  ID: number;
}

export interface GetEventTypeResponse extends ResponseMessage {
  EventType: EVAFrameworkAPIEnumDto;
}

/**
* List the AppointmentCancellationReasons.
*/
export interface ListAppointmentCancellationReasons extends FilteredPagedResultRequest<AppointmentsListAppointmentCancellationReasonsFilter, ListAppointmentCancellationReasonsResponse> {
}

export interface ListAppointmentCancellationReasonsResponse extends PagedResultResponse<AppointmentsListAppointmentCancellationReasonsResponse_AppointmentCancellationReasonDto> {
}

export interface AppointmentsListAppointmentCancellationReasonsResponse_AppointmentCancellationReasonDto extends EVAFrameworkAPIEnumDto {
  /**
  * Entity type: OrganizationUnitSet
  */
  OrganizationUnitSetID?: number;
  Refund: boolean;
}

/**
* Get EventLocation opening hours templates.
*/
export interface ListEventLocationOpeningHoursTemplates extends FilteredPagedResultRequest<AppointmentsListEventLocationOpeningHoursTemplatesFilter, ListEventLocationOpeningHoursTemplatesResponse> {
}

export interface ListEventLocationOpeningHoursTemplatesResponse extends PagedResultResponse<AppointmentsListEventLocationOpeningHoursTemplatesResponse_EventLocationOpeningHoursTemplateDto> {
}

export interface AppointmentsListEventLocationOpeningHoursTemplatesResponse_EventLocationOpeningHoursTemplateDto {
  Description?: string;
  Friday?: OrganizationUnitsOpeningHoursTemplateDay;
  /**
  * Entity type: OpeningHoursTemplate
  */
  ID: number;
  Monday?: OrganizationUnitsOpeningHoursTemplateDay;
  Saturday?: OrganizationUnitsOpeningHoursTemplateDay;
  SpecialDays?: Record<string,OrganizationUnitsOpeningHoursTemplateDay>;
  Sunday?: OrganizationUnitsOpeningHoursTemplateDay;
  Thursday?: OrganizationUnitsOpeningHoursTemplateDay;
  Tuesday?: OrganizationUnitsOpeningHoursTemplateDay;
  Wednesday?: OrganizationUnitsOpeningHoursTemplateDay;
}

/**
* List the EventLocations.
*/
export interface ListEventLocations extends FilteredPagedResultRequest<AppointmentsListEventLocationsFilter, ListEventLocationsResponse> {
}

export interface ListEventLocationsResponse extends PagedResultResponse<AppointmentsListEventLocationsResponse_EventLocationDto> {
}

export interface AppointmentsListEventLocationsResponse_EventLocationDto {
  Capacity: number;
  EventType?: EVAFrameworkAPIEnumDto;
  /**
  * Entity type: EventLocation
  */
  ID: number;
  IgnoreOrganizationUnitOpeningHours: boolean;
  Name: string;
  /**
  * Entity type: OpeningHoursTemplate
  */
  OpeningHoursTemplateID?: number;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID: number;
  OrganizationUnitName: string;
  /**
  * Entity type: Station
  */
  StationID?: number;
  Status: AppointmentsEventLocationStatus;
}

/**
* List the EventTypes.
*/
export interface ListEventTypes extends FilteredPagedResultRequest<AppointmentsListEventTypesFilter, ListEventTypesResponse> {
}

export interface ListEventTypesResponse extends PagedResultResponse<EVAFrameworkAPIEnumDto> {
}

/**
* List the available Events.
*/
export interface ListEvents extends FilteredPagedResultRequest<AppointmentsListEventsFilter, ListEventsResponse> {
}

export interface ListEventsResponse extends PagedResultResponse<AppointmentsListEventsResponse_EventDto> {
}

export interface AppointmentsListEventsResponse_EventDto {
  AppointmentType: AppointmentsAppointmentType;
  /**
  * Entity type: Discount
  */
  DiscountID?: number;
  DiscountName?: string;
  Duration: number;
  DurationAfter?: number;
  DurationBefore?: number;
  EventType: EVAFrameworkAPIEnumDto;
  /**
  * Entity type: Event
  */
  ID: number;
  Name: string;
  /**
  * Entity type: Product
  */
  ProductID: number;
  /**
  * Entity type: Survey
  */
  SurveyID?: number;
  SurveyName?: string;
  WishlistType: AppointmentsEventWishlistType;
}

/**
* Set an EventLocation's opening hours.
*/
export interface SetEventLocationOpeningHours extends RequestMessageWithEmptyResponse {
  Friday?: OrganizationUnitsOpeningHoursTemplateDay;
  /**
  * Entity type: EventLocation
  */
  ID: number;
  Monday?: OrganizationUnitsOpeningHoursTemplateDay;
  Saturday?: OrganizationUnitsOpeningHoursTemplateDay;
  /**
  * Will add or update special days - set to null to remove, and omitted dates will not be changed.
  */
  SpecialDays?: Record<string,OrganizationUnitsOpeningHoursTemplateDay>;
  Sunday?: OrganizationUnitsOpeningHoursTemplateDay;
  Thursday?: OrganizationUnitsOpeningHoursTemplateDay;
  Tuesday?: OrganizationUnitsOpeningHoursTemplateDay;
  Wednesday?: OrganizationUnitsOpeningHoursTemplateDay;
}

/**
* Edit an AppointmentCancellationReason.
*/
export interface UpdateAppointmentCancellationReason extends RequestMessage<EmptyResponseMessage> {
  Description?: string | null;
  /**
  * Entity type: AppointmentCancellationReason
  */
  ID: number;
  Name?: string;
  /**
  * Entity type: OrganizationUnitSet
  */
  OrganizationUnitSetID?: number | null;
  Refund?: boolean;
}

/**
* Edit an Event.
*/
export interface UpdateEvent extends RequestMessage<EmptyResponseMessage> {
  AppointmentType?: AppointmentsAppointmentType;
  CouponPrefix?: string | null;
  CouponSuffix?: string | null;
  /**
  * Entity type: Discount
  */
  DiscountID?: number | null;
  Duration?: number;
  DurationAfter?: number | null;
  DurationBefore?: number | null;
  /**
  * Entity type: EventType
  */
  EventTypeID?: number | null;
  /**
  * Entity type: Event
  */
  ID: number;
  Name?: string;
  /**
  * Entity type: Product
  */
  ProductID?: number;
  /**
  * Entity type: Survey
  */
  SurveyID?: number | null;
  WishlistType?: AppointmentsEventWishlistType;
}

/**
* Edit an EventLocation.
*/
export interface UpdateEventLocation extends RequestMessage<EmptyResponseMessage> {
  Capacity?: number;
  /**
  * Entity type: EventType
  */
  EventTypeID?: number | null;
  /**
  * Entity type: EventLocation
  */
  ID: number;
  IgnoreOrganizationUnitOpeningHours?: boolean;
  Name?: string;
  /**
  * Entity type: OpeningHoursTemplate
  */
  OpeningHoursTemplateID?: number | null;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID?: number;
  /**
  * Entity type: Station
  */
  StationID?: number | null;
  Status?: AppointmentsEventLocationStatus;
}

/**
* Edit an EventType.
*/
export interface UpdateEventType extends RequestMessage<EmptyResponseMessage> {
  Description?: string | null;
  /**
  * Entity type: EventType
  */
  ID: number;
  Name?: string;
}

export interface AuditingConfigurationResponse extends ResponseMessage {
  Errors?: string[];
  Success: boolean;
}

/**
* Resets the Financial Periods for given OU and all children to which the auditing provider applies. **Use with care!**
*/
export interface AuditingResetFinancialPeriods extends RequestMessage<AuditingConfigurationResponse> {
  AuditingProvider: string;
  MarkAsProcessed?: boolean;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID: number;
}

/**
* Update the private key version and reset the auditing chain.
*/
export interface AuditingSetPrivateKey extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID?: number;
  PrivateKeyFile?: string;
}

export interface AuditingAuditingSetting {
  Group?: string;
  Key?: string;
  Name?: string;
  Type: AuditingAuditingSettingType;
  Value?: string;
}

export enum AuditingAuditingSettingType {
  String = 0,
  Bool = 1,
  Integer = 2,
  Decimal = 3,
}

/**
* Auditing service for uploading your public and private key configuration
*/
export interface AuditingUploadKeySet extends RequestMessage<EmptyResponseMessage> {
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID: number;
  PrivateKey: string;
  PublicKey: string;
}

/**
* Validates the current settings and properties of an auditing provider.
*/
export interface AuditingValidateConfiguration extends RequestMessage<AuditingConfigurationResponse> {
  AuditingProvider: string;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID: number;
}

/**
* Deprecated. Always returns an empty list.
*/
export interface GetAuditingSettings extends RequestMessage<GetAuditingSettingsResponse> {
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID: number;
}

export interface GetAuditingSettingsResponse extends ResponseMessage {
  AuditingSettings?: AuditingAuditingSetting[];
}

/**
* Deprecated. No-op.
*/
export interface SetAuditingSettings extends RequestMessageWithEmptyResponse {
  AuditingSettings?: Record<string,string | null>;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID: number;
}

export interface BlobsCDNCDNConfigurationSummary {
  BackendID: string;
  DefaultFormat?: string;
  FormatParameter?: string;
  /**
  * Entity type: CDNConfiguration
  */
  ID: number;
  Name: string;
  Presets: BlobsCDNCDNPresetDto[];
  ResolutionStrategy: BlobsCDNCDNResolutionStrategy;
  SupportedFormats: string[];
  UrlTemplate?: string;
}

export interface BlobsCDNCDNPresetDto {
  Height?: number;
  Name: string;
  Width?: number;
}

/**
* Creates a new CDN configuration.
*/
export interface CreateCDNConfiguration extends RequestMessage<CreateCDNConfigurationResponse> {
  BackendID: string;
  DefaultFormat?: string;
  FormatParameter?: string;
  Name: string;
  Presets?: BlobsCDNCDNPresetDto[];
  ResolutionStrategy?: BlobsCDNCDNResolutionStrategy;
  SupportedFormats?: string[];
  UrlTemplate?: string;
}

export interface CreateCDNConfigurationResponse extends ResponseMessage {
  /**
  * Entity type: CDNConfiguration
  */
  ID: number;
}

/**
* Deletes a CDN configuration.
*/
export interface DeleteCDNConfiguration extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: CDNConfiguration
  */
  ID: number;
}

/**
* Gets a CDN configuration by its ID.
*/
export interface GetCDNConfiguration extends RequestMessage<GetCDNConfigurationResponse> {
  /**
  * Entity type: CDNConfiguration
  */
  ID: number;
}

export interface GetCDNConfigurationResponse extends ResponseMessage {
  BackendID: string;
  DefaultFormat?: string;
  FormatParameter?: string;
  /**
  * Entity type: CDNConfiguration
  */
  ID: number;
  Name: string;
  Presets: BlobsCDNCDNPresetDto[];
  ResolutionStrategy: BlobsCDNCDNResolutionStrategy;
  SupportedFormats: string[];
  UrlTemplate?: string;
}

/**
* Lists CDN configurations. Returns a paged response.
*/
export interface ListCDNConfigurations extends PagedRequestMessage<BlobsCDNListCDNConfigurationsFilter, ListCDNConfigurationsResponse> {
}

export interface ListCDNConfigurationsResponse extends PagedResponseMessage<BlobsCDNCDNConfigurationSummary> {
}

/**
* Resolves an example URL for the given CDN configuration settings without persisting them. Use it to preview how a configuration shapes image URLs while editing.
*/
export interface PreviewCDNConfigurationUrl extends RequestMessage<PreviewCDNConfigurationUrlResponse> {
  /**
  * Sample blob URI to resolve against. Defaults to a placeholder image URI.
  */
  BlobUri?: string;
  /**
  * Format applied when no format is supplied.
  */
  DefaultFormat?: string;
  /**
  * Requested format. Falls back to DefaultFormat when omitted.
  */
  Format?: string;
  /**
  * Query parameter name for the image format; only used by QueryParameters.
  */
  FormatParameter?: string;
  /**
  * Requested height. Defaults to a sample value.
  */
  Height?: number;
  /**
  * Presets; required for PathPreset.
  */
  Presets?: BlobsCDNCDNPresetDto[];
  /**
  * Resolution strategy to preview.
  */
  ResolutionStrategy?: BlobsCDNCDNResolutionStrategy;
  /**
  * URL template; required for Template, optional for PathPreset.
  */
  UrlTemplate?: string;
  /**
  * Requested width. Defaults to a sample value.
  */
  Width?: number;
}

export interface PreviewCDNConfigurationUrlResponse extends ResponseMessage {
  /**
  * The resolved example URL.
  */
  Url: string;
}

/**
* Updates an existing CDN configuration.
*/
export interface UpdateCDNConfiguration extends RequestMessageWithEmptyResponse {
  BackendID?: string | null;
  DefaultFormat?: string | null;
  FormatParameter?: string | null;
  /**
  * Entity type: CDNConfiguration
  */
  ID: number;
  Name?: string | null;
  Presets?: BlobsCDNCDNPresetDto[] | null;
  ResolutionStrategy?: BlobsCDNCDNResolutionStrategy;
  SupportedFormats?: string[] | null;
  UrlTemplate?: string | null;
}

/**
* Add a blob to a case interacion.
*/
export interface AddBlobToCaseInteraction extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: Blob
  * Can be used for standard blobs - for secure blobs, use `BlobUrl` instead.
  */
  BlobID?: string;
  /**
  * Can be used for both standard- and secured blobs - must match environment assets URL.
  */
  BlobUrl?: string;
  /**
  * Can be used for both standard- and secured blobs - must match environment assets URL.
  */
  BlobUrls?: string[];
  /**
  * Entity type: Interaction
  */
  InteractionID: number;
}

/**
* Archive a case.
*/
export interface ArchiveCase extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: Case
  */
  ID: number;
}

/**
* Attach blob to case.
*/
export interface AttachBlobToCase extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: Blob
  * Can be used for standard blobs - for secure blobs, use `BlobUrl` instead.
  */
  BlobID?: string;
  /**
  * Can be used for both standard- and secured blobs - must match environment assets URL.
  */
  BlobUrl?: string;
  /**
  * Can be used for both standard- and secured blobs - must match environment assets URL.
  */
  BlobUrls?: string[];
  /**
  * Entity type: Case
  */
  CaseID: number;
}

/**
* Create a new case.
*/
export interface CreateCase extends RequestMessage<CreateCaseResponse> {
  /**
  * Entity type: OrganizationUnit
  * OU the case is assigned to. When set this will influence visibility.
  */
  AssignedOrganizationUnitID?: number;
  /**
  * Entity type: User
  */
  AssigneeID?: number;
  BackendID?: string;
  /**
  * Optional additional custom fields
  */
  CustomFields?: DataModelsCustomFieldKeyValue[];
  /**
  * Entity type: User
  */
  CustomerID?: number;
  Description: string;
  ExternalOrderIdentifier?: string;
  /**
  * Entity type: OrganizationUnit
  * Can only be set once. Can be updated when not set on create.
  */
  OriginatingOrganizationUnitID?: number;
  Priority?: DataModelsCasePriority;
  Title: string;
  /**
  * Entity type: CaseTopic
  */
  TopicID: number;
}

/**
* Creates a new case interaction
*/
export interface CreateCaseInteraction extends RequestMessage<CreateCaseInteractionResponse> {
  BackendID?: string;
  /**
  * Entity type: Case
  */
  CaseID: number;
  InteractionType?: DataModelsInteractionType;
  Text: string;
}

export interface CreateCaseInteractionResponse extends ResponseMessage {
  /**
  * Entity type: Interaction
  */
  ID: number;
}

export interface CreateCaseResponse extends ResponseMessage {
  /**
  * Entity type: Case
  */
  ID: number;
}

/**
* Creates a new case status
*/
export interface CreateCaseStatus extends RequestMessage<CreateCaseStatusResponse> {
  Action?: DataModelsCaseStatusAction;
  BackendID?: string;
  Color?: string;
  Description?: string;
  IsClosed?: boolean;
  Name: string;
  /**
  * Entity type: Script
  */
  ScriptID?: number;
}

export interface CreateCaseStatusResponse extends ResponseMessage {
  /**
  * Entity type: CaseStatus
  */
  ID: number;
}

/**
* Creates a new case topic
*/
export interface CreateCaseTopic extends RequestMessage<CreateCaseTopicResponse> {
  BackendID?: string;
  Description?: string;
  Name: string;
  /**
  * Entity type: CaseTopic
  * Can only be set on creation
  */
  ParentID?: number;
}

export interface CreateCaseTopicResponse extends ResponseMessage {
  /**
  * Entity type: CaseTopic
  */
  ID: number;
}

/**
* Detaches and deletes a blob from a case.
*/
export interface DeleteCaseBlob extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: Blob
  * Can be used for standard blobs - for secure blobs, use `BlobUrl` instead.
  */
  BlobID?: string;
  /**
  * Can be used for both standard- and secured blobs - must match environment assets URL.
  */
  BlobUrl?: string;
  /**
  * Entity type: Case
  */
  CaseID: number;
}

/**
* Delete a case interaction
*/
export interface DeleteCaseInteraction extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: Interaction
  */
  ID: number;
}

/**
* Delete a case status
*/
export interface DeleteCaseStatus extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: CaseStatus
  */
  ID: number;
}

/**
* Delete a case topic. NOTE THAT sub topics will also be deleted.
*/
export interface DeleteCaseTopic extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: CaseTopic
  */
  ID: number;
}

/**
* Gets a case by its ID.
*/
export interface GetCaseByID extends RequestMessage<GetCaseByIDResponse> {
  /**
  * Entity type: Case
  */
  ID: number;
}

export interface GetCaseByIDResponse extends ResponseMessage {
  AssignedOn?: string;
  /**
  * Entity type: OrganizationUnit
  */
  AssignedOrganizationUnitID?: number;
  AssignedOrganizationUnitName?: string;
  AssigneeEmail?: string;
  /**
  * Entity type: User
  */
  AssigneeID?: number;
  AssigneeName?: string;
  BackendID?: string;
  /**
  * Entity type: Blob
  */
  BlobIDs?: string[];
  Blobs?: CasesGetCaseByIDResponse_CaseBlobModel[];
  CaseTopic?: CasesGetCaseByIDResponse_CaseTopicData;
  ClosingTime?: string;
  CreatedBy?: CasesGetCaseByIDResponse_User;
  CreationTime: string;
  /**
  * Entity type: CustomField
  */
  CustomFieldValuesWithOptions?: Record<string,DataModelsCustomFieldValueWithOptions>;
  CustomFields?: DataModelsCustomFieldResponse[];
  Customer?: CasesGetCaseByIDResponse_UserInfo;
  /**
  * Entity type: User
  */
  CustomerID?: number;
  Description?: string;
  ExternalOrderIdentifier?: string;
  /**
  * Entity type: Case
  */
  ID: number;
  IsDescriptionEditable: boolean;
  IsTitleEditable: boolean;
  LastInteractionTime?: string;
  LastModificationTime?: string;
  LastModifiedBy?: CasesGetCaseByIDResponse_User;
  OrderCreationTime?: string;
  OrderDisplayID?: string;
  /**
  * Entity type: Order
  */
  OrderID?: number;
  /**
  * Entity type: OrganizationUnit
  */
  OriginatingOrganizationUnitID?: number;
  OriginatingOrganizationUnitName?: string;
  Priority: DataModelsCasePriority;
  RelatedItems?: CasesGetCaseByIDResponse_RelatedItem[];
  Repairs?: CasesGetCaseByIDResponse_CaseRepair[];
  ReportingTime: string;
  Solution?: string;
  StatusColor?: string;
  /**
  * Entity type: CaseStatus
  */
  StatusID: number;
  StatusName?: string;
  Summary?: string;
  SummaryLastModificationDate?: string;
  /**
  * Entity type: User
  */
  SummaryLastModifiedByID?: number;
  Title?: string;
  /**
  * Entity type: CaseTopic
  */
  TopicID?: number;
  TopicName?: string;
}

export interface CasesGetCaseByIDResponse_CaseBlobModel {
  /**
  * Entity type: Blob
  */
  ID: string;
  Url?: string;
}

export interface CasesGetCaseByIDResponse_CaseRepair {
  CompletionTime?: string;
  CreationTime: string;
  /**
  * Entity type: Repair
  */
  ID: number;
  RepairAssignee?: CasesGetCaseByIDResponse_UserInfo;
  RepairTask?: CasesGetCaseByIDResponse_CaseRepairTask;
  SerialNumber?: string;
  SerialNumberRegistrationStatus?: DataModelsSerialNumberRegistrationStatus;
  Status: DataModelsRepairStatus;
}

export interface CasesGetCaseByIDResponse_CaseRepairTask {
  /**
  * Entity type: RepairTask
  */
  ID: number;
  UserTaskSubType?: EVAFrameworkAPIEnumDto;
}

export interface CasesGetCaseByIDResponse_CaseTopicData {
  CaseTopic?: CasesGetCaseByIDResponse_CaseTopicData;
  IsDeleted: boolean;
  TopicBackendID?: string;
  TopicDisplayName?: string;
  /**
  * Entity type: CaseTopic
  */
  TopicID?: number;
  TopicName?: string;
}

export interface CasesGetCaseByIDResponse_RelatedItem {
  /**
  * Entity type: CaseRelatedItem
  */
  ID: number;
  IsWarranty: boolean;
  /**
  * Entity type: OrderLine
  */
  OrderLineID?: number;
  Product?: SearchIProductSearchItem;
  /**
  * Entity type: Product
  */
  ProductID?: number;
  SerialNumber?: string;
  SerialNumberRegistrationStatus?: DataModelsSerialNumberRegistrationStatus;
  WarrantyAdditionalInformation?: string;
  WarrantyExpiration?: string;
}

export interface CasesGetCaseByIDResponse_User {
  FirstName?: string;
  FullName?: string;
  /**
  * Entity type: User
  */
  ID?: number;
  LastName?: string;
}

export interface CasesGetCaseByIDResponse_UserInfo {
  BackendID?: string;
  EmailAddress?: string;
  FirstName?: string;
  FullName?: string;
  /**
  * Entity type: User
  */
  ID: number;
  LastName?: string;
  PhoneNumber?: string;
}

/**
* Get case interaction
*/
export interface GetCaseInteraction extends RequestMessage<GetCaseInteractionResponse> {
  /**
  * Entity type: Interaction
  */
  ID: number;
}

export interface GetCaseInteractionResponse extends ResponseMessage {
  BackendID?: string;
  BlobIDs?: string[];
  CanBeMutated: boolean;
  /**
  * Entity type: Case
  */
  CaseID: number;
  CreationTime: string;
  /**
  * Entity type: Interaction
  */
  ID: number;
  InteractionType: DataModelsInteractionType;
  LastModificationTime?: string;
  Text?: string;
}

/**
* Get case status
*/
export interface GetCaseStatus extends RequestMessage<GetCaseStatusResponse> {
  /**
  * Entity type: CaseStatus
  */
  ID: number;
}

export interface GetCaseStatusResponse extends ResponseMessage {
  Action: DataModelsCaseStatusAction;
  BackendID?: string;
  Color?: string;
  Description?: string;
  /**
  * Entity type: CaseStatus
  */
  ID: number;
  IsClosed: boolean;
  IsSystem: boolean;
  Name?: string;
  /**
  * Entity type: Script
  */
  ScriptID?: number;
}

/**
* Get case topic
*/
export interface GetCaseTopic extends RequestMessage<GetCaseTopicResponse> {
  /**
  * Entity type: CaseTopic
  */
  ID: number;
}

export interface GetCaseTopicResponse extends ResponseMessage {
  BackendID?: string;
  Description?: string;
  DisplayName?: string;
  /**
  * Entity type: CaseTopic
  */
  ID: number;
  Name?: string;
  /**
  * Entity type: CaseTopic
  */
  ParentID?: number;
}

/**
* List all the blobs that are attached to the case.
*/
export interface ListBlobsForCase extends RequestMessage<ListBlobsForCaseResponse> {
  /**
  * Entity type: Case
  */
  CaseID: number;
}

export interface ListBlobsForCaseResponse extends ResponseMessage {
  Result?: CasesListBlobsForCaseResponse_Blob[];
}

export interface CasesListBlobsForCaseResponse_Blob {
  BlobID: string;
  CreationTime: string;
  MimeType?: string;
  Name?: string;
  Url?: string;
}

/**
* List the case interactions
*/
export interface ListCaseInteractions extends PagedRequestMessage<InteractionsListCaseInteractionsFilter, ListCaseInteractionsResponse> {
  /**
  * Entity type: Case
  */
  CaseID: number;
  IncludeRepairInteractions?: boolean;
}

export interface ListCaseInteractionsResponse extends PagedResponseMessage<CasesListCaseInteractionsResponse_CaseInteraction> {
}

export interface CasesListCaseInteractionsResponse_CaseInteraction {
  /**
  * Entity type: Interaction
  */
  BackendID?: string;
  CanBeMutated: boolean;
  CreatedBy?: CasesListCaseInteractionsResponse_User;
  /**
  * Entity type: User
  */
  CreatedByID?: number;
  CreationTime: string;
  /**
  * Entity type: Interaction
  */
  ID: number;
  InteractionType: DataModelsInteractionType;
  LastModificationTime?: string;
  /**
  * Entity type: Repair
  */
  RepairID?: number;
  Text?: string;
}

export interface CasesListCaseInteractionsResponse_User {
  /**
  * Entity type: User
  */
  CreatedByID?: number;
  FirstName?: string;
  FullName?: string;
  LastName?: string;
}

/**
* List the case statuses
*/
export interface ListCaseStatuses extends PagedRequestMessage<CasesListCaseStatusesFilter, ListCaseStatusesResponse> {
}

export interface ListCaseStatusesResponse extends PagedResponseMessage<CasesListCaseStatusesResponse_CaseStatus> {
}

export interface CasesListCaseStatusesResponse_CaseStatus {
  Action: DataModelsCaseStatusAction;
  BackendID?: string;
  Color?: string;
  Description?: string;
  /**
  * Entity type: CaseStatus
  */
  ID: number;
  IsClosed: boolean;
  Name?: string;
}

/**
* List the case topics
*/
export interface ListCaseTopics extends PagedRequestMessage<CasesListCaseTopicsFilter, ListCaseTopicsResponse> {
}

export interface ListCaseTopicsResponse extends PagedResponseMessage<CasesListCaseTopicsResponse_CaseTopic> {
}

export interface CasesListCaseTopicsResponse_CaseTopic {
  BackendID?: string;
  Description?: string;
  DisplayName?: string;
  /**
  * Entity type: CaseTopic
  */
  ID: number;
  Name?: string;
  /**
  * Entity type: CaseTopic
  */
  ParentID?: number;
}

/**
* List cases. Returns a paged response.
*/
export interface ListCases extends PagedRequestMessage<CasesListCasesFilter, ListCasesResponse> {
}

export interface ListCasesResponse extends PagedResponseMessage<CasesListCasesResponse_Case> {
}

export interface CasesListCasesResponse_Case {
  /**
  * Entity type: OrganizationUnit
  */
  AssignedOrganizationUnitID?: number;
  AssignedOrganizationUnitName?: string;
  /**
  * Entity type: User
  */
  AssigneeID?: number;
  AssigneeName?: string;
  BackendID?: string;
  CreatedBy?: CasesListCasesResponse_User;
  CreationTime: string;
  Customer?: CasesListCasesResponse_Customer;
  /**
  * Entity type: User
  */
  CustomerID?: number;
  ExternalOrderIdentifier?: string;
  /**
  * Entity type: Case
  */
  ID: number;
  LastInteractionTime?: string;
  LastModificationTime?: string;
  LastModifiedBy?: CasesListCasesResponse_User;
  OrderDisplayID?: string;
  /**
  * Entity type: Order
  */
  OrderID?: number;
  /**
  * Entity type: OrganizationUnit
  */
  OriginatingOrganizationUnitID?: number;
  OriginatingOrganizationUnitName?: string;
  Priority: DataModelsCasePriority;
  ReportingTime: string;
  StatusColor?: string;
  /**
  * Entity type: CaseStatus
  */
  StatusID: number;
  StatusName?: string;
  Title?: string;
  /**
  * Entity type: CaseTopic
  */
  TopicID?: number;
  TopicName?: string;
}

export interface CasesListCasesResponse_Customer {
  EmailAddress?: string;
  FirstName?: string;
  FullName?: string;
  LastName?: string;
}

export interface CasesListCasesResponse_User {
  FirstName?: string;
  FullName?: string;
  /**
  * Entity type: User
  */
  ID?: number;
  LastName?: string;
}

/**
* Print case receipt
*/
export interface PrintCaseReceipt extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: Case
  */
  CaseID: number;
  /**
  * Entity type: Station
  */
  StationID?: number;
}

/**
* Push and import a case.
*/
export interface PushCase extends RequestMessage<PushCaseResponse> {
  AssignedOn?: string;
  /**
  * OU the case is assigned to. When set this will influence visibility.
  */
  AssignedOrganizationUnitBackendID?: string;
  Assignee?: CasesPushCase_PushCaseAssignee;
  BackendID: string;
  BackendSystemID?: string;
  CaseRelatedItems?: CasesPushCase_PushCaseRelatedItems;
  /**
  * The topic that this case is a part of. If a BackendID is provided and a CaseTopic exists with that ID, that CaseTopic is used, no matter what Name or ParentBackendID are passed and if they match.
  *   If no CaseTopic exists with the given BackendID, but one does exist with the given Name and ParentBackendID, that CaseTopic is used instead, disregarding what BackendID was passed in the request.
  *   If none of these conditions are met, a new CaseTopic is created.
  */
  CaseTopic?: CasesPushCase_PushCaseTopic;
  ClosingTime?: string;
  CustomFields?: Record<string,TAnyValue | null>;
  Customer?: CasesPushCase_PushCaseCustomer;
  Description: string;
  /**
  * Setting this to true will try to suppress as many event exports as possible that might result from this call.
  */
  DisableEventExports?: boolean;
  /**
  * Entity type: Case
  * The ID field can be used to update an existing Case (specifically to be able to update the backend ID). If the ID is provided, the Update field does not need to be set.
  */
  ID?: number;
  Interactions?: CasesPushCase_PushCaseInteraction[];
  LastInteractionTime?: string;
  OriginatingOrganizationUnitBackendID?: string;
  Priority?: DataModelsCasePriority;
  ReportingTime?: string;
  Solution?: string;
  Status: string;
  Summary?: string;
  Title: string;
  Topic?: string;
  /**
  * Setting this to true will update the case information if it already exists instead of throwing an error.
  */
  Update?: boolean;
}

export interface CasesPushCase_PushCaseAddress {
  Address1?: string;
  Address2?: string;
  City?: string;
  /**
  * Entity type: Country
  * ISO 3166-1
  */
  CountryID: string;
  District?: string;
  EmailAddress?: string;
  FirstName?: string;
  /**
  * House number, including possible extensions
  */
  HouseNumber?: string;
  LastName?: string;
  PhoneNumber?: string;
  Region?: string;
  /**
  * ISO 3166-2
  */
  State?: string;
  Subdistrict?: string;
  ZipCode?: string;
}

export interface CasesPushCase_PushCaseAssignee {
  CustomID?: string;
  EmailAddress?: string;
  /**
  * Entity type: User
  */
  ID?: number;
  /**
  * If specified as true, the assignee will be removed from the case.
  */
  Remove?: boolean;
}

export interface CasesPushCase_PushCaseCustomer {
  /**
  * Is this a Standard/Basic/Incognito account?
  */
  AccountType?: DataModelsUserAccountType;
  BackendID?: string;
  BackendRelationID?: string;
  BankAccount?: string;
  BillingAddress?: CasesPushCase_PushCaseAddress;
  Company?: CasesPushCase_PushCaseCustomerCompany;
  /**
  * Entity type: Country
  * ISO 3166-1
  */
  CountryID?: string;
  DateOfBirth?: string;
  EmailAddress?: string;
  FirstName?: string;
  FiscalID?: string;
  /**
  * Possible values are: M, F, O
  */
  Gender?: string;
  Initials?: string;
  /**
  * Entity type: Language
  * ISO 639-1
  */
  LanguageID?: string;
  LastName?: string;
  Nickname?: string;
  PhoneNumber?: string;
  PlaceOfBirth?: string;
  Salutation?: string;
  ShippingAddress?: CasesPushCase_PushCaseAddress;
  SocialSecurityNumber?: string;
  Title?: string;
}

export interface CasesPushCase_PushCaseCustomerCompany {
  FiscalID?: string;
  Name?: string;
  RegistrationNumber?: string;
  VatNumber?: string;
}

export interface CasesPushCase_PushCaseInteraction {
  BackendID: string;
  /**
  * If specified as true, the interaction will be deleted.
  */
  Delete?: boolean;
  Text?: string;
  Type?: DataModelsInteractionType;
}

export interface CasesPushCase_PushCaseRelatedItem {
  /**
  * If specified as true, the item will be deleted.
  */
  Delete?: boolean;
  IsWarranty?: boolean;
  /**
  * Entity type: OrderLine
  */
  OrderLineID?: string;
  /**
  * Entity type: Product
  */
  ProductID?: string;
  SerialNumber?: string;
  WarrantyAdditionalInformation?: string;
  WarrantyExpiration?: string;
}

export interface CasesPushCase_PushCaseRelatedItems {
  Items?: CasesPushCase_PushCaseRelatedItem[];
  /**
  * Entity type: Order
  */
  OrderID?: string;
}

export interface CasesPushCase_PushCaseTopic {
  BackendID: string;
  /**
  * Required if pushing and creating a previously non-existent CaseTopic
  */
  Name?: string;
  /**
  * Provide a ParentID, or nothing if the CaseTopic should be root-level.
  */
  ParentBackendID?: string;
}

export interface PushCaseResponse extends ResponseMessage {
  /**
  * Entity type: Case
  */
  ID: number;
}

/**
* Remove a blob from a case interaction.
*/
export interface RemoveCaseInteractionBlob extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: Blob
  * Can be used for standard blobs - for secure blobs, use `BlobUrl` instead.
  */
  BlobID?: string;
  /**
  * Can be used for both standard- and secured blobs - must match environment assets URL.
  */
  BlobUrl?: string;
  /**
  * Entity type: Interaction
  */
  InteractionID: number;
}

/**
* Remove case related items.
*/
export interface RemoveCaseRelatedItems extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: Case
  */
  CaseID: number;
  /**
  * Entity type: CaseRelatedItem
  */
  ItemIDs: number[];
  RemoveAll?: boolean;
}

/**
* Set case related data.
* You can provide an OrderID (optional)
* You can provide an ExternalOrderID (optional)
* You can provide further details by setting RelatedItems. These can either
* - contain a OrderLineID (can only be provided if OrderID is also provided. The ProductID of the orderline will copied to the ProductID of the RelatedItem)
* - contain a ProductID
* - a SerialNumber (is settable whether you provided a OrderLineID or ProductID)
* - a IsWarranty indicator (is settable when there's an associated ProductID or the orderline contains a product)
*/
export interface SetCaseRelatedData extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: Case
  */
  CaseID: number;
  ExternalOrderIdentifier?: string;
  /**
  * Entity type: Order
  */
  OrderID?: number;
  /**
  * Overwrite case customer with the customer bound to the order.
  */
  OverwriteCaseCustomerWithCustomerOfOrder?: boolean;
  RelatedItems?: CasesSetCaseRelatedData_RelatedItem[];
}

export interface CasesSetCaseRelatedData_RelatedItem {
  IsWarranty?: boolean;
  /**
  * Entity type: OrderLine
  */
  OrderLineID?: number;
  /**
  * Entity type: Product
  */
  ProductID?: number;
  SerialNumber?: string;
  WarrantyAdditionalInformation?: string;
  WarrantyExpiration?: string;
}

/**
* Update an existing case.
*/
export interface UpdateCase extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: OrganizationUnit
  * OU the case is assigned to. When set this will influence visibility.
  */
  AssignedOrganizationUnitID?: number | null;
  BackendID?: string | null;
  /**
  * Optional additional custom fields
  */
  CustomFields?: DataModelsCustomFieldKeyValue[] | null;
  /**
  * Entity type: User
  */
  CustomerID?: number | null;
  Description?: string;
  ExternalOrderIdentifier?: string | null;
  /**
  * Entity type: Case
  */
  ID: number;
  /**
  * Entity type: OrganizationUnit
  * Can only be set once. Can be updated when not set on create.
  */
  OriginatingOrganizationUnitID?: number | null;
  Title?: string;
  /**
  * Entity type: CaseTopic
  */
  TopicID?: number;
}

/**
* Update a case interaction
*/
export interface UpdateCaseInteraction extends RequestMessageWithEmptyResponse {
  BackendID?: string | null;
  /**
  * Entity type: Interaction
  */
  ID: number;
  Text: string;
}

/**
* Update an existing case state.
*/
export interface UpdateCaseState extends RequestMessage<UpdateCaseStateResponse> {
  /**
  * Entity type: User
  */
  AssigneeID?: number | null;
  /**
  * Entity type: Case
  */
  ID: number;
  Priority?: DataModelsCasePriority;
  /**
  * The solution for the case
  */
  Solution?: string | null;
  /**
  * Entity type: CaseStatus
  */
  StatusID: number;
}

export interface UpdateCaseStateResponse extends ResponseMessage {
  StatusAction: DataModelsCaseStatusAction;
}

/**
* Update a case status
*/
export interface UpdateCaseStatus extends RequestMessageWithEmptyResponse {
  Action?: DataModelsCaseStatusAction;
  BackendID?: string | null;
  Color?: string | null;
  Description?: string | null;
  /**
  * Entity type: CaseStatus
  */
  ID: number;
  IsClosed?: boolean;
  Name?: string;
  /**
  * Entity type: Script
  */
  ScriptID?: number | null;
}

/**
* Update an existing case summary.
*/
export interface UpdateCaseSummary extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: Case
  */
  ID: number;
  /**
  * A summary of the current state of the case
  */
  Summary: string;
}

/**
* Update a case topic
*/
export interface UpdateCaseTopic extends RequestMessageWithEmptyResponse {
  BackendID?: string | null;
  Description?: string | null;
  /**
  * Entity type: CaseTopic
  */
  ID: number;
  Name?: string;
}

/**
* Creates a new Company, which represents a legal entity in EVA. Both Users and OrganizationUnits can have a Company that they are a part of.
*/
export interface CreateCompany extends RequestMessage<CreateCompanyResponse> {
  AccountHolderName?: string;
  ActivityDescription?: string;
  BIC?: string;
  BackendID?: string;
  ContactEmailAddress?: string;
  ContactPhoneNumber?: string;
  /**
  * Optional additional custom fields
  */
  CustomFields?: DataModelsCustomFieldKeyValue[];
  EntityType?: string;
  EstablishedDate?: string;
  FiscalID?: string;
  IBAN?: string;
  IndustryCode?: string;
  InvoiceAddress?: AddressesAddressDataDto;
  InvoiceEmailAddress?: string;
  LogoID?: string;
  Name: string;
  RegistrationCity?: string;
  /**
  * Entity type: Country
  */
  RegistrationCountryID?: string;
  /**
  * Entity type: CountrySubdivision
  */
  RegistrationCountrySubdivisionID?: string;
  RegistrationNumber?: string;
  SocialCapital?: number;
  TaxOfficeNumber?: string;
  TaxRecipientCode?: string;
  VatNumber?: string;
  VisitorsAddress?: AddressesAddressDataDto;
  WasteDisposalNumber?: string;
}

/**
* Creates a new compant requirement and returns the ID of the new record.
*/
export interface CreateCompanyRequirement extends RequestMessage<CreateCompanyRequirementResponse> {
  ApplyToCompanyType?: DataModelsApplyToCompanyType;
  /**
  * Entity type: Country
  */
  CountryID: string;
  MaxLength?: number;
  MinLength?: number;
  Property?: DataModelsCompanyRequirementPropertyType;
  RegexPattern?: string;
  VisibilityType?: DataModelsCompanyRequirementVisibilityType;
}

export interface CreateCompanyRequirementResponse extends ResponseMessage {
  /**
  * Entity type: CompanyRequirement
  */
  ID: number;
}

export interface CreateCompanyResponse extends ResponseMessage {
  /**
  * Entity type: Company
  */
  ID: number;
}

/**
* Creates a new company associated with the organization unit type
*/
export interface CreateOrganizationUnitCompany extends RequestMessage<CreateOrganizationUnitCompanyResponse> {
  ActivityDescription?: string;
  BackendID?: string;
  BillingAddress?: AddressesAddressDataDto;
  /**
  * Optional additional custom fields
  */
  CustomFields?: DataModelsCustomFieldKeyValue[];
  EmailAddress?: string;
  EntityType?: string;
  FiscalID?: string;
  IndustryCode?: string;
  Name: string;
  PhoneNumber?: string;
  RegistrationAddress?: AddressesAddressDataDto;
  RegistrationCountryID?: string;
  RegistrationCountrySubdivisionID?: string;
  RegistrationNumber?: string;
  ShippingAddress?: AddressesAddressDataDto;
  SocialCapital?: number;
  TaxOfficeNumber?: string;
  TaxRegistrationNumber?: string;
}

export interface CreateOrganizationUnitCompanyResponse extends ResponseMessage {
  /**
  * Entity type: Company
  */
  ID: number;
}

/**
* Deletes a Company. If a Company is still in use by Users or OrganizationUnits this service will return an error.
*/
export interface DeleteCompany extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: Company
  */
  ID: number;
}

/**
* Deletes a company requirement by its ID.
*/
export interface DeleteCompanyRequirement extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: CompanyRequirement
  */
  ID: number;
}

/**
* Deletes an organization unit company.
*/
export interface DeleteOrganizationUnitCompany extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: Company
  */
  ID: number;
}

/**
* Get all unsued company requirement properties for the given country and company type. For existing requirements, use `GetCompanyRequirements`.
*/
export interface GetAvailableCompanyRequirementProperties extends RequestMessage<GetAvailableCompanyRequirementPropertiesResponse> {
  ApplyToCompanyType?: DataModelsApplyToCompanyType;
  /**
  * Entity type: Country
  */
  CountryID: string;
}

export interface GetAvailableCompanyRequirementPropertiesResponse extends ResponseMessage {
  Properties?: DataModelsCompanyRequirementPropertyType[];
}

/**
* Get the details of a specific Company.
*/
export interface GetCompany extends RequestMessage<GetCompanyResponse> {
  /**
  * Entity type: Company
  */
  ID: number;
}

/**
* Get all company requirements of the given type for the given country.
*/
export interface GetCompanyRequirements extends RequestMessage<GetCompanyRequirementsResponse> {
  ApplyToCompanyType?: DataModelsApplyToCompanyType;
  /**
  * Entity type: Country
  */
  CountryID: string;
}

export interface GetCompanyRequirementsResponse extends ResponseMessage {
  Requirements?: Record<string,CompaniesGetCompanyRequirementsResponse_CompanyRequirementDto>;
}

export interface CompaniesGetCompanyRequirementsResponse_CompanyRequirementDto {
  ApplyToCompanyType?: DataModelsApplyToCompanyType;
  /**
  * Entity type: Country
  */
  CountryID?: string;
  /**
  * Entity type: CompanyRequirement
  */
  ID: number;
  MaxLength?: number;
  MinLength?: number;
  Property: DataModelsCompanyRequirementPropertyType;
  RegexPattern?: string;
  VisibilityType: DataModelsCompanyRequirementVisibilityType;
}

export interface GetCompanyResponse extends ResponseMessage {
  AccountHolderName?: string;
  ActivityDescription?: string;
  BIC?: string;
  BackendID?: string;
  ContactEmailAddress?: string;
  ContactPhoneNumber?: string;
  /**
  * Entity type: CustomField
  */
  CustomFieldValuesWithOptions?: Record<string,DataModelsCustomFieldValueWithOptions>;
  EntityType?: string;
  EstablishedDate?: string;
  FiscalID?: string;
  IBAN?: string;
  /**
  * Entity type: Company
  */
  ID: number;
  IndustryCode?: string;
  InvoiceAddress?: AddressesAddressDto;
  InvoiceEmailAddress?: string;
  IsInvoicing: boolean;
  LogoID?: string;
  Name: string;
  RegistrationCity?: string;
  /**
  * Entity type: Country
  */
  RegistrationCountryID?: string;
  /**
  * Entity type: CountrySubdivision
  */
  RegistrationCountrySubdivisionID?: string;
  RegistrationNumber?: string;
  SocialCapital?: number;
  TaxOfficeNumber?: string;
  Type: DataModelsCompanyType;
  VatNumber?: string;
  VatValidationResult: AuditingComponentsAuditingVatNumberValidationResult;
  VisitorsAddress?: AddressesAddressDto;
  WasteDisposalNumber?: string;
}

/**
* Retrieves the details of the organization unit company corresponding to the specified ID.
*/
export interface GetOrganizationUnitCompany extends RequestMessage<GetOrganizationUnitCompanyResponse> {
  /**
  * Entity type: Company
  */
  ID: number;
}

export interface GetOrganizationUnitCompanyResponse extends ResponseMessage {
  ActivityDescription?: string;
  BackendID?: string;
  BillingAddress?: AddressesAddressDto;
  /**
  * Entity type: CustomField
  */
  CustomFieldValuesWithOptions?: Record<string,DataModelsCustomFieldValueWithOptions>;
  EmailAddress?: string;
  EntityType?: string;
  FiscalID?: string;
  /**
  * Entity type: Company
  */
  ID: number;
  IndustryCode?: string;
  Name: string;
  PhoneNumber?: string;
  RegistrationAddress?: AddressesAddressDto;
  RegistrationCountryID?: string;
  RegistrationCountrySubdivisionID?: string;
  RegistrationNumber?: string;
  ShippingAddress?: AddressesAddressDto;
  SocialCapital?: number;
  TaxOfficeNumber?: string;
  TaxRegistrationNumber?: string;
}

/**
* List Companies, optionally filtered.
*/
export interface ListCompanies extends PagedRequestMessage<CompaniesListCompaniesFilter, ListCompaniesResponse> {
}

export interface ListCompaniesResponse extends PagedResponseMessage<CompaniesListCompaniesItem> {
}

/**
* List the company requirements.
*/
export interface ListCompanyRequirements extends PagedRequestMessage<CompaniesListCompanyRequirementFilter, ListCompanyRequirementsResponse> {
}

export interface ListCompanyRequirementsResponse extends PagedResponseMessage<CompaniesListCompanyRequirementsResponse_CompanyRequirementDto> {
}

export interface CompaniesListCompanyRequirementsResponse_CompanyRequirementDto {
  ApplyToCompanyType?: DataModelsApplyToCompanyType;
  /**
  * Entity type: Country
  */
  CountryID?: string;
  /**
  * Entity type: CompanyRequirement
  */
  ID: number;
  MaxLength?: number;
  MinLength?: number;
  Property: DataModelsCompanyRequirementPropertyType;
  RegexPattern?: string;
  VisibilityType: DataModelsCompanyRequirementVisibilityType;
}

/**
* Lists organization unit companies from the database with filtering and pagination.
*/
export interface ListOrganizationUnitCompanies extends RequestMessage<ListOrganizationUnitCompaniesResponse> {
  InitialPageConfig?: PageTokenConfig<CompaniesListOrganizationUnitCompaniesFilter>;
  PageToken?: string;
}

export interface ListOrganizationUnitCompaniesResponse extends ResponseMessage {
  Result?: PageTokenResponse<CompaniesListOrganizationUnitCompaniesItem>;
}

/**
* Push multiple companies at once.
* If a company doesn't exist it will be created, otherwise is will be updated.
* There is a limit (1000) of companies that can be pushed a once.
*/
export interface CompaniesPushCompanies extends RequestMessage<PushCompaniesResponse> {
  Companies: CompaniesPushCompany[];
  /**
  * Enabling this will try to suppress as many event exports as possible that might result from this call.
  */
  DisableEventExports?: boolean;
}

export interface PushCompaniesResponse extends ResponseMessage {
  FailedToAdjustCompanies?: CompaniesPushCompaniesResponse_FailedToAdjustCompany[];
  SuccessfullyAdjustedCompanies?: CompaniesPushCompaniesResponse_SuccessfullyAdjustedCompany[];
}

export interface CompaniesPushCompaniesResponse_FailedToAdjustCompany {
  /**
  * Entity type: Company
  */
  BackendID?: string;
  ErrorIdentifier?: string;
}

export interface CompaniesPushCompaniesResponse_SuccessfullyAdjustedCompany {
  /**
  * Entity type: Company
  */
  ID: number;
}

export interface PushCompanies_Async extends CompaniesPushCompanies {
}

export interface PushCompanies_AsyncResponse extends AsyncRequestHandlingAsyncRequestResponse {
}

export interface PushCompanies_AsyncResult extends AsyncRequestHandlingAsyncRequestResultRequest {
}

/**
* Push a company. If it doesn't exist it will be created, otherwise is will be updated.
*/
export interface CompaniesPushCompany extends RequestMessage<PushCompanyResponse> {
  AccountHolderName?: string | null;
  ActivityDescription?: string | null;
  BIC?: string | null;
  /**
  * Entity type: Company
  */
  BackendID: string;
  CompanyType?: DataModelsCompanyType;
  ContactEmailAddress?: string | null;
  ContactPhoneNumber?: string | null;
  /**
  * Optional additional custom fields. Will overwrite all custom field data when provided.
  */
  CustomFields?: DataModelsCustomFieldKeyValue[];
  EntityType?: string | null;
  EstablishedDate?: string | null;
  FiscalID?: string | null;
  IBAN?: string | null;
  IndustryCode?: string | null;
  InvoiceAddress?: AddressesAddressDataDto;
  InvoiceEmailAddress?: string | null;
  IsInvoicing?: boolean;
  LogoID?: string | null;
  Name?: string;
  RegistrationAddress?: AddressesAddressDataDto;
  RegistrationCity?: string | null;
  /**
  * Entity type: Country
  */
  RegistrationCountryID?: string | null;
  /**
  * Entity type: CountrySubdivision
  */
  RegistrationCountrySubdivisionID?: string | null;
  RegistrationNumber?: string | null;
  SocialCapital?: number | null;
  TaxOfficeNumber?: string | null;
  VatNumber?: string | null;
  VisitorsAddress?: AddressesAddressDataDto;
  WasteDisposalNumber?: string | null;
}

export interface PushCompanyResponse extends ResponseMessage {
  /**
  * Entity type: Company
  */
  ID: number;
}

export interface PushCompany_Async extends CompaniesPushCompany {
}

export interface PushCompany_AsyncResponse extends AsyncRequestHandlingAsyncRequestResponse {
}

export interface PushCompany_AsyncResult extends AsyncRequestHandlingAsyncRequestResultRequest {
}

/**
* Searches for organization unit companies based on the provided query and filter criteria.
*/
export interface SearchOrganizationUnitCompany extends RequestMessage<SearchOrganizationUnitCompanyResponse> {
  PageConfig?: ScrollablePageConfig<CompaniesSearchCompanyFilter>;
  Query?: string;
}

export interface SearchOrganizationUnitCompanyResponse extends ResponseMessage {
  Result?: ScrollablePagedResult<CompaniesSearchCompanyResult>;
}

/**
* Updates a Company. Fields not provided in the request are ignored.
*/
export interface UpdateCompany extends RequestMessageWithEmptyResponse {
  AccountHolderName?: string | null;
  ActivityDescription?: string | null;
  BIC?: string | null;
  BackendID?: string | null;
  ContactEmailAddress?: string | null;
  ContactPhoneNumber?: string | null;
  /**
  * Optional additional custom fields.
  */
  CustomFields?: DataModelsCustomFieldKeyValue[];
  EntityType?: string | null;
  EstablishedDate?: string | null;
  FiscalID?: string | null;
  IBAN?: string | null;
  /**
  * Entity type: Company
  */
  ID: number;
  IndustryCode?: string | null;
  InvoiceAddress?: AddressesAddressDataDto;
  InvoiceEmailAddress?: string | null;
  LogoID?: string | null;
  Name?: string | null;
  RegistrationCity?: string | null;
  RegistrationCountryID?: string | null;
  RegistrationCountrySubdivisionID?: string | null;
  RegistrationNumber?: string | null;
  SocialCapital?: number | null;
  TaxOfficeNumber?: string | null;
  TaxRecipientCode?: string | null;
  Type?: DataModelsCompanyType;
  VatNumber?: string | null;
  VisitorsAddress?: AddressesAddressDataDto;
  WasteDisposalNumber?: string | null;
}

/**
* Updates an existing company requirement.
*/
export interface UpdateCompanyRequirement extends RequestMessageWithEmptyResponse {
  /**
  * Cannot be changed or cleared. Can only be set when empty.
  */
  ApplyToCompanyType?: DataModelsApplyToCompanyType;
  /**
  * Entity type: CompanyRequirement
  */
  ID: number;
  MaxLength?: number | null;
  MinLength?: number | null;
  Property?: DataModelsCompanyRequirementPropertyType;
  RegexPattern?: string | null;
  VisibilityType?: DataModelsCompanyRequirementVisibilityType;
}

/**
* Updates the details of companies associated with the organization unit type.
*/
export interface UpdateOrganizationUnitCompany extends RequestMessage<EmptyResponseMessage> {
  ActivityDescription?: string | null;
  /**
  * Entity type: Company
  */
  BackendID?: string | null;
  BillingAddress?: AddressesAddressDataDto;
  /**
  * Optional additional custom fields
  */
  CustomFields?: DataModelsCustomFieldKeyValue[] | null;
  EmailAddress?: string | null;
  EntityType?: string | null;
  FiscalID?: string | null;
  /**
  * Entity type: Company
  */
  ID: number;
  IndustryCode?: string | null;
  Name?: string | null;
  PhoneNumber?: string | null;
  RegistrationAddress?: AddressesAddressDataDto;
  RegistrationCountryID?: string | null;
  RegistrationCountrySubdivisionID?: string | null;
  RegistrationNumber?: string | null;
  ShippingAddress?: AddressesAddressDataDto;
  SocialCapital?: number | null;
  TaxOfficeNumber?: string | null;
  TaxRegistrationNumber?: string | null;
}

export interface ValidateCompany extends RequestMessage<ValidateCompanyResponse> {
  AccountHolderName?: string;
  ActivityDescription?: string;
  /**
  * When set, validation will also apply company requirements.
  */
  ApplyRequirements?: boolean;
  BIC?: string;
  /**
  * Entity type: Company
  */
  BackendID?: string;
  /**
  * Entity type: Company
  */
  CompanyID?: number;
  ContactEmailAddress?: string;
  ContactPhoneNumber?: string;
  EntityType?: string;
  EstablishedDate?: string;
  EstablishmentNumber?: string;
  FiscalID?: string;
  IBAN?: string;
  IndustryCode?: string;
  InvoiceAddress?: AddressesAddressDataDto;
  InvoiceEmailAddress?: string;
  LogoID?: string;
  Name: string;
  RegistrationAddress?: AddressesAddressDataDto;
  RegistrationCity?: string;
  /**
  * Entity type: Country
  */
  RegistrationCountryID?: string;
  /**
  * Entity type: CountrySubdivision
  */
  RegistrationCountrySubdivisionID?: string;
  RegistrationNumber?: string;
  ShowValidDetails?: boolean;
  SocialCapital?: number;
  TaxOfficeNumber?: string;
  TaxRecipientCode?: string;
  TaxRecipientEmail?: string;
  /**
  * The type of the company.
  */
  Type?: DataModelsCompanyType;
  VatNumber?: string;
  VisitorsAddress?: AddressesAddressDataDto;
  WasteDisposalNumber?: string;
}

export interface ValidateCompanyResponse extends ResponseMessage {
  IsValid: boolean;
  ValidationDetails?: CompaniesValidateCompanyResponse_ValidationDetail[];
}

export interface CompaniesValidateCompanyResponse_ValidationDetail {
  Constraint?: string;
  Field?: string;
  IsValid: boolean;
  Message?: string;
}

export interface ConfigurationAppSettingDto {
  App?: string;
  Description?: string;
  LastModificationTime: string;
  LastModifiedByFullName?: string;
  /**
  * Entity type: User
  */
  LastModifiedByID: number;
  Name: string;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID: number;
  OrganizationUnitName: string;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitParentID?: number;
  Value?: string;
}

export interface ConfigurationAppSettingModel {
  App?: string;
  Description?: string;
  LastModificationTime: string;
  LastModifiedByFullName?: string;
  /**
  * Entity type: User
  */
  LastModifiedByID: number;
  Name: string;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID: number;
  OrganizationUnitName: string;
  Value?: string;
}

/**
* Removes all unused settings.
*/
export interface CleanupSettings extends RequestMessage<CleanupSettingsResponse> {
  Reasons?: ConfigurationSettingRemovalReason[];
  ReportOnly?: boolean;
}

export interface CleanupSettingsResponse extends ResponseMessage {
  Settings?: ConfigurationSettingModel[];
}

/**
* Removes all untyped settings.
*/
export interface CleanupUntypedSettings extends RequestMessage<CleanupUntypedSettingsResponse> {
  ReportOnly?: boolean;
}

export interface CleanupUntypedSettingsResponse extends ResponseMessage {
  RemovedSettings?: string[];
}

/**
* Returns an Excel file containing all settings
*/
export interface ExportSettings extends RequestMessageWithResourceResponse {
}

/**
* Get the available info about appsettings that are defined in the templates repo.
* 
* This can be used to support some sort of autocompletion while editing appsettings.
*/
export interface GetAppSettingsAutocompleteInfo extends RequestMessage<GetAppSettingsAutocompleteInfoResponse> {
}

export interface GetAppSettingsAutocompleteInfoResponse extends ResponseMessage {
  Settings?: ConfigurationAppSettingsAppSettingAutocompleteInfo[];
}

/**
* Gets the appsettings related to given `OrganizationUnitID`, optionally only those starting with `NamePrefix`
*/
export interface GetAppSettingsForOrganizationUnit extends RequestMessage<GetAppSettingsForOrganizationUnitResponse> {
  Name?: string;
  NamePrefix?: string;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID: number;
  SortDirection?: SortDirection;
  SortProperty?: string;
}

export interface GetAppSettingsForOrganizationUnitResponse extends ResponseMessage {
  Result?: ConfigurationAppSettingDto[];
}

/**
* Get all available typed settings
* 
* If available a Description and/or DefaultValue will be returned
*/
export interface GetAvailableSettings extends RequestMessage<GetAvailableSettingsResponse> {
  Functionality?: string;
}

export interface GetAvailableSettingsResponse extends ResponseMessage {
  Settings?: ConfigurationGetAvailableSettingsResponse_Setting[];
}

export interface ConfigurationGetAvailableSettingsResponse_Setting {
  AllowMultipleValues: boolean;
  DefaultValue?: TAnyValue;
  Deprecation?: string;
  Description?: string;
  EntityType?: ConfigurationSettingValueEntityTypes;
  Functionality?: string;
  Key?: string;
  RootLevelOnly: boolean;
  Sensitivity: ConfigurationSettingSensitivityTypes;
  Type?: string;
}

/**
* Service for retrieving the value of a specific setting.
*/
export interface GetSetting extends RequestMessage<GetSettingResponse> {
  FlattenChildValues?: boolean;
  IncludeChildValues?: boolean;
  Key: string;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID?: number;
}

/**
* Yields the history of given setting.
*/
export interface GetSettingHistory extends RequestMessage<GetSettingHistoryResponse> {
  Key: string;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID?: number;
}

export interface GetSettingHistoryResponse extends ResponseMessage {
  History?: ConfigurationGetSettingHistoryResponse_Setting[];
  Key?: string;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID: number;
}

export interface ConfigurationGetSettingHistoryResponse_Setting {
  ModifiedBy?: string;
  SensitivityType: ConfigurationSettingSensitivityTypes;
  Timestamp?: string;
  Value?: string;
}

/**
* Service to get an indication of the impact that results from updating settings.
*/
export interface GetSettingImpact extends RequestMessage<GetSettingImpactResponse> {
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID?: number;
  /**
  * Entity type: OrganizationUnitSet
  * Setting are not stored on sets, the set is evaluated when this service is called, and the settings are applied to all OrganizationUnits in the set.
  */
  OrganizationUnitSetID?: number;
  Settings: ConfigurationGetSettingImpact_Setting[];
}

export interface ConfigurationGetSettingImpact_Setting {
  Key: string;
  /**
  * Set to null to evaluate impact of removing the setting
  */
  Value?: string;
}

export interface GetSettingImpactResponse extends ResponseMessage {
  Impact: ConfigurationSettingImpact[];
}

export interface GetSettingResponse extends ResponseMessage {
  AllowMultipleValues: boolean;
  ChildValues?: ConfigurationGetSettingResponse_SettingChild[];
  DefaultValue?: TAnyValue;
  Deprecation?: string;
  DeprecationIsResolved?: boolean;
  Description?: string;
  EditFunctionality?: ConfigurationGetSettingResponse_FunctionalityInfo;
  EntityType?: ConfigurationSettingValueEntityTypes;
  /**
  * Entity type: OrganizationUnit
  */
  InheritedFromOrganizationUnitID?: number;
  IsTypedSetting?: boolean;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID?: number;
  OrganizationUnitName?: string;
  RootLevelOnly: boolean;
  SensitivityType: ConfigurationSettingSensitivityTypes;
  Value?: string;
  ViewFunctionality?: ConfigurationGetSettingResponse_FunctionalityInfo;
}

export interface ConfigurationGetSettingResponse_FunctionalityInfo {
  Categories?: string[];
  Functionality?: string;
  Scope: SecurityFunctionalityScope;
}

export interface ConfigurationGetSettingResponse_SettingChild extends ResponseMessage {
  ChildValues?: ConfigurationGetSettingResponse_SettingChild[];
  /**
  * Entity type: OrganizationUnit
  */
  InheritedFromOrganizationUnitID?: number;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID: number;
  OrganizationUnitName?: string;
  SensitivityType: ConfigurationSettingSensitivityTypes;
  Value?: string;
}

/**
* Batch update/create settings through an Excel file (file can be retrieved by calling ExportSettings)
*/
export interface ImportSettings extends RequestMessage<ImportSettingsResponse> {
  Data: string;
}

export interface ImportSettingsResponse extends ResponseMessage {
  Count: number;
}

/**
* Yields the history of given app setting.
*/
export interface ListAppSettingHistory extends PagedRequestMessage<ConfigurationAppSettingsListAppSettingsHistoryFilter, ListAppSettingHistoryResponse> {
  Name: string;
}

export interface ListAppSettingHistoryResponse extends PagedResponseMessage<ConfigurationListAppSettingHistoryResponse_Setting> {
}

export interface ConfigurationListAppSettingHistoryResponse_Setting {
  EndTime?: string;
  OrganizationUnitBackendID?: string;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID: number;
  OrganizationUnitName: string;
  StartTime: string;
  UserFullName?: string;
  /**
  * Entity type: User
  */
  UserID: number;
  Value?: string;
}

/**
* List all configured AppSettings
* 
* Available filters
* - OrganizationUnitID
* - Name (partial match)
* - App (exact match)
*/
export interface ListAppSettings extends FilteredPagedResultRequest<ConfigurationAppSettingsListAppSettingsFilter, ListAppSettingsResponse> {
}

export interface ListAppSettingsResponse extends PagedResultResponse<ConfigurationAppSettingModel> {
}

/**
* Browse all typed settings as a paginated, filterable catalog.
* 
* Results are filtered by the caller's functionalities: settings the caller is not allowed to view
* (including `Sensitive` settings for non-system users) are omitted from the response.
* 
* Sorted by `Key` ascending.
*/
export interface ListAvailableSettings extends PagedRequestMessage<ConfigurationListAvailableSettingsFilter, ListAvailableSettingsResponse> {
}

export interface ConfigurationListAvailableSettingsFilter {
  /**
  * Only return settings that belong to this exact functionality.
  */
  Functionality?: string;
  /**
  * Only return settings whose functionality is part of this category.
  */
  FunctionalityCategory?: string;
  /**
  * Include settings with an execution-affecting deprecation. Defaults to false.
  */
  IncludeDeprecated?: boolean;
  /**
  * Case-insensitive substring match on the setting key.
  */
  Key?: string;
  /**
  * If set, filters by the root-level-only flag.
  */
  RootLevelOnly?: boolean;
}

export interface ListAvailableSettingsResponse extends PagedResponseMessage<ConfigurationListAvailableSettingsResponse_AvailableSetting> {
}

export interface ConfigurationListAvailableSettingsResponse_AvailableSetting {
  DefaultValue?: TAnyValue;
  Deprecation?: string;
  Description?: string;
  Functionality?: string;
  Key: string;
  RootLevelOnly: boolean;
  Type: string;
}

/**
* Yields the history of given setting.
*/
export interface ListSettingHistory extends PagedRequestMessage<ConfigurationSettingsListSettingsHistoryFilter, ListSettingHistoryResponse> {
  Key: string;
}

export interface ListSettingHistoryResponse extends PagedResponseMessage<ConfigurationListSettingHistoryResponse_Setting> {
}

export interface ConfigurationListSettingHistoryResponse_Setting {
  EndTime?: string;
  OrganizationUnitBackendID?: string;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID: number;
  OrganizationUnitName: string;
  SensitivityType: ConfigurationSettingSensitivityTypes;
  StartTime: string;
  UserFullName?: string;
  /**
  * Entity type: User
  */
  UserID: number;
  Value?: string;
}

/**
* List the settings related to given `OrganizationUnitID`.
*/
export interface ListSettings extends RequestMessage<ListSettingsResponse> {
  Functionality?: string;
  FunctionalityCategory?: string;
  Key?: string;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID: number;
  ShowDeprecationsOnly?: boolean;
  SortDirection?: SortDirection;
  SortProperty?: string;
  TypedFilter?: ConfigurationListSettingsTypedFilters;
}

/**
* List all settings of the user's current organization unit and its 'children', per organization unit.
*/
export interface ListSettingsPerOrganizationUnit extends RequestMessage<ListSettingsPerOrganizationUnitResponse> {
  Functionality?: string;
  FunctionalityCategory?: string;
  Key?: string;
  ShowDeprecationsOnly?: boolean;
  SortDirection?: SortDirection;
  SortProperty?: string;
  TypedFilter?: ConfigurationListSettingsTypedFilters;
}

export interface ListSettingsPerOrganizationUnitResponse extends ResponseMessage {
  /**
  * Entity type: OrganizationUnit
  */
  Result?: Record<string,Record<string,ConfigurationSettingDto> | null>;
}

export interface ListSettingsResponse extends ResponseMessage {
  Result?: Record<string,ConfigurationSettingDto>;
}

export enum ConfigurationListSettingsTypedFilters {
  ShowAll = 0,
  ShowTyped = 1,
  ShowUntyped = 2,
}

/**
* Set the value for an AppSetting
* 
* - OrganizationUnitID defaults to the root OrganizationUnit
* - Name is required
* 
* Values for a specific App wil only be returned in the ApplicationConfiguration if the requesting UserAgent matches {App}/*
*/
export interface SetAppSetting extends RequestMessageWithEmptyResponse {
  App?: string;
  Name: string;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID?: number;
  /**
  * Entity type: OrganizationUnitSet
  * Setting are not stored on sets, the set is evaluated when this service is called, and the setting is applied to all OrganizationUnits in the set.
  */
  OrganizationUnitSetID?: number;
  Value?: string;
}

/**
* Set multiple AppSettings at once
* 
* - OrganizationUnitID defaults to the root OrganizationUnit
* - Name is required
* 
* Values for a specific App wil only be returned in the ApplicationConfiguration if the requesting UserAgent matches {App}/*
*/
export interface SetAppSettings extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID?: number;
  /**
  * Entity type: OrganizationUnitSet
  * Setting are not stored on sets, the set is evaluated when this service is called, and the setting is applied to all OrganizationUnits in the set.
  */
  OrganizationUnitSetID?: number;
  Settings: ConfigurationSetAppSettings_Setting[];
}

export interface ConfigurationSetAppSettings_Setting {
  App?: string;
  Name: string;
  Value?: string;
}

/**
* Set a new value for a setting within an OrganizationUnit or apply it to all OrganizationUnits in the selected set
*/
export interface SetSetting extends RequestMessageWithEmptyResponse {
  Key: string;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID?: number;
  /**
  * Entity type: OrganizationUnitSet
  * Setting are not stored on sets, the set is evaluated when this service is called, and the setting is applied to all OrganizationUnits in the set.
  */
  OrganizationUnitSetID?: number;
  Value: string;
}

/**
* Service for setting multiple settings at once
* 
* Will apply all changes or no changes in case of an error
*/
export interface SetSettings extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID?: number;
  /**
  * Entity type: OrganizationUnitSet
  * Setting are not stored on sets, the set is evaluated when this service is called, and the settings are applied to all OrganizationUnits in the set.
  */
  OrganizationUnitSetID?: number;
  Settings: ConfigurationSetSettings_Setting[];
}

export interface ConfigurationSetSettings_Setting {
  Key: string;
  Value: string;
}

export interface ConfigurationSettingDto {
  CanEdit: boolean;
  CanView: boolean;
  Deprecation?: string;
  DeprecationIsResolved?: boolean;
  Description?: string;
  EditFunctionality?: ConfigurationSettingDto_FunctionalityInfo;
  IsTypedSetting: boolean;
  LastModificationTime: string;
  LastModifiedByFullName?: string;
  /**
  * Entity type: User
  */
  LastModifiedByID: number;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID: number;
  OrganizationUnitName?: string;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitParentID?: number;
  RootLevelOnly: boolean;
  SensitivityType: ConfigurationSettingSensitivityTypes;
  Value?: string;
  ViewFunctionality?: ConfigurationSettingDto_FunctionalityInfo;
}

export interface ConfigurationSettingDto_FunctionalityInfo {
  Categories?: string[];
  Functionality?: string;
  Scope: SecurityFunctionalityScope;
}

export interface ConfigurationSettingImpact {
  ImpactedOrganizationUnits: ConfigurationSettingOrganizationUnit[];
  Key: string;
  TotalOrganizationUnitsImpacted: number;
}

export interface ConfigurationSettingOrganizationUnit {
  /**
  * Entity type: OrganizationUnit
  */
  ID: number;
  Name?: string;
}

/**
* Removes the value for an AppSetting
* 
* - OrganizationUnitID is required
* - Name is required
*/
export interface UnsetAppSetting extends RequestMessageWithEmptyResponse {
  App?: string;
  Name: string;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID: number;
}

/**
* Service for unsetting a setting
*/
export interface UnsetSetting extends RequestMessageWithEmptyResponse {
  Key: string;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID?: number;
  /**
  * Entity type: OrganizationUnitSet
  * Setting are not stored on sets, the set is evaluated when this service is called, and the unsetting is applied to all OrganizationUnits in the set.
  */
  OrganizationUnitSetID?: number;
  /**
  * When a Value is given, the setting will only be removed when the Value matches.
  */
  Value?: string;
}

export interface CreateCostPriceCalculation extends RequestMessage<CreateCostPriceCalculationResponse> {
  BackendID?: string;
  Factor: number;
  Name: string;
}

export interface CreateCostPriceCalculationResponse extends ResponseMessage {
  /**
  * Entity type: CostPriceCalculation
  */
  ID: number;
}

export interface DeleteCostPriceCalculation extends RequestMessage<EmptyResponseMessage> {
  /**
  * Entity type: CostPriceCalculation
  */
  ID: number;
}

export interface GetCostPriceCalculation extends RequestMessage<GetCostPriceCalculationResponse> {
  /**
  * Entity type: CostPriceCalculation
  */
  ID: number;
}

export interface GetCostPriceCalculationResponse extends ResponseMessage {
  BackendID?: string;
  Factor: number;
  /**
  * Entity type: CostPriceCalculation
  */
  ID: number;
  Name: string;
}

export interface GetCostPriceCalculations extends RequestMessage<GetCostPriceCalculationsResponse> {
}

export interface GetCostPriceCalculationsResponse extends ResponseMessage {
  Items?: CostPriceCalculationsGetCostPriceCalculationsResponse_Item[];
}

export interface CostPriceCalculationsGetCostPriceCalculationsResponse_Item {
  BackendID?: string;
  Factor: number;
  /**
  * Entity type: CostPriceCalculation
  */
  ID: number;
  Name: string;
}

export interface UpdateCostPriceCalculation extends RequestMessage<EmptyResponseMessage> {
  BackendID?: string | null;
  Factor?: number;
  /**
  * Entity type: CostPriceCalculation
  */
  ID: number;
  Name?: string | null;
}

/**
* Create a new Culture
*/
export interface CreateCulture extends RequestMessage<CreateCultureResponse> {
  /**
  * Entity type: Country
  */
  CountryID: string;
  /**
  * Entity type: Language
  */
  LanguageID: string;
}

export interface CreateCultureResponse extends ResponseMessage {
  ID?: string;
}

/**
* Create an organization unit country
*/
export interface CreateOrganizationUnitCountry extends RequestMessage<CreateOrganizationUnitCountryResponse> {
  /**
  * Entity type: Country
  */
  CountryID?: string;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID: number;
}

export interface CreateOrganizationUnitCountryResponse extends ResponseMessage {
  /**
  * Entity type: OrganizationUnitCountry
  */
  ID: number;
}

/**
* Attach a language directly to an organization unit.
*/
export interface CreateOrganizationUnitLanguage extends RequestMessage<CreateOrganizationUnitLanguageResponse> {
  /**
  * Entity type: Language
  */
  LanguageID?: string;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID: number;
}

export interface CreateOrganizationUnitLanguageResponse extends ResponseMessage {
  /**
  * Entity type: OrganizationUnitLanguage
  */
  ID: number;
}

/**
* Delete a Culture
*/
export interface DeleteCulture extends RequestMessageWithEmptyResponse {
  ID?: string;
}

/**
* Delete an organization unit country
*/
export interface DeleteOrganizationUnitCountry extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: OrganizationUnitCountry
  */
  ID: number;
}

/**
* Detach a language that is directly attached to an organization unit.
*/
export interface DeleteOrganizationUnitLanguage extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: OrganizationUnitLanguage
  */
  ID: number;
}

/**
* Get all available languages
*/
export interface GetLanguages extends RequestMessage<GetLanguagesResponse> {
}

export interface GetLanguagesResponse extends ResponseMessage {
  Languages?: string[];
}

/**
* List the available Cultures
*/
export interface ListCultures extends RequestMessage<ListCulturesResponse> {
  PageConfig?: PageConfig<InternationalizationCultureFilter>;
}

export interface ListCulturesResponse extends PagedResultResponse<CulturesListCulturesResponse_CultureDto> {
}

export interface CulturesListCulturesResponse_CultureDto {
  /**
  * Entity type: Country
  */
  CountryID?: string;
  ID?: string;
  /**
  * Entity type: Language
  */
  LanguageID?: string;
}

/**
* List the organization unit countries.
*/
export interface ListOrganizationUnitCountries extends RequestMessage<ListOrganizationUnitCountriesResponse> {
  PageConfig?: PageConfig<InternationalizationOrganizationUnitCountryFilter>;
}

export interface ListOrganizationUnitCountriesResponse extends PagedResultResponse<CulturesListOrganizationUnitCountriesResponse_OrganizationUnitCountryDto> {
}

export interface CulturesListOrganizationUnitCountriesResponse_OrganizationUnitCountryDto {
  /**
  * Entity type: Country
  */
  CountryID?: string;
  /**
  * Entity type: OrganizationUnitCountry
  */
  ID?: number;
  /**
  * Entity type: OrganizationUnit
  */
  InheritedFromOrganizationUnitID?: number;
  InheritedFromOrganizationUnitName?: string;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID: number;
  OrganizationUnitName?: string;
}

/**
* Retrieve a list of OrganizationUnit languages
*/
export interface ListOrganizationUnitLanguages extends RequestMessage<ListOrganizationUnitLanguagesResponse> {
  PageConfig?: PageConfig<InternationalizationOrganizationUnitLanguageFilter>;
}

export interface ListOrganizationUnitLanguagesResponse extends PagedResultResponse<CulturesListOrganizationUnitLanguagesResponse_OrganizationUnitLanguageDto> {
}

export interface CulturesListOrganizationUnitLanguagesResponse_OrganizationUnitLanguageDto {
  /**
  * Entity type: OrganizationUnitLanguage
  */
  ID?: number;
  /**
  * Entity type: OrganizationUnit
  */
  InheritedFromOrganizationUnitID?: number;
  InheritedFromOrganizationUnitName?: string;
  /**
  * Entity type: Language
  */
  LanguageID?: string;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID: number;
  OrganizationUnitName?: string;
}

/**
* Create a new custom field.
*/
export interface CreateCustomField extends RequestMessage<CreateCustomFieldResponse> {
  BackendID?: string;
  DataType?: DataModelsCustomFieldDataTypes;
  DisplayName?: string;
  EnumValues?: Record<string,string | null>;
  InputHint?: string;
  IsArray?: boolean;
  Name: string;
  Options?: DataModelsCustomFieldOptions;
  Order?: number;
  /**
  * Entity type: CustomFieldType
  */
  TypeID: number;
  TypeKey?: string;
}

export interface CreateCustomFieldResponse extends ResponseMessage {
  /**
  * Entity type: CustomField
  */
  ID: number;
}

/**
* Delete a CustomField
*/
export interface DeleteCustomField extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: CustomField
  */
  ID: number;
}

/**
* Gets an custom field by its ID and returns the basic information.
*/
export interface GetCustomFieldByID extends RequestMessage<GetCustomFieldByIDResponse> {
  /**
  * Entity type: CustomField
  */
  ID: number;
}

export interface GetCustomFieldByIDResponse extends ResponseMessage {
  BackendID?: string;
  DataType: DataModelsCustomFieldDataTypes;
  DisplayName?: string;
  EditableByUserTypes?: UserTypes;
  EnumValues?: Record<string,string | null>;
  /**
  * Entity type: CustomField
  */
  ID: number;
  InputHint?: string;
  IsArray: boolean;
  Name: string;
  Options?: DataModelsCustomFieldOptions;
  Order: number;
  /**
  * Entity type: CustomFieldType
  */
  TypeID: number;
  TypeKey?: string;
  TypeName: string;
  VisibleByUserTypes?: UserTypes;
}

export interface GetCustomFieldMetadata extends RequestMessage<GetCustomFieldMetadataResponse> {
}

export interface GetCustomFieldMetadataResponse extends ResponseMessage {
  CustomFieldsMetadata?: Record<string,DataModelsCustomFieldMetadata[] | null>;
}

/**
* Get the CustomFieldTypes
*/
export interface GetCustomFieldTypes extends RequestMessage<GetCustomFieldTypesResponse> {
}

export interface GetCustomFieldTypesResponse extends ResponseMessage {
  CustomFieldTypes?: EVAFrameworkAPIEnumDto[];
}

/**
* Get all the custom fields for the given organization unit and type.
*/
export interface GetCustomFields extends RequestMessage<GetCustomFieldsResponse> {
  DataTypes?: DataModelsCustomFieldDataTypes[];
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID?: number;
  /**
  * Entity type: OrganizationUnitSet
  */
  OrganizationUnitSetID?: number;
  /**
  * Entity type: CustomFieldType
  */
  TypeID: number;
}

export interface GetCustomFieldsResponse extends ResponseMessage {
  /**
  * Entity type: CustomField
  */
  CustomFieldOptions?: Record<string,DataModelsCustomFieldOptions>;
  CustomFields?: DataModelsCustomFieldResponse[];
}

export interface ListCustomFieldDataTypeOperatorsResponse extends ResponseMessage {
  DataTypeOperators?: CustomFieldsListCustomFieldDataTypeOperatorsResponse_DataTypeOperator[];
}

export interface CustomFieldsListCustomFieldDataTypeOperatorsResponse_DataTypeOperator {
  DataType: DataModelsCustomFieldDataTypes;
  Operators?: DataModelsCustomFieldValueOperator[];
}

/**
* Lists all filter operators for every customfield datatype.
*/
export interface ListCustomFieldDataTypesOperators extends RequestMessage<ListCustomFieldDataTypeOperatorsResponse> {
}

/**
* Get all eligibility fields for the given custom field type.
*/
export interface ListCustomFieldEligibilityScripts extends RequestMessage<ListCustomFieldEligibilityScriptsResponse> {
  /**
  * Entity type: CustomFieldType
  */
  TypeID: number;
}

export interface ListCustomFieldEligibilityScriptsResponse extends ResponseMessage {
  Scripts?: CustomFieldsListCustomFieldEligibilityScriptsResponse_Script[];
}

export interface CustomFieldsListCustomFieldEligibilityScriptsResponse_Script {
  Dialect?: string;
  /**
  * Entity type: Script
  */
  ID: number;
  Name?: string;
  Type?: string;
}

/**
* List options for custom fields
*/
export interface ListCustomFieldOptions extends PagedRequestMessage<CustomFieldsListCustomFieldOptionsFilter, ListCustomFieldOptionsResponse> {
}

export interface ListCustomFieldOptionsResponse extends PagedResponseMessage<CustomFieldsListCustomFieldOptionsResponse_CustomFieldOptionsDto> {
}

export interface CustomFieldsListCustomFieldOptionsResponse_CustomFieldOptionsDto {
  CustomFieldDefaultValue?: DataModelsCustomFieldValue;
  DefaultValue?: string;
  EditableByUserTypes?: UserTypes;
  /**
  * Entity type: Script
  */
  EligibilityScriptID?: number;
  IsRequired?: boolean;
  MaximumDate?: string;
  MaximumLength?: number;
  MaximumValue?: number;
  MinimumDate?: string;
  MinimumLength?: number;
  MinimumValue?: number;
  OrganizationUnitSet?: CustomFieldsListCustomFieldOptionsResponse_CustomFieldOptionsDto_OrganizationUnitSetData;
  Regex?: string;
  /**
  * Entity type: Script
  */
  SecurityScriptID?: number;
  VisibleByUserTypes?: UserTypes;
}

export interface CustomFieldsListCustomFieldOptionsResponse_CustomFieldOptionsDto_OrganizationUnitSetData {
  /**
  * Entity type: OrganizationUnitSet
  */
  ID: number;
  Name?: string;
}

/**
* List CustomFields. Returns a paged response.
*/
export interface ListCustomFields extends FilteredPagedResultRequest<CustomFieldsListCustomFieldsFilter, ListCustomFieldsResponse> {
}

export interface ListCustomFieldsResponse extends PagedResultResponse<CustomFieldsListCustomFieldsResponse_CustomFieldDto> {
}

export interface CustomFieldsListCustomFieldsResponse_CustomFieldDto {
  BackendID?: string;
  DataType: DataModelsCustomFieldDataTypes;
  DisplayName?: string;
  EnumValues?: Record<string,string | null>;
  /**
  * Entity type: CustomField
  */
  ID: number;
  InputHint?: string;
  IsArray: boolean;
  Name: string;
  Options?: DataModelsCustomFieldOptions;
  Order: number;
  /**
  * Entity type: CustomFieldType
  */
  TypeID: number;
  TypeKey?: string;
  TypeName: string;
}

/**
* Set options for custom fields
*/
export interface SetCustomFieldOptions extends RequestMessageWithEmptyResponse {
  CustomFieldDefaultValue?: DataModelsCustomFieldValue;
  /**
  * Entity type: CustomField
  */
  CustomFieldID: number;
  DefaultValue?: string | null;
  EditableByUserTypes?: UserTypes;
  /**
  * Entity type: Script
  */
  EligibilityScriptID?: number | null;
  IsRequired?: boolean | null;
  MaximumDate?: string | null;
  MaximumLength?: number | null;
  MaximumValue?: number | null;
  MinimumDate?: string | null;
  MinimumLength?: number | null;
  MinimumValue?: number | null;
  /**
  * Entity type: OrganizationUnitSet
  */
  OrganizationUnitSetID: number;
  Regex?: string | null;
  /**
  * Entity type: Script
  */
  ScriptID?: number | null;
  /**
  * Entity type: Script
  */
  SecurityScriptID?: number | null;
  VisibleByUserTypes?: UserTypes;
}

export interface UnsetCustomFieldOptions extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: CustomField
  */
  CustomFieldID: number;
  /**
  * Entity type: OrganizationUnitSet
  */
  OrganizationUnitSetID: number;
}

/**
* Update an existing custom CustomField.
*/
export interface UpdateCustomField extends RequestMessageWithEmptyResponse {
  BackendID?: string | null;
  DisplayName?: string | null;
  EnumValues?: Record<string,string | null> | null;
  /**
  * Entity type: CustomField
  */
  ID: number;
  InputHint?: string | null;
  IsArray?: boolean;
  Name?: string | null;
  Options?: DataModelsCustomFieldOptions;
  Order?: number;
  TypeKey?: string | null;
}

/**
* Add required custom fields to ManualDiscount
*/
export interface AddRequiredCustomFieldsToManualDiscount extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: CustomField
  */
  CustomFieldIDs: number[];
  /**
  * Entity type: Discount
  */
  DiscountID: number;
}

/**
* Add security roles to ManualDiscount
*/
export interface AddRolesToManualDiscount extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: Discount
  */
  DiscountID: number;
  /**
  * Entity type: Role
  */
  RoleIDs: number[];
}

/**
* Archive an existing discount
*/
export interface ArchiveDiscount extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: Discount
  */
  DiscountIDs?: number[];
}

/**
* Create a new discount
*/
export interface CreateDiscount extends RequestMessage<CreateDiscountResponse> {
  ActionData?: DiscountsAmountDiscountActionData | DiscountsCustomerAgeDiscountActionData | DiscountsCustomerAgeTieredDiscountActionData | DiscountsGenerateDiscountCouponActionData | DiscountsGetAProductDiscountActionData | DiscountsLoyaltyTieredAmountDiscountActionData | DiscountsLoyaltyTieredPercentageDiscountActionData | DiscountsOrderTieredAmountDiscountActionData | DiscountsOrderTieredPercentageDiscountActionData | DiscountsOriginatingAppointmentActionData | DiscountsOriginatingOrderDiscountActionData | DiscountsOtherCostsDiscountActionData | DiscountsPercentageDiscountActionData | DiscountsPickAProductTieredDiscountActionData | DiscountsProductAmountTieredAmountDiscountActionData | DiscountsProductAmountTieredPercentageDiscountActionData | DiscountsProductQuantityTieredAmountDiscountActionData | DiscountsProductQuantityTieredPercentageDiscountActionData | DiscountsProductSetAmountDiscountActionData | DiscountsProductSetFixedPriceDiscountActionData | DiscountsProductSetFreeProductActionData | DiscountsProductSetPercentageDiscountActionData | DiscountsCustomFieldValueDeterminedDiscountActionData | DiscountsEmptyDiscountActionData;
  ActionType: 'V2:DISCOUNTAMOUNT' | 'V2:CUSTOMERAGE' | 'V2:TIEREDCUSTOMERAGE' | 'V2:GENERATEDISCOUNTCOUPON' | 'V2:GETAPRODUCT' | 'V2:LOYALTYTIEREDDISCOUNTAMOUNT' | 'V2:LOYALTYTIEREDDISCOUNTPERCENTAGE' | 'V2:ORDERTIEREDDISCOUNTAMOUNT' | 'V2:ORDERTIEREDDISCOUNTPERCENTAGE' | 'V2:ORIGINATINGAPPOINTMENT' | 'V2:ORIGINATINGORDERDISCOUNT' | 'V2:OTHERCOSTS' | 'V2:DISCOUNTPERCENTAGE' | 'V2:TIEREDPICKAPRODUCT' | 'V2:PRODUCTAMOUNTTIEREDDISCOUNTAMOUNT' | 'V2:PRODUCTAMOUNTTIEREDDISCOUNTPERCENTAGE' | 'V2:PRODUCTQUANTITYTIEREDDISCOUNTAMOUNT' | 'V2:PRODUCTQUANTITYTIEREDDISCOUNTPERCENTAGE' | 'V2:PRODUCTSETDISCOUNTAMOUNT' | 'V2:PRODUCTSETFIXEDPRICE' | 'V2:PRODUCTSETFREEPRODUCT' | 'V2:PRODUCTSETDISCOUNTPERCENTAGE' | 'V2:CUSTOMFIELDVALUEDETERMINEDDISCOUNT' | 'DEFAULT';
  ApplyTo?: DataModelsDiscountAppliesTo;
  BackendID?: string;
  Budget?: number;
  /**
  * Entity type: DiscountCampaign
  */
  CampaignID?: number;
  CampaignName?: string;
  CannotApplyToOwnOrder?: boolean;
  CompliancyRule?: DataModelsDiscountCompliancyRule;
  ConditionType?: DataModelsDiscountConditionTypes;
  Conditions?: DiscountsCreateDiscount_DiscountConditionDto[];
  CouponHandler?: string;
  CouponsGeneratedByOtherDiscount?: boolean;
  CurrencyConstraint?: DataModelsCurrencyConstraint;
  /**
  * Entity type: Currency
  */
  CurrencyID: string;
  /**
  * Optional additional custom fields
  */
  CustomFields?: DataModelsCustomFieldKeyValue[];
  /**
  * Entity type: CustomField
  */
  CustomUserUsageLimitFieldID?: number;
  DaysApplicable?: DaysOfWeek;
  DeactivateWhenBudgetReached?: boolean;
  Description: string;
  DiscountOrderType?: DataModelsDiscountOrderTypes;
  Enable?: boolean;
  EndDate?: string;
  FinancialDispersion?: DataModelsFinancialDespersionType;
  /**
  * Entity type: Blob
  */
  ImageBlobID?: string;
  ImageBlobUrl?: string;
  IsActive?: boolean;
  /**
  * Entity type: DiscountLayer
  */
  LayerID: number;
  /**
  * Entity type: LedgerClass
  */
  LedgerClassID?: string;
  LoyaltyPointWithdrawal?: number;
  /**
  * Entity type: LoyaltyProgram
  */
  LoyaltyProgramID?: number;
  MarketingDescription?: string;
  MaximumUsage?: number;
  /**
  * NOTE THAT Manual discounts can still be applied on multiple lines within the same order.
  */
  MaximumUsagePerOrder?: number;
  MaximumUsagePerUser?: number;
  NeedsReason?: boolean;
  /**
  * Entity type: OrganizationUnitSet
  */
  OrganizationUnitSetID: number;
  /**
  * Entity type: ProductSubscription
  */
  ProductSubscriptionID?: number;
  PromotionLabel?: string;
  /**
  * Entity type: CustomField
  * For a manual discount, these will indicate custom fields that need to be filled in order to apply the discount.
  */
  RequiredCustomFields?: number[];
  /**
  * Entity type: OrganizationUnit
  */
  RestitutionOrganizationUnitID?: number;
  /**
  * Entity type: Role
  */
  RoleIDs?: number[];
  StartDate?: string;
  /**
  * NOTE THAT trigger cannot be updated after creation.
  */
  Trigger?: DataModelsDiscountTriggers;
  UserUsageLimit?: number;
  UserUsagePeriodDuration?: number;
  UserUsagePeriodType?: DataModelsDiscountUserUsagePeriodType;
  UserUsageReloadStrategy?: string;
}

export interface DiscountsCreateDiscount_DiscountConditionDto {
  Data?: LoyaltyBadgesConditionsBadgeConditionData | LoyaltyBadgesConditionsCustomFieldConditionData | LoyaltyBadgesConditionsPointThresholdConditionData | LoyaltyBadgesConditionsBadgeProductConditionData | LoyaltyBadgesConditionsTierConditionData | MiscConditionsCouponOriginatingOrderOrganizationUnitConditionData | MiscConditionsCouponValidityConditionData | MiscConditionsCustomerAgeConditionData | MiscConditionsCustomerConditionData | MiscConditionsLoyaltyBadgeConditionData | MiscConditionsLoyaltyPointsConditionData | MiscConditionsLoyaltyTierConditionData | MiscConditionsMaximumUsePerUserConditionData | MiscConditionsMinimumProductSubscriptionRenewalsConditionData | MiscConditionsOldUserFieldConditionData | MiscConditionsOrderAmountConditionData | MiscConditionsOrderCustomFieldConditionData | MiscConditionsOrderLineCustomFieldConditionData | MiscConditionsOrderPropertiesConditionData | MiscConditionsOrderTypeConditionData | MiscConditionsOrganizationUnitConditionData | MiscConditionsOrganizationUnitTypeConditionData | MiscConditionsProductConditionData | MiscConditionsProductRequirementConditionData | MiscConditionsStockLabelConditionData | MiscConditionsUserCustomFieldConditionData | MiscConditionsUserRoleConditionData | MiscConditionsUserTypeConditionData | EmptyConditionData;
  Type: 'V2:COUPONORIGINATINGORDERORGANIZATIONUNIT' | 'V2:COUPONVALIDITY' | 'V2:CUSTOMERAGE' | 'V2:CUSTOMER' | 'V2:LOYALTYBADGE' | 'V2:LOYALTYPOINTS' | 'V2:LOYALTYTIER' | 'V2:MAXIMUMUSEPERUSER' | 'V2:MINIMUMPRODUCTSUBSCRIPTIONRENEWALS' | 'V2:USERFIELD' | 'V2:ORDERAMOUNT' | 'V2:ORDERCUSTOMFIELD' | 'V2:ORDERLINECUSTOMFIELD' | 'V2:ORDERPROPERTIES' | 'V2:ORDERTYPE' | 'V2:OBS:ORGANIZATIONUNIT' | 'V2:OBS:ORGANIZATIONUNITTYPE' | 'V2:PRODUCT' | 'V2:PRODUCTREQUIREMENT' | 'V2:STOCKLABEL' | 'V2:USERCUSTOMFIELD' | 'V2:USERROLE' | 'V2:USERTYPE' | 'DEFAULT';
  UseAsActionCondition?: boolean;
}

/**
* Create a new DiscountCampaign
*/
export interface CreateDiscountCampaign extends RequestMessage<CreateDiscountCampaignResponse> {
  BackendID?: string;
  BackendSystemID?: string;
  /**
  * Entity type: Currency
  */
  CurrencyID?: string;
  Description?: string;
  EndDate?: string;
  KeepDiscountsWithinCampaignTimespan?: boolean;
  Name: string;
  StartDate?: string;
}

export interface CreateDiscountCampaignResponse extends ResponseMessage {
  /**
  * Entity type: DiscountCampaign
  */
  ID: number;
}

/**
* Create a DiscountCoupon
*/
export interface CreateDiscountCoupon extends RequestMessage<CreateDiscountCouponResponse> {
  CouponCode: string;
  /**
  * Entity type: Discount
  */
  DiscountID: number;
  IsActive?: boolean;
  MaximumUsage?: number;
}

export interface CreateDiscountCouponResponse extends ResponseMessage {
  /**
  * Entity type: DiscountCoupon
  */
  ID: number;
  IsDuplicateCoupon: boolean;
}

/**
* Create a discount from the given template with the overwrites with the values given in the request.
*/
export interface CreateDiscountFromTemplate extends RequestMessage<CreateDiscountResponse> {
  BackendID?: string | null;
  /**
  * Entity type: DiscountCampaign
  */
  CampaignID?: number | null;
  CannotApplyToOwnOrder?: boolean;
  CompliancyRule?: DataModelsDiscountCompliancyRule;
  CreateAsActive?: boolean;
  /**
  * Entity type: Currency
  */
  CurrencyID: string;
  /**
  * Optional additional custom fields
  */
  CustomFields?: DataModelsCustomFieldKeyValue[];
  DaysApplicable?: DaysOfWeek;
  Description: string;
  EndDate?: string;
  FinancialDispersion?: DataModelsFinancialDespersionType;
  /**
  * Entity type: DiscountTemplate
  */
  ID: number;
  ImageBlobID?: string | null;
  IsExclusive?: boolean;
  /**
  * Entity type: DiscountLayer
  */
  LayerID: number;
  /**
  * Entity type: LedgerClass
  */
  LedgerClassID?: string | null;
  LoyaltyPointWithdrawal?: number;
  /**
  * Entity type: LoyaltyProgram
  */
  LoyaltyProgramID?: number;
  MarketingDescription?: string;
  MaximumUsage?: number | null;
  /**
  * NOTE THAT Manual discounts can still be applied on multiple lines within the same order.
  */
  MaximumUsagePerOrder?: number | null;
  MaximumUsagePerUser?: number | null;
  NeedsReason?: boolean;
  /**
  * Entity type: OrganizationUnitSet
  */
  OrganizationUnitSetID: number;
  /**
  * Entity type: ProductSubscription
  */
  ProductSubscriptionID?: number;
  PromotionLabel?: string;
  /**
  * Entity type: CustomField
  * For a manual discount, these will indicate custom fields that need to be filled in order to apply the discount.
  */
  RequiredCustomFields?: number[];
  /**
  * Entity type: OrganizationUnit
  */
  RestitutionOrganizationUnitID?: number | null;
  /**
  * Entity type: Role
  */
  RoleIDs?: number[];
  StartDate?: string;
  UserUsageLimit?: number | null;
  UserUsageReloadStrategy?: string | null;
}

/**
* Create a new DiscountLayer
*/
export interface CreateDiscountLayer extends RequestMessage<CreateDiscountLayerResponse> {
  Description?: string;
  IsExclusive?: boolean;
  Name: string;
  Sequence?: number;
}

export interface CreateDiscountLayerResponse extends ResponseMessage {
  /**
  * Entity type: DiscountLayer
  */
  ID: number;
}

export interface CreateDiscountResponse extends ResponseMessage {
  /**
  * Entity type: Discount
  */
  ID: number;
}

/**
* Create a new discount template
*/
export interface CreateDiscountTemplate extends RequestMessage<CreateDiscountTemplateResponse> {
  ActionData: DiscountsAmountDiscountActionData | DiscountsCustomerAgeDiscountActionData | DiscountsCustomerAgeTieredDiscountActionData | DiscountsGenerateDiscountCouponActionData | DiscountsGetAProductDiscountActionData | DiscountsLoyaltyTieredAmountDiscountActionData | DiscountsLoyaltyTieredPercentageDiscountActionData | DiscountsOrderTieredAmountDiscountActionData | DiscountsOrderTieredPercentageDiscountActionData | DiscountsOriginatingAppointmentActionData | DiscountsOriginatingOrderDiscountActionData | DiscountsOtherCostsDiscountActionData | DiscountsPercentageDiscountActionData | DiscountsPickAProductTieredDiscountActionData | DiscountsProductAmountTieredAmountDiscountActionData | DiscountsProductAmountTieredPercentageDiscountActionData | DiscountsProductQuantityTieredAmountDiscountActionData | DiscountsProductQuantityTieredPercentageDiscountActionData | DiscountsProductSetAmountDiscountActionData | DiscountsProductSetFixedPriceDiscountActionData | DiscountsProductSetFreeProductActionData | DiscountsProductSetPercentageDiscountActionData | DiscountsCustomFieldValueDeterminedDiscountActionData | DiscountsEmptyDiscountActionData | null;
  ActionType: 'V2:DISCOUNTAMOUNT' | 'V2:CUSTOMERAGE' | 'V2:TIEREDCUSTOMERAGE' | 'V2:GENERATEDISCOUNTCOUPON' | 'V2:GETAPRODUCT' | 'V2:LOYALTYTIEREDDISCOUNTAMOUNT' | 'V2:LOYALTYTIEREDDISCOUNTPERCENTAGE' | 'V2:ORDERTIEREDDISCOUNTAMOUNT' | 'V2:ORDERTIEREDDISCOUNTPERCENTAGE' | 'V2:ORIGINATINGAPPOINTMENT' | 'V2:ORIGINATINGORDERDISCOUNT' | 'V2:OTHERCOSTS' | 'V2:DISCOUNTPERCENTAGE' | 'V2:TIEREDPICKAPRODUCT' | 'V2:PRODUCTAMOUNTTIEREDDISCOUNTAMOUNT' | 'V2:PRODUCTAMOUNTTIEREDDISCOUNTPERCENTAGE' | 'V2:PRODUCTQUANTITYTIEREDDISCOUNTAMOUNT' | 'V2:PRODUCTQUANTITYTIEREDDISCOUNTPERCENTAGE' | 'V2:PRODUCTSETDISCOUNTAMOUNT' | 'V2:PRODUCTSETFIXEDPRICE' | 'V2:PRODUCTSETFREEPRODUCT' | 'V2:PRODUCTSETDISCOUNTPERCENTAGE' | 'V2:CUSTOMFIELDVALUEDETERMINEDDISCOUNT' | 'DEFAULT';
  AppliesTo?: DataModelsDiscountAppliesTo;
  BackendID?: string;
  /**
  * Entity type: DiscountCampaign
  */
  CampaignID?: number;
  CannotApplyToOwnOrder?: boolean;
  ConditionType?: DataModelsDiscountConditionTypes;
  Conditions?: DiscountsCreateDiscountTemplate_Condition[];
  CouponHandler?: string;
  CouponsGeneratedByOtherDiscount?: boolean;
  DaysApplicable?: DaysOfWeek;
  Description: string;
  DiscountOrderType?: DataModelsDiscountOrderTypes;
  ImageBlobID?: string;
  IsActive?: boolean;
  IsExclusive?: boolean;
  /**
  * Entity type: LedgerClass
  */
  LedgerClassID?: string;
  MaximumUsage?: number;
  /**
  * NOTE THAT Manual discounts can still be applied on multiple lines within the same order.
  */
  MaximumUsagePerOrder?: number;
  MaximumUsagePerUser?: number;
  NeedsReason?: boolean;
  /**
  * Entity type: OrganizationUnit
  */
  RestitutionOrganizationUnitID?: number;
  Trigger?: DataModelsDiscountTriggers;
  UserUsageLimit?: number;
  UserUsageReloadStrategy?: string;
}

export interface DiscountsCreateDiscountTemplate_Condition {
  Data: LoyaltyBadgesConditionsBadgeConditionData | LoyaltyBadgesConditionsCustomFieldConditionData | LoyaltyBadgesConditionsPointThresholdConditionData | LoyaltyBadgesConditionsBadgeProductConditionData | LoyaltyBadgesConditionsTierConditionData | MiscConditionsCouponOriginatingOrderOrganizationUnitConditionData | MiscConditionsCouponValidityConditionData | MiscConditionsCustomerAgeConditionData | MiscConditionsCustomerConditionData | MiscConditionsLoyaltyBadgeConditionData | MiscConditionsLoyaltyPointsConditionData | MiscConditionsLoyaltyTierConditionData | MiscConditionsMaximumUsePerUserConditionData | MiscConditionsMinimumProductSubscriptionRenewalsConditionData | MiscConditionsOldUserFieldConditionData | MiscConditionsOrderAmountConditionData | MiscConditionsOrderCustomFieldConditionData | MiscConditionsOrderLineCustomFieldConditionData | MiscConditionsOrderPropertiesConditionData | MiscConditionsOrderTypeConditionData | MiscConditionsOrganizationUnitConditionData | MiscConditionsOrganizationUnitTypeConditionData | MiscConditionsProductConditionData | MiscConditionsProductRequirementConditionData | MiscConditionsStockLabelConditionData | MiscConditionsUserCustomFieldConditionData | MiscConditionsUserRoleConditionData | MiscConditionsUserTypeConditionData | EmptyConditionData | null;
  Type: 'V2:COUPONORIGINATINGORDERORGANIZATIONUNIT' | 'V2:COUPONVALIDITY' | 'V2:CUSTOMERAGE' | 'V2:CUSTOMER' | 'V2:LOYALTYBADGE' | 'V2:LOYALTYPOINTS' | 'V2:LOYALTYTIER' | 'V2:MAXIMUMUSEPERUSER' | 'V2:MINIMUMPRODUCTSUBSCRIPTIONRENEWALS' | 'V2:USERFIELD' | 'V2:ORDERAMOUNT' | 'V2:ORDERCUSTOMFIELD' | 'V2:ORDERLINECUSTOMFIELD' | 'V2:ORDERPROPERTIES' | 'V2:ORDERTYPE' | 'V2:OBS:ORGANIZATIONUNIT' | 'V2:OBS:ORGANIZATIONUNITTYPE' | 'V2:PRODUCT' | 'V2:PRODUCTREQUIREMENT' | 'V2:STOCKLABEL' | 'V2:USERCUSTOMFIELD' | 'V2:USERROLE' | 'V2:USERTYPE' | 'DEFAULT';
}

export interface CreateDiscountTemplateResponse extends ResponseMessage {
  /**
  * Entity type: DiscountTemplate
  */
  ID: number;
}

/**
* Delete a DiscountCampaign
*/
export interface DeleteDiscountCampaign extends RequestMessageWithEmptyResponse {
  ArchiveAllRelatedDiscounts?: boolean;
  /**
  * Entity type: DiscountCampaign
  */
  ID: number;
  ReactivateAllRelatedDiscounts?: boolean;
}

/**
* Delete a DiscountLayer
*/
export interface DeleteDiscountLayer extends RequestMessageWithEmptyResponse {
  /**
  * When set to `true` and there are active discounts within the layer, they will be archived. Otherwise will throw an error.
  */
  ArchiveDiscounts?: boolean;
  /**
  * Entity type: DiscountLayer
  */
  ID: number;
}

/**
* Delete an existing discount template
*/
export interface DeleteDiscountTemplate extends RequestMessageWithEmptyResponse {
  ArchiveAllRelatedDiscounts?: boolean;
  /**
  * Entity type: DiscountTemplate
  */
  ID: number;
}

/**
* Disable discounts
*/
export interface DisableDiscounts extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: Discount
  */
  DiscountIDs: number[];
}

/**
* Exports the coupons for the given discount to Excel.
*/
export interface DiscountsDownloadCouponExcel extends RequestMessage<DownloadCouponExcelResponse> {
  /**
  * Entity type: Discount
  */
  DiscountID: number;
  /**
  * Filter on active state. Optional values are; null = active and inactive, true = active only, false = inactive only.
  */
  IsActive?: boolean;
}

export interface DownloadCouponExcelResponse extends ResourceWithBlobIDResponseMessage {
  CouponLimitReached: boolean;
}

/**
* Download template to upload an excel with coupons.
*/
export interface DownloadCouponExcelTemplate extends RequestMessageWithResourceWithBlobIDResponse {
}

export interface DownloadCouponExcel_Async extends DiscountsDownloadCouponExcel {
}

export interface DownloadCouponExcel_AsyncResponse extends AsyncRequestHandlingAsyncRequestResponse {
}

export interface DownloadCouponExcel_AsyncResult extends AsyncRequestHandlingAsyncRequestResultRequest {
}

/**
* Duplicates the requested discount x times with it's conditions and action.
* A duplicated discount will not be Active and Verified.
*/
export interface DuplicateDiscount extends RequestMessage<DuplicateDiscountResponse> {
  /**
  * Entity type: Discount
  * The ID of the discount to create a copy of.
  */
  DiscountID: number;
  /**
  * Indicate how many duplicates need to be made. When left empty, only 1 duplicate will be made.
  */
  NumberOfDuplicates?: number;
}

export interface DuplicateDiscountResponse extends ResponseMessage {
  ID: number;
  /**
  * Entity type: Discount
  */
  IDs?: number[];
}

/**
* Duplicates the given discount template.
*/
export interface DuplicateDiscountTemplate extends RequestMessage<CreateDiscountTemplateResponse> {
  /**
  * Entity type: DiscountTemplate
  */
  ID: number;
}

/**
* Enable discounts
*/
export interface EnableDiscounts extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: Discount
  */
  DiscountIDs: number[];
}

/**
* Generate a batch DiscountCoupons, they will be emailed to the current user
*/
export interface GenerateDiscountCoupons extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: Discount
  */
  DiscountID: number;
  MaximumUsage?: number;
  Prefix?: string;
  Quantity?: number;
  Suffix?: string;
}

export interface GenerateDiscountCoupons_Async extends GenerateDiscountCoupons {
}

export interface GenerateDiscountCoupons_AsyncResponse extends AsyncRequestHandlingAsyncRequestResponse {
}

export interface GenerateDiscountCoupons_AsyncResult extends AsyncRequestHandlingAsyncRequestResultRequest {
}

/**
* Get a coupon by it's token. When a customer calls this service, the service will only resolve tokens from coupons on which the user is registered. Employees and API's can resolve all coupon tokens.
*/
export interface GetCouponByToken extends RequestMessage<GetCouponByTokenResponse> {
  CouponToken: string;
}

export interface GetCouponByTokenResponse extends ResponseMessage {
  Code?: string;
  DiscountDescription?: string;
  /**
  * Entity type: Discount
  */
  DiscountID: number;
  DiscountMarketingDescription?: string;
  /**
  * Entity type: OrderLine
  */
  FromCancelledLines?: Record<string,number>;
  /**
  * Entity type: User
  */
  UserID?: number;
  ValidFrom: string;
  ValidTill?: string;
}

/**
* Get Discount by the given Discount ID
*/
export interface GetDiscountByID extends RequestMessage<GetDiscountByIDResponse> {
  /**
  * Entity type: Discount
  */
  ID: number;
}

export interface GetDiscountByIDResponse extends ResponseMessage {
  ActionData?: DiscountsAmountDiscountActionData | DiscountsCustomerAgeDiscountActionData | DiscountsCustomerAgeTieredDiscountActionData | DiscountsGenerateDiscountCouponActionData | DiscountsGetAProductDiscountActionData | DiscountsLoyaltyTieredAmountDiscountActionData | DiscountsLoyaltyTieredPercentageDiscountActionData | DiscountsOrderTieredAmountDiscountActionData | DiscountsOrderTieredPercentageDiscountActionData | DiscountsOriginatingAppointmentActionData | DiscountsOriginatingOrderDiscountActionData | DiscountsOtherCostsDiscountActionData | DiscountsPercentageDiscountActionData | DiscountsPickAProductTieredDiscountActionData | DiscountsProductAmountTieredAmountDiscountActionData | DiscountsProductAmountTieredPercentageDiscountActionData | DiscountsProductQuantityTieredAmountDiscountActionData | DiscountsProductQuantityTieredPercentageDiscountActionData | DiscountsProductSetAmountDiscountActionData | DiscountsProductSetFixedPriceDiscountActionData | DiscountsProductSetFreeProductActionData | DiscountsProductSetPercentageDiscountActionData | DiscountsCustomFieldValueDeterminedDiscountActionData | DiscountsEmptyDiscountActionData;
  ActionType?: 'V2:DISCOUNTAMOUNT' | 'V2:CUSTOMERAGE' | 'V2:TIEREDCUSTOMERAGE' | 'V2:GENERATEDISCOUNTCOUPON' | 'V2:GETAPRODUCT' | 'V2:LOYALTYTIEREDDISCOUNTAMOUNT' | 'V2:LOYALTYTIEREDDISCOUNTPERCENTAGE' | 'V2:ORDERTIEREDDISCOUNTAMOUNT' | 'V2:ORDERTIEREDDISCOUNTPERCENTAGE' | 'V2:ORIGINATINGAPPOINTMENT' | 'V2:ORIGINATINGORDERDISCOUNT' | 'V2:OTHERCOSTS' | 'V2:DISCOUNTPERCENTAGE' | 'V2:TIEREDPICKAPRODUCT' | 'V2:PRODUCTAMOUNTTIEREDDISCOUNTAMOUNT' | 'V2:PRODUCTAMOUNTTIEREDDISCOUNTPERCENTAGE' | 'V2:PRODUCTQUANTITYTIEREDDISCOUNTAMOUNT' | 'V2:PRODUCTQUANTITYTIEREDDISCOUNTPERCENTAGE' | 'V2:PRODUCTSETDISCOUNTAMOUNT' | 'V2:PRODUCTSETFIXEDPRICE' | 'V2:PRODUCTSETFREEPRODUCT' | 'V2:PRODUCTSETDISCOUNTPERCENTAGE' | 'V2:CUSTOMFIELDVALUEDETERMINEDDISCOUNT' | 'DEFAULT';
  ApplyTo?: DataModelsDiscountAppliesTo;
  BackendID?: string;
  Budget?: number;
  BudgetAvailable?: number;
  BudgetProgress?: number;
  /**
  * Entity type: DiscountCampaign
  */
  CampaignID?: number;
  CampaignName?: string;
  CannotApplyToOwnOrder: boolean;
  CompliancyRule: DataModelsDiscountCompliancyRule;
  ConditionType: DataModelsDiscountConditionTypes;
  Conditions?: DiscountsGetDiscountByIDResponse_DiscountCondition[];
  CouponHandler?: string;
  CouponsGeneratedByOtherDiscount: boolean;
  CreatedByFullName?: string;
  CreationTime: string;
  CurrencyConstraint: DataModelsCurrencyConstraint;
  /**
  * Entity type: Currency
  */
  CurrencyID?: string;
  /**
  * Entity type: CustomField
  */
  CustomFieldValuesWithOptions?: Record<string,DataModelsCustomFieldValueWithOptions>;
  /**
  * Entity type: CustomField
  */
  CustomUserUsageLimitFieldID?: number;
  DaysApplicable?: DaysOfWeek;
  DeactivateWhenBudgetReached: boolean;
  DeactivationReasons: DataModelsDiscountDeactivationReasons;
  Description?: string;
  DiscountOrderType: DataModelsDiscountOrderTypes;
  Enabled: boolean;
  EndDate?: string;
  FinancialDispersion: DataModelsFinancialDespersionType;
  GeneratedFromTemplate: boolean;
  /**
  * Entity type: Discount
  */
  ID: number;
  /**
  * Entity type: Blob
  */
  ImageBlobID?: string;
  ImageBlobUrl?: string;
  IsActive: boolean;
  IsEditAllowed: boolean;
  IsUsed: boolean;
  LastModificationTime?: string;
  LastModifiedByFullName?: string;
  /**
  * Entity type: DiscountLayer
  */
  LayerID: number;
  /**
  * Entity type: LedgerClass
  */
  LedgerClassID?: string;
  LoyaltyPointNamePlural?: string;
  LoyaltyPointNameSingular?: string;
  LoyaltyPointWithdrawal?: number;
  /**
  * Entity type: LoyaltyProgram
  */
  LoyaltyProgramID?: number;
  LoyaltyProgramName?: string;
  MarketingDescription?: string;
  MaximumUsage?: number;
  MaximumUsagePerOrder?: number;
  MaximumUsagePerUser?: number;
  NeedsReason: boolean;
  /**
  * This could be the backend id of the OU if this is the system generated OU set of the OU
  */
  OrganizationUnitSetBackendID?: string;
  /**
  * Entity type: OrganizationUnitSet
  */
  OrganizationUnitSetID: number;
  OrganizationUnitSetName?: string;
  OrganizationUnitSetType?: DataModelsOrganizationUnitSetTypes;
  /**
  * Entity type: ProductSubscription
  */
  ProductSubscriptionID?: number;
  ProductSubscriptionName?: string;
  PromotionLabel?: string;
  /**
  * Entity type: CustomField
  */
  RequiredCustomFields?: number[];
  /**
  * Entity type: OrganizationUnit
  */
  RestitutionOrganizationUnitID?: number;
  RestitutionOrganizationUnitName?: string;
  Roles?: DiscountsGetDiscountByIDResponse_Role[];
  StartDate: string;
  TotalCouponCount?: number;
  TotalDiscountGiven: number;
  Trigger: DataModelsDiscountTriggers;
  UsableCouponCount?: number;
  UsageCount: number;
  UsedCouponCount?: number;
  UserUsageLimit?: number;
  UserUsagePeriodDuration?: number;
  UserUsagePeriodType?: DataModelsDiscountUserUsagePeriodType;
  UserUsageReloadStrategy?: string;
  VerificationTime?: string;
  VerifiedByFullName?: string;
}

export interface DiscountsGetDiscountByIDResponse_DiscountCondition {
  Data?: LoyaltyBadgesConditionsBadgeConditionData | LoyaltyBadgesConditionsCustomFieldConditionData | LoyaltyBadgesConditionsPointThresholdConditionData | LoyaltyBadgesConditionsBadgeProductConditionData | LoyaltyBadgesConditionsTierConditionData | MiscConditionsCouponOriginatingOrderOrganizationUnitConditionData | MiscConditionsCouponValidityConditionData | MiscConditionsCustomerAgeConditionData | MiscConditionsCustomerConditionData | MiscConditionsLoyaltyBadgeConditionData | MiscConditionsLoyaltyPointsConditionData | MiscConditionsLoyaltyTierConditionData | MiscConditionsMaximumUsePerUserConditionData | MiscConditionsMinimumProductSubscriptionRenewalsConditionData | MiscConditionsOldUserFieldConditionData | MiscConditionsOrderAmountConditionData | MiscConditionsOrderCustomFieldConditionData | MiscConditionsOrderLineCustomFieldConditionData | MiscConditionsOrderPropertiesConditionData | MiscConditionsOrderTypeConditionData | MiscConditionsOrganizationUnitConditionData | MiscConditionsOrganizationUnitTypeConditionData | MiscConditionsProductConditionData | MiscConditionsProductRequirementConditionData | MiscConditionsStockLabelConditionData | MiscConditionsUserCustomFieldConditionData | MiscConditionsUserRoleConditionData | MiscConditionsUserTypeConditionData | EmptyConditionData;
  /**
  * Entity type: DiscountCondition
  */
  ID: number;
  Type?: 'V2:COUPONORIGINATINGORDERORGANIZATIONUNIT' | 'V2:COUPONVALIDITY' | 'V2:CUSTOMERAGE' | 'V2:CUSTOMER' | 'V2:LOYALTYBADGE' | 'V2:LOYALTYPOINTS' | 'V2:LOYALTYTIER' | 'V2:MAXIMUMUSEPERUSER' | 'V2:MINIMUMPRODUCTSUBSCRIPTIONRENEWALS' | 'V2:USERFIELD' | 'V2:ORDERAMOUNT' | 'V2:ORDERCUSTOMFIELD' | 'V2:ORDERLINECUSTOMFIELD' | 'V2:ORDERPROPERTIES' | 'V2:ORDERTYPE' | 'V2:OBS:ORGANIZATIONUNIT' | 'V2:OBS:ORGANIZATIONUNITTYPE' | 'V2:PRODUCT' | 'V2:PRODUCTREQUIREMENT' | 'V2:STOCKLABEL' | 'V2:USERCUSTOMFIELD' | 'V2:USERROLE' | 'V2:USERTYPE' | 'DEFAULT';
  UseAsActionCondition: boolean;
}

export interface DiscountsGetDiscountByIDResponse_Role {
  /**
  * Entity type: Role
  */
  ID: number;
  Name?: string;
}

/**
* Get a DiscountCampaign by ID
*/
export interface GetDiscountCampaignByID extends RequestMessage<GetDiscountCampaignByIDResponse> {
  /**
  * Entity type: DiscountCampaign
  */
  ID: number;
}

export interface GetDiscountCampaignByIDResponse extends ResponseMessage {
  BackendID?: string;
  BackendSystemID?: string;
  Budget?: number;
  BudgetAvailable?: number;
  BudgetProgress?: number;
  BudgetReached?: boolean;
  /**
  * Entity type: Currency
  */
  CurrencyID?: string;
  DeactivateDiscountsWhenBudgetIsReached: boolean;
  Description?: string;
  EndDate?: string;
  /**
  * Entity type: DiscountCampaign
  */
  ID: number;
  KeepDiscountsWithinCampaignTimespan: boolean;
  Name?: string;
  StartDate?: string;
  TotalDiscountGiven?: number;
}

/**
* Get discount coupons by discount ID
*/
export interface GetDiscountCouponByID extends RequestMessage<GetDiscountCouponByIDResponse> {
  /**
  * Entity type: DiscountCoupon
  */
  ID: number;
}

export interface GetDiscountCouponByIDResponse extends ResponseMessage {
  CouponCode?: string;
  /**
  * Entity type: Discount
  */
  DiscountID: number;
  DiscountMarketingDescription?: string;
  FirstUsage?: string;
  Handler?: string;
  /**
  * Entity type: DiscountCoupon
  */
  ID: number;
  IsActive: boolean;
  IsExternal: boolean;
  IsGenerated: boolean;
  LastUsage?: string;
  MaximumUsage?: number;
  /**
  * Entity type: Discount
  */
  OriginatingDiscountID?: number;
  OriginatingDiscountMarketingDescription?: string;
  /**
  * Entity type: Order
  */
  OriginatingOrderID?: number;
  UsageCount: number;
  UserFullName?: string;
  /**
  * Entity type: User
  */
  UserID?: number;
}

/**
* Get a DiscountLayer by ID
*/
export interface GetDiscountLayerByID extends RequestMessage<GetDiscountLayerByIDResponse> {
  /**
  * Entity type: DiscountLayer
  */
  ID: number;
}

export interface GetDiscountLayerByIDResponse extends ResponseMessage {
  Description?: string;
  ID: number;
  IsExclusive: boolean;
  /**
  * This layer is managed by EVA and cannot be changed.
  */
  IsSystem: boolean;
  Name?: string;
  Sequence: number;
}

/**
* Get DiscountTemplate by the given ID
*/
export interface GetDiscountTemplateByID extends RequestMessage<GetDiscountTemplateByIDResponse> {
  /**
  * Entity type: DiscountTemplate
  */
  ID: number;
}

export interface GetDiscountTemplateByIDResponse extends ResponseMessage {
  ActionData: DiscountsAmountDiscountActionData | DiscountsCustomerAgeDiscountActionData | DiscountsCustomerAgeTieredDiscountActionData | DiscountsGenerateDiscountCouponActionData | DiscountsGetAProductDiscountActionData | DiscountsLoyaltyTieredAmountDiscountActionData | DiscountsLoyaltyTieredPercentageDiscountActionData | DiscountsOrderTieredAmountDiscountActionData | DiscountsOrderTieredPercentageDiscountActionData | DiscountsOriginatingAppointmentActionData | DiscountsOriginatingOrderDiscountActionData | DiscountsOtherCostsDiscountActionData | DiscountsPercentageDiscountActionData | DiscountsPickAProductTieredDiscountActionData | DiscountsProductAmountTieredAmountDiscountActionData | DiscountsProductAmountTieredPercentageDiscountActionData | DiscountsProductQuantityTieredAmountDiscountActionData | DiscountsProductQuantityTieredPercentageDiscountActionData | DiscountsProductSetAmountDiscountActionData | DiscountsProductSetFixedPriceDiscountActionData | DiscountsProductSetFreeProductActionData | DiscountsProductSetPercentageDiscountActionData | DiscountsCustomFieldValueDeterminedDiscountActionData | DiscountsEmptyDiscountActionData | null;
  ActionType: 'V2:DISCOUNTAMOUNT' | 'V2:CUSTOMERAGE' | 'V2:TIEREDCUSTOMERAGE' | 'V2:GENERATEDISCOUNTCOUPON' | 'V2:GETAPRODUCT' | 'V2:LOYALTYTIEREDDISCOUNTAMOUNT' | 'V2:LOYALTYTIEREDDISCOUNTPERCENTAGE' | 'V2:ORDERTIEREDDISCOUNTAMOUNT' | 'V2:ORDERTIEREDDISCOUNTPERCENTAGE' | 'V2:ORIGINATINGAPPOINTMENT' | 'V2:ORIGINATINGORDERDISCOUNT' | 'V2:OTHERCOSTS' | 'V2:DISCOUNTPERCENTAGE' | 'V2:TIEREDPICKAPRODUCT' | 'V2:PRODUCTAMOUNTTIEREDDISCOUNTAMOUNT' | 'V2:PRODUCTAMOUNTTIEREDDISCOUNTPERCENTAGE' | 'V2:PRODUCTQUANTITYTIEREDDISCOUNTAMOUNT' | 'V2:PRODUCTQUANTITYTIEREDDISCOUNTPERCENTAGE' | 'V2:PRODUCTSETDISCOUNTAMOUNT' | 'V2:PRODUCTSETFIXEDPRICE' | 'V2:PRODUCTSETFREEPRODUCT' | 'V2:PRODUCTSETDISCOUNTPERCENTAGE' | 'V2:CUSTOMFIELDVALUEDETERMINEDDISCOUNT' | 'DEFAULT';
  AppliesTo: DataModelsDiscountAppliesTo;
  BackendID?: string;
  /**
  * Entity type: DiscountCampaign
  */
  CampaignID?: number;
  CannotApplyToOwnOrder: boolean;
  ConditionType: DataModelsDiscountConditionTypes;
  Conditions?: DiscountsGetDiscountTemplateByIDResponse_Condition[];
  CouponHandler?: string;
  CouponsGeneratedByOtherDiscount: boolean;
  CreatedByFullName?: string;
  CreatedByID: number;
  CreationTime: string;
  DaysApplicable?: DaysOfWeek;
  Description?: string;
  DiscountOrderType: DataModelsDiscountOrderTypes;
  /**
  * Entity type: DiscountTemplate
  */
  ID: number;
  ImageBlobID?: string;
  IsActive: boolean;
  IsExclusive: boolean;
  LastModificationTime?: string;
  LastModifiedByFullName?: string;
  LedgerClassID?: string;
  MaximumUsage?: number;
  MaximumUsagePerOrder?: number;
  MaximumUsagePerUser?: number;
  ModifiedByID?: number;
  NeedsReason: boolean;
  /**
  * Entity type: OrganizationUnit
  */
  RestitutionOrganizationUnitID?: number;
  RestitutionOrganizationUnitName?: string;
  Trigger: DataModelsDiscountTriggers;
  UserUsageLimit?: number;
  UserUsageReloadStrategy?: string;
}

export interface DiscountsGetDiscountTemplateByIDResponse_Condition {
  Data: LoyaltyBadgesConditionsBadgeConditionData | LoyaltyBadgesConditionsCustomFieldConditionData | LoyaltyBadgesConditionsPointThresholdConditionData | LoyaltyBadgesConditionsBadgeProductConditionData | LoyaltyBadgesConditionsTierConditionData | MiscConditionsCouponOriginatingOrderOrganizationUnitConditionData | MiscConditionsCouponValidityConditionData | MiscConditionsCustomerAgeConditionData | MiscConditionsCustomerConditionData | MiscConditionsLoyaltyBadgeConditionData | MiscConditionsLoyaltyPointsConditionData | MiscConditionsLoyaltyTierConditionData | MiscConditionsMaximumUsePerUserConditionData | MiscConditionsMinimumProductSubscriptionRenewalsConditionData | MiscConditionsOldUserFieldConditionData | MiscConditionsOrderAmountConditionData | MiscConditionsOrderCustomFieldConditionData | MiscConditionsOrderLineCustomFieldConditionData | MiscConditionsOrderPropertiesConditionData | MiscConditionsOrderTypeConditionData | MiscConditionsOrganizationUnitConditionData | MiscConditionsOrganizationUnitTypeConditionData | MiscConditionsProductConditionData | MiscConditionsProductRequirementConditionData | MiscConditionsStockLabelConditionData | MiscConditionsUserCustomFieldConditionData | MiscConditionsUserRoleConditionData | MiscConditionsUserTypeConditionData | EmptyConditionData | null;
  /**
  * Entity type: DiscountTemplateCondition
  */
  ID: number;
  Type: 'V2:COUPONORIGINATINGORDERORGANIZATIONUNIT' | 'V2:COUPONVALIDITY' | 'V2:CUSTOMERAGE' | 'V2:CUSTOMER' | 'V2:LOYALTYBADGE' | 'V2:LOYALTYPOINTS' | 'V2:LOYALTYTIER' | 'V2:MAXIMUMUSEPERUSER' | 'V2:MINIMUMPRODUCTSUBSCRIPTIONRENEWALS' | 'V2:USERFIELD' | 'V2:ORDERAMOUNT' | 'V2:ORDERCUSTOMFIELD' | 'V2:ORDERLINECUSTOMFIELD' | 'V2:ORDERPROPERTIES' | 'V2:ORDERTYPE' | 'V2:OBS:ORGANIZATIONUNIT' | 'V2:OBS:ORGANIZATIONUNITTYPE' | 'V2:PRODUCT' | 'V2:PRODUCTREQUIREMENT' | 'V2:STOCKLABEL' | 'V2:USERCUSTOMFIELD' | 'V2:USERROLE' | 'V2:USERTYPE' | 'DEFAULT';
}

/**
* Searches the Discounts with the given filter and returns a tree structure based on discount layer and discount.
*/
export interface GetLayerGroupedDiscountsByQuery extends RequestMessage<GetLayerGroupedDiscountsByQueryResponse> {
  Query?: DiscountsSearchDiscountsByQueryFilter;
}

export interface GetLayerGroupedDiscountsByQueryResponse extends ResponseMessage {
  Layers?: DiscountsGetLayerGroupedDiscountsByQueryResponse_LayerModel[];
}

export interface DiscountsGetLayerGroupedDiscountsByQueryResponse_DiscountModel {
  BackendID?: string;
  Budget?: number;
  BudgetAvailable?: number;
  BudgetProgress?: number;
  /**
  * Entity type: DiscountCampaign
  */
  CampaignID?: number;
  CampaignName?: string;
  CouponsGeneratedByOtherDiscount: boolean;
  CreatedByFullName?: string;
  /**
  * Entity type: User
  */
  CreatedByID: number;
  CurrencyConstraint: DataModelsCurrencyConstraint;
  CurrencyID?: string;
  /**
  * Entity type: CustomField
  */
  CustomUserUsageLimitFieldID?: number;
  DeactivateWhenBudgetReached: boolean;
  DeactivationReasons: DataModelsDiscountDeactivationReasons;
  Description?: string;
  DiscountOrderType: DataModelsDiscountOrderTypes;
  Enabled: boolean;
  EndDate?: string;
  GeneratedFromTemplate: boolean;
  /**
  * Entity type: Discount
  */
  ID: number;
  /**
  * Entity type: Blob
  */
  ImageBlobID?: string;
  ImageBlobUrl?: string;
  IsUsed: boolean;
  /**
  * Entity type: DiscountLayer
  */
  LayerID: number;
  LayerName?: string;
  LoyaltyPointWithdrawal?: number;
  /**
  * Entity type: LoyaltyProgram
  */
  LoyaltyProgramID?: number;
  LoyaltyProgramName?: string;
  MaximumUsage?: number;
  OrganizationUnitSetDescription?: string;
  /**
  * Entity type: OrganizationUnitSet
  */
  OrganizationUnitSetID: number;
  OrganizationUnitSetName?: string;
  OrganizationUnitSetType?: DataModelsOrganizationUnitSetTypes;
  /**
  * Entity type: ProductSubscription
  */
  ProductSubscriptionID?: number;
  ProductSubscriptionName?: string;
  /**
  * Entity type: OrganizationUnit
  */
  RestitutionOrganizationUnitID?: number;
  StartDate: string;
  TotalDiscountGiven: number;
  UsageCount: number;
  UserUsageLimit?: number;
  UserUsagePeriodDuration?: number;
  UserUsagePeriodType?: DataModelsDiscountUserUsagePeriodType;
  UserUsageReloadStrategy?: string;
}

export interface DiscountsGetLayerGroupedDiscountsByQueryResponse_LayerModel {
  Discounts?: DiscountsGetLayerGroupedDiscountsByQueryResponse_DiscountModel[];
  IsExclusive: boolean;
  IsSystem: boolean;
  LayerID: number;
  LayerName?: string;
  Sequence: number;
}

/**
* Get the coupons for a specific user
*/
export interface GetUserCoupons extends RequestMessage<GetUserCouponsResponse> {
  /**
  * Filter on usability. Optional values are; null = all coupons, true = usable only, false = unusable only.
  */
  IsUsable?: boolean;
  /**
  * Entity type: OrganizationUnit
  * You can provide an additional `OrganizationUnitID` to filter the coupons. This only works when you are logged in as User. Employees/API's can only see coupons that are within the ClientContext CurrentOrganizationUnit
  */
  OrganizationUnitID?: number;
  /**
  * Optional ordering. When omitted, the existing default order is preserved.
  */
  SortBy?: DiscountsGetUserCouponsSortBy;
  /**
  * Entity type: User
  */
  UserID?: number;
}

export interface GetUserCouponsResponse extends ResponseMessage {
  Coupons?: DiscountsGetUserCouponsResponse_Coupon[];
}

export interface DiscountsGetUserCouponsResponse_Coupon {
  Blob?: BlobsBlobDto;
  Code?: string;
  DiscountDescription?: string;
  /**
  * Entity type: Discount
  */
  DiscountID: number;
  DiscountMarketingDescription?: string;
  /**
  * Entity type: DiscountCoupon
  */
  ID: number;
  IsUsable: boolean;
  RemainingAmount?: number;
  ValidFrom: string;
  ValidTill?: string;
}

/**
* Lists the available discount conditions and actions.
*/
export interface ListAvailableDiscountActionsAndConditions extends RequestMessage<ListAvailableDiscountActionsAndConditionsResponse> {
  CurrencyConstraint?: DataModelsCurrencyConstraint;
  DiscountTriggers?: DataModelsDiscountTriggers;
}

export interface ListAvailableDiscountActionsAndConditionsResponse extends ResponseMessage {
  Actions?: string[];
  Conditions?: string[];
  TriggerAvailability?: DiscountsListAvailableDiscountActionsAndConditionsResponse_TriggerItem[];
}

export interface DiscountsListAvailableDiscountActionsAndConditionsResponse_TriggerItem {
  Actions?: string[];
  Conditions?: string[];
  Trigger: DataModelsDiscountTriggers;
}

/**
* List the coupons
*/
export interface ListCouponsByQuery extends RequestMessage<ListCouponsByQueryResponse> {
  PageConfig?: PageConfig<DiscountsListDiscountCouponsFilter>;
}

export interface ListCouponsByQueryResponse extends PagedResultResponse<DiscountsListCouponsByQueryResponse_Coupon> {
}

export interface DiscountsListCouponsByQueryResponse_Coupon {
  CouponCode?: string;
  /**
  * Entity type: Discount
  */
  DiscountID: number;
  DiscountMarketingDescription?: string;
  FirstUsage?: string;
  /**
  * Entity type: DiscountCoupon
  */
  ID: number;
  IsActive: boolean;
  IsExternal: boolean;
  IsGenerated: boolean;
  LastUsage?: string;
  MaximumUsage?: number;
  UsageCount: number;
}

/**
* List the DiscountCampaigns
*/
export interface ListDiscountCampaigns extends RequestMessage<ListDiscountCampaignsResponse> {
  PageConfig?: PageConfig<DataModelsListDiscountCampaignsFilter>;
}

export interface ListDiscountCampaignsResponse extends PagedResultResponse<DiscountsListDiscountCampaignsResponse_DiscountCampaignDto> {
}

export interface DiscountsListDiscountCampaignsResponse_DiscountCampaignDto {
  BackendID?: string;
  BackendSystemID?: string;
  Budget?: number;
  BudgetProgress?: number;
  /**
  * Entity type: Currency
  */
  CurrencyID?: string;
  Description?: string;
  EndDate?: string;
  /**
  * Entity type: DiscountCampaign
  */
  ID: number;
  Name?: string;
  StartDate?: string;
}

/**
* List the DiscountLayers
*/
export interface ListDiscountLayers extends RequestMessage<ListDiscountLayersResponse> {
  PageConfig?: PageConfig<DiscountsListDiscountLayerFilter>;
}

export interface ListDiscountLayersResponse extends PagedResultResponse<DiscountsListDiscountLayersResponse_DiscountLayerDto> {
}

export interface DiscountsListDiscountLayersResponse_DiscountLayerDto {
  Description?: string;
  /**
  * Entity type: DiscountLayer
  */
  ID: number;
  IsExclusive: boolean;
  /**
  * This layer is managed by EVA and cannot be changed.
  */
  IsSystem: boolean;
  Name?: string;
  Sequence: number;
}

/**
* Searches the DiscountTemplates with the given filter and returns a paged response.
*/
export interface ListDiscountTemplates extends FilteredPagedResultRequest<DataModelsListDiscountTemplatesFilter, ListDiscountTemplatesResponse> {
}

export interface ListDiscountTemplatesResponse extends PagedResultResponse<DiscountsListDiscountTemplatesResponse_Data> {
}

export interface DiscountsListDiscountTemplatesResponse_Data {
  ActionType?: 'V2:DISCOUNTAMOUNT' | 'V2:CUSTOMERAGE' | 'V2:TIEREDCUSTOMERAGE' | 'V2:GENERATEDISCOUNTCOUPON' | 'V2:GETAPRODUCT' | 'V2:LOYALTYTIEREDDISCOUNTAMOUNT' | 'V2:LOYALTYTIEREDDISCOUNTPERCENTAGE' | 'V2:ORDERTIEREDDISCOUNTAMOUNT' | 'V2:ORDERTIEREDDISCOUNTPERCENTAGE' | 'V2:ORIGINATINGAPPOINTMENT' | 'V2:ORIGINATINGORDERDISCOUNT' | 'V2:OTHERCOSTS' | 'V2:DISCOUNTPERCENTAGE' | 'V2:TIEREDPICKAPRODUCT' | 'V2:PRODUCTAMOUNTTIEREDDISCOUNTAMOUNT' | 'V2:PRODUCTAMOUNTTIEREDDISCOUNTPERCENTAGE' | 'V2:PRODUCTQUANTITYTIEREDDISCOUNTAMOUNT' | 'V2:PRODUCTQUANTITYTIEREDDISCOUNTPERCENTAGE' | 'V2:PRODUCTSETDISCOUNTAMOUNT' | 'V2:PRODUCTSETFIXEDPRICE' | 'V2:PRODUCTSETFREEPRODUCT' | 'V2:PRODUCTSETDISCOUNTPERCENTAGE' | 'V2:CUSTOMFIELDVALUEDETERMINEDDISCOUNT' | 'DEFAULT';
  AppliesTo: DataModelsDiscountAppliesTo;
  CreatedByFullName?: string;
  CreationTime: string;
  Description?: string;
  DiscountOrderType: DataModelsDiscountOrderTypes;
  /**
  * Entity type: DiscountTemplate
  */
  ID: number;
  ImageBlobID?: string;
  IsActive: boolean;
  LastModificationTime?: string;
  LastModifiedByFullName?: string;
  /**
  * Entity type: OrganizationUnit
  */
  RestitutionOrganizationUnitID?: number;
  Trigger: DataModelsDiscountTriggers;
}

/**
* Lists the available discount user usage reload strategies.
*/
export interface ListDiscountUserUsageReloadStrategies extends RequestMessage<ListDiscountUserUsageReloadStrategiesResponse> {
}

export interface ListDiscountUserUsageReloadStrategiesResponse extends ResponseMessage {
  Strategies?: string[];
}

/**
* List the coupons that are generated on an order
*/
export interface ListOrderGeneratedCoupons extends RequestMessage<ListOrderGeneratedCouponsResponse> {
  /**
  * Entity type: Order
  */
  OrderID: number;
}

export interface ListOrderGeneratedCouponsResponse extends ResponseMessage {
  Coupons?: DiscountsListOrderGeneratedCouponsResponse_Coupon[];
}

export interface DiscountsListOrderGeneratedCouponsResponse_Coupon {
  Code?: string;
  /**
  * Entity type: DiscountCoupon
  */
  ID: number;
  TargetDiscountDescription?: string;
  /**
  * Entity type: Discount
  */
  TargetDiscountID: number;
  TargetDiscountMarketingDescription?: string;
}

/**
* Move an existing DiscountLayer to a new postion.
* 
* The Layer will be placed after the `AfterDiscountLayerID`. If no `AfterDiscountLayerID` is given, the layer will be placed on the first position.
*/
export interface MoveDiscountLayer extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: DiscountLayer
  */
  AfterDiscountLayerID: number;
  /**
  * Entity type: DiscountLayer
  */
  ID: number;
}

/**
* Push a DiscountCoupon
*/
export interface PushDiscountCoupons extends RequestMessage<PushDiscountCouponsResponse> {
  Coupons?: DiscountsPushDiscountCoupons_PushedCoupon[];
  /**
  * Entity type: Discount
  */
  DiscountID?: string;
}

export interface DiscountsPushDiscountCoupons_PushedCoupon {
  CouponCode?: string;
  IsActive?: boolean;
  MaximumUsage?: number;
  /**
  * Entity type: Order
  */
  OrderID?: string;
  /**
  * Entity type: User
  */
  UserID?: string;
}

export interface PushDiscountCouponsResponse extends ResponseMessage {
  CreatedCoupons?: DiscountsPushDiscountCouponsResponse_CreatedCoupon[];
}

export interface DiscountsPushDiscountCouponsResponse_CreatedCoupon {
  /**
  * Entity type: DiscountCoupon
  */
  ID: number;
  IsDuplicateCoupon: boolean;
}

/**
* Remove required custom fields from ManualDiscount
*/
export interface RemoveRequiredCustomFieldsFromManualDiscount extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: CustomField
  */
  CustomFieldIDs?: number[];
  /**
  * Entity type: Discount
  */
  DiscountID: number;
  RemoveAllRequiredCustomFields?: boolean;
}

/**
* Remove security roles from ManualDiscount
*/
export interface RemoveRolesFromManualDiscount extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: Discount
  */
  DiscountID: number;
  RemoveAllRoles?: boolean;
  /**
  * Entity type: Role
  */
  RoleIDs?: number[];
}

/**
* Searches the Discounts with the given filter and returns a paged response.
*/
export interface SearchDiscountsByQuery extends RequestMessage<SearchDiscountsByQueryResponse> {
  PageConfig?: PageConfig<DiscountsSearchDiscountsByQueryFilter>;
}

export interface SearchDiscountsByQueryResponse extends PagedResultResponse<DiscountsSearchDiscountsByQueryResponse_DiscountDto> {
}

export interface DiscountsSearchDiscountsByQueryResponse_DiscountDto {
  BackendID?: string;
  Budget?: number;
  BudgetAvailable?: number;
  BudgetProgress?: number;
  /**
  * Entity type: DiscountCampaign
  */
  CampaignID?: number;
  CouponsGeneratedByOtherDiscount: boolean;
  CreatedByFullName?: string;
  /**
  * Entity type: User
  */
  CreatedByID: number;
  CurrencyConstraint: DataModelsCurrencyConstraint;
  CurrencyID?: string;
  /**
  * Entity type: CustomField
  */
  CustomUserUsageLimitFieldID?: number;
  DeactivateWhenBudgetReached: boolean;
  DeactivationReasons: DataModelsDiscountDeactivationReasons;
  Description?: string;
  DiscountOrderType: DataModelsDiscountOrderTypes;
  Enabled: boolean;
  EndDate?: string;
  GeneratedFromTemplate: boolean;
  /**
  * Entity type: Discount
  */
  ID: number;
  /**
  * Entity type: Blob
  */
  ImageBlobID?: string;
  ImageBlobUrl?: string;
  IsUsed: boolean;
  /**
  * Entity type: DiscountLayer
  */
  LayerID: number;
  LayerName?: string;
  /**
  * Entity type: LoyaltyProgram
  */
  LoyaltyProgramID?: number;
  LoyaltyProgramName?: string;
  MaximumUsage?: number;
  OrganizationUnitSetDescription?: string;
  /**
  * Entity type: OrganizationUnitSet
  */
  OrganizationUnitSetID: number;
  OrganizationUnitSetName?: string;
  OrganizationUnitSetType?: DataModelsOrganizationUnitSetTypes;
  /**
  * Entity type: ProductSubscription
  */
  ProductSubscriptionID?: number;
  ProductSubscriptionName?: string;
  /**
  * Entity type: OrganizationUnit
  */
  RestitutionOrganizationUnitID?: number;
  StartDate: string;
  TotalDiscountGiven: number;
  UsageCount: number;
  UserUsageLimit?: number;
  UserUsagePeriodDuration?: number;
  UserUsagePeriodType?: DataModelsDiscountUserUsagePeriodType;
  UserUsageReloadStrategy?: string;
}

/**
* Takes in all discount layers and sets their sequences. All layers except the system layer are required.
*/
export interface SetDiscountLayerSequences extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: DiscountLayer
  */
  Layers: number[];
}

/**
* Update an existing discount
*/
export interface UpdateDiscount extends RequestMessageWithEmptyResponse {
  ActionData?: DiscountsAmountDiscountActionData | DiscountsCustomerAgeDiscountActionData | DiscountsCustomerAgeTieredDiscountActionData | DiscountsGenerateDiscountCouponActionData | DiscountsGetAProductDiscountActionData | DiscountsLoyaltyTieredAmountDiscountActionData | DiscountsLoyaltyTieredPercentageDiscountActionData | DiscountsOrderTieredAmountDiscountActionData | DiscountsOrderTieredPercentageDiscountActionData | DiscountsOriginatingAppointmentActionData | DiscountsOriginatingOrderDiscountActionData | DiscountsOtherCostsDiscountActionData | DiscountsPercentageDiscountActionData | DiscountsPickAProductTieredDiscountActionData | DiscountsProductAmountTieredAmountDiscountActionData | DiscountsProductAmountTieredPercentageDiscountActionData | DiscountsProductQuantityTieredAmountDiscountActionData | DiscountsProductQuantityTieredPercentageDiscountActionData | DiscountsProductSetAmountDiscountActionData | DiscountsProductSetFixedPriceDiscountActionData | DiscountsProductSetFreeProductActionData | DiscountsProductSetPercentageDiscountActionData | DiscountsCustomFieldValueDeterminedDiscountActionData | DiscountsEmptyDiscountActionData;
  ActionType: 'V2:DISCOUNTAMOUNT' | 'V2:CUSTOMERAGE' | 'V2:TIEREDCUSTOMERAGE' | 'V2:GENERATEDISCOUNTCOUPON' | 'V2:GETAPRODUCT' | 'V2:LOYALTYTIEREDDISCOUNTAMOUNT' | 'V2:LOYALTYTIEREDDISCOUNTPERCENTAGE' | 'V2:ORDERTIEREDDISCOUNTAMOUNT' | 'V2:ORDERTIEREDDISCOUNTPERCENTAGE' | 'V2:ORIGINATINGAPPOINTMENT' | 'V2:ORIGINATINGORDERDISCOUNT' | 'V2:OTHERCOSTS' | 'V2:DISCOUNTPERCENTAGE' | 'V2:TIEREDPICKAPRODUCT' | 'V2:PRODUCTAMOUNTTIEREDDISCOUNTAMOUNT' | 'V2:PRODUCTAMOUNTTIEREDDISCOUNTPERCENTAGE' | 'V2:PRODUCTQUANTITYTIEREDDISCOUNTAMOUNT' | 'V2:PRODUCTQUANTITYTIEREDDISCOUNTPERCENTAGE' | 'V2:PRODUCTSETDISCOUNTAMOUNT' | 'V2:PRODUCTSETFIXEDPRICE' | 'V2:PRODUCTSETFREEPRODUCT' | 'V2:PRODUCTSETDISCOUNTPERCENTAGE' | 'V2:CUSTOMFIELDVALUEDETERMINEDDISCOUNT' | 'DEFAULT';
  ApplyTo?: DataModelsDiscountAppliesTo;
  BackendID?: string;
  Budget?: number;
  /**
  * Entity type: DiscountCampaign
  */
  CampaignID?: number;
  CampaignName?: string;
  CannotApplyToOwnOrder?: boolean;
  CompliancyRule?: DataModelsDiscountCompliancyRule;
  ConditionType?: DataModelsDiscountConditionTypes;
  Conditions?: DiscountsUpdateDiscount_DiscountConditionDto[];
  CouponHandler?: string | null;
  CouponsGeneratedByOtherDiscount?: boolean;
  CurrencyConstraint?: DataModelsCurrencyConstraint;
  /**
  * Entity type: Currency
  */
  CurrencyID: string;
  /**
  * Optional additional custom fields
  */
  CustomFields?: DataModelsCustomFieldKeyValue[] | null;
  /**
  * Entity type: CustomField
  */
  CustomUserUsageLimitFieldID?: number;
  DaysApplicable?: DaysOfWeek;
  DeactivateWhenBudgetReached?: boolean;
  Description: string;
  DiscountOrderType?: DataModelsDiscountOrderTypes;
  Enable?: boolean;
  EndDate?: string;
  FinancialDispersion?: DataModelsFinancialDespersionType;
  /**
  * Entity type: Discount
  */
  ID: number;
  /**
  * Entity type: Blob
  */
  ImageBlobID?: string;
  ImageBlobUrl?: string;
  IsActive?: boolean;
  /**
  * Entity type: DiscountLayer
  */
  LayerID: number;
  /**
  * Entity type: LedgerClass
  */
  LedgerClassID?: string;
  LoyaltyPointWithdrawal?: number;
  /**
  * Entity type: LoyaltyProgram
  */
  LoyaltyProgramID?: number;
  MarketingDescription?: string;
  MaximumUsage?: number;
  /**
  * NOTE THAT Manual discounts can still be applied on multiple lines within the same order.
  */
  MaximumUsagePerOrder?: number;
  MaximumUsagePerUser?: number;
  NeedsReason?: boolean;
  /**
  * Entity type: OrganizationUnitSet
  */
  OrganizationUnitSetID: number;
  /**
  * Entity type: ProductSubscription
  */
  ProductSubscriptionID?: number;
  PromotionLabel?: string;
  /**
  * Entity type: CustomField
  * For a manual discount, these will indicate custom fields that need to be filled in order to apply the discount.
  */
  RequiredCustomFields?: number[] | null;
  /**
  * Entity type: OrganizationUnit
  */
  RestitutionOrganizationUnitID?: number;
  /**
  * Entity type: Role
  */
  RoleIDs?: number[];
  StartDate?: string;
  Trigger?: DataModelsDiscountTriggers;
  UserUsageLimit?: number;
  UserUsagePeriodDuration?: number;
  UserUsagePeriodType?: DataModelsDiscountUserUsagePeriodType;
  UserUsageReloadStrategy?: string;
}

export interface DiscountsUpdateDiscount_DiscountConditionDto {
  Data?: LoyaltyBadgesConditionsBadgeConditionData | LoyaltyBadgesConditionsCustomFieldConditionData | LoyaltyBadgesConditionsPointThresholdConditionData | LoyaltyBadgesConditionsBadgeProductConditionData | LoyaltyBadgesConditionsTierConditionData | MiscConditionsCouponOriginatingOrderOrganizationUnitConditionData | MiscConditionsCouponValidityConditionData | MiscConditionsCustomerAgeConditionData | MiscConditionsCustomerConditionData | MiscConditionsLoyaltyBadgeConditionData | MiscConditionsLoyaltyPointsConditionData | MiscConditionsLoyaltyTierConditionData | MiscConditionsMaximumUsePerUserConditionData | MiscConditionsMinimumProductSubscriptionRenewalsConditionData | MiscConditionsOldUserFieldConditionData | MiscConditionsOrderAmountConditionData | MiscConditionsOrderCustomFieldConditionData | MiscConditionsOrderLineCustomFieldConditionData | MiscConditionsOrderPropertiesConditionData | MiscConditionsOrderTypeConditionData | MiscConditionsOrganizationUnitConditionData | MiscConditionsOrganizationUnitTypeConditionData | MiscConditionsProductConditionData | MiscConditionsProductRequirementConditionData | MiscConditionsStockLabelConditionData | MiscConditionsUserCustomFieldConditionData | MiscConditionsUserRoleConditionData | MiscConditionsUserTypeConditionData | EmptyConditionData;
  /**
  * Entity type: DiscountCondition
  */
  ID?: number;
  Type: 'V2:COUPONORIGINATINGORDERORGANIZATIONUNIT' | 'V2:COUPONVALIDITY' | 'V2:CUSTOMERAGE' | 'V2:CUSTOMER' | 'V2:LOYALTYBADGE' | 'V2:LOYALTYPOINTS' | 'V2:LOYALTYTIER' | 'V2:MAXIMUMUSEPERUSER' | 'V2:MINIMUMPRODUCTSUBSCRIPTIONRENEWALS' | 'V2:USERFIELD' | 'V2:ORDERAMOUNT' | 'V2:ORDERCUSTOMFIELD' | 'V2:ORDERLINECUSTOMFIELD' | 'V2:ORDERPROPERTIES' | 'V2:ORDERTYPE' | 'V2:OBS:ORGANIZATIONUNIT' | 'V2:OBS:ORGANIZATIONUNITTYPE' | 'V2:PRODUCT' | 'V2:PRODUCTREQUIREMENT' | 'V2:STOCKLABEL' | 'V2:USERCUSTOMFIELD' | 'V2:USERROLE' | 'V2:USERTYPE' | 'DEFAULT';
  UseAsActionCondition?: boolean;
}

/**
* Update an existing DiscountCampaign
*/
export interface UpdateDiscountCampaign extends RequestMessageWithEmptyResponse {
  BackendID?: string | null;
  BackendSystemID?: string | null;
  /**
  * Entity type: Currency
  */
  CurrencyID?: string | null;
  Description?: string | null;
  EndDate?: string | null;
  /**
  * Entity type: DiscountCampaign
  */
  ID: number;
  KeepDiscountsWithinCampaignTimespan?: boolean;
  Name?: string | null;
  StartDate?: string | null;
}

/**
* Update the budget on the discount campaign.
* When the budget is lowerd below the current `TotalDiscountGiven` and the `DeactivateWhenBudgetReached` is set to true, all related discounts will be deactivated.
* When the budget is cleared or raised above the current `TotalDiscountGiven`, or `DeactivateWhenBudgetReached` is set to false, all discounts that were deactivate by the discount campaign budget will be reactivated.
*/
export interface UpdateDiscountCampaignBudget extends RequestMessageWithEmptyResponse {
  Budget?: number;
  /**
  * Entity type: Currency
  */
  CurrencyID?: string | null;
  DeactivateDiscountsWhenBudgetIsReached?: boolean;
  /**
  * Entity type: DiscountCampaign
  */
  ID: number;
  ReactivateDeactivatedDiscounts?: boolean;
}

/**
* Update an existing DiscountCoupon
*/
export interface UpdateDiscountCoupon extends RequestMessage<UpdateDiscountCouponResponse> {
  CouponCode?: string;
  /**
  * Entity type: DiscountCoupon
  */
  ID: number;
  IsActive?: boolean;
  MaximumUsage?: number;
}

export interface UpdateDiscountCouponResponse extends ResponseMessage {
  IsDuplicateCoupon: boolean;
}

/**
* Update an existing DiscountLayer
*/
export interface UpdateDiscountLayer extends RequestMessageWithEmptyResponse {
  Description?: string;
  /**
  * Entity type: DiscountLayer
  */
  ID: number;
  IsExclusive?: boolean;
  Name: string;
  Sequence?: number;
}

/**
* Update an existing discount template
*/
export interface UpdateDiscountTemplate extends RequestMessageWithEmptyResponse {
  ActionData: DiscountsAmountDiscountActionData | DiscountsCustomerAgeDiscountActionData | DiscountsCustomerAgeTieredDiscountActionData | DiscountsGenerateDiscountCouponActionData | DiscountsGetAProductDiscountActionData | DiscountsLoyaltyTieredAmountDiscountActionData | DiscountsLoyaltyTieredPercentageDiscountActionData | DiscountsOrderTieredAmountDiscountActionData | DiscountsOrderTieredPercentageDiscountActionData | DiscountsOriginatingAppointmentActionData | DiscountsOriginatingOrderDiscountActionData | DiscountsOtherCostsDiscountActionData | DiscountsPercentageDiscountActionData | DiscountsPickAProductTieredDiscountActionData | DiscountsProductAmountTieredAmountDiscountActionData | DiscountsProductAmountTieredPercentageDiscountActionData | DiscountsProductQuantityTieredAmountDiscountActionData | DiscountsProductQuantityTieredPercentageDiscountActionData | DiscountsProductSetAmountDiscountActionData | DiscountsProductSetFixedPriceDiscountActionData | DiscountsProductSetFreeProductActionData | DiscountsProductSetPercentageDiscountActionData | DiscountsCustomFieldValueDeterminedDiscountActionData | DiscountsEmptyDiscountActionData | null;
  ActionType: 'V2:DISCOUNTAMOUNT' | 'V2:CUSTOMERAGE' | 'V2:TIEREDCUSTOMERAGE' | 'V2:GENERATEDISCOUNTCOUPON' | 'V2:GETAPRODUCT' | 'V2:LOYALTYTIEREDDISCOUNTAMOUNT' | 'V2:LOYALTYTIEREDDISCOUNTPERCENTAGE' | 'V2:ORDERTIEREDDISCOUNTAMOUNT' | 'V2:ORDERTIEREDDISCOUNTPERCENTAGE' | 'V2:ORIGINATINGAPPOINTMENT' | 'V2:ORIGINATINGORDERDISCOUNT' | 'V2:OTHERCOSTS' | 'V2:DISCOUNTPERCENTAGE' | 'V2:TIEREDPICKAPRODUCT' | 'V2:PRODUCTAMOUNTTIEREDDISCOUNTAMOUNT' | 'V2:PRODUCTAMOUNTTIEREDDISCOUNTPERCENTAGE' | 'V2:PRODUCTQUANTITYTIEREDDISCOUNTAMOUNT' | 'V2:PRODUCTQUANTITYTIEREDDISCOUNTPERCENTAGE' | 'V2:PRODUCTSETDISCOUNTAMOUNT' | 'V2:PRODUCTSETFIXEDPRICE' | 'V2:PRODUCTSETFREEPRODUCT' | 'V2:PRODUCTSETDISCOUNTPERCENTAGE' | 'V2:CUSTOMFIELDVALUEDETERMINEDDISCOUNT' | 'DEFAULT';
  AppliesTo?: DataModelsDiscountAppliesTo;
  BackendID?: string;
  /**
  * Entity type: DiscountCampaign
  */
  CampaignID?: number;
  CannotApplyToOwnOrder?: boolean;
  ConditionType?: DataModelsDiscountConditionTypes;
  Conditions?: DiscountsUpdateDiscountTemplate_Condition[];
  CouponHandler?: string;
  CouponsGeneratedByOtherDiscount?: boolean;
  DaysApplicable?: DaysOfWeek;
  Description: string;
  DiscountOrderType?: DataModelsDiscountOrderTypes;
  /**
  * Entity type: DiscountTemplate
  */
  ID: number;
  ImageBlobID?: string;
  IsActive?: boolean;
  IsExclusive?: boolean;
  /**
  * Entity type: LedgerClass
  */
  LedgerClassID?: string;
  MaximumUsage?: number;
  /**
  * NOTE THAT Manual discounts can still be applied on multiple lines within the same order.
  */
  MaximumUsagePerOrder?: number;
  MaximumUsagePerUser?: number;
  NeedsReason?: boolean;
  /**
  * Entity type: OrganizationUnit
  */
  RestitutionOrganizationUnitID?: number;
  Trigger?: DataModelsDiscountTriggers;
  UserUsageLimit?: number;
  UserUsageReloadStrategy?: string;
}

export interface DiscountsUpdateDiscountTemplate_Condition {
  Data: LoyaltyBadgesConditionsBadgeConditionData | LoyaltyBadgesConditionsCustomFieldConditionData | LoyaltyBadgesConditionsPointThresholdConditionData | LoyaltyBadgesConditionsBadgeProductConditionData | LoyaltyBadgesConditionsTierConditionData | MiscConditionsCouponOriginatingOrderOrganizationUnitConditionData | MiscConditionsCouponValidityConditionData | MiscConditionsCustomerAgeConditionData | MiscConditionsCustomerConditionData | MiscConditionsLoyaltyBadgeConditionData | MiscConditionsLoyaltyPointsConditionData | MiscConditionsLoyaltyTierConditionData | MiscConditionsMaximumUsePerUserConditionData | MiscConditionsMinimumProductSubscriptionRenewalsConditionData | MiscConditionsOldUserFieldConditionData | MiscConditionsOrderAmountConditionData | MiscConditionsOrderCustomFieldConditionData | MiscConditionsOrderLineCustomFieldConditionData | MiscConditionsOrderPropertiesConditionData | MiscConditionsOrderTypeConditionData | MiscConditionsOrganizationUnitConditionData | MiscConditionsOrganizationUnitTypeConditionData | MiscConditionsProductConditionData | MiscConditionsProductRequirementConditionData | MiscConditionsStockLabelConditionData | MiscConditionsUserCustomFieldConditionData | MiscConditionsUserRoleConditionData | MiscConditionsUserTypeConditionData | EmptyConditionData | null;
  /**
  * Entity type: DiscountTemplateCondition
  */
  ID?: number;
  Type: 'V2:COUPONORIGINATINGORDERORGANIZATIONUNIT' | 'V2:COUPONVALIDITY' | 'V2:CUSTOMERAGE' | 'V2:CUSTOMER' | 'V2:LOYALTYBADGE' | 'V2:LOYALTYPOINTS' | 'V2:LOYALTYTIER' | 'V2:MAXIMUMUSEPERUSER' | 'V2:MINIMUMPRODUCTSUBSCRIPTIONRENEWALS' | 'V2:USERFIELD' | 'V2:ORDERAMOUNT' | 'V2:ORDERCUSTOMFIELD' | 'V2:ORDERLINECUSTOMFIELD' | 'V2:ORDERPROPERTIES' | 'V2:ORDERTYPE' | 'V2:OBS:ORGANIZATIONUNIT' | 'V2:OBS:ORGANIZATIONUNITTYPE' | 'V2:PRODUCT' | 'V2:PRODUCTREQUIREMENT' | 'V2:STOCKLABEL' | 'V2:USERCUSTOMFIELD' | 'V2:USERROLE' | 'V2:USERTYPE' | 'DEFAULT';
}

/**
* Upload an excel with coupons.
*/
export interface UploadCouponExcel extends RequestMessage<UploadCouponExcelResponse> {
  /**
  * Entity type: Blob
  */
  BlobID?: string;
  Data?: string;
  /**
  * Entity type: Discount
  */
  DiscountID: number;
  ProcessAsync?: boolean;
}

export interface UploadCouponExcelResponse extends ResponseMessage {
  Errors?: string[];
  IsProcessedAsync: boolean;
}

export interface UploadCouponExcel_Async extends UploadCouponExcel {
}

export interface UploadCouponExcel_AsyncResponse extends AsyncRequestHandlingAsyncRequestResponse {
}

export interface UploadCouponExcel_AsyncResult extends AsyncRequestHandlingAsyncRequestResultRequest {
}

/**
* Validates the given discount information
*/
export interface ValidateDiscount extends RequestMessage<ValidateDiscountResponse> {
  ActionData?: DiscountsAmountDiscountActionData | DiscountsCustomerAgeDiscountActionData | DiscountsCustomerAgeTieredDiscountActionData | DiscountsGenerateDiscountCouponActionData | DiscountsGetAProductDiscountActionData | DiscountsLoyaltyTieredAmountDiscountActionData | DiscountsLoyaltyTieredPercentageDiscountActionData | DiscountsOrderTieredAmountDiscountActionData | DiscountsOrderTieredPercentageDiscountActionData | DiscountsOriginatingAppointmentActionData | DiscountsOriginatingOrderDiscountActionData | DiscountsOtherCostsDiscountActionData | DiscountsPercentageDiscountActionData | DiscountsPickAProductTieredDiscountActionData | DiscountsProductAmountTieredAmountDiscountActionData | DiscountsProductAmountTieredPercentageDiscountActionData | DiscountsProductQuantityTieredAmountDiscountActionData | DiscountsProductQuantityTieredPercentageDiscountActionData | DiscountsProductSetAmountDiscountActionData | DiscountsProductSetFixedPriceDiscountActionData | DiscountsProductSetFreeProductActionData | DiscountsProductSetPercentageDiscountActionData | DiscountsCustomFieldValueDeterminedDiscountActionData | DiscountsEmptyDiscountActionData;
  ActionType?: 'V2:DISCOUNTAMOUNT' | 'V2:CUSTOMERAGE' | 'V2:TIEREDCUSTOMERAGE' | 'V2:GENERATEDISCOUNTCOUPON' | 'V2:GETAPRODUCT' | 'V2:LOYALTYTIEREDDISCOUNTAMOUNT' | 'V2:LOYALTYTIEREDDISCOUNTPERCENTAGE' | 'V2:ORDERTIEREDDISCOUNTAMOUNT' | 'V2:ORDERTIEREDDISCOUNTPERCENTAGE' | 'V2:ORIGINATINGAPPOINTMENT' | 'V2:ORIGINATINGORDERDISCOUNT' | 'V2:OTHERCOSTS' | 'V2:DISCOUNTPERCENTAGE' | 'V2:TIEREDPICKAPRODUCT' | 'V2:PRODUCTAMOUNTTIEREDDISCOUNTAMOUNT' | 'V2:PRODUCTAMOUNTTIEREDDISCOUNTPERCENTAGE' | 'V2:PRODUCTQUANTITYTIEREDDISCOUNTAMOUNT' | 'V2:PRODUCTQUANTITYTIEREDDISCOUNTPERCENTAGE' | 'V2:PRODUCTSETDISCOUNTAMOUNT' | 'V2:PRODUCTSETFIXEDPRICE' | 'V2:PRODUCTSETFREEPRODUCT' | 'V2:PRODUCTSETDISCOUNTPERCENTAGE' | 'V2:CUSTOMFIELDVALUEDETERMINEDDISCOUNT' | 'DEFAULT';
  AppliesTo?: DataModelsDiscountAppliesTo;
  BackendID?: string;
  CompliancyRule?: DataModelsDiscountCompliancyRule;
  ConditionType?: DataModelsDiscountConditionTypes;
  Conditions?: DiscountsValidateDiscount_DiscountConditionDto[];
  CouponHandler?: string;
  CouponsGeneratedByOtherDiscount?: boolean;
  CurrencyConstraint?: DataModelsCurrencyConstraint;
  /**
  * Entity type: Currency
  */
  CurrencyID: string;
  /**
  * Optional additional custom fields
  */
  CustomFields?: DataModelsCustomFieldKeyValue[];
  /**
  * Entity type: CustomField
  */
  CustomUserUsageLimitFieldID?: number;
  DaysApplicable?: DaysOfWeek;
  Description?: string;
  DiscountOrderType?: DataModelsDiscountOrderTypes;
  EndDate?: string;
  FinancialDispersion?: DataModelsFinancialDespersionType;
  /**
  * Entity type: Discount
  */
  ID?: number;
  IsActive?: boolean;
  /**
  * Entity type: DiscountLayer
  */
  LayerID: number;
  /**
  * Entity type: LedgerClass
  */
  LedgerClassID?: string;
  LoyaltyPointWithdrawal?: number;
  /**
  * Entity type: LoyaltyProgram
  */
  LoyaltyProgramID?: number;
  MarketingDescription?: string;
  MaximumUsage?: number;
  /**
  * NOTE THAT Manual discounts can still be applied on multiple lines within the same order.
  */
  MaximumUsagePerOrder?: number;
  MaximumUsagePerUser?: number;
  NeedsReason?: boolean;
  OrderType?: DataModelsOrderTypes;
  /**
  * Entity type: OrganizationUnitSet
  */
  OrganizationUnitSetID: number;
  /**
  * Entity type: ProductSubscription
  */
  ProductSubscriptionID?: number;
  /**
  * Entity type: CustomField
  * For a manual discount, these will indicate custom fields that need to be filled in order to apply the discount.
  */
  RequiredCustomFields?: number[];
  /**
  * Entity type: OrganizationUnit
  */
  RestitutionOrganizationUnitID?: number;
  StartDate: string;
  Trigger?: DataModelsDiscountTriggers;
  UserUsageLimit?: number;
  UserUsagePeriodDuration?: number;
  UserUsagePeriodType?: DataModelsDiscountUserUsagePeriodType;
  UserUsageReloadStrategy?: string;
}

export interface DiscountsValidateDiscount_DiscountConditionDto {
  Data?: LoyaltyBadgesConditionsBadgeConditionData | LoyaltyBadgesConditionsCustomFieldConditionData | LoyaltyBadgesConditionsPointThresholdConditionData | LoyaltyBadgesConditionsBadgeProductConditionData | LoyaltyBadgesConditionsTierConditionData | MiscConditionsCouponOriginatingOrderOrganizationUnitConditionData | MiscConditionsCouponValidityConditionData | MiscConditionsCustomerAgeConditionData | MiscConditionsCustomerConditionData | MiscConditionsLoyaltyBadgeConditionData | MiscConditionsLoyaltyPointsConditionData | MiscConditionsLoyaltyTierConditionData | MiscConditionsMaximumUsePerUserConditionData | MiscConditionsMinimumProductSubscriptionRenewalsConditionData | MiscConditionsOldUserFieldConditionData | MiscConditionsOrderAmountConditionData | MiscConditionsOrderCustomFieldConditionData | MiscConditionsOrderLineCustomFieldConditionData | MiscConditionsOrderPropertiesConditionData | MiscConditionsOrderTypeConditionData | MiscConditionsOrganizationUnitConditionData | MiscConditionsOrganizationUnitTypeConditionData | MiscConditionsProductConditionData | MiscConditionsProductRequirementConditionData | MiscConditionsStockLabelConditionData | MiscConditionsUserCustomFieldConditionData | MiscConditionsUserRoleConditionData | MiscConditionsUserTypeConditionData | EmptyConditionData;
  Type?: 'V2:COUPONORIGINATINGORDERORGANIZATIONUNIT' | 'V2:COUPONVALIDITY' | 'V2:CUSTOMERAGE' | 'V2:CUSTOMER' | 'V2:LOYALTYBADGE' | 'V2:LOYALTYPOINTS' | 'V2:LOYALTYTIER' | 'V2:MAXIMUMUSEPERUSER' | 'V2:MINIMUMPRODUCTSUBSCRIPTIONRENEWALS' | 'V2:USERFIELD' | 'V2:ORDERAMOUNT' | 'V2:ORDERCUSTOMFIELD' | 'V2:ORDERLINECUSTOMFIELD' | 'V2:ORDERPROPERTIES' | 'V2:ORDERTYPE' | 'V2:OBS:ORGANIZATIONUNIT' | 'V2:OBS:ORGANIZATIONUNITTYPE' | 'V2:PRODUCT' | 'V2:PRODUCTREQUIREMENT' | 'V2:STOCKLABEL' | 'V2:USERCUSTOMFIELD' | 'V2:USERROLE' | 'V2:USERTYPE' | 'DEFAULT';
  UseAsActionCondition?: boolean;
}

export interface ValidateDiscountResponse extends ResponseMessage {
  ActionMessages?: string[];
  /**
  * Entity type: DiscountCondition
  */
  ConditionMessages?: Record<string,string[] | null>;
  CustomFieldMessages?: DiscountsValidateDiscountResponse_CustomFieldMessage;
  Messages?: string[];
}

export interface DiscountsValidateDiscountResponse_CustomFieldMessage {
  Data?: CustomFieldsCustomFieldValidationErrorData;
  Message?: string;
  Type?: string;
}

/**
* Validates the given discount template information
*/
export interface ValidateDiscountTemplate extends RequestMessage<ValidateDiscountTemplateResponse> {
  ActionData: DiscountsAmountDiscountActionData | DiscountsCustomerAgeDiscountActionData | DiscountsCustomerAgeTieredDiscountActionData | DiscountsGenerateDiscountCouponActionData | DiscountsGetAProductDiscountActionData | DiscountsLoyaltyTieredAmountDiscountActionData | DiscountsLoyaltyTieredPercentageDiscountActionData | DiscountsOrderTieredAmountDiscountActionData | DiscountsOrderTieredPercentageDiscountActionData | DiscountsOriginatingAppointmentActionData | DiscountsOriginatingOrderDiscountActionData | DiscountsOtherCostsDiscountActionData | DiscountsPercentageDiscountActionData | DiscountsPickAProductTieredDiscountActionData | DiscountsProductAmountTieredAmountDiscountActionData | DiscountsProductAmountTieredPercentageDiscountActionData | DiscountsProductQuantityTieredAmountDiscountActionData | DiscountsProductQuantityTieredPercentageDiscountActionData | DiscountsProductSetAmountDiscountActionData | DiscountsProductSetFixedPriceDiscountActionData | DiscountsProductSetFreeProductActionData | DiscountsProductSetPercentageDiscountActionData | DiscountsCustomFieldValueDeterminedDiscountActionData | DiscountsEmptyDiscountActionData | null;
  ActionType: 'V2:DISCOUNTAMOUNT' | 'V2:CUSTOMERAGE' | 'V2:TIEREDCUSTOMERAGE' | 'V2:GENERATEDISCOUNTCOUPON' | 'V2:GETAPRODUCT' | 'V2:LOYALTYTIEREDDISCOUNTAMOUNT' | 'V2:LOYALTYTIEREDDISCOUNTPERCENTAGE' | 'V2:ORDERTIEREDDISCOUNTAMOUNT' | 'V2:ORDERTIEREDDISCOUNTPERCENTAGE' | 'V2:ORIGINATINGAPPOINTMENT' | 'V2:ORIGINATINGORDERDISCOUNT' | 'V2:OTHERCOSTS' | 'V2:DISCOUNTPERCENTAGE' | 'V2:TIEREDPICKAPRODUCT' | 'V2:PRODUCTAMOUNTTIEREDDISCOUNTAMOUNT' | 'V2:PRODUCTAMOUNTTIEREDDISCOUNTPERCENTAGE' | 'V2:PRODUCTQUANTITYTIEREDDISCOUNTAMOUNT' | 'V2:PRODUCTQUANTITYTIEREDDISCOUNTPERCENTAGE' | 'V2:PRODUCTSETDISCOUNTAMOUNT' | 'V2:PRODUCTSETFIXEDPRICE' | 'V2:PRODUCTSETFREEPRODUCT' | 'V2:PRODUCTSETDISCOUNTPERCENTAGE' | 'V2:CUSTOMFIELDVALUEDETERMINEDDISCOUNT' | 'DEFAULT';
  AppliesTo?: DataModelsDiscountAppliesTo;
  BackendID?: string;
  CannotApplyToOwnOrder?: boolean;
  ConditionType?: DataModelsDiscountConditionTypes;
  Conditions?: DiscountsValidateDiscountTemplate_Condition[];
  CouponHandler?: string;
  CouponsGeneratedByOtherDiscount?: boolean;
  DaysApplicable?: DaysOfWeek;
  Description: string;
  DiscountOrderType?: DataModelsDiscountOrderTypes;
  IsExclusive?: boolean;
  /**
  * Entity type: LedgerClass
  */
  LedgerClassID?: string;
  MaximumUsage?: number;
  /**
  * NOTE THAT Manual discounts can still be applied on multiple lines within the same order.
  */
  MaximumUsagePerOrder?: number;
  MaximumUsagePerUser?: number;
  NeedsReason?: boolean;
  /**
  * Entity type: OrganizationUnit
  */
  RestitutionOrganizationUnitID?: number;
  Trigger?: DataModelsDiscountTriggers;
  UserUsageLimit?: number;
  UserUsageReloadStrategy?: string;
}

export interface DiscountsValidateDiscountTemplate_Condition {
  Data: LoyaltyBadgesConditionsBadgeConditionData | LoyaltyBadgesConditionsCustomFieldConditionData | LoyaltyBadgesConditionsPointThresholdConditionData | LoyaltyBadgesConditionsBadgeProductConditionData | LoyaltyBadgesConditionsTierConditionData | MiscConditionsCouponOriginatingOrderOrganizationUnitConditionData | MiscConditionsCouponValidityConditionData | MiscConditionsCustomerAgeConditionData | MiscConditionsCustomerConditionData | MiscConditionsLoyaltyBadgeConditionData | MiscConditionsLoyaltyPointsConditionData | MiscConditionsLoyaltyTierConditionData | MiscConditionsMaximumUsePerUserConditionData | MiscConditionsMinimumProductSubscriptionRenewalsConditionData | MiscConditionsOldUserFieldConditionData | MiscConditionsOrderAmountConditionData | MiscConditionsOrderCustomFieldConditionData | MiscConditionsOrderLineCustomFieldConditionData | MiscConditionsOrderPropertiesConditionData | MiscConditionsOrderTypeConditionData | MiscConditionsOrganizationUnitConditionData | MiscConditionsOrganizationUnitTypeConditionData | MiscConditionsProductConditionData | MiscConditionsProductRequirementConditionData | MiscConditionsStockLabelConditionData | MiscConditionsUserCustomFieldConditionData | MiscConditionsUserRoleConditionData | MiscConditionsUserTypeConditionData | EmptyConditionData | null;
  Type: 'V2:COUPONORIGINATINGORDERORGANIZATIONUNIT' | 'V2:COUPONVALIDITY' | 'V2:CUSTOMERAGE' | 'V2:CUSTOMER' | 'V2:LOYALTYBADGE' | 'V2:LOYALTYPOINTS' | 'V2:LOYALTYTIER' | 'V2:MAXIMUMUSEPERUSER' | 'V2:MINIMUMPRODUCTSUBSCRIPTIONRENEWALS' | 'V2:USERFIELD' | 'V2:ORDERAMOUNT' | 'V2:ORDERCUSTOMFIELD' | 'V2:ORDERLINECUSTOMFIELD' | 'V2:ORDERPROPERTIES' | 'V2:ORDERTYPE' | 'V2:OBS:ORGANIZATIONUNIT' | 'V2:OBS:ORGANIZATIONUNITTYPE' | 'V2:PRODUCT' | 'V2:PRODUCTREQUIREMENT' | 'V2:STOCKLABEL' | 'V2:USERCUSTOMFIELD' | 'V2:USERROLE' | 'V2:USERTYPE' | 'DEFAULT';
}

export interface ValidateDiscountTemplateResponse extends ResponseMessage {
  ActionErrors?: string[];
  ConditionErrors?: DiscountsValidateDiscountTemplateResponse_ConditionError[];
  GeneralErrors?: string[];
}

export interface DiscountsValidateDiscountTemplateResponse_ConditionError {
  ConditionID: number;
  Messages?: string[];
}

/**
* Marks the Discount with the given Discount ID as verified.
* 
* Service will return an error when de discount is already verified.
* 
* Discount cannot be verified by the same user as the one who created / modified the discount, unless they have the right 'DiscountSelfVerification'.
* The service will return an error if the same user without the right 'DiscountSelfVerification' tries to verify the discount.
*/
export interface VerifyDiscount extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: Discount
  */
  DiscountID: number;
}

/**
* Create endpoint configurations.
* 
* Endpoint Configurations allow you to configure specific endpoints taht can be used for example for EventExportConfigurations.
* 
* - Make sure to catch & store the `SecretKey1` and `SecretKey2`, as there will be no other way of retrieving them after this service call!
*/
export interface CreateEndpointConfiguration extends RequestMessage<CreateEndpointConfigurationResponse> {
  /**
  * Authorization configuration used when calling this endpoint.
  */
  Authorization?: EndpointConfigurationsEndpointConfigurationAuthorizationModel;
  /**
  * An identifier for the configuration.
  */
  BackendID?: string;
  /**
  * The endpoint to send the events to. This must be a valid HTTPS endpoint.
  */
  Endpoint: string;
  /**
  * If false, the endpoint will also send `null` values. Preferred is true.
  */
  IgnoreNullValues?: boolean;
  /**
  * A name to identify the configuration.
  */
  Name: string;
  /**
  * The status of the configuration.
  */
  Status?: DataModelsEndpointConfigurationStatus;
  /**
  * Timeout after which requests are cancelled. Defaults to 5 seconds. Not recommended to change.
  */
  TimeoutSeconds?: number;
  /**
  * If true, the endpoint will use string IDs instead of long IDs.
  */
  UseStringIDs?: boolean;
}

export interface CreateEndpointConfigurationResponse extends ResponseMessage {
  /**
  * Entity type: EndpointConfiguration
  */
  ID: number;
  /**
  * Make sure to store this information, this is the only time EVA will expose it for you!
  */
  SecretKey1: string;
  /**
  * Make sure to store this information, this is the only time EVA will expose it for you!
  */
  SecretKey2: string;
}

/**
* Service for deleting a existing `EndpointConfiguration`
*/
export interface DeleteEndpointConfiguration extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: EndpointConfiguration
  */
  ID: number;
}

export interface EndpointConfigurationsEndpointConfigurationAuthorizationModel {
  /**
  * This will yield a basic authorization header with this password - combine with `BasicUsername`.
  */
  BasicPassword?: string;
  /**
  * This will yield a basic authorization header with this username - combine with `BasicPassword`.
  */
  BasicUsername?: string;
  /**
  * Configuration for Mutual TLS (mTLS)
  */
  ClientCertificate?: EndpointConfigurationsEndpointConfigurationCertificateModel;
  /**
  * This will result in an authorization header that looks like: `Authorization: Bearer TOKEN`
  */
  StaticBearerToken?: string;
  /**
  * This will result in an authorization header that looks like: `Authorization: TOKEN`. Use this only when the other options are not sufficient.
  */
  StaticUnschemedToken?: string;
}

export interface EndpointConfigurationsEndpointConfigurationAuthorizationUpdateModel {
  /**
  * This will yield a basic authorization header with this password - combine with `BasicUsername`.
  */
  BasicPassword?: string | null;
  /**
  * This will yield a basic authorization header with this username - combine with `BasicPassword`.
  */
  BasicUsername?: string | null;
  /**
  * Configuration for Mutual TLS (mTLS)
  */
  ClientCertificate?: EndpointConfigurationsEndpointConfigurationCertificateUpdateModel;
  /**
  * This will result in an authorization header that looks like: `Authorization: Bearer TOKEN`
  */
  StaticBearerToken?: string | null;
  /**
  * This will result in an authorization header that looks like: `Authorization: TOKEN`. Use this only when the other options are not sufficient.
  */
  StaticUnschemedToken?: string | null;
}

export interface EndpointConfigurationsEndpointConfigurationCertificateModel {
  /**
  * A client certificate that can be used for mTLS. Must be X509 in PKCS12 format. Also, it must not be expired, have a private key and have clientAuth in it's extended key usage.
  */
  Certificate: string;
  /**
  * The password that is used to encrypt the certificate.
  */
  Password?: string;
}

export interface EndpointConfigurationsEndpointConfigurationCertificateUpdateModel {
  /**
  * A client certificate that can be used for mTLS. Must be X509 in PKCS12 format. Also, it must not be expired, have a private key and have clientAuth in it's extended key usage.
  */
  Certificate?: string;
  /**
  * The password that is used to encrypt the certificate.
  */
  Password?: string | null;
}

export interface EndpointConfigurationsEndpointConfigurationModel {
  Authorization?: EndpointConfigurationsEndpointConfigurationAuthorizationModel;
  BackendID?: string;
  Endpoint: string;
  ErrorReason?: string;
  /**
  * Entity type: EndpointConfiguration
  */
  ID: number;
  IgnoreNullValues: boolean;
  LastAccessTime?: string;
  Name: string;
  SecretKey1: string;
  SecretKey2: string;
  Status: DataModelsEndpointConfigurationStatus;
  TimeoutInSeconds?: number;
  UseStringIDs: boolean;
}

/**
* Service for retrieving an existing `EndpointConfiguration`.
*/
export interface GetEndpointConfiguration extends RequestMessage<GetEndpointConfigurationResponse> {
  /**
  * Entity type: EndpointConfiguration
  */
  ID: number;
}

export interface GetEndpointConfigurationResponse extends ResponseMessage {
  Result: EndpointConfigurationsEndpointConfigurationModel;
}

/**
* Service for retrieving a list of existing `EndpointConfiguration`'s
*/
export interface GetEndpointConfigurations extends RequestMessage<GetEndpointConfigurationsResponse> {
}

export interface GetEndpointConfigurationsResponse extends ResponseMessage {
  Items: EndpointConfigurationsEndpointConfigurationModel[];
}

/**
* Service for generating a new SecretKey for an `EndpointConfiguration`.
* 
* - Make sure to catch & store the `SecretKey1` or `SecretKey2`, as there will be no other way of retrieving them after this service call!
*/
export interface RotateEndpointConfigurationKey extends RequestMessage<RotateEndpointConfigurationKeyResponse> {
  /**
  * Entity type: EndpointConfiguration
  */
  ID: number;
  KeyID?: number;
}

export interface RotateEndpointConfigurationKeyResponse extends ResponseMessage {
  SecretKey1?: string;
  SecretKey2?: string;
}

/**
* Sends a test request to an `EndpointConfiguration` to verify connectivity, authentication, and signing.
*/
export interface TestEndpointConfiguration extends RequestMessage<TestEndpointConfigurationResponse> {
  /**
  * Entity type: EndpointConfiguration
  */
  ID: number;
}

export interface TestEndpointConfigurationResponse extends ResponseMessage {
  ErrorMessage?: string;
  ResponseBody?: string;
  StatusCode: number;
  Success: boolean;
}

/**
* Service for updating a existing `EndpointConfiguration`
*/
export interface UpdateEndpointConfiguration extends RequestMessageWithEmptyResponse {
  /**
  * Authorization configuration used when calling this endpoint.
  */
  Authorization?: EndpointConfigurationsEndpointConfigurationAuthorizationUpdateModel;
  BackendID?: string | null;
  Endpoint?: string;
  /**
  * Entity type: EndpointConfiguration
  */
  ID: number;
  /**
  * If false, the endpoint will also send `null` values. Default and preferred is true.
  */
  IgnoreNullValues?: boolean;
  Name?: string;
  Status?: DataModelsEndpointConfigurationStatus;
  /**
  * Timeout after which requests are cancelled. Defaults to 5 seconds. Not recommended to change.
  */
  TimeoutInSeconds?: number | null;
  /**
  * If true, the endpoint will use string IDs instead of long IDs.
  */
  UseStringIDs?: boolean;
}

/**
* Create a new entity field validator
*/
export interface CreateEntityFieldValidator extends RequestMessage<CreateEntityFieldValidatorResponse> {
  ApplyFor?: DataModelsEntityFieldValidatorUserTypes;
  Entity?: DataModelsEntityFieldValidatorEntityTypes;
  EntityFieldName: string;
  /**
  * This must be of object that inherits the class EntityFieldValidatorBase. For example StringEntityFieldValidator or DefaultEntityFieldValidator
  */
  ValidatorData: EntityFieldValidatorsValidatorsDefaultEntityFieldValidator | EntityFieldValidatorsValidatorsStringEntityFieldValidator | null;
  ValidatorType?: DataModelsEntityFieldValidatorType;
}

export interface CreateEntityFieldValidatorResponse extends ResponseMessage {
  /**
  * Entity type: EntityFieldValidator
  */
  ID: number;
}

/**
* Delete a entity field validator
*/
export interface DeleteEntityFieldValidator extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: EntityFieldValidator
  */
  ID: number;
}

/**
* Get a entity field validator
*/
export interface GetEntityFieldValidator extends RequestMessage<GetEntityFieldValidatorResponse> {
  /**
  * Entity type: EntityFieldValidator
  */
  ID: number;
}

export interface GetEntityFieldValidatorResponse extends ResponseMessage {
  ApplyFor: DataModelsEntityFieldValidatorUserTypes;
  Entity: DataModelsEntityFieldValidatorEntityTypes;
  EntityFieldName?: string;
  ID: number;
  ValidatorData?: EntityFieldValidatorsValidatorsDefaultEntityFieldValidator | EntityFieldValidatorsValidatorsStringEntityFieldValidator;
  ValidatorType: DataModelsEntityFieldValidatorType;
}

/**
* Get all entity field validators for given entity
*/
export interface GetFieldValidatorsForEntity extends RequestMessage<GetFieldValidatorsForEntityResponse> {
  EntityType?: DataModelsEntityFieldValidatorEntityTypes;
}

export interface GetFieldValidatorsForEntityResponse extends ResponseMessage {
  Validators?: EntityFieldValidatorsGetFieldValidatorsForEntityResponse_Validator[];
}

export interface EntityFieldValidatorsGetFieldValidatorsForEntityResponse_Validator {
  EntityFieldName?: string;
  ValidatorData?: EntityFieldValidatorsValidatorsDefaultEntityFieldValidator | EntityFieldValidatorsValidatorsStringEntityFieldValidator;
  ValidatorType: DataModelsEntityFieldValidatorType;
}

/**
* List all entity field validator entities and entity names
*/
export interface ListEntityFieldValidatorEntityFieldNames extends RequestMessage<ListEntityFieldValidatorEntityFieldNamesResponse> {
}

export interface ListEntityFieldValidatorEntityFieldNamesResponse extends ResponseMessage {
  EntityFieldValidatorEntityFields?: EntityFieldValidatorsListEntityFieldValidatorEntityFieldNamesResponse_EntityFieldValidatorEntityField[];
}

export interface EntityFieldValidatorsListEntityFieldValidatorEntityFieldNamesResponse_EntityFieldValidatorEntityField {
  Entity: DataModelsEntityFieldValidatorEntityTypes;
  EntityFieldName?: string;
  Type?: string;
}

/**
* list all entity field validators
*/
export interface ListEntityFieldValidators extends PagedRequestMessage<EntityFieldValidatorsListEntityFieldValidatorsFilter, ListEntityFieldValidatorsResponse> {
}

export interface ListEntityFieldValidatorsResponse extends PagedResponseMessage<EntityFieldValidatorsListEntityFieldValidatorsResponse_ListEntityFieldValidatorItem> {
}

export interface EntityFieldValidatorsListEntityFieldValidatorsResponse_ListEntityFieldValidatorItem {
  ApplyFor: DataModelsEntityFieldValidatorUserTypes;
  Entity: DataModelsEntityFieldValidatorEntityTypes;
  EntityFieldName?: string;
  /**
  * Entity type: EntityFieldValidator
  */
  ID: number;
  ValidatorData?: EntityFieldValidatorsValidatorsDefaultEntityFieldValidator | EntityFieldValidatorsValidatorsStringEntityFieldValidator;
  ValidatorType: DataModelsEntityFieldValidatorType;
}

/**
* Update a entity field validator
*/
export interface UpdateEntityFieldValidator extends RequestMessageWithEmptyResponse {
  ApplyFor?: DataModelsEntityFieldValidatorUserTypes;
  /**
  * Entity type: EntityFieldValidator
  */
  ID: number;
  ValidatorData?: EntityFieldValidatorsValidatorsDefaultEntityFieldValidator | EntityFieldValidatorsValidatorsStringEntityFieldValidator | null;
}

/**
* -
*/
export interface CorrectProductCostPriceLedgers extends RequestMessage<EmptyResponseMessage> {
  Corrections: FIFOCorrectProductCostPriceLedgers_Correction[];
}

export interface FIFOCorrectProductCostPriceLedgers_Correction {
  /**
  * Entity type: ProductCostPriceLedger
  */
  ID: number;
  UnitCost: number;
}

/**
* You can only export up to 100 products at a time.
*/
export interface ExportProductCostPriceLedgerSummary extends RequestMessage<EmptyResponseMessage> {
  EmailAddress?: string;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitIDs?: number[];
  /**
  * Entity type: OrganizationUnitSet
  */
  OrganizationUnitSetIDs?: number[];
  /**
  * Entity type: Product
  */
  ProductIDs?: number[];
  /**
  * Filters to select which products to export. Will be ignored if `ProductIDs` is set. Required if `ProductIDs` is not set.
  */
  ProductSearchFilters?: Record<string,SearchFilterModel>;
  SplitUnitCost?: boolean;
}

/**
* This service lets you view the ProductCostPriceLedger, optionally filtered by ProductID/OrganizationUnitID and others.
* 
* The ProductCostPriceLedger is used to determine the cost prices of stock for OrganizationUnits that use CostPriceCalculationMethod = Fifo.
* 
* For those OrganizationUnits, whenever stock is received in them, a record is stored in the ProductCostPriceLedger noting the quantity and the purchase price of that stock and then whenever
* stock is reduced this ledger is consulted in a first-in-first-out manner to determine the cost price of that stock mutation. This service gives you insight into that ledger.
*/
export interface ListProductCostPriceLedger extends PagedRequestMessage<StockMutationsListProductCostPriceLedgerFilter, ListProductCostPriceLedgerResponse> {
}

export interface ListProductCostPriceLedgerResponse extends PagedResponseMessage<StockMutationsListProductCostPriceLedgerItem> {
}

export interface ListStockMutationUnitCostSourceLedger extends PagedRequestMessage<StockMutationsListStockMutationUnitCostSourceLedgerFilter, ListStockMutationUnitCostSourceLedgerResponse> {
}

export interface ListStockMutationUnitCostSourceLedgerResponse extends PagedResponseMessage<StockMutationsListStockMutationUnitCostSourceLedgerItem> {
}

export interface FinanceCashExpenseTypeOrganizationUnitSet {
  /**
  * Entity type: OrganizationUnitSet
  */
  ID: number;
  Name: string;
}

/**
* Creates a new cash expense type.
* It's not possible to create a cash expense type with a name that is already in use.
* 
* The amount type specifies whether or not this type can be used to also register positive 'expenses' (so: income).
* An example of this might be tips left by a customer.
*/
export interface CreateCashExpenseType extends RequestMessage<CreateCashExpenseTypeResponse> {
  AmountType?: DataModelsCashExpenseAmountTypes;
  BackendID?: string;
  Description?: string;
  /**
  * Entity type: DeviceType
  */
  DeviceTypeID?: number;
  LedgerClassID?: string;
  Name: string;
  /**
  * Entity type: OrganizationUnitSet
  */
  OrganizationUnitSetID?: number;
  /**
  * Entity type: TaxCode
  */
  TaxCodeID?: number;
}

export interface CreateCashExpenseTypeResponse extends ResponseMessage {
  /**
  * Entity type: CashExpenseType
  */
  ID: number;
}

/**
* Deletes a cash expense type.
*/
export interface DeleteCashExpenseType extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: CashExpenseType
  */
  ID: number;
}

/**
* Returns a cash expense type by its ID.
*/
export interface GetCashExpenseTypeByID extends RequestMessage<GetCashExpenseTypeByIDResponse> {
  /**
  * Entity type: CashExpenseType
  */
  ID: number;
}

export interface GetCashExpenseTypeByIDResponse extends ResponseMessage {
  AmountType: DataModelsCashExpenseAmountTypes;
  BackendID?: string;
  Description?: string;
  DeviceType?: EVAFrameworkAPIFlagsEnumDto;
  /**
  * Entity type: DeviceType
  */
  DeviceTypeID?: number;
  /**
  * Entity type: CashExpenseType
  */
  ID: number;
  LedgerClassID?: string;
  Name: string;
  OrganizationUnitSet?: FinanceCashExpenseTypeOrganizationUnitSet;
  /**
  * Entity type: TaxCode
  */
  TaxCodeID?: number;
  TaxCodeName?: string;
}

/**
* Returns a paged result of all the cash correction reasons.
*/
export interface ListCashCorrectionReasons extends PagedRequestMessage<FinanceCashListCashCorrectionReasonsFilter, ListCashCorrectionReasonsResponse> {
}

export interface ListCashCorrectionReasonsResponse extends PagedResponseMessage<FinanceListCashCorrectionReasonsResponse_Model> {
}

export interface FinanceListCashCorrectionReasonsResponse_Model {
  BackendID?: string;
  /**
  * Entity type: CashCorrectionReason
  */
  ID: number;
  Name: string;
  Sequence: number;
}

/**
* Returns a paged result of all the cash expsense types.
*/
export interface ListCashExpenseTypes extends PagedRequestMessage<FinanceCashListCashExpenseTypesFilter, ListCashExpenseTypesResponse> {
}

export interface ListCashExpenseTypesResponse extends PagedResponseMessage<FinanceListCashExpenseTypesResponse_Model> {
}

export interface FinanceListCashExpenseTypesResponse_Model {
  AmountType: DataModelsCashExpenseAmountTypes;
  BackendID?: string;
  Description?: string;
  DeviceType?: EVAFrameworkAPIFlagsEnumDto;
  /**
  * Entity type: DeviceType
  */
  DeviceTypeID?: number;
  /**
  * Entity type: CashExpenseType
  */
  ID: number;
  LedgerClassID?: string;
  Name: string;
  OrganizationUnitSet?: FinanceCashExpenseTypeOrganizationUnitSet;
  /**
  * Entity type: TaxCode
  */
  TaxCodeID?: number;
  TaxCodeName?: string;
}

/**
* List the ExchangeRates
*/
export interface ListExchangeRates extends FilteredPagedResultRequest<ExchangeRatesListExchangeRatesFilter, ListExchangeRatesResponse> {
}

export interface ListExchangeRatesResponse extends PagedResultResponse<FinanceListExchangeRatesResponse_ExchangeRateDto> {
}

export interface FinanceListExchangeRatesResponse_ExchangeRateDto {
  /**
  * Entity type: Currency
  */
  BaseCurrencyID: string;
  /**
  * Entity type: Currency
  */
  CurrencyID: string;
  ExchangeRate: number;
  /**
  * Entity type: Currency
  */
  FromCurrencyID?: string;
  /**
  * Entity type: ExchangeRate
  */
  ID: number;
  /**
  * Entity type: Currency
  */
  ToCurrencyID?: string;
}

/**
* Updates a cash expense type. All properties except for its Name can be updated.
*/
export interface UpdateCashExpenseType extends RequestMessageWithEmptyResponse {
  AmountType?: DataModelsCashExpenseAmountTypes;
  BackendID?: string;
  Description?: string;
  /**
  * Entity type: DeviceType
  */
  DeviceTypeID?: number | null;
  /**
  * Entity type: CashExpenseType
  */
  ID: number;
  LedgerClassID?: string;
  Name?: string;
  /**
  * Entity type: OrganizationUnitSet
  */
  OrganizationUnitSetID?: number;
  /**
  * Entity type: TaxCode
  */
  TaxCodeID?: number;
}

/**
* Create a new GiftCardConfiguration
*/
export interface CreateGiftCardConfiguration extends RequestMessage<CreateGiftCardConfigurationResponse> {
  AllowCurrencyConversion?: boolean;
  AllowMultipleCardsPayment?: boolean;
  AllowRefundWithoutTransaction?: boolean;
  AllowRefunds?: boolean;
  /**
  * Regular expression pattern to validate card numbers (e.g., '^6064' requires gift card numbers starting with 6064)
  */
  CardNumberValidationRegex?: string;
  /**
  * Some gift card handlers are able to handle multiple types of cards. With this property you can set the card the handler should work with.
  */
  CardType?: string;
  Data?: GiftCardsNoGiftCardData | DiscountsDiscountGiftCardData;
  Handler: 'Discount' | 'AdyenStoredValue' | 'APIGIFTCARD' | 'EPAY' | 'FASHIONCHEQUE' | 'INTERSOLVE';
  Name: string;
  PinRequirement?: GiftCardsConfigurationGiftCardPinRequirement;
  UsageType?: GiftCardsConfigurationGiftCardConfigurationUsageTypes;
}

export interface CreateGiftCardConfigurationResponse extends ResponseMessage {
  /**
  * Entity type: GiftCardConfiguration
  */
  ID: number;
}

/**
* Create a new ProductGiftCard
*/
export interface CreateProductGiftCard extends RequestMessage<CreateProductGiftCardResponse> {
  /**
  * Some gift card handlers are able to handle multiple types of cards. With this property you can set the card the handler should work with.
  */
  CardType?: string;
  /**
  * Communication options for digital giftcards
  */
  CommunicationOptions?: GiftCardsConfigurationProductGiftCardCommunicationOptions;
  Data?: TAnyValue;
  /**
  * Entity type: GiftCardConfiguration
  */
  GiftCardConfigurationID?: number;
  Handler?: string;
  IsDigital?: boolean;
  IsReturnable?: boolean;
  /**
  * Entity type: Product
  */
  ProductID: number;
  Type?: string;
}

export interface CreateProductGiftCardResponse extends ResponseMessage {
  /**
  * Entity type: ProductGiftCard
  */
  ID: number;
}

/**
* Delete a GiftCardConfiguration
*/
export interface DeleteGiftCardConfiguration extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: GiftCardConfiguration
  */
  ID: number;
}

/**
* Delete a ProductGiftCard
*/
export interface DeleteProductGiftCard extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: ProductGiftCard
  */
  ID: number;
}

/**
* Get a single GiftCardConfiguration
*/
export interface GetGiftCardConfiguration extends RequestMessage<GetGiftCardConfigurationResponse> {
  /**
  * Entity type: GiftCardConfiguration
  */
  ID: number;
}

export interface GetGiftCardConfigurationResponse extends ResponseMessage {
  AllowCurrencyConversion: boolean;
  AllowMultipleCardsPayment: boolean;
  AllowRefundWithoutTransaction: boolean;
  AllowRefunds: boolean;
  /**
  * Regular expression pattern to validate card numbers (e.g., '^6064' requires gift card numbers starting with 6064)
  */
  CardNumberValidationRegex?: string;
  /**
  * Some gift card handlers are able to handle multiple types of cards. With this property you can set the card the handler should work with.
  */
  CardType?: string;
  Data?: GiftCardsNoGiftCardData | DiscountsDiscountGiftCardData;
  Handler: 'Discount' | 'AdyenStoredValue' | 'APIGIFTCARD' | 'EPAY' | 'FASHIONCHEQUE' | 'INTERSOLVE';
  Name: string;
  PinRequirement: GiftCardsConfigurationGiftCardPinRequirement;
  UsageType: GiftCardsConfigurationGiftCardConfigurationUsageTypes;
}

/**
* Returns available handlers for gift card configurations
*/
export interface GetGiftCardHandlers extends RequestMessage<GetGiftCardHandlersResponse> {
}

export interface GetGiftCardHandlersResponse extends ResponseMessage {
  Handlers?: string[];
}

/**
* List the GiftCardConfigurations
* 
* `GiftCardConfiguration`: an item that describes the giftcard properties of a product with type GiftCard
*/
export interface ListGiftCardConfigurations extends PagedRequestMessage<GiftCardsListGiftCardConfigurationsFilter, ListGiftCardConfigurationsResponse> {
}

export interface ListGiftCardConfigurationsResponse extends PagedResponseMessage<GiftCardsListGiftCardConfigurationsResponse_GiftCardConfigurationDto> {
}

export interface GiftCardsListGiftCardConfigurationsResponse_GiftCardConfigurationDto {
  AllowCurrencyConversion: boolean;
  AllowMultipleCardsPayment: boolean;
  AllowRefundWithoutTransaction: boolean;
  AllowRefunds: boolean;
  CardNumberValidationRegex?: string;
  CardType?: string;
  Data?: GiftCardsNoGiftCardData | DiscountsDiscountGiftCardData;
  Handler: 'Discount' | 'AdyenStoredValue' | 'APIGIFTCARD' | 'EPAY' | 'FASHIONCHEQUE' | 'INTERSOLVE';
  /**
  * Entity type: GiftCardConfiguration
  */
  ID: number;
  Name: string;
  PinRequirement: GiftCardsConfigurationGiftCardPinRequirement;
  UsageType: GiftCardsConfigurationGiftCardConfigurationUsageTypes;
}

/**
* List the ProductGiftCards
* 
* `ProductGiftCard`: an item that describes the giftcard properties of a product with type GiftCard
*/
export interface ListProductGiftCards extends RequestMessage<ListProductGiftCardsResponse> {
  /**
  * Entity type: ProductPropertyType
  */
  IncludedProductProperties?: string[];
  PageConfig?: PageConfig<GiftCardsListProductGiftCardsFilter>;
}

export interface ListProductGiftCardsResponse extends PagedResultResponse<GiftCardsListProductGiftCardsResponse_ProductGiftCardDto> {
}

export interface GiftCardsListProductGiftCardsResponse_ProductGiftCardDto {
  CardType?: string;
  /**
  * Communication options for digital giftcards
  */
  CommunicationOptions?: GiftCardsConfigurationProductGiftCardCommunicationOptions;
  Data?: TAnyValue;
  /**
  * Entity type: GiftCardConfiguration
  */
  GiftCardConfigurationID?: number;
  GiftCardConfigurationName?: string;
  Handler?: string;
  /**
  * Entity type: ProductGiftCard
  */
  ID: number;
  IsDigital: boolean;
  IsReturnable: boolean;
  Product?: SearchIProductSearchItem;
  /**
  * Entity type: Product
  */
  ProductID: number;
  ProductName?: string;
  Type?: string;
}

/**
* Update an existing GiftCardConfiguration
*/
export interface UpdateGiftCardConfiguration extends RequestMessageWithEmptyResponse {
  AllowCurrencyConversion?: boolean;
  AllowMultipleCardsPayment?: boolean;
  AllowRefundWithoutTransaction?: boolean;
  AllowRefunds?: boolean;
  /**
  * Regular expression pattern to validate card numbers (e.g., '^6064' requires gift card numbers starting with 6064)
  */
  CardNumberValidationRegex?: string | null;
  /**
  * Some gift card handlers are able to handle multiple types of cards. With this property you can set the card the handler should work with.
  */
  CardType?: string | null;
  Data?: GiftCardsNoGiftCardData | DiscountsDiscountGiftCardData | null;
  Handler?: 'Discount' | 'AdyenStoredValue' | 'APIGIFTCARD' | 'EPAY' | 'FASHIONCHEQUE' | 'INTERSOLVE';
  /**
  * Entity type: GiftCardConfiguration
  */
  ID: number;
  Name?: string;
  PinRequirement?: GiftCardsConfigurationGiftCardPinRequirement;
  UsageType?: GiftCardsConfigurationGiftCardConfigurationUsageTypes;
}

/**
* Update an existing ProductGiftCard
*/
export interface UpdateProductGiftCard extends RequestMessageWithEmptyResponse {
  /**
  * Some gift card handlers are able to handle multiple types of cards. With this property you can set the card the handler should work with.
  */
  CardType?: string | null;
  /**
  * Communication options for digital giftcards
  */
  CommunicationOptions?: GiftCardsConfigurationProductGiftCardCommunicationOptions;
  Data?: TAnyValue | null;
  /**
  * Entity type: GiftCardConfiguration
  */
  GiftCardConfigurationID?: number | null;
  Handler?: string | null;
  /**
  * Entity type: ProductGiftCard
  */
  ID: number;
  IsDigital?: boolean;
  IsReturnable?: boolean;
  /**
  * Entity type: Product
  */
  ProductID?: number;
  Type?: string;
}

/**
* Create a new ClientApplication.
*/
export interface CreateClientApplication extends RequestMessage<CreateClientApplicationResponse> {
  /**
  * Identifier of the client application, BundleID in case of iOS apps
  */
  BackendID: string;
  Name: string;
  NotificationConfiguration?: string;
  Type?: DataModelsClientApplicationType;
}

export interface CreateClientApplicationResponse extends ResponseMessage {
  /**
  * Entity type: ClientApplication
  */
  ID: number;
}

/**
* Create a new device
*/
export interface CreateDevice extends RequestMessage<CreateDeviceResponse> {
  Address?: string;
  AssemblyName?: string;
  BackendID?: string;
  Data?: DevicesThermalPrinterDeviceTypeData | DevicesFiscalThermalPrinterDeviceTypeData | DevicesPinDeviceTypeData | DevicesSafeDeviceTypeData | DevicesWatchtowerDeviceTypeData;
  Name: string;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID?: number;
  /**
  * Entity type: PrinterType
  */
  PrinterTypeID?: number;
  ProxyAddress?: string;
  /**
  * Entity type: Station
  */
  StationID?: number;
  /**
  * Entity type: DeviceType
  */
  TypeID?: number;
}

export interface CreateDeviceResponse extends ResponseMessage {
  /**
  * Entity type: Device
  */
  ID: number;
}

/**
* Creates a new OpenCashDrawerReason. Name and Description can both be localized through the LocalizeOpenCashDrawerReason service later.
*/
export interface CreateOpenCashDrawerReason extends RequestMessage<CreateOpenCashDrawerReasonResponse> {
  Description?: string;
  Name: string;
}

export interface CreateOpenCashDrawerReasonResponse extends ResponseMessage {
  /**
  * Entity type: OpenCashDrawerReason
  */
  ID: number;
}

/**
* Create a new station for an OrganizationUnit.
*/
export interface CreateStation extends RequestMessage<CreateStationResponse> {
  BackendID?: string;
  /**
  * Optional additional custom fields
  */
  CustomFields?: DataModelsCustomFieldKeyValue[];
  /**
  * Special identifier for fiscalized stations, some certifications require this
  */
  FiscalSystemID?: string;
  /**
  * Used to differentiate between fiscalized stations and other (e.g. safes) devices
  */
  IsPointOfSale?: boolean;
  Name?: string;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID?: number;
  ToCreate?: InfrastructureCreateStation_StationToCreate;
}

export interface InfrastructureCreateStation_StationToCreate {
  BackendID?: string;
  /**
  * Optional additional custom fields
  */
  CustomFields?: DataModelsCustomFieldKeyValue[];
  /**
  * Special identifier for fiscalized stations, some certifications require this
  */
  FiscalSystemID?: string;
  /**
  * Used to differentiate between fiscalized stations and other (e.g. safes) devices
  */
  IsPointOfSale?: boolean;
  Name: string;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID: number;
}

export interface CreateStationResponse extends ResponseMessage {
  /**
  * Entity type: Station
  */
  ID: number;
}

/**
* Delete a ClientApplication
*/
export interface DeleteClientApplication extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: ClientApplication
  */
  ID: number;
}

/**
* Delete a device
*/
export interface DeleteDevice extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: Device
  */
  ID: number;
}

/**
* Deletes an OpenCashDrawerReason
*/
export interface DeleteOpenCashDrawerReason extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: OpenCashDrawerReason
  */
  ID: number;
}

/**
* Delete a station
*/
export interface DeleteStation extends RequestMessage<DeleteStationResponse> {
  /**
  * Entity type: Station
  */
  ID: number;
}

export interface DeleteStationResponse extends ResponseMessage {
  IsRequested: boolean;
}

/**
* Get the configuration required to set up a CustomerFacingDisplay.
*/
export interface GetCFDConfiguration extends RequestMessage<GetCFDConfigurationResponse> {
  GlobalID: string;
}

export interface GetCFDConfigurationResponse extends ResponseMessage {
  CloudEndpoint: string;
  /**
  * Entity type: Country
  */
  CountryID: string;
  GlobalID: string;
  /**
  * Entity type: Device
  */
  ID: number;
  /**
  * Entity type: Language
  */
  LanguageID?: string;
  LiveGuardEndpoint?: string;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID?: number;
  /**
  * Entity type: Station
  */
  StationID?: number;
}

/**
* Gets an ClientApplication by its ID
*/
export interface GetClientApplicationByID extends RequestMessage<GetClientApplicationByIDResponse> {
  /**
  * Entity type: ClientApplication
  */
  ID: number;
}

export interface GetClientApplicationByIDResponse extends ResponseMessage {
  /**
  * Identifier of the client application, BundleID in case of iOS apps
  */
  BackendID: string;
  Name: string;
  NotificationConfiguration?: string;
  Type: DataModelsClientApplicationType;
}

/**
* Get a qrcode to configure/enroll a device when available.
* 
* At this moment the supported DeviceTypes are:
*  - CustomerDisplay
*/
export interface GetConfigurationQrForDevice extends RequestMessage<GetConfigurationQrForDeviceResponse> {
  /**
  * Entity type: Device
  */
  DeviceID: number;
  UseBase64?: boolean;
}

export interface GetConfigurationQrForDeviceResponse extends ResponseMessage {
  QrData?: string;
}

/**
* List ClientApplications. Returns a paged response.
*/
export interface ListClientApplications extends FilteredPagedResultRequest<NotificationsListClientApplicationsFilter, ListClientApplicationsResponse> {
}

export interface ListClientApplicationsResponse extends PagedResultResponse<InfrastructureListClientApplicationsResponse_ClientApplicationDto> {
}

export interface InfrastructureListClientApplicationsResponse_ClientApplicationDto {
  /**
  * Identifier of the client application, BundleID in case of iOS apps
  */
  BackendID: string;
  /**
  * Entity type: ClientApplication
  */
  ID: number;
  Name: string;
  Type: DataModelsClientApplicationType;
}

/**
* Creates a localized Name and Description for the OpenCashDrawerReason.
* Language is required, Country is optional.
*/
export interface LocalizeOpenCashDrawerReason extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: Country
  */
  CountryID?: string;
  Description?: string;
  /**
  * Entity type: OpenCashDrawerReason
  */
  ID: number;
  /**
  * Entity type: Language
  */
  LanguageID?: string;
  Name?: string;
}

/**
* Print a qrcode on a thermal receipt.
* 
* It's required to select a Station, this can be done by providing the `EVA-StationID` header, or by setting the StationID property.
* 
* Also the MessageTemplate `QRCodePrintingTemplate` can be configured in Stencil.
*/
export interface PrintQRCode extends RequestMessageWithEmptyResponse {
  QRData: string;
  /**
  * Entity type: Station
  * Only required when not providing the Station in the header
  */
  StationID?: number;
}

/**
* Update an existing ClientApplication.
*/
export interface UpdateClientApplication extends RequestMessageWithEmptyResponse {
  /**
  * Identifier of the client application, BundleID in case of iOS apps
  */
  BackendID?: string;
  /**
  * Entity type: ClientApplication
  */
  ID: number;
  Name?: string;
  NotificationConfiguration?: string | null;
  Type?: DataModelsClientApplicationType;
}

/**
* Updates a device
*/
export interface UpdateDevice extends RequestMessageWithEmptyResponse {
  Address?: string | null;
  AssemblyName?: string | null;
  BackendID?: string | null;
  Data?: DevicesThermalPrinterDeviceTypeData | DevicesFiscalThermalPrinterDeviceTypeData | DevicesPinDeviceTypeData | DevicesSafeDeviceTypeData | DevicesWatchtowerDeviceTypeData | null;
  /**
  * Entity type: Device
  */
  ID: number;
  Name?: string;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID?: number | null;
  /**
  * Entity type: PrinterType
  */
  PrinterTypeID?: number | null;
  ProxyAddress?: string | null;
  /**
  * Entity type: Station
  */
  StationID?: number | null;
  /**
  * Entity type: DeviceType
  */
  TypeID?: number;
}

/**
* Updates an existing OpenCashDrawerReason with a new Name and Description.
*/
export interface UpdateOpenCashDrawerReason extends RequestMessageWithEmptyResponse {
  Description?: string;
  /**
  * Entity type: OpenCashDrawerReason
  */
  ID: number;
  Name: string;
}

/**
* Updates a station.
*/
export interface UpdateStation extends RequestMessageWithEmptyResponse {
  BackendID?: string | null;
  /**
  * Optional additional custom fields
  */
  CustomFields?: DataModelsCustomFieldKeyValue[] | null;
  /**
  * Entity type: Station
  */
  ID: number;
  Name?: string;
}

/**
* Creates a new inquiry
*/
export interface CreateInquiry extends RequestMessage<CreateInquiryResponse> {
  Description?: string;
  Items?: InquiriesCreateInquiry_ItemData[];
  Name: string;
  OneTimeUseOnly?: boolean;
  PromptUser?: boolean;
  /**
  * Entity type: Script
  */
  ScriptID?: number;
}

export interface InquiriesCreateInquiry_ItemData {
  /**
  * Entity type: CustomField
  */
  CustomFieldID: number;
  Description?: string;
  IsRequired?: boolean;
  Name: string;
  Sequence?: number;
}

/**
* Creates an inquiry item
*/
export interface CreateInquiryItem extends RequestMessage<CreateInquiryItemResponse> {
  /**
  * Entity type: CustomField
  */
  CustomFieldID: number;
  Description?: string;
  /**
  * Entity type: Inquiry
  */
  InquiryID: number;
  IsRequired?: boolean;
  Name: string;
  Position?: number;
  Sequence?: number;
}

export interface CreateInquiryItemResponse extends ResponseMessage {
  /**
  * Entity type: InquiryItem
  */
  ID: number;
}

export interface CreateInquiryResponse extends ResponseMessage {
  /**
  * Entity type: Inquiry
  */
  ID: number;
}

/**
* Delete an inquiry
*/
export interface DeleteInquiry extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: Inquiry
  */
  ID: number;
}

/**
* Deletes an inquiry item
*/
export interface DeleteInquiryItem extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: InquiryItem
  */
  ID: number;
}

export interface InquiriesInquiryData {
  Description?: string;
  /**
  * Entity type: Inquiry
  */
  ID: number;
  Name: string;
}

/**
* List the inquiries
*/
export interface ListInquiries extends PagedRequestMessage<InquiriesListInquiriesFilter, ListInquiriesResponse> {
}

export interface ListInquiriesResponse extends PagedResponseMessage<InquiriesInquiryData> {
}

/**
* Update an inquiry
*/
export interface UpdateInquiry extends RequestMessageWithEmptyResponse {
  Description?: string | null;
  /**
  * Entity type: Inquiry
  */
  ID: number;
  Name?: string;
  OneTimeUseOnly?: boolean;
  PromptUser?: boolean;
  /**
  * Entity type: Script
  */
  ScriptID?: number | null;
}

/**
* Updates an inquiry item
*/
export interface UpdateInquiryItem extends RequestMessageWithEmptyResponse {
  Description?: string | null;
  /**
  * Entity type: InquiryItem
  */
  ID: number;
  IsRequired?: boolean;
  Name?: string;
  Position?: number;
  Sequence?: number;
}

/**
* Get the predefined LedgerClasses, in most services it is allowed to use other classes.
*/
export interface GetLedgerClasses extends RequestMessage<GetLedgerClassesResponse> {
}

export interface GetLedgerClassesResponse extends ResponseMessage {
  LedgerClasses?: string[];
}

/**
* Add a price list to a loyalty program. NOTE THAT you can only add one pricelist per currency to a loyalty program.
*/
export interface AddLoyaltyProgramPriceList extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: LoyaltyProgram
  */
  LoyaltyProgramID: number;
  /**
  * Entity type: PriceList
  */
  PriceListID: number;
}

/**
* Add a custom field requirement to the loyalty program. NOTE THAT a custom field can only be set once as a requirement.
*/
export interface AddLoyaltyProgramRequiredCustomField extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: CustomField
  */
  CustomFieldID: number;
  /**
  * Entity type: LoyaltyProgram
  */
  LoyaltyProgramID: number;
}

/**
* Archive a point awarding rule
*/
export interface ArchivePointAwardingRule extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: PointAwardingRule
  */
  ID: number;
}

/**
* Assign a badge to a user
*/
export interface AssignLoyaltyProgramBadge extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: LoyaltyProgramBadge
  */
  BadgeID: number;
  /**
  * Entity type: LoyaltyProgram
  */
  LoyaltyProgramID: number;
  /**
  * Entity type: User
  */
  UserID: number;
}

/**
* Attach a loyalty program to an order
*/
export interface AttachLoyaltyProgramToOrder extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: LoyaltyProgram
  */
  LoyaltyProgramID: number;
  /**
  * Entity type: Order
  */
  OrderID: number;
  /**
  * Entity type: User
  */
  UserID?: number;
  /**
  * When set, the UserID will also become required so we can verify the UserIdentifier.
  */
  UserIdentifier?: string;
}

/**
* Forces recalculation of the loyalty point balance and tier for a user in a loyalty program.
*/
export interface CalculateUserTier extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: LoyaltyProgram
  */
  LoyaltyProgramID: number;
  /**
  * Entity type: User
  */
  UserID: number;
}

/**
* Claim a loyalty program tier benefit to a user
*/
export interface ClaimLoyaltyProgramTierBenefit extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: LoyaltyProgram
  */
  LoyaltyProgramID: number;
  /**
  * Entity type: LoyaltyProgramBenefit
  */
  TierBenefitID: number;
  /**
  * Entity type: User
  */
  UserID: number;
}

/**
* Create a new LoyaltyProgram
*/
export interface CreateLoyaltyProgram extends RequestMessage<CreateLoyaltyProgramResponse> {
  /**
  * Indicates if the subscription can be unsubscribed and if so, who can do the unsubscribe.
  */
  AllowUnsubscribeBy?: DataModelsAllowUnsubscribeByType;
  ApplyManuallyOnly?: boolean;
  /**
  * When true, if a non anonymous customer is attached to the order they will be automatically subscribed on finishing the order.
  * When false, the customer will not be subscribed.
  * 
  * This is ignore when`RequiresSubscribedCustomer` or `RequiresSubscriptionValidation` is set to true.
  */
  AutoSubscribeCustomer?: boolean;
  BackendID?: string;
  BenefitReloadPolicy?: DataModelsBenefitReloadPolicy;
  /**
  * Entity type: Currency
  */
  BudgetCurrencyID?: string;
  /**
  * Entity type: Company
  * Attaches the loyalty program to a consumer company.
  */
  CompanyID?: number;
  CustomFields?: DataModelsCustomFieldKeyValue[];
  Data?: TAnyValue;
  Description?: string;
  EndDate?: string;
  Handler: string;
  ImageBlobID?: string;
  LoyaltyPointUsageOptions?: DataModelsLoyaltyPointUsageOptions;
  /**
  * Entity type: LoyaltyProgramGroup
  */
  LoyaltyProgramGroupID?: number;
  Name: string;
  Options?: DataModelsLoyaltyProgramOptions;
  PointExpirationPolicyData?: LoyaltyEmptyPointPolicyData | LoyaltyCustomPointPolicyData | LoyaltyExpireEndOfYearPointPolicyData | LoyaltyExpireEndOfMonthPointPolicyData | LoyaltyExpireSetDatePointPolicyData;
  PointExpirationPolicyType?: 'DEFAULT' | 'CUSTOM' | 'PENDINGRETURNPERIOD' | 'EXPIREENDOFYEAR' | 'EXPIREENDOFMONTH' | 'EXPIRESETDATE';
  PointNamePlural?: string;
  PointNameSingular?: string;
  PointPendingPolicyData?: LoyaltyEmptyPointPolicyData | LoyaltyCustomPointPolicyData | LoyaltyExpireEndOfYearPointPolicyData | LoyaltyExpireEndOfMonthPointPolicyData | LoyaltyExpireSetDatePointPolicyData;
  PointPendingPolicyType?: 'DEFAULT' | 'CUSTOM' | 'PENDINGRETURNPERIOD' | 'EXPIREENDOFYEAR' | 'EXPIREENDOFMONTH' | 'EXPIRESETDATE';
  ReloadPolicy?: string;
  /**
  * When true, the loyalty program will only be applied when a customer is attached to the order.
  * 
  * When false, the loyalty program can be attached to the order even if there is no customer attached.
  */
  RequireCustomer?: boolean;
  /**
  * When set to true, subscribing the user will require a UserIdentifier to be given.
  * Attention!
  * This value will be used to create a subscription when either `RequiredCustomer` or `AutoSubscribeCustomer` is set to true.
  * When this is not the case on create, this can be introduced on update. This value cannot be changed after it is set in either the create or update.
  */
  RequireManualUserIdentifier?: boolean;
  /**
  * When true, the loyalty program will only be applied when a customer is attached to the order that is already subscribed to the loyalty program.
  * Also, this will make the `RequireCustomer` automatically true and `AutoSubscribeCustomer` false.
  * 
  * When false, the loyalty program can be attached to the order if a customer is attached that isn't already subscribed to the loyalty program.
  */
  RequiresSubscribedCustomer?: boolean;
  /**
  * When true, the order will require that the attached customer on the order will be validated by providing the UserIdentifier in the `AttachBenefitProgramToOrder` service.
  * Also, this will make the `RequireCustomer` and `RequiresSubscribedCustomer` automatically true and `AutoSubscribeCustomer` false.
  * 
  * When false, this validation isn't required.
  */
  RequiresSubscriptionValidation?: boolean;
  /**
  * Handling when a user is unsubscribed and re-subscribes.
  */
  ResubscribeHandling?: DataModelsResubscribeHandlingType;
  StartDate?: string;
  Status?: DataModelsLoyaltyProgramStatus;
  TierPolicyData?: LoyaltyEmptyTierPolicyData | LoyaltyCustomTierPolicyData | LoyaltyFixedDateTierPolicyData;
  TierPolicyType?: 'DEFAULT' | 'CUSTOM' | 'FIXEDDATE';
  Type?: DataModelsProgramType;
  UsageType?: DataModelsLoyaltyProgramUsageTypes;
  UserBudget?: number;
  /**
  * Attention!
  * This value will be used to create a subscription when either `RequiredCustomer` or `AutoSubscribeCustomer` is set to true.
  * When this is not the case on create, this can be introduced on update. This value cannot be changed after it is set in either the create or update.
  */
  UserIdentifierPrefix?: string;
  /**
  * Attention!
  * This value will be used to create a subscription when either `RequiredCustomer` or `AutoSubscribeCustomer` is set to true.
  * When this is not the case on create, this can be introduced on update. This value cannot be changed after it is set in either the create or update.
  */
  UserIdentifierStartNumber?: number;
  /**
  * Attention!
  * This value will be used to create a subscription when either `RequiredCustomer` or `AutoSubscribeCustomer` is set to true.
  * When this is not the case on create, this can be introduced on update. This value cannot be changed after it is set in either the create or update.
  */
  UserIdentifierSuffix?: string;
  UserMaximumUsage?: number;
}

/**
* Create a new LoyaltyProgramBadge
*/
export interface CreateLoyaltyProgramBadge extends RequestMessage<CreateLoyaltyProgramBadgeResponse> {
  BackendID?: string;
  BlobID: string;
  /**
  * Entity type: LoyaltyProgramBadgeCategory
  */
  CategoryID?: number;
  CustomFieldFilter?: DataModelsCustomFieldFilter;
  Description?: string;
  IsManual?: boolean;
  /**
  * Entity type: LoyaltyProgram
  */
  LoyaltyProgramID: number;
  MustMeetAllConditions?: boolean;
  Name: string;
  PointsToAward?: number;
  PointsToReach?: number;
  ProductQuantityToReach?: number;
  /**
  * Entity type: ProductSearchTemplate
  */
  ProductSearchTemplateID?: number;
  UniqueProductsOnly?: boolean;
}

/**
* Create a loyalty program badge category. The category is bound to the given loyalty program and the loyalty program cannot be changed afterwards.
*/
export interface CreateLoyaltyProgramBadgeCategory extends RequestMessage<CreateLoyaltyProgramBadgeCategoryResponse> {
  BackendID?: string;
  Description?: string;
  /**
  * Entity type: LoyaltyProgram
  */
  LoyaltyProgramID: number;
  Name: string;
}

export interface CreateLoyaltyProgramBadgeCategoryResponse extends ResponseMessage {
  /**
  * Entity type: LoyaltyProgramBadgeCategory
  */
  ID: number;
}

/**
* Create a new LoyaltyProgramBadgeCondition
*/
export interface CreateLoyaltyProgramBadgeCondition extends RequestMessage<CreateLoyaltyProgramBadgeConditionResponse> {
  /**
  * Entity type: LoyaltyProgramBadge
  */
  BadgeID: number;
  Data?: LoyaltyBadgesConditionsBadgeConditionData | LoyaltyBadgesConditionsCustomFieldConditionData | LoyaltyBadgesConditionsPointThresholdConditionData | LoyaltyBadgesConditionsBadgeProductConditionData | LoyaltyBadgesConditionsTierConditionData | MiscConditionsCouponOriginatingOrderOrganizationUnitConditionData | MiscConditionsCouponValidityConditionData | MiscConditionsCustomerAgeConditionData | MiscConditionsCustomerConditionData | MiscConditionsLoyaltyBadgeConditionData | MiscConditionsLoyaltyPointsConditionData | MiscConditionsLoyaltyTierConditionData | MiscConditionsMaximumUsePerUserConditionData | MiscConditionsMinimumProductSubscriptionRenewalsConditionData | MiscConditionsOldUserFieldConditionData | MiscConditionsOrderAmountConditionData | MiscConditionsOrderCustomFieldConditionData | MiscConditionsOrderLineCustomFieldConditionData | MiscConditionsOrderPropertiesConditionData | MiscConditionsOrderTypeConditionData | MiscConditionsOrganizationUnitConditionData | MiscConditionsOrganizationUnitTypeConditionData | MiscConditionsProductConditionData | MiscConditionsProductRequirementConditionData | MiscConditionsStockLabelConditionData | MiscConditionsUserCustomFieldConditionData | MiscConditionsUserRoleConditionData | MiscConditionsUserTypeConditionData | EmptyConditionData;
  RequireForVisibility?: boolean;
  Type: 'BADGE' | 'CUSTOMFIELD' | 'POINTTHRESHOLD' | 'PRODUCT' | 'TIER';
}

export interface CreateLoyaltyProgramBadgeConditionResponse extends ResponseMessage {
  /**
  * Entity type: LoyaltyProgramBadgeCondition
  */
  ID: number;
}

export interface CreateLoyaltyProgramBadgeResponse extends ResponseMessage {
  /**
  * Entity type: LoyaltyProgramBadge
  */
  ID: number;
}

/**
* Add a benefit to a loyalty program. LoyaltyProgramTierID is optional; omit for tierless programs.
*/
export interface CreateLoyaltyProgramBenefit extends RequestMessage<CreateLoyaltyProgramBenefitResponse> {
  ApplyDiscountAutomatically?: boolean;
  BlobID?: string;
  CanReload?: boolean;
  CustomFieldFilter?: DataModelsCustomFieldFilter;
  /**
  * Entity type: CustomField
  */
  CustomFieldID?: number;
  Description: string;
  /**
  * Entity type: Discount
  */
  DiscountIDs?: number[];
  IsManualClaimed?: boolean;
  /**
  * Entity type: LoyaltyProgram
  */
  LoyaltyProgramID: number;
  /**
  * Entity type: LoyaltyProgramTier
  */
  LoyaltyProgramTierID?: number;
  MaxUsage?: number;
  PointThreshold?: number;
  Title: string;
  UseCustomFieldAsUsage?: boolean;
}

export interface CreateLoyaltyProgramBenefitResponse extends ResponseMessage {
  /**
  * Entity type: LoyaltyProgramBenefit
  */
  ID: number;
}

/**
* Create a new LoyaltyProgramCondition
*/
export interface CreateLoyaltyProgramCondition extends RequestMessage<CreateLoyaltyProgramConditionResponse> {
  /**
  * Entity type: LoyaltyProgramCondition
  */
  BackendID?: string;
  Data?: LoyaltyBadgesConditionsBadgeConditionData | LoyaltyBadgesConditionsCustomFieldConditionData | LoyaltyBadgesConditionsPointThresholdConditionData | LoyaltyBadgesConditionsBadgeProductConditionData | LoyaltyBadgesConditionsTierConditionData | MiscConditionsCouponOriginatingOrderOrganizationUnitConditionData | MiscConditionsCouponValidityConditionData | MiscConditionsCustomerAgeConditionData | MiscConditionsCustomerConditionData | MiscConditionsLoyaltyBadgeConditionData | MiscConditionsLoyaltyPointsConditionData | MiscConditionsLoyaltyTierConditionData | MiscConditionsMaximumUsePerUserConditionData | MiscConditionsMinimumProductSubscriptionRenewalsConditionData | MiscConditionsOldUserFieldConditionData | MiscConditionsOrderAmountConditionData | MiscConditionsOrderCustomFieldConditionData | MiscConditionsOrderLineCustomFieldConditionData | MiscConditionsOrderPropertiesConditionData | MiscConditionsOrderTypeConditionData | MiscConditionsOrganizationUnitConditionData | MiscConditionsOrganizationUnitTypeConditionData | MiscConditionsProductConditionData | MiscConditionsProductRequirementConditionData | MiscConditionsStockLabelConditionData | MiscConditionsUserCustomFieldConditionData | MiscConditionsUserRoleConditionData | MiscConditionsUserTypeConditionData | EmptyConditionData;
  /**
  * Entity type: LoyaltyProgram
  */
  LoyaltyProgramID: number;
  Type: 'V2:CUSTOMER' | 'V2:ORDERCUSTOMFIELD' | 'V2:ORDERPROPERTIES' | 'V2:ORDERTYPE' | 'V2:USERCUSTOMFIELD';
}

export interface CreateLoyaltyProgramConditionResponse extends ResponseMessage {
  /**
  * Entity type: LoyaltyProgramCondition
  */
  ID: number;
}

/**
* Create a new LoyaltyProgramGroup
*/
export interface CreateLoyaltyProgramGroup extends RequestMessage<CreateLoyaltyProgramGroupResponse> {
  BackendID?: string;
  /**
  * Entity type: Currency
  */
  BudgetCurrencyID?: string;
  EndDate?: string;
  Name: string;
  StartDate?: string;
  Status?: DataModelsLoyaltyProgramStatus;
  TaxExemptionCode?: string;
}

export interface CreateLoyaltyProgramGroupResponse extends ResponseMessage {
  /**
  * Entity type: LoyaltyProgramGroup
  */
  ID: number;
}

/**
* Create a new LoyaltyProgramPass
*/
export interface CreateLoyaltyProgramPass extends RequestMessage<CreateLoyaltyProgramPassResponse> {
  BackendID?: string;
  /**
  * When provided the certificate string is securely stored and no longer exposed.
  */
  CertificateString?: string;
  Description?: string;
  /**
  * Entity type: LoyaltyProgram
  */
  LoyaltyProgramID: number;
  Name: string;
  PassProvider: string;
  PassTypeID: string;
  URL?: string;
}

export interface CreateLoyaltyProgramPassResponse extends ResponseMessage {
  /**
  * Entity type: LoyaltyProgramPass
  */
  ID: number;
}

/**
* Create a new LoyaltyProgramPaymentType
*/
export interface CreateLoyaltyProgramPaymentType extends RequestMessage<CreateLoyaltyProgramPaymentTypeResponse> {
  AllowPartialPayment?: boolean;
  ApplyToPriceList?: boolean;
  BackendID?: string;
  Budget?: number;
  ExcludeFromProgramBudget?: boolean;
  /**
  * Entity type: LoyaltyProgram
  */
  LoyaltyProgramID: number;
  MaximumAmountPerOrder?: number;
  MaximumPercentageOfUserBudgetPerOrder?: number;
  /**
  * Entity type: PaymentType
  */
  PaymentTypeID: number;
  ProductLimitation?: LoyaltyLoyaltyProgramProductLimitationData;
  Required?: boolean;
  Sequence?: number;
  TaxHandling?: DataModelsLoyaltyPaymentTaxHandlingType;
  UserBudget?: number;
  UserBudgetDeduction?: DataModelsUserBudgetDeduction;
  UserMaximumUsage?: number;
}

export interface CreateLoyaltyProgramPaymentTypeResponse extends ResponseMessage {
  /**
  * Entity type: LoyaltyProgramPaymentType
  */
  ID: number;
}

/**
* Create a loyalty program product limitation.
*/
export interface CreateLoyaltyProgramProductLimitation extends RequestMessage<CreateLoyaltyProgramProductLimitationResponse> {
  ApplyToPriceList?: boolean;
  BackendID?: string;
  /**
  * Entity type: LoyaltyProgram
  */
  LoyaltyProgramID: number;
  Name: string;
  ProductLimitation?: LoyaltyLoyaltyProgramProductLimitationData;
}

export interface CreateLoyaltyProgramProductLimitationResponse extends ResponseMessage {
  /**
  * Entity type: LoyaltyProgramProductLimitation
  */
  ID: number;
}

export interface CreateLoyaltyProgramResponse extends ResponseMessage {
  /**
  * Entity type: LoyaltyProgram
  */
  ID: number;
  /**
  * Entity type: Subscription
  */
  SubscriptionID: number;
}

/**
* Create a new LoyaltyProgramTier
*/
export interface CreateLoyaltyProgramTier extends RequestMessage<CreateLoyaltyProgramTierResponse> {
  BackendID?: string;
  ImageBlobUrl?: string;
  /**
  * Only applicable for tiers that are not point based. A default tier is automatically assigned when subscribing to the loyalty program. Cannot be combined with IsHiddenUntilReached.
  */
  IsDefault?: boolean;
  /**
  * If true, the tier will be hidden until the user reaches it. Cannot be combined with IsDefault.
  */
  IsHiddenUntilReached?: boolean;
  /**
  * Entity type: LoyaltyProgram
  */
  LoyaltyProgramID: number;
  Name: string;
  /**
  * If 0, the tier is considered the default tier.
  */
  PointThreshold?: number;
  /**
  * If true, an email will be sent to the user when they are assigned to this tier.
  */
  SendMailOnAssign?: boolean;
}

/**
* Add a benefit to a loyalty program tier.
*/
export interface CreateLoyaltyProgramTierBenefit extends RequestMessage<CreateLoyaltyProgramTierBenefitResponse> {
  ApplyDiscountAutomatically?: boolean;
  BlobID?: string;
  CanReload?: boolean;
  CustomFieldFilter?: DataModelsCustomFieldFilter;
  /**
  * Entity type: CustomField
  */
  CustomFieldID?: number;
  Data?: LoyaltyEmptyBenefitData | LoyaltyAppointmentBenefitData;
  Description: string;
  /**
  * Entity type: Discount
  * Add a discount to a loyalty program tier that will generate a coupon on tier assignation
  */
  DiscountID?: number;
  /**
  * Entity type: Discount
  */
  DiscountIDs?: number[];
  IsManualClaimed?: boolean;
  /**
  * Entity type: LoyaltyProgramTier
  */
  LoyaltyProgramTierID: number;
  MaxUsage?: number;
  PointThreshold?: number;
  Title: string;
  Type?: 'Appointment' | 'AssortmentRule' | 'BackInStockPriority' | 'Discount' | 'Text';
  UseCustomFieldAsUsage?: boolean;
}

export interface CreateLoyaltyProgramTierBenefitResponse extends ResponseMessage {
  /**
  * Entity type: LoyaltyProgramTier
  */
  ID: number;
}

export interface CreateLoyaltyProgramTierResponse extends ResponseMessage {
  /**
  * Entity type: LoyaltyProgramTier
  */
  ID: number;
}

/**
* Create a point awarding rule.
*/
export interface CreatePointAwardingRule extends RequestMessage<CreatePointAwardingRuleResponse> {
  ApplyRecursive?: boolean;
  BackendID?: string;
  Conditions?: LoyaltyCreatePointAwardingRule_Condition[];
  Description?: string;
  DurationInterval?: number;
  DurationType?: LoyaltyDurationType;
  Enabled?: boolean;
  EndDate?: string;
  /**
  * Entity type: LoyaltyProgram
  */
  LoyaltyProgramID: number;
  MarketingDescription?: string;
  Name: string;
  /**
  * Entity type: OrganizationUnitSet
  */
  OrganizationUnitSetID: number;
  PointExpirationPolicyData?: LoyaltyEmptyPointPolicyData | LoyaltyCustomPointPolicyData | LoyaltyExpireEndOfYearPointPolicyData | LoyaltyExpireEndOfMonthPointPolicyData | LoyaltyExpireSetDatePointPolicyData;
  PointExpirationPolicyType?: 'DEFAULT' | 'CUSTOM' | 'PENDINGRETURNPERIOD' | 'EXPIREENDOFYEAR' | 'EXPIREENDOFMONTH' | 'EXPIRESETDATE';
  PointPendingPolicyData?: LoyaltyEmptyPointPolicyData | LoyaltyCustomPointPolicyData | LoyaltyExpireEndOfYearPointPolicyData | LoyaltyExpireEndOfMonthPointPolicyData | LoyaltyExpireSetDatePointPolicyData;
  PointPendingPolicyType?: 'DEFAULT' | 'CUSTOM' | 'PENDINGRETURNPERIOD' | 'EXPIREENDOFYEAR' | 'EXPIREENDOFMONTH' | 'EXPIRESETDATE';
  PointsToAward?: number;
  StartDate: string;
}

export interface LoyaltyCreatePointAwardingRule_Condition {
  BackendID?: string;
  Data?: LoyaltyRulesEmptyPointAwardingConditionData | LoyaltyRulesLoyaltyBadgePointAwardingConditionData | LoyaltyRulesLoyaltyTierPointAwardingConditionData | LoyaltyRulesOrderAmountPointAwardingConditionData | LoyaltyRulesOrderQuantityPointAwardingConditionData | LoyaltyRulesProductPointAwardingConditionData | LoyaltyRulesUserCustomFieldPointAwardingConditionData;
  Type: 'LOYALTYBADGE' | 'LOYALTYTIER' | 'ORDERAMOUNT' | 'ORDERQUANTITY' | 'PRODUCT' | 'USERCUSTOMFIELD';
}

export interface CreatePointAwardingRuleResponse extends ResponseMessage {
  /**
  * Entity type: PointAwardingRule
  */
  ID: number;
}

/**
* Delete a LoyaltyProgram
*/
export interface DeleteLoyaltyProgram extends RequestMessageWithEmptyResponse {
  /**
  * You can provide the property `Force` to force remaining subscribed users to be unsubscribed. Doing so requires ForceDeleteLoyaltyProgram functionality.
  */
  Force?: boolean;
  /**
  * Entity type: LoyaltyProgram
  */
  ID: number;
}

/**
* Delete a LoyaltyProgramBadge
*/
export interface DeleteLoyaltyProgramBadge extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: LoyaltyProgramBadge
  */
  ID: number;
}

/**
* Delete a loyalty program badge category
*/
export interface DeleteLoyaltyProgramBadgeCategory extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: LoyaltyProgramBadgeCategory
  */
  ID: number;
}

/**
* Delete a LoyaltyProgramBadgeCondition
*/
export interface DeleteLoyaltyProgramBadgeCondition extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: LoyaltyProgramBadgeCondition
  */
  ID: number;
}

/**
* Delete a loyalty program benefit.
*/
export interface DeleteLoyaltyProgramBenefit extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: LoyaltyProgramBenefit
  */
  ID: number;
  /**
  * Entity type: LoyaltyProgram
  */
  LoyaltyProgramID: number;
}

/**
* Delete a LoyaltyProgramCondition
*/
export interface DeleteLoyaltyProgramCondition extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: LoyaltyProgramCondition
  */
  ID: number;
}

/**
* Delete the LoyaltyProgramGroup
*/
export interface DeleteLoyaltyProgramGroup extends RequestMessageWithEmptyResponse {
  /**
  * When set to true, all related programs are deleted. When false, the request will fail when there are related programs active.
  */
  Force?: boolean;
  /**
  * Entity type: LoyaltyProgramGroup
  */
  ID: number;
}

/**
* Delete a LoyaltyProgramPass
*/
export interface DeleteLoyaltyProgramPass extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: LoyaltyProgramPass
  */
  ID: number;
}

/**
* Delete a LoyaltyProgramPaymentType
*/
export interface DeleteLoyaltyProgramPaymentType extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: LoyaltyProgramPaymentType
  */
  ID: number;
}

/**
* Delete a loyalty program product limitation.
*/
export interface DeleteLoyaltyProgramProductLimitation extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: LoyaltyProgramProductLimitation
  */
  ID: number;
}

/**
* Delete a LoyaltyProgramTier
*/
export interface DeleteLoyaltyProgramTier extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: LoyaltyProgramTier
  */
  ID: number;
}

/**
* Deposit loyalty points to a user
*/
export interface DepositLoyaltyPoints extends RequestMessage<DepositLoyaltyPointsResponse> {
  /**
  * Apply the point awarding point policies. Can be overridden by PendingTillDate or ExpirationDate.
  */
  ApplyPointAwardingRulePolicies?: boolean;
  /**
  * Apply the program point policies. Ignored when `ApplyPointAwardingRulePolicies` is set to true. Can be overridden by PendingTillDate or ExpirationDate.
  */
  ApplyProgramPointPolicies?: boolean;
  /**
  * Date when the new points will be expired. When null point will not be expired or will following the program or rule policies if indicated.
  */
  ExpirationDate?: string;
  /**
  * Entity type: LoyaltyProgram
  */
  LoyaltyProgramID: number;
  /**
  * Date that indicates till when the points are pending. When null point will not be pending or will following the program or rule policies if indicated.
  */
  PendingTillDate?: string;
  /**
  * Entity type: PointAwardingRule
  * The rule which is connected to this point deposit.
  */
  PointAwardingRuleID?: number;
  Points?: number;
  Remark?: string;
  /**
  * Entity type: User
  */
  UserID: number;
}

export interface DepositLoyaltyPointsResponse extends ResponseMessage {
  TransactionID?: string;
}

/**
* Detach a loyalty program from an order
*/
export interface DetachLoyaltyProgramFromOrder extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: Order
  */
  OrderID: number;
}

/**
* Disable a point awarding rule
*/
export interface DisablePointAwardingRule extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: PointAwardingRule
  */
  ID: number;
}

/**
* Enable a point awarding rule
*/
export interface EnablePointAwardingRule extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: PointAwardingRule
  */
  ID: number;
}

/**
* Get the available point policies
*/
export interface GetLoyaltyPointPolicies extends RequestMessage<GetLoyaltyPointPoliciesResponse> {
}

export interface GetLoyaltyPointPoliciesResponse extends ResponseMessage {
  ExpirationPolicies?: string[];
  PendingPolicies?: string[];
}

/**
* Get a LoyaltyProgram
*/
export interface GetLoyaltyProgram extends RequestMessage<GetLoyaltyProgramResponse> {
  /**
  * Entity type: LoyaltyProgram
  */
  ID: number;
}

/**
* Get a LoyaltyProgramBadge
*/
export interface GetLoyaltyProgramBadge extends RequestMessage<GetLoyaltyProgramBadgeResponse> {
  /**
  * Entity type: LoyaltyProgramBadge
  */
  ID: number;
}

/**
* Get a loyalty program badge category by ID
*/
export interface GetLoyaltyProgramBadgeCategory extends RequestMessage<GetLoyaltyProgramBadgeCategoryResponse> {
  /**
  * Entity type: LoyaltyProgramBadgeCategory
  */
  ID: number;
}

export interface GetLoyaltyProgramBadgeCategoryResponse extends ResponseMessage {
  Result?: LoyaltyLoyaltyProgramBadgeCategoryDto;
}

export interface GetLoyaltyProgramBadgeResponse extends ResponseMessage {
  /**
  * Entity type: LoyaltyProgramBadge
  */
  BackendID?: string;
  Blob?: BlobsBlobDto;
  /**
  * Entity type: LoyaltyProgramBadgeCategory
  */
  CategoryID?: number;
  CategoryName?: string;
  Conditions?: LoyaltyGetLoyaltyProgramBadgeResponse_LoyaltyProgramBadgeConditionDto[];
  Description?: string;
  Filter?: DataModelsCustomFieldFilter;
  /**
  * Entity type: LoyaltyProgramBadge
  */
  ID: number;
  IsManual: boolean;
  /**
  * Entity type: LoyaltyProgram
  */
  LoyaltyProgramID: number;
  MustMeetAllConditions: boolean;
  Name: string;
  PointsToAward?: number;
  PointsToReach?: number;
  ProductQuantityToReach?: number;
  /**
  * Entity type: ProductSearchTemplate
  */
  ProductSearchTemplateID?: number;
  Sequence: number;
  UniqueProductsOnly: boolean;
}

export interface LoyaltyGetLoyaltyProgramBadgeResponse_LoyaltyProgramBadgeConditionDto {
  Data?: LoyaltyBadgesConditionsBadgeConditionData | LoyaltyBadgesConditionsCustomFieldConditionData | LoyaltyBadgesConditionsPointThresholdConditionData | LoyaltyBadgesConditionsBadgeProductConditionData | LoyaltyBadgesConditionsTierConditionData | MiscConditionsCouponOriginatingOrderOrganizationUnitConditionData | MiscConditionsCouponValidityConditionData | MiscConditionsCustomerAgeConditionData | MiscConditionsCustomerConditionData | MiscConditionsLoyaltyBadgeConditionData | MiscConditionsLoyaltyPointsConditionData | MiscConditionsLoyaltyTierConditionData | MiscConditionsMaximumUsePerUserConditionData | MiscConditionsMinimumProductSubscriptionRenewalsConditionData | MiscConditionsOldUserFieldConditionData | MiscConditionsOrderAmountConditionData | MiscConditionsOrderCustomFieldConditionData | MiscConditionsOrderLineCustomFieldConditionData | MiscConditionsOrderPropertiesConditionData | MiscConditionsOrderTypeConditionData | MiscConditionsOrganizationUnitConditionData | MiscConditionsOrganizationUnitTypeConditionData | MiscConditionsProductConditionData | MiscConditionsProductRequirementConditionData | MiscConditionsStockLabelConditionData | MiscConditionsUserCustomFieldConditionData | MiscConditionsUserRoleConditionData | MiscConditionsUserTypeConditionData | EmptyConditionData;
  /**
  * Entity type: LoyaltyProgramBadgeCondition
  */
  ID: number;
  RequireForVisibility: boolean;
  Type?: 'BADGE' | 'CUSTOMFIELD' | 'POINTTHRESHOLD' | 'PRODUCT' | 'TIER';
}

/**
* Get badges summary information for a given loyalty program
*/
export interface GetLoyaltyProgramBadges extends RequestMessage<GetLoyaltyProgramBadgesResponse> {
  /**
  * Entity type: LoyaltyProgram
  */
  LoyaltyProgramID: number;
}

export interface GetLoyaltyProgramBadgesResponse extends ResponseMessage {
  Badges?: LoyaltyGetLoyaltyProgramBadgesResponse_LoyaltyProgramBadgeDto[];
  LoyaltyProgram?: LoyaltyGetLoyaltyProgramBadgesResponse_LoyaltyProgramDto;
}

export interface LoyaltyGetLoyaltyProgramBadgesResponse_LoyaltyProgramBadgeDto {
  /**
  * Entity type: LoyaltyProgramBadgeCategory
  */
  CategoryID?: number;
  CategoryName?: string;
  Description?: string;
  Name?: string;
  PointsToAward?: number;
  Sequence: number;
}

export interface LoyaltyGetLoyaltyProgramBadgesResponse_LoyaltyProgramDto {
  Description?: string;
  Name?: string;
  PointNamePlural?: string;
  PointNameSingular?: string;
}

/**
* Get the available loyalty program benefit types
*/
export interface GetLoyaltyProgramBenefitTypes extends RequestMessage<GetLoyaltyProgramBenefitTypesResponse> {
}

export interface GetLoyaltyProgramBenefitTypesResponse extends ResponseMessage {
  Types?: string[];
}

/**
* Get a LoyaltyProgramCondition
*/
export interface GetLoyaltyProgramCondition extends RequestMessage<GetLoyaltyProgramConditionResponse> {
  /**
  * Entity type: LoyaltyProgramCondition
  */
  ID: number;
}

export interface GetLoyaltyProgramConditionResponse extends ResponseMessage {
  BackendID?: string;
  Data?: LoyaltyBadgesConditionsBadgeConditionData | LoyaltyBadgesConditionsCustomFieldConditionData | LoyaltyBadgesConditionsPointThresholdConditionData | LoyaltyBadgesConditionsBadgeProductConditionData | LoyaltyBadgesConditionsTierConditionData | MiscConditionsCouponOriginatingOrderOrganizationUnitConditionData | MiscConditionsCouponValidityConditionData | MiscConditionsCustomerAgeConditionData | MiscConditionsCustomerConditionData | MiscConditionsLoyaltyBadgeConditionData | MiscConditionsLoyaltyPointsConditionData | MiscConditionsLoyaltyTierConditionData | MiscConditionsMaximumUsePerUserConditionData | MiscConditionsMinimumProductSubscriptionRenewalsConditionData | MiscConditionsOldUserFieldConditionData | MiscConditionsOrderAmountConditionData | MiscConditionsOrderCustomFieldConditionData | MiscConditionsOrderLineCustomFieldConditionData | MiscConditionsOrderPropertiesConditionData | MiscConditionsOrderTypeConditionData | MiscConditionsOrganizationUnitConditionData | MiscConditionsOrganizationUnitTypeConditionData | MiscConditionsProductConditionData | MiscConditionsProductRequirementConditionData | MiscConditionsStockLabelConditionData | MiscConditionsUserCustomFieldConditionData | MiscConditionsUserRoleConditionData | MiscConditionsUserTypeConditionData | EmptyConditionData;
  /**
  * Entity type: LoyaltyProgramCondition
  */
  ID: number;
  /**
  * Entity type: LoyaltyProgram
  */
  LoyaltyProgramID: number;
  Type?: 'V2:CUSTOMER' | 'V2:ORDERCUSTOMFIELD' | 'V2:ORDERPROPERTIES' | 'V2:ORDERTYPE' | 'V2:USERCUSTOMFIELD';
}

/**
* Get a LoyaltyProgramGroup
*/
export interface GetLoyaltyProgramGroup extends RequestMessage<GetLoyaltyProgramGroupResponse> {
  /**
  * Entity type: LoyaltyProgramGroup
  */
  ID: number;
}

export interface GetLoyaltyProgramGroupResponse extends ResponseMessage {
  BackendID?: string;
  Budget?: number;
  /**
  * Entity type: Currency
  */
  BudgetCurrencyID?: string;
  BudgetRemaining?: number;
  BudgetUsagePercentage?: number;
  DeactivateWhenBudgetIsReached: boolean;
  DeactivationReason: DataModelsLoyaltyProgramGroupDeactivationReasons;
  EndDate?: string;
  /**
  * Entity type: LoyaltyProgramGroup
  */
  ID: number;
  Name?: string;
  StartDate?: string;
  Status: DataModelsLoyaltyProgramStatus;
  TaxExemptionCode?: string;
  UsedBudget: number;
}

/**
* Get the available loyalty program handlers
*/
export interface GetLoyaltyProgramHandlers extends RequestMessage<GetLoyaltyProgramHandlersResponse> {
  UsageType?: DataModelsLoyaltyProgramUsageTypes;
}

export interface GetLoyaltyProgramHandlersResponse extends ResponseMessage {
  Handlers?: string[];
}

/**
* Get a LoyaltyProgramPass
*/
export interface GetLoyaltyProgramPass extends RequestMessage<GetLoyaltyProgramPassResponse> {
  /**
  * Entity type: LoyaltyProgramPass
  */
  ID: number;
}

export interface GetLoyaltyProgramPassResponse extends ResponseMessage {
  BackendID?: string;
  Description?: string;
  /**
  * Entity type: LoyaltyProgramPass
  */
  ID: number;
  Name?: string;
  PassProvider?: string;
  PassTypeID?: string;
  URL?: string;
}

/**
* Get a LoyaltyProgramPaymentType
*/
export interface GetLoyaltyProgramPaymentType extends RequestMessage<GetLoyaltyProgramPaymentTypeResponse> {
  /**
  * Entity type: LoyaltyProgramPaymentType
  */
  ID: number;
}

export interface GetLoyaltyProgramPaymentTypeResponse extends ResponseMessage {
  AllowPartialPayment: boolean;
  ApplyToPriceList: boolean;
  BackendID?: string;
  Budget?: number;
  BudgetRemaining?: number;
  BudgetUsagePercentage?: number;
  ExcludeFromProgramBudget: boolean;
  /**
  * Entity type: LoyaltyProgramPaymentType
  */
  ID: number;
  /**
  * Entity type: LoyaltyProgram
  */
  LoyaltyProgramID: number;
  MaximumAmountPerOrder?: number;
  MaximumPercentageOfUserBudgetPerOrder?: number;
  /**
  * Entity type: PaymentType
  */
  PaymentTypeID: number;
  PaymentTypeName?: string;
  ProductLimitation?: LoyaltyLoyaltyProgramProductLimitationData;
  Required: boolean;
  Sequence: number;
  TaxHandling: DataModelsLoyaltyPaymentTaxHandlingType;
  UsedBudget: number;
  UserBudget?: number;
  UserBudgetDeduction: DataModelsUserBudgetDeduction;
  UserMaximumUsage?: number;
}

/**
* Get a loyalty program product limitations
*/
export interface GetLoyaltyProgramProductLimitation extends RequestMessage<GetLoyaltyProgramProductLimitationResponse> {
  /**
  * Entity type: LoyaltyProgramPaymentType
  */
  ID: number;
}

export interface GetLoyaltyProgramProductLimitationResponse extends ResponseMessage {
  ApplyToPriceList: boolean;
  BackendID?: string;
  /**
  * Entity type: LoyaltyProgramProductLimitation
  */
  ID: number;
  /**
  * Entity type: LoyaltyProgram
  */
  LoyaltyProgramID: number;
  Name?: string;
  ProductLimitation?: LoyaltyLoyaltyProgramProductLimitationData;
}

export interface GetLoyaltyProgramResponse extends ResponseMessage {
  AllowUnsubscribeBy?: DataModelsAllowUnsubscribeByType;
  /**
  * This property has been deprecated. A loyaltyprogram should always be manually applied.
  */
  ApplyManuallyOnly: boolean;
  /**
  * When true, if a non anonymous customer is attached to the order they will be automatically subscribed on finishing the order.
  * When false, the customer will not be subscribed.
  * 
  * This is ignore when`RequiresSubscribedCustomer` or `RequiresSubscriptionValidation` is set to true.
  */
  AutoSubscribeCustomer: boolean;
  BackendID?: string;
  /**
  * Tierless benefits — only populated for programs without tiers.
  */
  Benefits?: LoyaltyGetLoyaltyProgramResponse_LoyaltyProgramBenefitDto[];
  Budget?: number;
  /**
  * Entity type: Currency
  */
  BudgetCurrencyID?: string;
  BudgetRemaining?: number;
  BudgetUsagePercentage?: number;
  Company?: LoyaltyGetLoyaltyProgramResponse_CompanyDto;
  CustomFields?: Record<string,DataModelsCustomFieldValue>;
  Data?: TAnyValue;
  DeactivateWhenBudgetIsReached: boolean;
  DeactivationReason: DataModelsLoyaltyProgramDeactivationReasons;
  Description?: string;
  EndDate?: string;
  Handler?: string;
  HasSubscribedUsers: boolean;
  /**
  * Entity type: LoyaltyProgram
  */
  ID?: number;
  ImageBlob?: BlobsBlobDto;
  LoyaltyPointUsageOptions?: DataModelsLoyaltyPointUsageOptions;
  /**
  * Entity type: LoyaltyProgramGroup
  */
  LoyaltyProgramGroupID?: number;
  Name?: string;
  Options: DataModelsLoyaltyProgramOptions;
  PointExpirationPolicyData?: LoyaltyEmptyPointPolicyData | LoyaltyCustomPointPolicyData | LoyaltyExpireEndOfYearPointPolicyData | LoyaltyExpireEndOfMonthPointPolicyData | LoyaltyExpireSetDatePointPolicyData;
  PointExpirationPolicyType?: 'DEFAULT' | 'CUSTOM' | 'PENDINGRETURNPERIOD' | 'EXPIREENDOFYEAR' | 'EXPIREENDOFMONTH' | 'EXPIRESETDATE';
  PointNamePlural?: string;
  PointNameSingular?: string;
  PointPendingPolicyData?: LoyaltyEmptyPointPolicyData | LoyaltyCustomPointPolicyData | LoyaltyExpireEndOfYearPointPolicyData | LoyaltyExpireEndOfMonthPointPolicyData | LoyaltyExpireSetDatePointPolicyData;
  PointPendingPolicyType?: 'DEFAULT' | 'CUSTOM' | 'PENDINGRETURNPERIOD' | 'EXPIREENDOFYEAR' | 'EXPIREENDOFMONTH' | 'EXPIRESETDATE';
  ReloadPolicy?: string;
  /**
  * When true, the loyalty program will only be applied when a customer is attached to the order.
  * 
  * When false, the loyalty program can be attached to the order even if there is no customer attached.
  */
  RequireCustomer: boolean;
  RequireManualUserIdentifier?: boolean;
  /**
  * When true, the loyalty program will only be applied when a customer is attached to the order that is already subscribed to the loyalty program.
  * Also, this will make the `RequireCustomer` automatically true and `AutoSubscribeCustomer` false.
  * 
  * When false, the loyalty program can be attached to the order if a customer is attached that isn't already subscribed to the loyalty program.
  */
  RequiresSubscribedCustomer: boolean;
  /**
  * When true, the order will require that the attached customer on the order will be validated by providing the UserIdentifier in the `AttachBenefitProgramToOrder` service.
  * Also, this will make the `RequireCustomer` and `RequiresSubscribedCustomer` automatically true and `AutoSubscribeCustomer` false.
  * 
  * When false, this validation isn't required.
  */
  RequiresSubscriptionValidation: boolean;
  ResubscribeHandling?: DataModelsResubscribeHandlingType;
  StartDate?: string;
  Status: DataModelsLoyaltyProgramStatus;
  /**
  * Entity type: LoyaltyProgram
  */
  SubscriptionID?: number;
  TierPolicyData?: LoyaltyEmptyTierPolicyData | LoyaltyCustomTierPolicyData | LoyaltyFixedDateTierPolicyData;
  TierPolicyType?: 'DEFAULT' | 'CUSTOM' | 'FIXEDDATE';
  Type: DataModelsProgramType;
  UsageType?: DataModelsLoyaltyProgramUsageTypes;
  UsedBudget: number;
  UserBudget?: number;
  UserIdentifierPrefix?: string;
  UserIdentifierStartNumber?: number;
  UserIdentifierSuffix?: string;
  UserMaximumUsage?: number;
}

export interface LoyaltyGetLoyaltyProgramResponse_CompanyDto {
  /**
  * Entity type: Company
  */
  ID: number;
  Name?: string;
}

export interface LoyaltyGetLoyaltyProgramResponse_LoyaltyProgramBenefitDiscountDto {
  Description?: string;
  /**
  * Entity type: Discount
  */
  ID: number;
  MarketingDescription?: string;
  PromotionLabel?: string;
}

export interface LoyaltyGetLoyaltyProgramResponse_LoyaltyProgramBenefitDto {
  ApplyDiscountAutomatically: boolean;
  Blob?: BlobsBlobDto;
  CanReload: boolean;
  CustomFieldFilter?: DataModelsCustomFieldFilter;
  /**
  * Entity type: CustomField
  */
  CustomFieldID?: number;
  Description?: string;
  Discounts?: LoyaltyGetLoyaltyProgramResponse_LoyaltyProgramBenefitDiscountDto[];
  /**
  * Entity type: LoyaltyProgramBenefit
  */
  ID: number;
  IsManualClaimed: boolean;
  MaxUsage?: number;
  PointThreshold?: number;
  Title?: string;
  UseCustomFieldAsUsage: boolean;
}

/**
* Get a LoyaltyProgramTier
*/
export interface GetLoyaltyProgramTier extends RequestMessage<GetLoyaltyProgramTierResponse> {
  /**
  * Entity type: LoyaltyProgramTier
  */
  ID: number;
  /**
  * Entity type: ProductPropertyType
  */
  IncludedProductProperties?: string[];
}

export interface GetLoyaltyProgramTierResponse extends ResponseMessage {
  BackendID?: string;
  Benefits?: LoyaltyGetLoyaltyProgramTierResponse_LoyaltyProgramTierBenefitDto[];
  /**
  * Entity type: LoyaltyProgramTier
  */
  ID: number;
  ImageBlobUrl?: string;
  /**
  * Only applicable for tiers that are not point based. A default tier is automatically assigned when subscribing to the loyalty program
  */
  IsDefault: boolean;
  IsHiddenUntilReached: boolean;
  /**
  * Entity type: LoyaltyProgram
  */
  LoyaltyProgramID: number;
  Name?: string;
  PointThreshold?: number;
  SendMailOnAssign: boolean;
}

export interface LoyaltyGetLoyaltyProgramTierResponse_LoyaltyProgramTierBenefitDto {
  Blob?: BlobsBlobDto;
  CanReload: boolean;
  CustomFieldFilter?: DataModelsCustomFieldFilter;
  /**
  * Entity type: CustomField
  */
  CustomFieldID?: number;
  Data?: LoyaltyEmptyBenefitData | LoyaltyAppointmentBenefitData;
  Description?: string;
  Discount?: LoyaltyGetLoyaltyProgramTierResponse_LoyaltyProgramTierDiscountDto;
  /**
  * Entity type: Discount
  */
  DiscountID?: number;
  Discounts?: LoyaltyGetLoyaltyProgramTierResponse_LoyaltyProgramTierDiscountDto[];
  /**
  * Entity type: LoyaltyProgramBenefit
  */
  ID: number;
  IsManualClaimed: boolean;
  MaxUsage?: number;
  PointThreshold?: number;
  Title?: string;
  Type?: 'Appointment' | 'AssortmentRule' | 'BackInStockPriority' | 'Discount' | 'Text';
  UseCustomFieldAsUsage: boolean;
}

export interface LoyaltyGetLoyaltyProgramTierResponse_LoyaltyProgramTierDiscountDto {
  Description?: string;
  /**
  * Entity type: Discount
  */
  ID: number;
  MarketingDescription?: string;
  PromotionLabel?: string;
}

/**
* Get tiers basic info for a given loyalty program
*/
export interface GetLoyaltyProgramTiers extends RequestMessage<GetLoyaltyProgramTiersResponse> {
  /**
  * Entity type: LoyaltyProgram
  */
  LoyaltyProgramID: number;
}

export interface GetLoyaltyProgramTiersResponse extends ResponseMessage {
  LoyaltyProgram?: LoyaltyGetLoyaltyProgramTiersResponse_LoyaltyProgramDto;
  Tiers?: LoyaltyGetLoyaltyProgramTiersResponse_LoyaltyProgramTierDto[];
}

export interface LoyaltyGetLoyaltyProgramTiersResponse_LoyaltyProgramDto {
  Description?: string;
  LoyaltyPointNamePlural?: string;
  LoyaltyPointNameSingular?: string;
  Name?: string;
}

export interface LoyaltyGetLoyaltyProgramTiersResponse_LoyaltyProgramTierBenefitDto {
  Data?: LoyaltyEmptyBenefitData | LoyaltyAppointmentBenefitData;
  Description?: string;
  Title?: string;
  Type?: 'Appointment' | 'AssortmentRule' | 'BackInStockPriority' | 'Discount' | 'Text';
}

export interface LoyaltyGetLoyaltyProgramTiersResponse_LoyaltyProgramTierDto {
  Benefits?: LoyaltyGetLoyaltyProgramTiersResponse_LoyaltyProgramTierBenefitDto[];
  ImageBlobUrl?: string;
  Name?: string;
  PointThreshold?: number;
}

/**
* Get the loyalty program user usage
*/
export interface GetLoyaltyProgramUserUsage extends RequestMessage<GetLoyaltyProgramUserUsageResponse> {
  /**
  * Entity type: ProductPropertyType
  */
  IncludedProductProperties?: string[];
  /**
  * Entity type: LoyaltyProgram
  */
  LoyaltyProgramID: number;
  /**
  * Entity type: User
  */
  UserID?: number;
}

export interface GetLoyaltyProgramUserUsageResponse extends ResponseMessage {
  PaymentUsages?: LoyaltyGetLoyaltyProgramUserUsageResponse_PaymentUsage[];
  ProductUsages?: LoyaltyGetLoyaltyProgramUserUsageResponse_ProductUsage[];
}

export interface LoyaltyGetLoyaltyProgramUserUsageResponse_PaymentUsage {
  AmountUsage: number;
  /**
  * Entity type: LoyaltyProgramPaymentType
  */
  LoyaltyProgramPaymentTypeID: number;
  ProductUsage?: LoyaltyGetLoyaltyProgramUserUsageResponse_ProductUsage[];
}

export interface LoyaltyGetLoyaltyProgramUserUsageResponse_ProductUsage {
  ConsumedQuantity: number;
  PrimaryImage?: SearchIProductSearchItemPrimaryImage;
  /**
  * Entity type: Product
  */
  ProductBackendID?: string;
  /**
  * Entity type: Product
  */
  ProductID: number;
  ProductName?: string;
}

/**
* Get the available loyalty program payment methods for the given order.
*/
export interface GetOrderLoyaltyProgramPaymentTypes extends RequestMessage<GetOrderLoyaltyProgramPaymentTypesResponse> {
  /**
  * Entity type: Order
  */
  OrderID: number;
}

export interface GetOrderLoyaltyProgramPaymentTypesResponse extends ResponseMessage {
  Options?: LoyaltyGetOrderLoyaltyProgramPaymentTypesResponse_Option[];
}

export interface LoyaltyGetOrderLoyaltyProgramPaymentTypesResponse_Option {
  BackendID?: string;
  /**
  * Entity type: LoyaltyProgramPaymentType
  */
  ID: number;
  /**
  * Entity type: PaymentType
  */
  PaymentTypeID: number;
  PaymentTypeName?: string;
  Required: boolean;
  Sequence: number;
}

/**
* Get loyalty point rule.
*/
export interface GetPointAwardingRule extends RequestMessage<GetPointAwardingRuleResponse> {
  /**
  * Entity type: PointAwardingRule
  */
  ID: number;
}

export interface GetPointAwardingRuleResponse extends ResponseMessage {
  ApplyRecursive: boolean;
  BackendID?: string;
  BackendSystemID?: string;
  Conditions?: LoyaltyGetPointAwardingRuleResponse_Condition[];
  Description?: string;
  DurationInterval?: number;
  DurationType?: LoyaltyDurationType;
  Enabled: boolean;
  EndDate?: string;
  HasDuration: boolean;
  /**
  * Entity type: PointAwardingRule
  */
  ID: number;
  /**
  * Entity type: LoyaltyProgram
  */
  LoyaltyProgramID: number;
  LoyaltyProgramName?: string;
  MarketingDescription?: string;
  Name?: string;
  /**
  * Entity type: OrganizationUnitSet
  */
  OrganizationUnitSetID: number;
  OrganizationUnitSetName?: string;
  PointExpirationPolicyData?: LoyaltyEmptyPointPolicyData | LoyaltyCustomPointPolicyData | LoyaltyExpireEndOfYearPointPolicyData | LoyaltyExpireEndOfMonthPointPolicyData | LoyaltyExpireSetDatePointPolicyData;
  PointExpirationPolicyType?: 'DEFAULT' | 'CUSTOM' | 'PENDINGRETURNPERIOD' | 'EXPIREENDOFYEAR' | 'EXPIREENDOFMONTH' | 'EXPIRESETDATE';
  PointNamePlural?: string;
  PointNameSingular?: string;
  PointPendingPolicyData?: LoyaltyEmptyPointPolicyData | LoyaltyCustomPointPolicyData | LoyaltyExpireEndOfYearPointPolicyData | LoyaltyExpireEndOfMonthPointPolicyData | LoyaltyExpireSetDatePointPolicyData;
  PointPendingPolicyType?: 'DEFAULT' | 'CUSTOM' | 'PENDINGRETURNPERIOD' | 'EXPIREENDOFYEAR' | 'EXPIREENDOFMONTH' | 'EXPIRESETDATE';
  PointsToAward: number;
  StartDate: string;
}

export interface LoyaltyGetPointAwardingRuleResponse_Condition {
  Data?: LoyaltyRulesEmptyPointAwardingConditionData | LoyaltyRulesLoyaltyBadgePointAwardingConditionData | LoyaltyRulesLoyaltyTierPointAwardingConditionData | LoyaltyRulesOrderAmountPointAwardingConditionData | LoyaltyRulesOrderQuantityPointAwardingConditionData | LoyaltyRulesProductPointAwardingConditionData | LoyaltyRulesUserCustomFieldPointAwardingConditionData;
  /**
  * Entity type: PointAwardingCondition
  */
  ID: number;
  Type: 'LOYALTYBADGE' | 'LOYALTYTIER' | 'ORDERAMOUNT' | 'ORDERQUANTITY' | 'PRODUCT' | 'USERCUSTOMFIELD';
}

/**
* Get the benefits of the user for a given loyalty program.
*/
export interface GetUserBenefits extends RequestMessage<GetUserBenefitsResponse> {
  /**
  * Entity type: LoyaltyProgram
  */
  LoyaltyProgramID: number;
  /**
  * Entity type: Order
  */
  OrderID?: number;
  /**
  * Entity type: User
  */
  UserID?: number;
}

export interface GetUserBenefitsResponse extends ResponseMessage {
  Benefits?: LoyaltyGetUserBenefitsResponse_UserBenefitDto[];
  LoyaltyProgram?: LoyaltyGetUserBenefitsResponse_LoyaltyProgramDto;
}

export interface LoyaltyGetUserBenefitsResponse_DiscountDto {
  CouponCode?: string;
  /**
  * Entity type: DiscountCoupon
  */
  CouponID?: number;
  Description?: string;
  /**
  * Entity type: Discount
  */
  ID: number;
  MarketingDescription?: string;
  PromotionLabel?: string;
}

export interface LoyaltyGetUserBenefitsResponse_LoyaltyProgramDto {
  Description?: string;
  /**
  * Entity type: LoyaltyProgram
  */
  ID: number;
  Name?: string;
  PointNamePlural?: string;
  PointNameSingular?: string;
}

export interface LoyaltyGetUserBenefitsResponse_LoyaltyProgramTierDto {
  BackendID?: string;
  /**
  * Entity type: LoyaltyProgramTier
  */
  ID: number;
  Name?: string;
}

export interface LoyaltyGetUserBenefitsResponse_UserBenefitDto {
  Blob?: BlobsBlobDto;
  Data?: LoyaltyEmptyBenefitData | LoyaltyAppointmentBenefitData;
  Description?: string;
  Discounts?: LoyaltyGetUserBenefitsResponse_DiscountDto[];
  FullyClaimed: boolean;
  /**
  * Entity type: LoyaltyProgramBenefit
  */
  ID?: number;
  IsManualClaimed: boolean;
  IsPointConsuming: boolean;
  LastUsageDate?: string;
  MaxUsage?: number;
  Tier?: LoyaltyGetUserBenefitsResponse_LoyaltyProgramTierDto;
  TimesUsed?: number;
  Title?: string;
  Type?: 'Appointment' | 'AssortmentRule' | 'BackInStockPriority' | 'Discount' | 'Text';
}

/**
* Get the badge details for a user within a loyalty program
*/
export interface GetUserLoyaltyBadgeDetails extends RequestMessage<GetUserLoyaltyBadgeDetailsResponse> {
  /**
  * Entity type: LoyaltyProgramBadge
  */
  BadgeID: number;
  /**
  * Entity type: ProductPropertyType
  */
  IncludedProductProperties?: string[];
  /**
  * Entity type: User
  */
  UserID: number;
}

export interface GetUserLoyaltyBadgeDetailsResponse extends ResponseMessage {
  /**
  * Entity type: LoyaltyProgramBadge
  */
  BackendID?: string;
  Blob?: BlobsBlobDto;
  /**
  * Entity type: LoyaltyProgramBadgeCategory
  */
  CategoryID?: number;
  CategoryName?: string;
  CurrentQuantity?: number;
  Description?: string;
  /**
  * Entity type: LoyaltyProgramBadge
  */
  ID: number;
  IsAssigned: boolean;
  IsManual: boolean;
  MustMeetAllConditions: boolean;
  Name?: string;
  PointNamePlural?: string;
  PointNameSingular?: string;
  PointsToAward?: number;
  PointsToReach?: number;
  /**
  * Entity type: ProductSearchTemplate
  */
  ProductSearchTemplateID?: number;
  ProgressData?: LoyaltyLoyaltyBadgeProgressDataDto;
  PurchasedProducts?: LoyaltyGetUserLoyaltyBadgeDetailsResponse_ProductDto[];
  Sequence: number;
  TargetQuantity?: number;
}

export interface LoyaltyGetUserLoyaltyBadgeDetailsResponse_ProductDto {
  Product?: SearchIProductSearchItem;
  PurchasedQuantity: number;
}

/**
* Get the badges for a user within a loyalty program
*/
export interface GetUserLoyaltyBadges extends RequestMessage<GetUserLoyaltyBadgesResponse> {
  /**
  * Entity type: LoyaltyProgram
  */
  LoyaltyProgramID: number;
  /**
  * Entity type: User
  */
  UserID: number;
}

export interface GetUserLoyaltyBadgesResponse extends ResponseMessage {
  Badges?: LoyaltyGetUserLoyaltyBadgesResponse_LoyaltyProgramBadgeDto[];
  LoyaltyProgram?: LoyaltyGetUserLoyaltyBadgesResponse_LoyaltyProgramDto;
}

export interface LoyaltyGetUserLoyaltyBadgesResponse_LoyaltyProgramBadgeDto {
  /**
  * Entity type: LoyaltyProgramBadge
  */
  BackendID?: string;
  Blob?: BlobsBlobDto;
  /**
  * Entity type: LoyaltyProgramBadgeCategory
  */
  CategoryID?: number;
  CategoryName?: string;
  CurrentQuantity?: number;
  Description?: string;
  /**
  * Entity type: LoyaltyProgramBadge
  */
  ID: number;
  IsAssigned: boolean;
  IsManual: boolean;
  MustMeetAllConditions: boolean;
  Name?: string;
  PointsToAward?: number;
  PointsToReach?: number;
  ProgressData?: LoyaltyLoyaltyBadgeProgressDataDto;
  Sequence: number;
  TargetQuantity?: number;
}

export interface LoyaltyGetUserLoyaltyBadgesResponse_LoyaltyProgramDto {
  Description?: string;
  /**
  * Entity type: LoyaltyProgram
  */
  ID: number;
  ImageBlob?: BlobsBlobDto;
  Name?: string;
  PointNamePlural?: string;
  PointNameSingular?: string;
}

/**
* Get the tier details of the user for a given loyalty program.
*/
export interface GetUserLoyaltyTierDetails extends RequestMessage<GetUserLoyaltyTierDetailsResponse> {
  /**
  * Entity type: LoyaltyProgram
  */
  LoyaltyProgramID: number;
  /**
  * Entity type: User
  */
  UserID: number;
}

export interface GetUserLoyaltyTierDetailsResponse extends ResponseMessage {
  LoyaltyProgram?: LoyaltyGetUserLoyaltyTierDetailsResponse_LoyaltyProgramDto;
  Tiers?: LoyaltyGetUserLoyaltyTierDetailsResponse_LoyaltyProgramTierDto[];
}

export interface LoyaltyGetUserLoyaltyTierDetailsResponse_DiscountDto {
  CouponCode?: string;
  /**
  * Entity type: DiscountCoupon
  */
  CouponID?: number;
  Description?: string;
  /**
  * Entity type: Discount
  */
  ID: number;
  MarketingDescription?: string;
  PromotionLabel?: string;
}

export interface LoyaltyGetUserLoyaltyTierDetailsResponse_LoyaltyProgramDto {
  Description?: string;
  /**
  * Entity type: LoyaltyProgram
  */
  ID: number;
  Name?: string;
  PointNamePlural?: string;
  PointNameSingular?: string;
}

export interface LoyaltyGetUserLoyaltyTierDetailsResponse_LoyaltyProgramTierBenefitDto {
  Blob?: BlobsBlobDto;
  CanReload: boolean;
  CustomFieldFilter?: DataModelsCustomFieldFilter;
  /**
  * Entity type: CustomField
  */
  CustomFieldID?: number;
  Data?: LoyaltyEmptyBenefitData | LoyaltyAppointmentBenefitData;
  Description?: string;
  Discount?: LoyaltyGetUserLoyaltyTierDetailsResponse_DiscountDto;
  /**
  * Entity type: Discount
  */
  DiscountID?: number;
  Discounts?: LoyaltyGetUserLoyaltyTierDetailsResponse_DiscountDto[];
  FullyClaimed: boolean;
  /**
  * Entity type: LoyaltyProgramBenefit
  */
  ID: number;
  IsManualClaimed: boolean;
  IsReached: boolean;
  MaxUsage?: number;
  PointThreshold?: number;
  TimesUsed?: number;
  Title?: string;
  Type?: 'Appointment' | 'AssortmentRule' | 'BackInStockPriority' | 'Discount' | 'Text';
  UseCustomFieldAsUsage: boolean;
}

export interface LoyaltyGetUserLoyaltyTierDetailsResponse_LoyaltyProgramTierDto {
  BackendID?: string;
  Benefits?: LoyaltyGetUserLoyaltyTierDetailsResponse_LoyaltyProgramTierBenefitDto[];
  /**
  * Entity type: LoyaltyProgramTier
  */
  ID: number;
  ImageBlobUrl?: string;
  IsCurrent: boolean;
  IsReached: boolean;
  Name?: string;
  PointThreshold?: number;
  /**
  * The amount of points required to reach the next tier
  */
  PointsToNextTier?: number;
}

/**
* Get the benefits usage history for an user.
*/
export interface ListBenefitUserUsageHistory extends PagedRequestMessage<LoyaltyListBenefitUserUsageHistoryFilter, ListBenefitUserUsageHistoryResponse> {
  /**
  * Entity type: User
  */
  UserID: number;
}

export interface ListBenefitUserUsageHistoryResponse extends PagedResponseMessage<LoyaltyListBenefitUserUsageHistoryResponse_BenefitDto> {
}

export interface LoyaltyListBenefitUserUsageHistoryResponse_BenefitDto {
  Blob?: BlobsBlobDto;
  CanReload: boolean;
  Description?: string;
  Discount?: LoyaltyListBenefitUserUsageHistoryResponse_DiscountDto;
  FullyClaimed: boolean;
  /**
  * Entity type: LoyaltyProgramBenefit
  */
  ID: number;
  MaxUsage?: number;
  TimesUsed?: number;
  Title?: string;
}

export interface LoyaltyListBenefitUserUsageHistoryResponse_DiscountDto {
  CouponCode?: string;
  /**
  * Entity type: DiscountCoupon
  */
  CouponID?: number;
  Description?: string;
  /**
  * Entity type: Discount
  */
  ID: number;
  MarketingDescription?: string;
  PromotionLabel?: string;
}

/**
* Lists all payment types under the Loyalty payment method that aren't already connected to a loyalty program.
*/
export interface ListLoyaltyPaymentMethodTypes extends RequestMessage<ListLoyaltyPaymentMethodTypesResponse> {
}

export interface ListLoyaltyPaymentMethodTypesResponse extends ResponseMessage {
  Types?: LoyaltyListLoyaltyPaymentMethodTypesResponse_LoyaltyPaymentType[];
}

export interface LoyaltyListLoyaltyPaymentMethodTypesResponse_LoyaltyPaymentType {
  /**
  * Entity type: PaymentType
  */
  ID: number;
  Name?: string;
}

/**
* List a paged result set of loyalty program badge categories
*/
export interface ListLoyaltyProgramBadgeCategories extends PagedRequestMessage<LoyaltyListLoyaltyProgramBadgeCategoriesFilter, ListLoyaltyProgramBadgeCategoriesResponse> {
  /**
  * Entity type: LoyaltyProgram
  */
  LoyaltyProgramID: number;
}

export interface ListLoyaltyProgramBadgeCategoriesResponse extends PagedResponseMessage<LoyaltyLoyaltyProgramBadgeCategoryDto> {
}

/**
* List the LoyaltyProgramBadges
*/
export interface ListLoyaltyProgramBadges extends PagedRequestMessage<LoyaltyListLoyaltyProgramBadgeFilter, ListLoyaltyProgramBadgesResponse> {
  /**
  * Entity type: LoyaltyProgram
  */
  LoyaltyProgramID: number;
}

export interface ListLoyaltyProgramBadgesResponse extends PagedResponseMessage<LoyaltyListLoyaltyProgramBadgesResponse_LoyaltyProgramBadgeDto> {
}

export interface LoyaltyListLoyaltyProgramBadgesResponse_LoyaltyProgramBadgeDto {
  /**
  * Entity type: LoyaltyProgramBadge
  */
  BackendID?: string;
  Blob?: BlobsBlobDto;
  /**
  * Entity type: LoyaltyProgramBadgeCategory
  */
  CategoryID?: number;
  CategoryName?: string;
  Description?: string;
  /**
  * Entity type: LoyaltyProgramBadge
  */
  ID: number;
  IsManual: boolean;
  /**
  * Entity type: LoyaltyProgram
  */
  LoyaltyProgramID: number;
  Name?: string;
  PointsToAward?: number;
  Sequence: number;
}

/**
* List the LoyaltyProgramCondition
*/
export interface ListLoyaltyProgramConditions extends PagedRequestMessage<ListLoyaltyProgramConditionsResponse> {
  /**
  * Entity type: LoyaltyProgram
  */
  LoyaltyProgramID: number;
}

export interface ListLoyaltyProgramConditionsResponse extends PagedResponseMessage<LoyaltyListLoyaltyProgramConditionsResponse_Item> {
}

export interface LoyaltyListLoyaltyProgramConditionsResponse_Item {
  BackendID?: string;
  /**
  * Entity type: LoyaltyProgramCondition
  */
  ID: number;
  /**
  * Entity type: LoyaltyProgram
  */
  LoyaltyProgramID: number;
  Type?: 'V2:CUSTOMER' | 'V2:ORDERCUSTOMFIELD' | 'V2:ORDERPROPERTIES' | 'V2:ORDERTYPE' | 'V2:USERCUSTOMFIELD';
}

/**
* List the LoyaltyProgramGroups
*/
export interface ListLoyaltyProgramGroups extends PagedRequestMessage<LoyaltyListLoyaltyProgramGroupFilter, ListLoyaltyProgramGroupsResponse> {
}

export interface ListLoyaltyProgramGroupsResponse extends PagedResponseMessage<LoyaltyListLoyaltyProgramGroupsResponse_Item> {
}

export interface LoyaltyListLoyaltyProgramGroupsResponse_Item {
  BackendID?: string;
  /**
  * Entity type: Currency
  */
  BudgetCurrencyID?: string;
  DeactivationReason: DataModelsLoyaltyProgramGroupDeactivationReasons;
  EndDate?: string;
  /**
  * Entity type: LoyaltyProgramGroup
  */
  ID: number;
  Name?: string;
  StartDate?: string;
  Status: DataModelsLoyaltyProgramStatus;
  TaxExemptionCode?: string;
}

/**
* List the loyalty program pass providers.
*/
export interface ListLoyaltyProgramPassProviders extends RequestMessage<ListLoyaltyProgramPassProvidersResponse> {
}

export interface ListLoyaltyProgramPassProvidersResponse extends ResponseMessage {
  Providers?: string[];
}

/**
* List the LoyaltyProgramPass
*/
export interface ListLoyaltyProgramPasses extends PagedRequestMessage<LoyaltyListLoyaltyProgramPassFilter, ListLoyaltyProgramPassesResponse> {
  /**
  * Entity type: LoyaltyProgram
  */
  LoyaltyProgramID: number;
}

export interface ListLoyaltyProgramPassesResponse extends PagedResponseMessage<LoyaltyListLoyaltyProgramPassesResponse_Pass> {
}

export interface LoyaltyListLoyaltyProgramPassesResponse_Pass {
  BackendID?: string;
  /**
  * Entity type: LoyaltyProgramPass
  */
  ID: number;
  Name?: string;
  PassProvider?: string;
  PassTypeID?: string;
}

/**
* List the LoyaltyProgramPaymentType
*/
export interface ListLoyaltyProgramPaymentTypes extends PagedRequestMessage<ListLoyaltyProgramPaymentTypesResponse> {
  /**
  * Entity type: LoyaltyProgram
  */
  LoyaltyProgramID: number;
}

export interface ListLoyaltyProgramPaymentTypesResponse extends PagedResponseMessage<LoyaltyListLoyaltyProgramPaymentTypesResponse_Item> {
}

export interface LoyaltyListLoyaltyProgramPaymentTypesResponse_Item {
  AllowPartialPayment: boolean;
  ApplyToPriceList: boolean;
  BackendID?: string;
  Budget?: number;
  ExcludeFromProgramBudget: boolean;
  HasUserLimitations: boolean;
  /**
  * Entity type: LoyaltyProgramPaymentType
  */
  ID: number;
  /**
  * Entity type: PaymentType
  */
  PaymentTypeID: number;
  PaymentTypeName?: string;
  Required: boolean;
  Sequence: number;
}

/**
* List the loyalty program pricelists
*/
export interface ListLoyaltyProgramPriceLists extends PagedRequestMessage<ListLoyaltyProgramPriceListsResponse> {
  /**
  * Entity type: LoyaltyProgram
  */
  LoyaltyProgramID: number;
}

export interface ListLoyaltyProgramPriceListsResponse extends PagedResponseMessage<LoyaltyListLoyaltyProgramPriceListsResponse_Item> {
}

export interface LoyaltyListLoyaltyProgramPriceListsResponse_Item {
  /**
  * Entity type: Currency
  */
  CurrencyID?: string;
  Name?: string;
  /**
  * Entity type: PriceList
  */
  PriceListID: number;
}

/**
* List the loyalty program product limitations
*/
export interface ListLoyaltyProgramProductLimitations extends PagedRequestMessage<ListLoyaltyProgramProductLimitationsResponse> {
  /**
  * Entity type: LoyaltyProgram
  */
  LoyaltyProgramID: number;
}

export interface ListLoyaltyProgramProductLimitationsResponse extends PagedResponseMessage<LoyaltyListLoyaltyProgramProductLimitationsResponse_Item> {
}

export interface LoyaltyListLoyaltyProgramProductLimitationsResponse_Item {
  BackendID?: string;
  /**
  * Entity type: LoyaltyProgramProductLimitation
  */
  ID: number;
  Name?: string;
  /**
  * The quantity limit over the entire product limitation product set per order.
  */
  OverallQuantityLimitPerOrder?: number;
  /**
  * The quantity limit over the entire product limitation product set per user.
  */
  OverallQuantityLimitPerUser?: number;
  /**
  * The quantity limit per product within the product limitation product set per order.
  */
  QuantityLimitPerOrder?: number;
  /**
  * The quantity limit per product within the product limitation product set per user.
  */
  QuantityLimitPerUser?: number;
}

/**
* List the loyalty program CustomFieldRequirements
*/
export interface ListLoyaltyProgramRequiredCustomFields extends PagedRequestMessage<ListLoyaltyProgramRequiredCustomFieldsResponse> {
  /**
  * Entity type: LoyaltyProgram
  */
  LoyaltyProgramID: number;
}

export interface ListLoyaltyProgramRequiredCustomFieldsResponse extends PagedResponseMessage<LoyaltyListLoyaltyProgramRequiredCustomFieldsResponse_CustomField> {
}

export interface LoyaltyListLoyaltyProgramRequiredCustomFieldsResponse_CustomField {
  BackendID?: string;
  /**
  * Entity type: CustomField
  */
  ID: number;
  Name?: string;
}

/**
* List the LoyaltyProgramTiers
*/
export interface ListLoyaltyProgramTiers extends SortablePagedRequestMessage<LoyaltyListLoyaltyProgramTierSort, LoyaltyListLoyaltyProgramTierFilter, ListLoyaltyProgramTiersResponse> {
  /**
  * Entity type: LoyaltyProgram
  */
  LoyaltyProgramID: number;
}

export interface ListLoyaltyProgramTiersResponse extends PagedResponseMessage<LoyaltyListLoyaltyProgramTiersResponse_LoyaltyProgramTierDto> {
}

export interface LoyaltyListLoyaltyProgramTiersResponse_LoyaltyProgramTierDto {
  BackendID?: string;
  /**
  * Entity type: LoyaltyProgramTier
  */
  ID: number;
  ImageBlobUrl?: string;
  IsDefault: boolean;
  IsHiddenUntilReached: boolean;
  LoyaltyProgramID: number;
  Name?: string;
  PointThreshold?: number;
  SendMailOnAssign: boolean;
}

/**
* List the LoyaltyPrograms
*/
export interface ListLoyaltyPrograms extends PagedRequestMessage<LoyaltyListLoyaltyProgramsFilter, ListLoyaltyProgramsResponse> {
}

export interface ListLoyaltyProgramsResponse extends PagedResponseMessage<LoyaltyListLoyaltyProgramsResponse_LoyaltyProgramDto> {
}

export interface LoyaltyListLoyaltyProgramsResponse_LoyaltyProgramDto {
  BackendID?: string;
  /**
  * Entity type: Currency
  */
  BudgetCurrencyID?: string;
  DeactivationReason: DataModelsLoyaltyProgramDeactivationReasons;
  EndDate?: string;
  Handler?: string;
  /**
  * Entity type: LoyaltyProgram
  */
  ID: number;
  Name?: string;
  Options: DataModelsLoyaltyProgramOptions;
  StartDate?: string;
  Status: DataModelsLoyaltyProgramStatus;
  Type?: DataModelsProgramType;
  UsageType: DataModelsLoyaltyProgramUsageTypes;
}

/**
* List loyalty point rules. Returns a paged response.
*/
export interface ListPointAwardingRules extends PagedRequestMessage<LoyaltyListPointAwardingRuleFilter, ListPointAwardingRulesResponse> {
}

export interface ListPointAwardingRulesResponse extends PagedResponseMessage<LoyaltyListPointAwardingRulesResponse_Rule> {
}

export interface LoyaltyListPointAwardingRulesResponse_Rule {
  Description?: string;
  DurationInterval?: number;
  DurationType?: LoyaltyDurationType;
  Enabled: boolean;
  EndDate?: string;
  HasDuration: boolean;
  /**
  * Entity type: PointAwardingRule
  */
  ID: number;
  /**
  * Entity type: LoyaltyProgram
  */
  LoyaltyProgramID: number;
  LoyaltyProgramName?: string;
  Name?: string;
  /**
  * Entity type: OrganizationUnitSet
  */
  OrganizationUnitSetID: number;
  OrganizationUnitSetName?: string;
  StartDate: string;
}

export interface LoyaltyLoyaltyBadgeConditionDataDto {
  /**
  * Condition-specific data. Contents depend on the condition type.
  */
  Data?: LoyaltyBadgesConditionsBadgeConditionData | LoyaltyBadgesConditionsCustomFieldConditionData | LoyaltyBadgesConditionsPointThresholdConditionData | LoyaltyBadgesConditionsBadgeProductConditionData | LoyaltyBadgesConditionsTierConditionData | MiscConditionsCouponOriginatingOrderOrganizationUnitConditionData | MiscConditionsCouponValidityConditionData | MiscConditionsCustomerAgeConditionData | MiscConditionsCustomerConditionData | MiscConditionsLoyaltyBadgeConditionData | MiscConditionsLoyaltyPointsConditionData | MiscConditionsLoyaltyTierConditionData | MiscConditionsMaximumUsePerUserConditionData | MiscConditionsMinimumProductSubscriptionRenewalsConditionData | MiscConditionsOldUserFieldConditionData | MiscConditionsOrderAmountConditionData | MiscConditionsOrderCustomFieldConditionData | MiscConditionsOrderLineCustomFieldConditionData | MiscConditionsOrderPropertiesConditionData | MiscConditionsOrderTypeConditionData | MiscConditionsOrganizationUnitConditionData | MiscConditionsOrganizationUnitTypeConditionData | MiscConditionsProductConditionData | MiscConditionsProductRequirementConditionData | MiscConditionsStockLabelConditionData | MiscConditionsUserCustomFieldConditionData | MiscConditionsUserRoleConditionData | MiscConditionsUserTypeConditionData | EmptyConditionData;
  /**
  * Whether this condition has been met. Once true, this is sticky and does not revert.
  */
  IsMet: boolean;
  /**
  * Current count-based progress (e.g. products purchased). Null for non-counting conditions.
  */
  Progress?: number;
  /**
  * The type of the condition, e.g. PRODUCT or POINTTHRESHOLD.
  */
  Type?: 'BADGE' | 'CUSTOMFIELD' | 'POINTTHRESHOLD' | 'PRODUCT' | 'TIER';
}

export interface LoyaltyLoyaltyBadgeProgressDataDto {
  /**
  * The per-condition progress and configuration data.
  */
  Conditions?: LoyaltyLoyaltyBadgeConditionDataDto[];
  /**
  * Percentage (0-100) of achievement conditions that have IsMet=true.
  */
  Progress: number;
}

export enum LoyaltyLoyaltyPointAdjustmentType {
  Deposit = 0,
  Withdraw = 1,
  Rebalance = 2,
}

export interface LoyaltyLoyaltyProgramBadgeCategoryDto {
  BackendID?: string;
  Description?: string;
  /**
  * Entity type: LoyaltyProgramBadgeCategory
  */
  ID: number;
  /**
  * Entity type: LoyaltyProgram
  */
  LoyaltyProgramID: number;
  Name?: string;
}

export interface LoyaltyLoyaltyProgramProductLimitationData {
  Filters?: Record<string,SearchFilterModel>;
  /**
  * The quantity limit over the entire product limitation product set per order.
  */
  OverallQuantityLimitPerOrder?: number;
  /**
  * The quantity limit over the entire product limitation product set per user.
  */
  OverallQuantityLimitPerUser?: number;
  /**
  * Entity type: Product
  */
  ProductIDs?: number[];
  /**
  * Entity type: ProductSearchTemplate
  */
  ProductSearchID?: number;
  /**
  * The quantity limit per product within the product limitation product set per order.
  */
  QuantityLimitPerOrder?: number;
  /**
  * The quantity limit per product within the product limitation product set per user.
  */
  QuantityLimitPerUser?: number;
}

/**
* Push a LoyaltyProgram.
* If it doesn't exist it will be created, otherwise is will be updated.
* Sub entities will also be created or updated, but will not be removed.
*/
export interface LoyaltyPushLoyaltyProgram extends RequestMessage<PushLoyaltyProgramResponse> {
  /**
  * Indicates if the subscription can be unsubscribed and if so, who can do the unsubscribe.
  */
  AllowUnsubscribeBy?: DataModelsAllowUnsubscribeByType;
  ApplyManuallyOnly?: boolean;
  /**
  * When true, if a non anonymous customer is attached to the order they will be automatically subscribed on finishing the order.
  * When false, the customer will not be subscribed.
  * 
  * This is ignore when`RequiresSubscribedCustomer` or `RequiresSubscriptionValidation` is set to true.
  */
  AutoSubscribeCustomer?: boolean;
  Budget?: number | null;
  /**
  * Entity type: Currency
  */
  BudgetCurrencyID?: string | null;
  /**
  * Entity type: Company
  * Attaches the loyalty program to a consumer company.
  */
  CompanyID?: string | null;
  Conditions?: LoyaltyPushLoyaltyProgram_PushLoyaltyProgramCondition[];
  Data?: TAnyValue | null;
  DeactivateWhenBudgetIsReached?: boolean;
  Description?: string | null;
  EndDate?: string | null;
  Handler?: string;
  /**
  * Entity type: LoyaltyProgram
  */
  ID: string;
  ImageBlobID?: string | null;
  LoyaltyPointUsageOptions?: DataModelsLoyaltyPointUsageOptions;
  /**
  * Entity type: LoyaltyProgramGroup
  */
  LoyaltyProgramGroupID?: string | null;
  Name?: string;
  Options?: DataModelsLoyaltyProgramOptions;
  OrganizationUnitSets?: LoyaltyPushLoyaltyProgram_PushLoyaltyProgramOrganizationUnitSet[];
  PaymentTypes?: LoyaltyPushLoyaltyProgram_PushLoyaltyProgramPaymentType[];
  PointAwardingRules?: LoyaltyPushLoyaltyProgram_PushPointAwardingRule[];
  PointExpirationPolicyData?: Record<string, TAnyValue> | null;
  PointExpirationPolicyType?: string | null;
  PointPendingPolicyData?: Record<string, TAnyValue> | null;
  PointPendingPolicyType?: string | null;
  /**
  * Entity type: PriceList
  */
  PriceLists?: string[];
  ProductLimitations?: LoyaltyPushLoyaltyProgram_PushLoyaltyProgramProductLimitation[];
  ReactivateProgramWhenPossible?: boolean;
  ReloadPolicy?: string | null;
  /**
  * When true, the loyalty program will only be applied when a customer is attached to the order.
  * 
  * When false, the loyalty program can be attached to the order even if there is no customer attached.
  */
  RequireCustomer?: boolean;
  /**
  * When set to true, subscribing the user will require a UserIdentifier to be given.
  * Attention!
  * This value will be used to create a subscription when either `RequiredCustomer` or `AutoSubscribeCustomer` is set to true.
  * When this is not the case on create, this can be introduced on update. This value cannot be changed after it is set in either the create or update.
  */
  RequireManualUserIdentifier?: boolean | null;
  RequiredCustomFields?: string[];
  /**
  * When true, the loyalty program will only be applied when a customer is attached to the order that is already subscribed to the loyalty program.
  * Also, this will make the `RequireCustomer` automatically true and `AutoSubscribeCustomer` false.
  * 
  * When false, the loyalty program can be attached to the order if a customer is attached that isn't already subscribed to the loyalty program.
  */
  RequiresSubscribedCustomer?: boolean;
  /**
  * When true, the order will require that the attached customer on the order will be validated by providing the UserIdentifier in the `AttachBenefitProgramToOrder` service.
  * Also, this will make the `RequireCustomer` and `RequiresSubscribedCustomer` automatically true and `AutoSubscribeCustomer` false.
  * 
  * When false, this validation isn't required.
  */
  RequiresSubscriptionValidation?: boolean;
  /**
  * Handling when a user is unsubscribed and re-subscribes.
  */
  ResubscribeHandling?: DataModelsResubscribeHandlingType;
  StartDate?: string | null;
  Status?: DataModelsLoyaltyProgramStatus;
  /**
  * Indicate the type of program, cannot be updated.
  */
  Type?: DataModelsProgramType;
  UserBudget?: number | null;
  /**
  * Attention!
  * This value will be used to create a subscription when either `RequiredCustomer` or `AutoSubscribeCustomer` is set to true.
  * When this is not the case on create, this can be introduced on update. This value cannot be changed after it is set in either the create or update.
  */
  UserIdentifierPrefix?: string | null;
  /**
  * Attention!
  * This value will be used to create a subscription when either `RequiredCustomer` or `AutoSubscribeCustomer` is set to true.
  * When this is not the case on create, this can be introduced on update. This value cannot be changed after it is set in either the create or update.
  */
  UserIdentifierStartNumber?: number | null;
  /**
  * Attention!
  * This value will be used to create a subscription when either `RequiredCustomer` or `AutoSubscribeCustomer` is set to true.
  * When this is not the case on create, this can be introduced on update. This value cannot be changed after it is set in either the create or update.
  */
  UserIdentifierSuffix?: string | null;
  UserMaximumUsage?: number | null;
}

export interface LoyaltyPushLoyaltyProgram_PushLoyaltyProgramCondition {
  Data: Record<string, TAnyValue>;
  /**
  * Entity type: LoyaltyProgramCondition
  */
  ID: string;
  Type: string;
}

export interface LoyaltyPushLoyaltyProgram_PushLoyaltyProgramOrganizationUnitSet {
  ConfirmationRequired?: boolean;
  Enabled?: boolean;
  Hidden?: boolean;
  OrganizationUnitSetID?: string;
  SubscriptionConfirmation?: DataModelsSubscriptionConfirmation;
}

export interface LoyaltyPushLoyaltyProgram_PushLoyaltyProgramPaymentType {
  AllowPartialPayment?: boolean;
  ApplyToPriceList?: boolean;
  Budget?: number;
  ExcludeFromProgramBudget?: boolean;
  /**
  * Entity type: LoyaltyProgramPaymentType
  */
  ID: string;
  MaximumAmountPerOrder?: number;
  MaximumPercentageOfUserBudgetPerOrder?: number;
  /**
  * Entity type: PaymentType
  */
  PaymentTypeID: string;
  ProductLimitation?: LoyaltyPushLoyaltyProgram_PushLoyaltyProgramPaymentType_ProductLimitationData;
  Required?: boolean;
  Sequence?: number;
  TaxHandling?: DataModelsLoyaltyPaymentTaxHandlingType;
  UserBudget?: number;
  UserBudgetDeduction?: DataModelsUserBudgetDeduction;
  UserMaximumUsage?: number;
}

export interface LoyaltyPushLoyaltyProgram_PushLoyaltyProgramPaymentType_ProductLimitationData {
  Filters?: Record<string,SearchFilterModel>;
  /**
  * The quantity limit over the entire product limitation product set per order.
  */
  OverallQuantityLimitPerOrder?: number;
  /**
  * The quantity limit over the entire product limitation product set per user.
  */
  OverallQuantityLimitPerUser?: number;
  /**
  * Entity type: Product
  */
  ProductIDs?: string[];
  /**
  * Entity type: ProductSearchTemplate
  */
  ProductSearchID?: string;
  /**
  * The quantity limit per product within the product limitation product set per order.
  */
  QuantityLimitPerOrder?: number;
  /**
  * The quantity limit per product within the product limitation product set per user.
  */
  QuantityLimitPerUser?: number;
}

export interface LoyaltyPushLoyaltyProgram_PushLoyaltyProgramProductLimitation {
  ApplyToPriceList?: boolean;
  Filters?: Record<string,SearchFilterModel>;
  ID: string;
  Name: string;
  OverallQuantityLimitPerOrder?: number;
  OverallQuantityLimitPerUser?: number;
  /**
  * Entity type: Product
  */
  ProductIDs?: string[];
  /**
  * Entity type: ProductSearchTemplate
  */
  ProductSearchID?: string;
  QuantityLimitPerOrder?: number;
  QuantityLimitPerUser?: number;
}

export interface LoyaltyPushLoyaltyProgram_PushPointAwardingRule {
  ApplyRecursive?: boolean;
  Conditions?: LoyaltyPushLoyaltyProgram_PushPointAwardingRuleCondition[];
  Description?: string;
  Enabled?: boolean;
  EndDate?: string;
  ID: string;
  MarketingDescription?: string;
  Name: string;
  /**
  * Entity type: OrganizationUnitSet
  */
  OrganizationUnitSetID: string;
  PointExpirationPolicyData?: TAnyValue;
  PointExpirationPolicyType?: string;
  PointPendingPolicyData?: TAnyValue;
  PointPendingPolicyType?: string;
  PointsToAward?: number;
  StartDate: string;
}

export interface LoyaltyPushLoyaltyProgram_PushPointAwardingRuleCondition {
  Data?: LoyaltyRulesEmptyPointAwardingConditionData | LoyaltyRulesLoyaltyBadgePointAwardingConditionData | LoyaltyRulesLoyaltyTierPointAwardingConditionData | LoyaltyRulesOrderAmountPointAwardingConditionData | LoyaltyRulesOrderQuantityPointAwardingConditionData | LoyaltyRulesProductPointAwardingConditionData | LoyaltyRulesUserCustomFieldPointAwardingConditionData;
  ID: string;
  Type: 'LOYALTYBADGE' | 'LOYALTYTIER' | 'ORDERAMOUNT' | 'ORDERQUANTITY' | 'PRODUCT' | 'USERCUSTOMFIELD';
}

/**
* Push a LoyaltyProgramGroup.
* If it doesn't exist it will be created, otherwise is will be updated.
* 
* ATTENTION!
* When the currency is changed, the budget usages will be reset to 0!
* 
* ATTENTION!
* When a change to Status, StartDate, EndDate or Currency leads to the group being deactivated, all related loyalty programs will also be deactivated.
* When a change to Status, StartDate, EndDate or Currency leads to the group being reactivated, all related loyalty programs will also be reactivated when the option ReactivateProgramsWhenPossible is set to true. Otherwise all deactivated programs need to be manually reactivated.
* 
* ATTENTION!
* When the budget is lowered below the current used budget and the `DeactivateWhenBudgetIsReached` is set to true, all related programs will be deactivated.
* When the budget is cleared or raised above the current used budget, or `DeactivateWhenBudgetIsReached` is set to false, and the `ReactivateProgramsWhenPossible` is set to true, all programs that were deactivate by the group budget will be reactivated when possible.
*/
export interface LoyaltyPushLoyaltyProgramGroup extends RequestMessage<PushLoyaltyProgramGroupResponse> {
  Budget?: number;
  /**
  * Entity type: Currency
  */
  BudgetCurrencyID?: string;
  DeactivateWhenBudgetIsReached?: boolean;
  EndDate?: string;
  /**
  * Entity type: LoyaltyProgramGroup
  */
  ID: string;
  Name: string;
  StartDate?: string;
  Status?: DataModelsLoyaltyProgramStatus;
  TaxExemptionCode?: string;
}

export interface PushLoyaltyProgramGroupResponse extends ResponseMessage {
  /**
  * Entity type: LoyaltyProgram
  */
  ID: number;
}

export interface PushLoyaltyProgramGroup_Async extends LoyaltyPushLoyaltyProgramGroup {
}

export interface PushLoyaltyProgramGroup_AsyncResponse extends AsyncRequestHandlingAsyncRequestResponse {
}

export interface PushLoyaltyProgramGroup_AsyncResult extends AsyncRequestHandlingAsyncRequestResultRequest {
}

export interface PushLoyaltyProgramResponse extends ResponseMessage {
  /**
  * Entity type: LoyaltyProgram
  */
  ID: number;
  /**
  * Entity type: Subscription
  */
  SubscriptionID: number;
}

export interface PushLoyaltyProgram_Async extends LoyaltyPushLoyaltyProgram {
}

export interface PushLoyaltyProgram_AsyncResponse extends AsyncRequestHandlingAsyncRequestResponse {
}

export interface PushLoyaltyProgram_AsyncResult extends AsyncRequestHandlingAsyncRequestResultRequest {
}

/**
* Push multiple loyalty programs at once.
* If a loyalty program doesn't exist it will be created, otherwise it will be updated.
* Sub entities will also be created or updated, but will not be removed.
* There is a limit (1000) of loyalty programs that can be pushed a once.
*/
export interface LoyaltyPushLoyaltyPrograms extends RequestMessage<PushLoyaltyProgramsResponse> {
  /**
  * Enabling this will try to suppress as many event exports as possible that might result from this call.
  */
  DisableEventExports?: boolean;
  LoyaltyPrograms: LoyaltyPushLoyaltyProgram[];
}

export interface PushLoyaltyProgramsResponse extends ResponseMessage {
  FailedToAdjustLoyaltyPrograms?: LoyaltyPushLoyaltyProgramsResponse_FailedToAdjustLoyaltyProgram[];
  SuccessfullyAdjustedLoyaltyPrograms?: LoyaltyPushLoyaltyProgramsResponse_SuccessfullyAdjustedLoyaltyProgram[];
}

export interface LoyaltyPushLoyaltyProgramsResponse_FailedToAdjustLoyaltyProgram {
  /**
  * Entity type: LoyaltyProgram
  */
  BackendID?: string;
  ErrorIdentifier?: string;
}

export interface LoyaltyPushLoyaltyProgramsResponse_SuccessfullyAdjustedLoyaltyProgram {
  /**
  * Entity type: LoyaltyProgram
  */
  ID: number;
}

export interface PushLoyaltyPrograms_Async extends LoyaltyPushLoyaltyPrograms {
}

export interface PushLoyaltyPrograms_AsyncResponse extends AsyncRequestHandlingAsyncRequestResponse {
}

export interface PushLoyaltyPrograms_AsyncResult extends AsyncRequestHandlingAsyncRequestResultRequest {
}

/**
* Rebalance loyalty points of a user
*/
export interface RebalanceLoyaltyPoints extends RequestMessageWithEmptyResponse {
  /**
  * Expiration date will be calculated based on the loyalty program expiration policy and current date and applied to the given NewPointBalance. Ignored when NewPointBalance is 0.
  */
  ApplyProgramExpiration?: boolean;
  /**
  * Date when the new points will be expired. When null provided, the loyalty points will not expire. When date provided, the new balance will expire on that date. Ignored when `ApplyProgramExpiration` is set to true. Ignored when NewPointBalance is 0.
  */
  ExpirationDate?: string;
  /**
  * If this is set to true, pending points will be kept. When false, all pending points are also removed.
  */
  KeepPendingPoints?: boolean;
  /**
  * Entity type: LoyaltyProgram
  */
  LoyaltyProgramID: number;
  /**
  * If this is set, the balance will be adjusted with the given point balance. This will ignore pending points when they are kept.
  */
  NewPointBalance?: number;
  /**
  * Entity type: User
  */
  UserID: number;
}

/**
* Asynchronously rebalance loyalty points of multiple users for a loyalty program.
* This service is not transactional, meaning that if a mutation fails, other mutations that have already succeeded will not be reverted.
* The maximum amount of users that can be rebalanced in a single request is 10,000.
*/
export interface LoyaltyRebalanceLoyaltyPointsForUsers extends RequestMessage<RebalanceLoyaltyPointsForUsersResponse> {
  /**
  * Entity type: LoyaltyProgram
  */
  LoyaltyProgramID: number;
  UserLoyaltyPointAdjustments: LoyaltyUserLoyaltyPointAdjustment[];
}

export interface RebalanceLoyaltyPointsForUsersResponse extends ResponseMessage {
  /**
  * The users that failed to adjust. Null when no users failed to adjust.
  */
  FailedToAdjustUsers?: LoyaltyRebalanceLoyaltyPointsForUsersResponse_FailedToAdjustUser[];
  /**
  * Entity type: LoyaltyProgram
  */
  LoyaltyProgramID: number;
  /**
  * The users that were successfully adjusted. Null when no users were successfully adjusted.
  */
  SuccessfullyAdjustedUsers?: LoyaltyRebalanceLoyaltyPointsForUsersResponse_SuccessfullyAdjustedUser[];
}

export interface LoyaltyRebalanceLoyaltyPointsForUsersResponse_FailedToAdjustUser {
  AdjustmentType: LoyaltyLoyaltyPointAdjustmentType;
  ApplyProgramExpiration: boolean;
  ErrorIdentifier?: string;
  ExpirationDate?: string;
  KeepPendingPoints: boolean;
  Points: number;
  /**
  * Entity type: User
  */
  UserID: number;
}

export interface LoyaltyRebalanceLoyaltyPointsForUsersResponse_SuccessfullyAdjustedUser {
  NewLoyaltyPointBalance: number;
  /**
  * Entity type: User
  */
  UserID: number;
}

export interface RebalanceLoyaltyPointsForUsers_Async extends LoyaltyRebalanceLoyaltyPointsForUsers {
}

export interface RebalanceLoyaltyPointsForUsers_AsyncResponse extends AsyncRequestHandlingAsyncRequestResponse {
}

export interface RebalanceLoyaltyPointsForUsers_AsyncResult extends AsyncRequestHandlingAsyncRequestResultRequest {
}

/**
* Reload a loyalty program tier benefit for a user
*/
export interface ReloadLoyaltyProgramTierBenefit extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: LoyaltyProgram
  */
  LoyaltyProgramID: number;
  /**
  * Entity type: LoyaltyProgramBenefit
  */
  TierBenefitID: number;
  /**
  * Entity type: User
  */
  UserID: number;
}

/**
* Remove benfits from a loyalty program tier.
*/
export interface RemoveBenefitsFromLoyaltyProgramTier extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: LoyaltyProgramBenefit
  */
  BenefitIDs: number[];
  /**
  * Entity type: LoyaltyProgramTier
  */
  LoyaltyProgramTierID: number;
}

/**
* Removes a price list from a loyalty program.
*/
export interface RemoveLoyaltyProgramPriceList extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: LoyaltyProgram
  */
  LoyaltyProgramID: number;
  /**
  * Entity type: PriceList
  */
  PriceListID: number;
}

/**
* Removes a custom field requirement from a loyalty program.
*/
export interface RemoveLoyaltyProgramRequiredCustomField extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: CustomField
  */
  CustomFieldID: number;
  /**
  * Entity type: LoyaltyProgram
  */
  LoyaltyProgramID: number;
}

/**
* Revoke deposited loyalty points
*/
export interface RevokeLoyaltyPoints extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: LoyaltyProgram
  */
  LoyaltyProgramID: number;
  /**
  * Points to revoke. When left empty the entire transaction will be revoked.
  */
  Points?: number;
  TransactionID: string;
  /**
  * Entity type: User
  */
  UserID: number;
}

/**
* Set a LoyaltyProgramTier as the default tier for its loyalty program. Automatically unsets the previous default tier.
*/
export interface SetDefaultLoyaltyProgramTier extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: LoyaltyProgram
  */
  LoyaltyProgramID: number;
  /**
  * Entity type: LoyaltyProgramTier
  */
  TierID: number;
}

/**
* Sets the sequence of all badges within a loyalty program and category scope. All non-deleted badges in the scope must be provided.
*/
export interface SetLoyaltyProgramBadgeSequences extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: LoyaltyProgramBadge
  */
  BadgeIDs: number[];
  /**
  * Entity type: LoyaltyProgramBadgeCategory
  */
  CategoryID?: number;
  /**
  * Entity type: LoyaltyProgram
  */
  LoyaltyProgramID: number;
}

/**
* Set the optional loyalty program payment types for the order.
*/
export interface SetOrderLoyaltyProgramPaymentTypes extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: Order
  */
  OrderID: number;
  /**
  * Entity type: LoyaltyProgramPaymentType
  * When left empty no optional payment types will be available. Required payment types cannot be unselected.
  */
  SelectedLoyaltyProgramPaymentTypes: number[];
}

/**
* Update an existing LoyaltyProgram
*/
export interface UpdateLoyaltyProgram extends RequestMessageWithEmptyResponse {
  /**
  * Indicates if the subscription can be unsubscribed and if so, who can do the unsubscribe.
  */
  AllowUnsubscribeBy?: DataModelsAllowUnsubscribeByType;
  /**
  * This property has been deprecated. A loyaltyprogram should always be manually applied.
  */
  ApplyManuallyOnly?: boolean;
  /**
  * When true, if a non anonymous customer is attached to the order they will be automatically subscribed on finishing the order.
  * When false, the customer will not be subscribed.
  * 
  * This is ignore when`RequiresSubscribedCustomer` or `RequiresSubscriptionValidation` is set to true.
  */
  AutoSubscribeCustomer?: boolean;
  BackendID?: string | null;
  BenefitReloadPolicy?: DataModelsBenefitReloadPolicy;
  /**
  * Entity type: Currency
  */
  BudgetCurrencyID?: string | null;
  /**
  * Entity type: Company
  * Attaches the loyalty program to a consumer company.
  */
  CompanyID?: number | null;
  CustomFields?: DataModelsCustomFieldKeyValue[] | null;
  Data?: TAnyValue | null;
  Description?: string | null;
  EndDate?: string | null;
  /**
  * Entity type: LoyaltyProgram
  */
  ID: number;
  ImageBlobID?: string | null;
  LoyaltyPointUsageOptions?: DataModelsLoyaltyPointUsageOptions;
  /**
  * Entity type: LoyaltyProgramGroup
  */
  LoyaltyProgramGroupID?: number | null;
  Name?: string;
  Options?: DataModelsLoyaltyProgramOptions;
  PointExpirationPolicyData?: LoyaltyEmptyPointPolicyData | LoyaltyCustomPointPolicyData | LoyaltyExpireEndOfYearPointPolicyData | LoyaltyExpireEndOfMonthPointPolicyData | LoyaltyExpireSetDatePointPolicyData | null;
  PointExpirationPolicyType?: 'DEFAULT' | 'CUSTOM' | 'PENDINGRETURNPERIOD' | 'EXPIREENDOFYEAR' | 'EXPIREENDOFMONTH' | 'EXPIRESETDATE' | null;
  PointNamePlural?: string | null;
  PointNameSingular?: string | null;
  PointPendingPolicyData?: LoyaltyEmptyPointPolicyData | LoyaltyCustomPointPolicyData | LoyaltyExpireEndOfYearPointPolicyData | LoyaltyExpireEndOfMonthPointPolicyData | LoyaltyExpireSetDatePointPolicyData | null;
  PointPendingPolicyType?: 'DEFAULT' | 'CUSTOM' | 'PENDINGRETURNPERIOD' | 'EXPIREENDOFYEAR' | 'EXPIREENDOFMONTH' | 'EXPIRESETDATE' | null;
  ReloadPolicy?: string | null;
  /**
  * When true, the loyalty program will only be applied when a customer is attached to the order.
  * 
  * When false, the loyalty program can be attached to the order even if there is no customer attached.
  */
  RequireCustomer?: boolean;
  /**
  * When set to true, subscribing the user will require a UserIdentifier to be given. Will be ignored is this was already set on create.
  * Attention!
  * This value will be used to create a subscription when either `RequiredCustomer` or `AutoSubscribeCustomer` is set to true.
  * This value cannot be changed after it is set in either the create or update.
  */
  RequireManualUserIdentifier?: boolean | null;
  /**
  * When true, the loyalty program will only be applied when a customer is attached to the order that is already subscribed to the loyalty program.
  * Also, this will make the `RequireCustomer` automatically true and `AutoSubscribeCustomer` false.
  * 
  * When false, the loyalty program can be attached to the order if a customer is attached that isn't already subscribed to the loyalty program.
  */
  RequiresSubscribedCustomer?: boolean;
  /**
  * When true, the order will require that the attached customer on the order will be validated by providing the UserIdentifier in the `AttachBenefitProgramToOrder` service.
  * Also, this will make the `RequireCustomer` and `RequiresSubscribedCustomer` automatically true and `AutoSubscribeCustomer` false.
  * 
  * When false, this validation isn't required.
  */
  RequiresSubscriptionValidation?: boolean;
  /**
  * Handling when a user is unsubscribed and re-subscribes.
  */
  ResubscribeHandling?: DataModelsResubscribeHandlingType;
  StartDate?: string | null;
  Status?: DataModelsLoyaltyProgramStatus;
  TierPolicyData?: LoyaltyEmptyTierPolicyData | LoyaltyCustomTierPolicyData | LoyaltyFixedDateTierPolicyData | null;
  TierPolicyType?: 'DEFAULT' | 'CUSTOM' | 'FIXEDDATE' | null;
  UsageType?: DataModelsLoyaltyProgramUsageTypes;
  UserBudget?: number | null;
  /**
  * Attention!
  * This value will be used to create a subscription when either `RequiredCustomer` or `AutoSubscribeCustomer` is set to true.
  * This value cannot be changed after it is set in either the create or update.
  */
  UserIdentifierPrefix?: string | null;
  /**
  * Attention!
  * This value will be used to create a subscription when either `RequiredCustomer` or `AutoSubscribeCustomer` is set to true.
  * This value cannot be changed after it is set in either the create or update.
  */
  UserIdentifierStartNumber?: number | null;
  /**
  * Attention!
  * This value will be used to create a subscription when either `RequiredCustomer` or `AutoSubscribeCustomer` is set to true.
  * This value cannot be changed after it is set in either the create or update.
  */
  UserIdentifierSuffix?: string | null;
  UserMaximumUsage?: number | null;
}

/**
* Update an existing LoyaltyProgramBadge
*/
export interface UpdateLoyaltyProgramBadge extends RequestMessageWithEmptyResponse {
  BackendID?: string | null;
  BlobID?: string;
  /**
  * Entity type: LoyaltyProgramBadgeCategory
  */
  CategoryID?: number | null;
  CustomFieldFilter?: DataModelsCustomFieldFilter;
  Description?: string | null;
  /**
  * Entity type: LoyaltyProgramBadge
  */
  ID: number;
  IsManual?: boolean;
  MustMeetAllConditions?: boolean;
  Name?: string;
  PointsToAward?: number | null;
  PointsToReach?: number | null;
  ProductQuantityToReach?: number | null;
  /**
  * Entity type: ProductSearchTemplate
  */
  ProductSearchTemplateID?: number | null;
  UniqueProductsOnly?: boolean;
}

/**
* Update a loyalty program badge category. The loyalty program a category is bound to cannot be changed.
*/
export interface UpdateLoyaltyProgramBadgeCategory extends RequestMessageWithEmptyResponse {
  BackendID?: string | null;
  Description?: string | null;
  /**
  * Entity type: LoyaltyProgramBadgeCategory
  */
  ID: number;
  Name?: string;
}

/**
* Update an existing LoyaltyProgramBadgeCondition
*/
export interface UpdateLoyaltyProgramBadgeCondition extends RequestMessageWithEmptyResponse {
  Data?: LoyaltyBadgesConditionsBadgeConditionData | LoyaltyBadgesConditionsCustomFieldConditionData | LoyaltyBadgesConditionsPointThresholdConditionData | LoyaltyBadgesConditionsBadgeProductConditionData | LoyaltyBadgesConditionsTierConditionData | MiscConditionsCouponOriginatingOrderOrganizationUnitConditionData | MiscConditionsCouponValidityConditionData | MiscConditionsCustomerAgeConditionData | MiscConditionsCustomerConditionData | MiscConditionsLoyaltyBadgeConditionData | MiscConditionsLoyaltyPointsConditionData | MiscConditionsLoyaltyTierConditionData | MiscConditionsMaximumUsePerUserConditionData | MiscConditionsMinimumProductSubscriptionRenewalsConditionData | MiscConditionsOldUserFieldConditionData | MiscConditionsOrderAmountConditionData | MiscConditionsOrderCustomFieldConditionData | MiscConditionsOrderLineCustomFieldConditionData | MiscConditionsOrderPropertiesConditionData | MiscConditionsOrderTypeConditionData | MiscConditionsOrganizationUnitConditionData | MiscConditionsOrganizationUnitTypeConditionData | MiscConditionsProductConditionData | MiscConditionsProductRequirementConditionData | MiscConditionsStockLabelConditionData | MiscConditionsUserCustomFieldConditionData | MiscConditionsUserRoleConditionData | MiscConditionsUserTypeConditionData | EmptyConditionData | null;
  /**
  * Entity type: LoyaltyProgramBadgeCondition
  */
  ID: number;
  RequireForVisibility?: boolean;
}

/**
* Update a loyalty program benefit.
*/
export interface UpdateLoyaltyProgramBenefit extends RequestMessageWithEmptyResponse {
  ApplyDiscountAutomatically?: boolean;
  BlobID?: string | null;
  CanReload?: boolean;
  CustomFieldFilter?: DataModelsCustomFieldFilter;
  /**
  * Entity type: CustomField
  */
  CustomFieldID?: number | null;
  Description?: string;
  /**
  * Entity type: Discount
  */
  DiscountIDs?: number[] | null;
  /**
  * Entity type: LoyaltyProgramBenefit
  */
  ID: number;
  IsManualClaimed?: boolean;
  /**
  * Entity type: LoyaltyProgram
  */
  LoyaltyProgramID: number;
  MaxUsage?: number | null;
  PointThreshold?: number | null;
  Title?: string;
  UseCustomFieldAsUsage?: boolean;
}

/**
* Update the budget on the loyalty program group.
* ATTENTION! When the currency is changed, the used budget registration will be reset to 0!
* When the budget is lowered below the current used budget and the `DeactivateWhenBudgetIsReached` is set to true, all related programs will be deactivated.
* When the budget is cleared or raised above the current used budget, or `DeactivateWhenBudgetIsReached` is set to false, and the `ReactivateProgramsWhenPossible` is set to true, all programs that were deactivate by the group budget will be reactivated when possible.
*/
export interface UpdateLoyaltyProgramBudget extends RequestMessageWithEmptyResponse {
  Budget?: number;
  DeactivateWhenBudgetIsReached?: boolean;
  /**
  * Entity type: LoyaltyProgram
  */
  ID: number;
  ReactivateProgramWhenPossible?: boolean;
}

/**
* Update an existing LoyaltyProgramCondition
*/
export interface UpdateLoyaltyProgramCondition extends RequestMessageWithEmptyResponse {
  Data?: LoyaltyBadgesConditionsBadgeConditionData | LoyaltyBadgesConditionsCustomFieldConditionData | LoyaltyBadgesConditionsPointThresholdConditionData | LoyaltyBadgesConditionsBadgeProductConditionData | LoyaltyBadgesConditionsTierConditionData | MiscConditionsCouponOriginatingOrderOrganizationUnitConditionData | MiscConditionsCouponValidityConditionData | MiscConditionsCustomerAgeConditionData | MiscConditionsCustomerConditionData | MiscConditionsLoyaltyBadgeConditionData | MiscConditionsLoyaltyPointsConditionData | MiscConditionsLoyaltyTierConditionData | MiscConditionsMaximumUsePerUserConditionData | MiscConditionsMinimumProductSubscriptionRenewalsConditionData | MiscConditionsOldUserFieldConditionData | MiscConditionsOrderAmountConditionData | MiscConditionsOrderCustomFieldConditionData | MiscConditionsOrderLineCustomFieldConditionData | MiscConditionsOrderPropertiesConditionData | MiscConditionsOrderTypeConditionData | MiscConditionsOrganizationUnitConditionData | MiscConditionsOrganizationUnitTypeConditionData | MiscConditionsProductConditionData | MiscConditionsProductRequirementConditionData | MiscConditionsStockLabelConditionData | MiscConditionsUserCustomFieldConditionData | MiscConditionsUserRoleConditionData | MiscConditionsUserTypeConditionData | EmptyConditionData;
  /**
  * Entity type: LoyaltyProgramCondition
  */
  ID: number;
}

/**
* Update an existing LoyaltyProgramGroup
* 
* ATTENTION!
* When the currency is changed, the budget usages will be reset to 0!
* 
* ATTENTION!
* When a change to Status, StartDate, EndDate or Currency leads to the group being deactivated, all related loyalty programs will also be deactivated.
* When a change to Status, StartDate, EndDate or Currency leads to the group being reactivate, all related loyalty programs will also be reactive when the option ReactivateProgramsWhenPossible is set to true. Otherwise all deactivated programs need to be manually reactivated.
*/
export interface UpdateLoyaltyProgramGroup extends RequestMessageWithEmptyResponse {
  BackendID?: string | null;
  /**
  * Entity type: Currency
  */
  BudgetCurrencyID?: string | null;
  EndDate?: string | null;
  /**
  * Entity type: LoyaltyProgramGroup
  */
  ID: number;
  Name?: string | null;
  ReactivateProgramsWhenPossible?: boolean;
  StartDate?: string | null;
  Status?: DataModelsLoyaltyProgramStatus;
  TaxExemptionCode?: string | null;
}

/**
* Update the budget on the loyalty program group.
* ATTENTION!
* When the budget is lowered below the current used budget and the `DeactivateWhenBudgetIsReached` is set to true, all related programs will be deactivated.
* When the budget is cleared or raised above the current used budget, or `DeactivateWhenBudgetIsReached` is set to false, and the `ReactivateProgramsWhenPossible` is set to true, all programs that were deactivate by the group budget will be reactivated when possible.
*/
export interface UpdateLoyaltyProgramGroupBudget extends RequestMessageWithEmptyResponse {
  Budget?: number;
  DeactivateWhenBudgetIsReached?: boolean;
  /**
  * Entity type: LoyaltyProgramGroup
  */
  ID: number;
  ReactivateProgramsWhenPossible?: boolean;
}

/**
* Update an existing LoyaltyProgramPass
*/
export interface UpdateLoyaltyProgramPass extends RequestMessageWithEmptyResponse {
  BackendID?: string | null;
  /**
  * When provided the certificate string is securely stored and no longer exposed.
  */
  CertificateString?: string | null;
  Description?: string | null;
  /**
  * Entity type: LoyaltyProgramPass
  */
  ID: number;
  Name?: string;
  PassTypeID?: string;
  URL?: string | null;
}

/**
* Update an existing LoyaltyProgramPaymentType
*/
export interface UpdateLoyaltyProgramPaymentType extends RequestMessageWithEmptyResponse {
  AllowPartialPayment?: boolean;
  ApplyToPriceList?: boolean;
  BackendID?: string;
  Budget?: number;
  ExcludeFromProgramBudget?: boolean;
  /**
  * Entity type: LoyaltyProgramPaymentType
  */
  ID: number;
  MaximumAmountPerOrder?: number;
  MaximumPercentageOfUserBudgetPerOrder?: number;
  ProductLimitation?: LoyaltyLoyaltyProgramProductLimitationData;
  Required?: boolean;
  Sequence?: number;
  TaxHandling?: DataModelsLoyaltyPaymentTaxHandlingType;
  UserBudget?: number;
  UserBudgetDeduction?: DataModelsUserBudgetDeduction;
  UserMaximumUsage?: number;
}

/**
* Update a loyalty program product limitation.
*/
export interface UpdateLoyaltyProgramProductLimitation extends RequestMessageWithEmptyResponse {
  ApplyToPriceList?: boolean;
  BackendID?: string;
  /**
  * Entity type: LoyaltyProgramProductLimitation
  */
  ID: number;
  Name: string;
  ProductLimitation?: LoyaltyLoyaltyProgramProductLimitationData;
}

/**
* Update an existing LoyaltyProgramTier
*/
export interface UpdateLoyaltyProgramTier extends RequestMessageWithEmptyResponse {
  BackendID?: string | null;
  /**
  * Entity type: LoyaltyProgramTier
  */
  ID: number;
  ImageBlobUrl?: string | null;
  /**
  * Only applicable for tiers that are not point based. A default tier is automatically assigned when subscribing to the loyalty program. Cannot be combined with IsHiddenUntilReached.
  */
  IsDefault?: boolean;
  /**
  * If true, the tier will be hidden until the user reaches it. Cannot be combined with IsDefault.
  */
  IsHiddenUntilReached?: boolean;
  Name?: string;
  /**
  * If 0, the tier is considered the default tier.
  */
  PointThreshold?: number;
  /**
  * If true, an email will be sent to the user when they are assigned to this tier.
  */
  SendMailOnAssign?: boolean;
}

/**
* Updates a benfit of a loyalty program tier.
*/
export interface UpdateLoyaltyProgramTierBenefit extends RequestMessageWithEmptyResponse {
  ApplyDiscountAutomatically?: boolean;
  BlobID?: string | null;
  CanReload?: boolean;
  CustomFieldFilter?: DataModelsCustomFieldFilter;
  /**
  * Entity type: CustomField
  */
  CustomFieldID?: number | null;
  Data?: LoyaltyEmptyBenefitData | LoyaltyAppointmentBenefitData | null;
  Description?: string;
  /**
  * Entity type: Discount
  * Add a discount to a loyalty program tier that will generate a coupon on tier assignation
  */
  DiscountID?: number | null;
  /**
  * Entity type: LoyaltyProgramBenefit
  */
  ID: number;
  IsManualClaimed?: boolean;
  /**
  * Entity type: LoyaltyProgramTier
  */
  LoyaltyProgramTierID: number;
  MaxUsage?: number | null;
  PointThreshold?: number | null;
  Title?: string;
  UseCustomFieldAsUsage?: boolean;
}

/**
* Update a point awarding rule
*/
export interface UpdatePointAwardingRule extends RequestMessageWithEmptyResponse {
  ApplyRecursive?: boolean;
  BackendID?: string | null;
  Conditions?: LoyaltyUpdatePointAwardingRule_Condition[];
  Description?: string | null;
  DurationInterval?: number | null;
  DurationType?: LoyaltyDurationType;
  Enabled?: boolean;
  EndDate?: string | null;
  /**
  * Entity type: PointAwardingRule
  */
  ID: number;
  MarketingDescription?: string | null;
  Name?: string;
  /**
  * Entity type: OrganizationUnitSet
  */
  OrganizationUnitSetID?: number;
  PointExpirationPolicyData?: LoyaltyEmptyPointPolicyData | LoyaltyCustomPointPolicyData | LoyaltyExpireEndOfYearPointPolicyData | LoyaltyExpireEndOfMonthPointPolicyData | LoyaltyExpireSetDatePointPolicyData | null;
  PointExpirationPolicyType?: 'DEFAULT' | 'CUSTOM' | 'PENDINGRETURNPERIOD' | 'EXPIREENDOFYEAR' | 'EXPIREENDOFMONTH' | 'EXPIRESETDATE' | null;
  PointPendingPolicyData?: LoyaltyEmptyPointPolicyData | LoyaltyCustomPointPolicyData | LoyaltyExpireEndOfYearPointPolicyData | LoyaltyExpireEndOfMonthPointPolicyData | LoyaltyExpireSetDatePointPolicyData | null;
  PointPendingPolicyType?: 'DEFAULT' | 'CUSTOM' | 'PENDINGRETURNPERIOD' | 'EXPIREENDOFYEAR' | 'EXPIREENDOFMONTH' | 'EXPIRESETDATE' | null;
  PointsToAward?: number;
  StartDate?: string;
}

export interface LoyaltyUpdatePointAwardingRule_Condition {
  BackendID?: string;
  Data?: LoyaltyRulesEmptyPointAwardingConditionData | LoyaltyRulesLoyaltyBadgePointAwardingConditionData | LoyaltyRulesLoyaltyTierPointAwardingConditionData | LoyaltyRulesOrderAmountPointAwardingConditionData | LoyaltyRulesOrderQuantityPointAwardingConditionData | LoyaltyRulesProductPointAwardingConditionData | LoyaltyRulesUserCustomFieldPointAwardingConditionData;
  /**
  * Entity type: PointAwardingCondition
  */
  ID?: number;
  Type: 'LOYALTYBADGE' | 'LOYALTYTIER' | 'ORDERAMOUNT' | 'ORDERQUANTITY' | 'PRODUCT' | 'USERCUSTOMFIELD';
}

export interface LoyaltyUserLoyaltyPointAdjustment {
  /**
  * How to adjust the balance. Points can be deposited, withdrew or 'rebalanced', the latter will set the balance to the given points.
  */
  AdjustmentType?: LoyaltyLoyaltyPointAdjustmentType;
  /**
  * Expiration date will be calculated based on the loyalty program expiration policy and current date and applied to the given `NewPointBalance`. Ignored if the new balance after adjustment is 0.
  */
  ApplyProgramExpiration?: boolean;
  /**
  * Date when the new points will be expired. When null provided, the loyalty points will not expire. When date provided, the new balance will expire on that date. Ignored when `ApplyProgramExpiration` is set to true. Ignored if the new balance after adjustment is 0.
  */
  ExpirationDate?: string;
  KeepPendingPoints?: boolean;
  /**
  * The amount of points to adjust.
  */
  Points?: number;
  /**
  * Entity type: User
  */
  UserID: number;
}

/**
* Withdraw loyalty points from a user
*/
export interface WithdrawLoyaltyPoints extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: LoyaltyProgram
  */
  LoyaltyProgramID: number;
  Points?: number;
  Remark?: string;
  /**
  * Entity type: User
  */
  UserID: number;
}

/**
* Create a new MessageTemplate
*/
export interface CreateMessageTemplate extends RequestMessage<CreateMessageTemplateResponse> {
  /**
  * Entity type: Country
  */
  CountryID?: string;
  Data?: CommunicationsNoCustomIntegrationData;
  Destination?: DataModelsMessageTemplateDestinations;
  Footer?: string;
  Header?: string;
  Helpers?: string;
  IsDisabled?: boolean;
  /**
  * Entity type: Language
  */
  LanguageID?: string;
  Layout?: string;
  Name: string;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID?: number;
  PaperProperties?: DataModelsPaperProperties;
  Provider?: 'kakaotalk';
  Template: string;
  Type?: DataModelsMessageTemplateTypes;
}

export interface CreateMessageTemplateResponse extends ResponseMessage {
  /**
  * Entity type: MessageTemplate
  */
  ID: number;
}

/**
* Delete a MessageTemplate
*/
export interface DeleteMessageTemplate extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: MessageTemplate
  */
  ID: number;
}

/**
* Duplicate an existing MessageTemplate
*/
export interface DuplicateMessageTemplate extends RequestMessage<DuplicateMessageTemplateResponse> {
  /**
  * Entity type: MessageTemplate
  */
  ID: number;
  Layout?: string | null;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID?: number | null;
}

export interface DuplicateMessageTemplateResponse extends ResponseMessage {
  /**
  * Entity type: MessageTemplate
  */
  ID: number;
  Type: DataModelsMessageTemplateTypes;
}

export interface GetDataModelForTemplateHandler extends RequestMessage<GetDataModelForTemplateHandlerResponse> {
  Handler?: string;
}

export interface GetDataModelForTemplateHandlerResponse extends ResponseMessage {
  DataModel?: TAnyValue;
  SampleData?: TAnyValue;
}

/**
* Get a MessageTemplate
*/
export interface GetMessageTemplateByID extends RequestMessage<GetMessageTemplateByIDResponse> {
  /**
  * Entity type: MessageTemplate
  */
  ID: number;
}

export interface GetMessageTemplateByIDResponse extends ResponseMessage {
  /**
  * Entity type: Country
  */
  CountryID?: string;
  Data?: CommunicationsNoCustomIntegrationData;
  Destination: DataModelsMessageTemplateDestinations;
  Footer?: string;
  Header?: string;
  Helpers?: string;
  /**
  * Entity type: MessageTemplate
  */
  ID: number;
  IsDisabled: boolean;
  /**
  * Entity type: Language
  */
  LanguageID?: string;
  LastModifiedAt?: string;
  LastModifiedByEmail?: string;
  /**
  * Entity type: User
  */
  LastModifiedByUserID?: number;
  Layout?: string;
  Name?: string;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID?: number;
  OrganizationUnitName?: string;
  PaperProperties?: DataModelsPaperProperties;
  Provider?: 'kakaotalk';
  Template?: string;
  Type: DataModelsMessageTemplateTypes;
}

/**
* Returns the available custom integration providers for message templates with CustomIntegration destination.
*/
export interface GetMessageTemplateCustomIntegrationProviders extends RequestMessage<GetMessageTemplateCustomIntegrationProvidersResponse> {
}

export interface GetMessageTemplateCustomIntegrationProvidersResponse extends ResponseMessage {
  Providers?: MessageTemplatesGetMessageTemplateCustomIntegrationProvidersResponse_CustomIntegrationProviderInfo[];
}

export interface MessageTemplatesGetMessageTemplateCustomIntegrationProvidersResponse_CustomIntegrationProviderInfo {
  DataTypeName?: string;
  Name?: string;
}

/**
* Get the history of a MessageTemplate
*/
export interface GetMessageTemplateHistoryByID extends RequestMessage<GetMessageTemplateHistoryByIDResponse> {
  /**
  * Entity type: MessageTemplate
  */
  ID: number;
}

export interface GetMessageTemplateHistoryByIDResponse extends ResponseMessage {
  Entries?: MessageTemplatesGetMessageTemplateHistoryByIDResponse_MessageTemplateHistoryEntry[];
}

export interface MessageTemplatesGetMessageTemplateHistoryByIDResponse_MessageTemplateHistoryEntry {
  /**
  * Entity type: Country
  */
  CountryID?: string;
  Data?: CommunicationsNoCustomIntegrationData;
  Destination: DataModelsMessageTemplateDestinations;
  ExistedFrom: string;
  ExistedTill?: string;
  Footer?: string;
  Header?: string;
  Helpers?: string;
  /**
  * Entity type: MessageTemplate
  */
  ID: number;
  IsDeleted: boolean;
  IsDisabled: boolean;
  /**
  * Entity type: Language
  */
  LanguageID?: string;
  Layout?: string;
  ModifiedAt?: string;
  ModifiedByEmail?: string;
  /**
  * Entity type: User
  */
  ModifiedByUserID?: number;
  Name?: string;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID?: number;
  PaperProperties?: DataModelsPaperProperties;
  Provider?: 'kakaotalk';
  Template?: string;
  Type: DataModelsMessageTemplateTypes;
}

export interface ListMessageTemplateLayouts extends RequestMessage<ListMessageTemplateLayoutsResponse> {
  CountryID?: string;
  Destination?: DataModelsMessageTemplateDestinations;
  LanguageID?: string;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID?: number;
}

export interface ListMessageTemplateLayoutsResponse extends ResponseMessage {
  Layouts?: string[];
}

/**
* List the MessageTemplates
*/
export interface ListMessageTemplates extends FilteredPagedResultRequest<MessageTemplatesMessageTemplateFilter, ListMessageTemplatesResponse> {
}

export interface ListMessageTemplatesResponse extends PagedResultResponse<MessageTemplatesListMessageTemplatesResponse_MessageTemplateDto> {
}

export interface MessageTemplatesListMessageTemplatesResponse_MessageTemplateDto {
  /**
  * Entity type: Country
  */
  CountryID?: string;
  Data?: CommunicationsNoCustomIntegrationData;
  Destination: DataModelsMessageTemplateDestinations;
  /**
  * Entity type: MessageTemplate
  */
  ID: number;
  IsDisabled: boolean;
  /**
  * Entity type: Language
  */
  LanguageID?: string;
  LastModifiedAt?: string;
  LastModifiedByEmail?: string;
  /**
  * Entity type: User
  */
  LastModifiedByUserID?: number;
  Layout?: string;
  Name?: string;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID?: number;
  OrganizationUnitName?: string;
  PaperProperties?: DataModelsPaperProperties;
  Provider?: 'kakaotalk';
  ReadOnly: boolean;
  Type: DataModelsMessageTemplateTypes;
}

export interface ListTemplateHandlers extends RequestMessage<ListTemplateHandlersResponse> {
}

export interface ListTemplateHandlersResponse extends ResponseMessage {
  Handlers?: string[];
}

/**
* Preview the result of the MessageTemplate
*/
export interface PreviewMessageTemplate extends RequestMessage<PreviewMessageTemplateResponse> {
  /**
  * Entity type: Country
  */
  CountryID?: string;
  Data?: CommunicationsNoCustomIntegrationData;
  Destination?: DataModelsMessageTemplateDestinations;
  Footer?: string;
  /**
  * A preview will be generated, even if device is known
  */
  ForcePreview?: boolean;
  Header?: string;
  Helpers?: string;
  /**
  * Entity type: Language
  */
  LanguageID?: string;
  Layout?: string;
  Name: string;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID?: number;
  PaperProperties?: DataModelsPaperProperties;
  Provider?: 'kakaotalk';
  SampleData?: TAnyValue;
  /**
  * Entity type: Station
  */
  StationID?: number;
  TargetContentType?: MessageTemplatesMessageTargetContentTypes;
  Template: string;
  Type?: DataModelsMessageTemplateTypes;
}

export interface PreviewMessageTemplateResponse extends ResponseMessage {
  Message?: string;
  Success: boolean;
  Url?: string;
}

export interface SendSampleMailMessageTemplate extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: Country
  */
  CountryID?: string;
  Destination?: DataModelsMessageTemplateDestinations;
  EmailAddress?: string;
  Helpers?: string;
  /**
  * Entity type: Language
  */
  LanguageID?: string;
  Layout?: string;
  Name?: string;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID?: number;
  SampleData?: TAnyValue;
  Template?: string;
  Type?: DataModelsMessageTemplateTypes;
}

/**
* Update an existing MessageTemplate
*/
export interface UpdateMessageTemplate extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: Country
  */
  CountryID?: string | null;
  Data?: CommunicationsNoCustomIntegrationData | null;
  Destination?: DataModelsMessageTemplateDestinations;
  Footer?: string | null;
  Header?: string | null;
  Helpers?: string | null;
  /**
  * Entity type: MessageTemplate
  */
  ID: number;
  IsDisabled?: boolean;
  /**
  * Entity type: Language
  */
  LanguageID?: string | null;
  Layout?: string | null;
  Name?: string;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID?: number | null;
  PaperProperties?: DataModelsPaperProperties;
  Provider?: 'kakaotalk' | null;
  Template?: string;
}

export interface OrdersCheckoutOptionCategoryDto {
  Description?: string;
  /**
  * Entity type: CheckoutOptionCategory
  */
  ID: number;
  Name: string;
  Sequence: number;
}

/**
* Create a new CheckoutOption
*/
export interface CreateCheckoutOption extends RequestMessage<CreateCheckoutOptionResponse> {
  /**
  * Entity type: CheckoutOptionCategory
  */
  CategoryID?: number;
  Data?: OrdersCheckoutOptionsNoCheckoutOptionConfigData | OrdersCheckoutOptionsOptionsCertificationOptionConfigData | OrdersCheckoutOptionsOptionsCustomFieldLineOptionConfigData | OrdersCheckoutOptionsOptionsCustomFieldOptionConfigData | OrdersCheckoutOptionsOptionsProductSearchTemplateOptionConfig | OrdersCheckoutOptionsOptionsQuickBuyOptionConfigData;
  Description?: string;
  Handler: 'SignOrder' | 'TaxFree' | 'AML' | 'Certification' | 'CustomerReferences' | 'CustomFieldLine' | 'CustomField' | 'Delivery' | 'ElectronicInvoice' | 'FiscalID' | 'FiscalRemark' | 'GiftWrapping' | 'LotteryNumber' | 'OrderBackendIdentifier' | 'PartialShipment' | 'Peppol' | 'PickupPoint' | 'ProductSearchTemplate' | 'QuickBuy' | 'Remark' | 'RequestedDate' | 'ShipmentBackendID' | 'SingleUseCompany' | 'SoldBy' | 'TaxExempt' | 'TaxRegistrationNumber' | 'VerifyOrder' | 'GlobalBlue';
  IsActive?: boolean;
  Name: string;
  OrderType?: OrdersCheckoutOptionsCheckoutOptionOrderType;
  /**
  * Entity type: OrganizationUnitSet
  */
  OrganizationUnitSetID?: number;
  /**
  * Entity type: Script
  */
  ScriptID?: number;
  Sequence?: number;
}

/**
* Create a new CheckoutOptionCategory
*/
export interface CreateCheckoutOptionCategory extends RequestMessage<CreateCheckoutOptionCategoryResponse> {
  Description?: string;
  Name: string;
  Sequence?: number;
}

export interface CreateCheckoutOptionCategoryResponse extends ResponseMessage {
  /**
  * Entity type: CheckoutOptionCategory
  */
  ID: number;
}

export interface CreateCheckoutOptionResponse extends ResponseMessage {
  /**
  * Entity type: CheckoutOption
  */
  ID: number;
}

/**
* Create custom "OrderLedgerType"
*/
export interface CreateOrderLedgerType extends RequestMessage<CreateOrderLedgerTypeResponse> {
  Description?: string;
  Name: string;
}

export interface CreateOrderLedgerTypeResponse extends ResponseMessage {
  Description?: string;
  /**
  * Entity type: OrderLedgerType
  */
  ID: number;
  Name?: string;
}

/**
* Creates a new refund reason.
*/
export interface CreateRefundCorrectionReason extends RequestMessage<CreateRefundCorrectionReasonResponse> {
  BackendID?: string;
  Description?: string;
  Name: string;
  /**
  * Entity type: OrganizationUnitSet
  */
  OrganizationUnitSetID: number;
  Priority?: number;
}

export interface CreateRefundCorrectionReasonResponse extends ResponseMessage {
  /**
  * Entity type: RefundCorrectionReason
  */
  ID: number;
}

/**
* Create a resend reason
*/
export interface CreateResendReason extends RequestMessage<CreateResendReasonResponse> {
  Description?: string;
  Name: string;
  /**
  * Entity type: OrganizationUnitSet
  */
  OrganizationUnitSetID: number;
}

export interface CreateResendReasonResponse extends ResponseMessage {
  /**
  * Entity type: ResendReason
  */
  ID: number;
}

/**
* Create a new UnitPriceCorrectionReason
*/
export interface CreateUnitPriceCorrectionReason extends RequestMessage<CreateUnitPriceCorrectionReasonResponse> {
  BackendID?: string;
  Description?: string;
  Name: string;
  /**
  * Entity type: OrganizationUnitSet
  */
  OrganizationUnitSetID?: number;
  Priority?: number;
}

export interface CreateUnitPriceCorrectionReasonResponse extends ResponseMessage {
  /**
  * Entity type: UnitPriceCorrectionReason
  */
  ID: number;
}

/**
* Delete a CheckoutOption
*/
export interface DeleteCheckoutOption extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: CheckoutOption
  */
  ID: number;
}

/**
* Delete a CheckoutOptionCategory
*/
export interface DeleteCheckoutOptionCategory extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: CheckoutOptionCategory
  */
  ID: number;
}

/**
* Delete existing "OrderLedgerType"
*/
export interface DeleteOrderLedgerType extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: OrderLedgerType
  */
  ID: number;
}

/**
* Deletes a refund reason. Note that it can still be seen on orders that have this field, but you can no longer use it.
*/
export interface DeleteRefundCorrectionReason extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: RefundCorrectionReason
  */
  ID: number;
}

/**
* Delete a resend reason
*/
export interface DeleteResendReason extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: ResendReason
  */
  ID: number;
}

/**
* Delete a UnitPriceCorrectionReason
*/
export interface DeleteUnitPriceCorrectionReason extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: UnitPriceCorrectionReason
  */
  ID: number;
}

/**
* Get the available checkout option handlers
*/
export interface GetCheckoutOptionHandlers extends RequestMessage<GetCheckoutOptionHandlersResponse> {
}

export interface GetCheckoutOptionHandlersResponse extends ResponseMessage {
  Handlers?: string[];
}

/**
* Returns a single refund reason.
*/
export interface GetRefundCorrectionReason extends RequestMessage<GetRefundCorrectionReasonResponse> {
  /**
  * Entity type: RefundCorrectionReason
  */
  ID: number;
}

export interface GetRefundCorrectionReasonResponse extends ResponseMessage {
  BackendID?: string;
  Description?: string;
  Name: string;
  /**
  * Entity type: OrganizationUnitSet
  */
  OrganizationUnitSetID: number;
  OrganizationUnitSetName: string;
  Priority: number;
}

/**
* Get a resend reason by ID
*/
export interface GetResendReason extends RequestMessage<GetResendReasonResponse> {
  /**
  * Entity type: ResendReason
  */
  ID: number;
}

export interface GetResendReasonResponse extends ResponseMessage {
  Result?: OrdersResendReasonDto;
}

/**
* Get all resend reasons for an organization unit
*/
export interface GetResendReasons extends RequestMessage<GetResendReasonsResponse> {
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID: number;
}

export interface GetResendReasonsResponse extends ResponseMessage {
  Results?: OrdersResendReasonDto[];
}

/**
* List the CheckoutOptionCategories
*/
export interface ListCheckoutOptionCategories extends PagedRequestMessage<OrdersCheckoutOptionsListCheckoutOptionCategoriesFilter, ListCheckoutOptionCategoriesResponse> {
}

export interface ListCheckoutOptionCategoriesResponse extends PagedResponseMessage<OrdersCheckoutOptionCategoryDto> {
}

/**
* Returns a list of "OrderLedgerType"
*/
export interface ListOrderLedgerTypes extends RequestMessage<ListOrderLedgerTypesResponse> {
}

export interface ListOrderLedgerTypesResponse extends ResponseMessage {
  OrderLedgerTypes?: OrdersListOrderLedgerTypesResponse_ResponseModel[];
}

export interface OrdersListOrderLedgerTypesResponse_ResponseModel {
  Description?: string;
  /**
  * Entity type: OrderLedgerType
  */
  ID: number;
  Name?: string;
}

/**
* Returns a paged result of all the refund reasons.
*/
export interface ListRefundCorrectionReasons extends PagedRequestMessage<OrdersReturnsListRefundCorrectionReasonsFilter, ListRefundCorrectionReasonsResponse> {
}

export interface ListRefundCorrectionReasonsResponse extends PagedResponseMessage<OrdersListRefundCorrectionReasonsResponse_Model> {
}

export interface OrdersListRefundCorrectionReasonsResponse_Model {
  BackendID?: string;
  Description?: string;
  /**
  * Entity type: RefundCorrectionReason
  */
  ID: number;
  Name: string;
  /**
  * Entity type: OrganizationUnitSet
  */
  OrganizationUnitSetID: number;
  OrganizationUnitSetName: string;
  Priority: number;
}

/**
* List a paged result set of resend reasons
*/
export interface ListResendReasons extends PagedRequestMessage<ResendReasonsListResendReasonsFilter, ListResendReasonsResponse> {
}

export interface ListResendReasonsResponse extends PagedResponseMessage<OrdersResendReasonDto> {
}

/**
* Returns a paged result of all the unit price correction reasons.
*/
export interface ListUnitPriceCorrectionReasons extends PagedRequestMessage<OrdersCorrectionsListUnitPriceCorrectionReasonsFilter, ListUnitPriceCorrectionReasonsResponse> {
}

export interface ListUnitPriceCorrectionReasonsResponse extends PagedResponseMessage<OrdersListUnitPriceCorrectionReasonsResponse_Model> {
}

export interface OrdersListUnitPriceCorrectionReasonsResponse_Model {
  /**
  * Entity type: UnitPriceCorrectionReason
  */
  BackendID?: string;
  Description?: string;
  /**
  * Entity type: UnitPriceCorrectionReason
  */
  ID: number;
  Name: string;
  /**
  * Entity type: OrganizationUnitSet
  */
  OrganizationUnitSetID: number;
  OrganizationUnitSetName: string;
  Priority: number;
}

export interface OrdersResendReasonDto {
  Description?: string;
  /**
  * Entity type: ResendReason
  */
  ID: number;
  Name?: string;
  /**
  * Entity type: OrganizationUnitSet
  */
  OrganizationUnitSetID: number;
}

/**
* Create a return reason
*/
export interface CreateReturnReason extends RequestMessage<CreateReturnReasonResponse> {
  BackendID?: string;
  Description?: string;
  Name: string;
  /**
  * Entity type: OrganizationUnitSet
  */
  OrganizationUnitSetID: number;
  Priority?: number;
  /**
  * Optional for backwards compatibility and defaults to `Hidden`, but should be entered. Will be required in the future.
  */
  RemarkType?: DataModelsReturnReasonRemarkType;
  /**
  * Optional for backwards compatibility and defaults to OrganizationUnit, but should be entered. Will be required in the future.
  */
  Type?: DataModelsReturnReasonType;
}

export interface CreateReturnReasonResponse extends ResponseMessage {
  /**
  * Entity type: ReturnReason
  */
  ID: number;
}

/**
* Delete a return reason
*/
export interface DeleteReturnReason extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: ReturnReason
  */
  ID: number;
}

/**
* Get all return reasons
*/
export interface GetReturnReasons extends RequestMessage<GetReturnReasonsResponse> {
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID?: number;
  /**
  * Entity type: OrganizationUnitSet
  */
  OrganizationUnitSetID?: number;
  Type?: DataModelsReturnReasonType;
}

/**
* Get the reasons by type.
*/
export interface GetReturnReasonsByType extends RequestMessage<GetReturnReasonsByTypeResponse> {
  Type?: DataModelsReturnReasonType;
}

export interface GetReturnReasonsByTypeResponse extends ResponseMessage {
  Reasons?: OrdersReturnReasonsGetReturnReasonsByTypeResponse_Reason[];
}

export interface OrdersReturnReasonsGetReturnReasonsByTypeResponse_Reason {
  BackendID?: string;
  Description?: string;
  ID: number;
  Name?: string;
  RemarkType: DataModelsReturnReasonRemarkType;
}

export interface GetReturnReasonsResponse extends ResponseMessage {
  Reasons?: OrdersReturnReasonsGetReturnReasonsResponse_ReturnReasonDto[];
}

export interface OrdersReturnReasonsGetReturnReasonsResponse_ReturnReasonDto {
  BackendID?: string;
  Description?: string;
  /**
  * Entity type: ReturnReason
  */
  ID: number;
  Name: string;
  /**
  * Entity type: OrganizationUnitSet
  */
  OrganizationUnitSetID?: number;
  OrganizationUnitSetName?: string;
  Priority: number;
  RemarkType: DataModelsReturnReasonRemarkType;
  Type: DataModelsReturnReasonType;
}

/**
* List all return reasons. Does not support sorting. Always sorted by `Priority`
*/
export interface ListReturnReasons extends FilteredPagedResultRequest<OrdersReturnReasonsListReturnReasonsFilter, ListReturnReasonsResponse> {
}

export interface OrdersReturnReasonsListReturnReasonsFilter {
  /**
  * Entity type: ReturnReason
  */
  ID?: number;
  Name?: string;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID?: number;
  /**
  * Entity type: OrganizationUnitSet
  */
  OrganizationUnitSetID?: number;
  RemarkType?: DataModelsReturnReasonRemarkType;
  Type?: DataModelsReturnReasonType;
}

export interface ListReturnReasonsResponse extends PagedResultResponse<OrdersReturnReasonsListReturnReasonsResponse_Reason> {
}

export interface OrdersReturnReasonsListReturnReasonsResponse_Reason {
  BackendID?: string;
  Description?: string;
  /**
  * Entity type: ReturnReason
  */
  ID: number;
  Name: string;
  /**
  * Entity type: OrganizationUnitSet
  */
  OrganizationUnitSetID?: number;
  OrganizationUnitSetName?: string;
  Priority: number;
  RemarkType: DataModelsReturnReasonRemarkType;
  Type: DataModelsReturnReasonType;
}

/**
* Update a return reason
*/
export interface UpdateReturnReason extends RequestMessageWithEmptyResponse {
  BackendID?: string | null;
  Description?: string | null;
  /**
  * Entity type: ReturnReason
  */
  ID: number;
  Name?: string;
  /**
  * Entity type: OrganizationUnitSet
  */
  OrganizationUnitSetID?: number;
  Priority?: number;
  RemarkType?: DataModelsReturnReasonRemarkType;
  /**
  * Optional for backwards compatibility and defaults to OrganizationUnit, but should be entered. Will be required in the future.
  */
  Type?: DataModelsReturnReasonType;
}

/**
* Update an existing CheckoutOption
*/
export interface UpdateCheckoutOption extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: CheckoutOptionCategory
  */
  CategoryID?: number | null;
  Data?: OrdersCheckoutOptionsNoCheckoutOptionConfigData | OrdersCheckoutOptionsOptionsCertificationOptionConfigData | OrdersCheckoutOptionsOptionsCustomFieldLineOptionConfigData | OrdersCheckoutOptionsOptionsCustomFieldOptionConfigData | OrdersCheckoutOptionsOptionsProductSearchTemplateOptionConfig | OrdersCheckoutOptionsOptionsQuickBuyOptionConfigData | null;
  Description?: string | null;
  Handler?: 'SignOrder' | 'TaxFree' | 'AML' | 'Certification' | 'CustomerReferences' | 'CustomFieldLine' | 'CustomField' | 'Delivery' | 'ElectronicInvoice' | 'FiscalID' | 'FiscalRemark' | 'GiftWrapping' | 'LotteryNumber' | 'OrderBackendIdentifier' | 'PartialShipment' | 'Peppol' | 'PickupPoint' | 'ProductSearchTemplate' | 'QuickBuy' | 'Remark' | 'RequestedDate' | 'ShipmentBackendID' | 'SingleUseCompany' | 'SoldBy' | 'TaxExempt' | 'TaxRegistrationNumber' | 'VerifyOrder' | 'GlobalBlue';
  /**
  * Entity type: CheckoutOption
  */
  ID: number;
  IsActive?: boolean;
  Name?: string;
  OrderType?: OrdersCheckoutOptionsCheckoutOptionOrderType;
  /**
  * Entity type: OrganizationUnitSet
  */
  OrganizationUnitSetID?: number | null;
  /**
  * Entity type: Script
  */
  ScriptID?: number | null;
  Sequence?: number;
}

/**
* Update an existing CheckoutOptionCategory
*/
export interface UpdateCheckoutOptionCategory extends RequestMessageWithEmptyResponse {
  Description?: string | null;
  /**
  * Entity type: CheckoutOptionCategory
  */
  ID: number;
  Name?: string;
  Sequence?: number;
}

/**
* Updates the sequence of supplied CheckoutOptions `IDs` matching the order they were submitted. CheckoutOptions not supplied are not touched.
* 
* The first supplied CheckoutOption will get `Sequence=0` and thus will be returned first. The second will get `Sequence=1`, and so on.
*/
export interface UpdateCheckoutOptionSequences extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: CheckoutOption
  */
  IDs?: number[];
}

/**
* Update existing "OrderLedgerType"
*/
export interface UpdateOrderLedgerType extends RequestMessage<UpdateOrderLedgerTypeResponse> {
  Description?: string;
  /**
  * Entity type: OrderLedgerType
  */
  ID: number;
  Name: string;
}

export interface UpdateOrderLedgerTypeResponse extends ResponseMessage {
  Description?: string;
  /**
  * Entity type: OrderLedgerType
  */
  ID: number;
  Name?: string;
}

export interface UpdateRefundCorrectionReason extends RequestMessageWithEmptyResponse {
  BackendID?: string | null;
  Description?: string | null;
  /**
  * Entity type: RefundCorrectionReason
  */
  ID: number;
  Name?: string;
  /**
  * Entity type: OrganizationUnitSet
  */
  OrganizationUnitSetID?: number;
  Priority?: number;
}

/**
* Update a resend reason
*/
export interface UpdateResendReason extends RequestMessageWithEmptyResponse {
  Description?: string | null;
  /**
  * Entity type: ResendReason
  */
  ID: number;
  Name?: string;
  /**
  * Entity type: OrganizationUnitSet
  */
  OrganizationUnitSetID?: number;
}

/**
* Update an existing UnitPriceCorrectionReason
*/
export interface UpdateUnitPriceCorrectionReason extends RequestMessageWithEmptyResponse {
  BackendID?: string | null;
  Description?: string | null;
  /**
  * Entity type: UnitPriceCorrectionReason
  */
  ID: number;
  Name?: string;
  /**
  * Entity type: OrganizationUnitSet
  */
  OrganizationUnitSetID?: number;
  Priority?: number;
}

/**
* Adds one set (`SubsetID`) as the subset of another set (`SetID`).
*   If this subset relation already exists, the type is updated.
* 
*   The Type determines whether the relation is additive or subtractive.
*   If it's additive, the SubsetID and and all its subsets (recursively) becomes part of this set.
* 
*   If it's subtractive, the SubsetID and all its subsets will not be part of this set.
*/
export interface CreateOrUpdateOrganizationUnitSubset extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: OrganizationUnitSet
  */
  SetID: number;
  /**
  * Entity type: OrganizationUnitSet
  */
  SubsetID: number;
  Type?: DataModelsOrganizationUnitSetOperatorTypes;
}

/**
* Creates a new `OrganizationUnitSet`.
* 
*   Optionally a definition can be provided, which defines a set of filters.
*   Any `OrganizationUnit` that matches the filters are automatically part of the set.
* 
*   If a definition is provided without any filters, it's ignored.
* 
*   The ScopeID refers to an `OrganizationUnitSetScope` and can be used to create collections of sets for specific purposes, such as discounts.
*/
export interface CreateOrganizationUnitSet extends RequestMessage<CreateOrganizationUnitSetResponse> {
  BackendID?: string;
  Definition?: DataModelsOrganizationUnitSetDefinition;
  /**
  * Description.
  */
  Description?: string;
  /**
  * Name is only optional when creating an AdHoc set.
  */
  Name?: string;
  /**
  * Entity type: OrganizationUnitSetScope
  */
  ScopeID?: number;
  SubsetOrdering?: OrganizationUnitSetsOrganizationSubsetOrdering;
  /**
  * When specified, adds the sets contained in Subsets as a subset of the new set.
  */
  Subsets?: OrganizationUnitSetsCreateOrganizationUnitSet_OrganizationUnitSubSetDefinition[];
  Type?: DataModelsOrganizationUnitSetTypes;
}

export interface OrganizationUnitSetsCreateOrganizationUnitSet_OrganizationUnitSubSetDefinition {
  /**
  * Entity type: OrganizationUnitSet
  */
  ID: number;
  OperatorType?: DataModelsOrganizationUnitSetOperatorTypes;
}

export interface CreateOrganizationUnitSetResponse extends ResponseMessage {
  /**
  * Entity type: OrganizationUnitSet
  */
  ID: number;
}

/**
* Creates a new OrganizationUnitSetScope.
* 
* When OrganizationUnitUniqueInScope is specified as true, then a single OrganizationUnit can only occur once
* among all OrganizationUnitSets that have this scope.
*/
export interface CreateOrganizationUnitSetScope extends RequestMessage<CreateOrganizationUnitSetScopeResponse> {
  Name: string;
  OrganizationUnitUniqueInScope?: boolean;
}

export interface CreateOrganizationUnitSetScopeResponse extends ResponseMessage {
  /**
  * Entity type: OrganizationUnitSetScope
  */
  ID: number;
}

/**
* Deletes an OrganizationUnitSet by its ID.
* 
*   It's currently not possible to delete a set that is still in use. Trying to do so will return an OrganizationUnitSets:CannotDeleteInUse error.
*/
export interface DeleteOrganizationUnitSet extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: OrganizationUnitSet
  */
  ID: number;
}

/**
* Deletes a OrganizationUnitSetScope.
* 
* It's not possible to delete a scope that is still in use by an OrganizationUnitSet.
*/
export interface DeleteOrganizationUnitSetScope extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: OrganizationUnitSetScope
  */
  ID: number;
}

/**
* Removes a subset (SubsetID) from a set (SetID). If it doesn't exist, nothing happens.
*/
export interface DeleteOrganizationUnitSubset extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: OrganizationUnitSet
  */
  SetID: number;
  /**
  * Entity type: OrganizationUnitSet
  */
  SubsetID: number;
}

/**
* Gets an `OrganizationUnitSet` by its ID and returns the set's basic information.
*/
export interface GetOrganizationUnitSet extends RequestMessage<GetOrganizationUnitSetResponse> {
  /**
  * Entity type: OrganizationUnitSet
  */
  ID: number;
}

/**
* Gets a detailed view of an `OrganizationUnitSet` by its ID and returns it. This service recursively returns the set with its subsets and so on.
*/
export interface GetOrganizationUnitSetDetails extends RequestMessage<GetOrganizationUnitSetDetailsResponse> {
  /**
  * Entity type: OrganizationUnitSet
  */
  ID: number;
  SubsetOrdering?: OrganizationUnitSetsOrganizationSubsetOrdering;
}

export interface GetOrganizationUnitSetDetailsResponse extends ResponseMessage {
  DeclaredSubsets?: OrganizationUnitSetsGetOrganizationUnitSetDetailsResponse_OrganizationUnitSubset[];
  Set?: OrganizationUnitSetsOrganizationUnitSetDetails;
}

export interface OrganizationUnitSetsGetOrganizationUnitSetDetailsResponse_OrganizationUnitSubset {
  BackendID?: string;
  Description?: string;
  /**
  * Entity type: OrganizationUnitSubset
  */
  ID: number;
  Name?: string;
  SequenceNumber: number;
  Type: DataModelsOrganizationUnitSetOperatorTypes;
}

export interface GetOrganizationUnitSetResponse extends ResponseMessage {
  BackendID?: string;
  Description?: string;
  /**
  * Entity type: OrganizationUnitSet
  */
  ID: number;
  Name?: string;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID?: number;
  Scope?: EVAFrameworkAPIEnumDto;
  Type: DataModelsOrganizationUnitSetTypes;
}

/**
* Returns all current scopes.
*/
export interface GetOrganizationUnitSetScopes extends RequestMessage<GetOrganizationUnitSetScopesResponse> {
}

export interface GetOrganizationUnitSetScopesResponse extends ResponseMessage {
  Scopes?: OrganizationUnitSetsGetOrganizationUnitSetScopesResponse_OrganizationUnitSetScope[];
}

export interface OrganizationUnitSetsGetOrganizationUnitSetScopesResponse_OrganizationUnitSetScope {
  Description?: string;
  /**
  * Entity type: OrganizationUnitSetScope
  */
  ID: number;
  Name?: string;
  OrganizationUnitUniqueInScope: boolean;
}

/**
* Lists OrganizationUnitSets, optionally filtered and paged.
*/
export interface ListOrganizationUnitSets extends RequestMessage<ListOrganizationUnitSetsResponse> {
  PageConfig?: PageConfig<OrganizationUnitsListOrganizationUnitSetsFilter>;
}

export interface ListOrganizationUnitSetsResponse extends PagedResultResponse<OrganizationUnitsListOrganizationUnitSetsItem> {
}

export enum OrganizationUnitSetsOrganizationSubsetOrdering {
  Ascending = 0,
  Descending = 1,
}

export interface OrganizationUnitSetsOrganizationUnitSetDetails {
  BackendID?: string;
  Definition?: DataModelsOrganizationUnitSetDefinition;
  Description?: string;
  /**
  * Entity type: OrganizationUnitSubset
  */
  ID: number;
  Name?: string;
  OperatorType: DataModelsOrganizationUnitSetOperatorTypes;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID?: number;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitSetID?: number;
  Scope?: EVAFrameworkAPIEnumDto;
  Subsets?: OrganizationUnitSetsOrganizationUnitSetDetails[];
  Type: DataModelsOrganizationUnitSetTypes;
}

/**
* Returns a what-if preview of what the set would contain if it existed with the provided definition (optional) or has provided sets as its subsets.
*/
export interface PreviewOrganizationUnitSet extends RequestMessage<PreviewOrganizationUnitSetResponse> {
  Definition?: DataModelsOrganizationUnitSetDefinition;
  SubsetOrdering?: OrganizationUnitSetsOrganizationSubsetOrdering;
  Subsets?: OrganizationUnitSetsPreviewOrganizationUnitSet_PreviewOrganizationUnitSubSetDefinition[];
}

export interface OrganizationUnitSetsPreviewOrganizationUnitSet_PreviewOrganizationUnitSubSetDefinition {
  /**
  * Entity type: OrganizationUnitSubset
  */
  ID: number;
  OperatorType?: DataModelsOrganizationUnitSetOperatorTypes;
  SequenceNumber?: number;
}

export interface PreviewOrganizationUnitSetResponse extends ResponseMessage {
  Set?: OrganizationUnitSetsOrganizationUnitSetDetails;
}

/**
* Takes in all subsets of an organization unit set and sets their sequences. All subsets are required.
*/
export interface SetOrganizationUnitSubsetSequences extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: OrganizationUnitSet
  */
  OrganizationUnitSetID: number;
  /**
  * Entity type: OrganizationUnitSet
  */
  SubsetIDs: number[];
}

/**
* Updates an OrganizationUnitSet.
* 
*   Optionally a definition can be provided, which defines a set of filters.
*   Any `OrganizationUnit` that matches the filters are automatically part of the set.
* 
*   To remove a definition from a set, pass it as `null` or as an empty object to this service. If you don't want to override
*   it, pass the definition you got back from the `GetOrganizationUnitSet` service.
*/
export interface UpdateOrganizationUnitSet extends RequestMessageWithEmptyResponse {
  BackendID?: string | null;
  Definition?: DataModelsOrganizationUnitSetDefinition;
  Description?: string | null;
  /**
  * Entity type: OrganizationUnitSet
  */
  ID: number;
  Name?: string;
  /**
  * Entity type: OrganizationUnitSetScope
  */
  ScopeID?: number | null;
}

/**
* Updates a OrganizationUnitSetScope.
* 
* When OrganizationUnitUniqueInScope is specified as true, then a single OrganizationUnit can only occur once
* among all OrganizationUnitSets that have this scope.
*/
export interface UpdateOrganizationUnitSetScope extends RequestMessageWithEmptyResponse {
  Description?: string;
  /**
  * Entity type: OrganizationUnitSetScope
  */
  ID: number;
  Name: string;
  OrganizationUnitUniqueInScope?: boolean;
}

/**
* Create a new CashHandler
*/
export interface CreateCashHandler extends RequestMessage<CreateCashHandlerResponse> {
  BankNotes: number[];
  Coins: number[];
  /**
  * Entity type: Currency
  */
  CurrencyID: string;
  MaxAmountPerOrder?: number;
  Name: string;
  RoundingFactor: number;
}

export interface CreateCashHandlerResponse extends ResponseMessage {
  /**
  * Entity type: CashHandler
  */
  ID: number;
}

/**
* Create a new OpeningHoursType
*/
export interface CreateOpeningHoursType extends RequestMessage<CreateOpeningHoursTypeResponse> {
  BackendID?: string;
  Description?: string;
  Name: string;
}

export interface CreateOpeningHoursTypeResponse extends ResponseMessage {
  /**
  * Entity type: OpeningHoursType
  */
  ID: number;
}

/**
* Create a new additional currency for an OrganizationUnit
* 
* It is required to define the CashHandler
*/
export interface CreateOrganizationUnitCurrency extends RequestMessage<CreateOrganizationUnitCurrencyResponse> {
  /**
  * Entity type: CashHandler
  */
  CashHandlerID: number;
  /**
  * Entity type: Currency
  */
  CurrencyID: string;
  /**
  * Used to override the default exchange rates
  */
  ExchangeRate?: number;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID: number;
}

export interface CreateOrganizationUnitCurrencyResponse extends ResponseMessage {
  /**
  * Entity type: OrganizationUnitCurrency
  */
  ID: number;
}

/**
* Create new OpeningHours for OrganizationUnits
* 
* Multiple items can be created in a single request. Also multiple OrganizationUnits are allowed.
* 
* It's not allowed to create multiple items for a single day on the same store. This is checked for Day based openinghours and Date based openinghours.
* 
* Openinghours wit a Date component override the openinghours on Day level. They are called SpecialOpeningHours most of the time.
* 
* To close a store on a regular day, just don't create an openinghour for that day (or delete it).
* To close a store on a specific date, create an openinghour with StartTime=null, EndTime=null
*/
export interface CreateOrganizationUnitOpeningHours extends RequestMessageWithEmptyResponse {
  OpeningHours: OrganizationUnitsDtoOpeningHoursDataDto[];
}

/**
* Delete a CashHandler
*/
export interface DeleteCashHandler extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: CashHandler
  */
  ID: number;
}

/**
* Delete a OpeningHoursType
*/
export interface DeleteOpeningHoursType extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: OpeningHoursType
  */
  ID: number;
}

/**
* Delete an additional Currency
*/
export interface DeleteOrganizationUnitCurrency extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: OrganizationUnitCurrency
  */
  ID: number;
}

/**
* Delete a single existing OpeningHour for an OrganizationUnit
*/
export interface DeleteOrganizationUnitOpeningHours extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: OpeningHours
  */
  ID: number;
}

/**
* Get a CashHandler
*/
export interface GetCashHandlerByID extends RequestMessage<GetCashHandlerByIDResponse> {
  /**
  * Entity type: CashHandler
  */
  ID: number;
}

export interface GetCashHandlerByIDResponse extends ResponseMessage {
  BankNotes?: number[];
  Coins?: number[];
  CurrencyID?: string;
  ID: number;
  MaxAmountPerOrder?: number;
  Name?: string;
  RoundingFactor: number;
}

/**
* Get OpeningHoursTypes
*/
export interface GetOpeningHoursTypes extends RequestMessage<GetOpeningHoursTypesResponse> {
}

export interface GetOpeningHoursTypesResponse extends ResponseMessage {
  OpeningHoursTypes?: OrganizationUnitsGetOpeningHoursTypesResponse_OpeningHoursTypeDto[];
}

export interface OrganizationUnitsGetOpeningHoursTypesResponse_OpeningHoursTypeDto extends EVAFrameworkAPIEnumDto {
  BackendID?: string;
}

export interface GetOrganizationUnitSupplierDataByOrganizationUnitID extends RequestMessage<GetOrganizationUnitSupplierDataByOrganizationUnitIDResponse> {
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID: number;
}

export interface GetOrganizationUnitSupplierDataByOrganizationUnitIDResponse extends ResponseMessage {
  EstimatedDeliveryDays?: number;
  OrganizationUnitID: number;
  OrganizationUnitName?: string;
}

/**
* List CashHandlers
*/
export interface ListCashHandlers extends RequestMessage<ListCashHandlersResponse> {
  PageConfig?: PageConfig<FinanceCashListCashHandlersFilter>;
}

export interface ListCashHandlersResponse extends PagedResultResponse<OrganizationUnitsListCashHandlersResponse_CashHandlerDto> {
}

export interface OrganizationUnitsListCashHandlersResponse_CashHandlerDto {
  BankNotes?: number[];
  Coins?: number[];
  /**
  * Entity type: Currency
  */
  CurrencyID?: string;
  /**
  * Entity type: CashHandler
  */
  ID: number;
  MaxAmountPerOrder?: number;
  Name?: string;
  RoundingFactor: number;
}

/**
* List organizationunit openinghours
*/
export interface ListOpeningHours extends FilteredPagedResultRequest<OrganizationUnitsListOldOpeningHoursFilter, ListOpeningHoursResponse> {
}

export interface ListOpeningHoursResponse extends PagedResultResponse<OrganizationUnitsDtoOpeningHoursDto> {
}

/**
* List the configured additional currencies for the given OrganizationUnit
* 
* It is required to set the OrganizationUnitID on the filter.
*/
export interface ListOrganizationUnitCurrencies extends RequestMessage<ListOrganizationUnitCurrenciesResponse> {
  PageConfig?: PageConfig<OrganizationUnitsOrganizationUnitCurrencyFilter>;
}

export interface ListOrganizationUnitCurrenciesResponse extends PagedResultResponse<OrganizationUnitsListOrganizationUnitCurrenciesResponse_OrganizationUnitCurrencyDto> {
}

export interface OrganizationUnitsListOrganizationUnitCurrenciesResponse_OrganizationUnitCurrencyDto {
  /**
  * Entity type: CashHandler
  */
  CashHandlerID: number;
  CashHandlerName: string;
  /**
  * Entity type: Currency
  */
  CurrencyID: string;
  /**
  * Used to override the default exchange rates
  */
  ExchangeRate?: number;
  /**
  * Entity type: OrganizationUnitCurrency
  */
  ID?: number;
  /**
  * Entity type: OrganizationUnit
  */
  InheritedFromOrganizationUnitID?: number;
  InheritedFromOrganizationUnitName?: string;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID: number;
  OrganizationUnitName: string;
}

export interface SetOrganizationUnitSupplierData extends RequestMessageWithEmptyResponse {
  EstimatedDeliveryDays?: number;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID: number;
}

/**
* Update an existing CashHandler
*/
export interface UpdateCashHandler extends RequestMessageWithEmptyResponse {
  BankNotes?: number[];
  Coins?: number[];
  /**
  * Entity type: Currency
  */
  CurrencyID?: string;
  /**
  * Entity type: CashHandler
  */
  ID: number;
  MaxAmountPerOrder?: number | null;
  Name?: string;
  RoundingFactor?: number;
}

/**
* Update an existing OpeningHoursType
*/
export interface UpdateOpeningHoursType extends RequestMessageWithEmptyResponse {
  BackendID?: string;
  Description?: string;
  /**
  * Entity type: OpeningHoursType
  */
  ID: number;
  Name: string;
}

/**
* Update the Cashhandler for an additional Currency
*/
export interface UpdateOrganizationUnitCurrency extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: CashHandler
  */
  CashHandlerID: number;
  /**
  * Used to override the default exchange rates
  */
  ExchangeRate?: number;
  /**
  * Entity type: OrganizationUnitCurrency
  */
  ID: number;
}

/**
* Update existing OpeningHours for OrganizationUnits
* 
* Multiple items can be updated in a single request. Also multiple OrganizationUnits are allowed.
*/
export interface UpdateOrganizationUnitOpeningHours extends RequestMessageWithEmptyResponse {
  OpeningHours: OrganizationUnitsDtoOpeningHoursDto[];
}

/**
* Update the regular openinghours for an OrganizationUnit
* 
* This service accepts a request like this:
* ```
* {
*   "OrganizationUnitID": 123, // required
*   "TypeID": 2, // required, OpeningHoursType
*   "Sunday": {
*     "IsClosed": false, // required
*     "StartTime": "10:00:00", // optional
*     "EndTime": "18:00:00", // optional
*     "Description": "Repairs closed"// optional
*   }, // required
*   "Monday": ..., //required
*   "Tuesday": ..., //required
*   "Wednesday": ..., //required
*   "Thursday": ..., //required
*   "Friday": ..., //required
*   "Saturday": ..., //required
*   }
* ```
* All days are required, days can be closed and contain a description
* 
* To manage non-regular OpeningHours the existing CreateOrganizationUnitOpeningHours, UpdateOrganizationUnitOpeningHours, DeleteOrganizationUnitOpeningHours can be used.
* They have a TypeID property on the OpeningHours object to specify the OpeningHoursType.
*/
export interface UpdateOrganizationUnitRegularOpeningHours extends RequestMessageWithEmptyResponse {
  Friday: OrganizationUnitsDtoDayOpeningHours;
  Monday: OrganizationUnitsDtoDayOpeningHours;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID: number;
  Saturday: OrganizationUnitsDtoDayOpeningHours;
  Sunday: OrganizationUnitsDtoDayOpeningHours;
  Thursday: OrganizationUnitsDtoDayOpeningHours;
  Tuesday: OrganizationUnitsDtoDayOpeningHours;
  /**
  * Entity type: OpeningHoursType
  */
  TypeID: number;
  Wednesday: OrganizationUnitsDtoDayOpeningHours;
}

/**
* Create or update OrganizationUnitSetPaymentType
* 
* A PaymentType, OrganizationUnitSet and RefundPriority are required
* 
* When this OrganizationUnitSet doesn't have this PaymentType yet, it will be created. If it already exists the fields will be updated.
*/
export interface CreateOrUpdateOrganizationUnitSetPaymentType extends RequestMessageWithEmptyResponse {
  AuthorizationExpirationInDays?: number | null;
  CaptureDelayDays?: number | null;
  CaptureMoment?: DataModelsPaymentTypeCaptureMoment;
  /**
  * Entity type: Product
  */
  DigitalGiftCardProductID?: number | null;
  DisableFor?: DataModelsPaymentDisableFor;
  DisableForCarryOutOrders?: boolean | null;
  DisableForDeliveryOrders?: boolean | null;
  DisableForReserveOrders?: boolean | null;
  DisplayPriority?: number;
  /**
  * Entity type: OrganizationUnitSet
  */
  OrganizationUnitSetID: number;
  /**
  * Entity type: PaymentType
  */
  PaymentTypeID: number;
  RefundPriority?: number | null;
}

/**
* Create a new custom PaymentMethod.
*/
export interface CreatePaymentMethod extends RequestMessage<CreatePaymentMethodResponse> {
  Code: string;
  Name: string;
}

export interface CreatePaymentMethodResponse extends ResponseMessage {
  /**
  * Entity type: PaymentMethod
  */
  ID: number;
}

/**
* Create a new PaymentTransactionLedgerType
*/
export interface CreatePaymentTransactionLedgerType extends RequestMessage<CreatePaymentTransactionLedgerTypeResponse> {
  Description?: string;
  Name: string;
}

export interface CreatePaymentTransactionLedgerTypeResponse extends ResponseMessage {
  /**
  * Entity type: PaymentTransactionLedgerType
  */
  ID: number;
}

/**
* Create a new PaymentType.
*/
export interface CreatePaymentType extends RequestMessage<CreatePaymentTypeResponse> {
  AllowMultiCurrency?: boolean;
  AutoFinalizeOnOrderPaid?: boolean;
  BackendID?: string;
  BackendRelationID?: string;
  CaptureMoment?: DataModelsPaymentTypeCaptureMoment;
  CashJournalMethod?: DataModelsPaymentCashJournalMethod;
  Category?: DataModelsPaymentTypeCategory;
  Code: string;
  IsActive?: boolean;
  /**
  * Entity type: LedgerClass
  */
  LedgerClassID?: string;
  Name: string;
  Options?: DataModelsPaymentTypeOptions;
  /**
  * Entity type: OrganizationUnitSet
  */
  OrganizationUnitSetID?: number;
  /**
  * Entity type: PaymentMethod
  */
  PaymentMethodID: number;
  PrintOnDocuments?: boolean;
  ReturnAction?: DataModelsPaymentReturnActions;
  Roles?: PaymentMethodsCreatePaymentType_PaymentTypeRole[];
  /**
  * Entity type: Script
  */
  ScriptID?: number;
}

export interface PaymentMethodsCreatePaymentType_PaymentTypeRole {
  /**
  * Entity type: Role
  */
  RoleID: number;
}

export interface CreatePaymentTypeResponse extends ResponseMessage {
  /**
  * Entity type: PaymentType
  */
  ID: number;
}

/**
* Delete an OrganizationUnitSetPaymentType
* 
* A PaymentType and OrganizationUnitSet are required
*/
export interface DeleteOrganizationUnitSetPaymentType extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: OrganizationUnitSet
  */
  OrganizationUnitSetID: number;
  /**
  * Entity type: PaymentType
  */
  PaymentTypeID: number;
}

/**
* Delete a PaymentMethod
*/
export interface DeletePaymentMethod extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: PaymentMethod
  */
  ID: number;
}

/**
* Delete a PaymentTransactionLedgerType. Only custom made types can be deleted that are not in use.
*/
export interface DeletePaymentTransactionLedgerType extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: PaymentTransactionLedgerType
  */
  ID: number;
}

/**
* Delete a PaymentType
*/
export interface DeletePaymentType extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: PaymentType
  */
  ID: number;
}

/**
* Gets an PaymentMethod by its ID and returns the basic information.
*/
export interface GetPaymentMethodByID extends RequestMessage<GetPaymentMethodByIDResponse> {
  /**
  * Entity type: PaymentMethod
  */
  ID: number;
}

export interface GetPaymentMethodByIDResponse extends ResponseMessage {
  Code: string;
  /**
  * Entity type: PaymentMethod
  */
  ID: number;
  IsCustom: boolean;
  Name: string;
}

/**
* Return all PaymentMethods
*/
export interface GetPaymentMethods extends RequestMessage<GetPaymentMethodsResponse> {
}

export interface GetPaymentMethodsResponse extends ResponseMessage {
  PaymentMethods?: PaymentMethodsGetPaymentMethodsResponse_PaymentMethodDto[];
}

export interface PaymentMethodsGetPaymentMethodsResponse_PaymentMethodDto {
  Code?: string;
  /**
  * Entity type: PaymentMethod
  */
  ID: number;
  Name?: string;
}

/**
* Gets an PaymentType by its ID and returns the basic information.
*/
export interface GetPaymentTypeByID extends RequestMessage<GetPaymentTypeByIDResponse> {
  /**
  * Entity type: PaymentType
  */
  ID: number;
}

export interface GetPaymentTypeByIDResponse extends ResponseMessage {
  AllowMultiCurrency: boolean;
  AutoFinalizeOnOrderPaid: boolean;
  BackendID?: string;
  BackendRelationID?: string;
  BookPaymentMethodInvoice?: boolean;
  CanBeUsedForAuthorization?: boolean;
  CaptureMoment?: DataModelsPaymentTypeCaptureMoment;
  CashJournalMethod: DataModelsPaymentCashJournalMethod;
  Category: DataModelsPaymentTypeCategory;
  Code?: string;
  /**
  * Entity type: PaymentType
  */
  ID: number;
  IncludeInCashJournal: boolean;
  IsActive: boolean;
  IsExternal?: boolean;
  IsRoundingType: boolean;
  /**
  * Entity type: LedgerClass
  */
  LedgerClassID?: string;
  Name?: string;
  Options?: DataModelsPaymentTypeOptions;
  OrganizationUnitSetDescription?: string;
  /**
  * Entity type: OrganizationUnitSet
  */
  OrganizationUnitSetID?: number;
  OrganizationUnitSetName?: string;
  OrganizationUnitSetType?: DataModelsOrganizationUnitSetTypes;
  PaymentMethodCode?: string;
  /**
  * Entity type: PaymentMethod
  */
  PaymentMethodID?: number;
  PaymentMethodIsCustom: boolean;
  PaymentMethodName?: string;
  PrintOnDocuments: boolean;
  ReturnAction: DataModelsPaymentReturnActions;
  Roles?: PaymentMethodsGetPaymentTypeByIDResponse_PaymentTypeRole[];
  /**
  * Entity type: Script
  */
  ScriptID?: number;
  ScriptName?: string;
}

export interface PaymentMethodsGetPaymentTypeByIDResponse_PaymentTypeRole {
  Name?: string;
  RoleID: number;
}

/**
* Get CustomFields for the given payment type.
*/
export interface GetPaymentTypeCustomFields extends RequestMessage<GetPaymentTypeCustomFieldsResponse> {
  /**
  * Entity type: PaymentType
  */
  PaymentTypeID: number;
}

export interface GetPaymentTypeCustomFieldsResponse extends ResponseMessage {
  CustomFields?: PaymentMethodsGetPaymentTypeCustomFieldsResponse_CustomFieldDto[];
}

export interface PaymentMethodsGetPaymentTypeCustomFieldsResponse_CustomFieldDto {
  BackendID?: string;
  DataType: DataModelsCustomFieldDataTypes;
  DisplayName?: string;
  EnumValues?: Record<string,string | null>;
  /**
  * Entity type: CustomField
  */
  ID: number;
  IsArray: boolean;
  Name: string;
  Order: number;
  /**
  * Entity type: CustomFieldType
  */
  TypeID: number;
  TypeName: string;
}

/**
* Get's the ID/Name of all paymenttypes to use for filter inputs
*/
export interface GetPaymentTypesForFilter extends RequestMessage<GetPaymentTypesForFilterResponse> {
  Name?: string;
}

export interface GetPaymentTypesForFilterResponse extends ResponseMessage {
  PaymentTypes: PaymentMethodsGetPaymentTypesForFilterResponse_PaymentType[];
}

export interface PaymentMethodsGetPaymentTypesForFilterResponse_PaymentType {
  /**
  * Entity type: PaymentType
  */
  ID: number;
  Name: string;
}

/**
* Returns the payment tokens stored for a user. Customers receive their own tokens; employees and API users must specify a UserID and require the UserPaymentTokens:View functionality on their current organization unit.
*/
export interface GetUserPaymentTokens extends RequestMessage<GetUserPaymentTokensResponse> {
  /**
  * Filter on usability. null = all, true = usable only (active and not expired), false = unusable only.
  */
  IsUsable?: boolean;
  /**
  * Entity type: User
  * Target user. Required for employees and API users; ignored for customers (replaced with the logged-in user).
  */
  UserID?: number;
}

export interface GetUserPaymentTokensResponse extends ResponseMessage {
  Tokens?: PaymentMethodsGetUserPaymentTokensResponse_PaymentToken[];
}

export interface PaymentMethodsGetUserPaymentTokensResponse_PaymentToken {
  CreationTime: string;
  ExpiryMonth?: string;
  ExpiryYear?: string;
  /**
  * Entity type: UserPaymentToken
  */
  ID: number;
  IsActive: boolean;
  IsUsable: boolean;
  LastFourDigits?: string;
  LastUsedTime?: string;
  PaymentMethodName?: string;
  PaymentMethodSubType?: string;
  PaymentMethodType?: string;
  /**
  * Entity type: PaymentTransaction
  */
  PaymentTransactionID?: number;
  /**
  * Entity type: PaymentType
  */
  PaymentTypeID: number;
  PaymentTypeName?: string;
}

/**
* List the OrganizationUnitSetPaymentTypes
* 
* There are filters available on:
*  - PaymentTypeID
*  - OrganizationUnitSetID
*  - RefundPriority
*  - CaptureMoment
*  - DisableForDeliveryOrders
*  - DisableForReserveOrders
*  - DisableForCarryOutOrders
*  - DisableFor
*/
export interface ListOrganizationUnitSetPaymentTypes extends FilteredPagedResultRequest<PaymentsListOrganizationUnitSetPaymentTypesFilter, ListOrganizationUnitSetPaymentTypesResponse> {
}

export interface ListOrganizationUnitSetPaymentTypesResponse extends PagedResultResponse<PaymentMethodsOrganizationUnitSetPaymentTypeDto> {
}

/**
* List PaymentMethods. Returns a paged response.
*/
export interface ListPaymentMethods extends FilteredPagedResultRequest<PaymentsListPaymentMethodsFilter, ListPaymentMethodsResponse> {
}

export interface ListPaymentMethodsResponse extends PagedResultResponse<PaymentMethodsListPaymentMethodsResponse_PaymentMethodDto> {
}

export interface PaymentMethodsListPaymentMethodsResponse_PaymentMethodDto {
  Code: string;
  /**
  * Entity type: PaymentMethod
  */
  ID: number;
  IsCustom: boolean;
  Name: string;
}

/**
* List paymenttransactionCaptures
* 
* All available filters are typed in the PageConfig.Filter property.
*/
export interface ListPaymentTransactionCaptures extends FilteredPagedResultRequest<PaymentsListPaymentTransactionCapturesFilter, ListPaymentTransactionCapturesResponse> {
}

export interface ListPaymentTransactionCapturesResponse extends PagedResultResponse<PaymentMethodsListPaymentTransactionCapturesResponse_PaymentTransactionCaptureDto> {
}

export interface PaymentMethodsListPaymentTransactionCapturesResponse_PaymentTransactionCaptureDto {
  Amount: number;
  BackendID?: string;
  ConfirmationDate?: string;
  CreationTime: string;
  /**
  * Entity type: Currency
  */
  CurrencyID: string;
  /**
  * Entity type: PaymentTransactionCapture
  */
  ID: number;
  IsSettled?: boolean;
  /**
  * Entity type: Order
  */
  OrderID?: number;
  /**
  * Entity type: PaymentTransaction
  */
  PaymentTransactionID: number;
  SettledAmount?: number;
  Status: DataModelsPaymentTransactionCaptureStatuses;
}

/**
* List paymenttransactionssettlements
* 
* Filters available to be sent in the request:
* - FinancialPeriodID
* - PaymentReference
* - MerchantReference
* - Type
* - SubType
*/
export interface ListPaymentTransactionSettlements extends RequestMessage<ListPaymentTransactionsSettlementsResponse> {
  /**
  * Entity type: FinancialPeriod
  */
  FinancialPeriodID?: number;
  MerchantReference?: string;
  PaymentReference?: string;
  SubType?: string;
  /**
  * Entity type: PaymentTransactionSettlementType
  */
  TypeID?: number;
}

/**
* List paymenttransactions.
*/
export interface ListPaymentTransactions extends FilteredPagedResultRequest<PaymentsListPaymentTransactionsFilter, ListPaymentTransactionsResponse> {
}

export interface ListPaymentTransactionsResponse extends PagedResultResponse<PaymentMethodsListPaymentTransactionsResponse_PaymentTransactionDto> {
}

export interface PaymentMethodsListPaymentTransactionsResponse_PaymentTransactionDto {
  Amount: number;
  BackendID?: string;
  BackendRelationID?: string;
  BackendSystemID?: string;
  Change: number;
  CreationTime: string;
  /**
  * Entity type: Currency
  */
  CurrencyID?: string;
  Description?: string;
  /**
  * Entity type: Device
  */
  DeviceID?: number;
  /**
  * Entity type: FinancialPeriod
  */
  FinancialPeriodID?: number;
  /**
  * Entity type: PaymentTransaction
  */
  ID: number;
  IsSettled?: boolean;
  LastModificationTime?: string;
  OrderDisplayID?: string;
  /**
  * Entity type: Order
  */
  OrderID?: number;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID: number;
  OrganizationUnitName?: string;
  PaidAmount: number;
  PaymentDate?: string;
  /**
  * Entity type: PaymentMethod
  */
  PaymentMethodID?: number;
  PaymentMethodName?: string;
  RefundedAmount?: number;
  SettledAmount?: number;
  Status: DataModelsPaymentStatuses;
  /**
  * Entity type: PaymentType
  */
  TypeID: number;
  TypeName?: string;
}

export interface ListPaymentTransactionsSettlementsResponse extends ResponseMessage {
  PaymentTransactions?: PaymentMethodsListPaymentTransactionsSettlementsResponse_ResultPaymentTransaction[];
  Settlements?: PaymentMethodsListPaymentTransactionsSettlementsResponse_ResultSettlement[];
}

export interface PaymentMethodsListPaymentTransactionsSettlementsResponse_ResultPaymentTransaction {
  PaymentTransactionCaptures?: PaymentMethodsListPaymentTransactionsSettlementsResponse_ResultPaymentTransactionCapture[];
  /**
  * Entity type: PaymentTransaction
  */
  PaymentTransactionID: number;
  SettledAmount: number;
  Settlements?: PaymentMethodsListPaymentTransactionsSettlementsResponse_ResultSettlement[];
}

export interface PaymentMethodsListPaymentTransactionsSettlementsResponse_ResultPaymentTransactionCapture {
  /**
  * Entity type: PaymentTransactionCapture
  */
  PaymentTransactionCaptureID: number;
  SettledAmount: number;
  Settlements?: PaymentMethodsListPaymentTransactionsSettlementsResponse_ResultSettlement[];
}

export interface PaymentMethodsListPaymentTransactionsSettlementsResponse_ResultSettlement {
  Amount: number;
  MerchantReference?: string;
  PaymentReference?: string;
  Subtype?: string;
  Type?: EVAFrameworkAPIEnumDto;
}

/**
* List PaymentTypes. Returns a paged response.
*/
export interface ListPaymentTypes extends FilteredPagedResultRequest<PaymentsListPaymentTypesFilter, ListPaymentTypesResponse> {
}

export interface ListPaymentTypesResponse extends PagedResultResponse<PaymentMethodsListPaymentTypesResponse_PaymentTypeDto> {
}

export interface PaymentMethodsListPaymentTypesResponse_OrganizationUnitSetPaymentTypeDto {
  CaptureMoment?: DataModelsPaymentTypeCaptureMoment;
  DisplayPriority: number;
  OrganizationUnitSetID: number;
  OrganizationUnitSetName?: string;
  RefundPriority?: number;
}

export interface PaymentMethodsListPaymentTypesResponse_PaymentTypeDto {
  AutoFinalizeOnOrderPaid: boolean;
  BackendID?: string;
  BackendRelationID?: string;
  BookPaymentMethodInvoice?: boolean;
  CanBeUsedForAuthorization?: boolean;
  CashJournalMethod: DataModelsPaymentCashJournalMethod;
  Code?: string;
  /**
  * Entity type: PaymentType
  */
  ID: number;
  IncludeInCashJournal: boolean;
  IsActive: boolean;
  IsExternal?: boolean;
  IsRoundingType: boolean;
  /**
  * Entity type: LedgerClass
  */
  LedgerClassID?: string;
  Name?: string;
  Options?: DataModelsPaymentTypeOptions;
  OrganizationUnitSetDescription?: string;
  /**
  * Entity type: OrganizationUnitSet
  */
  OrganizationUnitSetID?: number;
  OrganizationUnitSetName?: string;
  OrganizationUnitSetPaymentTypes?: PaymentMethodsListPaymentTypesResponse_OrganizationUnitSetPaymentTypeDto[];
  OrganizationUnitSetType?: DataModelsOrganizationUnitSetTypes;
  /**
  * Entity type: PaymentMethod
  */
  PaymentMethodID?: number;
  PaymentMethodName?: string;
  PrintOnDocuments: boolean;
  ReturnAction: DataModelsPaymentReturnActions;
  /**
  * Entity type: Script
  */
  ScriptID?: number;
}

/**
* Check or perform the migration for setting `PaymentMethods:PaymentTypeAvailabilityByOuSetType`.
* 
* Omitting `SaveChanges` will default to `false`, returning the changes it would have done, but don't actually persist them. Pass `true` explicitly if you want to actually migrate (use with caution!).
* 
* The payment type property `OrganizationUnitSetID` is hence-forth known as 'the legacy filter', where as the configured list of `OrganizationUnitSetPaymentType` is called 'the sets' or 'a set'.
* 
* Will execute for each active payment type;
* 
* - If it has no legacy filter configured, will remove any set that might be configured for this payment type
* - If it *has* a legacy filter configured;
*  - This legacy filter will be removed
*  - If there is no matching set configured, it will add it
*  - If there is a matching set configured but it is limited (disabled for delivery etc.), those limitations will be lifted
*  - If there are any other set configured, those will be removed
* 
* And finally, the setting will be enabled on root level.
* 
* This migration will not run if the setting is already set (at any level!).
*/
export interface MigratePaymentTypeOrganizationUnitSetting extends RequestMessage<MigratePaymentTypeOrganizationUnitSettingResponse> {
  SaveChanges?: boolean;
}

export interface MigratePaymentTypeOrganizationUnitSettingResponse extends ResponseMessage {
  /**
  * Entity type: PaymentType
  */
  Output?: string[];
}

export interface PaymentMethodsOrganizationUnitSetPaymentTypeDto {
  AuthorizationExpirationInDays?: number;
  CaptureDelayDays?: number;
  CaptureMoment?: DataModelsPaymentTypeCaptureMoment;
  /**
  * Entity type: Product
  */
  DigitalGiftCardProductID?: number;
  DisableFor: DataModelsPaymentDisableFor;
  DisableForCarryOutOrders?: boolean;
  DisableForDeliveryOrders?: boolean;
  DisableForReserveOrders?: boolean;
  DisplayPriority: number;
  /**
  * Entity type: OrganizationUnitSet
  */
  OrganizationUnitSetID: number;
  OrganizationUnitSetName: string;
  /**
  * Entity type: PaymentMethod
  */
  PaymentMethodID: number;
  PaymentMethodName: string;
  /**
  * Entity type: PaymentType
  */
  PaymentTypeID: number;
  PaymentTypeName: string;
  RefundPriority?: number;
}

export interface SetPaymentTypeRoles extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: PaymentMethod
  */
  ID: number;
  Roles?: PaymentMethodsSetPaymentTypeRoles_PaymentTypeRole[];
}

export interface PaymentMethodsSetPaymentTypeRoles_PaymentTypeRole {
  /**
  * Entity type: Role
  */
  RoleID: number;
}

/**
* Update an existing custom PaymentMethod.
*/
export interface UpdatePaymentMethod extends RequestMessageWithEmptyResponse {
  Code: string;
  /**
  * Entity type: PaymentMethod
  */
  ID: number;
  Name: string;
}

/**
* Update the description of a PaymentTransactionLedgerType. Only custom made types can be updated.
*/
export interface UpdatePaymentTransactionLedgerType extends RequestMessageWithEmptyResponse {
  Description?: string | null;
  /**
  * Entity type: PaymentTransactionLedgerType
  */
  ID: number;
}

/**
* Update an existing PaymentType.
*/
export interface UpdatePaymentType extends RequestMessageWithEmptyResponse {
  AllowMultiCurrency?: boolean;
  AutoFinalizeOnOrderPaid?: boolean;
  BackendID?: string | null;
  BackendRelationID?: string | null;
  CashJournalMethod?: DataModelsPaymentCashJournalMethod;
  Category?: DataModelsPaymentTypeCategory;
  Code?: string;
  /**
  * Entity type: PaymentType
  */
  ID: number;
  IsActive?: boolean;
  /**
  * Entity type: LedgerClass
  */
  LedgerClassID?: string | null;
  Name?: string;
  Options?: PaymentMethodsUpdatePaymentType_PaymentTypeOptionsMaybe;
  /**
  * Entity type: OrganizationUnitSet
  */
  OrganizationUnitSetID?: number | null;
  /**
  * Entity type: PaymentMethod
  */
  PaymentMethodID?: number;
  PrintOnDocuments?: boolean;
  ReturnAction?: DataModelsPaymentReturnActions;
  Roles?: PaymentMethodsUpdatePaymentType_PaymentTypeRole[] | null;
  /**
  * Entity type: Script
  */
  ScriptID?: number | null;
}

export interface PaymentMethodsUpdatePaymentType_InstallmentDataMaybe {
  InstallmentOptions?: number[] | null;
  InstallmentPaymentFrequency?: DataModelsInstallmentPaymentFrequency;
  MaxInstallments?: number | null;
  MinInstallments?: number | null;
}

export interface PaymentMethodsUpdatePaymentType_PaymentTypeOptionsMaybe {
  BlockOverPayments?: boolean | null;
  CanBeCancelled?: boolean | null;
  CanBeRefunded?: boolean | null;
  /**
  * Setting this to false results in refund only, will therefor only work with CanBeRefunded:true and CanRefundWithoutOriginalPaymentTransaction:true
  */
  CanBeUsedForPayments?: boolean | null;
  CanRefundWithoutOriginalPaymentTransaction?: boolean | null;
  /**
  * Entity type: GiftCardConfiguration
  */
  GiftCardConfigurationID?: number | null;
  /**
  * Specify either an interval through MinInstallments and MaxInstallments, or a fixed number of installments through InstallmentOptions.
  */
  InstallmentData?: PaymentMethodsUpdatePaymentType_InstallmentDataMaybe;
  /**
  * Entity type: LoyaltyProgram
  */
  LoyaltyProgramID?: number | null;
  OnlyAvailableInLocalMode?: boolean | null;
  Pending?: boolean | null;
  PinHandler?: string | null;
  PinManualKeyEntry?: boolean | null;
  RefundPending?: boolean | null;
  RequiredFunctionality?: string | null;
  RequiredFunctionalityScope?: SecurityFunctionalityScope;
  RequiredUserType?: UserTypes;
  RequiresAmount?: boolean | null;
  RequiresConfirmationForPayments?: boolean | null;
  RequiresConfirmationForRefunds?: boolean | null;
  RequiresInteractionForRefunds?: boolean | null;
}

export interface PaymentMethodsUpdatePaymentType_PaymentTypeRole {
  /**
  * Entity type: Role
  */
  RoleID: number;
}

/**
* Delete a failed or unprocessed settlement file
* 
* File in state processing or processed can't be deleted due to generated financial events. This is only allowed when no settlents were generated for the file.
*/
export interface DeleteUnprocessedPaymentSettlementFile extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: PaymentTransactionSettlementFile
  */
  PaymentSettlementFileID: number;
}

/**
* Download a settlement result file
*/
export interface DownloadPaymentSettlementFileResult extends RequestMessageWithResourceResponse {
  /**
  * Entity type: PaymentTransactionSettlementFile
  */
  PaymentSettlementFileID: number;
}

/**
* Returns the available handlers for settlement files
*/
export interface GetAvailablePaymentSettlementFileHandlers extends RequestMessage<GetAvailablePaymentSettlementFileHandlersResponse> {
}

export interface GetAvailablePaymentSettlementFileHandlersResponse extends ResponseMessage {
  Handlers?: string[];
}

/**
* List uploaded settlement files
* 
* Filters available:
* - Name
* - Status
* - Handler
*/
export interface ListPaymentSettlementFiles extends FilteredPagedResultRequest<PaymentsSettlementsListSettlementFilesFilter, ListPaymentSettlementFilesResponse> {
}

export interface ListPaymentSettlementFilesResponse extends PagedResultResponse<PaymentSettlementsListPaymentSettlementFilesResponse_PaymentSettlementFile> {
}

export interface PaymentSettlementsListPaymentSettlementFilesResponse_PaymentSettlementFile {
  /**
  * Entity type: OrganizationUnit
  */
  FallbackOrganizationUnitID: number;
  FallbackOrganizationUnitName: string;
  Handler: string;
  /**
  * Entity type: PaymentTransactionSettlementFile
  */
  ID: number;
  Name?: string;
  OriginalBlobID: string;
  OriginalDownloadUrl: string;
  Status: DataModelsPaymentTransactionSettlementFileStatus;
}

/**
* List created settlements
* 
* Filters available:
* - PaymentTransactionID
* - TypeID
* - FinancialPeriodID
* - OrganizationUnitID
*/
export interface ListPaymentSettlements extends FilteredPagedResultRequest<PaymentsSettlementsListSettlementsFilter, ListPaymentSettlementsResponse> {
}

export interface ListPaymentSettlementsResponse extends PagedResultResponse<PaymentSettlementsListPaymentSettlementsResponse_PaymentSettlement> {
}

export interface PaymentSettlementsListPaymentSettlementsResponse_PaymentSettlement {
  Amount: number;
  CurrencyID: string;
  /**
  * Entity type: FinancialPeriod
  */
  FinancialPeriodID: number;
  /**
  * Entity type: PaymentTransactionSettlement
  */
  ID: number;
  LedgerClassID?: string;
  Offset1?: string;
  Offset2?: string;
  Offset3?: string;
  Offset4?: string;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID: number;
  OrganizationUnitName: string;
  /**
  * Entity type: PaymentTransaction
  */
  PaymentTransactionID?: number;
  /**
  * Entity type: PaymentTransactionSettlementType
  */
  TypeID: number;
  TypeName: string;
}

/**
* Upload a new settlement file.
* 
* - The settlements in the file will be imported and booked into financial events to allow processing in cookbook
* - It is required to supply the `Handler` to use (available handlers can be fetched with the `GetAvailablePaymentSettlementFileHandlers` service)
* - For settlement records that don't have a matching `PaymentTransaction` in EVA there will be financial events generated (which will happen for supplied `OrganizationUnitID`)
*/
export interface UploadPaymentSettlementFile extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: Blob
  * Can be used for standard blobs - for secure blobs, use `BlobUrl` instead.
  */
  BlobID?: string;
  /**
  * Can be used for both standard- and secured blobs - must match environment assets URL.
  */
  BlobUrl?: string;
  Data?: string;
  Handler: string;
  MimeType?: string;
  Name: string;
  /**
  * Entity type: OrganizationUnit
  * The OrganizationUnit that will be used to book the Settlements for payments that are not known in EVA.
  */
  OrganizationUnitID: number;
}

/**
* Add personalized promotion products for a user.
*/
export interface AddPersonalizedPromotionsProducts extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: PersonalizedPromotion
  */
  PersonalizedPromotionID: number;
  /**
  * Entity type: Product
  */
  ProductIDs: number[];
  /**
  * Entity type: User
  */
  UserID: number;
}

/**
* Archive a personalized promotion.
*/
export interface ArchivePersonalizedPromotion extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: PersonalizedPromotion
  */
  ID: number;
}

/**
* Create a new personalized promotion.
*/
export interface CreatePersonalizedPromotion extends RequestMessage<CreatePersonalizedPromotionResponse> {
  BackendID?: string;
  Description?: string;
  LockAfterFirstApply?: boolean;
  MaximumDistinctProducts?: number;
  Name: string;
}

export interface CreatePersonalizedPromotionResponse extends ResponseMessage {
  /**
  * Entity type: PersonalizedPromotion
  */
  ID: number;
}

/**
* Get personalized promotion by its ID.
*/
export interface GetPersonalizedPromotionByID extends RequestMessage<GetPersonalizedPromotionByIDResponse> {
  /**
  * Entity type: PersonalizedPromotion
  */
  ID: number;
}

export interface GetPersonalizedPromotionByIDResponse extends ResponseMessage {
  BackendID?: string;
  Description?: string;
  /**
  * Entity type: PersonalizedPromotion
  */
  ID: number;
  LockAfterFirstApply: boolean;
  MaximumDistinctProducts?: number;
  Name?: string;
}

/**
* List personalized promotions. Returns a paged response.
*/
export interface ListPersonalizedPromotions extends PagedRequestMessage<PersonalizedPromotionsListPersonalizedPromotionsFilter, ListPersonalizedPromotionsResponse> {
}

export interface ListPersonalizedPromotionsResponse extends PagedResponseMessage<PersonalizedPromotionsListPersonalizedPromotionsResponse_PersonalizedPromotion> {
}

export interface PersonalizedPromotionsListPersonalizedPromotionsResponse_PersonalizedPromotion {
  BackendID?: string;
  Description?: string;
  /**
  * Entity type: PersonalizedPromotion
  */
  ID: number;
  LockAfterFirstApply: boolean;
  MaximumDistinctProducts?: number;
  Name?: string;
}

/**
* Set products for personalized promotion for the given user. Overwrites existing products and product selection. Will unset products and selection when no products are provided.
*/
export interface PushUserPersonalizedPromotionProducts extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: PersonalizedPromotion
  */
  PersonalizedPromotionID: string;
  /**
  * The products that the user has in this PersonalizedPromotion. Can have a maximum of 100 products.
  */
  Products?: PersonalizedPromotionsPushUserPersonalizedPromotionProducts_PushPersonalizedPromotionProduct[];
  /**
  * When set to true, products that couldn't be resolved will be skipped. When false request will fail when a product couldn't be resolved.
  */
  SkipUnresolvedProducts?: boolean;
  /**
  * Entity type: User
  */
  UserID: string;
}

export interface PersonalizedPromotionsPushUserPersonalizedPromotionProducts_PushPersonalizedPromotionProduct {
  /**
  * Entity type: Product
  */
  ProductID: string;
  Selected?: boolean;
}

/**
* Remove personalized promotion products attached to a user. Either ProductIDs or RemoveAll is required.
*/
export interface RemovePersonalizedPromotionProducts extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: PersonalizedPromotion
  */
  PersonalizedPromotionID: number;
  /**
  * Entity type: Product
  */
  ProductIDs?: number[];
  RemoveAll?: boolean;
  /**
  * Entity type: User
  */
  UserID: number;
}

/**
* Update an existing personalized promotion.
*/
export interface UpdatePersonalizedPromotion extends RequestMessageWithEmptyResponse {
  BackendID?: string | null;
  Description?: string | null;
  /**
  * Entity type: PersonalizedPromotion
  */
  ID: number;
  LockAfterFirstApply?: boolean;
  MaximumDistinctProducts?: number | null;
  Name?: string | null;
}

/**
* Create a new PriceList
*/
export interface CreatePriceList extends RequestMessage<CreatePriceListResponse> {
  BackendID?: string;
  BackendSystemID?: string;
  /**
  * Entity type: Currency
  */
  CurrencyID: string;
  IncludingVat?: boolean;
  IsActive?: boolean;
  IsFinalSalePriceList?: boolean;
  IsSpecialPricesPriceList?: boolean;
  Name: string;
  /**
  * Entity type: PriceList
  */
  SpecialPricesPriceListID?: number;
  TimeZone?: string;
}

/**
* Create a new PriceListAdjustment
*/
export interface CreatePriceListAdjustment extends RequestMessage<CreatePriceListAdjustmentResponse> {
  BackendID?: string;
  Data?: PricingRoundingData | PricingPriceListCalculationNode_PriceListData | PricingMarkupCalculationNode_MarkupData | PricingSupplierPricingCalculationNode_SupplierPricingData;
  EffectiveDate: string;
  ExpireDate?: string;
  Label?: string;
  Name: string;
  OverridePrice?: boolean;
  /**
  * Entity type: PriceListAdjustment
  */
  ParentAdjustmentID?: number;
  /**
  * Entity type: PriceList
  */
  PriceListID: number;
  PricingGroupID?: string;
  Sequence?: number;
  /**
  * If set to true, this will skip the recalculation of the price list after the adjustment is updated, defaults to false so it will always recalculate. Recalculation happens periodically thereafter.
  */
  SkipRecalculation?: boolean;
  Type: string;
}

export interface CreatePriceListAdjustmentResponse extends ResponseMessage {
  /**
  * Entity type: PriceListAdjustment
  */
  ID: number;
}

/**
* Create a new PriceListManualInputAdjustment
*/
export interface CreatePriceListManualInputAdjustment extends RequestMessage<CreatePriceListManualInputAdjustmentResponse> {
  EffectiveDate: string;
  ExpireDate?: string;
  /**
  * Entity type: PriceListAdjustment
  */
  PriceListAdjustmentID: number;
  /**
  * Entity type: Product
  */
  ProductID: number;
  Value: number;
}

export interface CreatePriceListManualInputAdjustmentResponse extends ResponseMessage {
  /**
  * Entity type: PriceListManualInputAdjustment
  */
  ID: number;
}

/**
* Create a new PriceListOrganizationUnit
*/
export interface CreatePriceListOrganizationUnit extends RequestMessage<CreatePriceListOrganizationUnitResponse> {
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID: number;
  /**
  * Entity type: PriceList
  */
  PriceListID: number;
  /**
  * Entity type: PriceListUsageType
  */
  PriceListUsageTypeID: number;
  PricingGroupID?: string;
  /**
  * Entity type: OrganizationUnit
  */
  TargetOrganizationUnitID?: number;
}

export interface CreatePriceListOrganizationUnitResponse extends ResponseMessage {
  /**
  * Entity type: PriceListOrganizationUnit
  */
  ID: number;
}

export interface CreatePriceListResponse extends ResponseMessage {
  /**
  * Entity type: PriceList
  */
  ID: number;
}

export interface CreatePriceListUsageType extends RequestMessage<CreatePriceListUsageTypeResponse> {
  Description?: string;
  Name: string;
  RequiredUserType?: UserTypes;
}

export interface CreatePriceListUsageTypeResponse extends ResponseMessage {
  ID: number;
}

/**
* Delete a PriceList
*/
export interface DeletePriceList extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: PriceList
  */
  ID: number;
}

/**
* Delete an existing PriceListAdjustment
*/
export interface DeletePriceListAdjustment extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: PriceListAdjustment
  */
  ID: number;
  /**
  * If set to true, this will skip the recalculation of the price list after the adjustment is updated, defaults to false so it will always recalculate. Recalculation happens periodically thereafter.
  */
  SkipRecalculation?: boolean;
}

/**
* Delete a PriceListManualInputAdjustment
*/
export interface DeletePriceListManualInputAdjustment extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: PriceListManualInputAdjustment
  */
  ID: number;
}

/**
* Delete a PriceListOrganizationUnit
*/
export interface DeletePriceListOrganizationUnit extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: PriceListOrganizationUnit
  */
  ID: number;
}

export interface DeletePriceListUsageType extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: PriceListUsageType
  */
  ID: number;
}

/**
* Generate an excel file containing all ManualInputPridceListAdjustments for the given PriceListAdjustment.
*/
export interface DownloadPriceListManualInputAdjustments extends RequestMessageWithResourceResponse {
  /**
  * Entity type: PriceListAdjustment
  */
  PriceListAdjustmentID: number;
  /**
  * Download the price list manual input adjustments with either the CustomID of a product or the BackendID of a product.
  */
  UseProductBackendID?: boolean;
}

/**
* Generate an excel sample file containing all ManualInputPridceListAdjustments for the given PriceListAdjustment.
*/
export interface DownloadPriceListManualInputAdjustmentsSample extends RequestMessageWithResourceResponse {
  /**
  * Download the price list manual input adjustments with either the CustomID of a product or the BackendID of a product.
  */
  UseProductBackendID?: boolean;
}

/**
* Get a PriceListAdjustment
*/
export interface GetPriceListAdjustmentByID extends RequestMessage<GetPriceListAdjustmentByIDResponse> {
  /**
  * Entity type: PriceListAdjustment
  */
  ID: number;
}

export interface GetPriceListAdjustmentByIDResponse extends ResponseMessage {
  BackendID?: string;
  Data?: PricingRoundingData | PricingPriceListCalculationNode_PriceListData | PricingMarkupCalculationNode_MarkupData | PricingSupplierPricingCalculationNode_SupplierPricingData;
  EffectiveDate: string;
  ExpireDate?: string;
  /**
  * Entity type: PriceListAdjustment
  */
  ID: number;
  Label?: string;
  /**
  * Entity type: PriceListAdjustmentLabel
  */
  LabelID?: number;
  Name: string;
  OverridePrice: boolean;
  /**
  * Entity type: PriceListAdjustment
  */
  ParentAdjustmentID?: number;
  ParentAdjustmentName?: string;
  PriceList: PricingGetPriceListAdjustmentByIDResponse_PriceListDto;
  /**
  * Entity type: PriceList
  */
  PriceListID: number;
  PricingGroupID?: string;
  Sequence: number;
  SystemType: DataModelsPriceListAdjustmentSystemType;
  Type: string;
}

export interface PricingGetPriceListAdjustmentByIDResponse_PriceListDto {
  CurrencyID: string;
  Name: string;
  TimeZone: string;
}

/**
* Get a PriceList
* 
* A PriceList has a TimeZone, this TimeZone should be used to Display certain DateTime's on the frontend.
* For these specific fields the TimeZone of the user should be ignored and instead the one on the PriceList should be used.
*/
export interface GetPriceListByID extends RequestMessage<GetPriceListByIDResponse> {
  /**
  * Entity type: PriceList
  */
  ID: number;
}

export interface GetPriceListByIDResponse extends ResponseMessage {
  BackendID?: string;
  BackendSystemID?: string;
  /**
  * Entity type: Currency
  */
  CurrencyID: string;
  /**
  * Entity type: PriceList
  */
  ID: number;
  IncludingVat: boolean;
  IsActive: boolean;
  IsFinalSalePriceList: boolean;
  IsSpecialPricesPriceList: boolean;
  Name: string;
  SpecialPricesPriceList?: PricingPriceListDto;
  /**
  * Entity type: PriceList
  */
  SpecialPricesPriceListID?: number;
  TimeZone: string;
}

/**
* Get a PriceListManualInputAdjustment by ID
*/
export interface GetPriceListManualInputAdjustmentByID extends RequestMessage<GetPriceListManualInputAdjustmentByIDResponse> {
  /**
  * Entity type: PriceListManualInputAdjustment
  */
  ID: number;
}

export interface GetPriceListManualInputAdjustmentByIDResponse extends ResponseMessage {
  EffectiveDate: string;
  ExpireDate?: string;
  /**
  * Entity type: PriceListManualInputAdjustment
  */
  ID: number;
  /**
  * Entity type: PriceListAdjustment
  */
  PriceListAdjustmentID: number;
  ProductBackendID?: string;
  ProductCustomID?: string;
  /**
  * Entity type: Product
  */
  ProductID: number;
  ProductName?: string;
  Value: number;
}

/**
* Get an existing PriceListOrganizationUnit
*/
export interface GetPriceListOrganizationUnitByID extends RequestMessage<GetPriceListOrganizationUnitByIDResponse> {
  /**
  * Entity type: PriceListOrganizationUnit
  */
  ID: number;
}

export interface GetPriceListOrganizationUnitByIDResponse extends ResponseMessage {
  ID: number;
  OrganizationUnitID: number;
  OrganizationUnitName?: string;
  PriceList?: PricingGetPriceListOrganizationUnitByIDResponse_PriceListDto;
  PriceListID: number;
  PriceListUsageTypeID: number;
  PriceListUsageTypeName?: string;
  PricingGroupID?: string;
  /**
  * Entity type: OrganizationUnit
  */
  TargetOrganizationUnitID?: number;
  TargetOrganizationUnitName?: string;
}

export interface PricingGetPriceListOrganizationUnitByIDResponse_PriceListDto {
  CurrencyID?: string;
  Name?: string;
}

export interface GetPriceListUsageTypeByID extends RequestMessage<GetPriceListUsageTypeByIDResponse> {
  /**
  * Entity type: PriceListUsageType
  */
  ID: number;
}

export interface GetPriceListUsageTypeByIDResponse extends ResponseMessage {
  Description?: string;
  ID: number;
  Name?: string;
  RequiredUserType: UserTypes;
}

export interface GetPriceListUsageTypes extends RequestMessage<GetPriceListUsageTypesResponse> {
}

export interface GetPriceListUsageTypesResponse extends ResponseMessage {
  PriceListUsageTypes?: PricingGetPriceListUsageTypesResponse_PriceListUsageTypeDto[];
}

export interface PricingGetPriceListUsageTypesResponse_PriceListUsageTypeDto {
  Description?: string;
  ID: number;
  Name?: string;
  RequiredUserType: UserTypes;
}

/**
* List the PriceListAdjustments
*/
export interface ListPriceListAdjustments extends FilteredPagedResultRequest<PricingListPriceListAdjustmentsFilter, ListPriceListAdjustmentsResponse> {
}

export interface ListPriceListAdjustmentsResponse extends PagedResultResponse<PricingListPriceListAdjustmentsResponse_PriceListAdjustmentDto> {
}

export interface PricingListPriceListAdjustmentsResponse_PriceListAdjustmentDto {
  BackendID?: string;
  Data?: PricingRoundingData | PricingPriceListCalculationNode_PriceListData | PricingMarkupCalculationNode_MarkupData | PricingSupplierPricingCalculationNode_SupplierPricingData;
  EffectiveDate: string;
  ExpireDate?: string;
  /**
  * Entity type: PriceListAdjustment
  */
  ID: number;
  Label?: string;
  Name: string;
  OverridePrice: boolean;
  /**
  * Entity type: PriceListAdjustment
  */
  ParentAdjustmentID?: number;
  ParentAdjustmentName?: string;
  PriceList: PricingListPriceListAdjustmentsResponse_PriceListAdjustmentDto_PriceListDto;
  /**
  * Entity type: PriceList
  */
  PriceListID: number;
  PricingGroupID?: string;
  Sequence: number;
  SystemType: DataModelsPriceListAdjustmentSystemType;
  Type: string;
}

export interface PricingListPriceListAdjustmentsResponse_PriceListAdjustmentDto_PriceListDto {
  CurrencyID: string;
  Name: string;
  TimeZone: string;
}

/**
* List the PriceListManualInputAdjustments, it is required to supply at least an PriceListAdjustmentID in the Filter
*/
export interface ListPriceListManualInputAdjustments extends FilteredPagedResultRequest<PricingListManualInputAdjustmentsFilter, ListPriceListManualInputAdjustmentsResponse> {
  /**
  * Entity type: ProductPropertyType
  */
  IncludedProductProperties?: string[];
  /**
  * Entity type: PriceListAdjustment
  */
  PriceListAdjustmentID?: number;
}

export interface ListPriceListManualInputAdjustmentsResponse extends PagedResultResponse<PricingListPriceListManualInputAdjustmentsResponse_PriceListManualInputAdjustmentDto> {
}

export interface PricingListPriceListManualInputAdjustmentsResponse_PriceListManualInputAdjustmentDto {
  EffectiveDate: string;
  ExpireDate?: string;
  /**
  * Entity type: PriceListManualInputAdjustment
  */
  ID: number;
  Product?: SearchIProductSearchItem;
  ProductBackendID?: string;
  ProductCustomID?: string;
  /**
  * Entity type: Product
  */
  ProductID: number;
  ProductName?: string;
  Value: number;
}

/**
* List the PriceListOrganizationUnits
*/
export interface ListPriceListOrganizationUnits extends RequestMessage<ListPriceListOrganizationUnitsResponse> {
  PageConfig?: PageConfig<PricingListPriceListOrganizationUnitsFilter>;
}

export interface ListPriceListOrganizationUnitsResponse extends PagedResultResponse<PricingListPriceListOrganizationUnitsResponse_PriceListOrganizationUnitDto> {
}

export interface PricingListPriceListOrganizationUnitsResponse_PriceListOrganizationUnitDto {
  /**
  * Entity type: PriceListOrganizationUnit
  */
  ID: number;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID: number;
  OrganizationUnitName?: string;
  PriceList?: PricingListPriceListOrganizationUnitsResponse_PriceListOrganizationUnitDto_PriceListDto;
  /**
  * Entity type: PriceList
  */
  PriceListID: number;
  /**
  * Entity type: PriceListUsageType
  */
  PriceListUsageTypeID: number;
  PriceListUsageTypeName?: string;
  PricingGroupID?: string;
  /**
  * Entity type: OrganizationUnit
  */
  TargetOrganizationUnitID?: number;
  TargetOrganizationUnitName?: string;
}

export interface PricingListPriceListOrganizationUnitsResponse_PriceListOrganizationUnitDto_PriceListDto {
  CurrencyID?: string;
  Name?: string;
}

/**
* List PriceLists
*/
export interface ListPriceLists extends FilteredPagedResultRequest<PricingListPriceListsFilter, ListPriceListsResponse> {
}

/**
* Retrieve a list of OrganizationUnit PriceLists
* 
* It's required to set the OrganizationUnitID filter
*/
export interface ListPriceListsForOrganizationUnit extends RequestMessage<ListPriceListsForOrganizationUnitResponse> {
  PageConfig?: PageConfig<PricingListPriceListsForOrganizationUnitFilter>;
}

export interface ListPriceListsForOrganizationUnitResponse extends PagedResultResponse<PricingListPriceListsForOrganizationUnitResponse_PriceListDto> {
}

export interface PricingListPriceListsForOrganizationUnitResponse_PriceListDto {
  BackendID?: string;
  /**
  * Entity type: Currency
  */
  CurrencyID?: string;
  IncludingVat: boolean;
  InheritedFromOrganizationUnitBackendID?: string;
  /**
  * Entity type: OrganizationUnit
  */
  InheritedFromOrganizationUnitID?: number;
  InheritedFromOrganizationUnitName?: string;
  IsActive: boolean;
  IsFinalSalePriceList: boolean;
  Name?: string;
  OrganizationUnitBackendID?: string;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID: number;
  OrganizationUnitName?: string;
  /**
  * Entity type: PriceList
  */
  PriceListID: number;
  /**
  * Entity type: PriceListUsageType
  */
  PriceListUsageTypeID: number;
  PriceListUsageTypeName?: string;
  PricingGroupID?: string;
  TargetOrganizationUnitBackendID?: string;
  /**
  * Entity type: OrganizationUnit
  */
  TargetOrganizationUnitID?: number;
  TargetOrganizationUnitName?: string;
}

export interface ListPriceListsResponse extends PagedResultResponse<PricingPriceListDto> {
}

/**
* List the pricechanges
* 
* It is required to supply some OrganizationUnitIDs or some ProductIDs in the PageConfig filter.
*/
export interface ListProductPriceLedger extends RequestMessage<ListProductPriceLedgerResponse> {
  PageConfig?: PageConfig<PricingListProductPriceLedgerFilter>;
}

export interface ListProductPriceLedgerResponse extends PagedResultResponse<PricingListProductPriceLedgerResponse_OrganizationUnitPriceChange> {
}

export interface PricingListProductPriceLedgerResponse_OrganizationUnitPriceChange {
  CreationTime: string;
  CurrencyID?: string;
  NewOriginalPrice?: number;
  NewPrice?: number;
  OldOriginalPrice?: number;
  OldPrice?: number;
  OrganizationUnitID: number;
  OrganizationUnitName?: string;
  PriceListID: number;
  PriceListUsageTypeID: number;
  PriceListUsageTypeName?: string;
  ProductID: number;
}

/**
* Given the data on how rounding should be applied this service will perform the rounding on the given example prices to preview what the rounding would look like.
*/
export interface PreviewPriceListRoundingAdjustment extends RequestMessage<PreviewPriceListRoundingAdjustmentResponse> {
  Data?: PricingRoundingData;
  ExamplePrices?: number[];
}

export interface PreviewPriceListRoundingAdjustmentResponse extends ResponseMessage {
  Results?: PricingPreviewPriceListRoundingAdjustmentResponse_RoundingResult[];
}

export interface PricingPreviewPriceListRoundingAdjustmentResponse_RoundingResult {
  InputPrice: number;
  OutputPrice: number;
}

export interface PricingPriceListDto {
  BackendID?: string;
  BackendSystemID?: string;
  /**
  * Indicates if the user can view the pricelist details. This is the case when:
  * - User has 'CanViewCostPrices' AND 'CanViewPurchasePrices' functionality
  * OR
  * - User has access to an organization unit
  */
  CanViewPriceList: boolean;
  /**
  * Entity type: Currency
  */
  CurrencyID: string;
  /**
  * Entity type: PriceList
  */
  ID: number;
  IncludingVat: boolean;
  IsActive: boolean;
  IsFinalSalePriceList: boolean;
  IsSpecialPricesPriceList: boolean;
  Name: string;
  SpecialPricesPriceList?: PricingPriceListDto;
  /**
  * Entity type: PriceList
  */
  SpecialPricesPriceListID?: number;
  TimeZone: string;
}

/**
* Update an existing PriceList
*/
export interface UpdatePriceList extends RequestMessageWithEmptyResponse {
  BackendID?: string | null;
  BackendSystemID?: string | null;
  /**
  * Entity type: Currency
  */
  CurrencyID?: string;
  /**
  * Entity type: PriceList
  */
  ID: number;
  IncludingVat?: boolean;
  IsActive?: boolean;
  IsFinalSalePriceList?: boolean;
  IsSpecialPricesPriceList?: boolean | null;
  Name?: string;
  /**
  * Entity type: PriceList
  */
  SpecialPricesPriceListID?: number | null;
  TimeZone?: string | null;
}

/**
* Update an existing PriceListAdjustment
*/
export interface UpdatePriceListAdjustment extends RequestMessageWithEmptyResponse {
  BackendID?: string | null;
  Data?: PricingRoundingData | PricingPriceListCalculationNode_PriceListData | PricingMarkupCalculationNode_MarkupData | PricingSupplierPricingCalculationNode_SupplierPricingData;
  EffectiveDate: string;
  ExpireDate?: string;
  /**
  * Entity type: PriceListAdjustment
  */
  ID: number;
  Label?: string;
  Name: string;
  OverridePrice?: boolean;
  /**
  * Entity type: PriceListAdjustment
  */
  ParentAdjustmentID?: number;
  /**
  * Entity type: PriceList
  */
  PriceListID?: number;
  PricingGroupID?: string | null;
  Sequence?: number;
  /**
  * If set to true, this will skip the recalculation of the price list after the adjustment is updated, defaults to false so it will always recalculate. Recalculation happens periodically thereafter.
  */
  SkipRecalculation?: boolean;
  Type: string;
}

/**
* Update an existing new PriceListManualInputAdjustment
*/
export interface UpdatePriceListManualInputAdjustment extends RequestMessageWithEmptyResponse {
  EffectiveDate: string;
  ExpireDate?: string;
  /**
  * Entity type: PriceListManualInputAdjustment
  */
  ID: number;
  Value: number;
}

/**
* Update an existing PriceListOrganizationUnit
*/
export interface UpdatePriceListOrganizationUnit extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: PriceListOrganizationUnit
  */
  ID: number;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID: number;
  /**
  * Entity type: PriceList
  */
  PriceListID: number;
  /**
  * Entity type: PriceListUsageType
  */
  PriceListUsageTypeID: number;
  PricingGroupID?: string | null;
  /**
  * Entity type: OrganizationUnit
  */
  TargetOrganizationUnitID?: number;
}

export interface UpdatePriceListUsageType extends RequestMessageWithEmptyResponse {
  Description?: string;
  /**
  * Entity type: PriceListUsageType
  */
  ID: number;
  RequiredUserType?: UserTypes;
}

/**
* Upload an excel file containing all ManualInputPriceListAdjustments for the given PriceListAdjustment. These will replace all exisiting adjustments.
*/
export interface UploadPriceListManualInputAdjustments extends RequestMessage<UploadPriceListManualInputAdjustmentsResponse> {
  Data: string;
  /**
  * Entity type: PriceListAdjustment
  */
  PriceListAdjustmentID: number;
  ProcessAsync?: boolean;
}

export interface UploadPriceListManualInputAdjustmentsResponse extends ResponseMessage {
  IsProcessedAsync: boolean;
  Messages?: string[];
}

/**
* Creates a printer type
*/
export interface CreatePrinterType extends RequestMessage<CreatePrinterTypeResponse> {
  /**
  * Description of the type
  */
  Description?: string;
  /**
  * Name of the type
  */
  Name: string;
  PaperWidth?: number;
}

export interface CreatePrinterTypeResponse extends ResponseMessage {
  ID: number;
}

/**
* Deletes a printer type
*/
export interface DeletePrinterType extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: PrinterType
  */
  ID: number;
}

/**
* Gets a printer type
*/
export interface GetPrinterTypeByID extends RequestMessage<GetPrinterTypeByIDResponse> {
  /**
  * Entity type: PrinterType
  */
  ID: number;
}

export interface GetPrinterTypeByIDResponse extends ResponseMessage {
  Description?: string;
  ID: number;
  Name?: string;
  PaperWidth: number;
}

/**
* Gets all printer types
*/
export interface GetPrinterTypes extends RequestMessage<GetPrinterTypesResponse> {
}

export interface GetPrinterTypesResponse extends ResponseMessage {
  PrinterTypes?: PrinterTypesGetPrinterTypesResponse_PrinterTypeModel[];
}

export interface PrinterTypesGetPrinterTypesResponse_PrinterTypeModel {
  Description?: string;
  ID: number;
  Name?: string;
  PaperWidth: number;
}

/**
* Updates a printer type
*/
export interface UpdatePrinterType extends RequestMessageWithEmptyResponse {
  Description?: string;
  /**
  * Entity type: PrinterType
  */
  ID: number;
  Name: string;
  PaperWidth?: number;
}

/**
* This service creates a ProductSubscription for the given SubscriptionProductID.
*/
export interface CreateProductSubscription extends RequestMessage<CreateProductSubscriptionResponse> {
  ActivationMethod?: ProductSubscriptionsDataModelsProductSubscriptionActivationMethod;
  BackendID?: string;
  /**
  * Number of recurring orders that must be billed before pause or cancel can take effect. Leave null for no contract period.
  */
  ContractPeriod?: number;
  /**
  * When true (default), the contract period restarts on each renewal. When false, the contract applies only to the first contract period and renewals are contract-free. May be overridden to false by the OU setting ProductSubscriptions:AllowContractRepeatOnRenewal.
  */
  ContractRepeatsOnRenewal?: boolean;
  Description?: string;
  Interval?: ProductSubscriptionsDataModelsProductSubscriptionInterval;
  IsActive?: boolean;
  Name: string;
  /**
  * Controls when the subscription line on the original order is shipped. OnOrderShipment (default): line ships together with the rest of the order. OnOrderPaid: line ships as soon as the order is paid and a usable UserPaymentToken exists for the customer. Manual: line is excluded from the shipper's auto-remainder sweep and ships only when explicitly listed in a shipper request.
  */
  ShipmentTrigger?: ProductSubscriptionsDataModelsProductSubscriptionShipmentTrigger;
  ShowModal?: boolean;
  /**
  * Entity type: Product
  */
  SubscriptionProductID: number;
  /**
  * If set, the customer gets a free trial of N days before the first charge. Must be > 0.
  */
  TrialPeriodInDays?: number;
  /**
  * Entity type: Product
  */
  TriggerProductIDs?: number[];
}

export interface CreateProductSubscriptionResponse extends ResponseMessage {
  /**
  * Entity type: ProductSubscription
  */
  ID: number;
}

/**
* Deletes a ProductSubscription.
*/
export interface DeleteProductSubscription extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: ProductSubscription
  */
  ID: number;
}

/**
* This service is used to fetch a `ProductSubscription` by its ID.
*/
export interface GetProductSubscription extends RequestMessage<GetProductSubscriptionResponse> {
  /**
  * Entity type: ProductSubscription
  */
  ID: number;
  /**
  * Entity type: ProductPropertyType
  */
  IncludedFields?: string[];
}

export interface GetProductSubscriptionResponse extends ResponseMessage {
  ActivationMethod: ProductSubscriptionsDataModelsProductSubscriptionActivationMethod;
  BackendID?: string;
  ContractPeriod?: number;
  ContractRepeatsOnRenewal: boolean;
  Description?: string;
  /**
  * Entity type: ProductSubscription
  */
  ID: number;
  Interval: ProductSubscriptionsDataModelsProductSubscriptionInterval;
  IsActive: boolean;
  Name: string;
  ShipmentTrigger: ProductSubscriptionsDataModelsProductSubscriptionShipmentTrigger;
  ShowModal: boolean;
  SubscriptionPricing: ProductSubscriptionsSubscriptionProductPriceInfo;
  SubscriptionProduct: ProductSubscriptionsProductSubscriptionProductInfo;
  TrialPeriodInDays?: number;
  /**
  * Entity type: Product
  */
  TriggerProductIDs?: number[];
}

/**
* This service returns a paged summary of `ProductSubscriptions`, for each subscription it contains the `SubscriptionProduct` and the pricing information for the subscription.
*/
export interface ListProductSubscriptions extends PagedRequestMessage<ProductSubscriptionsListProductSubscriptionsFilter, ListProductSubscriptionsResponse> {
  /**
  * Entity type: ProductPropertyType
  */
  IncludedFields?: string[];
}

export interface ListProductSubscriptionsResponse extends PagedResponseMessage<ProductSubscriptionsListProductSubscriptionsResponseResult> {
}

export interface ProductSubscriptionsListProductSubscriptionsResponseResult {
  ActivationMethod: ProductSubscriptionsDataModelsProductSubscriptionActivationMethod;
  BackendID?: string;
  ContractPeriod?: number;
  ContractRepeatsOnRenewal: boolean;
  Description?: string;
  /**
  * Entity type: ProductSubscription
  */
  ID: number;
  Interval: ProductSubscriptionsDataModelsProductSubscriptionInterval;
  IsActive: boolean;
  Name: string;
  ShipmentTrigger: ProductSubscriptionsDataModelsProductSubscriptionShipmentTrigger;
  ShowModal: boolean;
  SubscriptionPricing?: ProductSubscriptionsSubscriptionProductPriceInfo;
  SubscriptionProduct?: ProductSubscriptionsProductSubscriptionProductInfo;
  TrialPeriodInDays?: number;
  /**
  * Entity type: Product
  */
  TriggerProductIDs?: number[];
}

/**
* This service is largely the same as CreateProductSubscription.
*/
export interface UpdateProductSubscription extends RequestMessageWithEmptyResponse {
  ActivationMethod?: ProductSubscriptionsDataModelsProductSubscriptionActivationMethod;
  BackendID?: string | null;
  ContractPeriod?: number | null;
  ContractRepeatsOnRenewal?: boolean;
  Description?: string | null;
  /**
  * Entity type: ProductSubscription
  */
  ID: number;
  IsActive?: boolean;
  Name?: string;
  ShipmentTrigger?: ProductSubscriptionsDataModelsProductSubscriptionShipmentTrigger;
  ShowModal?: boolean;
  TrialPeriodInDays?: number | null;
  /**
  * Entity type: Product
  */
  TriggerProductIDs?: number[] | null;
}

/**
* Returns the product count within the persisted product search template
* When product id is given, it wil checks if a product is part of the persisted product search template result.
* NOTE THAT after product search template creation/update if can take a few minutes for the result to be updated.
*/
export interface CheckProductSearchTemplate extends RequestMessage<CheckProductSearchTemplateResponse> {
  /**
  * Entity type: Product
  */
  ProductID?: number;
  /**
  * Entity type: ProductSearchTemplate
  */
  ProductSearchTemplateID: number;
}

export interface CheckProductSearchTemplateResponse extends ResponseMessage {
  /**
  * Will return true/false is the given product is present. If no product is given it will return null
  */
  IsPresent?: boolean;
  /**
  * Total count of products withing the product search template result.
  */
  ResultCount: number;
}

/**
* Creates a barcode for a product for a specific unit of measure.
* 
* Optionally adds a record in the ProductUnitOfMeasure conversion table for the supplied Quantity.
*/
export interface CreateProductBarcode extends RequestMessageWithEmptyResponse {
  Barcode: string;
  Name?: string;
  /**
  * Entity type: Product
  */
  ProductID: number;
  Quantity?: number;
  /**
  * Entity type: UnitOfMeasure
  */
  UnitOfMeasureID: number;
}

/**
* Create a new Product Requirement
*/
export interface CreateProductRequirement extends RequestMessage<CreateProductRequirementResponse> {
  BackendID?: string;
  Data?: Record<string,string | null>;
  DataType?: DataModelsProductRequirementDataTypes;
  Handler?: string;
  IsArray?: boolean;
  IsRequired?: boolean;
  Name: string;
  Options?: DataModelsCustomFieldOptions;
  OrderType?: DataModelsOrderTypes;
  /**
  * Entity type: Product
  */
  ProductID: number;
  RequirementOptions?: DataModelsProductRequirementOptions;
}

export interface CreateProductRequirementResponse extends ResponseMessage {
  /**
  * Entity type: ProductRequirement
  */
  ID: number;
}

/**
* Create a new ProductSearchTemplate
*/
export interface CreateProductSearchTemplate extends RequestMessage<CreateProductSearchTemplateResponse> {
  AggregationOptions?: Record<string,SearchAggregationFilterModel>;
  BackendID?: string;
  Filters: Record<string,SearchFilterModel>;
  IncludeLeafProducts?: boolean;
  MinimumRefreshInterval?: string;
  Name: string;
  Type?: DataModelsProductSearchTemplateTypes;
}

export interface CreateProductSearchTemplateResponse extends ResponseMessage {
  /**
  * Entity type: ProductSearchTemplate
  */
  ID: number;
}

/**
* Create a new ProductUnitOfMeasure
*/
export interface CreateProductUnitOfMeasure extends RequestMessage<CreateProductUnitOfMeasureResponse> {
  /**
  * Entity type: Product
  */
  ProductID: number;
  Quantity?: number;
  /**
  * Entity type: UnitOfMeasure
  */
  UnitOfMeasureID: number;
}

export interface CreateProductUnitOfMeasureResponse extends ResponseMessage {
  ID: number;
}

/**
* Create a new SupplierProduct
*/
export interface CreateSupplierProduct extends RequestMessage<CreateSupplierProductResponse> {
  BackendID: string;
  BrandName?: string;
  Description?: string;
  PreferredMinimumOrderQuantity?: number;
  PrimitiveName: string;
  Status?: DataModelsProductStatus;
  /**
  * Entity type: OrganizationUnit
  */
  SupplierOrganizationUnitID: number;
  /**
  * Entity type: TaxCode
  */
  TaxCodeID: number;
}

export interface CreateSupplierProductResponse extends ResponseMessage {
  /**
  * Entity type: Product
  */
  ID: number;
}

/**
* Create a new UnitOfMeasure
*/
export interface CreateUnitOfMeasure extends RequestMessage<CreateUnitOfMeasureResponse> {
  BackendID?: string;
  Description?: string;
  Name: string;
}

export interface CreateUnitOfMeasureResponse extends ResponseMessage {
  /**
  * Entity type: UnitOfMeasure
  */
  ID: number;
}

/**
* Delete a barcode from eva
* 
* When it's SupplierBarcode all matching barcodes will be removed
*/
export interface DeleteProductBarcode extends RequestMessageWithEmptyResponse {
  Barcode: string;
  IsSupplierBarcode?: boolean;
}

/**
* Delete an existing Product Requirement
*/
export interface DeleteProductRequirement extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: ProductRequirement
  */
  ID: number;
}

/**
* Delete a ProductSearchTemplate
*/
export interface DeleteProductSearchTemplate extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: ProductSearchTemplate
  */
  ID: number;
}

/**
* Delete a ProductUnitOfMeasure
*/
export interface DeleteProductUnitOfMeasure extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: ProductUnitOfMeasure
  */
  ID: number;
}

/**
* Delete a SupplierProduct
*/
export interface DeleteSupplierProduct extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: Product
  */
  ID: number;
}

/**
* Delete a UnitOfMeasure
*/
export interface DeleteUnitOfMeasure extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: UnitOfMeasure
  */
  ID: number;
}

/**
* Download the current supplier products.
*/
export interface DownloadSupplierProducts extends RequestMessageWithResourceResponse {
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID?: number;
}

/**
* Download the current barcodes for the supplier products.
*/
export interface DownloadSupplierProductsBarcodes extends RequestMessageWithResourceResponse {
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID?: number;
}

/**
* Download a sample for the `UploadSupplierProductsBarcodes`.
*/
export interface DownloadSupplierProductsBarcodesSample extends RequestMessageWithResourceResponse {
}

/**
* Download the current prices for the supplier products in the given Currency.
*/
export interface DownloadSupplierProductsPricing extends RequestMessageWithResourceResponse {
  /**
  * Entity type: Currency
  */
  CurrencyID?: string;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID?: number;
}

/**
* Download a sample for the `UploadSupplierProductsPricing`.
*/
export interface DownloadSupplierProductsPricingSample extends RequestMessageWithResourceResponse {
}

/**
* Download a sample for the `UploadSupplierProducts`.
*/
export interface DownloadSupplierProductsSample extends RequestMessageWithResourceResponse {
}

/**
* Download the current stock for the supplier products.
*/
export interface DownloadSupplierProductsStock extends RequestMessageWithResourceResponse {
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID?: number;
}

/**
* Download a sample for the `UploadSupplierProductsStock`.
*/
export interface DownloadSupplierProductsStockSample extends RequestMessageWithResourceResponse {
}

/**
* Get all info for a Product Requirement
*/
export interface GetProductRequirementByID extends RequestMessage<GetProductRequirementByIDResponse> {
  /**
  * Entity type: ProductRequirement
  */
  ID: number;
}

export interface GetProductRequirementByIDResponse extends ResponseMessage {
  BackendID?: string;
  Data?: Record<string,string | null>;
  DataType: DataModelsProductRequirementDataTypes;
  Handler?: string;
  /**
  * Entity type: ProductRequirement
  */
  ID: number;
  IsArray?: boolean;
  IsRequired?: boolean;
  Name: string;
  Options?: DataModelsCustomFieldOptions;
  OrderType?: DataModelsOrderTypes;
  ProductBackendID?: string;
  ProductCustomID?: string;
  /**
  * Entity type: Product
  */
  ProductID: number;
  ProductName: string;
  RequirementOptions?: DataModelsProductRequirementOptions;
}

/**
* Get all available custom handler for ProductRequirements
* 
* These handlers are custom build to fetch values for ProductRequirements from external systems
*/
export interface GetProductRequirementHandlers extends RequestMessage<GetProductRequirementHandlersResponse> {
}

export interface GetProductRequirementHandlersResponse extends ResponseMessage {
  Handlers: string[];
}

/**
* Get an exisiting ProductSearchTemplate by ID
*/
export interface GetProductSearchTemplateByID extends RequestMessage<GetProductSearchTemplateByIDResponse> {
  /**
  * Entity type: ProductSearchTemplate
  */
  ID: number;
}

export interface GetProductSearchTemplateByIDResponse extends ResponseMessage {
  AggregationOptions?: Record<string,SearchAggregationFilterModel>;
  BackendID?: string;
  /**
  * Entity type: Country
  */
  CountryID: string;
  Filters: Record<string,SearchFilterModel>;
  IncludeLeafProducts: boolean;
  /**
  * Entity type: Language
  */
  LanguageID: string;
  MinimumRefreshInterval?: string;
  Name: string;
  Type: DataModelsProductSearchTemplateTypes;
}

export interface GetSupplierForProductResponse extends GetListResponse<ProductsGetSupplierForProductResponse_SupplierDto> {
}

export interface ProductsGetSupplierForProductResponse_SupplierDto {
  ID: number;
  Name?: string;
  Stock: number;
  UnitCost: number;
}

/**
* Get a SupplierProduct by ID
*/
export interface GetSupplierProductByID extends RequestMessage<GetSupplierProductByIDResponse> {
  /**
  * Entity type: Product
  */
  ID: number;
}

export interface GetSupplierProductByIDResponse extends ResponseMessage {
  BackendID?: string;
  BrandName?: string;
  CostPrice?: number;
  CurrencyID?: string;
  Description?: string;
  ID: number;
  PreferredMinimumOrderQuantity?: number;
  PrimitiveName?: string;
  QuantityOnHand: number;
  RecommendedRecommendedRetailPrice?: number;
  Status: DataModelsProductStatus;
  TaxCode?: EVAFrameworkAPIEnumDto;
}

/**
* Retrieves the suppliers (Organization Units) for the given Product.
*/
export interface GetSuppliersForProduct extends RequestMessage<GetSupplierForProductResponse> {
  /**
  * Entity type: Product
  */
  ProductID: number;
}

/**
* List the UnitOfMeasures
*/
export interface GetUnitOfMeasures extends RequestMessage<GetUnitOfMeasuresResponse> {
}

export interface GetUnitOfMeasuresResponse extends ResponseMessage {
  UnitOfMeasures?: ProductsGetUnitOfMeasuresResponse_UnitOfMeasureDto[];
}

export interface ProductsGetUnitOfMeasuresResponse_UnitOfMeasureDto extends EVAFrameworkAPIEnumDto {
  BackendID?: string;
}

/**
* The page size `Limit` has a maximum value of `1.000` for this service.
*/
export interface ListProductBarcodes extends RequestMessage<ListProductBarcodesResponse> {
  PageConfig?: PageConfig<ProductsListProductBarcodesFilter>;
}

export interface ListProductBarcodesResponse extends PagedResultResponse<ProductsListProductBarcodesResponse_ProductBarcodeDto> {
}

export interface ProductsListProductBarcodesResponse_ProductBarcodeDto {
  Barcode?: string;
  CatalogID?: number;
  IsSupplierProduct: boolean;
  Name?: string;
  Origin: DataModelsProductBarcodeOrigin;
  ProductBackendID?: string;
  ProductCustomID?: string;
  ProductDisplayValue?: string;
  ProductID: number;
  Quantity: number;
  UnitOfMeasure?: EVAFrameworkAPIEnumDto;
}

/**
* List existing Product Requirements
*/
export interface ListProductRequirements extends FilteredPagedResultRequest<ProductsListProductRequirementsFilter, ListProductRequirementsResponse> {
}

export interface ListProductRequirementsResponse extends PagedResultResponse<ProductsProductRequirementDto> {
}

/**
* List the ProductSearchTemplates
*/
export interface ListProductSearchTemplates extends RequestMessage<ListProductSearchTemplatesResponse> {
  PageConfig?: PageConfig<SearchProductSearchTemplateFilters>;
}

export interface ListProductSearchTemplatesResponse extends PagedResultResponse<ProductsListProductSearchTemplatesResponse_ProductSearchDto> {
}

export interface ProductsListProductSearchTemplatesResponse_ProductSearchDto {
  AggregationOptions?: Record<string,SearchAggregationFilterModel>;
  BackendID?: string;
  /**
  * Entity type: Country
  */
  CountryID: string;
  Filters: Record<string,SearchFilterModel>;
  /**
  * Entity type: ProductSearchTemplate
  */
  ID: number;
  IncludeLeafProducts: boolean;
  /**
  * Entity type: Language
  */
  LanguageID: string;
  MinimumRefreshInterval?: string;
  Name: string;
  Type: DataModelsProductSearchTemplateTypes;
}

/**
* List the ProductUnitOfMeasures
*/
export interface ListProductUnitOfMeasures extends RequestMessage<ListProductUnitOfMeasuresResponse> {
  PageConfig?: PageConfig<ProductsListProductUnitOfMeasuresFilter>;
}

export interface ListProductUnitOfMeasuresResponse extends PagedResultResponse<ProductsListProductUnitOfMeasuresResponse_ProductUnitOfMeasureDto> {
}

export interface ProductsListProductUnitOfMeasuresResponse_ProductUnitOfMeasureDto {
  ID: number;
  ProductID: number;
  ProductName?: string;
  Quantity: number;
  UnitOfMeasure?: EVAFrameworkAPIEnumDto;
  UnitOfMeasureID: number;
}

/**
* List the SupplierProducts
* 
* `SupplierProduct`: an item that describes the giftcard properties of a product with type GiftCard
*/
export interface ListSupplierProducts extends RequestMessage<ListSupplierProductsResponse> {
  PageConfig?: PageConfig<ProductsListSupplierProductsFilter>;
}

export interface ListSupplierProductsResponse extends PagedResultResponse<ProductsListSupplierProductsResponse_SupplierProductDto> {
}

export interface ProductsListSupplierProductsResponse_SupplierProductDto {
  BackendID?: string;
  BrandName?: string;
  CostPrice?: number;
  CurrencyID?: string;
  Description?: string;
  ID: number;
  PreferredMinimumOrderQuantity?: number;
  PrimitiveName?: string;
  QuantityOnHand: number;
  RecommendedRecommendedRetailPrice?: number;
  Status: DataModelsProductStatus;
  TaxCode?: EVAFrameworkAPIEnumDto;
}

export interface ProductsProductRequirementDto {
  BackendID?: string;
  Data?: Record<string,string | null>;
  DataType: DataModelsProductRequirementDataTypes;
  Handler?: string;
  /**
  * Entity type: ProductRequirement
  */
  ID: number;
  IsArray?: boolean;
  IsRequired?: boolean;
  Name: string;
  Options?: DataModelsCustomFieldOptions;
  OrderType?: DataModelsOrderTypes;
  ProductBackendID?: string;
  ProductCustomID?: string;
  /**
  * Entity type: Product
  */
  ProductID: number;
  ProductName: string;
  RequirementOptions?: DataModelsProductRequirementOptions;
}

/**
* Update an existing Product Requirement
*/
export interface UpdateProductRequirement extends RequestMessageWithEmptyResponse {
  BackendID?: string;
  Data?: Record<string,string | null>;
  DataType?: DataModelsProductRequirementDataTypes;
  Handler?: string;
  /**
  * Entity type: ProductRequirement
  */
  ID: number;
  IsArray?: boolean;
  IsRequired?: boolean;
  Name: string;
  Options?: DataModelsCustomFieldOptions;
  OrderType?: DataModelsOrderTypes;
  /**
  * Entity type: Product
  */
  ProductID: number;
  RequirementOptions?: DataModelsProductRequirementOptions;
}

/**
* Update an existing ProductSearchTemplate
*/
export interface UpdateProductSearchTemplate extends RequestMessageWithEmptyResponse {
  AggregationOptions?: Record<string,SearchAggregationFilterModel> | null;
  BackendID?: string | null;
  Filters?: Record<string,SearchFilterModel>;
  /**
  * Entity type: ProductSearchTemplate
  */
  ID: number;
  IncludeLeafProducts?: boolean;
  MinimumRefreshInterval?: string | null;
  Name?: string;
  Type?: DataModelsProductSearchTemplateTypes;
}

/**
* Update an existing ProductUnitOfMeasure
*/
export interface UpdateProductUnitOfMeasure extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: ProductUnitOfMeasure
  */
  ID: number;
  /**
  * Entity type: Product
  */
  ProductID: number;
  Quantity?: number;
  /**
  * Entity type: UnitOfMeasure
  */
  UnitOfMeasureID: number;
}

/**
* Update an existing SupplierProduct
*/
export interface UpdateSupplierProduct extends RequestMessageWithEmptyResponse {
  BackendID: string;
  BrandName?: string;
  Description?: string;
  /**
  * Entity type: Product
  */
  ID: number;
  PreferredMinimumOrderQuantity?: number;
  PrimitiveName: string;
  Status?: DataModelsProductStatus;
  /**
  * Entity type: TaxCode
  */
  TaxCodeID: number;
}

/**
* Update the prices of a SupplierProduct, this is handled in the background
*/
export interface UpdateSupplierProductPrices extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: Currency
  */
  CurrencyID: string;
  /**
  * Entity type: Product
  */
  ID: number;
  RecommendedRetailPrice?: number;
  UnitCost?: number;
}

/**
* Update the stock of a SupplierProduct, this is handled in the background
*/
export interface UpdateSupplierProductStock extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: Product
  */
  ID: number;
  Quantity?: number;
}

/**
* Update an existing UnitOfMeasure
*/
export interface UpdateUnitOfMeasure extends RequestMessageWithEmptyResponse {
  BackendID?: string;
  Description?: string;
  /**
  * Entity type: UnitOfMeasure
  */
  ID: number;
  Name: string;
}

/**
* Upload new products for a Supplier.
* Fetch a sample with the `DownloadSupplierProductsSample`.
* Fetch the current products with the `DownloadSupplierProducts`.
*/
export interface UploadSupplierProducts extends ProductsUploadSupplierProductsBase {
}

/**
* Upload new barcodes for the products of a Supplier.
* Fetch a sample with the `DownloadSupplierProductsBarcodesSample`.
* Fetch the current prices with the `DownloadSupplierProductsBarcodes`.
*/
export interface UploadSupplierProductsBarcodes extends ProductsUploadSupplierProductsBase {
}

export interface ProductsUploadSupplierProductsBase extends RequestMessage<UploadSupplierProductsResponse> {
  Data: string;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID?: number;
}

/**
* Upload new prices for the products of a Supplier.
* Fetch a sample with the `DownloadSupplierProductsPricingSample`.
* Fetch the current prices with the `DownloadSupplierProductsPricing`.
*/
export interface UploadSupplierProductsPricing extends ProductsUploadSupplierProductsBase {
}

export interface UploadSupplierProductsResponse extends ResponseMessage {
  DeletedCount: number;
  FailedCount: number;
  Messages?: Record<string,string | null>;
  TotalProductCount: number;
}

/**
* Upload new stock for the products of a Supplier.
* Fetch a sample with the `DownloadSupplierProductsStockSample`.
* Fetch the current stock with the `DownloadSupplierProductsStock`.
*/
export interface UploadSupplierProductsStock extends ProductsUploadSupplierProductsBase {
}

/**
* Attach functionalities to a role.
*/
export interface AttachFunctionalitiesToRole extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: Role
  */
  RoleID: number;
  ScopedFunctionalities?: RightsFunctionalityWithScope[];
}

/**
* Create a new role.
*/
export interface CreateRole extends RequestMessage<CreateRoleResponse> {
  /**
  * Entity type: Role
  * When set, the new role will one-time inherit all functionalities from the base role.
  */
  BaseRoleID?: number;
  Code?: string;
  /**
  * If this is set, any users that have not logged in after said days will get disabled
  */
  DeactivateUserAfterInactiveDays?: number;
  /**
  * When set, users with this role will be required to set up two-factor authentication
  */
  ForceTwoFactorAuthentication?: boolean;
  Name: string;
  /**
  * Optional rank for role assignment control. Higher rank can assign lower rank.
  */
  Rank?: number;
  UserType?: UserTypes;
}

export interface CreateRoleResponse extends ResponseMessage {
  /**
  * Entity type: Role
  */
  ID: number;
}

export interface CreateRoleSet extends RequestMessage<CreateRoleSetResponse> {
  BackendID?: string;
  Name: string;
}

export interface CreateRoleSetResponse extends ResponseMessage {
  /**
  * Entity type: RoleSet
  */
  ID: number;
}

/**
* Delete a role.
*/
export interface DeleteRole extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: Role
  */
  ID: number;
}

export interface DeleteRoleSet extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: RoleSet
  */
  ID: number;
}

/**
* Detaches functionalities from a role.
*/
export interface DetachFunctionalitiesFromRole extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: Role
  */
  RoleID: number;
  ScopedFunctionalities?: RightsFunctionalityWithScope[];
}

export interface RightsFunctionalityWithScope {
  ElevationType?: SecurityElevationType;
  Functionality: string;
  RequiresElevation?: boolean;
  Scope?: SecurityFunctionalityScope;
}

export interface GetAvailableRoles extends RequestMessage<GetAvailableRolesResponse> {
  /**
  * Entity type: User
  */
  UserID: number;
}

export interface GetAvailableRolesResponse extends ResponseMessage {
  AvailableRoles?: RightsRoleDto[];
}

/**
* Retrieve the currently assigned functionalities flattened on specified OU.
*/
export interface GetFlattenedFunctionalityByUserID extends RequestMessage<GetFlattenedFunctionalityByUserIDResponse> {
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID: number;
  /**
  * Entity type: User
  */
  UserID: number;
}

export interface GetFlattenedFunctionalityByUserIDResponse extends ResponseMessage {
  Functionalities?: string[];
  ScopedFunctionalities?: RightsFunctionalityWithScope[];
}

/**
* Returns all available categories for functionalities
*/
export interface GetFunctionalityCategories extends RequestMessage<GetFunctionalityCategoriesResponse> {
}

export interface GetFunctionalityCategoriesResponse extends ResponseMessage {
  Categories?: string[];
}

/**
* Get role with its functionalities by it's ID.
*/
export interface GetRole extends RequestMessage<GetRoleResponse> {
  /**
  * Merge the normal and elevated functionalities into single records.
  */
  FlattenElevationFunctionalities?: boolean;
  /**
  * Entity type: Role
  */
  ID: number;
}

export interface GetRoleResponse extends ResponseMessage {
  Result?: RightsRoleWithFunctionalitiesDto;
}

export interface GetRoleSetByID extends RequestMessage<GetRoleSetByIDResponse> {
  /**
  * Entity type: RoleSet
  */
  ID: number;
}

export interface GetRoleSetByIDResponse extends ResponseMessage {
  BackendID?: string;
  /**
  * Entity type: RoleSet
  */
  ID: number;
  Name?: string;
  Roles?: RightsRoleDto[];
}

export interface GetRolesForOrganizationUnit extends RequestMessage<GetRolesForOrganizationUnitResponse> {
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID: number;
}

export interface GetRolesForOrganizationUnitResponse extends ResponseMessage {
  Roles?: RightsRoleDto[];
}

export interface GetRolesForOrganizationUnitSet extends RequestMessage<GetRolesForOrganizationUnitSetResponse> {
  /**
  * Returns roles that are assignable for all organization units within the given `OrganizationUnitSetID`
  */
  AssignableOnly?: boolean;
  /**
  * Entity type: OrganizationUnitSet
  */
  OrganizationUnitSetID: number;
}

export interface GetRolesForOrganizationUnitSetResponse extends ResponseMessage {
  Roles?: RightsRoleDto[];
}

export interface GetSupportedFunctionalities extends RequestMessage<GetSupportedFunctionalitiesResponse> {
  Category?: string;
}

export interface GetSupportedFunctionalitiesResponse extends ResponseMessage {
  Functionalities?: string[];
  ScopedFunctionalities?: RightsGetSupportedFunctionalitiesResponse_FunctionalityDefinition[];
}

export interface RightsGetSupportedFunctionalitiesResponse_FunctionalityDefinition {
  Categories?: string[];
  Description?: string;
  Impact: SecurityFunctionalityImpact;
  Name?: string;
  NoInheritance: boolean;
  Unscoped: boolean;
}

/**
* Return the current Roles for an User.
*/
export interface GetUserRoles extends RequestMessage<GetUserRolesResponse> {
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID?: number;
  /**
  * Entity type: User
  */
  UserID: number;
}

/**
* Fetch the current attached roles to an User in a specific OrganizationUnit
*/
export interface GetUserRolesByUserID extends RequestMessage<GetUserRolesByUserIDResponse> {
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID: number;
  /**
  * Entity type: User
  */
  UserID: number;
}

export interface GetUserRolesByUserIDResponse extends ResponseMessage {
  Result?: RightsGetUserRolesByUserIDResponse_UserRoleDto[];
}

export interface RightsGetUserRolesByUserIDResponse_UserRoleDto {
  EndDate?: string;
  /**
  * Entity type: UserRole
  */
  ID: number;
  /**
  * Entity type: OrganizationUnitSet
  */
  OrganizationUnitSetID?: number;
  Role?: RightsRoleDto;
  /**
  * Entity type: Role
  */
  RoleID: number;
  /**
  * Entity type: User
  */
  UserID: number;
}

export interface GetUserRolesResponse extends ResponseMessage {
  Roles: RightsUserRoleModel[];
}

/**
* List role functionalities.
*/
export interface ListRoleFunctionalities extends FilteredPagedResultRequest<RightsListRoleFunctionalitiesFilter, ListRoleFunctionalitiesResponse> {
  /**
  * Entity type: Role
  */
  RoleID: number;
  ShowAll?: boolean;
}

export interface RightsListRoleFunctionalitiesFilter {
  Functionality?: string;
}

export interface RightsListRoleFunctionalitiesItem {
  Categories?: string[];
  Description?: string;
  Impact: SecurityFunctionalityImpact;
  Name?: string;
  Scopes?: Record<string,SecurityElevationType>;
}

export interface ListRoleFunctionalitiesResponse extends PagedResultResponse<RightsListRoleFunctionalitiesItem> {
}

/**
* List role sets.
*/
export interface ListRoleSets extends FilteredPagedResultRequest<UsersListRoleSetsFilter, ListRoleSetsResponse> {
}

export interface ListRoleSetsResponse extends PagedResultResponse<RightsListRoleSetsResponse_RoleSetDto> {
}

export interface RightsListRoleSetsResponse_RoleSetDto {
  BackendID?: string;
  /**
  * Entity type: RoleSet
  */
  ID: number;
  Name?: string;
}

/**
* List all roles.
*/
export interface ListRoles extends FilteredPagedResultRequest<UsersListRolesFilter, ListRolesResponse> {
}

export interface ListRolesResponse extends PagedResultResponse<RightsRoleDto> {
}

/**
* Lists organization units and roles for user
*/
export interface ListUserOrganizationUnitRoles extends FilteredPagedResultRequest<OrganizationUnitsListUserOrganizationUnitRolesFilter, ListUserOrganizationUnitRolesResponse> {
  /**
  * Entity type: User
  */
  UserID: number;
}

export interface ListUserOrganizationUnitRolesResponse extends PagedResultResponse<RightsListUserOrganizationUnitRolesResponse_OrganizationUnit> {
}

export interface RightsListUserOrganizationUnitRolesResponse_OrganizationUnit {
  ID: number;
  Name?: string;
  OrganizationUnitSetID: number;
  Roles?: RightsListUserOrganizationUnitRolesResponse_OrganizationUnit_Role[];
}

export interface RightsListUserOrganizationUnitRolesResponse_OrganizationUnit_Role {
  Code?: string;
  ID: number;
  Name?: string;
  Rank?: number;
}

export interface RightsRoleDto {
  Code?: string;
  /**
  * If this is set, any users that have not logged in after said days will get disabled
  */
  DeactivateUserAfterInactiveDays?: number;
  /**
  * When set, users with this role will be required to set up two-factor authentication
  */
  ForceTwoFactorAuthentication: boolean;
  /**
  * The highest FunctionalityImpact of any functionality on this role
  */
  FunctionalityImpact: SecurityFunctionalityImpact;
  /**
  * Entity type: Role
  */
  ID: number;
  IsSystemDefined: boolean;
  Name?: string;
  /**
  * Optional rank for role assignment control. Higher rank can assign lower rank. Unranked roles are protected from ranked callers.
  */
  Rank?: number;
  UserType: UserTypes;
}

export interface RightsRoleOrganizationUnitSet {
  EndDate?: string;
  /**
  * Entity type: OrganizationUnit
  * This will be mapped to the matching OrganizationUnitSet
  */
  OrganizationUnitID?: number;
  /**
  * Entity type: OrganizationUnitSet
  */
  OrganizationUnitSetID?: number;
  /**
  * Entity type: Role
  */
  RoleID: number;
  UserType?: UserTypes;
}

export interface RightsRoleWithFunctionalitiesDto {
  Code?: string;
  /**
  * If this is set, any users that have not logged in after said days will get disabled
  */
  DeactivateUserAfterInactiveDays?: number;
  /**
  * When set, users with this role will be required to set up two-factor authentication
  */
  ForceTwoFactorAuthentication: boolean;
  Functionalities?: Record<string,Record<string,SecurityFunctionalityScope> | null>;
  /**
  * The highest FunctionalityImpact of any functionality on this role
  */
  FunctionalityImpact: SecurityFunctionalityImpact;
  /**
  * Entity type: Role
  */
  ID: number;
  IsSystemDefined: boolean;
  Name?: string;
  /**
  * Optional rank for role assignment control. Higher rank can assign lower rank. Unranked roles are protected from ranked callers.
  */
  Rank?: number;
  ScopedFunctionalities?: RightsRoleWithFunctionalitiesDto_GroupedFunctionalityWithScope[];
  UserType: UserTypes;
}

export interface RightsRoleWithFunctionalitiesDto_GroupedFunctionalityWithScope {
  /**
  * Scopes available only when elevated for this functionality. Should be set to `None (0)` for unscoped functionalities.
  */
  ElevationScope?: SecurityFunctionalityScope;
  Functionality: string;
  /**
  * This is not required anymore, this is determined based on the availability of the ElevationScope property.
  */
  RequiresElevation?: boolean;
  /**
  * Scopes available for this functionality. Should be set to `None (0)` for unscoped functionalities.
  */
  Scope?: SecurityFunctionalityScope;
}

export interface SetRolesForRoleSet extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: RoleSet
  */
  RoleSetID: number;
  /**
  * Entity type: Role
  */
  Roles?: number[];
}

/**
* Update the Roles for an User. The roles provided will replace any existing roles on this user!
* 
* When an empty list is provided all roles will be removed.
* 
* The UserType defines as which UserType the User will act when logging in. For employees this wil normally be UserTypes.Employee (1)
*/
export interface SetUserRoles extends RequestMessageWithEmptyResponse {
  Roles: RightsRoleOrganizationUnitSet[];
  /**
  * Entity type: User
  */
  UserID: number;
}

/**
* Update a role.
*/
export interface UpdateRole extends RequestMessageWithEmptyResponse {
  Code?: string | null;
  /**
  * If this is set, any users that have not logged in after said days will get disabled
  */
  DeactivateUserAfterInactiveDays?: number | null;
  /**
  * When set, users with this role will be required to set up two-factor authentication
  */
  ForceTwoFactorAuthentication?: boolean;
  /**
  * Entity type: Role
  */
  ID: number;
  Name?: string;
  /**
  * Optional rank for role assignment control. Higher rank can assign lower rank.
  */
  Rank?: number | null;
  UserType?: UserTypes;
}

/**
* Update functionalities on a role.
*/
export interface UpdateRoleFunctionalities extends RequestMessageWithEmptyResponse {
  Functionalities: RightsUpdateRoleFunctionalities_FunctionalityToUpdate[];
  /**
  * Entity type: Role
  */
  RoleID: number;
}

export interface RightsUpdateRoleFunctionalities_FunctionalityToUpdate {
  /**
  * Scopes available only when elevated for this functionality. Should be set to `None (0)` for unscoped functionalities. To remove this functionality, set to `null`.
  */
  ElevationScope?: SecurityFunctionalityScope;
  Functionality: string;
  /**
  * Scopes available for this functionality. Should be set to `None (0)` for unscoped functionalities. To remove this functionality, set to `null`.
  */
  Scope?: SecurityFunctionalityScope;
  /**
  * Full list of scopes defined for this functionality - anything omitted will be deleted, submitting an empty object will remove the functionality for this role entirely.
  */
  Scopes?: Record<string,SecurityElevationType>;
}

export interface UpdateRoleSet extends RequestMessageWithEmptyResponse {
  BackendID?: string;
  /**
  * Entity type: RoleSet
  */
  ID: number;
  Name: string;
}

export interface UpdateUserRoles extends RequestMessageWithEmptyResponse {
  EndDate?: string;
  IsRemoved?: boolean;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID?: number;
  /**
  * Entity type: OrganizationUnitSet
  */
  OrganizationUnitSetID?: number;
  /**
  * Entity type: Role
  */
  RoleID?: number;
  Roles?: RightsUpdateUserRoles_UpdateRole[];
  /**
  * Entity type: User
  */
  UserID: number;
  UserType?: UserTypes;
}

export interface RightsUpdateUserRoles_UpdateRole {
  EndDate?: string;
  IsRemoved?: boolean;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID?: number;
  /**
  * Entity type: OrganizationUnitSet
  */
  OrganizationUnitSetID?: number;
  /**
  * Entity type: Role
  */
  RoleID: number;
  UserType?: UserTypes;
}

export interface RightsUserRoleModel {
  EndDate?: string;
  OrganizationUnitBackendID?: string;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID?: number;
  OrganizationUnitName?: string;
  OrganizationUnitSetBackendID?: string;
  /**
  * Entity type: OrganizationUnitSet
  */
  OrganizationUnitSetID?: number;
  OrganizationUnitSetName?: string;
  Rank?: number;
  RoleCode?: string;
  /**
  * Entity type: Role
  */
  RoleID: number;
  RoleName?: string;
  StartDate: string;
  UserType: UserTypes;
}

/**
* Create an elevation skip reason
*/
export interface CreateElevationSkipReason extends RequestMessage<CreateElevationSkipReasonResponse> {
  BackendID?: string;
  Description?: string;
  Name: string;
}

export interface CreateElevationSkipReasonResponse extends ResponseMessage {
  /**
  * Entity type: ElevationSkipReason
  */
  ID: number;
}

/**
* Delete an elevation skip reason
*/
export interface DeleteElevationSkipReason extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: ElevationSkipReason
  */
  ID: number;
}

export interface SecurityElevationSkipReasonDto {
  BackendID?: string;
  Description?: string;
  /**
  * Entity type: ElevationSkipReason
  */
  ID: number;
  Name?: string;
}

/**
* Get an elevation skip reason by ID
*/
export interface GetElevationSkipReason extends RequestMessage<GetElevationSkipReasonResponse> {
  /**
  * Entity type: ElevationSkipReason
  */
  ID: number;
}

export interface GetElevationSkipReasonResponse extends ResponseMessage {
  Result?: SecurityElevationSkipReasonDto;
}

/**
* Returns the current IP filter configuration, including the filter type and list of IP addresses/CIDR ranges.
*/
export interface GetIpFilterList extends RequestMessage<GetIpFilterListResponse> {
}

export interface GetIpFilterListResponse extends ResponseMessage {
  /**
  * The list of IP addresses and/or CIDR ranges in the filter. Null if no configuration is set.
  */
  Addresses?: string[];
  /**
  * The type of IP filter. Null if no configuration is set.
  */
  Type?: SecurityIpFilterListType;
}

/**
* List a paged result set of elevation skip reasons
*/
export interface ListElevationSkipReasons extends PagedRequestMessage<ElevationSkipReasonsListElevationSkipReasonsFilter, ListElevationSkipReasonsResponse> {
}

export interface ListElevationSkipReasonsResponse extends PagedResponseMessage<SecurityElevationSkipReasonDto> {
}

/**
* Sets the IP filter configuration. This is a full replacement — only the provided addresses will remain in the list.
* 
* Type=Deny (0): Listed IPs are blocked from accessing the API. All others are allowed.
* Type=Allow (1): ONLY listed IPs can access the API. All others are blocked.
* 
* Supports individual IP addresses (e.g. 192.168.1.1) and CIDR ranges (e.g. 10.0.0.0/24).
*/
export interface SetIpFilterList extends RequestMessageWithEmptyResponse {
  /**
  * The list of IP addresses and/or CIDR ranges. Each entry must be a valid IP address or CIDR range.
  */
  Addresses: string[];
  /**
  * The type of IP filter to apply.
  */
  Type?: SecurityIpFilterListType;
}

/**
* Update an elevation skip reason
*/
export interface UpdateElevationSkipReason extends RequestMessageWithEmptyResponse {
  BackendID?: string | null;
  Description?: string | null;
  /**
  * Entity type: ElevationSkipReason
  */
  ID: number;
  Name?: string;
}

/**
* Add a package to a carrier
*/
export interface AddPackageToCarrier extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: Carrier
  */
  CarrierID: number;
  IsDefault?: boolean;
  /**
  * Entity type: Package
  */
  PackageID: number;
}

export interface ShippingCarrierDto {
  BackendID?: string;
  Code?: string;
  /**
  * Entity type: Carrier
  */
  ID: number;
  Name?: string;
}

/**
* Create a new Carrier
*/
export interface CreateCarrier extends RequestMessage<CreateCarrierResponse> {
  BackendID?: string;
  Code?: string;
  Name: string;
}

export interface CreateCarrierResponse extends ResponseMessage {
  /**
  * Entity type: Carrier
  */
  ID: number;
}

/**
* Create an OrganizationUnitShippingMethod
* 
* A ShippingMethod, OrganizationUnit and Priority are required
*/
export interface CreateOrganizationUnitShippingMethod extends RequestMessage<CreateOrganizationUnitShippingMethodResponse> {
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID: number;
  Priority?: number;
  /**
  * Entity type: ShippingMethod
  */
  ShippingMethodID: number;
}

export interface CreateOrganizationUnitShippingMethodResponse extends ResponseMessage {
  /**
  * Entity type: OrganizationUnitShippingMethod
  */
  ID: number;
}

/**
* Create a new package, with dimensions in millimeters (mm) and weight in grams (g).
*/
export interface CreatePackage extends RequestMessage<CreatePackageResponse> {
  Code?: string;
  Description?: string;
  /**
  * mm
  */
  Height?: number;
  /**
  * mm
  */
  Length?: number;
  /**
  * g
  */
  Weight?: number;
  /**
  * mm
  */
  Width?: number;
}

export interface CreatePackageResponse extends ResponseMessage {
  /**
  * Entity type: Package
  */
  ID: number;
}

/**
* Create a `ShippingCost`
*/
export interface CreateShippingCost extends RequestMessage<CreateShippingCostResponse> {
  Amount?: number;
  BackendID?: string;
  /**
  * Entity type: Country
  */
  CountryID?: string;
  /**
  * Entity type: Currency
  */
  CurrencyID: string;
  MaximumOrderAmount?: number;
  MinimumOrderAmount?: number;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID?: number;
  /**
  * Entity type: ShippingMethod
  */
  ShippingMethodID?: number;
  UnitPriceInTax?: number;
  ZipCodes?: string[];
}

export interface CreateShippingCostResponse extends ResponseMessage {
  /**
  * Entity type: ShippingCost
  */
  ID: number;
}

/**
* Create a new ShippingMethod
*/
export interface CreateShippingMethod extends RequestMessage<CreateShippingMethodResponse> {
  /**
  * Entity type: Carrier
  */
  CarrierID: number;
  Code?: string;
  /**
  * Optional additional custom fields
  */
  CustomFields?: DataModelsCustomFieldKeyValue[];
  DeliveryType?: DataModelsShippingMethodDeliveryTypes;
  /**
  * Entity type: EndpointConfiguration
  */
  EndpointConfigurationID?: number;
  ExcludeProductsFromShippingMethod?: boolean;
  Handler?: string;
  InvoicingHandledByCarrier?: boolean;
  Name: string;
  PaymentHandledByCarrier?: boolean;
  /**
  * Entity type: ProductSearchTemplate
  */
  ProductSearchTemplateID?: number;
  ShippingHandledByCarrier?: boolean;
  SupportsPickupAddress?: boolean;
}

export interface CreateShippingMethodResponse extends ResponseMessage {
  /**
  * Entity type: ShippingMethod
  */
  ID: number;
}

/**
* Creates a new ShippingMethodTransportationTime.
*/
export interface CreateShippingMethodTransportationTime extends RequestMessage<CreateShippingMethodTransportationTimeResponse> {
  /**
  * Entity type: Country
  */
  FromCountryID?: string;
  /**
  * Entity type: ShippingMethod
  */
  ShippingMethodID?: number;
  TimeInDays?: number;
  /**
  * Entity type: Country
  */
  ToCountryID?: string;
}

export interface CreateShippingMethodTransportationTimeResponse extends ResponseMessage {
  /**
  * Entity type: ShippingMethodTransportationTime
  */
  ID: number;
}

/**
* Creates a new ShippingRestriction.
*/
export interface CreateShippingRestriction extends RequestMessage<CreateShippingRestrictionResponse> {
  /**
  * When set to `true`, the script will be leading for the entire order. Default is `true`
  */
  CheckScriptOnly?: boolean;
  /**
  * Entity type: Country
  * Required when there is no ScriptID set or CheckScriptOnly is 'false'
  */
  CountryID?: string;
  /**
  * Entity type: OrganizationUnit
  * Either an OrganizationUnitID or an OrganizationUnitSetID is required when there is no ScriptID set or CheckScriptOnly is 'false'
  */
  OrganizationUnitID?: number;
  /**
  * Entity type: OrganizationUnitSet
  * Either an OrganizationUnitID or an OrganizationUnitSetID is required when there is no ScriptID set or CheckScriptOnly is 'false'
  */
  OrganizationUnitSetID?: number;
  /**
  * Entity type: ProductPropertyType
  */
  ProductPropertyTypeID?: string;
  ProductPropertyTypeValues?: string[];
  /**
  * Entity type: ProductSearchTemplate
  */
  ProductSearchTemplateID?: number;
  /**
  * Entity type: Script
  */
  ScriptID?: number;
  Type?: DataModelsShippingRestrictionType;
  ZipCodeFrom?: string;
  ZipCodeTo?: string;
}

export interface CreateShippingRestrictionResponse extends ResponseMessage {
  /**
  * Entity type: ShippingRestriction
  */
  ID: number;
}

/**
* Delete an OrganizationUnitShippingMethod
*/
export interface DeleteOrganizationUnitShippingMethod extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: OrganizationUnitShippingMethod
  */
  ID: number;
}

/**
* Delete a package
*/
export interface DeletePackage extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: Package
  */
  ID: number;
}

/**
* Delete a `ShippingCost`
*/
export interface DeleteShippingCost extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: ShippingCost
  */
  ID: number;
}

/**
* Delete a ShippingMethod
*/
export interface DeleteShippingMethod extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: ShippingMethod
  */
  ID: number;
}

/**
* Deletes a ShippingMethodTransportationTime.
*/
export interface DeleteShippingMethodTransportationTime extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: ShippingMethodTransportationTime
  */
  ID: number;
}

/**
* Deletes a ShippingRestriction by its ID.
*/
export interface DeleteShippingRestriction extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: ShippingRestriction
  */
  ID: number;
}

/**
* Download ShippingRestrictions. Service returns an URL to an Excel file.
*/
export interface DownloadShippingRestrictions extends RequestMessageWithResourceResponse {
}

/**
* Returns available handlers for shipping methods
*/
export interface GetAvailableShippingMethodHandlers extends RequestMessage<GetAvailableShippingMethodHandlersResponse> {
}

export interface GetAvailableShippingMethodHandlersResponse extends ResponseMessage {
  Handlers?: string[];
}

/**
* Get a Carrier
*/
export interface GetCarrierByID extends RequestMessage<GetCarrierByIDResponse> {
  /**
  * Entity type: Carrier
  */
  ID: number;
}

export interface GetCarrierByIDResponse extends ResponseMessage {
  BackendID?: string;
  Code?: string;
  ID: number;
  Name?: string;
}

/**
* Get an OrganizationUnitShippingMethod
*/
export interface GetOrganizationUnitShippingMethodByID extends RequestMessage<GetOrganizationUnitShippingMethodByIDResponse> {
  /**
  * Entity type: OrganizationUnitShippingMethod
  */
  ID: number;
}

export interface GetOrganizationUnitShippingMethodByIDResponse extends ResponseMessage {
  /**
  * Entity type: OrganizationUnitShippingMethod
  */
  ID: number;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID: number;
  OrganizationUnitName: string;
  Priority: number;
  /**
  * Entity type: ShippingMethod
  */
  ShippingMethodID: number;
  ShippingMethodName: string;
}

/**
* Get all packages, with dimensions in millimeters (mm) and weight in grams (g).
*/
export interface GetPackages extends RequestMessage<GetPackagesResponse> {
}

/**
* Get all packages for a carrier, with dimensions in millimeters (mm) and weight in grams (g).
*/
export interface GetPackagesForCarrier extends RequestMessage<GetPackagesResponse> {
  /**
  * Entity type: Carrier
  */
  CarrierID: number;
}

export interface GetPackagesResponse extends ResponseMessage {
  Result?: ShippingPackageDto[];
}

/**
* Get a `ShippingCost`
*/
export interface GetShippingCostByID extends RequestMessage<GetShippingCostByIDResponse> {
  /**
  * Entity type: ShippingCost
  */
  ID: number;
}

export interface GetShippingCostByIDResponse extends ResponseMessage {
  Amount: number;
  BackendID?: string;
  /**
  * Entity type: Country
  */
  CountryID?: string;
  /**
  * Entity type: Currency
  */
  CurrencyID?: string;
  /**
  * Entity type: ShippingCost
  */
  ID: number;
  MaximumOrderAmount?: number;
  MinimumOrderAmount?: number;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID?: number;
  OrganizationUnitName?: string;
  /**
  * Entity type: ShippingMethod
  */
  ShippingMethodID?: number;
  ShippingMethodName?: string;
  UnitPriceInTax: number;
  ZipCodes?: string[];
}

/**
* Get an existing ShippingMethod by ID
*/
export interface GetShippingMethodByID extends RequestMessage<GetShippingMethodByIDResponse> {
  /**
  * Entity type: ShippingMethod
  */
  ID: number;
}

export interface GetShippingMethodByIDResponse extends ResponseMessage {
  CarrierCode?: string;
  /**
  * Entity type: Carrier
  */
  CarrierID: number;
  CarrierName?: string;
  Code?: string;
  /**
  * Entity type: CustomField
  */
  CustomFieldValuesWithOptions?: Record<string,DataModelsCustomFieldValueWithOptions>;
  DeliveryType: DataModelsShippingMethodDeliveryTypes;
  /**
  * Entity type: EndpointConfiguration
  */
  EndpointConfigurationID?: number;
  ExcludeProductsFromShippingMethod: boolean;
  Handler?: string;
  /**
  * Entity type: ShippingMethod
  */
  ID: number;
  InvoicingHandledByCarrier: boolean;
  Name?: string;
  PaymentHandledByCarrier: boolean;
  /**
  * Entity type: ProductSearchTemplate
  */
  ProductSearchTemplateID?: number;
  ShippingHandledByCarrier: boolean;
  SupportsPickupAddress: boolean;
}

/**
* Gets a ShippingRestriction by its ID and returns the set's basic information.
*/
export interface GetShippingRestrictionByID extends RequestMessage<GetShippingRestrictionByIDResponse> {
  /**
  * Entity type: ShippingRestriction
  */
  ID: number;
}

export interface GetShippingRestrictionByIDResponse extends ResponseMessage {
  CheckScriptOnly: boolean;
  CountryID?: string;
  CountryName?: string;
  /**
  * Entity type: ShippingRestriction
  */
  ID: number;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID?: number;
  OrganizationUnitName?: string;
  OrganizationUnitSetDescription?: string;
  /**
  * Entity type: OrganizationUnitSet
  */
  OrganizationUnitSetID?: number;
  OrganizationUnitSetName?: string;
  OrganizationUnitSetType?: DataModelsOrganizationUnitSetTypes;
  /**
  * Entity type: ProductPropertyType
  */
  ProductPropertyTypeID?: string;
  ProductPropertyTypeValues?: string[];
  /**
  * Entity type: ProductSearchTemplate
  */
  ProductSearchTemplateID?: number;
  /**
  * Entity type: Script
  */
  ScriptID?: number;
  Type: DataModelsShippingRestrictionType;
  ZipCodeFrom?: string;
  ZipCodeTo?: string;
}

/**
* List the Carriers
*/
export interface ListCarriers extends RequestMessage<ListCarriersResponse> {
  PageConfig?: PageConfig<ShippingListCarriersFilter>;
}

export interface ListCarriersResponse extends PagedResultResponse<ShippingCarrierDto> {
}

/**
* List the ShippingMethods
*/
export interface ListManagementShippingMethods extends RequestMessage<ListManagementShippingMethodsResponse> {
  PageConfig?: PageConfig<ShippingListShippingMethodsFilter>;
}

export interface ListManagementShippingMethodsResponse extends PagedResultResponse<ShippingListManagementShippingMethodsResponse_Data> {
}

export interface ShippingListManagementShippingMethodsResponse_Data {
  CarrierCode?: string;
  /**
  * Entity type: Carrier
  */
  CarrierID: number;
  CarrierName?: string;
  Code?: string;
  /**
  * Entity type: CustomField
  */
  CustomFieldValuesWithOptions?: Record<string,DataModelsCustomFieldValueWithOptions>;
  DeliveryType: DataModelsShippingMethodDeliveryTypes;
  /**
  * Entity type: EndpointConfiguration
  */
  EndpointConfigurationID?: number;
  Handler?: string;
  /**
  * Entity type: ShippingMethod
  */
  ID: number;
  InvoicingHandledByCarrier: boolean;
  Name?: string;
  PaymentHandledByCarrier: boolean;
  /**
  * Entity type: ProductSearchTemplate
  */
  ProductSearchTemplateID?: number;
  ProductSearchTemplateName?: string;
  ShippingHandledByCarrier: boolean;
  SupportsPickupAddress: boolean;
}

/**
* List the OrganizationUnitShippingMethods
* 
* There are filters available on:
*  - ShippingMethodID
*  - OrganizationUnitID
*/
export interface ListOrganizationUnitShippingMethods extends FilteredPagedResultRequest<ShippingListOrganizationUnitShippingMethodsFilter, ListOrganizationUnitShippingMethodsResponse> {
}

export interface ListOrganizationUnitShippingMethodsResponse extends PagedResultResponse<ShippingOrganizationUnitShippingMethodDto> {
}

/**
* List the available `ShippingCost`
*/
export interface ListShippingCosts extends FilteredPagedResultRequest<ShippingListShippingCostsFilter, ListShippingCostsResponse> {
}

export interface ListShippingCostsResponse extends PagedResultResponse<ShippingShippingCostDto> {
}

/**
* Lists current ShippingMethodTransportationTimes, optionally filtered.
*/
export interface ListShippingMethodTransportationTimes extends RequestMessage<ListShippingMethodTransportationTimesResponse> {
  PageConfig?: PageConfig<ShippingListTransportationTimesFilter>;
}

export interface ListShippingMethodTransportationTimesResponse extends ResponseMessage {
  Result?: PagedResult<ShippingShippingMethodTransportationTimeItem>;
}

export interface ListShippingMethods extends RequestMessage<ListShippingMethodsResponse> {
  PageConfig?: PageConfig<ShippingListShippingMethodsFilter>;
}

export interface ListShippingMethodsResponse extends PagedResultResponse<ShippingListShippingMethodsResponse_ShippingMethodDto> {
}

export interface ShippingListShippingMethodsResponse_ShippingMethodDto {
  /**
  * Entity type: Carrier
  */
  CarrierID: number;
  CarrierName?: string;
  /**
  * Entity type: ShippingMethod
  */
  ID: number;
  Name?: string;
  /**
  * Entity type: ProductSearchTemplate
  */
  ProductSearchTemplateID?: number;
  ProductSearchTemplateName?: string;
}

/**
* List ShippingRestrictions. Returns a paged response. Filter options are;
*/
export interface ListShippingRestrictions extends FilteredPagedResultRequest<ShippingListShippingRestrictionsFilter, ListShippingRestrictionsResponse> {
}

export interface ListShippingRestrictionsResponse extends PagedResultResponse<ShippingShippingRestrictionDto> {
}

export interface ShippingOrganizationUnitShippingMethodDto {
  /**
  * Entity type: OrganizationUnitShippingMethod
  */
  ID: number;
  Inherited: boolean;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID: number;
  OrganizationUnitName: string;
  Priority: number;
  ShippingMethodCarrierName: string;
  /**
  * Entity type: ShippingMethod
  */
  ShippingMethodID: number;
  ShippingMethodName: string;
}

export interface ShippingPackageDto {
  Code?: string;
  Description?: string;
  Height: number;
  /**
  * Entity type: Package
  */
  ID: number;
  IsDefault: boolean;
  Length: number;
  Weight: number;
  Width: number;
}

/**
* Remove a package from a carrier
*/
export interface RemovePackageFromCarrier extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: Carrier
  */
  CarrierID: number;
  /**
  * Entity type: Package
  */
  PackageID: number;
}

export interface ShippingShippingCostDto {
  Amount: number;
  BackendID?: string;
  /**
  * Entity type: Country
  */
  CountryID?: string;
  /**
  * Entity type: Currency
  */
  CurrencyID?: string;
  /**
  * Entity type: ShippingCost
  */
  ID: number;
  Inherited: boolean;
  MaximumOrderAmount?: number;
  MinimumOrderAmount?: number;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID?: number;
  OrganizationUnitName?: string;
  /**
  * Entity type: ShippingMethod
  */
  ShippingMethodID?: number;
  ShippingMethodName?: string;
  UnitPriceInTax: number;
  ZipCodes?: string[];
}

export interface ShippingShippingRestrictionDto {
  /**
  * Entity type: Country
  */
  CountryID?: string;
  CountryName?: string;
  /**
  * Entity type: ShippingRestriction
  */
  ID: number;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID?: number;
  OrganizationUnitName?: string;
  OrganizationUnitSetDescription?: string;
  /**
  * Entity type: OrganizationUnitSet
  */
  OrganizationUnitSetID?: number;
  OrganizationUnitSetName?: string;
  OrganizationUnitSetType?: DataModelsOrganizationUnitSetTypes;
  /**
  * Entity type: ProductPropertyType
  */
  ProductPropertyTypeID?: string;
  ProductPropertyTypeValues?: string[];
  /**
  * Entity type: ProductSearchTemplate
  */
  ProductSearchTemplateID?: number;
  /**
  * Entity type: Script
  * ID of the script that is associated with this shipping restriction.
  */
  ScriptID?: number;
  /**
  * Name of the script that is associated with this shipping restriction.
  */
  ScriptName?: string;
  Type: DataModelsShippingRestrictionType;
  ZipCodeFrom?: string;
  ZipCodeTo?: string;
}

/**
* Update a Carrier
*/
export interface UpdateCarrier extends RequestMessageWithEmptyResponse {
  BackendID?: string;
  Code?: string;
  /**
  * Entity type: Carrier
  */
  ID: number;
  Name: string;
}

/**
* Update an OrganizationUnitShippingMethod
* 
* A ShippingMethod, OrganizationUnit and Priority are required
*/
export interface UpdateOrganizationUnitShippingMethod extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: OrganizationUnitShippingMethod
  */
  ID: number;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID: number;
  Priority?: number;
  /**
  * Entity type: ShippingMethod
  */
  ShippingMethodID: number;
}

/**
* Update a package, with dimensions in millimeters (mm) and weight in grams (g).
*/
export interface UpdatePackage extends RequestMessageWithEmptyResponse {
  Code?: string;
  Description?: string;
  /**
  * mm
  */
  Height?: number;
  /**
  * Entity type: Package
  */
  ID: number;
  /**
  * mm
  */
  Length?: number;
  /**
  * g
  */
  Weight?: number;
  /**
  * mm
  */
  Width?: number;
}

/**
* Update a `ShippingCost`
*/
export interface UpdateShippingCost extends RequestMessageWithEmptyResponse {
  Amount?: number;
  BackendID?: string;
  /**
  * Entity type: Country
  */
  CountryID?: string;
  /**
  * Entity type: Currency
  */
  CurrencyID: string;
  /**
  * Entity type: ShippingCost
  */
  ID: number;
  MaximumOrderAmount?: number;
  MinimumOrderAmount?: number;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID?: number;
  /**
  * Entity type: ShippingMethod
  */
  ShippingMethodID?: number;
  UnitPriceInTax?: number;
  ZipCodes?: string[];
}

/**
* Update an existing ShippingMethod
*/
export interface UpdateShippingMethod extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: Carrier
  */
  CarrierID: number;
  Code?: string;
  CustomFields?: DataModelsCustomFieldKeyValue[] | null;
  DeliveryType?: DataModelsShippingMethodDeliveryTypes;
  /**
  * Entity type: EndpointConfiguration
  */
  EndpointConfigurationID?: number | null;
  ExcludeProductsFromShippingMethod?: boolean;
  Handler?: string;
  /**
  * Entity type: ShippingMethod
  */
  ID: number;
  InvoicingHandledByCarrier?: boolean;
  Name: string;
  PaymentHandledByCarrier?: boolean;
  /**
  * Entity type: ProductSearchTemplate
  */
  ProductSearchTemplateID?: number;
  ShippingHandledByCarrier?: boolean;
  SupportsPickupAddress?: boolean;
}

/**
* Updates a ShippingMethodTransportationTime.
* If you want to preserve the current value of a field, provide it to this service as the current value;
*  if it's sent in as null the value will be set to null.
*/
export interface UpdateShippingMethodTransportationTime extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: Country
  */
  FromCountryID?: string;
  /**
  * Entity type: ShippingMethodTransportationTime
  */
  ID: number;
  /**
  * Entity type: ShippingMethod
  */
  ShippingMethodID?: number;
  TimeInDays?: number;
  /**
  * Entity type: Country
  */
  ToCountryID?: string;
}

/**
* Updates a ShippingRestriction.
*/
export interface UpdateShippingRestriction extends RequestMessageWithEmptyResponse {
  /**
  * When set to `true`, the script will be leading for the entire order.
  */
  CheckScriptOnly?: boolean;
  /**
  * Entity type: Country
  */
  CountryID?: string | null;
  /**
  * Entity type: ShippingRestriction
  */
  ID: number;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID?: number | null;
  /**
  * Entity type: OrganizationUnitSet
  */
  OrganizationUnitSetID?: number | null;
  /**
  * Entity type: ProductPropertyType
  */
  ProductPropertyTypeID?: string | null;
  ProductPropertyTypeValues?: string[] | null;
  /**
  * Entity type: ProductSearchTemplate
  */
  ProductSearchTemplateID?: number | null;
  /**
  * Entity type: Script
  */
  ScriptID?: number | null;
  Type?: DataModelsShippingRestrictionType;
  ZipCodeFrom?: string | null;
  ZipCodeTo?: string | null;
}

/**
* Upload ShippingRestrictions. Expected format is an Excel file.
*/
export interface UploadShippingRestrictions extends RequestMessage<UploadShippingRestrictionsResponse> {
  Data: string;
}

export interface UploadShippingRestrictionsResponse extends ResponseMessage {
  Messages?: string[];
}

/**
* Creates a StockAllocationRule for the SupplierOrganizationUnitID and OrganizationUnitID.
* 
* - If `ProductID` is left null, this is a 'catch-all' rule, meaning that the rule applies to all products (but it can still be overriden by a rule with a specific `ProductID`).
* Only a reservation can be a catch-all rule, a limitation must specify a `ProductID` or a `ProductSearchTemplateID`.
* - `RefillPeriodInDays` is ignored when the Type is not a `Limitation`, as only a `Limitation` can be refilled.
* - If `ValueType` is `Percentage`, then `Value` must be between 0 and 100.
* - `OrganizationUnitSupplierID` is a reference to a supplier relationship between OrganizationUnits, not to an OrganizationUnit.
* This is for example the supplier relationship between a warehouse and a store. Available OrganizationUnitSuppliers can be found through `ListOrganizationUnitSuppliers`.
* - When left empty, OrganizationUnitID defaults to the OrganizationUnitID on the OrganizationUnitSupplier. So if the supplier relationship is between a warehouse and a store, this will
* default to the store. When specified, the OrganizationUnitID *must* be one that the supplier of the relationship *directly* supplies to.
* For example, if a supplier relationship exists between a warehouse and a country OrganizationUnit then you *can't* specify a store that falls
* under that country OrganizationUnit. In that case, you should create a StockAllocationRule between the country and the store,
* not between the warehouse and the store.
*/
export interface CreateStockAllocationRule extends RequestMessage<CreateStockAllocationRuleResponse> {
  EndDate?: string;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID?: number;
  /**
  * Entity type: OrganizationUnitSupplier
  */
  OrganizationUnitSupplierID: number;
  /**
  * In case there is not enough stock, Priority is used to determine who gets preference. A higher Priority means a higher preference.
  */
  Priority?: number;
  /**
  * Entity type: Product
  */
  ProductID?: number;
  /**
  * Entity type: ProductSearchTemplate
  */
  ProductSearchTemplateID?: number;
  RefillPeriodInDays?: number;
  StartDate?: string;
  Type?: DataModelsStockAllocationRuleTypes;
  Value?: number;
  ValueType?: DataModelsStockAllocationRuleValueTypes;
}

export interface CreateStockAllocationRuleResponse extends ResponseMessage {
  /**
  * Entity type: StockAllocationRule
  */
  ID: number;
}

/**
* Create a new StockLabel
* 
* Name is required
*/
export interface CreateStockLabel extends RequestMessage<CreateStockLabelResponse> {
  Description?: string;
  DisplayName?: string;
  LedgerClassID?: string;
  Name: string;
}

export interface CreateStockLabelResponse extends ResponseMessage {
  /**
  * Entity type: StockLabel
  */
  ID: number;
}

/**
* Deletes a StockAllocationRule.
*/
export interface DeleteStockAllocationRule extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: StockAllocationRule
  */
  ID: number;
}

/**
* Downloads an Excel file containing StockAllocationRules according to the specified PageConfig. To get an empty template Excel, specify a page size of zero.
*/
export interface DownloadStockAllocationRulesExcel extends RequestMessage<ResourceResponseMessage> {
  PageConfig?: PageConfig<SuppliersListStockAllocationRulesFilter>;
}

/**
* Download an overview of the stock for the specified organization units or the specified organization unit set.
* NOTE THAT when `OrganizationUnitSetID` is provided, `OrganizationUnitIDs` is ignored.
*/
export interface StockDownloadStockOverview extends RequestMessage<ResourceWithBlobIDResponseMessage> {
  /**
  * View the stock on a certain moment in time
  */
  DateTime?: string;
  /**
  * Entity type: OrganizationUnit
  * The organization units to list the stock for
  */
  OrganizationUnitIDs?: number[];
  /**
  * Entity type: OrganizationUnitSet
  * The organization units set to list the stock for
  */
  OrganizationUnitSetID?: number;
  /**
  * Entity type: Product
  * Only these products will be returned
  */
  ProductIDs?: number[];
  /**
  * Filter on products, is used as input in ElasticSearch
  */
  Query?: string;
  /**
  * Entity type: StockLabel
  */
  StockLabelID?: number;
}

export interface DownloadStockOverview_Async extends StockDownloadStockOverview {
}

export interface DownloadStockOverview_AsyncResponse extends AsyncRequestHandlingAsyncRequestResponse {
}

export interface DownloadStockOverview_AsyncResult extends AsyncRequestHandlingAsyncRequestResultRequest {
}

export interface InitialReplenishment extends RequestMessage<InitialReplenishmentResponse> {
  /**
  * Entity type: Blob
  * Can be used for standard blobs - for secure blobs, use `BlobUrl` instead.
  */
  BlobID?: string;
  /**
  * Can be used for both standard- and secured blobs - must match environment assets URL.
  */
  BlobUrl?: string;
  EmailAddress: string;
}

export interface InitialReplenishmentResponse extends ResponseMessage {
  TaskID?: string;
}

export interface ListCumulativeStock extends RequestMessage<ListCumulativeStockResponse> {
  /**
  * Entity type: ProductPropertyType
  */
  IncludedFields?: string[];
  PageConfig: PageConfig<StockMutationsListCumulativeStockFilter>;
}

export interface ListCumulativeStockResponse extends PagedResultResponse<StockListCumulativeStockResponse_Model> {
}

export interface StockListCumulativeStockResponse_Model {
  OrganizationUnitBackendID?: string;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID: number;
  OrganizationUnitName?: string;
  Product?: SearchIProductSearchItem;
  QuantityOnHand: number;
}

export interface ListStockAllocationRules extends RequestMessage<ListStockAllocationRulesResponse> {
  PageConfig?: PageConfig<SuppliersListStockAllocationRulesFilter>;
}

export interface ListStockAllocationRulesResponse extends PagedResultResponse<SuppliersListStockAllocationRulesItem> {
}

/**
* Reallocates the stock for a StockLocationRule with `Type` = `Limitation`.
*/
export interface RefillStockAllocation extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: StockAllocationRule
  */
  ID: number;
  ValueOverride?: number;
}

/**
* Allows updating a StockAllocationRule. Only `Value`, `ValueType`, `RefillPeriodInDays`, `Priority`, `StartDate`, `EndDate`, `ProductID` and `ProductSearchTemplateID` can be updated. To update the other fields, the rule must be re-created.
*/
export interface UpdateStockAllocationRule extends RequestMessageWithEmptyResponse {
  EndDate?: string;
  /**
  * Entity type: StockAllocationRule
  */
  ID: number;
  /**
  * In case there is not enough stock, Priority is used to determine who gets preference. A higher Priority means a higher preference.
  */
  Priority?: number;
  /**
  * Entity type: Product
  */
  ProductID?: number | null;
  /**
  * Entity type: ProductSearchTemplate
  */
  ProductSearchTemplateID?: number | null;
  RefillPeriodInDays?: number;
  StartDate?: string;
  Value?: number;
  ValueType?: DataModelsStockAllocationRuleValueTypes;
}

/**
* Update the description or ledgerclass of StockLabel
*/
export interface UpdateStockLabel extends RequestMessageWithEmptyResponse {
  Description?: string | null;
  DisplayName?: string | null;
  /**
  * Entity type: StockLabel
  */
  ID: number;
  LedgerClassID?: string | null;
}

/**
* A service to upload an Excel containing StockAllocationRules that should be created or updated according to the values specified in the sheet.
* 
* An example Excel file containing the expected structure can be retrieved by calling the `DownloadStockAllocationRulesExcel` service. Important to note however
* is that the first column ('C/U/D' which stands for Create/Update/Delete) will be empty in the Excel file returned by `DownloadStockAllocationRulesExcel`, but to update
* or create a record the first column must have a value according to what you want to do with it. To create a row, the first column must contain 'C', to update it must contain 'U' (and the ID column must have a value pointing to the correct record)
* and to delete it it must contain 'D'.
*/
export interface UploadStockAllocationRulesExcel extends RequestMessageWithEmptyResponse {
  Data: string;
}

/**
* Create a custom stock mutation reason.
*/
export interface CreateStockMutationReason extends RequestMessage<CreateStockMutationReasonResponse> {
  BackendID?: string;
  Description?: string;
  Name: string;
  RequireRemarkForAdjust?: boolean;
  RequireRemarkForMove?: boolean;
}

export interface CreateStockMutationReasonResponse extends ResponseMessage {
  /**
  * Entity type: StockMutationReasons
  */
  ID: number;
}

/**
* Delete a custom stock mutation reason.
*/
export interface DeleteStockMutationReason extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: StockMutationReasons
  */
  BackendID?: string;
  /**
  * Entity type: StockMutationReasons
  */
  ID?: number;
}

export interface ExportStockMutationSummary extends RequestMessage<EmptyResponseMessage> {
  /**
  * The date to use for the stock mutation summary. Only the date component is used, which means if you send in 2023-06-29T16:00 all stock mutations on 2023-06-29 will be included.
  */
  Date?: string;
  /**
  * The date and time to use for the stock mutation summary, in UTC. Unlike the `Date` field, the time component is used.
  */
  DateTime?: string;
  EmailAddress?: string;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitIDs?: number[];
  /**
  * Entity type: OrganizationUnitSet
  */
  OrganizationUnitSetIDs?: number[];
  ProductSearchFilters: Record<string,SearchFilterModel>;
  SplitUnitCost?: boolean;
}

/**
* Returns a list of stock mutation reasons that are currently active for the supplied OrganizationUnitID.
*/
export interface GetRecentlyUsedStockMutationReasons extends RequestMessage<GetRecentlyUsedStockMutationReasonsResponse> {
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID: number;
}

export interface GetRecentlyUsedStockMutationReasonsResponse extends ResponseMessage {
  Reasons?: StockMutationsGetRecentlyUsedStockMutationReasonsResponse_StockMutationReason[];
}

export interface StockMutationsGetRecentlyUsedStockMutationReasonsResponse_StockMutationReason {
  Description?: string;
  ID: number;
  /**
  * Usually an internal & unchangable code - for display, use `Description`
  */
  Name?: string;
}

/**
* List internal and custom stock mutation reasons.
*/
export interface ListStockMutationReasons extends FilteredPagedResultRequest<StockMutationsListStockMutationReasonsModelFilters, ListStockMutationReasonsResponse> {
}

export interface ListStockMutationReasonsResponse extends PagedResultResponse<StockMutationsStockMutationReason> {
}

/**
* This service allows retrieval of StockMutations, filtered by a Query and/or a set of filters.
*/
export interface SearchStockMutations extends RequestMessage<SearchStockMutationsResponse> {
  IncludedFields?: string[];
  PageConfig?: ScrollablePageConfig<StockMutationsStockMutationFilters>;
  Query?: string;
}

export interface SearchStockMutationsResponse extends ResponseMessage {
  Result?: ScrollablePagedResult<StockMutationsSearchStockMutationResult>;
}

export interface StockMutationsStockMutationReason {
  BackendID?: string;
  Description?: string;
  /**
  * Entity type: StockMutationReasons
  */
  ID: number;
  IsSystem: boolean;
  /**
  * Usually an internal & unchangable code - for display, use `Description`
  */
  Name: string;
  RequireRemarkForAdjust: boolean;
  RequireRemarkForMove: boolean;
}

/**
* Update a custom or internal stock mutation reason. The name cannot be modified for internal reasons.
*/
export interface UpdateStockMutationReason extends RequestMessageWithEmptyResponse {
  BackendID?: string | null;
  Description?: string | null;
  /**
  * Entity type: StockMutationReasons
  */
  ID: number;
  Name?: string;
  RequireRemarkForAdjust?: boolean;
  RequireRemarkForMove?: boolean;
}

/**
* Answer a survey question
*/
export interface AnswerSurveyQuestion extends RequestMessage<QuestionResponse> {
  /**
  * Required unless the question is optional.
  */
  Answer?: DataModelsCustomFieldValue;
  /**
  * Entity type: SurveyQuestion
  */
  SurveyQuestionID: number;
  Token: string;
}

/**
* Cancel the survey response
*/
export interface CancelSurveyResponse extends RequestMessageWithEmptyResponse {
  SurveyContextSourceID?: number;
  /**
  * Entity type: Survey
  */
  SurveyID?: number;
  Token?: string;
  /**
  * Entity type: User
  */
  UserID?: number;
}

/**
* Copies an existing survey, including its questions, routes, and after effects.
*/
export interface CopySurvey extends RequestMessage<CopySurveyResponse> {
  /**
  * Entity type: Survey
  */
  SurveyID: number;
}

export interface CopySurveyResponse extends ResponseMessage {
  /**
  * Entity type: Survey
  */
  ID: number;
  TranslationsError?: SurveysCopySurveyResponse_TranslationsErrorDto;
}

export interface SurveysCopySurveyResponse_TranslationsErrorDto {
  Message?: string;
  Type?: string;
}

/**
* Creates a new survey
*/
export interface CreateSurvey extends RequestMessage<CreateSurveyResponse> {
  AfterEffects?: SurveysSurveyAfterEffectDto[];
  AllowViewingResponses?: boolean;
  AlwaysStartEmpty?: boolean;
  BackendID?: string;
  /**
  * Entity type: SurveyCategory
  */
  CategoryID?: number;
  ClosingRemarkBlobID?: string;
  ClosingRemarkMessage?: string;
  ClosingRemarkTitle?: string;
  Description?: string;
  EndDate?: string;
  IntroductionBlobID?: string;
  IntroductionMessage?: string;
  IntroductionTitle?: string;
  LoadPreviousResponseAnswers?: boolean;
  Name: string;
  OneTimeUseOnly?: boolean;
  /**
  * Entity type: OrganizationUnitSet
  */
  OrganizationUnitSetID?: number;
  ResponseTimeoutInDays?: number;
  StartDate: string;
  SurveyContext?: DataModelsSurveyContext;
  SurveyDistributionHandler: 'MANUAL' | 'SYSTEM' | 'EMAIL' | 'EVENTEXPORT';
  SurveyDistributionHandlerData?: SurveysEmptySurveyDistributionHandlerData;
  SurveyTrigger: 'APPOINTMENTCONFIRMED' | 'APPOINTMENTSTARTED' | 'APPOINTMENTCOMPLETED' | 'CASECREATED' | 'CASECLOSED' | 'MANUAL' | 'SYSTEM' | 'ORDERPAID' | 'ORDERRETURN' | 'ORDERSHIPPED' | 'REPAIRCREATED' | 'REPAIRFINISHED' | 'USERCREATED' | 'USERUPDATED' | 'USERSUBSCRIBED' | 'USERUNSUBSCRIBED';
  SurveyTriggerData?: SurveysTriggersAppointmentSurveyTriggerData | SurveysTriggersCaseCreatedSurveyTriggerData | SurveysTriggersCaseClosedSurveyTriggerData | SurveysTriggersEmptySurveyTriggerData | SurveysTriggersOrderPaidSurveyTriggerData | SurveysTriggersOrderReturnSurveyTriggerData | SurveysTriggersOrderShippedSurveyTriggerData | SurveysTriggersRepairCreatedSurveyTriggerData | SurveysTriggersRepairFinishedSurveyTriggerData | SurveysTriggersUserCreatedSurveyTriggerData | SurveysTriggersUserUpdatedSurveyTriggerData | SurveysTriggersUserSubscribedSurveyTriggerData | SurveysTriggersUserUnsubscribedSurveyTriggerData;
  /**
  * Defaults to 'Survey'
  */
  Type?: DataModelsSurveyType;
}

/**
* Create a new survey category.
*/
export interface CreateSurveyCategory extends RequestMessage<CreateSurveyCategoryResponse> {
  Description?: string;
  /**
  * Internal unchangeable code. For display, use `Description`
  */
  Name: string;
}

export interface CreateSurveyCategoryResponse extends ResponseMessage {
  /**
  * Entity type: SurveyCategory
  */
  ID: number;
}

/**
* Creates a new survey
*/
export interface CreateSurveyQuestion extends RequestMessage<CreateSurveyQuestionResponse> {
  AllowMultipleAnswers?: boolean;
  BackendID?: string;
  /**
  * Entity type: Blob
  */
  BlobID?: string;
  DataType?: DataModelsCustomFieldDataTypes;
  Description?: string;
  DisplayType?: string;
  InputHint?: string;
  MaximumDate?: string;
  MaximumLength?: number;
  MaximumValue?: number;
  MinimumDate?: string;
  MinimumLength?: number;
  MinimumValue?: number;
  OptionalAnswers?: Record<string,string | null>;
  Remark?: string;
  Required?: boolean;
  StoreAnswerOnContextCustomField?: boolean;
  /**
  * Entity type: CustomField
  * A custom field that is available from the SurveyContext.
  * If context for example is `User`, all custom fields of the user are available.
  * If context for example is `Order`, all custom fields from the order and customer (user) on the order are available.
  * 
  * NOTE THAT this value cannot be update. If this question is based upon the custom field, any changes to the markup are rejected.
  * 
  * NOTE THAT any security settings on the custom field are ignored.
  * 
  * NOTE THAT when this value is set, the markup of the custom field is copied as markup for the survey question, and the response data is saved within the survey.
  * If the value also needs to be stored on the context entity self (e.g. order, user, etc), the setting `StoreAnswerOnContextCustomField` needs to be set.
  * When `StoreAnswerOnContextCustomField` is set to true, changes to the custom field itself will also be blocked while the survey is active.
  */
  SurveyContextCustomFieldID?: number;
  /**
  * Entity type: Survey
  */
  SurveyID: number;
  Text: string;
  /**
  * When type Statement is selected, an answer won't be required and data type and custom field settings are ignored.
  */
  Type?: DataModelsSurveyQuestionType;
  UseContextCustomFieldDataAsPrefill?: boolean;
}

export interface CreateSurveyQuestionResponse extends ResponseMessage {
  /**
  * Entity type: SurveyQuestion
  */
  ID: number;
}

/**
* Creates a new survey question route
*/
export interface CreateSurveyQuestionRoute extends RequestMessage<CreateSurveyQuestionRouteResponse> {
  ExitBlobID?: string;
  ExitRemarkMessage?: string;
  ExitRemarkTitle?: string;
  Filter?: DataModelsSurveyQuestionRouteFilter;
  /**
  * Entity type: SurveyQuestion
  */
  ParentQuestionID: number;
  /**
  * Entity type: SurveyQuestion
  */
  RouteToQuestionID?: number;
}

export interface CreateSurveyQuestionRouteResponse extends ResponseMessage {
  /**
  * Entity type: SurveyQuestionRoute
  */
  ID: number;
}

export interface CreateSurveyResponse extends ResponseMessage {
  /**
  * Entity type: Survey
  */
  ID: number;
}

/**
* Deactivates a survey.
* NOTE THAT this deactivates all published versions of the survey, so it can no longer be responded to at the end of the grace period.
* It will also take the survey back into draft.
* The survey is re-enabled when a new version is published.
*/
export interface DeactivateSurvey extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: Survey
  */
  SurveyID: number;
}

/**
* Delete a survey
*/
export interface DeleteSurvey extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: Survey
  */
  ID: number;
}

/**
* Delete a survey category.
*/
export interface DeleteSurveyCategory extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: SurveyCategory
  */
  ID: number;
}

/**
* Delete a survey question
*/
export interface DeleteSurveyQuestion extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: SurveyQuestion
  */
  ID: number;
}

/**
* Delete a survey question route.
*/
export interface DeleteSurveyQuestionRoute extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: SurveyQuestionRoute
  */
  ID: number;
}

/**
* Returns available survey after effects.
*/
export interface GetAvailableSurveyAfterEffectTypes extends RequestMessage<GetAvailableSurveyAfterEffectTypesResponse> {
  SurveyContext?: DataModelsSurveyContext;
}

export interface GetAvailableSurveyAfterEffectTypesResponse extends ResponseMessage {
  AfterEffects?: SurveysGetAvailableSurveyAfterEffectTypesResponse_AfterEffect[];
}

export interface SurveysGetAvailableSurveyAfterEffectTypesResponse_AfterEffect {
  MessageTemplates?: SurveysGetAvailableSurveyAfterEffectTypesResponse_MessageTemplate[];
  Type?: string;
}

export interface SurveysGetAvailableSurveyAfterEffectTypesResponse_MessageTemplate {
  IsAvailable: boolean;
  Name?: string;
}

/**
* Returns available survey distribution handlers.
*/
export interface GetAvailableSurveyDistributionHandlers extends RequestMessage<GetAvailableSurveyDistributionHandlersResponse> {
}

export interface GetAvailableSurveyDistributionHandlersResponse extends ResponseMessage {
  Handlers?: string[];
}

/**
* Returns available survey triggers.
*/
export interface GetAvailableSurveyTriggers extends RequestMessage<GetAvailableSurveyTriggersResponse> {
  SurveyContext?: DataModelsSurveyContext;
}

export interface GetAvailableSurveyTriggersResponse extends ResponseMessage {
  Triggers?: string[];
}

/**
* Get all available surveys for user
*/
export interface GetAvailableSurveys extends RequestMessage<GetAvailableSurveysResponse> {
  /**
  * Entity type: OrganizationUnit
  * Organization unit in which surveys are available. When omitted, falls back to the current organization. Ignored when logged in user is a customer
  */
  OrganizationUnitID?: number;
  /**
  * Entity type: User
  * User for which surveys are available. When omitted, falls back to the current user.
  */
  UserID?: number;
}

/**
* Get all available surveys for user and given context
*/
export interface GetAvailableSurveysForContext extends RequestMessage<GetAvailableSurveysResponse> {
  /**
  * Entity type: SurveyCategory
  */
  CategoryID?: number;
  /**
  * Entity type: OrganizationUnit
  * Organization unit in which surveys are available. When omitted, falls back to the current organization. Ignored when logged in user is a customer
  */
  OrganizationUnitID?: number;
  SurveyContext?: DataModelsSurveyContext;
  SurveyContextSourceID: number;
}

export interface GetAvailableSurveysResponse extends ResponseMessage {
  Surveys?: SurveysGetAvailableSurveysResponse_AvailableSurvey[];
}

export interface SurveysGetAvailableSurveysResponse_AvailableSurvey {
  BackendID?: string;
  Category?: EVAFrameworkAPIEnumDto;
  Context: DataModelsSurveyContext;
  ContextSourceID?: number;
  Description?: string;
  /**
  * Time the survey was started or the first question was answered.
  */
  FirstInteractionTime?: string;
  /**
  * Entity type: Survey
  */
  ID: number;
  /**
  * Time the last question was answered.
  */
  LastInteractionTime?: string;
  Name?: string;
  Status: DataModelsSurveyResponseStatus;
  Trigger?: 'APPOINTMENTCONFIRMED' | 'APPOINTMENTSTARTED' | 'APPOINTMENTCOMPLETED' | 'CASECREATED' | 'CASECLOSED' | 'MANUAL' | 'SYSTEM' | 'ORDERPAID' | 'ORDERRETURN' | 'ORDERSHIPPED' | 'REPAIRCREATED' | 'REPAIRFINISHED' | 'USERCREATED' | 'USERUPDATED' | 'USERSUBSCRIBED' | 'USERUNSUBSCRIBED';
}

/**
* Get the survey
*/
export interface GetSurveyByID extends RequestMessage<GetSurveyByIDResponse> {
  /**
  * Entity type: Survey
  */
  ID: number;
}

export interface GetSurveyByIDResponse extends ResponseMessage {
  AfterEffects?: SurveysSurveyAfterEffectDto[];
  AllowViewingResponses: boolean;
  AlwaysStartEmpty: boolean;
  BackendID?: string;
  Category?: EVAFrameworkAPIEnumDto;
  ClosingRemarkBlob?: BlobsBlobDto;
  ClosingRemarkBlobURL?: string;
  ClosingRemarkMessage?: string;
  ClosingRemarkTitle?: string;
  CompletedResponses: number;
  DeactivatedBy?: SurveysGetSurveyByIDResponse_User;
  DeactivatedOn?: string;
  DeactivationReasons: DataModelsSurveyDeactivationReasons;
  Description?: string;
  EditAllowed: boolean;
  EndDate?: string;
  HasActivePublishedVersion: boolean;
  HasUnpublishedChanges: boolean;
  /**
  * Entity type: Survey
  */
  ID: number;
  IntroductionBlob?: BlobsBlobDto;
  IntroductionBlobURL?: string;
  IntroductionMessage?: string;
  IntroductionTitle?: string;
  IsPublishing: boolean;
  LastPublishedBy?: SurveysGetSurveyByIDResponse_User;
  LastPublishedOn?: string;
  LastPublishedVersion?: number;
  LastResponseCompletedOn?: string;
  LastResponseStartedOn?: string;
  LoadPreviousResponseAnswers: boolean;
  Name?: string;
  OneTimeUseOnly: boolean;
  OrganizationUnitSet?: SurveysGetSurveyByIDResponse_OrganizationUnitSetDto;
  ResponseTimeoutInDays?: number;
  StartDate?: string;
  StartedResponses: number;
  SurveyContext: DataModelsSurveyContext;
  SurveyDistributionHandler?: 'MANUAL' | 'SYSTEM' | 'EMAIL' | 'EVENTEXPORT';
  SurveyDistributionHandlerData?: SurveysEmptySurveyDistributionHandlerData;
  SurveyTrigger?: 'APPOINTMENTCONFIRMED' | 'APPOINTMENTSTARTED' | 'APPOINTMENTCOMPLETED' | 'CASECREATED' | 'CASECLOSED' | 'MANUAL' | 'SYSTEM' | 'ORDERPAID' | 'ORDERRETURN' | 'ORDERSHIPPED' | 'REPAIRCREATED' | 'REPAIRFINISHED' | 'USERCREATED' | 'USERUPDATED' | 'USERSUBSCRIBED' | 'USERUNSUBSCRIBED';
  SurveyTriggerData?: SurveysTriggersAppointmentSurveyTriggerData | SurveysTriggersCaseCreatedSurveyTriggerData | SurveysTriggersCaseClosedSurveyTriggerData | SurveysTriggersEmptySurveyTriggerData | SurveysTriggersOrderPaidSurveyTriggerData | SurveysTriggersOrderReturnSurveyTriggerData | SurveysTriggersOrderShippedSurveyTriggerData | SurveysTriggersRepairCreatedSurveyTriggerData | SurveysTriggersRepairFinishedSurveyTriggerData | SurveysTriggersUserCreatedSurveyTriggerData | SurveysTriggersUserUpdatedSurveyTriggerData | SurveysTriggersUserSubscribedSurveyTriggerData | SurveysTriggersUserUnsubscribedSurveyTriggerData;
  Type: DataModelsSurveyType;
}

export interface SurveysGetSurveyByIDResponse_OrganizationUnitSetDto {
  BackendID?: string;
  /**
  * Entity type: OrganizationUnitSet
  */
  ID: number;
  Name?: string;
  Type: DataModelsOrganizationUnitSetTypes;
}

export interface SurveysGetSurveyByIDResponse_User {
  FullName?: string;
  /**
  * Entity type: User
  */
  ID: number;
}

/**
* Get a survey category.
*/
export interface GetSurveyCategory extends RequestMessage<GetSurveyCategoryResponse> {
  /**
  * Entity type: SurveyCategory
  */
  ID: number;
}

export interface GetSurveyCategoryResponse extends ResponseMessage {
  Description?: string;
  /**
  * Entity type: SurveyCategory
  */
  ID: number;
  Name?: string;
}

/**
* Get a question that is already answered (to navigate back and forth in the survey)
*/
export interface GetSurveyQuestionAnswer extends RequestMessage<GetSurveyQuestionAnswerResponse> {
  /**
  * Entity type: SurveyQuestion
  */
  SurveyQuestionID: number;
  Token: string;
}

export interface GetSurveyQuestionAnswerResponse extends QuestionResponse {
  /**
  * Entity type: SurveyQuestion
  * The ID of the next question.
  */
  NextQuestion?: number;
  /**
  * Indicates if the next question has been answered before.
  */
  NextQuestionHasBeenAnswered: boolean;
}

/**
* List the survey questions
*/
export interface GetSurveyQuestions extends RequestMessage<GetSurveyQuestionsResponse> {
  /**
  * Entity type: Survey
  */
  SurveyID: number;
}

export interface GetSurveyQuestionsResponse extends ResponseMessage {
  Questions?: SurveysGetSurveyQuestionsResponse_Question[];
}

export interface SurveysGetSurveyQuestionsResponse_Question {
  AllowMultipleAnswers?: boolean;
  BackendID?: string;
  Blob?: BlobsBlobDto;
  BlobURL?: string;
  DataType?: DataModelsCustomFieldDataTypes;
  Description?: string;
  DisplayType?: string;
  /**
  * Entity type: SurveyQuestion
  */
  ID: number;
  InputHint?: string;
  MaximumDate?: string;
  MaximumLength?: number;
  MaximumValue?: number;
  MinimumDate?: string;
  MinimumLength?: number;
  MinimumValue?: number;
  OptionalAnswers?: Record<string,string | null>;
  Remark?: string;
  Required: boolean;
  Routes?: SurveysGetSurveyQuestionsResponse_Route[];
  Sequence: number;
  StoreAnswerOnContextCustomField: boolean;
  /**
  * Entity type: CustomField
  */
  SurveyContextCustomFieldID?: number;
  Text?: string;
  Type: DataModelsSurveyQuestionType;
  UseContextCustomFieldDataAsPrefill: boolean;
}

export interface SurveysGetSurveyQuestionsResponse_Route {
  ExitBlob?: BlobsBlobDto;
  ExitBlobURL?: string;
  ExitRemarkMessage?: string;
  ExitRemarkTitle?: string;
  Filter?: DataModelsSurveyQuestionRouteFilter;
  /**
  * Entity type: SurveyQuestionRoute
  */
  ID: number;
  /**
  * Entity type: SurveyQuestion
  */
  RouteToQuestionID?: number;
  Sequence: number;
}

/**
* View survey response details.
*/
export interface GetSurveyResponseDetails extends RequestMessage<GetSurveyResponseDetailsResponse> {
  /**
  * Entity type: SurveyResponse
  */
  SurveyResponseID: number;
}

export interface GetSurveyResponseDetailsResponse extends ResponseMessage {
  Answers?: SurveysGetSurveyResponseDetailsResponse_Answer[];
  FirstInteractionTime?: string;
  LastInteractionTime?: string;
  OrganizationUnitID?: number;
  OrganizationUnitName?: string;
  Status: DataModelsSurveyResponseStatus;
  SurveyContext: DataModelsSurveyContext;
  SurveyContextSourceID?: number;
  UserFullName?: string;
  UserID?: number;
  Version: number;
}

export interface SurveysGetSurveyResponseDetailsResponse_Answer {
  AnswerValue?: DataModelsCustomFieldValue;
  IsAnswered: boolean;
  PrefilledAnswerValue?: DataModelsCustomFieldValue;
  Question?: string;
  QuestionDataType?: DataModelsCustomFieldDataTypes;
  QuestionID: number;
  Required?: boolean;
  Sequence: number;
  StoreAnswerOnContextCustomField?: boolean;
  UseContextCustomFieldDataAsPrefill?: boolean;
}

/**
* Returns all translatable items within the survey.
*/
export interface GetSurveyTranslatableItems extends RequestMessage<GetSurveyTranslatableItemsResponse> {
  /**
  * Entity type: Country
  * Filter on specific country. Only returns exact matches. Translations set solely on language will not be returned because the combination does not exist.
  */
  CountryID?: string;
  /**
  * Entity type: Language
  */
  LanguageID: string;
  /**
  * Entity type: Survey
  */
  SurveyID: number;
}

export interface GetSurveyTranslatableItemsResponse extends ResponseMessage {
  QuestionTranslatableItems?: SurveysQuestionTranslatableItem[];
  TranslatableItems?: SurveysTranslatableItem[];
}

/**
* Returns the translation status of the survey.
*/
export interface GetSurveyTranslationStatus extends RequestMessage<GetSurveyTranslationStatusResponse> {
  /**
  * Entity type: Country
  */
  CountryID?: string;
  /**
  * Entity type: Language
  */
  LanguageID?: string;
  /**
  * Entity type: Survey
  */
  SurveyID: number;
}

export interface GetSurveyTranslationStatusResponse extends ResponseMessage {
  Statuses?: SurveysGetSurveyTranslationStatusResponse_TranslationStatus[];
}

export interface SurveysGetSurveyTranslationStatusResponse_TranslationStatus {
  /**
  * Entity type: Country
  */
  CountryID?: string;
  /**
  * Entity type: Language
  */
  LanguageID?: string;
  /**
  * Percentage of translations that are set. 0-100
  */
  Progress: number;
}

/**
* List the available custom fields for a given survey context
*/
export interface ListCustomFieldsForSurvey extends PagedResultRequest<ListCustomFieldsForSurveyResponse> {
  CustomFieldName?: string;
  /**
  * Entity type: CustomFieldType
  */
  CustomFieldTypeIDs?: number[];
  SurveyContext?: DataModelsSurveyContext;
}

export interface ListCustomFieldsForSurveyResponse extends PagedResultResponse<DataModelsCustomFieldMetadata> {
  AvailableCustomFieldTypes?: SurveysListCustomFieldsForSurveyResponse_AvailableCustomFieldType[];
}

export interface SurveysListCustomFieldsForSurveyResponse_AvailableCustomFieldType {
  /**
  * Entity type: CustomFieldType
  */
  ID: number;
  Name?: string;
}

/**
* List knowledge base surveys
*/
export interface ListKnowledgeBaseSurveys extends PagedRequestMessage<SurveysListKnowledgeBaseSurveysFilter, ListKnowledgeBaseSurveysResponse> {
  /**
  * Entity type: OrganizationUnit
  * Organization unit in which surveys are available. When omitted, falls back to the current organization. Ignored when logged in user is a customer
  */
  OrganizationUnitID?: number;
}

export interface SurveysListKnowledgeBaseSurveysFilter {
  /**
  * Entity type: SurveyCategory
  */
  CategoryID?: number;
}

export interface ListKnowledgeBaseSurveysResponse extends PagedResponseMessage<SurveysListKnowledgeBaseSurveysResponse_KnowledgeBaseSurvey> {
}

export interface SurveysListKnowledgeBaseSurveysResponse_KnowledgeBaseSurvey {
  Category?: EVAFrameworkAPIEnumDto;
  Description?: string;
  /**
  * Entity type: Survey
  */
  ID: number;
  Name?: string;
}

/**
* List the survey categories.
*/
export interface ListSurveyCategories extends PagedRequestMessage<SurveysListSurveyCategoriesFilter, ListSurveyCategoriesResponse> {
}

export interface ListSurveyCategoriesResponse extends PagedResponseMessage<SurveysListSurveyCategoriesResponse_Category> {
}

export interface SurveysListSurveyCategoriesResponse_Category {
  Description?: string;
  /**
  * Entity type: SurveyCategory
  */
  ID: number;
  Name?: string;
}

/**
* List survey responses for given survey.
*/
export interface ListSurveyResponses extends PagedRequestMessage<SurveysListSurveyResponsesFilter, ListSurveyResponsesResponse> {
  /**
  * Entity type: Survey
  */
  SurveyID: number;
}

export interface ListSurveyResponsesResponse extends PagedResponseMessage<SurveysListSurveyResponsesResponse_Response> {
}

export interface SurveysListSurveyResponsesResponse_Response {
  FirstInteractionTime?: string;
  ID: number;
  LastInteractionTime?: string;
  Status: DataModelsSurveyResponseStatus;
  SurveyContextSourceID?: number;
  Version: number;
}

/**
* List the surveys
*/
export interface ListSurveys extends PagedRequestMessage<SurveysListSurveyFilter, ListSurveysResponse> {
}

export interface ListSurveysResponse extends PagedResponseMessage<SurveysListSurveysResponse_SurveyDto> {
}

export interface SurveysListSurveysResponse_SurveyDto {
  AlwaysStartEmpty: boolean;
  BackendID?: string;
  Category?: EVAFrameworkAPIEnumDto;
  CompletedResponses: number;
  DeactivationReasons: DataModelsSurveyDeactivationReasons;
  Description?: string;
  EndDate?: string;
  HasActivePublishedVersion: boolean;
  HasUnpublishedChanges: boolean;
  /**
  * Entity type: Survey
  */
  ID: number;
  IsPublishing: boolean;
  LastPublishedVersion?: number;
  Name?: string;
  OneTimeUseOnly: boolean;
  /**
  * Entity type: OrganizationUnitSet
  */
  OrganizationUnitSetID?: number;
  StartDate?: string;
  StartedResponses: number;
  SurveyContext: DataModelsSurveyContext;
  SurveyDistributionHandler?: string;
  SurveyTrigger?: string;
}

/**
* Publishes all changes made to the survey.
* 
* Service will return an error when the survey is already published.
* 
* Survey cannot be published by the same user as the one who created / modified the survey, unless they have the right 'SurveySelfPublish'.
* The service will return an error if the same user without the right 'SurveySelfPublish' tries to publish the survey.
*/
export interface PublishSurvey extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: Survey
  */
  SurveyID: number;
  ValidateOnly?: boolean;
}

export interface QuestionResponse extends ResponseMessage {
  /**
  * Filled when there is no question left to answer.
  */
  ClosingRemark?: SurveysQuestionResponse_SurveyRemark;
  /**
  * The answer given previously.
  */
  GivenAnswer?: DataModelsCustomFieldValue;
  /**
  * Indicates if the question has been answered before.
  */
  HasBeenAnswered: boolean;
  /**
  * Filled when it's the first question of the survey.
  */
  Introduction?: SurveysQuestionResponse_SurveyRemark;
  /**
  * Entity type: SurveyQuestion
  * The ID of the previous question.
  */
  PreviousQuestionID?: number;
  /**
  * Question to be answered. When null, the survey is done.
  */
  Question?: SurveysSurveyQuestionDto;
  /**
  * Indicates if the survey response is previously completed.
  */
  SurveyResponsePreviouslyCompleted?: boolean;
}

export interface SurveysQuestionResponse_SurveyRemark {
  Blob?: BlobsBlobDto;
  BlobURL?: string;
  Message?: string;
  Title?: string;
}

export interface SurveysQuestionRouteTranslatableItem {
  /**
  * Entity type: SurveyQuestionRoute
  */
  QuestionRouteID: number;
  TranslatableItems: SurveysTranslatableItem[];
}

export interface SurveysQuestionTranslatableItem {
  /**
  * Entity type: SurveyQuestion
  */
  QuestionID: number;
  QuestionRouteTranslatableItems?: SurveysQuestionRouteTranslatableItem[];
  TranslatableItems?: SurveysTranslatableItem[];
}

/**
* Restart the survey response
*/
export interface RestartSurveyResponse extends RequestMessage<QuestionResponse> {
  Token: string;
}

/**
* Search surveys based upon the survey and/or survey question.
*/
export interface SearchSurveys extends PagedRequestMessage<SurveysSearchSurveyFilter, SearchSurveysResponse> {
}

export interface SearchSurveysResponse extends PagedResponseMessage<SurveysSearchSurveysResponse_SurveyDto> {
}

export interface SurveysSearchSurveysResponse_SurveyDto {
  BackendID?: string;
  Category?: EVAFrameworkAPIEnumDto;
  Description?: string;
  /**
  * Entity type: Survey
  */
  ID: number;
  Name?: string;
  /**
  * Entity type: OrganizationUnitSet
  */
  OrganizationUnitSetID?: number;
  SurveyContext: DataModelsSurveyContext;
}

/**
* Takes in all routings of a question and sets their sequences.
*/
export interface SetSurveyQuestionRoutingSequences extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: SurveyQuestion
  */
  SurveyQuestionID: number;
  /**
  * Entity type: SurveyQuestionRoute
  */
  SurveyQuestionRoutingIDs: number[];
}

/**
* Takes in all questions of a survey and sets their sequences.
*/
export interface SetSurveyQuestionSequences extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: Survey
  */
  SurveyID: number;
  /**
  * Entity type: SurveyQuestion
  */
  SurveyQuestionIDs: number[];
}

/**
* Set all translatable items within the survey.
*/
export interface SetSurveyTranslatableItems extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: Country
  */
  CountryID?: string;
  /**
  * Entity type: Language
  */
  LanguageID: string;
  QuestionTranslatableItems?: SurveysQuestionTranslatableItem[];
  /**
  * Entity type: Survey
  */
  SurveyID: number;
  TranslatableItems?: SurveysTranslatableItem[];
}

/**
* Start a survey
*/
export interface StartSurvey extends RequestMessage<StartSurveyResponse> {
  SurveyContextSourceID?: number;
  /**
  * Entity type: Survey
  */
  SurveyID?: number;
  Token?: string;
}

/**
* Create and start a preview.
*/
export interface StartSurveyPreview extends RequestMessage<StartSurveyPreviewResponse> {
  /**
  * Entity type: Survey
  */
  SurveyID: number;
}

export interface StartSurveyPreviewResponse extends ResponseMessage {
  Token: string;
}

export interface StartSurveyResponse extends QuestionResponse {
  Token: string;
}

export interface SurveysSurveyQuestionDto {
  AllowMultipleAnswers?: boolean;
  BackendID?: string;
  Blob?: BlobsBlobDto;
  BlobURL?: string;
  DataType?: DataModelsCustomFieldDataTypes;
  Description?: string;
  DisplayType?: string;
  /**
  * Entity type: SurveyQuestion
  */
  ID: number;
  InputHint?: string;
  MaximumDate?: string;
  MaximumLength?: number;
  MaximumValue?: number;
  MinimumDate?: string;
  MinimumLength?: number;
  MinimumValue?: number;
  OptionalAnswers?: Record<string,string | null>;
  Remark?: string;
  Required: boolean;
  Text?: string;
  Type: DataModelsSurveyQuestionType;
}

export interface SurveysTranslatableItem {
  OriginalValue?: string;
  TranslationKey: string;
  TranslationValue?: string;
}

/**
* Update a survey.
* NOTE THAT after update, the published survey will remain active and the current data will be taken into draft mode for republishing.
* After publishing you can no longer change the OrganizationUnitSetID, SurveyContext, Trigger and (depending on the Trigger) some of the TriggerData properties.
*/
export interface UpdateSurvey extends RequestMessageWithEmptyResponse {
  AfterEffects?: SurveysSurveyAfterEffectDto[] | null;
  AllowViewingResponses?: boolean;
  AlwaysStartEmpty?: boolean;
  BackendID?: string | null;
  /**
  * Entity type: SurveyCategory
  */
  CategoryID?: number | null;
  ClosingRemarkBlobID?: string | null;
  ClosingRemarkMessage?: string | null;
  ClosingRemarkTitle?: string | null;
  Description?: string | null;
  EndDate?: string | null;
  /**
  * Entity type: Survey
  */
  ID: number;
  IntroductionBlobID?: string | null;
  IntroductionMessage?: string | null;
  IntroductionTitle?: string | null;
  LoadPreviousResponseAnswers?: boolean;
  Name?: string;
  OneTimeUseOnly?: boolean;
  /**
  * Entity type: OrganizationUnitSet
  */
  OrganizationUnitSetID?: number | null;
  ResponseTimeoutInDays?: number | null;
  StartDate?: string;
  SurveyContext?: DataModelsSurveyContext;
  SurveyDistributionHandler?: 'MANUAL' | 'SYSTEM' | 'EMAIL' | 'EVENTEXPORT';
  SurveyDistributionHandlerData?: SurveysEmptySurveyDistributionHandlerData | null;
  SurveyTrigger?: 'APPOINTMENTCONFIRMED' | 'APPOINTMENTSTARTED' | 'APPOINTMENTCOMPLETED' | 'CASECREATED' | 'CASECLOSED' | 'MANUAL' | 'SYSTEM' | 'ORDERPAID' | 'ORDERRETURN' | 'ORDERSHIPPED' | 'REPAIRCREATED' | 'REPAIRFINISHED' | 'USERCREATED' | 'USERUPDATED' | 'USERSUBSCRIBED' | 'USERUNSUBSCRIBED';
  SurveyTriggerData?: SurveysTriggersAppointmentSurveyTriggerData | SurveysTriggersCaseCreatedSurveyTriggerData | SurveysTriggersCaseClosedSurveyTriggerData | SurveysTriggersEmptySurveyTriggerData | SurveysTriggersOrderPaidSurveyTriggerData | SurveysTriggersOrderReturnSurveyTriggerData | SurveysTriggersOrderShippedSurveyTriggerData | SurveysTriggersRepairCreatedSurveyTriggerData | SurveysTriggersRepairFinishedSurveyTriggerData | SurveysTriggersUserCreatedSurveyTriggerData | SurveysTriggersUserUpdatedSurveyTriggerData | SurveysTriggersUserSubscribedSurveyTriggerData | SurveysTriggersUserUnsubscribedSurveyTriggerData | null;
}

/**
* Update a survey category.
*/
export interface UpdateSurveyCategory extends RequestMessage<EmptyResponseMessage> {
  Description?: string | null;
  /**
  * Entity type: SurveyCategory
  */
  ID: number;
}

/**
* Update a survey question
*/
export interface UpdateSurveyQuestion extends RequestMessageWithEmptyResponse {
  AllowMultipleAnswers?: boolean;
  BackendID?: string | null;
  /**
  * Entity type: Blob
  */
  BlobID?: string | null;
  DataType?: DataModelsCustomFieldDataTypes;
  Description?: string | null;
  DisplayType?: string | null;
  /**
  * Entity type: SurveyQuestion
  */
  ID: number;
  InputHint?: string | null;
  MaximumDate?: string | null;
  MaximumLength?: number | null;
  MaximumValue?: number | null;
  MinimumDate?: string | null;
  MinimumLength?: number | null;
  MinimumValue?: number | null;
  OptionalAnswers?: Record<string,string | null> | null;
  Remark?: string | null;
  Required?: boolean;
  StoreAnswerOnContextCustomField?: boolean;
  /**
  * Entity type: CustomField
  * A custom field that is available from the SurveyContext.
  * If context for example is `User`, all custom fields of the user are available.
  * If context for example is `Order`, all custom fields from the order and customer (user) on the order are available.
  * 
  * NOTE THAT this value cannot be update. If this question is based upon the custom field, any changes to the markup are rejected.
  * 
  * NOTE THAT any security settings on the custom field are ignored.
  * 
  * NOTE THAT when this value is set, the markup of the custom field is copied as markup for the survey question, and the response data is saved within the survey.
  * If the value also needs to be stored on the context entity self (e.g. order, user, etc), the setting `StoreAnswerOnContextCustomField` needs to be set.
  * When `StoreAnswerOnContextCustomField` is set to true, changes to the custom field itself will also be blocked while the survey is active.
  */
  SurveyContextCustomFieldID?: number | null;
  Text?: string;
  Type?: DataModelsSurveyQuestionType;
  UseContextCustomFieldDataAsPrefill?: boolean;
}

/**
* Update a survey question route
*/
export interface UpdateSurveyQuestionRoute extends RequestMessageWithEmptyResponse {
  ExitBlobID?: string | null;
  ExitRemarkMessage?: string | null;
  ExitRemarkTitle?: string | null;
  Filter?: DataModelsSurveyQuestionRouteFilter;
  /**
  * Entity type: SurveyQuestionRoute
  */
  ID: number;
  /**
  * Entity type: SurveyQuestion
  */
  RouteToQuestionID?: number | null;
}

/**
* Downloads an Excel file containing tax codes according to the specified PageConfig. To get an empty template Excel, specify a page size of zero.
*/
export interface DownloadTaxCodesExcel extends RequestMessage<ResourceResponseMessage> {
}

/**
* Downloads an Excel file containing tax rates according to the specified PageConfig.
*/
export interface DownloadTaxRateExcel extends RequestMessage<ResourceResponseMessage> {
  PageConfig?: PageConfig<PricingListTaxRateModelFilters>;
}

/**
* A service to upload an Excel containing tax codes info that.
* The actions that can be taken on the tax codes are: create(C), update(U) or delete(D), according to the value specified in 'Action' column.
*/
export interface UploadTaxCodesExcel extends RequestMessageWithEmptyResponse {
  Data: string;
}

/**
* A service to upload an Excel containing tax rates.
* The actions that can be applied on the tax rates are: Create, Update or Delete, according to the value specified in 'Action' column.
*/
export interface UploadTaxRateExcel extends RequestMessageWithEmptyResponse {
  Data: string;
}

/**
* Block a users subscription without unsubscribing.
*/
export interface BlockUserSubscription extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: Subscription
  */
  SubscriptionID: number;
  /**
  * Entity type: User
  */
  UserID: number;
}

/**
* Create a new Subscription
*/
export interface CreateSubscription extends RequestMessage<CreateSubscriptionResponse> {
  /**
  * Indicates if the subscription can be unsubscribed and if so, who can do the unsubscribe.
  */
  AllowUnsubscribeBy?: DataModelsAllowUnsubscribeByType;
  /**
  * The (optional) BackendID of the subscription
  */
  BackendID?: string;
  Description?: string;
  /**
  * The handler for the actions on this subscription. Available handlers can be listed with the `GetSubscriptionHandlers` service.
  */
  Handler?: string;
  /**
  * Entity type: CustomField
  * The (optional) custom field the UserIdentifier of the subscription is written back to. Values from in the custom field are informational only.
  */
  IdentifierCustomFieldID?: number;
  /**
  * Entity type: Inquiry
  */
  InquiryID?: number;
  /**
  * Entity type: LoyaltyProgram
  * The LoyaltyProgram the subscription is bound to.
  */
  LoyaltyProgramID?: number;
  /**
  * When set to true, subscribing the user will require a UserIdentifier to be given.
  */
  ManualUserIdentifiers?: boolean;
  /**
  * The name of the subscription
  */
  Name: string;
  /**
  * Handling when a user is unsubscribed and re-subscribes.
  */
  ResubscribeHandling?: DataModelsResubscribeHandlingType;
  UserIdentifierPrefix?: string;
  UserIdentifierStartNumber?: number;
  UserIdentifierSuffix?: string;
}

/**
* Creates a new SubscriptionOrganizationUnitSet and returns the ID of the new record.
*/
export interface CreateSubscriptionOrganizationUnitSet extends RequestMessage<CreateSubscriptionOrganizationUnitSetResponse> {
  ConfirmationRequired?: boolean;
  Default?: boolean;
  Enabled?: boolean;
  Hidden?: boolean;
  /**
  * Entity type: OrganizationUnitSet
  */
  OrganizationUnitSetID: number;
  Preferred?: boolean;
  Priority?: number;
  SubscriptionConfirmation?: DataModelsSubscriptionConfirmation;
  /**
  * Entity type: Subscription
  */
  SubscriptionID: number;
}

export interface CreateSubscriptionOrganizationUnitSetResponse extends ResponseMessage {
  /**
  * Entity type: SubscriptionOrganizationUnitSet
  */
  ID: number;
}

export interface CreateSubscriptionResponse extends ResponseMessage {
  /**
  * Entity type: Subscription
  */
  ID: number;
}

/**
* Create a new UserAgreement
*/
export interface CreateUserAgreement extends RequestMessage<CreateUserAgreementResponse> {
  AllowRevoke?: boolean;
  BackendID?: string;
  Description?: string;
  IsUserRequirement?: boolean;
  Name: string;
  /**
  * Entity type: OrganizationUnitSet
  */
  OrganizationUnitSetID: number;
  RequireSignature?: boolean;
  UsedForDataProcessing?: boolean;
  /**
  * Entity type: Script
  */
  UserRequirementScriptID?: number;
}

export interface CreateUserAgreementResponse extends ResponseMessage {
  /**
  * Entity type: Subscription
  */
  ID: number;
}

/**
* Create a new UserOrigin
*/
export interface CreateUserOrigin extends RequestMessage<CreateUserOriginResponse> {
  BackendID?: string;
  Description?: string;
  Name: string;
}

export interface CreateUserOriginResponse extends ResponseMessage {
  /**
  * Entity type: UserOrigin
  */
  ID: number;
}

/**
* Creates a new UserRequirement and returns the ID of the new record.
*/
export interface CreateUserRequirement extends RequestMessage<CreateUserRequirementResponse> {
  AccountType?: DataModelsUserAccountType;
  CustomValidators?: Record<string,TAnyValue | null>;
  Display?: boolean;
  Preferred?: boolean;
  Property: string;
  RequiredFor?: UsersUserRequirementsUserRequirementFor;
  /**
  * Entity type: Script
  */
  ScriptID?: number;
  /**
  * Entity type: ShippingMethod
  */
  ShippingMethodID?: number;
  /**
  * Entity type: Subscription
  */
  SubscriptionID?: number;
  /**
  * Entity type: UserRequirementSet
  */
  UserRequirementSetID?: number;
  UserType?: UserTypes;
}

export interface CreateUserRequirementResponse extends ResponseMessage {
  /**
  * Entity type: UserRequirement
  */
  ID: number;
}

/**
* Creates a new UserRequirementSet and returns the ID of the new record. Automatically creates default UserRequirements for all available properties
*/
export interface CreateUserRequirementSet extends RequestMessage<CreateUserRequirementSetResponse> {
  Name: string;
  /**
  * Entity type: OrganizationUnitSet
  */
  OrganizationUnitSetID: number;
}

export interface CreateUserRequirementSetResponse extends ResponseMessage {
  /**
  * Entity type: UserRequirementSet
  */
  ID: number;
}

/**
* Download an Excel sample which can be filled with customers. The populated excel can be uploaded through the `UploadCustomers` service.
*/
export interface DownloadCustomersSample extends RequestMessageWithResourceResponse {
}

/**
* Upload the Excel based on the sample from `DownloadCustomersSample`.
* 
* The uploaded file will be processed in the background and the results will be mailed to the uploader.
*/
export interface UploadCustomers extends RequestMessageWithEmptyResponse {
  Data: string;
}

/**
* Delete a Subscription.
*/
export interface DeleteSubscription extends RequestMessageWithEmptyResponse {
  /**
  * You can provide the property `Force` to force remaining subscribed users to be unsubscribed. Doing so requires ForceDeleteSubscription functionality.
  */
  Force?: boolean;
  /**
  * Entity type: Subscription
  */
  ID: number;
}

/**
* Deletes a SubscriptionOrganizationUnitSet by its ID.
*/
export interface DeleteSubscriptionOrganizationUnitSet extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: SubscriptionOrganizationUnitSet
  */
  ID: number;
}

/**
* Delete a UserAgreement.
*/
export interface DeleteUserAgreement extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: Subscription
  */
  ID: number;
}

/**
* Delete a UserOrigin
*/
export interface DeleteUserOrigin extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: UserOrigin
  */
  ID: number;
}

/**
* Deletes a UserRequirement by its ID.
*/
export interface DeleteUserRequirement extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: UserRequirement
  */
  ID: number;
}

/**
* Deletes a UserRequirementSet by its ID. Will also delete the underlying requirements.
*/
export interface DeleteUserRequirementSet extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: UserRequirementSet
  */
  ID: number;
}

/**
* Duplicate the requirements of an existing set to a new set.
*/
export interface DuplicateUserRequirementSet extends RequestMessage<DuplicateUserRequirementSetResponse> {
  Name: string;
  /**
  * Entity type: OrganizationUnitSet
  */
  OrganizationUnitSetID: number;
  /**
  * Entity type: UserRequirementSet
  */
  SetToDuplicateID: number;
}

export interface DuplicateUserRequirementSetResponse extends ResponseMessage {
  /**
  * Entity type: UserRequirementSet
  */
  ID: number;
}

export enum UsersEmployeesCreateEmployeeResults {
  CreatedNewUser = 0,
  UpgradedExistingUser = 1,
  UpdatedExistingUser = 2,
}

/**
* Create a new Employee
*/
export interface CreateEmployeeUser extends RequestMessage<CreateEmployeeUserResponse> {
  /**
  * Entity type: Country
  */
  CountryID?: string;
  /**
  * Optional additional custom fields
  */
  CustomFields?: DataModelsCustomFieldKeyValue[];
  DateOfBirth?: string;
  EmailAddress?: string;
  EmployeeNumber?: string;
  FirstName?: string;
  Function?: string;
  Gender?: string;
  GenerateTemporaryPassword?: boolean;
  IgnoreTestSuite?: boolean;
  IsSingleSignOnOnly?: boolean;
  /**
  * Entity type: Language
  */
  LanguageID?: string;
  LastName?: string;
  /**
  * Entity type: User
  */
  ManagerID?: number;
  Nickname?: string;
  Password?: string;
  PhoneNumber?: string;
  PricingGroupID?: string;
  /**
  * Entity type: OrganizationUnit
  */
  PrimaryOrganizationUnitID?: number;
  /**
  * Entity type: Role
  */
  RoleID?: number;
  UserRoles?: UsersEmployeesCreateEmployeeUser_UserRole[];
}

export interface UsersEmployeesCreateEmployeeUser_UserRole {
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID: number;
  /**
  * Entity type: Role
  */
  RoleID: number;
}

export interface CreateEmployeeUserResponse extends ResponseMessage {
  Result: UsersEmployeesCreateEmployeeResults;
  TemporaryPassword?: string;
  /**
  * Entity type: User
  */
  UserID?: number;
}

/**
* Create or update a users employee data.
*/
export interface CreateOrUpdateEmployeeData extends RequestMessageWithEmptyResponse {
  EmployeeNumber?: string | null;
  Function?: string | null;
  /**
  * Entity type: User
  */
  ManagerID?: number | null;
  /**
  * Entity type: OrganizationUnit
  */
  PrimaryOrganizationUnitID?: number | null;
  /**
  * Entity type: User
  */
  UserID: number;
}

/**
* Remove a users employee data.
*/
export interface DeleteEmployeeData extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: User
  */
  UserID: number;
}

export interface UsersEmployeesEmployeeDataDto {
  EmployeeNumber?: string;
  Function?: string;
  ManagerEmailAddress?: string;
  ManagerFullName?: string;
  /**
  * Entity type: User
  */
  ManagerID?: number;
  /**
  * Entity type: OrganizationUnit
  */
  PrimaryOrganizationUnitID?: number;
  PrimaryOrganizationUnitName?: string;
  UserEmailAddress?: string;
  UserFullName?: string;
  /**
  * Entity type: User
  */
  UserID: number;
}

/**
* Export all Employees with their roles in an excel file
*/
export interface ExportEmployeeRoles extends RequestMessageWithResourceWithBlobIDResponse {
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID?: number;
}

export interface GenerateIdentificationCodeForEmployee extends RequestMessage<GenerateIdentificationCodeForEmployeeResponse> {
}

export interface GenerateIdentificationCodeForEmployeeResponse extends ResponseMessage {
  Result?: UsersEmployeesGenerateIdentificationCodeForEmployeeResponse_UserIdWithIdentificationCodeDto;
}

export interface UsersEmployeesGenerateIdentificationCodeForEmployeeResponse_UserIdWithIdentificationCodeDto {
  IdentificationCode?: string;
  /**
  * Entity type: User
  */
  UserId: number;
}

/**
* Fetch a users employee data by `UserID`.
*/
export interface GetEmployeeData extends RequestMessage<GetEmployeeDataResponse> {
  /**
  * Entity type: User
  */
  UserID: number;
}

export interface GetEmployeeDataResponse extends ResponseMessage {
  EmployeeNumber?: string;
  Function?: string;
  ManagerEmailAddress?: string;
  ManagerFullName?: string;
  /**
  * Entity type: User
  */
  ManagerID?: number;
  /**
  * Entity type: OrganizationUnit
  */
  PrimaryOrganizationUnitID?: number;
  PrimaryOrganizationUnitName?: string;
  UserEmailAddress?: string;
  UserFullName?: string;
  /**
  * Entity type: User
  */
  UserID: number;
}

/**
* List a users employee data.
*/
export interface ListEmployeeDatas extends FilteredPagedResultRequest<UsersEmployeesListEmployeeDatasFilter, ListEmployeeDatasResponse> {
}

export interface UsersEmployeesListEmployeeDatasFilter {
  EmployeeNumber?: string;
  /**
  * Entity type: User
  */
  UserID?: number;
}

export interface ListEmployeeDatasResponse extends PagedResultResponse<UsersEmployeesEmployeeDataDto> {
}

/**
* Export all UserSubscriptions in an excel file
*/
export interface ExportUserSubscriptions extends RequestMessageWithResourceResponse {
}

/**
* Get the available UserProperties on which requirements can be set.
*/
export interface GetAvailableUserRequirementsProperties extends RequestMessage<GetAvailableUserRequirementsPropertiesResponse> {
}

export interface GetAvailableUserRequirementsPropertiesResponse extends ResponseMessage {
  Properties?: string[];
  Result: Record<string,UsersUserRequirementsUserRequirementProperties>;
}

/**
* Get the subscription details
*/
export interface GetSubscriptionByID extends RequestMessage<GetSubscriptionByIDResponse> {
  /**
  * Entity type: Subscription
  */
  ID: number;
}

export interface GetSubscriptionByIDResponse extends ResponseMessage {
  AllowUnsubscribeBy: DataModelsAllowUnsubscribeByType;
  BackendID?: string;
  Description?: string;
  Handler?: string;
  /**
  * Entity type: Subscription
  */
  ID: number;
  IdentifierCustomField?: UsersGetSubscriptionByIDResponse_CustomFieldDto;
  Inquiry?: UsersGetSubscriptionByIDResponse_InquiryDto;
  IsExternal: boolean;
  LoyaltyProgram?: UsersGetSubscriptionByIDResponse_LoyaltyProgramDto;
  ManualUserIdentifiers: boolean;
  Name?: string;
  ResubscribeHandling: DataModelsResubscribeHandlingType;
  Type: DataModelsSubscriptionType;
  UserIdentifierCurrentNumber?: number;
  UserIdentifierPrefix?: string;
  UserIdentifierStartNumber?: number;
  UserIdentifierSuffix?: string;
}

export interface UsersGetSubscriptionByIDResponse_CompanyDto {
  /**
  * Entity type: Company
  */
  ID: number;
  Name?: string;
}

export interface UsersGetSubscriptionByIDResponse_CustomFieldDto {
  /**
  * Entity type: CustomField
  */
  ID: number;
  Name?: string;
}

export interface UsersGetSubscriptionByIDResponse_InquiryDto {
  /**
  * Entity type: Inquiry
  */
  ID: number;
  Name?: string;
}

export interface UsersGetSubscriptionByIDResponse_LoyaltyProgramDto {
  Company?: UsersGetSubscriptionByIDResponse_CompanyDto;
  /**
  * Entity type: LoyaltyProgram
  */
  ID: number;
  Name?: string;
  Options?: DataModelsLoyaltyProgramOptions;
  PointUsageOptions?: DataModelsLoyaltyPointUsageOptions;
  Type?: DataModelsProgramType;
}

/**
* Get the available subscription handlers
*/
export interface GetSubscriptionHandlers extends RequestMessage<GetSubscriptionHandlersResponse> {
}

export interface GetSubscriptionHandlersResponse extends ResponseMessage {
  Handlers: string[];
  HandlersDetails: UsersGetSubscriptionHandlersResponse_Handler[];
}

export interface UsersGetSubscriptionHandlersResponse_Handler {
  AllowRequestConfirmation: boolean;
  Name?: string;
}

/**
* Gets all the SubscriptionOrganizationUnitSets and returns a paged response.
*/
export interface GetSubscriptionOrganizationUnitSets extends RequestMessage<GetSubscriptionOrganizationUnitSetsResponse> {
}

export interface GetSubscriptionOrganizationUnitSetsResponse extends ResponseMessage {
  SubscriptionOrganizationUnitSets?: UsersGetSubscriptionOrganizationUnitSetsResponse_SubscriptionOrganizationUnitSetDto[];
}

export interface UsersGetSubscriptionOrganizationUnitSetsResponse_SubscriptionOrganizationUnitSetDto {
  ConfirmationRequired: boolean;
  Default: boolean;
  Enabled: boolean;
  Hidden: boolean;
  /**
  * Entity type: SubscriptionOrganizationUnitSet
  */
  ID: number;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID?: number;
  OrganizationUnitSetDescription?: string;
  /**
  * Entity type: OrganizationUnitSet
  */
  OrganizationUnitSetID: number;
  OrganizationUnitSetName?: string;
  OrganizationUnitSetType?: DataModelsOrganizationUnitSetTypes;
  Preferred: boolean;
  Priority: number;
  SubscriptionConfirmation: DataModelsSubscriptionConfirmation;
  /**
  * Entity type: Subscription
  */
  SubscriptionID: number;
  SubscriptionName?: string;
}

/**
* Get the UserAgreement details
*/
export interface GetUserAgreementByID extends RequestMessage<GetUserAgreementByIDResponse> {
  /**
  * Entity type: Subscription
  */
  ID: number;
}

export interface GetUserAgreementByIDResponse extends ResponseMessage {
  AllowRevoke: boolean;
  BackendID?: string;
  Description?: string;
  /**
  * Entity type: Subscription
  */
  ID: number;
  IsUserRequirement: boolean;
  Name?: string;
  OrganizationUnitSet?: UsersGetUserAgreementByIDResponse_OrganizationUnitSetDto;
  RequireSignature: boolean;
  UsedForDataProcessing: boolean;
  /**
  * Entity type: Script
  */
  UserRequirementScriptID?: number;
}

export interface UsersGetUserAgreementByIDResponse_OrganizationUnitSetDto {
  BackendID?: string;
  /**
  * Entity type: OrganizationUnitSet
  */
  ID: number;
  Name?: string;
}

/**
* List the UserOrigins
*/
export interface GetUserOrigins extends RequestMessage<GetUserOriginsResponse> {
}

export interface GetUserOriginsResponse extends ResponseMessage {
  UserOrigins?: UsersGetUserOriginsResponse_UserOriginDto[];
}

export interface UsersGetUserOriginsResponse_UserOriginDto extends EVAFrameworkAPIEnumDto {
  BackendID?: string;
}

/**
* Get all products for a personalized promotion for the logged in user or the given user.
*/
export interface GetUserPersonalizedPromotionProducts extends RequestMessage<GetUserPersonalizedPromotionProductsResponse> {
  /**
  * Entity type: PersonalizedPromotion
  */
  PersonalizedPromotionID: number;
  /**
  * Entity type: User
  */
  UserID?: number;
}

export interface GetUserPersonalizedPromotionProductsResponse extends ResponseMessage {
  ApplicableProducts?: SearchIProductSearchItem[];
  Description?: string;
  IsLocked: boolean;
  MaximumDistinctProducts?: number;
  Name?: string;
  PersonalizedPromotionBackendID?: string;
  /**
  * Entity type: PersonalizedPromotion
  */
  PersonalizedPromotionID: number;
  SelectedProducts?: SearchIProductSearchItem[];
}

/**
* Gets UserRequirement by its ID.
*/
export interface GetUserRequirement extends RequestMessage<GetUserRequirementResponse> {
  /**
  * Entity type: UserRequirement
  */
  ID: number;
}

export interface GetUserRequirementResponse extends ResponseMessage {
  AccountType?: DataModelsUserAccountType;
  CustomValidators?: Record<string,TAnyValue | null>;
  Display: boolean;
  /**
  * Entity type: UserRequirement
  */
  ID: number;
  Preferred: boolean;
  Property: string;
  RequiredFor: UsersUserRequirementsUserRequirementFor;
  /**
  * Entity type: Script
  */
  ScriptID?: number;
  /**
  * Entity type: ShippingMethod
  */
  ShippingMethodID?: number;
  /**
  * Entity type: UserRequirementSet
  */
  UserRequirementSetID?: number;
  UserRequirementSetName?: string;
  UserType?: UserTypes;
}

/**
* Gets a UserRequirementSet by its ID, including all connected requirements split into default and non-default lists.
*/
export interface GetUserRequirementSet extends RequestMessage<GetUserRequirementSetResponse> {
  /**
  * Entity type: UserRequirementSet
  */
  ID: number;
}

export interface GetUserRequirementSetResponse extends ResponseMessage {
  CustomRequirements?: UsersGetUserRequirementSetResponse_UserRequirementDto[];
  DefaultRequirements?: UsersGetUserRequirementSetResponse_UserRequirementDto[];
  /**
  * Entity type: UserRequirementSet
  */
  ID: number;
  Name: string;
  OrganizationUnitSetDescription?: string;
  /**
  * Entity type: OrganizationUnitSet
  */
  OrganizationUnitSetID: number;
  OrganizationUnitSetName?: string;
  OrganizationUnitSetType?: DataModelsOrganizationUnitSetTypes;
}

export interface UsersGetUserRequirementSetResponse_UserRequirementDto {
  AccountType?: DataModelsUserAccountType;
  CustomValidators?: Record<string,TAnyValue | null>;
  Display: boolean;
  /**
  * Entity type: UserRequirement
  */
  ID: number;
  IsDefault: boolean;
  Preferred: boolean;
  Property?: string;
  RequiredFor: UsersUserRequirementsUserRequirementFor;
  /**
  * Entity type: Script
  */
  ScriptID?: number;
  UserType?: UserTypes;
}

/**
* Get the configured UserRequirements for the current, or given, `OrganizationUnit`.
*/
export interface GetUserRequirements extends RequestMessage<GetUserRequirementsResponse> {
  AccountType?: DataModelsUserAccountType;
  /**
  * Entity type: Order
  */
  OrderID?: number;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID?: number;
  /**
  * Entity type: ShippingMethod
  */
  ShippingMethodID?: number;
  /**
  * Entity type: Subscription
  */
  SubscriptionID?: number;
  UserType?: UserTypes;
}

/**
* Get the configured UserRequirements for the given Subscriptions.
*/
export interface GetUserRequirementsForSubscriptions extends RequestMessage<GetUserRequirementsForSubscriptionsResponse> {
  /**
  * Entity type: Subscription
  */
  SubscriptionIDs: number[];
}

export interface GetUserRequirementsForSubscriptionsResponse extends ResponseMessage {
  Requirements?: Record<string,UsersUserRequirementsUserRequirementForSubscriptionResponse[] | null>;
}

export interface GetUserRequirementsResponse extends ResponseMessage {
  OrderCustomerRequirements?: UsersGetUserRequirementsResponse_OrderRequirement[];
  PropertyRequirements?: Record<string,UsersUserRequirementsUserRequirementResponse[] | null>;
  Requirements?: Record<string,UsersUserRequirementsUserRequirementResponse>;
  UserAgreements?: UsersGetUserRequirementsResponse_UserAgreement[];
}

export interface UsersGetUserRequirementsResponse_OrderRequirement {
  Message?: string;
  Property?: string;
  RequiredFor: ValidationRequiredFor;
}

export interface UsersGetUserRequirementsResponse_UserAgreement {
  Description?: string;
  /**
  * Entity type: Subscription
  */
  ID: number;
  IsRequired: boolean;
  Name?: string;
  RequiresSignature: boolean;
  UsedForDataProcessing: boolean;
}

/**
* Generate a user subscription identifier barcode for the given user and subscription
*/
export interface GetUserSubscriptionBarcode extends RequestMessage<GetUserSubscriptionBarcodeResponse> {
  /**
  * Entity type: Subscription
  */
  SubscriptionID: number;
  /**
  * Entity type: User
  */
  UserID: number;
}

export interface GetUserSubscriptionBarcodeResponse extends ResponseMessage {
  Barcode?: string;
}

/**
* List the subscription organization unit sets.
*/
export interface ListSubscriptionOrganizationUnitSets extends PagedRequestMessage<UsersSubscriptionsListSubscriptionOrganizationUnitSetsFilter, ListSubscriptionOrganizationUnitSetsResponse> {
  /**
  * Entity type: Subscription
  */
  SubscriptionID: number;
}

export interface ListSubscriptionOrganizationUnitSetsResponse extends PagedResponseMessage<UsersListSubscriptionOrganizationUnitSetsResponse_SubscriptionOrganizationUnitSetDto> {
}

export interface UsersListSubscriptionOrganizationUnitSetsResponse_OrganizationUnitSetDto {
  Description?: string;
  /**
  * Entity type: OrganizationUnitSet
  */
  ID: number;
  Name?: string;
  Type?: DataModelsOrganizationUnitSetTypes;
}

export interface UsersListSubscriptionOrganizationUnitSetsResponse_SubscriptionDto {
  /**
  * Entity type: Subscription
  */
  ID: number;
  Name?: string;
}

export interface UsersListSubscriptionOrganizationUnitSetsResponse_SubscriptionOrganizationUnitSetDto {
  Default: boolean;
  Enabled: boolean;
  Hidden: boolean;
  /**
  * Entity type: SubscriptionOrganizationUnitSet
  */
  ID: number;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID?: number;
  OrganizationUnitSet?: UsersListSubscriptionOrganizationUnitSetsResponse_OrganizationUnitSetDto;
  Preferred: boolean;
  Priority: number;
  Subscription?: UsersListSubscriptionOrganizationUnitSetsResponse_SubscriptionDto;
  SubscriptionConfirmation: DataModelsSubscriptionConfirmation;
}

/**
* List all users attached to a subscription. Requires View rights on Subscriptions and Customers functionalities.
*/
export interface ListSubscriptionUsers extends PagedRequestMessage<UsersSubscriptionsListSubscriptionUsersFilter, ListSubscriptionUsersResponse> {
}

export interface ListSubscriptionUsersResponse extends PagedResponseMessage<UsersListSubscriptionUsersResponse_SubscriptionUser> {
}

export interface UsersListSubscriptionUsersResponse_SubscriptionUser {
  IsBlocked: boolean;
  /**
  * Entity type: OrganizationUnit
  */
  OriginatingOrganizationUnitID?: number;
  Status: DataModelsSubscriptionStatus;
  /**
  * Entity type: Subscription
  */
  SubscriptionID: number;
  User?: UsersListSubscriptionUsersResponse_UserInfo;
  /**
  * Entity type: User
  */
  UserID: number;
  UserIdentifier?: string;
}

export interface UsersListSubscriptionUsersResponse_UserInfo {
  EmailAddress?: string;
  FirstName?: string;
  FullName?: string;
  LastName?: string;
}

/**
* List the Subscriptions
*/
export interface ListSubscriptions extends RequestMessage<ListSubscriptionsResponse> {
}

export interface ListSubscriptionsResponse extends ResponseMessage {
  Subscriptions?: UsersListSubscriptionsResponse_SubscriptionDto[];
}

export interface UsersListSubscriptionsResponse_SubscriptionDto {
  AllowUnsubscribeBy: DataModelsAllowUnsubscribeByType;
  BackendID?: string;
  Description?: string;
  Handler?: string;
  /**
  * Entity type: Subscription
  */
  ID: number;
  /**
  * Entity type: CustomField
  */
  IdentifierCustomFieldID?: number;
  IdentifierCustomFieldName?: string;
  InquiryID?: number;
  InquiryName?: string;
  IsExternal: boolean;
  /**
  * Entity type: LoyaltyProgram
  */
  LoyaltyProgramID?: number;
  LoyaltyProgramName?: string;
  ManualUserIdentifiers: boolean;
  Name?: string;
  ResubscribeHandling: DataModelsResubscribeHandlingType;
  Type: DataModelsSubscriptionType;
  UserIdentifierCurrentNumber?: number;
  UserIdentifierPrefix?: string;
  UserIdentifierStartNumber?: number;
  UserIdentifierSuffix?: string;
}

/**
* List the UserAgreements
*/
export interface ListUserAgreements extends PagedRequestMessage<UsersListUserAgreementsFilter, ListUserAgreementsResponse> {
}

export interface ListUserAgreementsResponse extends PagedResponseMessage<UsersListUserAgreementsResponse_UserAgreement> {
}

export interface UsersListUserAgreementsResponse_OrganizationUnitSetDto {
  BackendID?: string;
  /**
  * Entity type: OrganizationUnitSet
  */
  ID: number;
  Name?: string;
}

export interface UsersListUserAgreementsResponse_UserAgreement {
  AllowRevoke: boolean;
  BackendID?: string;
  Description?: string;
  /**
  * Entity type: Subscription
  */
  ID: number;
  IsUserRequirement: boolean;
  Name?: string;
  OrganizationUnitSet?: UsersListUserAgreementsResponse_OrganizationUnitSetDto;
  RequireSignature: boolean;
  UsedForDataProcessing: boolean;
  /**
  * Entity type: Script
  */
  UserRequirementScriptID?: number;
}

/**
* Get all personalized promotions for the logged in user or the given user.
*/
export interface ListUserPersonalizedPromotions extends RequestMessage<ListUserPersonalizedPromotionsResponse> {
  /**
  * Entity type: User
  */
  UserID?: number;
}

export interface ListUserPersonalizedPromotionsResponse extends ResponseMessage {
  PersonalizedPromotions?: UsersListUserPersonalizedPromotionsResponse_PersonalizedPromotion[];
}

export interface UsersListUserPersonalizedPromotionsResponse_PersonalizedPromotion {
  BackendID?: string;
  Description?: string;
  /**
  * Entity type: PersonalizedPromotion
  */
  ID: number;
  IsLocked: boolean;
  LockAfterFirstApply: boolean;
  MaximumDistinctProducts?: number;
  Name?: string;
}

/**
* List the UserRequirementSets.
*/
export interface ListUserRequirementSets extends FilteredPagedResultRequest<UsersUserRequirementsListUserRequirementSetsFilter, ListUserRequirementSetsResponse> {
}

export interface ListUserRequirementSetsResponse extends PagedResultResponse<UsersListUserRequirementSetsResponse_UserRequirementSetDto> {
}

export interface UsersListUserRequirementSetsResponse_UserRequirementSetDto {
  /**
  * Entity type: UserRequirementSet
  */
  ID: number;
  Name: string;
  OrganizationUnitSetDescription?: string;
  /**
  * Entity type: OrganizationUnitSet
  */
  OrganizationUnitSetID: number;
  OrganizationUnitSetName?: string;
  OrganizationUnitSetType?: DataModelsOrganizationUnitSetTypes;
}

/**
* List the UserRequirements.
*/
export interface ListUserRequirements extends FilteredPagedResultRequest<UsersUserRequirementsListUserRequirementsFilter, ListUserRequirementsResponse> {
}

export interface ListUserRequirementsResponse extends PagedResultResponse<UsersListUserRequirementsResponse_UserRequirementDto> {
}

export interface UsersListUserRequirementsResponse_UserRequirementDto {
  AccountType?: DataModelsUserAccountType;
  CustomValidators?: Record<string,TAnyValue | null>;
  Display: boolean;
  /**
  * Entity type: UserRequirement
  */
  ID: number;
  Preferred: boolean;
  Property: string;
  RequiredFor: UsersUserRequirementsUserRequirementFor;
  /**
  * Entity type: Script
  */
  ScriptID?: number;
  /**
  * Entity type: ShippingMethod
  */
  ShippingMethodID?: number;
  /**
  * Entity type: Subscription
  */
  SubscriptionID?: number;
  /**
  * Entity type: UserRequirementSet
  */
  UserRequirementSetID?: number;
  UserRequirementSetName?: string;
  UserType?: UserTypes;
}

/**
* The service enables endpoints to push user subscriptions based on the user backend id and subscription backend id.
* Multiple subscriptions can be pushed at once.
* 
* Additionally, a SubscriptionID and Balance can be provided
* NOTE THAT Only subscriptions that allow for local storage can be pushed. Subscriptions fully depending on external services cannot be pushed.
* NOTE THAT Balance can only be provided for loyalty subscriptions that have a EVA loyalty handler.
*/
export interface PushUserSubscription extends RequestMessageWithEmptyResponse {
  Balance?: number;
  IsSubscribed?: boolean;
  SubscribedOn?: string;
  /**
  * Entity type: Subscription
  */
  SubscriptionID: number;
  /**
  * Entity type: User
  */
  UserID: number;
  UserSubscriptionIdentifier?: string;
  UserSubscriptionSourceIdentifier?: string;
  UserUnsubscribeReason?: string;
}

/**
* Set selected products for personalized promotion for the logged in user or the given user. Overwrites existing selection.
*/
export interface SelectUserPersonalizedPromotionProducts extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: PersonalizedPromotion
  */
  PersonalizedPromotionID: number;
  /**
  * Entity type: Product
  */
  ProductIDs?: number[];
  /**
  * Entity type: User
  */
  UserID?: number;
}

/**
* Unblock a users subscription.
*/
export interface UnblockUserSubscription extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: Subscription
  */
  SubscriptionID: number;
  /**
  * Entity type: User
  */
  UserID: number;
}

/**
* Update an existing Subscription
*/
export interface UpdateSubscription extends RequestMessageWithEmptyResponse {
  /**
  * Indicates if the subscription can be unsubscribed and if so, who can do the unsubscribe.
  */
  AllowUnsubscribeBy?: DataModelsAllowUnsubscribeByType;
  /**
  * The (optional) BackendID of the subscription
  */
  BackendID?: string | null;
  Description?: string | null;
  /**
  * Entity type: Subscription
  */
  ID: number;
  /**
  * Entity type: CustomField
  * The (optional) custom field the UserIdentifier of the subscription is written back to. Values from in the custom field are informational only.
  */
  IdentifierCustomFieldID?: number | null;
  /**
  * Entity type: Inquiry
  */
  InquiryID?: number | null;
  /**
  * When set to true, subscribing the user will require a UserIdentifier to be given.
  */
  ManualUserIdentifiers?: boolean;
  /**
  * The name of the subscription
  */
  Name?: string;
  /**
  * Handling when a user is unsubscribed and re-subscribes.
  */
  ResubscribeHandling?: DataModelsResubscribeHandlingType;
  UserIdentifierPrefix?: string | null;
  UserIdentifierStartNumber?: number | null;
  UserIdentifierSuffix?: string | null;
}

/**
* Updates an existing SubscriptionOrganizationUnitSet.
*/
export interface UpdateSubscriptionOrganizationUnitSet extends RequestMessageWithEmptyResponse {
  ConfirmationRequired?: boolean;
  Default?: boolean;
  Enabled?: boolean;
  Hidden?: boolean;
  /**
  * Entity type: SubscriptionOrganizationUnitSet
  */
  ID: number;
  /**
  * Entity type: OrganizationUnitSet
  */
  OrganizationUnitSetID?: number;
  Preferred?: boolean;
  Priority?: number;
  SubscriptionConfirmation?: DataModelsSubscriptionConfirmation;
  /**
  * Entity type: Subscription
  */
  SubscriptionID?: number;
}

/**
* Update all UserRequirements on a Subscription.
* 
* Updates the given requirements and removes all other requirements from the Subscription
*/
export interface UpdateSubscriptionUserRequirements extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: Subscription
  */
  ID: number;
  Requirements: UsersUpdateSubscriptionUserRequirements_UserRequirementDto[];
}

export interface UsersUpdateSubscriptionUserRequirements_UserRequirementDto {
  AccountType?: DataModelsUserAccountType;
  CustomValidators?: Record<string,TAnyValue | null> | null;
  Display?: boolean;
  /**
  * Entity type: UserRequirement
  */
  ID?: number;
  Preferred?: boolean;
  Property?: string | null;
  RequiredFor?: UsersUserRequirementsUserRequirementFor;
  UserType?: UserTypes;
}

/**
* Update an existing UserAgreement
*/
export interface UpdateUserAgreement extends RequestMessageWithEmptyResponse {
  AllowRevoke?: boolean;
  BackendID?: string | null;
  Description?: string | null;
  /**
  * Entity type: Subscription
  */
  ID: number;
  IsUserRequirement?: boolean;
  Name?: string;
  RequireSignature?: boolean;
  /**
  * Entity type: Script
  */
  UserRequirementScriptID?: number | null;
}

/**
* Update an existing UserOrigin
*/
export interface UpdateUserOrigin extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: UserOrigin
  */
  BackendID?: string;
  Description?: string;
  /**
  * Entity type: UserOrigin
  */
  ID: number;
  Name: string;
}

/**
* Updates an existing UserRequirement.
*/
export interface UpdateUserRequirement extends RequestMessageWithEmptyResponse {
  AccountType?: DataModelsUserAccountType;
  CustomValidators?: Record<string,TAnyValue | null> | null;
  Display?: boolean;
  /**
  * Entity type: UserRequirement
  */
  ID: number;
  Preferred?: boolean;
  Property?: string | null;
  RequiredFor?: UsersUserRequirementsUserRequirementFor;
  /**
  * Entity type: Script
  */
  ScriptID?: number | null;
  /**
  * Entity type: ShippingMethod
  */
  ShippingMethodID?: number | null;
  UserType?: UserTypes;
}

/**
* Updates an existing UserRequirementSet.
*/
export interface UpdateUserRequirementSet extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: UserRequirementSet
  */
  ID: number;
  Name?: string;
  /**
  * Entity type: OrganizationUnitSet
  */
  OrganizationUnitSetID?: number;
}

/**
* Update all requirements on a UserRequirementSet.
*/
export interface UpdateUserRequirementSetRequirements extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: UserRequirementSet
  */
  ID: number;
  Requirements?: UsersUpdateUserRequirementSetRequirements_UserRequirementDto[];
}

export interface UsersUpdateUserRequirementSetRequirements_UserRequirementDto {
  AccountType?: DataModelsUserAccountType;
  CustomValidators?: Record<string,TAnyValue | null> | null;
  Display?: boolean;
  /**
  * Entity type: UserRequirement
  */
  ID?: number;
  Preferred?: boolean;
  Property?: string | null;
  RequiredFor?: UsersUserRequirementsUserRequirementFor;
  /**
  * Entity type: Script
  */
  ScriptID?: number | null;
  /**
  * Entity type: ShippingMethod
  */
  ShippingMethodID?: number | null;
  UserType?: UserTypes;
}

/**
* Get the wishlist by ID.
*/
export interface GetWishlist extends RequestMessage<GetWishlistResponse> {
  /**
  * Entity type: Wishlist
  */
  ID: number;
  /**
  * Entity type: ProductPropertyType
  */
  IncludedProperties?: string[];
}

export interface GetWishlistResponse extends ResponseMessage {
  CreatedByEmployee: boolean;
  CreatedOn: string;
  /**
  * Entity type: CustomField
  */
  CustomFieldValuesWithOptions?: Record<string,DataModelsCustomFieldValueWithOptions>;
  Description?: string;
  FirstProduct?: SearchIProductSearchItem;
  HiddenFromUser: boolean;
  /**
  * Entity type: Wishlist
  */
  ID: number;
  IsShared: boolean;
  LastModifiedOn?: string;
  LastReadTime: string;
  Name?: string;
  Products?: SearchIProductSearchItem[];
  UserFullName?: string;
  /**
  * Entity type: User
  */
  UserID: number;
}

/**
* List the wishlists.
*/
export interface ListWishlists extends PagedRequestMessage<WishlistsListWishlistsFilter, ListWishlistsResponse> {
  /**
  * Entity type: ProductPropertyType
  */
  IncludedProperties?: string[];
}

export interface ListWishlistsResponse extends PagedResponseMessage<UsersWishlistsListWishlistsResponse_Wishlist> {
}

export interface UsersWishlistsListWishlistsResponse_Wishlist {
  CreatedByEmployee: boolean;
  CreatedOn: string;
  Description?: string;
  FirstProduct?: SearchIProductSearchItem;
  HiddenFromUser: boolean;
  /**
  * Entity type: Wishlist
  */
  ID: number;
  IsShared: boolean;
  ItemCount: number;
  LastModifiedOn: string;
  LastReadTime: string;
  Name?: string;
  UserFullName?: string;
  /**
  * Entity type: User
  */
  UserID: number;
}

/**
* Create or update a VisibilityGroup to VisibilityGroup configuration.
*/
export interface CreateOrUpdateVisibilityGroupConfiguration extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: VisibilityGroup
  */
  FromID: number;
  Orders?: boolean;
  OrganizationUnits?: boolean;
  /**
  * Entity type: VisibilityGroup
  */
  ToID: number;
  Users?: boolean;
}

/**
* Create a new VisibilityGroup.
*/
export interface CreateVisibilityGroup extends RequestMessage<CreateVisibilityGroupResponse> {
  AllowCustomerStandardAccounts?: boolean;
  Description?: string;
  Name: string;
}

export interface CreateVisibilityGroupResponse extends ResponseMessage {
  /**
  * Entity type: VisibilityGroup
  */
  ID: number;
}

/**
* Delete a VisibilityGroup
*/
export interface DeleteVisibilityGroup extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: VisibilityGroup
  */
  ID: number;
}

/**
* Delete a VisibilityGroup to VisibilityGroup configuration
*/
export interface DeleteVisibilityGroupConfiguration extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: VisibilityGroup
  */
  FromID: number;
  /**
  * Entity type: VisibilityGroup
  */
  ToID: number;
}

/**
* Gets an VisibilityGroup by its ID and returns the basic information.
*/
export interface GetVisibilityGroupByID extends RequestMessage<GetVisibilityGroupByIDResponse> {
  /**
  * Entity type: VisibilityGroup
  */
  ID: number;
}

export interface GetVisibilityGroupByIDResponse extends ResponseMessage {
  AllowCustomerStandardAccounts: boolean;
  Description?: string;
  /**
  * Entity type: VisibilityGroup
  */
  ID: number;
  Name: string;
}

/**
* Gets an VisibilityGroup to VisibilityGroup configuration by its unique identifiers and returns the basic information.
*/
export interface GetVisibilityGroupConfiguration extends RequestMessage<GetVisibilityGroupConfigurationResponse> {
  /**
  * Entity type: VisibilityGroup
  */
  FromID: number;
  /**
  * Entity type: VisibilityGroup
  */
  ToID: number;
}

export interface GetVisibilityGroupConfigurationResponse extends ResponseMessage {
  From: VisibilityGroupsGetVisibilityGroupConfigurationResponse_VisibilityGroupDto;
  Orders: boolean;
  OrganizationUnits: boolean;
  To: VisibilityGroupsGetVisibilityGroupConfigurationResponse_VisibilityGroupDto;
  Users: boolean;
}

export interface VisibilityGroupsGetVisibilityGroupConfigurationResponse_VisibilityGroupDto {
  /**
  * Entity type: VisibilityGroup
  */
  ID: number;
  Name: string;
}

/**
* List VisibilityGroupVisibilityGroups. Returns a paged response.
*/
export interface ListVisibilityGroupConfigurations extends FilteredPagedResultRequest<VisibilityGroupsListVisibilityGroupConfigurationsFilter, ListVisibilityGroupConfigurationsResponse> {
}

export interface ListVisibilityGroupConfigurationsResponse extends PagedResultResponse<VisibilityGroupsListVisibilityGroupConfigurationsResponse_VisibilityGroupVisibilityGroupDto> {
}

export interface VisibilityGroupsListVisibilityGroupConfigurationsResponse_VisibilityGroupDto {
  /**
  * Entity type: VisibilityGroup
  */
  ID: number;
  Name: string;
}

export interface VisibilityGroupsListVisibilityGroupConfigurationsResponse_VisibilityGroupVisibilityGroupDto {
  From: VisibilityGroupsListVisibilityGroupConfigurationsResponse_VisibilityGroupDto;
  Orders: boolean;
  OrganizationUnits: boolean;
  To: VisibilityGroupsListVisibilityGroupConfigurationsResponse_VisibilityGroupDto;
  Users: boolean;
}

/**
* List VisibilityGroups. Returns a paged response.
*/
export interface ListVisibilityGroups extends FilteredPagedResultRequest<VisibilityGroupsListVisibilityGroupsFilter, ListVisibilityGroupsResponse> {
}

export interface ListVisibilityGroupsResponse extends PagedResultResponse<VisibilityGroupsListVisibilityGroupsResponse_VisibilityGroupDto> {
}

export interface VisibilityGroupsListVisibilityGroupsResponse_VisibilityGroupDto {
  AllowCustomerStandardAccounts: boolean;
  Description?: string;
  /**
  * Entity type: VisibilityGroup
  */
  ID: number;
  Name: string;
}

/**
* Update an existing VisibilityGroup.
*/
export interface UpdateVisibilityGroup extends RequestMessageWithEmptyResponse {
  AllowCustomerStandardAccounts?: boolean;
  Description?: string | null;
  /**
  * Entity type: VisibilityGroup
  */
  ID: number;
  Name?: string;
}

/**
* Creates a new Widget on a WidgetConfiguration.
*/
export interface CreateWidget extends RequestMessage<CreateWidgetResponse> {
  Data?: WidgetsEmptyWidgetData | WidgetsHandlersBusinessProgramsWidgetData | WidgetsHandlersCustomFieldWidgetData | WidgetsHandlersLoyaltyProgramWidgetData;
  Type: 'APPOINTMENTS' | 'BUSINESSPROGRAM' | 'COMPANY' | 'COUPONS' | 'CUSTOMFIELD' | 'LOYALTYPROGRAM' | 'SMARTSUGGESTIONS' | 'WISHLIST';
  /**
  * Entity type: WidgetConfiguration
  */
  WidgetConfigurationID: number;
}

/**
* Creates a new WidgetConfiguration for the specified OrganizationUnitSet.
*/
export interface CreateWidgetConfiguration extends RequestMessage<CreateWidgetConfigurationResponse> {
  /**
  * Entity type: OrganizationUnitSet
  */
  OrganizationUnitSetID: number;
}

export interface CreateWidgetConfigurationResponse extends ResponseMessage {
  /**
  * Entity type: WidgetConfiguration
  */
  ID: number;
}

export interface CreateWidgetResponse extends ResponseMessage {
  /**
  * Entity type: Widget
  */
  ID: number;
}

/**
* Deletes a Widget by its ID.
*/
export interface DeleteWidget extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: Widget
  */
  ID: number;
}

/**
* Deletes a WidgetConfiguration and all its widgets.
*/
export interface DeleteWidgetConfiguration extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: WidgetConfiguration
  */
  ID: number;
}

/**
* Returns the names of all registered widget types.
*/
export interface GetAvailableWidgetTypes extends RequestMessage<GetAvailableWidgetTypesResponse> {
}

export interface GetAvailableWidgetTypesResponse extends ResponseMessage {
  Types?: string[];
}

/**
* Gets a Widget by its ID.
*/
export interface GetWidget extends RequestMessage<GetWidgetResponse> {
  /**
  * Entity type: Widget
  */
  ID: number;
}

/**
* Gets a WidgetConfiguration by its ID, including all connected widgets.
*/
export interface GetWidgetConfiguration extends RequestMessage<GetWidgetConfigurationResponse> {
  /**
  * Entity type: WidgetConfiguration
  */
  ID: number;
}

export interface GetWidgetConfigurationResponse extends ResponseMessage {
  /**
  * Entity type: WidgetConfiguration
  */
  ID: number;
  /**
  * Entity type: OrganizationUnitSet
  */
  OrganizationUnitSetID: number;
  Widgets?: WidgetsGetWidgetConfigurationResponse_WidgetDto[];
}

export interface WidgetsGetWidgetConfigurationResponse_WidgetDto {
  Data?: WidgetsEmptyWidgetData | WidgetsHandlersBusinessProgramsWidgetData | WidgetsHandlersCustomFieldWidgetData | WidgetsHandlersLoyaltyProgramWidgetData;
  /**
  * Entity type: Widget
  */
  ID: number;
  Sequence: number;
  Type?: 'APPOINTMENTS' | 'BUSINESSPROGRAM' | 'COMPANY' | 'COUPONS' | 'CUSTOMFIELD' | 'LOYALTYPROGRAM' | 'SMARTSUGGESTIONS' | 'WISHLIST';
}

export interface GetWidgetResponse extends ResponseMessage {
  Data?: WidgetsEmptyWidgetData | WidgetsHandlersBusinessProgramsWidgetData | WidgetsHandlersCustomFieldWidgetData | WidgetsHandlersLoyaltyProgramWidgetData;
  /**
  * Entity type: Widget
  */
  ID: number;
  Sequence: number;
  Type?: 'APPOINTMENTS' | 'BUSINESSPROGRAM' | 'COMPANY' | 'COUPONS' | 'CUSTOMFIELD' | 'LOYALTYPROGRAM' | 'SMARTSUGGESTIONS' | 'WISHLIST';
  /**
  * Entity type: WidgetConfiguration
  */
  WidgetConfigurationID: number;
}

/**
* Lists WidgetConfigurations with OU set filtering.
*/
export interface ListWidgetConfigurations extends FilteredPagedResultRequest<WidgetsListWidgetConfigurationsFilter, ListWidgetConfigurationsResponse> {
}

export interface ListWidgetConfigurationsResponse extends PagedResultResponse<WidgetsListWidgetConfigurationsResponse_WidgetConfigurationDto> {
}

export interface WidgetsListWidgetConfigurationsResponse_WidgetConfigurationDto {
  /**
  * Entity type: WidgetConfiguration
  */
  ID: number;
  /**
  * Entity type: OrganizationUnitSet
  */
  OrganizationUnitSetID: number;
  OrganizationUnitSetName?: string;
}

/**
* Sets the order of widgets within a widget configuration. All widget IDs belonging to the configuration must be provided in the desired order.
*/
export interface SetWidgetSequences extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: WidgetConfiguration
  */
  WidgetConfigurationID: number;
  /**
  * Entity type: Widget
  * All widget IDs in the desired display order.
  */
  WidgetIDs: number[];
}

/**
* Updates an existing Widget.
*/
export interface UpdateWidget extends RequestMessageWithEmptyResponse {
  Data?: WidgetsEmptyWidgetData | WidgetsHandlersBusinessProgramsWidgetData | WidgetsHandlersCustomFieldWidgetData | WidgetsHandlersLoyaltyProgramWidgetData | null;
  /**
  * Entity type: Widget
  */
  ID: number;
}

/**
* Adds or updates the given products to the assortment.
* 
* When the given products are all root products, the request will automaticly update all childeren.
* But if the list is a mixed product list, all updates will be applied according to the given information.
*/
export interface AddProductsToAssortment extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: Assortment
  */
  AssortmentID: number;
  ProductSearch?: SearchSimpleProductSearchModel;
  /**
  * Specific product IDs that will be added to the assortment.
  */
  Products?: EVACoreServicesAssortmentsAddProductsToAssortment_AssortmentProduct[];
  /**
  * Only update products that are already part of the assortment
  */
  UpdateOnly?: boolean;
}

export interface EVACoreServicesAssortmentsAddProductsToAssortment_AssortmentProduct {
  AnnouncementDate?: string;
  EndDate?: string;
  IgnoreAnnouncementDateToChildProducts?: boolean;
  IgnoreEndDateToChildProducts?: boolean;
  IgnorePreSaleDateToChildProducts?: boolean;
  IgnoreShipmentDateToChildProducts?: boolean;
  IgnoreStartDateToChildProducts?: boolean;
  PreSaleDate?: string;
  /**
  * Entity type: Product
  */
  ProductID: number;
  ProductStatus?: DataModelsProductStatus;
  ProductStatusesToIgnoreToChildProducts?: DataModelsProductStatus;
  ShipmentDate?: string;
  StartDate?: string;
}

/**
* Attach an assortment to specified organization units or -set
*/
export interface AttachAssortmentToOrganizationUnit extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: Assortment
  */
  ID: number;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitIDs?: number[];
  /**
  * Entity type: OrganizationUnitSet
  */
  OrganizationUnitSetID?: number;
}

/**
* Create a new assortment.
* You can provide either OrganizationUnitIDs or and OrganizationUnitSetID (which will translate to OrganizationUnitIDs) to be attached to the assortment that is being created.
* OrganizationUnitIDs will take precedence over OrganizationUnitSetID.
*/
export interface CreateAssortment extends RequestMessage<CreateAssortmentResponse> {
  Code?: string;
  Name: string;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitIDs?: number[];
  /**
  * Entity type: OrganizationUnitSet
  */
  OrganizationUnitSetID?: number;
  /**
  * Products to add to the assortment.
  */
  Products?: EVACoreServicesAssortmentsCreateAssortment_AssortmentProduct[];
}

export interface EVACoreServicesAssortmentsCreateAssortment_AssortmentProduct {
  AnnouncementDate?: string;
  EndDate?: string;
  PreSaleDate?: string;
  /**
  * Entity type: Product
  */
  ProductID: number;
  ProductStatus?: DataModelsProductStatus;
  ShipmentDate?: string;
  StartDate?: string;
}

export interface CreateAssortmentResponse extends ResponseMessage {
  /**
  * Entity type: Assortment
  */
  ID: number;
}

/**
* Delete an existing assortment
*/
export interface DeleteAssortment extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: Assortment
  */
  ID: number;
}

/**
* Returns an Excel file that contains all products in an assortment, which can then be updated and reuploaded using UploadAssortmentProducts.
*/
export interface DownloadAssortmentProducts extends RequestMessageWithResourceResponse {
  /**
  * Entity type: Assortment
  */
  AssortmentID: number;
}

export interface DownloadAssortmentProducts_Async extends DownloadAssortmentProducts {
}

export interface DownloadAssortmentProducts_AsyncResponse extends AsyncRequestHandlingAsyncRequestResponse {
}

export interface DownloadAssortmentProducts_AsyncResult extends AsyncRequestHandlingAsyncRequestResultRequest {
}

/**
* Get an existing Assortment by ID
*/
export interface GetAssortmentByID extends RequestMessage<GetAssortmentByIDResponse> {
  /**
  * Entity type: Assortment
  */
  ID: number;
}

export interface GetAssortmentByIDResponse extends ResponseMessage {
  Code?: string;
  /**
  * Entity type: Assortment
  */
  ID: number;
  IsDefault: boolean;
  Name?: string;
}

/**
* Get all OrganizationUnits that are connected to the Assortment
*/
export interface GetAssortmentOrganizationUnits extends RequestMessage<GetAssortmentOrganizationUnitsResponse> {
  /**
  * Entity type: Assortment
  */
  ID: number;
}

export interface GetAssortmentOrganizationUnitsResponse extends ResponseMessage {
  OrganizationUnits?: EVACoreServicesAssortmentsGetAssortmentOrganizationUnitsResponse_OrganizationUnitDTO[];
}

export interface EVACoreServicesAssortmentsGetAssortmentOrganizationUnitsResponse_OrganizationUnitDTO {
  /**
  * Entity type: OrganizationUnit
  */
  ID: number;
  Name?: string;
}

/**
* Returns a paged result of root products in an assortment.
*/
export interface GetAssortmentProductTree extends RequestMessage<GetAssortmentProductTreeResponse> {
  /**
  * Entity type: Assortment
  */
  AssortmentID: number;
  /**
  * Entity type: ProductPropertyType
  */
  IncludedFields?: string[];
  /**
  * Entity type: Product
  */
  ProductID: number;
}

export interface GetAssortmentProductTreeResponse extends ResponseMessage {
  Parent?: EVACoreServicesAssortmentsGetAssortmentProductTreeResponse_GetAssortmentProductTreeProduct;
}

export interface EVACoreServicesAssortmentsGetAssortmentProductTreeResponse_GetAssortmentProductTreeProduct {
  AnnouncementDate?: string;
  Children?: EVACoreServicesAssortmentsGetAssortmentProductTreeResponse_GetAssortmentProductTreeProduct[];
  EndDate?: string;
  IsIncludedInAssortment: boolean;
  IsRequestedProduct: boolean;
  MixedProductStatuses: DataModelsProductStatus;
  PreSaleDate?: string;
  /**
  * Entity type: Product
  */
  ProductBackendID?: string;
  ProductDetails?: SearchIProductSearchItem;
  /**
  * Entity type: Product
  */
  ProductID: number;
  ProductStatus: DataModelsProductStatus;
  ProductType: DataModelsProductTypes;
  ShipmentDate?: string;
  StartDate?: string;
}

/**
* Returns a paged result of root products in an assortment.
*/
export interface GetAssortmentRootProducts extends RequestMessage<GetAssortmentRootProductsResponse> {
  /**
  * Entity type: Assortment
  */
  AssortmentID: number;
  /**
  * Entity type: ProductPropertyType
  */
  IncludedFields?: string[];
  PageConfig?: PageConfig<Record<string,string | null> | null>;
}

export interface GetAssortmentRootProductsResponse extends PagedResultResponse<EVACoreServicesAssortmentsGetAssortmentRootProductsResponse_AssortmentProduct> {
}

export interface EVACoreServicesAssortmentsGetAssortmentRootProductsResponse_AssortmentProduct {
  AnnouncementDate?: string;
  EndDate?: string;
  HasChildren: boolean;
  IsPartiallyIncludedInAssortment: boolean;
  MixedProductStatuses: DataModelsProductStatus;
  PreSaleDate?: string;
  ProductBackendID?: string;
  ProductDetails?: SearchIProductSearchItem;
  /**
  * Entity type: Product
  */
  ProductID: number;
  ProductStatus: DataModelsProductStatus;
  ProductType: DataModelsProductTypes;
  ShipmentDate?: string;
  StartDate?: string;
}

/**
* Returns a paged result of all products in all assortments, unless a filter is provided on AssortmentID or ProductID.
* In this manner, you can either get all products for an assortment (by filtering on AssortmentID), all assortments for a product (by filtering on ProductID)
* or to get a specific product in an assortment by filtering on both.
*/
export interface ListAssortmentProducts extends RequestMessage<ListAssortmentProductsResponse> {
  PageConfig?: PageConfig<ProductsListAssortmentProductsFilter>;
}

export interface ListAssortmentProductsResponse extends PagedResultResponse<EVACoreServicesAssortmentsListAssortmentProductsResponse_AssortmentProduct> {
}

export interface EVACoreServicesAssortmentsListAssortmentProductsResponse_AssortmentProduct {
  AnnouncementDate?: string;
  AssortmentCode?: string;
  /**
  * Entity type: Assortment
  */
  AssortmentID: number;
  AssortmentName?: string;
  EndDate?: string;
  PreSaleDate?: string;
  /**
  * Entity type: Product
  */
  ProductBackendID?: string;
  ProductCustomID?: string;
  /**
  * Entity type: Product
  */
  ProductID: number;
  ProductStatus: DataModelsProductStatus;
  ProductType: DataModelsProductTypes;
  ShipmentDate?: string;
  StartDate?: string;
}

/**
* List existing assortments
*/
export interface ListAssortments extends FilteredPagedResultRequest<ProductsListAssortmentsFilter, ListAssortmentsResponse> {
}

export interface ListAssortmentsResponse extends PagedResultResponse<EVACoreServicesAssortmentsListAssortmentsResponse_AssortmentDto> {
}

export interface EVACoreServicesAssortmentsListAssortmentsResponse_AssortmentDto {
  Code?: string;
  /**
  * Entity type: Assortment
  */
  ID: number;
  IsDefault: boolean;
  Name?: string;
}

/**
* Removes products from an assortment. When the product is not part of the assortment an error is returned.
*/
export interface RemoveProductsFromAssortment extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: Assortment
  */
  AssortmentID: number;
  /**
  * Entity type: Product
  */
  ProductIDs?: number[];
}

/**
* Update an existing assortment
*/
export interface UpdateAssortment extends RequestMessageWithEmptyResponse {
  Code?: string;
  /**
  * Entity type: Assortment
  */
  ID: number;
  Name?: string;
}

/**
* Performs a bulk update of an assortment's products.
* The data for this service can be gotten by first calling DownloadAssortmentProducts, then make your changes and reupload it using this service.
*/
export interface UploadAssortmentProducts extends RequestMessage<UploadAssortmentProductsResponse> {
  /**
  * Entity type: Assortment
  */
  AssortmentID: number;
  Data: string;
  /**
  * When a product is currently part of the assortment but is not present in the Excel that is uploaded, it's removed from the assortment.
  */
  DeleteMissing?: boolean;
}

export interface UploadAssortmentProductsResponse extends ResponseMessage {
  Messages?: string[];
}

export interface ExportGeneralLedgerSummaryToExcel extends RequestMessageWithEmptyResponse {
  Filter?: FinanceListGeneralLedgersFilter;
}

export interface CreateFraudItem extends RequestMessage<CreateFraudItemResponse> {
  Data?: string;
  Object?: TAnyValue;
  Type?: DataModelsFraudDataType;
  TypeID?: number;
}

export interface CreateFraudItemResponse extends ResponseMessage {
  /**
  * Entity type: FraudItem
  */
  ID: number;
}

export interface DeleteFraudItem extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: FraudItem
  */
  ID: number;
}

export interface DownloadFraudItems extends RequestMessage<ResourceResponseMessage> {
}

export interface GetFraudItem extends RequestMessage<GetFraudItemResponse> {
  /**
  * Entity type: FraudItem
  */
  ID: number;
}

export interface GetFraudItemResponse extends ResponseMessage {
  Data?: string;
  /**
  * Entity type: FraudItem
  */
  ID: number;
  Object?: TAnyValue;
  Type: DataModelsFraudDataType;
  TypeID: number;
}

export interface ListFraudItems extends FilteredPagedResultRequest<AddressesListFraudItemsFilter, ListFraudItemsResponse> {
}

export interface ListFraudItemsResponse extends PagedResultResponse<EVACoreServicesFraudListFraudItemsResponse_Item> {
}

export interface EVACoreServicesFraudListFraudItemsResponse_Item {
  Data?: string;
  /**
  * Entity type: FraudItem
  */
  ID: number;
  Object?: TAnyValue;
  Type: DataModelsFraudDataType;
  TypeID: number;
}

export interface UpdateFraudItem extends RequestMessageWithEmptyResponse {
  Data?: string;
  /**
  * Entity type: FraudItem
  */
  ID: number;
  Object?: TAnyValue;
}

export interface UploadFraudItems extends RequestMessageWithEmptyResponse {
  Data: string;
}

/**
* Generates a sample file for `UploadSalesOrderExcel` service
*/
export interface GenerateSalesOrderExcelSample extends RequestMessage<ResourceResponseMessage> {
}

/**
* Uploads a new sales order, attached to specified customer (but not paid, placed, or anything!)
*/
export interface UploadSalesOrderExcel extends RequestMessageWithEmptyResponse {
  Data: string;
  EmailAddress?: string;
}

export interface ExportUnshippedPurchaseOrdersToExcel extends RequestMessage<ExportUnshippedPurchaseOrdersToExcelResponse> {
  /**
  * Entity type: OrganizationUnit
  */
  ShipFromOrganizationUnitID: number;
}

export interface ExportUnshippedPurchaseOrdersToExcelResponse extends ResponseMessage {
  DownloadUrl?: string;
}

export interface GeneratePurchaseOrderExcelSample extends RequestMessage<ResourceResponseMessage> {
}

export interface ProcessUnshippedPurchaseOrdersFromExcel extends RequestMessageWithEmptyResponse {
  Data: string;
}

export interface UploadPurchaseOrderExcel extends RequestMessageWithEmptyResponse {
  Data: string;
}

export interface DownloadInitialInventorySample extends RequestMessageWithResourceResponse {
}

export interface ListRestockedProducts extends RequestMessage<ListRestockedProductsResponse> {
  From: string;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID: number;
  /**
  * Entity type: StockLabel
  */
  StockLabelIDs?: number[];
  To?: string;
}

export interface ListRestockedProductsResponse extends ResponseMessage {
  /**
  * Entity type: StockLabel
  */
  Results?: Record<string,number[] | null>;
}

/**
* List the Stock per product/stocklabel for a subset of OrganizationUnits.
* 
* The page size `Limit` has a maximum value of `1.024` for this service (unless `DownloadOverview` is `true`).
* 
* If neither `OrganizationUnitIDs` nor `OrganizationUnitSetID` are specified, the service will return an empty result.
*/
export interface ListStockForOrganizationUnits extends FilteredPagedResultRequest<EVACoreServicesStockListStockForOrganizationUnitsFilter, ListStockForOrganizationUnitsResponse> {
  /**
  * View the stock on a certain moment in time
  */
  DateTime?: string;
  /**
  * When specified, the response will contain an `Url` instead to download the Excel from
  */
  DownloadOverview?: boolean;
  /**
  * If specified as true, stock with a quantity of zero is also returned by this service. Defaults to false, meaning that products with a zero stock quantity will not be returned by this service.
  */
  IncludeZeroQuantityStock?: boolean;
  /**
  * Entity type: OrganizationUnit
  * The organization units to list the stock for, will be ignored if `OrganizationUnitSetID` is specified
  */
  OrganizationUnitIDs?: number[];
  /**
  * Entity type: OrganizationUnitSet
  * The organization units to list the stock for, when specified, `OrganizationUnitIDs` will be ignored
  */
  OrganizationUnitSetID?: number;
  /**
  * Filter on products, is used as input in ElasticSearch
  */
  Query?: string;
}

export interface EVACoreServicesStockListStockForOrganizationUnitsFilter {
  BackendID?: string;
  Barcode?: string;
  CustomID?: string;
  /**
  * Entity type: Product
  * Will be ignored if `ProductIDs` is specified
  */
  ProductID?: number;
  /**
  * Entity type: Product
  * If other `BackendID` and/or `CustomID` are specified as well, only products that match all those filters will be returned
  */
  ProductIDs?: number[];
  /**
  * If other filters are specified as well, only products matching all the filters will be returned
  */
  SerialNumber?: string;
  /**
  * Entity type: StockLabel
  */
  StockLabelID?: number;
}

export interface ListStockForOrganizationUnitsResponse extends PagedResultResponse<EVACoreServicesStockListStockForOrganizationUnitsResponse_StockDto> {
  /**
  * Entity type: Product
  */
  Products?: Record<string,EVACoreServicesStockListStockForOrganizationUnitsResponse_ProductDto>;
  Url?: string;
}

export interface EVACoreServicesStockListStockForOrganizationUnitsResponse_ProductDto {
  CurrencyID?: string;
  IsElevatedProduct: boolean;
  Product?: SearchIProductSearchItem;
  SerialNumberRequirementID?: number;
  TaxCodeID: number;
  TaxRate: number;
  UnitCost: number;
  UnitPrice: number;
  UnitPriceInTax: number;
}

export interface EVACoreServicesStockListStockForOrganizationUnitsResponse_StockDto {
  OrganizationUnitCurrencyID?: string;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID?: number;
  OrganizationUnitName?: string;
  /**
  * Entity type: Product
  */
  ProductID: number;
  QuantityAvailable: number;
  QuantityCommitted: number;
  QuantityOnHand: number;
  /**
  * Entity type: StockLabel
  */
  StockLabel: number;
  StockLabelName?: string;
  StockProducts?: EVACoreServicesStockListStockForOrganizationUnitsResponse_StockDto[];
  /**
  * Entity type: TaxCode
  */
  TaxCodeID: number;
  TaxRate: number;
  /**
  * `UnitPriceInTax` times the `QuantityOnHand`. Rounded to the currency's precision
  */
  TotalAmountInTax: number;
  /**
  * `UnitCost` times the `QuantityOnHand`. Rounded to the currency's precision
  */
  TotalUnitCost: number;
  UnitCost: number;
  UnitPrice: number;
  UnitPriceInTax: number;
}

export interface UploadInitialInventory extends RequestMessage<UploadInitialInventoryResponse> {
  Data: string;
  IgnoreInTransitStock?: boolean;
}

export interface UploadInitialInventoryResponse extends ResponseMessage {
  Messages?: string[];
}

/**
* Register user bought product.
*/
export interface AddUserBoughtProductDetail extends RequestMessage<UserBoughtProductResponse> {
  /**
  * Entity type: Order
  */
  OrderID?: number;
  /**
  * Entity type: OrderLine
  */
  OrderLineID?: number;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID?: number;
  PurchaseDate?: string;
  PurchasedQuantity?: number;
  /**
  * Entity type: UserBoughtProduct
  */
  UserBoughtProductID: number;
}

/**
* Archive the user bought product.
*/
export interface ArchiveUserBoughtProduct extends RequestMessage<EmptyResponseMessage> {
  /**
  * Entity type: UserBoughtProduct
  */
  ID: number;
}

/**
* Deletes a user bought product detail.
*/
export interface DeleteUserBoughtProductDetail extends RequestMessage<EmptyResponseMessage> {
  /**
  * Entity type: UserBoughtProductDetail
  */
  ID: number;
}

/**
* Creates a new PIN login for current user.
* 
* This PIN will only be valid for a limited amount of time, and only for the provided `OrganizationUnitID` (or your current organization unit if left null).
*/
export interface CreateIdentificationPinForEmployee extends RequestMessage<CreateIdentificationPinForEmployeeResponse> {
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID?: number;
  Pin: string;
}

export interface CreateIdentificationPinForEmployeeResponse extends ResponseMessage {
  Pin?: string;
}

export interface GenerateIdentificationPinForEmployee extends RequestMessage<GenerateIdentificationPinForEmployeeResponse> {
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID?: number;
}

export interface GenerateIdentificationPinForEmployeeResponse extends ResponseMessage {
  Pin?: string;
}

/**
* Download an Excel sample which can be filled with employees. The populated excel can be uploaded through the `UploadEmployees` service.
*/
export interface DownloadEmployeesSample extends RequestMessageWithResourceResponse {
}

/**
* Upload the Excel based on the sample from `DownloadEmployeesSample`. The uploaded file will be processed in the background and the results will be mailed to the uploader.
*/
export interface UploadEmployees extends RequestMessageWithEmptyResponse {
  Data: string;
  /**
  * Skip the configured UserRequirement for Employees when processing the excelsheet, these requirements however will be enforced when modifying the employee.
  */
  IgnoreUserRequirements?: boolean;
}

/**
* Get the user bought product by ID.
*/
export interface GetUserBoughtProduct extends RequestMessage<GetUserBoughtProductResponse> {
  /**
  * Entity type: UserBoughtProduct
  */
  ID: number;
  /**
  * Entity type: ProductPropertyType
  */
  IncludedProductProperties?: string[];
}

/**
* Get a user bought product by a product's serial number.
*/
export interface GetUserBoughtProductBySerialNumber extends RequestMessage<GetUserBoughtProductResponse> {
  /**
  * Entity type: ProductPropertyType
  */
  IncludedProductProperties?: string[];
  SerialNumber: string;
}

export interface GetUserBoughtProductResponse extends ResponseMessage {
  AdditionalWarrantyInfo?: string;
  Details?: EVACoreServicesUsersGetUserBoughtProductResponse_Detail[];
  /**
  * Entity type: UserBoughtProduct
  */
  ID: number;
  IsUnderWarranty: boolean;
  LastPurchaseDate?: string;
  LastPurchasedQuantity?: number;
  ManufacturerWarrantyExpiryDate?: string;
  Product?: SearchIProductSearchItem;
  SerialNumber?: string;
  SerialNumberRegistrationStatus?: DataModelsSerialNumberRegistrationStatus;
  TotalPurchasedQuantity?: number;
  UserFullName?: string;
  /**
  * Entity type: User
  */
  UserID: number;
  WarrantyExpiryDate?: string;
}

export interface EVACoreServicesUsersGetUserBoughtProductResponse_Detail {
  BackendID?: string;
  BackendSystemID?: string;
  FromExternal: boolean;
  /**
  * Entity type: UserBoughtProductDetail
  */
  ID: number;
  OrderDisplayID?: string;
  /**
  * Entity type: Order
  */
  OrderID?: number;
  /**
  * Entity type: OrderLine
  */
  OrderLineID?: number;
  /**
  * Entity type: OrganizationUnit
  */
  OrganizationUnitID?: number;
  PurchaseDate?: string;
  PurchasedQuantity?: number;
}

/**
* List the users bought products.
*/
export interface ListUserBoughtProducts extends PagedRequestMessage<UserBoughtProductsListUserBoughtProductsFilter, ListUserBoughtProductsResponse> {
}

export interface ListUserBoughtProductsResponse extends PagedResponseMessage<EVACoreServicesUsersListUserBoughtProductsResponse_BoughtProduct> {
}

export interface EVACoreServicesUsersListUserBoughtProductsResponse_BoughtProduct {
  /**
  * Entity type: UserBoughtProduct
  */
  ID: number;
  IsUnderWarranty: boolean;
  LastPurchaseDate?: string;
  LastPurchasedQuantity?: number;
  ManufacturerWarrantyExpiryDate?: string;
  PrimaryImage?: SearchIProductSearchItemPrimaryImage;
  /**
  * Entity type: Product
  */
  ProductBackendID?: string;
  ProductCustomID?: string;
  /**
  * Entity type: Product
  */
  ProductID: number;
  ProductName?: string;
  SerialNumber?: string;
  TotalPurchasedQuantity?: number;
  UserFullName?: string;
  /**
  * Entity type: User
  */
  UserID: number;
  WarrantyExpiryDate?: string;
}

/**
* Push bought products for users. Only accepts 10000 users per request
*/
export interface EVACoreServicesUsersPushBoughtProductsForUsers extends RequestMessage<PushBoughtProductsForUsersResponse> {
  BoughtProductsForUsers?: EVACoreServicesUsersPushBoughtProductsForUsers_PushedBoughtProductForUser[];
}

export interface EVACoreServicesUsersPushBoughtProductsForUsers_PushedBoughtProductForUser {
  BoughtProducts?: EVACoreServicesUsersPushedBoughtProduct[];
  /**
  * Entity type: User
  */
  UserID: number;
}

export interface PushBoughtProductsForUsersResponse extends ResponseMessage {
  FailedBoughtProductsForUsers?: EVACoreServicesUsersPushBoughtProductsForUsersResponse_FailedUserBoughtProductsForUser[];
  SuccessfulBoughtProductsForUsers?: EVACoreServicesUsersPushBoughtProductsForUsersResponse_SuccessfulUserBoughtProductsForUser[];
}

export interface EVACoreServicesUsersPushBoughtProductsForUsersResponse_BoughtProduct {
  ProductBackendID?: string;
  /**
  * Entity type: Product
  */
  ProductID: number;
  SerialNumber?: string;
}

export interface EVACoreServicesUsersPushBoughtProductsForUsersResponse_FailedUserBoughtProductsForUser {
  BoughtProducts?: EVACoreServicesUsersPushBoughtProductsForUsersResponse_BoughtProduct[];
  UserBackendID?: string;
  /**
  * Entity type: User
  */
  UserID: number;
}

export interface EVACoreServicesUsersPushBoughtProductsForUsersResponse_SuccessfulUserBoughtProductsForUser {
  BoughtProducts?: EVACoreServicesUsersPushBoughtProductsForUsersResponse_BoughtProduct[];
  UserBackendID?: string;
  /**
  * Entity type: User
  */
  UserID: number;
}

export interface PushBoughtProductsForUsers_Async extends EVACoreServicesUsersPushBoughtProductsForUsers {
}

export interface PushBoughtProductsForUsers_AsyncResponse extends AsyncRequestHandlingAsyncRequestResponse {
}

export interface PushBoughtProductsForUsers_AsyncResult extends AsyncRequestHandlingAsyncRequestResultRequest {
}

/**
* Push user bought product.
*/
export interface PushUserBoughtProduct extends RequestMessage<EmptyResponseMessage> {
  BoughtProducts?: EVACoreServicesUsersPushUserBoughtProduct_PushedBoughtProduct[];
  RegistrationBackendSystemID?: string;
  /**
  * Entity type: User
  */
  UserID: number;
}

export interface EVACoreServicesUsersPushUserBoughtProduct_PushedBoughtProduct {
  AdditionalWarrantyInfo?: string | null;
  Archive?: boolean;
  Details?: EVACoreServicesUsersPushUserBoughtProduct_PushedBoughtProductDetail[];
  IsUnderWarranty?: boolean;
  ManufacturerWarrantyExpiryDate?: string | null;
  /**
  * Entity type: Product
  */
  ProductID: number;
  SerialNumber?: string;
  WarrantyExpiryDate?: string | null;
}

export interface EVACoreServicesUsersPushUserBoughtProduct_PushedBoughtProductDetail {
  BackendID?: string;
  /**
  * Entity type: Order
  */
  OrderID?: number;
  /**
  * Entity type: OrderLine
  */
  OrderLineID?: number;
  /**
  * Entity type: OrganizationUnit
  * Organization unit that the user bought product is registered in. Ignored when an order/line organization unit is present. When omitted, registration is under the current organization unit.
  */
  OrganizationUnitID?: string;
  PurchaseDate?: string;
  PurchasedQuantity?: number;
}

export interface EVACoreServicesUsersPushedBoughtProduct {
  AdditionalWarrantyInfo?: string | null;
  Archive?: boolean;
  Details?: EVACoreServicesUsersPushedBoughtProduct_PushedBoughtProductDetail[];
  IsUnderWarranty?: boolean;
  ManufacturerWarrantyExpiryDate?: string | null;
  /**
  * Entity type: Product
  */
  ProductID: number;
  SerialNumber?: string;
  WarrantyExpiryDate?: string | null;
}

export interface EVACoreServicesUsersPushedBoughtProduct_PushedBoughtProductDetail {
  BackendID?: string;
  /**
  * Entity type: Order
  */
  OrderID?: number;
  /**
  * Entity type: OrderLine
  */
  OrderLineID?: number;
  /**
  * Entity type: OrganizationUnit
  * Organization unit that the user bought product is registered in. Ignored when an order/line organization unit is present. When omitted, registration is under the current organization unit.
  */
  OrganizationUnitID?: string;
  PurchaseDate?: string;
  PurchasedQuantity?: number;
}

/**
* Register user bought product.
*/
export interface RegisterUserBoughtProduct extends RequestMessage<UserBoughtProductResponse> {
  AdditionalWarrantyInfo?: string;
  IsUnderWarranty?: boolean;
  ManufacturerWarrantyExpiryDate?: string;
  /**
  * Entity type: Order
  */
  OrderID?: number;
  /**
  * Entity type: OrderLine
  */
  OrderLineID?: number;
  /**
  * Entity type: OrganizationUnit
  * Organization unit that the user bought product is registered in. Ignored when an order/line organization unit is present. When omitted, registration is under the current organization unit.
  */
  OrganizationUnitID?: number;
  /**
  * Entity type: Product
  */
  ProductID: number;
  PurchaseDate?: string;
  PurchasedQuantity?: number;
  SerialNumber?: string;
  /**
  * Entity type: User
  */
  UserID: number;
  WarrantyExpiryDate?: string;
}

/**
* Register user bought product.
*/
export interface UpdateUserBoughtProductDetail extends RequestMessage<EmptyResponseMessage> {
  /**
  * Entity type: UserBoughtProductDetail
  */
  ID: number;
  /**
  * Entity type: Order
  */
  OrderID?: number;
  /**
  * Entity type: OrderLine
  */
  OrderLineID?: number;
  /**
  * Entity type: OrganizationUnit
  * Organization unit that the user bought product is registered in. Ignored when an order/line organization unit is present. When omitted, registration is under the current organization unit.
  */
  OrganizationUnitID?: number;
  PurchaseDate?: string;
  PurchasedQuantity?: number;
}

/**
* Update user bought product warranty.
*/
export interface UpdateUserBoughtProductWarranty extends RequestMessage<EmptyResponseMessage> {
  AdditionalWarrantyInfo?: string;
  IsUnderWarranty?: boolean;
  ManufacturerWarrantyExpiryDate?: string;
  /**
  * Entity type: UserBoughtProduct
  */
  UserBoughtProductID: number;
  WarrantyExpiryDate?: string;
}

export interface UserBoughtProductResponse extends ResponseMessage {
  /**
  * Entity type: UserBoughtProductDetail
  */
  UserBoughtProductDetailID: number;
  /**
  * Entity type: UserBoughtProduct
  */
  UserBoughtProductID: number;
}

