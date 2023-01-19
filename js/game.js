const gameArea = {



    
}

// stage 1(time 60s) > paused > restart > 0 > stage 2 > ... > stage 3 > ... > 0 > Result 



// 4 holes
let holes = ['left', 'centerTop', 'centerBottom', 'right']

function randomHole(holes) {
    const number = Math.floor(Math.random() * holes.length)
    
    return holes[number]
}


// cats, randomtime
function catsOut() {

}


// dogs - stage 2, stage 3
function dogsOut() {
    
}











/* document.getElementById("start").addEventListener('click', (event) => {

    // Create the Background
    background = new Component(0, 0, myGameArea.canvas.width, myGameArea.canvas.height, "grey")
    //background.img = new Image();
    //background.img.src = "../img/Background.png"



    updateTimer = setInterval(myGameArea.update, 1000 / 60)

    document.getElementById("start-page").style.display = "none"
    //document.getElementById("restart").disabled = false
    //document.getElementById("pause").disabled = false
}) */