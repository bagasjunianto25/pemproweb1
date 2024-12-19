// main.js

// Canvas setup
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
canvas.width = 300;
canvas.height = 600;

const grid = 30; // size of each block
let score = 0;
let level = 1;

// Tetromino shapes
const shapes = [
  [[1, 1, 1], [0, 1, 0]], // T
  [[1, 1, 0], [0, 1, 1]], // Z
  [[0, 1, 1], [1, 1, 0]], // S
  [[1, 1], [1, 1]],       // O
  [[1, 1, 1, 1]],         // I
];

// Current position
let tetromino = {
  shape: shapes[0],
  x: 3,
  y: 0,
};

// Draw the board
function drawBoard() {
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Draw grid lines
  ctx.strokeStyle = 'gray';
  for (let x = 0; x < canvas.width; x += grid) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, canvas.height);
    ctx.stroke();
  }
  for (let y = 0; y < canvas.height; y += grid) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(canvas.width, y);
    ctx.stroke();
  }
}

// Draw tetromino
function drawTetromino() {
  ctx.fillStyle = 'cyan';
  tetromino.shape.forEach((row, y) => {
    row.forEach((value, x) => {
      if (value) {
        ctx.fillRect((tetromino.x + x) * grid, (tetromino.y + y) * grid, grid, grid);
      }
    });
  });
}

// Game loop
function gameLoop() {
  drawBoard();
  drawTetromino();
  requestAnimationFrame(gameLoop);
}

// Modal controls
const modal = document.getElementById('instructions');
document.getElementById('howToPlay').onclick = () => {
  modal.style.display = 'block';
};
document.getElementById('closeModal').onclick = () => {
  modal.style.display = 'none';
};

// Start the game loop
gameLoop();
