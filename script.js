const grid = document.getElementById("grid");

function makeGrid(rows,cols) {
    grid.style.setProperty("--grid-rows", rows);
    grid.style.setProperty("--grid-cols", cols);
    for (i = 0; i < (rows * cols); i++) {
        let cell = document.createElement("div");
        cell.innerHTML = (i + 1);
        grid.appendChild(cell).className = "grid-cell";
    }
} 

makeGrid(16,16);