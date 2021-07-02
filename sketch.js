
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5, roof;
var rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bob1 = new Bop(300,300,50);
	bob2 = new Bop(350,300,50);
	bob3 = new Bop(400,300,50);
	bob4 = new Bop(450,300,50);
	bob5 = new Bop(500,300,50);
	roof = new Roof(400,100,300,10);

	rope1 = new Rope(bob1.body,roof.body,-100);
	rope2 = new Rope(bob2.body,roof.body,-50);
	rope3 = new Rope(bob3.body,roof.body,0);
	rope4 = new Rope(bob4.body,roof.body,50);
	rope5 = new Rope(bob5.body,roof.body,100);

	/*var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
		}
	  });
	  */
  

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  bob1.display();
  roof.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  //drawSprites();

}

function keyPressed()
	{

		if(keyCode == UP_ARROW)
		{

		Matter.Body.applyForce(bob1.body, bob1.body.position,{x:-50,y:-50})
		}
	}


