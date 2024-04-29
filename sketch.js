let drawing = false;
let stroke_weight_slider;
let points = [];
let pen_color = ['#FF0000', '#FFA500', '#FFFF00', '#00FF00', '#0000FF', '#4B0082', '#800080'];
let current_pen_color = 0;
let stroke_weight = 1;

function setup() {
  createCanvas(400, 400);

  draw_color_bar();

  let text_element = createDiv('Stroke weight:');
  text_element.position(0, 400);
  stroke_weight_slider = createSlider(0, 10, stroke_weight);
  stroke_weight_slider.position(100, 400)
  
  // Button to clear canvas
  let clear_button = createButton('Clear');
  clear_button.position(0, height + 40);
  clear_button.mousePressed(clear_canvas);
}

function draw_color_bar() {
  stroke(0);
  strokeWeight(1);
  let rect_width = width / 7;
  
  for (let i = 0; i < 7; i++) {
    let x = i * rect_width;
    let y = height - 20;
    let rect_height = 20;
    fill(pen_color[i])
    rect(x, y, rect_width, rect_height);
    if(current_pen_color == i){
      fill(0);
      textSize(20);
      text("√", x + rect_width / 2 - 10, height);
    }
  }
}

function draw() {
  if (drawing) {
    stroke_weight = stroke_weight_slider.value();
    let point = {
      x: mouseX,
      y: mouseY
    };
    points.push(point);
    stroke(pen_color[current_pen_color]);
    strokeWeight(stroke_weight);
    noFill();
    beginShape();
    for (let pt of points) {
      vertex(pt.x, pt.y);
    }
    endShape();
  }
}

function mousePressed() {
  drawing = true;
  points = [];
}

function mouseReleased() {
  drawing = false;
}

function keyPressed() {
  if (key === ' ') {
    current_pen_color = (current_pen_color + 1) % pen_color.length;
    draw_color_bar();
  }
}

function clear_canvas() {
  points = [];
  background("#ffffff");
  draw_color_bar();
}
