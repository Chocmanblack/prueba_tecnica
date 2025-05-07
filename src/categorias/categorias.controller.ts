import { Controller, Get, Param, ParseIntPipe, HttpException, HttpStatus } from '@nestjs/common';
import { CategoriasService } from './categorias.service';

@Controller('categoria')
export class CategoriasController {
  constructor(private readonly categoriasService: CategoriasService) {}

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    try {
      return await this.categoriasService.findOne(id);
    } catch (error) {
      if (error.message === 'Categoría no encontrada') {
        throw new HttpException({ error: 'Categoría no encontrada' }, HttpStatus.NOT_FOUND);
      }
      throw error;
    }
  }
}