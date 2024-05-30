// Create 16x16 using JavaScript, use DOM manipulation - DO NOT add them to the html file directly the only div in the html file should be for the container to hold the grid
    // use Flexbox to makes divs appear as a grid, note: be careful with with borders and margins, they can adjust the size of the squares
// use a hover effect on the grid so the squares change color when the mouse passes over them and ends when the mouse leaves a square
// Color can be changed by adding a new class to the div, or change the divs background color us javaScript
// Add a button that will send the user a popup asking for the number of sqaures for each side of the grid
    // once entered existing grid should be removed and new grid should be generated on the same total space as the previous grid
    // User input should be capped at 100, any more and it can cause issues
    // Function needs to run after button click

// extra Features
    // random colors when passing over square in the grid
    // Progressive darkening effect, squares get darker by 10% whith each pass over the same square, being the darkest it can be after 10 passes
        // CSS opacity would be used here

// Creates a 16x16 grid of sqaure divs
function createGrid(sideLength) {
    const divContainer = document.querySelector(".container");
    for (i = 0; i < sideLength * sideLength; i++) {
        const div = document.createElement("div");
        div.classList.add("grid-square");
        div.style.height = `calc(100% / ${sideLength})`;
        div.style.width = `calc(100% / ${sideLength})`;
        divContainer.append(div);
    }
}

// colors grid squares on mouseover event
const colorSelector = document.getElementById('color-selector')
const fullGrid = document.querySelector(".container");
fullGrid.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = colorSelector.value;
})

colorSelector.addEventListener("click", drawSelectedColor)

function drawSelectedColor() {
    fullGrid.addEventListener("mouseover", (event) => {
        event.target.style.backgroundColor = colorSelector.value;
    })
}

// Adds functionality to rainbow button
const rainbowBtn = document.querySelector(".rainbow");
rainbowBtn.addEventListener("click", drawRainbow);

function randomColor() {
    let colorR = Math.floor(Math.random() * 256);
    let colorG = Math.floor(Math.random() * 256);
    let colorB = Math.floor(Math.random() * 256);
    return `rgb(${colorR} ${colorG} ${colorB})`
}

function drawRainbow() {
    fullGrid.addEventListener("mouseover", (event) => {
        event.target.style.backgroundColor = randomColor();
    })
};

// Adds functionality to clear grid button
const clearBtn = document.querySelector(".clear-grid");
clearBtn.addEventListener("click", clearGrid);

function clearGrid() {
    const squares = document.querySelectorAll(".grid-square");
    squares.forEach(square => {
        square.style.backgroundColor = "white";
    });
}

// Adds functionality to eraser button
const eraserBtn = document.querySelector(".eraser");
eraserBtn.addEventListener("click", eraseColor);

function eraseColor() {
    fullGrid.addEventListener("mouseover", (event) => {
        event.target.style.backgroundColor = "white";
    })
}

// sets default grid size when page is loaded
window.onload = () => {
    createGrid(16);
}