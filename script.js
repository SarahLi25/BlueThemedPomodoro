let minutesDisplay = document.getElementById("minutes");
let secondsDisplay = document.getElementById("seconds");

let timer;
let totalSeconds = 25 * 60;
let remainingSeconds = totalSeconds;
let isRunning = false;

function updateDisplay() {
  const mins = Math.floor(remainingSeconds / 60);
  const secs = remainingSeconds % 60;
  minutesDisplay.textContent = String(mins).padStart(2, "0");
  secondsDisplay.textContent = String(secs).padStart(2, "0");
}

function setTimer(mins) {
  clearInterval(timer);
  isRunning = false;
  totalSeconds = mins * 60;
  remainingSeconds = totalSeconds;
  updateDisplay();
}

function startTimer() {
  if (isRunning) return;
  isRunning = true;
  timer = setInterval(() => {
    if (remainingSeconds <= 0) {
      clearInterval(timer);
      isRunning = false;
      alert("Yeehaw! Time’s up, partner!");
    } else {
      remainingSeconds--;
      updateDisplay();
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(timer);
  isRunning = false;
}

function resetTimer() {
  clearInterval(timer);
  isRunning = false;
  remainingSeconds = totalSeconds;
  updateDisplay();
}

updateDisplay();

