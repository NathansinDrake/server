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


@Controller('users')
@ApiTags('Users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}


  @Get('me')
  @ApiOperation({summary: 'Traer usuario'})
  getProfile(@Request() req) {
    return req.user;
  }

  @Post()
  @ApiOperation({summary: 'Crear un usuario'})
  async create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }
}
