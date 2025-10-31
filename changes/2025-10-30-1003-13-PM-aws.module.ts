import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SecretsManagerAdapter } from './secrets-manager.adapter';
import { S3Adapter } from './s3.adapter';

@Module({
    imports: [ConfigModule],
    providers: [SecretsManagerAdapter, S3Adapter],
    exports: [SecretsManagerAdapter, S3Adapter],
})
export class AwsModule { }