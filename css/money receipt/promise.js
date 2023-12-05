// let file = "http://127.0.0.1:5501/fetch_demo.txt";

// fetch(file)
// .then(x => x.text())
// .then(y => document.getElementById("demo").innerHTML = y);

// getText("http://127.0.0.1:5501/fetch_demo.txt");

// async function getText(file) {
//     let x = await fetch(file);
//     let y = await x.text();
//     document.getElementById("demo").innerHTML = y;
// }

getText("http://127.0.0.1:5501/fetch_demo.txt");

async function getText(file) {
    let x = await fetch(file);
    let y = await x.text();
    document.getElementById("demo").innerHTML = y;
}