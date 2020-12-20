// create the methods that will execute the necessary MySQL commands in the controllers. 
// These are the methods you will need to use in order to retrieve and store data in your database.


const con = require('./connection.js'); 

// --- Select All --------------------------------------------------------------------
// this gets all the burgers from the database 
// -----------------------------------------------------------------------------------
const selectAll = (callback) => {

  const selAllSql = 
  `SELECT * FROM burgers;`; 

  con.query(selAllSql, function (err, result){
    console.log("orm.js page selectAll result =", result); 
    if(err) throw err; 
    callback(result);

  });
}

const insertOne = (bName, isDevoured) => {

  const insOneSql = 
  ` INSERT INTO burgers (burger_name, devoured) VALUES (${bName}, ${isDevoured})`; 

  con.query(insOneSql, function(err, result){
    console.log("orm.js page insertOne result =", result); 

  });
}

const updateOne = (burgerName) => {

  const upDateOneSql = 
  `UPDATE burgers SET devoured = 'true' WHERE burger_name = '${burgerName}'`;

  con.query(upDateOneSql, function(err, result){
    console.log("orm.js page updateOne result =", result); 

  });
}

// module.exports = {
//   selectAll: selectAll,
//   insertOne: insertOne,
//   updateOne: updateOne,
// }

exports.selectAll = selectAll; 
exports.insertOne = insertOne; 
exports.updateOne = updateOne;