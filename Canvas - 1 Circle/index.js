let canvas = document.getElementById('canvas');
let context = canvas.getContext("2d");

var window_height = window.innerHeight;
var window_width = window.innerWidth;

canvas.width = window_width;
canvas.height = window_height;

canvas.style.background = "#ffB";

let hit_counter = 0;

class circle {
    constructor(xpos, ypos, radius, color, text, speed){
        this.xpos = xpos;
        this.ypos = ypos;
        this.radius = radius;
        this.color = color;
        this.text = text;
        this.speed = speed;

        this.dx = 1 * this.speed;
        this.dy = 1 * this.speed;
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
    update(){
        this.text = hit_counter;
        context.clearRect(0, 0, window_width, window_height);
        
        this.draw(context);

        if((this.xpos + this.radius) > window_width){
            this.dx = -this.dx;
            hit_counter++;
        }
        if((this.xpos - this.radius) < 0){
            this.dx = -this.dx;
            hit_counter++;
        }
         if((this.ypos + this.radius) > window_height){
            this.dy = -this.dy;
            hit_counter++;
        }
        if((this.ypos - this.radius) < 0){
            this.dy = -this.dy;
            hit_counter++;
        }

        this.xpos += this.dx;
        this.ypos += this.dy;
    }
}

// let circle_center = 1;

let randomX = Math.random() * window_width;
    let randomY = Math.random() * window_height;



let my_circle = new circle(randomX,randomY,50,"black", hit_counter, 5);
my_circle.draw(context);

let updateCircle = function(){
    requestAnimationFrame(updateCircle);
    my_circle.update();
}

updateCircle();
// for(var i = 0; i < 1; i++){
//     let randomX = Math.random() * window_width;
//     let randomY = Math.random() * window_height;
//     let my_circle = new circle(randomX,randomY,50,"black", circle_center, 1);
//     all_circles.push(my_circle);
//     createCircle(all_circles[i]);
//     circle_center++;
// }


