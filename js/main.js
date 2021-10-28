window.addEventListener('load', init);

const levels = {
  easy: 5,
  medium: 3,
  hard: 2,
};

const currentLevel = levels.easy;

let time = currentLevel;
let score = 0;
let isPlaying;

const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');
const highscoreDisplay = document.querySelector('#highscore');

const words = [
  'hat',
  'river',
  'lucky',
  'statue',
  'generate',
  'stubborn',
  'cocktail',
  'runaway',
  'joke',
  'developer',
  'establishment',
  'hero',
  'javascript',
  'nutrition',
  'revolver',
  'echo',
  'siblings',
  'investigate',
  'horrendous',
  'symptom',
  'laughter',
  'magic',
  'master',
  'space',
  'definition',
];

function init() {
  seconds.innerHTML = currentLevel;
  showWord(words);
  // start matching on word input
  wordInput.addEventListener('input', startMatch);
  // call countdown every second
  setInterval(countdown, 1000);
  // check game status
  setInterval(checkStatus, 50);
}

function startMatch() {
  if (matchWords()) {
    isPlaying = true;
    time = currentLevel + 1;
    showWord(words);
    wordInput.value = '';
    score++;
  }

  scoreDisplay.innerHTML = score === -1 ? 0 : score;
}

function matchWords() {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = 'Correct!';
    return true;
  } else {
    message.innerHTML = '...';
    return false;
  }
}

// pick random word to show
function showWord(words) {
  const randIndex = Math.floor(Math.random() * words.length);

  currentWord.innerHTML = words[randIndex];
}

// countdown timer
function countdown() {
  if (time > 0) {
    time--;
  } else if (time === 0) {
    isPlaying = false;
  }
  // show time
  timeDisplay.innerHTML = time;
}

function checkStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = 'Game Over!';
    score = -1;
  }
}
