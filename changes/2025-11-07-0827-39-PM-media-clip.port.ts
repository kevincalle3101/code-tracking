import { MediaClip, UpdateMediaClip } from '../entities/media-clip.entity';
import { ClipListQuery } from '../value-objects/clip-list-query.value-object';
import { PaginatedResponse } from '../value-objects/paginated-response.value-object';
import { Response } from '../value-objects/response.value-object';
import { ClipInteractionUpdate } from '../value-objects/clip-interaction.value-object';

export interface MediaClipPort {
  createClip(eventData: MediaClip): Promise<Response<MediaClip>>;
  listClips(query: ClipListQuery): Promise<PaginatedResponse<MediaClip>>;
  updateClip(eventData: UpdateMediaClip): Promise<Response<MediaClip>>;
  bulkUpdateInteractions(updates: ClipInteractionUpdate[]): Promise<Response<void>>;
}

export const MediaClipPort = Symbol('MediaClipPort');