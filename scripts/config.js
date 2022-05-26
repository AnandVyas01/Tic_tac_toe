function openPlayerConfig(e){
    toDisplayConfig.style.display= 'block' ;
    toDisplaybackdrop.style.display= 'block' ;
    editedPlayer= +e.target.dataset.playerid; //+ is used to convert string to int
}

function closeDisplayConfig(){
    toDisplayConfig.style.display= 'none' ;
    toDisplaybackdrop.style.display= 'none' ;
    formE.firstElementChild.classList.remove('error');
    errorMessage.textContent='';
    formE.firstElementChild.lastElementChild.value='';
}

function savePayerConfig(e){
    e.preventDefault(); //used to prevent default behaviour of the browser that is sending http req when clicked submit
    const formData= new FormData(e.target);
    const playerattr= formData.get('playername').trim();
    if(playerattr === ''){
        e.target.firstElementChild.classList.add('error');
        errorMessage.textContent='please enter a valid name!';
        return;
    }
    const updatedPlayerDataElement = document.getElementById('player-'+editedPlayer+'-data');
    updatedPlayerDataElement.children[1].textContent=playerattr;

    players[editedPlayer - 1].name = playerattr;

    closeDisplayConfig();
}