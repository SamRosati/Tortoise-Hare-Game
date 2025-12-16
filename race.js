const startBtn = document.getElementById("startBtn");
const message = document.getElementById("message");
const trackEl = document.getElementById("track");
const logEl = document.getElementById("log");

const TRACK_LENGTH = 70;

let tortoisePosition = 1;
let harePosition = 1;
let raceIntervalId = null;
let stepCount = 0;

// event listener for the start button

startBtn.addEventListener("click", startRace);

function startRace() {
  // reset positions in case its not the first time the user plays the game
  tortoisePosition = 1;
  harePosition = 1;
  stepCount = 0;

  // display the start message
  message.textContent = "AWAY THEY GO!!! WOOOHOOOOO!!!";

  // clear the log from the previous race
  clearLog();

  if (raceIntervalId !== null) {
    clearInterval(raceIntervalId)
  }

  startBtn.disabled = true;

  raceIntervalId = setInterval(raceStep, 1000);
}

function raceStep() {
  stepCount += 1;
  moveTortoise();
  moveHare();
  clampPositions();
  renderTrack();
  logStep();

  // check finish
  if (tortoisePosition >= TRACK_LENGTH || harePosition >= TRACK_LENGTH) {
    clearInterval(raceIntervalId);
    raceIntervalId = null;
    startBtn.disabled = false;
    showResult();
  }
}

function moveTortoise() {
  // draw a random integer 1 - 10
  let roll = Math.floor(Math.random() * 10 + 1);

  // while developing, console.logging a variable value helps
  console.log(roll);

  if (roll >= 1 && roll <= 5) {
    // 1 - 5 fast plod
    tortoisePosition += 2;
  } else if (roll >= 6 && roll <= 7) {
    // 6 - 7 rest
    tortoisePosition -= 0;
  } else {
    // 8 - 10 slow plod
    tortoisePosition += 1;
  }
}

function moveHare() {
  // draw a random integer 1 - 10
  let roll = Math.floor(Math.random() * 10 + 1);

  // while developing, console.logging a variable value helps
  console.log(roll);

  if (roll >= 1 && roll <= 3) {
    // 1 - 2 sleep
    harePosition = harePosition;
  } else if (roll >= 4 && roll <= 5) {
    // 3 - 4 slip
    harePosition -= 5;
  } else if (roll >= 6 && roll <= 8) {
    // 6 - 7 big hop
    harePosition += 7;
  } else {
    // 8 - 10 sleep again
    harePosition += 0;
  }
}

function clampPositions() {
  // fit the position within the track
  const MIN_POSITION = 1;
  const MAX_POSITION = TRACK_LENGTH;

  tortoisePosition = Math.min(
    MAX_POSITION,
    Math.max(MIN_POSITION, tortoisePosition)
  );

  harePosition = Math.min(MAX_POSITION, Math.max(MIN_POSITION, harePosition));
}

function renderTrack() {
  trackEl.innerHTML = "";

  for (let i = 1; i <= TRACK_LENGTH; i++) {
    let cell = document.createElement("div");
    cell.classList.add("cell");

    let isTortoiseHere = tortoisePosition === i;
    let isHareHere = harePosition === i;

    if (isTortoiseHere && isHareHere) {
      cell.textContent = "💥";
      cell.classList.add("both");
    } else if (isTortoiseHere) {
      cell.textContent = "🐢";
      cell.classList.add("tortoise");
    } else if (isHareHere) {
      cell.textContent = "🐇";
      cell.classList.add("hare");
    }

    trackEl.appendChild(cell);
  }
}

function showResult() {
  if (tortoisePosition >= TRACK_LENGTH) {
    message.textContent = "Tortoise Wins! Yay!";
  } else {
    message.textContent = "Hare Wins! Yuck!";
  }
}

function logStep() {
    let entry = document.createElement('div')
    entry.classList.add ('entry')
    entry.textContent = `Step ${stepCount}: 🐢 = ${tortoisePosition}, 🐇 = ${harePosition}`

    logEl.appendChild(entry)
    logEl.scrollTop = logEl.scrollHeight
}

function clearLog() {
    logEl.innerHTML = '<h2>Race Log</h2>'

}