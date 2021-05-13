var hrAngle, mnAngle, scAngle, timex, timey;

var hr, mn, sc;

function setup() {
  createCanvas(800, 400);
  //createSprite(400, 200, 50, 50);
  angleMode(DEGREES);
  console.log (cos(30))
  console.log(sin(30))
}

function draw() {
  background(0);
  translate(width / 2, height / 2);
  rotate(-90)
  hr = hour();
  mn = minute();
  sc = second();

  hrAngle = map(hr % 12, 0, 12, 0, 360)
  mnAngle = map(mn, 0, 60, 0, 360)
  scAngle = map(sc, 0, 60, 0, 360)
  /*timex = map(hrAngle, 0, 360, 0, 400);
  timey = map(hrAngle, 0, 360, 0, 200);*/
  noFill();
  
  push();
  rotate(hrAngle)
  stroke(0, 255, 255)
  strokeWeight(5)
  line(0, 0, 75, 0)
  pop()
  
  stroke(0, 255, 255)
  arc(0,0,275,275,0,hrAngle)


 push();
 rotate(mnAngle)
 stroke(204, 102, 255)
 strokeWeight(5)
 line(0, 0, 100, 0)
 pop()
 
 stroke(204, 103, 255)
 arc(0,0,300,300,0,mnAngle)

 
 push();
 rotate(scAngle)
 stroke(255, 255, 51)
 strokeWeight(5)
 line(0, 0, 125, 0)
 pop()
 
 stroke(255, 255, 51)
 arc(0,0,325,325,0,scAngle)

 
 fill ("white");
 rotate(90);

 
   text ("12", 0, -120);
 
 
  text ("3", 120, 0);

  text ("6", 0, 120);

  text ("9", -120, 0);

  drawSprites();
}
