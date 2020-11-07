
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3, bob4,bob5, roof;
var rope1,rope2,rope3, rope4,rope5;
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	roof=new Roof(width/2,150,250,20);

	bobDiameter=40;

	BobX=width/2;
	BobY=650;

	bob1=new bob(BobX-bobDiameter*2,BobY,20);
	bob2=new bob(BobX-bobDiameter,BobY,20);
	bob3=new bob(BobX,BobY,20);
	bob4=new bob(BobX+bobDiameter,BobY,20);
	bob5=new bob(BobX+bobDiameter*2,BobY,20);	

	rope1=new rope(bob1.body,roof.body,-bobDiameter*2, 0);
	rope2=new rope(bob2.body,roof.body,-bobDiameter*1, 0);
	rope3=new rope(bob3.body,roof.body,0, 0);
	rope4=new rope(bob4.body,roof.body,bobDiameter*1, 0);
	rope5=new rope(bob5.body,roof.body,bobDiameter*2, 0);

	
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(230);
  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});

  	}
}






