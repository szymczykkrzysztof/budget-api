import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';
import { Transform } from 'class-transformer';

export class RegisterDto {
  @Transform(({ value }) =>
    typeof value === 'string' ? value.trim().toLowerCase() : value,
  )
  @MaxLength(255)
  @IsEmail()
  email: string;
  @MaxLength(128)
  @MinLength(8)
  @IsString()
  password: string;
}
