class Life {
  constructor(maxLife, initialLife) {
    this.maxLife = maxLife;
    this.initialLife = initialLife;
    this.lives = this.initialLife;
    this.width = 25;
    this.height = 25;
    this.initialX = 20;
    this.initialY = 20;
  }

  draw() {
    for (let i = 0; i < this.lives; i++) {
      const margin = i * 10;
      const position = this.initialX * (1 + i);
      image(imageLife, position + margin, this.initialY, this.width, this.height);
    }
  }

  addLife() {
    if (this.lives <= this.maxLife) {
      this.lives++;
    }
  }

  loseLife() {
    this.lives--;
  }
}
