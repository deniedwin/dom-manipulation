// your JavaScript file
const container = document.querySelector("#container"); //reference to container that already exists
const content = document.createElement("div"); //create a new div and store it to content
content.classList.add("content"); //add class "content" to the list
content.textContent = "This is the glorious text-content!"; //add text to class "content"
container.appendChild(content); //append/attach this class to container

//create a paragraph with red text
const para = document.createElement("p");
para.classList.add("para");
para.textContent = "hey I'm red!";
para.style.color = "red";
container.appendChild(para);

//create a h3 with blue text
const head3 = document.createElement("h3");
head3.classList.add("head3");
head3.textContent = "I'm a blue h3!";
head3.style.color = "blue";
container.appendChild(head3);

//create a div with h1 and p inside it
const twoContent = document.createElement("div");
twoContent.classList.add("twoContent");
twoContent.style.borderStyle = "solid";
twoContent.style.borderColor = "black";
twoContent.style.backgroundColor = "pink";
container.appendChild(twoContent);

//create h1 and p
// const container2 = document.querySelector("#twoContent");
const head1 = document.createElement("h1");
head1.classList.add("head1");
head1.textContent = "inside a div";
twoContent.appendChild(head1);

const para2 = document.createElement("p");
para2.classList.add("para2");
para2.textContent = "this one as well";
twoContent.appendChild(para2);

// //button
// //method 1 is in html file index.html

// //method 2
// const btn2 = document.querySelector("#btn2");
// btn2.onclick = () => alert("Hello World 2");

// //method 3
// const btn3 = document.querySelector("#btn3");
// btn3.addEventListener("click", () => {
//   alert("Hello World 3");
// });


// //how to add multiple iterations of functions as js to the html
// function alertFunction() {
//     alert("YAY! YOU DID IT!");
// }
// const btn = document.querySelector("#btn");

// btn.addEventListener("click", alertFunction);

// btn.addEventListener("click", function (e) {
//     console.log(e);
// });

// btn.addEventListener("click", function (e) {
//     console.log(e.target);
// });

// btn.addEventListener("click", function (e) {
//     e.target.style.background = "blue";
// });


//how to add mutiple buttons to the DOM
// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    alert(button.id);
  });
});

  
  


