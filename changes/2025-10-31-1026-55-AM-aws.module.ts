import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SecretsManagerAdapter } from './secrets-manager.adapter';

@Module({
    imports: [ConfigModule],
    providers: [SecretsManagerAdapter],
    exports: [SecretsManagerAdapter],
})
export class AwsModule { }