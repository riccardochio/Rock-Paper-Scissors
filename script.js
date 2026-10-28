let humanScore = 0;
let computerScore = 0;
let gameOver = false;

//DOM element selection to change text
const roundOutcomeText = document.querySelector("#round-outcome");
const scoreText = document.querySelector("#score");
const gamewinnerText = document.querySelector("#game-winner");

//function for random selection by the computer
function getComputerChoice(){
    let x = Math.floor(Math.random() * 10) % 3;
    if(x === 0) return "rock";
    else if(x === 1) return "paper";
    else if(x === 2) return "scissors";
}

//main function for single round
function playRound(humanChoice, computerChoice){
    if(gameOver) return;   //if the game is already over, do nothing
    
    if(humanChoice === computerChoice){
        roundOutcomeText.textContent = `It's a tie! Both chose ${humanChoice}`;
    }

    else if(
        humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "scissors" && computerChoice=== "paper" ||
        humanChoice === "paper" && computerChoice === "rock"
    ){
        humanScore++;
        roundOutcomeText.textContent = `You win this round! ${humanChoice} beats ${computerChoice}`;
    }

    else{
        computerScore++;
        roundOutcomeText.textContent = `You lose this round! ${computerChoice} beats ${humanChoice}`;
    }

    //update the running score on the screen and check if either player has won the game
    scoreText.textContent = `Player: ${humanScore} | Computer: ${computerScore}`;
    checkWinner();
}

function checkWinner(){
    if(humanScore === 5){
        gamewinnerText.textContent = "Congratulations! You won the game by reaching 5 points!";
        gameOver = true;
    }
    else if(computerScore === 5){
        gamewinnerText.textContent = "The Computer won the game by reaching 5 points!";
        gameOver = true;
    }
}

//handling of button clicks
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const humanSelection = button.id;
        const computerSelection = getComputerChoice();
        playRound(humanSelection,computerSelection);
    });
});