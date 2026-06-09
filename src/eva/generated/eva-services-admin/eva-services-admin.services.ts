import {
  IEvaServiceDefinition,
  EmptyResponseMessage,
} from '../eva-services-core';

import {
  AddRolesToSharedWorkspace,
  AdminCreateModule,
  AdminCreateModuleResponse,
  AdminDeleteModule,
  AdminGetAllModules,
  AdminGetAllModulesResponse,
  AdminGetModuleAllowedRoles,
  AdminGetModuleAllowedRolesResponse,
  AdminGetModuleByID,
  AdminGetModuleByIDResponse,
  AdminGetRoleAllowedModules,
  AdminGetRoleAllowedModulesResponse,
  AdminListModules,
  AdminListModulesResponse,
  AdminUpdateModule,
  AdminUpdateModuleAllowedRoles,
  AdminUpdateRoleAllowedModules,
  CreateSharedWorkspace,
  CreateWorkspaceResponse,
  CreateWorkspace,
  DeleteSharedWorkspace,
  DeleteWorkspace,
  GetSharedWorkspaceByID,
  GetSharedWorkspaceByIDResponse,
  GetWorkspaceByID,
  GetWorkspaceByIDResponse,
  GetWorkspaces,
  GetWorkspacesResponse,
  ListSharedWorkspaces,
  ListSharedWorkspacesResponse,
  RemoveRolesFromSharedWorkspace,
  SetActiveWorkspace,
  SetDefaultSharedWorkspaceForRoles,
  TransferSharedWorkspaceOwnership,
  UpdateSharedWorkspace,
  UpdateWorkspace,
} from './eva-services-admin';


export class SvcAddRolesToSharedWorkspace implements IEvaServiceDefinition
{
  name = 'AddRolesToSharedWorkspace';
  path = '/message/AddRolesToSharedWorkspace';
  request?: AddRolesToSharedWorkspace;
  response?: EmptyResponseMessage;
}

export class SvcAdminCreateModule implements IEvaServiceDefinition
{
  name = 'AdminCreateModule';
  path = '/message/AdminCreateModule';
  request?: AdminCreateModule;
  response?: AdminCreateModuleResponse;
}

export class SvcAdminDeleteModule implements IEvaServiceDefinition
{
  name = 'AdminDeleteModule';
  path = '/message/AdminDeleteModule';
  request?: AdminDeleteModule;
  response?: EmptyResponseMessage;
}

export class SvcAdminGetAllModules implements IEvaServiceDefinition
{
  name = 'AdminGetAllModules';
  path = '/message/AdminGetAllModules';
  request?: AdminGetAllModules;
  response?: AdminGetAllModulesResponse;
}

export class SvcAdminGetModuleAllowedRoles implements IEvaServiceDefinition
{
  name = 'AdminGetModuleAllowedRoles';
  path = '/message/AdminGetModuleAllowedRoles';
  request?: AdminGetModuleAllowedRoles;
  response?: AdminGetModuleAllowedRolesResponse;
}

export class SvcAdminGetModuleByID implements IEvaServiceDefinition
{
  name = 'AdminGetModuleByID';
  path = '/message/AdminGetModuleByID';
  request?: AdminGetModuleByID;
  response?: AdminGetModuleByIDResponse;
}

export class SvcAdminGetRoleAllowedModules implements IEvaServiceDefinition
{
  name = 'AdminGetRoleAllowedModules';
  path = '/message/AdminGetRoleAllowedModules';
  request?: AdminGetRoleAllowedModules;
  response?: AdminGetRoleAllowedModulesResponse;
}

export class SvcAdminListModules implements IEvaServiceDefinition
{
  name = 'AdminListModules';
  path = '/message/AdminListModules';
  request?: AdminListModules;
  response?: AdminListModulesResponse;
}

export class SvcAdminUpdateModule implements IEvaServiceDefinition
{
  name = 'AdminUpdateModule';
  path = '/message/AdminUpdateModule';
  request?: AdminUpdateModule;
  response?: EmptyResponseMessage;
}

export class SvcAdminUpdateModuleAllowedRoles implements IEvaServiceDefinition
{
  name = 'AdminUpdateModuleAllowedRoles';
  path = '/message/AdminUpdateModuleAllowedRoles';
  request?: AdminUpdateModuleAllowedRoles;
  response?: EmptyResponseMessage;
}

export class SvcAdminUpdateRoleAllowedModules implements IEvaServiceDefinition
{
  name = 'AdminUpdateRoleAllowedModules';
  path = '/message/AdminUpdateRoleAllowedModules';
  request?: AdminUpdateRoleAllowedModules;
  response?: EmptyResponseMessage;
}

export class SvcCreateSharedWorkspace implements IEvaServiceDefinition
{
  name = 'CreateSharedWorkspace';
  path = '/message/CreateSharedWorkspace';
  request?: CreateSharedWorkspace;
  response?: CreateWorkspaceResponse;
}

export class SvcCreateWorkspace implements IEvaServiceDefinition
{
  name = 'CreateWorkspace';
  path = '/message/CreateWorkspace';
  request?: CreateWorkspace;
  response?: CreateWorkspaceResponse;
}

export class SvcDeleteSharedWorkspace implements IEvaServiceDefinition
{
  name = 'DeleteSharedWorkspace';
  path = '/message/DeleteSharedWorkspace';
  request?: DeleteSharedWorkspace;
  response?: EmptyResponseMessage;
}

export class SvcDeleteWorkspace implements IEvaServiceDefinition
{
  name = 'DeleteWorkspace';
  path = '/message/DeleteWorkspace';
  request?: DeleteWorkspace;
  response?: EmptyResponseMessage;
}

export class SvcGetSharedWorkspaceByID implements IEvaServiceDefinition
{
  name = 'GetSharedWorkspaceByID';
  path = '/message/GetSharedWorkspaceByID';
  request?: GetSharedWorkspaceByID;
  response?: GetSharedWorkspaceByIDResponse;
}

export class SvcGetWorkspaceByID implements IEvaServiceDefinition
{
  name = 'GetWorkspaceByID';
  path = '/message/GetWorkspaceByID';
  request?: GetWorkspaceByID;
  response?: GetWorkspaceByIDResponse;
}

export class SvcGetWorkspaces implements IEvaServiceDefinition
{
  name = 'GetWorkspaces';
  path = '/message/GetWorkspaces';
  request?: GetWorkspaces;
  response?: GetWorkspacesResponse;
}

export class SvcListSharedWorkspaces implements IEvaServiceDefinition
{
  name = 'ListSharedWorkspaces';
  path = '/message/ListSharedWorkspaces';
  request?: ListSharedWorkspaces;
  response?: ListSharedWorkspacesResponse;
}

export class SvcRemoveRolesFromSharedWorkspace implements IEvaServiceDefinition
{
  name = 'RemoveRolesFromSharedWorkspace';
  path = '/message/RemoveRolesFromSharedWorkspace';
  request?: RemoveRolesFromSharedWorkspace;
  response?: EmptyResponseMessage;
}

export class SvcSetActiveWorkspace implements IEvaServiceDefinition
{
  name = 'SetActiveWorkspace';
  path = '/message/SetActiveWorkspace';
  request?: SetActiveWorkspace;
  response?: EmptyResponseMessage;
}

export class SvcSetDefaultSharedWorkspaceForRoles implements IEvaServiceDefinition
{
  name = 'SetDefaultSharedWorkspaceForRoles';
  path = '/message/SetDefaultSharedWorkspaceForRoles';
  request?: SetDefaultSharedWorkspaceForRoles;
  response?: EmptyResponseMessage;
}

export class SvcTransferSharedWorkspaceOwnership implements IEvaServiceDefinition
{
  name = 'TransferSharedWorkspaceOwnership';
  path = '/message/TransferSharedWorkspaceOwnership';
  request?: TransferSharedWorkspaceOwnership;
  response?: EmptyResponseMessage;
}

export class SvcUpdateSharedWorkspace implements IEvaServiceDefinition
{
  name = 'UpdateSharedWorkspace';
  path = '/message/UpdateSharedWorkspace';
  request?: UpdateSharedWorkspace;
  response?: EmptyResponseMessage;
}

export class SvcUpdateWorkspace implements IEvaServiceDefinition
{
  name = 'UpdateWorkspace';
  path = '/message/UpdateWorkspace';
  request?: UpdateWorkspace;
  response?: EmptyResponseMessage;
}
