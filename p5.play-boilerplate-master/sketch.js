var fixedRect,movingRect
function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(200, 200, 50, 30);
  fixedRect.shapeColor="green";
  fixedRect.debug=true;
  fixedRect.velocityX=2;
  movingRect=createSprite(600,200,50,80);
  movingRect.shapeColor="green";
  movingRect.debug=true;
  movingRect.velocityX=-2;
}

function draw() {
  background(0);  
 // movingRect.x=mouseX;
 // movingRect.y=mouseY;
if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2
  && fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2
  && movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2
  && fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2){
  movingRect.shapeColor="red";
  fixedRect.shapeColor="red";
  movingRect.velocityX=movingRect.velocityX*(-1);
  fixedRect.velocityX=fixedRect.velocityX*(-1);
}else{
  fixedRect.shapeColor="green";
  movingRect.shapeColor="green";
}
  drawSprites();
}