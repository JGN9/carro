var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player;
var playerCount;
var jogadores
var estado_jogo
var carro1
var carro2
var car1
var car2
var pista
var allplayers
var grupocarro=[]
function preload() {
  backgroundImage = loadImage("./assets/planodefundo.png");
  car1=loadImage("./assets/car4.png")
  car2=loadImage("./assets/car1b.png")
  pista=loadImage ("./assets/track.jpg")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.start();
game.pegandoinformacao()
}

function draw() {
  background(backgroundImage);
  if (jogadores == 2){
  game.atualizar(1)}
  if (estado_jogo == 1) {
    game.js()
  } 
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
