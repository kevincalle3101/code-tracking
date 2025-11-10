export enum ClipInteractionType {
  VIEW = 'view',
  LIKE = 'like',
}

export interface ClipInteractionEvent {
  clipId: string;
  type: ClipInteractionType;
  count: number;
  occurredAt?: number;
}

export interface ClipInteractionAggregate {
  clipId: string;
  views: number;
  likes: number;
  total: number;
  firstTimestamp: number;
  updatedAt: number;
}

export interface ClipInteractionUpdate {
  clipCode: string;
  viewsIncrement: number;
  likesIncrement: number;
}