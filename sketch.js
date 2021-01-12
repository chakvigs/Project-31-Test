const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

function setup(){
    createCanvas(480,800);
    engine = Engine.create();
    world = engine.world;

    //Create Bodies
    groundObject = new Ground(240, 800, 480, 50);
    for (var i = 0; i <= 480; i+80) {
        divisions.push(new Division(i, 800-divisionHeight/2, 10, divisionHeight));
    }
}


function draw(){
    background(0);
    Engine.update(engine);
    groundObject.display();
    divisions.display();
    drawSprites();
}