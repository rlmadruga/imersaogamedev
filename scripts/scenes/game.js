class Game {
  constructor() {
    this.activeEnemy = 0;
  }

  setup() {
    isGameOver = false;
    background = new Background(imageBackground, 3);
    score = new Score();

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
      10,
      100
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
      10,
      100
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
      10,
      100
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
    character.show();
    character.applyGravity();

    const enemies = enemyArr[this.activeEnemy];
    const visibleEnemy = enemies.x < -enemies.widthI;

    enemies.show();
    enemies.move();

    if (visibleEnemy) {
      this.activeEnemy++;
      if (this.activeEnemy > 2) {
        this.activeEnemy = 0;
      }
      enemies.speed = parseInt(random(10, 30));
    }

    if (character.collision(enemies)) {
      backgroundMusic.stop();
      isGameOver = true;
      image(imageGameOver, windowWidth / 2 - 250, windowHeight / 2);
      noLoop();
    }
  }
}
