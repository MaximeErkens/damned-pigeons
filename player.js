class Player {
  constructor() {}

  preload() {
    this.img = loadImage("./images/cat.png");
  }

  drawPlayer() {
    image(this.img, 0, 0, 100, 100);
  }
}
