function getHumanChoice() {
    let choice = prompt("Choose: Rock, Paper, or Scissors");
    while (!choice || !["rock", "paper", "scissors"].includes(choice.toLowerCase())) {
        choice = prompt("Please choose one of these only: Rock, Paper, or Scissors");
    }
    return choice.toLowerCase();
}

function getComputerChoice() {
    let x = Math.floor(Math.random() * 3) + 1;
    let guess;
    if (x == 1) {
        guess = "rock";
    } else if (x == 2) {
        guess = "paper";
    } else {
        guess = "scissors";
    }
    return guess;
}

function playRound(HumanC, ComputerC, humanScore, computerScore) {
    let match = HumanC + "-" + ComputerC;
    switch (match) {
        case "rock-paper":
        case "paper-scissors":
        case "scissors-rock":
            computerScore++;
            break;
        case "rock-scissors":
        case "paper-rock":
        case "scissors-paper":
            humanScore++;
            break;
        default:
            console.log("It's a tie this round!");
    }
    return { humanScore, computerScore };
}

function playGame(playRound, HumanC, ComputerC) {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 1; i <= 5; i++) {
        let result = playRound(HumanC(), ComputerC(), humanScore, computerScore);
        humanScore = result.humanScore;
        computerScore = result.computerScore;
        console.log("Round " + i + " score: " + humanScore + '-' + computerScore);
    }

    if (humanScore > computerScore) {
        console.log("Final score: " + humanScore + "-" + computerScore + " YOU WIN! Congratulations!");
    } else if (humanScore < computerScore) {
        console.log("Final score: " + humanScore + "-" + computerScore + " YOU LOSE! Better luck next time.");
    } else {
        console.log("It's a tie!");
    }
}

let HumanC = getHumanChoice;
let ComputerC = getComputerChoice;
playGame(playRound, HumanC, ComputerC);
