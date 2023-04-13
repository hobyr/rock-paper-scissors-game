// Make computer choose move -> getComputerChoice()
function getComputerChoice() {
  const moves = ['rock', 'paper', 'scissors'];
  return moves[Math.floor(Math.random() * 3)];
}

// Making a game function
function playRound(playerSelection, computerSelection) {
  let isPlayerWinner = 0;
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
  for (let i = 0; i < 5; i++) {
//    let playerSelection = prompt("What's your move (rock, scissors or paper)? ").toLowerCase();
    const playerSelection = getComputerChoice();
    const computerSelection = getComputerChoice();
    result = playRound(playerSelection, computerSelection);
    if(result === 1) {
      playerScore++;
    } else if (result === 0){
      computerScore++;
    } else {
      // do not update scores
    }
    console.log(`Player ${playerScore} - ${computerScore} Computer`);
  }
}

game();
