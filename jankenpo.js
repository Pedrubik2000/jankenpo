function getComputerChoice(){
    let choices = ["rock","paper","scissors"];
    console.log(choices)
    let choice = choices[Math.floor(Math.random()*choices.length)];
    console.log(choice);
    return(choice)
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection = "rock"){
        if (computerSelection = "scissors"){
            return(`You win! ${playerSelection} beats ${computerSelection}`)
        }
        else if (computerSelection = "paper"){
            return(`You lose! ${playerSelection} beats ${computerSelection}`)
        }
        else {
            return("Draw!")
        }
    }
    else if (playerSelection = "scissors"){
        if (computerSelection = "paper"){
            return(`You win! ${playerSelection} beats ${computerSelection}`)
        }
        else if (computerSelection = "rock"){
            return(`You lose! ${playerSelection} beats ${computerSelection}`)
        }
        else {
            return("Draw!")
        }
    }
    else if (playerSelection = "paper"){
        if (computerSelection = "rock"){
            return(`You win! ${playerSelection} beats ${computerSelection}`)
        }
        else if (computerSelection = "scissors"){
            return(`You lose! ${playerSelection} beats ${computerSelection}`)
        }
        else {
            return("Draw!")
        }
    }
    else{
        return("Please input a valid option")
    }
  }

const playerSelection = "rock";
const computerSelection = getComputerChoice();