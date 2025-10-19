# Authentication & Authorization Database Schema Implementation

## Overview
Implemented a complete authentication and authorization system for the NestJS application based on the provided database schema. This includes User management, Profile-based access control, Global Roles, Companies with Company-specific Roles, and a comprehensive Permission system.

## Database Schema Summary

### Core Tables
1. **status** - Status lookup table for user accounts
2. **profile** - User profile types (e.g., Admin, Customer, etc.)
3. **permission** - Individual permissions/capabilities
4. **global_role** - System-wide roles with permissions
5. **user** - Main user accounts with authentication data
6. **company** - Company/Organization entities
7. **company_role** - Company-specific roles with permissions
8. **company_member** - User membership in companies with roles

### Junction Tables (Many-to-Many)
- **profile_global_role** - Links profiles to global roles
- **global_role_permission** - Links global roles to permissions
- **user_global_role** - Links users directly to global roles
- **company_role_permission** - Links company roles to permissions

## Files Created

### 1. Status (Updated)
**Updated:**
- `src/infrastructure/adapters/database/schema/status.schema.ts`

**Changes:**
- Added `nullable: false` constraint to description
- Added `length: 255` specification
- Changed to `generated: 'increment'`

### 2. Profile
**Created:**
- `src/domain/entities/profile.entity.ts`
- `src/infrastructure/adapters/database/schema/profile.schema.ts`
- `src/domain/repositories/profile.repository.ts`
- `src/infrastructure/adapters/database/repositories/profile.repository.impl.ts`

**Features:**
- Many-to-many relationship with GlobalRole
- Methods: findById, findByName, findAll, save

### 3. Permission
**Created:**
- `src/domain/entities/permission.entity.ts`
- `src/infrastructure/adapters/database/schema/permission.schema.ts`
- `src/domain/repositories/permission.repository.ts`
... (truncated for brevity)