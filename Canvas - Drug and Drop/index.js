let canvas = document.getElementById('canvas');
let context = canvas.getContext("2d");

var window_height = window.innerHeight - 30;
var window_width = window.innerWidth - 10;

canvas.width = window_width;
canvas.height = window_height;

canvas.style.border = "5px solid red";
// canvas.style.background = "#ffB";

let canvas_width = canvas.width;
let canvas_height = canvas.height;
let offset_x;
let offset_y;

let get_offset = function() {
    let canvas_offsets = canvas.getBoundingClientRect();
    offset_x = canvas_offsets.left;
    offset_y = canvas_offsets.top;
}

get_offset();
window.onscroll = function() { get_offset(); }
window.onresize = function() { get_offset(); }
canvas.onresize = function() { get_offset(); }

let shapes = [];
let current_shape_index = null;
let is_dragging = false;
let startX;
let startY;

shapes.push({x: 200, y: 50, width: 200, height: 200,color: 'red'});
// shapes.push({x: 10, y: 10, width: 100, height: 100,color: 'blue'});


let is_mouse_in_shape = function(x ,y, shape){
    let shape_left = shape.x;
    let shape_right = shape.x + shape.width;
    let shape_top = shape.y;
    let shape_bottom = shape.y + shape.height;

    if(x > shape_left && x < shape_right && y > shape_top && y < shape_bottom){
        return true;
    }
    return false;
}
let mouse_up = function(e) {
    if(!is_dragging) {
        return;
    }
    e.preventDefault();
    is_dragging = false;
}
let mouse_out = function(e) {
    if(!is_dragging) {
        return;
    }
    e.preventDefault();
    is_dragging = false;
}


let mouse_down = function(e){
    e.preventDefault();
    
    let startX = parseInt(e.clientX - offset_x);
    let startY = parseInt(e.clientY - offset_y);

    let index = 0;
    for (let shape of shapes){
        if(is_mouse_in_shape(startX, startY, shape)){
            current_shape_index = index;
            is_dragging = true;
            return;
        }
        index++;
    }
}

let mouse_move = function (e) {
    if(!is_dragging) {
        return;
    } else {
        e.preventDefault();
        let mouseX = parseInt(e.clientX  - offset_x);
        let mouseY = parseInt(e.clientY  - offset_y);

        let dx = mouseX - startX;
        let dy = mouseY - startY;

        let current_shape = shapes[current_shape_index];
        current_shape.x += dx;
        current_shape.y += dy;

        draw_shapes();

        startX = mouseX;
        startY = mouseY;
    }
}

canvas.onmousedown = mouse_down;
canvas.onmouseup = mouse_up;
canvas.onmouseout = mouse_out;
canvas.onmousemove = mouse_move;


let draw_shapes = function () {
    context.clearRect(0, 0, canvas_width, canvas_height);
    for(let shape of shapes) {
        context.fillStyle = shape.color;
        context.fillRect(shape.x, shape.y, shape.width, shape.height);
    }
}




draw_shapes();
