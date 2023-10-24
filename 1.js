
const elements = document.querySelectorAll('h1');
for (let i = 0; i < elements.length; i++) {
  elements[i].style.backgroundColor = 'red';
}


const para = document.createElement("p");
para.innerText = "This is a paragraph.";

document.body.appendChild(para);

document.getElementById("h1").style.backgroundColor='yellow';
const heading2=document.getElementsByClassName("h2");
for (let i = 0; i < heading2.length; i++) {
    heading2[i].style.backgroundColor = 'blue';
  }