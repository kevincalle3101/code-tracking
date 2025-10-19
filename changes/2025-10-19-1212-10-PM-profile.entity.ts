import { GlobalRole } from './global-role.entity';

export class Profile {
    id?: number;
    name: string;
    description?: string;
    globalRoles?: GlobalRole[];
}