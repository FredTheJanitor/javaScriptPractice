// Examine document object

// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title = "Item Lister";
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// bad way to select stuff because if anything gets
// added or subtracted index changes
// document.all[10].textContent = 'Hello';
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);

// Selectors 

// Get Element by ID
// console.log(document.getElementById('header-title'))
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = 'whaddap';
// console.log(headerTitle.innerText);
// console.log(headerTitle.textContent);
// headerTitle.innerHTML = '<h3>Hello</h3>';
// header.style.borderBottom = 'solid 3px #000';

// // Get elementSSSSS by class name

// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent= 'hello 2';
// items[1].style.fontWeight= 'bold';
// items[1].style.backgroundColor = 'yellow';

// // this gives an error because
// // items is an HTMLCollections (kinda like a node list)
// // each item has to be affected individually so great for loop opp
// // items.style.backgroundColor = '#f4f4f4';

// for(i=0;i<items.length;i++) {
//     items[i].style.backgroundColor= '#f4f4f4'
// }

// // get elements by tag name

// // same thing just with html tag name in this case 'li' for list items
// var items = document.getElementsByTagName('li');
// console.log(items);
// console.log(items[1]);
// items[1].textContent= 'hello 2';
// items[1].style.fontWeight= 'bold';
// items[1].style.backgroundColor = 'yellow';

// // this gives an error because
// // items is an HTMLCollections (kinda like a node list)
// // each item has to be affected individually so great for loop opp
// // items.style.backgroundColor = '#f4f4f4';

// for(i=0;i<items.length;i++) {
//     items[i].style.backgroundColor= '#f4f4f4'
// }