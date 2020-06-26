class Enemy extends Animation {
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
    speed
  ) {
    super(matrix, image, x, y, variationY, widthI, heightI, spriteWidth, spriteHeight);

    this.speed = speed;
    this.x = width;
  }

  move() {
    this.x -= this.speed;
  }

  spawn() {
    this.x = width;
  }
}
