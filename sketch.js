
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render=Matter.Render;
var world;

function setup() {
createCanvas(1600, 700);
rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;


	
	ball1=new Ball(200,450)
	ground1=new ground(width/2,670,width,20)
	dustbinObj=new dustbin(1400,650)

	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1600,
		  height: 700,
		  wireframes: false
		}
	  });
	//Create the Bodies Here.

	Engine.run(engine);
	Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  
  ball1.display();
  ground1.display();
  dustbinObj.display();

  
 
}


function keyPressed() {
	if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(ball1.body,ball1.body.position,{x:21,y:-30	})
	   
	 }
   
   }



