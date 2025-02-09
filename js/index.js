// create a 16x16 grid
// we create 16 rows
// each row has 16 columns

const color = document.getElementById("color");

const grid = document.getElementById("grid");
grid.className = "grid";

const sizeBtn = document.getElementById("size");
let size = sizeBtn.value;

const clearBtn = document.getElementById("clear");

clearBtn.addEventListener("click", () => {
  clearGrid(grid);
  createGrid(grid, size);
});

sizeBtn.addEventListener(
  "change",
  (e) => {
    size = e.target.value;
    if (size > 100) {
      size = 99;
    }
    if (size <= 0) {
      size = 1;
    }
    clearGrid(grid);
    createGrid(grid, size);
  },
  false,
);

/**
 * @param {HTMLDivElement} grid
 * @param {number} size
 */
function createGrid(grid, size) {
  for (let i = 0; i < Math.pow(size, 2); i++) {
    let pixel = document.createElement("div");

    pixel.className = "pixel";
    pixel.id = `pixel-${i}`;
    pixel.style.width = 600 / size + "px";
    pixel.style.height = 600 / size + "px";

    grid.appendChild(pixel);

    pixel.addEventListener(
      "mouseover",
      (e) => {
        e.target.style.backgroundColor = color.value;
      },
      false,
    );
  }
}

/**
 * @param {HTMLDivElement} grid
 */
function clearGrid(grid) {
  let length = grid.children.length;
  let children = grid.children;

  for (let i = 0; i < length; i++) {
    grid.removeChild(children[0]);
  }
}

createGrid(grid, size);
