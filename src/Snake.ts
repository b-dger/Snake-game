// import display from "./display";

// place your code on line 5 above the export statement below

class Snake {
  private currentPosition: number;
  private currentDirection: number;
  private color: string;

  constructor(color: string) {
    this.currentPosition = 0;
    this.currentDirection = 1; //Forwards
    this.color = color;
  }

  move(squaresMoved: number): void {
    if (this.currentDirection === 1) {
      //Facing forwards increase position
      this.currentPosition += squaresMoved;
    } else {
      //Facing backwards decrease position
      this.currentPosition -= squaresMoved;
    }
  }

  turn(): void {
    if (this.currentDirection === 1) {
      //Facing forwards change direction to backwards
      this.currentDirection = -1;
    } else {
      //Facing backwards change direction to forwards
      this.currentDirection = 1;
    }
  }

  get position(): number {
    return this.currentPosition;
  }
}

export default Snake;
