import { MigrationInterface, QueryRunner } from "typeorm"

export class alterTableState1680716950497 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
            ALTER TABLE STATE
                ADD uf varchar(2) NOT NULL;
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
            ALTER TABLE STATE
                drop uf;
        `)
    }

}
