function setup() {
  createCanvas(100, 100, WEBGL);
}

function draw() {
  background(255);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  box(50);
}