class Game {
  constructor() {}

  start() {
    form = new Form();
    form.display();
    player = new Player();
    jogadores=player.pegandoinformacao()
    carro1=createSprite(windowWidth/2-100, windowHeight/2+200)
    carro2=createSprite(windowWidth/2+100, windowHeight/2+200)
    carro1.addImage(car1)
    carro2.addImage(car2)
    carro1.scale=3
    carro2.scale=3
    grupocarro=[carro1, carro2]
  }
  pegandoinformacao(){
var banco_research = database.ref("estado_jogo")
banco_research.on("value",function(data){
  estado_jogo=data.val()

})
  }
  atualizar(valor){
    database.ref("/").update({
      estado_jogo: valor
    })
  }
js (){
  Player.localização()
  image (pista,0,200-windowHeight*9.2,windowWidth, windowHeight*10)
  
  form.hide()
  var posição=0
  for(var i in allplayers){
    var x=allplayers[i].x
    var y=allplayers[i].y
    grupocarro[posição].position.x=x
    grupocarro[posição].position.y=y
    posição+=1
  }
  this.controles()
  drawSprites()
}
controles (){
  if (keyDown ("w")){player.y+=10
    player.atualizarXY()}
  if (keyDown ("S")){player.y-=10
player.atualizarXY()}
if (keyDown ("a")){player.x-=10
  player.atualizarXY()}
  if (keyDown ("d")){player.x+=10
    player.atualizarXY()}
      



  }
}
