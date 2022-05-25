const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const outputMessage = document.querySelector(".output-text");
const userScoreDisplay = document.querySelector(".user");
const compScoreDisplay = document.querySelector(".comp");
const resetButton = document.querySelector(".button");

let userScore = 0;
let compScore = 0;

const computerRandomChoice = () => {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
};

rock.addEventListener("click", () => {
  const compChoice = computerRandomChoice();
  if (compChoice === "rock") {
    outputMessage.innerHTML = "Game Drawn. The computer chose Rock as well!";
  } else if (compChoice === "paper") {
    outputMessage.innerHTML =
      "You Lost. Computer chose Paper and Paper covers Rock!";
    compScore++;
  } else {
    outputMessage.innerHTML =
      "You Won. Computer chose Scissors and Rock beats Scissors!";
    userScore++;
  }
  userScoreDisplay.innerHTML = userScore;
  compScoreDisplay.innerHTML = compScore;
});

paper.addEventListener("click", () => {
  const compChoice = computerRandomChoice();
  if (compChoice === "paper") {
    outputMessage.innerHTML = "Game Drawn. The computer chose Paper as well!";
  } else if (compChoice === "scissors") {
    outputMessage.innerHTML =
      "You Lost. Computer chose Scissors and Scissors cut Paper!";
    compScore++;
  } else {
    outputMessage.innerHTML =
      "You Won. Computer chose Rock and Paper covers Rock!";
    userScore++;
  }
  userScoreDisplay.innerHTML = userScore;
  compScoreDisplay.innerHTML = compScore;
});

scissors.addEventListener("click", () => {
  const compChoice = computerRandomChoice();
  if (compChoice === "scissors") {
    outputMessage.innerHTML =
      "Game Drawn. The computer chose Scissors as well!";
  } else if (compChoice === "rock") {
    outputMessage.innerHTML =
      "You Lost. Computer chose Rock and Rock beats Scissors!";
    compScore++;
  } else {
    outputMessage.innerHTML =
      "You Won. Computer chose Paper and Scissors cuts Paper!";
    userScore++;
  }
  userScoreDisplay.innerHTML = userScore;
  compScoreDisplay.innerHTML = compScore;
});

const reset = () => {
  userScore = 0;
  userScoreDisplay.innerHTML = userScore;
  compScore = 0;
  compScoreDisplay.innerHTML = compScore;

  outputMessage.innerHTML = "";
};

resetButton.addEventListener("click", reset);
