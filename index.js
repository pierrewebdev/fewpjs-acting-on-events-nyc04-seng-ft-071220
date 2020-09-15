// Your code here
let dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4";

document.addEventListener("keydown", function(e) {
    switch(e.key){
        case "ArrowUp":
            moveDodgerUp();
            break;
        case "ArrowDown":
            moveDodgerDown();
            break;
        case "ArrowLeft":
            moveDodgerLeft();
            break;
        case "ArrowRight":
            moveDodgerRight();
            break;
        default:
            console.log("I'm just here");
    }
    
});


function moveDodgerUp(){
    let currentPosition = dodger.style.bottom;
    //let move = currentPosition.split("px")[0]
    dodger.style.bottom = `${parseInt(currentPosition.split("px")[0]) + 20}px`;
}

function moveDodgerDown(){
    let currentPosition = dodger.style.bottom;
    //let move = currentPosition.split("px")[0]
    dodger.style.bottom = `${parseInt(currentPosition.split("px")[0]) - 20}px`;
    console.log(dodger.style.bottom);
}

function moveDodgerLeft(){
    let currentPosition = dodger.style.left;
    //let move = currentPosition.split("px")[0]
    dodger.style.left = `${parseInt(currentPosition.split("px")[0]) - 20}px`;

}

function moveDodgerRight(){
    let currentPosition = dodger.style.left;
    //let move = currentPosition.split("px")[0]
    dodger.style.left = `${parseInt(currentPosition.split("px")[0]) + 20}px`;
}
