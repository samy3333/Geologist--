
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var hammer;
var rubber;
var ground;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 hammer= new Hammer(200, 200, 70, 50);
	 rubber= new Rubber(400, 500, 90, 30);
	 plane= new Plane(400, 700, 800, 50);
	 stone = new Stone(700,320,100,100);

    sand1 = new Sand(300,500,10);
    sand2 = new Sand(310,500,10);
    sand3 = new Sand(315,500,10);
    sand4 = new Sand(320,500,10);
    sand5 = new Sand(325,500,10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
hammer.display(); 
rubber.display();
plane.display();
stone.display()
sand1.display();
sand2.display();
sand3.display();
sand4.display();
sand5.display();
}



