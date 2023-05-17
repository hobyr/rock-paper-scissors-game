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
    gameResult.innerText = `You win! ${playerSelection} beats ${computerSelection}`;
  } else if (isPlayerWinner === 0) {
    gameResult.innerText = `You lose! ${computerSelection} beats ${playerSelection}`;
  } else {
    gameResult.innerText = "DRAW! No winner, no loser!";
  }

  return isPlayerWinner;
}

// Game starts below!
let playerScore = 0;
let computerScore = 0;

const userChoiceInput = document.querySelectorAll('button');
const scoreDisplays = document.querySelectorAll('.playerScore span');
const gameResult = document.querySelector('.gameResult');

userChoiceInput.forEach(input => {
  input.addEventListener('click', function() {
    const result = playRound(this.value);
    if(result === 1) {
      playerScore++;
      scoreDisplays[0].innerText = playerScore;
    } else if (result === 0){
      computerScore++;
      scoreDisplays[1].innerText = computerScore;
    } else {
      // do not update scores
    }

    if (playerScore === 5 || computerScore === 5) {
      if (playerScore > computerScore) {
        scoreDisplays[0].style.color = 'green';
        scoreDisplays[1].style.color = 'red';
        gameResult.innerText = "The winner is... YOU! CONGRATULATIONS!!!";
      } else if (playerScore < computerScore) {
        gameResult.innerText = "Unfortunately, you lost to the computer... Better luck next time!!";
        scoreDisplays[1].style.color = 'green';
        scoreDisplays[0].style.color = 'red';
      } else {
        gameResult.innerText = "Aaaaand... it's a DRAW!!";
        scoreDisplays[0].style.color = 'blue';
        scoreDisplays[1].style.color = 'blue';
      }
    }
  })
});
