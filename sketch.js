
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var Bob1, Bob2, Bob3, Bob4, Bob5;
var Chain1, Chain2, Chain3, Chain4, Chain5;

function preload()
{
	
}

function setup() {
	createCanvas(900, 500);


	engine = Engine.create();
	world = engine.world;

	fill(255,0,0);
	roof = new Roof(width/2, 50, width-100, 30);

	Bob1 = new Bob(250, 400, 50);
  Bob2 = new Bob(350, 400, 50);
  Bob3 = new Bob(450, 400, 50);
  Bob4 = new Bob(550, 400, 50);
  Bob5 = new Bob(650, 400, 50);

  Chain1 = new Chain(Bob1.body, {x:250, y:roof.body.position.y});
  Chain2 = new Chain(Bob2.body, {x:350, y:roof.body.position.y});
  Chain3 = new Chain(Bob3.body, {x:450, y:roof.body.position.y});
  Chain4 = new Chain(Bob4.body, {x:550, y:roof.body.position.y});
  Chain5 = new Chain(Bob5.body, {x:650, y:roof.body.position.y});
  
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);

  background(0);

  roof.display();

  Chain1.display();
  Chain2.display();
  Chain3.display();
  Chain4.display();
  Chain5.display();

  Bob1.display();
  Bob2.display();
  Bob3.display();
  Bob4.display();
  Bob5.display();

}

function keyPressed(){
  if(keyCode === UP_ARROW){
  
    Matter.Body.applyForce(Bob1.body, Bob1.body.position, {x:-200, y:-25});
  }
}