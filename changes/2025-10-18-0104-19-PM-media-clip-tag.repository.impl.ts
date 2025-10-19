import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MediaClipTagRepository } from 'src/domain/repositories/media-clip-tag.repository';
import { MediaClipTag } from 'src/domain/entities/media-clip-tag.entity';
import { MediaClipTagSchema } from '../schema/media-clip-tag.schema';

@Injectable()
export class MediaClipTagRepositoryImpl implements MediaClipTagRepository {
    constructor(
        @InjectRepository(MediaClipTagSchema)
        private readonly typeormRepository: Repository<MediaClipTag>
    ) { }

    async findAll(): Promise<MediaClipTag[]> {
        return this.typeormRepository.find()
    }

    async save(entities: MediaClipTag[]): Promise<void> {
        await this.typeormRepository.save(entities, { chunk: 10 })
    }

    async deleteByClipId(clipId: number): Promise<void> {
        await this.typeormRepository.delete({ clipId: clipId })
    }
}