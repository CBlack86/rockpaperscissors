//starting scores for both sides
userScore = 0
comScore = 0

// Have computer choose a random number from 0-2
function getComputerChoice () {
    let weapon = ["rock", "paper", "scissors"]
    return weapon[Math.floor(Math.random() * 3)]
}



//compare input values

function playRound() {
//Ask for user input of rock, paper, or scissors
    let userInput = prompt("Please select rock, paper, or scissors: ").toLowerCase();
    let comChoice = getComputerChoice();
  if (userInput ==  comChoice) {
      let result = "Tie! Try Again!"
      result += '\n'
      result += " Your Score: " + userScore
      result += '\n'
      result += " Computer Score: " + comScore
      return result;
  }
  
  if (userInput == 'rock' && comChoice == 'paper') {
      comScore++;
      let result = "You Lose! Paper beats rock!"
      result += '\n'
      result += " Your Score: " + userScore
      result += '\n'
      result += " Computer Score: " + comScore
      return result;
  }
  
  if (userInput == 'rock' && comChoice == 'scissors') {
      userScore++;
      let result = "You Win! Rock beats scissors!"
      result += '\n'
      result += " Your Score: " + userScore
      result += '\n'
      result += " Computer Score: " + comScore
      return result;

  }
  
  if (userInput == 'paper' && comChoice == 'rock') {
      userScore++;
      let result = "You Win! Paper beats rock!"
      result += '\n'
      result += " Your Score: " + userScore
      result += '\n'
      result += " Computer Score: " + comScore
      return result;
  }
  
  if (userInput == 'paper' && comChoice == 'scissors') {
      comScore++;
      let result = "You Lose! Scissors beats paper!"
      result += '\n'
      result += " Your Score: " + userScore
      result += '\n'
      result += " Computer Score: " + comScore
      return result;

  }
  
  if (userInput == 'scissors' && comChoice == 'rock') {
      comScore++;
      let result = "You Lose! Rock beats scissors!";
      result += '\n'
      result += " Your Score: " + userScore
      result += '\n'
      result += " Computer Score: " + comScore
      return result;
  }
  
  if (userInput == 'scissors' && comChoice == 'paper') {
      userScore++;
      let result = "You Win! Scissors beats paper!"
      result += '\n'
      result += " Your Score: " + userScore
      result += '\n'
      result += " Computer Score: " + comScore
      return result;
  }
}


function endGame() {
  if (userScore > comScore) {
      console.log("Game Over! You Win! :)");
  } else if (comScore > userScore) {
      console.log("Game Over! You Lost! :(");
  }
}

function game() {
  console.log(playRound());
  if(userScore < 5 && comScore < 5){
    game();
  }
  else{
    endGame();
  }
}


game();
   

