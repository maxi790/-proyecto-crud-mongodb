const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
    const { username, password } = req.body;
     try {
         
        const user = await User.findOne({ username });

    if (!user) {
        return res.status(400).json({ message: "usuario no encontrado" });
    }
    
    const isMatch = await bcrypt.compare(password, user.password);
 
    if (!isMatch) {
        return res.status(400).json({ message: "contraseña incorrecta" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.json({ token });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al iniciar sesión" });
    }

};

