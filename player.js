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

    if (keyIsDown(SPACE_BAR)) {
      this.createLaserbeam();
      this.moveLaserbeamOnEnter();
    } else {
      this.begoneLaserbeam();
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
    if (this.left >= CANVAS_WIDTH - this.width) {
      return;
    }
    this.left += 22;
  }

  moveToTheLeft() {
    if (this.left <= 0) {
      return;
    }
    this.left -= 22;
  }

  createLaserbeam() {
    if (!this.laserbeam) {
      this.laserbeam = new Laserbeam();
    }
  }

  catEyeLocation() {
    return {
      top: this.top + 35,
      left: this.left + 80,
    };
  }

  moveLaserbeamOnEnter() {
    const eyeLocation = this.catEyeLocation();
    this.laserbeam.followCatEyes(eyeLocation.left, eyeLocation.top);

    const isLaserbeamStillAttachedToCatEyes = true;
    this.laserbeam.drawLaserbeam(isLaserbeamStillAttachedToCatEyes);
  }

  tookAntiLaserbeam() {
    return () => {
      if (this.laserbeam) {
        this.laserbeam = null;
      }
    };
  }

  begoneLaserbeam() {
    if (this.laserbeam) {
      const noLongerAtCatEyes = false;
      this.laserbeam.drawLaserbeam(noLongerAtCatEyes, this.tookAntiLaserbeam());
    }
  }
}
