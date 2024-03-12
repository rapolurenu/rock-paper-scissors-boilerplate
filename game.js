let comImg = document.getElementById("com-img");
let youImg = document.getElementById("you-img");
let yourScore = document.getElementById("yourScore");
let comScore = document.getElementById("comScore");
let winMsg = document.getElementById("Win-msg");
let playAgain=document.getElementById("play-again")


function checkWinner(ourScore, sysScore){
    if(ourScore === 5){
        winMsg.textContent = "You won the game !";
        playAgain.style.display = "block";
    }else if(sysScore === 5){
        winMsg.textContent = "computer won the game !";
        playAgain.style.display = "block";
    }else if(ourScore === comScore === 5){
        winMsg.textContent = "Tie";
        playAgain.style.display = "block";
    }
}

playAgain.onclick=()=>{
    location.reload();
}

let ourScore = 0;
let sysScore = 0;
function showScores(randomNumber, uniqueNumber){
    if(randomNumber ===1 && uniqueNumber ===2){
        ourScore += 1;
        yourScore.textContent = ourScore;
    }else if(randomNumber === 1 && uniqueNumber === 3){
        sysScore += 1;
        comScore.textContent = sysScore;
    }else if(randomNumber ===2 && uniqueNumber ===1){
        sysScore += 1;
        comScore.textContent = sysScore;
    }else if(randomNumber === 2 && uniqueNumber === 3){
        ourScore += 1;
        yourScore.textContent = ourScore;
    }else if(randomNumber ===3 && uniqueNumber ===1){
        ourScore += 1;
        yourScore.textContent = ourScore;
    }else if(randomNumber === 3 && uniqueNumber === 2){
        sysScore += 1;
        comScore.textContent = sysScore;
    }
    checkWinner(ourScore, sysScore);
}

function displayComImg(uniqueNumber){
    randomNumber = Math.ceil(Math.random()*3);
    if(randomNumber === 2){
        comImg.src = "https://github.com/rapolurenu/rock-paper-scissors-boilerplate/blob/main/assets/rock-hand.png?raw=true";
        comImg.classList.add("size");
    }else if(randomNumber == 3){
        comImg.src = "https://github.com/rapolurenu/rock-paper-scissors-boilerplate/blob/main/assets/paper-hand.png?raw=true";
        comImg.classList.add("size");
    }else if(randomNumber == 1){
        comImg.src = "https://github.com/rapolurenu/rock-paper-scissors-boilerplate/blob/main/assets/scissors-hand.png?raw=true";
        comImg.classList.add("size");
    }
    showScores(randomNumber, uniqueNumber);
}


function rockfunction(){
    let uniqueNumber = 1;
    youImg.src = "https://github.com/rapolurenu/rock-paper-scissors-boilerplate/blob/main/assets/rock-hand.png?raw=true";
    youImg.classList.add("size");
    displayComImg(uniqueNumber);
}

function paperfunction(){
    let uniqueNumber = 2;
    youImg.src = "https://github.com/rapolurenu/rock-paper-scissors-boilerplate/blob/main/assets/paper-hand.png?raw=true";
    youImg.classList.add("size");
    displayComImg(uniqueNumber);
}

function scissorsfunction(){
    let uniqueNumber = 3;
    youImg.src = "https://github.com/rapolurenu/rock-paper-scissors-boilerplate/blob/main/assets/scissors-hand.png?raw=true";
    youImg.classList.add("size");
    displayComImg(uniqueNumber);
}
