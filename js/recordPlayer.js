/* This script is for the canvas element */
let centerX = 250;
let centerY = 200;
/* record player rotates at 33 rpm at normal speed. This equals 11880 degrees per minute, so approximate 3 rad per second*/
let rotateAngle = 3 * Math.PI / 180; //~172 degrees

let canvas = document.getElementById("canvas");
let c = canvas.getContext('2d');

function drawVinyl() {
    c.beginPath();
    c.fillStyle = "#1a1a1a"; //paint 12 inch-vinyl, almost black
    c.arc(250, 200, 170, 0, 2 * Math.PI, false);
    c.fill();

    c.beginPath();//half of the labeling of vinyl
    c.fillStyle = "#FF0000"; //red
    c.arc(250, 200, 50, 0, Math.PI, false);
    c.fill();

    c.beginPath();//half of the labeling of vinyl
    c.arc(250, 200, 50, Math.PI, 2 * Math.PI, false);
    c.fillStyle = "#0000FF"; //blue
    c.fill();

    c.beginPath();//7-inch line of vinyl
    c.arc(250, 200, 100, 0, 2 * Math.PI, false);
    c.lineWidth = 3;
    c.strokeStyle = "#0d0d0d"; //almost black
    c.setLineDash([0, 0]);
    c.stroke();

    c.beginPath();//metal rod center
    c.arc(250, 200, 10, 0, 2 * Math.PI, false);
    c.fillStyle = "black";
    c.fill();

    c.beginPath();//outer dots of record player to determine speed irl
    c.setLineDash([6, 6]);
    c.arc(250, 200, 172, 0, 2 * Math.PI, true);
    c.arc(250, 200, 176, 0, 2 * Math.PI, true);
    c.strokeStyle = "grey";
    c.closePath();
    c.stroke();
}

function rotateVinyl() {
    c.translate(centerX, centerY);
    c.rotate(rotateAngle);
    c.translate(-centerX, -centerY);
}

let continueAnimation = false;
//animate the record player using requestAnimationFrame
function animate() {
    c.clearRect(0, 0, canvas.width, canvas.height);
    drawVinyl();
    rotateVinyl();
    if (continueAnimation) {
        requestAnimationFrame(animate); //60 frames per second
    }
}

//function to check if animation is already running, otherwise it would start the animation again (leading to a speed up)
function startAnimation() {
    if (!continueAnimation) {
        continueAnimation = true;
        animate();
    }
}

function stopAnimation() {
    continueAnimation = false;
}

drawVinyl();

function playAudio() {
    var audio = document.getElementById("mymix");
    audio.play();
    startAnimation();
}

function pauseAudio() {
    var audio = document.getElementById("mymix");
    audio.pause();
    stopAnimation();
}