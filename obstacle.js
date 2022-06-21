class Obstacle {
  constructor() {
    this.height = 50;
    this.width = 50;
    this.top = random(150, 500 - this.height - 5);
    this.left = CANVAS_WIDTH + 5;
    this.speed = random(1, 5);
  }

  // preload() {
  //   this.img = loadImage("./images/pigeon.png");
  // }

  drawObstacle() {
    //image(this.img, this.left, this.top, this.width, this.height);
    rect(this.left, this.top, this.width, this.height);
    // loadImage("./images/pigeon.png", (img) => {
    //   image(img, this.left, this.top, this.width, this.height);
    // });

    this.left -= this.speed;
  }
}
