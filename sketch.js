var bullet,wall
var weight,speed,thickness
function setup() {
  createCanvas(1600,400);
  speed=random(55,90)
  weight=random(30,52)
  thickness=random(22,83)
  bullet=createSprite(50,200,50,20)
  wall=createSprite(1000,200,thickness,height/2)
  wall.shapeColor=("white")
  bullet.shapeColor=("white")
  bullet.velocityX=speed
}

function draw() {
  background(0);  
  if(hasCollided(wall,bullet)){
    bullet.velocityX=0
    var damage =0.5*weight*speed*speed/thickness*thickness*thickness
    if (damage > 10){
      wall.shapeColor=color(255,0,0) 
    }
    if (damage < 10){
      wall.shapeColor=color(0,255,0) 
    }
  }
  
  
  drawSprites();
}
