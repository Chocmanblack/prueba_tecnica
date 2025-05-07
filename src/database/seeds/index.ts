import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { Categoria } from '../../categorias/entities/categoria.entity';
import { seedCategorias } from './categoria.seed';

// Cargar variables de entorno
config();
const configService = new ConfigService();

// Configuración de la conexión a la base de datos
const dataSource = new DataSource({
  type: 'postgres',
  host: configService.get('POSTGRES_HOST'),
  port: configService.get('POSTGRES_PORT'),
  username: configService.get('POSTGRES_USER'),
  password: configService.get('POSTGRES_PASSWORD'),
  database: configService.get('POSTGRES_DB'),
  entities: [Categoria],
  synchronize: false,
});

// Función principal para ejecutar los seeds
async function runSeeds() {
  try {
    await dataSource.initialize();
    console.log('Conexión a la base de datos establecida');
    
    // Ejecutar seeds
    await seedCategorias(dataSource);
    
    console.log('Todos los seeds han sido ejecutados correctamente');
    process.exit(0);
  } catch (error) {
    console.error('Error al ejecutar los seeds:', error);
    process.exit(1);
  }
}

// Ejecutar la función de seeds
runSeeds();