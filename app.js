let userScore=0;
let compScore=0;

let choices=document.querySelectorAll(".choice");
let msgpara=document.querySelector("#msg");
let userscore=document.querySelector("#user-score");
let compscore=document.querySelector("#comp-score");


const gencompchoice=()=>{
   let arr=["rock","paper","scissor"];
   let idx =Math.floor(Math.random()*3);
   return arr[idx];
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userchoice=choice.getAttribute("id");
        playgame(userchoice);
    })
})

 const  playgame=(userchoice)=>{
   let compchoice=gencompchoice();

    if(userchoice===compchoice){
    msgpara.style.backgroundColor ="#081b31";
        msgpara.innerText="game was draw";
    }
    else{
        let userwin = true;
        if(userchoice==="rock"){
            userwin =compchoice==="paper"?false:true;
        }
        else if(userchoice==="paper"){
            userwin=compchoice==="scissor"?false:true;
        }
        else{
            userwin=compchoice==="rock"?false:true;
        }
        showwinner(userchoice,userwin,compchoice);
    
    }
}
const showwinner=(userchoice,userwin,compchoice)=>{
   if(userwin){
    userScore++;
    userscore.innerText=userScore;

    msgpara.style.backgroundColor ="green";
    msgpara.innerText=` you win! your ${userchoice} beats  ${compchoice} `;
    
   }
   else{
    compScore++;
    compscore.innerText=compScore;
    msgpara.style.backgroundColor ="red";
    msgpara.innerText=`you lose! ${compchoice} beats yours ${userchoice} `;
   }
}

