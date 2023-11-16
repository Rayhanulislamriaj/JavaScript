// লুডু খেলায় আমরা কিভাবে  ১ থেকে ৬ সংখ্যা রেন্ডমলি প্রিন্ট করতে পারি

function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min +1) + min);
}
console.log(getRandomNumber(1,6));

// কিভাবে আমরা আমাদের শ্রেণীকক্ষের সকলের নাম Alphabetically সাজাতে পারি?

const students = ["Riaj", "Jadid", "Zawad", "Mahfuz", "Nawaz"];
console.log(students.sort());

// কিভাবে আমরা আমাদের শ্রেণীকক্ষের সকলের ্র রোল ক্রম অনুযায়ী সাজাতে পারি?

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