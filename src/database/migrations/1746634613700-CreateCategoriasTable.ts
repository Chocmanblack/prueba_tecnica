import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCategoriasTable1746634613700 implements MigrationInterface {
    name = 'CreateCategoriasTable1746634613700'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
              new Table({
                name: 'categorias',
                columns: [
                  {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                  },
                  {
                    name: 'nombre',
                    type: 'varchar',
                    length: '100',
                    isNullable: false,
                  },
                ],
              }),
            );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('categorias');
    }

}
