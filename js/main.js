// pages
const startP = document.getElementById('start-page')
const nameP = document.getElementById('name-page')
const gameP = document.getElementById('game-page')
const pausedP = document.getElementById('paused-page')
const resultP = document.getElementById('result-page')

// buttons
const startB = document.getElementById('start-button')
const nameB = document.getElementById('name-button')
const pauseB = document.getElementById('pause-button')
const restartB = document.getElementById('restart-button')
const againB = document.getElementById('again-button')

// boards - name, score, stage, time
const nameBoard = document.getElementById('name-board')
const scoreBoard = document.getElementById('score-board')
const stageBoard = document.getElementById('stage-board')
const timeBoard = document.getElementById('time-board')

let userName = '';





startB.onclick = () => {
    document.getElementById('start-page').style.display = 'none';
    nameP.style.display = 'flex';
    
}

function createUser() {

    userName = document.querySelector('#name input[type="text"]')
    
    console.log(userName)

}



nameB.onclick = () => {
    createUser();
    gameP.style.display = 'flex';
    startGame();
}

function startGame() {

    startP.style.display = 'none';
    nameP.style.display = 'none';
    gameP.style.display = 'flex';
    pauseB.style.display = 'flex';
    
}