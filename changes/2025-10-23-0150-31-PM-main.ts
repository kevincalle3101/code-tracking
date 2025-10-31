import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Logger } from 'nestjs-pino';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { writeFileSync } from 'fs';
import { join } from 'path';


async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true })
  app.useLogger(app.get(Logger))

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // Elimina propiedades que no están en el DTO
    forbidNonWhitelisted: true, // Lanza error si se envían propiedades no permitidas
    transform: true, // Transforma los payloads a instancias de DTO
  }))

  const config = new DocumentBuilder()
    .setTitle('MediaClip API')
    .setDescription('Documentación de la API')
    .setVersion('1.0')
    .build()

  const document = SwaggerModule.createDocument(app, config, {
    include: [InfrastructureModule],
  })

  writeFileSync(join(__dirname, '..', 'swagger.json'), JSON.stringify(document, null, 2))

  SwaggerModule.setup('api-docs', app, document)

  const configService = app.get(ConfigService)
  const port = configService.get<number>('PORT') || 3000

  await app.listen(port)
  console.log(`Server is running on port: ${port}`)
}
bootstrap()