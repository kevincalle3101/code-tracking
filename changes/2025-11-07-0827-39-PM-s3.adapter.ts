import { Injectable, Logger } from "@nestjs/common";
import { S3Client, S3ClientConfig, PutObjectCommand, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { ConfigService } from '@nestjs/config';
import { AwsConfig, S3Config } from 'src/infrastructure/config/interfaces/aws-config.interface';
import { Readable } from "stream";
import { StoragePort } from 'src/domain/ports/storage.port';

@Injectable()
export class S3Adapter implements StoragePort {
    private readonly s3Client: S3Client;
    private readonly logger = new Logger(S3Adapter.name);
    private readonly uploadBucket: string;
    private readonly assetsBucket: string;


    constructor(private readonly configService: ConfigService) {
        const awsConfig = this.configService.get<AwsConfig>('aws');
        const s3Config = this.configService.get<S3Config>('s3');
        if (!awsConfig || !s3Config) throw new Error('AWS configuration empty');
        const adapterConfig: S3ClientConfig = {
            region: awsConfig.region,
        };

        if (awsConfig.endpoint) {
            adapterConfig.endpoint = awsConfig.endpoint;
            adapterConfig.forcePathStyle = true;
            adapterConfig.credentials = {
                accessKeyId: 'test',
                secretAccessKey: 'test',
            };
        }

        this.s3Client = new S3Client(adapterConfig);
        this.uploadBucket = s3Config.buckets.uploads;
        this.assetsBucket = s3Config.buckets.assets;
    }

    async getPresignedUploadUrl(key: string, expiresInSeconds: number = 3600): Promise<string> {
        const command = new PutObjectCommand({
            Bucket: this.uploadBucket,
            Key: key,
        });

        try {
            const url = await getSignedUrl(this.s3Client, command, { expiresIn: expiresInSeconds });
            this.logger.log(`URL pre-firmada generada para: s3://${this.uploadBucket}/${key}`);
            return url;
        } catch (error) {
            this.logger.error('Error al generar la URL pre-firmada', error.stack);
... (truncated for brevity)