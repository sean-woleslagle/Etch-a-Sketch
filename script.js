const grid = document.querySelector("#grid-container");


// Create default grid of 16x16
createGrid(16);

function createGrid(size) {
    for (i = 0; i < size**2; i++) { // Starting at a size of 0, increase the size of the x and y axis by size squared
        let cell = document.createElement("div");
        cell++;
    }
}