var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;
	//fairy.debug = true;
	fairy.setCollider("rectangle",0,0,1000,100);

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;
	//star.debug = true;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  drawSprites();
	if(keyDown("right")){
		fairy.velocityX = 5;
	}
	if(keyWentUp("right")){
		fairy.velocityX = 0;
	}
	if(keyDown("left")){
		fairy.velocityX = -5;
	}
	if(keyWentUp("left")){
		fairy.velocityX = 0;
	}

	if(fairy.isTouching(star)){
		star.velocityY = 0;
		fairyVoice.stop();
	}
}

function keyPressed() {
	starBody = {isStatic:false}
	star.velocityY = 4;
	//write code here
}
