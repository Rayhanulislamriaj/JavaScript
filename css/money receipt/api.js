const myElement = document.getElementById("demo");

function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        myElement.innerHTML = "Geolocation is not available";
    }
}

function showPosition(position) {
    myElement.innerHTML = "Latitude: " + position.coords.latitude + "<br> Longitude: " + position.coords.longitude + "<br>";
}