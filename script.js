// Human  choice
let humanChoice = prompt("Which one do you chose rock (✊), paper(✋) or Scissors(✌)? ");

if (! humanChoice) {

    // Defining the human choice could be undefined

console.log("Human Cheat! Please, do not cheat!Refresh and play again!");

} else {

// Display Human choices

 console.log(" Human :" + " " + humanChoice);
}

// Computer choices defined 

let computerChoice = Math.random();
if (computerChoice < 0.34) {
    computerChoice = "rock";
} else if(computerChoice <= 0.67) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
}

// Display computer choice

console.log("Computer:" + " " + computerChoice);

// Compare Human choice vs computer choice

let compare = function(choice1, choice2) {
    if (choice1 === choice2) {
        return "It's a tie!";
    }
    if (choice1 === "rock" && choice2 === "scissors" || choice1 === "paper" && choice2 === "rock")
        {
            // scenarios rock and paper wins

            return "Human Won!";
        } 
        else if (choice1 === "scissors" && choice2 === "paper") {
            return "Human Won!"
            //scenarios scissors wins
        }
        else {
            
            return "Human Lose! Try again.";
        }
      
};

// Run the compare function between the choices 

let  results = compare(humanChoice, computerChoice);

// Display results on console
console.log (" " + results);

//Check the status of "Display Results" on DOM
document.write(results);