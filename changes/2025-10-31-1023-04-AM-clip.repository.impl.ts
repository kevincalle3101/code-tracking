import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ClipAggregateCreateOptions, ClipAggregateUpdateOptions, ClipCriteria, ClipInteractionIncrement, ClipList, ClipRepository } from 'src/domain/repositories/clip.repository';
import { Clip } from 'src/domain/entities/clip.entity';
import { ClipTag } from 'src/domain/entities/clip-tag.entity';
import { Tag } from 'src/domain/entities/tag.entity';
import { Audit } from 'src/domain/entities/audit.entity';
import { ClipSchema } from '../schema/clip.schema';

@Injectable()
export class ClipRepositoryImpl implements ClipRepository {
    private readonly logger = new Logger(ClipRepositoryImpl.name)
    constructor(
        @InjectRepository(ClipSchema)
        private readonly typeormRepository: Repository<Clip>
    ) { }

    async findAll(): Promise<Clip[]> {
        return this.typeormRepository.find()
    }

    async save(mediaClip: Clip): Promise<Clip> {
        return this.typeormRepository.save(mediaClip)
    }

    async createAggregate(options: ClipAggregateCreateOptions): Promise<Clip> {
        return this.typeormRepository.manager.transaction(async manager => {
            const clipRepository = manager.getRepository(Clip);
            const clipTagRepository = manager.getRepository(ClipTag);
            const tagRepository = manager.getRepository(Tag);
            const auditRepository = manager.getRepository(Audit);

            const clipToPersist = { ...options.clip };
            const persistedClip = await clipRepository.save(clipToPersist);
            persistedClip.source = clipToPersist.source ?? persistedClip.source;
            persistedClip.statusId = clipToPersist.statusId ?? persistedClip.statusId;

            const normalizedTags = this.normalizeTagDescriptions(options.tags);
            if (normalizedTags.length) {
                const resolvedTags = await this.resolveTags(tagRepository, normalizedTags);
                const clipTagRelations = resolvedTags.map(tag => {
                    const relation = new ClipTag(persistedClip.id!, tag.id!);
                    relation.tag = tag;
                    return relation;
                });
                await clipTagRepository.save(clipTagRelations, { chunk: 10 });
                persistedClip.clipTags = clipTagRelations;
                persistedClip.tags = resolvedTags.map(tag => tag.description);
            } else {
... (truncated for brevity)