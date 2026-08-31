const buttons = document.getElementById("buttons");
const humanScoreDisplay = document.getElementById("humanScore");
const computerScoreDisplay = document.getElementById("computerScore");
const roundInfo = document.getElementById("roundInfo");
const winnerDisplay = document.getElementById("winnerDisplay");

let computerScore = 0;
let humanScore = 0;

function handleButtonClick(event) {
    console.log(`${event.target.id} button clicked!`);
    playRound(event.target.id);
    if (humanScore >= 5) {
        winnerDisplay.textContent = "You Win!";
        buttons.removeEventListener("click", handleButtonClick);
    }
    else if (computerScore >= 5) {
        winnerDisplay.textContent = "You Lose!";
        buttons.removeEventListener("click", handleButtonClick);
    }
}

buttons.addEventListener("click", handleButtonClick);

// Geenerate computer choice randomly
function getComputerChoice() {
    let val = Math.floor(Math.random() * 3);
    if (val === 0) {
        return "rock";
    }
    else if (val === 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

// simply prompt user for choice and return
function getHumanChoice() {
    return prompt();
}

function playRound(humanChoice) {
    let computerChoice = getComputerChoice();

    // win/loss logic
    // Print round outcome and increment score if necessary
    if (humanChoice === "rock") {
        if (computerChoice === "rock") {
            roundInfo.textContent = ("It's a draw!");
        }
        else if (computerChoice === "paper") {
            roundInfo.textContent = ("You lose! Paper beats rock");
            computerScore++;
        }
        else {
            roundInfo.textContent = ("You win! Rock beats scissors");
            humanScore++;
        }
    }
    else if (humanChoice == "paper") {
        if (computerChoice === "rock") {
            roundInfo.textContent = ("You win! Paper beats rock");
            humanScore++;
        }
        else if (computerChoice === "paper") {
            roundInfo.textContent = ("It's a draw!");
        }
        else {
            roundInfo.textContent = ("You lose! Scissors beat paper");
            computerScore++;
        }

    }
    else {
        if (computerChoice === "rock") {
            roundInfo.textContent = ("You lose! Rock beats scissors");
            computerScore++;
        }
        else if (computerChoice === "paper") {
            roundInfo.textContent = ("You win! Scissors beat paper");
            humanScore++;
        }
        else {
            roundInfo.textContent = ("It's a draw!");
        }
    }

    humanScoreDisplay.textContent = `Human: ${humanScore}`;
    computerScoreDisplay.textContent = `Computer: ${computerScore}`;
}