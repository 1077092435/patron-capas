const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

// Ruta para obtener todos los usuarios
router.get('/', userController.getAllUsers);

// Ruta para crear un nuevo usuario
router.post('/', userController.createUser);

module.exports = router;
