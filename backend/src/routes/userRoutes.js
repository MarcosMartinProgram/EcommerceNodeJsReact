const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

console.log('Loaded userController:', userController); // Debugging

router.post('/users', userController.createUser);
router.get('/users/:id', userController.getUser);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

module.exports = router;
