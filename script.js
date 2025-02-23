const canvas = document.querySelector(".canvas-container");
const width = 480;
const height = 480;

displaySquares();


function displaySquares(){
    console.log("starting!");
    console.log(width);
    for(let i = 0; i < 16; i++){
        for(let j = 0; j < 16; j++){
            let square = document.createElement("div");
            square.classList.add("square")
            square.style.width = width/16 + "px";
            square.style.height = height/16 + "px";
            square.addEventListener("mouseover", colorSquare);
            canvas.appendChild(square);
        }
    }
}

function colorSquare(e){
    e.target.style.backgroundColor = "black";
}