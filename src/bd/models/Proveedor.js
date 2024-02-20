
const sequelize = require("./bd")
const { Model, DataTypes } = require("sequelize");

class Proveedor extends Model { }
Proveedor.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name:{
            type: DataTypes.STRING,
            
        }
    },
    {
        sequelize,
        modelName:"Proveedores",
    }
)


module.exports = Proveedor;