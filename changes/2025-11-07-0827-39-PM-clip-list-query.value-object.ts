export interface ClipListQuery {
    limit?: number;
    cursor?: string;
    tags?: string;
    sortBy: string;
    userId?: string;
}