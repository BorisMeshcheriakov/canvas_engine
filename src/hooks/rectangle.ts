import { colors } from "./colors";

class Rectangle {
  private ctx: CanvasRenderingContext2D;
  private active: boolean;
  private x: number;
  private y: number;

  constructor(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    isSelected: boolean
  ) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.active = isSelected;
  }

  draw(x: number = 0, y: number = 0) {
    this.ctx.beginPath();
    this.ctx.rect(x * 100, y * 100, 99, 99);
    this.ctx.fillStyle = this.active ? colors.RED : colors.WHITE;
    this.ctx.strokeStyle = this.active ? colors.RED : colors.BLACK;
    this.ctx.fill();
    this.ctx.stroke();
    this.ctx.closePath();
  }

  setActive(active: boolean) {
    this.active = active;
  }
}

export default Rectangle;
