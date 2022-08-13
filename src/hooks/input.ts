class Input {
  private canvas: HTMLCanvasElement;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
  }

  appendListenes(callback: (e: MouseEvent) => void) {
    this.canvas.addEventListener("click", (e) => callback(e));
    this.canvas.addEventListener("mousemove", (e) => callback(e));
  }
}

export default Input;
