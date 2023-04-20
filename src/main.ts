import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from './users/entities/users.entity';
import { Form } from './forms/entities/forms.entity';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
   app.listen(3000);
}
bootstrap();
