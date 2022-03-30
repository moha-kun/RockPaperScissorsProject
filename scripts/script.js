const selections = Array.from(document.querySelectorAll(".select"));
const showResult = document.querySelector(".result");
const final = document.querySelector(".final");
const repeat = document.querySelector(".repeat");
let computerWin = 0;
let playerWin = 0;

selections.forEach(selection => selection.addEventListener("click", (e) => {
    let playerSelect = e.target.getAttribute("data-key");

    let result = playRound(playerSelect, computerPlay());

    if (result.substring(0, 9) === "You Lose!") computerWin++;
    if (result.substring(0, 8) === "You Win!") playerWin++;
    showResult.textContent = `You ${playerWin} - ${computerWin} Computer`;

    if (playerWin > 4 || computerWin > 4) document.querySelector(".popUp").style.display = "grid";
    if (playerWin > computerWin) final.textContent = `You Win ${playerWin} - ${computerWin}`;
    else final.textContent = `You Died ${playerWin} - ${computerWin}`;

}));

repeat.addEventListener("click", () => {
    computerWin = 0;
    playerWin = 0;
    showResult.textContent = `You ${playerWin} - ${computerWin} Computer`;
    document.querySelector(".popUp").style.display = "none";
})

function computerPlay() {
    let choice = Math.floor(3 * Math.random());
    switch (choice) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection == "rock" && computerSelection == "paper") return "You Lose! Paper beats Rock";
    else if (playerSelection == "paper" && computerSelection == "rock") return "You Win! Paper beats Rock";
    else if (playerSelection == "scissors" && computerSelection == "rock") return "You Lose! Rock beats Scissors";
    else if (playerSelection == "rock" && computerSelection == "scissors") return "You Win! Rock beats Scissors";
    else if (playerSelection == "paper" && computerSelection == "scissors") return "You Lose! Scissors beats Paper";
    else if (playerSelection == "scissors" && computerSelection == "paper") return "You Win! Scissors beats Paper";
    else return "Draw";
}