function openPlayerConfig(){
    toDisplayConfig.style.display= 'block' ;
    toDisplaybackdrop.style.display= 'block' ;
}

function closeDisplayConfig(){
    toDisplayConfig.style.display= 'none' ;
    toDisplaybackdrop.style.display= 'none' ;
    formE.target.firstElementChild.classList.remove('error');
    errorMessage.textContent='';
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
}