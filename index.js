function imgName(){
var i = Math.floor(Math.random()*6+1);
img =("dice"+i+".png");
return img;
}

var img1 ="images/"+imgName();
document.querySelector(".img1").setAttribute("src",img1);

var img2 ="images/"+imgName();
document.querySelector(".img2").setAttribute("src",img2);

if (img1 > img2) {
    document.querySelector("h1").innerHTML="Player 1 Wins";
}
else if (img1 < img2) {
    document.querySelector("h1").innerHTML="Player 2 Wins";    
}
else{
    document.querySelector("h1").innerHTML="Draw Match";
}