$(document).ready(function(){

  //  get the buttons 
  
  // const submitBurger = $('#submit-form');
  const eatMe = $('li>button');

  // get the elements

  const leftAsideList = $('ul#burgers-to-eat');
  const rightAsideList = $('ul#burgers-eaten'); 
  const burgerName = $('input#burger-name');
  const newBurgerForm = $('#new-burger-form'); 

  // event listeners 

  leftAsideList.on("click", "button", updateStatus);
  // eatMe.on("click", "button", updateStatus);
  // submitBurger.on("click", "button", getBurgerNameValue);
  newBurgerForm.submit(getAndPostNewBurger);


  // functions 

  function getAvailableBurgers(){
    console.log("Getting persistant data..."); 

    $.ajax({
      type: "GET", 
      url: "/burgers",
    }).then(dataReturned => {
      // console.log("data from GET =", dataReturned);
    }).catch(err => {
      if(err) throw err; 
    }); 

  }

  function updateStatus(){
    console.log("eat me button pressed"); 
    console.log("$(this).parent().val() =", $(this).parent().val());
    const parent = $(this).parent().text().trim();
    console.log("parent", parent); 
    
    const itemId = parent.slice(0,1).trim(); 
    const itemName = parent.slice(3,(parent.length - 6)).trim();
    const itemButton = parent.slice((parent.length - 6)).trim(); 
    // console.log("splice results =", `'${itemId}' - '${itemName}' - '${itemButton}' `); 

    const updateItem ={
      id: itemId,
      burger_name: itemName,
      devoured: true,
    };

    console.log("updateItem =", updateItem); 

    $.ajax({
      type: "PUT",
      url: "/api/burgers" + updateItem.id,
    }).then(getAvailableBurgers)
    .catch(err => {
      if (err) throw err; 
    })

  }

  function getAndPostNewBurger(event){
    event.preventDefault();
    // console.log(event); 
    console.log("Submit button has been clicked");
    const burgerNameBar = burgerName.val();
    
    if(burgerNameBar == ""){
      burgerName.attr("placeholder", "Please enter a burger name.");
      console.log("Invalid Entry"); 
    } else {
      console.log("burgerNameBar after else =", burgerNameBar); 

      const newBurger = {
        burger_name: burgerNameBar, 
      }
      console.log("newBurger =", newBurger); 
       
      $.post( "/api/burger", newBurger);  
      
      // Clear the form when submitting
      burgerName.val("");

    }
  }

 

  // run functions 
  getAvailableBurgers();

})


