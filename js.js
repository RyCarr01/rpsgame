// let computerChoice;
// let humanChoice;
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let num = Math.random();
    if (num <= 0.33) {
        computerChoice = "rock";
    } else if ((num > 0.33) && (num <=0.77)) {
        computerChoice = "paper";
    } else if ((num >0.77) && (num <= 1)) {
        computerChoice = "scissors";
    } else {
        console.log("ERROR");
    }
    return computerChoice;
}

function getHumanChoice() {
    humanChoice = prompt("What is your selection: rock, paper, or scissors?");
    return humanChoice;
}

function playRound() {
    computerChoice = getComputerChoice();
    humanChoice = getHumanChoice();

    if (computerChoice == humanChoice) {
        console.log("It's a draw! " + computerChoice + " vs. " + humanChoice);

    } else if(
        ((computerChoice == "paper") && (humanChoice == "scissors")) ||
        ((computerChoice == "rock") && (humanChoice == "paper")) ||
        ((computerChoice == "scissors") && (humanChoice == "rock"))) {
            console.log("You won! " + computerChoice + " vs. " + humanChoice);
            humanScore++;

    } else if(
        ((computerChoice == "paper") && (humanChoice == "rock")) ||
        ((computerChoice == "rock") && (humanChoice == "scissors")) ||
        ((computerChoice == "scissors") && (humanChoice == "paper"))) {
            console.log("You lost! " + computerChoice + " vs. " + humanChoice);
            computerScore++;

    } else {
        console.log("ERROR!");
    }

    alert("The scores are...user: " + humanScore + " computer: " + computerScore);
    }

for (let score = Math.max(computerScore, humanScore); score < 3; score = Math.max(computerScore, humanScore)) {
    playRound();
}