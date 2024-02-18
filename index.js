var rand1=Math.floor(Math.random()*6)+1;
var diceimg= "dice"+rand1+".png";
var imgsrc="images/"+diceimg;
var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",imgsrc);

var rand2=Math.floor(Math.random()*6)+1;
var diceimg2= "dice"+rand2+".png";
var imgsrc2="images/"+diceimg2;
var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src",imgsrc2);

if(rand1>rand2)
{
    document.querySelector('h1').innerHTML="Player 1 wins 👆🏼"
}
else if(rand2>rand1)
{
    document.querySelector('h1').innerHTML="Player 2 wins ✌🏼"
}
else{
    document.querySelector('h1').innerHTML="its a tie Play Again 🤝"
}