var car, wall;
var speed, weight;


function setup() {
  createCanvas(1600,400);


  car = createSprite(50, 200, 50, 50);
  wall = createSprite (1200, 200, 60, 100);
  

  

  wall.depth = car.depth - 1;

  
  
  
  
}

function draw() {
background("black");

//for some reason the text isn't working. Please help!
  textSize(32);
  textFont("Arial Black");
  stroke("cyan");
  strokeWeight(3);
  fill("purple");
  text("Press Space to test the car.", 1200, 100);
  
  if(keyWentDown("space")){
  speed=random(55,90);
weight=random(400,1500);
car.x = 50;
  car.y = 200;
    car.velocityX = speed;
  }
  background("black");  

  if (wall.x-car.x < (car.width+wall.width)/2) {
  car.velocityX=0;
  var deformation=0.5 * weight * speed * speed/22509;
  if (deformation>180) {
  car.shapeColor = "red";
  }
  if (deformation<180 && deformation>100) {
  car.shapeColor = "yellow";
  }
  if (deformation<100) {
  car.shapeColor = "green";
  }
} 



  drawSprites();
}