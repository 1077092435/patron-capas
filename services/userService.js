const userRepository = require('../repositories/userRepository');

// Servicio para obtener todos los usuarios
const getAllUsers = () => {
    return userRepository.getAllUsers();
};

// Servicio para crear un usuario
const createUser = (user) => {
    return userRepository.createUser(user);
};

module.exports = {
    getAllUsers,
    createUser
};
