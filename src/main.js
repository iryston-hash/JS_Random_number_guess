'use strict';
//
// document.querySelector('.number').textContent = '??';
// document.querySelector('.score').textContent = 'Record score';
// document.querySelector('.guess').value = 69;

// console.log(document.querySelector('.guess').value);
// console.log(document.querySelector('.score').textContent);

let randomNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
    document.querySelector('.message').textContent = message
}
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    //
    if (!guess) {
        // document.querySelector('.message').textContent =
        //     'not a number or is 0, please guess a positive number! x.x';
        displayMessage('Number should not be 0 or negative!')
        //
    } else if (guess === randomNum) {
        displayMessage('✌🏻 correct number!')
        document.querySelector('body').style.backgroundColor = 'darkgreen';
        document.querySelector('.number').style.fontSize = '10rem';
        document.querySelector('.number').style.backgroundColor = 'green';
        document.querySelector('.number').textContent = randomNum;
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore; }
    } else if (score !== randomNum) {
        if (score > 1) {
            displayMessage ( guess > randomNum ? '❌ Too high! 🐱‍🏍' : '❌ Too low 👇');
            score--;
            document.querySelector('.score').textContent = score;
        }  
    } else {
        displayMessage('💀 GAMEOVER 💀');
        document.querySelector('.score').textContent = 0;
    } 
});
//     // score is to high
// } else if (guess > randomNum) {
//     if (score > 1) {
//         document.querySelector('.message').textContent =
//             '❌ Too high! 🐱‍🏍';
//         score--;
//         document.querySelector('.score').textContent = score;
//     } else {
//         document.querySelector('.message').textContent = ' 💀 GAMEOVER 💀 ';
//         document.querySelector('.score').textContent = 0;
//     }
//     // score is to low
// } else if (guess < randomNum) {
//     if (score > 1) {
//         document.querySelector('.message').textContent = '❌ Too low 👇';
//         score--;
//         document.querySelector('.score').textContent = score;
//     
// }

// restart
document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    randomNum = Math.trunc(Math.random() * 20) + 1;
    displayMessage('Start guessing again...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#221509e7';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.backgroundColor = 'black';
    document.querySelector('.number').style.width = 'maxContent';
    document.querySelector('.number').style.fontSize = '10rem';
});
