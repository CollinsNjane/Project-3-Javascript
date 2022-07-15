function computerPlay() {
  const options = ["Rock", "Paper", "Scissors"];
  const randomOption = options[Math.floor(Math.random() * options.length)];
  return randomOption;
}

function playRound(player, computer) {
  var player = player.toLowerCase();
  var computer = computer.toLowerCase();

  if (player == "rock" && computer == "scissors") {
    return "You Win! Rock beats Scissors!";
  }
  if (player == "paper" && computer == "rock") {
    return "You Win! Paper beats Rock!";
  }
  if (player == "scissors" && computer == "paper") {
    return "You Win! Scissors beats Paper!";
  }
  if (player == "scissors" && computer == "rock") {
    return "You Lose! Rock beats Scissors!";
  }
  if (player == "rock" && computer == "paper") {
    return "You Lose! Paper beats Rock!";
  }
  if (player == "paper" && computer == "scissors") {
    return "You Lose! Scissors beats Paper!";
  }
  if (player == "scissors" && computer == "scissors") {
    return "It's a Tie!";
  }
  if (player == "rock" && computer == "rock") {
    return "It's a Tie!";
  }
  if (player == "paper" && computer == "paper") {
    return "It's a Tie!";
  }
}

function testing() {
  const playerSelection = "Rock";
  const computerSelection = computerPlay();
  console.log(playRound(playerSelection, computerSelection));
}

function game() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = "Rock";
    computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
  }
}
