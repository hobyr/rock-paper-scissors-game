// Let player choose move -> getPlayerChoice()
let playerSelection = prompt("What's your move (rock, scissors or paper)? ").toLowerCase();

// Make computer choose move -> getComputerChoice()
function getComputerChoice() {
  const moves = ['rock', 'paper', 'scissors'];
  return moves[Math.floor(Math.random() * 3)];
}

const computerSelection = getComputerChoice();

// Making a game function
function playRound(playerSelection, computerSelection) {
  let isPlayerWinner = false;
  // If same moves : draw
  if (playerSelection === computerSelection) {
    return "DRAW! No winner, no loser!"
  }
  // If player chooses Rock, compare with other cases from computer
  if (playerSelection === 'rock') { 
    if (computerSelection === 'scissors') {
      isPlayerWinner = true;
    } else if (computerSelection === 'paper') {
      isPlayerWinner = false;
    }
  }
  // If player chooses Paper, compare with other cases from computer
  else if (playerSelection === 'paper') { 
    if (computerSelection === 'rock') {
      isPlayerWinner = true;
    } else if (computerSelection === 'scissors') {
      isPlayerWinner = false;
    }
  }
  // If player chooses Scissors, compare with other cases from computer
  else if (playerSelection === 'scissors') { 
    if (computerSelection === 'paper') {
      isPlayerWinner = true;
    } else if (computerSelection === 'rock') {
      isPlayerWinner = false;
    }
  }

  if (isPlayerWinner) {
    return `You win! ${playerSelection} beats ${computerSelection}`;
  }
  return `You lose! ${computerSelection} beats ${playerSelection}`;
}

console.log(playRound(playerSelection, computerSelection));
