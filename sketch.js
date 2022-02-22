const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImage1;
var fishermanImage, fisherman;
var blueFish, blueFishImage;
var yellowFish, yellowFishImage;
var blueArray=[];
  
function preload() {
  backgroundImage1 = loadImage("assets/Background.png");
  fishermanImage = loadImage("assets/Fisherman.png");
  blueFishImage = loadImage("assets/Bluefish.png");
  yellowFishImage = loadImage("assets/Yellowfish.png");
}

function setup() {
  createCanvas(800,600);

  engine = Engine.create();
  world = engine.world;

  //blueFishGroup=createGroup();
  //yellowFishGroup=createGroup();

  blueFish=createSprite(900,200,50,50);
  blueFish.addImage(blueFishImage);
  blueFish.scale=0.25;
  blueFish.velocityX=-3;
  //blueFishGroup.add(blueFish);

  yellowFish=createSprite(900,500,50,50);
  yellowFish.addImage(yellowFishImage);
  yellowFish.scale=0.15;
  yellowFish.velocityX=-5;
  //yellowFishGroup.add(yellowFish);

  

  //yellowFish=createSprite()
}


function draw() {
  background(backgroundImage1);

  //showBlueFish();
 drawSprites();
}

/*function showBlueFish(){
  if(blueArray.length>0){

    if(
      blueArray[blueArray.length-1]===undefined||
      blueArray[blueArray.length-1].body.position.x<width-300
    ){
      var positions=[-40,-60,-20,-80];
      var position=random(positions);
      blueFish = new BlueFish(width,height-60,170,170,position);
     blueArray.push(blueFish);
    }

    for(var i=0;i<blueArray.length;i++){

      if(blueArray[i]){
    Matter.Body.setVelocity(blueArray[i].body,{x:-0.9,y:0});
      }

    blueArray[i].display();
    }
  }
  else{
    blueFish = new BlueFish(width,height-60,170,170,-80);
    blueArray.push(blueFish);
  }
}*/