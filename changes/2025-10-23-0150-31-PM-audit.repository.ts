import { Audit } from "../entities/audit.entity";

export interface AuditRepository {
    save(audit: Audit): Promise<Audit>
    findAll(): Promise<Audit[]>
}
export const AUDIT_REPOSITORY = 'AUDIT_REPOSITORY'