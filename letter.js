function Letter(letter){
    this.letter = letter;
    this.guessed = false;
    this.character = function(){
        if (this.guessed) {
            return this.letter;
        }
        else  if (this.letter ===" "){ 
            this.guessed = true;
            return " ";
        }
        else return " _";
    }
    this.check = function(char){
        if (char.toLowerCase() === letter.toLowerCase()){
            this.guessed = true;
            return true;
        }
        return false;
    }

}
module.exports = Letter;