import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserGlobalRole } from 'src/domain/entities/user-global-role.entity';
import { UserGlobalRoleRepository } from 'src/domain/repositories/user-global-role.repository';
import { UserGlobalRoleSchema } from '../schema/user-global-role.schema';

@Injectable()
export class UserGlobalRoleRepositoryImpl implements UserGlobalRoleRepository {
    constructor(
        @InjectRepository(UserGlobalRoleSchema)
        private readonly repository: Repository<UserGlobalRole>
    ) { }

    async findAll(): Promise<UserGlobalRole[]> {
        return await this.repository.find();
    }

    async find(userId: number, globalRoleId: number): Promise<UserGlobalRole | null> {
        return await this.repository.findOne({ where: { userId, globalRoleId } });
    }

    async save(userGlobalRole: UserGlobalRole): Promise<UserGlobalRole> {
        return await this.repository.save(userGlobalRole);
    }

    async delete(userId: number, globalRoleId: number): Promise<void> {
        await this.repository.delete({ userId, globalRoleId });
    }
}