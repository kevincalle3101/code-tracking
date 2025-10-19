import { Permission } from './permission.entity';

export class GlobalRole {
    id?: number;
    name: string;
    description?: string;
    permissions?: Permission[];
}