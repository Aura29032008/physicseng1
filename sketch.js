const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball;
var square;
var sphere;
var box;
var pencilBox;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    
    }
    var ball_option={
        restitution: 0.8
    }

    var square_option={
        isStatic: true
    }

    var sphere_option={
        restitution: 1.0
    }

    var box_option={
        isStatic: true
    }

    var pencilBox_option={
        restitution: 1.3
    }
    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);
    ball= Bodies.circle(200,200,50,ball_option);
    World.add(world,ball);
    square = Bodies.rectangle(100,200,20,20,square_option);
    World.add(world,square);
    sphere= Bodies.circle(200,10,70,sphere_option);
    World.add(world,sphere);
    box= Bodies.rectangle(100,180,100,50,box_option);
    World.add(world,box);
    pencilBox= Bodies.rectangle(100,160,50,50,pencilBox_option);
    World.add(world,pencilBox);
    
    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,50,50);
    rectMode(CENTER);
    rect(square.position.x,square.position.y,20,20);
    ellipseMode(RADIUS);
    ellipse(sphere.position.x,sphere.position.y,40,40);
    rectMode(CENTER);
    rect(box.position.x,box.position.y,70,70);
    rectMode(CENTER);
    rect(box.position.x,box.position.y,80,80);
    
}