
# Personal Multitools Backend

Este es el backend para la aplicación Personal Multitools, construido con Express.js y MongoDB.

## Requisitos Previos

- Node.js (v14 o superior)
- Docker y Docker Compose
- npm (Node Package Manager)

## Configuración Inicial

1. Instalar las dependencias necesarias:
```bash
npm install
npm install bcryptjs zod jsonwebtoken
```

2. Iniciar la base de datos MongoDB (usando Docker):
```bash
docker-compose up -d
```
Esto iniciará:
- MongoDB en el puerto 27017
- Mongo Express (interfaz web) en el puerto 8081
  - URL: http://localhost:8081
  - Credenciales MongoDB:
    - Usuario: root
    - Contraseña: example

## Iniciar el Servidor

Para iniciar el servidor en modo desarrollo:
```bash
npm run dev
```

El servidor se iniciará en:
- URL: http://localhost:3000
- El frontend debe estar corriendo en http://localhost:5173

## Estructura del Proyecto

- `/src`: Código fuente principal
  - `/controllers`: Controladores de la aplicación
  - `/middlewares`: Middlewares personalizados
  - `/models`: Modelos de MongoDB
  - `/routes`: Rutas de la API
  - `/schemas`: Esquemas de validación Zod

## Endpoints Principales

### Autenticación
- POST `/api/register`: Registro de usuarios
- POST `/api/login`: Inicio de sesión
- POST `/api/logout`: Cierre de sesión
- GET `/api/profile`: Obtener perfil del usuario

### Tareas
- GET `/api/tasks`: Obtener todas las tareas
- POST `/api/tasks`: Crear nueva tarea
- GET `/api/tasks/:id`: Obtener tarea específica
- PUT `/api/tasks/:id`: Actualizar tarea
- DELETE `/api/tasks/:id`: Eliminar tarea

## Solución de Problemas Comunes

Si encuentras problemas de conexión con npm:
```bash
npm config delete proxy
npm config delete https-proxy
npm config set registry https://registry.npmjs.org/
```

Si hay problemas con MongoDB:
1. Asegúrate que Docker está corriendo
2. Reinicia los contenedores:
```bash
docker-compose down
docker-compose up -d
```
```
