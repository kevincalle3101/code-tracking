import type { CacheRepository } from 'src/domain/repositories/cache.repository';

/**
 * Invalida el caché de permisos para un usuario específico
 * Útil cuando se actualizan roles, permisos o membresías del usuario
 * 
 * @param cacheRepository - Repositorio de caché
 * @param cognitoSub - CognitoSub del usuario
 * 
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