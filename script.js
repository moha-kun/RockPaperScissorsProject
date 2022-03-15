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

function game() {
    let computerWin = 0;
    let playerWin = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Select an object", "");
        let result = playRound(playerSelection, computerPlay());
        if (result.substring(0, 8) == "You Lose!") computerWin++;
        if (result.substring(0, 7) == "You Win!") playerWin++;
        console.log(result);
    }
    if (playerWin > computerWin) console.log(`You Win ${playerWin} - ${computerWin}`);
    else if (playerWin < computerWin) console.log(`You Lose ${playerWin} - ${computerWin}`);
    else console.log(`Draw ${playerWin} - ${computerWin}`);
}


