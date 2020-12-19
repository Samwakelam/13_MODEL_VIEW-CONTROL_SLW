$(document).ready(function(){

  //  get the buttons 
  
  const submitBurger = $('#submit-form');
  const eatMe = $('li>button');

  // get the elements

  const leftAsideList = $('ul#burgers-to-eat');
  const rightAsideList = $('ul#burgers-eaten'); 
  const burgerName = $('#burger-name');

  // event listeners 

  leftAsideList.on("click","button", updateStatus);
  submitBurger.on("click", "button", getBurgerNameValue);


  // functions 

  function updateStatus(){

  }

  function getBurgerNameValue(event){
    console.log("Submit button has been clicked");
    event.preventDefault();
    const burgerNameBar = burgerName.val().lowerCase();
    console.log("burgerNameBar =", burgerNameBar); 

    if(burgerNameBar == ""){
      burgerName.attr("placeholder", "Please enter a burger name.");
    } else {

      $.ajax({
        url: "/api/",
        method: "POST",
        data: burgerNameBar,
        success: () => {
          console.log("success! The server has received your burger.");
  
          // Clear the form when submitting
          burgername.val("");
          
        },
        error: (error) => {
          console.log("error", error);
        },
      })
    }
  }


})

