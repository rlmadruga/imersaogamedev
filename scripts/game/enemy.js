class Enemy extends Animation {
  constructor(matrix, image, x, y, widthI, heightI, spriteWidth, spriteHeight) {
    super(matrix, image, x, y, widthI, heightI, spriteWidth, spriteHeight);

    this.speed = 10;
  }

  move() {
    this.x -= this.speed;
    if (this.x < -this.widthI) {
      this.x = width;
    }
  }
}
