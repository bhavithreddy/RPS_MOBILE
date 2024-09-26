let userScore = 0;
let CompScore = 0;
let maxScore = 5;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const msgCont = document.querySelector(".message");
const userScoreBoard = document.querySelector("#user");
const pcScoreBoard = document.querySelector("#Computer");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const Idx = Math.floor(Math.random() * 3);
  return options[Idx];
};

const drawGame = () => {
  console.log("The game was draw");
  msg.innerText = "GAME DRAW | PLAY AGAIN!";
  msgCont.style.backgroundColor = "black";
};

const shoWin = (userWin, userChoice, compChoice) => {
  if (userWin) {
    console.log("YOU WIN!!");
    userScore++;
    userScoreBoard.innerText = userScore;
    msg.innerText = `YOU WIN & YOUR ${userChoice} BEATS PC'S ${compChoice}`;
    msgCont.style.backgroundColor = "green";
  } else {
    console.log("PC WON!!");
    CompScore++;
    pcScoreBoard.innerText = CompScore;
    msg.innerText = `YOU LOSE & PC's ${compChoice} BEATS YOUR ${userChoice}`;
    msgCont.style.backgroundColor = "red";
  }
};

const checkGameOver = () => {
  if (userScore === maxScore) {
    msg.innerText = "FINAL SCORE - YOU WON!!";
    msgCont.style.backgroundColor = "green";
    resetGame();
  } else if (CompScore === maxScore) {
    msg.innerText = "FINAL SCORE - YOU LOSE!!";
    msgCont.style.backgroundColor = "red";
    resetGame();
  } else {
    msg.innerText = "PLAY AGAIN!!";
  }
};

const resetGame = () => {
  userScore = 0;
  CompScore = 0;
  userScoreBoard.innerText = userScore;
  pcScoreBoard.innerText = CompScore;
};

const playGame = (userChoice) => {
  console.log("User choice is", userChoice);
  const compChoice = genCompChoice();
  console.log("Computer Choice is", compChoice);

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    shoWin(userWin, userChoice, compChoice);
  }

  checkGameOver();
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
