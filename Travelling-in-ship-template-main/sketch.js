var sea,ship;
var seaImg,shipImg;
var bird,bami;

function preload(){
  seaImg = loadImage("sea.png");
  shipImg1=loadAnimation("sea.png")
//Choose the correct option by uncommenting the right line to load the animation for ship.
  shipImg1 = loadAnimation("ship-1.png","ship-1.png","ship-2.png","ship-1.png");
  bami = loadAnimation("1-removebg-preview.png","2-removebg-preview.png","3-removebg-preview.png","4-removebg-preview.png","5__1_-removebg-preview.png","6-removebg-preview.png","7-removebg-preview.png","8-removebg-preview.png","9-removebg-preview.png","10-removebg-preview.png");
  

}

function setup(){
  createCanvas(400,400);
  background("blue");

  

  // Moving background
  sea=createSprite(400,200,200);
  sea.addImage(seaImg);
  sea.scale=0.3;


  
  ship = createSprite(130,200,30,30);
  ship.addAnimation("movingShip",shipImg1);
  ship.scale =0.25;

  bird=createSprite(40, 50, 20, 20);
  bird.addAnimation("anime",bami);
  bird.scale=0.3;
}

function draw() {
  background(0);
  
//Uncomment the correct line to make the background move to create a forward moving effect for the boat.
  
  sea.velocityX = 3;
  

  
    
  drawSprites();
}
