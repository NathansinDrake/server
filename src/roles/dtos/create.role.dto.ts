import { ApiProperty } from '@nestjs/swagger';

export class CreateRoleDto {
  @ApiProperty({
    description: 'El nombre del role',
    example: 'admin',
  })
  readonly name: string;

  @ApiProperty({
    description: 'Listas de permisos de role',
    example: ['create', 'read', 'update', 'delete'],
    isArray: true,
  })
  readonly permissions: string[];
}
