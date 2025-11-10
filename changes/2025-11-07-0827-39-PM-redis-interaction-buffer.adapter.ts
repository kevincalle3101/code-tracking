import { Inject, Injectable, Logger, OnModuleDestroy } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Redis from 'ioredis';
import { InteractionBufferPort } from 'src/domain/ports/interaction-buffer.port';
import { ClipInteractionAggregate, ClipInteractionEvent, ClipInteractionType } from 'src/domain/value-objects/clip-interaction.value-object';
import { InteractionBufferSettingsToken } from 'src/domain/value-objects/interaction-buffer-settings.value-object';
import type { InteractionBufferSettings } from 'src/domain/value-objects/interaction-buffer-settings.value-object';
import { RedisConfig } from 'src/infrastructure/config/interfaces/redis-config.interface';

@Injectable()
export class RedisInteractionBufferAdapter implements InteractionBufferPort, OnModuleDestroy {
  private readonly logger = new Logger(RedisInteractionBufferAdapter.name);
  private readonly redis: Redis;
  private readonly keyPrefix: string;
  private readonly indexKey: string;

  constructor(
    private readonly configService: ConfigService,
    @Inject(InteractionBufferSettingsToken)
    private readonly settings: InteractionBufferSettings,
  ) {
    const redisConfig = this.configService.get<RedisConfig>('redis');
    if (!redisConfig) {
      throw new Error('Redis configuration is required for interaction buffering');
    }

    this.redis = new Redis({
      host: redisConfig.host,
      port: redisConfig.port,
      db: redisConfig.db ?? 0,
      password: redisConfig.password || undefined,
      tls: redisConfig.tls,
      lazyConnect: true,
      maxRetriesPerRequest: 2,
    });

    this.redis.on('error', (error) => {
      this.logger.error(`Redis error: ${error.message}`);
    });

    this.redis.connect().catch((error) => {
      this.logger.error(`Redis connection failed: ${error.message}`);
    });

    this.keyPrefix = `${redisConfig.keyPrefix ?? 'media-event'}:clip-interactions`;
    this.indexKey = `${this.keyPrefix}:index`;
  }

  async onModuleDestroy(): Promise<void> {
    try {
... (truncated for brevity)