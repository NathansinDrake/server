import { IsNotEmpty, IsDateString, IsInt } from "class-validator";

export class CreateFormDto {
    @IsNotEmpty()
    @IsDateString()
    entrySchedule: Date;
  
    @IsNotEmpty()
    @IsInt()
    pcCount: number;
  
    @IsNotEmpty()
    @IsDateString()
    exitDate: Date;
  
    @IsNotEmpty()
    digitalSignature: string;
  }