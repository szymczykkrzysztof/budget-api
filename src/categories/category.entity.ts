import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  type Relation,
} from 'typeorm';
import { User } from '../users/user.entity.js';

@Entity('categories')
export class Category {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Column({ type: 'varchar', length: 7, default: '#888888' })
  color: string;

  @ManyToOne(() => User, { nullable: true, onDelete: 'CASCADE' })
  owner: Relation<User> | null;

  @CreateDateColumn()
  createdAt: Date;
}
