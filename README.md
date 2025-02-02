#                                                                                    Proyecto CRUD con MongoDB
Descripción
Este proyecto es una API RESTful que permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre productos y categorías utilizando Node.js, Express, MongoDB y Mongoose.

La aplicación está diseñada para gestionar productos, permitiendo crear nuevos productos, listarlos, actualizar su información y eliminarlos. Además, permite gestionar categorías asociadas a cada producto.


# Tecnologías Utilizadas

Node.js: Entorno de ejecución de JavaScript para el lado del servidor.

Express: Framework web para Node.js para manejar las rutas y solicitudes HTTP.

MongoDB: Base de datos NoSQL para almacenar los datos de los productos y categorías.

Mongoose: Librería de modelado de datos para MongoDB en Node.js, facilitando la interacción con la base de datos.

Postman (opcional): Herramienta para probar las API REST.

Instrucciones para Ejecutar el Proyecto

# 1. Clonar el repositorio

Clona este repositorio a tu máquina local utilizando el siguiente comando:

bash
Copiar
git clone https://github.com/tu_usuario/proyecto-crud-mongodb.git


# 2. Instalar las dependencias
Dirígete al directorio del proyecto y ejecuta el siguiente comando para instalar las dependencias necesarias:

bash
Copiar
cd proyecto-crud-mongodb
npm install


# 3. Configurar MongoDB
Asegúrate de tener MongoDB instalado y en funcionamiento. Si no tienes MongoDB en tu máquina local, puedes utilizar MongoDB Compass o una instancia de MongoDB en la nube como MongoDB Atlas.

En tu archivo app.js, asegúrate de que la URL de conexión de MongoDB sea la correcta. Por ejemplo:

js
Copiar
mongoose.connect('mongodb://localhost:27017/mi-base-de-datos', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


# 4. Ejecutar la aplicación
Para iniciar el servidor, ejecuta el siguiente comando:

bash
Copiar
npm start
La aplicación estará corriendo en el puerto 5000 (o el puerto que hayas configurado) y la URL será http://localhost:5000.

# Endpoints Disponibles
Productos

POST /api/products: Crear un nuevo producto

GET /api/products: Obtener todos los productos

GET /api/products/:id: Obtener un producto por su ID

PUT /api/products/:id: Actualizar un producto

DELETE /api/products/:id: Eliminar un producto

# Categorías

POST /api/categories: Crear una nueva categoría

GET /api/categories: Obtener todas las categorías

GET /api/categories/:id: Obtener una categoría por su ID

PUT /api/categories/:id: Actualizar una categoría

DELETE /api/categories/:id: Eliminar una categoría

# Ejemplos de Datos Mock para POST


Cuando realizas un POST a la ruta /api/users, puedes enviar estos datos para crear un nuevo usuario.

{

  "username": "usuarioPrueba",

  "password": "Contraseña123",

  "email": "usuario@example.com"

}






Crear Producto (POST /api/products)

json

Copiar

{

	"name": "Producto Ejemplo",
  
	"price": 150,
  
	"description": "Descripción del producto ejemplo",
  
	"category": "605c72ef1532073ff597f7f"  // ID de categoría existente
}

Crear Categoría (POST /api/categories)

json

Copiar

{

	"name": "Electrónica",
  
	"description": "Productos electrónicos como teléfonos, computadoras, etc."
}

# Contribuciones

Si deseas contribuir a este proyecto, sigue estos pasos:

Haz un fork del repositorio

Crea una nueva rama (git checkout -b feature/nueva-funcionalidad)

Realiza tus cambios y haz un commit (git commit -am 'Añadir nueva funcionalidad')

Sube tus cambios a tu fork (git push origin feature/nueva-funcionalidad)
Crea un pull request para que tus cambios sean revisados y fusionados.
