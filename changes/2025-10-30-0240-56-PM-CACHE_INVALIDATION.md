# Cache Invalidation Utility

## Overview
Simple utility function to invalidate user permission cache when roles or permissions are updated. The cache has a TTL of 7 days, but sometimes you need to invalidate it immediately after making permission changes.

## Function

### `invalidateUserPermissionsCache()`

Located at: `src/shared/utils/cache-invalidation.util.ts`

**Parameters:**
- `cacheRepository` - The cache repository instance
- `cognitoSub` - The user's Cognito Sub ID

**Returns:** `Promise<void>`

## Usage Examples

### Basic Usage - Single User