// Rock Paper Scissors by Atlas

/* STEPS FOR RPS
1. CREATE a list of potential "hands" for computer to choose from e.g. scissors, paper, rock.
2. have computer CHOOSE one of the options at RANDOM
3. have user CHOOSE an option with INPUT
4. CHECK IF user's option is valid.
5. CHECK IF user's option beats, ties, or loses against CPU's option.
6. OUTPUT to console each player's hand, which beats which, and wether the user won, tied, or lost.
7. LOOP through previous steps, 5 times.
*/

// generates random integer from 0 to max
function randInt(max) {
    return Math.floor(Math.random() * max);
}

function playRound(choice) {
    // have button clicked pass the player's choice as an arg

    const options = ["scissors", "paper", "rock"];

    let cpuChoice = options[randInt(options.length)];
    let userChoice = choice;
    // get player choice, check if valid, continue if so

    // default to lose case
    let victory = false;

    // user win case
    if (userChoice == "scissors" && cpuChoice == "paper" || userChoice == "paper" && cpuChoice == "rock" || userChoice == "rock" && cpuChoice == "scissors") {
        victory = true;
    }
    // tie case
    else if (userChoice == cpuChoice) {
        victory = null;
    }

    // output result, use as debug info but delete later
    if (victory == false) {
        console.log("You lose! Your %s lost to the computer's %s.", userChoice, cpuChoice);
    }
    else if(victory == true) {
        console.log("You won! Your %s beat the computer's %s!", userChoice, cpuChoice);
    }
    else {
        console.log("Tie! Both you and the computer used %s", userChoice);
    }

    return victory;
}

function playGame() {
    let userScore = 0;
    let cpuScore = 0;

    /* logic not needed. game now ends immediately after one player reaches 5 points
    for (let i = 0; i < 5; i++) {
        let result = playRound();
        if (result == true) {
            userScore++;
        }
        else if(result == false) {
            cpuScore++;
        }
    }
    */ 
   

    if (userScore > cpuScore) {
        console.log("You win the game %s to %s", userScore, cpuScore);
    }
    else if (userScore < cpuScore) {
        console.log("You lose the game %s to %s", userScore, cpuScore);
    }
    else {
        console.log("You tied %s to %s with the computer", userScore, cpuScore);
    }

}

window.onload=function(){
    let cpuScore = 0;
    let playerScore = 0;
    let rock = document.querySelector("#rockBtn");
    let paper = document.querySelector("#paperBtn");
    let scissors = document.querySelector("#scissorsBtn");
    let result = document.querySelector('p');
    let score = document.querySelector('h5');

    rock.addEventListener('click', () => {
        let gameResult = playRound("rock");
        if (gameResult == false) {
            cpuScore++;
            result.textContent = "You lose! Your rock lost to the computer's paper.";
        }
        else if (gameResult == true) {
            playerScore++;
            result.textContent = "You won! your rock beat the computer's scissors.";
        }
        else {
            result.textContent = "You tied with the computer!";
        }
        score.textContent = `Player Score: ${playerScore} | CPU Score: ${cpuScore}`;
        if (playerScore >= 5) {
            result.textContent = "You scored 5 points! You win!";
            playerScore = 0, cpuScore = 0;
        }
        else if (cpuScore >= 5) {
            result.textContent = "The CPU reached 5 points first. You lost.";
            playerScore = 0, cpuScore = 0;
        }
    });

    paper.addEventListener('click', () => {
        let gameResult = playRound("paper");
        if (gameResult == false) {
            cpuScore++;
            result.textContent = "You lose! Your paper lost to the computer's scissors.";
        }
        else if (gameResult == true) {
            playerScore++;
            result.textContent = "You won! your paper beat the computer's rock.";
        }
        else {
            result.textContent = "You tied with the computer!";
        }
        score.textContent = `Player Score: ${playerScore} | CPU Score: ${cpuScore}`;
        if (playerScore >= 5) {
            result.textContent = "You scored 5 points! You win!";
            playerScore = 0, cpuScore = 0;
        }
        else if (cpuScore >= 5) {
            result.textContent = "The CPU reached 5 points first. You lost.";
            playerScore = 0, cpuScore = 0;
        }
    });

    scissors.addEventListener('click', () => {
        let gameResult = playRound("scissors");
        if (gameResult == false) {
            cpuScore++;
            result.textContent = "You lose! Your scissors lost to the computer's rock.";
        }
        else if (gameResult == true) {
            playerScore++;
            result.textContent = "You won! your scissors beat the computer's paper.";
        }
        else {
            result.textContent = "You tied with the computer!";
        }
        score.textContent = `Player Score: ${playerScore} | CPU Score: ${cpuScore}`;
        if (playerScore >= 5) {
            result.textContent = "You scored 5 points! You win!";
            playerScore = 0, cpuScore = 0;
        }
        else if (cpuScore >= 5) {
            result.textContent = "The CPU reached 5 points first. You lost.";
            playerScore = 0, cpuScore = 0;
        }
    });
};