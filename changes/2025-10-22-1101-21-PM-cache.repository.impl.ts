import { Injectable } from '@nestjs/common';
import { RedisAdapter } from '../redis.adapter';
import type { CacheRepository } from 'src/domain/repositories/cache.repository';

@Injectable()
export class CacheRepositoryImpl implements CacheRepository {
    constructor(private readonly redisAdapter: RedisAdapter) {}
    
    async get<T>(key: string): Promise<T | null> {
        return this.redisAdapter.get<T>(key);
    }
    
    async set(key: string, value: any, ttl?: number): Promise<void> {
        return this.redisAdapter.set(key, value, ttl);
    }
    
    async del(key: string): Promise<void> {
        return this.redisAdapter.del(key);
    }
}