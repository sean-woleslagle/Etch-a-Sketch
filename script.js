const container = document.querySelector('#cells');
const cells = document.querySelectorAll('cell');

// Create grid
const createGrid = function(size) {
    for (let grid = 0; grid < size**2; grid++) { // Starting at a size of 0, increase the size of the x and y axis by size squared
        const cell = document.createElement('div');
        cell.classList.add('cell');
        container.appendChild(cell);
        //cell.addEventListener('mouseover', changeColor);
    };
};

// Delete grid
const deleteGrid = function() {
    for (let grid = cells.length -1; grid >= 0; grid--) {
        container.removeChild(container.childNodes[i]);
    }
}

// Mouseover 
const mouseOver = function() {
    cells.forEach((div) => {
        div.addEventListener('mouseover', (e) => {
            div.classList.add('draw');
        });
    });
}

let colors = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'indigo',
    'violet'
];

const changeColor = function() {
    this.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)];
};


// Create default grid of 16x16
createGrid(16);
mouseOver();