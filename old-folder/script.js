/* 
Training 1
*/
// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	    'B'
// 70 <= score < 80	    'C'
// 60 <= score < 70	    'D'
// 0 <= score < 60	    'F'

// function getGrade(s1, s2, s3) {
//     let total = s1+s2+s3;
//     let score = total / 3;

//     if (90 <= Math.round(score) || Math.round(score) == 100) {
//         return console.log('A');
//     } else if (80 <= Math.round(score) && Math.round(score) < 90) {
//         return console.log('B');
//     } else if (70 <= Math.round(score) && Math.round(score) < 80) {
//         return console.log('C');
//     } else if (60 <= Math.round(score) && Math.round(score) < 70) {
//         return console.log('D');
//     } else if (0 <= Math.round(score) && Math.round(score) < 60) {
//         return console.log('F');
//     }
    
        
// };

// getGrade(90,90,98);



/* 
Training 2
*/
// Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.
/* 
Examples(Input1, Input2 --> Output):

"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"
*/

// const rps = (p1, p2) => {
//     if(p1 == 'scissors' && p2 == 'paper') {
//         return 'Player 1 won!';
//     } else if (p1 == 'rock' && p2 == 'scissors') {
//         return 'Player 1 won!';
//     } else if (p1 == 'paper' && p2 == 'rock') {
//         return 'Player 1 won!';
//     } else if (p1 == 'paper' && p2 == 'scissors') {
//         return 'Player 2 won!';
//     } else if (p1 == 'scissors' && p2 == 'rock') {
//         return 'Player 2 won!';
//     } else if (p1 == 'rock' && p2 == 'paper') {
//         return 'Player 2 won!';
//     } else if (p1 == p2) {
//         return 'Draw';
//     }
// };

// // Player 1 won!
// console.log('Player 1');
// console.log(rps('scissors', 'paper'));
// console.log(rps('rock', 'scissors'));
// console.log(rps('paper', 'rock'));
// // Draw
// console.log(rps('paper', 'paper'));

// // Player 2 won!
// console.log('Player 2');
// console.log(rps('paper', 'scissors'));
// console.log(rps('scissors', 'rock'));
// console.log(rps('rock', 'paper'));
// // Draw
// console.log(rps('paper', 'paper'));


/*
Training 3
*/
let myName = prompt('What is your name?');

alert(`Hello ${myName}`);





