var bird;
var obstaclePredio;
var food;
var birdImage,foodImage,obstaclePredioImage;
var obstacleGroup,foodGroup;
var bg;
var ravenImg, ravenGroup;
var score;
var lives;
var gameOver;
var gOI;
var raven;
var bgMusic
var win;
var w = window.innerWidth; //alterações para publicação na PlayStore
var h = window.innerHeight; //alterações para publicação na PlayStore
var time;

var PLAY = 1;
var gameState = PLAY;
var END = 0


function preload(){
birdImage = loadImage("./assets/passaro.png")
foodImage = loadImage("./assets/fruta.png")
obstaclePredioImage = loadImage("./assets/predio.png")
bg = loadImage("./assets/bg1.png")
ravenImg = loadImage("./assets/corvo.png")
bgMusic = loadSound("./assets/som.mp3")
win = loadSound("./assets/ganhou.mp3")

}


function setup() {

  // createCanvas(windowWidth, windowHeight);
  
  createCanvas(w,h);
  bgMusic.play();
  bgMusic.setVolume(0.6);


  bird = createSprite(200,200,20,20);
  bird.addImage(birdImage)
  bird.scale = 0.04
  obstacleGroup = new Group();
  foodGroup = new Group();
  lives = 10
  score = 0; 
  

  
}

  function draw (){
 background("white");

    image(bg,0,0,1600,750-25);

    textSize(15);
    fill("black")
    text("COMIDAS - "+score,50,30);
    text("VIDA - " + lives, 50,50)
    text("TEMPO DE SOBREVIVENCIA - "+ time,50,70 )


if(gameState === PLAY){ 

time  = frameCount
  
  bird.setCollider("circle",0,0);
  bird.debug = true; 


  // score = score + Math.round(frameCount/60);
  

    if(keyIsDown(LEFT_ARROW )){
      bird.position.x=bird.position.x -2;
    }
    
    if(keyIsDown(UP_ARROW )){
      bird.position.y=bird.position.y -2;
    }

   
    
    if(keyIsDown(DOWN_ARROW )){
      bird.position.y=bird.position.y +2;
    
    }
    if(keyIsDown(RIGHT_ARROW )){
      bird.position.x = bird.position.x +2;
    }
    


    if(foodGroup.isTouching(bird)){
      score +=1
      food.destroy();
    }

    
//     var d = dist(bird.position.x,bird.position.y,ravenGroup.position.x,ravenGroup.position.y)    

// if(d<=10){
//   gameState = END;
//   ravenGroup.destroy();
// }else{
//   gameState= PLAY;
// }

    obstacle();
    SpawnRaven();
    comida();
   


}





// var d = dist(rav.x, circ1.y, circ2.x, circ2.y);

if(score === 10 ){
  textSize(200)
 text("VOCÊ GANHOU!  ", 450,350)
 win.play();
 win.setVolume(0.2);
 bird.velocityX = 0;
 bird.velocityY = 0;
 ravenGroup.setVelocityEach(0);
 foodGroup.setVelocityEach(0);
 obstacleGroup.setVelocityEach(0);
}


drawSprites();

  }





function collision(){

 var d;
 d = dist(raven.x,raven.y,bird.x,bird.y);

 if(d<=55){
  lives -= 5;

 }
 if(lives===0){
  textSize(200)
  text("Pedeu!", 450,350)
 }


}


  function mousePressed() {
    if (mouseX > 0 && mouseX < 100 && mouseY > 0 && mouseY < 100) {
      let fs = fullscreen();
      fullscreen(!fs);
    }
  }


function obstacle(){
  if(frameCount%100===0){
    obstaclePredio = createSprite(800,500,30,250)
    obstaclePredio.velocityX = -3
    obstaclePredio.shapeColor = "green"
    obstaclePredio.x = Math.round(random(1200,800))
    obstaclePredio.addImage(obstaclePredioImage)
    obstaclePredio.scale = 0.10
  
    obstacleGroup =new Group();
    obstacleGroup.add(obstaclePredio)
  }
}
function comida(){
 if(frameCount%80===0){
  food = createSprite(350,0,10,10)
  food.velocityX = -5;
  food.y = Math.round(random(0,350))
  food.x = Math.round(random(0,1200))
  food.addImage(foodImage)
  food.scale = 0.03

  foodGroup = new Group();
  foodGroup.add(food)
}
}

function SpawnRaven(){
  if(frameCount%45===0){
    raven = createSprite(350,0,10,10)
    raven.velocityY = 1;
    raven.y = Math.round(random(0,750))
    raven.x = Math.round(random(0,750))
    raven.addImage(ravenImg)
    raven.scale = 0.25

    
  raven.setCollider("circle",0,0)
  raven.debug =true
 
    ravenGroup = new Group();
    ravenGroup.add(raven)

    
    // if(ravenGroup.isTouching(bird)){

    //   bird.x = 10
    //   lives-=5
    // }
    
}

}


















 

  
    



  



  

  


  










