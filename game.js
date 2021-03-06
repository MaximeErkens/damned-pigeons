class Game {
  constructor() {
    this.player = new Player();
    this.obstacles = [];
    this.background = new Background();
    this.score = 0;
  }

  preload() {
    this.player.preload();
    this.background.preload();
    this.obstacleImage = loadImage("images/pigeon_small.png");
    backgroundMusicLevel = loadSound("sound/duifopdam2.mp3");
    laserSound = loadSound("sound/laser.mp3");
    catHitSound = loadSound("sound/catHit.mp3");
    pigeonHitSound = loadSound("sound/pigeonHit.mp3");
    pigeonVictorySong = loadSound("sound/pigeonVictory2.mp3");
    catJumpSound = loadSound("sound/catJump.mp3");
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
        pigeonHitSound.play();
        pigeonHitSound.setVolume(0.6);
        obstacle.killPigeon();
        this.score++;
      }

      scoreSpan.innerText = " " + this.score + " points      ";

      if (this.CatDoveCollision(obstacle)) {
        this.player.makeCatHalfOpaqueOnCollision();
        obstacle.killPigeon();
        catHitSound.play();
        catHitSound.setVolume(0.6);
        this.player.lives--;
        if (this.player.lives <= -1) {
          backgroundMusicLevel.stop();
          pigeonVictorySong.play();
          pigeonVictorySong.loop();
          pigeonVictorySong.setVolume(0.1);
          this.noLoop();
        }
      }

      livesSpan.innerText = " " + this.player.lives;

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

  CatDoveCollision(pigeon) {
    // player = A
    // obstacle = B
    const bottomOfA = this.player.top + this.player.height;
    const topOfB = pigeon.top;
    const isBottomOfABiggerThenTopOfB = bottomOfA > topOfB;

    const topOfA = this.player.top;
    const bottomOfB = pigeon.height + pigeon.top;

    const isTopOfASmallerThanBottomOfB = topOfA <= bottomOfB;

    const leftOfA = this.player.left;
    const rightOfB = pigeon.left + pigeon.width;
    const isLeftOfASmallerThanRightOfB = leftOfA <= rightOfB;

    const rightOfA = this.player.width + this.player.left;
    const leftOfB = pigeon.left;
    const isRightOfABiggerThanLeftOfB = rightOfA >= leftOfB;

    return (
      isBottomOfABiggerThenTopOfB &&
      isTopOfASmallerThanBottomOfB &&
      isLeftOfASmallerThanRightOfB &&
      isRightOfABiggerThanLeftOfB
    );
  }
}
