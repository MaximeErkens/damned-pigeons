class Laserbeam {
  constructor() {
    this.left = 0;
    this.top = 0;
    this.width = 0;
    this.isAttached = true;
  }

  followCatEyes(left, top) {
    if (!this.isAttached) {
      return;
    }
    this.left = left;
    this.top = top;
    this.width = +2;
  }

  drawLaserbeam(isStillAttachedToCat, functionFromParent) {
    if (!isStillAttachedToCat) {
      this.isAttached = false;
    }

    rect(this.left, this.top, this.width, 50);

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
