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

      return obstacle.left >= -obstacle.width;
    });
  }

  keyPressed() {
    this.player.keyPressed();
  }
}
