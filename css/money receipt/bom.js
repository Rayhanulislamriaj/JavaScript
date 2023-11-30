const width = document.getElementById('width');
const height = document.getElementById('height');

let myopenWindow;
const open = document.getElementById('open');
const close = document.getElementById('close');

width.innerHTML = window.innerWidth;
height.innerHTML = window.innerHeight;

function openWindow(){
    myopenWindow = window.open('https://www.google.com/');
}
function closeWindow(){
    myopenWindow.close();
}