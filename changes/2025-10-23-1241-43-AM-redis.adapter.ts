import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createClient, RedisClientType } from 'redis';

@Injectable()
export class RedisAdapter {
    private readonly logger = new Logger(RedisAdapter.name);
    private client: RedisClientType;
    private readonly ttl: number;

    constructor(private readonly configService: ConfigService) {
        this.ttl = this.configService.get<number>('redis.ttl', 900);
        this.initializeClient();
    }

    private async initializeClient() {
        const host = this.configService.get<string>('redis.host');
        const port = this.configService.get<number>('redis.port');

        this.client = createClient({
            socket: {
                host,
                port,
            },
        });

        this.client.on('error', (err) => {
            this.logger.error(`Error con el cliente Redis: ${err.message}`);
        });

        this.client.on('connect', () => {
            this.logger.log(`Redis conectado a ${host}:${port}`);
        });

        await this.client.connect();
    }

    async get<T>(key: string): Promise<T | null> {
        try {
            const value = await this.client.get(key);
            if (value) {
                this.logger.log(`Caché encontrada para clave: ${key}`);
                return JSON.parse(value) as T;
            }
            this.logger.log(`Caché no encontrada para clave: ${key}`);
            return null;
        } catch (error) {
            this.logger.error(`Error al obtener la clave ${key}: ${error.message}`);
            return null;
        }
... (truncated for brevity)