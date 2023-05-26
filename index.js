var randomNumber1=Math.floor(Math.random()*6)+1;
var randomDiceImage="dice"+randomNumber1 +".png";//get dice1 to  dice6
var randomImageSource=randomDiceImage;//dice1.png to dice2.png
  var image1=document.querySelectorAll("img")[0];// to change src   of image attribute to randomImageSource
image1.setAttribute("src",randomImageSource);
var randomNumber2=Math.floor(Math.random()*6)+1;//get random number 1-6
var randomImageSource2="dice"+randomNumber2 +".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2)
 if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player1 wins "
 }else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="Player2 wins "
 } else{
    document.querySelector("h1").innerHTML="Draw"
 }