class Animation {
  constructor(matrix, image, x, y, widthI, heightI, spriteWidth, spriteHeight) {
    this.matrix = matrix;
    this.image = image;
    this.x = x;
    this.y = y;
    this.widthI = widthI;
    this.heightI = heightI;
    this.spriteWidth = spriteWidth;
    this.spriteHeight = spriteHeight;
    this.actualFrame = 0;
  }

  show() {
    image(
      this.image,
      this.x,
      this.y,
      this.widthI,
      this.heightI,
      this.matrix[this.actualFrame][0],
      this.matrix[this.actualFrame][1],
      this.spriteWidth,
      this.spriteHeight
    );

    this.animation();
  }

  animation() {
    this.actualFrame++;
    if (this.actualFrame >= this.matrix.length - 1) {
      this.actualFrame = 0;
    }
  }
}
