const gameArea = {
    isGamePaused: false,
    isGameFinished: false,
    scoreArray: [0],
    
    cats: [
        { isCatOut: false, dom: document.getElementById("top") },
        { isCatOut: false, dom: document.getElementById("left") },
        { isCatOut: false, dom: document.getElementById("right") },
        { isCatOut: false, dom: document.getElementById("bottom") }
    ],

    start: function () {

        // change everything into black
        this.cats.forEach(cat => {
            cat.dom.classList.add("empty-hole")
        })
        this.scoreArray = [0]
    },

    popCat: function () {

        // get all the black holes
        let blackHoles = document.getElementsByClassName("hole")

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
        let score = document.getElementById('score')
        let totalScore = document.getElementById('total-score')
        
        // when the game is paused or finished, can't change the score.(doesn't work)
        if (!this.isGamePaused || !this.isGameFinished) 
        {
            // here there's a cat
            if (targetHole.classList.contains("filled-hole"))
            {

                targetHole.classList.remove("filled-hole")
                targetHole.classList.add("empty-hole")
                
                this.scoreArray.push(1)
                matchSound.play()
            }
            // here the hole is empty
            else
            {
                this.scoreArray.push(-1)
            }
            
            const total = this.scoreArray.reduce((sum, number) => {
                return sum + number;
            }, 0)

            score.innerText = total;
            totalScore.innerText = total;

        }
        
    },

    timer: function() {
        let time = 30;

        let gameTimer = setInterval(function(){
            if(time <= 0) 
            {
                clearInterval(gameTimer)
                this.isGameFinished = true;
                gameP.style.display = "none"
                restartB.style.display = "none"
                resultP.style.display = "flex"
            }

            document.getElementById('time').innerText = time
            time -= 1;

        }, 1000)

    },


    /* update: function() {

        if (myGameArea.isGamePaused) return
        
        
    } */
    // updateTimer = setInterval(gameArea.update, 1000 / 60)
    
}



// stage 1(time 60s) > paused > restart > 0 > stage 2 > ... > stage 3 > ... > 0 > Result 


