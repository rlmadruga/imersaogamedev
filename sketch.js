let imageBackground;
let imageCharacter;
let background;
let backgroundMusic;
let character;

function preload() {
  imageBackground = loadImage("assets/assets/imagens/cenario/floresta.png");
  imageCharacter = loadImage("assets/assets/imagens/personagem/correndo.png");
  backgroundMusic = loadSound("assets/assets/sons/trilha_jogo.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background = new Background(imageBackground, 3);
  frameRate(40);
  character = new Character(imageCharacter);
  backgroundMusic.loop();
}

function draw() {
  background.show();
  background.move();
  character.show();
}
