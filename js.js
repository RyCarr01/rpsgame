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
console.log(getHumanChoice())