import { ConflictException, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service.js';
import { RegisterDto } from './dto/register.dto.js';
import { User } from '../users/user.entity.js';
import { QueryFailedError } from 'typeorm';
import * as argon2 from 'argon2';
const PG_UNIQUE_VIOLATION = '23505';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async register(dto: RegisterDto): Promise<User> {
    if ((await this.usersService.findByEmail(dto.email)) !== null) {
      throw new ConflictException('Email already registered');
    }
    const passwordHash = await argon2.hash(dto.password);

    try {
      return await this.usersService.create(dto.email, passwordHash);
    } catch (error) {
      if (
        error instanceof QueryFailedError &&
        (error.driverError as { code?: string }).code === PG_UNIQUE_VIOLATION
      ) {
        throw new ConflictException('Email already registered');
      }
      throw error;
    }
  }
}
