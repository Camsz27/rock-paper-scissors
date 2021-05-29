let scorePlayer = 0;
let scoreComputer = 0;
let message;
let playerSelection;
let computerSelection;
let divChoices = document.querySelector('#choices');
let divChoose = document.querySelector('.choose');
let players = document.querySelector('.players');
let text = document.querySelector('#message');
let score = document.querySelector('#score');
let information = document.querySelector('.information');
const container = document.querySelector('body');
const winningMessage = 'Congratulations you have won!'
const lossingMessage = "You've lost better luck next time!"


const buttons = document.querySelectorAll('button');
const resetButton = document.createElement('button');

buttons.forEach(button => button.addEventListener('click', changeImagePlayer));
buttons.forEach(button => button.addEventListener('click', playRound));
resetButton.addEventListener('click', newGame);

function changeImagePlayer(e) {
    let source;
    let image = document.querySelector('.player');
    
    if (this.id == 'rock') {
        source = 'https://cdn2.iconfinder.com/data/icons/space-82/64/asteroid-2-128.png'
    } else if (this.id == 'paper') {
        source = 'https://cdn4.iconfinder.com/data/icons/48-bubbles/48/12.File-128.png'
    } else {
        source = 'https://cdn1.iconfinder.com/data/icons/feather-2/24/scissors-128.png'
    }
    image.setAttribute('src', source);
    playerSelection = this.id;
}

function changeImageComputer(option) {
    let source;
    let image = document.querySelector('.computer');
    
    if (option == 'rock') {
        source = 'https://cdn2.iconfinder.com/data/icons/space-82/64/asteroid-2-128.png';
    } else if (option == 'paper') {
        source = 'https://cdn4.iconfinder.com/data/icons/48-bubbles/48/12.File-128.png';
    } else {
        source = 'https://cdn1.iconfinder.com/data/icons/feather-2/24/scissors-128.png';
    }
    image.setAttribute('src', source);
}

function changeMessage() {
    let text = document.querySelector('#message');
    text.textContent = message;
}

function changeScore() {
    let score = document.querySelector('#score');
    score.textContent = `Score ${scorePlayer} - ${scoreComputer}`;
}

function computerPlay() {
    let option = Math.random() * 2;
    option = Math.round(option) + 1;
    let selection;
    if (option == 1) {
        selection = "rock";
    } else if (option == 2) {
        selection = "paper";
    } else {
        selection = "scissors";
    }
    changeImageComputer(selection);
    return selection;
}

function resetGame() {
    let finalMessage;
    if (scorePlayer < scoreComputer) {
        finalMessage = lossingMessage;
    } else {
        finalMessage = winningMessage;
    }
    divChoices.remove();
    //divChoose.remove();
    //players.remove();
    message = finalMessage;
    changeMessage();
    text.classList.add('final');
    score.classList.add('final');
    resetButton.setAttribute('id', 'reset');
    resetButton.textContent = 'Reset Game';
    information.append(resetButton);
}

function newGame(){
    scorePlayer = 0;
    scoreComputer = 0;
    message = 'Start Game';
    information.appendChild(text);
    information.appendChild(score)
    resetButton.remove();
    changeMessage();
    changeScore();
    //container.appendChild(players)
    //container.appendChild(divChoose);
    container.appendChild(divChoices);
    
}

function playRound() {
    computerSelection = computerPlay();
    console.log(playerSelection);
    console.log(computerSelection);
    if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            message = "You Lose! Paper beats Rock";
            scoreComputer++;
        } else if (computerSelection == "scissors") {
            message = "You Win! Rock beats Scissors";
            scorePlayer++;
        } else {
            message = "It's a tie!";
        }
    }
    if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            message = "You Win! Paper beats Rock";
            scorePlayer++;
        } else if (computerSelection == "scissors") {
            message = "You Lose! Scissors beats Paper";
            scoreComputer++;
        } else {
            message = "It's a tie!";
        }
    }
    if (playerSelection == "scissors") {
        if (computerSelection == "paper") {
            message = "You Win! Scissors beats Paper";
            scorePlayer++;
        } else if (computerSelection == "rock") {
            message = "You Lose! Rock beats Scissors";
            scoreComputer++;
        } else {
            message = "It's a tie!";
        }
    }
    changeMessage();
    changeScore();
    if (scorePlayer == 5 || scoreComputer == 5) {
        resetGame();
    }
    return message;
}
