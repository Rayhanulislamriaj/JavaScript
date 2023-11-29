const para = document.createElement('p');
const node = document.createTextNode('This is new');

para.appendChild( node );

const div = document.getElementById("div1");
const p2 = document.getElementById("p2");

div.replaceChild(para, p2);

const myCollection = document.getElementsByTagName("p");
for (let i = 0; i < myCollection.length; i++) {
  myCollection[i].style.color = "red";
}