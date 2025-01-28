const Category = require("../models/categoryModel"); // Asegúrate de tener el modelo de categoría

// Crear una nueva categoría
exports.createCategory = async (req, res) => {
    try {
        const newCategory = new Category(req.body); // Asegúrate de que req.body tenga los datos necesarios
        await newCategory.save();
        res.status(201).json(newCategory);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obtener todas las categorías
exports.getCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obtener una categoría por ID
exports.getCategoryById = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);
        if (!category) {
            return res.status(404).json({ message: "Categoría no encontrada" });
        }
        res.status(200).json(category);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Actualizar una categoría
exports.updateCategory = async (req, res) => {
    try {
        const updatedCategory = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedCategory) {
            return res.status(404).json({ message: "Categoría no encontrada" });
        }
        res.status(200).json(updatedCategory);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Eliminar una categoría
exports.deleteCategory = async (req, res) => {
    try {
        const deletedCategory = await Category.findByIdAndDelete(req.params.id);
        if (!deletedCategory) {
            return res.status(404).json({ message: "Categoría no encontrada" });
        }
        res.status(200).json({ message: "Categoría eliminada con éxito" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
