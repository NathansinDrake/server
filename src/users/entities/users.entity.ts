import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Form } from 'src/forms/entities/forms.entity';
import * as bcrypt from 'bcrypt'; 
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  document: string;

  @OneToMany(() => Form , Form => Form.user)
  forms: Form[];

  async comparePassword(candidatePassword: string): Promise<boolean> {
    return await bcrypt.compare(candidatePassword, this.password);
  }
}
