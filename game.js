function getComputerChoice() {
    value = Math.floor(Math.random() * 3);
    if (value=="0") {
        return "rock";
    }
    else if (value == "1") {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    var player = playerSelection.toLowerCase();
    if (player == "rock") {
        if (computerSelection === "paper") {
            return "You Lose! Paper beats Rock"
        }
        else if (computerSelection === "scissors") {
            return "You Win! Rock beats Scissors"
        }
        else {
            return "Draw! Try again!"
        }
    }

    if (player == "paper") {
        if (computerSelection === "scissors") {
            return "You Lose! Scissors beats Paper"
        }
        else if (computerSelection === "rock") {
            return "You Win! Paper beats Rock"
        }
        else {
            return "Draw! Try again!"
        }
    }
    
    if (player == "scissors") {
        if (computerSelection === "rock") {
            return "You Lose! Rock beats Scissors"
        }
        else if (computerSelection === "paper") {
            return "You Win! Scissors beats Paper"
        }
        else {
            return "Draw! Try again!"
        }
    }
}

function game() {
    for (let i = 0; i < 6; i++) {
        let playerSelection = prompt("Rock, Scissors, Paper");
        let computerSelection = getComputerChoice();
        alert(playRound(playerSelection,computerSelection));
    }
}
