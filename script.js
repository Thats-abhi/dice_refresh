let player1=Math.floor(Math.random()*6)+1;
let player2=Math.floor(Math.random()*6)+1;
let dice1="dice"+player1+".png";
let dice2="dice"+player2+".png";
document.querySelector('.img1').setAttribute("src",dice1);
document.querySelector('.img2').setAttribute("src",dice2);
let winner=document.querySelector('h1');
if(player1>player2){
     winner.innerHTML="player1 wins🚩";
}
else if(player1<player2){
    winner.innerHTML="player2 wins🚩";
}
else{
    winner.innerHTML="Draw";
}
