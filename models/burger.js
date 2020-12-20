// create the code that will call the ORM functions using burger specific input for the ORM.

const orm = require('../config/orm');


//what is this? 
// its creating an obkect with selectAll as the key and calling a callback function for the value
const Burger = 
  {
    selectAll: function (callback) {
      console.log("orm =", orm); 
      orm.selectAll(function (response) {
        console.log("Burger.js page, selectAll response =", response);
        callback(response);
      });
    }
  }
  

module.exports = Burger;






// {
//   insertOne: function (callback) {
//     orm(function (response) {
//       console.log("Burger.js page, insertOne response =", response);
//       callback(response);
//     });
//   }
// }, 
// {
//   updateOne: function (callback) {
//     orm(function (response) {
//       console.log("Burger.js page, updateOne response =", response);
//       callback(response);
//     });
//   }
// }















//---------------------------------------------------------------------------------
// left in for self notes 
// --------------------------------------------------------------------------------
// do i need sequelize? - how do i use the SQL statments? 

// const { Sequelize, DataTypes } = require('sequelize');
// const sequelize = new Sequelize({
//   dialect:'mysql',
//   // storage: '../db/schema.sql'
//   //? does this need to be the same as con = connection ? 
// });

// const Burger = sequelize.define('burger', {
//   id: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//     primaryKey: true,
//     autoIncrement: true,
//   },
//   burger_name: {
//     type: DataTypes.STRING(100),
//     allowNull: false,
//   },
//   devoured: {
//     type: DataTypes.BOOLEAN,
//     allowNull: false,
//   },
// }, {
//   freezeTableName: true,
//   tableName: 'burgers',
//   timestamps: true,

// });


// await Burger.sync();
// console.log("The table for the Burger model was just created!"); 

// await sequelize.authenticate().then(() => {
//   console.log("Connected to database.");
// })