import { Module } from '@nestjs/common';
import { Expense } from './expense.entity.js';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Expense])],
})
export class ExpensesModule {}
