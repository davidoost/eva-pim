import {
  IEvaServiceDefinition,
  EmptyResponseMessage,
  ResourceWithBlobIDResponseMessage,
} from '../eva-services-core';

import {
  CreateWatchtowerCertificate,
  CreateWatchtowerCertificateResponse,
  CreateWatchtowerDevice,
  CreateWatchtowerDeviceResponse,
  CreateWatchtowerVPNConfiguration,
  CreateWatchtowerVPNConfigurationResponse,
  EVAStatus,
  EVAStatusResponse,
  GetABMEnrollmentDetails,
  GetABMEnrollmentDetailsResponse,
  GetABMPublicKey,
  GetABMPublicKeyResponse,
  GetUserForLiveGuard,
  GetUserForLiveGuardResponse,
  ListWatchtowerDevices,
  ListWatchtowerDevicesResponse,
  LiveGuardExecuteTask,
  LiveGuardGenerateApiKey,
  LiveGuardGenerateApiKeyResponse,
  LiveGuardGenerateTrustToken,
  LiveGuardGenerateTrustTokenResponse,
  LiveGuardGetAuditChains,
  LiveGuardGetAuditChainsResponse,
  LiveGuardGetCloudToken,
  LiveGuardGetCloudTokenResponse,
  LiveGuardGetData,
  LiveGuardGetInformation,
  LiveGuardGetInformationResponse,
  LiveGuardGetMapping,
  LiveGuardGetMappingResponse,
  LiveGuardGetStatus,
  LiveGuardGetStatusResponse,
  LiveGuardGetTokenForUser,
  LiveGuardGetTokenForUserResponse,
  LiveGuardGetTOTPSecret,
  LiveGuardGetTOTPSecretResponse,
  LiveGuardGetTrustToken,
  LiveGuardGetTrustTokenResponse,
  LiveGuardPushMetrics,
  LiveGuardPushOrder,
  LiveGuardPushOrderResponse,
  LiveGuardSyncCatalogByBlob,
  LiveGuardSyncCatalogByBlobResponse,
  LiveGuardSyncGeneralByBlob,
  LiveGuardSyncGeneralByBlobResponse,
  LiveGuardSyncUsersByBlob,
  LiveGuardSyncUsersByBlobResponse,
  LiveGuardTriggerSync,
  LiveGuardUpsertOrder,
  LiveGuardUpsertOrderResponse,
  LiveGuardValidateToken,
  LiveGuardValidateTokenResponse,
  PushWatchtowerConfigurationToDevice,
  ToggleLockStatusForWatchtowerDevice,
  UploadABMToken,
  UploadABMTokenResponse,
  WatchtowerExecuteCommand,
  WatchtowerExecuteCommandResponse,
  WatchtowerGetDeviceDetails,
  WatchtowerGetDeviceDetailsResponse,
} from './eva-services-core-live-guard';


export class SvcCreateWatchtowerCertificate implements IEvaServiceDefinition
{
  name = 'CreateWatchtowerCertificate';
  path = '/message/CreateWatchtowerCertificate';
  request?: CreateWatchtowerCertificate;
  response?: CreateWatchtowerCertificateResponse;
}

export class SvcCreateWatchtowerDevice implements IEvaServiceDefinition
{
  name = 'CreateWatchtowerDevice';
  path = '/message/CreateWatchtowerDevice';
  request?: CreateWatchtowerDevice;
  response?: CreateWatchtowerDeviceResponse;
}

export class SvcCreateWatchtowerVPNConfiguration implements IEvaServiceDefinition
{
  name = 'CreateWatchtowerVPNConfiguration';
  path = '/message/CreateWatchtowerVPNConfiguration';
  request?: CreateWatchtowerVPNConfiguration;
  response?: CreateWatchtowerVPNConfigurationResponse;
}

export class SvcEVAStatus implements IEvaServiceDefinition
{
  name = 'EVAStatus';
  path = '/message/EVAStatus';
  request?: EVAStatus;
  response?: EVAStatusResponse;
}

export class SvcGetABMEnrollmentDetails implements IEvaServiceDefinition
{
  name = 'GetABMEnrollmentDetails';
  path = '/message/GetABMEnrollmentDetails';
  request?: GetABMEnrollmentDetails;
  response?: GetABMEnrollmentDetailsResponse;
}

export class SvcGetABMPublicKey implements IEvaServiceDefinition
{
  name = 'GetABMPublicKey';
  path = '/message/GetABMPublicKey';
  request?: GetABMPublicKey;
  response?: GetABMPublicKeyResponse;
}

export class SvcGetUserForLiveGuard implements IEvaServiceDefinition
{
  name = 'GetUserForLiveGuard';
  path = '/message/GetUserForLiveGuard';
  request?: GetUserForLiveGuard;
  response?: GetUserForLiveGuardResponse;
}

export class SvcListWatchtowerDevices implements IEvaServiceDefinition
{
  name = 'ListWatchtowerDevices';
  path = '/message/ListWatchtowerDevices';
  request?: ListWatchtowerDevices;
  response?: ListWatchtowerDevicesResponse;
}

export class SvcLiveGuardExecuteTask implements IEvaServiceDefinition
{
  name = 'LiveGuardExecuteTask';
  path = '/message/LiveGuardExecuteTask';
  request?: LiveGuardExecuteTask;
  response?: EmptyResponseMessage;
}

export class SvcLiveGuardGenerateApiKey implements IEvaServiceDefinition
{
  name = 'LiveGuardGenerateApiKey';
  path = '/message/LiveGuardGenerateApiKey';
  request?: LiveGuardGenerateApiKey;
  response?: LiveGuardGenerateApiKeyResponse;
}

export class SvcLiveGuardGenerateTrustToken implements IEvaServiceDefinition
{
  name = 'LiveGuardGenerateTrustToken';
  path = '/message/LiveGuardGenerateTrustToken';
  request?: LiveGuardGenerateTrustToken;
  response?: LiveGuardGenerateTrustTokenResponse;
}

export class SvcLiveGuardGetAuditChains implements IEvaServiceDefinition
{
  name = 'LiveGuardGetAuditChains';
  path = '/message/LiveGuardGetAuditChains';
  request?: LiveGuardGetAuditChains;
  response?: LiveGuardGetAuditChainsResponse;
}

export class SvcLiveGuardGetCloudToken implements IEvaServiceDefinition
{
  name = 'LiveGuardGetCloudToken';
  path = '/message/LiveGuardGetCloudToken';
  request?: LiveGuardGetCloudToken;
  response?: LiveGuardGetCloudTokenResponse;
}

export class SvcLiveGuardGetData implements IEvaServiceDefinition
{
  name = 'LiveGuardGetData';
  path = '/message/LiveGuardGetData';
  request?: LiveGuardGetData;
  response?: ResourceWithBlobIDResponseMessage;
}

export class SvcLiveGuardGetInformation implements IEvaServiceDefinition
{
  name = 'LiveGuardGetInformation';
  path = '/message/LiveGuardGetInformation';
  request?: LiveGuardGetInformation;
  response?: LiveGuardGetInformationResponse;
}

export class SvcLiveGuardGetMapping implements IEvaServiceDefinition
{
  name = 'LiveGuardGetMapping';
  path = '/message/LiveGuardGetMapping';
  request?: LiveGuardGetMapping;
  response?: LiveGuardGetMappingResponse;
}

export class SvcLiveGuardGetStatus implements IEvaServiceDefinition
{
  name = 'LiveGuardGetStatus';
  path = '/message/LiveGuardGetStatus';
  request?: LiveGuardGetStatus;
  response?: LiveGuardGetStatusResponse;
}

export class SvcLiveGuardGetTokenForUser implements IEvaServiceDefinition
{
  name = 'LiveGuardGetTokenForUser';
  path = '/message/LiveGuardGetTokenForUser';
  request?: LiveGuardGetTokenForUser;
  response?: LiveGuardGetTokenForUserResponse;
}

export class SvcLiveGuardGetTOTPSecret implements IEvaServiceDefinition
{
  name = 'LiveGuardGetTOTPSecret';
  path = '/message/LiveGuardGetTOTPSecret';
  request?: LiveGuardGetTOTPSecret;
  response?: LiveGuardGetTOTPSecretResponse;
}

export class SvcLiveGuardGetTrustToken implements IEvaServiceDefinition
{
  name = 'LiveGuardGetTrustToken';
  path = '/message/LiveGuardGetTrustToken';
  request?: LiveGuardGetTrustToken;
  response?: LiveGuardGetTrustTokenResponse;
}

export class SvcLiveGuardPushMetrics implements IEvaServiceDefinition
{
  name = 'LiveGuardPushMetrics';
  path = '/message/LiveGuardPushMetrics';
  request?: LiveGuardPushMetrics;
  response?: EmptyResponseMessage;
}

export class SvcLiveGuardPushOrder implements IEvaServiceDefinition
{
  name = 'LiveGuardPushOrder';
  path = '/message/LiveGuardPushOrder';
  request?: LiveGuardPushOrder;
  response?: LiveGuardPushOrderResponse;
}

export class SvcLiveGuardSyncCatalogByBlob implements IEvaServiceDefinition
{
  name = 'LiveGuardSyncCatalogByBlob';
  path = '/message/LiveGuardSyncCatalogByBlob';
  request?: LiveGuardSyncCatalogByBlob;
  response?: LiveGuardSyncCatalogByBlobResponse;
}

export class SvcLiveGuardSyncGeneralByBlob implements IEvaServiceDefinition
{
  name = 'LiveGuardSyncGeneralByBlob';
  path = '/message/LiveGuardSyncGeneralByBlob';
  request?: LiveGuardSyncGeneralByBlob;
  response?: LiveGuardSyncGeneralByBlobResponse;
}

export class SvcLiveGuardSyncUsersByBlob implements IEvaServiceDefinition
{
  name = 'LiveGuardSyncUsersByBlob';
  path = '/message/LiveGuardSyncUsersByBlob';
  request?: LiveGuardSyncUsersByBlob;
  response?: LiveGuardSyncUsersByBlobResponse;
}

export class SvcLiveGuardTriggerSync implements IEvaServiceDefinition
{
  name = 'LiveGuardTriggerSync';
  path = '/message/LiveGuardTriggerSync';
  request?: LiveGuardTriggerSync;
  response?: EmptyResponseMessage;
}

export class SvcLiveGuardUpsertOrder implements IEvaServiceDefinition
{
  name = 'LiveGuardUpsertOrder';
  path = '/message/LiveGuardUpsertOrder';
  request?: LiveGuardUpsertOrder;
  response?: LiveGuardUpsertOrderResponse;
}

export class SvcLiveGuardValidateToken implements IEvaServiceDefinition
{
  name = 'LiveGuardValidateToken';
  path = '/message/LiveGuardValidateToken';
  request?: LiveGuardValidateToken;
  response?: LiveGuardValidateTokenResponse;
}

export class SvcPushWatchtowerConfigurationToDevice implements IEvaServiceDefinition
{
  name = 'PushWatchtowerConfigurationToDevice';
  path = '/message/PushWatchtowerConfigurationToDevice';
  request?: PushWatchtowerConfigurationToDevice;
  response?: EmptyResponseMessage;
}

export class SvcToggleLockStatusForWatchtowerDevice implements IEvaServiceDefinition
{
  name = 'ToggleLockStatusForWatchtowerDevice';
  path = '/message/ToggleLockStatusForWatchtowerDevice';
  request?: ToggleLockStatusForWatchtowerDevice;
  response?: EmptyResponseMessage;
}

export class SvcUploadABMToken implements IEvaServiceDefinition
{
  name = 'UploadABMToken';
  path = '/message/UploadABMToken';
  request?: UploadABMToken;
  response?: UploadABMTokenResponse;
}

export class SvcWatchtowerExecuteCommand implements IEvaServiceDefinition
{
  name = 'WatchtowerExecuteCommand';
  path = '/message/WatchtowerExecuteCommand';
  request?: WatchtowerExecuteCommand;
  response?: WatchtowerExecuteCommandResponse;
}

export class SvcWatchtowerGetDeviceDetails implements IEvaServiceDefinition
{
  name = 'WatchtowerGetDeviceDetails';
  path = '/message/WatchtowerGetDeviceDetails';
  request?: WatchtowerGetDeviceDetails;
  response?: WatchtowerGetDeviceDetailsResponse;
}
