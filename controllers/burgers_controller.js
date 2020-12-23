// NOTE: some commented code left in for my referal (still learning) 

const express = require('express'); 
const router = express.Router();

// require the models page 
const burgerModel = require('../models/burger');


// ------------------ GET ----------------------
// receives the GET request from client side
// this will call the model function,
// ---------------------------------------------
router.get("/burgers", function (req, res){
  // console.log(burgerModel); 
  // console.log("res.body POST =", res.body);
  // console.log("res.params POST =", res.params);

  // selectAll is the key from the burger model. under model.exports, 
  // this calls the selectALl function in the burger.js file which is sending the parameter 'response' through 'callback' in here at 'allburgers' 
  burgerModel.selectAll(function(allBurgers){
    // all_Burger is just a named key for this page here, it is reciving the information from the callback in burger.js 
    // console.log("Controller page, router.get");
    // console.log("router.get",{burger: allBurgers});
     
    // we set the handlebars main.handlebars in the server file as the body of the html. 
    // use res.render for handlebars 
    res.render('toEat', {burger: allBurgers})/*, function(err, html){
      if(err) throw err; 
      // console.log("controller page, router.get res.render, html =",'\n',html); 
      // set in the server.js file as app.engine default layout main 
      // app.set view engine sets the handlebars 
      res.json(html);
    }); 
    */
  });
});


// ------------------ POST ----------------------
// receives the POST request from client side
// ---------------------------------------------
router.post("/api/burger", function (req, res){
  // console.log("req.body POST =", req.body);
  // console.log("req.params POST =", req.params);
  // console.log("req.body.burger_name =", req.body.burger_name);

  // send it to the database 
  burgerModel.insertOne(req.body.burger_name, function(results){

    console.log("results =", results); 
    res.redirect("/"); 
    // res.json(results); 

  });
}); 


// ------------------ PUT ----------------------
// receives the PUT request from client side
// ---------------------------------------------
router.put("/api/burgers:id", function(req, res){
  console.log("req.body PUT =", req.body);
  console.log("req.params PUT =", req.params);

  burgerModel.updateOne(req.params.id, function(results){
    console.log("controller page router.put, results", results); 
    res.json(results); 
 
  })

});


// ------------------ GET ----------------------
// catches all requests and redirects to the correct address "/burgers"
// ---------------------------------------------
router.get('/', function (req, res) {
  res.redirect("/burgers");
});



module.exports = router; 