const canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

const CW = canvas.width;
const CH = canvas.height;
const PI = Math.PI;
const halfCW = CW / 2;
const halfCH = CH / 2;

let ballX = halfCW;
let ballY = halfCH;
let ballW = 10;
let ballH = 100;

function Rect(x, y, w, h) {
  ctx.fillRect(x, y, w, h);
}

let xm = 0;
let ym = 0;
let x = halfCW;
let y = halfCH;
let pw = 10;
let ph = 10;
document.onmousemove = handleMouseMove;
function handleMouseMove(event) {
  xm = event.clientX;
  ym = event.clientY;
}

function stuff() {
  x += xSpeed;
  y += ySpeed;
  if (x > CW - pw) {
    xSpeed = -xSpeed;
  }
  if (y > CH - ph || y < 0) {
    ySpeed = -ySpeed;
  }
  if (y > iy - ballH / 2 && y < iy + ballH / 2) {
    if (x < pw) {
      xSpeed = -xSpeed;
    }
  }
  if (x < 0) {
    x = halfCW;
    y = halfCH;
  }
  ctx.clearRect(0, 0, CW, CH);
  Rect(0, iy - ballH / 2, ballW, ballH);
  Rect(x, y, pw, ph);
}

// Use event.pageX / event.pageY here

// Rect(10, 50, 100, 200);
let iy = 0;
let Speed = 10;
let xSpeed = 3;
let ySpeed = 2;
function playGame() {
  if (iy + Speed < ym) {
    iy += Speed;
  } else if (iy - Speed > ym) {
    iy -= Speed;
  }
  if (iy - ballH / 2 < 0) {
    iy = ballH / 2;
  } else if (iy + ballH / 2 > CH) {
    iy = CH - ballH / 2;
  }
  stuff();
  requestAnimationFrame(playGame);
}
playGame();
