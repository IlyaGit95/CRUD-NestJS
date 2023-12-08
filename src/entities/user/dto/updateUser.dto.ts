import { IsEmail, IsString, IsISO8601, IsNotEmpty, IsEnum, MinLength } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger';

import { E_Gender } from '../types'

export class UpdateUserDto {
  @IsEmail()
  @ApiProperty()
  email: string

  @IsString()
  @MinLength(1)
  @ApiProperty()
  nameFirst: string

  @IsString()
  @MinLength(1)
  @ApiProperty()
  nameLast: string
 
  @IsISO8601()
  @ApiProperty({ required: false })
  birthDate: Date

  @IsNotEmpty()
  @IsEnum(E_Gender)
  @ApiProperty()
  gender: E_Gender
}