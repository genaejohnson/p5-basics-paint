var newwidth = 50;
var newHeight = 50;

//setup function executes once 
function setup(){
    createCanvas(500,400);
   background(50);
}

//draw function loops forever
function draw(){
    // background(50);
    if(mouseIsPressed){
         
    }
   noStroke();
         fill(150,0,255,50);
         ellipse(mouseX,mouseY,newwidth,newHeight);
}