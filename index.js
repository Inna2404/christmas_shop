const canvas = document.getElementById("snowCanvas");
const ctx = canvas.getContext("2d");

let snowflakes = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function createSnowFlake() {
  const size = Math.random() * 1 + 2;
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height;
  const speed = Math.random() * 0.5 + 0.5;

  snowflakes.push({ x, y, size, speed });
}

function drawsnowFlakes() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "rgba(255,255,255,0.5)";
  ctx.beginPath();

  for (let i = 0; i < snowflakes.length; i++) {
    const flake = snowflakes[i];

    ctx.moveTo(flake.x, flake.y);
    ctx.arc(flake.x, flake.y, flake.size, 0, Math.PI * 2);

    flake.y += flake.speed;

    if (flake.y > canvas.height) {
      flake.y = -flake.size;
      flake.x = Math.random() * canvas.width;
    }
  }
  ctx.fill();
  window.requestAnimationFrame(drawsnowFlakes);
}

function init() {
  resizeCanvas();
  for (let i = 0; i < 200; i++) {
    createSnowFlake();
  }
  drawsnowFlakes();
}

window.addEventListener("resize", resizeCanvas);

init();
