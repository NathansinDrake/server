import {
  Controller,
  Get,
  Post,
  UseGuards,
  Request,
  Body,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UsersService } from '../services/users.service';
import { User } from '../entities/users.entity';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { CreateUserDto } from '../dto/create-user.dto';
import { Role } from 'src/jwt.config';
import { Roles } from 'src/roles/roles.decorator';
import { JwtAuthGuard } from 'src/roles/auth/jwt-auth.guard';

@Controller('users')
@ApiTags('Users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}


  @Get('me')
  @UseGuards(JwtAuthGuard)
  @Roles(Role.User)
  @ApiOperation({summary: 'Traer usuario'})
  getProfile(@Request() req) {
    return req.user;
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  @Roles(Role.Admin)
  @ApiOperation({summary: 'Crear un usuario'})
  async create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  
}
