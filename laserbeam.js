class Laserbeam {
  constructor() {
    this.left = 0;
    this.top = 0;
    this.width = 0;
    this.isAttached = true;
    this.height = 5;
  }

  followCatEyes(left, top) {
    if (!this.isAttached) {
      return;
    }
    this.left = left;
    this.top = top;
    this.width += 2;
  }

  drawLaserbeam(isStillAttachedToCat, functionFromParent) {
    if (!isStillAttachedToCat) {
      this.isAttached = false;
    }

    rect(this.left, this.top, this.width, this.height);
    fill("RGBA(121, 254, 12, 0.5)");

    if (!this.isAttached) {
      this.left += 2;
    }

    if (
      this.isLaserbeamOffCanvas() &&
      typeof functionFromParent === "function"
    ) {
      functionFromParent();
    }
  }

  isLaserbeamOffCanvas() {
    return this.left >= CANVAS_WIDTH;
  }
}
