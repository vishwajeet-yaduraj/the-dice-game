var random = Math.random()*6;
var randomNumber1 = Math.floor(random)+1;

var randomImage1 = "./images/dice"+randomNumber1+".png"

document.querySelector(".img1").setAttribute("src",randomImage1);

var random = Math.random()*6;
var randomNumber2 = Math.floor(random)+1;

var randomImage2 = "./images/dice"+randomNumber2+".png"

document.querySelector(".img2").setAttribute("src",randomImage2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🚩 Player one wins";
} else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player two wins 🚩";
}else{
    document.querySelector("h1").innerHTML="It's a Tie Bitch!"
}