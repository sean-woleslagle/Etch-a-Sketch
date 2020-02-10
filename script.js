const container = document.querySelector('.container');
const cell = document.getElementsByClassName('square-div');


function createGrid(size) {
    for (i = 0; i < size**2; i++) { // Starting at a size of 0, increase the size of the x and y axis by size squared
        let div = document.createElement('div');
        div.classList.toggle('square-div');
        container.appendChild(div);
    }
}

function hover() {
    cell.addEventListener('click', (event) => {alert('Element clicked through function!');});
}



// Create default grid of 16x16
createGrid(16);