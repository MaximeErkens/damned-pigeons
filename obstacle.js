class Obstacle {
  constructor(img) {
    this.height = 75;
    this.width = 75;
    this.top = random(150, 500 - this.height - 5);
    this.left = CANVAS_WIDTH + 5;
    this.speed = random(1, 5);
    this.img = img;
    this.hasBeenCompletelyObliteratedByOurFelineCharacter = false;
  }

  drawObstacle() {
    image(this.img, this.left, this.top, this.width, this.height);
    //fill(255, 50);
    //rect(this.left, this.top, this.width, this.height);
    this.left -= this.speed;
  }

  killPigeon() {
    this.hasBeenCompletelyObliteratedByOurFelineCharacter = true;
  }
}
