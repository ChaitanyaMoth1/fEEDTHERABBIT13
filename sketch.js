var garden,rabbit;
var gardenImg,rabbitImg;
var apples,appleImg;
var leaf,leafImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x=mouseX

  createApples()
  createLeaves()

  drawSprites();

}

function createApples()
{
if (frameCount % 80===0){

  apples=createSprite(200,100,10,40);
  apples.velocityY =6;
  apples.addImage(appleImg);
  apples.scale = 0.09;
  apples.x=Math.round(random(10,400))

  console.log(rabbit.depth)
  apples.depth=rabbit.depth;
  apples.depth=rabbit.depth+1;

  apples.lifetime=50;
}
}


function createLeaves(){
if(frameCount % 80===0){
leaf=createSprite(300,100,10,30);
leaf.velocityY= 3;
leaf.addImage(leafImg);
leaf.scale=0.09;
leaf.x=Math.round(random(10,400))

leaf.depth=rabbit.depth;
rabbit.depth=rabbit.depth+1;
leaf.lifetime=100;
}
}