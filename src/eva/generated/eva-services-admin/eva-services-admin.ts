import {
  RequestMessage,
  TAnyValue,
  ResponseMessage,
  RequestMessageWithEmptyResponse,
  FilteredPagedResultRequest,
  PagedResultResponse,
  PagedRequestMessage,
  PagedResponseMessage,
} from '../eva-services-core';


export enum Errors
{
  /**
  * You are not authorized to view this workspace.
  */
  Workspaces_UnauthorizedToViewWorkspace = 'Workspaces:UnauthorizedToViewWorkspace',
  /**
  * Workspace is owned by other user.
  */
  Workspaces_WorkspaceOwnedByOtherUser = 'Workspaces:WorkspaceOwnedByOtherUser',
  /**
  * The workspace is private.
  */
  Workspaces_WorkspaceIsPrivate = 'Workspaces:WorkspaceIsPrivate',
  /**
  * The workspace is shared.
  */
  Workspaces_WorkspaceIsShared = 'Workspaces:WorkspaceIsShared',
  /**
  * Cannot set a workspace without key to be the active one.
  */
  Workspaces_CannotSetWorkspaceWithoutKeyToActive = 'Workspaces:CannotSetWorkspaceWithoutKeyToActive',
  /**
  * Cannot remove a shared workspace as it still has Active members.
  */
  Workspaces_CannotRemoveSharedWorkspace = 'Workspaces:CannotRemoveSharedWorkspace',
  /**
  * Cannot remove an active workspace as it's still active
  */
  Workspaces_CannotRemoveActiveWorkspace = 'Workspaces:CannotRemoveActiveWorkspace',
  /**
  * Workspaces can't have duplicate names
  */
  Workspaces_DuplicateNames = 'Workspaces:DuplicateNames',
  /**
  * RoleIds: {0:string} are not connected to the provided workspace.
  */
  Workspaces_RoleDoesNotHaveSharedWorkspace = 'Workspaces:RoleDoesNotHaveSharedWorkspace',
}
export interface ListModulesFilter {
  Code?: string;
  IsActive?: boolean;
  Name?: string;
}

/**
* Create a new Module
*/
export interface AdminCreateModule extends RequestMessage<AdminCreateModuleResponse> {
  Code: string;
  Data?: TAnyValue;
  IsActive?: boolean;
  Name: string;
}

export interface AdminCreateModuleResponse extends ResponseMessage {
  /**
  * Entity type: Module
  */
  ID: number;
}

/**
* Delete a Module
*/
export interface AdminDeleteModule extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: Module
  */
  ID: number;
}

/**
* Gives a list of all admin modules visible by the current user.
*/
export interface AdminGetAllModules extends RequestMessage<AdminGetAllModulesResponse> {
}

export interface AdminGetAllModulesResponse extends ResponseMessage {
  Modules: ServicesAdminGetAllModulesResponse_ModuleDto[];
}

export interface ServicesAdminGetAllModulesResponse_ModuleDto {
  Code: string;
  Data?: TAnyValue;
  /**
  * Entity type: Module
  */
  ID: number;
  IsActive: boolean;
  Name: string;
}

/**
* Gives a list of all roles that are allowed to see this module
*/
export interface AdminGetModuleAllowedRoles extends RequestMessage<AdminGetModuleAllowedRolesResponse> {
  /**
  * Entity type: Module
  */
  ModuleID: number;
}

export interface AdminGetModuleAllowedRolesResponse extends ResponseMessage {
  Roles?: ServicesAdminGetModuleAllowedRolesResponse_Role[];
}

export interface ServicesAdminGetModuleAllowedRolesResponse_Role {
  Code?: string;
  /**
  * Entity type: Role
  */
  ID: number;
  Name?: string;
}

/**
* Get a Module by ID
*/
export interface AdminGetModuleByID extends RequestMessage<AdminGetModuleByIDResponse> {
  /**
  * Entity type: Module
  */
  ID: number;
}

export interface AdminGetModuleByIDResponse extends ResponseMessage {
  Code: string;
  Data?: TAnyValue;
  /**
  * Entity type: Module
  */
  ID: number;
  IsActive: boolean;
  Name: string;
}

/**
* Gives a list of all modules that the given role isallowed to see
*/
export interface AdminGetRoleAllowedModules extends RequestMessage<AdminGetRoleAllowedModulesResponse> {
  /**
  * Entity type: Role
  */
  RoleID: number;
}

export interface AdminGetRoleAllowedModulesResponse extends ResponseMessage {
  Modules?: ServicesAdminGetRoleAllowedModulesResponse_AllowedModule[];
}

export interface ServicesAdminGetRoleAllowedModulesResponse_AllowedModule {
  /**
  * Entity type: Module
  */
  ID: number;
  Name?: string;
}

/**
* List the Modules
*/
export interface AdminListModules extends FilteredPagedResultRequest<ListModulesFilter, AdminListModulesResponse> {
}

export interface AdminListModulesResponse extends PagedResultResponse<ServicesAdminListModulesResponse_ModuleDto> {
}

export interface ServicesAdminListModulesResponse_ModuleDto {
  Code: string;
  Data?: TAnyValue;
  /**
  * Entity type: Module
  */
  ID: number;
  IsActive: boolean;
  Name: string;
}

/**
* Update an existing Module
*/
export interface AdminUpdateModule extends RequestMessageWithEmptyResponse {
  Code: string;
  Data?: TAnyValue;
  /**
  * Entity type: Module
  */
  ID: number;
  IsActive?: boolean;
  Name: string;
}

/**
* Set which roles are allowed to see the specified module. Will replace existing values.
*/
export interface AdminUpdateModuleAllowedRoles extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: Module
  */
  ModuleID: number;
  Roles?: ServicesAdminUpdateModuleAllowedRoles_AllowedRole[];
}

export interface ServicesAdminUpdateModuleAllowedRoles_AllowedRole {
  /**
  * Entity type: Role
  */
  RoleID: number;
}

/**
* Set which modules are allowed to see by the specified role. Will replace existing values.
*/
export interface AdminUpdateRoleAllowedModules extends RequestMessageWithEmptyResponse {
  Modules?: ServicesAdminUpdateRoleAllowedModules_AllowedModule[];
  /**
  * Entity type: Role
  */
  RoleID: number;
}

export interface ServicesAdminUpdateRoleAllowedModules_AllowedModule {
  /**
  * Entity type: Module
  */
  ModuleID: number;
}

export interface WorkspacesRepositoriesListSharedWorkspacesFilter {
  Key?: string;
  Name?: string;
  /**
  * Entity type: Role
  */
  RoleID?: number;
}

/**
* Add roles to a shared workspace
*/
export interface AddRolesToSharedWorkspace extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: Workspace
  */
  ID: number;
  /**
  * Entity type: Role
  */
  RoleIDs: number[];
}

/**
* Creates a new shared workspace.
*/
export interface CreateSharedWorkspace extends RequestMessage<CreateWorkspaceResponse> {
  /**
  * Identifier of workspace target
  */
  Key: string;
  /**
  * Max. length 128 characters
  */
  Name: string;
  /**
  * Entity type: Role
  */
  RoleIDs?: number[];
  Settings: string;
}

/**
* Creates a new workspace for the current user.
*/
export interface CreateWorkspace extends RequestMessage<CreateWorkspaceResponse> {
  /**
  * Identifier of workspace target
  */
  Key?: string;
  /**
  * Max. length 128 characters
  */
  Name: string;
  Settings: string;
}

export interface CreateWorkspaceResponse extends ResponseMessage {
  /**
  * Entity type: Workspace
  */
  ID: number;
}

/**
* Delete a shared workspace by it's ID
*/
export interface DeleteSharedWorkspace extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: Workspace
  */
  ID: number;
  UnlinkActiveWorkspace?: boolean;
}

/**
* Delete a Workspace by it's ID
*/
export interface DeleteWorkspace extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: Workspace
  */
  ID: number;
}

/**
* Get a shared workspace by ID
*/
export interface GetSharedWorkspaceByID extends RequestMessage<GetSharedWorkspaceByIDResponse> {
  /**
  * Entity type: Workspace
  */
  ID: number;
}

export interface GetSharedWorkspaceByIDResponse extends ResponseMessage {
  /**
  * Entity type: Workspace
  */
  ID: number;
  IsAllowedToEdit: boolean;
  Key?: string;
  Name?: string;
  /**
  * Entity type: User
  */
  OwnerID: number;
  /**
  * Entity type: Role
  */
  Roles?: number[];
  RolesWithDefault?: WorkspacesServicesGetSharedWorkspaceByIDResponse_RoleWithDefault[];
  Settings?: string;
}

export interface WorkspacesServicesGetSharedWorkspaceByIDResponse_RoleWithDefault {
  /**
  * Entity type: Role
  */
  ID: number;
  IsDefault: boolean;
  Name?: string;
}

/**
* Get a workspace by ID
*/
export interface GetWorkspaceByID extends RequestMessage<GetWorkspaceByIDResponse> {
  /**
  * Entity type: Workspace
  */
  ID: number;
}

export interface GetWorkspaceByIDResponse extends ResponseMessage {
  Active: boolean;
  /**
  * Entity type: Workspace
  */
  ID: number;
  IsActive: boolean;
  IsShared: boolean;
  Key?: string;
  Name?: string;
  Settings?: string;
}

/**
* Get all workspaces for the current user
*/
export interface GetWorkspaces extends RequestMessage<GetWorkspacesResponse> {
  /**
  * Identifier of workspace target
  */
  Key?: string;
}

export interface GetWorkspacesResponse extends ResponseMessage {
  Result?: WorkspacesServicesGetWorkspacesResponse_Workspace[];
}

export interface WorkspacesServicesGetWorkspacesResponse_Workspace {
  Active: boolean;
  /**
  * Entity type: Workspace
  */
  ID: number;
  IsActive: boolean;
  IsShared: boolean;
  Key?: string;
  Name?: string;
  RolesWithDefault?: WorkspacesServicesGetWorkspacesResponse_Workspace_RoleWithDefault[];
  Settings?: string;
}

export interface WorkspacesServicesGetWorkspacesResponse_Workspace_RoleWithDefault {
  /**
  * Entity type: Role
  */
  ID: number;
  IsDefault: boolean;
  Name?: string;
}

/**
* List all shared workspaces based on the given filter
*/
export interface ListSharedWorkspaces extends PagedRequestMessage<WorkspacesRepositoriesListSharedWorkspacesFilter, ListSharedWorkspacesResponse> {
}

export interface ListSharedWorkspacesResponse extends PagedResponseMessage<WorkspacesServicesListSharedWorkspacesResponse_Workspace> {
}

export interface WorkspacesServicesListSharedWorkspacesResponse_Workspace {
  /**
  * Entity type: Workspace
  */
  ID: number;
  IsAllowedToEdit: boolean;
  Key?: string;
  Name?: string;
  RolesWithDefault?: WorkspacesServicesListSharedWorkspacesResponse_Workspace_RoleWithDefault[];
  Settings?: string;
}

export interface WorkspacesServicesListSharedWorkspacesResponse_Workspace_RoleWithDefault {
  /**
  * Entity type: Role
  */
  ID: number;
  IsDefault: boolean;
  Name?: string;
}

/**
* Remove (all) roles from a workspace
*/
export interface RemoveRolesFromSharedWorkspace extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: Workspace
  */
  ID: number;
  RemoveAllRoles?: boolean;
  /**
  * Entity type: Role
  */
  RoleIDs?: number[];
}

/**
* Set active workspace for the current user
*/
export interface SetActiveWorkspace extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: Workspace
  */
  ID: number;
}

/**
* Set default shared workspace for roles
*/
export interface SetDefaultSharedWorkspaceForRoles extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: Workspace
  */
  ID: number;
  IsDefault?: boolean;
  /**
  * Entity type: Role
  */
  RoleIDs: number[];
}

/**
* Transfer shared wordspace ownership with ID and optional user Update
*/
export interface TransferSharedWorkspaceOwnership extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: Workspace
  */
  ID: number;
  /**
  * Entity type: User
  */
  OwnerID?: number;
}

/**
* Update a shared workspace by ID
*/
export interface UpdateSharedWorkspace extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: Workspace
  */
  ID: number;
  /**
  * Max. length 128 characters
  */
  Name: string;
  Settings: string;
}

/**
* Update a workspace by ID
*/
export interface UpdateWorkspace extends RequestMessageWithEmptyResponse {
  /**
  * Entity type: Workspace
  */
  ID: number;
  /**
  * Max. length 128 characters
  */
  Name: string;
  Settings: string;
}

