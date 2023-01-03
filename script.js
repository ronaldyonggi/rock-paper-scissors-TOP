function getComputerChoice() {
  // Return a random integer between 0 to 2
  let choice = ['Rock', 'Paper', 'Scissors']
  let randomNum = Math.floor(Math.random() * 3)
  return choice[randomNum]
}

// Helper functions
function compare(playerLowerCased, computerLowerCased) {
  // If player plays rock
  if (playerLowerCased == "rock") {
    switch(computerLowerCased) {
      case "rock":
        return `It's a tie!`
      case "scissors":
        return `You win! Rock beats Scissors`
      case "paper":
        return `You lose! Paper beats Rock`
      default:
        return `Invalid input!`
    }
  }
  // If player plays paper
  else if (playerLowerCased === "scissors") {
    switch(computerLowerCased) {
      case "rock":
        return `You lose! Rock beats scissors`
      case "scissors":
        return `It's a tie!`
      case "paper":
        return `You win! Scissors beats Paper`
      default:
        return `Invalid input!`
    }
  }
  else if (playerLowerCased === "paper") {
    switch(computerLowerCased) {
      case "rock":
        return `You win! Paper beats Rock`
      case "scissors":
        return `You lose! Scissors beats Paper`
      case "paper":
        return `It's a tie!`
      default:
        return `Invalid input!`
    }
  }
  else return `Invalid input!`
}

function playRound(playerSelection, computerSelection) {
  // Convert both players' input to lowercase
  let playerLowerCased = playerSelection.toLowerCase()
  let computerLowerCased = computerSelection.toLowerCase()
  return compare(playerLowerCased, computerLowerCased)
}

// console.log(playRound("paper", getComputerChoice()))

function game() {
  for (let i = 0; i < 5; i++) {
    let playerInput = prompt("Rock, paper or scissors?");
    console.log(playRound(playerInput, getComputerChoice()))
  }
}

// game()
game()