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


// Varaible assignments
const colorSelector = document.getElementById('color-selector')
const fullGrid = document.querySelector(".container");       
const rainbowBtn = document.querySelector(".rainbow");
const clearBtn = document.querySelector(".clear-grid");
const eraserBtn = document.querySelector(".eraser");
const singleColorBtn = document.querySelector(".single-color");
const shaderBtn = document.querySelector(".shader");
const sizeBtn = document.querySelector(".change-size")
const squares = document.querySelectorAll(".grid-square");

// Creates a 16x16 grid of sqaure divs
function createGrid(sideLength) {
    const divContainer = document.querySelector(".container");
    divContainer.replaceChildren();
    for (i = 0; i < sideLength * sideLength; i++) {
        const div = document.createElement("div");
        div.classList.add("grid-square");
        div.style.height = `calc(100% / ${sideLength})`;
        div.style.width = `calc(100% / ${sideLength})`;
        divContainer.append(div);
    }
}

// Adds functionality to rainbow button
function randomColor() {
    let colorR = Math.floor(Math.random() * 256);
    let colorG = Math.floor(Math.random() * 256);
    let colorB = Math.floor(Math.random() * 256);
    return `rgb(${colorR} ${colorG} ${colorB})`
}

function drawRainbow() {
    clearButtonStyle();
    const squares = document.querySelectorAll(".grid-square");
    squares.forEach((square) => {
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = randomColor();
            square.style.opacity = 1;
        })
    })
    rainbowBtn.style.backgroundColor = "red"
};

// Adds functionality to clear grid button
function clearGrid() {
    const squares = document.querySelectorAll(".grid-square");
    squares.forEach(square => {
        square.style.backgroundColor = "";
        square.style.opacity = 1;
    });
}

// Adds functionality to eraser button
function eraseColor() {
    clearButtonStyle();
    const squares = document.querySelectorAll(".grid-square");
    squares.forEach((square) => {
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "";
            square.style.opacity = 1;
        })
    })
    eraserBtn.style.backgroundColor = "red"
}

// Adds functionality to single color button
function singleColor() {
    clearButtonStyle();
    const squares = document.querySelectorAll(".grid-square");
    squares.forEach((square) => {
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = colorSelector.value;
            square.style.opacity = 1;
        })
    })
    singleColorBtn.style.backgroundColor = "red"
}

// Adds functionality to shader button
function colorShading() {
    clearButtonStyle();
    const squares = document.querySelectorAll(".grid-square");
    squares.forEach((square) => {
        let opacity = 0.1;
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = colorSelector.value;
            square.style.opacity = opacity;
            opacity += 0.1;
            if (opacity > 1) {
                opacity = 1;
            }
        })
    })
    shaderBtn.style.backgroundColor = "red"
}
    
// Adds functionality to change size button
function changeGridSize() {
    let gridSize = Number(prompt("Please enter a number between 2 - 100."));
    while (gridSize < 2 || gridSize > 100) {
        gridSize = Number(prompt("Please try again. Number needs to be between 2 - 100"));
    } if (gridSize >= 2 && gridSize <= 100) {
        return gridSize
    }
    return gridSize
}

function resetGrid() {
    let sideLength = changeGridSize();
    createGrid(sideLength);
}

//Event Listeners
rainbowBtn.addEventListener("click", () => {
    drawRainbow();
    singleColorBtn.removeEventListener('click', singleColor);
    eraserBtn.removeEventListener('click', eraseColor);
    shaderBtn.removeEventListener('click', colorShading);
});
eraserBtn.addEventListener("click", () => {
    eraseColor();
    singleColorBtn.removeEventListener('click', singleColor);
    rainbowBtn.removeEventListener('click', drawRainbow);
    shaderBtn.removeEventListener('click', colorShading);
});
singleColorBtn.addEventListener("click", () => {
    singleColor();
    rainbowBtn.removeEventListener('click', drawRainbow);
    eraserBtn.removeEventListener('click', eraseColor);
    shaderBtn.removeEventListener('click', colorShading);
})
shaderBtn.addEventListener("click", () => {
    colorShading();
    singleColorBtn.removeEventListener('click', singleColor);
    rainbowBtn.removeEventListener('click', drawRainbow);
    eraserBtn.removeEventListener('click', eraseColor);
});
sizeBtn.addEventListener("click", resetGrid);
clearBtn.addEventListener("click", clearGrid);


// sets default grid size when page is loaded
window.onload = () => {
    createGrid(16);
}

function clearButtonStyle() {
    singleColorBtn.style.backgroundColor = ""
    rainbowBtn.style.backgroundColor = ""
    eraserBtn.style.backgroundColor = ""
    shaderBtn.style.backgroundColor = ""
}