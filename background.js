class Background {
  constructor() {
    this.left = 0;
  }

  preload() {
    this.img = loadImage("/images/dam_square.jpg");
  }

  drawBackground() {
    this.img(this.img);
  }
}
