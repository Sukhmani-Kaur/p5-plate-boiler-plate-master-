function bouncing(o1,o2){
    if(o1.x-o2.x < o1.width/2 + o2.width/2 && o2.x-o1.x< o1.width/2+ o2.width/2){
      o1.velocityX=o1.velocityX*(-1);
      o2.velocityX=o2.velocityX*(-1);
    } 
    if(o1.y-o2.y<o1.width/2+o2.width/2 && o1.y-o2.y<o1.width/2+o2.width/2){ 
      o1.velocityY=o1.velocityY*(-1);
      o2.velocityY=o2.velocityY*(-1);
    }

  }

  function isTouching(o1,o2){
    if(o1.x-o2.x < o1.width/2 + o2.width/2 && o2.x-o1.x< o1.width/2+ o2.width/2 
      && o1.y-o2.y<o1.width/2+o2.width/2 && o1.y-o2.y<o1.width/2+o2.width/2){
      return true;
    } 
    else{
      return false;
    }

  }