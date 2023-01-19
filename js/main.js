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





// click events
startB.onclick = () => {
    document.getElementById('start-page').style.display = 'none';
    nameP.style.display = 'flex';
    
}

nameB.onclick = () => {
    
    // if(userName) 
    createUser();
    
    gameP.style.display = 'flex';
    startGame();
}
