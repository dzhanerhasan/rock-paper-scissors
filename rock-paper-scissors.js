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
        return 'Draw';
    }
    
    if (playerToLower === "rock" && computerSelection === "scissors" ||
        playerToLower === "paper" && computerSelection === "rock" ||
        playerToLower === "scissors" && computerSelection === "paper") {
        return 'Win';
    }

    if (playerToLower === "rock" && computerSelection === "paper" ||
        playerToLower === "paper" && computerSelection === "scissors" ||
        playerToLower === "scissors" && computerSelection === "rock") {
        return 'Lose';
    }   
}

let myScore = 0;
let computerScore = 0;

const container = document.querySelector('body');
const content = document.createElement('div');
const winner = document.createElement('h1');

const myInfo = document.createElement('p');
content.appendChild(myInfo);
const computerInfo = document.createElement('p');
content.appendChild(computerInfo);

container.appendChild(content);
container.appendChild(winner);

const buttons = document.querySelectorAll('button');

buttons.forEach(function(button) {
    button.addEventListener('click', function(event) {
        if (playRound(this.className, computerPlay()) === "Win") {
            myScore += 1;
            myInfo.textContent = `My score: ${myScore}`;
        } 
        else if (playRound(this.className, computerPlay()) === "Lose") {
            computerScore += 1;
            computerInfo.textContent = `Computer's score: ${computerScore}`;
        }
        if (myScore === 5) {
            winner.setAttribute('style', 'color: green')
            winner.textContent = "You win!";
        } else if (computerScore === 5) {
            winner.setAttribute('style', 'color: red')
            winner.textContent = "You lose :(";
        }
    });
});