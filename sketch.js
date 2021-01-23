const Engine = Matter.Engine
const World =  Matter.World 
const Bodies = Matter.Bodies
const Body = Matter.Body;
const Constraint = Matter.Constraint

var background1
var superman, supermanImg
var rope 
var ground
var block

function preload() {
//preload the images here
background1 = loadImage("background.png")
}

function setup() {
  createCanvas(1280,606);
  engine = Engine.create();
  world = engine.world;

  // create bodies here
   
   superman = new Superman() 

   rope = new Rope(superman.body,{x:100,y:100}) 

   block = new Box(450,1)
   block1 = new Box(450,1)
   block2 = new Box(450,1)
   block3 = new Box(450,1)
   block4 = new Box(450,1)
   block5 = new Box(450,1)
   block6 = new Box(450,1)

   block7 = new Box(500,1)
   block8 = new Box(500,1)
   block9 = new Box(500,1)
   block10 = new Box(500,1)
   block11 = new Box(500,1)

   block12 = new Box(550,1)
   block13 = new Box(550,1)
   block14 = new Box(550,1)
   block15 = new Box(550,1)

   block16 = new Box(600,1)
   block17 = new Box(600,1)
   block18 = new Box(600,1)
   block19 = new Box(600,1)
   block20 = new Box(600,1)

   block21 = new Box(650,1)
   block22 = new Box(650,1)
   block23 = new Box(650,1)
   block24 = new Box(650,1)
   block25 = new Box(650,1)
   block26 = new Box(650,1)
   block27 = new Box(650,1)

   corona = new Corona()

   ground = new Ground(310,400,2800)
 
  Engine.run(engine)
}

function draw() {
  background(background1);


  superman.display();
  block.display();
  ground.display();
  block1.display()
  block2.display() 
  block3.display()
  block4.display()
  block5.display()
  block6.display();
  block7.display()
  block8.display()
  block9.display()
  block10.display()
  block11.display();
  block12.display()
  block13.display()
  block14.display()
  block15.display()
  block16.display()
  block17.display()
  block18.display()
  block19.display()
  block20.display()
  block21.display()
  block22.display()
  block23.display()
  block24.display()
  block25.display()
  block26.display()
  block27.display()
 
  corona.display()

//  drawSprites()
}

function mouseDragged(){

Matter.Body.setPosition(superman.body,{x:mouseX,y:mouseY})

}

