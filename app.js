const getComputerChoice = () => {
    const choiceArray = ['rock', 'paper', 'scissors'];
    const randomNum = Math.floor(Math.random() * choiceArray.length);
    const computerChoice = choiceArray[randomNum];

    return computerChoice;
}

const capitalize = str => {
    return str.slice(0,1).toUpperCase() + str.slice(1).toLowerCase();
}

const playerSelection = prompt("Choose rock, paper, or scissors to play!");
const computerSelection = getComputerChoice();

const playRound = (playerSelection, computerSelection) => {
    playerSelection = playerSelection.toLowerCase();
    const losingResult = `You lose! ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}!`;
    const winningResult = `You win! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}!`;

    if (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== 'scissors') {
        return 'Please choose a valid option!';
    }

    if (playerSelection === computerSelection) {
        return 'You tied!';
    }

    if (playerSelection === 'rock' && computerSelection === 'paper' || playerSelection === 'paper' && computerSelection === 'scissors' 
        || playerSelection === 'scissors' && computerSelection === 'rock') {
        return losingResult;
    } else {
        return winningResult;
    }
}

console.log(playRound(playerSelection, computerSelection));
    