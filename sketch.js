let shapes = [];

function setup() {
  createCanvas(400, 400);
  background(220);
  noStroke();
  frameRate(10); // Experimenting with frameRate from p5.js documentation
}

function draw() {
  background(220, 50); // Creates a fading trail effect
  
  // Generate random shapes
  for (let i = 0; i < 5; i++) {
    let shapeType = floor(random(3)); // 0 for circle, 1 for rectangle, 2 for triangle
    let x = random(width);
    let y = random(height);
    let size = random(20, 50);
    let col = color(random(255), random(255), random(255));
    shapes.push({ shapeType, x, y, size, col });
  }

  // Draw shapes
  for (let shape of shapes) {
    fill(shape.col);
    if (shape.shapeType === 0) {
      ellipse(shape.x, shape.y, shape.size);
    } else if (shape.shapeType === 1) {
      rect(shape.x, shape.y, shape.size, shape.size);
    } else if (shape.shapeType === 2) {
      triangle(
        shape.x, shape.y - shape.size / 2,
        shape.x - shape.size / 2, shape.y + shape.size / 2,
        shape.x + shape.size / 2, shape.y + shape.size / 2
      );
    }
  }

  if (shapes.length > 50) {
    shapes.splice(0, shapes.length - 50); // Keep only the last 50 shapes
  }
}

function mousePressed() {
  shapes = []; // Clear shapes on mouse press
}
