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
    username: Joi.string().required(),
    password: Joi.string().required(),
    database: Joi.string().required(),
  }),
  aws: Joi.object({
    region: Joi.string().required(),
    accessKeyId: Joi.string().allow(''),
    secretAccessKey: Joi.string().allow(''),
  }),
});