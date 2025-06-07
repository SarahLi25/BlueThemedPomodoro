let mode = "sunny"; // default mode
let timer;
let minutes = 25;
let seconds = 0;
let isRunning = false;

const timerDisplay = document.getElementById('timer');
const statusDisplay = document.getElementById('status');
const startBtn = document.getElementById('start');
const pauseBtn = document.getElementById('pause');
const resetBtn = document.getElementById('reset');
const sunnyBtn = document.getElementById('sunny');
const rainyBtn = document.getElementById('rainy');
const stormyBtn = document.getElementById('stormy');

function updateDisplay(mins, secs) {
  timerDisplay.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function setMode(newMode) {
  mode = newMode;
  clearInterval(timer);
  isRunning = false;

  document.querySelectorAll('.mode-buttons button').forEach(btn => btn.classList.remove('active'));

  if (mode === "sunny") {
    minutes = 25;
    statusDisplay.textContent = "🌤️ Time to shine!";
    sunnyBtn.classList.add('active');
  } else if (mode === "rainy") {
    minutes = 5;
    statusDisplay.textContent = "🌧️ Take a light break!";
    rainyBtn.classList.add('active');
  } else if (mode === "stormy") {
    minutes = 15;
    statusDisplay.textContent = "🌩️ Rest before the next wave!";
    stormyBtn.classList.add('active');
  }

  seconds = 0;
  updateDisplay(minutes, seconds);
}

function startTimer() {
  if (isRunning) return;
  isRunning = true;

  timer = setInterval(() => {
    if (seconds === 0) {
      if (minutes === 0) {
        clearInterval(timer);
        isRunning = false;
        statusDisplay.textContent = "⏰ Time's up! Choose your next forecast.";
        return;
      }
      minutes--;
      seconds = 59;
    } else {
      seconds--;
    }
    updateDisplay(minutes, seconds);
  }, 1000);
}

function pauseTimer() {
  clearInterval(timer);
  isRunning = false;
}

function resetTimer() {
  clearInterval(timer);
  isRunning = false;
  setMode(mode); // reset current mode
}

sunnyBtn.addEventListener('click', () => setMode('sunny'));
rainyBtn.addEventListener('click', () => setMode('rainy'));
stormyBtn.addEventListener('click', () => setMode('stormy'));
startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);

// Initialize on page load
setMode("sunny");
