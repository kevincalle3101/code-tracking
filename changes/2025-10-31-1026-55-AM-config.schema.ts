import * as Joi from 'joi';

export const validationSchema = Joi.object({
  app: Joi.object({
    env: Joi.string()
    .valid('dev', 'prd', 'local')
    .default('dev'),
    port: Joi.number().default(3000),
  }),
  db: Joi.object({
    host: Joi.string().required(),
    port: Joi.number().default(5432),
    user: Joi.string().optional(), // For local
    password: Joi.string().optional(), // For local
    secretName: Joi.string().optional(), // For dev/prd
    database: Joi.string().required(),
  }),
  aws: Joi.object({
    region: Joi.string().required(),
    accessKeyId: Joi.string().allow(''),
    secretAccessKey: Joi.string().allow(''),
  }),
  redis: Joi.object({
    host: Joi.string().required(),
    port: Joi.number().default(6379),
    ttl: Joi.number().default(604800),
  }),
  cognito: Joi.object({
    userPoolId: Joi.string().required(),
    region: Joi.string().required(),
  }),
});