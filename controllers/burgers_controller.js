const express = require('express'); 
const exphbs = require('express-handlebars');

const burgerModel = require('../models/burger');

const router = express.Router();

// this will call the model function,

router.get("/api/burgers", function (req, res){
  // selectAll is the key from the burger model. under model.exports, 
  console.log(burgerModel); 
  burgerModel.selectAll(function(allBurgers){
    console.log("Controller page, router.get");
    // all_Burger is just a named key for this page here. 
    // displays an array of objects from the database. 
    console.log({burger: allBurgers});
    //put it in a json - all burgers is whatever it has got out of the database. 
    // we can set the handlebars index.handlebars in the server file. 
    // use res.render for handlebars 
    res.render('toEat', {burger: allBurgers}, function(err, html){
      //...
      if(err) throw err; 
      console.log("controller page, router.get res.render, html = ",'\n',html); 
      // set in the server.js file as app.engine default layout main 
      // app.set view engine sets the handlebars 
    }); 
  });
});

router.post("/api/burger", function (req, res){
  console.log("res.body POST =", res.body);
  console.log("res.params POST =", res.params);

}); 

router.put("/api/burger:id", function(req, res){
  console.log("res.body PUT =", res.body);
  console.log("res.params POST =", res.params);

});

router.get('/', function (req, res) {
  res.render('./views/layouts/main');
});

// routes are going to use your model 

module.exports = router; 