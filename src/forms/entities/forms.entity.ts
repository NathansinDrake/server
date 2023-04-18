import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from 'src/users/entities/users.entity';

@Entity()
export class Form {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  entrySchedule: Date;

  @Column()
  pcCount: number;

  @Column()
  exitDate: Date;

  @Column()
  digitalSignature: string;

  @Column()
  creationDate: Date;

  @Column()
  updateDate: Date;

  @ManyToOne(() => User, user => user.forms)
  user: User;
}