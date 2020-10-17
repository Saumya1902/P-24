
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

   ground = Bodies.rectangle(400, 660, width, 10 , {isStatic:true} );
   
	 World.add(world, ground);
	 
	//Create the Bodies Here.
	 b1=new dustbin(440,600,20,100);
	 b2=new dustbin(680,600,20,100);
	 b3=new dustbin(560,650,270,20);
   ball= new paper(50,520,30);
	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background("lightBlue");
  b1.display();
  b2.display();
  b3.display();
  ball.display();
  fill("brown");
  rect(ground.position.x,ground.position.y,width,10);
  drawSprites();
 }



function keyPressed(){
   if(keyCode===UP_ARROW){

    Matter.Body.applyForce(ball.body,ball.body.position,{x:30,y:-30});
   };

}

