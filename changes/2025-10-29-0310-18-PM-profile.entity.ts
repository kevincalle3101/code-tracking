import { User } from './user.entity';
import { ProfileGlobalRole } from './profile-global-role.entity';

export class Profile {
    id?: number;
    name: string;
    description?: string;
    createdAt?: Date;
    updatedAt?: Date;
    users?: User[];
    profileGlobalRoles?: ProfileGlobalRole[];

    constructor(name: string, description?: string) {
        this.name = name;
        this.description = description;
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
}