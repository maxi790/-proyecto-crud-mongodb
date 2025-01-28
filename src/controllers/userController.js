const User = require("../models/userModel"); // Asegúrate de tener el modelo de usuario

// Crear un nuevo usuario
exports.createUser = async (req, res) => {
    try {
        const newUser = new User(req.body); // Asegúrate de que req.body tenga los datos necesarios
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Iniciar sesión (esto es solo un ejemplo básico)
exports.login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ message: "Usuario no encontrado" });
        }

        // Verificar contraseña (esto es un ejemplo, deberías usar bcrypt o algo similar)
        if (user.password !== password) {
            return res.status(400).json({ message: "Contraseña incorrecta" });
        }

        // Si todo es correcto
        res.status(200).json({ message: "Inicio de sesión exitoso", user });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
