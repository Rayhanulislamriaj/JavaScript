// const input = document.querySelector("input");
// input.addEventListener("change", changeHandler);

// function changeHandler(e) {

//     console.log("change");
// }

// const programs = document.querySelectorAll('input[name=program]');
// console.log(programs);

// Array.from(programs).map((program) => {
//     program.addEventListener("change", programHandler)
// });


// function programHandler (e){
//     if(e.target.checked){
//         console.log(e.target.value);
//     }
// }

// const department = document.querySelector("#department");


// department.addEventListener('change', hendleDepartment);

// function hendleDepartment(e){
//     console.log(e.target.value);
// }

const yourself = document.querySelector("#yourself");


yourself.addEventListener('change', textHandller);

function textHandller(e){
    console.log(e.target.value);
};
