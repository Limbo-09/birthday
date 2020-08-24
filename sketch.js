var time = -200;
var bigGearRadius = 30;
var gearGap = 85;
var tireRadius = 100;
var handleLength = 65;

function setup() {
  createCanvas(1300, 610);
  background(200, 122, 33);
  plantGrass();
}

function draw() {
  time += 0.5;
  translate(width * 1.6 / 9, height * 1.8 / 3);
  fill(144, 224, 239);
  rect(-300, 100, 1.5 * width, -0.95 * height);
  noFill();
  scale(0.8);
  road();
  buildings();
  bg(); //background 
  cycle1();
  cycle2();
  fg(); //foreground 
}

function plantGrass() {
  push();
  scale(0.45);
  for (let y = 280; y < 1450; y += 15) {
    for (let x = -400; x < 3000; x += 15) {
      push();
      translate(random(5) + x, y);
      scale(0.5 + 0.1 * random(8));
      grass();
      pop();
    }
  }
  pop();

}

function bg() {
  push();
  translate(-500, -50);
  scale(1.1);
  tree();
  translate(130, -10);
  shrub();
  pop();
  push();
  scale(0.8);
  translate(-100, -50);
  tree();
  translate(70, -10);
  shrub();
  pop();
}

function fg() {
  push();
  scale(1.7);
  translate(-50, 150);
  tree();
  translate(70, -10);
  shrub();
  translate(90, -10);
  shrub();
  pop();
}

function tree() {
  push();
  noStroke();
  fill(190, 105, 100);
  rect(280, 0, 20, -200);
  fill(0, 165, 20);
  ellipse(292, -255, 120, 190);
  //fill(0,205,49);
  ellipse(334, -280, 90, 115);
  //fill(0,105,0);
  ellipse(252, -230, 90, 115);
  //fill(0,105,0);

  ellipse(328, -230, 110, 115);
  //fill(0,215,0);
  ellipse(252, -280, 110, 115);
  pop();

}

function shrub() {
  push();
  noStroke();
  fill(0, 255, 0);
  ellipse(180, 0, 60, 35);
  fill(0, 215, 0);
  ellipse(155, 12, 50, 30);
  fill(30, 205, 50);
  ellipse(195, 7, 70, 20);
  fill(70, 235, 20);
  ellipse(200, 16, 60, 22);
  fill(255, 55, 250);
  ellipse(190, 16, 6, 6);
  ellipse(170, 6, 4, 4);
  ellipse(200, 1, 5, 5);
  pop();
}

function grass() {
  push();
  noFill();
  stroke(0, 185, 0);
  strokeWeight(3);
  bezier(0, 0, 5, -25, 5, -10 - random(25), 15, -10);
  stroke(0, 150, 0);
  bezier(0, 0, -5, -15, -5, -10 - random(25), -10, -10);
  stroke(0, 120, 0);
  bezier(0, 0, -5, -25, -5, -20 - random(25), -10, -18);
  stroke(0, 140, 0);
  bezier(0, 0, 2, -10 - random(25), 5, -25, 10, -24);
  pop();
}

function road() {
  push();
  noStroke();
  fill(200, 122, 33);
  ellipse(-width * 2.7 / 9, -0.03 * height, 2 * width, 200);
  fill(100);
  rect(-width * 2.7 / 9, height / 25, 2 * width, height / 3.6);
  translate(800, 200);
  scale(1.5);
  shrub();
  translate(90, -10);
  shrub();
  pop();
}

function buildings() {
  //translate(0.5*width,0.5*height);
  push();
  noStroke();
  //building
  fill(150);
  rect(450, 25, 400, -600);
  fill(60, 126, 220); //windows
  rect(490, -170, 100, -100);
  rect(650, -270, 100, -100);
  fill(160, 96, 120);
  rect(690, 24, 100, -200);
  fill(50);
  ellipse(780, -84, 9, 9);
  //house
  fill(160, 126, 220);
  rect(850, 25, 600, -250);
  fill(250, 26, 220);
  rect(920, -225, 600, -95);
  fill(160, 6, 220);
  beginShape();
  vertex(850, -225);
  vertex(920, -320);
  vertex(990, -225);
  vertex(990, 25);
  vertex(850, 25);
  endShape(CLOSE);
  fill(190, 96, 120);
  rect(875, 24, 80, -200, 0, 0, 40, 40);
  fill(50);
  ellipse(935, -84, 9, 9);
  pop();
}

function cycle1() {
  push();
  if (time >= 2) {
    time += 0.1;
    translate(0.8 * time, 0);
  }
  stroke(211, 182, 105);
  strokeWeight(3.5);
  legL();
  chainGear();
  tire();
  chasis();
  stroke(211, 182, 105);
  legR();
  rider();
  pop();
}

function cycle2() {
  push();
  stroke(228, 172, 105);
  strokeWeight(3.5);
  translate(time, 100);
  legL();
  chainGear();
  tire();
  chasis();
  stroke(228, 172, 105);
  legR();

  rider();
  pop();
}

function chainGear() {

  noFill();
  stroke(0);
  strokeWeight(3.5);
  ellipse(-0.1 * gearGap, 0, bigGearRadius, bigGearRadius);
  ellipse(-gearGap, 0, bigGearRadius / 2, bigGearRadius / 2);
  //ellipse() 
}

function tire() {
  //translate(width*1.6/3,height*1.8/3);
  noFill();
  stroke(255);
  push();
  strokeWeight(5.5);
  ellipse(-gearGap, 0, 0.93 * tireRadius, 0.93 * tireRadius);
  ellipse(0.9 * gearGap, 0, tireRadius, tireRadius);
  pop();
}

function chasis() {
  push();
  strokeWeight(3.5);
  stroke(55);
  line(0.9 * gearGap, 0, 0.6 * handleLength, -handleLength);
  line(-gearGap, 0, -0.7 * handleLength, -handleLength);
  line(-0.1 * gearGap, 0, 0.6 * handleLength, -handleLength);
  line(-0.1 * gearGap, 0, -0.7 * handleLength, -handleLength);
  line(0.6 * handleLength, -handleLength, -0.7 * handleLength, -handleLength);
  line(-gearGap, 0, -0.1 * gearGap, 0);
  line(0.6 * handleLength, -handleLength, 0.4 * handleLength, -1.3 * handleLength);
  stroke(255, 25, 155);
  line(0.6 * handleLength, -1.5 * handleLength, 0.4 * handleLength, -1.3 * handleLength);
  line(0.6 * handleLength, -1.5 * handleLength, 0.4 * handleLength, -1.3 * handleLength);
  //seat
  stroke(255);
  line(-0.7 * handleLength, -handleLength, -0.7 * handleLength, -1.1 * handleLength);
  line(-0.6 * handleLength, -1.1 * handleLength, -0.8 * handleLength, -1.1 * handleLength);
  pop();
}

function legL() {
  strokeWeight(6);
  bezier(-0.7 * handleLength, -1.11 * handleLength, 5, -40, 5, -40, -0.1 * gearGap + bigGearRadius * cos(-(time % 60) / 10 + 3) / 2, -bigGearRadius * sin((-time % 60) / 10 + 3) / 2);
}

function legR() {
  strokeWeight(6);
  bezier(-0.7 * handleLength, -1.11 * handleLength, 10, -40, 10, -40, -0.1 * gearGap + bigGearRadius * cos(-(time % 60) / 10) / 2, -bigGearRadius * sin((-time % 60) / 10) / 2);
}

function rider() {
  strokeWeight(5);
  line(-0.7 * handleLength, -1.11 * handleLength, -0.5 * handleLength, -1.81 * handleLength);
  //hands
  bezier(-0.5 * handleLength, -1.71 * handleLength, 20, -70, 20, -95, 0.55 * handleLength, -1.5 * handleLength);
  bezier(-0.5 * handleLength, -1.71 * handleLength, 10, -60, 20, -90, 0.45 * handleLength, -1.4 * handleLength);
  ellipse(-0.45 * handleLength, -2.11 * handleLength, 27, 33);
  push();
  stroke(0);
  strokeWeight(1.2);
  bezier(-0.65 * handleLength, -2.34 * handleLength, -60, -160 - 2 * sin(time / 10), -60, -165 - 2 * sin(time / 10), -1.10 * handleLength + 5 * sin(time / 10), -1.81 * handleLength);

  bezier(-0.65 * handleLength, -2.34 * handleLength, -55, -170 - 2 * sin(time / 10), -60, -165 + 2 * sin(time / 10), -1.10 * handleLength + 5 * sin(time / 10), -1.81 * handleLength);
  bezier(-0.65 * handleLength, -2.34 * handleLength, -60, -170 + 2 * sin(time / 10), -60 - 2 * sin(time / 10), -165 + 2 * sin(time / 10), -1.10 * handleLength + 5 * sin(time / 10), -1.81 * handleLength);
  bezier(-0.65 * handleLength, -2.34 * handleLength, -60 + 2 * sin(time / 10), -170 + 2 * sin(time / 10), -65 - 3 * sin(time / 10), -165 - 2 * sin(time / 10), -1.10 * handleLength + 5 * sin(time / 10), -1.81 * handleLength);
  bezier(-0.65 * handleLength, -2.34 * handleLength, -60 - 5 * sin(time / 10), -170 - 2 * sin(time / 10), -65 + 5 * sin(time / 10), -165 - 2 * sin(time / 10), -1.10 * handleLength + 5 * sin(time / 10), -1.81 * handleLength);
  bezier(-0.65 * handleLength, -2.34 * handleLength, -60 + 2 * sin(time / 10), -170 + 2 * sin(time / 10), -65 + 5 * sin(time / 10), -165 - 2 * sin(time / 10), -1.10 * handleLength + 5 * sin(time / 10), -1.81 * handleLength);
  pop();
}
