class Score {
  constructor() {
    this.score = 0;
  }

  showScore() {
    textAlign(RIGHT);
    fill("#FFF");
    textSize(100);
    text(parseInt(this.score), width - 30, 100);
  }

  addScore() {
    this.score += 0.2;
  }
}
