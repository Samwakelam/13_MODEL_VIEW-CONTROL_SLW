const express = require('express'); 
const exphbs = require('express-handlebars');
require('dotenv').config();

const controller = require('./controllers/burgers_controller'); 
const PORT = process.env.PORT || 3000 ;
const app = express(); 

// set up middleware
app.use(express.static('public'));

app.use(express.json()); 
// need routes from controller
app.use(controller); 

app.listen(PORT, function(){
	console.log("Server is listening on Port ", PORT); 
});