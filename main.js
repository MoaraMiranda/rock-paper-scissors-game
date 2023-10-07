const startButton = document.querySelector("#start");
startButton.addEventListener("click", game);

const options = ["rock", "paper", "scissors"];
const wins = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper",
};
let playerPoints = 0;
let computerPoints = 0;

function playerPlays() {
  let playerSelection = prompt(
    "Choose your tool!! Enter Rock, Paper or Scissors"
  );
  if (playerSelection === null) {
    return null;
  }

  playerSelection = playerSelection.toLowerCase().trim();

  if (!options.includes(playerSelection)) {
    alert(
      "Ohh are you afraid of losing? Come on, choose your tool: rock, paper or scissors? "
    );
    return playerPlays();
  }
  return playerSelection;
}

function computerPlay() {
  let choosing = Math.floor(Math.random() * options.length);
  let computerSelection = options[choosing];
  return computerSelection;
}

function playRound(computerSelection, playerSelection) {
  if (playerSelection === computerSelection) {
    return alert(
      `It's a draw! We both played the ${computerSelection}. None of us made a point 🙄`
    );
  }

  if (wins[playerSelection] === computerSelection) {
    playerPoints++;
    alert(`You win! Your ${playerSelection} beats my ${computerSelection}`);
  } else {
    computerPoints++;
    alert(`You lose! My ${computerSelection} beats your ${playerSelection}`);
  }
  alert(`Score: You ${playerPoints} - Me ${computerPoints}`);
}

function game() {
  let gameRound;

  for (gameRound = 0; gameRound < 5; gameRound++) {
    let playerSelection = playerPlays();
    if (playerSelection === null) {
      break;
    }
    let computerPlayed = computerPlay();
    playRound(computerPlayed, playerSelection);
  }

  if (gameRound < 5) {
    return alert(
      `Running away, are you? That's right, run and hide while I conquer the world muahhhhaahahahahaah`
    );
  } else if (playerPoints > computerPoints) {
    alert(`Oh noooo 😱 You defeated me!! Ohhh nooo`);
  } else if (computerPoints > playerPoints) {
    alert(`GAME OVER! Loserrrrr 😂😂😂😂. Now, I shall conquer the world!`);
  } else {
    alert("It's a tie! Let's play again.");
  }
}
