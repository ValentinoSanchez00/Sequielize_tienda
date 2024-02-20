const express = require("express");
const Cliente = require("./bd/models/Cliente");
const Producto = require("./bd/models/Producto");

const { Sequelize } = require("sequelize");

const app = express();
const bodyParse = require("body-parser")
app.use(express.json())
app.use(bodyParse.urlencoded({ extended: true }))
const router = require("./routes/v1/approutes")
app.use("/apitienda", router)
app.get("/", (req, res) => { res.send("Nos hemos conectado") })

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escucahndo en puerto ${PORT} 😎`)
    Cliente
        .sync({ force: true })
        .then(() => console.log("Conexion a la base de datos cliente conectada con exito 👌👌"))
        .catch((error) => console.log("Error: " + error + "✖✖"))
    Producto
        .sync({ force: true })
        .then(() => console.log("Conexion a la base de datos producto conectada con exito 👌👌"))
        .catch((error) => console.log("Error: " + error + "✖✖"))

})