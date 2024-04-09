// Student ID: C0913139
// Student Name: Ananta Poudel

document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById("main");
  const ctx = canvas.getContext("2d");
  let isDrawing = false;
  let lastX = 0;
  let lastY = 0;
  let brushSize = 5;
  // Initial color set to pink
  let color = "#F50057";

  function drawShape(e) {
    if (!isDrawing) return;
    ctx.strokeStyle = color;
    ctx.lineWidth = brushSize;
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
  }

  canvas.addEventListener("mousedown", (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
  });

  canvas.addEventListener("mousemove", drawShape);
  canvas.addEventListener("mouseup", () => (isDrawing = false));
  canvas.addEventListener("mouseout", () => (isDrawing = false));

  // For Black color
  document.getElementById("black").addEventListener("click", () => {
    color = "black";
  });

  // For Pink color
  document.getElementById("pink").addEventListener("click", () => {
    color = "#F50057";
  });

  // For Blue color
  document.getElementById("blue").addEventListener("click", () => {
    color = "#2979FF";
  });
});
