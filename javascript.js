userScore = 0
comScore = 0
let playerWinRound = "You win this round!"
let computerWinRound = "Computer wins this round!"
let tie = "You have tied!"
let playerWin = "You have won the game! Congrats!"
let computerWin = "The computer has bested you, better luck next time"

// Have computer choose a random number from 0-2
function getComputerChoice () {
    let weapon = ["rock", "paper", "scissors"]
    return weapon[Math.floor(Math.random() * 3)]
}
let comChoice = getComputerChoice()
console.log (comChoice)

//Ask for user input of rock, paper, or scissors
let userInput = prompt("Please select rock, paper, or scissors: ")
let uInput = userInput.toLowerCase()
console.log (uInput)
//compare input values

function playRound() {
   if (comChoice === uInput) {
    return tie
   } 
   else if (uInput === "rock" && comChoice === "scissors") {
    return playerWinRound
   }
   else if (uInput === "paper" && comChoice === "rock") {
    return playerWinRound
   }
   else if (uInput === "scissors" && comChoice === "paper") {
    return playerWinRound
   }
   else {
    return computerWinRound
   }
}

console.log (playRound(comChoice, uInput))




//now keep track of wins for computer and user

