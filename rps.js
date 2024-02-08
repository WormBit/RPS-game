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

const options = ["scissors", "paper", "rock"];

let cpuChoice = options[randInt(options.length)];
let invalidChoice = true;
let userChoice = null;
// get player choice, check if valid, continue if so

while (invalidChoice) {

    userChoice = (prompt("Rock, paper, or scissors?")).toLowerCase();

    if (options.includes(userChoice)) {
        invalidChoice = false;
    }
    
    else {
        console.log('Invalid option, please type "rock", "paper", or "scissors".');
    }
}

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

// output result
if (victory == false) {
    console.log("You lose! Your %s lost to the computer's %s.", userChoice, cpuChoice);
}
else if(victory == true) {
    console.log("You won! Your %s beat the computer's %s!", userChoice, cpuChoice);
}
else {
    console.log("Tie! Both you and the computer used %s", userChoice);
}