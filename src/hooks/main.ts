import Ball from "./ball";

class App {
  private canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;
  private frameCount: number;
  public animationFrameId: number;
  private running: boolean = true;
  private ball: Ball;

  constructor(appCanvas: HTMLCanvasElement) {
    let canvas = appCanvas;
    let context = canvas.getContext("2d") as CanvasRenderingContext2D;

    this.canvas = canvas;
    this.context = context;
    this.frameCount = 0;
    this.animationFrameId = 0;
    this.ball = new Ball(this.context);
  }

  private draw(): void {
    this.context.fillRect(
      0,
      0,
      this.context.canvas.width,
      this.context.canvas.height
    );
    this.ball.draw();

    this.ball.vy *= 0.99;
    this.ball.vy += 0.25;

    if (
      this.ball.y + this.ball.vy > this.context.canvas.height ||
      this.ball.y + this.ball.vy < 0
    ) {
      this.ball.vy = -this.ball.vy;
    }
    if (
      this.ball.x + this.ball.vx > this.context.canvas.width ||
      this.ball.x + this.ball.vx < 0
    ) {
      this.ball.vx = -this.ball.vx;
    }

    this.ball.x += this.ball.vx;
    this.ball.y += this.ball.vy;
  }

  clear() {
    this.context.fillStyle = "rgba(255, 255, 255, 0.3)";
    this.context.fillRect(
      0,
      0,
      this.context.canvas.width,
      this.context.canvas.height
    );
  }

  public render = () => {
    if (!this.running) return;
    this.frameCount++;
    this.draw();
    this.animationFrameId = window.requestAnimationFrame(this.render);
  };

  cancel() {
    return window.cancelAnimationFrame(this.animationFrameId);
  }
}

export default App;
