const jwt = require("jsonwebtoken");

const authenticateJWT = (req, res, next) => {
    const token = req.headers. authorization?.replace("Bearer ", "");

    if (token) {
        return res .status(401).json({ message: "Acceso denegado" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(400).json({ message: "Token inválido" });
    }
};

module.exports = authenticateJWT;