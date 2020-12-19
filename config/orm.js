// create the methods that will execute the necessary MySQL commands in the controllers. 
// These are the methods you will need to use in order to retrieve and store data in your database.


const con = require('./connection'); 

console.log("con", con); 

const selectAll = (callback) => {

  const selAllSql = 
  `SELECT * FROM burgers`; 

  con.query(selAllSql, function (err, result){
    // console.log("Select ALl Result =", result); 
    if(err) throw err; 
    callback(result);

  });
}

const insertOne = (bName, isDevoured) => {

  const insOneSql = 
  ` INSERT INTO burgers (burger_name, devoured) VALUES (${bName}, ${isDevoured})`; 

  con.query(insOneSql, function(err, result){
    console.log("Insert One Result =", result); 

  });
}

const updateOne = (burgerName) => {

  const upDateOneSql = 
  `UPDATE burgers SET devoured = 'true' WHERE burger_name = '${burgerName}'`;

  con.query(upDateOneSql, function(err, result){
    console.log("Update One Result =", result); 

  });
}

module.exports = selectAll;

// exports.selectAll = selectAll; 
// exports.insertOne = insertOne; 
// exports.updateOne = updateOne;