
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground
var monkeyRunningImage
var survivalTime;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600, 400)
  monkey = createSprite(70, 320, 20, 20);
monkey.addAnimation("runnning_moneky", monkey_running);
  monkey.scale = 0.15;
  
  
  ground = createSprite(300, 390, 600, 20);
  ground.scale = 2.5;
  
  invisibleGround = createSprite(300, 390, 600, 20);
  invisibleGround.scale = 2.5;
  invisibleGround.visible = false;
  
  
}


function draw() {
background("white");
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time:  " + survivalTime, 100, 50);
  if(keyDown("space")){
     monkey.velocityY = -12;
  }
  monkey.velocityY = monkey.velocityY + 0.5;
  monkey.collide(invisibleGround);
  
  ground.velocityX = -3;

  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }
  
fruit_banana();
obstacle_rock();
  drawSprites();
}
function fruit_banana(){
  if(frameCount % 80 == 0){
  banana = createSprite(700, 200, 20, 20);
  banana.addImage("fruit_banana", bananaImage);
  banana.scale = 0.1;
  banana.velocityX = -5;
  banana.lifetime = 140;
  banana.y = Math.round(random(100,200));
  } 
}
function obstacle_rock(){
  if(frameCount % 300 == 0){
  obstacle = createSprite(700, 330, 20, 20)
  obstacle.addImage("Obstacle_rock", obstacleImage);
  obstacle.scale = 0.2;
  obstacle.velocityX = -7;
  obstacle.lifetime = 100;
  }
}






