import { EntitySchema } from 'typeorm';
import { Resource } from '../../../../domain/entities/resource.entity';

// Esquema de TypeORM para mapear la entidad de dominio a la tabla de la DB.
export const ResourceSchema = new EntitySchema<Resource>({
  name: 'Resource',
  target: Resource,
  columns: {
    id: {
      type: 'uuid',
      primary: true,
    },
    name: {
      type: 'varchar',
    },
    createdAt: {
      name: 'created_at',
      type: 'timestamp with time zone',
    },
  },
});