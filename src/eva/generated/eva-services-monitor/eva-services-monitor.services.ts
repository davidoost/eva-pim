import {
  IEvaServiceDefinition,
  EmptyResponseMessage,
  ResourceWithBlobIDResponseMessage,
} from '../eva-services-core';

import {
  CreateMonitor,
  CreateMonitorResponse,
  CreateMonitorNotification,
  CreateMonitorNotificationResponse,
  CreateMonitorNotificationEmailRecipient,
  CreateMonitorNotificationEmailRecipientResponse,
  CreateMonitorRoleOwner,
  CreateMonitorRoleOwnerResponse,
  DeleteMonitor,
  DeleteMonitorNotification,
  DeleteMonitorNotificationEmailRecipient,
  DeleteMonitorRoleOwner,
  DownloadMonitorResult,
  GetAvailableConditionsForMonitorHandler,
  GetAvailableConditionsForMonitorHandlerResponse,
  GetAvailableMonitorHandlers,
  GetAvailableMonitorHandlersResponse,
  GetMonitor,
  GetMonitorResponse,
  GetMonitorNotification,
  GetMonitorNotificationResponse,
  GetMonitorNotificationEmailRecipient,
  GetMonitorNotificationEmailRecipientResponse,
  GetMonitorNotificationEmailRecipients,
  GetMonitorNotificationEmailRecipientsResponse,
  GetMonitorNotifications,
  GetMonitorNotificationsResponse,
  GetMonitorResult,
  GetMonitorResultResponse,
  GetUserMonitors,
  GetUserMonitorsResponse,
  ListScriptedMonitorResults,
  ListScriptedMonitorResultsResponse,
  RunMonitor,
  SetMonitorPermissions,
  UpdateMonitor,
  UpdateMonitorNotification,
  UpdateMonitorNotificationEmailRecipient,
} from './eva-services-monitor';


export class SvcCreateMonitor implements IEvaServiceDefinition
{
  name = 'CreateMonitor';
  path = '/message/CreateMonitor';
  request?: CreateMonitor;
  response?: CreateMonitorResponse;
}

export class SvcCreateMonitorNotification implements IEvaServiceDefinition
{
  name = 'CreateMonitorNotification';
  path = '/message/CreateMonitorNotification';
  request?: CreateMonitorNotification;
  response?: CreateMonitorNotificationResponse;
}

export class SvcCreateMonitorNotificationEmailRecipient implements IEvaServiceDefinition
{
  name = 'CreateMonitorNotificationEmailRecipient';
  path = '/message/CreateMonitorNotificationEmailRecipient';
  request?: CreateMonitorNotificationEmailRecipient;
  response?: CreateMonitorNotificationEmailRecipientResponse;
}

export class SvcCreateMonitorRoleOwner implements IEvaServiceDefinition
{
  name = 'CreateMonitorRoleOwner';
  path = '/message/CreateMonitorRoleOwner';
  request?: CreateMonitorRoleOwner;
  response?: CreateMonitorRoleOwnerResponse;
}

export class SvcDeleteMonitor implements IEvaServiceDefinition
{
  name = 'DeleteMonitor';
  path = '/message/DeleteMonitor';
  request?: DeleteMonitor;
  response?: EmptyResponseMessage;
}

export class SvcDeleteMonitorNotification implements IEvaServiceDefinition
{
  name = 'DeleteMonitorNotification';
  path = '/message/DeleteMonitorNotification';
  request?: DeleteMonitorNotification;
  response?: EmptyResponseMessage;
}

export class SvcDeleteMonitorNotificationEmailRecipient implements IEvaServiceDefinition
{
  name = 'DeleteMonitorNotificationEmailRecipient';
  path = '/message/DeleteMonitorNotificationEmailRecipient';
  request?: DeleteMonitorNotificationEmailRecipient;
  response?: EmptyResponseMessage;
}

export class SvcDeleteMonitorRoleOwner implements IEvaServiceDefinition
{
  name = 'DeleteMonitorRoleOwner';
  path = '/message/DeleteMonitorRoleOwner';
  request?: DeleteMonitorRoleOwner;
  response?: EmptyResponseMessage;
}

export class SvcDownloadMonitorResult implements IEvaServiceDefinition
{
  name = 'DownloadMonitorResult';
  path = '/message/DownloadMonitorResult';
  request?: DownloadMonitorResult;
  response?: ResourceWithBlobIDResponseMessage;
}

export class SvcGetAvailableConditionsForMonitorHandler implements IEvaServiceDefinition
{
  name = 'GetAvailableConditionsForMonitorHandler';
  path = '/message/GetAvailableConditionsForMonitorHandler';
  request?: GetAvailableConditionsForMonitorHandler;
  response?: GetAvailableConditionsForMonitorHandlerResponse;
}

export class SvcGetAvailableMonitorHandlers implements IEvaServiceDefinition
{
  name = 'GetAvailableMonitorHandlers';
  path = '/message/GetAvailableMonitorHandlers';
  request?: GetAvailableMonitorHandlers;
  response?: GetAvailableMonitorHandlersResponse;
}

export class SvcGetMonitor implements IEvaServiceDefinition
{
  name = 'GetMonitor';
  path = '/message/GetMonitor';
  request?: GetMonitor;
  response?: GetMonitorResponse;
}

export class SvcGetMonitorNotification implements IEvaServiceDefinition
{
  name = 'GetMonitorNotification';
  path = '/message/GetMonitorNotification';
  request?: GetMonitorNotification;
  response?: GetMonitorNotificationResponse;
}

export class SvcGetMonitorNotificationEmailRecipient implements IEvaServiceDefinition
{
  name = 'GetMonitorNotificationEmailRecipient';
  path = '/message/GetMonitorNotificationEmailRecipient';
  request?: GetMonitorNotificationEmailRecipient;
  response?: GetMonitorNotificationEmailRecipientResponse;
}

export class SvcGetMonitorNotificationEmailRecipients implements IEvaServiceDefinition
{
  name = 'GetMonitorNotificationEmailRecipients';
  path = '/message/GetMonitorNotificationEmailRecipients';
  request?: GetMonitorNotificationEmailRecipients;
  response?: GetMonitorNotificationEmailRecipientsResponse;
}

export class SvcGetMonitorNotifications implements IEvaServiceDefinition
{
  name = 'GetMonitorNotifications';
  path = '/message/GetMonitorNotifications';
  request?: GetMonitorNotifications;
  response?: GetMonitorNotificationsResponse;
}

export class SvcGetMonitorResult implements IEvaServiceDefinition
{
  name = 'GetMonitorResult';
  path = '/message/GetMonitorResult';
  request?: GetMonitorResult;
  response?: GetMonitorResultResponse;
}

export class SvcGetUserMonitors implements IEvaServiceDefinition
{
  name = 'GetUserMonitors';
  path = '/message/GetUserMonitors';
  request?: GetUserMonitors;
  response?: GetUserMonitorsResponse;
}

export class SvcListScriptedMonitorResults implements IEvaServiceDefinition
{
  name = 'ListScriptedMonitorResults';
  path = '/message/ListScriptedMonitorResults';
  request?: ListScriptedMonitorResults;
  response?: ListScriptedMonitorResultsResponse;
}

export class SvcRunMonitor implements IEvaServiceDefinition
{
  name = 'RunMonitor';
  path = '/message/RunMonitor';
  request?: RunMonitor;
  response?: EmptyResponseMessage;
}

export class SvcSetMonitorPermissions implements IEvaServiceDefinition
{
  name = 'SetMonitorPermissions';
  path = '/message/SetMonitorPermissions';
  request?: SetMonitorPermissions;
  response?: EmptyResponseMessage;
}

export class SvcUpdateMonitor implements IEvaServiceDefinition
{
  name = 'UpdateMonitor';
  path = '/message/UpdateMonitor';
  request?: UpdateMonitor;
  response?: EmptyResponseMessage;
}

export class SvcUpdateMonitorNotification implements IEvaServiceDefinition
{
  name = 'UpdateMonitorNotification';
  path = '/message/UpdateMonitorNotification';
  request?: UpdateMonitorNotification;
  response?: EmptyResponseMessage;
}

export class SvcUpdateMonitorNotificationEmailRecipient implements IEvaServiceDefinition
{
  name = 'UpdateMonitorNotificationEmailRecipient';
  path = '/message/UpdateMonitorNotificationEmailRecipient';
  request?: UpdateMonitorNotificationEmailRecipient;
  response?: EmptyResponseMessage;
}
