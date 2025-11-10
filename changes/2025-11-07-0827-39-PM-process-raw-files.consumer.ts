import { Injectable, Logger } from '@nestjs/common';
import { SqsMessageHandler, SqsConsumerEventHandler } from '@ssut/nestjs-sqs';
import { ClipService } from 'src/application/services/clip.service';
import { getRequiredEnv } from 'src/common/utils/env.util';
import type { S3Event } from 'aws-lambda';
import type { Message } from '@aws-sdk/client-sqs'

const QUEUE_NAME = getRequiredEnv("RAW_FILES_QUEUE");

@Injectable()
export class ProcessRawFiles {
    private readonly logger = new Logger(ProcessRawFiles.name);

    constructor(
        private readonly clipService: ClipService
    ) { }

    @SqsMessageHandler(QUEUE_NAME)
    async handleMessage(message: Message) {
        this.logger.log('Mensaje SQS recibido:', message);
        if (message.Body) {
            const S3Body: S3Event = JSON.parse(message.Body);

            S3Body.Records.forEach(async record => {  
                await this.clipService.processRawFiles(record);
            });
        }
    }
}