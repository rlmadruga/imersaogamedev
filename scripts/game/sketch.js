function setup() {
  createCanvas(windowWidth, windowHeight);
  backgroundMusic.loop();
  button = new Button("START", width / 2, height / 2);
  start = new Start();
  game = new Game();
  game.setup();
  scenes = {
    game,
    start,
  };
  frameRate(40);
}

function keyPressed() {
  game.keyPressed(key);
}

function draw() {
  scenes[activeScene].draw();
}
