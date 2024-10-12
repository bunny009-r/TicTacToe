let boxs=document.querySelectorAll(".box");
let newgame=document.querySelector("#btnNewGame");
let resetGame=document.querySelector("#resetGame")
let turnX=true;
const winner=
[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
    
]
boxs.forEach(box=>{
    box.addEventListener("click",()=>{
        if(turnX===true)
        {
            box.innerText="X";
            turnX=false;
        }
        else{
            box.innerText="O";
            turnX=true;
        }
        box.disabled=true;
        checkWinner();
    })
});

const checkWinner=()=>{
   for(let win of winner)
   {
    let b1=boxs[win[0]].innerText;
    let b2=boxs[win[1]].innerText;
    let b3=boxs[win[2]].innerText;
   if(b1!="" &&b2!="" &&b3!="")
   {
    if(b1==b2&&b2==b3){
        document.querySelector(".game").classList.add("hide");
        document.querySelector(".result").classList.remove("hide");
        let para=document.querySelector(".winner");
        para.innerText = "Winner: " + b1;
       }
   }
   }
}

newgame.addEventListener("click",()=>{
    document.querySelector(".game").classList.remove("hide");
    document.querySelector(".result").classList.add("hide");
    clear();
})

const clear=()=>{
    boxs.forEach(box=>{
        box.disabled=false;
        box.innerText=null;
    })
}
resetGame.addEventListener("click",clear);