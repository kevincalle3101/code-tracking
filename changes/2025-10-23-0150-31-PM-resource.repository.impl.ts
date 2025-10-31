import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Resource } from '../../../../domain/entities/resource.entity';
import { ResourceRepository } from '../../../../domain/repositories/resource.repository';
import { ResourceSchema } from '../schema/resource.schema';

// ADAPTADOR SECUNDARIO: Implementación del puerto de repositorio con PostgreSQL.
@Injectable()
export class ResourceRepositoryImpl implements ResourceRepository {
  constructor(
    @InjectRepository(ResourceSchema)
    private readonly typeormRepository: Repository<Resource>,
  ) {}

  findAll(): Promise<Resource[]> {
    return this.typeormRepository.find({});
  }

  findByName(name: string): Promise<Resource | null> {
    return this.typeormRepository.findOneBy({ name });
  }

  async findById(id: string): Promise<Resource | null> {
    return this.typeormRepository.findOneBy({ id });
  }

  async save(resource: Resource): Promise<Resource> {
    return this.typeormRepository.save(resource);
  }
}