var randomNumber1 = Math.floor(Math.random() *6) +1;// to generate a random number between 1 and 6
var randomDiceImage1 = "dice" + randomNumber1 + ".png";
var randomDiceImageSource1 = "images/" + randomDiceImage1;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomDiceImageSource1);



var randomNumber2 = Math.floor(Math.random() *6) +1;
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomDiceImageSource2 = "images/" + randomDiceImage2;


var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomDiceImageSource2);

if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="PLAYER 1 WINS";
}
else if(randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML="PLAYER 2 WINS";
}
else{
  document.querySelector("h1").innerHTML="🎎DRAW";
}
