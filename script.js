const content = document.querySelector("#content");
let brightness = 100;

function createDiv(rows, cols) {
  for (i = 0; i < rows * cols; i++) {
    let cell = document.createElement("div");
    cell.style.setProperty("width", `calc(100% * (1 / ${rows}) - 1px)`);
    cell.addEventListener("mouseover", (e) => {
      const rgbRandom = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
        Math.random() * 255
      )}, ${Math.floor(Math.random() * 255)})`;

      cell.style.backgroundColor = rgbRandom;
      cell.style.filter = `brightness(${(brightness -= 1)}%)`;
    });
    content.appendChild(cell).className = "grid-item";
  }
}

const button = document.querySelector(".create button");

button.addEventListener("click", (e) => {
  popUp();
});

function popUp() {
  const grid = prompt("How many grids?");

  if (grid > 0) {
    // remove previous grid
    while (content.firstChild) content.removeChild(content.lastChild);
    brightness = 100;
    createDiv(grid, grid);
  }
}

createDiv(16, 16);
