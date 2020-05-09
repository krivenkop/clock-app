import {
  Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  private id: number;

  @Column({
    unique: true,
  })
  private username: string;

  @Column()
  private password: string;

  @Column()
  private salt: string;

  @Column({
    unique: true,
  })
  private email: string;

  @Column({
    name: 'first_name',
  })
  private firstName: string;

  @Column({
    name: 'last_name',
  })
  private lastName: string;

  @Column()
  private timezone: string;

  @Column()
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
}
