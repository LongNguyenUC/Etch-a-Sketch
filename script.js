const canvas = document.querySelector(".canvas-container");
const changeSizeButton = document.querySelector("#changeSizeButton")
const width = 480;
const height = 480;

displaySquares(16);


function displaySquares(squareAmount){
    console.log("starting!");
    console.log(width);
    for(let i = 0; i < squareAmount; i++){
        for(let j = 0; j < squareAmount; j++){
            let square = document.createElement("div");
            square.classList.add("square")
            square.style.width = width/squareAmount + "px";
            square.style.height = height/squareAmount + "px";
            square.addEventListener("mouseover", colorSquare);
            canvas.appendChild(square);
        }
    }
}

function colorSquare(e){
    e.target.style.backgroundColor = "black";
}

function changeCanvasSize(){
    let squareAmount = prompt("Enter a value to change the number of squares per side for the canvas.", "100");
    if(!isNaN(squareAmount) && squareAmount <= 100 && squareAmount >= 1){
        canvas.textContent ="";
        displaySquares(squareAmount);
    }
}

changeSizeButton.addEventListener("click", changeCanvasSize);