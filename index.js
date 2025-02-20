function getComputerChoice(){
    let x = Math.floor(Math.random() * 3) +1;
    if(x == 1){
        guess = "rock";
    }else if (x == 2){
        guess = "paper";
    }else{
        guess = "siscors";
    }
    return guess;
}

function getHumanChoice(){
    let choice = prompt("Chose: Rock, Paper or Scissors");
    while((!["rock", "paper", "scissors"].includes(choice.toLocaleLowerCase()))){
        choice = prompt("Please, chose one of these only: Rock, Paper or Scissors");
    };
    return choice;
}

function playRound(HumanC, ComputerC, humanScore, computerScore){
    let match = HumanC + '-' + ComputerC;
    switch(match){
        case "rock-rock":
            console.log("It's a tie, nobody wins!");
            break;
        case "paper-paper":
            console.log("It's a tie, nobody wins!");
            break;
        case "scissors-scissors":
            console.log("It's a tie, nobody wins!");
            break;
        case "rock-paper":
            console.log("Paper beats rock, you lose!");
            computerScore++;
            break;
        case "rock-scissors":
            console.log("Rock beats scissors, you win!");
            humanScore++;
            break;
        case "paper-rock":
            console.log("Paper beats rock, you win!");
            humanScore++;
            break;
        case "paper-scissors":
            console.log("Scissors beats paper, you lose!");
            computerScore++;
            break;
        case "scissors-rock":
            console.log("Rock beats scissors, you lose!");
            computerScore++;
            break;
        case "scissors-paper":
            console.log("Scissors beats paper, you win!");
            humanScore++;
            break;
    }
    return humanScore, computerScore;
}


let humanScore = 0;
let computerScore = 0;
playRound(getHumanChoice(), getComputerChoice(), humanScore, computerScore);