import * as Joi from 'joi';

export const validationSchema = Joi.object({
  NODE_ENV: Joi.string()
    .valid('dev', 'prd')
    .default('dev'),
  db: Joi.object({ // Valida el objeto 'db'
    host: Joi.string().required(),
    port: Joi.number().default(5432),
    username: Joi.string().required(),
    password: Joi.string().required(),
    database: Joi.string().required(),
  }),
  aws: Joi.object({ // Valida el objeto 'aws'
    region: Joi.string().required(),
    accessKeyId: Joi.string().allow(''), // Permite que esté vacío en prd
    secretAccessKey: Joi.string().allow(''), // Permite que esté vacío en prd
  }),
});