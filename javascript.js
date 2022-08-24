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

function playRound(comChoice, uInput) {
   if (comChoice === uInput) {
    return tie
   } 
   else if (uInput === "rock" && comChoice === "scissors") {
    userScore++
    return playerWinRound
    }
   else if (uInput === "paper" && comChoice === "rock") {
    userScore++
    return playerWinRound
    }
   else if (uInput === "scissors" && comChoice === "paper") {
    userScore++
    return playerWinRound
    }
   else {
    comScore++
    return computerWinRound
    }
}

//console.log (playRound(comChoice, uInput))
//console.log ("Your Score is: " + userScore)
//console.log ("Computer Score is: " + comScore)

for(var i=0;i<5;i++){
    let uInput = prompt("Please select rock, paper, or scissors: ");
    let comChoice = getComputerChoice()
    console.log (comChoice)
    console.log (uInput)
    console.log("your score = " + userScore);
    console.log("Computer's score = " + comScore);
  }
//function endGame() {
//    if (userScore > comScore) {
//        console.log (playerWin)
//    }
//    else {
//        console.log (computerWin)
//    }
//}

//function game() {
//   console.log(playRound());
//    if (userScore < 3 && comScore < 3) {
//        game();
//    }
//    else {
//        endGame();
//    }
//}
    

//now keep track of wins for computer and user

