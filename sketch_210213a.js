const Y_AXIS = 1;
const X_AXIS = 2;
let c1, c2, c3;
let b1, b2, b3;
let t1, t2 , t3;

let cols, rows;
let scl = 24.5;
let w = 50;
let h = 800;

function setup() {
   createCanvas(400, 400, WEBGL);
   
   
   c1 = color(255, 251, 200);
   c2 = color(242, 218, 255);
   c3 = color(62, 224, 237);
   
   b1 = color(13,28, 33);
   b2 = color(0,21, 21);
   b3 = color(255, 28, 43);

   
   
   cols = w / scl;
   rows = h / scl;

   
   
}


function draw() {

  push();
  translate(0, 0, -1000);
  
  setGradient(-width*2, height * -2 , width * 4, height * 2, b1, b2, b1, Y_AXIS);
  setGradient(-width*2,0, width * 4, height *4, b1, c3, b1,Y_AXIS);
  pop();


 

  translate(width * -0.062,height * -0.15, -50);
  rotateX(PI/2);
  
  for (let i=0; i <9; i++){
    for (let y = 0; y < rows - 1; y++) {
        for (let x = 0; x < cols; x++) {
        fill(b1);
        stroke(c3);
        rect(x*scl, y*scl, scl, scl);
        }
    }
    rotateY(radians(45));
    translate(35, 0, 35);
  }
  
  save("20210213.png");
  noLoop();
  
  
}

function setGradient(x, y, w, h, c1, c2, c3, axis) {
  noFill();

  if (axis === Y_AXIS) {
    // Top to bottom gradient
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, (y + h) - ((h/2)), 0, 1);
      let c = lerpColor(c1, c2, inter);
      
      let inter02 = map(i, (y + h) - ((h/2)) ,  y + h , 0, 1);
      let p = lerpColor(c2, c3, inter02);
      
      stroke(255);
      line(x, i, x + w, i);
      
      if ( i <= (y + h) - ((h/2))){
        stroke(c);
        line(x, i, x + w, i);
      }else{
        stroke(p);
        line(x, i, x + w, i);
      }
      
      
    }
  } else if (axis === X_AXIS) {
    // Left to right gradient
    for (let i = x; i <= x + w; i++) {
      let inter = map(i, x,(x + w) - (w/2), 0, 1);
      let c = lerpColor(c1, c2, inter);
      
      let inter02 = map(i, (x + w) - (w/2), x + w, 0, 1);
      let p = lerpColor(c2, c3, inter02);
      
      stroke(255);
      line(i, y, i, y + h);
      if ( i <= (x + w) - (w/2)){
        stroke(c);
        line(i, y, i, y + h);
      }else{
        stroke(p);
        line(i, y, i, y + h);
      }
      
    }
  }
}

