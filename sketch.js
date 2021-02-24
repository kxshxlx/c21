var fixedRect, movingRect,fixedRect1,movingRect1;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  fixedRect1 = createSprite(200,400,50,80);
  fixedRect1.shapeColor = "red";
  fixedRect1.debug = true;
  movingRect1 = createSprite(550,400,50,80);
  movingRect1.shapeColor = "orange";
  movingRect1.debug = true;
  
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  //movingRect1.x = World.mouseX;
  //movingRect1.y = World.mouseY;
if(isTouching(movingRect,fixedRect))
{
  movingRect.shapeColor="blue";
  fixedRect.shapeColor="blue";
}
else if(isTouching(movingRect,fixedRect1))
{
  movingRect.shapeColor="purple";
  fixedRect1.shapeColor="purple";
}
else if(isTouching(movingRect,movingRect1))
{
  movingRect1.shapeColor="red";
}
else
{
  movingRect.shapeColor="green";
  fixedRect.shapeColor="green";
  fixedRect1.shapeColor = "red";
  movingRect1.shapeColor="orange";

}

drawSprites();
}

