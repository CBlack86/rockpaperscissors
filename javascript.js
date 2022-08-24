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

//If user matches computer output tie 

//If user beats computer output you win 
//If computer beats user output you lose