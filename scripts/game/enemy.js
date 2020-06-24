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
    speed,
    delay
  ) {
    super(
      matrix,
      image,
      x,
      y,
      variationY,
      widthI,
      heightI,
      spriteWidth,
      spriteHeight
    );

    this.speed = speed;
    this.delay = delay;
    this.x = width + this.delay;
  }

  move() {
    this.x -= this.speed;
    if (this.x < -this.widthI - this.delay) {
      this.x = width;
    }
  }
}
