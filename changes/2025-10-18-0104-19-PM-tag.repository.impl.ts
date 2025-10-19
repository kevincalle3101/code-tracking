import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TagRepository } from 'src/domain/repositories/tag.repository';
import { Tag } from 'src/domain/entities/tag.entity';
import { TagSchema } from '../schema/tag.schema';

@Injectable()
export class TagRepositoryImpl implements TagRepository {
    constructor(
        @InjectRepository(TagSchema)
        private readonly typeormRepository: Repository<Tag>
    ) { }

    async findAll(): Promise<Tag[]> {
        return this.typeormRepository.find({})
    }

    async findById(id: number): Promise<Tag | null> {
        return this.typeormRepository.findOneBy({ id })
    }

    async findByDescriptions(descriptions: string[]): Promise<Tag[]> {
        const upperCaseDescriptions = descriptions.map(desc => desc.toUpperCase())

        return this.typeormRepository
            .createQueryBuilder("tag")
            .where("UPPER(tag.description) IN (:...descriptions)", { descriptions: upperCaseDescriptions })
            .getMany()
    }

    async save(tag: Tag): Promise<Tag> {
        return this.typeormRepository.save(tag)
    }
}