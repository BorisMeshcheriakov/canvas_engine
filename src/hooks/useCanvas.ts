import React from "react";
import Ball from "./ball";
import App from "./main";

const useCanvas = () => {
  const canvasRef = React.useRef<null | HTMLCanvasElement>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const app = new App(canvas);
    // const ctx = app.context;

    // const ball = new Ball(ctx);

    // ctx.canvas.addEventListener("mousemove", function (e) {
    //   if (!app.running) {
    //     app.clear();
    //     ball.x = e.offsetX;
    //     ball.y = e.offsetY;
    //     ball.draw();
    //   }
    // });

    // ctx.canvas.addEventListener("click", function (e) {
    //   if (!app.running) {
    //     app.animationFrameId = window.requestAnimationFrame(() => app.render);
    //     app.running = true;
    //   } else {
    //     app.running = false;
    //     app.clear();
    //     ball.x = e.offsetX;
    //     ball.y = e.offsetY;
    //     ball.draw();
    //   }
    // });

    app.render();

    return () => {
      app.cancel();
    };
  }, []);

  return { ref: canvasRef };
};

export default useCanvas;
