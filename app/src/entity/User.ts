import {
  BeforeInsert, BeforeUpdate,
  Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn,
} from 'typeorm';
import {
  IsEmail, Max, Min, Validate,
} from 'class-validator';
import { Location } from '@app/src/validation/Location';
import { createHmac, createHash } from 'crypto';
import { Timezone } from '../validation/Timezone';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  private id: number;

  @Column({
    unique: true,
  })
  @Min(4)
  @Max(20)
  private username: string;

  @Column()
  private encryptedPassword: string;

  @Column()
  private salt: string;

  @Column({
    unique: true,
  })
  @IsEmail()
  private email: string;

  @Column({
    name: 'first_name',
  })
  @Min(2)
  @Max(20)
  private firstName: string;

  @Column({
    name: 'last_name',
  })
  @Min(2)
  @Max(20)
  private lastName: string;

  @Column()
  @Validate(Timezone)
  private timezone: string;

  @Column()
  @Validate(Location)
  private location: string;

  @CreateDateColumn({
    type: 'timestamp',
    name: 'created_at',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    name: 'updated_at',
  })
  updatedAt: Date;

  private password: string;

  @BeforeInsert()
  private generatePasswordFirstly() {
    this.salt = createHash('sha1').update(process.env.APP_SECRET).digest('hex');
    this.encryptedPassword = createHmac('sha512', this.salt)
      .update(this.password)
      .digest('hex');
  }

  @BeforeUpdate()
  private generatePassword() {
    this.encryptedPassword = createHmac('sha512', this.salt)
      .update(this.password)
      .digest('hex');
  }
}
