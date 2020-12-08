
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var roof1;
var line1,line2,line3,line4,line5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

bob1=new Bob(300,400);
bob2=new Bob(350,400);
bob3=new Bob(400,400);
bob4=new Bob(450,400);
bob5=new Bob(500,400);

roof1=new Roof(400,100,300,10)

line1=new Rope(bob1.body,{x:300,y:100})
line2=new Rope(bob2.body,{x:350,y:100})
line3=new Rope(bob3.body,{x:400,y:100})
line4=new Rope(bob4.body,{x:450,y:100})
line5=new Rope(bob5.body,{x:500,y:100})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
 
  roof1.display();

  line1.display();
  line2.display();
  line3.display();
  line4.display();
  line5.display();
}


function keyPressed(){
	if(keyCode===UP_ARROW){
Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-70,y:-40})
	}
}
