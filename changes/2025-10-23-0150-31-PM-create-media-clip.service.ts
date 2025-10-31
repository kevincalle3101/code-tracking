import { HttpException, HttpStatus } from "@nestjs/common";
import { Audit } from "../entities/audit.entity";
import { MediaClip } from "../entities/media-clip.entity";
import type { MediaClipRepository } from "../repositories/media-clip.repository";
import { MediaClipTagRegistrationService } from "./create-media-clip-tag.service";
import type { AuditRepository } from "../repositories/audit.repository";
import { DataSource } from "typeorm";
import { OrderStatus, OrderStatusValues } from "src/shared/enum/order-status";

export class MediaClipRegistrationService {
    constructor(
        private readonly mediaClipRepository: MediaClipRepository,
        private readonly auditRepository: AuditRepository,
        private readonly mediaClipTagRegistration: MediaClipTagRegistrationService,
        private readonly dataSource: DataSource
    ) { }

    async register(mediaClip: MediaClip, tags: string[], source: string): Promise<{ message: string, data: MediaClip }> {
        if (source === 'mediaEvent' && mediaClip.statusId) {
            const isValidStatus = OrderStatusValues.includes(mediaClip.statusId)
            if (!isValidStatus) {
                const validStatuses = Object.entries(OrderStatus)
                    .filter(([key]) => isNaN(Number(key)))
                    .map(([key, value]) => `${key}: ${value}`)
                    .join(', ')
                throw new HttpException(
                    `ID de estado inválido: ${mediaClip.statusId}. Los estados válidos son: ${validStatuses}`,
                    HttpStatus.BAD_REQUEST
                )
            }
        }
        const queryRunner = this.dataSource.createQueryRunner()
        await queryRunner.connect()
        await queryRunner.startTransaction()

        try {
            let savedClip: MediaClip
            let isUpdate = false

            if (mediaClip.code) {
                const existingClip = await this.mediaClipRepository.findByCode(mediaClip.code)
                if (existingClip) {
                    Object.assign(existingClip, {
                        ...(mediaClip.userId && { userId: mediaClip.userId }),
                        ...(mediaClip.title && { title: mediaClip.title }),
                        ...(mediaClip.description && { description: mediaClip.description }),
                        ...(mediaClip.ubigeo && { ubigeo: mediaClip.ubigeo }),
                        ...(mediaClip.duration && { duration: mediaClip.duration }),
                        ...(mediaClip.videoUrlLq && { videoUrlLq: mediaClip.videoUrlLq }),
                        ...(mediaClip.videoUrlHq && { videoUrlHq: mediaClip.videoUrlHq }),
... (truncated for brevity)