import { DataSource, DataSourceOptions } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';

// Cargar variables de entorno
config();
console.log('Variables de entorno cargadas correctamente'); // <-- Agregado para verificar

const configService = new ConfigService();

// Configuración del DataSource para migraciones
export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: configService.get('POSTGRES_HOST'),
  port: configService.get('POSTGRES_PORT'),
  username: configService.get('POSTGRES_USER'),
  password: configService.get('POSTGRES_PASSWORD'),
  database: configService.get('POSTGRES_DB'),
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
  synchronize: false,
};

// Crear y exportar el DataSource
const dataSource = new DataSource(dataSourceOptions);
console.log('DataSource configurado:', dataSourceOptions); // <-- Agregado para verificar

export default dataSource;