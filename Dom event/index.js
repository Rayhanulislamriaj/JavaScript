myVar = document.querySelector("p");

myVar.addEventListener("mouseover", function(){
    myVar.classList.add("para-style");
});

myVar.addEventListener("mouseout", function(){
    myVar.classList.remove("para-style");
});