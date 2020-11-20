var bullet,wall,bulletimg;
var speed,weight,thickness;
var deformation;

function preload(){
  bulletimg = loadImage("bullet1.jpg")
}




function setup() {
  createCanvas(1600,400);

  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

  bullet = createSprite(50,200,50,10);
  bullet.velocityX = speed;
  bullet.shapeColor = "white";


  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);

  

}

function draw() {
  background("black");  

  if(hasCollided(bullet,wall)){
    bullet.velocityX = 0;

    var damage = 0.5 * weight * speed * speed/(thickness*thickness*thickness);
  }
  if (damage>10){
    text("Wall is not reliable,bullet can easily peirce through.",600,200,textSize(20),fill("red"));
    wall.shapeColor = "red"
  } else{
    text("Wall is Safe.",600,200,textSize(20),fill("lime"));
    wall.shapeColor = "lime"
  }
    
 
  
  drawSprites();
}

function hasCollided(lbullet,lwall){

bulletRightEdge = lbullet.x + lbullet.width;
wallLeftEdge = lwall.x

if(bulletRightEdge>=wallLeftEdge){
  return true;
}
return false;
}





