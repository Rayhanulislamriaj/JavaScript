// লুডু খেলায় আমরা কিভাবে  ১ থেকে ৬ সংখ্যা রেন্ডমলি প্রিন্ট করতে পারি

function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min +1) + min);
}
console.log(getRandomNumber(1,6));

// কিভাবে আমরা আমাদের শ্রেণীকক্ষের সকলের নাম Alphabetically সাজাতে পারি?

const students = ["Riaj", "Jadid", "Zawad", "Mahfuz", "Nawaz"];
console.log(students.sort());

// কিভাবে আমরা আমাদের শ্রেণীকক্ষের সকলের রোল ক্রম অনুযায়ী সাজাতে পারি?

const studentRolls = [2,3,4,12,5,89,67];

function getStudentRolls(a, b){
    return a - b;
}

const roll = studentRolls.sort(getStudentRolls);
console.log(roll);

//Leap Year

function isLeapYear(year){
    if((year % 400 === 0) || ((year % 4 === 0) && (year % 100 != 0))){
       console.log(`${year} is Leap year`);
    } else {
        console.log(`${year} is not Leap year`);
    }
}

isLeapYear(2029);


<<<<<<< HEAD
// কোনো Sentence এ কতগুলো vowel আছে তা নির্ণয় করা যায়?
let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

function countVowels(sentence){
    let count = 0;
    const letters = Array.from(sentence);

    letters.forEach(function(value){
        if(vowels.includes(value)){
            count++;
        }
    });
    return count;
}

console.log(countVowels("I love Bangladesh"));


// কোন Array থেকে duplicate নাম্বার গুলোকে কিভাবে বের করে আনতে পারি?

const numbers = [1, 2, 3, 3, 4, 5, 4, 2, 5, 6, 7, 8];

let duplicate = numbers.filter(function(value, index, array){
    return array.indexOf(value) !== index;
});

console.log(duplicate);
=======
//New One
>>>>>>> 8630a34e992ae9b0eb6dc834990d2db7cca4ad6c
