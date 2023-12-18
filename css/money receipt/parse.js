const myobj = '{"name":"John", "age":30, "city":"New York"}';

console.log(myobj);
console.log(JSON.parse(myobj));

const text = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
const obj = JSON.parse(text, function (key, value){
    if(key === 'birth') {
        return new Date(value);
    } else {
        return value;
    }
});

// obj.birth = new Date(obj.birth);


console.log(obj);