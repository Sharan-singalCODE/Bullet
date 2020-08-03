var bullet , wall,speed,weight;

var thickness
var bulletRightedge;
var wallleftedge;

function setup() {
createCanvas(1600,400);
bullet = createSprite(100, 200, 50, 50);
bullet.shapeColor="white"
wall= createSprite(1200, 200,thickness,height/2);
wall.shapeColor=color(80,80,80)
thickness = random(22,83)
}
 
function draw() {
 
  background("green");
  speed = random (223,321);
  weight = random(30,52)
  bullet.velocityX=speed;
 
 
   if(hasCollided(bullet,wall)){
     bullet.velocityX=0
    var damage =0.5 *weight * speed * speed/(thickness*thickness*thickness);
      if(damage >10){
        wall.shapeColor=color(255,0,0);
      }
     
      if(damage <10){
        wall.shapeColor=color(0,255,0);
      }
 
  }
  
  drawSprites();
 }
 function hasCollided(lbullet,lwall)
 {
   bulletRightedge=lbullet.x+lbullet.width;
   wallleftedge=lwall.x;
   if(bulletRightedge>=wallleftedge){
     return true
   }
     return false
   
 }
