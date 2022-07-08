'use strict';

//random number
let randNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

//when check is clicked
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);

  //no number selected
  if (!guess) {
    document.querySelector('.message').textContent = 'No number was guessed 🚫';
  }

  //when player wins
  else if (guess === randNum) {
    document.querySelector('.message').textContent = 'Correct Number! 🎊';

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    document.querySelector('.number').textContent = randNum;

    //high schore
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }

  //when guess is too high
  else if (guess > randNum) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high! ⬇️';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'You lost the game... 😢';
      document.querySelector('.score').textContent = 0;
    }
  }

  //when guess is too low
  else if (guess < randNum) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low! ⬆️';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'You lost the game... 😢';
      document.querySelector('.score').textContent = 0;
    }
  }
});

//when again is clicked
document.querySelector('.again').addEventListener('click', function () {
  //make background color black again
  document.querySelector('body').style.backgroundColor = '#222';

  //make number box width 15 rem
  document.querySelector('.number').style.width = '15rem';

  //make message start guessing again
  document.querySelector('.message').textContent = 'Start guessing...';

  //reset Score
  score = 20;
  document.querySelector('.score').textContent = score;

  //make new hidden number and make it invisible
  randNum = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';

  //make guess input null
  document.querySelector('.guess').value = '';
});
