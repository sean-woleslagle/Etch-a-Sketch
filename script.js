const container = document.querySelector('.container');
const cells = document.getElementsByClassName('square-div');

function createGrid(size) {
    for (i = 0; i < size**2; i++) { // Starting at a size of 0, increase the size of the x and y axis by size squared
        let div = document.createElement('div');
        div.classList.toggle('square-div');
        container.appendChild(div);
    }
}
// Create default grid of 16x16
createGrid(16);


function changeColor() {
    let div = document.querySelector('.square-div');
    div.style.color = "red";
}

function hover() {
    const numCells = cells.length;
    for (i = 0; i < numCells; i++) {
        cells[i].addEventListener('mouseover', (event) => changeColor());
    }
}

hover();