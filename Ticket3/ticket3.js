


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
console.log("user guess type is a " + typeof(userguess));
userguess = parseInt(userguess);
console.log("user guess type is a " + typeof(userguess)); 
// VALIDATION FEATURE NuMBER BETWEEN 1-100
if ( userguess < 100 AND > 0;) {
  Number used is valid
} else {
  Number is not valid
}
  
  
  
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

