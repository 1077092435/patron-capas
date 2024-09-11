// Base de datos en memoria (simulación)
let users = [];

// Función para obtener todos los usuarios
const getAllUsers = () => {
    return users;
};

// Función para crear un nuevo usuario
const createUser = (user) => {
    const newUser = { id: users.length + 1, ...user };
    users.push(newUser);
    return newUser;
};

module.exports = {
    getAllUsers,
    createUser
};
