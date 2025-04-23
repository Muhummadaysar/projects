const circle = document.querySelector('.cursor-circle');

let mouseX = 0;
let mouseY = 0;

let circleX = 0;
let circleY = 0;

const speed = 0.1; // Smoothness: lower = slower, smoother
const offset = 20; // Distance from actual cursor

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX + offset;
  mouseY = e.clientY + offset;
});

function animate() {
  // Smoothly move the circle toward the mouse
  circleX += (mouseX - circleX) * speed;
  circleY += (mouseY - circleY) * speed;

  circle.style.left = `${circleX}px`;
  circle.style.top = `${circleY}px`;

  requestAnimationFrame(animate);
}

animate();