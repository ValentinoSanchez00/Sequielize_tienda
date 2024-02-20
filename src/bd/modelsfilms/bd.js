const {Sequelize}= require('sequelize');
const sequelize= new Sequelize('peliculas','root','',{
    host:"localhost",
    dialect:"mysql"
})
module.exports=sequelize;