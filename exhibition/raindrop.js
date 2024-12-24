const canvas = document.getElementById('rainCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Check if the device is mobile using a media query
const isMobile = window.matchMedia("(max-width: 991px)").matches;

// Set global alpha based on the device type
const raindropOpacity = isMobile ? 0.5 : 1.0;
const raindropCount = isMobile ? 250 : 1000;
const raindropSize = 1;

const raindrops = [];
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
  ctx.globalAlpha = raindropOpacity; // Set opacity for raindrops
  raindrops.forEach((drop) => {
    ctx.beginPath();
    ctx.arc(drop.x, drop.y, raindropSize, 0, Math.PI * 2);
    ctx.fill();
  });
  ctx.globalAlpha = 1.0; // Reset opacity to default for other drawings
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
