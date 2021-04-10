import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

// main AppComponent
export class AppComponent {
    title = 'Square Root Guessing Game';
    target: number;
    guess: number;
    accuracy: number = 20;
    win: boolean;
    feedback: Array<string>;

    // on start, reset Game
    constructor() {
        this.resetGame();
    }

    // set target to a random number between 50 and 250
    randomTarget() {
        this.target = Math.floor(Math.random() * 200) + 50;
    }

    // reset game
    resetGame() {
        this.win = false;
        this.randomTarget();
        this.feedback = [];
        this.guess = null;
    }

    // handle guess
    submitGuess() {
        const correctAnswer = Math.sqrt(this.target);
        const guess = Number(this.guess);
        if (Math.abs(guess - correctAnswer) / correctAnswer <= this.accuracy / 100) {
            // answer is close enough.
            this.feedback.push("Close enough!");
            this.win = true;
        } else if (guess < correctAnswer) {
            // answer is too low
            this.feedback.push("Too low!");
        } else {
            // answer is too high
            this.feedback.push("Too high!");
        }

    }

}
