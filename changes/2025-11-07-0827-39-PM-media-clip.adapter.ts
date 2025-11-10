import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { MediaClipPort } from 'src/domain/ports/media-clip.port';
import { MediaClip, UpdateMediaClip } from 'src/domain/entities/media-clip.entity';
import { ClipListQuery } from 'src/domain/value-objects/clip-list-query.value-object';
import { PaginatedResponse } from 'src/domain/value-objects/paginated-response.value-object';
import { ExternalConfig } from 'src/infrastructure/config/interfaces/external-config.interface';
import { firstValueFrom } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Response } from 'src/domain/value-objects/response.value-object';
import { ClipInteractionUpdate } from 'src/domain/value-objects/clip-interaction.value-object';


export enum OrderStatus {
    UPLOADING = 1,
    UPLOADED = 2,
    PUBLISHED = 3,
    DELETED = 4
}

@Injectable()
export class MediaClipAdapter implements MediaClipPort {
    private readonly logger = new Logger(MediaClipAdapter.name);

    constructor(
        private readonly configService: ConfigService,
        private readonly httpService: HttpService,
    ) { }

    async createClip(eventData: MediaClip): Promise<Response<MediaClip>> {
        const externalConfig = this.getConfig();
        const url = `${externalConfig.baseUrl}${externalConfig.createClipEndpoint}`;

        this.logger.log(`Creating media clip at: ${url}`);

        return firstValueFrom(
            this.httpService
                .post<Response<MediaClip>>(url, eventData)
                .pipe(
                    map((response) => response.data),
                    catchError((error) => this.handleHttpError('createClip', error))
                )
        );
    }

    async updateClip(eventData: UpdateMediaClip): Promise<Response<MediaClip>> {
        if (!eventData.code) {
            throw new Error('Clip code is required to update clip.');
        }
... (truncated for brevity)