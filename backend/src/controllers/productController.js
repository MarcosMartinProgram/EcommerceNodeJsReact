const pool = require('../../config/db');

// Obtener todos los productos
exports.getProducts = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM Products');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
};

// Crear un nuevo producto
exports.createProduct = async (req, res) => {
  const { name, description, price, stock } = req.body;
  try {
    const [result] = await pool.query('INSERT INTO Products (name, description, price, stock, created_at) VALUES (?, ?, ?, ?, NOW())', [name, description, price, stock]);
    res.status(201).json({ id: result.insertId, name, description, price, stock });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create product' });
  }
};
