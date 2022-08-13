import Cursor from "./cursor";
import Ball from "./ball";
import Rectangle from "./rectangle";

class Scene {
  private ctx: CanvasRenderingContext2D;
  private balls;
  private mouseX;
  private mouseY;
  private targetX;
  private targetY;
  private playerX;
  private playerY;
  private player;
  private cursor;

  constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
    this.balls = [] as Ball[];
    this.mouseX = 0;
    this.mouseY = 0;
    this.targetX = 0;
    this.targetY = 0;
    this.playerX = 100;
    this.playerY = 100;
    this.player = new Ball(this.ctx, this.playerX, this.playerY);
    this.cursor = new Cursor(this.ctx);
  }

  onInput = (e: MouseEvent) => {
    if (e.type === "mousemove") {
      this.cursor.setCursorPosition(e.offsetX, e.offsetY);
    }

    if (e.type === "click") {
      console.log("click");
    }
  };

  draw() {
    for (let x = 0; x < 40; x++) {
      for (let y = 0; y < 20; y++) {
        let rectangle = new Rectangle(this.ctx);
        rectangle.draw(50 * x, 50 * y);
      }
    }

    this.cursor.drawCursorPosition();
    // const mouseBall = new Ball(this.ctx, this.mouseX, this.mouseY);
    // mouseBall.draw();
    // this.player.draw();
  }
}

export default Scene;
