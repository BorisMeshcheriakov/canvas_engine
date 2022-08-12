class Ball {
  ctx: CanvasRenderingContext2D;
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;

  constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
    this.x = 100;
    this.y = 100;
    this.vx = 5;
    this.vy = 2;
    this.radius = 25;
    this.color = "blue";
  }

  draw() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    this.ctx.closePath();
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
  }
}

export default Ball;
