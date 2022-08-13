class Cursor {
  private x: number;
  private y: number;
  private ctx;
  constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
    this.x = 0;
    this.y = 0;
  }

  drawCursorPosition() {
    this.ctx.beginPath();
    this.ctx.fillStyle = "#000000";
    this.ctx.font = "14px serif";
    this.ctx.fillText(`Positon X: ${this.x.toString()}`, 10, 40);
    this.ctx.fillText(`Positon Y: ${this.y.toString()}`, 10, 60);
    this.ctx.closePath();
  }

  setCursorPosition(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

export default Cursor;
