const canvas = document.getElementById('rainCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const raindrops = [];
const raindropCount = 1000;
const raindropSize = 1;


for (let i = 0; i < raindropCount; i++) {
  raindrops.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    speed: (Math.random() * 3 + 1) / 30,
  });
}

function drawRaindrops() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#fdffbf';
  raindrops.forEach((drop) => {
    ctx.beginPath();
    ctx.arc(drop.x, drop.y, raindropSize, 0, Math.PI * 2);
    ctx.fill();
  });
}


function updateRaindrops() {
  raindrops.forEach((drop) => {
    drop.y += drop.speed;

    if (drop.y > canvas.height) {
      drop.y = 0;
      drop.x = Math.random() * canvas.width;
    }
  });
}


function animate() {
  drawRaindrops();
  updateRaindrops();
  requestAnimationFrame(animate);
}

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

animate();
