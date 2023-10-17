let canvas = document.getElementById('canvas');
let context = canvas.getContext("2d");

var window_height = window.innerHeight;
var window_width = window.innerWidth;

canvas.width = window_width;
canvas.height = window_height;

canvas.style.background = "#ddf";


const data = [
    200,
    10,
    170,
    100,
    80,
    50,
    350,
    20,
    60,
    200,
]

const start_value = data[0];
const distance = canvas.width / data.length;
const start_point = 0;


context.beginPath();
context.lineWith = 3;
context.strokeStyle = '#f56';

context.moveTo(start_point, start_value);

data.forEach( (element, index) => {
    const new_distance = start_point + (distance * (index + 1));
    context.lineTo(new_distance, element);
});

context.lineTo(canvas.width, canvas.height);
context.lineTo(start_point, canvas.height);
context.lineTo(start_point, start_value);


context.fillStyle = 'grey';
context.fill();

context.stroke();
context.closePath();





// class Image {
//     constructor(imagePath, xpos, ypos, width, height){
//         this.imagePath = imagePath;
//         this.xpos = xpos;
//         this.ypos = ypos;
//         this.width = width;
//         this.height = height;
//     }
// }

// function createImage(context, imagePath, xpos, ypos, width, height) {
//     let myImage = document.createElement('img');
//     myImage.src = imagePath;
//     myImage.onload = function() {
//       context.drawImage(myImage, xpos, ypos, width, height);
//     }
// }


// let image = new Image('../images/computer.jpg', 100, 50, 200, 200);
// createImage(context,image.imagePath, image.xpos, image.ypos, image.width, image.height);