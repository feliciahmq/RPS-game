const startButton = document.getElementById("startButton");
const startContainer = document.getElementById("startContainer");
const gameContainer = document.getElementById("gameContainer");

gameContainer.style.display = "none";

startButton.addEventListener("click", function() {
    startContainer.style.display = "none"; // hide startPage
    gameContainer.style.display = "block"; // show gamePage
});

function getComputerChoice() {
    value = Math.floor(Math.random() * 3);
    if (value == 0) {
        return "rock";
    }
    else if (value == 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

let playerScore = 0;
let computerScore = 0;
let gamesPlayed = 0;

document.addEventListener("click", gameSelectionListener);

function gameSelectionListener(event) {
    let element = event.target;
    let rock = "rock";
    let paper = "paper";
    let scissors = "scissors";

    if (element.classList.contains("playerselection") && element.id == ("rock")) {
        playRound(rock);
    }
    else if (element.classList.contains("playerselectiontext") && element.id == ("rockselection")) {
        playRound(rock);
    }
    else if (element.classList.contains("selection") && element.id == ("rockpng")) {
        playRound(rock);
    }

    else if (element.classList.contains("playerselection") && element.id == ("paper")) {
        playRound(paper);
    }
    else if (element.classList.contains("playerselectiontext") && element.id == ("paperselection")) {
        playRound(paper);
    }
    else if (element.classList.contains("selection") && element.id == ("paperpng")) {
        playRound(paper);
    }


    else if (element.classList.contains("playerselection") && element.id == ("scissors")) {
        playRound(scissors);
    }
    else if (element.classList.contains("playerselectiontext") && element.id == ("scissorsselection")) {
        playRound(scissors);
    }
    else if (element.classList.contains("selection") && element.id == ("scissorspng")) {
        playRound(scissors);
    }
    
}

function playRound(playerSelection) {
    const computerSelection = getComputerChoice()
    const rockSelected = document.querySelector("#rock")
    const paperSelected = document.querySelector("#paper")
    const scissorsSelected = document.querySelector("#scissors")
    const compRockSelected = document.querySelector("#comprock")
    const compPaperSelected = document.querySelector("#comppaper")
    const compScissorsSelected = document.querySelector("#compscissors")

    if (computerSelection == "rock") {
        compRockSelected.style.backgroundColor = "#6495ED";
        compPaperSelected.style.backgroundColor = "white";
        compScissorsSelected.style.backgroundColor = "white";
    }

    else if (computerSelection == "paper") {
        compPaperSelected.style.backgroundColor = "#6495ED";
        compRockSelected.style.backgroundColor = "white";
        compScissorsSelected.style.backgroundColor = "white";
    }

    else if (computerSelection == "scissors") {
        compScissorsSelected.style.backgroundColor = "#6495ED";
        compRockSelected.style.backgroundColor = "white";
        compPaperSelected.style.backgroundColor = "white";
    }

    if (playerSelection == "rock") {
        rockSelected.style.backgroundColor = "#f67695";
        paperSelected.style.backgroundColor = "white";
        scissorsSelected.style.backgroundColor = "white";
        if (computerSelection == "rock") {
            playerScore++;
            computerScore++;
            const currentPlayerScore = document.querySelector("#playerscore").innerHTML = `Score: ${playerScore}`;
            const currentComputerScore = document.querySelector("#computerscore").innerHTML = `Score: ${computerScore}`;
            game(playerScore, computerScore);
        }
        else if (computerSelection == "paper") {
            computerScore++;
            const currentComputerScore = document.querySelector("#computerscore").innerHTML = `Score: ${computerScore}`;
            game(playerScore, computerScore);
        }
        else if (computerSelection == "scissors") {
            playerScore++;
            const currentPlayerScore = document.querySelector("#playerscore").innerHTML = `Score: ${playerScore}`;
            game(playerScore, computerScore);
        } 
    }

    else if (playerSelection == "paper") {
        paperSelected.style.backgroundColor = "#f67695";
        rockSelected.style.backgroundColor = "white";
        scissorsSelected.style.backgroundColor = "white";
        if (computerSelection == "paper") {
            playerScore++;
            computerScore++;
            const currentPlayerScore = document.querySelector("#playerscore").innerHTML = `Score: ${playerScore}`;
            const currentComputerScore = document.querySelector("#computerscore").innerHTML = `Score: ${computerScore}`;
            game(playerScore, computerScore);
        }
        else if (computerSelection == "scissors") {
            computerScore++;
            const currentComputerScore = document.querySelector("#computerscore").innerHTML = `Score: ${computerScore}`;
            game(playerScore, computerScore);
        }
        else if (computerSelection == "rock") {
            playerScore++;
            const currentPlayerScore = document.querySelector("#playerscore").innerHTML = `Score: ${playerScore}`;
            game(playerScore, computerScore);
        } 
    }

    else if (playerSelection == "scissors") {
        scissorsSelected.style.backgroundColor = "#f67695";
        paperSelected.style.backgroundColor = "white";
        rockSelected.style.backgroundColor = "white";
        if (computerSelection == "scissors") {
            playerScore++;
            computerScore++;
            const currentPlayerScore = document.querySelector("#playerscore").innerHTML = `Score: ${playerScore}`;
            const currentComputerScore = document.querySelector("#computerscore").innerHTML = `Score: ${computerScore}`;
            game(playerScore, computerScore);
        }
        else if (computerSelection == "rock") {
            computerScore++;
            const currentComputerScore = document.querySelector("#computerscore").innerHTML = `Score: ${computerScore}`;
            game(playerScore, computerScore);
        }
        else if (computerSelection == "paper") {
            playerScore++;
            const currentPlayerScore = document.querySelector("#playerscore").innerHTML = `Score: ${playerScore}`;
            game(playerScore, computerScore);
        } 
    }
}

function hideContainer() {
    let gameContainer = document.querySelector('.boxes');
    let endContainer = document.getElementById('endContainer');
    gameContainer.style.opacity = 0;
    gameContainer.style.transform = 'scale(0)';
    gameContainer.style.display = 'none';
    endContainer.style.display = 'block';
}

function game(playerScore, computerScore) {
    const gameUpdates = document.querySelector(".gameupdates");
    let userWinLogo = document.getElementById('userwinslogo');
    let compWinLogo = document.getElementById('compwinslogo');

    if (playerScore == 5 || computerScore == 5) {
        if (playerScore > computerScore) {
            let text = document.createTextNode(`YOU WIN ${playerScore}:${computerScore}!`);
            gameUpdates.appendChild(text);
            hideContainer()
            userWinLogo.style.display = 'block';
        }

        else if (computerScore > playerScore) {
            let text = document.createTextNode(`YOU LOSE ${playerScore}:${computerScore}!`);
            gameUpdates.appendChild(text);
            hideContainer()
            compWinLogo.style.display = 'block';
        }

        else {
            let text = document.createTextNode(`DRAW!`);
            gameUpdates.appendChild(text);
            hideContainer()
            userWinLogo.style.display = 'block';
            compWinLogo.style.display = 'block';
        }
    }
}
document.addEventListener("DOMContentLoaded", function(){
    let endButton = document.getElementById("endbutton")

    endButton.addEventListener("click", function() {
        window.setTimeout(function() {
            window.location.href = 'index.html';
        }, 700);
    });
});