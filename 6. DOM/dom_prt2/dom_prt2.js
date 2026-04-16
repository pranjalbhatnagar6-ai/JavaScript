// Attribution(Attribute)
    // getAttribute(attr) // to get the attribute value

// let div = document.querySelector("div");
// console.dir(div);
// console.log(div);

// let id = div.getAttribute("id");
// console.log(id);
// getAttribute se id get ki value means id

// let para = document.querySelector("p");
// console.log(para.getAttribute("class"));

// setAttribute(attr, value) //to set the attribution.
// let para = document.querySelector("p");
// console.log(para.setAttribute("class", "newclass"));

//STYLE

// let div = document.querySelector("div");
// div.style.backgroundColor = "green";
// div.style.backgroundColor = "purple";
// div.style.fontSize = "26px";
// div.innerText = "Hello";
// div.style.visibility = "hidden";

// Create ELEMENT 
// let newBtn = document.createElement("button");
// newBtn.innerText = "click me!";

// Insert Elements
// let div = document.querySelector("div");
// div.append(newBtn);
// div.prepend(newBtn);
// div.after(newBtn);
// div.before(newBtn);


//adding heading after
// let newHeading = document.createElement("h1"); 
// newHeading.innerHTML = "<i>Hi, i am kevaan</i>";
// To Add on 
// document.querySelector("body").prepend(newHeading);

// let para = document.querySelector("p");
// para.remove();

//PRACTICE
//Q.1.

let newBtn = document.createElement("button");
newBtn.innerText = "clickme !";
let div = document.querySelector("div");
div.before(newBtn);
newBtn.style.color = "white";
newBtn.style.backgroundColor = "red";
