const express = require('express');
const productController = require('../controllers/productController');
const router = express.Router();

// Rutas de productos
router.get('/products', productController.getProducts);
router.post('/products', productController.createProduct);

module.exports = router;
