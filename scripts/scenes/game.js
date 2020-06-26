class Game {
  constructor() {
    this.index = 0;
    this.map = mapJSON.map;
  }

  setup() {
    isGameOver = false;
    background = new Background(imageBackground, 3);
    score = new Score();
    life = new Life(mapJSON.config.maxLife, mapJSON.config.initialLife);

    character = new Character(
      characterMatrix,
      imageCharacter,
      0,
      height - 135,
      30,
      110,
      135,
      220,
      270,
      characterJump
    );

    const enemy = new Enemy(
      enemyMatrix,
      imageEnemy,
      width - 52,
      height - 52,
      30,
      52,
      52,
      104,
      104,
      10
    );

    const enTroll = new Enemy(
      enTrollMatrix,
      imageEnTroll,
      width,
      height - 170,
      30,
      200,
      200,
      400,
      400,
      10
    );

    const enFlying = new Enemy(
      enFlyingMatrix,
      imageEnFlying,
      width - 52,
      height - 200,
      200,
      100,
      75,
      200,
      150,
      10
    );

    enemyArr.push(enemy);
    enemyArr.push(enTroll);
    enemyArr.push(enFlying);
  }

  keyPressed(key) {
    if (isGameOver === false && (key === "ArrowUp" || keyCode === 32 || key === "w")) {
      character.jump();
    }
  }

  draw() {
    background.show();
    background.move();
    score.showScore();
    score.addScore();
    life.draw();
    character.show();
    character.applyGravity();

    const line = this.map[this.index];
    const enemies = enemyArr[line.enemy];
    const visibleEnemy = enemies.x < -enemies.widthI;

    enemies.speed = line.speed;
    enemies.show();
    enemies.move();

    if (visibleEnemy) {
      this.index++;
      enemies.spawn();
      if (this.index > this.map.length - 1) {
        this.index = 0;
      }
    }

    if (character.collision(enemies)) {
      life.loseLife();
      character.invencible();
      if (life.lives === 0) {
        backgroundMusic.stop();
        isGameOver = true;
        image(imageGameOver, windowWidth / 2 - 250, windowHeight / 2);
        noLoop();
      }
    }
  }
}
