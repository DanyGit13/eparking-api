import { NestFactory } from '@nestjs/core';
import express from 'express';
import { AppModule } from './app.module';







async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors:true});
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
