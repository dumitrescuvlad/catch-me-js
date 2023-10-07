var myParagraph = document.getElementById("app");
var restartButton = document.getElementById("restart");
var score = 0;
var gameStarted = false; // Add a gameStarted flag

function updateScore() {
  document.getElementById("score").textContent = "Score: " + score;
}

function startGame() {
  myParagraph.innerText = "Catch me";
  myParagraph.style.backgroundColor = "";
  myParagraph.classList.remove("gotclicked");
  score = 0;
  updateScore();
  restartButton.style.display = "none"; // Hide the restart button initially
  gameStarted = false; // Reset the gameStarted flag
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
  if (!gameStarted) {
    gameStarted = true; // Set the gameStarted flag to true
    restartButton.style.display = "block"; // Hide the restart button initially
  }

  if (!myParagraph.classList.contains("gotclicked")) {
    myParagraph.innerText = "Got me!";
    myParagraph.style.backgroundColor = "green";
    myParagraph.className = "gotclicked";
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
  if (myParagraph.classList.value) {
    return;
  }
  continueGame();
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
