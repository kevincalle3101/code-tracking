import * as Joi from 'joi';

export const validationSchema = Joi.object({
  app: Joi.object({
    env: Joi.string()
      .valid('dev', 'prd', 'local')
      .default('dev'),
    port: Joi.number().default(3000),
  }),
  aws: Joi.object({
    region: Joi.string().required(),
    accessKeyId: Joi.string().allow(''),
    secretAccessKey: Joi.string().allow(''),
  }),
  redis: Joi.object({
    host: Joi.string().required(),
    port: Joi.number().required(),
    db: Joi.number().default(0),
    password: Joi.string().allow(''),
    keyPrefix: Joi.string().default('media-event'),
  }),
  interactions: Joi.object({
    buffer: Joi.object({
      flushCount: Joi.number().min(1).default(20),
      flushIntervalSeconds: Joi.number().min(1).default(60),
      sweepIntervalSeconds: Joi.number().min(1).default(15),
      redisTtlSeconds: Joi.number().min(60).default(600),
      maxDrainBatch: Joi.number().min(1).default(100),
    }).default(),
  }).default(),
  PORT: Joi.number().default(3000)
});