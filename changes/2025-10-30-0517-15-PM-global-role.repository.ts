import { GlobalRole } from '../entities/global-role.entity';

export interface GlobalRoleRepository {
    findAll(): Promise<GlobalRole[]>;
    findById(id: number): Promise<GlobalRole | null>;
    findByName(name: string): Promise<GlobalRole | null>;
    save(globalRole: GlobalRole): Promise<GlobalRole>;
    deleteById(id: number): Promise<void>;
}

export const GLOBAL_ROLE_REPOSITORY = 'GLOBAL_ROLE_REPOSITORY';