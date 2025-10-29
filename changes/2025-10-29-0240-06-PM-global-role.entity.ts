import { UserGlobalRole } from './user-global-role.entity';
import { ProfileGlobalRole } from './profile-global-role.entity';
import { GlobalRolePermission } from './global-role-permission.entity';

export class GlobalRole {
    id?: number;
    name: string;
    description?: string;
    userGlobalRoles?: UserGlobalRole[];
    profileGlobalRoles?: ProfileGlobalRole[];
    globalRolePermissions?: GlobalRolePermission[];

    constructor(name: string, description?: string, id?: number) {
        this.name = name;
        this.description = description;
        this.id = id;
    }
}