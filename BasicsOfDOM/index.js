const ul = document.querySelector('#showList');
const li = document.createElement('li');
//ul.append(li);
//li.innerText = "Learning DOM";

//adding Elements






// //modifying  the text
// const firstItem = document.querySelector('.list-item');
// console.log(firstItem.innerText);
// console.log(firstItem.textContent);
// console.log(firstItem.innerHTML)


// li.setAttribute('id', 'input-btn');
// li.removeAttribute('id');


// const getattri = document.querySelector('.todo');
// console.log(getattri.getAttribute('id'));


// li.classList.add('todo');
// // li.classList.remove('todo');


// console.log(li.classList.contains('todo'));

// //to remove a element

// li.remove();



//Traversing a DOM


//Parent node traversal

// console.log(ul.parentNode);
// console.log(ul.parentElement);

// const html = document.documentElement;
// console.log(html.parentNode);
// console.log(html.parentElement);


//Child Node traversal

// console.log(ul.childNodes);
// console.log(ul.firstChild);
// console.log(ul.lastChild);

// console.log(ul.children);
// console.log(ul.firstElementChild);
// console.log(ul.lastElementChild);



//Sibling Node traversal


// console.log(ul.previousSibling);
// console.log(ul.nextSibling);

// console.log(ul.previousElementSibling);
// console.log(ul.nextElementSibling);

// const div = document.querySelector('#showList');
// console.log(div.childNodes);

// const btn = document.querySelector('#input-btn');
// console.log(btn);

// btn.addEventListener("click", alertbtn = () => {
//     alert("i love milf boobs");
// });

// btn.addEventListener("mouseover", changebg = () => {
//     btn.style.backgroundColor = 'blue';
// });


// const hidden = document.querySelector('.hiddenContent');
// function reveal() {
//     if (hidden.classList.contains('btn')) {
//         hidden.classList.remove('btn');
//     }
//     else {
//         hidden.classList.add('btn');
//     }
// }

// btn.addEventListener("click", reveal);

// const delListItem = document.querySelector('#list-item1');

// ul.removeChild(delListItem);


document.querySelector('#showList').addEventListener('click', function (e) {

    const temp = e.target.getAttribute('id');
    const li = document.getElementById(`#${temp}`);
    const target = e.target;
    if (target.matches('li')) {
        target.remove(li);
    }
})



const list = document.querySelector('#showList');
const newItem = document.createElement('li');

newItem.innerText = "ritesh loves to ";
newItem.setAttribute('id', 'milf lover');
//console.log(newItem.getAttribute('id'));

list.appendChild(newItem);

