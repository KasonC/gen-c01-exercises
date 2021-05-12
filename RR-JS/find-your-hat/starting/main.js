const prompt = require('prompt-sync')({ sigint: true });

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
    constructor(field) {
            this._field = field;
        }
        // Getters
    get field() {
            return this._field;
        }
        // Methods
    playGame() {
        let currentlyPlaying = true;
        let x = 0;
        let y = 0;
        console.log(this.print());
        let moveSelection;
        while (currentlyPlaying) {
            moveSelection = prompt("Which way would you like to move? (Up = 'U' Down = 'D' Left = 'L' Right = 'R'");
            // move selection up/down/left/right/
            if (moveSelection.toUpperCase() === 'U' && y !== 0) {
                y -= 1;
            } else if (moveSelection.toUpperCase() === 'U' && y === 0) {
                console.log('You have already reached the top of the board');
            } else if (moveSelection.toUpperCase() === 'D' && y !== (inputHeight - 1)) {
                y += 1;
            } else if (moveSelection.toUpperCase() === 'D' && y === (inputHeight - 1)) {
                console.log('You have already reached the bottom of the board');
            } else if (moveSelection.toUpperCase() === 'L' && x !== 0) {
                x -= 1;
            } else if (moveSelection.toUpperCase() === 'L' && x === 0) {
                console.log('You have already reached the left side of the board');
            } else if (moveSelection.toUpperCase() === 'R' && x !== (inputWidth - 1)) {
                x += 1;
            } else if (moveSelection.toUpperCase() === 'R' && x === (inputWidth - 1)) {
                console.log('You have already reached the right side of the board');
            } else if (moveSelection === 'clear') {
                break;
            } else {
                console.log('Invalid Entry');
            }
            if (this.field[y][x] === hat) {
                console.log("You've successfully retrieved the hat! You win!");
                currentlyPlaying = false;
                break;
            } else if (this.field[y][x] === hole) {
                console.log('Game Over! You fell through the hole!');
                currentlyPlaying = false;
                break;
            } else {
                this.field[y][x] = pathCharacter;
                console.log(this.print());
            }
        }
    }
}