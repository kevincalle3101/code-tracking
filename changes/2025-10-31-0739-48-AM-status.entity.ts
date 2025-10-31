import { RecordStatus } from "src/shared/enum/record-status";
import { User } from './user.entity';

export class Status {
    id?: RecordStatus;
    description: string;
    users?: User[];
}