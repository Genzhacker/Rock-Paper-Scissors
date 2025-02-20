function getHumanChoice(){
    let choice = prompt("Chose: Rock, Paper or Scissors");
    while((!choice || !["rock", "paper", "scissors"].includes(choice.toLowerCase()))){
        choice = prompt("Please, chose one of these only: Rock, Paper or Scissors");
    };
    return choice;
}


function getComputerChoice(){
    let x = Math.floor(Math.random() * 3) +1;
    if(x == 1){
        guess = "rock";
    }else if (x == 2){
        guess = "paper";
    }else{
        guess = "scissors";
    }
    return guess;
}

function playRound(HumanC, ComputerC, humanScore, computerScore){
    let match = HumanC + "-" + ComputerC;
    switch(match){
        case "rock-paper":
            computerScore++;
            break;
        case "rock-scissors":
            humanScore++;
            break;
        case "paper-rock":
            humanScore++;
            break;
        case "paper-scissors":
            computerScore++;
            break;
        case "scissors-rock":
            computerScore++;
            break;
        case "scissors-paper":
            humanScore++;
            break;
        default:
            break;
    }
    return {humanScore, computerScore};
}


function playGame(playRound, HumanC, ComputerC){
    let humanScore = 0;
    let computerScore = 0;
    for(let i = 1; i <= 5; i++){
        result = playRound(HumanC(), ComputerC(), humanScore, computerScore);
        humanScore = result.humanScore;
        computerScore = result.computerScore;
        console.log("Round "+i+" 's score is: "+humanScore+'-'+computerScore);
    }
    if(humanScore > computerScore){
        console.log("The score is: "+ humanScore + "-" + computerScore + " YOU WIN, Congratulation!");
    }else if(humanScore < computerScore){
        console.log("The score is: "+ humanScore + "-" + computerScore + " YOU LOSE, Better luck next time!");
    }else{
        console.log("It's a tie!");
    }
}



let HumanC = getHumanChoice;
let ComputerC = getComputerChoice;
playGame(playRound, HumanC, ComputerC);
