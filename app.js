const express = require('express');
const userService = require('./services/userService');
const prompt = require('prompt-sync')();

const app = express();
const PORT = 3000;

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    interactWithUser();
});

// Función para interactuar con el usuario desde la terminal
function interactWithUser() {
    let exit = false;

    while (!exit) {
        console.log("\nOpciones:");
        console.log("1. Ver todos los usuarios");
        console.log("2. Crear un nuevo usuario");
        console.log("3. Salir");

        const option = prompt("Selecciona una opción: ");

        switch (option) {
            case '1':
                // Mostrar todos los usuarios
                const users = userService.getAllUsers();
                console.log("\nUsuarios actuales:", users);
                break;

            case '2':
                // Crear un nuevo usuario
                const name = prompt("Introduce el nombre del usuario: ");
                const email = prompt("Introduce el email del usuario: ");
                const newUser = userService.createUser({ name, email });
                console.log("\nNuevo usuario creado:", newUser);
                break;

            case '3':
                // Salir
                exit = true;
                console.log("Saliendo...");
                break;

            default:
                console.log("Opción no válida, intenta de nuevo.");
        }
    }
}
