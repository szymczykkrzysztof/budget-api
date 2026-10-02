import 'dotenv/config';
import { readFileSync } from 'node:fs';
import type { DataSourceOptions } from 'typeorm';

export function getTypeOrmConfig(): DataSourceOptions {
  return {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT ?? '5432', 10),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: ['dist/**/*.entity.js'],
    migrations: ['dist/migrations/*.js'],
    synchronize: false,
    ssl: {
      ca: readFileSync(process.env.DB_CA_PATH ?? 'certs/ca.pem').toString(),
      rejectUnauthorized: true,
    },
  };
}
