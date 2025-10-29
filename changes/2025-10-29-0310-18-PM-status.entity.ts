import { UserStatus } from "src/shared/enum/user-status";
import { User } from './user.entity';

export class Status {
    id?: UserStatus;
    description: string;
    users?: User[];
}