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
import { buildError } from './application/dtos/response.dto';
import { ValidationError } from 'class-validator';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true })
  app.useLogger(app.get(Logger))
  app.setGlobalPrefix('auth');
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
  }))

  const config = new DocumentBuilder()
    .setTitle('AuthService API')
    .setDescription('Documentación de la API')
    .setVersion('1.0')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'JWT',
        description: 'Ingrese el token JWT de AWS Cognito',
        in: 'header',
      },
      'bearer',
    )
    .build()

  const document = SwaggerModule.createDocument(app, config, {
... (truncated for brevity)