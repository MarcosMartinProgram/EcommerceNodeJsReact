const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const userRoutes = require('./src/routes/userRoutes');
const productRoutes = require('./src/routes/productRoutes');  // Rutas de productos
// Importar otras rutas...
console.log('Loaded userRoutes:', userRoutes); // Debugging
const app = express();

app.use(bodyParser.json());

// Usar las rutas de la API
app.use('/api', userRoutes);
app.use('/api', productRoutes);
// Usar otras rutas...

// Servir archivos estáticos del frontend
app.use(express.static(path.join(__dirname, '../../frontend/build')));

// Manejar rutas desconocidas redirigiendo al frontend
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../frontend/build', 'index.html'));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
