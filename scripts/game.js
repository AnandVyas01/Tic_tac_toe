function openGame(){
    if(players[0].name === '' || players[1].name === ''){
        alert('please enter name before starting the game!!');
        return;
    }
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
    
}