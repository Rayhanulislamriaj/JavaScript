console.clear();
const div = document.querySelector("div");


div.addEventListener('click', function (){
    console.log('click');
});
div.addEventListener("mousedown", function (){
    console.log('mousedown');
});
div.addEventListener("mousemove", function (){
    console.log("mousemove");
});