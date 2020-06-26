class Character extends Animation {
  constructor(
    matrix,
    image,
    x,
    y,
    variationY,
    widthI,
    heightI,
    spriteWidth,
    spriteHeight,
    characterJump
  ) {
    super(matrix, image, x, y, variationY, widthI, heightI, spriteWidth, spriteHeight);

    this.characterJump = characterJump;
    this.initialY = y - this.variationY;
    this.jumpVelocity = 0;
    this.gravity = 6;
    this.doubleJump = 2;
    this.isInvencible = false;
  }

  jump() {
    if (this.doubleJump > 0) {
      this.jumpVelocity = -50;
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

  invencible() {
    this.isInvencible = true;
    setTimeout(() => {
      this.isInvencible = false;
    }, 1000);
  }

  collision(enemy) {
    if (this.isInvencible) {
      return false;
    }
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
