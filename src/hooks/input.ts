class Input {
  private canvas: HTMLCanvasElement;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
  }

  createClickListener(callback: (e: MouseEvent) => void) {
    this.canvas.addEventListener("click", (e) => callback(e));
  }
}

export default Input;
