# Prueba Técnica – Borealis

Este proyecto resuelve el desafío técnico solicitado por Borealis: una API REST construida con NestJS, conectada a una base de datos PostgreSQL y contenerizada con Docker. La API permite consultar una categoría por su ID y devuelve el nombre correspondiente desde la base de datos. 




### Versiones exactas del proyecto

- **NestJS**: `^11.0.1`
- **Node.js**: `20` 
- **PostgreSQL**: `14` 
- **Docker**: `28.0.4 `
- **Docker Compose**: `v2.34.0-desktop.1`

## Instrucciones paso a paso

### 1. Requisitos previos

Antes de comenzar, asegúrate de tener instaladas las siguientes herramientas en tu sistema:

- **[Docker](https://docs.docker.com/get-docker/)**  
- **[Docker Compose](https://docs.docker.com/compose/install/)**  
  (Docker Compose ya viene incluido en Docker Desktop para Windows y macOS)

Puedes verificar que ambas herramientas estén instaladas ejecutando los siguientes comandos en tu terminal:

```bash
docker -v
docker compose version
```

### 2. Clonar el repositorio

    ```bash
    git clone https://github.com/Chocmanblack/prueba_tecnica.git
    ```
    
     
### 3. Navega al directorio del proyecto:
    ```bash
    cd prueba_tecnica
    ```




### 4. Crear .env a partir de .env.example

- Copia el archivo `.env.example` para crear tu archivo `.env`:

```bash
cp .env.example .env
```

- Contenido del `.env.example`:

```
# Configuración de PostgreSQL
POSTGRES_USER=postgres
POSTGRES_PASSWORD=12345678
POSTGRES_DB=categorias_db
POSTGRES_HOST=postgres
POSTGRES_PORT=5432

# Configuración de la API
PORT=3000
NODE_ENV=development
```

### 5. Levantar el entorno con docker-compose up

```bash
docker-compose up -d
```

Este comando iniciará los contenedores de la API NestJS y PostgreSQL en segundo plano.

### 6. Ejecutar migraciones y seeds

Una vez que los contenedores estén en funcionamiento, ejecuta los siguientes comandos para crear la tabla de categorías y cargar los datos iniciales:

```bash
docker-compose exec api npm run migration:run
docker-compose exec api npm run seed
```

##  Cómo testear el endpoint con Postman

### URL base
```
http://localhost:3000
```

### Ruta completa
```
GET http://localhost:3000/categoria/:id
```



Donde `:id` es el identificador numérico de la categoría que deseas consultar (del 1 al 4).

### Headers
No se requieren headers especiales para esta operación.

### Pasos en Postman:
1. Abre Postman
2. Crea una nueva solicitud tipo GET
3. Ingresa la URL: `http://localhost:3000/categoria/1` (para consultar la categoría con ID 1)
4. Haz clic en "Send"
5. Deberías recibir una respuesta como: `{"id":1,"nombre":"Neumáticos"}`

## Cómo testear con cURL

Para consultar una categoría existente (ejemplo con ID 1):
```bash
curl http://localhost:3000/categoria/1
```

Para probar el caso de una categoría que no existe:
```bash
curl http://localhost:3000/categoria/15
```

##  Explicación de los archivos principales del proyecto

- **docker-compose.yml**: Define los servicios que componen la aplicación (API NestJS y PostgreSQL).
- **Dockerfile**: Contiene las instrucciones para construir la imagen Docker de la API NestJS.
- **src/main.ts**: Punto de entrada de la aplicación NestJS.
- **src/app.module.ts**: Módulo principal que configura la aplicación y la conexión a la base de datos.
- **src/categorias/categorias.controller.ts**: Define el endpoint para consultar categorías por ID.
- **src/categorias/categorias.service.ts**: Contiene la lógica para buscar categorías en la base de datos.
- **src/categorias/entities/categoria.entity.ts**: Define la estructura de datos de una categoría.
- **src/database/migrations/1746634613700-CreateCategoriasTable.ts**: Script para crear la tabla de categorías en la base de datos.
- **src/database/seeds/categoria.seed.ts**: Script para cargar los datos iniciales de categorías.
