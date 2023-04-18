import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Form } from '../entities/forms.entity';
import { CreateFormDto } from '../dtos/create.forms.dto';

@Injectable()
export class FormsService {
  constructor(
    @InjectRepository(Form)
    private formRepository: Repository<Form>,
  ) {}

  async create(createFormDto: CreateFormDto): Promise<Form> {
    const form = this.formRepository.create(createFormDto);
    return this.formRepository.save(form);
  }

  async findAll(): Promise<Form[]> {
    return this.formRepository.find();
  }

  async findOne(id: any): Promise<Form> {
    return this.formRepository.findOne(id);
  }

  async update(id: any, updateFormDto: CreateFormDto): Promise<Form> {
    const form = await this.formRepository.findOne(id);
    form.entrySchedule = updateFormDto.entrySchedule;
    form.pcCount = updateFormDto.pcCount;
    form.exitDate = updateFormDto.exitDate;
    form.digitalSignature = updateFormDto.digitalSignature;
    form.updateDate = new Date();
    return this.formRepository.save(form);
  }

  async remove(id: number): Promise<void> {
    await this.formRepository.delete(id);
  }
}