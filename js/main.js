let userName = '';

function createUser() {

    userName = document.querySelector('#name').value 
    newUser = document.getElementById('user-name')
    newUser.innerText = userName

    console.log(userName)
    return userName
}


function startGame() {

    startP.style.display = 'none';
    nameP.style.display = 'none';
    gameP.style.display = 'flex';
    pauseB.style.display = 'flex';
    
}

let pauseGame = () => {
    gameArea.isGamePaused = true
    document.getElementById('game-page').style.display = "none"
    document.getElementById('paused-page').style.display = "flex"
}

let restartGame = () => {
    gameArea.isGamePaused = false
    document.getElementById('paused-page').style.display = "none"
    document.getElementById('game-page').style.display = "flex"
}



// click events
document.getElementById('start-button').onclick = () => {
    document.getElementById('start-page').style.display = 'none';
    nameP.style.display = 'flex';
}

document.getElementById('name-button').onclick = () => {
    
    createUser();

    if(!userName == '' && typeof userName === 'string') 
    {
        gameP.style.display = 'flex';
        startGame();
    }
}

document.getElementById("pause-button").addEventListener('click', (event) => {

    pauseGame()

})

document.getElementById("restart-button").addEventListener('click', (event) => {

    restartGame()
    gameArea.isGameFinished = false

})



// keyboard events
document.addEventListener('keydown', ({ key }) => {

    //if (gameArea.isGamePaused) return

    switch (key) {
        case "Up": case "ArrowUp":
            
            break;
        case "Left": case "ArrowLeft":
            
            break;
        case "Right": case "ArrowRight":
            
            break;

        case "Down": case "ArrowDown":
            
            break;
    
        default:
            return; 
    }
})