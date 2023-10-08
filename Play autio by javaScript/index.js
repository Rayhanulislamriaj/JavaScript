var len = document.querySelectorAll("button").length;


for(var i=0; i < len; i++){
    document.querySelectorAll(".my-button")[i].addEventListener("click", function(){
        var text = this.innerHTML;
        console.log(text);
        audioPlay(text);
    });

    function audioPlay(text){
        switch(text){
            case "A":
            var audio = new Audio("sounds/1.mp3");
            audio.play();
            break;
             case "B":
            var audio = new Audio("sounds/2.mp3");
            audio.play();
            break;
             case "C":
            var audio = new Audio("sounds/3.mp3");
            audio.play();
            break;
        }
    };
}