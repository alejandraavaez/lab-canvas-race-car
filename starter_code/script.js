let interval
let frames = 0
const obstaculos = []

  const canvas = document.getElementById('race-car')
  const ctx = canvas.getContext('2d')
  
  class backgroung{
    constructor(){
      this.x = 0
      this.y = 0
      this.width = canvas.width
      this.heigth = canvas.height
    }
    draw(){
      ctx.fillStyle = "green"
      ctx.fillRect(0, 0, 20,800)
      ctx.fillStyle ="gray"
      ctx.fillRect(20, 0, 10,800)
      ctx.fillStyle ="white"
      ctx.fillRect(30, 0, 10,800)
      ctx.fillStyle ="gray"
      ctx.fillRect(40, 0, 320,800)
      ctx.fillStyle ="white"
      ctx.fillRect(360, 0, 10,800)
      ctx.fillStyle ="gray"
      ctx.fillRect(370, 0, 10,800)
      ctx.fillStyle = "green"
      ctx.fillRect(380, 0, 20,800)
      ctx.fillStyle = "white"
      ctx.fillRect(200, 0, 5, 15)
      ctx.fillStyle = "white"
      ctx.fillRect(200, 20, 5, 15)
      ctx.fillStyle = "white"
      ctx.fillRect(200, 55, 5, 15)
      ctx.fillStyle = "white"
      ctx.fillRect(200, 85, 5, 15)
      ctx.fillStyle = "white"
      ctx.fillRect(200, 105, 5, 15)
    }

  }

  class carro{
    constructor(x,y){
      this.x = x
      this.y = y
      this.width = 400
      this.height = 800
      this.sx = 180
      this.img = new Image()
      this.img.src = "./images/car.png"
    }
    drawCar(){
      // ctx.drawImage(this.img,200,700,40,60)
      if( this.sx >= 400) this.sx = 0
      ctx.drawImage(
        this.img,
        this.sx, // es la posicion en x y se va a cambiar 
        710,// es la posicion en y y es fija
        40,// tamaño
        80,
      )
    }
    goRigth(){
      this.x += 10
      this.sx += 10
    }
    goLeft() {
      this.x -= 10
      this.sx -=10
    }
  }

  class obstacle{
    constructor(x,y){
      this.x = x
      this.y = y
      this.heigth = 20
    }
    drawObstacle(){
      ctx.fillStyle = "red"
      ctx.fillRect(this.x,this.y,30,20)
    }
  }
 

  const background = new backgroung()
  const player = new carro(200, 700)
  const obstaculo = new obstacle()



window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };
  document.onkeydown = e => {
    switch (e.keyCode){
      case 39:
        return player.goRigth()
      case 37:
        return player.goLeft()
    }
  }

  function startGame() {
    if(interval) return
    interval = setInterval(update, 1000/ 60)
  }
  function drawObstaculos() {
    generateObstacles()
    obstaculos.forEach(e => e.drawObstacle())
  }
  function generateObstacles(){
    if(frames % 100 === 0){
      let rndX = Math.random() * (350 - 50) + 50
      let rndY = Math.random() * 700
      obstaculos.push(new obstacle(rndX, rndY))
    }
  }

  function update() {
    frames++
    ctx.clearRect(0,0, canvas.width, canvas.height)
    background.draw()
    drawObstaculos()
    player.drawCar()
  }
};
