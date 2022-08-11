import React from "react";

const useCanvas = () => {
  const canvasRef = React.useRef(null);

  console.log(canvasRef);

  return { ref: canvasRef };
};

export default useCanvas;
