const Letter = require("./letter.js")
function Word(word){
    this.word = word;
    this.letterArr = word.split('').map((x)=>{
        return new Letter(x);
    });
    this.generateWord = function(){
        let displayWord = "";
        this.letterArr.forEach(char =>{         
            displayWord += char.character();
        });
        return displayWord;
    }
    this.guess = function(guess){
        let correctGuess = false;
        this.letterArr.forEach((char)=>{
            if(char.check(guess)){
                correctGuess = true;
            }
        });
        return correctGuess;
    }
    this.checkWin = function(){
        let checkWinStatus = true;
        this.letterArr.forEach(char=>{
            if (!char.guessed){
                checkWinStatus = false;
            }
        });
        return checkWinStatus;
    }
}
module.exports = Word;