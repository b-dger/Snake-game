class Point {
  constructor(
    private readonly xcoord: number,
    private readonly ycoord: number,
  ) {}

  get x(): number {
    return this.xcoord;
  }

  get y(): number {
    return this.ycoord;
  }
}

export default Point;
