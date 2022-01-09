var randomNumber1 = Math.random() * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;
var randomNumber2 = Math.random() * 6;
randomNumber2 = Math.floor(randomNumber2) + 1;
var image1 = document.getElementsByTagName("img")[0];
image1.src = "images/dice" + randomNumber1 + ".png";
var image2 = document.getElementsByTagName("img")[1];
image2.src = "images/dice" + randomNumber2 + ".png";
var header = document.querySelector("h1");

if (randomNumber1 === randomNumber2) {
  header.innerHTML = "Draw!";
} else if (randomNumber1 > randomNumber2) {
  header.innerHTML = "🚩 Player1 Wins!";
} else {
  header.innerHTML = "🚩 Player2 Wins!";
}
//generates a random number between 1 and 6
// console.log(randomNumber1)
