# Database Schema Update - Summary

## Overview
Updated the NestJS application to reflect the new database schema with User, Profile, Role, and Permission tables along with their relationships.

## Changes Made

### 1. Updated Status Schema
**File:** `src/infrastructure/adapters/database/schema/status.schema.ts`
- Changed `generated: true` to `generated: 'increment'` for clarity
- Added `nullable: false` constraint to description field
- Added `length: 255` to varchar field

### 2. Created Profile Entity & Infrastructure
**Files Created:**
- `src/domain/entities/profile.entity.ts` - Profile entity with id, name, description, and roles relation
- `src/infrastructure/adapters/database/schema/profile.schema.ts` - TypeORM schema with many-to-many relation to Role
- `src/domain/repositories/profile.repository.ts` - Repository interface
- `src/infrastructure/adapters/database/repositories/profile.repository.impl.ts` - Repository implementation

**Key Features:**
- Primary key: auto-increment integer
- Many-to-many relationship with Role through `profile_role` junction table
- Methods: findById, findByName, findAll, save

### 3. Created Role Entity & Infrastructure
**Files Created:**
- `src/domain/entities/role.entity.ts` - Role entity with id, name, description, and permissions relation
- `src/infrastructure/adapters/database/schema/role.schema.ts` - TypeORM schema with many-to-many relation to Permission
- `src/domain/repositories/role.repository.ts` - Repository interface
- `src/infrastructure/adapters/database/repositories/role.repository.impl.ts` - Repository implementation

**Key Features:**
- Primary key: auto-increment integer
- Many-to-many relationship with Permission through `role_permission` junction table
- Methods: findById, findByName, findAll, save

### 4. Created Permission Entity & Infrastructure
**Files Created:**
- `src/domain/entities/permission.entity.ts` - Permission entity with id, name, description
- `src/infrastructure/adapters/database/schema/permission.schema.ts` - TypeORM schema
- `src/domain/repositories/permission.repository.ts` - Repository interface
- `src/infrastructure/adapters/database/repositories/permission.repository.impl.ts` - Repository implementation

**Key Features:**
- Primary key: auto-increment integer
- Methods: findById, findByName, findAll, save

### 5. Created User Entity & Infrastructure
**Files Created:**
... (truncated for brevity)