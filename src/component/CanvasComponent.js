import React, { useState, useRef, useEffect } from "react";
import "../App.css";

function CanvasComponent() {
  const [color, setColor] = useState("#000000");
  const [value, setValue] = useState(0);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    context.fillStyle = "#F5F5F5";
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = color;
    context.font = "bold 100px sans-serif";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillText(value.toString().padStart(2, "0"), centerX, centerY);
  }, [color, value]);

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  const handleValueChange = (event) => {
    setValue(parseInt(event.target.value));
  };

  return (
    <div className="App">
      <canvas ref={canvasRef} width="400" height="300"></canvas>
      <div style={{ textAlign: "center", marginTop: "10px" }}>
        <input type="color" value={color} onChange={handleColorChange} />
        <br />
        <div>
          <input type="number" value={value} onChange={handleValueChange} />
        </div>
      </div>
    </div>
  );
}

export default CanvasComponent;
