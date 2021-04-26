'use strict';
/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct number';
console.log(document.querySelector('.message').textContent);
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
//const game=function(){
/*
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
//document.querySelector('.number').textContent = secretNumber;
let counter = 0;
let highscore = 0;
document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    //document.querySelector('.message').textContent = 'Correct Number';
    //console.log(document.querySelector('.message').textContent);
    console.log(guess, typeof guess);

    if (!guess) {
        document.querySelector('.message').textContent = 'please enter guesses';
    } else if (guess === secretNumber) {
        //score = score - 1;
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.message').textContent =
            'you guess the correct number';
        document.querySelector('.score').textContent = score;
        //document.querySelector('.highscore').textContent=score;
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    } else if (guess > secretNumber) {
        score = score - 1;
        document.querySelector('.message').textContent =
            'your guess is higher than the number';
        document.querySelector('.score').textContent = score;
    } else if (guess < secretNumber) {
        score = score - 1;
        document.querySelector('.message').textContent =
            'your guess is too low than the number';
        document.querySelector('.score').textContent = score;
    }
    counter++;
    if (counter === 20) {
        document.querySelector('.message').textContent = 'You lose the Game';
    }
    document.querySelector('.guess').value = '';
});

document.querySelector('.again').addEventListener('click', function() {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    counter = 0;
    document.querySelector('.message').textContent = 'start guessing';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.highscore').textContent = highscore;
});
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let counter = 0;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);

    //console.log(guess, typeof guess);

    if (!guess) {
        document.querySelector('.message').textContent = 'please enter guesses';
    } else if (guess === secretNumber) {
        //score = score - 1;
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.message').textContent =
            'you guess the correct number';
        document.querySelector('.score').textContent = score;
        //document.querySelector('.highscore').textContent=score;

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    } else if (guess !== secretNumber) {
        score = score - 1;
        document.querySelector('.message').textContent =
            guess > secretNumber ?
            'your guess is higher than the number' :
            'your guess is too low than the number';

        document.querySelector('.score').textContent = score;
    }
    counter++;
    if (counter === 20) {
        document.querySelector('.message').textContent = 'You lose the Game';
    }
    document.querySelector('.guess').value = '';
});
document.querySelector('.again').addEventListener('click', function() {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    counter = 0;
    document.querySelector('.message').textContent = 'start guessing';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.highscore').textContent = highscore;
});