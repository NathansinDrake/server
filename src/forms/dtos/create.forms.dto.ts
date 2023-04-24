import { IsNotEmpty, IsDateString, IsInt } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateFormDto {
  @ApiProperty({
    example: '2023-04-30T09:00:00.000Z',
    description: 'Fecha de entrada programada',
    required: true,
  })
  @IsNotEmpty()
  @IsDateString()
  entrySchedule: Date;

  @ApiProperty({
    example: 10,
    description: 'Número de computadoras necesarias',
    required: true,
  })
  @IsNotEmpty()
  @IsInt()
  pcCount: number;

  @ApiProperty({
    example: '2023-04-30T18:00:00.000Z',
    description: 'Fecha de salida programada',
    required: true,
  })
  @IsNotEmpty()
  @IsDateString()
  exitDate: Date;

  @ApiProperty({
    example: 'abc123',
    description: 'Firma digital del usuario que solicita el formulario',
    required: true,
  })
  @IsNotEmpty()
  digitalSignature: string;
}
