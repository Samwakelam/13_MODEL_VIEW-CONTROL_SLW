const mysql = require('mysql'); 
require('dotenv').config();

// create connection for mysql 
// const con = mysql.createConnection({
// 	host: process.env.HOST,
// 	// cant call database on same port as the server
// 	port: process.env.MYSQL,
// 	user: process.env.USER,
// 	password: process.env.PASSWORD,
// 	database: process.env.DATABASE,
// });

const con = mysql.createPool({
	host: process.env.HOST,
	// cant call database on same port as the server
	port: process.env.MYSQL,
	user: process.env.USER,
	password: process.env.PASSWORD,
	database: process.env.DATABASE,
});

// connect to the database
con.connect(function (err) {
	if (err) {
		console.log("Error connection.js");
		throw err;
	}
		
	return console.log("database connected");
});


// export the connection 
module.exports = con;  