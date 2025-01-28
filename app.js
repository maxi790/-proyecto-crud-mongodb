const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const conectDB = require("./src/db/conexion");

const productroute = require("./src/routes/productRoute");
const categoryroute = require("./src/routes/categoryRoute");
const userroute = require("./src/routes/userRoute");

dotenv.config();

conectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/products", productroute);
app.use("/api/categories", categoryroute);
app.use("/api/users", userroute);

app.get("/", (req, res) => {
    res.send("bienvenido a la api de productos");
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`servidor corriendo en el puerto ${port}`);
});