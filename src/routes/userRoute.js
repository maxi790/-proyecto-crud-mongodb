const express = require("express");
const userController = require("../controllers/userController");
const categoryController = require("../controllers/categoryController");  
const authenticatejwt = require("../middlewares/authenticatejwt");  
const router = express.Router();


router.post("/", userController.createUser); 
router.post("/login", userController.login);     


router.post("/category", authenticatejwt, categoryController.createCategory);  
router.get("/category", categoryController.getCategories);    
router.get("/category/:id", categoryController.getCategoryById); 
router.put("/category/:id", authenticatejwt, categoryController.updateCategory);
router.delete("/category/:id", authenticatejwt, categoryController.deleteCategory); 

module.exports = router;
