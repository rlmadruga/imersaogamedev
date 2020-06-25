class Start {
  constructor() {}

  draw() {
    this._backgroundImage();
    this._text();
    this._button();
  }

  _backgroundImage() {
    image(imageStart, 0, 0, width, height);
  }

  _text() {
    textFont(fontStart);
    fill("#3C3D59");
    textAlign(CENTER);
    textSize(50);
    text("The Adventure of", width / 2, height / 3);
    textSize(150);
    text("Hipsta", width / 2, (height / 5) * 2.3);
  }

  _button() {
    button.y = (height / 7) * 5;
    button.draw();
  }
}
