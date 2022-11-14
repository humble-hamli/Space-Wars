let P1;

class Ship {
  constructor() {
    this.pos = { x: 0, y: 0 };
    this.speed = { x: 0, y: 0 };
    this.size = 10;
  }
  setStartPosition() {
    this.pos.x = width / 2
    this.pos.y = height / 2
  }
  showShip() {
    beginShape();
    //Main Origin Point
    vertex(this.pos.x, this.pos.y)
    vertex(this.pos.x - this.size/2, this.pos.y - this.size)
    vertex(this.pos.x + this.size/2, this.pos.y - this.size)
    endShape(CLOSE)
  }

  turnLeft() {
  }

}

function playSpacewars() {
  P1 = new Ship()
  P1.setStartPosition()
  P1.turnLeft()
  P1.showShip()
}
