let editedPlayer=0;
let activeplayer=0;
const gameData=[
    [0,0,0],
    [0,0,0],
    [0,0,0]
]
const players= [
    {
        name:'',
        symbol:'X'
    },
    {
        name:'',
        symbol:'O'
    }
];
const toDisplayConfig = document.getElementById('config');
const toDisplaybackdrop = document.getElementById('backdrop');
const errorMessage = document.getElementById('error-message')
const formE = document.querySelector('form');
const activePlayerName=document.getElementById('active-player-name');
const cancelConfigE = document.getElementById('cancel');
const openActualGameE = document.getElementById('actual-game');
const editP1btnEle = document.getElementById('edit-p1');
const editP2btnEle = document.getElementById('edit-p2');

editP1btnEle.addEventListener('click', openPlayerConfig);
editP2btnEle.addEventListener('click', openPlayerConfig);

cancelConfigE.addEventListener('click', closeDisplayConfig);

formE.addEventListener('submit', savePayerConfig);

// openActualGameE.addEventListener('click', openGame);
const gamefieldelements=document.querySelectorAll('#game-field li');
for(const gamefieldelement of gamefieldelements){
    gamefieldelement.addEventListener('click', selectGameField);
}