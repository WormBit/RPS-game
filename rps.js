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

// get player choice, check if valid, continue if so

while (invalidChoice) {

    let userChoice = (prompt("Rock, paper, or scissors?")).toLowerCase();

    if (options.includes(userChoice)) {
        invalidChoice = false;
    }
    
    else {
        console.log('Invalid option, please type "rock", "paper", or "scissors".');
    }
}

