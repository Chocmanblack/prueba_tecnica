import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('categorias')
export class Categoria {
  @PrimaryColumn()
  id: number;

  @Column()
  nombre: string;
}