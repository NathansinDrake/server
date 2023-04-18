import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Form } from './entities/forms.entity';
import { FormsService } from './services/forms.service';
import { FormsController } from './controllers/forms.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Form])],
  providers: [FormsService],
  controllers: [FormsController],
  exports: [FormsService],
})
export class FormModule {}