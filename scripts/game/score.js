class Score {
  constructor() {
    this.score = 0;
  }

  showScore() {
    textAlign(RIGHT);
    fill("#FFF");
    textSize(150);
    text(parseInt(this.score), width - 30, 120);
  }

  addScore() {
    this.score += 0.2;
  }
}
