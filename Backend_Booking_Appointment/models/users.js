const Sequelize= require('sequelize');
const sequelize = require('../util/database');

const User = sequelize.define('user', {
  id:{
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey:true
  },
 name: Sequelize.STRING,
  phone: {
    type: Sequelize.DOUBLE,
    allowNull: false
  },
  email:{
    type: Sequelize.STRING,
    allowNull: false
  }
});
module.exports=User;