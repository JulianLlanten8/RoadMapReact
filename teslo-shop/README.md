# TESLO SHOP UNA TIENDA ONLINE DE PRODUCTOS DE APRENDIZAJE
Este es un proyecto de una tienda online de productos de aprendizaje, desarrollado con tecnologías modernas tanto en el backend como en el frontend siguiendo el curso de NestJS y React de Fernando Herrera.

![alt text](public/teslo-shop.webp)


## Tecnologías Utilizadas
- Backend: NestJS, TypeORM, PostgreSQL, Redis, Docker
- Frontend: BUN, React, Vite, TailwindCSS

## Requisitos Previos
- Tener Docker, OrbStack o alguna herramienta por el estilo instalada y corriendo en tu máquina.

## Instrucciones para Correr el Proyecto
- Tener Bun instalado para el frontend.

1. clonar los repos backend

```sh
git clone
```

2. clonar los archivos .env.template a .env

3. Desplegar el contenedor Docker del Backend

```sh
docker compose up -d
```

3. Frontend instalar los paquetes

```sh
bun i
```

4. Correr el frontend

```sh
bun run dev
```
