function getComputerChoice(){
    let x = Math.floor(Math.random() * 3) +1;
    if(x == 1){
        guess = "Rock";
    }else if (x == 2){
        guess = "Paper";
    }else{
        guess = "Siscors";
    }
    return guess;
}

function getHumanChoice(){
    let choice = prompt("Chose: Rock, Paper or Scissors");
    while((!["Rock", "Paper", "Scissors"].includes(choice))){
        choice = prompt("Please, chose one of these only: Rock, Paper or Scissors");
    };
    return choice;
}

