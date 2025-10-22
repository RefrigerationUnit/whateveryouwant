// getting the unordered list element
let ul = document.querySelector('ul');

// creating a new list item element
let listItem = document.createElement('li');


// add text to the list imte
listItem.textContent = 'This is a new list item!';

//setting the styles by adding a class
listItem.classList.add('list-item');

// add to DOM
ul.appendChild(listItem);