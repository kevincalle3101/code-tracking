import type { Readable } from 'stream';

export interface StoragePort {
  getPresignedUploadUrl(key: string, expiresInSeconds?: number): Promise<string>;
  getObjectStream(bucket: string, key: string): Promise<Readable>;
  uploadAssetObject(key: string, body: Buffer, contentType?: string): Promise<void>;
}

export const StoragePort = Symbol('StoragePort');