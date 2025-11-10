export interface RedisConfig {
  host: string;
  port: number;
  db?: number;
  password?: string;
  keyPrefix?: string;
  tls?: {
    rejectUnauthorized?: boolean;
  };
}