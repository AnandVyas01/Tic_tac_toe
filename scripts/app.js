const toDisplayConfig = document.getElementById('config');
const toDisplaybackdrop = document.getElementById('backdrop');

const cancelConfigE = document.getElementById('cancel');

const editP1btnEle = document.getElementById('edit-p1');
const editP2btnEle = document.getElementById('edit-p2');

editP1btnEle.addEventListener('click', openPlayerConfig);
editP2btnEle.addEventListener('click', openPlayerConfig);

cancelConfigE.addEventListener('click', closeDisplayConfig);