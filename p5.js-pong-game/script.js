function setup() {
  createCanvas(900, 900);
  directionX =random(-9, 9);
  choices = [sqrt(100 - pow(directionX, 2)), -1 * sqrt(100 - pow(directionX, 2))];
  directionY= random(choices);
}

var leftplayerscore = 0;
var rightplayerscore = 0;
var speed = 10;
var choices= [];
var rightX = 800;
var rightY = 350;
var leftX = 100;
var leftY = 350;
var ballX = 600;
var ballY = 600;
var directionX = 0;
var directionY = 0;

function ball(){

 
 ellipse (ballX, ballY, 50);

}  

function rightplayer(){
  
  rect(rightX, rightY, 10, 300);
  
}

function leftplayer(){
  
  
  rect(leftX, leftY, 10, 300);
  
}

function touching(rx, ry, ballX, ballY){
  //2d
  // temporary variables to set edges for testing
  var testX = ballX;
  var testY = ballY;
  var rw = 10;
  var rh = 300;
  var diameter = 50;

  // which edge is closest?
  if (ballX < rx){         
  testX = rx;       // left edge
  }
  else if (ballX > rx+rw){ 
  testX = rx+rw;  }   // right edge

  if (ballY < ry){         
    testY = ry       // top edge
  }
  else if (ballY > ry+rh){ 
    testY = ry+rh; 
  }   // bottom edge
  // // get distance from closest edges
  var distance = this.dist(ballX,ballY,testX,testY);

  // if the distance is less than the radius, collision!
  if (distance <= diameter/2) {
    return true;
  }
  return false;
}



function keypress(){
  
      //up
  if(keyIsDown(UP_ARROW)){
    rightY-=speed;
  }
  //down
    if(keyIsDown(DOWN_ARROW)){
    rightY+=speed;
    }
  
    //up
  if(keyIsDown(87)){
    leftY-=speed;
  }
  //down
    if(keyIsDown(83)){
    leftY+=speed;
    }
}
function draw(){
  background(220);
  
  ball();
  rightplayer();
  leftplayer();
  keypress();
  text("Use WASD or arrow keys to move", 350,100);
  text(leftplayerscore, 100, 100);
  text(rightplayerscore, 750, 100);

  

  ballX += directionX;
  ballY += directionY;
  
  if (ballX < 0){
    directionX =random(0, 9);
    choices = [sqrt(100 - pow(directionX, 2)), -1* sqrt(100 - pow(directionX, 2))];
    directionY= random(choices);
    rightplayerscore++;
  }
    
  if (ballX > width){
    directionX =random(-9, 0);
    choices = [sqrt(100 - pow(directionX, 2)), -1 * sqrt(100 - pow(directionX, 2))];
    directionY= random(choices);
    leftplayerscore++;
  }
  
  if (ballY < 0){
    directionX =random(-9, 9);
    directionY= sqrt(100 - pow(directionX, 2));
  }
  
  if (ballY > height){
    directionX =random(-9, 9);
    directionY= -1* sqrt(100 - pow(directionX, 2));
  } 
  
  if (touching(rightX, rightY, ballX, ballY)){
    directionX =random(-9, 0);
    choices = [sqrt(100 - pow(directionX, 2)), -1 * sqrt(100 - pow(directionX, 2))];
    directionY= random(choices);
  }
  
  if (touching(leftX, leftY, ballX, ballY)){
    directionX =random(0, 9);
    choices = [sqrt(100 - pow(directionX, 2)), -1 * sqrt(100 - pow(directionX, 2))];
    directionY= random(choices);
  }
  
}