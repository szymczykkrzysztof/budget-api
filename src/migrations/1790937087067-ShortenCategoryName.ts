import { MigrationInterface, QueryRunner } from 'typeorm';

export class ShortenCategoryName1790937087067 implements MigrationInterface {
  name = 'ShortenCategoryName1790937087067';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "categories" ALTER COLUMN "name" TYPE character varying(100)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "categories" ALTER COLUMN "name" TYPE character varying(255)`,
    );
  }
}
