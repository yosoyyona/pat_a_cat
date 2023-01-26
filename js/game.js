const gameArea = {
    isGamePaused: false,
    isGameFinished: false,
    
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

    },

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
        let score = document.getElementById('score')
        let totalScore = 0;
        let counterPlus = 0;
        let counterMinus = 0;

        // here there's a cat
        if (targetHole.classList.contains("filled-hole"))
        {

            // add points > array로 접근하기?
            targetHole.classList.remove("filled-hole")
            targetHole.classList.add("empty-hole")
            
            counterPlus ++;
        }
        // here the hole is empty
        else
        {
            // lose points
            counterMinus ++;

        }
        totalScore = counterPlus - counterMinus;
        score.innerText = totalScore;
    },

    timer: function() {
        let time = 30;

        let gameTimer = setInterval(function(){
            if(time <= 0) 
            {
                clearInterval(gameTimer)
                this.isGameFinished = true;
                document.getElementById('total-score').innerText = document.getElementById('score').innerText
                gameP.style.display = "none"
                resultP.style.display = "flex"
            }

            document.getElementById('time').innerText = time
            time -= 1;

        }, 1000)

        // pause
    },

/*     finish: function() {
        this.isGameFinished = true;
        document.getElementById('total-score').innerText = document.getElementById('score').innerText
        gameP.style.display = "none"
        resultP.style.display = "flex"
    }, */
    

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