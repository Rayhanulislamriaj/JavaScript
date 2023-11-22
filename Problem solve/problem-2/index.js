// নিচের sentence এ "riaj" শব্দটি কয়বার বযবহার হয়েছে? প্রথমবার "riaj" কত নাম্বার পজিশনে পাওয়া গেছে?

const sentence = "Lorem Ipsum is RIAJ dummy text of the printing and typesetting industry. Lorem Ipsum has been riaj industry's riaj dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. riaj has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

let matches = sentence.match(/riaj/gi);
let occurrences = matches ? matches.length : 0;


console.log(occurrences);

let position = sentence.search(/riajs/i);
position = position >= 0 ? position : "Not found!";
console.log(position);





// input: linearSearch(['a','b','c','d','c'], 'c)
// output: 2 or 'Not found!';
// problem: implemnt this linearSearch() function

function linearSearch(arr, value){
    const length = arr.length;

    for(var i = 0; i < length; i++){
        if(arr[i] === value){
            return i;
        }
    }
    return 'Not found!';
}

console.log(linearSearch(['a','b','c','d','c'], 'c'));


// How to find Longest String number in a array and show its index number

 function longestString(names){
    let longestWord = '';

    for(name of names){
        if(name.length > longestWord.length){
            longestWord = name;
        }
    }
    return [longestWord, names.indexOf(longestWord)];
 }

 console.log(longestString(['Screaming Hairy Armadillo','Ruby-throated Hummingbird','The Pleasing Fungus Beetle','Madagascar Hissing Cockroach','The Eastern Diamondback Rattlesnake']));

 // ১-১০০ পর্যন্ত কোন সংখ্যা গুলো ৩, ৫, এবং ৩ ও ৫ উভয় সংখ্যা দ্বারা বিভাজ্য তা বের কর।

 function fizzBuzz(number){
    for( let i = 1; i <= number; i++ ){
        if( i % 15 === 0){
            console.log(`${i} is FizzBuzz.`);
        } else if( i % 3 === 0){
            console.log(`${i} is Fizz.`);
        } else if( i % 5 === 0){
            console.log(`${i} is Buzz.`);
        } else {
            console.log(i);
        }
    }
 }

 fizzBuzz(100);

 // Find falsy Value from this array

 const mixedArray = [
    "MD Rayhanul Island",
    undefined,
    '',
    "riaj",
    "false",
    false,
    NaN,
    true,
    40
 ];

 const trueArry = mixedArray.filter(function (el) {
    if(el){
        return true;
    } else {
        return false;
    }
 });

// const trueArry = mixedArray.filter(Boolean); //Alternative system
 console.log(trueArry);



  // Find falsy Value from this object

  const obj = {
    a: "MD Rayhanul Island",
    b: undefined,
    c: '',
    d: "riaj",
    e: "false",
    f: false,
    g: NaN,
    h: true,
    i: 40
  };

  const trueObject = function(obj){
    for(let i in obj){
        if(!obj[i]) {
            delete obj[i];
        }
    }
    return obj;
  };

  console.log(trueObject(obj));