const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine,world;
var ground, ball;
var groundOptions, ballOptions
function setup() {
  var canvas = createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  groundOptions = {
    isStatic:true
  }
  ground = Bodies.rectangle(200, 390, 200, 20, groundOptions);
  World.add(world,ground);
  ballOptions = {
    restitution:1.0
  }
  ball = Bodies.circle(200, 100, 20, ballOptions);
  World.add(world,ball);
  console.log(ground)
}

function draw() {
  background(0); 
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 400, 20);
  ellipseMode(CENTER);
  ellipse(ball.position.x, ball.position.y, 20);
}