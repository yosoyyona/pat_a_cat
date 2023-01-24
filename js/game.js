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

        // pause
    },

    randomColors: function() {
        
        return '#'+Math.floor(Math.random()*16777215).toString(16);
        
    },

    colorHoles: function() {
        
        const emptyHoles = document.getElementsByClassName('empty-hole');

        for (i = 0; i < emptyHoles.length; i++) 
        {
            emptyHoles[i].style.backgroundColor = randomColors();
        }

        // setInterval(colorHoles, 1000)

    }

    // catsOut: function() {},

    // dogsOut

    /* update: function() {

        if (myGameArea.isGamePaused) return
        
        
    } */
    // updateTimer = setInterval(gameArea.update, 1000 / 60)
    
}


gameArea.start
gameArea.colorHoles

// stage 1(time 60s) > paused > restart > 0 > stage 2 > ... > stage 3 > ... > 0 > Result 








/* document.getElementById("start").addEventListener('click', (event) => {


    updateTimer = setInterval(myGameArea.update, 1000 / 60)

    document.getElementById("start-page").style.display = "none"
    //document.getElementById("restart").disabled = false
    //document.getElementById("pause").disabled = false
}) */