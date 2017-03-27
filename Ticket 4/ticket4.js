


// Create an Event Listener to listen for the click even on the submit button
document.getElementById("submit").addEventListener("click", HigherOrLower, false);
// document.getElementById("btn2").addEventListener("click", checkguess,false);

//creating a variable for the random number
randomNumber = Math.floor(Math.random()*101);
console.log(randomNumber);  

// Create a variable for counting the attempts
var Count = 0;

// ***** COMPARISON LOGIC COMPONENT ****
function HigherOrLower() {

    
//Get user value    
var userguess = parseInt(document.getElementById("userguess").value);
console.log(typeof(userguess));

 //initialise response variable
    response = "";
    
     if (userguess > randomNumber){
                response = "Your answer is too big";
    
            } else if (userguess < randomNumber){
                response = "Your answer is too mall";
            } else {
                response = "Congratulations";
            }
    Count++;
    
console.log(Count) 

// Calling the feedback logic
Feedback();
    
}


// **** FEEDBACK LOGIC COMPONENT ****
function Feedback () {
    
    document.getElementById("feedback").innerHTML = response;    
}

