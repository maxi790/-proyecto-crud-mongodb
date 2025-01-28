const express = require("express");
const userController = require("../controllers/userController");
const categoryController = require("../controllers/categoryController");  

const router = express.Router();


router.post("/user", userController.createUser); 
router.post("/login", userController.login);     


router.post("/category", categoryController.createCategory);  
router.get("/category", categoryController.getCategories);    
router.get("/category/:id", categoryController.getCategoryById); 
router.put("/category/:id", categoryController.updateCategory);
router.delete("/category/:id", categoryController.deleteCategory); 

module.exports = router;
