function Letter(letter) {
    this.letter = letter;
    this.guessed = false;
}
Letter.prototype.character = function () {
    if (this.guessed) {
        return this.letter;
    }
    else if (this.letter === " ") {
        this.guessed = true;
        return " ";
    }
    else return " _";
}
Letter.prototype.check = function (char) {
    if (char.toLowerCase() === letter.toLowerCase()) {
        this.guessed = true;
        return true;
    }
    return false;
}
module.exports = Letter;