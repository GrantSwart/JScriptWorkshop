


// Create an Event Listener to listen for the click even on the submit button
document.getElementById("submit").addEventListener("click", HigherOrLower, false);
// document.getElementById("btn2").addEventListener("click", checkguess,false);

  

// ***** COMPARISON LOGIC COMPONENT ****
function HigherOrLower() {
//creating a variable for the random number
var randomNumber = Math.floor(Math.random()*101);
console.log(randomNumber);

    
//Get user value    
var userguess = document.getElementById("userguess").value;


 //initialise response variable
    response = "";
    
     if (userguess === randomNumber){
                response = "Congratulations";
            } else if (userguess > randomNumber){
                response = "Your answer is too big";
            } else {
                response = "Your answer is too small";
            }
    
// Calling the feedback logic
Feedback();
    
}


// **** FEEDBACK LOGIC COMPONENT ****
function Feedback () {
    
    document.getElementById("feedback").innerHTML = response;    
}

