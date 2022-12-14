function getComputerChoice(){
    let choices = ["rock","paper","scissors"];
    let choice = choices[Math.floor(Math.random()*choices.length)];
    return(choice)
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    console.log(computerSelection);
    if (playerSelection == "rock"){
        if (computerSelection == "scissors"){
            return(`You win! ${playerSelection} beats ${computerSelection}`)
        }
        else if (computerSelection == "paper"){
            return(`You lose! ${playerSelection} beats ${computerSelection}`)
        }
        else {
            return("Draw!")
        }
    }
    else if (playerSelection == "scissors"){
        if (computerSelection == "paper"){
            return(`You win! ${playerSelection} beats ${computerSelection}`)
        }
        else if (computerSelection == "rock"){
            return(`You lose! ${playerSelection} beats ${computerSelection}`)
        }
        else {
            return("Draw!")
        }
    }
    else if (playerSelection == "paper"){
        if (computerSelection == "rock"){
            return(`You win! ${playerSelection} beats ${computerSelection}`)
        }
        else if (computerSelection == "scissors"){
            return(`You lose! ${playerSelection} beats ${computerSelection}`)
        }
        else {
            return("Draw!")
        }
    }
    else{

        return("Please input a valid option")
    }
  };

function game(){
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt()
        computerSelection = getComputerChoice();
        let gameResults = playRound(playerSelection, computerSelection);
        console.log(gameResults)
        console.log(i)
        if (gameResults.includes("win")){
            playerScore++
        }
        else if (gameResults.includes("lose")){
            computerScore++
        }
        else if (gameResults.includes("Draw")){
        }
        else{
            i--
        };
     };
     if (playerScore > computerScore){
        console.log(`${playerScore}-${computerScore}`)
        console.log("Player wins!")
     }
     else if (playerScore < computerScore){
        console.log(`${playerScore}-${computerScore}`)
        console.log("Player lose!")
     }
     else{
        console.log(`${playerScore}-${computerScore}`)
        console.log("Draw!")
     }
};
