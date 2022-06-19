const game = new Game();

function setup() {
  createCanvas(750, 500);
}

function draw() {
  background("lightblue");
  game.play();
}

function preload() {
  game.preload();
}
