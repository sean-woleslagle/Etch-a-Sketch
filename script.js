const container = document.querySelector('.container');
const cell = document.querySelectorAll('.square-div');


<<<<<<< HEAD

function createGrid(size) {
    for (i = 0; i < size**2; i++) { // Starting at a size of 0, increase the size of the x and y axis by size squared
        let cell = document.createElement("div");
        cell.classList.add("cell");
        grid.appendChild(cell);;
    }
}

=======
function createGrid(size) {
    for (i = 0; i < size**2; i++) { // Starting at a size of 0, increase the size of the x and y axis by size squared
        let div = document.createElement('div');
        div.classList.toggle('square-div');
        container.appendChild(div);
    }
}

function hover() {
    cell.forEach(cell => {cell.addEventListener('mouseover', console.log('hello!'))});
}

console.log(hover());




>>>>>>> Made changes to JS
// Create default grid of 16x16
createGrid(16);