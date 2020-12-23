$(document).ready(function(){

  // ------------------  get the buttons ------------------
  
  // available burgers list, eat me button 
  const eatMe = $('li>button');

  // -------------------- get the elements ----------------

  const leftAsideList = $('ul#burgers-to-eat');
  const rightAsideList = $('ul#burgers-eaten'); 

  // form input entry 
  const burgerName = $('input#burger-name');
  const newBurgerForm = $('#new-burger-form'); 

  // -------------------- event listeners ----------------

  leftAsideList.on("click", "button", updateStatus);
  newBurgerForm.submit(postNewBurger);


  // ----------------- functions --------------------------


 // -------------------- getAvailableBurgers ---------------
 // uses a GET ajax call to retreive burgers from the database 
 // data base returns html to be rendered.  
 // --------------------------------------------------------
  function getAvailableBurgers(){
    // console.log("Getting persistant data..."); 

    $.ajax({
      type: "GET", 
      url: "/burgers",
    }).then(dataReturned => {
      // console.log("data from GET =", dataReturned);
    }).catch(err => {
      if(err) throw err; 
    }); 

  }

 // -------------------- updateStatus ------------------------
 // uses a PUT ajax call to update burgers from the database 
 // retreives the information from the available burgers list
 // splits the text to get the Id and name out seperatly.
 // Reloads the page after returned result - no error. 
 // ---------------------------------------------------------- 

  function updateStatus(){
    // console.log("eat me button pressed"); 
    // console.log("$(this).parent().val() =", $(this).parent().val());
    const parent = $(this).parent().text().trim();
    // console.log("parent", parent); 
    const splitItem = parent.split(".");
    // console.log("splitItem", splitItem); 
    const itemId = splitItem[0]; 
    const itemName = splitItem[1].slice(0,(splitItem[1].length - 6)).trim();
    const itemButton = splitItem[1].slice((splitItem[1].length - 6)).trim(); 
    // console.log("splice results =", `'${itemId}' - '${itemName}' - '${itemButton}' `); 

    const updateItem = {
      id: itemId,
      burger_name: itemName,
      devoured: true,
    };

    // console.log("updateItem =", updateItem); 

    $.ajax({
      type: "PUT",
      url: "/api/burgers" + updateItem.id,
    }).then(getAvailableBurgers).then(location.reload())
    .catch(err => {
      if (err) throw err; 
    })
  }

  // -------------------- PostNewBurger ------------------------
  // uses a POST call to add burgers from the database 
  // checks there is an entry and outputs a placeholder message if no entry received. 
  // reloads the page 
  // ---------------------------------------------------------- 

  function postNewBurger(event){
    event.preventDefault();
    // console.log(event); 
    // console.log("Submit button has been clicked");
    const burgerNameBar = burgerName.val();
    
    if(burgerNameBar == ""){
      burgerName.attr("placeholder", "Please enter a burger name.");
      // console.log("Invalid Entry"); 
    } else {
      // console.log("burgerNameBar after else =", burgerNameBar); 

      const newBurger = {
        burger_name: burgerNameBar, 
      }
      // console.log("newBurger =", newBurger); 
       
      // post request
      $.post( "/api/burger", newBurger);  
      
      // Clear the form when submitting
      burgerName.val("");
      location.reload();

    }
  }

 

  // --------------------- run functions on page load -----------------------
  
  getAvailableBurgers();

})


