class Rectangle {
  private ctx: CanvasRenderingContext2D;

  constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
  }

  draw(x: number = 0, y: number = 0) {
    this.ctx.beginPath();
    this.ctx.rect(x, y, 50, 50);
    this.ctx.fillStyle = "#fff";
    this.ctx.strokeStyle = "#000";
    this.ctx.fill();
    this.ctx.stroke();
    this.ctx.closePath();
  }
}

export default Rectangle;
