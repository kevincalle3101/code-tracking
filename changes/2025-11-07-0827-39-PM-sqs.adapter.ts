import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SQSClient, SendMessageCommand } from '@aws-sdk/client-sqs';
import { AwsConfig } from 'src/infrastructure/config/interfaces/aws-config.interface';

export interface SqsResult {
    success: boolean;
    messageId?: string;
    errorDetail?: string;
}

@Injectable()
export class SqsAdapter {
    private readonly logger = new Logger(SqsAdapter.name);
    private readonly sqsClient: SQSClient;

    constructor(private readonly configService: ConfigService) {
        const awsConfiguration = this.configService.get<AwsConfig>('aws');
        if (!awsConfiguration) throw new Error('AWS configuration empty');
        this.sqsClient = new SQSClient({
            region: awsConfiguration.region,
        });
    }

    /**
     * Envía un mensaje a una cola de SQS.
     * @param queueUrl La URL de la cola de SQS.
     * @param messageBody El cuerpo del mensaje (debe ser un string).
     * @param messageGroupId (Opcional) Requerido para colas FIFO.
     */
    async sendMessage(queueUrl: string, messageBody: string, messageGroupId?: string): Promise<SqsResult> {
        this.logger.log(`Enviando mensaje a la cola: ${queueUrl}`);

        const command = new SendMessageCommand({
            QueueUrl: queueUrl,
            MessageBody: messageBody,
            // Solo añade MessageGroupId si es una cola FIFO y se proporciona el parámetro
            ...(messageGroupId && { MessageGroupId: messageGroupId }),
        });

        try {
            const response = await this.sqsClient.send(command);
            this.logger.log(`Mensaje enviado a SQS con MessageId: ${response.MessageId}`);
            return { success: true, messageId: response.MessageId };
        } catch (error) {
            this.logger.error('Error al enviar mensaje a SQS', error.stack);
            return {
                success: false,
                errorDetail: error instanceof Error ? error.message : 'Error desconocido'
            };
... (truncated for brevity)