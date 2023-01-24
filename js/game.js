const gameArea = {
    isGamePaused: false,
    isGameFinished: false,
    
    cats: [
        { isCatOut: false, dom: document.getElementById("top") },
        { isCatOut: false, dom: document.getElementById("left") },
        { isCatOut: false, dom: document.getElementById("right") },
        { isCatOut: false, dom: document.getElementById("bottom") }
    ],

    popCat: function () {

        // get all the black holes
        let blackHoles = document.getElementsByClassName("empty-hole")

        // get all the black holes that there are (because there might only be 1 or two available if all the cats get out)
        // and get a random of them

        if (blackHoles.length > 0) {

            const number = Math.floor(Math.random() * blackHoles.length)
            
            blackHoles[number].classList.add("filled-hole")
            blackHoles[number].classList.remove("empty-hole")
        
        }

    },

    patCat: function(position) {

        let targetHole = document.getElementById(position)

        // here there's a cat
        if (targetHole.classList.contains("filled-hole"))
        {

            // add points
            targetHole.classList.remove("filled-hole")
            targetHole.classList.add("empty-hole")

        }
        // here the hole is empty
        else
        {
            // lose points
            

        }

    },

    timer: function() {
        let gameTime = 60;

        setInterval(myTimer, 1000);

        function myTimer() {
            if(gameTime > 0) gameTime--;
        }

        // pause
    },


    

    /* update: function() {

        if (myGameArea.isGamePaused) return
        
        
    } */
    // updateTimer = setInterval(gameArea.update, 1000 / 60)
    
}



// stage 1(time 60s) > paused > restart > 0 > stage 2 > ... > stage 3 > ... > 0 > Result 



/* document.getElementById("start").addEventListener('click', (event) => {


    updateTimer = setInterval(myGameArea.update, 1000 / 60)

    document.getElementById("start-page").style.display = "none"
    //document.getElementById("restart").disabled = false
    //document.getElementById("pause").disabled = false
}) */