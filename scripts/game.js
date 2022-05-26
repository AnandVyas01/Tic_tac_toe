function openGame(){
    if(players[0].name === '' || players[1].name === ''){
        alert('please enter name before starting the game!!');
        return;
    }
    openActualGameE.style.display='block';
}