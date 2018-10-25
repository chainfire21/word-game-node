const Word = require("./word.js");
const inquirer = require("inquirer");
const words = ["hallucination", "blah", "full stack", "web developer", "triangle", "computer", "dihidrogen monoxide", "trick or treat"];
let guesses = 6;
let toGuess = new Word(words[Math.floor(Math.random() * words.length)]);
const guessedLetters = [];
let alreadyGuessed = false;
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
            validate: function (value) {
                var pass = value.match(
                    /^.$/
                );
                if (pass) {
                    return true;
                }

                return 'Please enter a single character';
            }
        },
    ]).then((answer) => {
        guessedLetters.forEach(letter => {
            if (letter.toLowerCase() === answer.letterGuess.toLowerCase()) {
                alreadyGuessed = true;
            }
        });
        if (alreadyGuessed) {
            console.log("You already guessed that letter!");
            alreadyGuessed = false;
            return game();
        }
        if (toGuess.guess(answer.letterGuess)) {
            console.log("\nCorrect!");
            updateGuessed(answer.letterGuess);
        }
        else {
            guesses--;
            console.log(`\nIncorrect!!! You have ${guesses} guesses left!`);
            updateGuessed(answer.letterGuess);
        }
        console.log("");
        console.log(toGuess.generateWord());
        if (guesses === 0) {
            console.log("You lost!!");
            return resetGame();

        }
        if (toGuess.checkWin()) {
            console.log("You win!");
            return resetGame();
        }
        else {
            game();
        }
    });
};
const updateGuessed = function (letter) {
    guessedLetters.push(letter);
    console.log(`\nLetters guessed: ${guessedLetters.join(", ")}`);
}
const resetGame = function () {
    inquirer.prompt([{
        type: "confirm",
        name: "restartGame",
        message: "Play again?",
    },
    ]).then(ans => {
        if (ans.restartGame) {
            guesses = 6;
            guessedLetters.length = 0;
            toGuess = new Word(words[Math.floor(Math.random() * words.length)]);
            console.log(toGuess.generateWord());
            return game();
        }
        return console.log("Goodbye!");
    });
}
game();