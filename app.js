const btns = document.querySelectorAll('.selection');
const playerScoreSpan = document.getElementById('playerScore');
const computerScoreSpan = document.getElementById('computerScore');
const resetBtn = document.getElementById('reset');
const resultText = document.getElementById('result');
const playerImg = document.getElementById('left-image');
const computerImg = document.getElementById('right-image');
let playerScore = 0;
let computerScore = 0;

playerScoreSpan.innerText = playerScore;
computerScoreSpan.innerText = computerScore;

const disableBtn = btn => btn.disabled = true;

const enableBtn = btn => btn.disabled = false;

const checkWin = () => {
    if (playerScore === 5 || computerScore === 5) {
        btns.forEach(btn => disableBtn(btn));

        if (playerScore === 5) {
            playerScoreSpan.style.color = 'green';
            computerScoreSpan.style.color = 'red';
            resultText.style.color = 'green';
            resultText.style.fontWeight = 900;
            resultText.innerText = 'You won the game!';
        } else {
            computerScoreSpan.style.color = 'green';
            playerScoreSpan.style.color = 'red';
            resultText.style.color = 'red';
            resultText.style.fontWeight = 900;
            resultText.innerText = 'You lost the game! Try again!';
        }
    }
}

const getComputerChoice = () => {
    const choiceArray = ['rock', 'paper', 'scissors'];
    const randomNum = Math.floor(Math.random() * choiceArray.length);
    const computerChoice = choiceArray[randomNum];

    return computerChoice;
}

const playRound = playerSelection => { 
    let computerSelection = getComputerChoice();

    if (playerSelection === 'rock') {
        playerImg.src = 'images/leftrock.png';
    } else {
        playerImg.src = `images/${playerSelection}.png`;
    }

    if (computerSelection === 'rock') {
        computerImg.src = 'images/rightrock.png';
    } else {
        computerImg.src = `images/${computerSelection}.png`;
    }
    

    if (playerSelection === computerSelection) {
        return 'tie';
    }

    if (playerSelection === 'rock' && computerSelection === 'paper' || playerSelection === 'paper' && computerSelection === 'scissors' 
        || playerSelection === 'scissors' && computerSelection === 'rock') {
        return "lose";
    } else {
        return 'win';
    }
}


//Adds event listener to selection buttons so a player can play a round
//After a round is played, checks to see if either the player or the computer has won
btns.forEach(btn => {
    btn.addEventListener('click', e => {
        let playerSelection = e.target.value;
     
        let result = playRound(playerSelection);

        if (result === 'win') {
            playerScore += 1;
            playerScoreSpan.innerText = playerScore;
            computerScoreSpan.innerText = computerScore;
            resultText.innerText = 'You won the round!';
        } else if (result === 'lose') {
            computerScore += 1;
            playerScoreSpan.innerText = playerScore;
            computerScoreSpan.innerText = computerScore;
            resultText.innerText = 'You lost the round!';
        } else {
            playerScoreSpan.innerText = playerScore;
            computerScoreSpan.innerText = computerScore;
            resultText.innerText = "The round was a tie.";
        }

        checkWin();
     })
}) 


//Reset game to initial conditions
resetBtn.addEventListener('click', e => {
    playerScore = 0;
    computerScore = 0;
    playerScoreSpan.innerText = playerScore;
    computerScoreSpan.innerText = computerScore;
    playerScoreSpan.style.color = 'black';
    computerScoreSpan.style.color = 'black';
    resultText.style.color = 'black';
    resultText.innerText = 'Click a button to begin';
    computerImg.src = 'images/start1.png';
    playerImg.src = 'images/start1.png';

    btns.forEach(btn => enableBtn(btn));
})
