var car, wall, speed, weight;
var fixedRect;


function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(750, 200, 60, height/2);

  speed = Math.round(random(55,90));
  weight = Math.round(random(400,1500));

  car = createSprite(0,200,50,50);

  car.velocityX = speed;
}

function draw() {
  background(0,0,0);
  
  if(car.x - fixedRect.x <= car.width/2 + fixedRect.width/2 &&

    fixedRect.x - car.x <= fixedRect.width/2 + car.width/2 ){
    
    car.velocityX = 0;
    var deformation = (0.5*weight*speed*speed)/22500;
    
    if(deformation > 180){
      car.shapeColor = color(255,0,0);
    }
    if(deformation < 180 && deformation > 100){
      car.shapeColor = color(230,230,0);
    }
    if(deformation < 100){
      car.shapeColor = color(0,255,0);
    }
  }


  drawSprites();
}