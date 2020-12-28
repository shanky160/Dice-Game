var randomNumber1 = Math.floor(Math.random() *6)+1;

var imageSource1 = "images/" + "dice" + randomNumber1 + ".png";

var image1= document.querySelectorAll("img")[0];
image1.setAttribute("src", imageSource1);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var imageSource2 = "images/dice" + randomNumber2 + ".png";
var image2= document.querySelectorAll("img")[1];
image2.setAttribute("src", imageSource2);

var heading= document.querySelector("h1");

if (randomNumber1>randomNumber2){
  heading.innerText= "🚩Player1 Wins";
} else if(randomNumber1<randomNumber2) {
  heading.innerText= "Player2 Wins🚩";
} else {
  heading.innerText= "Draw";
}

const btn= document.getElementById('btn');
btn.addEventListener('click', function() {
  window.location.reload();
})