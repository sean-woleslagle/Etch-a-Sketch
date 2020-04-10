let container = document.querySelector('#cells');
let cells = document.querySelectorAll('div.cell');

// Create grid
const createGrid = function(size) {
    let container = document.querySelector('#cells');
    for (let grid = 0; grid < size; grid++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        container.appendChild(cell);
        //cell.addEventListener('mouseover', changeColor);
    };
};

// Delete grid
const deleteGrid = function() {
    let container = document.querySelector('#cells');
    let cells = document.querySelectorAll('div.cell');
    for (let grid = cells.length -1; grid >= 0; grid--) {
        container.removeChild(container.childNodes[grid]);
    }
}

// Mouseover 
const mouseOver = function() {
    let cells = document.querySelectorAll('div.cell');
    cells.forEach((div) => {
        div.addEventListener('mouseover', (e) => {
            div.classList.add('draw');
        });
    });
}

const mouseOverRainbow = function() {
    let cells = document.querySelectorAll('div.cell');
    cells.forEach((div) => { 
        div.addEventListener('mouseover', (e) => {
            let randomColor = Math.floor(Math.random()*16777215).toString(16);
            div.style.backgroundColor = '#' + randomColor;
        });
    });
}

const mouseOverBlack = function() {
    let cells = document.querySelectorAll('div.cell');
    cells.forEach((div) => { 
        let colorFade = 100;
        div.addEventListener('mouseover', (e) => {
            colorFade -= 10;
            div.style.backgroundColor = 'hsl(0, 0%, ' + colorFade + '%)';
        });
    });
}

const gridPrompt = function() {
    gridWidth = prompt('Please define drawing board dimensions between 2 and 150:', '16');
    if (isNaN(gridWidth) || gridWidth < 2 || gridWidth > 150) {
        gridWidth = prompt('Invalid entry! Please define drawing board dimensions between 2 and 150:', '16');
    } else {
        let gridSize = gridWidth*gridWidth;
        document.querySelector('#cells').style.setProperty('--colNum', gridWidth);
        createGrid(gridSize);
    }
}

const newGridButton = document.querySelector('#newGrid');
newGridButton.addEventListener('click', (e) => {
    deleteGrid(gridSize);
    gridPrompt();
    mouseOver();
});

let colorButton = document.querySelector('#colorDraw');
colorButton.addEventListener('click', (e) => {
mouseOverRainbow();
});

let grayscaleButton = document.querySelector('#grayscaleDraw');
grayscaleButton.addEventListener('click', (e) => {
mouseOverBlack();
});


// Create default grid of 16x16
let gridWidth = 16;
let gridSize = gridWidth * gridWidth;
createGrid(gridSize);
mouseOver();