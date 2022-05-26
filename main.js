const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const outputMessage = document.querySelector(".output-text");
const userScoreDisplay = document.querySelectorAll(".user");
const compScoreDisplay = document.querySelectorAll(".comp");
const resetButton = document.querySelector(".button");
const finalResultsContainer = document.querySelector(".final-results");
const tryAgainButton = document.getElementById("try-again");
const finalOutputMessage = document.querySelector(".final-output-message");
const movesRemaining = document.querySelector(".remaining-moves span");
const animationContainer = document.querySelector(".svg");

let userScore = 0;
let compScore = 0;
let gameCounter = 1;
const totalMoves = 5;

//Making random choices for the computer
const computerRandomChoice = () => {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
};

//Lottie animation
const animItem = bodymovin.loadAnimation({
  wrapper: animationContainer,
  animType: "svg",
  loop: false,
  autoplay: false,
  path: "https://assets3.lottiefiles.com/packages/lf20_tiviyc3p.json",
});

//Rock
rock.addEventListener("click", () => {
  if (gameCounter <= totalMoves) {
    movesRemaining.innerHTML = totalMoves - gameCounter;
    gameCounter++;
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
    userScoreDisplay[0].innerHTML = userScore;
    compScoreDisplay[0].innerHTML = compScore;
  } else {
    //display the final output container
    if (compScore > userScore) {
      finalResultsContainer.classList.add("lost");
      finalOutputMessage.innerHTML = "Oops, You Lost!";
      finalOutputMessage.style.color = "#e5696a";
    } else if (userScore > compScore) {
      finalResultsContainer.classList.add("won");
      finalOutputMessage.innerHTML = "Congrats, You Won!";
      finalOutputMessage.style.color = "#00e973";
      animItem.goToAndPlay(0, true);
    } else {
      finalResultsContainer.classList.add("draw");
      finalOutputMessage.innerHTML = "Game Drawn!";
    }
    userScoreDisplay[1].innerHTML = userScore;
    compScoreDisplay[1].innerHTML = compScore;
  }
});

//Paper
paper.addEventListener("click", () => {
  if (gameCounter <= totalMoves) {
    movesRemaining.innerHTML = totalMoves - gameCounter;
    gameCounter++;
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
    userScoreDisplay[0].innerHTML = userScore;
    compScoreDisplay[0].innerHTML = compScore;
  } else {
    //display the final output container
    if (compScore > userScore) {
      finalResultsContainer.classList.add("lost");
      finalOutputMessage.innerHTML = "Oops, You Lost!";
      finalOutputMessage.style.color = "#e5696a";
    } else if (userScore > compScore) {
      finalResultsContainer.classList.add("won");
      finalOutputMessage.innerHTML = "Congrats, You Won!";
      finalOutputMessage.style.color = "#00e973";
      animItem.goToAndPlay(0, true);
    } else {
      finalResultsContainer.classList.add("draw");
      finalOutputMessage.innerHTML = "Game Drawn!";
    }
    userScoreDisplay[1].innerHTML = userScore;
    compScoreDisplay[1].innerHTML = compScore;
  }
});

//Scissors
scissors.addEventListener("click", () => {
  if (gameCounter <= totalMoves) {
    movesRemaining.innerHTML = totalMoves - gameCounter;
    gameCounter++;
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
    userScoreDisplay[0].innerHTML = userScore;
    compScoreDisplay[0].innerHTML = compScore;
  } else {
    //display the final output container
    if (compScore > userScore) {
      finalResultsContainer.classList.add("lost");
      finalOutputMessage.innerHTML = "Oops, You Lost!";
      finalOutputMessage.style.color = "#e5696a";
    } else if (userScore > compScore) {
      finalResultsContainer.classList.add("won");
      finalOutputMessage.innerHTML = "Congrats, You Won!";
      finalOutputMessage.style.color = "#00e973";
      animItem.goToAndPlay(0, true);
    } else {
      finalResultsContainer.classList.add("draw");
      finalOutputMessage.innerHTML = "Game Drawn!";
    }
    userScoreDisplay[1].innerHTML = userScore;
    compScoreDisplay[1].innerHTML = compScore;
  }
});

//Reset Button
const reset = () => {
  userScore = 0;
  userScoreDisplay[0].innerHTML = userScore;
  compScore = 0;
  compScoreDisplay[0].innerHTML = compScore;
  gameCounter = 1;

  outputMessage.innerHTML = "";
  movesRemaining.innerHTML = 5;

  finalResultsContainer.classList.remove("won");
  finalResultsContainer.classList.remove("lost");
  finalResultsContainer.classList.remove("draw");
};

resetButton.addEventListener("click", reset);

//Try again Button
tryAgainButton.addEventListener("click", () => {
  reset();
});
