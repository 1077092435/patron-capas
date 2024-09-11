Patrón de Capas

Aplicación basica realizada en Node.js con express

Logica del patron realizado:

1. app.js
Es el punto de entrada de la aplicación, donde se configura el servidor con Express y se gestiona la interacción con el usuario a través de la terminal, invocando los métodos de la capa de servicios para consultar o crear usuarios.

2. controllers/userController.js
Actúa como intermediario entre las rutas y la lógica de negocio, gestionando las solicitudes del cliente (en un entorno REST serían las solicitudes HTTP) y delegando la lógica a la capa de servicios para ejecutar las operaciones requeridas.

3. repositories/userRepository.js
Es responsable de gestionar el almacenamiento de datos, ya sea en memoria o en una base de datos, proporcionando métodos para recuperar y agregar usuarios. Esta capa abstrae el acceso a los datos, manteniendo la lógica de almacenamiento desacoplada del resto del sistema.

4. routes/userRoutes.js
Define las rutas de la API y las asocia con los métodos en el controlador, gestionando las peticiones de los clientes, como la recuperación o creación de usuarios, y conectando las solicitudes con el userController.

5. services/userService.js
Contiene la lógica de negocio de la aplicación, gestionando las operaciones de creación y consulta de usuarios, y utilizando el repositorio para acceder o modificar los datos sin preocuparse por los detalles de almacenamiento.