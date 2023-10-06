var myParagraph = document.getElementById("app");

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
  console.log("hello");
  myParagraph.innerText = "Got me!";
  myParagraph.style.backgroundColor = "green";
  myParagraph.className = "gotclicked";
});
