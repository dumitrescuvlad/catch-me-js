import {BUTTON_CLICKED_VALUE} from './constants/button-click-value.js'

var myParagraph = document.getElementById("app");
var restartButton = document.getElementById("restart");
var score = 0;

function updateScore() {
  document.getElementById("score").textContent = "Score: " + score;
}

const resetButton = () => { 
  myParagraph.innerText = "Catch me";
  myParagraph.style.backgroundColor = "";
  myParagraph.classList.remove(BUTTON_CLICKED_VALUE);
}

function startGame() {
  score = 0;
  resetButton()
  updateScore();
  restartButton.style.display = "none"; // Hide the restart button initially
}

function continueGame() {
  var screenWidth = window.innerWidth;
  var screenHeight = window.innerHeight;

  var randomX = Math.floor(
    Math.random() * (screenWidth - myParagraph.offsetWidth)
  );
  var randomY = Math.floor(
    Math.random() * (screenHeight - myParagraph.offsetHeight)
  );

  myParagraph.style.left = randomX + "px";
  myParagraph.style.top = randomY + "px";
}

function handleClick() {
  const isClicked = myParagraph.classList.contains(BUTTON_CLICKED_VALUE)
  if (isClicked) {
    restartButton.style.display = "block"; // Hide the restart button initially
    resetButton()
  }

  if (!isClicked) {
    myParagraph.innerText = "Got me!";
    myParagraph.style.backgroundColor = "green";
    myParagraph.className = BUTTON_CLICKED_VALUE;
    score++;
    updateScore();

    if (score >= 10) {
      alert("Congratulations! You completed the game with a score of " + score);
      startGame();
    } else {
      continueGame();
    }
  }
}

myParagraph.addEventListener("mouseover", function () {
  const isClicked =myParagraph.classList.contains(BUTTON_CLICKED_VALUE)
  /*
    What can happen when we hover over the button: 
      - the button will run away from us, so we are still playing.
      - we catched the button, it is static, and we can handle how the game logic should continue

    notes: 
      when we are in the second phase of the game and so we were able to catch the button, the button has as className BUTTON_CLICKED_VALUE  
  */
  if (!isClicked) continueGame();
  
});

myParagraph.addEventListener("click", handleClick);

// Add an event listener for the restart button
restartButton.addEventListener("click", startGame);

// Listen for the "P" key press to trigger the button click
document.addEventListener("keydown", function (event) {
  if (event.key === "p" || event.key === "P") {
    handleClick();
  }
});

// Start the game initially
startGame();
