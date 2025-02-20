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
