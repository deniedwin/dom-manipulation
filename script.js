// your JavaScript file
const container = document.querySelector("#container"); //reference to container that already exists
const content = document.createElement("div"); //create a new div and store it to content
content.classList.add("content"); //add class "content"
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