let watch;
function setup() {
  createCanvas(1400, 900);
  watch=loadImage('watching.gif');
}

function draw() {
  background(204);
  if (mouseButton == LEFT) {
    background(0);   // Black
    image(watch,0,0)
    textSize(50);
    fill(0, 102, 153);
text('Right Click to Go Back to Bed', 10, 200);
  }
  else if (mouseButton == RIGHT) {
    background(0); // White
     textSize(50);
    fill(255);
text('Left Click to Wake Up', 10, 200);
  }
  else {
    fill(126); // Gray
     textSize(50);
    fill(0);
text('Hmm what to do today.. Left or Right Click', 10, 200);
  }

}