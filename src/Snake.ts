// import display from "./display";
import Point from "./Point";
// place your code on line 5 above the export statement below

class Snake {
  private currentPosition: Point;
  private direction: string;
  private color: string;

  constructor(color: string) {
    this.currentPosition = new Point(0, 0);
    this.direction = "right"; //Initializing direction to right
    this.color = color;
  }
  turnLeft(): void {
    // Method to turn left
    if (this.direction === "right") {
      // If currently facing right, turn up
      this.direction = "up";
    } else if (this.direction === "up") {
      // If currently facing up, turn left
      this.direction = "left";
    } else if (this.direction === "left") {
      // If currently facing left, turn down
      this.direction = "down";
    } else {
      // If currently facing down, turn right
      this.direction = "right";
    }
  }

  turnRight(): void {
    // Method to turn right
    if (this.direction === "right") {
      // If currently facing right, turn down
      this.direction = "down";
    } else if (this.direction === "down") {
      // If currently facing down, turn left
      this.direction = "left";
    } else if (this.direction === "left") {
      // If currently facing left, turn up
      this.direction = "up";
    } else {
      // If currently facing up, turn right
      this.direction = "right";
    }
  }

  move(): void {
    // Method to move the snake
    let newX = this.currentPosition.x; // Get current x coordinate
    let newY = this.currentPosition.y; // Get current y coordinate

    if (this.direction === "right") {
      // If facing right, increment x coordinate
      newX++;
    } else if (this.direction === "left") {
      // If facing left, decrement x coordinate
      newX--;
    } else if (this.direction === "up") {
      // If facing up, increment y coordinate
      newY++;
    } else if (this.direction === "down") {
      // If facing down, decrement y coordinate
      newY--;
    }

    this.currentPosition = new Point(newX, newY); // Update current position with new coordinates
  }

  // Deprecated method
  /**
   * @deprecated Use turnLeft or turnRight instead.
   */
  turn(): void {
    // Deprecated method to turn snake
    console.warn(
      "The 'turn' method is deprecated. Use 'turnLeft' or 'turnRight' instead.",
    );
    // Defaulting to turnRight for backward compatibility
    this.turnRight();
  }

  getPosition(): Point {
    // Method to get current position
    return this.currentPosition;
  }
}

export default Snake;
