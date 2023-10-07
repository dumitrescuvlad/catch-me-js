var myParagraph = document.getElementById("app");
var score = 0; // Initialize the score to 0

// Function to update the score on the page
function updateScore() {
  document.getElementById("score").textContent = "Score: " + score;
}

myParagraph.addEventListener("mouseover", function () {
  if (myParagraph.classList.value) {
    return;
  }
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
});

myParagraph.addEventListener("click", function () {
  if (!myParagraph.classList.contains("gotclicked")) {
    console.log("hello");
    myParagraph.innerText = "Got me!";
    myParagraph.style.backgroundColor = "green";
    myParagraph.className = "gotclicked";
    score++; // Increase the score when clicked
    updateScore(); // Update the score on the page
  }

  // Check if the player has reached a certain score to end the game
  if (score >= 10) {
    alert("Game over! Your final score is: " + score);
    score = 0; // Reset the score
    updateScore(); // Update the score on the page
    myParagraph.innerText = "Catch me";
    myParagraph.style.backgroundColor = ""; // Reset button color
    myParagraph.classList.remove("gotclicked");
  }
});

// Add an element to display the score on the page
var scoreElement = document.createElement("div");
scoreElement.id = "score";
scoreElement.textContent = "Score: " + score;
document.body.appendChild(scoreElement);
