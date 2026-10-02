import 'dotenv/config';
import { DataSource } from 'typeorm';
import { getTypeOrmConfig } from './config/typeorm.config.js';

export default new DataSource(getTypeOrmConfig());
