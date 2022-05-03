class Player {
  constructor() {
    this.nome=null
    this.index=0
    this.x=0
    this.y=0
  }
addplayer(){
  var jogador="contjogadores/jogador"+this.index
  database.ref(jogador).set({
    nome:this.nome,x:this.x,y:this.y

  })
}
pegandoinformacao(){
  var banco_research = database.ref("jogadores")
  banco_research.on("value",function(data){
    jogadores=data.val()
  
  })
    }
    atualizar(valor){
      database.ref("/").update({
        jogadores: valor
      })
    }
  atualizarXY(){
    var jogador="contjogadores/jogador"+this.index
    database.ref(jogador).update({
      x:this.x,y:this.y})
  }
  static localização (){
    var banco_research = database.ref("jogadores")
    banco_research.on("value",data =>{
      allplayers=data.val()})
  }
  }