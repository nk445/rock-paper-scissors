const buttons = document.getElementById("buttons");
const humanScoreDisplay = document.getElementById("humanScore");
const computerScoreDisplay = document.getElementById("computerScore");

function handleButtonClick(event) {
    console.log(`${event.target.id} button clicked!`);
    playRound(event.target.id);
}

buttons.addEventListener("click", handleButtonClick);

let computerScore = 0;
let humanScore = 0;
//playGame();

// Get random output from 0 to 1
// Multiply output * 3 and use Math.floor (0, 1, or 2)
    // val < 1/3            -> rock (0)
    // 1/3 <= val < 2/3     -> paper (1)
    // 2/3 <= val           -> scissors (2)
// return string associated with value
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

function playGame() {
    // Play 5 rounds of game
    for (let i = 0; i < 5; ++i) {
        playRound();
    }

    if (computerScore > humanScore) {
        console.log("You lost the game!");
    }
    else if (computerScore < humanScore) {
        console.log("You won the game!");
    }
    else {
        console.log("The game ended in a draw!")
    }
}

function playRound(humanChoice) {
    let computerChoice = getComputerChoice();

    //console.log(`human: ${humanChoice}, computer: ${computerChoice}`);

    // write win/loss logic based on human choice
    // compare each outcome with 3 possible computer outcomes
    // Print round outcome and increment winner score if necessary
    if (humanChoice === "rock") {
        if (computerChoice === "rock") {
            console.log("It's a draw!");
        }
        else if (computerChoice === "paper") {
            console.log("You lose! Paper beats rock");
            computerScore++;
        }
        else {
            console.log("You win! Rock beats scissors");
            humanScore++;
        }
    }
    else if (humanChoice == "paper") {
        if (computerChoice === "rock") {
            console.log("You win! Paper beats rock");
            humanScore++;
        }
        else if (computerChoice === "paper") {
            console.log("It's a draw!");
        }
        else {
            console.log("You lose! Scissors beat paper");
            computerScore++;
        }

    }
    else {
        if (computerChoice === "rock") {
            console.log("You lose! Rock beats scissors");
            computerScore++;
        }
        else if (computerChoice === "paper") {
            console.log("You win! Scissors beat paper");
            humanScore++;
        }
        else {
            console.log("It's a draw!");
        }
    }

    humanScoreDisplay.textContent = `Human: ${humanScore}`;
    computerScoreDisplay.textContent = `Computer: ${computerScore}`;
}