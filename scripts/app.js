const toDisplayConfig = document.getElementById('config');
const toDisplaybackdrop = document.getElementById('backdrop');
const errorMessage = document.getElementById('error-message')
const formE = document.querySelector('form');

const cancelConfigE = document.getElementById('cancel');

const editP1btnEle = document.getElementById('edit-p1');
const editP2btnEle = document.getElementById('edit-p2');

editP1btnEle.addEventListener('click', openPlayerConfig);
editP2btnEle.addEventListener('click', openPlayerConfig);

cancelConfigE.addEventListener('click', closeDisplayConfig);

formE.addEventListener('submit', savePayerConfig);