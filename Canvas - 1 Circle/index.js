let canvas = document.getElementById('canvas');
let context = canvas.getContext("2d");

var window_height = window.innerHeight;
var window_width = window.innerWidth;

canvas.width = window_width;
canvas.height = window_height;

canvas.style.background = "#ffB";

class circle {
    constructor(xpos, ypos, radius, color, text){
        this.xpos = xpos;
        this.ypos = ypos;
        this.radius = radius;
        this.color = color;
        this.text = text;
    }
    draw(context){
        context.beginPath();

        context.strokeStyle = this.color;
        context.textAlign = "center";
        context.textBaseline = "middle";
        context.font = "20px Arial";
        context.fillText(this.text, this.xpos, this.ypos);

        context.lineWidth = 5;
        context.arc(this.xpos, this.ypos, this.radius, 0, Math.PI * 2, false);
        context.stroke();
        context.closePath();
    }
}
let circle_center = 1;

let all_circles = [];

let createCircle = function(circle){
    circle.draw(context);
}

for(var i = 0; i < 10; i++){
    let randomX = Math.random() * window_width;
    let randomY = Math.random() * window_height;
    let my_circle = new circle(randomX,randomY,50,"black", circle_center);
    all_circles.push(my_circle);
    createCircle(all_circles[i]);
    circle_center++;
}


