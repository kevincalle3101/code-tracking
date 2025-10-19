import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserRepository } from 'src/domain/repositories/user.repository';
import { User } from 'src/domain/entities/user.entity';
import { UserSchema } from '../schema/user.schema';

@Injectable()
export class UserRepositoryImpl implements UserRepository {
    constructor(
        @InjectRepository(UserSchema)
        private readonly typeormRepository: Repository<User>
    ) { }

    async findAll(): Promise<User[]> {
        return this.typeormRepository.find({
            relations: ['profile', 'status']
        });
    }

    async findById(id: number): Promise<User | null> {
        return this.typeormRepository.findOne({
            where: { id },
            relations: ['profile', 'status']
        });
    }

    async findByEmail(email: string): Promise<User | null> {
        return this.typeormRepository.findOne({
            where: { email },
            relations: ['profile', 'status']
        });
    }

    async findByCognitoSub(cognitoSub: string): Promise<User | null> {
        return this.typeormRepository.findOne({
            where: { cognitoSub },
            relations: ['profile', 'status']
        });
    }

    async save(user: User): Promise<User> {
        return this.typeormRepository.save(user);
    }

    async delete(id: number): Promise<void> {
        await this.typeormRepository.softDelete(id);
    }
}