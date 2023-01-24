const gameArea = {
    isGamePaused: false,
    isGameFinished: false,
    
    startStage: function() {
        // this.timer()

        this.colorHoles()


    },
    
    timer: function() {
        let gameTime = 60;

        setInterval(myTimer, 1000);

        function myTimer() {
            if(gameTime > 0) gameTime--;
        }

        // pause
    },

    randomHole: function() {
        const number = Math.floor(Math.random() * 4)
        return number
    },

/*     randomColors: function() {
        
        return '#'+Math.floor(Math.random()*16777215).toString(16);
        
    }, */

    colorHoles: function() {
        
        const emptyHoles = document.getElementsByClassName('empty-hole');

        emptyHoles[this.randomHole()].style.backgroundColor = 'black';

        // setInterval(colorHoles, 1000)

    }

    

    // catsOut: function() {},

    // dogsOut

    /* update: function() {

        if (myGameArea.isGamePaused) return
        
        
    } */
    // updateTimer = setInterval(gameArea.update, 1000 / 60)
    
}


document.getElementById('name-button').addEventListener('click', (event) => {
    gameArea.startStage()
})



//gameArea.start()


// stage 1(time 60s) > paused > restart > 0 > stage 2 > ... > stage 3 > ... > 0 > Result 








/* document.getElementById("start").addEventListener('click', (event) => {


    updateTimer = setInterval(myGameArea.update, 1000 / 60)

    document.getElementById("start-page").style.display = "none"
    //document.getElementById("restart").disabled = false
    //document.getElementById("pause").disabled = false
}) */