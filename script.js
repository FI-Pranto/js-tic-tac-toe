
let resetBtn=document.querySelector("#reset")
let winMsg=document.querySelector("#message")
let turn="X";
let count=0
let gameOver=false
let boxes=document.querySelectorAll(".box")
const resetHandler=()=>{
    for(let box of boxes){
        box.textContent=""
    }
    turn="X"
    gameOver=false
    winMsg.textContent=""
    winMsg.style.display="none"
    count=0
}

resetBtn.addEventListener("click",resetHandler)

for(let box of boxes){
    box.addEventListener("click",()=>{
        if(box.textContent=="" && gameOver!=true){
            box.textContent=turn
            if(turn=="X"){
               turn="O"
            }
            else{
               turn="X"
            }
            gameOver=checkWin(boxes)
            if(gameOver){
                winMsg.style.display="flex"
            }
            count++
            if(count>=9){
                gameOver=true
                winMsg.textContent="Draw"
                winMsg.style.display="flex"
            }
        }
    


    })
}

function checkWin(boxes){

     if(boxes[0].textContent==boxes[1].textContent && boxes[1].textContent==boxes[2].textContent && boxes[0].textContent!=""){
        winMsg.textContent=boxes[0].textContent+" Wins"
        return true;
     }
     else if(boxes[3].textContent==boxes[4].textContent && boxes[4].textContent==boxes[5].textContent && boxes[3].textContent!=""){
        winMsg.textContent=boxes[3].textContent+" Wins"
        return true
     }
     else if(boxes[6].textContent==boxes[7].textContent && boxes[7].textContent==boxes[8].textContent && boxes[6].textContent!=""){
        winMsg.textContent=boxes[6].textContent+" Wins"
        return true
     }
     else if(boxes[0].textContent==boxes[3].textContent && boxes[3].textContent==boxes[6].textContent && boxes[0].textContent!=""){
        winMsg.textContent=boxes[0].textContent+" Wins"
        return true
     }
     else if(boxes[1].textContent==boxes[4].textContent && boxes[4].textContent==boxes[7].textContent && boxes[1].textContent!=""){
        winMsg.textContent=boxes[1].textContent+" Wins"
        return true
     }
     else if(boxes[2].textContent==boxes[5].textContent && boxes[5].textContent==boxes[8].textContent && boxes[2].textContent!=""){
        winMsg.textContent=boxes[2].textContent+" Wins"
        return true
     }
     else if(boxes[0].textContent==boxes[4].textContent && boxes[4].textContent==boxes[8].textContent && boxes[0].textContent!=""){
        winMsg.textContent=boxes[0].textContent+" Wins"
        return true
     }
     else if(boxes[2].textContent==boxes[4].textContent && boxes[4].textContent==boxes[6].textContent && boxes[2].textContent!=""){
        winMsg.textContent=boxes[2].textContent+" Wins"
        return true
     }
     else{
        return false;
     }

}






