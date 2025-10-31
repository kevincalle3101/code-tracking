import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StatusRepository } from 'src/domain/repositories/status.repository';
import { Status } from 'src/domain/entities/status.entity';
import { StatusSchema } from '../schema/status.schema';

@Injectable()
export class StatusRepositoryImpl implements StatusRepository {
    constructor(
        @InjectRepository(StatusSchema)
        private readonly typeormRepository: Repository<Status>
    ) { }

    async findAll(): Promise<Status[]> {
        return this.typeormRepository.find({})
    }

    async findById(id: number): Promise<Status | null> {
        return this.typeormRepository.findOneBy({ id })
    }

    async findByDescription(description: string): Promise<Status | null> {
        return this.typeormRepository.findOne({
            where: { description }
        })
    }

    async save(status: Status): Promise<Status> {
        return this.typeormRepository.save(status)
    }
}