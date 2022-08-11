import { useCanvas } from "@hooks";
import React from "react";

const Canvas = () => {
  const { ref } = useCanvas();
  return (
    <canvas
      style={{ border: "1px solid black" }}
      ref={ref}
      width={1366}
      height={768}
    ></canvas>
  );
};

export default Canvas;
