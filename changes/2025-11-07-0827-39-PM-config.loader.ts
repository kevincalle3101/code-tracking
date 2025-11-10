import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';
import { join } from 'path';
import { QueuesConfig } from './interfaces/consumer-config.interface';

export const configLoader = () => {
  const env = process.env.NODE_ENV || 'dev';
  const filePath = join(process.cwd(), 'config', `${env}.yml`);

  console.log(`Loading configuration from ${env}`);
  console.log(`Loading configuration from ${filePath}`);
  
  const config = yaml.load(
    readFileSync(filePath, 'utf8'),
  ) as Record<string, any>;
  console.log(`Loading configuration from ${JSON.stringify(config)}`);

  if (config.queues && Array.isArray(config.queues)) {
    config.queues.forEach((queue: QueuesConfig) => {
      const envVarName = `${queue.name.toUpperCase().replace(/-/g, '_')}`;
      console.log(`TOPIC: ${envVarName}`)
      process.env[envVarName] = queue.name;
    });
  }

  return config;
};