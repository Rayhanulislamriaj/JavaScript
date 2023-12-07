const display = document.getElementById("demo");

function getLocation(){
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        display.innerHTML = "Geolocation is not supported on this browser";
    }
}

function showPosition(position) {
    display.innerHTML = "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude +
    "<br>heading: " + position.coords.heading +
    "<br>timestamp: " + position.timestamp +
    "<br>accuracy: " + position.coords.accuracy;
}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
           display.innerHTML = "User denied the request Geolocation";
           break;
        case error.POSITION_UNAVAILABLE:
           display.innerHTML = "Location unavailable";
           break;
        case error.TIMEOUT:
           display.innerHTML = "Request timed out";
           break;
        case error.UNKNOWN_ERROR:
           display.innerHTML = "Unknown error";
           break;
        
    }
}