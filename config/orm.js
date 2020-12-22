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
    // console.log("orm.js page selectAll result =", result); 
    if(err) throw err;
    // does this return to the callback?  
    callback(result);
    // from what i can work out it is using the parameter 'callback' as a function (i can name this whatever if i wanted). 
    // it makes the parameter = the response from this result. 
    // burger.js

  });
}

// --- Insert One --------------------------------------------------------------------
// this will put a new burger into the database
// -----------------------------------------------------------------------------------
const insertOne = (bName, callback) => {
  console.log("bName =", bName); 

  const isDevoured = false;

  const insOneSql = 
  ` INSERT INTO burgers (burger_name, devoured) VALUES ('${bName}', ${isDevoured})`; 

  con.query(insOneSql, function(err, result){
    console.log("orm.js page insertOne result =", result); 
    if (err) throw err; 
    callback(result); 
  });
}

// --- Update One  --------------------------------------------------------------------
// this updates the burger to eaten status 
// may need amending to bugerId
// -----------------------------------------------------------------------------------
const updateOne = (burgerID, callback) => {
  console.log("orm.js page burgerID =", burgerID); 

  const upDateOneSql = 
  `UPDATE burgers SET devoured = 1 WHERE id = ${burgerID}`;

  con.query(upDateOneSql, function(err, result){
    console.log("orm.js page updateOne result =", result); 
    callback(result); 
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