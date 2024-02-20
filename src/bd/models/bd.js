const {Sequelize}= require('sequelize');
const sequelize= new Sequelize('tienda','root','',{
    host:"localhost",
    dialect:"mysql"
})
module.exports=sequelize;