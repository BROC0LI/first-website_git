// Function that handles the game logic
function playRound(playerSelection) {

  // For now, just log the playerSelection to the console
  console.log("Player selected: " + playerSelection);
  
  // Assuming you have a function that determines the computer's selection and compares it with playerSelection
  // Add more logic for game rules (Rock beats Scissors, Scissors beats Paper, etc.) here
  // For simplicity, I'll just log a sample computer choice.


  let computerChoice = getComputerChoice();
  console.log("Computer selected: " + computerChoice);

  // Game outcome logic

  let result = determineWinner(playerSelection, computerChoice);
  console.log(result);
}

// Function to simulate a random computer choice
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

// Function to determine the winner
function determineWinner(playerSelection, computerChoice) {
  if (playerSelection === computerChoice) {
      return "It's a tie!";
  }

  if (
      (playerSelection === "rock" && computerChoice === "scissors") ||
      (playerSelection === "paper" && computerChoice === "rock") ||
      (playerSelection === "scissors" && computerChoice === "paper")
  ) {
      return "You win!";
  } else {
      return "You lose!";
  }
}

// Add event listeners to buttons
document.getElementById("rock").addEventListener("click", function() {
  playRound("rock");
});

document.getElementById("paper").addEventListener("click", function() {
  playRound("paper");
});

document.getElementById("scissors").addEventListener("click", function() {
  playRound("scissors");
});


document.getElementById("result")= 'result';