import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Categoria } from './entities/categoria.entity';

@Injectable()
export class CategoriasService {
  constructor(
    @InjectRepository(Categoria)
    private categoriasRepository: Repository<Categoria>,
  ) {}

  async findOne(id: number): Promise<Categoria> {
    const categoria = await this.categoriasRepository.findOne({ where: { id } });
    
    if (!categoria) {
      throw new NotFoundException('Categoría no encontrada');
    }
    
    return categoria;
  }
}