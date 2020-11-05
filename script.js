'use strict';
/**
 * Guess My Number Game
 */

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let highScore = 0;
let score = 20;
const message = {
  win: 'Correct Number',
  lost: 'You lost',
  noNumber: 'No Number',
  tooHigh: 'Too High',
  tooLow: 'Too Low',
  standard: 'Start guessing...',
};

const numberWidth = {
  win: '30rem',
  standard: '15rem',
};
const bodyBackground = {
  win: '#60b347',
  lost: '#e74c3c',
  standard: '#222',
};

const queryMessage = message =>
  (document.querySelector('.message').textContent = message);
const queryNumber = number =>
  (document.querySelector('.number').textContent = number);
const queryScore = score =>
  (document.querySelector('.score').textContent = score);
const queryHighScore = score =>
  (document.querySelector('.highscore').textContent = score);
const styleBackground = background =>
  (document.querySelector('body').style.backgroundColor = background);
const styleNumberWidth = width =>
  (document.querySelector('.number').style.width = width);

const init = () => {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  queryMessage(message.standard);
  styleBackground(bodyBackground.standard);
  styleNumberWidth(numberWidth.standard);
  score = 20;
  queryScore(score);
  queryHighScore(highScore);
  queryNumber('?');
  document.querySelector('.guess').value = '';
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  queryMessage(message.standard);

  if (!guess) {
    console.log(guess);
    queryMessage(message.noNumber);
  } else if (guess === secretNumber) {
    queryMessage(message.win);
    queryNumber(secretNumber);
    styleBackground(bodyBackground.win);
    styleNumberWidth(numberWidth.win);

    if (score > highScore) {
      highScore = score;
      queryHighScore(highScore);
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      const msg = guess > secretNumber ? message.tooHigh : message.tooLow;
      queryMessage(msg);
      score--;
      queryScore(score);
    } else {
      queryMessage(message.lost);
      queryScore(0);
      styleBackground(bodyBackground.lost);
    }
  }
});

document.querySelector('.again').addEventListener('click', init);
