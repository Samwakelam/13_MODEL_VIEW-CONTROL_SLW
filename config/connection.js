const mysql = require('mysql'); 
require('dotenv').config();
// console.log("process.env.CLEARDB_DATABASE_URL =", process.env.CLEARDB_DATABASE_URL); 
// create connection for mysql 
// if (process.env.CLEARDB_SILVER_URL){
// 	const con = mysql.createConnection(process.env.CLEARDB_SILVER_URL);

// } else {

	const con = mysql.createConnection({
		host: process.env.HOST,
		// cant call database on same port as the server
		port: process.env.MYSQL,
		user: process.env.USER,
		password: process.env.PASSWORD,
		database: process.env.DATABASE,
	});
// }

// const con = mysql.createPool({
// 	host: process.env.HOST,
// 	// cant call database on same port as the server
// 	port: process.env.MYSQL,
// 	user: process.env.USER,
// 	password: process.env.PASSWORD,
// 	database: process.env.DATABASE,
// });

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