var bruno;
var brunoImg;
var invisibleGround,grass,grassImg;
var score = 0;

//var banana,bananaImg;


function preload(){
     // bananaImg = loadImage("banana.jpg");
    brunoImg = loadAnimation("Monkey1.jpg","Monkey2.jpg","Monkey3.jpg");
    grassImg = loadImage("grass.jpg");

  
   
}
function setup(){
    createCanvas(600,200);
    
   
    
    bruno  = createSprite(50,100,20,50);
   // banana = createSprite(300,700,10,10);
    bruno.addAnimation("monkey",brunoImg);
    bruno.scale=0.5;
    //banana.addImage(bananaImg);
    //banana.scale=0.15;
    

    //grass = createSprite(200,180,400,20);
    //grass.addImage(grassImg);
    //grass.scale = 0.5;
    //grass.x = grass.width /2;
    //grass.velocityX = -(6 + 3*score/100);

  
    invisibleGround = createSprite(200,177,400,10);
    invisibleGround.visible = false;

    score = 0;
}
function draw(){
    background(255);
    text("Score: "+ score, 500,50);

    score = score + Math.round(getFrameRate()/60);
   /// grass.velocityX = -(6 + 3*score/100);
  

   if(keyDown("space") && bruno.y >= 129) {
        bruno.velocityY = -12;
      }

    // grass.depth = bruno.depth;
    //  bruno.depth +=2;
    
      bruno.velocityY = bruno.velocityY + 0.8
     //  if (grass.x < 0){
         // grass.x = grass.width/2;
        // }

      bruno.collide(invisibleGround);
    
    drawSprites();
}