const sequelize = require("./bd")
const { Model, DataTypes } = require("sequelize");

class Producto extends Model { }
Producto.init(
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
        modelName:"Producto",
    }
)
module.exports = Producto;