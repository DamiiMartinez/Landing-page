// server.js
const express = require('express');
const path = require('path');

const app = express();

// Servir archivos estáticos desde la carpeta "public"
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para probar si el servidor funciona
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'page.html'));
});

// Configurar el servidor para escuchar en el puerto 3000
app.listen(3000, () => {
    console.log('Servidor escuchando en http://localhost:3000');
});