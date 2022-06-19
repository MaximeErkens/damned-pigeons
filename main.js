let img;

function setup() {
  createCanvas(1000, 750);
}

function draw() {
  background("lightblue");
  image(img, 0, 0, 100, 100);
}

function preload() {
  img = loadImage("./images/cat.png");
}
