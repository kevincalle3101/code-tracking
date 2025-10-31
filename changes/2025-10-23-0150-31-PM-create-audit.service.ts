import { HttpException, HttpStatus } from '@nestjs/common';
import { Audit } from '../entities/audit.entity';
import { AuditRepository } from '../repositories/audit.repository';

export class AuditRegistrationService {
    constructor(private readonly auditRepository: AuditRepository) { }

    async register(audit: Audit): Promise<Audit> {
        return this.auditRepository.save(audit)
    }

    async getAll(): Promise<Audit[]> {
        const audit = await this.auditRepository.findAll()
        if (!audit || audit.length == 0) {
            throw new HttpException('No se encontraron auditorías', HttpStatus.NOT_FOUND)
        }
        return audit
    }
}