import { bootstrapEnvironment } from './infrastructure/config/bootstrap-env';
bootstrapEnvironment();
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BadRequestException, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Logger } from 'nestjs-pino';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { writeFileSync } from 'fs';
import { join } from 'path';
import { AppConfig } from './infrastructure/config/interfaces/app-config.interface';
import { ValidationError } from 'class-validator';
import { buildError } from './application/dtos/response.dto';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true })
  app.useLogger(app.get(Logger));

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
    exceptionFactory: (validationErrors: ValidationError[] = []) => {
      const formattedErrors = validationErrors.map(error => ({
        field: error.property,
        errors: Object.values(error.constraints ?? {}),
      }));
      const message = 'Uno o más campos son inválidos';
      const errorPayload = buildError(message, formattedErrors);
      return new BadRequestException(errorPayload);
    },
  }));

  const config = new DocumentBuilder()
    .setTitle('MediaEvent API')
    .setDescription('Documentación de la API')
    .setVersion('1.0')
    .build()

  const document = SwaggerModule.createDocument(app, config, {
    include: [InfrastructureModule],
  })

  writeFileSync(join(__dirname, '..', 'swagger.json'), JSON.stringify(document, null, 2))

  SwaggerModule.setup('api-docs', app, document)

  const configService = app.get(ConfigService)
  const appConfig = configService.get<AppConfig>('app');
... (truncated for brevity)