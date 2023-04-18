import { PartialType } from '@nestjs/mapped-types';
import { CreateFormDto } from './create.forms.dto';

export class UpdateFormDto extends PartialType(CreateFormDto) {}