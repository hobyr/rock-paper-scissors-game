// Make computer choose move -> getComputerChoice()
function getComputerChoice() {
  const moves = ['rock', 'paper', 'scissors'];
  return moves[Math.floor(Math.random() * 3)];
}

// Making a game function
function playRound(playerSelection) {
  let isPlayerWinner = 0;
  const computerSelection = getComputerChoice();
  // If same moves : draw
  if (playerSelection === computerSelection) {
    isPlayerWinner = -1;
  }
  // If player chooses Rock, compare with other cases from computer
  else if (playerSelection === 'rock') { 
    if (computerSelection === 'scissors') {
      isPlayerWinner = 1;
    } else if (computerSelection === 'paper') {
      isPlayerWinner = 0;
    }
  }
  // If player chooses Paper, compare with other cases from computer
  else if (playerSelection === 'paper') { 
    if (computerSelection === 'rock') {
      isPlayerWinner = 1;
    } else if (computerSelection === 'scissors') {
      isPlayerWinner = 0;
    }
  }
  // If player chooses Scissors, compare with other cases from computer
  else if (playerSelection === 'scissors') { 
    if (computerSelection === 'paper') {
      isPlayerWinner = 1;
    } else if (computerSelection === 'rock') {
      isPlayerWinner = 0;
    }
  }

  if (isPlayerWinner === 1) {
    console.log(`You win! ${playerSelection} beats ${computerSelection}`);
  } else if (isPlayerWinner === 0) {
    console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
  } else {
    console.log("DRAW! No winner, no loser!");
  }

  return isPlayerWinner;
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 1; i++) {
    if(result === 1) {
      playerScore++;
    } else if (result === 0){
      computerScore++;
    } else {
      // do not update scores
    }
    console.log(`Player ${playerScore} - ${computerScore} Computer`);
  }

  if (playerScore > computerScore) {
    console.log("The winner is... YOU! CONGRATULATIONS!!!");
  } else if (playerScore < computerScore) {
    console.log("Unfortunately, you lost to the computer... Better luck next time!!");
  } else {
    console.log("Aaaaand... it's a DRAW!!");
  }
}

// Game starts below!
const userChoiceInput = document.querySelectorAll('input');
console.log(userChoiceInput);
userChoiceInput.forEach(input => {
  input.addEventListener('click', function() {
    console.log(this.value);
    playRound(this.value);
  })
});
