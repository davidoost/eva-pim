import {
  RequestMessage,
  ResponseMessage,
  TAnyValue,
} from '../eva-services-core';


/**
* Compares synchronization file with current environment.
*/
export interface CompareSynchronization extends RequestMessage<CompareSynchronizationResponse> {
  BlobUrl: string;
  IncludeIdentical?: boolean;
}

export interface CompareSynchronizationResponse extends ResponseMessage {
  Files?: ServiceCompareSynchronizationResponse_CompareSynchronizationFile[];
}

export interface ServiceCompareSynchronizationResponse_CompareSynchronizationFile {
  Data?: ServiceCompareSynchronizationResponse_CompareSynchronizationFileData[];
  Name?: string;
}

export interface ServiceCompareSynchronizationResponse_CompareSynchronizationFileData {
  Description?: string;
  ID?: string;
  IsIdentical?: boolean;
  ObjectInfo?: Record<string,TAnyValue | null>;
  Values?: ServiceCompareSynchronizationResponse_CompareSynchronizationFileDataValue[];
}

export interface ServiceCompareSynchronizationResponse_CompareSynchronizationFileDataValue {
  CanCompare: boolean;
  CanSync: boolean;
  CurrentValue?: string;
  NewValue?: string;
  Type?: string;
}

/**
* Creates a synchronization file. Compare with CompareSynchronization and upload with UploadSynchronization
*/
export interface CreateSynchronization extends RequestMessage<CreateSynchronizationResponse> {
  Managers?: ServiceCreateSynchronization_CreateSynchronizationManager[];
}

export interface ServiceCreateSynchronization_CreateSynchronizationManager {
  Name?: string;
}

export interface CreateSynchronizationResponse extends ResponseMessage {
  BlobUrl?: string;
  ExpireDate?: string;
}

/**
* Returns available synchronization managers.
*/
export interface GetAvailableSynchronizationManagers extends RequestMessage<GetAvailableSynchronizationManagersResponse> {
}

export interface GetAvailableSynchronizationManagersResponse extends ResponseMessage {
  Managers?: ServiceGetAvailableSynchronizationManagersResponse_Manager[];
}

export interface ServiceGetAvailableSynchronizationManagersResponse_Manager {
  Name?: string;
}

/**
* Import data stored in provided synchronization file. Provide a list of data IDs that should be imported.
*/
export interface UploadSynchronization extends RequestMessage<UploadSynchronizationResponse> {
  BlobUrl: string;
  Import: ServiceUploadSynchronization_FileDataToImport[];
}

export interface ServiceUploadSynchronization_FileDataToImport {
  ID?: string;
  Values?: ServiceUploadSynchronization_FileDataToImport_FileDataToImportValue[];
}

export interface ServiceUploadSynchronization_FileDataToImport_FileDataToImportValue {
  Type?: string;
  Value?: string;
}

export interface UploadSynchronizationResponse extends ResponseMessage {
  Errors?: string[];
  NumProcessed: number;
  Processed?: ServiceUploadSynchronizationResponse_UploadSynchronizationResult[];
}

export interface ServiceUploadSynchronizationResponse_UploadSynchronizationResult {
  ErrorDescription?: string;
  ID?: string;
  IsNew: boolean;
  IsSuccess: boolean;
  Type?: string;
}

