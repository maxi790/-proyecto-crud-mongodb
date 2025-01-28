const express = require("express");
const productController = require("../controllers/productController"); // Corregido con la ruta relativa

const router = express.Router();

router.post("/", productController.createProduct); // Crear producto
router.get("/", productController.getAllProducts); // Listar productos
router.get("/:id", productController.getProductById); // Obtener producto por ID
router.put("/:id", productController.updateProduct); // Actualizar producto
router.delete("/:id", productController.deleteProduct); // Eliminar producto

module.exports = router;
