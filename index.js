const container= document.querySelectorAll(".child");
const PLAYER_X = 'X';
const PLAYER_O = 'O';
let turn = PLAYER_X;




const arr = Array(container.length);
arr.fill(null);

const strike = document.getElementById("strike");
const playAgain = document.getElementById("playAgain");

const gameOverArea = document.getElementById("game-over-area");
const gameOverText = document.getElementById("game-over-text");
const gameOverScreen = document.getElementById("game-over-screen");


container.forEach((child) => child.addEventListener("click", childClick));

// function setHoverText(){
//     container.forEach((child) =>{
//         child.classList.remove("x-hover");
//         child.classList.remove("o-hover");
//     });
//     const hoverClass = `${turn.toLocaleLowerCase()}-hover`;

//     container.forEach(child ={
//         if(child.innerText == ""){
//             child.classList.add(hoverClass);
//         }
//     });
// }


function childClick(event) {
    if (gameOverArea.classList.contains("visible")) {
        return;
    }
    const child = event.target;
    const childNumber = child.dataset.index;
    if (child.innerText != "") {
        return;
    }

    if (turn == PLAYER_X) {
        child.innerText = PLAYER_X;
       arr[childNumber - 1] = PLAYER_X;
        turn = PLAYER_O;

    } else {
        child.innerText = PLAYER_O;
        arr[childNumber - 1] = PLAYER_O;
        turn = PLAYER_X;
    }

    

    
   
}


function checkWinner() {

    for(const winningCombinaions of winningCombinaions) { 

        const { combo, strikeClass }= winningCombinaions;
        const childValue1 = boardState[combo[0] -1];
        const childValue2 = boardState[combo[1] -1];
        const childValue3 = boardState[combo[2] -1];
        
        if(
            childValue1 != null && 
            childValue1 === childValue2  &&
             childValue1 === childValue3
          ) {

         strike.classList.add(strikeClass);
         gameOverScreen(childValue1);   
        }
    }


    checkWinner();
}
//check for a draw

function gameOverScreen(winnerText){
    let text = 'Draw!'
    if(winnerText !=null){
        text = `winner is ${winnerText} `;
    }
    

}


const winningCombinaions = [
    {combo : [1, 2, 3]},
    {combo : [4, 5, 6]},
    {combo : [7, 8, 9]},
      
    {combo : [1 , 4, 7]},
    {combo : [2, 5, 8]},
    {combo : [3, 6, 9]},
     
    {combo : [1, 5, 9]},
    {combo : [3, 5, 7]}


];
