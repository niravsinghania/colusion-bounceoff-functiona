var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  movingRect.velocityX = -1
  fixedRect.velocityX = +1
  movingRect.velocityY= -1
  fixedRect.velocityY= +1
 if(isTouching(movingRect,fixedRect)){
   movingRect.shapeColor="red"
   fixedRect.shapeColor="red"
 }
 else{
   movingRect.shapeColor="green";
   fixedRect.shapeColor="green";
 }
 // bounceOff(movingRect,fixedRect);
  drawSprites();
}
