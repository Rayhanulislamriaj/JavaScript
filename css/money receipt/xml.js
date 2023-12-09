function sendRequest(method, url, data) {
    const promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.onload = function () {
            resolve(this.response);
        };
        xhr.onerror = function () {
            reject("There was an error loading!");
        };

        xhr.open(method, url);

        xhr.responseType = "json";

        xhr.send(data);
    });
    return promise;
}


function getData () {
    sendRequest('GET', 'https://jsonplaceholder.typicode.com/todos/1')
    .then((responseData) => {
        if(this.status >= 400){
            reject(`There was an Application error 
            and the response status is ${this.status}
             and Text is ${this.statusText}`);
        } else {
            console.log(responseData);
        }
    })
    .catch((err) => {
        console.log(err);
    });
}
function sendData () {
    sendRequest('POST', 'https://jsonplaceholder.typicode.com/posts',
        JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        })
      ).then((responseData) => {
        console.log(responseData);
    })
    .catch((err) => {
        console.log(err);
    });
}

const getButton = document.getElementById("get");
const sendButton = document.getElementById("send");

getButton.addEventListener("click", getData);
sendButton.addEventListener("click", sendData);