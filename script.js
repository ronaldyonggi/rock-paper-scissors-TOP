// Global variables
let playerScore = 0
let computerScore = 0
let gameOver = false;

// A function for computer to randomly returns rock, paper or scissors
function getComputerChoice() {
  // Return a random integer between 0 to 2
  let choice = ['Rock', 'Paper', 'Scissors']
  let randomNum = Math.floor(Math.random() * 3)
  return choice[randomNum]
}


// playRock takes an input of computer's choice. This assumes player chose Rock
function playRock(computer) {
  switch(computer) {
    case "rock":
      return `It's a tie!`
    case "scissors":
      playerScore++;
      // Update the player score display
      return `You win! Rock beats Scissors`
    case "paper":
      computerScore++;
      return `You lose! Paper beats Rock`
    default:
      return `Invalid input!`
  }
}

function playPaper(computer) {
  switch(computer) {
    case "rock":
      playerScore++;
      return `You win! Paper beats Rock`
    case "scissors":
      computerScore++;
      return `You lose! Scissors beats Paper`
    case "paper":
      return `It's a tie!`
    default:
      return `Invalid input!`
  }
}

function playScissors(computer) {
  switch(computer) {
    case "rock":
      computerScore++;
      return `You lose! Rock beats scissors`
    case "scissors":
      return `It's a tie!`
    case "paper":
      playerScore++;
      return `You win! Scissors beats Paper`
    default:
      return `Invalid input!`
  }
}

// Play a round of rock paper scissors
function playRound(playerSelection, computerSelection) {
  // Convert both players' input to lowercase
  let playerLowerCased = playerSelection.toLowerCase();
  let computerLowerCased = computerSelection.toLowerCase();
  switch(playerLowerCased) {
    case "rock":
      return playRock(computerLowerCased);
    case "paper":
      return playPaper(computerLowerCased);
    case "scissors":
      return playScissors(computerLowerCased)
    default:
      return "Invalid player input!"
  }
}

// Section for displaying result
let playerScoreSpan = document.getElementById('playerScore')
let computerScoreSpan = document.getElementById('computerScore')

// Update the score display
function updateScoresDisplay() {
  playerScoreSpan.innerText = playerScore;
  computerScoreSpan.innerText = computerScore;
}

// Resets the game
function resetGame() {
  playerScore = 0;
  computerScore = 0;
  updateScoresDisplay();
  gameOver = false;
}

// DOM part
resultDiv = document.getElementById('resultDiv');
const resultMessage = document.createElement('p')
resultDiv.appendChild(resultMessage)
document.body.appendChild(resultDiv)

// Check winning Condition
function checkWinning() {
  // If any of the player have score of 5 or above, game is over
  if (playerScore >= 5 || computerScore >= 5) {
    gameOver = true;
    // Create a winning message to display
    let message = document.createElement('p');
    message.setAttribute('id', 'message'); // Set attribute id = 'message'

    // Set message if player wins the game
    if (playerScore >= 5) {
      message.innerText = "Congratulations! You won the game!"
      resultDiv.appendChild(message)
    } else { // Otherwise the computer wins the game
      message.innerText = "Too bad you lost the game. Try again!"
      resultDiv.appendChild(message)
    }
  }

  // If the game is over, display a reset button
  if (gameOver) {
    let resetButton = document.createElement('button');
    resetButton.innerText = 'Reset';
    // Event handler when reset button is clicked
    resetButton.addEventListener('click', () => {
      resetGame();
      resetButton.remove();
      // Remove the winning message html element
      let message = document.getElementById('message')
      message.remove();
      // Set the result message to empty string
      resultMessage.innerText = '';
    })
    resultDiv.appendChild(resetButton);
  }
}

// Section for button event Listener
const rockButton = document.getElementById('rock')
rockButton.addEventListener('click', () => {
  // If the game is over, clicking the button does nothing
  if (gameOver) return;
  resultMessage.innerText = playRound('rock', getComputerChoice())
  updateScoresDisplay()
  checkWinning()
})

const paperButton = document.getElementById('paper')
paperButton.addEventListener('click', () => {
  // If the game is over, clicking the button does nothing
  if (gameOver) return;
  resultMessage.innerText = playRound('paper', getComputerChoice())
  updateScoresDisplay()
  checkWinning()
})

const scissorsButton = document.getElementById('scissors')
scissorsButton.addEventListener('click', () => {
  // If the game is over, clicking the button does nothing
  if (gameOver) return;
  resultMessage.innerText = playRound('scissors', getComputerChoice())
  updateScoresDisplay()
  checkWinning()
})
