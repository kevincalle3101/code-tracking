export const CacheRepository = Symbol('CacheRepository');

export interface CacheRepository {
    get<T>(key: string): Promise<T | null>;
    set<T>(key: string, value: T, ttl?: number): Promise<void>;
    del(key: string): Promise<void>;
}