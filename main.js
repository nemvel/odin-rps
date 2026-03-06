const humanScore = document.querySelector("#playerScore p");
const computerScore = document.querySelector("#compScore p");

let humanScoreCounter = 0;
let computerScoreCounter = 0;

humanScore.textContent = humanScoreCounter;
computerScore.textContent = computerScoreCounter;


function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

const choices = document.getElementById("choices");
const compChoiceBox = document.getElementById("compChoice");

choices.addEventListener('click', (e) => {
    if (e.target.tagName === "BUTTON") {
        const compChoice = getComputerChoice();

        // compChoiceBox.classList.add("paused");
        compChoiceBox.style.backgroundImage = `url("./images/${compChoice}.jpeg")`;

        playRound(e.target.id, compChoice);

        // setTimeout(() => {
        //     compChoiceBox.classList.remove("paused");
        // }, 3000);

    }
});

const result = document.querySelector("#result p");

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        result.textContent = "Tie!";
    } else if ((humanChoice === "rock" && computerChoice === "scissors") ||
                (humanChoice === "paper" && computerChoice === "rock") ||
                (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore.textContent = ++humanScoreCounter;
        result.textContent = "Player won!";
    } else {
        computerScore.textContent = ++computerScoreCounter;
        result.textContent = "Computer won!";
    }
    checkGameEnd();
}

const choicesButtons = Array.from(document.getElementsByClassName("choice-btn"));
const gameEndP = document.getElementById("gameEndP");
const resetGameButton = document.getElementById("resetGameButton");

function checkGameEnd() {
    if (humanScoreCounter == 5 || computerScoreCounter == 5) {
        choicesButtons.forEach(el => {
            el.disabled = true;
        });

        if (humanScoreCounter == 5) {
            gameEndP.textContent = "Game over. You WIN!!!";
        } else {
            gameEndP.textContent = "Game over. Computer WINS :(";
        }

        // resetGameButton.hidden = false;
    }

}
