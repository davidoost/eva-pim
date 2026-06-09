import {
  ResourceResponseMessage,
  RequestMessage,
} from '../eva-services-core';


export enum Errors
{
  /**
  * Blob {blobID:string} has invalid mime type {mimeType:string}
  */
  BlobMerger_InvalidMimeType = 'BlobMerger:InvalidMimeType',
  /**
  * Merging PDFs failed
  */
  BlobMerger_MergeFailed = 'BlobMerger:MergeFailed',
  /**
  * Too many blobs
  */
  MergePdfBlobs_TooManyBlobs = 'MergePdfBlobs:TooManyBlobs',
}
/**
* Merges blobs into one PDF
*/
export interface MergePdfBlobs extends RequestMessage<ResourceResponseMessage> {
  /**
  * Can be used for both standard- and secured blobs - must match environment assets URL. Limited to 100 entries.
  */
  BlobUrls?: string[];
  /**
  * Entity type: Blob
  * Can be used for standard blobs - for secure blobs, use `BlobUrls` instead. Limited to 100 entries.
  */
  Blobs?: string[];
}

