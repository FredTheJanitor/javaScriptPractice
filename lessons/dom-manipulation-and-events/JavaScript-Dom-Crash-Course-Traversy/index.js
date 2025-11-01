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

// QuerySelector
// this is like JQuery i guess, but its only for one item (querySelectorAll is for multiple)
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'hello bitch';

// // finding the submit input
// var submit = document.querySelector('input[type="submit"]');
// submit.value="SEND";

// var item = document.querySelector('.list-group-item');
// item.style.color="red";

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color="blue";

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color="grey";

// QuerySelectorAll

// var titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent = 'Hello';

// var odd = document.querySelectorAll('li:nth-child(odd)')
// var even = document.querySelectorAll('li:nth-child(even)')
// for(var i = 0; i < odd.length; i++) {
//     odd[i].style.backgroundColor = '#f4f4f4';
//     even[i].style.backgroundColor = 'rgba(175, 175, 175, 1)';
// }

// TRAVERSING THE DOM

// // parent nodes:
var itemList = document.querySelector('#items');
// // parentNode property:
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

// // parentElement property: basically the same in most cases

// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

// childNodes
// console.log(itemList.childNodes);
// produces nodelist of different list items, 0 index is text node (whitespace)
// this is because there are linebreaks. which is a PAIN so fuck childNodes.
// children is way better:

// // .children: html collection, works like a human would want it to lol
// console.log(itemList.children);
// // brackets work with it
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor="yellow";

// // firstChild property works like childNodes believe it or not
// // so it kinda sucks, it logs line breaks and text nodes and shit
// console.log(itemList.firstChild);

// // firstElementChild is the one that works like you'd expect

// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent="hello bitch";

// lastChild property works like childNodes believe it or not
// so it kinda sucks, it logs line breaks and text nodes and shit
// console.log(itemList.lastChild);

// // firstElementChild is the one that works like you'd expect

// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent="hello bitch";

// siblings

// nextSibling (suuuucks it does the text nodes)

console.log(itemList.nextSibling);

// nextElementSibiling way better fuck them nodes my guy

// null because there are none lol.
console.log(itemList.nextElementSibling);
// I added a span and now it will show span