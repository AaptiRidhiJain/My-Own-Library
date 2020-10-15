var fixedRect, movingRect;
var object1,object2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  fixedRect.velocityX = -4;

  movingRect = createSprite(100,400,80,30);
  movingRect.shapeColor = "yellow";
  movingRect.debug = true;
  movingRect.velocityX = 4;
}

function draw() {
  background(0,0,0);  

  bounceOff(movingRect, fixedRect);

  drawSprites();
}