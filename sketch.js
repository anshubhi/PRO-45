
var fish,fishI,backI,ground;
var bg;

function preload()
{
fishI = loadImage("fish.png");
backI = loadImage("sea.jpg");
	
}

function setup() {
	createCanvas(1000,1000 );


	

	//Create the Bodies Here.

	bg = createSprite(500,500,1000,1000)
bg.addImage(backI)
bg.scale = 3

fish = createSprite(200,800,20,20);
fish.addImage(fishI);
fish.scale = 0.1;


ground = createSprite(500,950,2000,20)
ground.visible = false;


	
  
}


function draw() {
  
  background("black");
  bg.velocityX = -6;

  if (bg.x < 100){
	bg.x = 500
  
  }


  if(keyWentDown ('UP')&& fish.y>400){
	  fish.y = fish.y-20
  }
  
  if(keyWentDown ('DOWN')&& fish.y<900){
	fish.y = fish.y+10;
}

  
  drawSprites();
 
}



