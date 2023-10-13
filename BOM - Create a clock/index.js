var save = document.querySelector('.save-btn');
var message = document.querySelector('.message');

save.addEventListener('click', startClock);

function startClock(){
    let date = new Date();

    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    m = formatTime(m);
    s = formatTime(s);

    let time = h + ":" + m + ":" + s;
    
    
    message.textContent = time;

    setInterval(startClock, 1000);
}

function formatTime (value){
    if(value < 10){
        value = "0" + value;
    }
    return value;
}