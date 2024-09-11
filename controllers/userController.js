const userService = require('../services/userService');

// Controlador para obtener todos los usuarios
const getAllUsers = (req, res) => {
    const users = userService.getAllUsers();
    res.json(users);
};

// Controlador para crear un usuario
const createUser = (req, res) => {
    const { name, email } = req.body;
    const newUser = userService.createUser({ name, email });
    res.status(201).json(newUser);
};

module.exports = {
    getAllUsers,
    createUser
};
