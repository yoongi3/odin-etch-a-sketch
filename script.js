const boxSize = 512;
const maxSize = 100;

const container = document.querySelector(".grid-container");
let rows = document.getElementsByClassName("row");
let cells = document.getElementsByClassName("cells");

const setGridBtn = document.getElementById("grid_size");
setGridBtn.addEventListener('click', setGridSize)

const defaultSize = 16;
const defaultMode = 'mono'

let currentMode = defaultMode;

const rgbBtn = document.getElementById("rgb_toggle");
const monoBtn = document.getElementById("mono_toggle");

rgbBtn.onclick = () => toggleMode('rainbow');
monoBtn.onclick = () => toggleMode('mono');

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
    // Set cell size to fit container
    gridCells.forEach(cells => cells.style.height = boxSize/gridSize);
    gridCells.forEach(cells => cells.style.width = boxSize/gridSize);
    // Add OnClick for each cell 
    gridCells.forEach(cells => cells.addEventListener('mouseover', changeColor));
}

function toggleMode(mode){
    currentMode = mode;
    console.log(currentMode);
}

function changeColor(){
    if(currentMode === 'rainbow'){
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);
        this.style.backgroundColor = `rgb(${r},${g},${b})`;
    }
    if(currentMode === 'mono')
        this.style.backgroundColor = '#000000';
}

function setGridSize(){
    let gridSize = prompt("Enter grid width", "16");

    if(gridSize > maxSize || gridSize < 1){
        alert("Enter an integer between 1 and 100", "16");
        setGridSize();
    }
    if(gridSize <= maxSize && gridSize >= 1){
        createGrid(gridSize);
    }
}

createGrid(defaultSize);
