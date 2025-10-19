import { Resource } from '../entities/resource.entity';
import { ResourceRepository } from '../repositories/resource.repository';

export class ResourceRegistrationService {
  constructor(private readonly resourceRepository: ResourceRepository) {}

  async register(resource: Resource): Promise<Resource> {
    const existingResource = await this.resourceRepository.findByName(resource.name);

    if (existingResource) {
      throw new Error(`El recurso con el nombre "${resource.name}" ya existe.`);
    }

    return this.resourceRepository.save(resource);
  }

    async getAll(): Promise<Resource[]> {
        return this.resourceRepository.findAll();
  }
}