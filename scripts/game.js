function resetGameStatus(){
    activePlayer=0;
    currentRound=1;
   gameOverElement.firstElementChild.innerHTML='You won,<span id="winner-name">PLAYER NAME</span>!';
   gameOverElement.style.display='none';
   let gameBoardIndex=0;
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            gameData[i][j]=0;
            const gameBoardItemElement=gameOverE.children[gameBoardIndex];
            gameBoardItemElement.textContent='';
            gameBoardItemElement.classList.remove('disabled');
            gameBoardIndex++;
        }
    }
}

function openGame(){
    if(players[0].name === '' || players[1].name === ''){
        alert('please enter name before starting the game!!');
        return;
    }
    resetGameStatus();
    activePlayerName.textContent=players[activeplayer].name;
    openActualGameE.style.display='block';
}
function selectGameField(e){
    const selectedColumn=e.target.dataset.col-1;
    const selectedrow=e.target.dataset.row-1;
    //adding error message if the selected field is clicked again
    if(gameData[selectedrow][selectedColumn]>0){
        alert('please select an empty field');
        return;
    }

    e.target.textContent=players[activeplayer].symbol;
    e.target.classList.add('disabled');

    
    gameData[selectedrow][selectedColumn]=activeplayer+1;

    if(activeplayer===0){
        activeplayer=1;
    } else {
        activeplayer=0;
    }
    activePlayerName.textContent=players[activeplayer].name;
    const check = checkWinner();
    // console.log(check);
    if(check!==0){
        endgame(check);
    }
    currentRound++;
}
function checkWinner(){
    for(let i=0;i<3;i++){
        if(
          gameData[i][0]>0 &&
          gameData[i][0]===gameData[i][1]&&
           gameData[i][1]=== gameData[i][2]
        ){
           return gameData[i][0];
        }
       }
       for(let i=0;i<3;i++){
                            
        if(
          gameData[0][i]>0 &&
          gameData[0][i]=== gameData[1][i]&&
          gameData[0][i]=== gameData[2][i]
          ){
           return gameData[0][i];
       }
        }
        if(gameData[0][0]>0 &&gameData[0][0]===gameData[1][1]&&gameData[1][1]===gameData[2][2]){
            return gameData[0][0];
        }
        if(gameData[0][2]>0 && gameData[0][2]===gameData[1][1]&&gameData[1][1]===gameData[2][0]){
            return gameData[0][2];
        }     
        return 0;               
}
function endgame(check){
    gameOverE.style.display='block';
    if(check>0){
        const winnerName= players[check-1].name;
        gameOverE.firstElementChild.firstElementChild.textContent=winnerName;
    }else{
        gameOverE.firstElementChild.textContent='it\'s a draw';
    }

}