class Ball {
  private ctx: CanvasRenderingContext2D;
  private x: number;
  private y: number;
  private radius: number;
  private color: string;
  private moving: boolean;

  constructor(ctx: CanvasRenderingContext2D, x: number, y: number) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.radius = 25;
    this.color = "blue";
    this.moving = false;
  }

  move(x: number, y: number) {
    if (this.moving) {
      return;
    }
    const speed = 100;
    let startTime = performance.now();
    let diffX = this.x - x;
    let diffY = this.y - y;

    const update = () => {
      let current = performance.now();
      if (diffX !== 0 || diffY !== 0) {
        this.moving = true;
        let elapsed = current - startTime;
        if (diffX !== 0) {
          let stepDistanse = Math.round(speed * (elapsed / 1000));
          this.x = diffX > 0 ? this.x - stepDistanse : this.x + stepDistanse;
          diffX = diffX > 0 ? diffX - stepDistanse : diffX + stepDistanse;
        }

        if (diffY !== 0) {
          let stepDistanse = Math.round(speed * (elapsed / 1000));
          this.y = diffY > 0 ? this.y - stepDistanse : this.y + stepDistanse;
          diffY = diffY > 0 ? diffY - stepDistanse : diffY + stepDistanse;
        }

        startTime = current;
      } else {
        this.moving = false;
        clearInterval(updateInterval);
      }
    };

    const updateInterval = setInterval(update, 1000 / 60);
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    this.ctx.closePath();
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
  }
}

export default Ball;
