import { User } from "../entities/user.entity";

export interface UserRepository {
    findById(id: number): Promise<User | null>;
    findByEmail(email: string): Promise<User | null>;
    findByCognitoSub(cognitoSub: string): Promise<User | null>;
    findAll(): Promise<User[]>;
    save(user: User): Promise<User>;
    softDelete(id: number): Promise<void>;
}

export const USER_REPOSITORY = 'USER_REPOSITORY';