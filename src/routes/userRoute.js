const express = require("express");
const userController = require("../controllers/userController");
const categoryController = require("../controllers/categoryController");  // Asegúrate de importar el controlador de categoría

const router = express.Router();

// Rutas de usuario
router.post("/user", userController.createUser); // Ruta para crear usuario
router.post("/login", userController.login);     // Ruta para iniciar sesión

// Rutas de categoría
router.post("/category", categoryController.createCategory);  // Ruta para crear categoría
router.get("/category", categoryController.getCategories);    // Obtener todas las categorías
router.get("/category/:id", categoryController.getCategoryById); // Obtener categoría por ID
router.put("/category/:id", categoryController.updateCategory); // Actualizar categoría
router.delete("/category/:id", categoryController.deleteCategory); // Eliminar categoría

module.exports = router;
