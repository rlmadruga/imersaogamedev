let imageBackground;
let imageCharacter;
let imageEnemy;
let imageGameOver;
let background;
let backgroundMusic;
let character;
let characterJump;
let enemy;
let isGameOver;

const enemyMatrix = [
  [0, 0],
  [104, 0],
  [208, 0],
  [312, 0],
  [0, 104],
  [104, 104],
  [208, 104],
  [312, 104],
  [0, 208],
  [104, 208],
  [208, 208],
  [312, 208],
  [0, 312],
  [104, 312],
  [208, 312],
  [312, 312],
  [0, 418],
  [104, 418],
  [208, 418],
  [312, 418],
  [0, 522],
  [104, 522],
  [208, 522],
  [312, 522],
  [0, 626],
  [104, 626],
  [208, 626],
  [312, 626],
];

const characterMatrix = [
  [0, 0],
  [220, 0],
  [440, 0],
  [660, 0],
  [0, 270],
  [220, 270],
  [440, 270],
  [660, 270],
  [0, 540],
  [220, 540],
  [440, 540],
  [660, 540],
  [0, 810],
  [220, 810],
  [440, 810],
  [660, 810],
];

function preload() {
  imageBackground = loadImage("assets/assets/imagens/cenario/floresta.png");
  imageCharacter = loadImage("assets/assets/imagens/personagem/correndo.png");
  imageEnemy = loadImage("assets/assets/imagens/inimigos/gotinha.png");
  imageGameOver = loadImage("/assets/assets/imagens/assets/game-over.png");
  backgroundMusic = loadSound("assets/assets/sons/trilha_jogo.mp3");
  characterJump = loadSound("/assets/assets/sons/somPulo.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  isGameOver = false;
  background = new Background(imageBackground, 3);

  character = new Character(
    characterMatrix,
    imageCharacter,
    0,
    height - 135,
    110,
    135,
    220,
    270,
    characterJump
  );

  enemy = new Enemy(
    enemyMatrix,
    imageEnemy,
    width - 52,
    height - 52,
    52,
    52,
    104,
    104
  );
  frameRate(40);
  backgroundMusic.loop();
}

function keyPressed() {
  if (
    (isGameOver === false && key === "ArrowUp") ||
    keyCode === 32 ||
    key === "w"
  ) {
    character.jump();
  }
}

function draw() {
  background.show();
  background.move();
  character.show();
  character.applyGravity();
  enemy.show();
  enemy.move();

  if (character.collision(enemy)) {
    backgroundMusic.stop();
    isGameOver = true;
    image(imageGameOver, windowWidth / 2 - 250, windowHeight / 2);
    noLoop();
  }
}
