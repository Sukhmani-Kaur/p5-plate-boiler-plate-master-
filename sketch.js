var fr,mr; 
function setup() { 
  createCanvas(1200,800); 
  fr = createSprite(200, 200, 50, 50); 
  fr.shapeColor = "green"; 
  mr = createSprite(400, 200, 40, 80); 
  mr.shapeColor = "green"; 

  //mr.velocityY=-5; 
  //fr.velocityY=5;
}

function draw() { 
  background(255,255,255); 
  mr.x=World.mouseX;
  mr.y=World.mouseY;

 

  if(isTouching(mr , fr)){
    bouncing(mr,fr);
    //mr.shapeColor="red";
    //fr.shapeColor="blue";
  }
  else{
    mr.shapeColor="green";
    fr.shapeColor="green";
  }
  
     //console.log(mr.x - fr.x) 
     drawSprites(); 
    }
  