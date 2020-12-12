const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
var rope1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	holder1=new Holder(400,100,20,400);
	bob1=new Bobs(340,450,110);
	bob2=new Bobs(400,450,110);
	bob3=new Bobs(460,450,110);
	bob4=new Bobs(520,450,110);
	bob5=new Bobs(580,450,110);

	Engine.run(engine);
	rope1=new Rope(bob1.body,{x:230,y:100});
	rope2=new Rope(bob2.body,{x:300,y:100});
	rope3=new Rope(bob3.body,{x:370,y:100});
	rope4=new Rope(bob4.body,{x:450,y:100});
	rope5=new Rope(bob5.body,{x:540,y:100});

}


function draw() {
  rectMode(CENTER);
  background(255,255,255);
  holder1.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}
function mouseDragged() {
	Matter.Body.setPosition(bob1.body, { x: mouseX, y: mouseY });
  }


