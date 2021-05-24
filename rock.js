function computerPlay() {
    let option = Math.random() * 2;
    option = Math.round(option) + 1;
    let selection;
    if (option == 1) {
        selection = "rock"
    } else if (option == 2) {
        selection = "paper"
    } else {
        selection = "scissors"
    }
    return selection;
}

let playerSelection;

function playRound(playerSelection, computerPlay) {
    playerSelection = prompt("Rock, Paper, Scissors?").toLowerCase();
    let options = "rock paper scissors"
    while (options.indexOf(playerSelection) == -1) {
        playerSelection = prompt("Please choose between: Rock, Paper, Scissors?").toLowerCase();
    }
    console.log(playerSelection)
    console.log(computerPlay)
    let message;
    if (playerSelection == "rock") {
        if (computerPlay == "paper") {
            message = "You Lose! Paper beats Rock";
            scoreComputer++
        } else if (computerPlay == "scissors") {
            message = "You Win! Rock beats Scissors";
            scorePlayer++
        } else {
            message = "It's a tie!";
        }
    }
    if (playerSelection == "paper") {
        if (computerPlay == "rock") {
            message = "You Win! Paper beats Rock";
            scorePlayer++
        } else if (computerPlay == "scissors") {
            message = "You Lose! Scissors beats Paper";
            scoreComputer++
        } else {
            message = "It's a tie!";
        }
    }
    if (playerSelection == "scissors") {
        if (computerPlay == "paper") {
            message = "You Win! Scissors beats Paper";
            scorePlayer++
        } else if (computerPlay == "Rock") {
            message = "You Lose! Rock beats Scissors";
            scoreComputer++
        } else {
            message = "It's a tie!";
        }
    }
    return message;
}

let scorePlayer = 0;
let scoreComputer = 0;

function game() {
    for (let rounds = 0; rounds < 5; rounds++) {
        console.log(playRound(playerSelection, computerPlay())) 
    }

}

game()
console.log(`Player score: ${scorePlayer}`)
console.log(`Computer score: ${scoreComputer}`)
