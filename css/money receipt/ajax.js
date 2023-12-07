// function loadDoc() {
//     const xhr = new XMLHttpRequest();

//     xhr.onload = function() {
//         document.getElementById("demo").innerHTML = this.responseText;
//     }

//     xhr.open('Get', 'fetch_demo.txt', true);
//     xhr.send();
// }



// loadDoc("url-1", myFunction1);
// loadDoc("url-2", myFunction2);


// function loadDoc(url, cFunction){
//     const xhr = new XMLHttpRequest();

//     xhr.onload = function(){
//         cFunction(this);
//     }
//     xhr.open("GET", url);

//     xhr.send();
// }

// function myFunction1(xhr){}
// function myFunction2(xhr){}

const display = document.getElementById("demo");
function loadDoc() {
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if(this.readyState == 4 && this.status == 200){
            display.innerHTML = xhr.responseText;
        }
    };
    xhr.open('GET', 'fetch_demo.txt');
    xhr.send();
}