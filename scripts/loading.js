function preload() {
  imageStart = loadImage("/assets/assets/imagens/assets/telaInicial.png");
  fontStart = loadFont("/assets/assets/imagens/assets/fonteTelaInicial.otf");
  imageBackground = loadImage("assets/assets/imagens/cenario/floresta.png");
  imageCharacter = loadImage("assets/assets/imagens/personagem/correndo.png");
  imageEnemy = loadImage("assets/assets/imagens/inimigos/gotinha.png");
  imageEnTroll = loadImage("/assets/assets/imagens/inimigos/troll.png");
  imageEnFlying = loadImage("/assets/assets/imagens/inimigos/gotinha-voadora.png");
  imageGameOver = loadImage("/assets/assets/imagens/assets/game-over.png");
  backgroundMusic = loadSound("assets/assets/sons/trilha_jogo.mp3");
  characterJump = loadSound("/assets/assets/sons/somPulo.mp3");
}
