'use strict';


// Global variables for hidden number, score counter and highscore 
let secretNum = Math.trunc(Math.random()*20) + 1;
let scoreVar = 20;
let highScoreVar = 0;



// document.querySelector('.number').textContent = secretNum;


document.querySelector(".check").addEventListener("click", function() {

    // making sure that score is > 0
    if (scoreVar >= 1) {

        // Getting the user input from 
        const Guess = Number(document.querySelector('.guess').value);

        if (!Guess) {
            document.querySelector('.message').textContent = 'Empty input... Pick a number';
        } 

        else if (Guess > 20) {
            
            document.querySelector('.message').textContent = 'Number should be between 1 - 20';
        }

        else if (Guess === secretNum) {
            document.querySelector('.message').textContent = 'Your guess is correct';

            if (highScoreVar < scoreVar) {
                highScoreVar = scoreVar;

                document.querySelector('.highscore').textContent = highScoreVar;
            }

            document.querySelector('.number').textContent = secretNum;

            document.querySelector('body').style.backgroundColor =  '#60b347';

            document.querySelector('.number').style.width = '30rem';
        }

        else if (Guess > secretNum) {
            document.querySelector('.message').textContent = 'Too high';
    
            scoreVar--;
        }
         
        else if (Guess < secretNum) {
            document.querySelector('.message').textContent = 'Too Low';
    
            scoreVar--;
        } 
    } else {
        document.querySelector('.message').textContent = 'No more attempts left.. Start again';
    }
    
      
    document.querySelector('.score').textContent = scoreVar;
})


document.querySelector('.again').addEventListener('click', function() {
    secretNum = Math.trunc(Math.random()*20) + 1;

    document.querySelector('.number').textContent = '?';

    document.querySelector('body').style.backgroundColor = '#222';

    document.querySelector('.number').style.width = '15rem';

    scoreVar = 20;

    document.querySelector('.guess').value = ''; 

        
    document.querySelector('.score').textContent = scoreVar;

    document.querySelector('.message').textContent = 'Start guessing';
})