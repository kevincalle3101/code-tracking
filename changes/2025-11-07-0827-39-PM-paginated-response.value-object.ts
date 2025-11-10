export interface PaginatedResponse<T> {
    data: T[];
    pagination: Pagination;
}


export interface Pagination {
    nextCursor: string | null;
    hasMore: boolean;
}