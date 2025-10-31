import { Clip } from "../entities/clip.entity";

export interface ClipAggregateCreateOptions {
    clip: Clip;
    tags: string[];
    auditPayload: unknown;
}

export interface ClipAggregateUpdateOptions {
    clip: Clip;
    tags?: string[];
    auditPayload: unknown;
    replaceTags: boolean;
}

export const ClipRepository = Symbol('ClipRepository');

export interface ClipCriteria {
    limit: number;
    sortBy: string;
    cursor?: string;
    userId?: string;
    tags?: string[];
}

export interface ClipList {
    list: Clip[];
    nextCursor: string | null;
    hasMore: boolean;
}

export interface ClipInteractionIncrement {
    clipCode: string;
    viewsIncrement: number;
    likesIncrement: number;
}

export interface ClipRepository {
    findAll(): Promise<Clip[]>
    list(query: ClipCriteria): Promise<ClipList>
    save(mediaClip: Clip): Promise<Clip>
    findByCode(code: string): Promise<Clip | null>
    deleteById(id: number): Promise<void>
    createAggregate(options: ClipAggregateCreateOptions): Promise<Clip>
    updateAggregate(options: ClipAggregateUpdateOptions): Promise<Clip>
    incrementInteractions(updates: ClipInteractionIncrement[]): Promise<void>
}