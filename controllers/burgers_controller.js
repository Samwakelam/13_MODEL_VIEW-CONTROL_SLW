const express = require('express'); 
const exphbs = require('express-handlebars');

const burger = require('../models/burger');

const router = express.Router();

// this will call the model function,

router.get("/api/burgers", function (req, res){
  console.log("res.body GET =", res.body);
  burger.getAll(function(allBurgers){
    console.log('all burgers', allBurgers); 
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

// routes are going to use your model 

module.exports = router; 