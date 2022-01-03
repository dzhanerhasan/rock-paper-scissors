function computerPlay() {
    let index = Math.floor(Math.random() * 3);
    let rpsArray = ["Rock", "Paper", "Scissors"];
    return rpsArray[index];
}

function playRound(playerSelection, computerSelection) {
    let pChoiceLower = playerSelection.toLowerCase();
    let compChoiceLower = computerSelection.toLowerCase();

    if (pChoiceLower === compChoiceLower) {
        return "It's a draw.";
    }

    if (pChoiceLower === "rock" && compChoiceLower === "scissors" ||
        pChoiceLower === "paper" && compChoiceLower === "rock" ||
        pChoiceLower === "scissors" && compChoiceLower === "paper") {
            return `Good job! ${playerSelection} beats ${computerSelection}.`;
        }

    return `Oh, no! ${computerSelection} beats ${playerSelection}.`;
}

function updateScores(result) {
    if (result.startsWith('Good')) {
        playerScore += 1;
        playerInfo.textContent = `Your current score is: ${playerScore}`;
    } 
    else if (result.startsWith('Oh')) {
        computerScore += 1;
        computerInfo.textContent = `The computer's score is: ${computerScore}`
    }
}

let playerScore = 0;
let computerScore = 0;

const playerInfo = document.querySelector(".player-score");
const computerInfo = document.querySelector(".computer-score");

const container = document.querySelector('body');
const content = document.createElement('div');
container.appendChild(content)

const shapes = document.querySelectorAll('button');
shapes.forEach(function(shape) {
    shape.addEventListener('click', function(event) {
        const result = playRound(this.textContent, computerPlay());
        updateScores(result);
        if (playerScore === 5 || computerScore === 5) {
            playerScore === 5 ?
            content.textContent = "Congratulations! You've won!" :
            content.textContent = "Unlucky, try again."
            playerScore = 0;
            computerScore = 0;
            playerInfo.textContent = `Your current score is: ${playerScore}`;
            computerInfo.textContent = `The computer's score is: ${computerScore}`
        } else {
            content.textContent = result;
        }
    });
});