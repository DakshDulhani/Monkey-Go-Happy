var meter = 0
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var foodGroup, obstacleGroup;
var score;
var ground;
var backkground,backkgroundImage;
var size  = 0.1

function preload(){
   monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
backkgroundImage = loadImage("jungle.jpg");
bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
}
function setup(){
createCanvas(600,300)
backkground=createSprite(100,150,100,100)
backkground.addImage("BG",backkgroundImage)
backkground.velocityX=-5
  monkey=createSprite(100,250,20,20)
 monkey.addAnimation("walking",monkey_running) 
 monkey.scale= size
  foodGroup = createGroup();
  obstacleGroup = createGroup();
  ground=createSprite(300,280,600,10)


}
function draw(){
  background("green")
 
  if(backkground.x<100) {
  
  backkground.x=backkground.width/2;
  
}
  if(keyDown("space") && monkey.y>200){
  monkey.velocityY=-12
}
  monkey.velocityY = monkey.velocityY + 0.6;
monkey.collide(ground)  
 if(foodGroup.isTouching(monkey)){
   foodGroup.destroyEach();

   monkey.scale = 0.2;
     }
  if(frameCount%60===0){
  meter=meter+1  
  }
  
  if(obstacleGroup.isTouching(monkey)){
    obstacleGroup.destroyEach();
    monkey.scale = 0.1;
  }
  
  ground.visible=false
  banana()
  obstacle()
drawSprites()
textSize(22)  
fill("white")
  text("score: "+meter,450,50)
}
function  banana(){
 
  if (frameCount % 80 === 0) {
    var banana = createSprite(600,400,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -5;
    banana.lifetime = -1;
    
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    
    foodGroup.add(banana);
   
  }
  
}

function obstacle(){
  if(frameCount % 150 === 0){
  var obstacle = createSprite(600,300,20,10);
    obstacle.y = Math.round(random(250,250));
    obstacle.addImage("stone",obstacleImage);
    obstacle.velocityX = -5;
    obstacle.scale = 0.12;
    obstacle.lifetime = -1;
    obstacleGroup.add(obstacle);
  obstacle.setCollider("rectangle",0,0,300,50);
   // obstacle.debug = true;
    
  }
  
}