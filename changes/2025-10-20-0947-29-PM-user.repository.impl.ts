import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/domain/entities/user.entity';
import { UserRepository } from 'src/domain/repositories/user.repository';
import { UserSchema } from '../schema/user.schema';

@Injectable()
export class UserRepositoryImpl implements UserRepository {
    constructor(
        @InjectRepository(UserSchema)
        private readonly repository: Repository<User>
    ) { }

    async findAll(): Promise<User[]> {
        return await this.repository.find();
    }

    async findById(id: number): Promise<User | null> {
        return await this.repository.findOne({ where: { id } });
    }

    async findByEmail(email: string): Promise<User | null> {
        return await this.repository.findOne({ where: { email } });
    }

    async findByCognitoSub(cognitoSub: string): Promise<User | null> {
        return await this.repository.findOne({ where: { cognitoSub } });
    }

    async save(user: User): Promise<User> {
        return await this.repository.save(user);
    }

    async deleteById(id: number): Promise<void> {
        await this.repository.delete(id);
    }
}