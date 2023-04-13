// Let player choose move -> getPlayerChoice()
let playerSelection = prompt("What's your move (rock, scissors or paper)? ")
playerSelection = playerSelection.toLowerCase();

// Make computer choose move -> getComputerChoice()
function getComputerChoice() {
  const moves = ['rock', 'paper', 'scissors'];
  return moves[Math.floor(Math.random() * 3)];
}

const computerSelection = getComputerChoice();

// Using comparisons, decide who wins or when is draw.
// If same moves : draw
if (playerSelection === computerSelection) {
  console.log('DRAW!');
}

// If player chooses Rock, compare with other cases from computer
if (playerSelection === 'rock') { 
  if (computerSelection === 'scissors') {
    console.log('Player wins!');
  } else if (computerSelection === 'paper') {
    console.log('Computer wins!');
  }
}
// If player chooses Paper, compare with other cases from computer
else if (playerSelection === 'paper') { 
  if (computerSelection === 'rock') {
    console.log('Player wins!');
  } else if (computerSelection === 'scissors') {
    console.log('Computer wins!');
  }
}
// If player chooses Scissors, compare with other cases from computer
else if (playerSelection === 'scissors') { 
  if (computerSelection === 'paper') {
    console.log('Player wins!');
  } else if (computerSelection === 'rock') {
    console.log('Computer wins!');
  }
}

console.log(`Player: ${playerSelection} - Computer: ${computerSelection}`);
