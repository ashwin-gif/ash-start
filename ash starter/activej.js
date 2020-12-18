let run;
let ground;
let tree;
let bee;

var speedX = 2.5;
var speedY= 1.6;
var x;
var y;

function setup() {
  createCanvas(800, 600);
  run=loadImage('runman.gif');
  ground=loadImage('ground.gif');
  tree=loadImage('tree.png');
  bee=loadImage('bee.png');
    x = width/2;
  y = height/2;
  
  
}

function draw() {
  background(220);
  
let x = map(mouseX, 0, width, 0, 255);
  
background(x,220,255);
  
  fill(255,228,48)
 ellipse(mouseX*2, 20, 200, 200);
  
  fill(173,204,239)
  ellipse(mouseX*2-880, 20, 200, 200);
  
 
  image(tree, -mouseX-200,80,0)
  image(ground, -mouseX+500,430,0)
  image(run, mouseX-100, 350,)
   image(ground, -mouseX,430,0)
  
    x = x + random(-speedX, speedX);
  y = y + random(-speedY, speedY);

  image(bee, x+100, y+150, 100,100)
  
}
