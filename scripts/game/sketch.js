let imageBackground;
let imageCharacter;
let imageEnemy;
let imageEnTroll;
let imageEnFlying;
let imageGameOver;
let background;
let backgroundMusic;
let character;
let characterJump;
let enemy;
let enTroll;
let enFlying;
let score;
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

const enTrollMatrix = [
  [0, 0],
  [400, 0],
  [800, 0],
  [1200, 0],
  [1600, 0],
  [0, 400],
  [400, 400],
  [800, 400],
  [1200, 400],
  [1600, 400],
  [0, 800],
  [400, 800],
  [800, 800],
  [1200, 800],
  [1600, 800],
  [0, 1200],
  [400, 1200],
  [800, 1200],
  [1200, 1200],
  [1600, 1200],
  [0, 1600],
  [400, 1600],
  [800, 1600],
  [1200, 1600],
  [1600, 1600],
  [0, 2000],
  [400, 2000],
  [800, 2000],
];

const enFlyingMatrix = [
  [0, 0],
  [200, 0],
  [400, 0],
  [0, 150],
  [200, 150],
  [400, 150],
  [0, 300],
  [200, 300],
  [400, 300],
  [0, 450],
  [200, 450],
  [400, 450],
  [0, 600],
  [200, 600],
  [400, 600],
  [0, 750],
];

const enemyArr = [];

function preload() {
  imageBackground = loadImage("assets/assets/imagens/cenario/floresta.png");
  imageCharacter = loadImage("assets/assets/imagens/personagem/correndo.png");
  imageEnemy = loadImage("assets/assets/imagens/inimigos/gotinha.png");
  imageEnTroll = loadImage("/assets/assets/imagens/inimigos/troll.png");
  imageEnFlying = loadImage("/assets/assets/imagens/inimigos/gotinha-voadora.png");
  imageGameOver = loadImage("/assets/assets/imagens/assets/game-over.png");
  backgroundMusic = loadSound("assets/assets/sons/trilha_jogo.mp3");
  characterJump = loadSound("/assets/assets/sons/somPulo.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  isGameOver = false;
  background = new Background(imageBackground, 3);
  score = new Score();

  character = new Character(
    characterMatrix,
    imageCharacter,
    0,
    height - 135,
    30,
    110,
    135,
    220,
    270,
    characterJump
  );

  const enemy = new Enemy(
    enemyMatrix,
    imageEnemy,
    width - 52,
    height - 52,
    30,
    52,
    52,
    104,
    104,
    10,
    100
  );

  const enTroll = new Enemy(
    enTrollMatrix,
    imageEnTroll,
    width,
    height - 170,
    30,
    200,
    200,
    400,
    400,
    10,
    2500
  );

  const enFlying = new Enemy(
    enFlyingMatrix,
    imageEnFlying,
    width - 52,
    height - 200,
    200,
    100,
    75,
    200,
    150,
    10,
    1500
  );

  enemyArr.push(enemy);
  enemyArr.push(enTroll);
  enemyArr.push(enFlying);
  frameRate(40);
  backgroundMusic.loop();
}

function keyPressed() {
  if (isGameOver === false && (key === "ArrowUp" || keyCode === 32 || key === "w")) {
    character.jump();
  }
}

function draw() {
  background.show();
  background.move();
  score.showScore();
  score.addScore();
  character.show();
  character.applyGravity();

  enemyArr.forEach((enemies) => {
    enemies.show();
    enemies.move();

    if (character.collision(enemies)) {
      backgroundMusic.stop();
      isGameOver = true;
      image(imageGameOver, windowWidth / 2 - 250, windowHeight / 2);
      noLoop();
    }
  });
}
