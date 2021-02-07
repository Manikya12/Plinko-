const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var particles=[]
var divisions=[]
var plinkos=[]

var divisionHeight=300 
          



function setup() {
  createCanvas(480,800);
  engine = Engine.create();
	world = engine.world;


  ground1= new Ground(480,780,1000,15)

  for(var d = 0; d <=width; d = d + 80) {
    divisions.push(new Divisions(d,height-divisionHeight/2,10,divisionHeight))
    
  }

  Engine.run(engine);
}

function draw() {
  background(0); 

  
  ground1.display()
  for(var d = 0; d <divisions.lenght; d ++) {
    divisions[d].display(); 
    
  }

  drawSprites();
  
}
