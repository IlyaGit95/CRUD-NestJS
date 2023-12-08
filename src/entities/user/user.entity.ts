import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { ApiProperty } from '@nestjs/swagger';

import { E_Gender } from './types'


@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number

  @Column({ name: 'email', type: 'varchar' })
  @ApiProperty()
  email: string

  @Column({ name: 'password', type: 'varchar' })
  @ApiProperty()
  password: string

  @Column({ name: 'name_first', type: 'varchar' })
  @ApiProperty()
  nameFirst: string

  @Column({ name: 'name_last', type: 'varchar' })
  @ApiProperty()
  nameLast: string

  @Column({ name: 'birth_date', type: 'timestamp', nullable: true })
  @ApiProperty({ required: false })
  birthDate: Date

  @Column({ name: 'gender', type: 'enum', enum: E_Gender, nullable: true })
  @ApiProperty()
  gender: E_Gender | null
}
