class Obstacle {
  constructor(img) {
    this.height = 150;
    this.width = 150;
    this.top = random(150, 500 - this.height - 5);
    this.left = CANVAS_WIDTH + 5;
    this.speed = random(1, 5);
    this.img = img;
    this.hasBeenCompletelyObliteratedByOurFelineCharacter = false;
  }

  drawObstacle() {
    image(this.img, this.left, this.top, this.width, this.height);

    this.left -= this.speed;
  }

  killPigeon() {
    this.hasBeenCompletelyObliteratedByOurFelineCharacter = true;
  }
}
