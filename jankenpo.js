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
    for (let i = 0; i > -1; i++) {
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
var plScore = 0
var cpScore = 0
function myFunction() {
    let gameResults = playRound(this.id,getComputerChoice());
    results.innerText = gameResults
    if (gameResults.includes("win")){
        plScore++
    } else if (gameResults.includes("lose")){
        cpScore++
    } else{
        pass
    };
    playerscore.innerText = plScore;
    computerscore.innerText = cpScore;
    if(plScore == 5 || cpScore == 5) {
        if (plScore > cpScore){
            results.innerText = `${plScore}-${cpScore}` + "Player wins!"
         } else if (plScore < cpScore){

            results.innerText = `${plScore}-${cpScore}` + "Player lose!"
         } else{
            pass
         }
     };
}
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const results = document.getElementById("results");
const playerscore = document.getElementById("playerscore");
const computerscore = document.getElementById("computerscore");

rock.addEventListener("click", myFunction);
paper.addEventListener("click", myFunction);
scissors.addEventListener("click", myFunction);