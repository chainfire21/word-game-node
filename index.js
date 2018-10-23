const Word = require("./word.js");
const inquirer = require("inquirer");
const words = ["hallucination", "blah", "full stack web developer", "triangle", "computer", "dihidrogen monoxide"];
let guesses = 6;
let toGuess = new Word(words[Math.floor(Math.random() * words.length)]);
console.log("");
console.log(toGuess.generateWord());
console.log("\nYou start with 6 guesses!");
function game() {
    console.log("");
    inquirer.prompt([
        {
            type: "input",
            name: "letterGuess",
            message: "Guess a letter!",
        },
    ]).then((answer) => {
        if (toGuess.guess(answer.letterGuess)) {
            console.log("\nCorrect!");
        }
        else {
            guesses--;
            console.log(`\nYou have ${guesses} left!`);
        }
        console.log("");
        console.log(toGuess.generateWord());
        if (toGuess.checkWin()) {
            console.log("You win!");
            inquirer.prompt([{
                type: "confirm",
                name: "restartGame",
                message: "Play again?",
            },
            ]).then(ans => {
                if (ans.restartGame) {
                    guesses = 6;
                    toGuess = new Word(words[Math.floor(Math.random() * words.length)]);
                    console.log(toGuess.generateWord());
                    return game();
                }
                return console.log("Goodbye!");
            });
        }
        else {
            game();
        }
    });
};
game();