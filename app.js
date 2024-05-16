//varriable declaration
let userinput;
let computer;
let win=0;
let loss=0;
let coin=document.querySelector(".coin");
let head=document.querySelector(".headcoin");
let tail=document.querySelector(".tailcoin");
let toss=document.querySelector(".toss");
let winner=document.querySelector(".result");
let flipsound=new Audio('coin.mp3');



//functions
function headcoin(){
    userinput=1;
    head.setAttribute("id","focus");
    head.disabled=true;
    tail.disabled=true;
    toss.disabled=false;
}
function tailcoin(){
    userinput=0;
    tail.setAttribute("id","focus");
    head.disabled=true;
    tail.disabled=true;
    toss.disabled=false;
}
function tosscoin(){
    coin.classList.add("flip");
    flipsound.play();
computer=Math.floor(Math.random() * 2);
setTimeout(()=>{
    if(computer==1){
        document.getElementById('showresult').innerHTML="HEAD";
     }else{
         document.getElementById('showresult').innerHTML="TAIL";
     }
if(userinput===computer){
    document.getElementById('winner').innerHTML="You have won the toss.";
    win+=1;
    document.getElementById('win').innerHTML="Win : "+win;
}
else{
    document.getElementById('winner').innerHTML="You have lost the toss.";
    loss+=1;
    document.getElementById('loss').innerHTML="Loss : "+loss;
}
winner.classList.remove("hide");
},950);

}
function reset(){
    document.getElementById('showresult').innerHTML="COIN";
    head.disabled=false;
    tail.disabled=false;
    toss.disabled=true;
    head.removeAttribute("id","focus");
    tail.removeAttribute("id","focus");
    coin.classList.remove("flip");
    winner.classList.add("hide");
}



