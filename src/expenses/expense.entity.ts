import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  type Relation,
  UpdateDateColumn,
} from 'typeorm';
import { User } from '../users/user.entity.js';
import { Category } from '../categories/category.entity.js';

@Entity('expenses')
export class Expense {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ type: 'numeric', precision: 10, scale: 2 })
  amount: string;
  @Column({ type: 'varchar', length: 255, nullable: true })
  description: string;
  @Column({ type: 'date' })
  spentAt: string;

  @ManyToOne(() => User, (user) => user.expenses, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  user: Relation<User>;
  @ManyToOne(() => Category, { nullable: false, onDelete: 'NO ACTION' })
  category: Relation<Category>;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
