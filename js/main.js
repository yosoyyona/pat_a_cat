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
    resultP.style.display = 'none';

    gameArea.start()

    gameArea.timer()
    

    // pause - doesn't work
    if(!gameArea.isGamePaused) 
    {
                toggle = setInterval(function() {
            gameArea.popCat()
        }, 3000)
    
    }
    else if(gameArea.isGamePaused)
    {
        pauseGame()

        clearInterval(toggle)
        clearTimeout(gameArea.timer())
    }
    

}


let pauseGame = () => {
    gameArea.isGamePaused = true
    gameP.style.display = "none"
    pausedP.style.display = "flex"
    restartB.style.display = "flex"
    resultP.style.display = "none"
    
}

let restartGame = () => {
    gameArea.isGamePaused = false
    pausedP.style.display = "none"
    gameP.style.display = "flex"
}

let startSound = document.createElement('audio')
startSound.src = "sound/lilu_miau.mp3"

let matchSound = document.createElement('audio')
matchSound.src = "sound/lilu_prr.mp3"

// click events
document.getElementById('start-button').onclick = () => {
    startP.style.display = 'none';
    nameP.style.display = 'flex';
    startSound.play()
}


document.getElementById('name-button').onclick = () => {
    
    createUser();

    if(!userName == '' && typeof userName === 'string' && userName.length < 20) 
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

document.getElementById('again-button').addEventListener('click', (event) => {
    
    
    /*
    document.querySelectorAll('#top #left #right #bottom').style.backgroundImage = '' 
    document.querySelectorAll('#top #left #right #bottom').classList.remove('filled-hole')
    document.querySelectorAll('#top #left #right #bottom').classList.add('empty-hole') 
    */

    startGame();
    
})


// keyboard events
document.addEventListener('keydown', ({ key }) => {

    if (gameArea.isGamePaused) return
    if (gameArea.isGameFinished) return

    switch (key) {
        case "Up": case "ArrowUp":
            gameArea.patCat("top")
            break;
        case "Left": case "ArrowLeft":
            gameArea.patCat("left")
            break;
        case "Right": case "ArrowRight":
            gameArea.patCat("right")
            break;

        case "Down": case "ArrowDown":
            gameArea.patCat("bottom")
            break;
    
        default:
            return; 
    }
})


/* document.getElementById("start").addEventListener('click', (event) => {


    updateTimer = setInterval(myGameArea.update, 1000 / 60)

    document.getElementById("start-page").style.display = "none"
    //document.getElementById("restart").disabled = false
    //document.getElementById("pause").disabled = false
}) */