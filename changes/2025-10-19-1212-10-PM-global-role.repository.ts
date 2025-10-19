import { GlobalRole } from "../entities/global-role.entity";

export interface GlobalRoleRepository {
    findById(id: number): Promise<GlobalRole | null>;
    findByName(name: string): Promise<GlobalRole | null>;
    findAll(): Promise<GlobalRole[]>;
    save(globalRole: GlobalRole): Promise<GlobalRole>;
}

export const GLOBAL_ROLE_REPOSITORY = 'GLOBAL_ROLE_REPOSITORY';