// 2. Implement a bouncing ball triggered by a Start and Stop button

const ball = document.getElementById("ball");
const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");

let position = 0;
let velocity = 5;
// 1 = up, -1 = down
let direction = 1; 
let intervalId = null;

const animateBall = () => {
  const boxHeight = 300;
  const ballHeight = 40;

  position += velocity * direction;

  if (position >= boxHeight - ballHeight) {
    direction = -1;
  } else if (position <= 0) {
    direction = 1;
  }

  ball.style.bottom = position + "px";
}

startBtn.addEventListener("click", () => {
  if (!intervalId) {
    intervalId = setInterval(animateBall, 10); // run every 10ms
	console.log("start clicked")
  }
});

stopBtn.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = null;
});