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
  newBurgerForm.submit(getBurgerNameValue);


  // functions 

  function getExisitngBurgers(){
    console.log("Getting persistant data..."); 

    $.ajax({
      url: "/api/burgers",
      method: "GET", 
    }).then(dataReturned => {
      console.log("data from GET =", dataReturned); 
    }).catch(err => {
      if(err) throw err; 
    }); 

  }

  function updateStatus(){
    console.log("eat me button pressed"); 

  }

  function getBurgerNameValue(event){
    event.preventDefault();
    console.log(event); 
    console.log("Submit button has been clicked");
    const burgerNameBar = burgerName.val();
    
    if(burgerNameBar == ""){
      burgerName.attr("placeholder", "Please enter a burger name.");
      console.log("Invalid Entry"); 
    } else {
      console.log("burgerNameBar =", burgerNameBar); 

      const newBurger = {
        burger_name: burgerNameBar, 
      }
      
      $.ajax({
        url: "/api/burger",
        type: "POST",
        data: newBurger,
        success: () => {
          console.log("success! The server has received your burger.", newBurger);
  
          // Clear the form when submitting
          burgername.val("");
          
        },
        error: (error) => {
          console.log("error", error);
        },
      });

    }
  }

  // run functions 
  getExisitngBurgers();

})


