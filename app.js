// Let player choose move -> getPlayerChoice()
// Make computer choose move -> getComputerChoice()
function getComputerChoice() {
  const moves = ['rock', 'paper', 'scissors'];
  return moves[Math.floor(Math.random() * 3)];
}
// Using comparisons, decide who wins or when is draw.
// If Rock vs. Paper : Paper wins
// If Rock vs. Scissors : Rock wins
// If Paper vs. Scissors : Scissors wins
//
for (let i = 0; i < 5; i++) {
  console.log(getComputerChoice()); 
}
