class Character extends Animation {
  constructor(
    matrix,
    image,
    x,
    y,
    widthI,
    heightI,
    spriteWidth,
    spriteHeight,
    characterJump
  ) {
    super(matrix, image, x, y, widthI, heightI, spriteWidth, spriteHeight);

    this.characterJump = characterJump;
    this.initialY = y;
    this.jumpVelocity = 0;
    this.gravity = 3;
    this.doubleJump = 2;
  }

  jump() {
    if (this.doubleJump > 0) {
      this.jumpVelocity = -30;
      this.characterJump.play();
      this.doubleJump--;
    }
  }

  applyGravity() {
    this.y += this.jumpVelocity;
    this.jumpVelocity += this.gravity;

    if (this.y > this.initialY) {
      this.y = this.initialY;
      this.doubleJump = 2;
    }
  }

  collision(enemy) {
    const precision = 0.7;
    const isColliding = collideRectRect(
      this.x,
      this.y,
      this.widthI * precision,
      this.heightI * precision,
      enemy.x,
      enemy.y,
      enemy.widthI * precision,
      enemy.heightI * precision
    );
    return isColliding;
  }
}
