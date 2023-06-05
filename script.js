var randomnumber1 = Math.floor(Math.random()*6) + 1;
var randomimg = "dice"+ randomnumber1+".png";
var randomimgsrc = "images/" + randomimg;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomimgsrc);

var randomnumber2 = Math.floor(Math.random()*6) + 1;
var randomimg1 = "dice"+ randomnumber2+".png";
var randomimgsrc1 = "images/" + randomimg1;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomimgsrc1);

if(randomnumber1 > randomnumber2){
    document.querySelector("h1").innerHTML = "Player 1 wins!";
}
else if(randomnumber1 < randomnumber2){
    document.querySelector("h1").innerHTML = "Player 2 wins!";
}
else{
    document.querySelector("h1").innerHTML = "Draw"
}