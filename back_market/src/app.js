// src/app.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');
const postRoutes = require('./routes/postRoutes');
const favRoutes = require('./routes/favRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares globales
app.use(cors());
app.use(express.json());

// Middleware para registrar peticiones en consola
app.use((req, res, next) => {
  console.log(`[${new Date().toLocaleTimeString()}] 📥 ${req.method} ${req.url} Desde IP: ${req.ip}`);
  next();
});

// Rutas de la API
app.use('/', authRoutes);
app.use('/posts', postRoutes);
app.use('/favorites', favRoutes);

// Exportar app para las pruebas
module.exports = app;

// Levantar el servidor solo si no se está ejecutando en entorno de pruebas (Jest)
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`🚀 Servidor ejecutándose en http://localhost:${PORT}`);
  });
}