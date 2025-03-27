'use strict';


let imageVar = document.querySelector('.dice');

let diceNum;

const changeImage = function(getRoll) {
    imageVar.src = `dice-${getRoll}.png`;
};

const getRoll = function() {
    return Math.trunc(Math.random()*6) + 1;
};

let playerVarOne = document.querySelector('.player--0');
let playerTwoVar = document.querySelector('.player--1');

let currentScore1 = 0;
let currentScore2 = 0;

document.querySelector('.btn--roll').addEventListener('click', function () {
    diceNum = getRoll();
    alert(diceNum);
    changeImage(diceNum);

    if (playerVarOne.classList.contains('player--active')) {

        if (diceNum === 1) {
            currentScore1 = 0;
            playerVarOne.classList.remove('player--active');
            playerTwoVar.classList.add('player--active');
        } else {
            currentScore1 += diceNum;
        }

        document.querySelector("#current--0").textContent = `${currentScore1}`;

    } else if (playerTwoVar.classList.contains('player--active')) {

        if (diceNum === 1) {
            currentScore2 = 0;
            playerVarOne.classList.add('player--active');
            playerTwoVar.classList.remove('player--active');
        } else {
            currentScore2 += diceNum;
        }

        document.querySelector("#current--1").textContent = `${currentScore2}`;
    }
});


let playerOneScore = 0;
let playerScoreTwo = 0;

let nameOfPlayer1 = document.querySelector('#name--0');
let nameOfPlayerTwo = document.querySelector('#name--1');

document.querySelector('.btn--hold').addEventListener('click', function () {

    if (playerVarOne.classList.contains('player--active')) {
        playerOneScore += currentScore1;

        document.querySelector("#score--0").textContent = `${playerOneScore}`;

        currentScore1 = 0;
        document.querySelector("#current--0").textContent = `${currentScore1}`;
        
        if (playerOneScore >= 100) {
            playerVarOne.classList.remove('player--active');
            playerVarOne.classList.add('player--winner');

            nameOfPlayer1.textContent = 'Winner 🎉';
        } else {
            playerVarOne.classList.remove('player--active');
            playerTwoVar.classList.add('player--active');
        }
    } else if (playerTwoVar.classList.contains("player--active")) {
        playerScoreTwo += currentScore2

        document.querySelector('#score--1').textContent = `${playerScoreTwo}`;

        currentScore2 = 0;
        document.querySelector('#current--1').textContent = `${currentScore2}`;

        if (playerScoreTwo >= 100) {
            playerTwoVar.classList.remove('player--active');
            playerTwoVar.classList.add('player--winner');

            nameOfPlayerTwo.textContent = 'Winner 🎉';
        } else {
            playerVarOne.classList.add('player--active');
            playerTwoVar.classList.remove('player--active');
        }
    }
});