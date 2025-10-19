import { EntitySchema } from 'typeorm';
import { Audit } from 'src/domain/entities/audit.entity';

export const AuditSchema = new EntitySchema<Audit>({
    name: 'Audit',
    target: Audit,
    columns: {
        id: { type: 'int', primary: true, generated: true },
        clipId: { type: 'int' },
        statusId: { type: 'int' },
        body: { type: 'text' },
        source: { type: 'varchar', length: 25 },
        createDate: { type: 'timestamp', default: () => 'NOW()' },
        updateDate: { type: 'timestamp', default: () => 'NOW()' }
    }
})