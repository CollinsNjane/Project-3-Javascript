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

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function game() {
  let word = "";
  let sentence = "";
  let counter1 = 0;
  let counter2 = 0;
  let wins = 0;
  let ties = 0;
  let losses = 0;
  var games = 1;
  for (let i = 0; i < 5; i++) {
    var computerSelection = computerPlay();
    var playerSelection = capitalizeFirstLetter(
      window.prompt("Enter a choice between rock, paper or scissors")
    );
    console.log("<!----- Game " + games + " has started -----> ");
    console.log("Player is " + playerSelection);
    console.log("Computer is " + computerSelection);

    sentence = playRound(playerSelection, computerSelection);
    console.log(sentence);
    word = sentence.split(" ");
    //console.log(word[1]);
    if (word[1] == "Win!") {
      counter1++;
      wins++;
      //console.clear();
      console.log("You have won round " + games);

      word = "";
    }
    if (word[1] == "Lose!") {
      counter2++;
      losses++;
      //console.clear();
      console.log("You have lost round " + games);

      word = "";
    }
    if (word[2] == "Tie!") {
      ties++;
      console.log("Round " + games + " was a tie");

      word = "";
    }
    console.log("<!----- Game " + games + " has ended -----> ");
    console.log("");
    games++;
    //output3.innerHTML = playRound(playerSelection, computerSelection);
  }
  if (counter2 > counter1) {
    console.log("You lost the game of 5 rounds");
  }
  if (counter1 > counter2) {
    console.log("You Won the game of 5 rounds");
  }
  if (counter2 == counter1) {
    console.log("There was no winner, you tied all the 5 rounds");
  }
  console.log("You won " + wins + " times!");
  console.log("You lost " + losses + " times!");
  console.log("You tied " + ties + " times!");
}
