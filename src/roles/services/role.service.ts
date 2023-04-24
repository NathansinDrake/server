import { Injectable } from '@nestjs/common';
import { Role } from '../role.interface';
import { CreateRoleDto } from '../dtos/create.role.dto';
import { UpdateRoleDto } from '../dtos/update.role.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class RolesService {
  private readonly roles: Role[] = [];

  create(createRoleDto: CreateRoleDto): Role {
    const role: Role = {
      id: uuidv4(),
      name: createRoleDto.name,
      permissions: createRoleDto.permissions,
    };
    this.roles.push(role);
    return role;
  }

  findAll(): Role[] {
    return this.roles;
  }

  findOne(id: string): Role {
    return this.roles.find((role) => role.id === id);
  }

  update(id: string, updateRoleDto: UpdateRoleDto): Role {
    const role = this.findOne(id);
    if (role) {
      if (updateRoleDto.name) {
        role.name = updateRoleDto.name;
      }
      if (updateRoleDto.permissions) {
        role.permissions = updateRoleDto.permissions;
      }
    }
    return role;
  }
}
