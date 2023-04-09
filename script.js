const container = document.getElementById("container");
let rows = document.getElementsByClassName("row");
let cells = document.getElementsByClassName("cell");

function createGrid(gridSize){
    // Create Rows
    for(i=0; i<gridSize; i++){
        let newRow = document.createElement("div");
        container.appendChild(newRow).className = "row";
        console.log("row"+(i+1))

        // Create Columns
        for(j=0; j<gridSize; j++){
            let newCell = document.createElement("div");
            rows[i].appendChild(newCell).className = "cell";
            console.log("column"+(j+1))
        }
    }
}

createGrid(16);

