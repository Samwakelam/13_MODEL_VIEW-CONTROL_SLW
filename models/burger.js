// create the code that will call the ORM functions using burger specific input for the ORM.

const orm = require('../config/orm');


//what is this? 
// its creating an obkect with selectAll as the key and calling a callback function for the value

// --- allBurger --------------------------------------------------------------------
// this is the Model of the instance burger
// select ALL burgers 
// orm comes in from the orm file which is the SQL requests to the database. Using the select all function inside the file. 
// in orm - selectAll(callback){...}
// -----------------------------------------------------------------------------------
const selectAll = (callback) => {
   // console.log("what is orm? =", orm); 
  orm.selectAll(function (response) {
    // console.log("Burger.js page, selectAll response =", response);
    callback(response);
    // response is the result of the 'callback' parameter in the orm.js file 
    // here the callback parameter does the same and passes the response param to the function that called this.
    // burgers_controller.js
  });
}
  

const insertOne = (fields, callback) => {
  // console.log("calling insertOne fields =", fields); 

  orm.insertOne(fields, function(response){
    // console.log("Burger.js page, insertOne response =", response);
    callback(response);

  });
}

const updateOne = (fields, callback) => {
  console.log("calling updateOne fields =", fields); 

  orm.updateOne(fields, function(response){
    console.log("Burger.js page, updateOne response =", response);
    callback(response);

  });
}
  

  

// module.exports = {
//   allBurger,
//   insertBurger,
// }

exports.selectAll = selectAll; 
exports.insertOne = insertOne; 
exports.updateOne = updateOne; 









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