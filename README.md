# The Tortoise and the Hare Race 🐢🐇

<div align="center">
  <h3>A JavaScript Simulation of the Classic Fable</h3>
  <br>
  <a href="https://samrosati.github.io/Tortoise-Hare-Game/">
    <img src="https://img.shields.io/badge/Play_Game-2ea44f?style=for-the-badge&logo=github&logoColor=white" alt="Play Game" />
  </a>
</div>

## About The Project

This project is a browser-based simulation of the classic race between the Tortoise and the Hare. It demonstrates the use of **JavaScript** to handle game logic, probability-based movement, and dynamic DOM manipulation.

The race takes place on a 70-tile track where each animal moves based on specific probabilities calculated every second.

## Key Features

* **Visual Track:** A 70-cell grid representing the race course, built using **CSS Grid**.
* **Randomized Logic:** Movement is determined by a random number generator (1-10), creating a unique outcome for every race.
* **Collision Detection:** If both animals land on the same tile, the UI updates to show a collision ("💥").
* **Race Log:** A scrolling log at the bottom of the screen records the exact position of both competitors at every step.
* **Responsive UI:** The layout adapts to the screen size, and the track is centered using a wrapper with a max-width of 900px.

## How It Works (The Logic)

The race is controlled by an interval timer that triggers a "step" every 1000ms (1 second). Here are the movement rules:

### 🐢 The Tortoise
The Tortoise is slow but consistent.
* **Fast Plod (50% chance):** Moves forward 2 squares.
* **Slow Plod (30% chance):** Moves forward 1 square.
* **Slip (20% chance):** Moves 0 squares (stays put).

### 🐇 The Hare
The Hare is fast but erratic.
* **Big Hop (30% chance):** Moves forward 7 squares.
* **Big Slip (20% chance):** Slips backward 5 squares.
* **Sleep (50% chance):** Moves 0 squares (falls asleep).

## Tech Stack

* **HTML5:** Structure for the track, controls, and logging area.
* **CSS3:** Styling for the grid layout (`grid-template-columns`), animal tokens, and animations.
* **JavaScript (ES6):** Handles the game loop (`setInterval`), probability logic, and DOM updates.
