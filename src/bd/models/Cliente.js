const sequelize = require("./bd")
const { Model, DataTypes } = require("sequelize");

class Cliente extends Model { }
Cliente.init(
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
        modelName:"Cliente",
    }
)
module.exports = Cliente;