var movingRect,fixedRect

function setup() {
  createCanvas(1200,800);
  movingRect = createSprite(400, 200, 50, 50);
  movingRect.shapeColor = "green"
 movingRect.velocityX = -3
  

  fixedRect = createSprite(200,200,50,50)
  fixedRect.shapeColor = "blue"
  fixedRect.velocityX = 3
}

function draw() {
  background(255,255,255);  

  //movingRect.x = World.mouseX
  //movingRect.y = World.mouseY

  if(movingRect.x-fixedRect.x < movingRect.width/2 + fixedRect.width/2 && 
    fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2) {
   fixedRect.velocityX = fixedRect.velocityX * -1
   movingRect.velocityX = movingRect.velocityX * -1
  }

 if(movingRect.y-fixedRect.y < movingRect.height/2 + fixedRect.height/2 &&
    fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2){
      fixedRect.velocityY = fixedRect.velocityY * -1
      movingRect.velocityY = movingRect.velocityY * -1
      
    }
  drawSprites();
}