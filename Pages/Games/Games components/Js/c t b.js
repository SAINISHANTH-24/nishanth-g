const ball = document.getElementById('ball');
const scoreElement = document.getElementById('score');
const timerElement = document.getElementById('timer');
const gameArea = document.getElementById('game-area');

let score = 0;
let timeLeft = 30;
let gameInterval;

function randomPosition() {
  const gameAreaRect = gameArea.getBoundingClientRect();
  const maxX = gameAreaRect.width - 50; // Ball width
  const maxY = gameAreaRect.height - 50; // Ball height
  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  ball.style.left = `${randomX}px`;
  ball.style.top = `${randomY}px`;
}

function startGame() {
  ball.addEventListener('click', () => {
    score++;
    scoreElement.textContent = score;
    randomPosition();
  });

  gameInterval = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      timerElement.textContent = timeLeft;
    } else {
      clearInterval(gameInterval);
      alert(`Game Over! Your score is ${score}`);
      resetGame();
    }
  }, 1000);

  randomPosition();
}

function resetGame() {
  score = 0;
  timeLeft = 30;
  scoreElement.textContent = score;
  timerElement.textContent = timeLeft;
  randomPosition();
}

startGame();
