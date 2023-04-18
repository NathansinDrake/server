import {
    Controller,
    Get,
    Post,
    Body,
    Put,
    Param,
    Delete,
  } from '@nestjs/common';
  import { FormsService } from '../services/forms.service';
  import { CreateFormDto } from '../dtos/create.forms.dto';
  import { Form } from '../entities/forms.entity';
  
  @Controller('forms')
  export class FormsController {
    constructor(private readonly formService: FormsService) {}
  
    @Post()
    create(@Body() createFormDto: CreateFormDto): Promise<Form> {
      return this.formService.create(createFormDto);
    }
  
    @Get()
    findAll(): Promise<Form[]> {
      return this.formService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id') id: string): Promise<Form> {
      return this.formService.findOne(+id);
    }
  
    @Put(':id')
    update(
      @Param('id') id: string,
      @Body() updateFormDto: CreateFormDto,
    ): Promise<Form> {
      return this.formService.update(+id, updateFormDto);
    }
  
    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
      return this.formService.remove(+id);
    }
  }