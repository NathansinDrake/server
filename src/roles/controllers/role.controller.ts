import { Controller, Get, Post, Put, Body, Param, UseGuards } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiResponse, ApiBadRequestResponse } from '@nestjs/swagger';
import { RolesService } from '../services/role.service';
import { Role } from '../role.interface';
import { CreateRoleDto } from '../dtos/create.role.dto';
import { UpdateRoleDto } from '../dtos/update.role.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../roles.guard';
import { Roles } from '../roles.decorator';

@ApiTags('Roles')
@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @ApiBearerAuth()
  @ApiResponse({
    status: 201,
    description: 'El rol ha sido creado exitosamente.',
  })
  @ApiBadRequestResponse({
    description: 'Bad Request: El objeto enviado no cumple con el formato esperado.',
  })
  async create(@Body() createRoleDto: CreateRoleDto): Promise<Role> {
    return this.rolesService.create(createRoleDto);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin', 'user')
  @ApiBearerAuth()
  @ApiResponse({
    status: 200,
    description: 'El rol ha sido encontrado exitosamente.',
  })
  @ApiBadRequestResponse({
    description: 'Bad Request: El ID enviado no es válido.',
  })
  async findOne(@Param('id') id: string): Promise<Role> {
    return this.rolesService.findOne(id);
  }

  @Get()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @ApiBearerAuth()
  @ApiResponse({
    status: 200,
    description: 'Los roles han sido encontrados exitosamente.',
  })
  async findAll(): Promise<Role[]> {
    return this.rolesService.findAll();
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @ApiBearerAuth()
  @ApiResponse({
    status: 200,
    description: 'El rol ha sido actualizado exitosamente.',
  })
  @ApiBadRequestResponse({
    description: 'Bad Request: El ID enviado no es válido o el objeto enviado no cumple con el formato esperado.',
  })
  async update(@Param('id') id: string, @Body() updateRoleDto: UpdateRoleDto): Promise<Role> {
    return this.rolesService.update(id, updateRoleDto);
  }
}
