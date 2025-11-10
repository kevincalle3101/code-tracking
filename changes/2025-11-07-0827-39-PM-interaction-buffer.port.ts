import { ClipInteractionAggregate, ClipInteractionEvent } from '../value-objects/clip-interaction.value-object';

export interface InteractionBufferPort {
  increment(event: ClipInteractionEvent): Promise<ClipInteractionAggregate>;
  drain(clipId: string): Promise<ClipInteractionAggregate | null>;
  drainExpired(cutoffEpochMs: number, limit: number): Promise<ClipInteractionAggregate[]>;
}

export const InteractionBufferPort = Symbol('InteractionBufferPort');