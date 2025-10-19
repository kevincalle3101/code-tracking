import { Role } from './role.entity';

export class Profile {
    id?: number;
    name: string;
    description?: string;
    roles?: Role[];
}