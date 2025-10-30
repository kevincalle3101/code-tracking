export interface DbConfig {
    host: string;
    port: number;
    database: string;
    secretName?: string;
    user?: string;
    password?: string;
}