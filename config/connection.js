// setup the code to connect Node to MySQL.


const mysql = require('mysql'); 
const { router } = require('../controllers/burgers_controller');
require('dotenv').config();

const con = mysql.createConnection({
	host: process.env.HOST,
	port: process.env.PORT,
	user: process.env.USER,
	password: process.env.PASSWORD,
	database: process.env.DATABASE,
});

// const databaseConnection = () => {
	con.connect(function (err) {
		if (err) throw err;
		// console.log("database connected");
	});
	return console.log("database connected");
// }
// make sure orm functions run on specific connection 


module.exports = con; 
// exports.databaseConnection = databaseConnection; 