class Background {
  constructor() {
    this.left = 0;
  }

  preload() {
    this.img = loadImage("images/dam_square.jpg");
  }

  drawBackground() {
    image(this.img, 0, 0, 800, 600);
  }
}
