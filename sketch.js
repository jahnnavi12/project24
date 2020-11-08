var rect1,rect2,rect3,paper;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);
	rectMode(CENTER);

	rect1=createSprite(590,360,20,50);
	rect1.shapeColor=color(255,0,0);
	rect2=createSprite(770,360,20,50);
	rect2.shapeColor=color(255,0,0);
	rect3=createSprite(680,380,200,20);
	rect3.shapeColor=color(255,0,0);

	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
	ground = new Ground(width/2,390,width,10);
	paper=new Paper(100,300,10);

	rect3 = Bodies.rectangle(width/2, 400, width, 10 , {isStatic:true} );
	World.add(world,rect3);

	

	
  
}


function draw() {
  background(0);
  rectMode(CENTER);
  paper.display();
  ground.display();
  keypressed();
  drawSprites();
 
}

function keypressed(){
	if(keyCode === UP_ARROW){
	Matter.Body.applyForce(paper.body,paper.body.position,{x:12,y:-5})
}
}


