let humanScore = 0;
let computerScore = 0;
let humanChoice;


function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getHumanChoice() {
    let choice = prompt("Rock / Paper / Scissors ?");
    if (choice) {
        choice = choice.toLowerCase();
        if (choice === "rock" || choice === "paper" || choice === "scissors")
            return choice;
    }
    return null;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "Tie!";
    }
    if ( 
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
    ) {  
        humanScore++;
        return "Player won!";      r
    }
    computerScore++;
    return "Computer won!";
}

while (humanChoice = getHumanChoice()) {
    console.log("player choice: " + humanChoice);
    computerChoice = getComputerChoice();
    console.log("computer choice: " + computerChoice);
    console.log(playRound(humanChoice, computerChoice));
    console.log(`Player score: ${humanScore}\nComputer score: ${computerScore}`);
}
console.log("Game ended");


// // Object mapping solution //
// const rules = {
//     rock: "scissors",
//     paper: "rock",
//     scissors: "paper"
// };

// function getComputerChoice() {
//     const choices = Object.keys(rules);
//     return choices[Math.floor(Math.random() * choices.length)];
// }

// function getWinner(player, computer) {
//     if (player === computer) return "Tie";
//     if (rules[player] === computer) return "Player wins";
//     return "Computer wins";
// }
