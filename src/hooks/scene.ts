import Cursor from "./cursor";
import Rectangle from "./rectangle";

class Scene {
  private ctx: CanvasRenderingContext2D;
  private cursor;
  private map: Rectangle[][];
  private selected: { x: number; y: number } | null;

  constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
    this.selected = null;
    this.cursor = new Cursor(this.ctx);
    this.map = [];
  }

  onInput = (e: MouseEvent) => {
    if (e.type === "mousemove") {
      this.cursor.setCursorPosition(e.offsetX, e.offsetY);
      let x = Math.floor(e.offsetX / 100);
      let y = Math.floor(e.offsetY / 100);
      if (this.selected?.x !== x || this.selected?.y !== y) {
        this.updateMapSelection(x, y);
      }
    }

    if (e.type === "click") {
      let x = Math.ceil(e.offsetX / 100) - 1;
      let y = Math.ceil(e.offsetY / 100) - 1;

      console.log("click", x, y);
    }
  };

  createMap() {
    const map: Rectangle[][] = [];
    for (let x = 0; x < 8; x++) {
      const row: Rectangle[] = [];
      for (let y = 0; y < 8; y++) {
        let isSelected = false;
        if (this.selected) {
          isSelected = x === this.selected.x && y === this.selected.y;
        }
        let rectangle = new Rectangle(this.ctx, x, y, isSelected);
        row.push(rectangle);
      }
      map.push(row);
    }
    this.map = map;
  }

  updateMapSelection(x: number, y: number) {
    if (this.selected) {
      const prevX = this.selected?.x;
      const prevY = this.selected?.y;
      this.map[prevX][prevY].setActive(false);
    }

    this.map[x][y].setActive(true);
    this.selected = { x, y };
  }

  renderMap() {
    this.map.forEach((row, x) =>
      row.forEach((rectangle, y) => rectangle.draw(x, y))
    );
  }

  draw() {
    this.renderMap();
    this.cursor.drawCursorPosition();
  }
}

export default Scene;
