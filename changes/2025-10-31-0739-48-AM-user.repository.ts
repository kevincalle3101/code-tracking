import { User } from '../entities/user.entity';

export const UserRepository = Symbol('UserRepository');

export interface UserRepository {
    findAll(): Promise<User[]>;
    findById(id: number): Promise<User | null>;
    findByEmail(email: string): Promise<User | null>;
    findByCognitoSub(cognitoSub: string): Promise<User | null>;
    save(user: User): Promise<User>;
    deleteById(id: number): Promise<void>;
}