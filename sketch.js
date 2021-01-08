
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1,box2,box3,ball,ground,dustbin;
var ballIMG, dustbinIMG;

function preload()
{
	ballIMG=loadImage("paperIMG.png");
	dustbinIMG=loadImage("dustbingreenIMG.png");
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;
	
	

	 var options={
		 
		isStatic: false,
		restitution: 0.3,
		friction: 0.5,
		density: 1.2
	 }
fill("white");
ball=Bodies.circle(100,650,30,options);
World.add(world,ball);

var options1={
	isStatic:true
}
ground=Bodies.rectangle(600,690,1200,10,options1);
World.add(world,ground);

	

	dustbin=Bodies.rectangle(300,400,100,100,options1);
	World.add(world,dustbin);
	Engine.run(engine);
	//box1=Bodies.rectangle(900,640,20,100,options1);
	//World.add(world,box1);
	//box2=Bodies.rectangle(1100,640,20,100,options1);
	//World.add(world,box2);
	//box3=Bodies.rectangle(1000,680,200,20,options1);
	//World.add(world,box3);
}



function draw() {
  rectMode(CENTER);
  background("pink");
  drawSprites();
  ellipse(ball.position.x,ball.position.y,30);
  rect(ground.position.x,ground.position.y,1200,10);

  //rect(box1.position.x,ground.position.y,1200,10);
  //rect(box2.position.x,ground.position.y,1200,10);
  //rect(box3.position.x,ground.position.y,1200,10);

//box1.display();
//box2.display();
//box3.display();

//rect(dustbin.position.x,dustbin.position.y,100,100);
image(dustbinIMG,dustbin.x,dustbin.y,100,100);
 
}

function keyPressed(){
if(keyCode===UP_ARROW){
	Matter.Body.applyForce(ball,ball.position,{x:185,y:-185});
}

}



