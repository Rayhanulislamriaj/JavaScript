let canvas = document.getElementById('canvas');
let context = canvas.getContext("2d");

var window_height = window.innerHeight;
var window_width = window.innerWidth;

canvas.width = window_width;
canvas.height = window_height;

canvas.style.background = "#ffB";



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
        
        
        
        this.draw(context);

        if((this.xpos + this.radius) > window_width){
            this.dx = -this.dx;
            
        }
        if((this.xpos - this.radius) < 0){
            this.dx = -this.dx;
            
        }
         if((this.ypos + this.radius) > window_height){
            this.dy = -this.dy;
            
        }
        if((this.ypos - this.radius) < 0){
            this.dy = -this.dy;
            
        }

        this.xpos += this.dx;
        this.ypos += this.dy;
    }
}

// let circle_center = 1;

let randomX = Math.random() * window_width;
    let randomY = Math.random() * window_height;

let getDistance = function(xpos1,ypos1,xpos2,ypos2){
    var result = Math.sqrt(Math.pow(xpos2 - xpos1, 2) + Math.pow(ypos2 - ypos1, 2));
    return result;
}
console.log(getDistance(circle1.xpos, circle1.ypos))

let my_circle1 = new circle(500,500,50,"black", 'A', 0);
let my_circle2 = new circle(300,300,200,"black", 'B', 0);


my_circle1.draw(context);
my_circle2.draw(context);

let updateCircle = function(){
    requestAnimationFrame(updateCircle);
    context.clearRect(0, 0, window_width, window_height);
    my_circle1.update();
    my_circle2.update();
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


