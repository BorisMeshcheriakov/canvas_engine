import React from "react";
import Ball from "./ball";

const useCanvas = () => {
  const canvasRef = React.useRef<null | HTMLCanvasElement>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    if (!ctx) return;
    if (!canvas) return;

    let frameCount = 0;
    let animationFrameId = 0;
    let running = false;

    const clear = (ctx: CanvasRenderingContext2D) => {
      ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
      ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    };

    const ball = new Ball(ctx);

    ctx.canvas.addEventListener("mousemove", function (e) {
      if (!running) {
        clear(ctx);
        ball.x = e.offsetX;
        ball.y = e.offsetY;
        ball.draw();
      }
    });

    ctx.canvas.addEventListener("click", function (e) {
      if (!running) {
        animationFrameId = window.requestAnimationFrame(render);
        running = true;
      } else {
        running = false;
        clear(ctx);
        ball.x = e.offsetX;
        ball.y = e.offsetY;
        ball.draw();
      }
    });

    const draw = () => {
      ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      ball.draw();

      ball.vy *= 0.99;
      ball.vy += 0.25;

      if (ball.y + ball.vy > ctx.canvas.height || ball.y + ball.vy < 0) {
        ball.vy = -ball.vy;
      }
      if (ball.x + ball.vx > ctx.canvas.width || ball.x + ball.vx < 0) {
        ball.vx = -ball.vx;
      }

      ball.x += ball.vx;
      ball.y += ball.vy;
    };

    const render = () => {
      if (!running) return;
      frameCount++;
      draw();
      animationFrameId = window.requestAnimationFrame(render);
    };
    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  console.log(canvasRef.current);
  return { ref: canvasRef };
};

export default useCanvas;
