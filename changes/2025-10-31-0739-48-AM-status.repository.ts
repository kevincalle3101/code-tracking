import { Status } from '../entities/status.entity';

export const StatusRepository = Symbol('StatusRepository');

export interface StatusRepository {
    findById(id: number): Promise<Status | null>
    findByDescription(description: string): Promise<Status | null>
    findAll(): Promise<Status[]>
    save(status: Status): Promise<Status>
}