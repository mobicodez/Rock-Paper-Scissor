// Step 1: Query the IDs fromthe HTML
const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");

// Step 2: Declare variables
let player;
let computer;
let results;

// Step 3: Add EventListener forEach of the buttons with same class
choiceBtns.forEach(button => button.addEventListener("click", () => {

  player = button.textContent;
  // Callback computerTurn function created below
  computerTurn();
  playerText.textContent = `Player: ${player}`;
  computerText.textContent = `Computer: ${computer}`;
  // callback checkWinner function created below... checks for who won the game
  resultText.textContent = checkWinner();

}));

// Step 4: Declare a function needed for computerTurn above
function computerTurn(){
  // Create a random number between 1 & 3
  const randNum = Math.floor(Math.random() * 3) + 1;
  // examine the random numbers by *switch for matching cases
  switch(randNum){
    case 1:
      computer = "ROCK";
      break;
    case 2:
      computer = "PAPER";
      break;
    case 3:
      computer = "SCISSORS";
      break;
  }
}

function checkWinner(){
  if(player == computer){
    return "Draw!";
  }
  else if(computer == "ROCK"){
    return (player == "PAPER") ? "You Win!" : "You Lose!";
  }
  else if(computer == "PAPER"){
    return (player == "SCISSORS") ? "You Win!" : "You Lose!";
  }
  else if(computer == "SCISSORS"){
    return (player == "ROCK") ? "You Win!" : "You Lose!";
  }
}