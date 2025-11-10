export interface InteractionBufferSettings {
  flushCount: number;
  flushIntervalMs: number;
  sweepIntervalMs: number;
  redisTtlSeconds: number;
  drainBatchSize: number;
}

export const InteractionBufferSettingsToken = Symbol('InteractionBufferSettings');