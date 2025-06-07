const timerDisplay = document.getElementById('timer');
const themeSelector = document.getElementById('theme');
const quoteElement = document.querySelector('.quote');

let interval;
let timeLeft = 1500; // 25 minutes default

const themes = {
  clouds: {
    className: 'theme-clouds',
    quote: '"Focus like the clouds drift — gently and freely."'
  },
  ocean: {
    className: 'theme-ocean',
    quote: '"Dive deep into focus, let your mind sail smoothly."'
  },
  gingham: {
    className: 'theme-gingham',
    quote: '"Stitch your time with care and calm determination."'
  }
};

themeSelector.addEventListener('change', (e) => {
  const theme = themes[e.target.value];
  document.body.className = theme.className;
  quoteElement.textContent = theme.quote;
});

function updateDisplay() {
  const minutes = Math.floor(timeLeft / 60)
    .toString()
    .padStart(2, '0');
  const seconds = (timeLeft % 60).toString().padStart(2, '0');
  timerDisplay.textContent = `${minutes}:${seconds}`;
}

function startTimer() {
  clearInterval(interval);
  interval = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      updateDisplay();
    } else {
      clearInterval(interval);
      // Optionally, add a sound or notification here.
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(interval);
}

function resetTimer() {
  clearInterval(interval);
  timeLeft = 1500;
  updateDisplay();
}

function setMode(mode) {
  clearInterval(interval);
  if (mode === 'pomodoro') timeLeft = 1500;
  else if (mode === 'short') timeLeft = 300;
  else if (mode === 'long') timeLeft = 900;
  updateDisplay();
}

updateDisplay();


