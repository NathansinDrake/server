import { IsNotEmpty, IsEmail } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    description: 'Nombre del usuario',
    example: 'Juan',
  })
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty({
    description: 'Correo electrónico del usuario',
    example: 'juan@gmail.com',
  })
  @IsEmail()
  readonly email: string;

  @ApiProperty({
    description: 'Contraseña del usuario',
    example: 'myPassword123',
  })
  @IsNotEmpty()
  readonly password: string;
  
  @ApiProperty({
    description: 'Documento de identificación del usuario',
    example: '1234567890',
  })
  @IsNotEmpty()
  readonly document: string;
}
