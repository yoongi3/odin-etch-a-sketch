const boxSize = 512;
const maxSize = 100;

const container = document.getElementById("grid_container");
let rows = document.getElementsByClassName("row");
let cells = document.getElementsByClassName("cells");

const setGridBtn = document.getElementById("grid_size");
setGridBtn.addEventListener('click', setGridSize)

function createGrid(gridSize){
    while (container.lastElementChild) {
        container.removeChild(container.lastElementChild);
    }

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
    gridCells.forEach(cells => cells.style.height = boxSize/gridSize);
    gridCells.forEach(cells => cells.style.width = boxSize/gridSize);
    gridCells.forEach(cells => cells.addEventListener('click', changeColor));
}

function changeColor(){
    this.style.backgroundColor = '#ff9999';
}

function setGridSize(){
    let gridSize = prompt("Enter grid width", "16");

    if(gridSize > maxSize){
        alert("Enter an integer between 1 and 100", "16");
        setGridSize();
    }
    if(gridSize <= maxSize){
        createGrid(gridSize);
    }
}

