import { Status } from "../entities/status.entity";

export interface StatusRepository {
    findById(id: number): Promise<Status | null>
    findByDescription(description: string): Promise<Status | null> 
    findAll(): Promise<Status[]>
    save(status: Status): Promise<Status>
}
export const STATUS_REPOSITORY = 'STATUS_REPOSITORY'