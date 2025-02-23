const canvas = document.querySelector(".canvas-container");
const width = 480;
const height = 480;

displaySquares();


function displaySquares(){
    console.log("starting!");
    console.log(width);
    for(let i = 0; i < 64; i++){
        for(let j = 0; j < 64; j++){
            let square = document.createElement("div");
            square.classList.add("square")
            square.style.width = width/64 + "px";
            square.style.height = height/64 + "px";
            canvas.appendChild(square);
        }
    }
}