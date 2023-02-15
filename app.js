const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const btns = document.querySelectorAll('button');

const getBtnValue = btn => {btn.addEventListener('click', e => {
   let btnValue = e.target.value;

   console.log(btnValue);
    })
}

btns.forEach(btn => getBtnValue(btn));

const getComputerChoice = () => {
    const choiceArray = ['rock', 'paper', 'scissors'];
    const randomNum = Math.floor(Math.random() * choiceArray.length);
    const computerChoice = choiceArray[randomNum];

    return computerChoice;
}

const capitalize = str => {
    return str.slice(0,1).toUpperCase() + str.slice(1).toLowerCase();
}

const playRound = () => { 

    if (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== 'scissors') {
        return 'Please choose a valid option!';
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

const game = () => {
    let result;
    let playerSelection = prompt('Choose rock, paper, or scissors!').toLowerCase(); 
    let computerSelection;
    let playerScore = 0;
    let computerScore = 0;    

    // for (let i = 0; i < 5; i++) {
    //     playerSelection = prompt("Choose rock, paper, or scissors to play!");
    //     computerSelection = getComputerChoice();
    //     const losingResult = `You lose the round! ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}!`;
    //     const winningResult = `You win the round! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}!`;
    //     const tieResult = `The round was a tie!`

    //     result = playRound(playerSelection, computerSelection);

    //     if (result === 'lose') {
    //         computerScore += 1;
    //         console.log(losingResult);
    //     } else if (result === 'win') {
    //         playerScore += 1;
    //         console.log(winningResult)
    //     } else {
    //         console.log(tieResult);
    //     }
    //  }

    //  if (playerScore > computerScore) {
    //     console.log(`You win the game! The score was ${playerScore} to ${computerScore}`);
    //  } else if (playerScore < computerScore) {
    //     console.log(`You lose the game! The score was ${computerScore} to ${playerScore}`);
    //  } else {
    //     console.log(`It was a tie! The score was ${playerScore} to ${computerScore}`)
    //  };

}

    