const request = require('supertest');
const app = require('../src/app');
const pool = require('../src/config/db');

describe('Pruebas de la API de Market (Hito 3)', () => {

  // Cerrar conexión del pool de la base de datos al finalizar todos los tests
  afterAll(async () => {
    await pool.end();
  });

  // 1. Prueba de ruta pública: Obtener todos los productos/posts
  test('GET /posts debe responder con status 200 y un array', async () => {
    const response = await request(app).get('/posts');
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  // 2. Prueba de ruta pública: Manejo de ruta o ID no existente (404)
  test('GET /posts/999999 debe responder con status 404 cuando la publicación no existe', async () => {
    const response = await request(app).get('/posts/999999');
    expect(response.statusCode).toBe(404);
  });

  // 3. Prueba de autenticación: Login con credenciales incorrectas (401)
  test('POST /login debe responder con status 401 si las credenciales son incorrectas', async () => {
    const response = await request(app)
      .post('/login')
      .send({
        email: 'usuario_inexistente@test.com',
        password: 'password_incorrecto'
      });
    expect(response.statusCode).toBe(401);
  });

  // 4. Prueba de autorización / Middleware: Ruta protegida sin Token JWT (401)
  test('GET /users/me debe responder con status 401 al intentar acceder sin Token', async () => {
    const response = await request(app).get('/users/me');
    expect(response.statusCode).toBe(401);
  });

});