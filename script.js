const container = document.getElementById("container");
let rows = document.getElementsByClassName("row");
let cells = document.getElementsByClassName("cell");

function createGrid(gridSize){
    // Create Rows
    for(i=0; i<gridSize; i++){
        let newRow = document.createElement("div");
        container.appendChild(newRow).className = "row";
        // Create Columns
        for(j=0; j<gridSize; j++){
            let newCell = document.createElement("div");
            rows[i].appendChild(newCell).className = "cells";
        }
    }

    var gridCells = document.querySelectorAll('.cells'); 
    gridCells.forEach(cells => cells.addEventListener('click', changeColor));
}

function changeColor(){
    this.style.backgroundColor = '#ff9999';
    console.log("change");
}

createGrid(16);

