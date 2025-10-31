import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AuditRepository } from 'src/domain/repositories/audit.repository';
import { Audit } from 'src/domain/entities/audit.entity';
import { AuditSchema } from '../schema/audit.schema';

@Injectable()
export class AuditRepositoryImpl implements AuditRepository {
    constructor(
        @InjectRepository(AuditSchema)
        private readonly typeormRepository: Repository<Audit>
    ) { }

    async findAll(): Promise<Audit[]> {
        return this.typeormRepository.find()
    }

    async save(audit: Audit): Promise<Audit> {
        return this.typeormRepository.save(audit)
    }
}