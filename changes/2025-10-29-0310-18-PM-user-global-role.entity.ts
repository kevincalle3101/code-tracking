import { User } from './user.entity';
import { GlobalRole } from './global-role.entity';

export class UserGlobalRole {
    userId: number;
    globalRoleId: number;
    user?: User;
    globalRole?: GlobalRole;

    constructor(userId: number, globalRoleId: number) {
        this.userId = userId;
        this.globalRoleId = globalRoleId;
    }
}