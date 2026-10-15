# Marketplace — Hito 3: Desarrollo Backend

Este repositorio contiene la **API REST** desarrollada en Node.js y Express para el proyecto integrador **Marketplace**, encargada de la gestión de la base de datos PostgreSQL, autenticación de usuarios mediante JWT y ejecución de pruebas automatizadas.

---

## 📋 Descripción del Desafío

El objetivo principal de este hito es levantar un servidor backend robusto capaz de:
- Gestionar y persistir datos en una base de datos PostgreSQL usando el cliente `pg`.
- Proveer rutas de autenticación (registro e inicio de sesión con encriptación `bcryptjs`) y autorización segura mediante Tokens JWT.
- Implementar middlewares para la validación de credenciales y verificación de cabeceras de autorización (`Authorization: Bearer <token>`) en rutas privadas.
- Habilitar soporte para consultas de origen cruzado (`CORS`).
- Garantizar la calidad del código mediante la ejecución de tests automatizados de al menos 4 rutas utilizando `Jest` y `Supertest`.

---

## 🛠️ Tecnologías y Dependencias

- **Entorno de ejecución:** Node.js
- **Framework Web:** Express
- **Base de Datos:** PostgreSQL (con la librería `pg`)
- **Autenticación & Seguridad:** `jsonwebtoken`, `bcryptjs`
- **Integración & CORS:** `cors`
- **Variables de Entorno:** `dotenv`
- **Testing & Cobertura:** `jest`, `supertest`
- **Servidor de Desarrollo:** `nodemon`

---

## 📁 Estructura del Proyecto

```text
back_market/
├── BD/                 # Scripts SQL para creación e inicialización de tablas
├── src/
│   ├── config/         # Configuración y conexión a PostgreSQL (db.js)
│   ├── controllers/    # Lógica de controladores (auth, posts, favoritos)
│   ├── middlewares/    # Verification de JWT y validaciones de entrada
│   ├── routes/         # Definición de endpoints de la API REST
│   └── app.js          # Configuración del servidor Express
├── test/
│   └── server.test.js  # Pruebas automatizadas con Jest y Supertest
├── .env                # Variables de entorno (puerto, DB credentials, JWT secret)
└── package.json        # Dependencias y scripts de ejecución
```

🌐 Endpoints de la API REST
Rutas Públicas

- `POST /login` - Autenticación de usuario y retorno de Token JWT.
- `POST /users` - Registro de nuevos usuarios.
- `GET /posts` - Obtener el catálogo general de publicaciones.
- `GET /posts/:id` - Obtener el detalle de una publicación específica.

Rutas Privadas (Requieren Authorization: Bearer <token>)

- `GET /users/me` - Obtener datos del perfil del usuario autenticado.
- `POST /posts` - Crear una nueva publicación en el catálogo.
- `GET /favorites` - Obtener los productos marcados como favoritos por el usuario.
- `POST /favorites` - Agregar un producto a favoritos.
- `DELETE /favorites/:id` - Eliminar un producto de favoritos.
```

🚀 Instrucciones de Ejecución

1. Requisitos Previos
Tener una instancia de PostgreSQL en ejecución (local o en Docker) e importar el script SQL dentro de la carpeta BD/.

2. Configurar Variables de Entorno
Crea un archivo .env en la raíz de back_market basándote en el siguiente formato:

Fragmento de código

```bash
PORT=3000
DB_HOST=localhost
DB_USER=postgres
DB_PASSWORD=tu_password
DB_NAME=marketplace
DB_PORT=5432
JWT_SECRET=tu_clave_secreta
```

3. Instalación de Dependencias
```Bash
npm install
```

4. Modo Desarrollo
Para iniciar el servidor con recarga automática:

```Bash
npm run dev
```

5. Ejecución de Tests
Para ejecutar la suite de pruebas unitarias y de integración sobre las rutas:

```Bash
npm test
```