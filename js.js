let computerChoice;
let humanChoice;
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let random = Math.random();
    computerChoice = 
        (random < 1/3) ? "rock":
        (random < 2/3) ? "paper":
        "scissors";
    return computerChoice;
}

function getHumanChoice() {
    humanChoice = prompt("What is your selection: rock, paper, or scissors?");
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {

    if (computerChoice == "rock" && humanChoice == "rock") {
        console.log("It's a tie! Try again!");

    } else if (computerChoice == "paper" && humanChoice == "paper") {
        console.log("It's a tie! Try again!");

    } else if (computerChoice == "scissors" && humanChoice == "scissors") {
        console.log("It's a tie! Try again!");
    
    } else if (computerChoice == "rock" && humanChoice == "paper") {
        console.log("Paper beats rock! User wins this round.");
    
    } else if (computerChoice == "rock" && humanChoice == "scissors") {
        console.log("Rock beats scissors! User loses this round.");

    } else if (computerChoice == "scissors" && humanChoice == "rock") {
        console.log("Rock beats scissors! User wins this round.");

    } else if (computerChoice == "scissors" && humanChoice == "paper") {
        console.log("Scissors beat paper! User loses this round.");
        
    } else if (computerChoice == "paper" && humanChoice == "rock") {
        console.log("Paper beats rock! User loses this round.");
        
    } else if (computerChoice == "paper" && humanChoice == "scissors") {
        console.log("Scissors beat paper! User wins this round.");
        
    }
} 
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log("Computer chose " + computerChoice + "...");
playRound(humanSelection, computerSelection);