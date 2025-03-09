// etch-a-sketch JavaScript file

// Create a flexbox div in the HTML. It should be a specific height and width set to const grid

const grid = document.querySelector("#grid");

// Clone a div 16x16 times and append these to the flex div so that they're a square grid. To do this:
// Assign a div element creation to const row. Style this flex. Will make 16 of these.

const row = document.createElement("div");
row.classList.add("row");

// Assign another div element creation to const gridItem. Style as necessary. Will make 16 of these per row.

const gridItem = document.createElement("div");
gridItem.classList.add("gridItem");

// Iterate the appropriate number of times (16 initially)creating and appending a row div to the original div each time.

for (let i = 1; i <= 16; i++) {
        grid.appendChild(row.cloneNode(true));
}

// Within each row, iterate an additional same number of times for gridItems.
// First, create an array that includes all row constants

const rows = Array.from(grid.querySelectorAll("div"));
rows.forEach(node => {
    for (let i = 1; i <= 16; i++) {
        node.appendChild(gridItem.cloneNode(true));
    }
});

// Add an event listener so that each square of the grid is colored when the mouse hovers over and stays that way

/* const gridItems = document.querySelectorAll(".gridItem");
gridItems.forEach(function(elem) {
    elem.addEventListener("mouseover", (e) => {
        e.style.backgroundColor = "blue";
    });
}); */

const gridItems = document.querySelectorAll(".gridItem");
console.log(gridItems);
gridItems.forEach(function(elem) {
    elem.addEventListener("mouseover", () => {
        elem.style.backgroundColor = "blue";
    });
});


// Add a button at the top that prompts the user when clicked

// When the user inputs the size of the new grid, the old grid is removed and replaced with one of the inputted size

// Set limit on squares to 100