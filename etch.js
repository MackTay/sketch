// etch-a-sketch JavaScript file

// Prompt user for a grid size when button is clicked
// After input, the old grid is removed and replaced with one of the inputted size

let gridSize = 16;
document.addEventListener("DOMContentLoaded", () => {
    createGrid(gridSize);
});
const btn = document.querySelector("button");
btn.addEventListener("click", () => {
    const parent = document.querySelector("#grid")
    while (parent.firstChild) {
        parent.firstChild.remove()
    }
    gridSize = prompt("Enter grid size up to 100 tiles:", "16");
    createGrid(gridSize);
});

//Assign contents for the grid, rows, and individual tiles. Iterate 16 rows and 16 tiles for each.
const grid = document.querySelector("#grid");

const row = document.createElement("div");
row.classList.add("row");

const gridItem = document.createElement("div");
gridItem.classList.add("gridItem");

function createGrid(dimension) {
    if (gridSize > 100) {
        return alert("Too large. Enter grid size up to 100");
    }
    let i = 1;
    while (i <= dimension) {
        grid.appendChild(row.cloneNode(true));
        i++;
    }

    let rows = Array.from(grid.querySelectorAll("div"));
    rows.forEach(node => {
        let i = 1;
        while (i <= dimension) {
            node.appendChild(gridItem.cloneNode(true));
            i++;
        }
    });

    grid.addEventListener("mouseover", (e) => {
        if (e.target.classList.contains("gridItem")) {
            e.target.style.backgroundColor = "blue";
        }
    });
}

// Set limit on squares to 100