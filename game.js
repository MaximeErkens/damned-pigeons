class Game {
  constructor() {
    this.player = new Player();
    this.obstacles = [];
  }

  preload() {
    this.player.preload();
  }

  play() {
    this.player.drawPlayer();

    if (frameCount % 75 === 0) {
      this.obstacles.push(new Obstacle());
    }

    this.obstacles = this.obstacles.filter((obstacle) => {
      //obstacle.preload();
      obstacle.drawObstacle();

      return obstacle.left >= -obstacle.width;
    });
  }
}
