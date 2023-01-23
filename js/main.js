// canvas
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.strokeRect(0, 0, 300, 150) // --> (0, 0, 450, 300)

ctx.strokeRect(40, 50, 50, 50) //left
ctx.strokeRect(125, 85, 50, 50) //centerTop
ctx.strokeRect(125, 15, 50, 50) //centerBottom
ctx.strokeRect(210, 50, 50, 50) //right

// ctx.arc(50, 50, 10, 0, 2 * Math.PI)

let userName = '';



function createUser() {

    userName = document.querySelector('#name input[type="text"]') //.value
    
    console.log(userName)

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
    
    // if(userName) 
    createUser();
    
    gameP.style.display = 'flex';
    startGame();
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

    if (gameArea.isGamePaused) return

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