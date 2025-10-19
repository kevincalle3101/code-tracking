import { Injectable } from "@nestjs/common";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

// ADAPTADOR SECUNDARIO para AWS S3
@Injectable()
export class S3Adapter {
    private readonly s3Client: S3Client;

    constructor() {
        this.s3Client = new S3Client({
            region: process.env.AWS_REGION,
        });
    }

    async uploadFile(bucket: string, key: string, body: Buffer) {
        const command = new PutObjectCommand({
            Bucket: bucket,
            Key: key,
            Body: body,
        });

        return this.s3Client.send(command);
    }
}