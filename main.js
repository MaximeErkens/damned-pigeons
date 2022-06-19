const game = new Game();

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background("lightblue");
  game.play();
}

function preload() {
  game.preload();
}

function keyPressed() {
  game.keyPressed();
}
