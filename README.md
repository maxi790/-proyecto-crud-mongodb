

Proyecto CRUD MongoDB
Descripción
Este proyecto es una API RESTful para la gestión de productos y categorías, utilizando Node.js, Express, MongoDB y Mongoose. Permite crear, leer, actualizar y eliminar productos, y asociarlos con categorías.

Los productos están asociados a categorías, lo que permite tener una estructura organizada de datos. Los usuarios pueden interactuar con los productos a través de los endpoints de la API.

Tecnologías
Node.js: Entorno de ejecución de JavaScript.
Express.js: Framework web para Node.js.
MongoDB: Base de datos NoSQL.
Mongoose: ODM (Object Data Modeling) para MongoDB en Node.js.
Postman/Insomnia: Herramientas para probar los endpoints de la API.

Cómo correr el proyecto
1. Clonar el repositorio
Primero, clona el repositorio en tu máquina local:

bash
Copiar
git clone https://github.com/tu_usuario/tu_repositorio.git
cd tu_repositorio

2. Instalar dependencias
Instala las dependencias necesarias utilizando npm:

bash
Copiar
npm install

3. Configurar la base de datos
Asegúrate de tener MongoDB instalado y corriendo en tu máquina local o utiliza MongoDB Atlas para tener una base de datos en la nube. Si usas MongoDB Atlas, actualiza la URI de conexión en el archivo app.js.

Si usas MongoDB localmente, la URI de conexión por defecto debería ser:

bash
Copiar
mongodb://localhost:27017/tu_basededatos

4. Correr el servidor
Una vez que todo esté configurado, corre el servidor con el siguiente comando:

bash
Copiar
npm start
El servidor debería estar corriendo en http://localhost:5000.

Endpoints
1. Crear una categoría
Método: POST
Ruta: /api/categories
Descripción: Crea una nueva categoría.
Cuerpo de la solicitud (JSON):

json
Copiar
{
  "name": "Electronics"
}
Respuesta de ejemplo:

json
Copiar
{
  "_id": "60c72b2f5f5b2a001f6c2c85",
  "name": "Electronics",
  "__v": 0
}

2. Listar todas las categorías
Método: GET
Ruta: /api/categories
Descripción: Obtiene todas las categorías.
Respuesta de ejemplo:

json
Copiar
[
  {
    "_id": "60c72b2f5f5b2a001f6c2c85",
    "name": "Electronics",
    "__v": 0
  }
]

3. Crear un producto
Método: POST
Ruta: /api/products
Descripción: Crea un nuevo producto asociado a una categoría.
Cuerpo de la solicitud (JSON):

json
Copiar
{
  "name": "Laptop",
  "price": 1000,
  "categoryId": "60c72b2f5f5b2a001f6c2c85"  // ID de una categoría existente
}
Respuesta de ejemplo:

json
Copiar
{
  "_id": "60c72d5c8c8b8b001f6c2c86",
  "name": "Laptop",
  "price": 1000,
  "category": "60c72b2f5f5b2a001f6c2c85",
  "__v": 0
}

4. Listar todos los productos
Método: GET
Ruta: /api/products
Descripción: Obtiene todos los productos.
Respuesta de ejemplo:

json
Copiar
[
  {
    "_id": "60c72d5c8c8b8b001f6c2c86",
    "name": "Laptop",
    "price": 1000,
    "category": {
      "_id": "60c72b2f5f5b2a001f6c2c85",
      "name": "Electronics",
      "__v": 0
    },
    "__v": 0
  }
]

5. Eliminar un producto
Método: DELETE
Ruta: /api/products/:id
Descripción: Elimina un producto por su ID.
Respuesta de ejemplo:

json
Copiar
{
  "message": "Product deleted successfully"
}
Comandos para probar la aplicación
Crear una categoría
Método: POST
URL: http://localhost:5000/api/categories
Cuerpo de la solicitud:
json
Copiar
{
  "name": "Books"
}
Crear un producto
Método: POST
URL: http://localhost:5000/api/products
Cuerpo de la solicitud:
json
Copiar
{
  "name": "The Great Gatsby",
  "price": 15.99,
  "categoryId": "ID_DE_LA_CATEGORÍA"  // Reemplaza con el ID real de la categoría
}
Listar productos
Método: GET
URL: http://localhost:5000/api/products
Eliminar un producto
Método: DELETE
URL: http://localhost:5000/api/products/ID_DEL_PRODUCTO // Reemplaza con el ID real del producto
Estructura del proyecto
lua
Copiar
├── src
│   ├── controllers
│   │   ├── categoryController.js
│   │   └── productController.js
│   ├── models
│   │   ├── categoryModel.js
│   │   └── productModel.js
│   ├── routes
│   │   ├── categoryRoute.js
│   │   └── productRoute.js
│   ├── app.js
│   └── config
│       └── db.js
├── package.json
└── README.md
