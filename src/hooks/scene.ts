import Cursor from "./cursor";
import Rectangle from "./rectangle";

class Scene {
  private ctx: CanvasRenderingContext2D;
  private cursor;

  constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
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
  }
}

export default Scene;
