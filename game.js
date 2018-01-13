/** Function to play a game of guessing random number! */
function guessingNumberGame() {
  console.log("Game started!");
  var playerName = prompt("Enter your player name!");
  console.log("Welcome " + playerName + " to guess the number in JavaScript!!!");
  
  /* YOUR CODE GOES HERE. */
  
}

/** Calling on the guessingNumberGame function will start the game. */
guessingNumberGame();


/** HELPER CODE */
/** Use the code below to help you build your game. */

/* Returns a random number between 1 and maxNumber. */
function randomNumber(maxNumber) {
  return Math.floor(Math.random() * maxNumber) + 1;
}

/* Example use: random number between 1 and 10. */
// var randomNum = randomNumber(10);
// console.log(randomNum);
