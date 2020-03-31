const container = document.querySelector('#cells');
const cells = document.querySelectorAll('cell');


const createGrid = function(size) {
    for (let grid = 0; grid < size**2; grid++) { // Starting at a size of 0, increase the size of the x and y axis by size squared
        const cell = document.createElement('div');
        cell.classList.add('cell');
        container.appendChild(cell);
        cell.addEventListener('mouseover', changeColor);
    };
};

const changeColor = function() {
    this.style.backgroundColor = 'black';
};

// Create default grid of 16x16
createGrid(16);