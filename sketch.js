
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	fill(255,0,0);
	Ground = new Base(width/2, 50, width-100, 30);

	Bob1 = new Bob(180, 400, 50);
  Bob2 = new Bob(280, 400, 50);
  Bob3 = new Bob(380, 400, 50);
  Bob4 = new Bob(480, 400, 50);
  Bob5 = new Bob(580, 400, 50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);

  background(0);

  strokeWeight(5);
  stroke(255);
  line(180, 100, Bob1.body.position.x, Bob1.body.position.y-50);
  line(280, 100, Bob2.body.position.x, Bob2.body.position.y-50);
  line(380, 100, Bob3.body.position.x, Bob3.body.position.y-50);
  line(480, 100, Bob4.body.position.x, Bob4.body.position.y-50);
  line(580, 100, Bob5.body.position.x, Bob5.body.position.y-50);

  stroke(255,0,0);
  Ground.display();

  Bob1.display();
  Bob2.display();
  Bob3.display();
  Bob4.display();
  Bob5.display();

}

function keyPressed(){
  if(keyCode === UP_ARROW){
  
    Matter.Body.applyForce(Bob1.body, Bob1.body.position, {x:-15, y:-15});
  }
}