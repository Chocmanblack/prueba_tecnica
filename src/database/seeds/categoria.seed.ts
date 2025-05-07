import { DataSource } from 'typeorm';
import { Categoria } from '../../categorias/entities/categoria.entity';

export const seedCategorias = async (dataSource: DataSource): Promise<void> => {
  const categoriaRepository = dataSource.getRepository(Categoria);
  
  // Comprobar si ya existen datos
  const count = await categoriaRepository.count();
  if (count > 0) {
    console.log('La tabla categorias ya tiene datos, omitiendo seed.');
    return;
  }
  
  // Datos a insertar
  const categorias = [
    { id: 1, nombre: 'Neumáticos' },
    { id: 2, nombre: 'Chasis' },
    { id: 3, nombre: 'Motor' },
    { id: 4, nombre: 'Accesorios' },
  ];
  
  // Insertar datos
  await categoriaRepository.save(categorias);
  console.log('Seed de categorías completado exitosamente.');
};