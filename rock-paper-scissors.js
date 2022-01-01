function computerPlay() {
    let num = Math.floor(Math.random() * 3);
    let shape;
    switch (num) {
        case 0: shape = "rock"; break;
        case 1: shape = "paper"; break;
        case 2: shape = "scissors"; break;
    }
    return shape;
}

function playRound(playerSelection, computerSelection) {
    let playerToLower = playerSelection.toLowerCase();
    
    if (playerToLower === computerSelection) {
        return "Draw";
    }
    
    if (playerToLower === "rock" && computerSelection === "scissors") {
        return "You Win! Rock beats Scissors";
    }
    
    if (playerToLower === "rock" && computerSelection === "paper") {
        return "You Lose! Paper beats Rock";
    }
    
    if (playerToLower === "paper" && computerSelection === "rock") {
        return "You Win! Paper beats Rock";
    }

    if (playerToLower === "paper" && computerSelection === "scissors") {
        return "You Lose! Scissors beat Paper";
    }

    if (playerToLower === "scissors" && computerSelection === "paper") {
        return "You Win! Scissors beat Paper";
    }
    
    if (playerToLower === "scissors" && computerSelection === "rock") {
        return "You Lose! Rock beats Scissors";
    }
}

function game() {
    let win = Number(0);
    let lose = Number(0);
    
    for (let i = 0; i < 5; i++) {
        let userInput = prompt("Rock, Paper or Scissors?");
        let computerInput = computerPlay();
        let result = playRound(userInput, computerInput);
        console.log(result)

        if (result === "Draw") {
            continue;
        }

        if (result.includes("Win")) {
            win += 1;
        } else if (result.includes("Lose")) {
            lose += 1;
        }
    }

    if (win > lose) {
        return "You win!"
    } else if (win === lose) {
        return "It's a draw"
    } else {
        return "You lose"
    }
}


console.log(game())