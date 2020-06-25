class Button {
  constructor(text, x, y) {
    this.text = text;
    this.x = x;
    this.y = y;
    this.button = createButton(this.text);
    this.button.addClass("button-start");
    this.button.mousePressed(() => this._changeScene());
  }

  draw() {
    this.button.position(this.x, this.y);
    this.button.center();
  }

  _changeScene() {
    activeScene = "game";
    this.button.remove();
  }
}
