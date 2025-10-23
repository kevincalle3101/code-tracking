export const CACHE_REPOSITORY = 'CACHE_REPOSITORY';

export interface CacheRepository {
    get<T>(key: string): Promise<T | null>;
    set(key: string, value: any, ttl?: number): Promise<void>;
    del(key: string): Promise<void>;
}