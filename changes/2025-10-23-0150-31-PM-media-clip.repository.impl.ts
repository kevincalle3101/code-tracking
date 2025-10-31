import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MediaClipRepository } from 'src/domain/repositories/media-clip.repository';
import { MediaClip } from 'src/domain/entities/media-clip.entity';
import { MediaClipSchema } from '../schema/media-clip.schema';

@Injectable()
export class MediaClipRepositoryImpl implements MediaClipRepository {
    constructor(
        @InjectRepository(MediaClipSchema)
        private readonly typeormRepository: Repository<MediaClip>
    ) { }

    async findAll(): Promise<MediaClip[]> {
        return this.typeormRepository.find()
    }

    async save(mediaClip: MediaClip): Promise<MediaClip> {
        return this.typeormRepository.save(mediaClip)
    }

    async findByCode(code: string): Promise<MediaClip | null> {
        return this.typeormRepository.findOne({ where: { code } })
    }

    async deleteById(id: number): Promise<void> {
        await this.typeormRepository.delete({ id })
    }
}