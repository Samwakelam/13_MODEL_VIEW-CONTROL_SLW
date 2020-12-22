const express = require('express');
const exphbs = require('express-handlebars');

const controller = require('./controllers/burgers_controller');
const PORT = process.env.PORT || 3000;
const app = express();

// set up middleware
app.use(express.static('public/'));

// sets up the express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars as the default template engine
// see npm express-handlebars documentation 
app.engine('handlebars', exphbs({
	// default layout is main. handlebars 
	defaultLayout: 'main',
})
);

// set view engin for the app 
app.set('view engine', 'handlebars');

// need routes from controller
app.use(controller);

app.listen(PORT, function () {
	console.log("Server is listening on Port ", PORT);
});