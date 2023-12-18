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
    if (playerSelection == "rock") {
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

    if (playerSelection == "paper") {
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
    
    if (playerSelection == "scissors") {
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
    let player = prompt("Rock, Scissors, Paper");
    var playerSelection = player.toLowerCase();
    let computerSelection = getComputerChoice();
    if (playerSelection == "rock" || playerSelection == "scissors" || playerSelection == "paper") {
        alert(playRound(playerSelection, computerSelection));
    }

    else {
        alert("Invalid choice. Try again!");
    }
}
