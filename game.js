class Game {
  constructor() {
    this.player = new Player();
    this.obstacles = [];
    this.background = new Background();
  }

  preload() {
    this.player.preload();
    this.background.preload();
    this.obstacleImage = loadImage("images/pigeon.png");
  }

  play() {
    this.background.drawBackground();
    this.player.drawPlayer();

    if (frameCount % 75 === 0) {
      this.obstacles.push(new Obstacle(this.obstacleImage));
    }

    this.obstacles = this.obstacles.filter((obstacle) => {
      obstacle.drawObstacle();
      if (this.laserDoveCollision(obstacle)) {
        obstacle.killPigeon();
      }

      return (
        obstacle.left >= -obstacle.width &&
        !obstacle.hasBeenCompletelyObliteratedByOurFelineCharacter
      );
    });
  }

  keyPressed() {
    this.player.keyPressed();
  }

  laserDoveCollision(pigeon) {
    if (!this.player.laserbeam) {
      return false;
    }

    const laser = this.player.laserbeam;

    const bottomOfA = laser.top + laser.height;
    const topOfB = pigeon.top;
    const isBottomOfABiggerThenTopOfB = bottomOfA > topOfB;

    const topOfA = laser.top;
    const bottomOfB = pigeon.height + pigeon.top;
    const isTopOfASmallerThanBottomOfB = topOfA <= bottomOfB;

    const leftOfA = laser.left;
    const rightOfB = pigeon.left + pigeon.width;
    const isLeftOfASmallerThanRightOfB = leftOfA <= rightOfB;

    const rightOfA = laser.width + laser.left;
    const leftOfB = pigeon.left;
    const isRightOfABiggerThanLeftOfB = rightOfA >= leftOfB;

    return (
      isBottomOfABiggerThenTopOfB &&
      isTopOfASmallerThanBottomOfB &&
      isLeftOfASmallerThanRightOfB &&
      isRightOfABiggerThanLeftOfB
    );
  }

  // isCatAndDoveColliding() {

  // }
}
