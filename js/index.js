/**
 * @type {Array<HTMLDivElement>} boxes
 */

// create a 16x16 grid
// we create 16 rows
// each row has 16 columns

/**
 * @param {HTMLDivElement} grid
 * @param {number} size
 */
function createGrid(grid, size) {
  for (let i = 0; i < Math.pow(size, 2); i++) {
    let pixel = document.createElement("div");
    pixel.className = "pixel";
    pixel.id = `pixel-${i}`;
    pixel.style.width = 600 / 16 + "px"
    pixel.style.height = 600 / 16 + "px"
    grid.appendChild(pixel)
    pixel.addEventListener("mouseover", () => {
      pixel.style.backgroundColor = "#000"
    })
  }
}

const grid = document.getElementById("grid");
grid.className = "grid";

createGrid(grid, 16);
