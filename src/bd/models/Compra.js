
const sequelize = require("./bd")
const { Model, DataTypes } = require("sequelize");

class Compra extends Model { }
Compra.init(
    {
        fecha: {
            type: DataTypes.DATE,
            primaryKey: true,
           
        },
        precio:{
            type: DataTypes.REAL,
            
        }
    },
    {
        sequelize,
        modelName:"Compra",
    }
)


module.exports = Compra;