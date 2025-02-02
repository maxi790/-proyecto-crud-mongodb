const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.createUser = async (req, res) => {
    const { username, password, email } = req.body;
    try {
        
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: "Usuario ya existe" });
        }

        
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        
        const newUser = new User({
            username,
            password: hashedPassword,
            email,  
        });

        await newUser.save();
        res.status(201).json({ message: "Usuario creado exitosamente", user: newUser });
    } catch (error) {
        console.error("Error al crear usuario:", error);
        res.status(500).json({ message: "Error al crear usuario. Intenta nuevamente." });
    }
};

exports.login = async (req, res) => {
    const { username, password } = req.body;
    try {
        
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ message: "Usuario no encontrado" });
        }

        console.log('usuario encontrado, verificando contraseña');
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Contraseña incorrecta" });
        }

        
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        
        res.status(200).json({
            message: "Inicio de sesión exitoso",
            token: token,
        });
    } catch (error) {
        console.error("Error al iniciar sesión:", error); 
        res.status(500).json({ message: "Error al iniciar sesión. Intenta nuevamente." });
    }
};
