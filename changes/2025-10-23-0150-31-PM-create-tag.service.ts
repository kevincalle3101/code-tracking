import { HttpException, HttpStatus } from '@nestjs/common';
import { Tag } from '../entities/tag.entity';
import { TagRepository } from '../repositories/tag.repository';
import { DataSource } from 'typeorm';

export class TagRegistrationService {
    constructor(private readonly tagRepository: TagRepository,
        private readonly dataSource: DataSource) { }

    async register(tag: Tag): Promise<Tag> {
        if (!tag.description || tag.description.trim() == '') {
            throw new HttpException(
                'La descripción del tag no puede estar vacía',
                HttpStatus.BAD_REQUEST
            )
        }

        const normalizedDescription = tag.description.trim().toUpperCase()

        const existingTags = await this.tagRepository.findByDescriptions([normalizedDescription])
        const existingByDescription = existingTags.find(t => t.description.toUpperCase() == normalizedDescription)

        if (existingByDescription && existingByDescription.id != tag.id) {
            throw new HttpException(
                `Ya existe un tag con la descripción: "${normalizedDescription}"`,
                HttpStatus.CONFLICT
            )
        }

        if (tag.id) {
            const existing = await this.tagRepository.findById(tag.id)
            if (existing) {
                existing.description = normalizedDescription
                return this.tagRepository.save(existing)
            }
        }

        tag.description = normalizedDescription
        return this.tagRepository.save(tag)
    }

    async getAndRegister(tag: Tag): Promise<Tag> {
        if (!tag.description || tag.description.trim() == '') {
            throw new HttpException(
                'La descripción del tag no puede estar vacía',
                HttpStatus.BAD_REQUEST
            )
        }

        const normalizedDescription = tag.description.trim().toUpperCase()
... (truncated for brevity)