function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  noFill();
  strokeWeight(4);
  stroke(255);
  push();
  translate(width / 2, height / 2)
  rotate(-(PI / 2))
  let sc = second();
  let mn = minute();
  let hr = hour();

  let scAngle = map(sc, 0, 60, 0, TWO_PI);
  let mnAngle = map(mn, 0, 60, 0, TWO_PI);
  let hroffset = map(mnAngle, 0, TWO_PI, 0, TWO_PI / 12);
  let hrAngle = map(hr, 0, 24, 0, TWO_PI * 2) + hroffset;

  strokeWeight(2);
  stroke(255, 0, 0);
  line(0, 0, cos(scAngle) * 150, sin(scAngle) * 150);

  strokeWeight(4);
  stroke(0, 255, 127);
  line(0, 0, cos(mnAngle) * 100, sin(mnAngle) * 100);
  stroke(0, 127, 255);
  line(0, 0, cos(hrAngle) * 50, sin(hrAngle) * 50);
  stroke(255);
  strokeWeight(8);
  point(0, 0);
  pop();

  noStroke();
  fill(255);
  textAlign(CENTER, CENTER);
  text(nf(hr, 2, 0) + ":" + nf(mn, 2, 0) + ":" + nf(sc, 2, 0), width / 2, height - 20);
}