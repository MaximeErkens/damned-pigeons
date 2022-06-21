class Player {
  constructor() {
    this.left = 0;
    this.top = 0;
    this.width = 125;
    this.height = 150;
    this.velocity = 0;
    this.floor = 400;
    this.jumpCount = 0;
  }

  preload() {
    this.img = loadImage("images/kitten.png");
  }

  keyPressed() {
    if (keyCode === ARROW_UP) {
      this.jump();
    }
    if (keyCode === ARROW_RIGHT) {
      this.moveToTheRight();
    }
    if (keyCode === ARROW_LEFT) {
      this.moveToTheLeft();
    }
  }

  drawPlayer() {
    this.velocity += GRAVITY;
    this.top += this.velocity;

    image(this.img, this.left, this.top, this.width, this.height);

    if (this.hasReachedTheGround()) {
      this.top = this.floor;
      this.velocity = 0;
      this.jumpCount = 0;
    }
  }

  hasReachedTheGround() {
    return this.top >= this.floor;
  }

  jump() {
    if (this.jumpCount === 2) {
      return;
    }
    this.top -= 45;
    this.velocity -= 5;
    this.jumpCount++;
  }

  moveToTheRight() {
    this.left += 22;
  }

  moveToTheLeft() {
    this.left -= 22;
  }
}
