let P1;

class Ship {
  constructor() {
    this.pos = { x: 0, y: 0 };
    this.rotation = 180
    this.speed = { x: 0, y: 1, max:10 };
    this.size = 10;
  }
  setStartPosition() {
    this.pos.x = 0;
    this.pos.y = 0;
  }

  updatePosition() {
    
    this.pos.x += this.speed.x
    this.pos.y += this.speed.y

    //Set Boundaries for Spaceship
    if (this.pos.x > width/2) {
        this.pos.x = -width/2
    } else if (this.pos.x < -width/2) {
        this.pos.x = width/2
    }

    if (this.pos.y > height/2) {
        this.pos.y = -height/2
    } else if (this.pos.y < -height/2) {
        this.pos.y = height/2
    }
  }

  updateRotation() {
    translate(0,-this.pos.y)
    rotate(this.rotation)
  }


  drawShip() {
    // translate(0,-this.pos.y)
    beginShape();
    //Main Origin Point
    vertex(this.pos.x, this.pos.y);
    translate(0,-this.pos.y)
    vertex(this.pos.x - this.size / 2, this.pos.y - this.size);
    vertex(this.pos.x + this.size / 2, this.pos.y - this.size);
    endShape(CLOSE);
  }

  turnLeft() {
    this.rotation -= 30
    console.log(this.rotation)
  }

  turnRight() {
    this.rotation += 30
    console.log(this.rotation)
  }

  accelerate() {
    this.speed.y += 1
  }

  slowDown() {
    this.speed.y -= 1
  }
}

//Define Players
P1 = new Ship()

function playSpacewars() {
  push();
  translate(width / 2, height / 2)
  P1.updatePosition()
  P1.updateRotation()
  P1.drawShip()
  console.log(P1.pos.y, P1.pos.x)
  pop();
}

//Controls
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    console.log("Turn Left")
    P1.turnLeft();
  } else if (keyCode === RIGHT_ARROW) {
    console.log("Turn Right")
    P1.turnRight();
  } else if (keyCode === UP_ARROW) {
    console.log("Move Up")
    P1.accelerate()
  } else if (keyCode === DOWN_ARROW) {
    P1.slowDown()
  }
}
