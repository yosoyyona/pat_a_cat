const gameArea = {
    isGamePaused: false,
    isGameFinished: false,



        

    start: function() {
        document.getElementById('name-button').on('click', () =>{
            this.startStage()
        })
    },
    
    
    startStage: function() {
        this.timer()

        


    },
    
    timer: function() {
        let gameTime = 60;

        setInterval(myTimer, 1000);

        function myTimer() {
            if(gameTime > 0) gameTime--;
        }

    },

    randomHoles: function(holes) {
        
        const number = Math.floor(Math.random() * holes.length)
    
        return holes[number]
        
    },

    catsOut: function() {
        let holesArray = ['left', 'centerTop', 'centerBottom', 'right']
        this.randomHoles(holesArray)


    },

    /* update: function() {

        if (myGameArea.isGamePaused) return
        
        
    } */
    // updateTimer = setInterval(gameArea.update, 1000 / 60)
    
}


gameArea.start


// stage 1(time 60s) > paused > restart > 0 > stage 2 > ... > stage 3 > ... > 0 > Result 



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