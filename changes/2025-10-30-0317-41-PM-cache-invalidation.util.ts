import type { CacheRepository } from 'src/domain/repositories/cache.repository';

/**
 * @example
 * // En cualquier servicio
 * await invalidateUserPermissionsCache(this.cacheRepository, cognitoSub);
 */
export async function invalidateUserPermissionsCache(
    cacheRepository: CacheRepository,
    cognitoSub: string
): Promise<void> {
    const cacheKey = `permissions:${cognitoSub}`;
    await cacheRepository.del(cacheKey);
}