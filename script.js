function getComputerChoice(){
    let x = Math.floor(Math.random() * 10) % 3;
    if(x === 0) return "rock";
    else if(x === 1) return "paper";
    else if(x === 2) return "scissors";
}

function getHumanChoice(){
    let choice = prompt("Type rock, paper or scissors");
    choice = choice.toLowerCase();
    while(choice != "rock" && choice != "paper" && choice != "scissors"){
        console.log("Invalid input. Please try again. ")
        choice = prompt("Type rock, paper or scissors");
        choice = choice.toLowerCase();
    }
    return choice;
}

function playRound(humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        console.log("You draw!");
        return;
    }

    else if(humanChoice == "rock"){
        if(computerChoice == "paper"){   
            console.log("You lose! Paper beats Rock");
            computerScore++;
            return;
        }
        else{
            console.log("You win! Rock beats Scissors");
            humanScore++;
            return;
        }
    }

    else if(humanChoice == "paper"){
        if(computerChoice == "scissors"){   
            console.log("You lose! Scissors beats Paper");
            computerScore++;
            return;
        }
        else{
            console.log("You win! Paper beats Rock");
            humanScore++;
            return;
        }
    }

    else if(humanChoice == "scissors"){
        if(computerChoice == "rock"){   
            console.log("You lose! Rock beats Scissors");
            computerScore++;
            return;
        }
        else{
            console.log("You win! Scissors beats Paper");
            humanScore++;
            return;
        }
    }
}

function playGame(){
    for(let i = 0; i<5; i++){
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if(humanScore === computerScore){
        console.log(`The result is ${humanScore} all. The match ended in a draw!`);
        return;
    }

    else if(humanScore > computerScore){
        console.log(`The score is ${humanScore} to ${computerScore}. You win the game!`);
        return;
    }

    else{
        console.log(`The score is ${humanScore} to ${computerScore}. Computer win the game!`);
        return;
    }
}

let humanScore = 0;
let computerScore = 0;

playGame();