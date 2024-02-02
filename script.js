"use strict";

/*===== HOMEWORK 5 =====*/

// ----- 1 ----- //
let link1 = "https://google.com";
let link2 = 'google.com';

// if (link.indexOf('https://') === 0){
//     console.log('Include');
// }else{
//     console.log('Not Include')
// }

function checkLink(){
    if (link1.indexOf('https://') === 0){
        return 'Exist'
    }
    return 'Not Exist'
}

console.log(checkLink(link1)); // Exist
//console.log(checkLink(link2)); // Not Exist


// ----- 2 ----- //
let newDivElement = document.createElement('div');
newDivElement.classList.add('wrapper');


let newImg = document.createElement('img');
newImg.setAttribute('src' , 'https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg');
newImg.setAttribute('alt', 'image');
newImg.style.width = '500px';

let newHeader = document.createElement('h2');
newHeader.classList.add('title');
newHeader.textContent = 'Javascript';
newHeader.style.fontSize = '30px';
newHeader.style.color = 'red';


newDivElement.appendChild(newImg);
newDivElement.appendChild(newHeader);
document.getElementById("test").appendChild(newDivElement);


// ----- 3 ----- //
let newParagraph = document.querySelectorAll(".box");

newParagraph.forEach(function (item) {

  let p = document.createElement("p");
  p.classList.add('text')
  p.textContent = "Hello";

  item.appendChild(p);
});


// ----- 4 ----- //
let array6 = [-1, -2, -3, 4].some((number) => number => 0);

console.log(array6);


// ----- 5 & 6 ----- //
let newString = '12345'.split('').reduce(function(sum, number) {
    return sum + Number(number);
}, 0);

console.log(newString)

///////////////////////////////////////////////////////////////////