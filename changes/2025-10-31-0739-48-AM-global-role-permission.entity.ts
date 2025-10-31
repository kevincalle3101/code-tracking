import { GlobalRole } from './global-role.entity';
import { Permission } from './permission.entity';

export class GlobalRolePermission {
    globalRoleId: number;
    permissionId: number;
    globalRole?: GlobalRole;
    permission?: Permission;

    constructor(globalRoleId: number, permissionId: number) {
        this.globalRoleId = globalRoleId;
        this.permissionId = permissionId;
    }
}