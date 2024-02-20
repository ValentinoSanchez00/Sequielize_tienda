
const Cliente = require("./Cliente")
const Compra = require("./Compra")
const Producto = require("./Producto")
const Proveedor=require("./Proveedor")

//Esto es M:M
Producto.belongsToMany(Cliente, {through: Compra})
Cliente.belongsToMany(Producto, {through: Compra})

//Un Producto puede estar en muchas compras
Producto.hasMany(Compra)
//Una compra tiene solo 1 producto (Al devolver algo no vas a devolver todo)
Compra.belongsTo(Producto)

//Un cliente puede hacer muchas compras
Cliente.hasMany(Compra)
//Una compra ha sido comprada por 1 cliente
Compra.belongsTo(Cliente)


Proveedor.hasMany(Producto)
Producto.belongsTo(Proveedor)