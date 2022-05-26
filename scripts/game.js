function openGame(){
    if(players[0].name === '' || players[1].name === ''){
        alert('please enter name before starting the game!!');
        return;
    }
    activePlayerName.textContent=players[activeplayer].name;
    openActualGameE.style.display='block';
}
function selectGameField(e){
    e.target.textContent=players[activeplayer].symbol;
    e.target.classList.add('disabled');
    if(activeplayer===0){
        activeplayer=1;
    } else {
        activeplayer=0;
    }
    activePlayerName.textContent=players[activeplayer].name;
}